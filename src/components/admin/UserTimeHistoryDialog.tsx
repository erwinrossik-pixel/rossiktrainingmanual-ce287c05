import { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { supabase } from '@/integrations/supabase/client';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

interface SessionRow {
  id: string;
  started_at: string;
  last_activity_at: string;
  device_type: string | null;
  browser: string | null;
  pages_visited: number | null;
  duration_seconds: number;
}

interface DailyRow {
  day: string;
  total_seconds: number;
  hours: number;
  sessions: number;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string | null;
  userLabel: string;
}

const fmtDuration = (sec: number) => {
  if (!sec || sec < 0) return '0m';
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
};

export function UserTimeHistoryDialog({ open, onOpenChange, userId, userLabel }: Props) {
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState<SessionRow[]>([]);

  useEffect(() => {
    if (!open || !userId) return;
    let cancelled = false;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_sessions')
        .select('id, started_at, last_activity_at, device_type, browser, pages_visited')
        .eq('user_id', userId)
        .order('started_at', { ascending: false })
        .limit(2000);

      if (cancelled) return;
      if (error) {
        setSessions([]);
      } else {
        const rows: SessionRow[] = (data ?? []).map((s) => {
          const start = new Date(s.started_at).getTime();
          const end = new Date(s.last_activity_at).getTime();
          // Plafon realist: max 2h per sesiune (elimină timpul cu tab deschis fără activitate)
          const raw = Math.max(0, Math.round((end - start) / 1000));
          const duration = Math.min(raw, 7200);
          return {
            id: s.id,
            started_at: s.started_at,
            last_activity_at: s.last_activity_at,
            device_type: s.device_type,
            browser: s.browser,
            pages_visited: s.pages_visited,
            duration_seconds: duration,
          };
        });
        setSessions(rows);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [open, userId]);

  const daily: DailyRow[] = useMemo(() => {
    const map = new Map<string, { total: number; sessions: number }>();
    for (const s of sessions) {
      const day = format(new Date(s.started_at), 'yyyy-MM-dd');
      const prev = map.get(day) ?? { total: 0, sessions: 0 };
      prev.total += s.duration_seconds;
      prev.sessions += 1;
      map.set(day, prev);
    }
    return Array.from(map.entries())
      .map(([day, v]) => ({
        day,
        total_seconds: v.total,
        hours: Math.round((v.total / 3600) * 100) / 100,
        sessions: v.sessions,
      }))
      .sort((a, b) => a.day.localeCompare(b.day));
  }, [sessions]);

  const totals = useMemo(() => {
    const totalSec = sessions.reduce((acc, s) => acc + s.duration_seconds, 0);
    return {
      sessions: sessions.length,
      totalSec,
      avgSec: sessions.length ? Math.round(totalSec / sessions.length) : 0,
      activeDays: daily.length,
    };
  }, [sessions, daily]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle>Istoric timp în aplicație</DialogTitle>
          <DialogDescription>{userLabel}</DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <ScrollArea className="h-[70vh] pr-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs text-muted-foreground">Total timp</CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-bold">{fmtDuration(totals.totalSec)}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs text-muted-foreground">Zile active</CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-bold">{totals.activeDays}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs text-muted-foreground">Sesiuni</CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-bold">{totals.sessions}</CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs text-muted-foreground">Medie / sesiune</CardTitle>
                </CardHeader>
                <CardContent className="text-2xl font-bold">{fmtDuration(totals.avgSec)}</CardContent>
              </Card>
            </div>

            <Tabs defaultValue="daily" className="w-full">
              <TabsList>
                <TabsTrigger value="daily">Pe zile</TabsTrigger>
                <TabsTrigger value="sessions">Sesiuni</TabsTrigger>
              </TabsList>

              <TabsContent value="daily" className="space-y-4">
                {daily.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-8 text-center">
                    Nu există sesiuni înregistrate pentru acest utilizator.
                  </p>
                ) : (
                  <>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Evoluție timp / zi (ore)</CardTitle>
                      </CardHeader>
                      <CardContent style={{ height: 260 }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={daily}>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                            <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                            <YAxis tick={{ fontSize: 11 }} />
                            <Tooltip
                              formatter={(value: number) => [`${value} h`, 'Ore']}
                              contentStyle={{
                                background: 'hsl(var(--popover))',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: 8,
                              }}
                            />
                            <Bar dataKey="hours" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ziua</TableHead>
                          <TableHead>Sesiuni</TableHead>
                          <TableHead>Timp total</TableHead>
                          <TableHead className="text-right">Ore</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[...daily].reverse().map((d) => (
                          <TableRow key={d.day}>
                            <TableCell className="font-medium">
                              {format(new Date(d.day), 'dd.MM.yyyy')}
                            </TableCell>
                            <TableCell>{d.sessions}</TableCell>
                            <TableCell>{fmtDuration(d.total_seconds)}</TableCell>
                            <TableCell className="text-right">{d.hours.toFixed(2)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </>
                )}
              </TabsContent>

              <TabsContent value="sessions">
                {sessions.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-8 text-center">
                    Nu există sesiuni înregistrate.
                  </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Început</TableHead>
                        <TableHead>Ultimă activitate</TableHead>
                        <TableHead>Durată</TableHead>
                        <TableHead>Pagini</TableHead>
                        <TableHead>Device</TableHead>
                        <TableHead>Browser</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sessions.map((s) => (
                        <TableRow key={s.id}>
                          <TableCell>{format(new Date(s.started_at), 'dd.MM.yyyy HH:mm')}</TableCell>
                          <TableCell>{format(new Date(s.last_activity_at), 'dd.MM.yyyy HH:mm')}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{fmtDuration(s.duration_seconds)}</Badge>
                          </TableCell>
                          <TableCell>{s.pages_visited ?? 0}</TableCell>
                          <TableCell>{s.device_type ?? '-'}</TableCell>
                          <TableCell>{s.browser ?? '-'}</TableCell>
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
