import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { logger } from '@/utils/logger';

export interface WeeklyChallenge {
  id: string;
  title: string;
  description: string | null;
  challenge_type: 'quiz_score' | 'chapters_complete' | 'training_time' | 'streak' | 'simulations';
  target_value: number;
  xp_reward: number;
  badge_reward: string | null;
  start_date: string;
  end_date: string;
  is_active: boolean;
  my_progress?: number;
  is_joined?: boolean;
  is_completed?: boolean;
  participants_count?: number;
}

export function useWeeklyChallenges() {
  const { user } = useAuth();
  const [challenges, setChallenges] = useState<WeeklyChallenge[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchChallenges = useCallback(async () => {
    setLoading(true);
    try {
      const today = new Date().toISOString().split('T')[0];
      
      const { data: challengesData } = await supabase
        .from('weekly_challenges')
        .select('*')
        .eq('is_active', true)
        .lte('start_date', today)
        .gte('end_date', today)
        .order('start_date', { ascending: true });

      if (!challengesData) {
        setChallenges([]);
        return;
      }

      const challengeIds = challengesData.map(c => c.id);
      
      // Get all participants
      const { data: allParticipants } = await supabase
        .from('challenge_participants')
        .select('challenge_id, user_id, current_value, completed')
        .in('challenge_id', challengeIds);

      const countMap: Record<string, number> = {};
      const userProgress: Record<string, { value: number; completed: boolean }> = {};
      
      (allParticipants || []).forEach(p => {
        countMap[p.challenge_id] = (countMap[p.challenge_id] || 0) + 1;
        if (user && p.user_id === user.id) {
          userProgress[p.challenge_id] = { 
            value: p.current_value || 0, 
            completed: p.completed || false 
          };
        }
      });

      const enrichedChallenges: WeeklyChallenge[] = challengesData.map(c => ({
        ...c,
        participants_count: countMap[c.id] || 0,
        my_progress: userProgress[c.id]?.value || 0,
        is_joined: !!userProgress[c.id],
        is_completed: userProgress[c.id]?.completed || false
      })) as WeeklyChallenge[];

      setChallenges(enrichedChallenges);
    } catch (error) {
      logger.error('Error fetching challenges:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchChallenges();
  }, [fetchChallenges]);

  const joinChallenge = useCallback(async (challengeId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('challenge_participants')
        .insert({
          challenge_id: challengeId,
          user_id: user.id,
          current_value: 0
        });

      if (!error) {
        await fetchChallenges();
        return true;
      }
    } catch (error) {
      logger.error('Error joining challenge:', error);
    }
    return false;
  }, [user, fetchChallenges]);

  const updateProgress = useCallback(async (challengeId: string, newValue: number) => {
    if (!user) return false;

    try {
      const challenge = challenges.find(c => c.id === challengeId);
      const completed = challenge ? newValue >= challenge.target_value : false;

      const { error } = await supabase
        .from('challenge_participants')
        .update({
          current_value: newValue,
          completed,
          completed_at: completed ? new Date().toISOString() : null
        })
        .eq('challenge_id', challengeId)
        .eq('user_id', user.id);

      if (!error) {
        await fetchChallenges();
        return true;
      }
    } catch (error) {
      logger.error('Error updating progress:', error);
    }
    return false;
  }, [user, challenges, fetchChallenges]);

  const getChallengeTypeLabel = (type: WeeklyChallenge['challenge_type']): string => {
    const labels: Record<string, string> = {
      quiz_score: 'Quiz Score',
      chapters_complete: 'Complete Chapters',
      training_time: 'Training Minutes',
      streak: 'Daily Streak',
      simulations: 'Simulations'
    };
    return labels[type] || type;
  };

  return {
    challenges,
    loading,
    joinChallenge,
    updateProgress,
    getChallengeTypeLabel,
    refresh: fetchChallenges
  };
}
