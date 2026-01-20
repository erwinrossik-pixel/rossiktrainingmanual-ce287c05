import { useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface QuestionPerformance {
  questionText: string;
  wasCorrect: boolean;
  userAnswerIndex: number | null;
  correctAnswerIndex: number;
}

export function useQuizTracking() {
  const { user } = useAuth();
  const currentSessionId = useRef<string | null>(null);

  // Simple hash function for question text
  const hashQuestion = (text: string): string => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16);
  };

  // Start a new quiz session (called when quiz loads or refreshes)
  const startQuizSession = useCallback(async (
    chapterId: string,
    language: string,
    questionsShown: string[]
  ): Promise<string | null> => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('quiz_sessions')
        .insert({
          user_id: user.id,
          chapter_id: chapterId,
          language,
          questions_shown: questionsShown,
          was_completed: false,
        })
        .select('id')
        .single();

      if (error) {
        console.error('Error starting quiz session:', error);
        return null;
      }

      currentSessionId.current = data.id;
      return data.id;
    } catch (err) {
      console.error('Failed to start quiz session:', err);
      return null;
    }
  }, [user]);

  // Complete a quiz session
  const completeQuizSession = useCallback(async (sessionId?: string) => {
    if (!user) return;

    const id = sessionId || currentSessionId.current;
    if (!id) return;

    try {
      await supabase
        .from('quiz_sessions')
        .update({
          completed_at: new Date().toISOString(),
          was_completed: true,
        })
        .eq('id', id);
    } catch (err) {
      console.error('Failed to complete quiz session:', err);
    }
  }, [user]);

  // Record individual question performance
  const recordQuestionPerformance = useCallback(async (
    chapterId: string,
    language: string,
    attemptId: string | null,
    questions: QuestionPerformance[]
  ) => {
    if (!user || questions.length === 0) return;

    try {
      const records = questions.map(q => ({
        user_id: user.id,
        chapter_id: chapterId,
        question_text: q.questionText,
        question_hash: hashQuestion(q.questionText),
        was_correct: q.wasCorrect,
        user_answer_index: q.userAnswerIndex,
        correct_answer_index: q.correctAnswerIndex,
        language,
        attempt_id: attemptId,
      }));

      const { error } = await supabase
        .from('question_performance')
        .insert(records);

      if (error) {
        console.error('Error recording question performance:', error);
      }
    } catch (err) {
      console.error('Failed to record question performance:', err);
    }
  }, [user]);

  // Get quiz analytics for a chapter
  const getChapterQuizAnalytics = useCallback(async (chapterId: string) => {
    if (!user) return null;

    try {
      // Get session stats (starts vs completions)
      const { data: sessions } = await supabase
        .from('quiz_sessions')
        .select('*')
        .eq('chapter_id', chapterId);

      // Get question performance
      const { data: performance } = await supabase
        .from('question_performance')
        .select('*')
        .eq('chapter_id', chapterId);

      const totalStarts = sessions?.length || 0;
      const completions = sessions?.filter(s => s.was_completed).length || 0;
      const refreshes = totalStarts - completions;

      // Group question failures
      const questionFailures: Record<string, { count: number; text: string }> = {};
      performance?.filter(p => !p.was_correct).forEach(p => {
        const hash = p.question_hash;
        if (!questionFailures[hash]) {
          questionFailures[hash] = { count: 0, text: p.question_text };
        }
        questionFailures[hash].count++;
      });

      return {
        totalStarts,
        completions,
        refreshes,
        refreshRate: totalStarts > 0 ? ((refreshes / totalStarts) * 100).toFixed(1) : 0,
        questionFailures: Object.values(questionFailures)
          .sort((a, b) => b.count - a.count),
        totalQuestionsAnswered: performance?.length || 0,
        correctAnswers: performance?.filter(p => p.was_correct).length || 0,
      };
    } catch (err) {
      console.error('Failed to get chapter quiz analytics:', err);
      return null;
    }
  }, [user]);

  // Get admin-level analytics (all users)
  const getAdminQuizAnalytics = useCallback(async () => {
    try {
      // Get all sessions
      const { data: sessions } = await supabase
        .from('quiz_sessions')
        .select('*, profiles!inner(email, first_name, last_name)')
        .order('started_at', { ascending: false });

      // Get all question performance
      const { data: performance } = await supabase
        .from('question_performance')
        .select('*')
        .eq('was_correct', false);

      // Calculate stats per chapter
      const chapterStats: Record<string, {
        starts: number;
        completions: number;
        refreshes: number;
      }> = {};

      sessions?.forEach(s => {
        if (!chapterStats[s.chapter_id]) {
          chapterStats[s.chapter_id] = { starts: 0, completions: 0, refreshes: 0 };
        }
        chapterStats[s.chapter_id].starts++;
        if (s.was_completed) {
          chapterStats[s.chapter_id].completions++;
        } else {
          chapterStats[s.chapter_id].refreshes++;
        }
      });

      // Calculate most failed questions
      const questionFailures: Record<string, { 
        count: number; 
        text: string; 
        chapterId: string;
      }> = {};

      performance?.forEach(p => {
        const key = `${p.chapter_id}:${p.question_hash}`;
        if (!questionFailures[key]) {
          questionFailures[key] = { 
            count: 0, 
            text: p.question_text,
            chapterId: p.chapter_id,
          };
        }
        questionFailures[key].count++;
      });

      // User stats
      const userStats: Record<string, {
        email: string;
        name: string;
        starts: number;
        completions: number;
      }> = {};

      sessions?.forEach(s => {
        const profile = (s as any).profiles;
        if (!userStats[s.user_id]) {
          userStats[s.user_id] = {
            email: profile?.email || 'Unknown',
            name: `${profile?.first_name || ''} ${profile?.last_name || ''}`.trim() || 'N/A',
            starts: 0,
            completions: 0,
          };
        }
        userStats[s.user_id].starts++;
        if (s.was_completed) {
          userStats[s.user_id].completions++;
        }
      });

      return {
        chapterStats,
        mostFailedQuestions: Object.values(questionFailures)
          .sort((a, b) => b.count - a.count)
          .slice(0, 20),
        userStats: Object.entries(userStats).map(([id, stats]) => ({
          userId: id,
          ...stats,
          refreshes: stats.starts - stats.completions,
        })),
        recentSessions: sessions?.slice(0, 50) || [],
      };
    } catch (err) {
      console.error('Failed to get admin quiz analytics:', err);
      return null;
    }
  }, []);

  return {
    startQuizSession,
    completeQuizSession,
    recordQuestionPerformance,
    getChapterQuizAnalytics,
    getAdminQuizAnalytics,
    currentSessionId: currentSessionId.current,
  };
}
