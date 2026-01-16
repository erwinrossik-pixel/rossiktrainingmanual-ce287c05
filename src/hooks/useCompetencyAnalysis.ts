import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface ChapterCompetency {
  chapterId: string;
  chapterSlug: string;
  module: string | null;
  orderIndex: number;
  score: number; // 0-100
  attempts: number;
  status: 'mastered' | 'proficient' | 'developing' | 'needs_work' | 'not_started';
  lastAttempt: string | null;
  trend: 'improving' | 'stable' | 'declining' | 'new';
}

export interface UserCompetencyProfile {
  userId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  overallScore: number;
  completedChapters: number;
  totalChapters: number;
  competencies: ChapterCompetency[];
  weakAreas: ChapterCompetency[];
  strongAreas: ChapterCompetency[];
  recommendations: CompetencyRecommendation[];
}

export interface CompetencyRecommendation {
  type: 'review' | 'practice' | 'skip' | 'focus';
  priority: 'high' | 'medium' | 'low';
  chapterId: string;
  chapterName: string;
  reason: string;
  actionText: string;
}

export interface CompanyCompetencyInsights {
  averageScore: number;
  usersNeedingSupport: number;
  topWeakChapters: { chapterId: string; chapterName: string; avgScore: number; usersStruggling: number }[];
  topStrongChapters: { chapterId: string; chapterName: string; avgScore: number }[];
  competencyDistribution: { level: string; count: number; percentage: number }[];
}

function getCompetencyStatus(score: number, attempts: number): ChapterCompetency['status'] {
  if (attempts === 0) return 'not_started';
  if (score >= 90) return 'mastered';
  if (score >= 70) return 'proficient';
  if (score >= 50) return 'developing';
  return 'needs_work';
}

function getScoreTrend(currentScore: number, previousScores: number[]): ChapterCompetency['trend'] {
  if (previousScores.length < 2) return 'new';
  const avgPrevious = previousScores.slice(-3).reduce((a, b) => a + b, 0) / Math.min(3, previousScores.length);
  if (currentScore > avgPrevious + 5) return 'improving';
  if (currentScore < avgPrevious - 5) return 'declining';
  return 'stable';
}

function generateRecommendations(competencies: ChapterCompetency[]): CompetencyRecommendation[] {
  const recommendations: CompetencyRecommendation[] = [];
  
  // Priority 1: Chapters that need work (score < 50)
  const needsWork = competencies.filter(c => c.status === 'needs_work');
  needsWork.forEach(c => {
    recommendations.push({
      type: 'focus',
      priority: 'high',
      chapterId: c.chapterId,
      chapterName: formatChapterName(c.chapterSlug),
      reason: `Scor ${c.score}% - sub nivelul minim acceptabil`,
      actionText: 'Revizuiește materialul și reia testul'
    });
  });

  // Priority 2: Declining performance
  const declining = competencies.filter(c => c.trend === 'declining' && c.status !== 'needs_work');
  declining.forEach(c => {
    recommendations.push({
      type: 'review',
      priority: 'medium',
      chapterId: c.chapterId,
      chapterName: formatChapterName(c.chapterSlug),
      reason: `Performanță în scădere - necesită atenție`,
      actionText: 'Recapitulează conceptele cheie'
    });
  });

  // Priority 3: Developing skills that could improve
  const developing = competencies.filter(c => c.status === 'developing' && c.trend !== 'improving');
  developing.slice(0, 3).forEach(c => {
    recommendations.push({
      type: 'practice',
      priority: 'medium',
      chapterId: c.chapterId,
      chapterName: formatChapterName(c.chapterSlug),
      reason: `Scor ${c.score}% - aproape de nivelul competent`,
      actionText: 'Exersează pentru a consolida cunoștințele'
    });
  });

  // Priority 4: Not started chapters
  const notStarted = competencies.filter(c => c.status === 'not_started').slice(0, 2);
  notStarted.forEach(c => {
    recommendations.push({
      type: 'focus',
      priority: 'low',
      chapterId: c.chapterId,
      chapterName: formatChapterName(c.chapterSlug),
      reason: 'Capitol neînceput',
      actionText: 'Începe acest capitol'
    });
  });

  return recommendations.slice(0, 8); // Limit to 8 recommendations
}

function formatChapterName(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export function useCompetencyAnalysis(userId?: string) {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserCompetencyProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userId) {
      fetchUserCompetencies(userId);
    }
  }, [userId]);

  const fetchUserCompetencies = async (uid: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch user profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('id, email, first_name, last_name')
        .eq('id', uid)
        .single();

      if (!profile) {
        setError('User not found');
        setLoading(false);
        return;
      }

      // Fetch all chapters
      const { data: chapters } = await supabase
        .from('chapters')
        .select('id, slug, module, order_index')
        .order('order_index');

      // Fetch user's chapter progress
      const { data: progress } = await supabase
        .from('chapter_progress')
        .select('*')
        .eq('user_id', uid);

      // Fetch quiz attempts for trend analysis
      const { data: attempts } = await supabase
        .from('quiz_attempts')
        .select('chapter_id, score, created_at')
        .eq('user_id', uid)
        .order('created_at', { ascending: true });

      // Build competency map
      const competencies: ChapterCompetency[] = (chapters || []).map(chapter => {
        const chapterProgress = progress?.find(p => p.chapter_id === chapter.id);
        const chapterAttempts = attempts?.filter(a => a.chapter_id === chapter.id) || [];
        const scores = chapterAttempts.map(a => a.score * 10); // Convert to percentage
        const bestScore = chapterProgress?.best_score ? chapterProgress.best_score * 10 : 0;
        
        return {
          chapterId: chapter.id,
          chapterSlug: chapter.slug,
          module: chapter.module,
          orderIndex: chapter.order_index,
          score: bestScore,
          attempts: chapterProgress?.attempts_count || 0,
          status: getCompetencyStatus(bestScore, chapterProgress?.attempts_count || 0),
          lastAttempt: chapterProgress?.last_attempt_at || null,
          trend: getScoreTrend(bestScore, scores)
        };
      });

      // Calculate overall metrics
      const completedChapters = competencies.filter(c => c.status === 'mastered' || c.status === 'proficient').length;
      const attemptedChapters = competencies.filter(c => c.attempts > 0);
      const overallScore = attemptedChapters.length > 0
        ? Math.round(attemptedChapters.reduce((sum, c) => sum + c.score, 0) / attemptedChapters.length)
        : 0;

      // Identify weak and strong areas
      const weakAreas = competencies
        .filter(c => c.status === 'needs_work' || c.status === 'developing')
        .sort((a, b) => a.score - b.score)
        .slice(0, 5);

      const strongAreas = competencies
        .filter(c => c.status === 'mastered' || c.status === 'proficient')
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

      // Generate recommendations
      const recommendations = generateRecommendations(competencies);

      setUserProfile({
        userId: profile.id,
        email: profile.email,
        firstName: profile.first_name,
        lastName: profile.last_name,
        overallScore,
        completedChapters,
        totalChapters: chapters?.length || 0,
        competencies,
        weakAreas,
        strongAreas,
        recommendations
      });
    } catch (err) {
      console.error('Error fetching competencies:', err);
      setError('Failed to load competency data');
    } finally {
      setLoading(false);
    }
  };

  return { loading, userProfile, error, refetch: () => userId && fetchUserCompetencies(userId) };
}

export function useCompanyCompetencyInsights() {
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState<CompanyCompetencyInsights | null>(null);
  const [userProfiles, setUserProfiles] = useState<UserCompetencyProfile[]>([]);

  useEffect(() => {
    fetchCompanyInsights();
  }, []);

  const fetchCompanyInsights = async () => {
    setLoading(true);
    
    try {
      // Fetch all users
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, email, first_name, last_name')
        .neq('role', 'admin');

      // Fetch all chapters
      const { data: chapters } = await supabase
        .from('chapters')
        .select('id, slug, module, order_index')
        .order('order_index');

      // Fetch all progress
      const { data: allProgress } = await supabase
        .from('chapter_progress')
        .select('*');

      // Fetch all attempts
      const { data: allAttempts } = await supabase
        .from('quiz_attempts')
        .select('user_id, chapter_id, score, created_at');

      // Build user profiles
      const userProfilesData: UserCompetencyProfile[] = (profiles || []).map(profile => {
        const userProgress = allProgress?.filter(p => p.user_id === profile.id) || [];
        const userAttempts = allAttempts?.filter(a => a.user_id === profile.id) || [];
        
        const competencies: ChapterCompetency[] = (chapters || []).map(chapter => {
          const chapterProgress = userProgress.find(p => p.chapter_id === chapter.id);
          const chapterAttempts = userAttempts.filter(a => a.chapter_id === chapter.id);
          const scores = chapterAttempts.map(a => a.score * 10);
          const bestScore = chapterProgress?.best_score ? chapterProgress.best_score * 10 : 0;
          
          return {
            chapterId: chapter.id,
            chapterSlug: chapter.slug,
            module: chapter.module,
            orderIndex: chapter.order_index,
            score: bestScore,
            attempts: chapterProgress?.attempts_count || 0,
            status: getCompetencyStatus(bestScore, chapterProgress?.attempts_count || 0),
            lastAttempt: chapterProgress?.last_attempt_at || null,
            trend: getScoreTrend(bestScore, scores)
          };
        });

        const attemptedChapters = competencies.filter(c => c.attempts > 0);
        const overallScore = attemptedChapters.length > 0
          ? Math.round(attemptedChapters.reduce((sum, c) => sum + c.score, 0) / attemptedChapters.length)
          : 0;

        const weakAreas = competencies.filter(c => c.status === 'needs_work' || c.status === 'developing').sort((a, b) => a.score - b.score).slice(0, 5);
        const strongAreas = competencies.filter(c => c.status === 'mastered' || c.status === 'proficient').sort((a, b) => b.score - a.score).slice(0, 5);

        return {
          userId: profile.id,
          email: profile.email,
          firstName: profile.first_name,
          lastName: profile.last_name,
          overallScore,
          completedChapters: competencies.filter(c => c.status === 'mastered' || c.status === 'proficient').length,
          totalChapters: chapters?.length || 0,
          competencies,
          weakAreas,
          strongAreas,
          recommendations: generateRecommendations(competencies)
        };
      });

      setUserProfiles(userProfilesData);

      // Calculate company-wide insights
      const usersWithScores = userProfilesData.filter(u => u.overallScore > 0);
      const averageScore = usersWithScores.length > 0
        ? Math.round(usersWithScores.reduce((sum, u) => sum + u.overallScore, 0) / usersWithScores.length)
        : 0;

      const usersNeedingSupport = userProfilesData.filter(u => u.overallScore < 60 && u.overallScore > 0).length;

      // Calculate chapter-level insights
      const chapterStats = (chapters || []).map(chapter => {
        const chapterScores = userProfilesData
          .map(u => u.competencies.find(c => c.chapterId === chapter.id))
          .filter(c => c && c.attempts > 0)
          .map(c => c!.score);

        const avgScore = chapterScores.length > 0
          ? Math.round(chapterScores.reduce((a, b) => a + b, 0) / chapterScores.length)
          : 0;

        const usersStruggling = chapterScores.filter(s => s < 60).length;

        return {
          chapterId: chapter.id,
          chapterName: formatChapterName(chapter.slug),
          avgScore,
          usersStruggling
        };
      });

      const topWeakChapters = chapterStats
        .filter(c => c.avgScore > 0 && c.avgScore < 70)
        .sort((a, b) => a.avgScore - b.avgScore)
        .slice(0, 5);

      const topStrongChapters = chapterStats
        .filter(c => c.avgScore >= 80)
        .sort((a, b) => b.avgScore - a.avgScore)
        .slice(0, 5);

      // Competency distribution
      const distribution = [
        { level: 'Mastered (90%+)', count: 0, percentage: 0 },
        { level: 'Proficient (70-89%)', count: 0, percentage: 0 },
        { level: 'Developing (50-69%)', count: 0, percentage: 0 },
        { level: 'Needs Work (<50%)', count: 0, percentage: 0 }
      ];

      usersWithScores.forEach(u => {
        if (u.overallScore >= 90) distribution[0].count++;
        else if (u.overallScore >= 70) distribution[1].count++;
        else if (u.overallScore >= 50) distribution[2].count++;
        else distribution[3].count++;
      });

      const total = usersWithScores.length || 1;
      distribution.forEach(d => {
        d.percentage = Math.round((d.count / total) * 100);
      });

      setInsights({
        averageScore,
        usersNeedingSupport,
        topWeakChapters,
        topStrongChapters,
        competencyDistribution: distribution
      });
    } catch (err) {
      console.error('Error fetching company insights:', err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, insights, userProfiles, refetch: fetchCompanyInsights };
}