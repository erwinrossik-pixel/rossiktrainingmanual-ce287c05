import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, RefreshCw, FileBarChart } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

interface WeeklyTrend {
  week: number;
  start: string;
  end: string;
  visitors: number;
  page_views: number;
  quiz_attempts: number;
  avg_score: number;
  chapters_completed: number;
}

interface MonthlyReport {
  id: string;
  period_start: string;
  period_end: string;
  generated_at: string;
  total_visitors: number;
  total_page_views: number;
  total_quiz_attempts: number;
  avg_quiz_score: number;
  chapters_completed: number;
  weekly_trends: WeeklyTrend[];
}

export function MonthlyReportsDashboard() {
  const [reports, setReports] = useState<MonthlyReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("monthly_reports")
      .select("*")
      .order("period_end", { ascending: false })
      .limit(12);
    if (!error && data) setReports(data as unknown as MonthlyReport[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const generateNow = async () => {
    setGenerating(true);
    const { error } = await supabase.functions.invoke("generate-monthly-report");
    setGenerating(false);
    if (error) {
      toast({ title: "Eroare", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Raport generat", description: "Ultimele 30 zile au fost analizate." });
      load();
    }
  };

  const latest = reports[0];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileBarChart className="h-5 w-5 text-primary" />
              Rapoarte lunare automate
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Generate automat în prima zi a fiecărei luni la 06:00 UTC pentru ultimele 30 zile.
            </p>
          </div>
          <Button onClick={generateNow} disabled={generating} size="sm">
            {generating ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-2" />
            )}
            Generează acum
          </Button>
        </CardHeader>
      </Card>

      {loading && (
        <div className="flex justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      )}

      {!loading && !latest && (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            Nu există rapoarte încă. Apasă „Generează acum".
          </CardContent>
        </Card>
      )}

      {latest && (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Perioada: {latest.period_start} → {latest.period_end}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Stat label="Vizitatori unici" value={latest.total_visitors} />
              <Stat label="Page views" value={latest.total_page_views} />
              <Stat label="Quiz-uri" value={latest.total_quiz_attempts} />
              <Stat label="Scor mediu" value={`${latest.avg_quiz_score}%`} />
              <Stat label="Capitole completate" value={latest.chapters_completed} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Trend săptămânal — vizitatori & page views</CardTitle>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={latest.weekly_trends}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="week" tickFormatter={(v) => `S${v}`} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="visitors" stroke="hsl(var(--primary))" name="Vizitatori" />
                  <Line type="monotone" dataKey="page_views" stroke="hsl(var(--info))" name="Page views" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Trend săptămânal — quiz-uri & progres</CardTitle>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={latest.weekly_trends}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="week" tickFormatter={(v) => `S${v}`} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="quiz_attempts" stroke="hsl(var(--primary))" name="Quiz-uri" />
                  <Line type="monotone" dataKey="avg_score" stroke="hsl(var(--info))" name="Scor mediu %" />
                  <Line type="monotone" dataKey="chapters_completed" stroke="hsl(var(--accent-foreground))" name="Capitole" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {reports.length > 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Istoric rapoarte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {reports.map((r) => (
                  <div key={r.id} className="flex items-center justify-between text-sm border-b pb-2 last:border-0">
                    <span>{r.period_start} → {r.period_end}</span>
                    <div className="flex gap-4 text-muted-foreground">
                      <Badge variant="secondary">{r.total_visitors} vizitatori</Badge>
                      <Badge variant="secondary">{r.total_page_views} PV</Badge>
                      <Badge variant="secondary">{r.avg_quiz_score}% scor</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border bg-muted/30 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
