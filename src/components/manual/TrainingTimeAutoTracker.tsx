import { useEffect, useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useTrainingTimer } from '@/hooks/useTrainingTimer';
import { useCurrentTrainingPhase } from '@/hooks/useCurrentTrainingPhase';

/**
 * Invisible tracker mounted once in the manual: records study time automatically
 * while the learner has the app open, pauses when the tab is hidden, resumes on return.
 */
export function TrainingTimeAutoTracker() {
  const { user } = useAuth();
  const currentPhase = useCurrentTrainingPhase();
  const { startTraining, isAnyTimerRunning, isLoading } = useTrainingTimer({ autoTrack: true });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!user || isLoading || startedRef.current) return;
    startedRef.current = true;
    if (document.visibilityState === 'visible' && !isAnyTimerRunning()) {
      startTraining(currentPhase);
    }
  }, [user, isLoading, currentPhase, isAnyTimerRunning, startTraining]);

  useEffect(() => {
    if (!user) return;
    const onVisibility = () => {
      if (document.visibilityState !== 'visible' || isLoading) return;
      if (!isAnyTimerRunning()) startTraining(currentPhase);
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [user, isLoading, currentPhase, isAnyTimerRunning, startTraining]);

  return null;
}
