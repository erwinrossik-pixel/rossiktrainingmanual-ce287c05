import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { logger } from '@/utils/logger';

// Helper to create notification in DB
const createNotificationInDB = async (
  userId: string,
  title: string,
  message: string,
  type: string,
  icon?: string
) => {
  try {
    await supabase.from('user_notifications').insert({
      user_id: userId,
      title,
      message,
      type,
      icon
    });
  } catch (error) {
    logger.error('[Gamification] Error creating notification:', error);
  }
};

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
        logger.error('Error fetching gamification:', gamError);
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
      logger.error('Error in fetchGamification:', error);
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
    if (!user) {
      logger.warn('No user, cannot record simulation attempt', undefined, { tag: 'Gamification' });
      return { xpEarned: 0, newAchievements: [], levelUp: false };
    }

    logger.gamification('Recording simulation attempt:', { simulationId, score, maxScore, timeSpent });

    // Record the attempt in simulation_attempts table
    const { data: attemptData, error: attemptError } = await supabase.from('simulation_attempts').insert({
      user_id: user.id,
      simulation_id: simulationId,
      score,
      max_score: maxScore,
      decisions_made: decisions,
      time_spent_seconds: timeSpent
    }).select().single();

    if (attemptError) {
      logger.error('Error inserting simulation attempt:', attemptError, { tag: 'Gamification' });
    } else {
      logger.gamification('Simulation attempt saved:', attemptData?.id);
    }

    // Calculate XP earned based on performance
    const percentScore = (score / maxScore) * 100;
    let xpEarned = Math.round(percentScore / 2); // Base: 0-50 XP based on score
    const isPerfect = score === maxScore;
    if (isPerfect) xpEarned += 25; // Perfect bonus

    // Get fresh gamification data from DB (not from state which may be stale)
    const { data: currentGam, error: gamError } = await supabase
      .from('user_gamification')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (gamError) {
      logger.error('[Gamification] Error fetching current gamification:', gamError);
      return { xpEarned: 0, newAchievements: [], levelUp: false };
    }

    // Calculate streak
    const today = new Date().toISOString().split('T')[0];
    let newStreak = currentGam.streak_days || 0;
    const lastActivity = currentGam.last_activity_date;
    
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
      // If diffDays === 0, keep same streak (already trained today)
    } else {
      newStreak = 1;
    }

    // Calculate new XP and level
    const newTotalXP = (currentGam.total_xp || 0) + xpEarned;
    const oldLevel = currentGam.level || 1;
    const newLevel = calculateLevel(newTotalXP);
    const levelUp = newLevel > oldLevel;

    // Update gamification stats in a single update
    const { error: updateError } = await supabase
      .from('user_gamification')
      .update({
        simulations_completed: (currentGam.simulations_completed || 0) + 1,
        perfect_simulations: isPerfect 
          ? (currentGam.perfect_simulations || 0) + 1 
          : (currentGam.perfect_simulations || 0),
        streak_days: newStreak,
        last_activity_date: today,
        total_xp: newTotalXP,
        level: newLevel,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', user.id);

    if (updateError) {
      logger.error('Error updating gamification:', updateError, { tag: 'Gamification' });
    } else {
      logger.gamification('Updated gamification: +' + xpEarned + ' XP, Level ' + newLevel + ', Streak ' + newStreak);
      
      // Create level-up notification
      if (levelUp) {
        await createNotificationInDB(
          user.id,
          `🎉 Nivel ${newLevel} atins!`,
          `Felicitări! Ai avansat la nivelul ${newLevel}. Continuă să înveți pentru a progresa!`,
          'success',
          '🚀'
        );
      }
    }

    // Check for new achievements
    const newAchievements: Achievement[] = [];
    
    // Get current achievements from DB
    const { data: currentAchievements } = await supabase
      .from('user_achievements')
      .select('achievement_id')
      .eq('user_id', user.id);

    const earnedAchievementIds = new Set((currentAchievements || []).map(a => a.achievement_id));
    
    // Updated stats for achievement checking
    const updatedStats = {
      simulations_completed: (currentGam.simulations_completed || 0) + 1,
      perfect_simulations: isPerfect 
        ? (currentGam.perfect_simulations || 0) + 1 
        : (currentGam.perfect_simulations || 0),
      streak_days: newStreak,
      level: newLevel
    };

    for (const achievement of ACHIEVEMENTS) {
      // Skip if already earned
      if (earnedAchievementIds.has(achievement.id)) continue;

      let earned = false;
      switch (achievement.id) {
        case 'first-simulation':
          earned = updatedStats.simulations_completed >= 1;
          break;
        case 'simulation-master':
          earned = updatedStats.simulations_completed >= 5;
          break;
        case 'perfect-score':
          earned = updatedStats.perfect_simulations >= 1;
          break;
        case 'perfectionist':
          earned = updatedStats.perfect_simulations >= 3;
          break;
        case 'streak-3':
          earned = updatedStats.streak_days >= 3;
          break;
        case 'streak-7':
          earned = updatedStats.streak_days >= 7;
          break;
        case 'level-5':
          earned = updatedStats.level >= 5;
          break;
        case 'level-10':
          earned = updatedStats.level >= 10;
          break;
      }

      if (earned) {
        const { error: achError } = await supabase.from('user_achievements').insert({
          user_id: user.id,
          achievement_id: achievement.id
        });
        
        if (achError) {
          logger.error('Error inserting achievement: ' + achievement.id, achError, { tag: 'Gamification' });
        } else {
          logger.gamification('Achievement unlocked:', achievement.id);
          newAchievements.push(achievement);
          
          // Create achievement notification
          await createNotificationInDB(
            user.id,
            `${achievement.icon} ${achievement.name.ro}`,
            `${achievement.description.ro}${achievement.xpReward > 0 ? ` (+${achievement.xpReward} XP)` : ''}`,
            'achievement',
            achievement.icon
          );
          
          // Add achievement XP bonus if any
          if (achievement.xpReward > 0) {
            const bonusXP = achievement.xpReward;
            await supabase
              .from('user_gamification')
              .update({ 
                total_xp: newTotalXP + bonusXP,
                updated_at: new Date().toISOString()
              })
              .eq('user_id', user.id);
          }
        }
      }
    }

    // Refresh local state
    await fetchGamification();

    return { xpEarned, newAchievements, levelUp };
  }, [user, fetchGamification]);

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
