import { useState, useEffect, memo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RefreshCw, Clock, Play, Calendar, Zap, AlertCircle, CheckCircle2, Download, FileText, XCircle, Timer } from 'lucide-react';
import { toast } from 'sonner';
import { format, subDays } from 'date-fns';
import { ro } from 'date-fns/locale';

interface CronJob {
  jobid: number;
  jobname: string;
  schedule: string;
  command: string;
  nodename: string;
  active: boolean;
}

interface CronJobLog {
  id: string;
  job_name: string;
  execution_type: string;
  started_at: string;
  completed_at: string | null;
  duration_ms: number | null;
  status: string;
  result_summary: string | null;
  error_message: string | null;
  items_processed: number;
  items_failed: number;
  execution_details: unknown;
  triggered_by: string | null;
  created_at: string;
}

// Parse cron schedule to human-readable format
const parseCronSchedule = (schedule: string): string => {
  const parts = schedule.split(' ');
  if (parts.length !== 5) return schedule;
  
  const [minute, hour, dayOfMonth, month, dayOfWeek] = parts;
  
  // Common patterns
  if (minute === '*' && hour === '*') return 'La fiecare minut';
  if (minute === '0' && hour === '*') return 'La fiecare oră';
  if (dayOfMonth === '*' && month === '*' && dayOfWeek === '*') {
    return `Zilnic la ${hour.padStart(2, '0')}:${minute.padStart(2, '0')} UTC`;
  }
  
  return schedule;
};

// Get next run time based on cron schedule
const getNextRunTime = (schedule: string): Date | null => {
  const parts = schedule.split(' ');
  if (parts.length !== 5) return null;
  
  const [minute, hour] = parts;
  const now = new Date();
  const nextRun = new Date();
  
  nextRun.setUTCHours(parseInt(hour), parseInt(minute), 0, 0);
  
  if (nextRun <= now) {
    nextRun.setDate(nextRun.getDate() + 1);
  }
  
  return nextRun;
};

// Job configurations (since pg_cron is not directly accessible from client)
const JOB_CONFIGS: CronJob[] = [
  {
    jobid: 1,
    jobname: 'daily-auto-update-check',
    schedule: '0 6 * * *',
    command: 'auto-update-check',
    nodename: 'localhost',
    active: true
  },
  {
    jobid: 2,
    jobname: 'daily-ai-kpi-analysis',
    schedule: '0 7 * * *',
    command: 'ai-kpi-analyzer',
    nodename: 'localhost',
    active: true
  },
  {
    jobid: 3,
    jobname: 'health-check-5min',
    schedule: '*/5 * * * *',
    command: 'health-check',
    nodename: 'localhost',
    active: true
  },
  {
    jobid: 4,
    jobname: 'daily-backup-0200',
    schedule: '0 2 * * *',
    command: 'backup-manager',
    nodename: 'localhost',
    active: true
  }
];

const JOB_DESCRIPTIONS: Record<string, string> = {
  'auto-update-check': 'Verifică sursele externe pentru actualizări de conținut și detectează schimbări relevante',
  'ai-kpi-analyzer': 'Analizează KPI-urile de învățare și generează recomandări AI pentru îmbunătățirea conținutului',
  'health-check': 'Monitorizează starea sistemului: Database, Auth, Storage. Rulează la fiecare 5 minute',
  'backup-manager': 'Backup zilnic automat al bazei de date la 02:00 UTC. Include toate tabelele critice'
};

export const CronJobsMonitor = memo(function CronJobsMonitor() {
  const [logs, setLogs] = useState<CronJobLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filterJob, setFilterJob] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [dateRange, setDateRange] = useState<string>('7');

  const fetchLogs = async () => {
    try {
      const startDate = subDays(new Date(), parseInt(dateRange));
      
      let query = supabase
        .from('cron_job_logs')
        .select('*')
        .gte('started_at', startDate.toISOString())
        .order('started_at', { ascending: false });
      
      if (filterJob !== 'all') {
        query = query.eq('job_name', filterJob);
      }
      
      if (filterStatus !== 'all') {
        query = query.eq('status', filterStatus);
      }

      const { data, error } = await query.limit(100);

      if (error) {
        console.error('Error fetching cron logs:', error);
        toast.error('Eroare la încărcarea logurilor');
      } else {
        setLogs(data || []);
      }
    } catch (error) {
      console.error('Error fetching cron data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchLogs();
    
    // Subscribe to realtime updates
    const channel = supabase
      .channel('cron-job-logs')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'cron_job_logs'
        },
        () => {
          fetchLogs();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [filterJob, filterStatus, dateRange]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchLogs();
  };

  const handleRunNow = async (jobName: string) => {
    // Map job names to function names
    const functionMap: Record<string, string> = {
      'daily-auto-update-check': 'auto-update-check',
      'daily-ai-kpi-analysis': 'ai-kpi-analyzer',
      'health-check-5min': 'health-check',
      'daily-backup-0200': 'backup-manager'
    };
    
    const functionName = functionMap[jobName] || jobName;
    
    try {
      toast.info(`Se execută ${functionName}...`);
      
      const body = functionName === 'backup-manager' 
        ? { action: 'backup', manual: true }
        : { manual: true, type: 'full' };
      
      const { error } = await supabase.functions.invoke(functionName, { body });

      if (error) {
        toast.error(`Eroare la executarea ${functionName}`);
        return;
      }

      toast.success(`${functionName} executat cu succes`);
    } catch (error) {
      toast.error('Eroare la executarea job-ului');
    }
  };

  const exportLogs = () => {
    if (logs.length === 0) {
      toast.error('Nu există loguri de exportat');
      return;
    }

    const csvContent = [
      ['ID', 'Job', 'Tip', 'Start', 'End', 'Durată (ms)', 'Status', 'Rezultat', 'Eroare', 'Procesate', 'Eșuate'].join(','),
      ...logs.map(log => [
        log.id,
        log.job_name,
        log.execution_type,
        log.started_at,
        log.completed_at || '',
        log.duration_ms || '',
        log.status,
        `"${(log.result_summary || '').replace(/"/g, '""')}"`,
        `"${(log.error_message || '').replace(/"/g, '""')}"`,
        log.items_processed,
        log.items_failed
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cron-job-logs-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    toast.success('Loguri exportate cu succes');
  };

  const exportDetailedReport = () => {
    if (logs.length === 0) {
      toast.error('Nu există loguri pentru raport');
      return;
    }

    // Group logs by job
    const groupedLogs = logs.reduce((acc, log) => {
      if (!acc[log.job_name]) {
        acc[log.job_name] = [];
      }
      acc[log.job_name].push(log);
      return acc;
    }, {} as Record<string, CronJobLog[]>);

    // Calculate stats
    const report = Object.entries(groupedLogs).map(([jobName, jobLogs]) => {
      const successCount = jobLogs.filter(l => l.status === 'success').length;
      const failedCount = jobLogs.filter(l => l.status === 'failed').length;
      const avgDuration = jobLogs
        .filter(l => l.duration_ms)
        .reduce((sum, l) => sum + (l.duration_ms || 0), 0) / (jobLogs.filter(l => l.duration_ms).length || 1);
      const totalProcessed = jobLogs.reduce((sum, l) => sum + l.items_processed, 0);

      return {
        jobName,
        totalRuns: jobLogs.length,
        successCount,
        failedCount,
        successRate: ((successCount / jobLogs.length) * 100).toFixed(1),
        avgDuration: Math.round(avgDuration),
        totalProcessed,
        lastRun: jobLogs[0]?.started_at,
        lastStatus: jobLogs[0]?.status
      };
    });

    const reportContent = [
      '=== RAPORT CRON JOBS ===',
      `Generat: ${format(new Date(), 'dd.MM.yyyy HH:mm:ss')}`,
      `Perioada: Ultimele ${dateRange} zile`,
      '',
      ...report.flatMap(r => [
        `--- ${r.jobName} ---`,
        `Total execuții: ${r.totalRuns}`,
        `Succes: ${r.successCount} (${r.successRate}%)`,
        `Eșuate: ${r.failedCount}`,
        `Durată medie: ${r.avgDuration}ms`,
        `Total procesate: ${r.totalProcessed}`,
        `Ultima execuție: ${r.lastRun ? format(new Date(r.lastRun), 'dd.MM.yyyy HH:mm:ss') : 'N/A'}`,
        `Ultimul status: ${r.lastStatus || 'N/A'}`,
        ''
      ]),
      '=== DETALII EXECUȚII ===',
      '',
      ...logs.map(log => [
        `[${format(new Date(log.started_at), 'dd.MM.yyyy HH:mm:ss')}] ${log.job_name}`,
        `  Status: ${log.status}`,
        `  Tip: ${log.execution_type}`,
        `  Durată: ${log.duration_ms || 'N/A'}ms`,
        log.result_summary ? `  Rezultat: ${log.result_summary}` : '',
        log.error_message ? `  EROARE: ${log.error_message}` : '',
        ''
      ].filter(Boolean).join('\n'))
    ].join('\n');

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cron-job-report-${format(new Date(), 'yyyy-MM-dd')}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    toast.success('Raport detaliat exportat');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20"><CheckCircle2 className="h-3 w-3 mr-1" />Succes</Badge>;
      case 'failed':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Eșuat</Badge>;
      case 'running':
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20"><RefreshCw className="h-3 w-3 mr-1 animate-spin" />Rulează</Badge>;
      case 'timeout':
        return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20"><Timer className="h-3 w-3 mr-1" />Timeout</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatDuration = (ms: number | null): string => {
    if (!ms) return '-';
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
    return `${Math.round(ms / 60000)}m ${Math.round((ms % 60000) / 1000)}s`;
  };

  // Calculate stats
  const successCount = logs.filter(l => l.status === 'success').length;
  const failedCount = logs.filter(l => l.status === 'failed').length;
  const runningCount = logs.filter(l => l.status === 'running').length;
  const avgDuration = logs.filter(l => l.duration_ms).reduce((sum, l) => sum + (l.duration_ms || 0), 0) / (logs.filter(l => l.duration_ms).length || 1);

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Cron Jobs Monitor
          </h2>
          <p className="text-muted-foreground">
            Monitorizează și gestionează job-urile programate
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            onClick={exportLogs}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button 
            variant="outline" 
            onClick={exportDetailedReport}
            className="gap-2"
          >
            <FileText className="h-4 w-4" />
            Raport Detaliat
          </Button>
          <Button 
            variant="outline" 
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Reîmprospătează
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Execuții</p>
                <p className="text-xl font-bold">{logs.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Succes</p>
                <p className="text-xl font-bold text-green-600">{successCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-500/10">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Eșuate</p>
                <p className="text-xl font-bold text-red-600">{failedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">În Execuție</p>
                <p className="text-xl font-bold text-blue-600">{runningCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Timer className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Durată Medie</p>
                <p className="text-xl font-bold">{formatDuration(avgDuration)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Jobs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Jobs Programate</CardTitle>
          <CardDescription>
            Lista job-urilor cron configurate cu program și acțiuni
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nume Job</TableHead>
                <TableHead>Descriere</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Următoarea Execuție</TableHead>
                <TableHead>Ultima Execuție</TableHead>
                <TableHead className="text-right">Acțiuni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {JOB_CONFIGS.map((job) => {
                const nextRun = getNextRunTime(job.schedule);
                const lastLog = logs.find(l => l.job_name === job.command);
                
                return (
                  <TableRow key={job.jobid}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        {job.jobname}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm text-muted-foreground truncate">
                        {JOB_DESCRIPTIONS[job.command] || 'Job programat'}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono">
                        {parseCronSchedule(job.schedule)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {nextRun ? (
                        <span className="text-sm">
                          {format(nextRun, 'dd MMM yyyy, HH:mm', { locale: ro })}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {lastLog ? (
                        <div className="flex items-center gap-2">
                          {getStatusBadge(lastLog.status)}
                          <span className="text-xs text-muted-foreground">
                            {format(new Date(lastLog.started_at), 'dd.MM HH:mm')}
                          </span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">Nicio execuție</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRunNow(job.jobname)}
                        className="gap-1"
                      >
                        <Play className="h-4 w-4" />
                        Execută Acum
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Execution Logs */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <CardTitle>Istoric Execuții</CardTitle>
              <CardDescription>
                Loguri detaliate ale tuturor execuțiilor cron
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select value={filterJob} onValueChange={setFilterJob}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Toate job-urile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toate job-urile</SelectItem>
                  <SelectItem value="auto-update-check">Auto-Update Check</SelectItem>
                  <SelectItem value="ai-kpi-analyzer">AI KPI Analyzer</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Toate statusurile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toate</SelectItem>
                  <SelectItem value="success">Succes</SelectItem>
                  <SelectItem value="failed">Eșuat</SelectItem>
                  <SelectItem value="running">Rulează</SelectItem>
                </SelectContent>
              </Select>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Perioada" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Ultima zi</SelectItem>
                  <SelectItem value="7">Ultimele 7 zile</SelectItem>
                  <SelectItem value="30">Ultimele 30 zile</SelectItem>
                  <SelectItem value="90">Ultimele 90 zile</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {logs.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Nicio execuție înregistrată în perioada selectată</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data/Ora</TableHead>
                  <TableHead>Job</TableHead>
                  <TableHead>Tip</TableHead>
                  <TableHead>Durată</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Procesate</TableHead>
                  <TableHead className="max-w-xs">Rezultat</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log) => (
                  <TableRow key={log.id} className={log.status === 'failed' ? 'bg-red-500/5' : ''}>
                    <TableCell className="whitespace-nowrap">
                      {format(new Date(log.started_at), 'dd.MM.yyyy HH:mm:ss')}
                    </TableCell>
                    <TableCell className="font-medium">
                      {log.job_name}
                    </TableCell>
                    <TableCell>
                      <Badge variant={log.execution_type === 'manual' ? 'outline' : 'secondary'}>
                        {log.execution_type === 'manual' ? 'Manual' : 'Programat'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {formatDuration(log.duration_ms)}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(log.status)}
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {log.items_processed}
                        {log.items_failed > 0 && (
                          <span className="text-red-500 ml-1">({log.items_failed} eșuate)</span>
                        )}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm truncate" title={log.result_summary || log.error_message || ''}>
                        {log.error_message ? (
                          <span className="text-red-500">{log.error_message}</span>
                        ) : (
                          <span className="text-muted-foreground">{log.result_summary || '-'}</span>
                        )}
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="border-dashed">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <AlertCircle className="h-5 w-5 text-amber-600" />
            </div>
            <div className="space-y-1">
              <p className="font-medium">Despre Cron Jobs</p>
              <p className="text-sm text-muted-foreground">
                Toate orele sunt în UTC. Job-urile sunt executate automat conform programului definit.
                Poți executa manual orice job și exporta logurile pentru analiză.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm">
                <span className="text-muted-foreground">
                  🕕 Auto-Update Check: <strong>06:00 UTC zilnic</strong>
                </span>
                <span className="text-muted-foreground">
                  🕖 AI KPI Analysis: <strong>07:00 UTC zilnic</strong>
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});
