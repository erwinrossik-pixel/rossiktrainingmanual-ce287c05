import { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarUI } from '@/components/ui/calendar';
import { Loader2, Activity, Eye, Timer, Calendar, X } from 'lucide-react';
import { format, differenceInSeconds, startOfDay, endOfDay, subDays } from 'date-fns';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string | null;
  userLabel: string;
  createdAt?: string | null;
}

interface SessionRow {
  id: string;
  started_at: string;
  last_activity_at: string;
  total_duration_seconds: number;
  pages_visited: number | null;
  device_type: string | null;
  browser: string | null;
}

interface PageViewRow {
  id: string;
  created_at: string;
  page_path: string;
  chapter_id: string | null;
  duration_seconds: number;
  session_id: string;
}

interface TrainingTimeRow {
  day_number: number;
  total_seconds: number;
  updated_at: string;
}

const fmtDuration = (sec: number) => {
  if (!sec || sec < 0) return '0m';
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
};

// Cap per-page-view to avoid stale "tab left open" durations skewing totals
const MAX_PV_SECONDS = 10 * 60;

export function UserActivityTimelineDialog({ open, onOpenChange, userId, userLabel, createdAt }: Props) {
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState<SessionRow[]>([]);
  const [pageViews, setPageViews] = useState<PageViewRow[]>([]);
  const [trainingTime, setTrainingTime] = useState<TrainingTimeRow[]>([]);

  useEffect(() => {
    if (!open || !userId) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      const [sRes, pRes, tRes] = await Promise.all([
        supabase
          .from('user_sessions')
          .select('id, started_at, last_activity_at, total_duration_seconds, pages_visited, device_type, browser')
          .eq('user_id', userId)
          .order('started_at', { ascending: true })
          .limit(5000),
        supabase
          .from('page_views')
          .select('id, created_at, page_path, chapter_id, duration_seconds, session_id')
          .eq('user_id', userId)
          .order('created_at', { ascending: true })
          .limit(10000),
        supabase
          .from('training_time')
          .select('day_number, total_seconds, updated_at')
          .eq('user_id', userId)
          .order('day_number', { ascending: true }),
      ]);

      if (cancelled) return;

      setSessions(((sRes.data ?? []) as SessionRow[]).map(s => ({
        ...s,
        total_duration_seconds: Math.max(0, s.total_duration_seconds ?? 0),
      })));
      setPageViews(((pRes.data ?? []) as PageViewRow[]).map(p => ({
        ...p,
        duration_seconds: Math.max(0, Math.min(MAX_PV_SECONDS, p.duration_seconds ?? 0)),
      })));
      setTrainingTime((tRes.data ?? []) as TrainingTimeRow[]);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [open, userId]);

  const totals = useMemo(() => {
    const appOpen = sessions.reduce((acc, s) =>
      acc + Math.max(0, differenceInSeconds(new Date(s.last_activity_at), new Date(s.started_at))), 0);
    const activeApp = sessions.reduce((acc, s) => acc + s.total_duration_seconds, 0);
    const pageTime = pageViews.reduce((acc, p) => acc + p.duration_seconds, 0);
    const trainingTimer = trainingTime.reduce((acc, t) => acc + (t.total_seconds ?? 0), 0);
    const days = new Set(sessions.map(s => format(new Date(s.started_at), 'yyyy-MM-dd')));
    return {
      sessionCount: sessions.length,
      pageViewCount: pageViews.length,
      activeDays: days.size,
      appOpen,
      activeApp,
      pageTime,
      trainingTimer,
    };
  }, [sessions, pageViews, trainingTime]);

  // Build per-day timeline grouping sessions and page views
  const timeline = useMemo(() => {
    const byDay = new Map<string, {
      day: string;
      sessions: SessionRow[];
      pageViews: PageViewRow[];
      appOpen: number;
      activeApp: number;
      pageTime: number;
    }>();
    for (const s of sessions) {
      const day = format(new Date(s.started_at), 'yyyy-MM-dd');
      const entry = byDay.get(day) ?? { day, sessions: [], pageViews: [], appOpen: 0, activeApp: 0, pageTime: 0 };
      entry.sessions.push(s);
      entry.appOpen += Math.max(0, differenceInSeconds(new Date(s.last_activity_at), new Date(s.started_at)));
      entry.activeApp += s.total_duration_seconds;
      byDay.set(day, entry);
    }
    for (const p of pageViews) {
      const day = format(new Date(p.created_at), 'yyyy-MM-dd');
      const entry = byDay.get(day) ?? { day, sessions: [], pageViews: [], appOpen: 0, activeApp: 0, pageTime: 0 };
      entry.pageViews.push(p);
      entry.pageTime += p.duration_seconds;
      byDay.set(day, entry);
    }
    return Array.from(byDay.values()).sort((a, b) => b.day.localeCompare(a.day));
  }, [sessions, pageViews]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Cronologie activitate utilizator
          </DialogTitle>
          <DialogDescription>
            {userLabel}
            {createdAt && ` · cont creat ${format(new Date(createdAt), 'dd.MM.yyyy')}`}
            {` → ${format(new Date(), 'dd.MM.yyyy')}`}
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <ScrollArea className="h-[75vh] pr-4">
            {/* Totals */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-4">
              <Card>
                <CardHeader className="pb-1"><CardTitle className="text-xs text-muted-foreground">Sesiuni</CardTitle></CardHeader>
                <CardContent className="text-xl font-bold">{totals.sessionCount}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1"><CardTitle className="text-xs text-muted-foreground">Zile active</CardTitle></CardHeader>
                <CardContent className="text-xl font-bold">{totals.activeDays}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1"><CardTitle className="text-xs text-muted-foreground">Page views</CardTitle></CardHeader>
                <CardContent className="text-xl font-bold">{totals.pageViewCount}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1"><CardTitle className="text-xs text-muted-foreground">App Open</CardTitle></CardHeader>
                <CardContent className="text-xl font-bold text-info">{fmtDuration(totals.appOpen)}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1"><CardTitle className="text-xs text-muted-foreground">App Activ</CardTitle></CardHeader>
                <CardContent className="text-xl font-bold text-success">{fmtDuration(totals.activeApp)}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1"><CardTitle className="text-xs text-muted-foreground">Timp pagini</CardTitle></CardHeader>
                <CardContent className="text-xl font-bold text-muted-foreground">{fmtDuration(totals.pageTime)}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1"><CardTitle className="text-xs text-muted-foreground">Training timer</CardTitle></CardHeader>
                <CardContent className="text-xl font-bold text-warning">{fmtDuration(totals.trainingTimer)}</CardContent>
              </Card>
            </div>

            <Tabs defaultValue="timeline" className="w-full">
              <TabsList>
                <TabsTrigger value="timeline"><Calendar className="h-4 w-4 mr-1" /> Cronologie pe zi</TabsTrigger>
                <TabsTrigger value="sessions"><Activity className="h-4 w-4 mr-1" /> Sesiuni ({sessions.length})</TabsTrigger>
                <TabsTrigger value="pageviews"><Eye className="h-4 w-4 mr-1" /> Page views ({pageViews.length})</TabsTrigger>
                <TabsTrigger value="timer"><Timer className="h-4 w-4 mr-1" /> Training timer</TabsTrigger>
              </TabsList>

              <TabsContent value="timeline" className="space-y-3">
                {timeline.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-8 text-center">Niciun eveniment înregistrat.</p>
                ) : timeline.map(d => (
                  <Card key={d.day}>
                    <CardHeader className="pb-2 flex flex-row items-center justify-between flex-wrap gap-2">
                      <CardTitle className="text-sm">{format(new Date(d.day), 'EEEE, dd.MM.yyyy')}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <Badge variant="secondary">{d.sessions.length} sesiuni</Badge>
                        <Badge className="bg-info text-info-foreground">Open: {fmtDuration(d.appOpen)}</Badge>
                        <Badge className="bg-success text-success-foreground">Activ: {fmtDuration(d.activeApp)}</Badge>
                        <Badge variant="outline">Pagini: {fmtDuration(d.pageTime)}</Badge>
                        <Badge variant="outline">{d.pageViews.length} page views</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="text-xs space-y-1">
                      {d.sessions.map(s => {
                        const open = Math.max(0, differenceInSeconds(new Date(s.last_activity_at), new Date(s.started_at)));
                        return (
                          <div key={s.id} className="flex flex-wrap items-center gap-2 py-1 border-b border-border/50 last:border-0">
                            <Badge variant="outline" className="font-mono">
                              {format(new Date(s.started_at), 'HH:mm:ss')} → {format(new Date(s.last_activity_at), 'HH:mm:ss')}
                            </Badge>
                            <span className="text-muted-foreground">Open: <strong className="text-info">{fmtDuration(open)}</strong></span>
                            <span className="text-muted-foreground">Activ: <strong className="text-success">{fmtDuration(s.total_duration_seconds)}</strong></span>
                            {open > s.total_duration_seconds + 60 && (
                              <Badge variant="secondary" className="text-[10px]">
                                ascuns {fmtDuration(open - s.total_duration_seconds)}
                              </Badge>
                            )}
                            <span className="text-muted-foreground">{s.pages_visited ?? 0} pagini · {s.device_type ?? '?'} · {s.browser ?? '?'}</span>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="sessions">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Început</TableHead>
                      <TableHead>Ultimă activitate</TableHead>
                      <TableHead>App Open</TableHead>
                      <TableHead>App Activ</TableHead>
                      <TableHead>Pagini</TableHead>
                      <TableHead>Device</TableHead>
                      <TableHead>Browser</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...sessions].reverse().map(s => {
                      const open = Math.max(0, differenceInSeconds(new Date(s.last_activity_at), new Date(s.started_at)));
                      return (
                        <TableRow key={s.id}>
                          <TableCell>{format(new Date(s.started_at), 'dd.MM.yyyy HH:mm:ss')}</TableCell>
                          <TableCell>{format(new Date(s.last_activity_at), 'dd.MM.yyyy HH:mm:ss')}</TableCell>
                          <TableCell><Badge className="bg-info text-info-foreground">{fmtDuration(open)}</Badge></TableCell>
                          <TableCell><Badge className="bg-success text-success-foreground">{fmtDuration(s.total_duration_seconds)}</Badge></TableCell>
                          <TableCell>{s.pages_visited ?? 0}</TableCell>
                          <TableCell>{s.device_type ?? '-'}</TableCell>
                          <TableCell>{s.browser ?? '-'}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="pageviews">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Pagină</TableHead>
                      <TableHead>Capitol</TableHead>
                      <TableHead>Durată</TableHead>
                      <TableHead>Sesiune</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...pageViews].reverse().slice(0, 1000).map(p => (
                      <TableRow key={p.id}>
                        <TableCell className="font-mono text-xs">{format(new Date(p.created_at), 'dd.MM.yyyy HH:mm:ss')}</TableCell>
                        <TableCell className="text-xs max-w-xs truncate" title={p.page_path}>{p.page_path}</TableCell>
                        <TableCell>{p.chapter_id ?? '-'}</TableCell>
                        <TableCell><Badge variant="secondary">{fmtDuration(p.duration_seconds)}</Badge></TableCell>
                        <TableCell className="font-mono text-[10px] text-muted-foreground truncate max-w-[120px]">{p.session_id.slice(0, 8)}…</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {pageViews.length > 1000 && (
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Afișate primele 1000 din {pageViews.length} înregistrări
                  </p>
                )}
              </TabsContent>

              <TabsContent value="timer">
                {trainingTime.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-8 text-center">Fără înregistrări training timer.</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ziua</TableHead>
                        <TableHead>Timp acumulat</TableHead>
                        <TableHead>Ultima actualizare</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {trainingTime.map(t => (
                        <TableRow key={t.day_number}>
                          <TableCell>Ziua {t.day_number}</TableCell>
                          <TableCell><Badge className="bg-warning text-warning-foreground">{fmtDuration(t.total_seconds)}</Badge></TableCell>
                          <TableCell>{format(new Date(t.updated_at), 'dd.MM.yyyy HH:mm')}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </TabsContent>
            </Tabs>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
