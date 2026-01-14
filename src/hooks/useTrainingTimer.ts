import { useState, useEffect, useCallback } from 'react';

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

const defaultTimerData: TrainingTimerData = {
  days: {
    1: { totalSeconds: 0, lastStartTime: null, isRunning: false },
    2: { totalSeconds: 0, lastStartTime: null, isRunning: false },
    3: { totalSeconds: 0, lastStartTime: null, isRunning: false },
    4: { totalSeconds: 0, lastStartTime: null, isRunning: false },
    5: { totalSeconds: 0, lastStartTime: null, isRunning: false },
  },
  currentActiveDay: null,
  trainingStartedAt: null,
};

export function useTrainingTimer() {
  const [timerData, setTimerData] = useState<TrainingTimerData>(defaultTimerData);
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Load data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setTimerData(parsed);
      } catch (e) {
        console.error('Failed to parse timer data:', e);
      }
    }
  }, []);

  // Update current time every second when any timer is running
  useEffect(() => {
    const hasRunningTimer = Object.values(timerData.days).some(d => d.isRunning);
    
    if (!hasRunningTimer) return;

    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [timerData.days]);

  // Save to localStorage
  const saveData = useCallback((data: TrainingTimerData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setTimerData(data);
  }, []);

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
      return newData;
    });
  }, []);

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
      return newData;
    });
  }, []);

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
  const resetTimers = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setTimerData(defaultTimerData);
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
  };
}
