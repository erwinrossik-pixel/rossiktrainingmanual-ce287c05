import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Users, Check, X, Clock, User as UserIcon, Mail, AlertCircle, Search, Building2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';

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
  const { toast } = useToast();
  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
  const [pendingRequests, setPendingRequests] = useState<RegistrationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all-users');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isCompanyAdmin || isSuperAdmin) {
      fetchAllUsers();
      fetchPendingRequests();
    }
  }, [company, isCompanyAdmin, isSuperAdmin]);

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
      const { data: companies } = await supabase
        .from('companies')
        .select('id, name');

      const companiesMap = new Map(companies?.map(c => [c.id, c.name]) || []);

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
    const { data: companies } = await supabase
      .from('companies')
      .select('id, name');
    
    const companiesMap = new Map(companies?.map(c => [c.id, c.name]) || []);
    
    const requestsWithCompany = (data || []).map(req => ({
      ...req,
      company_name: companiesMap.get(req.company_id)
    }));
    
    setPendingRequests(requestsWithCompany);
  };

  const approveUser = async (companyUserId: string) => {
    try {
      await supabase
        .from('company_users')
        .update({
          status: 'approved',
          approved_by: user?.id,
          approved_at: new Date().toISOString()
        })
        .eq('id', companyUserId);

      toast({ title: 'Utilizator aprobat', description: 'Utilizatorul poate accesa acum platforma' });
      fetchAllUsers();
    } catch (error) {
      toast({ title: 'Eroare', description: 'Nu s-a putut aproba utilizatorul', variant: 'destructive' });
    }
  };

  const rejectUser = async (companyUserId: string) => {
    try {
      await supabase
        .from('company_users')
        .update({ status: 'rejected' })
        .eq('id', companyUserId);

      toast({ title: 'Utilizator respins' });
      fetchAllUsers();
    } catch (error) {
      toast({ title: 'Eroare', description: 'Nu s-a putut respinge utilizatorul', variant: 'destructive' });
    }
  };

  const suspendUser = async (companyUserId: string) => {
    try {
      await supabase
        .from('company_users')
        .update({ status: 'suspended' })
        .eq('id', companyUserId);

      toast({ title: 'Utilizator suspendat' });
      fetchAllUsers();
    } catch (error) {
      toast({ title: 'Eroare', variant: 'destructive' });
    }
  };

  const updateUserRole = async (companyUserId: string, newRole: 'user' | 'company_admin') => {
    try {
      await supabase
        .from('company_users')
        .update({ role: newRole })
        .eq('id', companyUserId);

      toast({ title: 'Rol actualizat' });
      fetchAllUsers();
    } catch (error) {
      toast({ title: 'Eroare', variant: 'destructive' });
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

      toast({ title: 'Cerere aprobată' });
      fetchAllUsers();
      fetchPendingRequests();
    } catch (error) {
      toast({ title: 'Eroare', variant: 'destructive' });
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

      toast({ title: 'Cerere respinsă' });
      fetchPendingRequests();
    } catch (error) {
      toast({ title: 'Eroare', variant: 'destructive' });
    }
  };

  if (!isCompanyAdmin && !isSuperAdmin) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Acces restricționat</CardTitle>
          <CardDescription>Doar administratorii pot gestiona utilizatorii.</CardDescription>
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
      return <Badge className="bg-purple-500">Super Admin</Badge>;
    }
    if (role === 'company_admin') {
      return <Badge className="bg-blue-500">Admin</Badge>;
    }
    if (profileRole === 'admin') {
      return <Badge className="bg-indigo-500">Admin (Legacy)</Badge>;
    }
    return <Badge variant="secondary">Utilizator</Badge>;
  };

  const getStatusBadge = (status: string | undefined, hasCompany: boolean) => {
    if (!hasCompany) {
      return <Badge variant="outline" className="text-orange-600 border-orange-600"><AlertCircle className="h-3 w-3 mr-1" />Fără companie</Badge>;
    }
    switch (status) {
      case 'approved':
        return <Badge variant="outline" className="text-green-600 border-green-600"><Check className="h-3 w-3 mr-1" />Activ</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600"><Clock className="h-3 w-3 mr-1" />În așteptare</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="text-red-600 border-red-600"><X className="h-3 w-3 mr-1" />Respins</Badge>;
      case 'suspended':
        return <Badge variant="outline" className="text-gray-600 border-gray-600"><AlertCircle className="h-3 w-3 mr-1" />Suspendat</Badge>;
      default:
        return <Badge variant="secondary">Necunoscut</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold">Gestionare Utilizatori</h2>
          <p className="text-muted-foreground">
            {allUsers.length} utilizatori înregistrați • {activeUsers.length} activi • {usersWithoutCompany.length} fără companie
          </p>
        </div>
        {isAtUserLimit && (
          <div className="flex items-center gap-2 text-amber-600">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">Limita de utilizatori a fost atinsă</span>
          </div>
        )}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Caută după nume, email sau companie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all-users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Toți Utilizatorii ({allUsers.length})
          </TabsTrigger>
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            În Așteptare ({pendingUsers.length + pendingRequests.length})
          </TabsTrigger>
          <TabsTrigger value="no-company" className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            Fără Companie ({usersWithoutCompany.length})
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
                <p className="text-center py-8 text-muted-foreground">Nu există utilizatori</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Utilizator</TableHead>
                      <TableHead>Companie</TableHead>
                      <TableHead>Rol</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Înregistrat</TableHead>
                      <TableHead className="text-right">Acțiuni</TableHead>
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
                          {format(new Date(userProfile.created_at), 'dd MMM yyyy', { locale: ro })}
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
                                  <SelectItem value="user">Utilizator</SelectItem>
                                  <SelectItem value="company_admin">Admin</SelectItem>
                                </SelectContent>
                              </Select>
                              {userProfile.company_user.status === 'approved' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => suspendUser(userProfile.company_user!.id)}
                                >
                                  Suspendă
                                </Button>
                              )}
                              {userProfile.company_user.status === 'suspended' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => approveUser(userProfile.company_user!.id)}
                                >
                                  Reactivează
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
              <CardTitle>Cereri în Așteptare</CardTitle>
              <CardDescription>Utilizatori care așteaptă aprobare pentru a accesa platforma</CardDescription>
            </CardHeader>
            <CardContent>
              {pendingUsers.length === 0 && pendingRequests.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">Nu există cereri în așteptare</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Utilizator</TableHead>
                      <TableHead>Companie</TableHead>
                      <TableHead>Data Cererii</TableHead>
                      <TableHead className="text-right">Acțiuni</TableHead>
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
                          {format(new Date(userProfile.created_at), 'dd MMM yyyy HH:mm', { locale: ro })}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              onClick={() => approveUser(userProfile.company_user!.id)}
                              disabled={isAtUserLimit}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Aprobă
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => rejectUser(userProfile.company_user!.id)}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Respinge
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
                          {format(new Date(request.created_at), 'dd MMM yyyy HH:mm', { locale: ro })}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              onClick={() => approveRequest(request)}
                              disabled={isAtUserLimit}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Aprobă
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => rejectRequest(request.id)}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Respinge
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
              <CardTitle>Utilizatori Fără Companie</CardTitle>
              <CardDescription>Utilizatori înregistrați care nu sunt asociați cu nicio companie</CardDescription>
            </CardHeader>
            <CardContent>
              {usersWithoutCompany.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">Toți utilizatorii sunt asociați cu o companie</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Utilizator</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Rol Profil</TableHead>
                      <TableHead>Înregistrat</TableHead>
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
                          {format(new Date(userProfile.created_at), 'dd MMM yyyy HH:mm', { locale: ro })}
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
    </div>
  );
}
