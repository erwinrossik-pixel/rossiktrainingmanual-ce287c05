// @vitest-environment node
import { describe, it, expect, vi } from "vitest";

vi.mock("@/integrations/supabase/client", () => ({ supabase: {} }));
vi.mock("@/hooks/useAuth", () => ({ useAuth: () => ({ user: null }) }));

import { unlockChapter } from "@/hooks/useChapterProgress";

type Row = { user_id: string; chapter_id: string; status: string; best_score: number };

/** Minimal in-memory chapter_progress table with upsert(ignoreDuplicates) and filtered update. */
function fakeClient(rows: Row[]) {
  const from = () => ({
    upsert: async (row: Row) => {
      if (!rows.some(r => r.user_id === row.user_id && r.chapter_id === row.chapter_id)) rows.push({ ...row });
      return { error: null };
    },
    update: (patch: Partial<Row>) => {
      const filters: Partial<Row> = {};
      const chain = {
        eq: (col: keyof Row, val: string) => {
          (filters as Record<string, string>)[col] = val;
          return chain;
        },
        then: (resolve: (v: { error: null }) => void) => {
          rows.forEach(r => {
            if (Object.entries(filters).every(([k, v]) => r[k as keyof Row] === v)) Object.assign(r, patch);
          });
          resolve({ error: null });
        },
      };
      return chain;
    },
  });
  return { from } as unknown as Parameters<typeof unlockChapter>[0];
}

describe("unlocking the next chapter after a pass", () => {
  it("a chapter left locked by an admin reset becomes unlocked", async () => {
    const rows: Row[] = [{ user_id: "u", chapter_id: "mindset", status: "locked", best_score: 0 }];
    await unlockChapter(fakeClient(rows), "u", "mindset");
    expect(rows[0].status).toBe("unlocked");
  });

  it("an already completed next chapter stays completed with its score", async () => {
    const rows: Row[] = [{ user_id: "u", chapter_id: "mindset", status: "completed", best_score: 10 }];
    await unlockChapter(fakeClient(rows), "u", "mindset");
    expect(rows[0]).toMatchObject({ status: "completed", best_score: 10 });
  });

  it("a next chapter with no progress yet is created unlocked", async () => {
    const rows: Row[] = [];
    await unlockChapter(fakeClient(rows), "u", "mindset");
    expect(rows).toHaveLength(1);
    expect(rows[0].status).toBe("unlocked");
  });
});
