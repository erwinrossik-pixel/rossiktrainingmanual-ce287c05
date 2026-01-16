import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
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
  const queryClient = useQueryClient();
  const [isBackupRunning, setIsBackupRunning] = useState(false);

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
      
      toast.success(`Backup completed! ${data.totalRecords} records from ${data.tablesBackedUp} tables`);
      queryClient.invalidateQueries({ queryKey: ['backup-logs'] });
      queryClient.invalidateQueries({ queryKey: ['backup-status'] });
    } catch (error: any) {
      toast.error('Backup failed: ' + error.message);
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
      
      toast.success(`Verification complete! ${data.recordsVerified} records verified`);
      queryClient.invalidateQueries({ queryKey: ['recovery-tests'] });
    } catch (error: any) {
      toast.error('Verification failed: ' + error.message);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>;
      case 'running':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Running</Badge>;
      case 'failed':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Failed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pending</Badge>;
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
                <p className="text-sm text-muted-foreground">Last Backup</p>
                <p className="text-lg font-medium">
                  {backupStatus?.latestBackup 
                    ? new Date(backupStatus.latestBackup.started_at).toLocaleDateString()
                    : 'Never'}
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
                <p className="text-sm text-muted-foreground">Backups (30d)</p>
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
                <p className="text-sm text-muted-foreground">Success Rate</p>
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
                <p className="text-sm text-muted-foreground">Next Scheduled</p>
                <p className="text-sm font-medium">{backupStatus?.nextScheduled || 'Daily 02:00 UTC'}</p>
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
              Backup Management
            </CardTitle>
            <CardDescription>Create and manage database backups</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Button onClick={runBackup} disabled={isBackupRunning} className="flex-1">
                {isBackupRunning ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Running Backup...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Run Manual Backup
                  </>
                )}
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Backup Configuration</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Schedule</span>
                  <span>Daily at 02:00 UTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span>Full Database</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Retention</span>
                  <span>30 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tables</span>
                  <span>8 critical tables</span>
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
              Recovery Testing
            </CardTitle>
            <CardDescription>Verify backup integrity and test recovery</CardDescription>
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
                      <p>Records verified: {test.records_verified || '-'}</p>
                      <p>Discrepancies: {test.discrepancies_found || 0}</p>
                      <p>{new Date(test.started_at).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
                {(!recoveryTests || recoveryTests.length === 0) && (
                  <p className="text-center text-muted-foreground py-4">No recovery tests performed</p>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Backup History */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle>Backup History</CardTitle>
          <CardDescription>Recent backup operations and their status</CardDescription>
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
                        Verify
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              {(!backupLogs || backupLogs.length === 0) && (
                <p className="text-center text-muted-foreground py-8">No backups yet</p>
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
            Disaster Recovery Plan
          </CardTitle>
          <CardDescription>Procedures for data recovery in case of emergency</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Recovery Procedure</h4>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</span>
                  <span>Identify the scope of data loss and affected tables</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</span>
                  <span>Select the most recent valid backup</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">3</span>
                  <span>Verify backup integrity before restoration</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">4</span>
                  <span>Restore data to a staging environment first</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">5</span>
                  <span>Validate restored data for completeness</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">6</span>
                  <span>Apply restored data to production</span>
                </li>
              </ol>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Recovery Targets</h4>
              <div className="space-y-3">
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">RPO (Recovery Point Objective)</span>
                    <span className="text-green-400 font-medium">24 hours</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Maximum acceptable data loss period</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">RTO (Recovery Time Objective)</span>
                    <span className="text-green-400 font-medium">4 hours</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Maximum acceptable downtime</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Backup Frequency</span>
                    <span className="text-green-400 font-medium">Daily</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Automated backups at 02:00 UTC</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
