import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Clock, Timer, TrendingUp, TrendingDown, Users, Download, RefreshCw, Zap, Minus, Trophy, Medal, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

interface UserTrainingTime {
  userId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  days: Record<number, number>;
  totalSeconds: number;
  isCurrentlyTraining: boolean;
  trainingStartedAt: string | null;
  efficiency: number; // percentage: 100% = on track, >100% = faster, <100% = slower
  activePhasesCount: number;
}

const TARGET_HOURS_PER_PHASE = 8;
const TOTAL_TARGET_HOURS = 40; // 5 phases * 8 hours

const getPhaseNames = (t: (key: string) => string) => ({
  1: t('admin.training.phase1Name'),
  2: t('admin.training.phase2Name'),
  3: t('admin.training.phase3Name'),
  4: t('admin.training.phase4Name'),
  5: t('admin.training.phase5Name'),
});

export function TrainingTimeAnalytics() {
  const { t } = useLanguage();
  const [usersTime, setUsersTime] = useState<UserTrainingTime[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrainingTime = async () => {
    setLoading(true);

    // Fetch all profiles
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, email, first_name, last_name');

    // Fetch all training time records
    const { data: trainingData } = await supabase
      .from('training_time')
      .select('*');

    if (!profiles) {
      setLoading(false);
      return;
    }

    const usersWithTime: UserTrainingTime[] = profiles.map(profile => {
      const userTrainingRecords = trainingData?.filter(t => t.user_id === profile.id) || [];
      
      const days: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      let isCurrentlyTraining = false;
      let trainingStartedAt: string | null = null;

      userTrainingRecords.forEach(record => {
        let seconds = record.total_seconds;
        
        // Add running time if timer is active
        if (record.is_running && record.last_start_time) {
          const elapsed = Math.floor((Date.now() - new Date(record.last_start_time).getTime()) / 1000);
          seconds += elapsed;
          isCurrentlyTraining = true;
        }
        
        days[record.day_number] = seconds;
        
        if (record.training_started_at && !trainingStartedAt) {
          trainingStartedAt = record.training_started_at;
        }
      });

      const totalSeconds = Object.values(days).reduce((a, b) => a + b, 0);
      
      // Calculate efficiency: compare actual time vs recommended per phase
      // Only count phases where user has spent time
      const activePhasesCount = Object.values(days).filter(d => d > 0).length;
      let efficiency = 0;
      
      if (activePhasesCount > 0 && totalSeconds > 0) {
        // Target time for active phases
        const targetSecondsForActivePhases = activePhasesCount * TARGET_HOURS_PER_PHASE * 3600;
        // Efficiency = (target / actual) * 100 - if you spend less time, you're more efficient
        efficiency = Math.round((targetSecondsForActivePhases / totalSeconds) * 100);
      }

      return {
        userId: profile.id,
        email: profile.email,
        firstName: profile.first_name,
        lastName: profile.last_name,
        days,
        totalSeconds,
        isCurrentlyTraining,
        trainingStartedAt,
        efficiency,
        activePhasesCount,
      };
    });

    // Sort by total time descending
    usersWithTime.sort((a, b) => b.totalSeconds - a.totalSeconds);
    setUsersTime(usersWithTime);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrainingTime();

    // Refresh every 30 seconds
    const interval = setInterval(fetchTrainingTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const formatTimeShort = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h`;
    }
    return `${minutes}m`;
  };

  // Calculate aggregate stats
  const usersWithAnyTime = usersTime.filter(u => u.totalSeconds > 0);
  const totalTimeAllUsers = usersTime.reduce((acc, u) => acc + u.totalSeconds, 0);
  const averageTime = usersWithAnyTime.length > 0 
    ? totalTimeAllUsers / usersWithAnyTime.length 
    : 0;
  const usersCurrentlyTraining = usersTime.filter(u => u.isCurrentlyTraining).length;
  const usersCompletedTarget = usersTime.filter(u => u.totalSeconds >= TOTAL_TARGET_HOURS * 3600).length;
  
  // Average efficiency across all users with time
  const averageEfficiency = usersWithAnyTime.length > 0
    ? Math.round(usersWithAnyTime.reduce((acc, u) => acc + u.efficiency, 0) / usersWithAnyTime.length)
    : 0;
  
  // Efficiency distribution
  const efficiencyDistribution = {
    fast: usersWithAnyTime.filter(u => u.efficiency >= 120).length,      // Very fast learners
    good: usersWithAnyTime.filter(u => u.efficiency >= 100 && u.efficiency < 120).length,  // On track
    average: usersWithAnyTime.filter(u => u.efficiency >= 80 && u.efficiency < 100).length, // Slightly slower
    slow: usersWithAnyTime.filter(u => u.efficiency < 80).length,        // Need attention
  };

  const getEfficiencyColor = (efficiency: number): string => {
    if (efficiency >= 120) return 'text-success';
    if (efficiency >= 100) return 'text-primary';
    if (efficiency >= 80) return 'text-warning';
    return 'text-destructive';
  };

  const getEfficiencyIcon = (efficiency: number) => {
    if (efficiency >= 110) return <TrendingUp className="h-3 w-3 text-success" />;
    if (efficiency >= 90) return <Minus className="h-3 w-3 text-primary" />;
    return <TrendingDown className="h-3 w-3 text-warning" />;
  };

  const getEfficiencyLabel = (efficiency: number): string => {
    if (efficiency >= 120) return t('admin.training.efficiencyExcellent');
    if (efficiency >= 100) return t('admin.training.efficiencyGood');
    if (efficiency >= 80) return t('admin.training.efficiencyMedium');
    return t('admin.training.efficiencySlow');
  };

  // Chart data: time distribution by phase across all users
  const PHASE_NAMES = getPhaseNames(t);
  const phaseDistribution = [1, 2, 3, 4, 5].map(phase => {
    const totalForPhase = usersTime.reduce((acc, u) => acc + (u.days[phase] || 0), 0);
    return {
      phase: `F${phase}`,
      fullName: PHASE_NAMES[phase as keyof typeof PHASE_NAMES],
      hours: totalForPhase / 3600,
      users: usersTime.filter(u => (u.days[phase] || 0) > 0).length,
    };
  });

  // Progress distribution pie chart
  const progressDistribution = [
    { 
      name: '0%', 
      value: usersTime.filter(u => u.totalSeconds === 0).length, 
      color: '#ef4444' 
    },
    { 
      name: '1-25%', 
      value: usersTime.filter(u => {
        const pct = (u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100;
        return pct > 0 && pct <= 25;
      }).length, 
      color: '#f97316' 
    },
    { 
      name: '26-50%', 
      value: usersTime.filter(u => {
        const pct = (u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100;
        return pct > 25 && pct <= 50;
      }).length, 
      color: '#eab308' 
    },
    { 
      name: '51-75%', 
      value: usersTime.filter(u => {
        const pct = (u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100;
        return pct > 50 && pct <= 75;
      }).length, 
      color: '#3b82f6' 
    },
    { 
      name: '76-99%', 
      value: usersTime.filter(u => {
        const pct = (u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100;
        return pct > 75 && pct < 100;
      }).length, 
      color: '#8b5cf6' 
    },
    { 
      name: '100%', 
      value: usersTime.filter(u => u.totalSeconds >= TOTAL_TARGET_HOURS * 3600).length, 
      color: '#22c55e' 
    },
  ].filter(d => d.value > 0);

  const exportToCSV = () => {
    const headers = [t('admin.training.name'), 'Email', t('admin.training.phase') + ' 1', t('admin.training.phase') + ' 2', t('admin.training.phase') + ' 3', t('admin.training.phase') + ' 4', t('admin.training.phase') + ' 5', t('admin.training.total'), t('admin.training.progressPercent') + ' %', t('admin.training.efficiency') + ' %', t('admin.training.activePhases'), t('admin.training.activeNow'), t('admin.training.started')];
    const rows = usersTime.map(u => [
      `${u.firstName || ''} ${u.lastName || ''}`.trim() || t('admin.training.noData'),
      u.email,
      formatTime(u.days[1] || 0),
      formatTime(u.days[2] || 0),
      formatTime(u.days[3] || 0),
      formatTime(u.days[4] || 0),
      formatTime(u.days[5] || 0),
      formatTime(u.totalSeconds),
      `${Math.min(100, Math.round((u.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100))}%`,
      `${u.efficiency}%`,
      u.activePhasesCount,
      u.isCurrentlyTraining ? t('admin.training.yes') : t('admin.training.no'),
      u.trainingStartedAt ? format(new Date(u.trainingStartedAt), 'dd.MM.yyyy HH:mm') : t('admin.training.noData'),
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `training-time-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();

    toast.success(t('admin.training.csvExported'));
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
          <p className="font-semibold">{data.fullName}</p>
          <p className="text-muted-foreground">{data.hours.toFixed(1)} {t('admin.training.hoursTotal')}</p>
          <p className="text-xs text-muted-foreground">{data.users} {t('admin.training.usersActiveInPhase')}</p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.training.totalPlatformTime')}</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatTime(totalTimeAllUsers)}</div>
            <p className="text-xs text-muted-foreground">{usersWithAnyTime.length} {t('admin.training.activeUsersCount')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.training.avgTime')}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatTime(Math.round(averageTime))}</div>
            <p className="text-xs text-muted-foreground">{t('admin.training.perActiveUser')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.training.avgEfficiency')}</CardTitle>
            <Zap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getEfficiencyColor(averageEfficiency)}`}>
              {averageEfficiency}%
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-success">{efficiencyDistribution.fast} {t('admin.training.fastLearners')}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-warning">{efficiencyDistribution.slow} {t('admin.training.slowLearners')}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.training.currentlyTraining')}</CardTitle>
            <Clock className="h-4 w-4 text-green-500 animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{usersCurrentlyTraining}</div>
            <p className="text-xs text-muted-foreground">{t('admin.training.usersActive')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{t('admin.training.targetReached')}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{usersCompletedTarget}</div>
            <p className="text-xs text-muted-foreground">{t('admin.training.ofTotalUsers').replace('{count}', String(usersTime.length))}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t('admin.training.phaseDistribution')}</CardTitle>
            <CardDescription>{t('admin.training.phaseDistributionDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={phaseDistribution} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <XAxis 
                    dataKey="phase"
                    tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                    axisLine={{ stroke: 'hsl(var(--border))' }}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `${value}h`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="hours" 
                    radius={[4, 4, 0, 0]}
                    fill="hsl(var(--primary))"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t('admin.training.progressDistribution')}</CardTitle>
            <CardDescription>{t('admin.training.progressDistributionDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={progressDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                    labelLine={{ stroke: 'hsl(var(--muted-foreground))' }}
                  >
                    {progressDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [`${value} ${t('admin.training.usersLabel')}`, '']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Efficiency Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              {t('admin.training.topEfficiency')}
            </CardTitle>
            <CardDescription>{t('admin.training.topEfficiencyDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {usersWithAnyTime
                .sort((a, b) => b.efficiency - a.efficiency)
                .slice(0, 10)
                .map((user, index) => {
                  const getRankIcon = (rank: number) => {
                    if (rank === 0) return <Trophy className="h-5 w-5 text-yellow-500" />;
                    if (rank === 1) return <Medal className="h-5 w-5 text-gray-400" />;
                    if (rank === 2) return <Award className="h-5 w-5 text-amber-600" />;
                    return <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-muted-foreground">{rank + 1}</span>;
                  };

                  const userName = user.firstName || user.lastName 
                    ? `${user.firstName || ''} ${user.lastName || ''}`.trim()
                    : user.email.split('@')[0];

                  return (
                    <div 
                      key={user.userId} 
                      className={`flex items-center gap-3 p-2.5 rounded-lg ${
                        index < 3 ? 'bg-primary/5 border border-primary/10' : 'bg-muted/30'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {getRankIcon(index)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{userName}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.activePhasesCount} {t('admin.training.phases')} · {formatTime(user.totalSeconds)}
                        </p>
                      </div>
                      <div className={`text-lg font-bold ${getEfficiencyColor(user.efficiency)}`}>
                        {user.efficiency}%
                      </div>
                    </div>
                  );
                })}
              {usersWithAnyTime.length === 0 && (
                <p className="text-center text-muted-foreground py-4">{t('admin.training.noUsersInRanking')}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Completion Speed Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Timer className="h-4 w-4 text-success" />
              {t('admin.training.topTotalTime')}
            </CardTitle>
            <CardDescription>{t('admin.training.topTotalTimeDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {usersWithAnyTime
                .sort((a, b) => b.totalSeconds - a.totalSeconds)
                .slice(0, 10)
                .map((user, index) => {
                  const getRankIcon = (rank: number) => {
                    if (rank === 0) return <Trophy className="h-5 w-5 text-yellow-500" />;
                    if (rank === 1) return <Medal className="h-5 w-5 text-gray-400" />;
                    if (rank === 2) return <Award className="h-5 w-5 text-amber-600" />;
                    return <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-muted-foreground">{rank + 1}</span>;
                  };

                  const userName = user.firstName || user.lastName 
                    ? `${user.firstName || ''} ${user.lastName || ''}`.trim()
                    : user.email.split('@')[0];
                  
                  const progressPercent = Math.min(100, Math.round((user.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100));
                  const isCompleted = progressPercent >= 100;

                  return (
                    <div 
                      key={user.userId} 
                      className={`flex items-center gap-3 p-2.5 rounded-lg ${
                        isCompleted ? 'bg-success/10 border border-success/20' : 
                        index < 3 ? 'bg-primary/5 border border-primary/10' : 'bg-muted/30'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {getRankIcon(index)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{userName}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Progress value={progressPercent} className="h-1.5 w-16" />
                          <span className="text-xs text-muted-foreground">{progressPercent}%</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-bold ${isCompleted ? 'text-success' : ''}`}>
                          {formatTime(user.totalSeconds)}
                        </p>
                        {isCompleted && (
                          <Badge className="bg-success text-[10px] h-4 px-1">{t('admin.training.statusComplete')}</Badge>
                        )}
                      </div>
                    </div>
                  );
                })}
              {usersWithAnyTime.length === 0 && (
                <p className="text-center text-muted-foreground py-4">{t('admin.training.noUsersInRanking')}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>


      {/* Users Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">{t('admin.training.userTableTitle')}</CardTitle>
            <CardDescription>{t('admin.training.userTableDesc')}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchTrainingTime}>
              <RefreshCw className="h-4 w-4 mr-2" />
              {t('admin.training.refresh')}
            </Button>
            <Button variant="outline" size="sm" onClick={exportToCSV}>
              <Download className="h-4 w-4 mr-2" />
              {t('admin.training.exportCSV')}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('admin.training.user')}</TableHead>
                <TableHead className="text-center">F1</TableHead>
                <TableHead className="text-center">F2</TableHead>
                <TableHead className="text-center">F3</TableHead>
                <TableHead className="text-center">F4</TableHead>
                <TableHead className="text-center">F5</TableHead>
                <TableHead className="text-center">{t('admin.training.total')}</TableHead>
                <TableHead className="w-28">{t('admin.training.progressPercent')}</TableHead>
                <TableHead className="text-center">{t('admin.training.efficiency')}</TableHead>
                <TableHead className="text-center">{t('admin.training.status')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersTime.slice(0, 20).map((userTime) => {
                const progressPercent = Math.min(100, Math.round((userTime.totalSeconds / (TOTAL_TARGET_HOURS * 3600)) * 100));
                
                return (
                  <TableRow key={userTime.userId}>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {userTime.firstName || userTime.lastName 
                            ? `${userTime.firstName || ''} ${userTime.lastName || ''}`.trim()
                            : 'N/A'}
                        </p>
                        <p className="text-xs text-muted-foreground">{userTime.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[1] > 0 ? formatTimeShort(userTime.days[1]) : '-'}
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[2] > 0 ? formatTimeShort(userTime.days[2]) : '-'}
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[3] > 0 ? formatTimeShort(userTime.days[3]) : '-'}
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[4] > 0 ? formatTimeShort(userTime.days[4]) : '-'}
                    </TableCell>
                    <TableCell className="text-center text-xs font-mono">
                      {userTime.days[5] > 0 ? formatTimeShort(userTime.days[5]) : '-'}
                    </TableCell>
                    <TableCell className="text-center font-mono font-medium">
                      {userTime.totalSeconds > 0 ? formatTime(userTime.totalSeconds) : '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={progressPercent} className="h-2 w-14" />
                        <span className="text-xs text-muted-foreground w-8">{progressPercent}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {userTime.efficiency > 0 ? (
                        <div className="flex items-center justify-center gap-1">
                          {getEfficiencyIcon(userTime.efficiency)}
                          <span className={`text-sm font-medium ${getEfficiencyColor(userTime.efficiency)}`}>
                            {userTime.efficiency}%
                          </span>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {userTime.isCurrentlyTraining ? (
                        <Badge className="bg-green-500 animate-pulse">{t('admin.training.statusActive')}</Badge>
                      ) : userTime.totalSeconds > 0 ? (
                        <Badge variant="secondary">{t('admin.training.statusPaused')}</Badge>
                      ) : (
                        <Badge variant="outline">-</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
              {usersTime.length === 0 && (
                <TableRow>
                  <TableCell colSpan={10} className="text-center text-muted-foreground py-8">
                    {t('admin.training.noTrainingRecords')}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {usersTime.length > 20 && (
            <p className="text-sm text-muted-foreground text-center mt-4">
              {t('admin.training.first20UsersNote')}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
