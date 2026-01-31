import { useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { logger } from '@/utils/logger';

export interface DifficultyConfig {
  level: number;
  twoOptionQuestions: number; // percentage of questions with only 2 options
  multiCorrectQuestions: number; // percentage of questions requiring 2 correct answers
  stricterPassing: boolean; // require 10/10 for highest difficulty
  description: string;
}

// Define difficulty configurations
const DIFFICULTY_CONFIGS: Record<number, DifficultyConfig> = {
  1: {
    level: 1,
    twoOptionQuestions: 0,
    multiCorrectQuestions: 0,
    stricterPassing: false,
    description: 'Normal - 4 options, 1 correct answer'
  },
  2: {
    level: 2,
    twoOptionQuestions: 30, // 30% of questions have only 2 options (harder to guess)
    multiCorrectQuestions: 0,
    stricterPassing: false,
    description: 'Harder - Some questions have only 2 options'
  },
  3: {
    level: 3,
    twoOptionQuestions: 20,
    multiCorrectQuestions: 30, // 30% require 2 correct answers
    stricterPassing: false,
    description: 'Hard - Some questions require multiple correct answers'
  },
  4: {
    level: 4,
    twoOptionQuestions: 40,
    multiCorrectQuestions: 40,
    stricterPassing: false,
    description: 'Very Hard - Mixed difficulty with multiple answer types'
  },
  5: {
    level: 5,
    twoOptionQuestions: 50,
    multiCorrectQuestions: 50,
    stricterPassing: true, // must score 10/10
    description: 'Expert - Maximum difficulty, requires perfect score'
  }
};

export interface QuizDifficultyData {
  difficulty: number;
  resetCount: number;
  userRestartCount: number;
  config: DifficultyConfig;
}

export function useQuizDifficulty(chapterId?: string) {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch difficulty level for user/chapter
  const { data: difficultyData, isLoading } = useQuery({
    queryKey: ['quizDifficulty', user?.id, chapterId],
    queryFn: async (): Promise<QuizDifficultyData> => {
      if (!user || !chapterId) {
        return { difficulty: 1, resetCount: 0, userRestartCount: 0, config: DIFFICULTY_CONFIGS[1] };
      }

      const { data, error } = await supabase
        .from('chapter_progress')
        .select('difficulty_level, reset_count')
        .eq('user_id', user.id)
        .eq('chapter_id', chapterId)
        .maybeSingle();

      if (error) {
        logger.error('Error fetching difficulty:', error);
        return { difficulty: 1, resetCount: 0, userRestartCount: 0, config: DIFFICULTY_CONFIGS[1] };
      }

      // Also fetch user_restart_count separately since it might be new column
      const { data: restartData } = await supabase
        .from('chapter_progress')
        .select('user_restart_count')
        .eq('user_id', user.id)
        .eq('chapter_id', chapterId)
        .maybeSingle();

      const difficulty = data?.difficulty_level || 1;
      const resetCount = data?.reset_count || 0;
      const userRestartCount = restartData?.user_restart_count || 0;

      return {
        difficulty,
        resetCount,
        userRestartCount,
        config: DIFFICULTY_CONFIGS[Math.min(difficulty, 5)] || DIFFICULTY_CONFIGS[1]
      };
    },
    enabled: !!user && !!chapterId,
    staleTime: 5 * 60 * 1000,
  });

  // Record a user restart and increase difficulty
  const recordUserRestart = useCallback(async (): Promise<{ newDifficulty: number }> => {
    if (!user || !chapterId) {
      return { newDifficulty: 1 };
    }

    try {
      // Get current progress
      const { data: currentProgress } = await supabase
        .from('chapter_progress')
        .select('difficulty_level')
        .eq('user_id', user.id)
        .eq('chapter_id', chapterId)
        .maybeSingle();

      // Get restart count separately
      const { data: restartData } = await supabase
        .from('chapter_progress')
        .select('user_restart_count')
        .eq('user_id', user.id)
        .eq('chapter_id', chapterId)
        .maybeSingle();

      const currentDifficulty = currentProgress?.difficulty_level || 1;
      const currentRestartCount = restartData?.user_restart_count || 0;
      
      // Calculate new difficulty (increase by 1, max 5)
      const newDifficulty = Math.min(currentDifficulty + 1, 5);

      // Update the progress
      const { error } = await supabase
        .from('chapter_progress')
        .upsert({
          user_id: user.id,
          chapter_id: chapterId,
          difficulty_level: newDifficulty,
          user_restart_count: currentRestartCount + 1,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,chapter_id'
        });

      if (error) {
        logger.error('Error recording user restart:', error);
        return { newDifficulty: currentDifficulty };
      }

      // Invalidate cache
      queryClient.invalidateQueries({ queryKey: ['quizDifficulty', user.id, chapterId] });
      queryClient.invalidateQueries({ queryKey: ['chapterProgress', user.id] });

      return { newDifficulty };
    } catch (err) {
      logger.error('Error in recordUserRestart:', err);
      return { newDifficulty: 1 };
    }
  }, [user, chapterId, queryClient]);

  // Apply difficulty transformations to questions
  const applyDifficulty = useCallback((
    questions: Array<{
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }>,
    config: DifficultyConfig
  ) => {
    if (!questions.length || config.level === 1) {
      return questions.map(q => ({
        ...q,
        isMultiCorrect: false,
        correctIndices: [q.correctIndex],
        originalOptions: q.options,
        difficultyModifier: null as string | null
      }));
    }

    return questions.map((q, index) => {
      const seed = index % 100;
      
      // Determine if this question should be modified
      const shouldBeTwoOption = seed < config.twoOptionQuestions;
      const shouldBeMultiCorrect = !shouldBeTwoOption && seed < (config.twoOptionQuestions + config.multiCorrectQuestions);

      if (shouldBeTwoOption) {
        // Convert to 2-option question - keep correct answer and one random wrong answer
        const correctOption = q.options[q.correctIndex];
        const wrongOptions = q.options.filter((_, i) => i !== q.correctIndex);
        const randomWrongIndex = Math.floor((seed * 7) % wrongOptions.length);
        const selectedWrong = wrongOptions[randomWrongIndex];
        
        // Randomize order
        const shouldSwap = seed % 2 === 0;
        const newOptions = shouldSwap 
          ? [selectedWrong, correctOption]
          : [correctOption, selectedWrong];
        const newCorrectIndex = shouldSwap ? 1 : 0;

        return {
          ...q,
          options: newOptions,
          correctIndex: newCorrectIndex,
          isMultiCorrect: false,
          correctIndices: [newCorrectIndex],
          originalOptions: q.options,
          difficultyModifier: 'two_options'
        };
      }

      if (shouldBeMultiCorrect && q.options.length >= 4) {
        // Create a multi-correct question by selecting 2 options as correct
        // We keep original correct + add one "also acceptable" answer
        const correctIndices = [q.correctIndex];
        
        // Find another index to mark as also correct (simulate multiple correct answers)
        let secondCorrect = (q.correctIndex + 2) % q.options.length;
        correctIndices.push(secondCorrect);

        return {
          ...q,
          isMultiCorrect: true,
          correctIndices: correctIndices.sort((a, b) => a - b),
          originalOptions: q.options,
          difficultyModifier: 'multi_correct'
        };
      }

      // Normal question
      return {
        ...q,
        isMultiCorrect: false,
        correctIndices: [q.correctIndex],
        originalOptions: q.options,
        difficultyModifier: null as string | null
      };
    });
  }, []);

  // Get passing score based on difficulty
  const getPassingScore = useCallback((totalQuestions: number, config: DifficultyConfig) => {
    if (config.stricterPassing) {
      return totalQuestions; // Must get all correct for level 5
    }
    return 9; // Default 9/10
  }, []);

  // Refresh difficulty data
  const refreshDifficulty = useCallback(() => {
    if (user && chapterId) {
      queryClient.invalidateQueries({ queryKey: ['quizDifficulty', user.id, chapterId] });
    }
  }, [user, chapterId, queryClient]);

  return {
    difficulty: difficultyData?.difficulty || 1,
    resetCount: difficultyData?.resetCount || 0,
    userRestartCount: difficultyData?.userRestartCount || 0,
    config: difficultyData?.config || DIFFICULTY_CONFIGS[1],
    isLoading,
    applyDifficulty,
    getPassingScore,
    refreshDifficulty,
    recordUserRestart,
    DIFFICULTY_CONFIGS
  };
}

// Admin hook for managing quiz resets
export function useAdminQuizReset() {
  const queryClient = useQueryClient();

  const resetQuiz = useCallback(async (
    userId: string,
    chapterId: string,
    reason?: string
  ): Promise<{ success: boolean; newDifficulty?: number; error?: string }> => {
    try {
      const { data, error } = await supabase.rpc('admin_reset_quiz', {
        p_user_id: userId,
        p_chapter_id: chapterId,
        p_reset_reason: reason || null
      });

      if (error) {
        logger.error('Error resetting quiz:', error);
        return { success: false, error: error.message };
      }

      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['quizDifficulty'] });
      queryClient.invalidateQueries({ queryKey: ['chapterProgress'] });
      queryClient.invalidateQueries({ queryKey: ['quizResetHistory'] });

      const result = data as { new_difficulty?: number } | null;
      return { 
        success: true, 
        newDifficulty: result?.new_difficulty 
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      return { success: false, error: errorMessage };
    }
  }, [queryClient]);

  // Fetch reset history for a user
  const getResetHistory = useCallback(async (userId?: string) => {
    let query = supabase
      .from('quiz_reset_history')
      .select('*')
      .order('reset_at', { ascending: false });

    if (userId) {
      query = query.eq('user_id', userId);
    }

    const { data, error } = await query.limit(100);

    if (error) {
      logger.error('Error fetching reset history:', error);
      return [];
    }

    return data || [];
  }, []);

  // Get all users' reset counts
  const getAllResetCounts = useCallback(async () => {
    const { data, error } = await supabase
      .from('chapter_progress')
      .select('user_id, chapter_id, reset_count, difficulty_level')
      .gt('reset_count', 0)
      .order('reset_count', { ascending: false });

    if (error) {
      logger.error('Error fetching reset counts:', error);
      return [];
    }

    return data || [];
  }, []);

  return {
    resetQuiz,
    getResetHistory,
    getAllResetCounts
  };
}

