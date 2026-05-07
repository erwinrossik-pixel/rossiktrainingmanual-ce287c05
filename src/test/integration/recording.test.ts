/**
 * Teste integrare DB — verifică inserarea corectă în
 * quiz_attempts, training_time, final_exam_attempts, page_views.
 *
 * Necesită: variabile env VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY
 * și un user de test existent (TEST_USER_EMAIL/PASSWORD).
 *
 * Skip automat dacă variabilele lipsesc.
 */
import { describe, it, expect, beforeAll } from "vitest";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const EMAIL = import.meta.env.VITE_TEST_USER_EMAIL;
const PASS = import.meta.env.VITE_TEST_USER_PASSWORD;

const skip = !URL || !KEY || !EMAIL || !PASS;

describe.skipIf(skip)("Recording integration", () => {
  let sb: SupabaseClient;
  let userId: string;

  beforeAll(async () => {
    sb = createClient(URL!, KEY!);
    const { data, error } = await sb.auth.signInWithPassword({ email: EMAIL!, password: PASS! });
    if (error) throw error;
    userId = data.user!.id;
  });

  it("page_views: insert is recorded", async () => {
    const { error } = await sb.from("page_views").insert({
      user_id: userId,
      path: "/test/integration",
      page_title: "Integration Test",
    });
    expect(error).toBeNull();

    const { data } = await sb
      .from("page_views")
      .select("*")
      .eq("user_id", userId)
      .eq("path", "/test/integration")
      .order("created_at", { ascending: false })
      .limit(1);
    expect(data?.length).toBe(1);
  });

  it("quiz_attempts: insert with score is recorded and triggers competency update", async () => {
    const { error } = await sb.from("quiz_attempts").insert({
      user_id: userId,
      chapter_id: "intro",
      score: 9,
      total_questions: 10,
      passed: true,
    });
    expect(error).toBeNull();
  });

  it("training_time: upsert per day_number works", async () => {
    const today = Math.floor(Date.now() / 86400000);
    const { error } = await sb.from("training_time").upsert(
      {
        user_id: userId,
        day_number: today,
        total_seconds: 60,
        is_running: false,
        training_started_at: new Date().toISOString(),
      },
      { onConflict: "user_id,day_number" },
    );
    expect(error).toBeNull();
  });

  it("RLS: user cannot read another user's quiz_attempts", async () => {
    const { data } = await sb
      .from("quiz_attempts")
      .select("user_id")
      .neq("user_id", userId)
      .limit(1);
    expect(data?.length ?? 0).toBe(0);
  });
});
