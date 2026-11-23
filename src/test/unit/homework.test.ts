// @vitest-environment node
import { describe, it, expect } from "vitest";
import { autoPointsFor, isPassed, parseHomeworkNumber } from "@/lib/homework/grading";
import { validateHomeworkImport } from "@/lib/homework/importValidation";
import { buildMatrixCell } from "@/lib/homework/matrix";
import type { HomeworkAssignment, HomeworkQuestion, HomeworkSubmission } from "@/lib/homework/types";

const q = (over: Partial<HomeworkQuestion>): HomeworkQuestion => ({
  id: "q", assignment_id: "a", exercise_no: 1, exercise_title: "E", exercise_intro: null, show_calc_box: false,
  q_key: "k", sort: 1, prompt: "?", type: "number", options: [], unit: "t", points: 1, ...over,
});

describe("number answers accept comma or dot", () => {
  it("parses 14,7 and 14.7 the same", () => {
    expect(parseHomeworkNumber("14,7")).toBe(14.7);
    expect(parseHomeworkNumber("14.7")).toBe(14.7);
    expect(parseHomeworkNumber(" 14,70 ")).toBe(14.7);
    expect(parseHomeworkNumber("14 t")).toBeNull();
  });

  it("gives the point when |answer − value| ≤ tolerance (14.7 ± 0.05)", () => {
    const key = { kind: "number" as const, value: 14.7, tolerance: 0.05 };
    expect(autoPointsFor(q({}), key, "14,75")).toBe(1);
    expect(autoPointsFor(q({}), key, "14.65")).toBe(1);
    expect(autoPointsFor(q({}), key, "14,76")).toBe(0);
  });

  it("tolerance 0 needs the exact value (19 pallets)", () => {
    const key = { kind: "number" as const, value: 19, tolerance: 0 };
    expect(autoPointsFor(q({}), key, "19")).toBe(1);
    expect(autoPointsFor(q({}), key, "20")).toBe(0);
  });
});

describe("choice answers", () => {
  it("accepts any of the accepted options (Walking floor or Basculantă)", () => {
    const question = q({ type: "choice", options: ["Walking floor", "Basculantă", "Cisternă"] });
    const key = { kind: "choice" as const, accepted: ["Walking floor", "Basculantă"] };
    expect(autoPointsFor(question, key, "Basculantă")).toBe(1);
    expect(autoPointsFor(question, key, "Walking floor")).toBe(1);
    expect(autoPointsFor(question, key, "Cisternă")).toBe(0);
  });

  it("text questions are never auto-scored", () => {
    expect(autoPointsFor(q({ type: "text", points: 4 }), { kind: "text", rubric: "r" }, "anything")).toBeNull();
  });
});

describe("pass rule", () => {
  it("passes from pass_points (21 of 30)", () => {
    expect(isPassed(21, 21)).toBe(true);
    expect(isPassed(20.5, 21)).toBe(false);
    expect(isPassed(null, 21)).toBe(false);
  });
});

const base = {
  lesson_no: 1, title: "T", max_points: 5, pass_points: 3,
  exercises: [{ no: 1, title: "E", questions: [
    { key: "1", prompt: "p", type: "choice", options: ["A", "B"], correct: ["A"], points: 1 },
    { key: "2", prompt: "p", type: "text", rubric: "r", points: 4 },
  ] }],
};

describe("JSON import validation", () => {
  it("accepts the agreed format", () => {
    const r = validateHomeworkImport(JSON.stringify(base));
    expect(r.ok).toBe(true);
    expect(r.summary).toMatchObject({ questions: 2, textQuestions: 1, maxPoints: 5 });
  });

  it("rejects when question points do not add up to max_points", () => {
    const r = validateHomeworkImport(JSON.stringify({ ...base, max_points: 30 }));
    expect(r.ok).toBe(false);
    expect(r.issues.map((i) => i.key)).toContain("import.err.sum");
  });

  it("rejects a correct answer that is not one of the options", () => {
    const bad = structuredClone(base);
    bad.exercises[0].questions[0].correct = ["C"];
    const r = validateHomeworkImport(JSON.stringify(bad));
    expect(r.ok).toBe(false);
    expect(r.issues.map((i) => i.key)).toContain("import.err.correctNotOption");
  });

  it("rejects duplicate question keys and invalid JSON", () => {
    const dup = structuredClone(base);
    dup.exercises[0].questions[1].key = "1";
    const r = validateHomeworkImport(JSON.stringify(dup));
    expect(r.ok).toBe(false);
    expect(r.issues.map((i) => i.key)).toContain("import.err.keyDup");
    const broken = validateHomeworkImport("{nope");
    expect(broken.ok).toBe(false);
  });
});

describe("progress matrix cell", () => {
  const a: HomeworkAssignment = {
    id: "a", course_id: "c", lesson_no: 1, title: "T", description: null, max_points: 30, pass_points: 21,
    due_at: null, published: true, show_solutions: false, created_at: "",
  };
  const sub = (over: Partial<HomeworkSubmission>): HomeworkSubmission => ({
    id: "s", assignment_id: "a", user_id: "u", status: "graded", answers: {}, calc_notes: {}, manual_scores: {},
    auto_points: 20, manual_points: 4, total_points: 24, feedback: null, submitted_at: null, graded_at: null, graded_by: null, ...over,
  });

  it("shows 24/30 passed when graded with 24 of 30 (pass 21)", () => {
    expect(buildMatrixCell(a, sub({}))).toMatchObject({ state: "graded", score: "24/30", passed: true });
  });
  it("shows not started for a published homework without submission", () => {
    expect(buildMatrixCell(a, undefined).state).toBe("none");
    expect(buildMatrixCell({ ...a, published: false }, undefined).state).toBe("unpublished");
  });
});
