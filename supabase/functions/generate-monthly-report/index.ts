import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WeekBucket {
  week: number;
  start: string;
  end: string;
  visitors: number;
  page_views: number;
  quiz_attempts: number;
  avg_score: number;
  chapters_completed: number;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const now = new Date();
    const periodEnd = new Date(now);
    const periodStart = new Date(now);
    periodStart.setUTCDate(periodStart.getUTCDate() - 30);

    const weeks: WeekBucket[] = [];
    for (let i = 0; i < 4; i++) {
      const wStart = new Date(periodStart);
      wStart.setUTCDate(wStart.getUTCDate() + i * 7);
      const wEnd = new Date(wStart);
      wEnd.setUTCDate(wEnd.getUTCDate() + 7);
      if (i === 3) wEnd.setTime(periodEnd.getTime() + 1);

      const startIso = wStart.toISOString();
      const endIso = wEnd.toISOString();

      const [pvRes, qRes, cRes] = await Promise.all([
        supabase.from("page_views").select("user_id, created_at")
          .gte("created_at", startIso).lt("created_at", endIso),
        supabase.from("quiz_attempts").select("score, total_questions, created_at")
          .gte("created_at", startIso).lt("created_at", endIso),
        supabase.from("chapter_progress").select("completed_at")
          .eq("status", "completed")
          .gte("completed_at", startIso).lt("completed_at", endIso),
      ]);

      const pv = pvRes.data ?? [];
      const quizzes = qRes.data ?? [];
      const chapters = cRes.data ?? [];

      const visitors = new Set(pv.map((r: { user_id: string }) => r.user_id)).size;
      const pct = quizzes.length
        ? quizzes.reduce((s: number, q: { score: number; total_questions: number }) =>
            s + (q.total_questions ? (q.score / q.total_questions) * 100 : 0), 0) / quizzes.length
        : 0;

      weeks.push({
        week: i + 1,
        start: wStart.toISOString().slice(0, 10),
        end: new Date(wEnd.getTime() - 1).toISOString().slice(0, 10),
        visitors,
        page_views: pv.length,
        quiz_attempts: quizzes.length,
        avg_score: Math.round(pct * 10) / 10,
        chapters_completed: chapters.length,
      });
    }

    const totals = weeks.reduce(
      (acc, w) => ({
        page_views: acc.page_views + w.page_views,
        quiz_attempts: acc.quiz_attempts + w.quiz_attempts,
        chapters_completed: acc.chapters_completed + w.chapters_completed,
      }),
      { page_views: 0, quiz_attempts: 0, chapters_completed: 0 },
    );

    // Unique visitors across the whole period
    const { data: allPv } = await supabase.from("page_views")
      .select("user_id")
      .gte("created_at", periodStart.toISOString())
      .lt("created_at", new Date(periodEnd.getTime() + 1).toISOString());
    const uniqueVisitors = new Set((allPv ?? []).map((r: { user_id: string }) => r.user_id)).size;

    const totalQuizPct = weeks.reduce((s, w) => s + w.avg_score * w.quiz_attempts, 0);
    const avgScore = totals.quiz_attempts ? totalQuizPct / totals.quiz_attempts : 0;

    const { data: inserted, error } = await supabase
      .from("monthly_reports")
      .insert({
        period_start: periodStart.toISOString().slice(0, 10),
        period_end: periodEnd.toISOString().slice(0, 10),
        total_visitors: uniqueVisitors,
        total_page_views: totals.page_views,
        total_quiz_attempts: totals.quiz_attempts,
        avg_quiz_score: Math.round(avgScore * 100) / 100,
        chapters_completed: totals.chapters_completed,
        weekly_trends: weeks,
      })
      .select()
      .maybeSingle();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, report: inserted }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
