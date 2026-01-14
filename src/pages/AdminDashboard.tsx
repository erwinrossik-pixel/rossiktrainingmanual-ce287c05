import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, Users, BookOpen, Trophy, Clock, Eye, Download, BarChart3, RefreshCw, RotateCcw, Unlock, Shield, Activity } from 'lucide-react';
import { toast } from 'sonner';
import { GovernanceDashboard } from '@/components/admin/GovernanceDashboard';
import { format, subDays } from 'date-fns';
import { AdminCharts } from '@/components/admin/AdminCharts';
import { AutoUpdateDashboard } from '@/components/admin/AutoUpdateDashboard';
import { UsageAnalytics } from '@/components/admin/UsageAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface UserWithProgress {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: string;
  created_at: string;
  chaptersCompleted: number;
  totalChapters: number;
  averageScore: number;
  lastActivity: string | null;
}

interface ChapterProgress {
  chapter_id: string;
  status: string;
  best_score: number;
  attempts_count: number;
  completed_at: string | null;
  last_attempt_at: string | null;
}

interface QuizAttempt {
  id: string;
  chapter_id: string;
  score: number;
  total_questions: number;
  passed: boolean;
  created_at: string;
  language: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, profile, loading, isAdmin } = useAuth();
  const [users, setUsers] = useState<UserWithProgress[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [selectedUser, setSelectedUser] = useState<UserWithProgress | null>(null);
  const [userProgress, setUserProgress] = useState<ChapterProgress[]>([]);
  const [userAttempts, setUserAttempts] = useState<QuizAttempt[]>([]);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [allAttempts, setAllAttempts] = useState<QuizAttempt[]>([]);
  const [chapters, setChapters] = useState<{ id: string; slug: string }[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    } else if (!loading && !isAdmin) {
      navigate('/');
    }
  }, [user, loading, isAdmin, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  const fetchUsers = async () => {
    setLoadingUsers(true);
    
    // Fetch all profiles
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (profilesError) {
      console.error('Error fetching profiles:', profilesError);
      setLoadingUsers(false);
      return;
    }

    // Fetch all chapter progress
    const { data: progress } = await supabase
      .from('chapter_progress')
      .select('*');

    // Fetch all quiz attempts for last activity
    const { data: attempts } = await supabase
      .from('quiz_attempts')
      .select('user_id, created_at')
      .order('created_at', { ascending: false });

    // Fetch all chapters
    const { data: chaptersData, count: totalChapters } = await supabase
      .from('chapters')
      .select('id, slug', { count: 'exact' })
      .order('order_index');

    setChapters(chaptersData || []);

    // Fetch all quiz attempts for charts
    const { data: allAttemptsData } = await supabase
      .from('quiz_attempts')
      .select('*')
      .order('created_at', { ascending: false });

    setAllAttempts(allAttemptsData || []);

    // Process users with their progress
    const usersWithProgress: UserWithProgress[] = profiles.map((profile) => {
      const userProgress = progress?.filter(p => p.user_id === profile.id) || [];
      const completedChapters = userProgress.filter(p => p.status === 'completed').length;
      const scores = userProgress.filter(p => p.best_score > 0).map(p => p.best_score);
      const averageScore = scores.length > 0 
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) 
        : 0;
      
      const userAttempts = attempts?.filter(a => a.user_id === profile.id) || [];
      const lastActivity = userAttempts[0]?.created_at || profile.updated_at;

      return {
        id: profile.id,
        email: profile.email,
        first_name: profile.first_name,
        last_name: profile.last_name,
        role: profile.role,
        created_at: profile.created_at,
        chaptersCompleted: completedChapters,
        totalChapters: totalChapters || 40,
        averageScore,
        lastActivity,
      };
    });

    setUsers(usersWithProgress);
    setLoadingUsers(false);
  };

  const openUserDetails = async (userItem: UserWithProgress) => {
    setSelectedUser(userItem);
    setDetailsOpen(true);

    // Fetch user's chapter progress
    const { data: progress } = await supabase
      .from('chapter_progress')
      .select('*')
      .eq('user_id', userItem.id)
      .order('chapter_id');

    setUserProgress(progress || []);

    // Fetch user's quiz attempts
    const { data: attempts } = await supabase
      .from('quiz_attempts')
      .select('*')
      .eq('user_id', userItem.id)
      .order('created_at', { ascending: false })
      .limit(50);

    setUserAttempts(attempts || []);
  };

  const resetBestScore = async (chapterId: string, userId: string) => {
    const { error } = await supabase
      .from('chapter_progress')
      .update({ 
        best_score: 0,
        status: 'unlocked',
        completed_at: null,
        attempts_count: 0
      })
      .eq('user_id', userId)
      .eq('chapter_id', chapterId);

    if (error) {
      console.error('Error resetting score:', error);
      toast.error('Eroare la resetarea scorului');
      return;
    }

    toast.success(`Scorul pentru ${chapterId} a fost resetat`);
    
    // Refresh user progress
    if (selectedUser) {
      const { data: progress } = await supabase
        .from('chapter_progress')
        .select('*')
        .eq('user_id', selectedUser.id)
        .order('chapter_id');
      setUserProgress(progress || []);
    }
    
    // Refresh main users list
    fetchUsers();
  };

  const resetAllScores = async (userId: string) => {
    const { error } = await supabase
      .from('chapter_progress')
      .update({ 
        best_score: 0,
        status: 'locked',
        completed_at: null,
        attempts_count: 0
      })
      .eq('user_id', userId);

    if (error) {
      console.error('Error resetting all scores:', error);
      toast.error('Eroare la resetarea scorurilor');
      return;
    }

    // Unlock first chapter
    await supabase
      .from('chapter_progress')
      .update({ status: 'unlocked' })
      .eq('user_id', userId)
      .eq('chapter_id', 'intro');

    toast.success('Toate scorurile au fost resetate');
    
    // Refresh user progress
    if (selectedUser) {
      const { data: progress } = await supabase
        .from('chapter_progress')
        .select('*')
        .eq('user_id', selectedUser.id)
        .order('chapter_id');
      setUserProgress(progress || []);
    }
    
    // Refresh main users list
    fetchUsers();
  };

  const unlockChapter = async (chapterId: string, userId: string) => {
    // Check if record exists
    const { data: existing } = await supabase
      .from('chapter_progress')
      .select('id')
      .eq('user_id', userId)
      .eq('chapter_id', chapterId)
      .single();

    if (existing) {
      // Update existing record
      const { error } = await supabase
        .from('chapter_progress')
        .update({ status: 'unlocked' })
        .eq('user_id', userId)
        .eq('chapter_id', chapterId);

      if (error) {
        console.error('Error unlocking chapter:', error);
        toast.error('Eroare la deblocarea capitolului');
        return;
      }
    } else {
      // Insert new record
      const { error } = await supabase
        .from('chapter_progress')
        .insert({ 
          user_id: userId,
          chapter_id: chapterId,
          status: 'unlocked',
          best_score: 0,
          attempts_count: 0
        });

      if (error) {
        console.error('Error unlocking chapter:', error);
        toast.error('Eroare la deblocarea capitolului');
        return;
      }
    }

    toast.success(`Capitolul ${chapterId} a fost deblocat`);
    
    // Refresh user progress
    if (selectedUser) {
      const { data: progress } = await supabase
        .from('chapter_progress')
        .select('*')
        .eq('user_id', selectedUser.id)
        .order('chapter_id');
      setUserProgress(progress || []);
    }
  };

  const exportToCSV = () => {
    const headers = ['Nume', 'Email', 'Rol', 'Capitole Completate', 'Total Capitole', 'Scor Mediu', 'Ultima Activitate', 'Data Înregistrare'];
    const rows = users.map(u => [
      `${u.first_name || ''} ${u.last_name || ''}`.trim() || 'N/A',
      u.email,
      u.role,
      u.chaptersCompleted,
      u.totalChapters,
      `${u.averageScore}%`,
      u.lastActivity ? format(new Date(u.lastActivity), 'dd.MM.yyyy HH:mm') : 'N/A',
      format(new Date(u.created_at), 'dd.MM.yyyy'),
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `rossik-users-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500">Completat</Badge>;
      case 'in_progress':
        return <Badge className="bg-yellow-500">În Progres</Badge>;
      case 'unlocked':
        return <Badge className="bg-blue-500">Deblocat</Badge>;
      default:
        return <Badge variant="secondary">Blocat</Badge>;
    }
  };

  // Calculate chart data
  const chapterStats = chapters.map(chapter => {
    const chapterAttempts = allAttempts.filter(a => a.chapter_id === chapter.id);
    const passedAttempts = chapterAttempts.filter(a => a.passed);
    const scores = chapterAttempts.map(a => a.score);
    
    return {
      chapterId: chapter.id,
      chapterName: chapter.slug.replace(/-/g, ' ').slice(0, 15),
      attempts: chapterAttempts.length,
      passRate: chapterAttempts.length > 0 ? (passedAttempts.length / chapterAttempts.length) * 100 : 0,
      avgScore: scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0,
    };
  });

  const dailyActivity = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(new Date(), 29 - i);
    const dateStr = format(date, 'yyyy-MM-dd');
    const dayAttempts = allAttempts.filter(a => 
      format(new Date(a.created_at), 'yyyy-MM-dd') === dateStr
    );
    
    return {
      date: format(date, 'dd/MM'),
      attempts: dayAttempts.length,
      passed: dayAttempts.filter(a => a.passed).length,
    };
  });

  const completionDistribution = [
    { name: '0 capitole', value: users.filter(u => u.chaptersCompleted === 0).length, color: '#ef4444' },
    { name: '1-10 capitole', value: users.filter(u => u.chaptersCompleted >= 1 && u.chaptersCompleted <= 10).length, color: '#eab308' },
    { name: '11-25 capitole', value: users.filter(u => u.chaptersCompleted >= 11 && u.chaptersCompleted <= 25).length, color: '#3b82f6' },
    { name: '26-39 capitole', value: users.filter(u => u.chaptersCompleted >= 26 && u.chaptersCompleted <= 39).length, color: '#8b5cf6' },
    { name: 'Toate (40)', value: users.filter(u => u.chaptersCompleted >= 40).length, color: '#22c55e' },
  ];

  const scoreDistribution = [
    { range: '0-2', count: allAttempts.filter(a => a.score >= 0 && a.score <= 2).length },
    { range: '3-4', count: allAttempts.filter(a => a.score >= 3 && a.score <= 4).length },
    { range: '5-6', count: allAttempts.filter(a => a.score >= 5 && a.score <= 6).length },
    { range: '7-8', count: allAttempts.filter(a => a.score >= 7 && a.score <= 8).length },
    { range: '9-10', count: allAttempts.filter(a => a.score >= 9 && a.score <= 10).length },
  ];

  if (loading || loadingUsers) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Gestionare utilizatori și progres</p>
            </div>
          </div>
          <Button onClick={exportToCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Utilizatori</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Capitole Total</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users[0]?.totalChapters || 40}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Scor Mediu Global</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {users.length > 0 
                  ? Math.round(users.reduce((a, b) => a + b.averageScore, 0) / users.length)
                  : 0}%
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Utilizatori Activi (7 zile)</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {users.filter(u => {
                  if (!u.lastActivity) return false;
                  const lastActive = new Date(u.lastActivity);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return lastActive > weekAgo;
                }).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Users, Analytics and Auto-Updates */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="flex-wrap">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Utilizatori
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analiză Quiz
            </TabsTrigger>
            <TabsTrigger value="usage" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Utilizare
            </TabsTrigger>
            <TabsTrigger value="governance" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Guvernanță
            </TabsTrigger>
            <TabsTrigger value="auto-updates" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Auto-Update Engine
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Utilizatori</CardTitle>
                <CardDescription>Lista tuturor utilizatorilor și progresul lor</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nume</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Rol</TableHead>
                      <TableHead>Progres</TableHead>
                      <TableHead>Scor Mediu</TableHead>
                      <TableHead>Ultima Activitate</TableHead>
                      <TableHead>Acțiuni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((userItem) => (
                      <TableRow key={userItem.id}>
                        <TableCell className="font-medium">
                          {userItem.first_name || userItem.last_name 
                            ? `${userItem.first_name || ''} ${userItem.last_name || ''}`.trim()
                            : 'N/A'}
                        </TableCell>
                        <TableCell>{userItem.email}</TableCell>
                        <TableCell>
                          <Badge variant={userItem.role === 'admin' ? 'default' : 'secondary'}>
                            {userItem.role === 'admin' ? 'Admin' : 'Utilizator'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress 
                              value={(userItem.chaptersCompleted / userItem.totalChapters) * 100} 
                              className="w-20"
                            />
                            <span className="text-sm text-muted-foreground">
                              {userItem.chaptersCompleted}/{userItem.totalChapters}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{userItem.averageScore}%</TableCell>
                        <TableCell>
                          {userItem.lastActivity 
                            ? format(new Date(userItem.lastActivity), 'dd.MM.yyyy HH:mm')
                            : 'N/A'}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => openUserDetails(userItem)}>
                            <Eye className="h-4 w-4 mr-1" />
                            Detalii
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <AdminCharts 
              chapterStats={chapterStats}
              dailyActivity={dailyActivity}
              completionDistribution={completionDistribution}
              scoreDistribution={scoreDistribution}
            />
          </TabsContent>

          <TabsContent value="usage" className="mt-6">
            <UsageAnalytics />
          </TabsContent>

          <TabsContent value="governance" className="mt-6">
            <GovernanceDashboard />
          </TabsContent>

          <TabsContent value="auto-updates" className="mt-6">
            <AutoUpdateDashboard />
          </TabsContent>
        </Tabs>
      </div>

      {/* User Details Dialog */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>
              Detalii Utilizator: {selectedUser?.first_name} {selectedUser?.last_name}
            </DialogTitle>
            <DialogDescription>{selectedUser?.email}</DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[60vh]">
            <div className="space-y-6 pr-4">
              {/* Chapter Progress */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Progres pe Capitole</h3>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => selectedUser && resetAllScores(selectedUser.id)}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Resetează Tot
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Capitol</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Cel Mai Bun Scor</TableHead>
                      <TableHead>Încercări</TableHead>
                      <TableHead>Completat La</TableHead>
                      <TableHead>Acțiuni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userProgress.map((progress) => (
                      <TableRow key={progress.chapter_id}>
                        <TableCell className="font-medium">{progress.chapter_id}</TableCell>
                        <TableCell>{getStatusBadge(progress.status)}</TableCell>
                        <TableCell>{progress.best_score}/10</TableCell>
                        <TableCell>{progress.attempts_count}</TableCell>
                        <TableCell>
                          {progress.completed_at 
                            ? format(new Date(progress.completed_at), 'dd.MM.yyyy HH:mm')
                            : '-'}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {progress.status === 'locked' && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => selectedUser && unlockChapter(progress.chapter_id, selectedUser.id)}
                                title="Deblochează capitol"
                                className="text-blue-600 hover:text-blue-800"
                              >
                                <Unlock className="h-4 w-4" />
                              </Button>
                            )}
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => selectedUser && resetBestScore(progress.chapter_id, selectedUser.id)}
                              title="Resetează scorul"
                              className="text-destructive hover:text-destructive"
                            >
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Quiz Attempts */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Istoric Încercări Quiz (ultimele 50)</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Capitol</TableHead>
                      <TableHead>Scor</TableHead>
                      <TableHead>Trecut</TableHead>
                      <TableHead>Limbă</TableHead>
                      <TableHead>Data</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userAttempts.map((attempt) => (
                      <TableRow key={attempt.id}>
                        <TableCell className="font-medium">{attempt.chapter_id}</TableCell>
                        <TableCell>{attempt.score}/{attempt.total_questions}</TableCell>
                        <TableCell>
                          {attempt.passed 
                            ? <Badge className="bg-green-500">Da</Badge>
                            : <Badge variant="destructive">Nu</Badge>}
                        </TableCell>
                        <TableCell>{attempt.language.toUpperCase()}</TableCell>
                        <TableCell>
                          {format(new Date(attempt.created_at), 'dd.MM.yyyy HH:mm')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}