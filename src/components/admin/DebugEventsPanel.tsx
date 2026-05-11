import { useEffect, useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { Bug, RefreshCw, Eye, FileQuestion, GraduationCap, Award, AlertCircle, Upload, Search } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

type EventType = 'page_view' | 'quiz_attempt' | 'final_exam' | 'certificate' | 'error' | 'upload';

interface DebugEvent {
  id: string;
  type: EventType;
  user_id: string | null;
  timestamp: string;
  title: string;
  details: Record<string, unknown>;
}

const TYPE_META: Record<EventType, { label: string; icon: typeof Eye; color: string }> = {
  page_view: { label: 'Page View', icon: Eye, color: 'bg-info text-info-foreground' },
  quiz_attempt: { label: 'Quiz', icon: FileQuestion, color: 'bg-accent text-accent-foreground' },
  final_exam: { label: 'Final Exam', icon: GraduationCap, color: 'bg-warning text-warning-foreground' },
  certificate: { label: 'Certificate', icon: Award, color: 'bg-success text-success-foreground' },
  upload: { label: 'Upload', icon: Upload, color: 'bg-secondary text-secondary-foreground' },
  error: { label: 'Error', icon: AlertCircle, color: 'bg-destructive text-destructive-foreground' },
};

export function DebugEventsPanel() {
  const [events, setEvents] = useState<DebugEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<EventType | 'all'>('all');
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(100);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [pv, qa, fe, certs, errs, uploads] = await Promise.all([
        supabase.from('page_views').select('id,user_id,page_path,chapter_id,session_id,duration_seconds,created_at').order('created_at', { ascending: false }).limit(limit),
        supabase.from('quiz_attempts').select('id,user_id,chapter_id,score,total_questions,passed,language,created_at').order('created_at', { ascending: false }).limit(limit),
        supabase.from('final_exam_attempts').select('id,user_id,score,total_questions,percentage,passed,completed_at,created_at').order('created_at', { ascending: false }).limit(limit),
        supabase.from('certificates').select('id,user_id,certificate_code,trainee_name,average_score,issued_at,created_at').order('created_at', { ascending: false }).limit(limit),
        supabase.from('error_logs').select('id,user_id,error_type,error_message,severity,page_url,created_at').order('created_at', { ascending: false }).limit(limit),
        supabase.storage.from('company-assets').list('', { limit, sortBy: { column: 'created_at', order: 'desc' } }),
      ]);

      const merged: DebugEvent[] = [];

      (pv.data || []).forEach((r) =>
        merged.push({
          id: `pv-${r.id}`,
          type: 'page_view',
          user_id: r.user_id,
          timestamp: r.created_at,
          title: r.page_path || '/',
          details: { chapter_id: r.chapter_id, session_id: r.session_id, duration_seconds: r.duration_seconds },
        }),
      );

      (qa.data || []).forEach((r) =>
        merged.push({
          id: `qa-${r.id}`,
          type: 'quiz_attempt',
          user_id: r.user_id,
          timestamp: r.created_at,
          title: `${r.chapter_id} • ${r.score}/${r.total_questions} ${r.passed ? '✓' : '✗'}`,
          details: { language: r.language, passed: r.passed },
        }),
      );

      (fe.data || []).forEach((r) =>
        merged.push({
          id: `fe-${r.id}`,
          type: 'final_exam',
          user_id: r.user_id,
          timestamp: r.created_at,
          title: `Final exam ${r.score}/${r.total_questions} (${Number(r.percentage || 0).toFixed(1)}%) ${r.passed ? '✓' : '✗'}`,
          details: { completed_at: r.completed_at, passed: r.passed },
        }),
      );

      (certs.data || []).forEach((r) =>
        merged.push({
          id: `cert-${r.id}`,
          type: 'certificate',
          user_id: r.user_id,
          timestamp: r.created_at,
          title: `${r.certificate_code} • ${r.trainee_name}`,
          details: { average_score: r.average_score, issued_at: r.issued_at },
        }),
      );

      (errs.data || []).forEach((r) =>
        merged.push({
          id: `err-${r.id}`,
          type: 'error',
          user_id: r.user_id,
          timestamp: r.created_at,
          title: `[${r.severity}] ${r.error_type}: ${r.error_message?.slice(0, 80)}`,
          details: { page_url: r.page_url, severity: r.severity },
        }),
      );

      (uploads.data || []).forEach((f) => {
        if (!f.created_at) return;
        merged.push({
          id: `up-${f.id || f.name}`,
          type: 'upload',
          user_id: (f.metadata as Record<string, unknown>)?.owner as string ?? null,
          timestamp: f.created_at,
          title: f.name,
          details: { size: (f.metadata as Record<string, unknown>)?.size, mimetype: (f.metadata as Record<string, unknown>)?.mimetype },
        });
      });

      merged.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      setEvents(merged);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      toast.error('Eroare la încărcare evenimente: ' + msg);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = events.filter((e) => {
    if (filter !== 'all' && e.type !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        e.user_id?.toLowerCase().includes(q) ||
        e.title.toLowerCase().includes(q) ||
        JSON.stringify(e.details).toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Bug className="h-5 w-5" />
            Debug Events Stream
          </CardTitle>
          <CardDescription>
            Stream live: page views, quiz, examen final, certificate, upload-uri și erori — cu user ID & timestamp
          </CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Reîmprospătează
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Caută user ID, path, mesaj..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={filter} onValueChange={(v) => setFilter(v as EventType | 'all')}>
            <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toate tipurile</SelectItem>
              <SelectItem value="page_view">Page Views</SelectItem>
              <SelectItem value="quiz_attempt">Quiz</SelectItem>
              <SelectItem value="final_exam">Final Exam</SelectItem>
              <SelectItem value="certificate">Certificate</SelectItem>
              <SelectItem value="upload">Upload-uri</SelectItem>
              <SelectItem value="error">Erori</SelectItem>
            </SelectContent>
          </Select>
          <Select value={String(limit)} onValueChange={(v) => setLimit(Number(v))}>
            <SelectTrigger className="w-[120px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="50">50/sursă</SelectItem>
              <SelectItem value="100">100/sursă</SelectItem>
              <SelectItem value="250">250/sursă</SelectItem>
              <SelectItem value="500">500/sursă</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="text-xs text-muted-foreground">
          Total: {filtered.length} / {events.length} evenimente
        </div>

        <ScrollArea className="h-[600px] rounded-md border">
          <div className="divide-y">
            {filtered.map((e) => {
              const meta = TYPE_META[e.type];
              const Icon = meta.icon;
              return (
                <div key={e.id} className="p-3 hover:bg-muted/50 transition-colors text-sm">
                  <div className="flex items-start gap-3">
                    <Badge className={`${meta.color} shrink-0 gap-1`}>
                      <Icon className="h-3 w-3" />
                      {meta.label}
                    </Badge>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium break-words">{e.title}</div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground font-mono">
                        <span>🕐 {format(new Date(e.timestamp), 'yyyy-MM-dd HH:mm:ss')}</span>
                        <span>👤 {e.user_id ?? 'anonymous'}</span>
                      </div>
                      {Object.keys(e.details).length > 0 && (
                        <details className="mt-1">
                          <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                            details
                          </summary>
                          <pre className="text-xs bg-muted/50 p-2 rounded mt-1 overflow-auto">
                            {JSON.stringify(e.details, null, 2)}
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {filtered.length === 0 && !loading && (
              <div className="p-8 text-center text-muted-foreground text-sm">
                Niciun eveniment găsit pentru filtrele curente.
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
