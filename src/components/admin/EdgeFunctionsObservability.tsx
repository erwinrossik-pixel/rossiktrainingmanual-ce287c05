import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/logger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Activity, AlertTriangle, CheckCircle2, RefreshCw, XCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface CronLog {
  id: string;
  job_name: string;
  status: string;
  started_at: string | null;
  completed_at: string | null;
  duration_ms: number | null;
  items_processed: number | null;
  items_failed: number | null;
  error_message: string | null;
  created_at: string;
}

interface ErrorLog {
  id: string;
  error_type: string;
  error_message: string;
  severity: string;
  page_url: string | null;
  created_at: string;
}

interface JobAggregate {
  job: string;
  total: number;
  ok: number;
  failed: number;
  partial: number;
  lastRun: string | null;
  lastStatus: string | null;
  successRate: number;
}

const WINDOW_HOURS = 24;

export function EdgeFunctionsObservability() {
  const [cronLogs, setCronLogs] = useState<CronLog[]>([]);
  const [errors, setErrors] = useState<ErrorLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const load = async () => {
    setRefreshing(true);
    try {
      const since = new Date(Date.now() - WINDOW_HOURS * 3600 * 1000).toISOString();

      const [cron, err] = await Promise.all([
        supabase
          .from('cron_job_logs')
          .select('id,job_name,status,started_at,completed_at,duration_ms,items_processed,items_failed,error_message,created_at')
          .gte('created_at', since)
          .order('created_at', { ascending: false })
          .limit(500),
        supabase
          .from('error_logs')
          .select('id,error_type,error_message,severity,page_url,created_at')
          .gte('created_at', since)
          .order('created_at', { ascending: false })
          .limit(50),
      ]);

      if (cron.error) logger.error('cron logs fetch error', cron.error);
      if (err.error) logger.error('error logs fetch error', err.error);

      setCronLogs((cron.data || []) as CronLog[]);
      setErrors((err.data || []) as ErrorLog[]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 60_000);
    return () => clearInterval(t);
  }, []);

  const aggregates: JobAggregate[] = useMemo(() => {
    const map = new Map<string, JobAggregate>();
    for (const r of cronLogs) {
      const cur = map.get(r.job_name) || {
        job: r.job_name, total: 0, ok: 0, failed: 0, partial: 0,
        lastRun: null, lastStatus: null, successRate: 0,
      };
      cur.total += 1;
      if (r.status === 'completed' || r.status === 'success') cur.ok += 1;
      else if (r.status === 'partial') cur.partial += 1;
      else cur.failed += 1;

      if (!cur.lastRun || (r.created_at > cur.lastRun)) {
        cur.lastRun = r.created_at;
        cur.lastStatus = r.status;
      }
      map.set(r.job_name, cur);
    }
    return Array.from(map.values())
      .map((a) => ({ ...a, successRate: a.total ? Math.round((a.ok / a.total) * 100) : 0 }))
      .sort((a, b) => b.total - a.total);
  }, [cronLogs]);

  const totals = useMemo(() => {
    const total = cronLogs.length;
    const failed = cronLogs.filter((c) => c.status !== 'completed' && c.status !== 'success' && c.status !== 'partial').length;
    const errorRate = total ? Math.round((failed / total) * 100) : 0;
    return { total, failed, errorRate, errorsCount: errors.length };
  }, [cronLogs, errors]);

  const statusBadge = (status: string | null) => {
    if (!status) return <Badge variant="outline">unknown</Badge>;
    const s = status.toLowerCase();
    if (s === 'completed' || s === 'success') return <Badge className="bg-success text-success-foreground gap-1"><CheckCircle2 className="h-3 w-3" />{status}</Badge>;
    if (s === 'partial') return <Badge className="bg-warning text-warning-foreground gap-1"><AlertTriangle className="h-3 w-3" />{status}</Badge>;
    return <Badge variant="destructive" className="gap-1"><XCircle className="h-3 w-3" />{status}</Badge>;
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Edge Functions Observability
            </CardTitle>
            <CardDescription>Last {WINDOW_HOURS}h • cron jobs + client errors</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={load} disabled={refreshing}>
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-2xl font-bold">{totals.total}</p>
              <p className="text-xs text-muted-foreground">Total executions</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-destructive">{totals.failed}</p>
              <p className="text-xs text-muted-foreground">Failed</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-2xl font-bold">{totals.errorRate}%</p>
              <p className="text-xs text-muted-foreground">Error rate</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-warning">{totals.errorsCount}</p>
              <p className="text-xs text-muted-foreground">Client errors</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Per-job summary</CardTitle>
          <CardDescription>Success rate per scheduled job</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading…</p>
          ) : aggregates.length === 0 ? (
            <p className="text-sm text-muted-foreground">No executions in window.</p>
          ) : (
            <div className="space-y-2">
              {aggregates.map((a) => (
                <div key={a.job} className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {statusBadge(a.lastStatus)}
                    <div className="min-w-0">
                      <p className="font-medium truncate">{a.job}</p>
                      <p className="text-xs text-muted-foreground">
                        {a.total} runs • {a.ok} ok • {a.failed} failed
                        {a.lastRun ? ` • last ${formatDistanceToNow(new Date(a.lastRun), { addSuffix: true })}` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${a.successRate >= 95 ? 'text-success' : a.successRate >= 80 ? 'text-warning' : 'text-destructive'}`}>
                      {a.successRate}%
                    </p>
                    <p className="text-xs text-muted-foreground">success</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent client errors</CardTitle>
          <CardDescription>Last 50 from error_logs</CardDescription>
        </CardHeader>
        <CardContent>
          {errors.length === 0 ? (
            <p className="text-sm text-muted-foreground">No errors recorded in window.</p>
          ) : (
            <ScrollArea className="h-72">
              <div className="space-y-2 pr-2">
                {errors.map((e) => (
                  <div key={e.id} className="border rounded-lg p-3 bg-muted/20">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant={e.severity === 'critical' || e.severity === 'high' ? 'destructive' : 'secondary'}>
                        {e.severity}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(e.created_at), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="font-medium text-sm">{e.error_type}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{e.error_message}</p>
                    {e.page_url && <p className="text-xs text-muted-foreground mt-1 truncate">{e.page_url}</p>}
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
