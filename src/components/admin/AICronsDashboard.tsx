import { useEffect, useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Brain, RefreshCw, CheckCircle2, AlertCircle, Clock, TrendingUp, Lightbulb } from 'lucide-react';
import { toast } from 'sonner';
import { format, formatDistanceToNow } from 'date-fns';

interface CronRun {
  id: string;
  job_name: string;
  started_at: string;
  completed_at: string | null;
  status: string | null;
  duration_ms: number | null;
  items_processed: number | null;
  items_failed: number | null;
  error_message: string | null;
  result_summary: string | null;
}

interface JobSummary {
  job: string;
  expectedHours: number;
  lastRun: CronRun | null;
  history: CronRun[];
  recsGenerated: number;
}

const AI_JOBS = [
  { name: 'ai-kpi-analyzer', expectedHours: 36, label: 'AI KPI Analyzer', schedule: 'zilnic 07:00 UTC' },
  { name: 'apply-ai-recommendations', expectedHours: 60, label: 'Apply AI Recommendations', schedule: 'la cerere / zilnic' },
];

export function AICronsDashboard() {
  const [summaries, setSummaries] = useState<JobSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const since = new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();
      const results: JobSummary[] = [];

      for (const job of AI_JOBS) {
        const { data: hist } = await supabase
          .from('cron_job_logs')
          .select('id,job_name,started_at,completed_at,status,duration_ms,items_processed,items_failed,error_message,result_summary')
          .eq('job_name', job.name)
          .order('started_at', { ascending: false })
          .limit(15);

        const { count: recs } = await supabase
          .from('ai_recommendations')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', since);

        results.push({
          job: job.name,
          expectedHours: job.expectedHours,
          lastRun: hist?.[0] ?? null,
          history: hist ?? [],
          recsGenerated: recs ?? 0,
        });
      }

      setSummaries(results);
    } catch (e) {
      toast.error('Eroare la încărcare: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const triggerJob = async (jobName: string) => {
    setRunning(jobName);
    try {
      const { error } = await supabase.functions.invoke(jobName);
      if (error) throw error;
      toast.success(`${jobName} declanșat cu succes`);
      setTimeout(load, 1500);
    } catch (e) {
      toast.error('Eroare: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setRunning(null);
    }
  };

  const getHealthBadge = (s: JobSummary) => {
    if (!s.lastRun) return <Badge variant="destructive">Niciodată rulat</Badge>;
    const ageH = (Date.now() - new Date(s.lastRun.started_at).getTime()) / 3600000;
    if (s.lastRun.status === 'failed' || s.lastRun.error_message)
      return <Badge variant="destructive" className="gap-1"><AlertCircle className="h-3 w-3" />Eșuat</Badge>;
    if (ageH > s.expectedHours)
      return <Badge variant="destructive" className="gap-1"><Clock className="h-3 w-3" />Stale ({Math.round(ageH)}h)</Badge>;
    return <Badge className="bg-success text-success-foreground gap-1"><CheckCircle2 className="h-3 w-3" />Healthy</Badge>;
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI Crons Health
            </CardTitle>
            <CardDescription>
              Monitorizare ai-kpi-analyzer și apply-ai-recommendations + recomandări generate
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={load} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Reîmprospătează
          </Button>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {summaries.map((s) => {
          const meta = AI_JOBS.find((j) => j.name === s.job)!;
          const ageH = s.lastRun
            ? (Date.now() - new Date(s.lastRun.started_at).getTime()) / 3600000
            : null;
          return (
            <Card key={s.job}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-base">{meta.label}</CardTitle>
                    <CardDescription className="text-xs font-mono">{s.job} • {meta.schedule}</CardDescription>
                  </div>
                  {getHealthBadge(s)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="p-2 rounded bg-muted/50">
                    <div className="text-xs text-muted-foreground">Ultima rulare</div>
                    <div className="font-semibold">
                      {s.lastRun ? formatDistanceToNow(new Date(s.lastRun.started_at), { addSuffix: true }) : '—'}
                    </div>
                  </div>
                  <div className="p-2 rounded bg-muted/50">
                    <div className="text-xs text-muted-foreground">Items procesate</div>
                    <div className="font-semibold">{s.lastRun?.items_processed ?? '—'}</div>
                  </div>
                  <div className="p-2 rounded bg-muted/50">
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Lightbulb className="h-3 w-3" />Recom. (7z)
                    </div>
                    <div className={`font-semibold ${s.recsGenerated === 0 ? 'text-destructive' : ''}`}>
                      {s.recsGenerated}
                    </div>
                  </div>
                </div>

                {s.lastRun?.error_message && (
                  <div className="text-xs p-2 rounded bg-destructive/10 text-destructive border border-destructive/30">
                    <strong>Eroare:</strong> {s.lastRun.error_message.slice(0, 200)}
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold mb-2 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />Ultimele 15 rulări
                  </div>
                  <div className="flex gap-1">
                    {s.history.length === 0 && <span className="text-xs text-muted-foreground">Nicio rulare</span>}
                    {s.history.slice().reverse().map((r) => {
                      const failed = r.status === 'failed' || !!r.error_message;
                      return (
                        <div
                          key={r.id}
                          title={`${format(new Date(r.started_at), 'yyyy-MM-dd HH:mm')} • ${r.status ?? '?'} • items: ${r.items_processed ?? 0}`}
                          className={`flex-1 h-8 rounded ${failed ? 'bg-destructive' : 'bg-success'} hover:opacity-80 cursor-help`}
                        />
                      );
                    })}
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={() => triggerJob(s.job)}
                  disabled={running === s.job}
                >
                  {running === s.job ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Brain className="h-4 w-4 mr-2" />}
                  Rulează acum
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
