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
  if (score >= 9) return 'text-success font-bold';
  if (score >= 7) return 'text-warning font-semibold';
  if (score >= 5) return 'text-warning font-semibold';
  return 'text-destructive font-bold';
};

// Score is on a 10-point scale (0-10), thresholds: Green ≥9, Amber ≥7, Red <7
const getScoreBg = (score: number) => {
  if (score >= 9) return 'bg-success/10 border-success/30';
  if (score >= 7) return 'bg-warning/10 border-warning/30';
  if (score >= 5) return 'bg-warning/10 border-warning/30';
  return 'bg-destructive/10 border-destructive/30';
};

const getProgressColor = (progress: number) => {
  if (progress >= 80) return 'bg-success';
  if (progress >= 50) return 'bg-info';
  if (progress >= 25) return 'bg-warning';
  return 'bg-destructive';
};

const getEfficiencyBadge = (efficiency: number, t: (key: string) => string) => {
  if (efficiency >= 5) return { label: t('admin.kpi.efficiencyExcellent'), variant: 'default' as const, color: 'bg-success text-success-foreground shadow-lg' };
  if (efficiency >= 3) return { label: t('admin.kpi.efficiencyGood'), variant: 'secondary' as const, color: 'bg-info text-info-foreground shadow-lg' };
  if (efficiency >= 1) return { label: t('admin.kpi.efficiencyMedium'), variant: 'outline' as const, color: 'bg-warning text-warning-foreground shadow-lg' };
  return { label: t('admin.kpi.efficiencySlow'), variant: 'destructive' as const, color: 'bg-destructive text-destructive-foreground shadow-lg' };
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
        <Card className="bg-gradient-to-br from-info/10 to-info/5 dark:from-info/20 dark:to-info/10 border-2 border-info/30 dark:border-info/40 shadow-lg shadow-info/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-info">
              <div className="p-2 bg-info rounded-lg shadow-lg shadow-info/30">
                <Target className="h-4 w-4 text-info-foreground" />
              </div>
              {t('admin.kpi.avgProgress')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-info">{avgProgress.toFixed(1)}%</div>
            <div className="mt-2 h-3 rounded-full bg-info/20 dark:bg-info/30 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${getProgressColor(avgProgress)}`}
                style={{ width: `${avgProgress}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/10 to-warning/5 dark:from-warning/20 dark:to-warning/10 border-2 border-warning/30 dark:border-warning/40 shadow-lg shadow-warning/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-warning">
              <div className="p-2 bg-warning rounded-lg shadow-lg shadow-warning/30">
                <Zap className="h-4 w-4 text-warning-foreground" />
              </div>
              {t('admin.kpi.learningSpeed')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-warning">{avgVelocity.toFixed(1)}</div>
            <p className="text-sm font-medium text-warning">{t('admin.kpi.chaptersPerWeek')}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/10 to-destructive/10 dark:from-warning/20 dark:to-destructive/20 border-2 border-warning/30 dark:border-warning/40 shadow-lg shadow-warning/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-warning">
              <div className="p-2 bg-warning rounded-lg shadow-lg shadow-warning/30">
                <AlertCircle className="h-4 w-4 text-warning-foreground" />
              </div>
              {t('admin.kpi.usersWithProblems')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-warning">{usersWithProblems}</div>
            <p className="text-sm font-medium text-warning">{t('admin.kpi.haveProblematicChapters')}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border-2 border-primary/30 dark:border-primary/40 shadow-lg shadow-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-primary">
              <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/30">
                <Clock className="h-4 w-4 text-primary-foreground" />
              </div>
              {t('admin.kpi.avgStudyTime')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-extrabold text-primary">{avgStudyTime.toFixed(1)}h</div>
            <p className="text-sm font-medium text-primary">{t('admin.kpi.perUser')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers & Need Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card className="border-2 border-success/20 bg-gradient-to-br from-success/5 to-success/10 shadow-xl">
          <CardHeader className="border-b border-success/20 bg-success/10">
            <CardTitle className="text-xl flex items-center gap-3 text-success">
              <div className="p-2 bg-gradient-to-br from-warning to-warning/80 rounded-lg shadow-lg">
                <Award className="h-6 w-6 text-warning-foreground" />
              </div>
              {t('admin.kpi.topPerformers')}
            </CardTitle>
            <CardDescription className="text-success/80 font-medium">{t('admin.kpi.mostEfficient')}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
                  {topPerformers.map((user, idx) => {
                    const effBadge = getEfficiencyBadge(user.efficiency, t);
                    const medalColors = [
                  'bg-gradient-to-br from-warning to-warning/80 text-warning-foreground shadow-lg',
                  'bg-gradient-to-br from-muted to-muted/80 text-muted-foreground shadow-lg',
                  'bg-gradient-to-br from-warning/80 to-warning/60 text-warning-foreground shadow-lg',
                  'bg-success/10 text-success',
                  'bg-success/10 text-success',
                ];
                return (
                  <div 
                    key={user.userId} 
                    className="flex items-center justify-between p-4 bg-card rounded-xl cursor-pointer hover:bg-success/10 transition-all duration-200 border border-success/20 shadow-sm hover:shadow-md"
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
                      <p className="font-extrabold text-lg text-success">{user.chaptersCompleted}/{user.totalChapters}</p>
                      <Badge className={`${effBadge.color} font-semibold`}>{effBadge.label}</Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Needing Support */}
        <Card className="border-2 border-warning/30 dark:border-warning/40 bg-gradient-to-br from-warning/10 to-destructive/10 dark:from-warning/20 dark:to-destructive/20 shadow-xl">
          <CardHeader className="border-b border-warning/30 dark:border-warning/40 bg-warning/20 dark:bg-warning/10">
            <CardTitle className="text-xl flex items-center gap-3 text-warning">
              <div className="p-2 bg-gradient-to-br from-warning to-destructive rounded-lg shadow-lg shadow-warning/40 animate-pulse">
                <AlertCircle className="h-6 w-6 text-warning-foreground" />
              </div>
              {t('admin.kpi.needsSupport')}
            </CardTitle>
            <CardDescription className="text-warning font-medium">{t('admin.kpi.learningDifficulties')}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ScrollArea className="h-[300px]">
              <div className="space-y-3 pr-4">
                {needingSupport.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 bg-success/10 rounded-full mb-4">
                      <Award className="h-8 w-8 text-success" />
                    </div>
                    <p className="text-success font-semibold text-lg">{t('admin.kpi.excellent')}</p>
                    <p className="text-muted-foreground">{t('admin.kpi.noUsersNeedSupport')}</p>
                  </div>
                ) : (
                  needingSupport.map((user) => (
                    <div 
                      key={user.userId}
                      className="flex items-start justify-between p-4 bg-card dark:bg-warning/10 rounded-xl cursor-pointer hover:bg-warning/10 dark:hover:bg-warning/20 transition-all duration-200 border-2 border-warning/30 dark:border-warning/40 shadow-sm hover:shadow-md"
                      onClick={() => setSelectedUser(user)}
                    >
                      <div className="flex-1">
                        <p className="font-bold text-foreground">{user.userName}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        {user.problematicChapters.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {user.problematicChapters.slice(0, 3).map(ch => (
                              <Badge key={ch} variant="destructive" className="text-xs bg-destructive text-destructive-foreground">
                                {ch.slice(0, 10)}
                              </Badge>
                            ))}
                            {user.problematicChapters.length > 3 && (
                              <Badge variant="outline" className="text-xs border-destructive/30 text-destructive">
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
      <Card className="border-2 border-border shadow-xl">
        <CardHeader className="border-b border-border bg-muted/50">
          <CardTitle className="text-xl flex items-center gap-3 text-foreground">
            <div className="p-2 bg-gradient-to-br from-muted-foreground to-foreground rounded-lg shadow-lg">
              <BookOpen className="h-5 w-5 text-background" />
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
                        : 'bg-background hover:bg-muted/50 border-2 border-border hover:border-muted-foreground/30 shadow-sm hover:shadow-md'
                    }`}
                    onClick={() => setSelectedUser(user)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-base truncate">{user.userName}</p>
                        {user.problematicChapters.length > 0 && (
                          <div className="p-1 bg-warning/20 dark:bg-warning/30 rounded-full">
                            <AlertCircle className="h-4 w-4 text-warning" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                      {/* Mini progress bar */}
                      <div className="mt-2 h-2 w-32 rounded-full bg-muted overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all ${getProgressColor(progressPercent)}`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-6 shrink-0">
                      <div className="text-center px-3 py-2 bg-info/10 dark:bg-info/20 rounded-lg">
                        <p className="text-lg font-bold text-info">{user.chaptersCompleted}/{user.totalChapters}</p>
                        <p className="text-xs font-medium text-info">{t('admin.kpi.chapters')}</p>
                      </div>
                      <div className={`text-center px-3 py-2 rounded-lg border ${getScoreBg(user.avgScore)}`}>
                        <p className={`text-lg ${getScoreColor(user.avgScore)}`}>
                          {user.avgScore.toFixed(1)}/10
                        </p>
                        <p className="text-xs font-medium text-muted-foreground">{t('admin.kpi.score')}</p>
                      </div>
                      <div className="text-center px-3 py-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <p className="text-lg font-bold text-primary">{user.learningVelocity.toFixed(1)}</p>
                        <p className="text-xs font-medium text-primary">{t('admin.kpi.speed')}</p>
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
                {t('admin.kpi.close')}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Stats */}
              <div className="space-y-4">
                <h4 className="font-semibold">{t('admin.kpi.statistics')}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">{t('admin.kpi.totalProgress')}</p>
                    <p className="text-xl font-bold">{selectedUser.totalProgress.toFixed(1)}%</p>
                    <Progress value={selectedUser.totalProgress} className="mt-1" />
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">{t('admin.kpi.chaptersCompleted')}</p>
                    <p className="text-xl font-bold">{selectedUser.chaptersCompleted}/{selectedUser.totalChapters}</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">{t('admin.kpi.totalStudyTime')}</p>
                    <p className="text-xl font-bold">{selectedUser.totalStudyTimeHours.toFixed(1)}h</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">{t('admin.kpi.efficiencyLabel')}</p>
                    <p className="text-xl font-bold">{selectedUser.efficiency.toFixed(2)}</p>
                  </div>
                </div>

                {selectedUser.problematicChapters.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-warning mb-2">{t('admin.kpi.problematicChaptersTitle')}</h4>
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
                <h4 className="font-semibold mb-4">{t('admin.kpi.scoreEvolution')}</h4>
                {selectedUser.scoreEvolution.length > 0 ? (
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={selectedUser.scoreEvolution.slice(-20)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                      <YAxis domain={[0, 10]} />
                      <Tooltip 
                        formatter={(value: number) => [`${value}/10`, t('admin.kpi.score')]}
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
                    {t('admin.kpi.noScoreData')}
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
