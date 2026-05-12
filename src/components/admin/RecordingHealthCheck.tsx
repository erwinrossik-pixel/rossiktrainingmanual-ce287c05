import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertTriangle, RefreshCw, Activity } from 'lucide-react';
import { logger } from '@/utils/logger';

interface HealthRow {
  label: string;
  value: number | string;
  ok: boolean;
  hint?: string;
}

export function RecordingHealthCheck() {
  const [rows, setRows] = useState<HealthRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastRun, setLastRun] = useState<string>('');

  const runChecks = useCallback(async () => {
    setLoading(true);
    try {
      const sinceDay = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const sinceWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

      const [pv24, pv7, qa24, qa7, pvAll, qaAll] = await Promise.all([
        supabase.from('page_views').select('id', { count: 'exact', head: true }).gte('created_at', sinceDay),
        supabase.from('page_views').select('id', { count: 'exact', head: true }).gte('created_at', sinceWeek),
        supabase.from('quiz_attempts').select('id', { count: 'exact', head: true }).gte('created_at', sinceDay),
        supabase.from('quiz_attempts').select('id', { count: 'exact', head: true }).gte('created_at', sinceWeek),
        supabase.from('page_views').select('user_id, page_path, session_id, created_at').gte('created_at', sinceWeek).limit(5000),
        supabase.from('quiz_attempts').select('user_id, chapter_id, score, created_at').gte('created_at', sinceWeek).limit(5000),
      ]);

      // Detect rapid duplicates: same user+path+session within 2s
      let pvDups = 0;
      const pvMap: Record<string, number[]> = {};
      (pvAll.data || []).forEach((r) => {
        const k = `${r.user_id}|${r.page_path}|${r.session_id}`;
        const t = new Date(r.created_at).getTime();
        if (!pvMap[k]) pvMap[k] = [];
        pvMap[k].push(t);
      });
      Object.values(pvMap).forEach((times) => {
        times.sort();
        for (let i = 1; i < times.length; i++) {
          if (times[i] - times[i - 1] < 2000) pvDups++;
        }
      });

      // Detect rapid quiz_attempts duplicates: same user+chapter+score within 5s
      let qaDups = 0;
      const qaMap: Record<string, number[]> = {};
      (qaAll.data || []).forEach((r) => {
        const k = `${r.user_id}|${r.chapter_id}|${r.score}`;
        const t = new Date(r.created_at).getTime();
        if (!qaMap[k]) qaMap[k] = [];
        qaMap[k].push(t);
      });
      Object.values(qaMap).forEach((times) => {
        times.sort();
        for (let i = 1; i < times.length; i++) {
          if (times[i] - times[i - 1] < 5000) qaDups++;
        }
      });

      setRows([
        { label: 'Page views (24h)', value: pv24.count ?? 0, ok: (pv24.count ?? 0) >= 0 },
        { label: 'Page views (7d)', value: pv7.count ?? 0, ok: (pv7.count ?? 0) >= 0 },
        { label: 'Quiz attempts (24h)', value: qa24.count ?? 0, ok: (qa24.count ?? 0) >= 0 },
        { label: 'Quiz attempts (7d)', value: qa7.count ?? 0, ok: (qa7.count ?? 0) >= 0 },
        {
          label: 'Page-view duplicates (<2s, 7d)',
          value: pvDups,
          ok: pvDups === 0,
          hint: pvDups === 0 ? 'No refresh-induced duplicates.' : 'Investigate trackPageView dedup.',
        },
        {
          label: 'Quiz-attempt duplicates (<5s, 7d)',
          value: qaDups,
          ok: qaDups === 0,
          hint: qaDups === 0 ? 'No double-submit detected.' : 'Investigate recordQuizAttempt guard.',
        },
      ]);
      setLastRun(new Date().toLocaleTimeString());
    } catch (e) {
      logger.error('Recording health check failed:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    runChecks();
  }, [runChecks]);

  const allOk = rows.every((r) => r.ok);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Recording Health Check
          {rows.length > 0 && (
            <Badge variant={allOk ? 'default' : 'destructive'} className={allOk ? 'bg-success text-success-foreground' : ''}>
              {allOk ? 'OK' : 'Issues found'}
            </Badge>
          )}
        </CardTitle>
        <Button variant="outline" size="sm" onClick={runChecks} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Re-run
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          End-to-end verification that <code>page_views</code> and <code>quiz_attempts</code> are inserted
          correctly and not duplicated by refreshes or double-clicks.
          {lastRun && ` Last run: ${lastRun}`}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex items-start justify-between gap-3 p-3 rounded-lg border bg-card"
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium">{r.label}</div>
                {r.hint && <div className="text-xs text-muted-foreground mt-0.5">{r.hint}</div>}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-lg font-semibold tabular-nums">{r.value}</span>
                {r.ok ? (
                  <CheckCircle2 className="h-5 w-5 text-success" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
