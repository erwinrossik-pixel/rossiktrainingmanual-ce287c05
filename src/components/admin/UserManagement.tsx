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
import { Users, Check, X, Clock, User as UserIcon, Mail, AlertCircle, Search, Building2, UserPlus } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';

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

export function UserManagement() {
  const { company, isCompanyAdmin, isSuperAdmin, subscription } = useCompany();
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
  const [pendingRequests, setPendingRequests] = useState<RegistrationRequest[]>([]);
  const [loading, setLoading] = useState(true);
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
      console.log(`Email notification sent: ${type}`);
    } catch (error) {
      console.error('Failed to send notification email:', error);
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
      return <Badge className="bg-purple-500">{t('admin.users.superAdmin')}</Badge>;
    }
    if (role === 'company_admin') {
      return <Badge className="bg-blue-500">{t('admin.users.admin')}</Badge>;
    }
    if (profileRole === 'admin') {
      return <Badge className="bg-indigo-500">{t('admin.users.legacyAdmin')}</Badge>;
    }
    return <Badge variant="secondary">{t('admin.users.user')}</Badge>;
  };

  const getStatusBadge = (status: string | undefined, hasCompany: boolean) => {
    if (!hasCompany) {
      return <Badge variant="outline" className="text-orange-600 border-orange-600"><AlertCircle className="h-3 w-3 mr-1" />{t('admin.users.noCompanyStatus')}</Badge>;
    }
    switch (status) {
      case 'approved':
        return <Badge variant="outline" className="text-green-600 border-green-600"><Check className="h-3 w-3 mr-1" />{t('admin.users.activeStatus')}</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600"><Clock className="h-3 w-3 mr-1" />{t('admin.users.pendingStatus')}</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="text-red-600 border-red-600"><X className="h-3 w-3 mr-1" />{t('admin.users.rejectedStatus')}</Badge>;
      case 'suspended':
        return <Badge variant="outline" className="text-gray-600 border-gray-600"><AlertCircle className="h-3 w-3 mr-1" />{t('admin.users.suspendedStatus')}</Badge>;
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
        <TabsList>
          <TabsTrigger value="all-users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {t('admin.users.allUsers')} ({allUsers.length})
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
