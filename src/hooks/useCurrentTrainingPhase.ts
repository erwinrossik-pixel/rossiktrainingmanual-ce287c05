import { useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useChapterProgress } from '@/hooks/useChapterProgress';
import { useProgressContext } from '@/contexts/ProgressContext';
import { TRAINING_PHASES, getChapterIdByNumber, type PhaseInfo } from '@/data/chaptersConfig';

/** Returns the training phase (1-5) the learner is currently working in. */
export function useCurrentTrainingPhase(): number {
  const { user } = useAuth();
  const { getChapterStatus } = useChapterProgress();
  const { progress } = useProgressContext();

  const completedIn = useCallback((phaseInfo: PhaseInfo): number => (
    phaseInfo.chapters.filter((n) => {
      const id = getChapterIdByNumber(n);
      if (!id) return false;
      return user ? getChapterStatus(id) === 'completed' : !!progress.chapters[id]?.completed;
    }).length
  ), [user, getChapterStatus, progress.chapters]);

  const statusOf = (phaseInfo: PhaseInfo): 'completed' | 'in-progress' | 'locked' => {
    const done = completedIn(phaseInfo);
    if (done === phaseInfo.chapters.length) return 'completed';
    if (done > 0 || phaseInfo.phase === 1) return 'in-progress';
    const prev = TRAINING_PHASES[phaseInfo.phase - 2];
    return completedIn(prev) === prev.chapters.length ? 'in-progress' : 'locked';
  };

  for (let i = TRAINING_PHASES.length - 1; i >= 0; i--) {
    const status = statusOf(TRAINING_PHASES[i]);
    if (status === 'in-progress') return TRAINING_PHASES[i].phase;
    if (status === 'completed' && i < TRAINING_PHASES.length - 1
      && statusOf(TRAINING_PHASES[i + 1]) !== 'locked') {
      return TRAINING_PHASES[i + 1].phase;
    }
  }
  return 1;
}
