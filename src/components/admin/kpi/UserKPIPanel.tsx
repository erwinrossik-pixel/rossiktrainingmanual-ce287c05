import React, { memo, useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserKPI } from '@/hooks/useLearningKPI';
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

const getScoreColor = (score: number) => {
  if (score >= 90) return 'text-green-600';
  if (score >= 70) return 'text-yellow-600';
  if (score >= 50) return 'text-orange-600';
  return 'text-red-600';
};

const getEfficiencyBadge = (efficiency: number) => {
  if (efficiency >= 5) return { label: 'Excelent', variant: 'default' as const, color: 'bg-green-500' };
  if (efficiency >= 3) return { label: 'Bun', variant: 'secondary' as const, color: 'bg-blue-500' };
  if (efficiency >= 1) return { label: 'Mediu', variant: 'outline' as const, color: 'bg-yellow-500' };
  return { label: 'Lent', variant: 'destructive' as const, color: 'bg-red-500' };
};

export const UserKPIPanel = memo(function UserKPIPanel({ 
  userKPIs, 
  loading 
}: UserKPIPanelProps) {
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
  const needingSupport = userKPIs.filter(u => 
    u.problematicChapters.length >= 2 || 
    (u.avgScore < 70 && u.chaptersCompleted > 3)
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
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              Progres Mediu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgProgress.toFixed(1)}%</div>
            <Progress value={avgProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              Viteză Învățare
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgVelocity.toFixed(1)}</div>
            <p className="text-xs text-muted-foreground">capitole/săptămână</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              Utilizatori cu Probleme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{usersWithProblems}</div>
            <p className="text-xs text-muted-foreground">au capitole problematice</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Timp Studiu Mediu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgStudyTime.toFixed(1)}h</div>
            <p className="text-xs text-muted-foreground">per utilizator</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers & Need Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              Top Performeri
            </CardTitle>
            <CardDescription>Cei mai eficienți cursanți</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topPerformers.map((user, idx) => {
                const effBadge = getEfficiencyBadge(user.efficiency);
                return (
                  <div 
                    key={user.userId} 
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                    onClick={() => setSelectedUser(user)}
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-lg font-bold w-8 h-8 flex items-center justify-center">
                        {idx + 1}
                      </Badge>
                      <div>
                        <p className="font-medium">{user.userName}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{user.chaptersCompleted}/{user.totalChapters}</p>
                      <Badge className={effBadge.color}>{effBadge.label}</Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Needing Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              Necesită Suport
            </CardTitle>
            <CardDescription>Utilizatori cu dificultăți de învățare</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[280px]">
              <div className="space-y-3 pr-4">
                {needingSupport.length === 0 ? (
                  <p className="text-muted-foreground text-sm text-center py-8">
                    Nu există utilizatori care necesită suport urgent
                  </p>
                ) : (
                  needingSupport.map((user) => (
                    <div 
                      key={user.userId}
                      className="flex items-start justify-between p-3 bg-orange-500/10 rounded-lg cursor-pointer hover:bg-orange-500/20 transition-colors"
                      onClick={() => setSelectedUser(user)}
                    >
                      <div>
                        <p className="font-medium">{user.userName}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                        {user.problematicChapters.length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {user.problematicChapters.slice(0, 3).map(ch => (
                              <Badge key={ch} variant="outline" className="text-xs">
                                {ch.slice(0, 10)}
                              </Badge>
                            ))}
                            {user.problematicChapters.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{user.problematicChapters.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <p className={`font-bold ${getScoreColor(user.avgScore)}`}>
                          {user.avgScore.toFixed(0)}%
                        </p>
                        <p className="text-xs text-muted-foreground">scor mediu</p>
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
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Toți Utilizatorii
          </CardTitle>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Caută după nume sau email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-2 pr-4">
              {filteredUsers.map((user) => {
                const effBadge = getEfficiencyBadge(user.efficiency);
                return (
                  <div 
                    key={user.userId}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedUser?.userId === user.userId 
                        ? 'bg-primary/10 border border-primary' 
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedUser(user)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium truncate">{user.userName}</p>
                        {user.problematicChapters.length > 0 && (
                          <AlertCircle className="h-4 w-4 text-orange-500 shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-center">
                        <p className="text-sm font-medium">{user.chaptersCompleted}/{user.totalChapters}</p>
                        <p className="text-xs text-muted-foreground">capitole</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-sm font-medium ${getScoreColor(user.avgScore)}`}>
                          {user.avgScore.toFixed(0)}%
                        </p>
                        <p className="text-xs text-muted-foreground">scor</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{user.learningVelocity.toFixed(1)}</p>
                        <p className="text-xs text-muted-foreground">viteză</p>
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
