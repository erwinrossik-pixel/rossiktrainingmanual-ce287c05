import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { CalendarIcon, Download, FileSpreadsheet, FileText, Loader2 } from 'lucide-react';
import { format, subDays } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

type DatasetKey = 'page_views' | 'quiz_attempts' | 'training_time' | 'chapter_progress';

interface UserOption {
  id: string;
  label: string;
}

const DATASETS: { key: DatasetKey; label: string }[] = [
  { key: 'page_views', label: 'Page Views' },
  { key: 'quiz_attempts', label: 'Quiz Attempts' },
  { key: 'training_time', label: 'Training Time (sessions)' },
  { key: 'chapter_progress', label: 'Chapter Progress' },
];

export function AnalyticsExportPanel() {
  const [from, setFrom] = useState<Date>(subDays(new Date(), 30));
  const [to, setTo] = useState<Date>(new Date());
  const [userId, setUserId] = useState<string>('all');
  const [dataset, setDataset] = useState<DatasetKey>('page_views');
  const [users, setUsers] = useState<UserOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase
      .from('profiles')
      .select('id, first_name, last_name, email')
      .order('first_name')
      .then(({ data }) => {
        setUsers(
          (data || []).map((u) => ({
            id: u.id,
            label: `${u.first_name ?? ''} ${u.last_name ?? ''}`.trim() || u.email || u.id,
          })),
        );
      });
  }, []);

  const fetchData = async (): Promise<{ rows: Record<string, unknown>[]; columns: string[] }> => {
    const fromIso = from.toISOString();
    const toIso = new Date(to.getTime() + 24 * 3600 * 1000).toISOString();

    const dateColMap: Record<DatasetKey, string> = {
      page_views: 'created_at',
      quiz_attempts: 'created_at',
      training_time: 'started_at',
      chapter_progress: 'updated_at',
    };
    const dateCol = dateColMap[dataset];

    const buildQuery = () => {
      switch (dataset) {
        case 'page_views': return supabase.from('page_views').select('*');
        case 'quiz_attempts': return supabase.from('quiz_attempts').select('*');
        case 'training_time': return supabase.from('training_sessions').select('*');
        case 'chapter_progress': return supabase.from('chapter_progress').select('*');
      }
    };

    let query = buildQuery()
      .gte(dateCol, fromIso)
      .lte(dateCol, toIso)
      .order(dateCol, { ascending: false })
      .limit(5000);

    if (userId !== 'all') query = query.eq('user_id', userId);

    const { data, error } = await query;
    if (error) throw error;

    const rows = (data || []) as Record<string, unknown>[];
    const userMap = new Map(users.map((u) => [u.id, u.label]));
    const enriched = rows.map((r) => ({
      ...r,
      user_label: userMap.get(r.user_id as string) || r.user_id,
    }));

    const columns = enriched.length ? Object.keys(enriched[0]) : [];
    return { rows: enriched, columns };
  };

  const exportCSV = async () => {
    setLoading(true);
    try {
      const { rows, columns } = await fetchData();
      if (!rows.length) {
        toast.warning('Niciun rând pentru filtrele selectate');
        return;
      }
      const escape = (v: unknown) => {
        if (v === null || v === undefined) return '';
        const s = typeof v === 'object' ? JSON.stringify(v) : String(v);
        return `"${s.replace(/"/g, '""')}"`;
      };
      const csv = [
        columns.join(','),
        ...rows.map((r) => columns.map((c) => escape(r[c])).join(',')),
      ].join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${dataset}_${format(from, 'yyyyMMdd')}_${format(to, 'yyyyMMdd')}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success(`Exportat ${rows.length} rânduri în CSV`);
    } catch (e) {
      toast.error('Eroare CSV: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setLoading(false);
    }
  };

  const exportPDF = async () => {
    setLoading(true);
    try {
      const { rows, columns } = await fetchData();
      if (!rows.length) {
        toast.warning('Niciun rând pentru filtrele selectate');
        return;
      }
      const [{ default: jsPDF }, { default: autoTable }] = await Promise.all([
        import('jspdf'),
        import('jspdf-autotable'),
      ]);
      const doc = new jsPDF({ orientation: 'landscape', format: 'a4' });
      doc.setFontSize(14);
      doc.text(`Analytics Export — ${dataset}`, 14, 15);
      doc.setFontSize(9);
      doc.text(
        `Period: ${format(from, 'yyyy-MM-dd')} → ${format(to, 'yyyy-MM-dd')} • User: ${
          userId === 'all' ? 'all' : users.find((u) => u.id === userId)?.label
        } • Rows: ${rows.length}`,
        14,
        22,
      );

      const trimmedCols = columns.filter((c) => !['user_id'].includes(c)).slice(0, 8);
      autoTable(doc, {
        startY: 28,
        head: [trimmedCols],
        body: rows.slice(0, 1000).map((r) =>
          trimmedCols.map((c) => {
            const v = r[c];
            if (v === null || v === undefined) return '';
            if (typeof v === 'object') return JSON.stringify(v).slice(0, 60);
            return String(v).slice(0, 60);
          }),
        ),
        styles: { fontSize: 7, cellPadding: 1.5 },
        headStyles: { fillColor: [220, 38, 38] },
      });

      doc.save(`${dataset}_${format(from, 'yyyyMMdd')}_${format(to, 'yyyyMMdd')}.pdf`);
      toast.success(`Exportat ${Math.min(rows.length, 1000)} rânduri în PDF`);
    } catch (e) {
      toast.error('Eroare PDF: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          Export Analytics
        </CardTitle>
        <CardDescription>
          Exportă date analitice (PV, quiz, training time, chapter progress) pe interval și utilizator în CSV sau PDF.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <Label>Set de date</Label>
            <Select value={dataset} onValueChange={(v) => setDataset(v as DatasetKey)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {DATASETS.map((d) => <SelectItem key={d.key} value={d.key}>{d.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label>Utilizator</Label>
            <Select value={userId} onValueChange={setUserId}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toți utilizatorii</SelectItem>
                {users.map((u) => <SelectItem key={u.id} value={u.id}>{u.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label>De la</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn('w-full justify-start text-left font-normal', !from && 'text-muted-foreground')}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(from, 'yyyy-MM-dd')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={from} onSelect={(d) => d && setFrom(d)} initialFocus className="p-3 pointer-events-auto" />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-1.5">
            <Label>Până la</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn('w-full justify-start text-left font-normal', !to && 'text-muted-foreground')}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(to, 'yyyy-MM-dd')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={to} onSelect={(d) => d && setTo(d)} initialFocus className="p-3 pointer-events-auto" />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <Button onClick={exportCSV} disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <FileSpreadsheet className="h-4 w-4 mr-2" />}
            Export CSV
          </Button>
          <Button onClick={exportPDF} disabled={loading} variant="secondary">
            {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <FileText className="h-4 w-4 mr-2" />}
            Export PDF
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Limite: max 5.000 rânduri/export (CSV), max 1.000 rânduri afișate în PDF. Pentru date mai mari, restrânge intervalul.
        </p>
      </CardContent>
    </Card>
  );
}
