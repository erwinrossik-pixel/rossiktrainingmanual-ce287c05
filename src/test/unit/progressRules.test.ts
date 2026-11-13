// @vitest-environment node
import { describe, it, expect, vi } from "vitest";

vi.mock("@/integrations/supabase/client", () => ({ supabase: {} }));
vi.mock("@/hooks/useAuth", () => ({ useAuth: () => ({ user: null }) }));

import { resolveAttemptOutcome } from "@/hooks/useChapterProgress";
import { mapRowsToTimerData } from "@/hooks/useTrainingTimer";

describe("quiz attempt outcome", () => {
  it("failed retake of an already completed chapter keeps it completed", () => {
    const r = resolveAttemptOutcome({ passed: false, wasCompleted: true, currentConsecutiveFails: 2 });
    expect(r).toEqual({ status: "completed", consecutiveFails: 0, lockOut: false });
  });

  it("third consecutive fail on an unfinished chapter locks it out", () => {
    const r = resolveAttemptOutcome({ passed: false, wasCompleted: false, currentConsecutiveFails: 2 });
    expect(r.status).toBe("locked_out");
    expect(r.lockOut).toBe(true);
  });

  it("first fail on an unfinished chapter is in progress", () => {
    const r = resolveAttemptOutcome({ passed: false, wasCompleted: false, currentConsecutiveFails: 0 });
    expect(r).toEqual({ status: "in_progress", consecutiveFails: 1, lockOut: false });
  });
});

describe("training time rows", () => {
  const now = Date.parse("2026-11-13T15:00:00Z");
  const row = (lastStart: string) => ({
    day_number: 1, total_seconds: 600, last_start_time: lastStart, is_running: true, training_started_at: null,
  });

  it("an abandoned running timer (older than 3 minutes) does not count the time away", () => {
    const d = mapRowsToTimerData([row("2026-11-13T09:00:00Z")], now);
    expect(d.days[1]).toEqual({ totalSeconds: 600, lastStartTime: null, isRunning: false });
  });

  it("a recently refreshed running timer keeps running", () => {
    const d = mapRowsToTimerData([row("2026-11-13T14:59:00Z")], now);
    expect(d.days[1].isRunning).toBe(true);
    expect(d.currentActiveDay).toBe(1);
  });
});
