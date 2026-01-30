import { useState, useEffect } from 'react';
import { logger } from '@/utils/logger';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Trophy, 
  Medal, 
  Star, 
  Flame, 
  Zap, 
  Target, 
  Crown,
  Users,
  TrendingUp,
  Award,
  Gamepad2,
  BarChart3
} from 'lucide-react';
import { ACHIEVEMENTS, calculateLevel, getXPForNextLevel } from '@/hooks/useGamification';

interface LeaderboardEntry {
  user_id: string;
  total_xp: number;
  level: number;
  simulations_completed: number;
  perfect_simulations: number;
  streak_days: number;
  profile?: {
    first_name: string | null;
    last_name: string | null;
    avatar_url: string | null;
  };
  achievements_count?: number;
}

interface SimulationStats {
  total_attempts: number;
  avg_score: number;
  best_performers: { user_id: string; avg_score: number; attempts: number }[];
  by_simulation: { simulation_id: string; attempts: number; avg_score: number }[];
}

export function GamificationLeaderboard() {
  const { t, language } = useLanguage();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [simulationStats, setSimulationStats] = useState<SimulationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('leaderboard');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch leaderboard
      const { data: gamData, error: gamError } = await supabase
        .from('user_gamification')
        .select('*')
        .order('total_xp', { ascending: false })
        .limit(20);

      if (gamError) throw gamError;

      // Get user profiles
      const userIds = gamData?.map(g => g.user_id) || [];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, first_name, last_name, avatar_url')
        .in('id', userIds);

      // Get achievement counts
      const { data: achievementCounts } = await supabase
        .from('user_achievements')
        .select('user_id')
        .in('user_id', userIds);

      const achievementsByUser = achievementCounts?.reduce((acc, a) => {
        acc[a.user_id] = (acc[a.user_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {};

      const enrichedData: LeaderboardEntry[] = (gamData || []).map(entry => ({
        ...entry,
        profile: profiles?.find(p => p.id === entry.user_id),
        achievements_count: achievementsByUser[entry.user_id] || 0
      }));

      setLeaderboard(enrichedData);

      // Fetch simulation statistics
      const { data: simAttempts } = await supabase
        .from('simulation_attempts')
        .select('*')
        .order('created_at', { ascending: false });

      if (simAttempts && simAttempts.length > 0) {
        const totalAttempts = simAttempts.length;
        const avgScore = simAttempts.reduce((sum, a) => sum + (a.score / a.max_score) * 100, 0) / totalAttempts;

        // Group by user for best performers
        const userScores: Record<string, { total: number; count: number }> = {};
        simAttempts.forEach(a => {
          if (!userScores[a.user_id]) {
            userScores[a.user_id] = { total: 0, count: 0 };
          }
          userScores[a.user_id].total += (a.score / a.max_score) * 100;
          userScores[a.user_id].count += 1;
        });

        const bestPerformers = Object.entries(userScores)
          .map(([user_id, data]) => ({
            user_id,
            avg_score: data.total / data.count,
            attempts: data.count
          }))
          .sort((a, b) => b.avg_score - a.avg_score)
          .slice(0, 5);

        // Group by simulation
        const simScores: Record<string, { total: number; count: number }> = {};
        simAttempts.forEach(a => {
          if (!simScores[a.simulation_id]) {
            simScores[a.simulation_id] = { total: 0, count: 0 };
          }
          simScores[a.simulation_id].total += (a.score / a.max_score) * 100;
          simScores[a.simulation_id].count += 1;
        });

        const bySimulation = Object.entries(simScores)
          .map(([simulation_id, data]) => ({
            simulation_id,
            attempts: data.count,
            avg_score: data.total / data.count
          }))
          .sort((a, b) => b.attempts - a.attempts);

        setSimulationStats({
          total_attempts: totalAttempts,
          avg_score: avgScore,
          best_performers: bestPerformers,
          by_simulation: bySimulation
        });
      }
    } catch (error) {
      logger.error('Error fetching gamification data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-warning" />;
      case 2:
        return <Medal className="h-5 w-5 text-muted-foreground" />;
      case 3:
        return <Medal className="h-5 w-5 text-warning" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getLevelColor = (level: number) => {
    if (level >= 15) return 'from-primary to-primary/70';
    if (level >= 10) return 'from-warning to-warning/70';
    if (level >= 5) return 'from-info to-info/70';
    return 'from-success to-success/70';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-violet-500 to-purple-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Users className="h-4 w-4" />
              {t('admin.gamification.activeUsers')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{leaderboard.length}</div>
            <p className="text-xs text-white/70">{t('admin.gamification.inGamification')}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              {t('admin.gamification.simCompleted')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{simulationStats?.total_attempts || 0}</div>
            <p className="text-xs text-white/70">{t('admin.gamification.totalAttempts')}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              {t('admin.gamification.avgScore')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{simulationStats?.avg_score.toFixed(0) || 0}%</div>
            <p className="text-xs text-white/70">{t('admin.gamification.onSimulations')}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-rose-500 to-pink-600 text-white border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              {t('admin.gamification.totalXP')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {leaderboard.reduce((sum, l) => sum + l.total_xp, 0).toLocaleString()}
            </div>
            <p className="text-xs text-white/70">{t('admin.gamification.xpTotal')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="leaderboard" className="data-[state=active]:bg-white">
            <Trophy className="h-4 w-4 mr-2" />
            {t('admin.gamification.leaderboard')}
          </TabsTrigger>
          <TabsTrigger value="achievements" className="data-[state=active]:bg-white">
            <Award className="h-4 w-4 mr-2" />
            {t('admin.gamification.achievements')}
          </TabsTrigger>
          <TabsTrigger value="simulations" className="data-[state=active]:bg-white">
            <BarChart3 className="h-4 w-4 mr-2" />
            {t('admin.gamification.simStats')}
          </TabsTrigger>
        </TabsList>

        {/* Leaderboard Tab */}
        <TabsContent value="leaderboard" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                {t('admin.kpi.topPerformers')}
              </CardTitle>
              <CardDescription>
                {t('admin.gamification.rankedBy')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <div className="space-y-3">
                  {leaderboard.map((entry, index) => {
                    const rank = index + 1;
                    const nextLevelXP = getXPForNextLevel(entry.level);
                    const currentLevelXP = entry.level > 1 ? getXPForNextLevel(entry.level - 1) : 0;
                    const progress = nextLevelXP === Infinity ? 100 : 
                      ((entry.total_xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
                    
                    return (
                      <div 
                        key={entry.user_id}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                          rank <= 3 
                            ? 'bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200' 
                            : 'bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <div className="w-10 flex justify-center">
                          {getRankIcon(rank)}
                        </div>
                        
                        <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                          <AvatarImage src={entry.profile?.avatar_url || undefined} />
                          <AvatarFallback className={`bg-gradient-to-br ${getLevelColor(entry.level)} text-white font-bold`}>
                            {entry.profile?.first_name?.[0] || '?'}
                            {entry.profile?.last_name?.[0] || ''}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground truncate">
                              {entry.profile?.first_name || 'User'} {entry.profile?.last_name || ''}
                            </span>
                            <Badge variant="secondary" className={`bg-gradient-to-r ${getLevelColor(entry.level)} text-white border-0`}>
                              Lvl {entry.level}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Zap className="h-3 w-3 text-warning" />
                              {entry.total_xp.toLocaleString()} XP
                            </span>
                            <span className="flex items-center gap-1">
                              <Target className="h-3 w-3 text-info" />
                              {entry.simulations_completed} {t('admin.gamification.simulations').toLowerCase()}
                            </span>
                            {entry.streak_days > 0 && (
                              <span className="flex items-center gap-1">
                                <Flame className="h-3 w-3 text-warning" />
                                {entry.streak_days} {t('admin.gamification.days')}
                              </span>
                            )}
                          </div>
                          <Progress value={progress} className="h-1.5 mt-2" />
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-warning">
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span className="font-bold">{entry.perfect_simulations}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{t('admin.gamification.perfect')}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                {t('admin.gamification.systemAchievements')}
              </CardTitle>
              <CardDescription>
                {t('admin.gamification.achievementsDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ACHIEVEMENTS.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {achievement.name[language as keyof typeof achievement.name] || achievement.name.en}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {achievement.description[language as keyof typeof achievement.description] || achievement.description.en}
                        </p>
                        {achievement.xpReward > 0 && (
                          <Badge variant="secondary" className="mt-2 bg-amber-100 text-amber-700">
                            +{achievement.xpReward} XP
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Simulations Stats Tab */}
        <TabsContent value="simulations" className="mt-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  {t('admin.gamification.topPerformers')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {simulationStats?.best_performers.map((performer, index) => (
                  <div key={performer.user_id} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-muted-foreground">#{index + 1}</span>
                      <div>
                        <p className="font-medium">{performer.user_id.slice(0, 8)}...</p>
                        <p className="text-sm text-muted-foreground">{performer.attempts} {t('admin.gamification.attempts')}</p>
                      </div>
                    </div>
                    <Badge className={`${
                      performer.avg_score >= 80 ? 'bg-success/10 text-success' :
                      performer.avg_score >= 60 ? 'bg-warning/10 text-warning' :
                      'bg-destructive/10 text-destructive'
                    }`}>
                      {performer.avg_score.toFixed(0)}%
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  {t('admin.gamification.simPopularity')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {simulationStats?.by_simulation.map((sim) => (
                  <div key={sim.simulation_id} className="py-3 border-b last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium capitalize">
                        {sim.simulation_id.replace(/-/g, ' ')}
                      </span>
                      <span className="text-sm text-muted-foreground">{sim.attempts} încercări</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={sim.avg_score} className="flex-1 h-2" />
                      <span className="text-sm font-medium w-12">{sim.avg_score.toFixed(0)}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
