import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useCompany } from '@/contexts/CompanyContext';
import { useTrainingTimer } from '@/hooks/useTrainingTimer';
import { useCurrentTrainingPhase } from '@/hooks/useCurrentTrainingPhase';

/** Pages where time counts as training: the manual (chapters, dashboard, simulations) and the final exam. */
const TRAINING_PATHS = ['/', '/final-exam'];

/**
 * Invisible app-wide tracker: records study time for every approved, signed-in learner
 * while a training page is open and visible; pauses on other pages, hidden tabs and closing.
 */
export function TrainingTimeAutoTracker() {
  const { user } = useAuth();
  const { isPendingApproval, loading: companyLoading } = useCompany();
  const { pathname } = useLocation();
  const currentPhase = useCurrentTrainingPhase();
  const timer = useTrainingTimer({ autoTrack: true });
  // Wait until the user's approval status is known, so pending users never start a timer.
  const shouldTrack = !!user && !companyLoading && !isPendingApproval && TRAINING_PATHS.includes(pathname);

  // Latest values in refs so the effects below fire only on real transitions
  // (page change, load finished, tab return) — not on every timer tick, which
  // would override a manual pause.
  const latest = useRef({ timer, currentPhase });
  latest.current = { timer, currentPhase };

  useEffect(() => {
    if (timer.isLoading) return;
    const { timer: t, currentPhase: phase } = latest.current;
    if (shouldTrack) {
      if (document.visibilityState === 'visible' && !t.isAnyTimerRunning()) t.startTraining(phase);
    } else if (t.isAnyTimerRunning()) {
      t.pauseTraining();
    }
  }, [shouldTrack, timer.isLoading, user?.id]);

  useEffect(() => {
    if (!shouldTrack) return;
    const onVisibility = () => {
      const { timer: t, currentPhase: phase } = latest.current;
      if (document.visibilityState !== 'visible' || t.isLoading) return;
      if (!t.isAnyTimerRunning()) t.startTraining(phase);
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [shouldTrack]);

  return null;
}
