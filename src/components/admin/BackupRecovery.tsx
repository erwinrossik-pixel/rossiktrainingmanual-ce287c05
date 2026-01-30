import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { 
  Database, 
  Download, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  Clock,
  HardDrive,
  Shield,
  AlertTriangle
} from 'lucide-react';

export function BackupRecovery() {
  const { t, language } = useLanguage();
  const queryClient = useQueryClient();
  const [isBackupRunning, setIsBackupRunning] = useState(false);

  const daysLabel = language === 'ro' ? 'zile' : language === 'de' ? 'Tage' : 'days';
  const hoursLabel = language === 'ro' ? 'ore' : language === 'de' ? 'Stunden' : 'hours';
  const dailyLabel = language === 'ro' ? 'Zilnic' : language === 'de' ? 'Täglich' : 'Daily';
  const dailyAtLabel = language === 'ro'
    ? 'Zilnic la 02:00 UTC'
    : language === 'de'
      ? 'Täglich um 02:00 UTC'
      : 'Daily at 02:00 UTC';

  // Fetch backup status
  const { data: backupStatus, isLoading } = useQuery({
    queryKey: ['backup-status'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('backup-manager', {
        body: { action: 'get_status' }
      });
      if (error) throw error;
      return data;
    }
  });

  // Fetch backup logs
  const { data: backupLogs } = useQuery({
    queryKey: ['backup-logs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('backup_logs')
        .select('*')
        .order('started_at', { ascending: false })
        .limit(20);
      if (error) throw error;
      return data;
    }
  });

  // Fetch recovery tests
  const { data: recoveryTests } = useQuery({
    queryKey: ['recovery-tests'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('recovery_tests')
        .select('*, backup_logs(backup_type, started_at)')
        .order('started_at', { ascending: false })
        .limit(10);
      if (error) throw error;
      return data;
    }
  });

  const runBackup = async () => {
    setIsBackupRunning(true);
    try {
      const { data, error } = await supabase.functions.invoke('backup-manager', {
        body: { action: 'create_backup' }
      });
      
      if (error) throw error;
      
      toast.success(t('admin.backup.backupSuccess').replace('{records}', data.totalRecords).replace('{tables}', data.tablesBackedUp));
      queryClient.invalidateQueries({ queryKey: ['backup-logs'] });
      queryClient.invalidateQueries({ queryKey: ['backup-status'] });
    } catch (error: any) {
      toast.error(t('admin.backup.backupFailed').replace('{error}', error.message));
    } finally {
      setIsBackupRunning(false);
    }
  };

  const verifyBackup = async (backupId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('backup-manager', {
        body: { action: 'verify_backup', backupId }
      });
      
      if (error) throw error;
      
      toast.success(t('admin.backup.verifySuccess').replace('{records}', data.recordsVerified));
      queryClient.invalidateQueries({ queryKey: ['recovery-tests'] });
    } catch (error: any) {
      toast.error(t('admin.backup.verifyFailed').replace('{error}', error.message));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-success/20 text-success border-success/30">{t('admin.backup.completed')}</Badge>;
      case 'running':
        return <Badge className="bg-info/20 text-info border-info/30">{t('admin.backup.statusRunning')}</Badge>;
      case 'failed':
        return <Badge className="bg-destructive/20 text-destructive border-destructive/30">{t('admin.backup.statusFailed')}</Badge>;
      case 'pending':
        return <Badge className="bg-warning/20 text-warning border-warning/30">{t('admin.backup.statusPending')}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatBytes = (bytes: number) => {
    if (!bytes) return '-';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  };

  const formatDuration = (ms: number) => {
    if (!ms) return '-';
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
    return `${Math.floor(ms / 60000)}m ${Math.floor((ms % 60000) / 1000)}s`;
  };

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.backup.lastBackup')}</p>
                <p className="text-lg font-medium">
                  {backupStatus?.latestBackup 
                    ? new Date(backupStatus.latestBackup.started_at).toLocaleDateString()
                    : t('admin.backup.never')}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Database className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.backup.backups30d')}</p>
                <p className="text-2xl font-bold">{backupStatus?.last30Days?.total || 0}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <HardDrive className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.backup.successRate')}</p>
                <p className="text-2xl font-bold text-green-400">
                  {backupStatus?.last30Days?.total 
                    ? Math.round((backupStatus.last30Days.completed / backupStatus.last30Days.total) * 100)
                    : 100}%
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('admin.backup.nextScheduled')}</p>
                <p className="text-sm font-medium">{backupStatus?.nextScheduled || dailyAtLabel}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Backup Actions */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              {t('admin.backup.management')}
            </CardTitle>
            <CardDescription>{t('admin.backup.managementDesc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Button onClick={runBackup} disabled={isBackupRunning} className="flex-1">
                {isBackupRunning ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    {t('admin.backup.runningBackup')}
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    {t('admin.backup.runManual')}
                  </>
                )}
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">{t('admin.backup.config')}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('admin.backup.configSchedule')}</span>
                  <span>{dailyAtLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('admin.backup.configType')}</span>
                  <span>{t('admin.backup.fullDatabase')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('admin.backup.configRetention')}</span>
                  <span>30 {daysLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('admin.backup.configTables')}</span>
                  <span>8 {t('admin.backup.criticalTables')}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recovery Testing */}
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              {t('admin.backup.recoveryTesting')}
            </CardTitle>
            <CardDescription>{t('admin.backup.recoveryTestingDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[250px]">
              <div className="space-y-3">
                {recoveryTests?.map((test: any) => (
                  <div key={test.id} className="p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{test.test_type}</span>
                      {getStatusBadge(test.status)}
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>{t('admin.backup.recordsVerified')}: {test.records_verified || '-'}</p>
                      <p>{t('admin.backup.discrepancies')}: {test.discrepancies_found || 0}</p>
                      <p>{new Date(test.started_at).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
                {(!recoveryTests || recoveryTests.length === 0) && (
                  <p className="text-center text-muted-foreground py-4">{t('admin.backup.noRecoveryTests')}</p>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Backup History */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle>{t('admin.backup.history')}</CardTitle>
          <CardDescription>{t('admin.backup.historyDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-3">
              {backupLogs?.map((backup: any) => (
                <div key={backup.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      backup.status === 'completed' ? 'bg-green-500/20' :
                      backup.status === 'failed' ? 'bg-red-500/20' : 'bg-blue-500/20'
                    }`}>
                      {backup.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : backup.status === 'failed' ? (
                        <XCircle className="h-5 w-5 text-red-400" />
                      ) : (
                        <RefreshCw className="h-5 w-5 text-blue-400 animate-spin" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{backup.backup_type.toUpperCase()} Backup</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(backup.started_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right text-sm">
                      <p>{formatBytes(backup.size_bytes)}</p>
                      <p className="text-muted-foreground">{formatDuration(backup.duration_ms)}</p>
                    </div>
                    {getStatusBadge(backup.status)}
                    {backup.status === 'completed' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => verifyBackup(backup.id)}
                      >
                        {t('admin.backup.verify')}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              {(!backupLogs || backupLogs.length === 0) && (
                <p className="text-center text-muted-foreground py-8">{t('admin.backup.noBackups')}</p>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Recovery Plan */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            {t('admin.backup.disasterRecovery')}
          </CardTitle>
          <CardDescription>{t('admin.backup.disasterRecoveryDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">{t('admin.backup.recoveryProcedure')}</h4>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</span>
                  <span>{t('admin.backup.step1')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</span>
                  <span>{t('admin.backup.step2')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">3</span>
                  <span>{t('admin.backup.step3')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">4</span>
                  <span>{t('admin.backup.step4')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">5</span>
                  <span>{t('admin.backup.step5')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">6</span>
                  <span>{t('admin.backup.step6')}</span>
                </li>
              </ol>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">{t('admin.backup.recoveryTargets')}</h4>
              <div className="space-y-3">
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{t('admin.backup.rpo')}</span>
                    <span className="text-green-400 font-medium">24 {hoursLabel}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t('admin.backup.rpoDesc')}</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{t('admin.backup.rto')}</span>
                    <span className="text-green-400 font-medium">4 {hoursLabel}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t('admin.backup.rtoDesc')}</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{t('admin.backup.backupFrequency')}</span>
                    <span className="text-green-400 font-medium">{dailyLabel}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t('admin.backup.backupFrequencyDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
