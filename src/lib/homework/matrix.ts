import { formatPoints, isPassed } from "./grading";
import type { HomeworkAssignment, HomeworkSubmission } from "./types";

export type MatrixCellState = "no_assignment" | "unpublished" | "none" | "draft" | "submitted" | "graded";

export interface MatrixCell {
  state: MatrixCellState;
  assignment: HomeworkAssignment | null;
  submission: HomeworkSubmission | null;
  /** e.g. "24/30" when graded, "18/26" (automatic part) when submitted, otherwise "". */
  score: string;
  passed: boolean | null;
}

export function lessonColumns(assignments: HomeworkAssignment[], minLessons = 5): number[] {
  const max = Math.max(minLessons, ...assignments.map((a) => a.lesson_no));
  return Array.from({ length: max }, (_, i) => i + 1);
}

export function buildMatrixCell(
  assignment: HomeworkAssignment | undefined,
  submission: HomeworkSubmission | undefined,
): MatrixCell {
  if (!assignment) return { state: "no_assignment", assignment: null, submission: null, score: "", passed: null };
  if (!submission) {
    return { state: assignment.published ? "none" : "unpublished", assignment, submission: null, score: "", passed: null };
  }
  if (submission.status === "graded") {
    return {
      state: "graded",
      assignment,
      submission,
      score: `${formatPoints(submission.total_points)}/${assignment.max_points}`,
      passed: isPassed(submission.total_points, assignment.pass_points),
    };
  }
  if (submission.status === "submitted") {
    return { state: "submitted", assignment, submission, score: `${formatPoints(submission.auto_points)}`, passed: null };
  }
  return { state: "draft", assignment, submission, score: "", passed: null };
}

const csvEscape = (v: string) => (/[";\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

export interface CsvRow {
  name: string;
  email: string;
  cells: MatrixCell[];
}

/** Semicolon-separated CSV with a UTF-8 BOM so Excel opens diacritics correctly. */
export function buildMatrixCsv(
  headers: string[],
  rows: CsvRow[],
  cellText: (cell: MatrixCell) => string,
): string {
  const lines = [headers.map(csvEscape).join(";")];
  for (const row of rows) {
    lines.push([row.name, row.email, ...row.cells.map(cellText)].map(csvEscape).join(";"));
  }
  return "\uFEFF" + lines.join("\r\n");
}
