import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  RefreshCw, 
  XCircle, 
  Users, 
  BarChart3, 
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingDown,
  Download
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

interface ChapterStat {
  chapterId: string;
  starts: number;
  completions: number;
  refreshes: number;
  refreshRate: number;
}

interface FailedQuestion {
  text: string;
  count: number;
  chapterId: string;
}

interface UserStat {
  userId: string;
  email: string;
  name: string;
  starts: number;
  completions: number;
  refreshes: number;
}

export function QuizAnalyticsDashboard() {
  const [loading, setLoading] = useState(true);
  const [chapterStats, setChapterStats] = useState<ChapterStat[]>([]);
  const [failedQuestions, setFailedQuestions] = useState<FailedQuestion[]>([]);
  const [userStats, setUserStats] = useState<UserStat[]>([]);
  const [totals, setTotals] = useState({
    totalStarts: 0,
    totalCompletions: 0,
    totalRefreshes: 0,
    avgRefreshRate: 0,
    totalWrongAnswers: 0,
  });

  const fetchData = async () => {
    setLoading(true);

    try {
      // Fetch sessions
      const { data: sessions } = await supabase
        .from('quiz_sessions')
        .select('*')
        .order('started_at', { ascending: false });

      // Fetch question performance (wrong answers)
      const { data: performance } = await supabase
        .from('question_performance')
        .select('*')
        .eq('was_correct', false);

      // Fetch user profiles for mapping
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, email, first_name, last_name');

      const profileMap: Record<string, { email: string; name: string }> = {};
      profiles?.forEach(p => {
        profileMap[p.id] = {
          email: p.email,
          name: `${p.first_name || ''} ${p.last_name || ''}`.trim() || 'N/A',
        };
      });

      // Calculate chapter stats
      const chapterMap: Record<string, { starts: number; completions: number }> = {};
      sessions?.forEach(s => {
        if (!chapterMap[s.chapter_id]) {
          chapterMap[s.chapter_id] = { starts: 0, completions: 0 };
        }
        chapterMap[s.chapter_id].starts++;
        if (s.was_completed) {
          chapterMap[s.chapter_id].completions++;
        }
      });

      const chapStats: ChapterStat[] = Object.entries(chapterMap).map(([chapterId, stats]) => ({
        chapterId,
        starts: stats.starts,
        completions: stats.completions,
        refreshes: stats.starts - stats.completions,
        refreshRate: stats.starts > 0 ? ((stats.starts - stats.completions) / stats.starts) * 100 : 0,
      })).sort((a, b) => b.refreshRate - a.refreshRate);

      setChapterStats(chapStats);

      // Calculate failed questions
      const questionMap: Record<string, { text: string; count: number; chapterId: string }> = {};
      performance?.forEach(p => {
        const key = `${p.chapter_id}:${p.question_hash}`;
        if (!questionMap[key]) {
          questionMap[key] = { text: p.question_text, count: 0, chapterId: p.chapter_id };
        }
        questionMap[key].count++;
      });

      const failedQs = Object.values(questionMap)
        .sort((a, b) => b.count - a.count)
        .slice(0, 30);
      setFailedQuestions(failedQs);

      // Calculate user stats
      const userMap: Record<string, { starts: number; completions: number }> = {};
      sessions?.forEach(s => {
        if (!userMap[s.user_id]) {
          userMap[s.user_id] = { starts: 0, completions: 0 };
        }
        userMap[s.user_id].starts++;
        if (s.was_completed) {
          userMap[s.user_id].completions++;
        }
      });

      const uStats: UserStat[] = Object.entries(userMap).map(([userId, stats]) => ({
        userId,
        email: profileMap[userId]?.email || 'Unknown',
        name: profileMap[userId]?.name || 'N/A',
        starts: stats.starts,
        completions: stats.completions,
        refreshes: stats.starts - stats.completions,
      })).sort((a, b) => b.refreshes - a.refreshes);

      setUserStats(uStats);

      // Calculate totals
      const totalStarts = sessions?.length || 0;
      const totalCompletions = sessions?.filter(s => s.was_completed).length || 0;
      const totalRefreshes = totalStarts - totalCompletions;

      setTotals({
        totalStarts,
        totalCompletions,
        totalRefreshes,
        avgRefreshRate: totalStarts > 0 ? (totalRefreshes / totalStarts) * 100 : 0,
        totalWrongAnswers: performance?.length || 0,
      });

    } catch (err) {
      console.error('Failed to fetch quiz analytics:', err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const exportToCSV = () => {
    const headers = ['Capitol', 'Începeri', 'Finalizări', 'Refresh-uri', 'Rată Refresh (%)'];
    const rows = chapterStats.map(s => [
      s.chapterId,
      s.starts,
      s.completions,
      s.refreshes,
      s.refreshRate.toFixed(1),
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `quiz-analytics-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const refreshDistribution = [
    { name: 'Finalizate', value: totals.totalCompletions, color: '#22c55e' },
    { name: 'Refresh/Abandon', value: totals.totalRefreshes, color: '#ef4444' },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{totals.totalStarts}</p>
                <p className="text-xs text-muted-foreground">Începeri Quiz</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">{totals.totalCompletions}</p>
                <p className="text-xs text-muted-foreground">Finalizări</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-2xl font-bold">{totals.totalRefreshes}</p>
                <p className="text-xs text-muted-foreground">Refresh-uri</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-2xl font-bold">{totals.avgRefreshRate.toFixed(1)}%</p>
                <p className="text-xs text-muted-foreground">Rată Abandon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold">{totals.totalWrongAnswers}</p>
                <p className="text-xs text-muted-foreground">Răspunsuri Greșite</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="chapters" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="chapters">Per Capitol</TabsTrigger>
            <TabsTrigger value="questions">Întrebări Greșite</TabsTrigger>
            <TabsTrigger value="users">Per Utilizator</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={fetchData}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualizează
            </Button>
            <Button variant="outline" size="sm" onClick={exportToCSV}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Chapters Tab */}
        <TabsContent value="chapters" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Refresh Rate Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Rată Refresh per Capitol</CardTitle>
                <CardDescription>Procentul de quiz-uri începute dar nefinalizate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chapterStats.slice(0, 15)} layout="vertical">
                      <XAxis type="number" domain={[0, 100]} unit="%" />
                      <YAxis 
                        type="category" 
                        dataKey="chapterId" 
                        width={100}
                        tick={{ fontSize: 10 }}
                      />
                      <Tooltip 
                        formatter={(value: number) => [`${value.toFixed(1)}%`, 'Rată Refresh']}
                      />
                      <Bar dataKey="refreshRate" radius={[0, 4, 4, 0]}>
                        {chapterStats.slice(0, 15).map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.refreshRate > 50 ? '#ef4444' : entry.refreshRate > 25 ? '#eab308' : '#22c55e'} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Distribution Pie */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Distribuție Completări</CardTitle>
                <CardDescription>Finalizate vs Abandonate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={refreshDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {refreshDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chapter Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Detalii per Capitol</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Capitol</TableHead>
                      <TableHead className="text-center">Începeri</TableHead>
                      <TableHead className="text-center">Finalizări</TableHead>
                      <TableHead className="text-center">Refresh-uri</TableHead>
                      <TableHead className="text-center">Rată Refresh</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chapterStats.map(stat => (
                      <TableRow key={stat.chapterId}>
                        <TableCell className="font-medium">{stat.chapterId}</TableCell>
                        <TableCell className="text-center">{stat.starts}</TableCell>
                        <TableCell className="text-center">{stat.completions}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant={stat.refreshes > 0 ? "destructive" : "secondary"}>
                            {stat.refreshes}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge 
                            variant={stat.refreshRate > 50 ? "destructive" : stat.refreshRate > 25 ? "outline" : "default"}
                            className={stat.refreshRate <= 25 ? "bg-green-500" : ""}
                          >
                            {stat.refreshRate.toFixed(1)}%
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Failed Questions Tab */}
        <TabsContent value="questions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Top 30 Întrebări Greșite
              </CardTitle>
              <CardDescription>
                Întrebările la care utilizatorii greșesc cel mai des
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-3">
                  {failedQuestions.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">
                      Nu există date încă. Răspunsurile greșite vor apărea aici.
                    </p>
                  ) : (
                    failedQuestions.map((q, index) => (
                      <div 
                        key={index}
                        className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {q.chapterId}
                              </Badge>
                              <Badge variant="destructive" className="text-xs">
                                {q.count} greșeli
                              </Badge>
                            </div>
                            <p className="text-sm">{q.text}</p>
                          </div>
                          <div className="flex items-center gap-1 text-destructive">
                            <XCircle className="w-4 h-4" />
                            <span className="font-bold">{q.count}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Statistici per Utilizator
              </CardTitle>
              <CardDescription>
                Câte quiz-uri a început/finalizat fiecare utilizator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Utilizator</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead className="text-center">Începeri</TableHead>
                      <TableHead className="text-center">Finalizări</TableHead>
                      <TableHead className="text-center">Refresh-uri</TableHead>
                      <TableHead className="text-center">Rată Finalizare</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userStats.map(user => {
                      const completionRate = user.starts > 0 
                        ? (user.completions / user.starts) * 100 
                        : 0;
                      return (
                        <TableRow key={user.userId}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">{user.email}</TableCell>
                          <TableCell className="text-center">{user.starts}</TableCell>
                          <TableCell className="text-center">{user.completions}</TableCell>
                          <TableCell className="text-center">
                            <Badge variant={user.refreshes > 5 ? "destructive" : "secondary"}>
                              {user.refreshes}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge 
                              variant={completionRate >= 80 ? "default" : completionRate >= 50 ? "outline" : "destructive"}
                              className={completionRate >= 80 ? "bg-green-500" : ""}
                            >
                              {completionRate.toFixed(0)}%
                            </Badge>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
