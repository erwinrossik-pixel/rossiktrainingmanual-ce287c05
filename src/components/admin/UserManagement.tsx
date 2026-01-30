import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Users, Check, X, Clock, User as UserIcon, Mail, AlertCircle, Search, Building2, UserPlus, GraduationCap, BookOpen, Trophy, Target, Timer, FileText, RotateCcw, Award } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { format } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';
import { logger } from '@/utils/logger';

interface Company {
  id: string;
  name: string;
}

interface UserProfile {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: string;
  created_at: string;
  updated_at: string;
  company_user?: {
    id: string;
    company_id: string;
    role: 'super_admin' | 'company_admin' | 'user';
    status: 'pending' | 'approved' | 'rejected' | 'suspended';
    company_name?: string;
  } | null;
}

interface RegistrationRequest {
  id: string;
  user_id: string | null;
  company_id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  created_at: string;
  company_name?: string;
}

interface ExamAttempt {
  id: string;
  score: number;
  total_questions: number;
  percentage: number;
  passed: boolean;
  time_spent_seconds: number;
  completed_at: string;
}

interface UserProgress {
  user_id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  chapters_completed: number;
  total_chapters: number;
  progress_percentage: number;
  avg_quiz_score: number;
  total_quiz_attempts: number;
  passed_quizzes: number;
  total_training_seconds: number;
  exam_attempts: ExamAttempt[];
  best_exam?: ExamAttempt | null;
  certificate?: {
    certificate_code: string;
    issued_at: string;
    expires_at: string;
    total_training_hours: number | null;
  } | null;
}

export function UserManagement() {
  const { company, isCompanyAdmin, isSuperAdmin, subscription } = useCompany();
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
  const [pendingRequests, setPendingRequests] = useState<RegistrationRequest[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [progressLoading, setProgressLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all-users');
  const [searchTerm, setSearchTerm] = useState('');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [assignDialogOpen, setAssignDialogOpen] = useState(false);
  const [selectedUserForAssign, setSelectedUserForAssign] = useState<UserProfile | null>(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('');

  const dateLocale = language === 'de' ? de : language === 'en' ? enUS : ro;

  useEffect(() => {
    if (isCompanyAdmin || isSuperAdmin) {
      fetchAllUsers();
      fetchPendingRequests();
      fetchCompanies();
      fetchUserProgress();
    }
  }, [company, isCompanyAdmin, isSuperAdmin]);

  const fetchCompanies = async () => {
    const { data } = await supabase
      .from('companies')
      .select('id, name')
      .eq('is_active', true)
      .order('name');
    setCompanies(data || []);
  };

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      // Fetch ALL profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Fetch all company_users with company names
      const { data: companyUsers } = await supabase
        .from('company_users')
        .select('*');

      // Fetch all companies for names
      const { data: companiesData } = await supabase
        .from('companies')
        .select('id, name');

      const companiesMap = new Map(companiesData?.map(c => [c.id, c.name]) || []);

      // Merge profiles with company_users
      const usersWithCompanyInfo: UserProfile[] = (profiles || []).map(profile => {
        const companyUser = companyUsers?.find(cu => cu.user_id === profile.id);
        
        return {
          ...profile,
          company_user: companyUser ? {
            id: companyUser.id,
            company_id: companyUser.company_id,
            role: companyUser.role,
            status: companyUser.status,
            company_name: companiesMap.get(companyUser.company_id)
          } : null
        };
      });

      // Filter based on admin type
      if (!isSuperAdmin && company) {
        // Company admin sees only their company users
        setAllUsers(usersWithCompanyInfo.filter(u => 
          u.company_user?.company_id === company.id
        ));
      } else {
        // Super admin sees ALL users
        setAllUsers(usersWithCompanyInfo);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProgress = async () => {
    setProgressLoading(true);
    try {
      // Fetch all profiles
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, email, first_name, last_name');

      // Fetch chapter progress for all users
      const { data: chapterProgress } = await supabase
        .from('chapter_progress')
        .select('user_id, chapter_id, status, best_score, attempts_count');

      // Fetch all quiz attempts for statistics
      const { data: quizAttempts } = await supabase
        .from('quiz_attempts')
        .select('user_id, passed');

      // Fetch training sessions for total time
      const { data: trainingSessions } = await supabase
        .from('training_sessions')
        .select('user_id, duration_minutes');

      // Fetch ALL final exam attempts (not just the latest)
      const { data: examAttempts } = await supabase
        .from('final_exam_attempts')
        .select('id, user_id, score, total_questions, percentage, passed, time_spent_seconds, completed_at')
        .order('completed_at', { ascending: false });

      // Fetch certificates with training hours
      const { data: certificates } = await supabase
        .from('certificates')
        .select('user_id, certificate_code, issued_at, expires_at, is_revoked, total_training_hours')
        .eq('is_revoked', false);

      // Fetch company_users for filtering
      const { data: companyUsers } = await supabase
        .from('company_users')
        .select('user_id, company_id, status');

      const TOTAL_CHAPTERS = 50;

      // Build progress data for each user
      const progressData: UserProgress[] = (profiles || []).map(profile => {
        const userChapters = chapterProgress?.filter(cp => cp.user_id === profile.id) || [];
        const completedChapters = userChapters.filter(cp => cp.status === 'completed').length;
        const passedQuizzes = userChapters.filter(cp => cp.status === 'completed' && (cp.best_score || 0) >= 9).length;
        const avgScore = userChapters.length > 0 
          ? userChapters.reduce((sum, cp) => sum + (cp.best_score || 0), 0) / userChapters.length 
          : 0;

        // Count total quiz attempts
        const userQuizAttempts = quizAttempts?.filter(qa => qa.user_id === profile.id) || [];
        const totalQuizAttempts = userQuizAttempts.length;

        // Calculate total training time (duration_minutes -> convert to seconds)
        const userTrainingSessions = trainingSessions?.filter(ts => ts.user_id === profile.id) || [];
        const totalTrainingSeconds = userTrainingSessions.reduce((sum, ts) => sum + ((ts.duration_minutes || 0) * 60), 0);

        // Get ALL exam attempts for this user
        const userExams = (examAttempts?.filter(ea => ea.user_id === profile.id) || []).map(ea => ({
          id: ea.id,
          score: ea.score,
          total_questions: ea.total_questions,
          percentage: Number(ea.percentage),
          passed: ea.passed,
          time_spent_seconds: ea.time_spent_seconds || 0,
          completed_at: ea.completed_at
        }));

        // Find best exam (highest score, prioritizing passed)
        const passedExams = userExams.filter(e => e.passed);
        const bestExam = passedExams.length > 0 
          ? passedExams.reduce((best, current) => current.percentage > best.percentage ? current : best)
          : userExams.length > 0 
            ? userExams.reduce((best, current) => current.percentage > best.percentage ? current : best)
            : null;

        // Get valid certificate
        const userCert = certificates?.find(c => c.user_id === profile.id);

        return {
          user_id: profile.id,
          email: profile.email,
          first_name: profile.first_name,
          last_name: profile.last_name,
          chapters_completed: completedChapters,
          total_chapters: TOTAL_CHAPTERS,
          progress_percentage: Math.round((completedChapters / TOTAL_CHAPTERS) * 100),
          avg_quiz_score: Math.round(avgScore * 10) / 10,
          total_quiz_attempts: totalQuizAttempts,
          passed_quizzes: passedQuizzes,
          total_training_seconds: totalTrainingSeconds,
          exam_attempts: userExams,
          best_exam: bestExam,
          certificate: userCert ? {
            certificate_code: userCert.certificate_code,
            issued_at: userCert.issued_at,
            expires_at: userCert.expires_at,
            total_training_hours: userCert.total_training_hours
          } : null
        };
      });

      // Filter based on admin type
      if (!isSuperAdmin && company) {
        const companyUserIds = companyUsers
          ?.filter(cu => cu.company_id === company.id && cu.status === 'approved')
          .map(cu => cu.user_id) || [];
        setUserProgress(progressData.filter(p => companyUserIds.includes(p.user_id)));
      } else {
        setUserProgress(progressData);
      }
    } catch (error) {
      console.error('Error fetching user progress:', error);
    } finally {
      setProgressLoading(false);
    }
  };

  const fetchPendingRequests = async () => {
    let query = supabase
      .from('user_registration_requests')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (!isSuperAdmin && company) {
      query = query.eq('company_id', company.id);
    }

    const { data } = await query;
    
    // Fetch company names
    const { data: companiesData } = await supabase
      .from('companies')
      .select('id, name');
    
    const companiesMap = new Map(companiesData?.map(c => [c.id, c.name]) || []);
    
    const requestsWithCompany = (data || []).map(req => ({
      ...req,
      company_name: companiesMap.get(req.company_id)
    }));
    
    setPendingRequests(requestsWithCompany);
  };

  const sendNotificationEmail = async (
    type: string, 
    userId: string, 
    additionalData: Record<string, any> = {}
  ) => {
    try {
      await supabase.functions.invoke('send-user-notification', {
        body: { type, userId, data: additionalData }
      });
      logger.debug(`Email notification sent: ${type}`);
    } catch (error) {
      logger.error('Failed to send notification email:', error);
    }
  };

  const approveUser = async (companyUserId: string, userProfile?: UserProfile) => {
    try {
      // Get user_id from company_users
      const { data: companyUser } = await supabase
        .from('company_users')
        .select('user_id, company_id')
        .eq('id', companyUserId)
        .single();

      await supabase
        .from('company_users')
        .update({
          status: 'approved',
          approved_by: user?.id,
          approved_at: new Date().toISOString()
        })
        .eq('id', companyUserId);

      // Send approval email
      if (companyUser?.user_id) {
        const companyName = companies.find(c => c.id === companyUser.company_id)?.name;
        sendNotificationEmail('account_approved', companyUser.user_id, { companyName });
      }

      toast({ title: t('admin.users.approved'), description: t('admin.users.approvedDesc') });
      fetchAllUsers();
    } catch (error) {
      toast({ title: t('admin.general.error'), description: t('admin.users.approveError'), variant: 'destructive' });
    }
  };

  const rejectUser = async (companyUserId: string) => {
    try {
      // Get user_id first
      const { data: companyUser } = await supabase
        .from('company_users')
        .select('user_id')
        .eq('id', companyUserId)
        .single();

      await supabase
        .from('company_users')
        .update({ status: 'rejected' })
        .eq('id', companyUserId);

      // Send rejection email
      if (companyUser?.user_id) {
        sendNotificationEmail('account_rejected', companyUser.user_id);
      }

      toast({ title: t('admin.users.rejected') });
      fetchAllUsers();
    } catch (error) {
      toast({ title: t('admin.general.error'), description: t('admin.users.rejectError'), variant: 'destructive' });
    }
  };

  const suspendUser = async (companyUserId: string) => {
    try {
      // Get user_id first
      const { data: companyUser } = await supabase
        .from('company_users')
        .select('user_id')
        .eq('id', companyUserId)
        .single();

      await supabase
        .from('company_users')
        .update({ status: 'suspended' })
        .eq('id', companyUserId);

      // Send suspension email
      if (companyUser?.user_id) {
        sendNotificationEmail('account_suspended', companyUser.user_id);
      }

      toast({ title: t('admin.users.suspended') });
      fetchAllUsers();
    } catch (error) {
      toast({ title: t('admin.general.error'), variant: 'destructive' });
    }
  };

  const reactivateUser = async (companyUserId: string) => {
    try {
      // Get user_id first
      const { data: companyUser } = await supabase
        .from('company_users')
        .select('user_id')
        .eq('id', companyUserId)
        .single();

      await supabase
        .from('company_users')
        .update({
          status: 'approved',
          approved_by: user?.id,
          approved_at: new Date().toISOString()
        })
        .eq('id', companyUserId);

      // Send reactivation email
      if (companyUser?.user_id) {
        sendNotificationEmail('account_reactivated', companyUser.user_id);
      }

      toast({ title: t('admin.users.reactivated') });
      fetchAllUsers();
    } catch (error) {
      toast({ title: t('admin.general.error'), variant: 'destructive' });
    }
  };

  const updateUserRole = async (companyUserId: string, newRole: 'user' | 'company_admin') => {
    try {
      await supabase
        .from('company_users')
        .update({ role: newRole })
        .eq('id', companyUserId);

      toast({ title: t('admin.users.roleUpdated') });
      fetchAllUsers();
    } catch (error) {
      toast({ title: t('admin.general.error'), variant: 'destructive' });
    }
  };

  const openAssignDialog = (userProfile: UserProfile) => {
    setSelectedUserForAssign(userProfile);
    setSelectedCompanyId(isSuperAdmin ? '' : (company?.id || ''));
    setAssignDialogOpen(true);
  };

  const assignUserToCompany = async () => {
    if (!selectedUserForAssign || !selectedCompanyId) {
      toast({ title: t('admin.general.error'), description: t('admin.users.selectCompanyError'), variant: 'destructive' });
      return;
    }

    try {
      const { error } = await supabase.from('company_users').insert({
        user_id: selectedUserForAssign.id,
        company_id: selectedCompanyId,
        role: 'user',
        status: 'approved',
        approved_by: user?.id,
        approved_at: new Date().toISOString()
      });

      if (error) throw error;

      // Send company assigned email
      const companyName = companies.find(c => c.id === selectedCompanyId)?.name;
      sendNotificationEmail('company_assigned', selectedUserForAssign.id, { companyName });

      toast({ 
        title: t('admin.users.assigned'), 
        description: `${selectedUserForAssign.first_name} ${selectedUserForAssign.last_name} ${t('admin.users.assignedDesc')}` 
      });
      
      setAssignDialogOpen(false);
      setSelectedUserForAssign(null);
      setSelectedCompanyId('');
      fetchAllUsers();
    } catch (error: any) {
      console.error('Error assigning user:', error);
      toast({ 
        title: t('admin.general.error'), 
        description: error.message || t('admin.users.assignError'), 
        variant: 'destructive' 
      });
    }
  };

  const approveRequest = async (request: RegistrationRequest) => {
    try {
      if (request.user_id) {
        await supabase.from('company_users').insert({
          user_id: request.user_id,
          company_id: request.company_id,
          role: 'user',
          status: 'approved',
          approved_by: user?.id,
          approved_at: new Date().toISOString()
        });
      }

      await supabase
        .from('user_registration_requests')
        .update({
          status: 'approved',
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString()
        })
        .eq('id', request.id);

      toast({ title: t('admin.users.requestApproved') });
      fetchAllUsers();
      fetchPendingRequests();
    } catch (error) {
      toast({ title: t('admin.general.error'), variant: 'destructive' });
    }
  };

  const rejectRequest = async (requestId: string) => {
    try {
      await supabase
        .from('user_registration_requests')
        .update({
          status: 'rejected',
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString()
        })
        .eq('id', requestId);

      toast({ title: t('admin.users.requestRejected') });
      fetchPendingRequests();
    } catch (error) {
      toast({ title: t('admin.general.error'), variant: 'destructive' });
    }
  };

  if (!isCompanyAdmin && !isSuperAdmin) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.users.restricted')}</CardTitle>
          <CardDescription>{t('admin.users.restrictedDesc')}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const maxUsers = subscription?.plan?.max_users;
  const activeUsers = allUsers.filter(u => u.company_user?.status === 'approved');
  const pendingUsers = allUsers.filter(u => u.company_user?.status === 'pending');
  const usersWithoutCompany = allUsers.filter(u => !u.company_user);
  const isAtUserLimit = maxUsers && activeUsers.length >= maxUsers;

  // Filter users by search term
  const filteredUsers = allUsers.filter(u => {
    const searchLower = searchTerm.toLowerCase();
    return (
      u.email?.toLowerCase().includes(searchLower) ||
      u.first_name?.toLowerCase().includes(searchLower) ||
      u.last_name?.toLowerCase().includes(searchLower) ||
      u.company_user?.company_name?.toLowerCase().includes(searchLower)
    );
  });

  const getRoleBadge = (role: string | undefined, profileRole?: string) => {
    if (role === 'super_admin') {
      return <Badge className="bg-primary">{t('admin.users.superAdmin')}</Badge>;
    }
    if (role === 'company_admin') {
      return <Badge className="bg-info">{t('admin.users.admin')}</Badge>;
    }
    if (profileRole === 'admin') {
      return <Badge className="bg-primary/80">{t('admin.users.legacyAdmin')}</Badge>;
    }
    return <Badge variant="secondary">{t('admin.users.user')}</Badge>;
  };

  const getStatusBadge = (status: string | undefined, hasCompany: boolean) => {
    if (!hasCompany) {
      return <Badge variant="outline" className="text-warning border-warning"><AlertCircle className="h-3 w-3 mr-1" />{t('admin.users.noCompanyStatus')}</Badge>;
    }
    switch (status) {
      case 'approved':
        return <Badge variant="outline" className="text-success border-success"><Check className="h-3 w-3 mr-1" />{t('admin.users.activeStatus')}</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-warning border-warning"><Clock className="h-3 w-3 mr-1" />{t('admin.users.pendingStatus')}</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="text-destructive border-destructive"><X className="h-3 w-3 mr-1" />{t('admin.users.rejectedStatus')}</Badge>;
      case 'suspended':
        return <Badge variant="outline" className="text-muted-foreground border-muted-foreground"><AlertCircle className="h-3 w-3 mr-1" />{t('admin.users.suspendedStatus')}</Badge>;
      default:
        return <Badge variant="secondary">{t('admin.users.unknown')}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold">{t('admin.users.title')}</h2>
          <p className="text-muted-foreground">
            {allUsers.length} {t('admin.users.registered')} • {activeUsers.length} {t('admin.users.activeCount')} • {usersWithoutCompany.length} {t('admin.users.noCompanyCount')}
          </p>
        </div>
        {isAtUserLimit && (
          <div className="flex items-center gap-2 text-amber-600">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">{t('admin.users.limitReached')}</span>
          </div>
        )}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t('admin.users.searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex-wrap h-auto gap-1">
          <TabsTrigger value="all-users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {t('admin.users.allUsers')} ({allUsers.length})
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            {language === 'ro' ? 'Progres & Examen' : language === 'de' ? 'Fortschritt & Prüfung' : 'Progress & Exam'}
          </TabsTrigger>
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {t('admin.users.pending')} ({pendingUsers.length + pendingRequests.length})
          </TabsTrigger>
          <TabsTrigger value="no-company" className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            {t('admin.users.noCompany')} ({usersWithoutCompany.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all-users">
          <Card>
            <CardContent className="pt-6">
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : filteredUsers.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">{t('admin.users.noUsers')}</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.users.user')}</TableHead>
                      <TableHead>{t('admin.users.company')}</TableHead>
                      <TableHead>{t('admin.users.role')}</TableHead>
                      <TableHead>{t('admin.users.status')}</TableHead>
                      <TableHead>{t('admin.users.registeredAt')}</TableHead>
                      <TableHead className="text-right">{t('admin.users.actions')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((userProfile) => (
                      <TableRow key={userProfile.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <UserIcon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">
                                {userProfile.first_name} {userProfile.last_name}
                              </p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {userProfile.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {userProfile.company_user?.company_name ? (
                            <div className="flex items-center gap-1">
                              <Building2 className="h-3 w-3 text-muted-foreground" />
                              <span className="text-sm">{userProfile.company_user.company_name}</span>
                            </div>
                          ) : (
                            <span className="text-muted-foreground text-sm">-</span>
                          )}
                        </TableCell>
                        <TableCell>{getRoleBadge(userProfile.company_user?.role, userProfile.role)}</TableCell>
                        <TableCell>{getStatusBadge(userProfile.company_user?.status, !!userProfile.company_user)}</TableCell>
                        <TableCell>
                          {format(new Date(userProfile.created_at), 'dd MMM yyyy', { locale: dateLocale })}
                        </TableCell>
                        <TableCell className="text-right">
                          {userProfile.company_user && userProfile.id !== user?.id && userProfile.company_user.role !== 'super_admin' && (
                            <div className="flex justify-end gap-2">
                              <Select
                                value={userProfile.company_user.role}
                                onValueChange={(value: 'user' | 'company_admin') => updateUserRole(userProfile.company_user!.id, value)}
                                disabled={!isSuperAdmin && userProfile.company_user.role === 'company_admin'}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="user">{t('admin.users.user')}</SelectItem>
                                  <SelectItem value="company_admin">{t('admin.users.admin')}</SelectItem>
                                </SelectContent>
                              </Select>
                              {userProfile.company_user.status === 'approved' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => suspendUser(userProfile.company_user!.id)}
                                >
                                  {t('admin.users.suspend')}
                                </Button>
                              )}
                              {userProfile.company_user.status === 'suspended' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => reactivateUser(userProfile.company_user!.id)}
                                >
                                  {t('admin.users.reactivate')}
                                </Button>
                              )}
                              {userProfile.company_user.status === 'pending' && (
                                <>
                                  <Button size="sm" onClick={() => approveUser(userProfile.company_user!.id)}>
                                    <Check className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => rejectUser(userProfile.company_user!.id)}>
                                    <X className="h-4 w-4" />
                                  </Button>
                                </>
                              )}
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Progress & Final Exam Tab */}
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                {language === 'ro' ? 'Progres Utilizatori & Examen Final' : language === 'de' ? 'Benutzerfortschritt & Abschlussprüfung' : 'User Progress & Final Exam'}
              </CardTitle>
              <CardDescription>
                {language === 'ro' ? 'Vizualizați progresul fiecărui utilizator, rezultatele quiz-urilor și ale examenului final' : language === 'de' ? 'Sehen Sie den Fortschritt jedes Benutzers, Quiz- und Prüfungsergebnisse' : 'View each user\'s progress, quiz and exam results'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {progressLoading ? (
                <div className="flex justify-center py-8">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : userProgress.filter(up => {
                const searchLower = searchTerm.toLowerCase();
                return (
                  up.email?.toLowerCase().includes(searchLower) ||
                  up.first_name?.toLowerCase().includes(searchLower) ||
                  up.last_name?.toLowerCase().includes(searchLower)
                );
              }).length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">
                  {language === 'ro' ? 'Nu există date de progres.' : language === 'de' ? 'Keine Fortschrittsdaten vorhanden.' : 'No progress data available.'}
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{language === 'ro' ? 'Utilizator' : language === 'de' ? 'Benutzer' : 'User'}</TableHead>
                        <TableHead>{language === 'ro' ? 'Progres Capitole' : language === 'de' ? 'Kapitelfortschritt' : 'Chapter Progress'}</TableHead>
                        <TableHead>{language === 'ro' ? 'Scor Mediu Quiz' : language === 'de' ? 'Durchschnittliche Quiz-Punktzahl' : 'Avg Quiz Score'}</TableHead>
                        <TableHead>{language === 'ro' ? 'Examen Final' : language === 'de' ? 'Abschlussprüfung' : 'Final Exam'}</TableHead>
                        <TableHead>{language === 'ro' ? 'Certificat' : language === 'de' ? 'Zertifikat' : 'Certificate'}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {userProgress
                        .filter(up => {
                          const searchLower = searchTerm.toLowerCase();
                          return (
                            up.email?.toLowerCase().includes(searchLower) ||
                            up.first_name?.toLowerCase().includes(searchLower) ||
                            up.last_name?.toLowerCase().includes(searchLower)
                          );
                        })
                        .sort((a, b) => {
                          // Sort by progress percentage desc, then by exam score
                          if (b.progress_percentage !== a.progress_percentage) {
                            return b.progress_percentage - a.progress_percentage;
                          }
                          return (b.best_exam?.percentage || 0) - (a.best_exam?.percentage || 0);
                        })
                        .map((up) => (
                          <TableRow key={up.user_id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                  <UserIcon className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    {up.first_name} {up.last_name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">{up.email}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1 min-w-[160px]">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="flex items-center gap-1">
                                    <BookOpen className="h-3 w-3 text-muted-foreground" />
                                    {up.chapters_completed}/{up.total_chapters}
                                  </span>
                                  <span className="font-medium">{up.progress_percentage}%</span>
                                </div>
                                <Progress value={up.progress_percentage} className="h-2" />
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1" title={language === 'ro' ? 'Quiz-uri promovate' : language === 'de' ? 'Bestandene Quizze' : 'Passed Quizzes'}>
                                    <Check className="h-3 w-3 text-green-500" />
                                    {up.passed_quizzes}/{up.total_chapters}
                                  </span>
                                  <span className="flex items-center gap-1" title={language === 'ro' ? 'Total încercări quiz' : language === 'de' ? 'Gesamte Quiz-Versuche' : 'Total Quiz Attempts'}>
                                    <RotateCcw className="h-3 w-3" />
                                    {up.total_quiz_attempts}
                                  </span>
                                </div>
                                {up.total_training_seconds > 0 && (
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Timer className="h-3 w-3" />
                                    {Math.floor(up.total_training_seconds / 3600)}h {Math.floor((up.total_training_seconds % 3600) / 60)}m
                                  </div>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-muted-foreground" />
                                <span className={up.avg_quiz_score >= 9 ? 'text-green-600 font-semibold' : up.avg_quiz_score >= 7 ? 'text-amber-600' : 'text-muted-foreground'}>
                                  {up.avg_quiz_score > 0 ? `${up.avg_quiz_score}/10` : '-'}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              {up.exam_attempts.length > 0 ? (
                                <div className="space-y-2 min-w-[200px]">
                                  {/* Best/Latest Exam Result */}
                                  {up.best_exam && (
                                    <div className="space-y-1">
                                      <div className="flex items-center gap-2">
                                        {up.best_exam.passed ? (
                                          <Badge className="bg-green-500 hover:bg-green-600">
                                            <Trophy className="h-3 w-3 mr-1" />
                                            {language === 'ro' ? 'Promovat' : language === 'de' ? 'Bestanden' : 'Passed'}
                                          </Badge>
                                        ) : (
                                          <Badge variant="destructive">
                                            <X className="h-3 w-3 mr-1" />
                                            {language === 'ro' ? 'Nepromovat' : language === 'de' ? 'Nicht bestanden' : 'Failed'}
                                          </Badge>
                                        )}
                                        <Badge variant="outline" className="text-xs">
                                          {up.exam_attempts.length} {language === 'ro' ? 'încercări' : language === 'de' ? 'Versuche' : 'attempts'}
                                        </Badge>
                                      </div>
                                      <div className="text-xs text-muted-foreground space-y-0.5">
                                        <p className="font-medium text-foreground">
                                          {up.best_exam.score}/{up.best_exam.total_questions} ({up.best_exam.percentage}%)
                                        </p>
                                        <p className="flex items-center gap-1">
                                          <Timer className="h-3 w-3" />
                                          {Math.floor(up.best_exam.time_spent_seconds / 60)}:{(up.best_exam.time_spent_seconds % 60).toString().padStart(2, '0')} min
                                        </p>
                                        <p>{format(new Date(up.best_exam.completed_at), 'dd MMM yyyy HH:mm', { locale: dateLocale })}</p>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* All Attempts History */}
                                  {up.exam_attempts.length > 1 && (
                                    <details className="text-xs">
                                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                                        {language === 'ro' ? 'Vezi toate încercările' : language === 'de' ? 'Alle Versuche anzeigen' : 'View all attempts'}
                                      </summary>
                                      <div className="mt-2 space-y-1 pl-2 border-l-2 border-muted">
                                        {up.exam_attempts.map((attempt, idx) => (
                                          <div key={attempt.id} className="flex items-center justify-between gap-2 py-1">
                                            <span className="flex items-center gap-1">
                                              {attempt.passed ? (
                                                <Check className="h-3 w-3 text-green-500" />
                                              ) : (
                                                <X className="h-3 w-3 text-red-500" />
                                              )}
                                              {attempt.score}/{attempt.total_questions} ({attempt.percentage}%)
                                            </span>
                                            <span className="text-muted-foreground">
                                              {format(new Date(attempt.completed_at), 'dd/MM/yy', { locale: dateLocale })}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    </details>
                                  )}
                                </div>
                              ) : (
                                <span className="text-muted-foreground text-sm">
                                  {up.progress_percentage >= 100 ? (
                                    <Badge variant="outline" className="text-amber-600 border-amber-600">
                                      {language === 'ro' ? 'Eligibil' : language === 'de' ? 'Berechtigt' : 'Eligible'}
                                    </Badge>
                                  ) : (
                                    '-'
                                  )}
                                </span>
                              )}
                            </TableCell>
                            <TableCell>
                              {up.certificate ? (
                                <div className="space-y-1">
                                  <Badge className="bg-purple-500 hover:bg-purple-600">
                                    <Award className="h-3 w-3 mr-1" />
                                    {up.certificate.certificate_code}
                                  </Badge>
                                  <div className="text-xs text-muted-foreground space-y-0.5">
                                    <p>
                                      {language === 'ro' ? 'Emis:' : language === 'de' ? 'Ausgestellt:' : 'Issued:'} {format(new Date(up.certificate.issued_at), 'dd MMM yyyy', { locale: dateLocale })}
                                    </p>
                                    <p>
                                      {language === 'ro' ? 'Expiră:' : language === 'de' ? 'Läuft ab:' : 'Expires:'} {format(new Date(up.certificate.expires_at), 'dd MMM yyyy', { locale: dateLocale })}
                                    </p>
                                    {up.certificate.total_training_hours !== null && up.certificate.total_training_hours > 0 && (
                                      <p className="flex items-center gap-1">
                                        <Timer className="h-3 w-3" />
                                        {up.certificate.total_training_hours.toFixed(1)}h {language === 'ro' ? 'training' : language === 'de' ? 'Training' : 'training'}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <span className="text-muted-foreground text-sm">-</span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.users.pendingRequests')}</CardTitle>
              <CardDescription>{t('admin.users.pendingDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              {pendingUsers.length === 0 && pendingRequests.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">{t('admin.users.noPending')}</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.users.user')}</TableHead>
                      <TableHead>{t('admin.users.company')}</TableHead>
                      <TableHead>{t('admin.users.requestDate')}</TableHead>
                      <TableHead className="text-right">{t('admin.users.actions')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingUsers.map((userProfile) => (
                      <TableRow key={userProfile.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {userProfile.first_name} {userProfile.last_name}
                            </p>
                            <p className="text-xs text-muted-foreground">{userProfile.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{userProfile.company_user?.company_name || '-'}</span>
                        </TableCell>
                        <TableCell>
                          {format(new Date(userProfile.created_at), 'dd MMM yyyy HH:mm', { locale: dateLocale })}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              onClick={() => approveUser(userProfile.company_user!.id)}
                              disabled={isAtUserLimit}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              {t('admin.users.approve')}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => rejectUser(userProfile.company_user!.id)}
                            >
                              <X className="h-4 w-4 mr-1" />
                              {t('admin.users.reject')}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {pendingRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {request.first_name} {request.last_name}
                            </p>
                            <p className="text-xs text-muted-foreground">{request.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{request.company_name || '-'}</span>
                        </TableCell>
                        <TableCell>
                          {format(new Date(request.created_at), 'dd MMM yyyy HH:mm', { locale: dateLocale })}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              onClick={() => approveRequest(request)}
                              disabled={isAtUserLimit}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              {t('admin.users.approve')}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => rejectRequest(request.id)}
                            >
                              <X className="h-4 w-4 mr-1" />
                              {t('admin.users.reject')}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="no-company">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.users.usersNoCompany')}</CardTitle>
              <CardDescription>{t('admin.users.usersNoCompanyDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              {usersWithoutCompany.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">{t('admin.users.allAssigned')}</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('admin.users.user')}</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>{t('admin.users.profileRole')}</TableHead>
                      <TableHead>{t('admin.users.registeredAt')}</TableHead>
                      <TableHead className="text-right">{t('admin.users.actions')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersWithoutCompany.map((userProfile) => (
                      <TableRow key={userProfile.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                              <UserIcon className="h-4 w-4 text-orange-600" />
                            </div>
                            <p className="font-medium">
                              {userProfile.first_name} {userProfile.last_name}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="text-sm">{userProfile.email}</p>
                        </TableCell>
                        <TableCell>
                          {getRoleBadge(undefined, userProfile.role)}
                        </TableCell>
                        <TableCell>
                          {format(new Date(userProfile.created_at), 'dd MMM yyyy HH:mm', { locale: dateLocale })}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            size="sm"
                            onClick={() => openAssignDialog(userProfile)}
                            className="gap-1"
                          >
                            <UserPlus className="h-4 w-4" />
                            {t('admin.users.assignToCompany')}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialog pentru asignare utilizator la companie */}
      <Dialog open={assignDialogOpen} onOpenChange={setAssignDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('admin.users.assignDialog')}</DialogTitle>
            <DialogDescription>
              {t('admin.users.assignDialogDesc')}{' '}
              <strong>{selectedUserForAssign?.first_name} {selectedUserForAssign?.last_name}</strong>
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{selectedUserForAssign?.first_name} {selectedUserForAssign?.last_name}</p>
                <p className="text-sm text-muted-foreground">{selectedUserForAssign?.email}</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t('admin.users.selectCompanyLabel')}</label>
              {isSuperAdmin ? (
                <Select value={selectedCompanyId} onValueChange={setSelectedCompanyId}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('admin.users.chooseCompany')} />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          {c.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <div className="p-3 bg-muted rounded-lg flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span>{company?.name}</span>
                </div>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setAssignDialogOpen(false)}>
              {t('admin.users.cancel')}
            </Button>
            <Button onClick={assignUserToCompany} disabled={!selectedCompanyId}>
              <UserPlus className="h-4 w-4 mr-2" />
              {t('admin.users.assign')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
