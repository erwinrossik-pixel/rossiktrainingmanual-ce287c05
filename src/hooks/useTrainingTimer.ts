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
// While a timer runs, the auto-tracker refreshes last_start_time every HEARTBEAT_MS.
// A "running" row older than STALE_MS was abandoned (crash / closed tab without
// flush): treat it as paused so the time away is never counted as training.
const HEARTBEAT_MS = 60_000;
const STALE_MS = 3 * 60_000;

interface TrainingTimeRow {
  day_number: number;
  total_seconds: number;
  last_start_time: string | null;
  is_running: boolean;
  training_started_at: string | null;
}

export function mapRowsToTimerData(rows: TrainingTimeRow[], now: number): TrainingTimerData {
  const days: Record<number, DayTimerData> = { ...defaultTimerData.days };
  let currentActiveDay: number | null = null;
  let trainingStartedAt: string | null = null;

  rows.forEach((row) => {
    const lastStart = row.last_start_time ? new Date(row.last_start_time).getTime() : null;
    const isFresh = row.is_running && lastStart !== null && now - lastStart <= STALE_MS;
    days[row.day_number] = {
      totalSeconds: row.total_seconds,
      lastStartTime: isFresh ? lastStart : null,
      isRunning: isFresh,
    };
    if (isFresh) currentActiveDay = row.day_number;
    if (row.training_started_at && !trainingStartedAt) {
      trainingStartedAt = row.training_started_at;
    }
  });

  return { days, currentActiveDay, trainingStartedAt };
}

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

interface UseTrainingTimerOptions {
  /** Only the single app-level tracker sets this: it heartbeats and flushes on tab hide. */
  autoTrack?: boolean;
}

export function useTrainingTimer({ autoTrack = false }: UseTrainingTimerOptions = {}) {
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
          setTimerData(mapRowsToTimerData(data, Date.now()));
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
              setTimerData(mapRowsToTimerData(data, Date.now()));
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

  // Auto-tracker: pause and persist the running timer when the tab is hidden
  // or closed, so time away from the app is never counted.
  useEffect(() => {
    if (!user || !autoTrack) return;

    const flushRunningTime = () => {
      const now = Date.now();
      let needsFlush = false;
      const updatedDays = { ...timerData.days };

      Object.keys(updatedDays).forEach(key => {
        const dayNum = parseInt(key);
        const d = updatedDays[dayNum];
        if (d.isRunning && d.lastStartTime) {
          const elapsed = Math.max(0, Math.floor((now - d.lastStartTime) / 1000));
          updatedDays[dayNum] = {
            totalSeconds: d.totalSeconds + elapsed,
            lastStartTime: null,
            isRunning: false,
          };
          needsFlush = true;
          // Fire-and-forget; on unload the browser still sends it
          void supabase.from('training_time').upsert({
            user_id: user.id,
            day_number: dayNum,
            total_seconds: d.totalSeconds + elapsed,
            last_start_time: null,
            is_running: false,
            training_started_at: timerData.trainingStartedAt,
          }, { onConflict: 'user_id,day_number' });
        }
      });

      if (!needsFlush) return;
      clearPendingSync();
      const newData: TrainingTimerData = { ...timerData, days: updatedDays, currentActiveDay: null };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      setTimerData(newData);
    };

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flushRunningTime();
    };

    window.addEventListener('beforeunload', flushRunningTime);
    window.addEventListener('pagehide', flushRunningTime);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('beforeunload', flushRunningTime);
      window.removeEventListener('pagehide', flushRunningTime);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [user, autoTrack, timerData]);

  // Auto-tracker heartbeat: every minute, fold elapsed time into the saved total
  // (computed from the database row so other tabs / a manual pause are respected).
  const isRunningNow = Object.values(timerData.days).some(d => d.isRunning);
  useEffect(() => {
    if (!user || !autoTrack || !isRunningNow) return;

    const beat = async () => {
      if (document.visibilityState !== 'visible' || isResettingRef.current) return;
      const { data, error } = await supabase
        .from('training_time')
        .select('*')
        .eq('user_id', user.id);
      if (error || !data) return;

      const now = Date.now();
      const fresh = mapRowsToTimerData(data, now);
      for (const [key, d] of Object.entries(fresh.days)) {
        if (!d.isRunning || !d.lastStartTime) continue;
        const elapsed = Math.max(0, Math.floor((now - d.lastStartTime) / 1000));
        const updated = { totalSeconds: d.totalSeconds + elapsed, lastStartTime: now, isRunning: true };
        fresh.days[Number(key)] = updated;
        const { error: upsertError } = await supabase.from('training_time').upsert({
          user_id: user.id,
          day_number: Number(key),
          total_seconds: updated.totalSeconds,
          last_start_time: new Date(now).toISOString(),
          is_running: true,
          training_started_at: fresh.trainingStartedAt,
        }, { onConflict: 'user_id,day_number' });
        if (upsertError) logger.error('Training time heartbeat failed:', upsertError);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
      setTimerData(fresh);
    };

    const interval = setInterval(() => { void beat(); }, HEARTBEAT_MS);
    return () => clearInterval(interval);
  }, [user, autoTrack, isRunningNow]);

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