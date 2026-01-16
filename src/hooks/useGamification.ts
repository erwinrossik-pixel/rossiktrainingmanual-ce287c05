import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Achievement {
  id: string;
  name: { ro: string; de: string; en: string };
  description: { ro: string; de: string; en: string };
  icon: string;
  xpReward: number;
  condition: string;
}

export interface UserGamification {
  total_xp: number;
  level: number;
  streak_days: number;
  simulations_completed: number;
  perfect_simulations: number;
}

export interface UserAchievement {
  achievement_id: string;
  earned_at: string;
}

// Achievement definitions
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-simulation',
    name: { ro: 'Prima Simulare', de: 'Erste Simulation', en: 'First Simulation' },
    description: { ro: 'Completează prima ta simulare', de: 'Schließe deine erste Simulation ab', en: 'Complete your first simulation' },
    icon: '🎯',
    xpReward: 50,
    condition: 'simulations_completed >= 1'
  },
  {
    id: 'simulation-master',
    name: { ro: 'Maestru Simulări', de: 'Simulationsmeister', en: 'Simulation Master' },
    description: { ro: 'Completează 5 simulări', de: 'Schließe 5 Simulationen ab', en: 'Complete 5 simulations' },
    icon: '🏆',
    xpReward: 200,
    condition: 'simulations_completed >= 5'
  },
  {
    id: 'perfect-score',
    name: { ro: 'Scor Perfect', de: 'Perfekte Punktzahl', en: 'Perfect Score' },
    description: { ro: 'Obține scor maxim într-o simulare', de: 'Erreiche maximale Punktzahl in einer Simulation', en: 'Get maximum score in a simulation' },
    icon: '⭐',
    xpReward: 100,
    condition: 'perfect_simulations >= 1'
  },
  {
    id: 'perfectionist',
    name: { ro: 'Perfecționist', de: 'Perfektionist', en: 'Perfectionist' },
    description: { ro: 'Obține 3 scoruri perfecte', de: 'Erreiche 3 perfekte Punktzahlen', en: 'Get 3 perfect scores' },
    icon: '💎',
    xpReward: 300,
    condition: 'perfect_simulations >= 3'
  },
  {
    id: 'streak-3',
    name: { ro: 'Consecvență', de: 'Konsequenz', en: 'Consistency' },
    description: { ro: 'Menține un streak de 3 zile', de: 'Halte einen 3-Tage-Streak', en: 'Maintain a 3-day streak' },
    icon: '🔥',
    xpReward: 75,
    condition: 'streak_days >= 3'
  },
  {
    id: 'streak-7',
    name: { ro: 'Dedicare Totală', de: 'Totale Hingabe', en: 'Total Dedication' },
    description: { ro: 'Menține un streak de 7 zile', de: 'Halte einen 7-Tage-Streak', en: 'Maintain a 7-day streak' },
    icon: '🌟',
    xpReward: 200,
    condition: 'streak_days >= 7'
  },
  {
    id: 'level-5',
    name: { ro: 'Nivel 5', de: 'Stufe 5', en: 'Level 5' },
    description: { ro: 'Atinge nivelul 5', de: 'Erreiche Stufe 5', en: 'Reach level 5' },
    icon: '🥉',
    xpReward: 0,
    condition: 'level >= 5'
  },
  {
    id: 'level-10',
    name: { ro: 'Nivel 10', de: 'Stufe 10', en: 'Level 10' },
    description: { ro: 'Atinge nivelul 10', de: 'Erreiche Stufe 10', en: 'Reach level 10' },
    icon: '🥈',
    xpReward: 0,
    condition: 'level >= 10'
  },
  {
    id: 'all-categories',
    name: { ro: 'Versatil', de: 'Vielseitig', en: 'Versatile' },
    description: { ro: 'Completează simulări din toate categoriile', de: 'Schließe Simulationen aus allen Kategorien ab', en: 'Complete simulations from all categories' },
    icon: '🎨',
    xpReward: 250,
    condition: 'all_categories_completed'
  }
];

// XP required for each level (cumulative)
const XP_PER_LEVEL = [
  0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200, 4000,
  5000, 6200, 7600, 9200, 11000, 13000, 15200, 17600, 20200, 23000
];

export function calculateLevel(xp: number): number {
  for (let i = XP_PER_LEVEL.length - 1; i >= 0; i--) {
    if (xp >= XP_PER_LEVEL[i]) return i + 1;
  }
  return 1;
}

export function getXPForNextLevel(currentLevel: number): number {
  if (currentLevel >= XP_PER_LEVEL.length) return Infinity;
  return XP_PER_LEVEL[currentLevel];
}

export function useGamification() {
  const { user } = useAuth();
  const [gamification, setGamification] = useState<UserGamification | null>(null);
  const [achievements, setAchievements] = useState<UserAchievement[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGamification = useCallback(async () => {
    if (!user) {
      setGamification(null);
      setAchievements([]);
      setLoading(false);
      return;
    }

    try {
      // Fetch gamification data
      const { data: gamData, error: gamError } = await supabase
        .from('user_gamification')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (gamError && gamError.code !== 'PGRST116') {
        console.error('Error fetching gamification:', gamError);
      }

      if (gamData) {
        setGamification(gamData);
      } else {
        // Create initial record
        const { data: newData, error: insertError } = await supabase
          .from('user_gamification')
          .insert({ user_id: user.id })
          .select()
          .single();

        if (!insertError && newData) {
          setGamification(newData);
        }
      }

      // Fetch achievements
      const { data: achData } = await supabase
        .from('user_achievements')
        .select('achievement_id, earned_at')
        .eq('user_id', user.id);

      setAchievements(achData || []);
    } catch (error) {
      console.error('Error in fetchGamification:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchGamification();
  }, [fetchGamification]);

  const addXP = useCallback(async (amount: number): Promise<{ newLevel?: number; levelUp: boolean }> => {
    if (!user || !gamification) return { levelUp: false };

    const newXP = gamification.total_xp + amount;
    const oldLevel = gamification.level;
    const newLevel = calculateLevel(newXP);

    const { error } = await supabase
      .from('user_gamification')
      .update({ 
        total_xp: newXP, 
        level: newLevel,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', user.id);

    if (!error) {
      setGamification(prev => prev ? { ...prev, total_xp: newXP, level: newLevel } : null);
    }

    return { newLevel, levelUp: newLevel > oldLevel };
  }, [user, gamification]);

  const recordSimulationAttempt = useCallback(async (
    simulationId: string,
    score: number,
    maxScore: number,
    decisions: any[],
    timeSpent: number
  ): Promise<{ xpEarned: number; newAchievements: Achievement[]; levelUp: boolean }> => {
    if (!user) return { xpEarned: 0, newAchievements: [], levelUp: false };

    // Record the attempt
    await supabase.from('simulation_attempts').insert({
      user_id: user.id,
      simulation_id: simulationId,
      score,
      max_score: maxScore,
      decisions_made: decisions,
      time_spent_seconds: timeSpent
    });

    // Calculate XP
    const percentScore = (score / maxScore) * 100;
    let xpEarned = Math.round(percentScore / 2); // Base: 0-50 XP based on score
    if (score === maxScore) xpEarned += 25; // Perfect bonus

    // Update gamification stats
    const isPerfect = score === maxScore;
    const today = new Date().toISOString().split('T')[0];
    
    const { data: currentGam } = await supabase
      .from('user_gamification')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (currentGam) {
      const lastActivity = currentGam.last_activity_date;
      let newStreak = currentGam.streak_days;
      
      if (lastActivity) {
        const lastDate = new Date(lastActivity);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          newStreak += 1;
          xpEarned += 10; // Streak bonus
        } else if (diffDays > 1) {
          newStreak = 1;
        }
      } else {
        newStreak = 1;
      }

      await supabase
        .from('user_gamification')
        .update({
          simulations_completed: currentGam.simulations_completed + 1,
          perfect_simulations: isPerfect ? currentGam.perfect_simulations + 1 : currentGam.perfect_simulations,
          streak_days: newStreak,
          last_activity_date: today
        })
        .eq('user_id', user.id);
    }

    // Add XP and check for level up
    const { levelUp } = await addXP(xpEarned);

    // Check for new achievements
    const newAchievements: Achievement[] = [];
    await fetchGamification(); // Refresh data

    const updatedGam = gamification;
    if (updatedGam) {
      for (const achievement of ACHIEVEMENTS) {
        // Skip if already earned
        if (achievements.find(a => a.achievement_id === achievement.id)) continue;

        let earned = false;
        switch (achievement.id) {
          case 'first-simulation':
            earned = (updatedGam.simulations_completed + 1) >= 1;
            break;
          case 'simulation-master':
            earned = (updatedGam.simulations_completed + 1) >= 5;
            break;
          case 'perfect-score':
            earned = isPerfect && updatedGam.perfect_simulations === 0;
            break;
          case 'perfectionist':
            earned = (updatedGam.perfect_simulations + (isPerfect ? 1 : 0)) >= 3;
            break;
          case 'streak-3':
            earned = updatedGam.streak_days >= 3;
            break;
          case 'streak-7':
            earned = updatedGam.streak_days >= 7;
            break;
        }

        if (earned) {
          await supabase.from('user_achievements').insert({
            user_id: user.id,
            achievement_id: achievement.id
          });
          newAchievements.push(achievement);
          
          // Add achievement XP
          if (achievement.xpReward > 0) {
            await addXP(achievement.xpReward);
          }
        }
      }
    }

    return { xpEarned, newAchievements, levelUp };
  }, [user, gamification, achievements, addXP, fetchGamification]);

  const getLeaderboard = useCallback(async (limit = 10) => {
    const { data } = await supabase
      .from('user_gamification')
      .select(`
        user_id,
        total_xp,
        level,
        simulations_completed,
        perfect_simulations
      `)
      .order('total_xp', { ascending: false })
      .limit(limit);

    if (!data) return [];

    // Get profile info for each user
    const userIds = data.map(d => d.user_id);
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, first_name, last_name, avatar_url')
      .in('id', userIds);

    return data.map(entry => ({
      ...entry,
      profile: profiles?.find(p => p.id === entry.user_id)
    }));
  }, []);

  return {
    gamification,
    achievements,
    loading,
    addXP,
    recordSimulationAttempt,
    getLeaderboard,
    refreshGamification: fetchGamification,
    ACHIEVEMENTS,
    calculateLevel,
    getXPForNextLevel
  };
}
