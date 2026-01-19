import { useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { ALL_CHAPTER_IDS } from '@/data/chaptersConfig';

interface ChapterProgress {
  chapter_id: string;
  status: 'locked' | 'unlocked' | 'in_progress' | 'completed';
  best_score: number;
  attempts_count: number;
  completed_at: string | null;
  last_attempt_at: string | null;
}

const PASSING_SCORE = 9;
const TOTAL_QUESTIONS = 10;

export function useChapterProgress() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Use React Query for caching
  const { data: progressData, isLoading: loading } = useQuery({
    queryKey: ['chapterProgress', user?.id],
    queryFn: async () => {
      if (!user) return {};
      
      const { data, error } = await supabase
        .from('chapter_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching progress:', error);
        return {};
      }

      const progressMap: Record<string, ChapterProgress> = {};
      data?.forEach((item) => {
        progressMap[item.chapter_id] = {
          chapter_id: item.chapter_id,
          status: item.status as ChapterProgress['status'],
          best_score: item.best_score || 0,
          attempts_count: item.attempts_count || 0,
          completed_at: item.completed_at,
          last_attempt_at: item.last_attempt_at,
        };
      });

      return progressMap;
    },
    enabled: !!user,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  const progress = progressData || {};

  const unlockChapterIfNeeded = useCallback(async (chapterIdToUnlock: string) => {
    if (!user) return;

    const existing = progress[chapterIdToUnlock];
    if (existing && existing.status !== 'locked') return;

    // 1) If the row exists but is locked, unlock it without touching scores.
    const { error: updateError } = await supabase
      .from('chapter_progress')
      .update({ status: 'unlocked' })
      .eq('user_id', user.id)
      .eq('chapter_id', chapterIdToUnlock)
      .eq('status', 'locked');

    if (updateError) {
      console.error('Error unlocking chapter (update):', updateError);
    }

    // 2) If the row does not exist, create it (no-op if it already exists).
    const { error: insertError } = await supabase
      .from('chapter_progress')
      .upsert(
        { user_id: user.id, chapter_id: chapterIdToUnlock, status: 'unlocked' },
        { onConflict: 'user_id,chapter_id', ignoreDuplicates: true }
      );

    if (insertError) {
      console.error('Error unlocking chapter (insert):', insertError);
    }
  }, [user, progress]);

  const isChapterUnlocked = useCallback((chapterId: string, chapterIndex: number, isIntro: boolean): boolean => {
    // Intro chapter is always unlocked
    if (isIntro || chapterIndex === 0) return true;

    // If user not logged in, only first chapter is accessible
    if (!user) return false;

    // If this chapter already has an explicit non-locked status, it's accessible.
    const chapterStatus = progress[chapterId]?.status;
    if (chapterStatus && chapterStatus !== 'locked') return true;

    // Fallback (important for older users): if the previous chapter is completed,
    // treat this one as unlocked even if a DB row was never created.
    const idx = ALL_CHAPTER_IDS.indexOf(chapterId);
    const prevChapterId = idx > 0
      ? ALL_CHAPTER_IDS[idx - 1]
      : chapterIndex > 0
        ? ALL_CHAPTER_IDS[chapterIndex - 1]
        : undefined;

    if (prevChapterId && progress[prevChapterId]?.status === 'completed') return true;

    return false;
  }, [user, progress]);

  const getChapterStatus = useCallback((chapterId: string): ChapterProgress['status'] => {
    if (chapterId === 'intro') return progress[chapterId]?.status || 'unlocked';

    const direct = progress[chapterId]?.status;
    if (direct) return direct;

    const idx = ALL_CHAPTER_IDS.indexOf(chapterId);
    if (idx === 0) return 'unlocked';
    if (idx > 0) {
      const prevId = ALL_CHAPTER_IDS[idx - 1];
      if (progress[prevId]?.status === 'completed') return 'unlocked';
    }

    return 'locked';
  }, [progress]);

  const getBestScore = useCallback((chapterId: string): number => {
    return progress[chapterId]?.best_score || 0;
  }, [progress]);

  const getAttemptsCount = useCallback((chapterId: string): number => {
    return progress[chapterId]?.attempts_count || 0;
  }, [progress]);

  const recordQuizAttempt = useCallback(async (
    chapterId: string, 
    score: number, 
    language: string,
    questionsAnswered?: object
  ): Promise<boolean> => {
    if (!user) return false;

    const passed = score >= PASSING_SCORE;
    
    // Record the attempt
    const { error: attemptError } = await supabase
      .from('quiz_attempts')
      .insert([{
        user_id: user.id,
        chapter_id: chapterId,
        language,
        score,
        total_questions: TOTAL_QUESTIONS,
        passed,
        questions_answered: questionsAnswered as any,
      }]);

    if (attemptError) {
      console.error('Error recording attempt:', attemptError);
      return false;
    }

    // Get current progress
    const currentProgress = progress[chapterId];
    const currentBestScore = currentProgress?.best_score || 0;
    const currentAttempts = currentProgress?.attempts_count || 0;

    const nowIso = new Date().toISOString();
    const wasCompleted = currentProgress?.status === 'completed';

    // Update chapter progress (never downgrade a completed chapter)
    const newStatus: ChapterProgress['status'] = wasCompleted
      ? 'completed'
      : passed
        ? 'completed'
        : 'in_progress';

    const newBestScore = Math.max(currentBestScore, score);

    const { error: progressError } = await supabase
      .from('chapter_progress')
      .upsert({
        user_id: user.id,
        chapter_id: chapterId,
        status: newStatus,
        best_score: newBestScore,
        attempts_count: currentAttempts + 1,
        completed_at: newStatus === 'completed' ? (currentProgress?.completed_at || nowIso) : null,
        last_attempt_at: nowIso,
      }, {
        onConflict: 'user_id,chapter_id',
      });

    if (progressError) {
      console.error('Error updating progress:', progressError);
      return false;
    }

    // If passed (or was already completed), unlock the next chapter using the frontend chapter order.
    if (passed || wasCompleted) {
      const currentIndex = ALL_CHAPTER_IDS.indexOf(chapterId);
      if (currentIndex >= 0 && currentIndex < ALL_CHAPTER_IDS.length - 1) {
        const nextChapterId = ALL_CHAPTER_IDS[currentIndex + 1];
        await unlockChapterIfNeeded(nextChapterId);
        console.log(`Chapter unlocked: ${nextChapterId} (after completing ${chapterId})`);
      }
    }

    // Invalidate cache to refresh progress
    queryClient.invalidateQueries({ queryKey: ['chapterProgress', user.id] });
    return passed;
  }, [user, progress, queryClient, unlockChapterIfNeeded]);

  const initializeUserProgress = useCallback(async (chapterIds: string[]) => {
    if (!user || chapterIds.length === 0) return;

    // Check if user already has progress
    const { data: existingProgress } = await supabase
      .from('chapter_progress')
      .select('chapter_id')
      .eq('user_id', user.id);

    if (existingProgress && existingProgress.length > 0) {
      // User already has progress, just invalidate to refresh
      queryClient.invalidateQueries({ queryKey: ['chapterProgress', user.id] });
      return;
    }

    // Initialize first chapter as unlocked
    const firstChapterId = chapterIds[0];
    await supabase
      .from('chapter_progress')
      .insert({
        user_id: user.id,
        chapter_id: firstChapterId,
        status: 'unlocked',
      });

    queryClient.invalidateQueries({ queryKey: ['chapterProgress', user.id] });
  }, [user, queryClient]);

  const refreshProgress = useCallback(() => {
    if (user) {
      queryClient.invalidateQueries({ queryKey: ['chapterProgress', user.id] });
    }
  }, [user, queryClient]);

  // Special function to complete intro chapter without quiz
  const completeIntroChapter = useCallback(async (): Promise<boolean> => {
    if (!user) return false;

    const chapterId = 'intro';

    // Mark intro as completed
    const { error: progressError } = await supabase
      .from('chapter_progress')
      .upsert({
        user_id: user.id,
        chapter_id: chapterId,
        status: 'completed',
        best_score: 0,
        attempts_count: 0,
        completed_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id,chapter_id',
      });

    if (progressError) {
      console.error('Error completing intro:', progressError);
      return false;
    }

    // Unlock next chapter using frontend chapter order
    const introIndex = ALL_CHAPTER_IDS.indexOf('intro');
    if (introIndex >= 0 && introIndex < ALL_CHAPTER_IDS.length - 1) {
      const nextChapterId = ALL_CHAPTER_IDS[introIndex + 1];
      await unlockChapterIfNeeded(nextChapterId);
      console.log(`Chapter unlocked: ${nextChapterId} (after completing intro)`);
    }

    // Invalidate cache to refresh progress
    queryClient.invalidateQueries({ queryKey: ['chapterProgress', user.id] });
    return true;
  }, [user, queryClient, unlockChapterIfNeeded]);

  return {
    progress,
    loading,
    isChapterUnlocked,
    getChapterStatus,
    getBestScore,
    getAttemptsCount,
    recordQuizAttempt,
    initializeUserProgress,
    refreshProgress,
    completeIntroChapter,
    PASSING_SCORE,
    TOTAL_QUESTIONS,
  };
}
