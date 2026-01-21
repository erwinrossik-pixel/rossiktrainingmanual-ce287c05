import { useState, useEffect, memo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RefreshCw, Clock, Play, Calendar, Zap, AlertCircle, CheckCircle2, Download, FileText, XCircle, Timer } from 'lucide-react';
import { toast } from 'sonner';
import { format, subDays } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';

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

export const CronJobsMonitor = memo(function CronJobsMonitor() {
  const { t, language } = useLanguage();
  const [logs, setLogs] = useState<CronJobLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filterJob, setFilterJob] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [dateRange, setDateRange] = useState<string>('7');

  const dateLocale = language === 'de' ? de : language === 'en' ? enUS : ro;

  const JOB_DESCRIPTIONS: Record<string, string> = {
    'auto-update-check': language === 'ro' ? 'Verifică sursele externe pentru actualizări de conținut și detectează schimbări relevante' : 
                         language === 'de' ? 'Prüft externe Quellen auf Inhaltsaktualisierungen und erkennt relevante Änderungen' :
                         'Checks external sources for content updates and detects relevant changes',
    'ai-kpi-analyzer': language === 'ro' ? 'Analizează KPI-urile de învățare și generează recomandări AI pentru îmbunătățirea conținutului' :
                       language === 'de' ? 'Analysiert Lern-KPIs und generiert AI-Empfehlungen zur Inhaltsverbesserung' :
                       'Analyzes learning KPIs and generates AI recommendations for content improvement',
    'health-check': language === 'ro' ? 'Monitorizează starea sistemului: Database, Auth, Storage. Rulează la fiecare 5 minute' :
                    language === 'de' ? 'Überwacht den Systemstatus: Datenbank, Auth, Speicher. Läuft alle 5 Minuten' :
                    'Monitors system status: Database, Auth, Storage. Runs every 5 minutes',
    'backup-manager': language === 'ro' ? 'Backup zilnic automat al bazei de date la 02:00 UTC. Include toate tabelele critice' :
                      language === 'de' ? 'Automatisches tägliches Datenbank-Backup um 02:00 UTC. Enthält alle kritischen Tabellen' :
                      'Automatic daily database backup at 02:00 UTC. Includes all critical tables'
  };

  // Parse cron schedule to human-readable format
  const parseCronSchedule = (schedule: string): string => {
    const parts = schedule.split(' ');
    if (parts.length !== 5) return schedule;
    
    const [minute, hour, dayOfMonth, month, dayOfWeek] = parts;
    
    if (minute === '*' && hour === '*') return t('admin.cron.everyMinute');
    if (minute === '0' && hour === '*') return t('admin.cron.everyHour');
    if (dayOfMonth === '*' && month === '*' && dayOfWeek === '*') {
      return t('admin.cron.dailyAt').replace('{time}', `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`);
    }
    
    return schedule;
  };

  // Get next run time based on cron schedule
  const getNextRunTime = (schedule: string): Date | null => {
    const parts = schedule.split(' ');
    if (parts.length !== 5) return null;
    
    const [minute, hour] = parts;
    
    if (minute.includes('*') || hour.includes('*')) {
      return null;
    }
    
    const parsedHour = parseInt(hour, 10);
    const parsedMinute = parseInt(minute, 10);
    
    if (isNaN(parsedHour) || isNaN(parsedMinute)) {
      return null;
    }
    
    const now = new Date();
    const nextRun = new Date();
    
    nextRun.setUTCHours(parsedHour, parsedMinute, 0, 0);
    
    if (nextRun <= now) {
      nextRun.setDate(nextRun.getDate() + 1);
    }
    
    return nextRun;
  };

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
        toast.error(t('admin.cron.errorLoading'));
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
    const functionMap: Record<string, string> = {
      'daily-auto-update-check': 'auto-update-check',
      'daily-ai-kpi-analysis': 'ai-kpi-analyzer',
      'health-check-5min': 'health-check',
      'daily-backup-0200': 'backup-manager'
    };
    
    const functionName = functionMap[jobName] || jobName;
    
    try {
      toast.info(t('admin.cron.executing').replace('{name}', functionName));
      
      const body = functionName === 'backup-manager' 
        ? { action: 'backup', manual: true }
        : { manual: true, type: 'full' };
      
      const { error } = await supabase.functions.invoke(functionName, { body });

      if (error) {
        toast.error(t('admin.cron.executionError'));
        return;
      }

      toast.success(t('admin.cron.executedSuccess').replace('{name}', functionName));
    } catch (error) {
      toast.error(t('admin.cron.executionError'));
    }
  };

  const exportLogs = () => {
    if (logs.length === 0) {
      toast.error(t('admin.cron.noLogsExport'));
      return;
    }

    const csvContent = [
      ['ID', 'Job', t('admin.cron.type'), 'Start', 'End', t('admin.cron.duration'), t('admin.cron.status'), t('admin.cron.result'), 'Error', t('admin.cron.processed'), t('admin.cron.failed')].join(','),
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

    toast.success(t('admin.cron.logsExported'));
  };

  const exportDetailedReport = () => {
    if (logs.length === 0) {
      toast.error(t('admin.cron.noLogsReport'));
      return;
    }

    const groupedLogs = logs.reduce((acc, log) => {
      if (!acc[log.job_name]) {
        acc[log.job_name] = [];
      }
      acc[log.job_name].push(log);
      return acc;
    }, {} as Record<string, CronJobLog[]>);

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
      `=== ${t('admin.cron.title').toUpperCase()} ===`,
      `${language === 'ro' ? 'Generat' : language === 'de' ? 'Erstellt' : 'Generated'}: ${format(new Date(), 'dd.MM.yyyy HH:mm:ss')}`,
      `${language === 'ro' ? 'Perioada' : language === 'de' ? 'Zeitraum' : 'Period'}: ${dateRange} ${language === 'ro' ? 'zile' : language === 'de' ? 'Tage' : 'days'}`,
      '',
      ...report.flatMap(r => [
        `--- ${r.jobName} ---`,
        `${t('admin.cron.totalExecutions')}: ${r.totalRuns}`,
        `${t('admin.cron.success')}: ${r.successCount} (${r.successRate}%)`,
        `${t('admin.cron.failed')}: ${r.failedCount}`,
        `${t('admin.cron.avgDuration')}: ${r.avgDuration}ms`,
        `${t('admin.cron.processed')}: ${r.totalProcessed}`,
        `${t('admin.cron.lastExecution')}: ${r.lastRun ? format(new Date(r.lastRun), 'dd.MM.yyyy HH:mm:ss') : 'N/A'}`,
        `${t('admin.cron.status')}: ${r.lastStatus || 'N/A'}`,
        ''
      ])
    ].join('\n');

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cron-job-report-${format(new Date(), 'yyyy-MM-dd')}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    toast.success(t('admin.cron.reportExported'));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20"><CheckCircle2 className="h-3 w-3 mr-1" />{t('admin.cron.statusSuccess')}</Badge>;
      case 'failed':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />{t('admin.cron.statusFailed')}</Badge>;
      case 'running':
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20"><RefreshCw className="h-3 w-3 mr-1 animate-spin" />{t('admin.cron.statusRunning')}</Badge>;
      case 'timeout':
        return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20"><Timer className="h-3 w-3 mr-1" />{t('admin.cron.statusTimeout')}</Badge>;
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
            {t('admin.cron.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('admin.cron.subtitle')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            onClick={exportLogs}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            {t('admin.cron.exportCSV')}
          </Button>
          <Button 
            variant="outline" 
            onClick={exportDetailedReport}
            className="gap-2"
          >
            <FileText className="h-4 w-4" />
            {t('admin.cron.detailedReport')}
          </Button>
          <Button 
            variant="outline" 
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            {t('admin.cron.refresh')}
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
                <p className="text-xs text-muted-foreground">{t('admin.cron.totalExecutions')}</p>
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
                <p className="text-xs text-muted-foreground">{t('admin.cron.success')}</p>
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
                <p className="text-xs text-muted-foreground">{t('admin.cron.failed')}</p>
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
                <p className="text-xs text-muted-foreground">{t('admin.cron.running')}</p>
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
                <p className="text-xs text-muted-foreground">{t('admin.cron.avgDuration')}</p>
                <p className="text-xl font-bold">{formatDuration(avgDuration)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Jobs Table */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.cron.scheduledJobs')}</CardTitle>
          <CardDescription>
            {t('admin.cron.scheduledJobsDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('admin.cron.jobName')}</TableHead>
                <TableHead>{t('admin.cron.description')}</TableHead>
                <TableHead>{t('admin.cron.schedule')}</TableHead>
                <TableHead>{t('admin.cron.nextExecution')}</TableHead>
                <TableHead>{t('admin.cron.lastExecution')}</TableHead>
                <TableHead className="text-right">{t('admin.cron.actions')}</TableHead>
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
                        {JOB_DESCRIPTIONS[job.command] || t('admin.cron.scheduled')}
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
                          {format(nextRun, 'dd MMM yyyy, HH:mm', { locale: dateLocale })}
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
                        <span className="text-muted-foreground text-sm">{t('admin.cron.noExecution')}</span>
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
                        {t('admin.cron.runNow')}
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
              <CardTitle>{t('admin.cron.executionHistory')}</CardTitle>
              <CardDescription>
                {t('admin.cron.executionHistoryDesc')}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select value={filterJob} onValueChange={setFilterJob}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t('admin.cron.allJobs')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('admin.cron.allJobs')}</SelectItem>
                  <SelectItem value="auto-update-check">Auto-Update Check</SelectItem>
                  <SelectItem value="ai-kpi-analyzer">AI KPI Analyzer</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder={t('admin.cron.allStatuses')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('admin.cron.allStatuses')}</SelectItem>
                  <SelectItem value="success">{t('admin.cron.statusSuccess')}</SelectItem>
                  <SelectItem value="failed">{t('admin.cron.statusFailed')}</SelectItem>
                  <SelectItem value="running">{t('admin.cron.statusRunning')}</SelectItem>
                </SelectContent>
              </Select>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">{t('admin.cron.lastDay')}</SelectItem>
                  <SelectItem value="7">{t('admin.cron.last7Days')}</SelectItem>
                  <SelectItem value="30">{t('admin.cron.last30Days')}</SelectItem>
                  <SelectItem value="90">{t('admin.cron.last90Days')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {logs.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>{t('admin.cron.noExecutions')}</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('admin.cron.dateTime')}</TableHead>
                  <TableHead>{t('admin.cron.job')}</TableHead>
                  <TableHead>{t('admin.cron.type')}</TableHead>
                  <TableHead>{t('admin.cron.duration')}</TableHead>
                  <TableHead>{t('admin.cron.status')}</TableHead>
                  <TableHead>{t('admin.cron.processed')}</TableHead>
                  <TableHead className="max-w-xs">{t('admin.cron.result')}</TableHead>
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
                        {log.execution_type === 'manual' ? t('admin.cron.manual') : t('admin.cron.scheduled')}
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
                          <span className="text-red-500 ml-1">({log.items_failed} {t('admin.cron.failed').toLowerCase()})</span>
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
              <p className="font-medium">{t('admin.cron.aboutCron')}</p>
              <p className="text-sm text-muted-foreground">
                {t('admin.cron.aboutCronDesc')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});
