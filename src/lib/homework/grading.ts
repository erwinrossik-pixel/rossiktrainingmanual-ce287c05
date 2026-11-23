import type { HomeworkAnswerKey, HomeworkQuestion } from "./types";

/**
 * Same rule as the database function `homework_parse_number`:
 * accepts "14,7", "14.7", " 14.70 "; returns null for anything else.
 */
export function parseHomeworkNumber(raw: string | null | undefined): number | null {
  if (raw === null || raw === undefined) return null;
  const v = raw.replace(/\s/g, "").replace(/,/g, ".");
  if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(v)) return null;
  return Number(v);
}

/** Avoids float noise such as 14.75 - 14.7 = 0.05000000000000071. */
const round6 = (n: number) => Math.round(n * 1e6) / 1e6;

/**
 * Automatic points for one question (mirror of `submit_homework`, used to show
 * per-question results to trainers). Text questions return null: they are graded by hand.
 */
export function autoPointsFor(question: HomeworkQuestion, key: HomeworkAnswerKey | null, answer: string | undefined): number | null {
  if (question.type === "text") return null;
  if (!key || answer === undefined || answer.trim() === "") return 0;
  if (key.kind === "choice") return key.accepted.includes(answer) ? question.points : 0;
  if (key.kind === "number") {
    const n = parseHomeworkNumber(answer);
    if (n === null) return 0;
    return round6(Math.abs(n - key.value)) <= round6(key.tolerance) ? question.points : 0;
  }
  return 0;
}

export function isPassed(totalPoints: number | null, passPoints: number): boolean {
  return totalPoints !== null && totalPoints >= passPoints;
}

export function formatPoints(n: number | null | undefined): string {
  if (n === null || n === undefined) return "–";
  return Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100);
}
