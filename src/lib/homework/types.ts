import type { Json } from "@/integrations/supabase/types";

export type HomeworkQuestionType = "choice" | "number" | "text";
export type HomeworkStatus = "draft" | "submitted" | "graded";
/** Learner-facing status: "none" means no submission row yet. */
export type HomeworkDisplayStatus = HomeworkStatus | "none";

export interface HomeworkCourse {
  id: string;
  company_id: string;
  title: string;
  created_at: string;
}

export interface HomeworkAssignment {
  id: string;
  course_id: string;
  lesson_no: number;
  title: string;
  description: string | null;
  max_points: number;
  pass_points: number;
  due_at: string | null;
  published: boolean;
  show_solutions: boolean;
  created_at: string;
}

export interface HomeworkQuestion {
  id: string;
  assignment_id: string;
  exercise_no: number;
  exercise_title: string;
  exercise_intro: string | null;
  show_calc_box: boolean;
  q_key: string;
  sort: number;
  prompt: string;
  type: HomeworkQuestionType;
  options: string[];
  unit: string | null;
  points: number;
}

export interface HomeworkSubmission {
  id: string;
  assignment_id: string;
  user_id: string;
  status: HomeworkStatus;
  answers: Record<string, string>;
  calc_notes: Record<string, string>;
  manual_scores: Record<string, number>;
  auto_points: number | null;
  manual_points: number | null;
  total_points: number | null;
  feedback: string | null;
  submitted_at: string | null;
  graded_at: string | null;
  graded_by: string | null;
}

/** Answer key as stored: choice → accepted strings; number → value/tolerance; text → rubric. */
export type HomeworkAnswerKey =
  | { kind: "choice"; accepted: string[] }
  | { kind: "number"; value: number; tolerance: number }
  | { kind: "text"; rubric: string };

export interface HomeworkExercise {
  no: number;
  title: string;
  intro: string | null;
  showCalcBox: boolean;
  questions: HomeworkQuestion[];
}

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

export function toStringRecord(value: Json | null | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  if (!isRecord(value)) return out;
  for (const [k, v] of Object.entries(value)) {
    if (typeof v === "string") out[k] = v;
    else if (typeof v === "number") out[k] = String(v);
  }
  return out;
}

export function toNumberRecord(value: Json | null | undefined): Record<string, number> {
  const out: Record<string, number> = {};
  if (!isRecord(value)) return out;
  for (const [k, v] of Object.entries(value)) {
    const n = typeof v === "number" ? v : typeof v === "string" ? Number(v) : NaN;
    if (Number.isFinite(n)) out[k] = n;
  }
  return out;
}

export function toStringArray(value: Json | null | undefined): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];
}

export function parseAnswerKey(type: HomeworkQuestionType, correct: Json | null | undefined): HomeworkAnswerKey | null {
  if (correct === null || correct === undefined) return null;
  if (type === "choice") return { kind: "choice", accepted: toStringArray(correct) };
  if (!isRecord(correct)) return null;
  if (type === "number") {
    const value = Number(correct.value);
    const tolerance = Number(correct.tolerance ?? 0);
    if (!Number.isFinite(value)) return null;
    return { kind: "number", value, tolerance: Number.isFinite(tolerance) ? tolerance : 0 };
  }
  return { kind: "text", rubric: typeof correct.rubric === "string" ? correct.rubric : "" };
}

interface QuestionRow {
  id: string;
  assignment_id: string;
  exercise_no: number;
  exercise_title: string;
  exercise_intro: string | null;
  show_calc_box: boolean;
  q_key: string;
  sort: number;
  prompt: string;
  type: string;
  options: Json | null;
  unit: string | null;
  points: number;
}

export function mapQuestionRow(row: QuestionRow): HomeworkQuestion {
  const type: HomeworkQuestionType = row.type === "number" || row.type === "text" ? row.type : "choice";
  return { ...row, type, options: toStringArray(row.options), points: Number(row.points) };
}

interface SubmissionRow {
  id: string;
  assignment_id: string;
  user_id: string;
  status: string;
  answers: Json;
  calc_notes: Json;
  manual_scores: Json;
  auto_points: number | null;
  manual_points: number | null;
  total_points: number | null;
  feedback: string | null;
  submitted_at: string | null;
  graded_at: string | null;
  graded_by: string | null;
}

export function mapSubmissionRow(row: SubmissionRow): HomeworkSubmission {
  const status: HomeworkStatus = row.status === "submitted" || row.status === "graded" ? row.status : "draft";
  return {
    id: row.id,
    assignment_id: row.assignment_id,
    user_id: row.user_id,
    status,
    answers: toStringRecord(row.answers),
    calc_notes: toStringRecord(row.calc_notes),
    manual_scores: toNumberRecord(row.manual_scores),
    auto_points: row.auto_points === null ? null : Number(row.auto_points),
    manual_points: row.manual_points === null ? null : Number(row.manual_points),
    total_points: row.total_points === null ? null : Number(row.total_points),
    feedback: row.feedback,
    submitted_at: row.submitted_at,
    graded_at: row.graded_at,
    graded_by: row.graded_by,
  };
}

/** Groups questions (already sorted) into exercises in order. */
export function groupExercises(questions: HomeworkQuestion[]): HomeworkExercise[] {
  const sorted = [...questions].sort((a, b) => a.exercise_no - b.exercise_no || a.sort - b.sort);
  const map = new Map<number, HomeworkExercise>();
  for (const q of sorted) {
    let ex = map.get(q.exercise_no);
    if (!ex) {
      ex = { no: q.exercise_no, title: q.exercise_title, intro: q.exercise_intro, showCalcBox: q.show_calc_box, questions: [] };
      map.set(q.exercise_no, ex);
    }
    ex.questions.push(q);
  }
  return [...map.values()];
}
