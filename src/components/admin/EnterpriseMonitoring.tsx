import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Database, 
  RefreshCw, 
  Server, 
  Shield,
  TrendingUp,
  XCircle,
  Zap,
  HardDrive,
  AlertCircle
} from 'lucide-react';

export function EnterpriseMonitoring() {
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const [isHealthCheckRunning, setIsHealthCheckRunning] = useState(false);

  // Fetch health status
  const { data: healthData, isLoading: healthLoading, refetch: refetchHealth } = useQuery({
    queryKey: ['health-status'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('health-check');
      if (error) throw error;
      return data;
    },
    refetchInterval: 60000
  });

  // Fetch error stats
  const { data: errorStats } = useQuery({
    queryKey: ['error-stats'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('error-tracker', {
        body: { action: 'get_stats', period: '24h' }
      });
      if (error) throw error;
      return data;
    },
    refetchInterval: 30000
  });

  // Fetch recent errors
  const { data: recentErrors } = useQuery({
    queryKey: ['recent-errors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('error_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      if (error) throw error;
      return data;
    }
  });

  // Fetch recent health checks
  const { data: recentHealthChecks } = useQuery({
    queryKey: ['recent-health-checks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('system_health_checks')
        .select('*')
        .order('checked_at', { ascending: false })
        .limit(50);
      if (error) throw error;
      return data;
    }
  });

  // Fetch SLA metrics
  const { data: slaConfig } = useQuery({
    queryKey: ['sla-config'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sla_configuration')
        .select('*')
        .eq('is_active', true);
      if (error) throw error;
      return data;
    }
  });

  const runHealthCheck = async () => {
    setIsHealthCheckRunning(true);
    try {
      await refetchHealth();
      toast.success(t('admin.monitor.healthCheckComplete'));
    } catch (error) {
      toast.error(t('admin.monitor.healthCheckFailed'));
    } finally {
      setIsHealthCheckRunning(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-500';
      case 'degraded': return 'bg-yellow-500';
      case 'down': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy': return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{t('admin.monitor.statusHealthy')}</Badge>;
      case 'degraded': return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">{t('admin.monitor.statusDegraded')}</Badge>;
      case 'down': return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">{t('admin.monitor.statusDown')}</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical': return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">{t('admin.incident.severityCritical')}</Badge>;
      case 'error': return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Error</Badge>;
      case 'warning': return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">{t('admin.monitor.warning')}</Badge>;
      default: return <Badge variant="secondary">{severity}</Badge>;
    }
  };

  const calculateUptime = () => {
    if (!recentHealthChecks || recentHealthChecks.length === 0) return 100;
    const healthyCount = recentHealthChecks.filter(c => c.status === 'healthy').length;
    return ((healthyCount / recentHealthChecks.length) * 100).toFixed(2);
  };

  const calculateAvgResponseTime = () => {
    if (!recentHealthChecks || recentHealthChecks.length === 0) return 0;
    const totalTime = recentHealthChecks.reduce((sum, c) => sum + (c.response_time_ms || 0), 0);
    return Math.round(totalTime / recentHealthChecks.length);
  };

  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.monitor.systemStatus')}</p>
                <div className="mt-1">
                  {healthData ? getStatusBadge(healthData.status) : <Badge variant="secondary">{t('admin.monitor.loading')}</Badge>}
                </div>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${healthData?.status === 'healthy' ? 'bg-green-500/20' : healthData?.status === 'degraded' ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}>
                {healthData?.status === 'healthy' ? (
                  <CheckCircle className="h-6 w-6 text-green-400" />
                ) : healthData?.status === 'degraded' ? (
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-400" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.monitor.uptime24h')}</p>
                <p className="text-2xl font-bold text-foreground">{calculateUptime()}%</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            <Progress value={parseFloat(String(calculateUptime()))} className="mt-2 h-1" />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.monitor.avgResponse')}</p>
                <p className="text-2xl font-bold text-foreground">{calculateAvgResponseTime()}ms</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.monitor.errors24h')}</p>
                <p className="text-2xl font-bold text-foreground">{errorStats?.total || 0}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-red-400" />
              </div>
            </div>
            {errorStats?.bySeverity?.critical > 0 && (
              <p className="text-xs text-red-400 mt-2">{errorStats.bySeverity.critical} {t('admin.monitor.critical')}</p>
            )}
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="health" className="space-y-4">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="health">{t('admin.monitor.tabHealth')}</TabsTrigger>
          <TabsTrigger value="errors">{t('admin.monitor.tabErrors')}</TabsTrigger>
          <TabsTrigger value="sla">{t('admin.monitor.tabSLA')}</TabsTrigger>
          <TabsTrigger value="services">{t('admin.monitor.tabServices')}</TabsTrigger>
        </TabsList>

        <TabsContent value="health" className="space-y-4">
          <Card className="bg-card/50 border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{t('admin.monitor.systemHealth')}</CardTitle>
                <CardDescription>{t('admin.monitor.systemHealthDesc')}</CardDescription>
              </div>
              <Button onClick={runHealthCheck} disabled={isHealthCheckRunning} size="sm">
                <RefreshCw className={`h-4 w-4 mr-2 ${isHealthCheckRunning ? 'animate-spin' : ''}`} />
                {t('admin.monitor.runCheck')}
              </Button>
            </CardHeader>
            <CardContent>
              {healthData?.services && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {healthData.services.map((service: any) => (
                    <Card key={service.service} className="bg-background/50">
                      <CardContent className="pt-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {service.service === 'database' && <Database className="h-4 w-4" />}
                            {service.service === 'auth' && <Shield className="h-4 w-4" />}
                            {service.service === 'storage' && <HardDrive className="h-4 w-4" />}
                            <span className="font-medium capitalize">{service.service}</span>
                          </div>
                          {getStatusBadge(service.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {t('admin.monitor.responseTime')}: {service.responseTime}ms
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <h4 className="font-medium mb-3">{t('admin.monitor.recentHealthChecks')}</h4>
              <ScrollArea className="h-[300px]">
                <div className="space-y-2">
                  {recentHealthChecks?.map((check: any) => (
                    <div key={check.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(check.status)}`} />
                        <span className="capitalize">{check.check_type}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{check.response_time_ms}ms</span>
                        <span>{new Date(check.checked_at).toLocaleTimeString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-red-500/10 border-red-500/30">
              <CardContent className="pt-6">
                <p className="text-sm text-red-400">{t('admin.incident.severityCritical')}</p>
                <p className="text-3xl font-bold text-red-400">{errorStats?.bySeverity?.critical || 0}</p>
              </CardContent>
            </Card>
            <Card className="bg-orange-500/10 border-orange-500/30">
              <CardContent className="pt-6">
                <p className="text-sm text-orange-400">Errors</p>
                <p className="text-3xl font-bold text-orange-400">{errorStats?.bySeverity?.error || 0}</p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-500/10 border-yellow-500/30">
              <CardContent className="pt-6">
                <p className="text-sm text-yellow-400">{t('admin.monitor.warning')}</p>
                <p className="text-3xl font-bold text-yellow-400">{errorStats?.bySeverity?.warning || 0}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle>{t('admin.monitor.recentErrors')}</CardTitle>
              <CardDescription>{t('admin.monitor.recentErrorsDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {recentErrors?.map((error: any) => (
                    <Card key={error.id} className="bg-background/50">
                      <CardContent className="pt-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              {getSeverityBadge(error.severity)}
                              <Badge variant="outline">{error.error_type}</Badge>
                            </div>
                            <p className="text-sm font-medium">{error.error_message}</p>
                            {error.page_url && (
                              <p className="text-xs text-muted-foreground">Page: {error.page_url}</p>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(error.created_at).toLocaleString()}
                          </div>
                        </div>
                        {error.resolved_at && (
                          <Badge className="mt-2 bg-green-500/20 text-green-400">{t('admin.monitor.resolved')}</Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                  {(!recentErrors || recentErrors.length === 0) && (
                    <p className="text-center text-muted-foreground py-8">{t('admin.monitor.noErrors')}</p>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sla" className="space-y-4">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle>{t('admin.monitor.slaConfig')}</CardTitle>
              <CardDescription>{t('admin.monitor.slaConfigDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {slaConfig?.map((sla: any) => (
                  <div key={sla.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <div>
                      <p className="font-medium">{sla.metric_name.replace(/_/g, ' ').toUpperCase()}</p>
                      <p className="text-sm text-muted-foreground">{sla.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-400">
                        {t('admin.monitor.target')}: {sla.target_value}{sla.unit === 'percent' ? '%' : sla.unit}
                      </p>
                      <div className="flex gap-2 text-xs text-muted-foreground">
                        <span className="text-yellow-400">{t('admin.monitor.warning')}: {sla.warning_threshold}</span>
                        <span className="text-red-400">{t('admin.monitor.critical')}: {sla.critical_threshold}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  {t('admin.monitor.database')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.cron.status')}</span>
                    {getStatusBadge(healthData?.services?.find((s: any) => s.service === 'database')?.status || 'unknown')}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.monitor.responseTime')}</span>
                    <span>{healthData?.services?.find((s: any) => s.service === 'database')?.responseTime || '-'}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.monitor.provider')}</span>
                    <span>Lovable Cloud</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {t('admin.monitor.authentication')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.cron.status')}</span>
                    {getStatusBadge(healthData?.services?.find((s: any) => s.service === 'auth')?.status || 'unknown')}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.monitor.responseTime')}</span>
                    <span>{healthData?.services?.find((s: any) => s.service === 'auth')?.responseTime || '-'}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.monitor.method')}</span>
                    <span>Email/Password</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  {t('admin.monitor.storage')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.cron.status')}</span>
                    {getStatusBadge(healthData?.services?.find((s: any) => s.service === 'storage')?.status || 'unknown')}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.monitor.responseTime')}</span>
                    <span>{healthData?.services?.find((s: any) => s.service === 'storage')?.responseTime || '-'}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.monitor.buckets')}</span>
                    <span>{healthData?.services?.find((s: any) => s.service === 'storage')?.details?.buckets || '-'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  {t('admin.monitor.edgeFunctions')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.cron.status')}</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{t('admin.backup.active')}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.monitor.functions')}</span>
                    <span>12 {t('admin.monitor.deployed')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('admin.monitor.runtime')}</span>
                    <span>Deno</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
