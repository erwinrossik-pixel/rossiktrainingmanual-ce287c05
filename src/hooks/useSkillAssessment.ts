import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { Json } from '@/integrations/supabase/types';

export interface SkillScore {
  area: string;
  score: number;
  maxScore: number;
  label: string;
}

export interface Assessment {
  id: string;
  assessment_type: string;
  total_score: number;
  max_score: number;
  skill_scores: Record<string, number>;
  recommendations: string[];
  completed_at: string;
}

export interface CompetencyScore {
  competency_area: string;
  score: number;
  max_score: number;
  last_assessment_at: string;
}

// Competency areas mapped to chapters - use translationKey for dynamic labels
export const COMPETENCY_AREAS = {
  pricing: { translationKey: 'competency.area.pricing', chapters: ['pricing', 'commercial'] },
  customs: { translationKey: 'competency.area.customs', chapters: ['customs', 'documents'] },
  adr: { translationKey: 'competency.area.adr', chapters: ['adr'] },
  vehicles: { translationKey: 'competency.area.vehicles', chapters: ['vehicle', 'fleet'] },
  compliance: { translationKey: 'competency.area.compliance', chapters: ['compliance', 'driving-time'] },
  clients: { translationKey: 'competency.area.clients', chapters: ['clients', 'communication'] },
  claims: { translationKey: 'competency.area.claims', chapters: ['claims', 'insurance'] },
  technology: { translationKey: 'competency.area.technology', chapters: ['technology', 'digitalization', 'translogica'] },
  negotiation: { translationKey: 'competency.area.negotiation', chapters: ['negotiation', 'soft-skills'] },
  logistics: { translationKey: 'competency.area.logistics', chapters: ['loading', 'warehouse', 'intermodal'] }
};

// Helper function to get translated competency areas
export const getCompetencyAreaLabel = (area: keyof typeof COMPETENCY_AREAS, t: (key: string) => string): string => {
  return t(COMPETENCY_AREAS[area]?.translationKey || area);
};

export function useSkillAssessment() {
  const { user } = useAuth();
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [competencies, setCompetencies] = useState<CompetencyScore[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    if (!user) {
      setAssessments([]);
      setCompetencies([]);
      setLoading(false);
      return;
    }

    try {
      // Fetch assessments
      const { data: assessmentData } = await supabase
        .from('skill_assessments')
        .select('*')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false });

      // Fetch competency scores
      const { data: competencyData } = await supabase
        .from('competency_scores')
        .select('*')
        .eq('user_id', user.id);

      const typedAssessments = (assessmentData || []).map(a => ({
        ...a,
        skill_scores: (a.skill_scores as Record<string, number>) || {},
        recommendations: ((a.recommendations as Json) || []) as string[]
      }));

      setAssessments(typedAssessments);
      setCompetencies(competencyData || []);
    } catch (error) {
      console.error('Error fetching assessment data:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const calculateCompetencyFromQuizzes = useCallback(async () => {
    if (!user) return;

    try {
      // Get all quiz attempts
      const { data: quizAttempts } = await supabase
        .from('quiz_attempts')
        .select('chapter_id, score, total_questions, passed')
        .eq('user_id', user.id);

      if (!quizAttempts?.length) return;

      // Calculate scores per competency area
      const areaScores: Record<string, { total: number; count: number }> = {};

      for (const attempt of quizAttempts) {
        for (const [area, config] of Object.entries(COMPETENCY_AREAS)) {
          if (config.chapters.includes(attempt.chapter_id)) {
            if (!areaScores[area]) {
              areaScores[area] = { total: 0, count: 0 };
            }
            const percentage = (attempt.score / attempt.total_questions) * 100;
            areaScores[area].total += percentage;
            areaScores[area].count += 1;
          }
        }
      }

      // Upsert competency scores
      for (const [area, data] of Object.entries(areaScores)) {
        const score = Math.round(data.total / data.count);
        
        const { error } = await supabase
          .from('competency_scores')
          .upsert({
            user_id: user.id,
            competency_area: area,
            score,
            max_score: 100,
            last_assessment_at: new Date().toISOString()
          }, {
            onConflict: 'user_id,competency_area'
          });

        if (error) console.error('Error upserting competency:', error);
      }

      await fetchData();
    } catch (error) {
      console.error('Error calculating competency:', error);
    }
  }, [user, fetchData]);

  const saveAssessment = useCallback(async (
    type: 'initial' | 'progress' | 'final',
    skillScores: Record<string, number>,
    recommendations: string[]
  ) => {
    if (!user) return null;

    const totalScore = Object.values(skillScores).reduce((a, b) => a + b, 0);
    const maxScore = Object.keys(skillScores).length * 100;

    try {
      const { data, error } = await supabase
        .from('skill_assessments')
        .insert({
          user_id: user.id,
          assessment_type: type,
          total_score: totalScore,
          max_score: maxScore,
          skill_scores: skillScores,
          recommendations
        })
        .select()
        .single();

      if (error) throw error;

      await fetchData();
      return data;
    } catch (error) {
      console.error('Error saving assessment:', error);
      return null;
    }
  }, [user, fetchData]);

  const getLatestAssessment = useCallback(() => {
    return assessments[0] || null;
  }, [assessments]);

  const getCompetencyByArea = useCallback((area: string) => {
    return competencies.find(c => c.competency_area === area);
  }, [competencies]);

  const getOverallCompetency = useCallback(() => {
    if (!competencies.length) return 0;
    const total = competencies.reduce((sum, c) => sum + c.score, 0);
    return Math.round(total / competencies.length);
  }, [competencies]);

  const getWeakAreas = useCallback(() => {
    return competencies
      .filter(c => c.score < 60)
      .sort((a, b) => a.score - b.score)
      .slice(0, 3)
      .map(c => ({
        area: c.competency_area,
        score: c.score,
        translationKey: COMPETENCY_AREAS[c.competency_area as keyof typeof COMPETENCY_AREAS]?.translationKey || c.competency_area
      }));
  }, [competencies]);

  const getStrongAreas = useCallback(() => {
    return competencies
      .filter(c => c.score >= 80)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(c => ({
        area: c.competency_area,
        score: c.score,
        translationKey: COMPETENCY_AREAS[c.competency_area as keyof typeof COMPETENCY_AREAS]?.translationKey || c.competency_area
      }));
  }, [competencies]);

  return {
    assessments,
    competencies,
    loading,
    saveAssessment,
    calculateCompetencyFromQuizzes,
    getLatestAssessment,
    getCompetencyByArea,
    getOverallCompetency,
    getWeakAreas,
    getStrongAreas,
    COMPETENCY_AREAS,
    refresh: fetchData
  };
}
