import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface CompletionPrediction {
  estimated_date: string;
  days_remaining: number;
  confidence: number;
}

interface AtRiskPrediction {
  is_at_risk: boolean;
  risk_factors: string[];
  recommended_actions: string[];
  confidence: number;
}

interface RecommendedChapters {
  chapters: Array<{
    id: string;
    title: string;
    reason: string;
    priority: number;
  }>;
  confidence: number;
}

interface OptimalTimePrediction {
  best_hours: number[];
  best_days: string[];
  avg_session_length: number;
  confidence: number;
}

export interface MLPredictions {
  completion_date?: CompletionPrediction;
  at_risk?: AtRiskPrediction;
  recommended_chapters?: RecommendedChapters;
  optimal_time?: OptimalTimePrediction;
}

export function useMLPredictions() {
  const { user } = useAuth();
  const [predictions, setPredictions] = useState<MLPredictions>({});
  const [loading, setLoading] = useState(true);

  const fetchPredictions = useCallback(async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data } = await supabase
        .from('ml_predictions')
        .select('*')
        .eq('user_id', user.id)
        .gte('valid_until', new Date().toISOString());

      const predictionsMap: MLPredictions = {};
      
      (data || []).forEach(p => {
        const predictionData = p.prediction_data as unknown;
        const confidence = Number(p.confidence) || 0;
        switch (p.prediction_type) {
          case 'completion_date':
            predictionsMap.completion_date = { ...(predictionData as CompletionPrediction), confidence };
            break;
          case 'at_risk':
            predictionsMap.at_risk = { ...(predictionData as AtRiskPrediction), confidence };
            break;
          case 'recommended_chapters':
            predictionsMap.recommended_chapters = { ...(predictionData as RecommendedChapters), confidence };
            break;
          case 'optimal_time':
            predictionsMap.optimal_time = { ...(predictionData as OptimalTimePrediction), confidence };
            break;
        }
      });

      setPredictions(predictionsMap);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchPredictions();
  }, [fetchPredictions]);

  // Generate predictions based on user's actual data
  const generatePredictions = useCallback(async () => {
    if (!user) return;

    try {
      // Fetch user's progress data
      const { data: progressData } = await supabase
        .from('chapter_progress')
        .select('*')
        .eq('user_id', user.id);

      const { data: quizData } = await supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      const { data: chaptersData } = await supabase
        .from('chapters')
        .select('id');

      const totalChapters = chaptersData?.length || 50;
      const completedChapters = progressData?.filter(p => p.status === 'completed').length || 0;
      const avgScoreRecent = quizData?.slice(0, 10).reduce((acc, q) => acc + q.score, 0) / Math.min(10, quizData?.length || 1) || 0;

      // Simple ML-like calculations
      const completionRate = completedChapters / totalChapters;
      const daysActive = progressData?.length ? 
        Math.ceil((Date.now() - new Date(progressData[0].created_at).getTime()) / (1000 * 60 * 60 * 24)) : 1;
      const chaptersPerDay = completedChapters / daysActive;
      const remainingChapters = totalChapters - completedChapters;
      const estimatedDays = chaptersPerDay > 0 ? Math.ceil(remainingChapters / chaptersPerDay) : 90;

      const predictions: Array<{
        prediction_type: string;
        prediction_data: Record<string, unknown>;
        confidence: number;
        valid_until: string;
      }> = [
        {
          prediction_type: 'completion_date',
          prediction_data: {
            estimated_date: new Date(Date.now() + estimatedDays * 24 * 60 * 60 * 1000).toISOString(),
            days_remaining: estimatedDays
          },
          confidence: Math.min(0.95, 0.5 + completionRate * 0.4),
          valid_until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          prediction_type: 'at_risk',
          prediction_data: {
            is_at_risk: avgScoreRecent < 70 || chaptersPerDay < 0.1,
            risk_factors: [
              ...(avgScoreRecent < 70 ? ['Low quiz scores recently'] : []),
              ...(chaptersPerDay < 0.1 ? ['Slow progress rate'] : []),
              ...(completionRate < 0.2 && daysActive > 30 ? ['Extended inactivity'] : [])
            ],
            recommended_actions: [
              ...(avgScoreRecent < 70 ? ['Review difficult chapters', 'Use AI Tutor for help'] : []),
              ...(chaptersPerDay < 0.1 ? ['Set daily learning goals', 'Enable push notifications'] : [])
            ]
          },
          confidence: 0.75,
          valid_until: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          prediction_type: 'optimal_time',
          prediction_data: {
            best_hours: [9, 10, 14, 15],
            best_days: ['Monday', 'Tuesday', 'Wednesday'],
            avg_session_length: 25
          },
          confidence: 0.7,
          valid_until: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];

      // Store predictions
      for (const pred of predictions) {
        await supabase
          .from('ml_predictions')
          .insert({
            user_id: user.id,
            prediction_type: pred.prediction_type,
            prediction_data: pred.prediction_data,
            confidence: pred.confidence,
            valid_until: pred.valid_until
          });
      }

      await fetchPredictions();
    } catch (error) {
      console.error('Error generating predictions:', error);
    }
  }, [user, fetchPredictions]);

  return {
    predictions,
    loading,
    generatePredictions,
    refresh: fetchPredictions
  };
}
