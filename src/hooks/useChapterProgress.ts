import { useState, useEffect, useCallback, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface ChapterProgress {
  chapter_id: string;
  status: 'locked' | 'unlocked' | 'in_progress' | 'completed' | 'locked_out';
  best_score: number;
  attempts_count: number;
  completed_at: string | null;
  last_attempt_at: string | null;
  is_locked_out: boolean;
  consecutive_fails: number;
}

const MAX_CONSECUTIVE_FAILS = 3;

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
        const isLockedOut = item.is_locked_out === true;
        progressMap[item.chapter_id] = {
          chapter_id: item.chapter_id,
          status: isLockedOut ? 'locked_out' : (item.status as ChapterProgress['status']),
          best_score: item.best_score || 0,
          attempts_count: item.attempts_count || 0,
          completed_at: item.completed_at,
          last_attempt_at: item.last_attempt_at,
          is_locked_out: isLockedOut,
          consecutive_fails: item.consecutive_fails || 0,
        };
      });

      return progressMap;
    },
    enabled: !!user,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  const progress = progressData || {};

  const isChapterUnlocked = useCallback((chapterId: string, chapterIndex: number, isIntro: boolean): boolean => {
    // Intro chapter is always unlocked
    if (isIntro || chapterIndex === 0) return true;
    
    // If user not logged in, only first chapter is accessible
    if (!user) return chapterIndex === 0;

    // Check if this chapter is locked out due to too many failures
    const chapterProgress = progress[chapterId];
    if (chapterProgress?.is_locked_out) {
      return false; // Locked out - needs admin to unlock
    }

    // Check if this chapter is explicitly unlocked or completed
    if (chapterProgress && (chapterProgress.status === 'unlocked' || 
        chapterProgress.status === 'in_progress' || 
        chapterProgress.status === 'completed')) {
      return true;
    }

    return false;
  }, [user, progress]);

  const isChapterLockedOut = useCallback((chapterId: string): boolean => {
    return progress[chapterId]?.is_locked_out || false;
  }, [progress]);

  const getConsecutiveFails = useCallback((chapterId: string): number => {
    return progress[chapterId]?.consecutive_fails || 0;
  }, [progress]);

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
    const currentConsecutiveFails = currentProgress?.consecutive_fails || 0;

    // Update chapter progress - cap score at 10 (max questions per quiz)
    const cappedScore = Math.min(score, TOTAL_QUESTIONS); // Ensure score never exceeds 10
    const newBestScore = Math.min(Math.max(currentBestScore, cappedScore), TOTAL_QUESTIONS);
    
    // Track consecutive failures
    const newConsecutiveFails = passed ? 0 : currentConsecutiveFails + 1;
    const shouldLockOut = newConsecutiveFails >= MAX_CONSECUTIVE_FAILS;
    
    // Determine new status
    let newStatus: string;
    if (shouldLockOut) {
      newStatus = 'locked_out';
    } else if (passed) {
      newStatus = 'completed';
    } else {
      newStatus = 'in_progress';
    }

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
        consecutive_fails: newConsecutiveFails,
        is_locked_out: shouldLockOut,
        locked_out_at: shouldLockOut ? new Date().toISOString() : null,
      }, {
        onConflict: 'user_id,chapter_id',
      });

    if (progressError) {
      console.error('Error updating progress:', progressError);
      return false;
    }

    // If locked out, don't proceed further
    if (shouldLockOut) {
      console.log(`Chapter ${chapterId} locked out after ${MAX_CONSECUTIVE_FAILS} consecutive failures`);
      queryClient.invalidateQueries({ queryKey: ['chapterProgress', user.id] });
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

    // Invalidate cache to refresh progress
    queryClient.invalidateQueries({ queryKey: ['chapterProgress', user.id] });
    return passed;
  }, [user, progress, queryClient]);

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

    // Get all chapters to find the next one (mindset)
    const { data: chapters } = await supabase
      .from('chapters')
      .select('id, order_index')
      .order('order_index');

    if (chapters) {
      const introIndex = chapters.findIndex(c => c.id === 'intro');
      if (introIndex >= 0 && introIndex < chapters.length - 1) {
        const nextChapter = chapters[introIndex + 1];
        
        // Unlock next chapter
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

    // Invalidate cache to refresh progress
    queryClient.invalidateQueries({ queryKey: ['chapterProgress', user.id] });
    return true;
  }, [user, queryClient]);

  return {
    progress,
    loading,
    isChapterUnlocked,
    isChapterLockedOut,
    getChapterStatus,
    getBestScore,
    getAttemptsCount,
    getConsecutiveFails,
    recordQuizAttempt,
    initializeUserProgress,
    refreshProgress,
    completeIntroChapter,
    PASSING_SCORE,
    TOTAL_QUESTIONS,
    MAX_CONSECUTIVE_FAILS,
  };
}
