import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Users, UserPlus, Check, X, Clock, Shield, User as UserIcon, Mail, AlertCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';

interface CompanyUserWithProfile {
  id: string;
  user_id: string;
  company_id: string;
  role: 'super_admin' | 'company_admin' | 'user';
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  created_at: string;
  approved_at: string | null;
  profile?: {
    email: string;
    first_name: string | null;
    last_name: string | null;
  };
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
}

export function UserManagement() {
  const { company, isCompanyAdmin, isSuperAdmin, subscription } = useCompany();
  const { user } = useAuth();
  const { toast } = useToast();
  const [users, setUsers] = useState<CompanyUserWithProfile[]>([]);
  const [pendingRequests, setPendingRequests] = useState<RegistrationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    if (isCompanyAdmin || isSuperAdmin) {
      fetchUsers();
      fetchPendingRequests();
    }
  }, [company, isCompanyAdmin, isSuperAdmin]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('company_users')
        .select('*')
        .order('created_at', { ascending: false });

      // Super admin sees all users, company admin sees only their company
      if (!isSuperAdmin && company) {
        query = query.eq('company_id', company.id);
      }

      const { data, error } = await query;

      if (error) throw error;

      // Fetch profiles for each user
      const usersWithProfiles = await Promise.all(
        (data || []).map(async (cu) => {
          const { data: profile } = await supabase
            .from('profiles')
            .select('email, first_name, last_name')
            .eq('id', cu.user_id)
            .single();
          
          return { ...cu, profile } as CompanyUserWithProfile;
        })
      );

      setUsers(usersWithProfiles);
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

    // Super admin sees all requests, company admin sees only their company
    if (!isSuperAdmin && company) {
      query = query.eq('company_id', company.id);
    }

    const { data } = await query;
    setPendingRequests(data || []);
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
      fetchUsers();
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
      fetchUsers();
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
      fetchUsers();
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
      fetchUsers();
    } catch (error) {
      toast({ title: 'Eroare', variant: 'destructive' });
    }
  };

  const approveRequest = async (request: RegistrationRequest) => {
    try {
      // Create company_users entry
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

      // Update request status
      await supabase
        .from('user_registration_requests')
        .update({
          status: 'approved',
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString()
        })
        .eq('id', request.id);

      toast({ title: 'Cerere aprobată' });
      fetchUsers();
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

  const approvedUsers = users.filter(u => u.status === 'approved');
  const pendingUsers = users.filter(u => u.status === 'pending');
  const maxUsers = subscription?.plan?.max_users;
  const isAtUserLimit = maxUsers && approvedUsers.length >= maxUsers;

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'super_admin':
        return <Badge className="bg-purple-500">Super Admin</Badge>;
      case 'company_admin':
        return <Badge className="bg-blue-500">Admin</Badge>;
      default:
        return <Badge variant="secondary">Utilizator</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
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
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gestionare Utilizatori</h2>
          <p className="text-muted-foreground">
            {approvedUsers.length}{maxUsers ? `/${maxUsers}` : ''} utilizatori activi
          </p>
        </div>
        {isAtUserLimit && (
          <div className="flex items-center gap-2 text-amber-600">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">Limita de utilizatori a fost atinsă</span>
          </div>
        )}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Utilizatori ({approvedUsers.length})
          </TabsTrigger>
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            În Așteptare ({pendingUsers.length + pendingRequests.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card>
            <CardContent className="pt-6">
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Utilizator</TableHead>
                      <TableHead>Rol</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Înregistrat</TableHead>
                      <TableHead className="text-right">Acțiuni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.filter(u => u.status !== 'pending').map((companyUser) => (
                      <TableRow key={companyUser.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <UserIcon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">
                                {companyUser.profile?.first_name} {companyUser.profile?.last_name}
                              </p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {companyUser.profile?.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getRoleBadge(companyUser.role)}</TableCell>
                        <TableCell>{getStatusBadge(companyUser.status)}</TableCell>
                        <TableCell>
                          {format(new Date(companyUser.created_at), 'dd MMM yyyy', { locale: ro })}
                        </TableCell>
                        <TableCell className="text-right">
                          {companyUser.user_id !== user?.id && companyUser.role !== 'super_admin' && (
                            <div className="flex justify-end gap-2">
                              <Select
                                value={companyUser.role}
                                onValueChange={(value: 'user' | 'company_admin') => updateUserRole(companyUser.id, value)}
                                disabled={!isSuperAdmin && companyUser.role === 'company_admin'}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="user">Utilizator</SelectItem>
                                  <SelectItem value="company_admin">Admin</SelectItem>
                                </SelectContent>
                              </Select>
                              {companyUser.status === 'approved' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => suspendUser(companyUser.id)}
                                >
                                  Suspendă
                                </Button>
                              )}
                              {companyUser.status === 'suspended' && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => approveUser(companyUser.id)}
                                >
                                  Reactivează
                                </Button>
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
                      <TableHead>Data Cererii</TableHead>
                      <TableHead className="text-right">Acțiuni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingUsers.map((companyUser) => (
                      <TableRow key={companyUser.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {companyUser.profile?.first_name} {companyUser.profile?.last_name}
                            </p>
                            <p className="text-xs text-muted-foreground">{companyUser.profile?.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {format(new Date(companyUser.created_at), 'dd MMM yyyy HH:mm', { locale: ro })}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              onClick={() => approveUser(companyUser.id)}
                              disabled={isAtUserLimit}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Aprobă
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => rejectUser(companyUser.id)}
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
      </Tabs>
    </div>
  );
}
