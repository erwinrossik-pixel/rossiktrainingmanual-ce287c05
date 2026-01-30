import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { logger } from '@/utils/logger';

interface DayTimerData {
  totalSeconds: number;
  lastStartTime: number | null;
  isRunning: boolean;
}

interface TrainingTimerData {
  days: Record<number, DayTimerData>;
  currentActiveDay: number | null;
  trainingStartedAt: string | null;
}

const STORAGE_KEY = 'rossik-training-timer';

const defaultDayData: DayTimerData = {
  totalSeconds: 0,
  lastStartTime: null,
  isRunning: false,
};

const defaultTimerData: TrainingTimerData = {
  days: {
    1: { ...defaultDayData },
    2: { ...defaultDayData },
    3: { ...defaultDayData },
    4: { ...defaultDayData },
    5: { ...defaultDayData },
  },
  currentActiveDay: null,
  trainingStartedAt: null,
};

export function useTrainingTimer() {
  const { user } = useAuth();
  const [timerData, setTimerData] = useState<TrainingTimerData>(defaultTimerData);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);
  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userIdRef = useRef<string | undefined>(undefined);
  const isResettingRef = useRef<boolean>(false); // Flag to prevent sync during reset

  const clearPendingSync = () => {
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
      syncTimeoutRef.current = null;
    }
  };

  // Load data from Supabase or localStorage
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      
      if (user) {
        // Load from Supabase
        const { data, error } = await supabase
          .from('training_time')
          .select('*')
          .eq('user_id', user.id);

        if (!error && data && data.length > 0) {
          const days: Record<number, DayTimerData> = { ...defaultTimerData.days };
          let currentActiveDay: number | null = null;
          let trainingStartedAt: string | null = null;

          data.forEach((row) => {
            days[row.day_number] = {
              totalSeconds: row.total_seconds,
              lastStartTime: row.last_start_time ? new Date(row.last_start_time).getTime() : null,
              isRunning: row.is_running,
            };
            if (row.is_running) {
              currentActiveDay = row.day_number;
            }
            if (row.training_started_at && !trainingStartedAt) {
              trainingStartedAt = row.training_started_at;
            }
          });

          setTimerData({ days, currentActiveDay, trainingStartedAt });
        } else if (!error && (!data || data.length === 0)) {
          // Reset to default if no data found (e.g., after admin reset)
          clearPendingSync();
          setTimerData(defaultTimerData);
          localStorage.removeItem(STORAGE_KEY);
        }
      } else {
        // Load from localStorage
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            setTimerData(parsed);
          } catch (e) {
            logger.error('Failed to parse timer data:', e);
          }
        }
      }
      
      setIsLoading(false);
    };

    loadData();
    userIdRef.current = user?.id;
  }, [user]);

  // Subscribe to realtime changes for authenticated users
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel(`training_time_${user.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'training_time',
          filter: `user_id=eq.${user.id}`,
        },
        async (payload) => {
          logger.training('Training time changed:', payload);
          // Reload data when changes are detected
          if (payload.eventType === 'DELETE') {
            // Immediately block any pending syncs to prevent race condition
            isResettingRef.current = true;
            clearPendingSync();
            
            // Check if there's still data for this user
            const { data } = await supabase
              .from('training_time')
              .select('*')
              .eq('user_id', user.id);
            
            if (!data || data.length === 0) {
              // All records deleted, reset to default immediately
              setTimerData(defaultTimerData);
              localStorage.removeItem(STORAGE_KEY);
              
              // Re-enable syncing after a delay to ensure no pending operations
              setTimeout(() => {
                isResettingRef.current = false;
              }, 1000);
            } else {
              // Still have some data, re-enable syncing
              isResettingRef.current = false;
            }
          } else {
            // Reload all data
            const { data, error } = await supabase
              .from('training_time')
              .select('*')
              .eq('user_id', user.id);

            if (!error && data && data.length > 0) {
              const days: Record<number, DayTimerData> = { ...defaultTimerData.days };
              let currentActiveDay: number | null = null;
              let trainingStartedAt: string | null = null;

              data.forEach((row) => {
                days[row.day_number] = {
                  totalSeconds: row.total_seconds,
                  lastStartTime: row.last_start_time ? new Date(row.last_start_time).getTime() : null,
                  isRunning: row.is_running,
                };
                if (row.is_running) {
                  currentActiveDay = row.day_number;
                }
                if (row.training_started_at && !trainingStartedAt) {
                  trainingStartedAt = row.training_started_at;
                }
              });

              setTimerData({ days, currentActiveDay, trainingStartedAt });
            } else if (!error && (!data || data.length === 0)) {
              clearPendingSync();
              setTimerData(defaultTimerData);
              localStorage.removeItem(STORAGE_KEY);
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  // Update current time every second when any timer is running
  // Use a more efficient approach - only update when needed
  useEffect(() => {
    const hasRunningTimer = Object.values(timerData.days).some(d => d.isRunning);
    
    if (!hasRunningTimer) return;

    // Update less frequently for display purposes
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [timerData.currentActiveDay]); // Only depend on currentActiveDay, not full days object

  // Sync to Supabase (debounced)
  const syncToSupabase = useCallback(async (data: TrainingTimerData) => {
    // Skip sync if user is not authenticated or if a reset is in progress
    if (!user || isResettingRef.current) return;

    // Clear any pending sync
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
      syncTimeoutRef.current = null;
    }

    // Debounce the sync to avoid too many writes
    syncTimeoutRef.current = setTimeout(async () => {
      // Double-check resetting flag inside the timeout as well
      if (isResettingRef.current) return;
      
      for (const [dayNum, dayData] of Object.entries(data.days)) {
        const { error } = await supabase
          .from('training_time')
          .upsert({
            user_id: user.id,
            day_number: parseInt(dayNum),
            total_seconds: dayData.totalSeconds,
            last_start_time: dayData.lastStartTime ? new Date(dayData.lastStartTime).toISOString() : null,
            is_running: dayData.isRunning,
            training_started_at: data.trainingStartedAt,
          }, {
            onConflict: 'user_id,day_number'
          });

        if (error) {
          logger.error('Failed to sync training time:', error);
        }
      }
    }, 500);
  }, [user]);

  // Start training for a specific day
  const startTraining = useCallback((day: number) => {
    const now = Date.now();
    
    setTimerData(prev => {
      // Stop any other running day first
      const updatedDays = { ...prev.days };
      
      Object.keys(updatedDays).forEach(key => {
        const dayNum = parseInt(key);
        if (updatedDays[dayNum].isRunning && updatedDays[dayNum].lastStartTime) {
          const elapsed = Math.floor((now - updatedDays[dayNum].lastStartTime!) / 1000);
          updatedDays[dayNum] = {
            ...updatedDays[dayNum],
            totalSeconds: updatedDays[dayNum].totalSeconds + elapsed,
            lastStartTime: null,
            isRunning: false,
          };
        }
      });

      // Start the specified day
      updatedDays[day] = {
        ...updatedDays[day],
        lastStartTime: now,
        isRunning: true,
      };

      const newData: TrainingTimerData = {
        ...prev,
        days: updatedDays,
        currentActiveDay: day,
        trainingStartedAt: prev.trainingStartedAt || new Date().toISOString(),
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      if (userIdRef.current) {
        syncToSupabase(newData);
      }
      return newData;
    });
  }, [syncToSupabase]);

  // Pause training
  const pauseTraining = useCallback(() => {
    const now = Date.now();
    
    setTimerData(prev => {
      const updatedDays = { ...prev.days };
      
      Object.keys(updatedDays).forEach(key => {
        const dayNum = parseInt(key);
        if (updatedDays[dayNum].isRunning && updatedDays[dayNum].lastStartTime) {
          const elapsed = Math.floor((now - updatedDays[dayNum].lastStartTime!) / 1000);
          updatedDays[dayNum] = {
            ...updatedDays[dayNum],
            totalSeconds: updatedDays[dayNum].totalSeconds + elapsed,
            lastStartTime: null,
            isRunning: false,
          };
        }
      });

      const newData: TrainingTimerData = {
        ...prev,
        days: updatedDays,
        currentActiveDay: null,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      if (userIdRef.current) {
        syncToSupabase(newData);
      }
      return newData;
    });
  }, [syncToSupabase]);

  // Get time for a specific day (including running time)
  const getDayTime = useCallback((day: number): number => {
    const dayData = timerData.days[day];
    if (!dayData) return 0;
    
    let total = dayData.totalSeconds;
    
    if (dayData.isRunning && dayData.lastStartTime) {
      total += Math.floor((currentTime - dayData.lastStartTime) / 1000);
    }
    
    return total;
  }, [timerData.days, currentTime]);

  // Get total time across all days
  const getTotalTime = useCallback((): number => {
    return Object.keys(timerData.days).reduce((acc, key) => {
      return acc + getDayTime(parseInt(key));
    }, 0);
  }, [timerData.days, getDayTime]);

  // Check if any timer is running
  const isAnyTimerRunning = useCallback((): boolean => {
    return Object.values(timerData.days).some(d => d.isRunning);
  }, [timerData.days]);

  // Format seconds to readable time
  const formatTime = useCallback((seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
    }
    return `${minutes}m ${secs.toString().padStart(2, '0')}s`;
  }, []);

  // Reset all timer data
  const resetTimers = useCallback(async () => {
    clearPendingSync();
    localStorage.removeItem(STORAGE_KEY);
    setTimerData(defaultTimerData);
    
    if (user) {
      // Delete all training time records for this user
      await supabase
        .from('training_time')
        .delete()
        .eq('user_id', user.id);
    }
  }, [user]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
    };
  }, []);

  return {
    timerData,
    startTraining,
    pauseTraining,
    getDayTime,
    getTotalTime,
    isAnyTimerRunning,
    formatTime,
    resetTimers,
    currentActiveDay: timerData.currentActiveDay,
    trainingStartedAt: timerData.trainingStartedAt,
    isLoading,
  };
}