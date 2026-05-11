import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Filter, RefreshCw, TrendingDown } from 'lucide-react';
import { toast } from 'sonner';

interface FunnelStep {
  key: string;
  label: string;
  count: number;
  color: string;
}

export function FunnelDashboard() {
  const [steps, setSteps] = useState<FunnelStep[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const [pv, ch, qa, qaPass, fe, fePass, certs] = await Promise.all([
        supabase.from('page_views').select('user_id', { count: 'exact', head: false }).not('user_id', 'is', null),
        supabase.from('chapter_progress').select('user_id').in('status', ['unlocked', 'in_progress', 'completed']),
        supabase.from('quiz_attempts').select('user_id'),
        supabase.from('quiz_attempts').select('user_id').eq('passed', true),
        supabase.from('final_exam_attempts').select('user_id'),
        supabase.from('final_exam_attempts').select('user_id').eq('passed', true),
        supabase.from('certificates').select('user_id'),
      ]);

      const uniq = (rows: { user_id: string | null }[] | null) =>
        new Set((rows || []).map((r) => r.user_id).filter(Boolean)).size;

      const data: FunnelStep[] = [
        { key: 'visit', label: 'Vizitatori (autentificați)', count: uniq(pv.data as any), color: 'bg-primary' },
        { key: 'chapter', label: 'Au început un capitol', count: uniq(ch.data as any), color: 'bg-info' },
        { key: 'quiz', label: 'Au început un quiz', count: uniq(qa.data as any), color: 'bg-accent' },
        { key: 'quiz_pass', label: 'Au promovat un quiz', count: uniq(qaPass.data as any), color: 'bg-secondary' },
        { key: 'exam', label: 'Au început examenul final', count: uniq(fe.data as any), color: 'bg-warning' },
        { key: 'exam_pass', label: 'Au promovat examenul final', count: uniq(fePass.data as any), color: 'bg-success' },
        { key: 'cert', label: 'Au primit certificat', count: uniq(certs.data as any), color: 'bg-primary' },
      ];

      setSteps(data);
    } catch (e: any) {
      toast.error('Eroare la încărcarea pâlniei: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const max = Math.max(1, ...steps.map((s) => s.count));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Pâlnie de conversie
          </CardTitle>
          <CardDescription>
            Vezi unde renunță utilizatorii: vizită → capitol → quiz → examen final → certificat
          </CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Reîmprospătează
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {steps.map((step, idx) => {
          const widthPct = (step.count / max) * 100;
          const prev = idx > 0 ? steps[idx - 1].count : null;
          const dropPct =
            prev !== null && prev > 0 ? Math.round(((prev - step.count) / prev) * 100) : 0;
          const convPct =
            prev !== null && prev > 0 ? Math.round((step.count / prev) * 100) : 100;

          return (
            <div key={step.key} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{step.label}</span>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  {idx > 0 && (
                    <span className="flex items-center gap-1">
                      {dropPct > 0 && <TrendingDown className="h-3 w-3 text-destructive" />}
                      {convPct}% conv • -{dropPct}%
                    </span>
                  )}
                  <span className="font-bold text-foreground">{step.count}</span>
                </div>
              </div>
              <div className="w-full h-8 bg-muted rounded-md overflow-hidden">
                <div
                  className={`h-full ${step.color} transition-all duration-500 flex items-center justify-end px-3 text-xs font-semibold text-primary-foreground`}
                  style={{ width: `${Math.max(widthPct, 4)}%` }}
                >
                  {step.count > 0 && `${Math.round(widthPct)}%`}
                </div>
              </div>
            </div>
          );
        })}

        {steps.length > 0 && (
          <div className="pt-4 mt-4 border-t text-sm text-muted-foreground">
            Conversie totală vizită → certificat:{' '}
            <span className="font-bold text-foreground">
              {steps[0].count > 0
                ? Math.round((steps[steps.length - 1].count / steps[0].count) * 100)
                : 0}
              %
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
