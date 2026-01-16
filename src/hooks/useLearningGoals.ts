import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export interface LearningGoal {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  goal_type: 'chapters' | 'score' | 'time' | 'streak' | 'custom';
  target_value: number;
  current_value: number;
  target_date: string | null;
  status: 'active' | 'completed' | 'abandoned';
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export function useLearningGoals() {
  const { user } = useAuth();
  const [goals, setGoals] = useState<LearningGoal[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGoals = useCallback(async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('learning_goals')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGoals(data as LearningGoal[] || []);
    } catch (error) {
      console.error('Error fetching goals:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchGoals();
  }, [fetchGoals]);

  const createGoal = async (goal: Omit<LearningGoal, 'id' | 'user_id' | 'current_value' | 'status' | 'completed_at' | 'created_at' | 'updated_at'>) => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('learning_goals')
        .insert({
          user_id: user.id,
          title: goal.title,
          description: goal.description,
          goal_type: goal.goal_type,
          target_value: goal.target_value,
          target_date: goal.target_date,
        })
        .select()
        .single();

      if (error) throw error;
      
      setGoals(prev => [data as LearningGoal, ...prev]);
      toast.success('Obiectiv creat cu succes!');
      return data;
    } catch (error) {
      console.error('Error creating goal:', error);
      toast.error('Eroare la crearea obiectivului');
      return null;
    }
  };

  const updateGoalProgress = async (goalId: string, newValue: number) => {
    try {
      const goal = goals.find(g => g.id === goalId);
      if (!goal) return;

      const isCompleted = newValue >= goal.target_value;
      
      const { error } = await supabase
        .from('learning_goals')
        .update({
          current_value: newValue,
          status: isCompleted ? 'completed' : 'active',
          completed_at: isCompleted ? new Date().toISOString() : null,
        })
        .eq('id', goalId);

      if (error) throw error;

      setGoals(prev => prev.map(g => 
        g.id === goalId 
          ? { ...g, current_value: newValue, status: isCompleted ? 'completed' : 'active' as const }
          : g
      ));

      if (isCompleted) {
        toast.success('🎉 Obiectiv atins! Felicitări!');
      }
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  };

  const deleteGoal = async (goalId: string) => {
    try {
      const { error } = await supabase
        .from('learning_goals')
        .delete()
        .eq('id', goalId);

      if (error) throw error;
      
      setGoals(prev => prev.filter(g => g.id !== goalId));
      toast.success('Obiectiv șters');
    } catch (error) {
      console.error('Error deleting goal:', error);
      toast.error('Eroare la ștergerea obiectivului');
    }
  };

  const abandonGoal = async (goalId: string) => {
    try {
      const { error } = await supabase
        .from('learning_goals')
        .update({ status: 'abandoned' })
        .eq('id', goalId);

      if (error) throw error;
      
      setGoals(prev => prev.map(g => 
        g.id === goalId ? { ...g, status: 'abandoned' as const } : g
      ));
    } catch (error) {
      console.error('Error abandoning goal:', error);
    }
  };

  // Auto-sync goals with actual progress
  const syncGoalsWithProgress = useCallback(async () => {
    if (!user || goals.length === 0) return;

    try {
      // Fetch current progress data
      const [chaptersRes, quizRes, gamificationRes] = await Promise.all([
        supabase.from('chapter_progress').select('*').eq('user_id', user.id).eq('status', 'completed'),
        supabase.from('quiz_attempts').select('score').eq('user_id', user.id),
        supabase.from('user_gamification').select('streak_days').eq('user_id', user.id).single(),
      ]);

      const completedChapters = chaptersRes.data?.length || 0;
      const avgScore = quizRes.data && quizRes.data.length > 0
        ? Math.round(quizRes.data.reduce((a, b) => a + b.score, 0) / quizRes.data.length)
        : 0;
      const streakDays = gamificationRes.data?.streak_days || 0;

      // Update each goal based on type
      for (const goal of goals.filter(g => g.status === 'active')) {
        let currentValue = goal.current_value;
        
        switch (goal.goal_type) {
          case 'chapters':
            currentValue = completedChapters;
            break;
          case 'score':
            currentValue = avgScore;
            break;
          case 'streak':
            currentValue = streakDays;
            break;
        }

        if (currentValue !== goal.current_value) {
          await updateGoalProgress(goal.id, currentValue);
        }
      }
    } catch (error) {
      console.error('Error syncing goals:', error);
    }
  }, [user, goals]);

  useEffect(() => {
    if (goals.length > 0) {
      syncGoalsWithProgress();
    }
  }, [goals.length]);

  return {
    goals,
    loading,
    createGoal,
    updateGoalProgress,
    deleteGoal,
    abandonGoal,
    refreshGoals: fetchGoals,
    activeGoals: goals.filter(g => g.status === 'active'),
    completedGoals: goals.filter(g => g.status === 'completed'),
  };
}
