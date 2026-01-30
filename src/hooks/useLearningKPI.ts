import { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { logger } from '@/utils/logger';

// Types for KPI data
export interface ChapterKPI {
  chapterId: string;
  chapterName: string;
  passRate: number;
  avgAttempts: number;
  avgTimeToPassHours: number;
  failureRate: number;
  totalAttempts: number;
  uniqueUsers: number;
  mostFailedQuestions: QuestionFailure[];
}

export interface QuestionFailure {
  questionIndex: number;
  failureRate: number;
  totalAttempts: number;
  correctAttempts: number;
}

export interface UserKPI {
  userId: string;
  userName: string;
  email: string;
  totalProgress: number;
  chaptersCompleted: number;
  totalChapters: number;
  learningVelocity: number; // chapters per week
  avgScore: number;
  problematicChapters: string[];
  scoreEvolution: { date: string; score: number; chapter: string }[];
  totalStudyTimeHours: number;
  efficiency: number;
}

export interface ContentKPI {
  chapterId: string;
  chapterName: string;
  difficulty: 'very_easy' | 'easy' | 'medium' | 'hard' | 'very_hard';
  avgPassRate: number;
  avgAttemptsToPass: number;
  avgTimeToPassHours: number;
  skipRate: number;
  bounceRate: number;
  comprehensionIssues: string[];
  correlationWithUpdates: number;
  needsReview: boolean;
  recommendation: string | null;
}

export interface GlobalKPI {
  totalUsers: number;
  activeUsersLast7Days: number;
  overallPassRate: number;
  avgCompletionTime: number;
  topPerformingChapters: { id: string; name: string; passRate: number }[];
  worstPerformingChapters: { id: string; name: string; passRate: number }[];
  mostFailedQuestions: { chapter: string; question: number; failRate: number }[];
  trendsWeekly: { week: string; attempts: number; passed: number }[];
}

export function useLearningKPI() {
  const { isAdmin } = useAuth();
  const [chapterKPIs, setChapterKPIs] = useState<ChapterKPI[]>([]);
  const [userKPIs, setUserKPIs] = useState<UserKPI[]>([]);
  const [contentKPIs, setContentKPIs] = useState<ContentKPI[]>([]);
  const [globalKPI, setGlobalKPI] = useState<GlobalKPI | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchChapterKPIs = useCallback(async () => {
    try {
      // Fetch all quiz attempts
      const { data: attempts, error: attemptsError } = await supabase
        .from('quiz_attempts')
        .select('*');

      if (attemptsError) throw attemptsError;

      // Fetch all chapters
      const { data: chapters, error: chaptersError } = await supabase
        .from('chapters')
        .select('id, slug, order_index')
        .order('order_index');

      if (chaptersError) throw chaptersError;

      // Fetch chapter progress for time calculations
      const { data: progress, error: progressError } = await supabase
        .from('chapter_progress')
        .select('*');

      if (progressError) throw progressError;

      // Calculate KPIs per chapter
      const kpis: ChapterKPI[] = chapters.map(chapter => {
        const chapterAttempts = attempts?.filter(a => a.chapter_id === chapter.id) || [];
        const passedAttempts = chapterAttempts.filter(a => a.passed);
        const uniqueUserIds = [...new Set(chapterAttempts.map(a => a.user_id))];
        
        // Calculate most failed questions from questions_answered JSON
        const questionFailures: { [key: number]: { correct: number; total: number } } = {};
        
        chapterAttempts.forEach(attempt => {
          if (attempt.questions_answered && typeof attempt.questions_answered === 'object') {
            const qa = attempt.questions_answered as Record<string, { correct: boolean }>;
            Object.entries(qa).forEach(([idx, data]) => {
              const qIdx = parseInt(idx);
              if (!questionFailures[qIdx]) {
                questionFailures[qIdx] = { correct: 0, total: 0 };
              }
              questionFailures[qIdx].total++;
              if (data.correct) questionFailures[qIdx].correct++;
            });
          }
        });

        const mostFailed = Object.entries(questionFailures)
          .map(([idx, data]) => ({
            questionIndex: parseInt(idx),
            failureRate: data.total > 0 ? ((data.total - data.correct) / data.total) * 100 : 0,
            totalAttempts: data.total,
            correctAttempts: data.correct,
          }))
          .filter(q => q.failureRate > 30)
          .sort((a, b) => b.failureRate - a.failureRate)
          .slice(0, 5);

        // Calculate average time to pass
        const chapterProgress = progress?.filter(p => 
          p.chapter_id === chapter.id && p.status === 'completed'
        ) || [];
        
        let avgTimeToPass = 0;
        if (chapterProgress.length > 0) {
          const times = chapterProgress
            .filter(p => p.created_at && p.completed_at)
            .map(p => {
              const start = new Date(p.created_at).getTime();
              const end = new Date(p.completed_at!).getTime();
              return (end - start) / (1000 * 60 * 60); // hours
            });
          avgTimeToPass = times.length > 0 ? times.reduce((a, b) => a + b, 0) / times.length : 0;
        }

        // Calculate average attempts
        const userAttemptCounts = uniqueUserIds.map(userId => 
          chapterAttempts.filter(a => a.user_id === userId).length
        );
        const avgAttempts = userAttemptCounts.length > 0 
          ? userAttemptCounts.reduce((a, b) => a + b, 0) / userAttemptCounts.length 
          : 0;

        return {
          chapterId: chapter.id,
          chapterName: chapter.slug.replace(/-/g, ' '),
          passRate: chapterAttempts.length > 0 
            ? (passedAttempts.length / chapterAttempts.length) * 100 
            : 0,
          avgAttempts,
          avgTimeToPassHours: avgTimeToPass,
          failureRate: chapterAttempts.length > 0 
            ? ((chapterAttempts.length - passedAttempts.length) / chapterAttempts.length) * 100 
            : 0,
          totalAttempts: chapterAttempts.length,
          uniqueUsers: uniqueUserIds.length,
          mostFailedQuestions: mostFailed,
        };
      });

      setChapterKPIs(kpis);
      return kpis;
    } catch (err) {
      logger.error('Error fetching chapter KPIs:', err);
      setError('Failed to fetch chapter KPIs');
      return [];
    }
  }, []);

  const fetchUserKPIs = useCallback(async () => {
    try {
      // Fetch all profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*');

      if (profilesError) throw profilesError;

      // Fetch all chapter progress
      const { data: progress, error: progressError } = await supabase
        .from('chapter_progress')
        .select('*');

      if (progressError) throw progressError;

      // Fetch all quiz attempts
      const { data: attempts, error: attemptsError } = await supabase
        .from('quiz_attempts')
        .select('*')
        .order('created_at', { ascending: true });

      if (attemptsError) throw attemptsError;

      // Fetch training time
      const { data: trainingTime, error: trainingError } = await supabase
        .from('training_time')
        .select('*');

      if (trainingError) throw trainingError;

      // Fetch chapters count
      const { count: totalChapters } = await supabase
        .from('chapters')
        .select('*', { count: 'exact', head: true });

      // Calculate KPIs per user
      const kpis: UserKPI[] = profiles.map(profile => {
        const userProgress = progress?.filter(p => p.user_id === profile.id) || [];
        const userAttempts = attempts?.filter(a => a.user_id === profile.id) || [];
        const userTraining = trainingTime?.filter(t => t.user_id === profile.id) || [];
        
        const completedChapters = userProgress.filter(p => p.status === 'completed').length;
        const scores = userProgress.filter(p => p.best_score && p.best_score > 0).map(p => p.best_score!);
        
        // Find problematic chapters (failed multiple times)
        const chapterAttemptCounts: { [key: string]: { attempts: number; passed: boolean } } = {};
        userAttempts.forEach(attempt => {
          if (!chapterAttemptCounts[attempt.chapter_id]) {
            chapterAttemptCounts[attempt.chapter_id] = { attempts: 0, passed: false };
          }
          chapterAttemptCounts[attempt.chapter_id].attempts++;
          if (attempt.passed) chapterAttemptCounts[attempt.chapter_id].passed = true;
        });
        
        const problematicChapters = Object.entries(chapterAttemptCounts)
          .filter(([_, data]) => data.attempts >= 3 && !data.passed)
          .map(([chapterId]) => chapterId);

        // Score evolution
        const scoreEvolution = userAttempts.map(attempt => ({
          date: new Date(attempt.created_at).toISOString().split('T')[0],
          score: attempt.score,
          chapter: attempt.chapter_id,
        }));

        // Learning velocity (chapters completed per week)
        const firstAttempt = userAttempts[0]?.created_at;
        let learningVelocity = 0;
        if (firstAttempt && completedChapters > 0) {
          const daysSinceStart = (Date.now() - new Date(firstAttempt).getTime()) / (1000 * 60 * 60 * 24);
          const weeksSinceStart = daysSinceStart / 7;
          learningVelocity = weeksSinceStart > 0 ? completedChapters / weeksSinceStart : completedChapters;
        }

        // Total study time
        const totalStudySeconds = userTraining.reduce((sum, t) => sum + (t.total_seconds || 0), 0);
        const totalStudyTimeHours = totalStudySeconds / 3600;

        // Efficiency (progress per hour of study)
        const efficiency = totalStudyTimeHours > 0 
          ? (completedChapters / totalStudyTimeHours) * 100 
          : 0;

        return {
          userId: profile.id,
          userName: `${profile.first_name || ''} ${profile.last_name || ''}`.trim() || 'N/A',
          email: profile.email,
          totalProgress: totalChapters ? (completedChapters / totalChapters) * 100 : 0,
          chaptersCompleted: completedChapters,
          totalChapters: totalChapters || 50,
          learningVelocity,
          avgScore: scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0,
          problematicChapters,
          scoreEvolution,
          totalStudyTimeHours,
          efficiency,
        };
      });

      setUserKPIs(kpis);
      return kpis;
    } catch (err) {
      logger.error('Error fetching user KPIs:', err);
      setError('Failed to fetch user KPIs');
      return [];
    }
  }, []);

  const fetchContentKPIs = useCallback(async () => {
    try {
      // Fetch existing content difficulty analysis
      const { data: existing, error: existingError } = await supabase
        .from('content_difficulty_analysis')
        .select('*');

      if (existingError) throw existingError;

      // Fetch chapters
      const { data: chapters, error: chaptersError } = await supabase
        .from('chapters')
        .select('id, slug, order_index')
        .order('order_index');

      if (chaptersError) throw chaptersError;

      // Fetch quiz attempts for additional analysis
      const { data: attempts, error: attemptsError } = await supabase
        .from('quiz_attempts')
        .select('*');

      if (attemptsError) throw attemptsError;

      // Fetch chapter progress
      const { data: progress, error: progressError } = await supabase
        .from('chapter_progress')
        .select('*');

      if (progressError) throw progressError;

      // Fetch auto updates correlation
      const { data: updates, error: updatesError } = await supabase
        .from('auto_updates')
        .select('chapter_id');

      if (updatesError) throw updatesError;

      // Build content KPIs
      const kpis: ContentKPI[] = chapters.map(chapter => {
        const existingAnalysis = existing?.find(e => e.chapter_id === chapter.id);
        const chapterAttempts = attempts?.filter(a => a.chapter_id === chapter.id) || [];
        const chapterProgress = progress?.filter(p => p.chapter_id === chapter.id) || [];
        const chapterUpdates = updates?.filter(u => u.chapter_id === chapter.id) || [];
        
        const passedAttempts = chapterAttempts.filter(a => a.passed);
        const passRate = chapterAttempts.length > 0 
          ? (passedAttempts.length / chapterAttempts.length) * 100 
          : 100;

        // Calculate average attempts to pass
        const userPassAttempts: { [key: string]: number } = {};
        chapterAttempts.forEach(attempt => {
          if (!userPassAttempts[attempt.user_id]) {
            userPassAttempts[attempt.user_id] = 0;
          }
          userPassAttempts[attempt.user_id]++;
        });
        const avgAttemptsToPass = Object.values(userPassAttempts).length > 0
          ? Object.values(userPassAttempts).reduce((a, b) => a + b, 0) / Object.values(userPassAttempts).length
          : 1;

        // Determine difficulty
        let difficulty: ContentKPI['difficulty'] = 'medium';
        if (passRate >= 90) difficulty = 'very_easy';
        else if (passRate >= 75) difficulty = 'easy';
        else if (passRate >= 50) difficulty = 'medium';
        else if (passRate >= 30) difficulty = 'hard';
        else difficulty = 'very_hard';

        // Calculate skip rate (users who have later chapters but skipped this one)
        const usersWithProgress = [...new Set(progress?.map(p => p.user_id) || [])];
        const usersWhoSkipped = usersWithProgress.filter(userId => {
          const userProg = progress?.filter(p => p.user_id === userId) || [];
          const hasLaterChapters = userProg.some(p => {
            const laterChapter = chapters.find(c => c.id === p.chapter_id);
            return laterChapter && laterChapter.order_index > chapter.order_index && p.status === 'completed';
          });
          const hasThisChapter = userProg.some(p => p.chapter_id === chapter.id && p.status === 'completed');
          return hasLaterChapters && !hasThisChapter;
        });
        const skipRate = usersWithProgress.length > 0 
          ? (usersWhoSkipped.length / usersWithProgress.length) * 100 
          : 0;

        // Calculate bounce rate (started but not completed)
        const startedNotCompleted = chapterProgress.filter(p => 
          p.status !== 'completed' && p.attempts_count && p.attempts_count > 0
        );
        const bounceRate = chapterProgress.length > 0 
          ? (startedNotCompleted.length / chapterProgress.length) * 100 
          : 0;

        // Generate recommendation
        let recommendation: string | null = null;
        if (passRate < 40) {
          recommendation = 'Capitolul necesită simplificare urgentă - rata de promovare foarte scăzută';
        } else if (passRate > 95 && avgAttemptsToPass < 1.2) {
          recommendation = 'Capitolul poate fi prea ușor - considerați adăugarea de provocări';
        } else if (bounceRate > 50) {
          recommendation = 'Utilizatorii abandonează acest capitol - verificați claritatea conținutului';
        }

        return {
          chapterId: chapter.id,
          chapterName: chapter.slug.replace(/-/g, ' '),
          difficulty,
          avgPassRate: passRate,
          avgAttemptsToPass,
          avgTimeToPassHours: existingAnalysis?.avg_time_to_pass_hours || 0,
          skipRate,
          bounceRate,
          comprehensionIssues: existingAnalysis?.comprehension_issues as string[] || [],
          correlationWithUpdates: chapterUpdates.length,
          needsReview: passRate < 50 || bounceRate > 40,
          recommendation,
        };
      });

      setContentKPIs(kpis);
      return kpis;
    } catch (err) {
      logger.error('Error fetching content KPIs:', err);
      setError('Failed to fetch content KPIs');
      return [];
    }
  }, []);

  const fetchGlobalKPI = useCallback(async (
    chapterData: ChapterKPI[],
    userData: UserKPI[]
  ) => {
    try {
      // Fetch quiz attempts for trends
      const { data: attempts, error: attemptsError } = await supabase
        .from('quiz_attempts')
        .select('*')
        .order('created_at', { ascending: true });

      if (attemptsError) throw attemptsError;

      // Calculate weekly trends
      const weeklyData: { [key: string]: { attempts: number; passed: number } } = {};
      attempts?.forEach(attempt => {
        const date = new Date(attempt.created_at);
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay());
        const weekKey = weekStart.toISOString().split('T')[0];
        
        if (!weeklyData[weekKey]) {
          weeklyData[weekKey] = { attempts: 0, passed: 0 };
        }
        weeklyData[weekKey].attempts++;
        if (attempt.passed) weeklyData[weekKey].passed++;
      });

      const trendsWeekly = Object.entries(weeklyData)
        .map(([week, data]) => ({ week, ...data }))
        .slice(-12); // Last 12 weeks

      // Calculate active users (last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const activeUserIds = new Set(
        attempts?.filter(a => new Date(a.created_at) > sevenDaysAgo).map(a => a.user_id)
      );

      // Overall pass rate
      const totalAttempts = attempts?.length || 0;
      const totalPassed = attempts?.filter(a => a.passed).length || 0;
      const overallPassRate = totalAttempts > 0 ? (totalPassed / totalAttempts) * 100 : 0;

      // Top and worst performing chapters
      const sortedChapters = [...chapterData].sort((a, b) => b.passRate - a.passRate);
      const topPerformingChapters = sortedChapters.slice(0, 5).map(c => ({
        id: c.chapterId,
        name: c.chapterName,
        passRate: c.passRate,
      }));
      const worstPerformingChapters = sortedChapters.slice(-5).reverse().map(c => ({
        id: c.chapterId,
        name: c.chapterName,
        passRate: c.passRate,
      }));

      // Most failed questions across all chapters
      const allFailedQuestions = chapterData
        .flatMap(c => c.mostFailedQuestions.map(q => ({
          chapter: c.chapterName,
          question: q.questionIndex,
          failRate: q.failureRate,
        })))
        .sort((a, b) => b.failRate - a.failRate)
        .slice(0, 10);

      const global: GlobalKPI = {
        totalUsers: userData.length,
        activeUsersLast7Days: activeUserIds.size,
        overallPassRate,
        avgCompletionTime: userData.length > 0 
          ? userData.reduce((sum, u) => sum + u.totalStudyTimeHours, 0) / userData.length 
          : 0,
        topPerformingChapters,
        worstPerformingChapters,
        mostFailedQuestions: allFailedQuestions,
        trendsWeekly,
      };

      setGlobalKPI(global);
      return global;
    } catch (err) {
      logger.error('Error fetching global KPI:', err);
      setError('Failed to fetch global KPI');
      return null;
    }
  }, []);

  const refreshAllKPIs = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [chapters, users, content] = await Promise.all([
        fetchChapterKPIs(),
        fetchUserKPIs(),
        fetchContentKPIs(),
      ]);
      
      await fetchGlobalKPI(chapters, users);
    } catch (err) {
      logger.error('Error refreshing KPIs:', err);
      setError('Failed to refresh KPIs');
    } finally {
      setLoading(false);
    }
  }, [fetchChapterKPIs, fetchUserKPIs, fetchContentKPIs, fetchGlobalKPI]);

  useEffect(() => {
    if (isAdmin) {
      refreshAllKPIs();
    }
  }, [isAdmin, refreshAllKPIs]);

  // Memoized computed values
  const chaptersNeedingImprovement = useMemo(() => 
    contentKPIs.filter(c => c.needsReview).sort((a, b) => a.avgPassRate - b.avgPassRate),
    [contentKPIs]
  );

  const usersNeedingSupport = useMemo(() =>
    userKPIs.filter(u => u.problematicChapters.length > 0 || u.avgScore < 70),
    [userKPIs]
  );

  return {
    chapterKPIs,
    userKPIs,
    contentKPIs,
    globalKPI,
    loading,
    error,
    refreshAllKPIs,
    chaptersNeedingImprovement,
    usersNeedingSupport,
  };
}
