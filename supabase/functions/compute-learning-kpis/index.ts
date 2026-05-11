import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface QuizAttempt {
  user_id: string;
  chapter_id: string;
  passed: boolean | null;
  score: number | null;
  total_questions: number | null;
  questions_answered: unknown;
  created_at: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  const startTime = Date.now();
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  let logId: string | null = null;
  try {
    const body = await req.json().catch(() => ({}));
    const triggered_by = body?.triggered_by ?? null;
    const executionType = body?.manual ? 'manual' : 'scheduled';

    const { data: logEntry } = await supabase
      .from('cron_job_logs')
      .insert({
        job_name: 'compute-learning-kpis',
        execution_type: executionType,
        status: 'running',
        triggered_by,
      })
      .select('id')
      .limit(1)
      .maybeSingle();
    logId = (logEntry as { id?: string } | null)?.id ?? null;

    // Fetch source data
    const [{ data: attempts }, { data: chapters }, { data: progress }, { data: trainingTime }] = await Promise.all([
      supabase.from('quiz_attempts').select('user_id, chapter_id, passed, score, total_questions, questions_answered, created_at'),
      supabase.from('chapters').select('id, slug, order_index').order('order_index'),
      supabase.from('chapter_progress').select('user_id, chapter_id, status, best_score, attempts_count'),
      supabase.from('training_time').select('user_id, total_seconds'),
    ]);

    const allAttempts = (attempts ?? []) as QuizAttempt[];
    const allChapters = chapters ?? [];

    const validUntil = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    const computedAt = new Date().toISOString();

    type CacheRow = {
      kpi_type: string;
      entity_id: string;
      metrics: Record<string, unknown>;
      computed_at: string;
      valid_until: string;
    };
    const rows: CacheRow[] = [];

    // CHAPTER KPIs
    for (const ch of allChapters) {
      const chAttempts = allAttempts.filter(a => a.chapter_id === ch.id);
      const passed = chAttempts.filter(a => a.passed).length;
      const uniqueUsers = new Set(chAttempts.map(a => a.user_id));
      const avgScore = chAttempts.length
        ? chAttempts.reduce((s, a) => s + ((a.score ?? 0) / Math.max(1, a.total_questions ?? 10)) * 100, 0) / chAttempts.length
        : 0;

      // Question failure breakdown
      const qStats: Record<number, { c: number; t: number }> = {};
      for (const a of chAttempts) {
        const qa = a.questions_answered as Record<string, { correct?: boolean }> | null;
        if (qa && typeof qa === 'object') {
          for (const [idx, info] of Object.entries(qa)) {
            const i = parseInt(idx);
            if (Number.isNaN(i)) continue;
            qStats[i] ??= { c: 0, t: 0 };
            qStats[i].t++;
            if (info?.correct) qStats[i].c++;
          }
        }
      }
      const hardestQuestions = Object.entries(qStats)
        .map(([i, v]) => ({ index: parseInt(i), failureRate: v.t ? ((v.t - v.c) / v.t) * 100 : 0, total: v.t }))
        .sort((a, b) => b.failureRate - a.failureRate)
        .slice(0, 5);

      rows.push({
        kpi_type: 'chapter',
        entity_id: ch.id,
        metrics: {
          slug: ch.slug,
          order_index: ch.order_index,
          totalAttempts: chAttempts.length,
          uniqueUsers: uniqueUsers.size,
          passRate: chAttempts.length ? (passed / chAttempts.length) * 100 : 0,
          avgScorePct: avgScore,
          avgAttemptsPerUser: uniqueUsers.size ? chAttempts.length / uniqueUsers.size : 0,
          hardestQuestions,
        },
        computed_at: computedAt,
        valid_until: validUntil,
      });
    }

    // USER KPIs
    const trainingByUser = new Map<string, number>();
    for (const t of trainingTime ?? []) {
      const tt = t as { user_id: string; total_seconds: number | null };
      trainingByUser.set(tt.user_id, (trainingByUser.get(tt.user_id) ?? 0) + (tt.total_seconds ?? 0));
    }
    const progressByUser = new Map<string, { completed: number; avgScore: number; total: number }>();
    for (const p of progress ?? []) {
      const pp = p as { user_id: string; status: string | null; best_score: number | null };
      const cur = progressByUser.get(pp.user_id) ?? { completed: 0, avgScore: 0, total: 0 };
      cur.total++;
      if (pp.status === 'completed') cur.completed++;
      cur.avgScore += pp.best_score ?? 0;
      progressByUser.set(pp.user_id, cur);
    }
    const attemptsByUser = new Map<string, QuizAttempt[]>();
    for (const a of allAttempts) {
      const arr = attemptsByUser.get(a.user_id) ?? [];
      arr.push(a);
      attemptsByUser.set(a.user_id, arr);
    }

    const userIds = new Set<string>([
      ...trainingByUser.keys(),
      ...progressByUser.keys(),
      ...attemptsByUser.keys(),
    ]);

    for (const uid of userIds) {
      const ua = attemptsByUser.get(uid) ?? [];
      const passed = ua.filter(a => a.passed).length;
      const prog = progressByUser.get(uid);
      rows.push({
        kpi_type: 'user',
        entity_id: uid,
        metrics: {
          quizAttempts: ua.length,
          quizPassRate: ua.length ? (passed / ua.length) * 100 : 0,
          chaptersCompleted: prog?.completed ?? 0,
          chaptersStarted: prog?.total ?? 0,
          avgChapterScore: prog && prog.total ? prog.avgScore / prog.total : 0,
          totalTrainingSeconds: trainingByUser.get(uid) ?? 0,
          totalTrainingHours: ((trainingByUser.get(uid) ?? 0) / 3600).toFixed(2),
        },
        computed_at: computedAt,
        valid_until: validUntil,
      });
    }

    // GLOBAL KPI
    const totalAttempts = allAttempts.length;
    const totalPassed = allAttempts.filter(a => a.passed).length;
    rows.push({
      kpi_type: 'global',
      entity_id: 'platform',
      metrics: {
        totalUsers: userIds.size,
        totalChapters: allChapters.length,
        totalQuizAttempts: totalAttempts,
        globalPassRate: totalAttempts ? (totalPassed / totalAttempts) * 100 : 0,
      },
      computed_at: computedAt,
      valid_until: validUntil,
    });

    // Upsert in batches
    let written = 0;
    for (let i = 0; i < rows.length; i += 200) {
      const batch = rows.slice(i, i + 200);
      const { error } = await supabase
        .from('learning_kpi_cache')
        .upsert(batch, { onConflict: 'kpi_type,entity_id' });
      if (error) throw error;
      written += batch.length;
    }

    const durationMs = Date.now() - startTime;
    if (logId) {
      await supabase.from('cron_job_logs').update({
        status: 'success',
        completed_at: new Date().toISOString(),
        duration_ms: durationMs,
        items_processed: written,
        items_failed: 0,
        result_summary: `Cached ${written} KPI rows (${allChapters.length} chapters, ${userIds.size} users)`,
      }).eq('id', logId);
    }

    return new Response(JSON.stringify({ success: true, items_written: written, durationMs }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    if (logId) {
      await supabase.from('cron_job_logs').update({
        status: 'failed',
        completed_at: new Date().toISOString(),
        duration_ms: Date.now() - startTime,
        error_message: msg,
        result_summary: `Eroare: ${msg}`,
      }).eq('id', logId);
    }
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
