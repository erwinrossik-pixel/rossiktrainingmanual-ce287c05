/**
 * Live audit: verifică pentru toți userii dacă timer/quiz/exam/page_views
 * sunt înregistrate corect și raportează discrepanțe.
 *
 * Rulare: deno run --allow-net --allow-env scripts/audit-user-recording.ts
 * (sau adaptat pentru node + supabase-js)
 *
 * Acesta NU este un test repetabil — e o verificare punctuală pe DB-ul real.
 */
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL!;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("❌ Lipsesc VITE_SUPABASE_URL sau SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

interface Discrepancy {
  user: string;
  type: "timer_low" | "timer_high" | "orphan_quiz" | "missing_cert" | "ok";
  detail: string;
}

async function audit() {
  const { data: users } = await sb
    .from("profiles")
    .select("id, first_name, last_name, created_at");

  if (!users) return;
  const issues: Discrepancy[] = [];

  for (const u of users) {
    const name = `${u.first_name ?? ""} ${u.last_name ?? ""}`.trim();
    const [
      { data: timer },
      { count: pv },
      { count: quizzes },
      { count: chapters },
      { data: exam },
      { count: certs },
    ] = await Promise.all([
      sb.from("training_time").select("total_seconds").eq("user_id", u.id),
      sb.from("page_views").select("*", { count: "exact", head: true }).eq("user_id", u.id),
      sb.from("quiz_attempts").select("*", { count: "exact", head: true }).eq("user_id", u.id),
      sb.from("chapter_progress").select("*", { count: "exact", head: true }).eq("user_id", u.id).eq("status", "completed"),
      sb.from("final_exam_attempts").select("passed").eq("user_id", u.id),
      sb.from("certificates").select("*", { count: "exact", head: true }).eq("user_id", u.id),
    ]);

    const timerMin = (timer ?? []).reduce((s, t) => s + (t.total_seconds ?? 0), 0) / 60;
    const examPassed = (exam ?? []).some((e) => e.passed);

    // Heuristic: dacă has 10+ page views și 5+ quiz-uri, dar timer < 30min → bug
    if ((pv ?? 0) > 20 && (quizzes ?? 0) > 5 && timerMin < 30) {
      issues.push({ user: name, type: "timer_low",
        detail: `${pv} page views, ${quizzes} quiz, dar doar ${timerMin.toFixed(0)} min timer` });
    }
    // Sesiuni paralele suspecte: > 100h
    if (timerMin > 100 * 60) {
      issues.push({ user: name, type: "timer_high",
        detail: `${(timerMin / 60).toFixed(0)}h - posibil sesiuni suprapuse` });
    }
    // Examen trecut, dar fără certificat
    if (examPassed && (certs ?? 0) === 0) {
      issues.push({ user: name, type: "missing_cert",
        detail: "examen trecut dar nu există certificat" });
    }
  }

  console.log("=== AUDIT REPORT ===");
  if (issues.length === 0) {
    console.log("✅ Nicio discrepanță detectată");
  } else {
    for (const i of issues) console.log(`🔴 [${i.type}] ${i.user}: ${i.detail}`);
  }
  process.exit(issues.length > 0 ? 1 : 0);
}

audit();
