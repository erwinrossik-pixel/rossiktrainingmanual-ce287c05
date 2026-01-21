import React, { memo, useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserKPI } from '@/hooks/useLearningKPI';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from 'recharts';
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Target,
  AlertCircle,
  Zap,
  Award,
  BookOpen,
} from 'lucide-react';

interface UserKPIPanelProps {
  userKPIs: UserKPI[];
  loading: boolean;
}

// Score is on a 10-point scale (0-10), thresholds: Green ≥9, Amber ≥7, Red <7
const getScoreColor = (score: number) => {
  if (score >= 9) return 'text-emerald-600 dark:text-emerald-400 font-bold';
  if (score >= 7) return 'text-amber-600 dark:text-amber-400 font-semibold';
  if (score >= 5) return 'text-orange-600 dark:text-orange-400 font-semibold';
  return 'text-red-600 dark:text-red-400 font-bold';
};

// Score is on a 10-point scale (0-10), thresholds: Green ≥9, Amber ≥7, Red <7
const getScoreBg = (score: number) => {
  if (score >= 9) return 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700';
  if (score >= 7) return 'bg-amber-100 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700';
  if (score >= 5) return 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700';
  return 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700';
};

const getProgressColor = (progress: number) => {
  if (progress >= 80) return 'bg-emerald-500';
  if (progress >= 50) return 'bg-blue-500';
  if (progress >= 25) return 'bg-amber-500';
  return 'bg-red-500';
};

const getEfficiencyBadge = (efficiency: number, t: (key: string) => string) => {
  if (efficiency >= 5) return { label: t('admin.kpi.efficiencyExcellent'), variant: 'default' as const, color: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' };
  if (efficiency >= 3) return { label: t('admin.kpi.efficiencyGood'), variant: 'secondary' as const, color: 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' };
  if (efficiency >= 1) return { label: t('admin.kpi.efficiencyMedium'), variant: 'outline' as const, color: 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' };
  return { label: t('admin.kpi.efficiencySlow'), variant: 'destructive' as const, color: 'bg-red-500 text-white shadow-lg shadow-red-500/30' };
};

export const UserKPIPanel = memo(function UserKPIPanel({ 
  userKPIs, 
  loading 
}: UserKPIPanelProps) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserKPI | null>(null);

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return userKPIs;
    const term = searchTerm.toLowerCase();
    return userKPIs.filter(u => 
      u.userName.toLowerCase().includes(term) || 
      u.email.toLowerCase().includes(term)
    );
  }, [userKPIs, searchTerm]);

  // Calculate summary stats
  const avgProgress = userKPIs.length > 0 
    ? userKPIs.reduce((sum, u) => sum + u.totalProgress, 0) / userKPIs.length 
    : 0;
  const avgVelocity = userKPIs.length > 0 
    ? userKPIs.reduce((sum, u) => sum + u.learningVelocity, 0) / userKPIs.length 
    : 0;
  const usersWithProblems = userKPIs.filter(u => u.problematicChapters.length > 0).length;
  const avgStudyTime = userKPIs.length > 0 
    ? userKPIs.reduce((sum, u) => sum + u.totalStudyTimeHours, 0) / userKPIs.length 
    : 0;

  // Top performers
  const topPerformers = [...userKPIs]
    .filter(u => u.chaptersCompleted > 0)
    .sort((a, b) => b.efficiency - a.efficiency)
    .slice(0, 5);

  // Users needing support
  // avgScore is on 10-point scale, threshold for needing support is <7
  const needingSupport = userKPIs.filter(u => 
    u.problematicChapters.length >= 2 || 
    (u.avgScore < 7 && u.chaptersCompleted > 3)
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Stats - Enhanced visibility */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 border-2 border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-500/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <div className="p-2 bg-blue-500 rounded-lg shadow-lg shadow-blue-500/30">
                <Target className="h-4 w-4 text-white" />
              </div>
              {t('admin.kpi.avgProgress')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-blue-700 dark:text-blue-300">{avgProgress.toFixed(1)}%</div>
            <div className="mt-2 h-3 rounded-full bg-blue-200 dark:bg-blue-800 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${getProgressColor(avgProgress)}`}
                style={{ width: `${avgProgress}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950/50 dark:to-yellow-900/30 border-2 border-amber-200 dark:border-amber-800 shadow-lg shadow-amber-500/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-amber-800 dark:text-amber-200">
              <div className="p-2 bg-amber-500 rounded-lg shadow-lg shadow-amber-500/30">
                <Zap className="h-4 w-4 text-white" />
              </div>
              {t('admin.kpi.learningSpeed')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-amber-700 dark:text-amber-300">{avgVelocity.toFixed(1)}</div>
            <p className="text-sm font-medium text-amber-600 dark:text-amber-400">{t('admin.kpi.chaptersPerWeek')}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/50 dark:to-red-900/30 border-2 border-orange-200 dark:border-orange-800 shadow-lg shadow-orange-500/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-orange-800 dark:text-orange-200">
              <div className="p-2 bg-orange-500 rounded-lg shadow-lg shadow-orange-500/30">
                <AlertCircle className="h-4 w-4 text-white" />
              </div>
              {t('admin.kpi.usersWithProblems')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-orange-600 dark:text-orange-400">{usersWithProblems}</div>
            <p className="text-sm font-medium text-orange-600 dark:text-orange-400">{t('admin.kpi.haveProblematicChapters')}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950/50 dark:to-violet-900/30 border-2 border-purple-200 dark:border-purple-800 shadow-lg shadow-purple-500/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-purple-800 dark:text-purple-200">
              <div className="p-2 bg-purple-500 rounded-lg shadow-lg shadow-purple-500/30">
                <Clock className="h-4 w-4 text-white" />
              </div>
              {t('admin.kpi.avgStudyTime')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-purple-700 dark:text-purple-300">{avgStudyTime.toFixed(1)}h</div>
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400">{t('admin.kpi.perUser')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers & Need Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/30 dark:to-green-950/30 shadow-xl">
          <CardHeader className="border-b border-emerald-200 dark:border-emerald-800 bg-emerald-100/50 dark:bg-emerald-900/30">
            <CardTitle className="text-xl flex items-center gap-3 text-emerald-800 dark:text-emerald-200">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg shadow-lg shadow-amber-500/40">
                <Award className="h-6 w-6 text-white" />
              </div>
              {t('admin.kpi.topPerformers')}
            </CardTitle>
            <CardDescription className="text-emerald-700 dark:text-emerald-300 font-medium">{t('admin.kpi.mostEfficient')}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
                  {topPerformers.map((user, idx) => {
                    const effBadge = getEfficiencyBadge(user.efficiency, t);
                    const medalColors = [
                  'bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg shadow-amber-500/40',
                  'bg-gradient-to-br from-gray-300 to-gray-400 text-white shadow-lg shadow-gray-400/40',
                  'bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/40',
                  'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300',
                  'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300',
                ];
                return (
                  <div 
                    key={user.userId} 
                    className="flex items-center justify-between p-4 bg-white dark:bg-emerald-900/20 rounded-xl cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-800/30 transition-all duration-200 border border-emerald-200 dark:border-emerald-700 shadow-sm hover:shadow-md"
                    onClick={() => setSelectedUser(user)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full ${medalColors[idx]}`}>
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{user.userName}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <p className="font-extrabold text-lg text-emerald-700 dark:text-emerald-300">{user.chaptersCompleted}/{user.totalChapters}</p>
                      <Badge className={`${effBadge.color} font-semibold`}>{effBadge.label}</Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Needing Support */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/30 dark:to-red-950/30 shadow-xl">
          <CardHeader className="border-b border-orange-200 dark:border-orange-800 bg-orange-100/50 dark:bg-orange-900/30">
            <CardTitle className="text-xl flex items-center gap-3 text-orange-800 dark:text-orange-200">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg shadow-orange-500/40 animate-pulse">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              {t('admin.kpi.needsSupport')}
            </CardTitle>
            <CardDescription className="text-orange-700 dark:text-orange-300 font-medium">{t('admin.kpi.learningDifficulties')}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ScrollArea className="h-[300px]">
              <div className="space-y-3 pr-4">
                {needingSupport.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 bg-emerald-100 dark:bg-emerald-900/50 rounded-full mb-4">
                      <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="text-emerald-700 dark:text-emerald-300 font-semibold text-lg">{t('admin.kpi.excellent')}</p>
                    <p className="text-muted-foreground">{t('admin.kpi.noUsersNeedSupport')}</p>
                  </div>
                ) : (
                  needingSupport.map((user) => (
                    <div 
                      key={user.userId}
                      className="flex items-start justify-between p-4 bg-white dark:bg-orange-900/20 rounded-xl cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-800/30 transition-all duration-200 border-2 border-orange-300 dark:border-orange-700 shadow-sm hover:shadow-md"
                      onClick={() => setSelectedUser(user)}
                    >
                      <div className="flex-1">
                        <p className="font-bold text-foreground">{user.userName}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        {user.problematicChapters.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {user.problematicChapters.slice(0, 3).map(ch => (
                              <Badge key={ch} variant="destructive" className="text-xs bg-red-500 text-white">
                                {ch.slice(0, 10)}
                              </Badge>
                            ))}
                            {user.problematicChapters.length > 3 && (
                              <Badge variant="outline" className="text-xs border-red-300 text-red-600 dark:text-red-400">
                                +{user.problematicChapters.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className={`text-2xl font-extrabold ${getScoreColor(user.avgScore)} px-3 py-1 rounded-lg border ${getScoreBg(user.avgScore)}`}>
                          {user.avgScore.toFixed(1)}/10
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 font-medium">{t('admin.kpi.avgScore')}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* User Search & List */}
      <Card className="border-2 border-slate-200 dark:border-slate-700 shadow-xl">
        <CardHeader className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <CardTitle className="text-xl flex items-center gap-3 text-slate-800 dark:text-slate-200">
            <div className="p-2 bg-gradient-to-br from-slate-500 to-slate-700 rounded-lg shadow-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            {t('admin.kpi.allUsers')} ({filteredUsers.length})
          </CardTitle>
          <div className="relative mt-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={t('admin.kpi.searchByNameEmail')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-base border-2 focus:border-primary"
            />
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <ScrollArea className="h-[450px]">
            <div className="space-y-3 pr-4">
              {filteredUsers.map((user) => {
                    const effBadge = getEfficiencyBadge(user.efficiency, t);
                    const progressPercent = (user.chaptersCompleted / user.totalChapters) * 100;
                return (
                  <div 
                    key={user.userId}
                    className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedUser?.userId === user.userId 
                        ? 'bg-primary/15 border-2 border-primary shadow-lg shadow-primary/20' 
                        : 'bg-white dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-md'
                    }`}
                    onClick={() => setSelectedUser(user)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-base truncate">{user.userName}</p>
                        {user.problematicChapters.length > 0 && (
                          <div className="p-1 bg-orange-100 dark:bg-orange-900/50 rounded-full">
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                      {/* Mini progress bar */}
                      <div className="mt-2 h-2 w-32 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all ${getProgressColor(progressPercent)}`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-6 shrink-0">
                      <div className="text-center px-3 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <p className="text-lg font-bold text-blue-700 dark:text-blue-300">{user.chaptersCompleted}/{user.totalChapters}</p>
                        <p className="text-xs font-medium text-blue-600 dark:text-blue-400">capitole</p>
                      </div>
                      <div className={`text-center px-3 py-2 rounded-lg border ${getScoreBg(user.avgScore)}`}>
                        <p className={`text-lg ${getScoreColor(user.avgScore)}`}>
                          {user.avgScore.toFixed(1)}/10
                        </p>
                        <p className="text-xs font-medium text-muted-foreground">scor</p>
                      </div>
                      <div className="text-center px-3 py-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                        <p className="text-lg font-bold text-purple-700 dark:text-purple-300">{user.learningVelocity.toFixed(1)}</p>
                        <p className="text-xs font-medium text-purple-600 dark:text-purple-400">viteză</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Selected User Details */}
      {selectedUser && (
        <Card className="border-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{selectedUser.userName}</CardTitle>
                <CardDescription>{selectedUser.email}</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedUser(null)}>
                Închide
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Stats */}
              <div className="space-y-4">
                <h4 className="font-semibold">Statistici</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Progres Total</p>
                    <p className="text-xl font-bold">{selectedUser.totalProgress.toFixed(1)}%</p>
                    <Progress value={selectedUser.totalProgress} className="mt-1" />
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Capitole Complete</p>
                    <p className="text-xl font-bold">{selectedUser.chaptersCompleted}/{selectedUser.totalChapters}</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Timp Total Studiu</p>
                    <p className="text-xl font-bold">{selectedUser.totalStudyTimeHours.toFixed(1)}h</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Eficiență</p>
                    <p className="text-xl font-bold">{selectedUser.efficiency.toFixed(2)}</p>
                  </div>
                </div>

                {selectedUser.problematicChapters.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Capitole Problematice</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedUser.problematicChapters.map(ch => (
                        <Badge key={ch} variant="destructive">{ch}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Score Evolution Chart */}
              <div>
                <h4 className="font-semibold mb-4">Evoluția Scorului</h4>
                {selectedUser.scoreEvolution.length > 0 ? (
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={selectedUser.scoreEvolution.slice(-20)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                      <YAxis domain={[0, 10]} />
                      <Tooltip 
                        formatter={(value: number) => [`${value}/10`, 'Scor']}
                        labelFormatter={(label, payload) => {
                          const chapter = payload?.[0]?.payload?.chapter;
                          return `${label}${chapter ? ` - ${chapter}` : ''}`;
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="score" 
                        stroke="hsl(var(--primary))" 
                        fill="hsl(var(--primary) / 0.2)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-muted-foreground text-sm text-center py-8">
                    Nu există date despre evoluția scorului
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
});
