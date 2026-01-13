import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

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
  const [progress, setProgress] = useState<Record<string, ChapterProgress>>({});
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setProgress({});
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('chapter_progress')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching progress:', error);
      setLoading(false);
      return;
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

    setProgress(progressMap);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const isChapterUnlocked = useCallback((chapterId: string, chapterIndex: number, isIntro: boolean): boolean => {
    // Intro chapter is always unlocked
    if (isIntro || chapterIndex === 0) return true;
    
    // If user not logged in, only first chapter is accessible
    if (!user) return chapterIndex === 0;

    // Check if this chapter is explicitly unlocked or completed
    const chapterProgress = progress[chapterId];
    if (chapterProgress && (chapterProgress.status === 'unlocked' || 
        chapterProgress.status === 'in_progress' || 
        chapterProgress.status === 'completed')) {
      return true;
    }

    return false;
  }, [user, progress]);

  const getChapterStatus = useCallback((chapterId: string): ChapterProgress['status'] => {
    return progress[chapterId]?.status || 'locked';
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

    // Update chapter progress
    const newStatus = passed ? 'completed' : 'in_progress';
    const newBestScore = Math.max(currentBestScore, score);

    const { error: progressError } = await supabase
      .from('chapter_progress')
      .upsert({
        user_id: user.id,
        chapter_id: chapterId,
        status: newStatus,
        best_score: newBestScore,
        attempts_count: currentAttempts + 1,
        completed_at: passed ? new Date().toISOString() : currentProgress?.completed_at,
        last_attempt_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id,chapter_id',
      });

    if (progressError) {
      console.error('Error updating progress:', progressError);
      return false;
    }

    // If passed, unlock the next chapter
    if (passed) {
      // Get all chapters to find the next one
      const { data: chapters } = await supabase
        .from('chapters')
        .select('id, order_index')
        .order('order_index');

      if (chapters) {
        const currentIndex = chapters.findIndex(c => c.id === chapterId);
        if (currentIndex >= 0 && currentIndex < chapters.length - 1) {
          const nextChapter = chapters[currentIndex + 1];
          
          // Unlock next chapter if not already unlocked
          await supabase
            .from('chapter_progress')
            .upsert({
              user_id: user.id,
              chapter_id: nextChapter.id,
              status: 'unlocked',
              best_score: 0,
              attempts_count: 0,
            }, {
              onConflict: 'user_id,chapter_id',
            });
        }
      }
    }

    // Refresh progress
    await fetchProgress();
    return passed;
  }, [user, progress, fetchProgress]);

  const initializeUserProgress = useCallback(async (chapterIds: string[]) => {
    if (!user || chapterIds.length === 0) return;

    // Check if user already has progress
    const { data: existingProgress } = await supabase
      .from('chapter_progress')
      .select('chapter_id')
      .eq('user_id', user.id);

    if (existingProgress && existingProgress.length > 0) {
      // User already has progress, just fetch it
      await fetchProgress();
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

    await fetchProgress();
  }, [user, fetchProgress]);

  return {
    progress,
    loading,
    isChapterUnlocked,
    getChapterStatus,
    getBestScore,
    getAttemptsCount,
    recordQuizAttempt,
    initializeUserProgress,
    refreshProgress: fetchProgress,
    PASSING_SCORE,
    TOTAL_QUESTIONS,
  };
}