import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useCompany } from '@/contexts/CompanyContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCertificateNotifications } from '@/hooks/useCertificateNotifications';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, Users, BookOpen, Trophy, Clock, Eye, Download, BarChart3, RefreshCw, RotateCcw, Unlock, Shield, Activity, Timer, TrendingUp, Calendar, TimerReset, FileSearch, Award, Bell, BellOff, Radio, Building2, CreditCard, Server, Database, AlertTriangle, CheckCircle, Lock, Target, Network, Gamepad2, Globe, Zap, GraduationCap } from 'lucide-react';
import { toast } from 'sonner';
import { GovernanceDashboard } from '@/components/admin/GovernanceDashboard';
import { format, subDays } from 'date-fns';
import { AdminCharts } from '@/components/admin/AdminCharts';
import { AutoUpdateDashboard } from '@/components/admin/AutoUpdateDashboard';
import { UsageAnalytics } from '@/components/admin/UsageAnalytics';
import { TrainingTimeAnalytics } from '@/components/admin/TrainingTimeAnalytics';
import { LearningAnalyticsDashboard } from '@/components/admin/kpi/LearningAnalyticsDashboard';
import { CronJobsMonitor } from '@/components/admin/CronJobsMonitor';
import { ContentQualityDashboard } from '@/components/admin/ContentQualityDashboard';
import { CertificatesDashboard } from '@/components/admin/CertificatesDashboard';
import RealTimeActivityPanel from '@/components/admin/RealTimeActivityPanel';
import { CompanyManagement } from '@/components/admin/CompanyManagement';
import { UserManagement } from '@/components/admin/UserManagement';
import { SubscriptionPlansManager } from '@/components/admin/SubscriptionPlansManager';
import { ChapterManagement } from '@/components/admin/ChapterManagement';
import { EnterpriseMonitoring } from '@/components/admin/EnterpriseMonitoring';
import { BackupRecovery } from '@/components/admin/BackupRecovery';
import { IncidentManagement } from '@/components/admin/IncidentManagement';
import { ProductionChecklist } from '@/components/admin/ProductionChecklist';
import { PremiumChaptersManager } from '@/components/admin/PremiumChaptersManager';
import { CompetencyGapAnalysis } from '@/components/admin/CompetencyGapAnalysis';
import { KnowledgeGraph } from '@/components/admin/KnowledgeGraph';
import { GamificationLeaderboard } from '@/components/admin/GamificationLeaderboard';
import { CompanyReportGenerator } from '@/components/admin/CompanyReportGenerator';
import { CompetencyMatrix } from '@/components/admin/CompetencyMatrix';
import { RetentionDashboard } from '@/components/admin/RetentionDashboard';
import { SubscriptionCard } from '@/components/subscription';
import { StandardsComplianceDashboard } from '@/components/admin/StandardsComplianceDashboard';
import { ContentGovernorDashboard } from '@/components/admin/ContentGovernorDashboard';
import { QuizAnalyticsDashboard } from '@/components/admin/QuizAnalyticsDashboard';
import { FinalExamResults } from '@/components/admin/FinalExamResults';
import { QuizResetManager } from '@/components/admin/QuizResetManager';
import { UserProgressExamPanel } from '@/components/admin/UserProgressExamPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import NotificationCenter from '@/components/NotificationCenter';
import { FileBarChart, HelpCircle } from 'lucide-react';

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
  const { isSuperAdmin, isCompanyAdmin, company, branding } = useCompany();
  const { t } = useLanguage();
  const { requestNotificationPermission, areNotificationsEnabled } = useCertificateNotifications(isAdmin || isCompanyAdmin);
  const [users, setUsers] = useState<UserWithProgress[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [selectedUser, setSelectedUser] = useState<UserWithProgress | null>(null);
  const [userProgress, setUserProgress] = useState<ChapterProgress[]>([]);
  const [userAttempts, setUserAttempts] = useState<QuizAttempt[]>([]);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [allAttempts, setAllAttempts] = useState<QuizAttempt[]>([]);
  const [chapters, setChapters] = useState<{ id: string; slug: string }[]>([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Check notification status on mount and when it changes
  useEffect(() => {
    setNotificationsEnabled(areNotificationsEnabled());
  }, [areNotificationsEnabled]);

  const handleToggleNotifications = async () => {
    if (notificationsEnabled) {
      toast.info(t('admin.notifications.disableInBrowser'));
    } else {
      const success = await requestNotificationPermission();
      setNotificationsEnabled(success);
    }
  };

  // Check access - allow both old admin role and new company admin roles
  const hasAdminAccess = isAdmin || isSuperAdmin || isCompanyAdmin;

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    } else if (!loading && !hasAdminAccess) {
      navigate('/');
    }
  }, [user, loading, hasAdminAccess, navigate]);

  useEffect(() => {
    if (hasAdminAccess) {
      fetchUsers();
    }
  }, [hasAdminAccess]);

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
      // Calculate average score out of 10, with one decimal precision
      const averageScore = scores.length > 0 
        ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10
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
      toast.error(t('admin.profiles.errorResetScore'));
      return;
    }

    toast.success(t('admin.profiles.scoreReset').replace('{chapter}', chapterId));
    
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
      toast.error(t('admin.profiles.errorResetAll'));
      return;
    }

    // Unlock first chapter
    await supabase
      .from('chapter_progress')
      .update({ status: 'unlocked' })
      .eq('user_id', userId)
      .eq('chapter_id', 'intro');

    toast.success(t('admin.profiles.allScoresReset'));
    
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
        toast.error(t('admin.profiles.errorUnlock'));
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
        toast.error(t('admin.profiles.errorUnlock'));
        return;
      }
    }

    toast.success(t('admin.profiles.chapterUnlocked').replace('{chapter}', chapterId));
    
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

  const resetUserTrainingTime = async (userId: string) => {
    const { error } = await supabase
      .from('training_time')
      .delete()
      .eq('user_id', userId);

    if (error) {
      console.error('Error resetting training time:', error);
      toast.error(t('admin.profiles.errorTrainingTime'));
      return;
    }

    toast.success(t('admin.profiles.trainingTimeReset'));
  };

  const exportToCSV = () => {
    const headers = [t('admin.table.name'), t('admin.table.email'), t('admin.table.role'), t('admin.csv.chaptersCompleted'), t('admin.csv.totalChapters'), t('admin.table.avgScore'), t('admin.table.lastActivity'), t('admin.csv.registrationDate')];
    const rows = users.map(u => [
      `${u.first_name || ''} ${u.last_name || ''}`.trim() || 'N/A',
      u.email,
      u.role,
      u.chaptersCompleted,
      u.totalChapters,
      `${u.averageScore}/10`,
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
        return <Badge className="bg-green-500">{t('admin.status.completed')}</Badge>;
      case 'in_progress':
        return <Badge className="bg-yellow-500">{t('admin.status.inProgress')}</Badge>;
      case 'unlocked':
        return <Badge className="bg-blue-500">{t('admin.status.unlocked')}</Badge>;
      default:
        return <Badge variant="secondary">{t('admin.status.locked')}</Badge>;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header - Dark gradient with high visibility */}
        <div className="admin-header text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => navigate('/')}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-3xl font-black tracking-tight">{t('admin.title')}</h1>
                <p className="text-white/80 font-medium">{t('admin.subtitle')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Notification Center */}
              <div className="bg-white/10 rounded-lg p-1">
                <NotificationCenter />
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={handleToggleNotifications}
                      className={`${notificationsEnabled 
                        ? 'bg-emerald-500 border-emerald-400 text-white hover:bg-emerald-600' 
                        : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                      }`}
                    >
                      {notificationsEnabled ? (
                        <Bell className="h-4 w-4" />
                      ) : (
                        <BellOff className="h-4 w-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {notificationsEnabled 
                      ? t('admin.notificationsActive')
                      : t('admin.enableNotifications')}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button 
                onClick={exportToCSV}
                className="bg-white text-slate-800 hover:bg-white/90 font-bold shadow-lg"
              >
                <Download className="h-4 w-4 mr-2" />
                {t('admin.exportCSV')}
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards - Vibrant colors with shadows */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="admin-stat-card-blue">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold text-blue-800">{t('admin.totalUsers')}</CardTitle>
              <div className="p-2 bg-blue-500 rounded-lg shadow-md">
                <Users className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="admin-stat-value text-blue-700">{users.length}</div>
              <p className="text-xs text-blue-600 font-medium mt-1">{t('admin.registeredUsers')}</p>
            </CardContent>
          </Card>
          
          <Card className="admin-stat-card-purple">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold text-purple-800">{t('admin.totalChapters')}</CardTitle>
              <div className="p-2 bg-purple-500 rounded-lg shadow-md">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="admin-stat-value text-purple-700">{users[0]?.totalChapters || 40}</div>
              <p className="text-xs text-purple-600 font-medium mt-1">{t('admin.availableChapters')}</p>
            </CardContent>
          </Card>
          
          <Card className="admin-stat-card-amber">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold text-amber-800">{t('admin.globalAvgScore')}</CardTitle>
              <div className="p-2 bg-amber-500 rounded-lg shadow-md">
                <Trophy className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="admin-stat-value text-amber-700">
                {users.length > 0 
                  ? Math.round(users.reduce((a, b) => a + b.averageScore, 0) / users.length)
                  : 0}%
              </div>
              <p className="text-xs text-amber-600 font-medium mt-1">{t('admin.allScoresAvg')}</p>
            </CardContent>
          </Card>
          
          <Card className="admin-stat-card-green">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold text-emerald-800">{t('admin.activeUsers7d')}</CardTitle>
              <div className="p-2 bg-emerald-500 rounded-lg shadow-md">
                <Clock className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="admin-stat-value text-emerald-700">
                {users.filter(u => {
                  if (!u.lastActivity) return false;
                  const lastActive = new Date(u.lastActivity);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return lastActive > weekAgo;
                }).length}
              </div>
              <p className="text-xs text-emerald-600 font-medium mt-1">{t('admin.recentlyActive')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="admin-tabs-list flex-wrap h-auto gap-1 p-2">
            
            {/* ═══════════════════════════════════════════════════════════════════
                CATEGORIA 1: SUPER ADMIN - Gestiune Platformă
            ═══════════════════════════════════════════════════════════════════ */}
            {isSuperAdmin && (
              <>
                <div className="w-full flex items-center gap-2 py-1 px-2 mb-1">
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300 text-xs font-bold">
                    {t('admin.category.superAdmin')}
                  </Badge>
                  <div className="flex-1 h-px bg-blue-200"></div>
                </div>
                <TabsTrigger value="companies" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
                  <Building2 className="h-4 w-4" />
                  {t('admin.tab.companies')}
                </TabsTrigger>
                <TabsTrigger value="plans" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-emerald-700 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500">
                  <CreditCard className="h-4 w-4" />
                  {t('admin.tab.plans')}
                </TabsTrigger>
                <TabsTrigger value="premium-chapters" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-amber-700 data-[state=active]:border-b-2 data-[state=active]:border-amber-500">
                  <Lock className="h-4 w-4" />
                  {t('admin.tab.premium')}
                </TabsTrigger>
              </>
            )}
            
            {/* ═══════════════════════════════════════════════════════════════════
                CATEGORIA 2: GESTIUNE UTILIZATORI & COMPANIE
            ═══════════════════════════════════════════════════════════════════ */}
            <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
              <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300 text-xs font-bold">
                {t('admin.category.users')}
              </Badge>
              <div className="flex-1 h-px bg-purple-200"></div>
            </div>
            {(isCompanyAdmin || isSuperAdmin) && (
              <>
                <TabsTrigger value="company-users" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-purple-700 data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
                  <Users className="h-4 w-4" />
                  {t('admin.tab.companyUsers')}
                </TabsTrigger>
                <TabsTrigger value="chapters" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-indigo-700 data-[state=active]:border-b-2 data-[state=active]:border-indigo-500">
                  <BookOpen className="h-4 w-4" />
                  {t('admin.tab.chapters')}
                </TabsTrigger>
                <TabsTrigger value="reports" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-cyan-700 data-[state=active]:border-b-2 data-[state=active]:border-cyan-500">
                  <FileBarChart className="h-4 w-4" />
                  {t('admin.tab.reports')}
                </TabsTrigger>
              </>
            )}
            
            <TabsTrigger value="users" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-blue-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
              <Users className="h-4 w-4" />
              {t('admin.tab.allProfiles')}
            </TabsTrigger>
            
            <TabsTrigger value="user-progress-exam" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-500">
              <GraduationCap className="h-4 w-4" />
              <span className="font-medium">{t('admin.tab.progressExam')}</span>
            </TabsTrigger>
            
            <TabsTrigger value="retention" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-rose-700 data-[state=active]:border-b-2 data-[state=active]:border-rose-500">
              <TrendingUp className="h-4 w-4" />
              {t('admin.tab.retention')}
            </TabsTrigger>
            
            {/* ═══════════════════════════════════════════════════════════════════
                CATEGORIA 3: ANALIZE & KPI
            ═══════════════════════════════════════════════════════════════════ */}
            <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
              <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300 text-xs font-bold">
                {t('admin.category.analytics')}
              </Badge>
              <div className="flex-1 h-px bg-orange-200"></div>
            </div>
            <TabsTrigger value="quiz-analytics" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-orange-700 data-[state=active]:border-b-2 data-[state=active]:border-orange-500">
              <HelpCircle className="h-4 w-4" />
              {t('admin.tab.quizAnalytics')}
            </TabsTrigger>
            
            <TabsTrigger value="quiz-resets" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-red-700 data-[state=active]:border-b-2 data-[state=active]:border-red-500">
              <RotateCcw className="h-4 w-4" />
              <span className="font-medium">{t('admin.tab.quizResets')}</span>
            </TabsTrigger>
            
            <TabsTrigger value="analytics" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-violet-700 data-[state=active]:border-b-2 data-[state=active]:border-violet-500">
              <BarChart3 className="h-4 w-4" />
              {t('admin.tab.charts')}
            </TabsTrigger>
            
            <TabsTrigger value="learning-kpi" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-teal-700 data-[state=active]:border-b-2 data-[state=active]:border-teal-500">
              <TrendingUp className="h-4 w-4" />
              {t('admin.tab.learningKPI')}
            </TabsTrigger>
            
            <TabsTrigger value="usage" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-cyan-700 data-[state=active]:border-b-2 data-[state=active]:border-cyan-500">
              <Activity className="h-4 w-4" />
              {t('admin.tab.usage')}
            </TabsTrigger>
            
            <TabsTrigger value="training-time" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-pink-700 data-[state=active]:border-b-2 data-[state=active]:border-pink-500">
              <Timer className="h-4 w-4" />
              {t('admin.tab.trainingTime')}
            </TabsTrigger>
            
            <TabsTrigger value="realtime" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-red-700 data-[state=active]:border-b-2 data-[state=active]:border-red-500">
              <Radio className="h-4 w-4" />
              {t('admin.tab.realtime')}
            </TabsTrigger>
            
            {/* ═══════════════════════════════════════════════════════════════════
                CATEGORIA 4: COMPETENȚE & GAMIFICARE
            ═══════════════════════════════════════════════════════════════════ */}
            <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
              <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-300 text-xs font-bold">
                {t('admin.category.competencies')}
              </Badge>
              <div className="flex-1 h-px bg-emerald-200"></div>
            </div>
            <TabsTrigger value="competency-matrix" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-emerald-700 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500">
              <BarChart3 className="h-4 w-4" />
              {t('admin.tab.teamCompetencies')}
            </TabsTrigger>
            
            <TabsTrigger value="competency-gap" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-amber-700 data-[state=active]:border-b-2 data-[state=active]:border-amber-500">
              <Target className="h-4 w-4" />
              {t('admin.tab.competencyGaps')}
            </TabsTrigger>
            
            <TabsTrigger value="gamification" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-fuchsia-700 data-[state=active]:border-b-2 data-[state=active]:border-fuchsia-500">
              <Gamepad2 className="h-4 w-4" />
              {t('admin.tab.gamification')}
            </TabsTrigger>
            
            <TabsTrigger value="certificates" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-yellow-700 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500">
              <Award className="h-4 w-4" />
              {t('admin.tab.certificates')}
            </TabsTrigger>
            
            <TabsTrigger value="final-exam-results" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-rose-700 data-[state=active]:border-b-2 data-[state=active]:border-rose-500">
              <Trophy className="h-4 w-4" />
              {t('admin.tab.finalExamResults')}
            </TabsTrigger>
            
            {/* ═══════════════════════════════════════════════════════════════════
                CATEGORIA 5: CONȚINUT & GUVERNANȚĂ
            ═══════════════════════════════════════════════════════════════════ */}
            <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
              <Badge variant="outline" className="bg-sky-100 text-sky-800 border-sky-300 text-xs font-bold">
                {t('admin.category.content')}
              </Badge>
              <div className="flex-1 h-px bg-sky-200"></div>
            </div>
            <TabsTrigger value="quality" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-sky-700 data-[state=active]:border-b-2 data-[state=active]:border-sky-500">
              <FileSearch className="h-4 w-4" />
              {t('admin.tab.contentQuality')}
            </TabsTrigger>
            
            <TabsTrigger value="governance" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-slate-700 data-[state=active]:border-b-2 data-[state=active]:border-slate-500">
              <Shield className="h-4 w-4" />
              {t('admin.tab.governance')}
            </TabsTrigger>
            
            <TabsTrigger value="content-governor" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-purple-700 data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
              <Shield className="h-4 w-4" />
              {t('admin.tab.aiGovernor')}
            </TabsTrigger>
            
            <TabsTrigger value="auto-updates" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-lime-700 data-[state=active]:border-b-2 data-[state=active]:border-lime-500">
              <RefreshCw className="h-4 w-4" />
              {t('admin.tab.autoUpdate')}
            </TabsTrigger>
            
            <TabsTrigger value="standards" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-indigo-700 data-[state=active]:border-b-2 data-[state=active]:border-indigo-500">
              <Globe className="h-4 w-4" />
              {t('admin.tab.intStandards')}
            </TabsTrigger>
            
            <TabsTrigger value="knowledge-graph" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-violet-700 data-[state=active]:border-b-2 data-[state=active]:border-violet-500">
              <Network className="h-4 w-4" />
              {t('admin.tab.knowledgeGraph')}
            </TabsTrigger>
            
            {/* ═══════════════════════════════════════════════════════════════════
                CATEGORIA 6: SISTEM & ENTERPRISE
            ═══════════════════════════════════════════════════════════════════ */}
            <div className="w-full flex items-center gap-2 py-1 px-2 mb-1 mt-2">
              <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300 text-xs font-bold">
                {t('admin.category.system')}
              </Badge>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <TabsTrigger value="cron-jobs" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-gray-500">
              <Calendar className="h-4 w-4" />
              {t('admin.tab.cronJobs')}
            </TabsTrigger>
            
            {isSuperAdmin && (
              <>
                <TabsTrigger value="monitoring" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-emerald-700 data-[state=active]:border-b-2 data-[state=active]:border-emerald-500">
                  <Server className="h-4 w-4" />
                  {t('admin.tab.monitoring')}
                </TabsTrigger>
                <TabsTrigger value="backup" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-sky-700 data-[state=active]:border-b-2 data-[state=active]:border-sky-500">
                  <Database className="h-4 w-4" />
                  {t('admin.tab.backup')}
                </TabsTrigger>
                <TabsTrigger value="incidents" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-orange-700 data-[state=active]:border-b-2 data-[state=active]:border-orange-500">
                  <AlertTriangle className="h-4 w-4" />
                  {t('admin.tab.incidents')}
                </TabsTrigger>
                <TabsTrigger value="production" className="admin-tab-trigger flex items-center gap-2 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-500">
                  <CheckCircle className="h-4 w-4" />
                  {t('admin.tab.production')}
                </TabsTrigger>
              </>
            )}
          </TabsList>

          {/* Company Management - Super Admin only */}
          {isSuperAdmin && (
            <>
              <TabsContent value="companies" className="mt-6">
                <CompanyManagement />
              </TabsContent>
              <TabsContent value="plans" className="mt-6">
                <SubscriptionPlansManager />
              </TabsContent>
              <TabsContent value="premium-chapters" className="mt-6">
                <PremiumChaptersManager />
              </TabsContent>
            </>
          )}

          {/* User Management for Company */}
          {(isCompanyAdmin || isSuperAdmin) && (
            <>
              <TabsContent value="company-users" className="mt-6">
                <UserManagement />
              </TabsContent>
              <TabsContent value="chapters" className="mt-6">
                <ChapterManagement />
              </TabsContent>
              <TabsContent value="reports" className="mt-6">
                <CompanyReportGenerator />
              </TabsContent>
            </>
          )}

          {/* User Progress & Final Exam - Dedicated Tab */}
          <TabsContent value="user-progress-exam" className="mt-6">
            <UserProgressExamPanel />
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <Card className="border-2 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  {t('admin.profiles.title')}
                </CardTitle>
                <CardDescription className="text-base">{t('admin.profiles.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-100 hover:bg-slate-100">
                      <TableHead className="font-bold text-slate-800 text-base py-4">{t('admin.table.name')}</TableHead>
                      <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.email')}</TableHead>
                      <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.role')}</TableHead>
                      <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.chapterProgress')}</TableHead>
                      <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.avgScore')}</TableHead>
                      <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.lastActivity')}</TableHead>
                      <TableHead className="font-bold text-slate-800 text-base">{t('admin.table.actions')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((userItem) => {
                      const progressPercent = (userItem.chaptersCompleted / userItem.totalChapters) * 100;
                      // Score is out of 10, so adjust thresholds
                      const scoreColor = userItem.averageScore >= 9 
                        ? 'text-green-700 bg-green-100 border-green-300' 
                        : userItem.averageScore >= 7 
                          ? 'text-amber-700 bg-amber-100 border-amber-300' 
                          : 'text-red-700 bg-red-100 border-red-300';
                      const progressBarColor = progressPercent >= 80 
                        ? '[&>div]:bg-green-500' 
                        : progressPercent >= 40 
                          ? '[&>div]:bg-amber-500' 
                          : '[&>div]:bg-red-500';
                      
                      return (
                        <TableRow key={userItem.id} className="hover:bg-blue-50/50 border-b-2">
                          <TableCell className="font-semibold text-base py-4">
                            {userItem.first_name || userItem.last_name 
                              ? `${userItem.first_name || ''} ${userItem.last_name || ''}`.trim()
                              : 'N/A'}
                          </TableCell>
                          <TableCell className="text-slate-600">{userItem.email}</TableCell>
                          <TableCell>
                            <Badge 
                              className={userItem.role === 'admin' 
                                ? 'bg-red-600 text-white font-bold px-3 py-1 text-sm shadow-md' 
                                : 'bg-blue-600 text-white font-bold px-3 py-1 text-sm shadow-md'}
                            >
                              {userItem.role === 'admin' ? t('admin.profiles.roleAdmin') : t('admin.profiles.roleUser')}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Progress 
                                value={progressPercent} 
                                className={`w-28 h-3 bg-slate-200 ${progressBarColor}`}
                              />
                              <span className={`font-bold text-sm px-2 py-1 rounded border ${
                                progressPercent >= 80 
                                  ? 'text-green-700 bg-green-100 border-green-300' 
                                  : progressPercent >= 40 
                                    ? 'text-amber-700 bg-amber-100 border-amber-300' 
                                    : 'text-red-700 bg-red-100 border-red-300'
                              }`}>
                                {userItem.chaptersCompleted}/{userItem.totalChapters}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className={`font-bold text-base px-3 py-1 rounded-lg border-2 ${scoreColor}`}>
                              {userItem.averageScore}/10
                            </span>
                          </TableCell>
                          <TableCell className="text-slate-600 font-medium">
                            {userItem.lastActivity 
                              ? format(new Date(userItem.lastActivity), 'dd.MM.yyyy HH:mm')
                              : 'N/A'}
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => openUserDetails(userItem)}
                              className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600 font-semibold shadow-md"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              {t('admin.table.details')}
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="retention" className="mt-6">
            <RetentionDashboard />
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

          <TabsContent value="training-time" className="mt-6">
            <TrainingTimeAnalytics />
          </TabsContent>

          <TabsContent value="governance" className="mt-6">
            <GovernanceDashboard />
          </TabsContent>

          <TabsContent value="auto-updates" className="mt-6">
            <AutoUpdateDashboard />
          </TabsContent>

          <TabsContent value="learning-kpi" className="mt-6">
            <LearningAnalyticsDashboard />
          </TabsContent>

          <TabsContent value="competency-gap" className="mt-6">
            <CompetencyGapAnalysis />
          </TabsContent>

          <TabsContent value="cron-jobs" className="mt-6">
            <CronJobsMonitor />
          </TabsContent>

          <TabsContent value="quality" className="mt-6">
            <ContentQualityDashboard />
          </TabsContent>

          <TabsContent value="certificates" className="mt-6">
            <CertificatesDashboard />
          </TabsContent>

          <TabsContent value="final-exam-results" className="mt-6">
            <FinalExamResults />
          </TabsContent>

          <TabsContent value="realtime" className="mt-6">
            <RealTimeActivityPanel />
          </TabsContent>

          <TabsContent value="knowledge-graph" className="mt-6">
            <KnowledgeGraph />
          </TabsContent>

          <TabsContent value="gamification" className="mt-6">
            <GamificationLeaderboard />
          </TabsContent>

          <TabsContent value="quiz-analytics" className="mt-6">
            <QuizAnalyticsDashboard />
          </TabsContent>

          <TabsContent value="quiz-resets" className="mt-6">
            <QuizResetManager />
          </TabsContent>

          <TabsContent value="competency-matrix" className="mt-6">
            <CompetencyMatrix />
          </TabsContent>

          <TabsContent value="standards" className="mt-6">
            <StandardsComplianceDashboard />
          </TabsContent>

          <TabsContent value="content-governor" className="mt-6">
            <ContentGovernorDashboard />
          </TabsContent>

          {/* Enterprise Deployment Tabs - Super Admin only */}
          {isSuperAdmin && (
            <>
              <TabsContent value="monitoring" className="mt-6">
                <EnterpriseMonitoring />
              </TabsContent>
              <TabsContent value="backup" className="mt-6">
                <BackupRecovery />
              </TabsContent>
              <TabsContent value="incidents" className="mt-6">
                <IncidentManagement />
              </TabsContent>
              <TabsContent value="production" className="mt-6">
                <ProductionChecklist />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>

      {/* User Details Dialog */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>
              {t('admin.profiles.userDetails')}: {selectedUser?.first_name} {selectedUser?.last_name}
            </DialogTitle>
            <DialogDescription>{selectedUser?.email}</DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[60vh]">
            <div className="space-y-6 pr-4">
              {/* Chapter Progress */}
              <div>
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h3 className="text-lg font-semibold">{t('admin.profiles.chapterProgress')}</h3>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => selectedUser && resetUserTrainingTime(selectedUser.id)}
                      className="text-amber-600 hover:text-amber-800 border-amber-300"
                    >
                      <TimerReset className="h-4 w-4 mr-2" />
                      {t('admin.profiles.resetTimer')}
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => selectedUser && resetAllScores(selectedUser.id)}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      {t('admin.profiles.resetAll')}
                    </Button>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.table.chapter')}</TableHead>
                      <TableHead>{t('admin.table.status')}</TableHead>
                      <TableHead>{t('admin.table.bestScore')}</TableHead>
                      <TableHead>{t('admin.table.attempts')}</TableHead>
                      <TableHead>{t('admin.table.completedAt')}</TableHead>
                      <TableHead>{t('admin.table.actions')}</TableHead>
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
                                title={t('admin.profiles.unlockChapter')}
                                className="text-blue-600 hover:text-blue-800"
                              >
                                <Unlock className="h-4 w-4" />
                              </Button>
                            )}
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => selectedUser && resetBestScore(progress.chapter_id, selectedUser.id)}
                              title={t('admin.profiles.resetScore')}
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
                <h3 className="text-lg font-semibold mb-3">{t('admin.profiles.quizHistory')}</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.table.chapter')}</TableHead>
                      <TableHead>{t('admin.table.score')}</TableHead>
                      <TableHead>{t('admin.table.passed')}</TableHead>
                      <TableHead>{t('admin.table.language')}</TableHead>
                      <TableHead>{t('admin.table.date')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userAttempts.map((attempt) => (
                      <TableRow key={attempt.id}>
                        <TableCell className="font-medium">{attempt.chapter_id}</TableCell>
                        <TableCell>{attempt.score}/{attempt.total_questions}</TableCell>
                        <TableCell>
                          {attempt.passed 
                            ? <Badge className="bg-green-500">{t('admin.table.yes')}</Badge>
                            : <Badge variant="destructive">{t('admin.table.no')}</Badge>}
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