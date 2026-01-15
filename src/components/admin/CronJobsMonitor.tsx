import { useState, useEffect, memo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { RefreshCw, Clock, Play, Pause, Calendar, Zap, AlertCircle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';

interface CronJob {
  jobid: number;
  jobname: string;
  schedule: string;
  command: string;
  nodename: string;
  active: boolean;
}

interface CronJobRun {
  runid: number;
  jobid: number;
  job_pid: number | null;
  database: string;
  username: string;
  command: string;
  status: string;
  return_message: string | null;
  start_time: string;
  end_time: string | null;
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

// Extract function name from command
const extractFunctionName = (command: string): string => {
  const match = command.match(/functions\/v1\/([a-zA-Z0-9-]+)/);
  return match ? match[1] : 'unknown';
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

export const CronJobsMonitor = memo(function CronJobsMonitor() {
  const [jobs, setJobs] = useState<CronJob[]>([]);
  const [jobRuns, setJobRuns] = useState<CronJobRun[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCronData = async () => {
    try {
      // Fetch jobs using RPC or direct query via edge function
      const { data: jobsData, error: jobsError } = await supabase
        .rpc('get_cron_jobs' as any);

      if (jobsError) {
        console.log('RPC not available, using fallback data');
        // Fallback: show known jobs from configuration
        setJobs([
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
          }
        ]);
      } else {
        setJobs(jobsData || []);
      }

      // Fetch recent job runs
      const { data: runsData } = await supabase
        .rpc('get_cron_job_runs' as any);
      
      if (runsData) {
        setJobRuns(runsData);
      }
    } catch (error) {
      console.error('Error fetching cron data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCronData();
    
    // Refresh every minute
    const interval = setInterval(fetchCronData, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchCronData();
  };

  const handleToggleJob = async (job: CronJob) => {
    try {
      const { error } = await supabase.rpc('toggle_cron_job' as any, {
        p_jobid: job.jobid,
        p_active: !job.active
      });

      if (error) {
        toast.error('Nu se poate modifica starea job-ului');
        return;
      }

      setJobs(prev => prev.map(j => 
        j.jobid === job.jobid ? { ...j, active: !j.active } : j
      ));
      
      toast.success(`Job ${job.active ? 'dezactivat' : 'activat'} cu succes`);
    } catch (error) {
      toast.error('Eroare la modificarea job-ului');
    }
  };

  const handleRunNow = async (job: CronJob) => {
    const functionName = extractFunctionName(job.command);
    
    try {
      toast.info(`Se execută ${functionName}...`);
      
      const { error } = await supabase.functions.invoke(functionName, {
        body: { manual: true }
      });

      if (error) {
        toast.error(`Eroare la executarea ${functionName}`);
        return;
      }

      toast.success(`${functionName} executat cu succes`);
      
      // Refresh after a short delay to show new run
      setTimeout(fetchCronData, 2000);
    } catch (error) {
      toast.error('Eroare la executarea job-ului');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'succeeded':
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20"><CheckCircle2 className="h-3 w-3 mr-1" />Succes</Badge>;
      case 'failed':
        return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" />Eșuat</Badge>;
      case 'running':
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20"><RefreshCw className="h-3 w-3 mr-1 animate-spin" />Rulează</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getJobDescription = (jobname: string): string => {
    switch (jobname) {
      case 'daily-auto-update-check':
        return 'Verifică sursele externe pentru actualizări de conținut și detectează schimbări relevante';
      case 'daily-ai-kpi-analysis':
        return 'Analizează KPI-urile de învățare și generează recomandări AI pentru îmbunătățirea conținutului';
      default:
        return 'Job programat';
    }
  };

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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Cron Jobs Monitor
          </h2>
          <p className="text-muted-foreground">
            Gestionează job-urile programate și monitorizează execuțiile
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={handleRefresh}
          disabled={refreshing}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          Reîmprospătează
        </Button>
      </div>

      {/* Jobs Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Jobs</p>
                <p className="text-2xl font-bold">{jobs.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">{jobs.filter(j => j.active).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Execuții Recente</p>
                <p className="text-2xl font-bold">{jobRuns.length}</p>
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
            Lista tuturor job-urilor cron configurate
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
                <TableHead>Stare</TableHead>
                <TableHead className="text-right">Acțiuni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => {
                const nextRun = getNextRunTime(job.schedule);
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
                        {getJobDescription(job.jobname)}
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
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={job.active}
                          onCheckedChange={() => handleToggleJob(job)}
                        />
                        <span className="text-sm">
                          {job.active ? (
                            <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                              Activ
                            </Badge>
                          ) : (
                            <Badge variant="secondary">Inactiv</Badge>
                          )}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRunNow(job)}
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

      {/* Recent Runs */}
      {jobRuns.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Execuții Recente</CardTitle>
            <CardDescription>
              Istoricul ultimelor execuții ale job-urilor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job</TableHead>
                  <TableHead>Start</TableHead>
                  <TableHead>End</TableHead>
                  <TableHead>Durată</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Mesaj</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobRuns.slice(0, 10).map((run) => {
                  const job = jobs.find(j => j.jobid === run.jobid);
                  const duration = run.end_time && run.start_time
                    ? Math.round((new Date(run.end_time).getTime() - new Date(run.start_time).getTime()) / 1000)
                    : null;
                  
                  return (
                    <TableRow key={run.runid}>
                      <TableCell className="font-medium">
                        {job?.jobname || `Job #${run.jobid}`}
                      </TableCell>
                      <TableCell>
                        {format(new Date(run.start_time), 'dd.MM.yyyy HH:mm:ss')}
                      </TableCell>
                      <TableCell>
                        {run.end_time 
                          ? format(new Date(run.end_time), 'HH:mm:ss')
                          : '-'}
                      </TableCell>
                      <TableCell>
                        {duration !== null ? `${duration}s` : '-'}
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(run.status)}
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        <span className="text-sm text-muted-foreground">
                          {run.return_message || '-'}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Schedule Info */}
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
                Poți executa manual orice job apăsând butonul "Execută Acum".
              </p>
              <div className="flex gap-4 mt-2 text-sm">
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
