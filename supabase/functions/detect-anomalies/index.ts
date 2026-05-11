import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Alert {
  alert_type: string;
  severity: "info" | "warning" | "critical";
  user_id: string | null;
  title: string;
  message: string;
  details: Record<string, unknown>;
  dedup_hash: string;
}

const HOUR = 3600;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const today = new Date().toISOString().slice(0, 10);
    const alerts: Alert[] = [];

    const { data: users } = await supabase
      .from("profiles")
      .select("id, first_name, last_name");

    for (const u of users ?? []) {
      const name = `${u.first_name ?? ""} ${u.last_name ?? ""}`.trim() || u.id;

      const [{ data: timer }, { count: pv }, { count: quizzes }, { data: exam }, { count: certs }] =
        await Promise.all([
          supabase.from("training_time").select("total_seconds").eq("user_id", u.id),
          supabase.from("page_views").select("*", { count: "exact", head: true }).eq("user_id", u.id),
          supabase.from("quiz_attempts").select("*", { count: "exact", head: true }).eq("user_id", u.id),
          supabase.from("final_exam_attempts").select("passed").eq("user_id", u.id),
          supabase.from("certificates").select("*", { count: "exact", head: true }).eq("user_id", u.id),
        ]);

      const timerSec = (timer ?? []).reduce((s, t) => s + (t.total_seconds ?? 0), 0);
      const timerH = timerSec / HOUR;
      const examPassed = (exam ?? []).some((e) => e.passed);

      // Anomaly 1: timer inflat (>100h)
      if (timerH > 100) {
        alerts.push({
          alert_type: "timer_inflated",
          severity: "warning",
          user_id: u.id,
          title: `Timer anormal de mare: ${name}`,
          message: `${timerH.toFixed(0)}h înregistrate — posibil sesiuni paralele sau bug.`,
          details: { hours: Math.round(timerH), pv, quizzes },
          dedup_hash: `timer_inflated:${u.id}:${today}`,
        });
      }

      // Anomaly 2: timer zero, dar activitate semnificativă
      if (timerSec === 0 && (pv ?? 0) > 20) {
        alerts.push({
          alert_type: "timer_zero",
          severity: "warning",
          user_id: u.id,
          title: `Timer 0 dar are activitate: ${name}`,
          message: `${pv} page views, ${quizzes} quiz-uri dar 0 timp înregistrat.`,
          details: { pv, quizzes },
          dedup_hash: `timer_zero:${u.id}:${today}`,
        });
      }

      // Anomaly 3: discrepanță analytics vs DB (mult activitate, timer mic)
      if ((pv ?? 0) > 50 && (quizzes ?? 0) > 10 && timerSec > 0 && timerSec < 30 * 60) {
        alerts.push({
          alert_type: "analytics_db_mismatch",
          severity: "critical",
          user_id: u.id,
          title: `Discrepanță Analytics ↔ DB: ${name}`,
          message: `${pv} PV + ${quizzes} quiz-uri, dar timer doar ${Math.round(timerSec / 60)} min.`,
          details: { pv, quizzes, timer_min: Math.round(timerSec / 60) },
          dedup_hash: `analytics_db_mismatch:${u.id}:${today}`,
        });
      }

      // Anomaly 4: examen trecut fără certificat
      if (examPassed && (certs ?? 0) === 0) {
        alerts.push({
          alert_type: "missing_certificate",
          severity: "critical",
          user_id: u.id,
          title: `Certificat lipsă: ${name}`,
          message: `Examen final trecut, dar nu există certificat emis.`,
          details: {},
          dedup_hash: `missing_certificate:${u.id}`,
        });
      }
    }

    // Anomaly 5 (global): nicio sesiune înregistrată în ultimele 24h
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { count: pvLast24 } = await supabase
      .from("page_views").select("*", { count: "exact", head: true })
      .gte("created_at", since);
    if ((pvLast24 ?? 0) === 0) {
      alerts.push({
        alert_type: "no_activity_24h",
        severity: "warning",
        user_id: null,
        title: "Zero activitate în ultimele 24h",
        message: "Nicio vizualizare de pagină în ultimele 24h pe întreaga platformă.",
        details: {},
        dedup_hash: `no_activity_24h:${today}`,
      });
    }

    // Anomaly 6+: AI cron health (ai-kpi-analyzer & apply-ai-recommendations)
    const aiCrons = ["ai-kpi-analyzer", "apply-ai-recommendations"];
    const expectedHours: Record<string, number> = {
      "ai-kpi-analyzer": 36, // daily, alert if older than 36h
      "apply-ai-recommendations": 60, // alert if older than 60h
    };

    for (const job of aiCrons) {
      const { data: lastRun } = await supabase
        .from("cron_job_logs")
        .select("started_at, status, items_processed, error_message, duration_ms")
        .eq("job_name", job)
        .order("started_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!lastRun) {
        alerts.push({
          alert_type: "ai_cron_never_ran",
          severity: "critical",
          user_id: null,
          title: `Cron AI nu a rulat niciodată: ${job}`,
          message: `Niciun log găsit pentru ${job}.`,
          details: { job },
          dedup_hash: `ai_cron_never_ran:${job}:${today}`,
        });
        continue;
      }

      const ageH = (Date.now() - new Date(lastRun.started_at).getTime()) / (3600 * 1000);
      if (ageH > expectedHours[job]) {
        alerts.push({
          alert_type: "ai_cron_stale",
          severity: "critical",
          user_id: null,
          title: `Cron AI nu a rulat recent: ${job}`,
          message: `Ultima rulare acum ${ageH.toFixed(0)}h (limită: ${expectedHours[job]}h).`,
          details: { job, last_run: lastRun.started_at, age_hours: Math.round(ageH) },
          dedup_hash: `ai_cron_stale:${job}:${today}`,
        });
      }

      if (lastRun.status === "failed" || lastRun.error_message) {
        alerts.push({
          alert_type: "ai_cron_failed",
          severity: "critical",
          user_id: null,
          title: `Cron AI eșuat: ${job}`,
          message: lastRun.error_message?.slice(0, 200) ?? "Status: failed",
          details: { job, last_run: lastRun.started_at, error: lastRun.error_message },
          dedup_hash: `ai_cron_failed:${job}:${lastRun.started_at}`,
        });
      }

      if (job === "ai-kpi-analyzer" && (lastRun.items_processed ?? 0) === 0 && lastRun.status !== "failed") {
        alerts.push({
          alert_type: "ai_kpi_zero_items",
          severity: "warning",
          user_id: null,
          title: "ai-kpi-analyzer: 0 items procesate",
          message: "Ultima rulare nu a procesat niciun KPI.",
          details: { job, last_run: lastRun.started_at },
          dedup_hash: `ai_kpi_zero_items:${today}`,
        });
      }
    }

    // Anomaly: 0 recomandări AI generate în ultimele 7 zile
    const last7d = new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();
    const { count: recRecent } = await supabase
      .from("ai_recommendations")
      .select("*", { count: "exact", head: true })
      .gte("created_at", last7d);
    if ((recRecent ?? 0) === 0) {
      alerts.push({
        alert_type: "ai_zero_recommendations",
        severity: "warning",
        user_id: null,
        title: "Zero recomandări AI în 7 zile",
        message: "ai-kpi-analyzer nu a generat nicio recomandare în ultimele 7 zile.",
        details: { window_days: 7 },
        dedup_hash: `ai_zero_recommendations:${today}`,
      });
    }

    let created = 0;
    for (const a of alerts) {
      const { error } = await supabase.from("admin_alerts").insert(a);
      if (!error) created++;
    }

    return new Response(
      JSON.stringify({ success: true, scanned: users?.length ?? 0, alerts_found: alerts.length, created }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
