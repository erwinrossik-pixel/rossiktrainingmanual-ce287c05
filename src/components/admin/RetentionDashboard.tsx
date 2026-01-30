import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Users, AlertTriangle, TrendingUp, Bell, RefreshCw,
  UserCheck, UserX, Clock, Send, Target, ArrowUpRight
} from 'lucide-react';
import { toast } from 'sonner';

interface RetentionStats {
  total: number;
  active: number;
  atRisk: number;
  inactive: number;
  churned: number;
  reEngaged: number;
  riskDistribution: {
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
}

interface RetentionUser {
  id: string;
  user_id: string;
  status: string;
  risk_level: string;
  days_inactive: number;
  engagement_score: number;
  notifications_sent: number;
  last_active_at: string;
  profiles?: {
    first_name: string | null;
    last_name: string | null;
    email: string;
  };
}

interface RetentionLog {
  id: string;
  user_id: string;
  trigger_reason: string;
  message_sent: string;
  channel: string;
  sent_at: string;
  clicked_at: string | null;
  returned_at: string | null;
  profiles?: {
    first_name: string | null;
    email: string;
  };
}

export function RetentionDashboard() {
  const { t } = useLanguage();
  const [stats, setStats] = useState<RetentionStats | null>(null);
  const [users, setUsers] = useState<RetentionUser[]>([]);
  const [logs, setLogs] = useState<RetentionLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch retention users
      const { data: retentionData, error: retentionError } = await supabase
        .from('user_retention')
        .select('*')
        .order('risk_level', { ascending: false })
        .order('days_inactive', { ascending: false })
        .limit(100);
      
      if (retentionError) {
        console.error('Error fetching retention data:', retentionError);
      }

      // Fetch profiles for these users
      const userIds = (retentionData || []).map(u => u.user_id);
      const { data: profilesData } = await supabase
        .from('profiles')
        .select('id, first_name, last_name, email')
        .in('id', userIds);
      
      // Create profiles map
      const profilesMap = new Map();
      (profilesData || []).forEach(p => profilesMap.set(p.id, p));

      const typedUsers = (retentionData || []).map(u => ({
        ...u,
        profiles: profilesMap.get(u.user_id) || null
      })) as RetentionUser[];
      
      setUsers(typedUsers);

      // Calculate stats
      const total = typedUsers.length;
      const stats: RetentionStats = {
        total,
        active: typedUsers.filter(u => u.status === 'active').length,
        atRisk: typedUsers.filter(u => u.status === 'at_risk').length,
        inactive: typedUsers.filter(u => u.status === 'inactive').length,
        churned: typedUsers.filter(u => u.status === 'churned').length,
        reEngaged: typedUsers.filter(u => u.status === 're_engaged').length,
        riskDistribution: {
          low: typedUsers.filter(u => u.risk_level === 'low').length,
          medium: typedUsers.filter(u => u.risk_level === 'medium').length,
          high: typedUsers.filter(u => u.risk_level === 'high').length,
          critical: typedUsers.filter(u => u.risk_level === 'critical').length,
        }
      };
      setStats(stats);

      // Fetch recent logs
      const { data: logsData, error: logsError } = await supabase
        .from('retention_logs')
        .select('*')
        .order('sent_at', { ascending: false })
        .limit(50);
      
      if (logsError) {
        console.error('Error fetching retention logs:', logsError);
      }

      // Fetch profiles for logs
      const logUserIds = (logsData || []).map(l => l.user_id);
      const { data: logProfilesData } = await supabase
        .from('profiles')
        .select('id, first_name, email')
        .in('id', logUserIds);
      
      const logProfilesMap = new Map();
      (logProfilesData || []).forEach(p => logProfilesMap.set(p.id, p));

      setLogs((logsData || []).map(l => ({
        ...l,
        profiles: logProfilesMap.get(l.user_id) || null
      })) as RetentionLog[]);

    } catch (error) {
      console.error('Error fetching retention data:', error);
      toast.error(t('admin.retention.errorLoading'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const runAnalysis = async () => {
    setAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke('retention-analyzer', {
        body: { action: 'analyze' }
      });

      if (error) throw error;

      toast.success(t('admin.retention.analysisComplete').replace('{count}', data.messages?.messagesSent || 0));
      fetchData();
    } catch (error) {
      console.error('Error running analysis:', error);
      toast.error(t('admin.retention.errorAnalysis'));
    } finally {
      setAnalyzing(false);
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-destructive';
      case 'high': return 'bg-warning';
      case 'medium': return 'bg-warning/70';
      default: return 'bg-success';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-success/20 text-success">{t('admin.company.active')}</Badge>;
      case 'at_risk':
        return <Badge className="bg-warning/20 text-warning">{t('admin.retention.atRisk')}</Badge>;
      case 'inactive':
        return <Badge className="bg-warning/20 text-warning">{t('admin.retention.inactive')}</Badge>;
      case 'churned':
        return <Badge className="bg-destructive/20 text-destructive">{t('admin.status.locked')}</Badge>;
      case 're_engaged':
        return <Badge className="bg-blue-500/20 text-blue-700">{t('admin.retention.returned')}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  const reEngagementRate = stats && stats.total > 0
    ? Math.round((stats.reEngaged / stats.total) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t('admin.retention.system')}</h2>
          <p className="text-muted-foreground">
            {t('admin.retention.detection')}
          </p>
        </div>
        <Button onClick={runAnalysis} disabled={analyzing}>
          {analyzing ? (
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Send className="h-4 w-4 mr-2" />
          )}
          {analyzing ? t('admin.retention.analyzing') : t('admin.retention.runAnalysis')}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-green-500/10">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats?.active || 0}</p>
                <p className="text-sm text-muted-foreground">{t('admin.retention.activeUsers')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-warning/10">
                <AlertTriangle className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats?.atRisk || 0}</p>
                <p className="text-sm text-muted-foreground">{t('admin.retention.atRisk')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-red-500/10">
                <UserX className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{(stats?.inactive || 0) + (stats?.churned || 0)}</p>
                <p className="text-sm text-muted-foreground">{t('admin.retention.inactive')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-blue-500/10">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{reEngagementRate}%</p>
                <p className="text-sm text-muted-foreground">{t('admin.retention.reEngagement')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            {t('admin.retention.riskDist')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats?.riskDistribution && Object.entries(stats.riskDistribution).map(([level, count]) => {
              const percent = stats.total > 0 ? (count / stats.total) * 100 : 0;
              const levelLabels: Record<string, string> = {
                low: t('admin.retention.low'),
                medium: t('admin.retention.medium'),
                high: t('admin.retention.high'),
                critical: t('admin.retention.critical'),
              };
              return (
                <div key={level} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{levelLabels[level] || level}</span>
                    <span className="text-muted-foreground">{count} ({percent.toFixed(1)}%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getRiskColor(level)} transition-all`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {t('admin.retention.usersAtRisk')}
          </TabsTrigger>
          <TabsTrigger value="logs" className="flex items-center gap-1">
            <Bell className="h-4 w-4" />
            {t('admin.retention.messageLogs')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {users.filter(u => u.risk_level !== 'low').length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    {t('admin.retention.allActive')}
                  </p>
                ) : (
                  users.filter(u => u.risk_level !== 'low').map(user => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${getRiskColor(user.risk_level)}`} />
                        <div>
                          <p className="font-medium">
                            {user.profiles?.first_name || user.profiles?.email || 'User'}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {user.profiles?.email}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm font-medium flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {user.days_inactive} {t('admin.retention.daysInactive')}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t('admin.retention.score')}: {user.engagement_score?.toFixed(0) || 0}/100
                          </p>
                        </div>
                        {getStatusBadge(user.status)}
                        <Badge variant="outline" className="capitalize">
                          {user.risk_level}
                        </Badge>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {logs.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    {t('admin.retention.noMessages')}
                  </p>
                ) : (
                  logs.map(log => (
                    <div 
                      key={log.id}
                      className="flex items-start justify-between p-4 rounded-lg bg-muted/50"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">
                          {log.profiles?.first_name || log.profiles?.email}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {log.message_sent}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {log.channel}
                          </Badge>
                          <span>{log.trigger_reason}</span>
                        </div>
                      </div>
                      
                      <div className="text-right shrink-0 ml-4">
                        <p className="text-xs text-muted-foreground">
                          {new Date(log.sent_at).toLocaleDateString()}
                        </p>
                        {log.returned_at && (
                          <Badge className="bg-green-500/20 text-green-700 text-xs mt-1">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            {t('admin.retention.returned')}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
