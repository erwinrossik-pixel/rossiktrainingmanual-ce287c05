/**
 * Validates the homework JSON import format before it is sent to
 * `import_homework_assignment` (which re-checks everything on the server).
 * Errors are returned as translation keys + params so the UI can show them in RO/DE/EN.
 */
export interface ImportIssue {
  key: string;
  params?: Record<string, string | number>;
}

export interface ImportSummary {
  lessonNo: number;
  title: string;
  exercises: number;
  questions: number;
  textQuestions: number;
  maxPoints: number;
  passPoints: number;
}

export interface ImportResult {
  ok: boolean;
  issues: ImportIssue[];
  payload: Record<string, unknown> | null;
  summary: ImportSummary | null;
}

const fail = (issues: ImportIssue[]): ImportResult => ({ ok: false, issues, payload: null, summary: null });

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
const isNum = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v);
const isText = (v: unknown): v is string => typeof v === "string" && v.trim() !== "";

export function validateHomeworkImport(raw: string): ImportResult {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return fail([{ key: "import.err.json" }]);
  }
  const issues: ImportIssue[] = [];
  if (!isObj(data)) return fail([{ key: "import.err.object" }]);

  if (!isNum(data.lesson_no) || !Number.isInteger(data.lesson_no) || data.lesson_no < 1) issues.push({ key: "import.err.lessonNo" });
  if (!isText(data.title)) issues.push({ key: "import.err.title" });
  if (!isNum(data.max_points) || !Number.isInteger(data.max_points) || data.max_points <= 0) issues.push({ key: "import.err.maxPoints" });
  if (!isNum(data.pass_points) || !Number.isInteger(data.pass_points) || data.pass_points < 0) issues.push({ key: "import.err.passPoints" });
  if (isNum(data.max_points) && isNum(data.pass_points) && data.pass_points > data.max_points) issues.push({ key: "import.err.passAboveMax" });
  if (!Array.isArray(data.exercises) || data.exercises.length === 0) {
    issues.push({ key: "import.err.exercises" });
    return fail(issues);
  }

  const keys = new Set<string>();
  const exerciseNos = new Set<number>();
  let total = 0;
  let questions = 0;
  let textQuestions = 0;

  data.exercises.forEach((ex: unknown, exIndex: number) => {
    const exLabel = exIndex + 1;
    if (!isObj(ex)) {
      issues.push({ key: "import.err.exerciseShape", params: { ex: exLabel } });
      return;
    }
    if (!isNum(ex.no) || !Number.isInteger(ex.no)) issues.push({ key: "import.err.exerciseNo", params: { ex: exLabel } });
    else if (exerciseNos.has(ex.no)) issues.push({ key: "import.err.exerciseDup", params: { ex: ex.no } });
    else exerciseNos.add(ex.no);
    if (!isText(ex.title)) issues.push({ key: "import.err.exerciseTitle", params: { ex: exLabel } });
    if (ex.show_calc_box !== undefined && typeof ex.show_calc_box !== "boolean") issues.push({ key: "import.err.calcBox", params: { ex: exLabel } });
    if (!Array.isArray(ex.questions) || ex.questions.length === 0) {
      issues.push({ key: "import.err.noQuestions", params: { ex: exLabel } });
      return;
    }

    ex.questions.forEach((q: unknown, qIndex: number) => {
      const fallback = `${exLabel}.${qIndex + 1}`;
      if (!isObj(q)) {
        issues.push({ key: "import.err.questionShape", params: { q: fallback } });
        return;
      }
      questions += 1;
      const label = isText(q.key) ? q.key.trim() : fallback;
      if (!isText(q.key)) issues.push({ key: "import.err.key", params: { q: fallback } });
      else if (keys.has(label)) issues.push({ key: "import.err.keyDup", params: { q: label } });
      else keys.add(label);
      if (!isText(q.prompt)) issues.push({ key: "import.err.prompt", params: { q: label } });
      if (!isNum(q.points) || q.points < 0) issues.push({ key: "import.err.points", params: { q: label } });
      else total += q.points;

      if (q.type === "choice") {
        const options = Array.isArray(q.options) ? q.options : null;
        if (!options || options.length < 2 || !options.every(isText)) {
          issues.push({ key: "import.err.options", params: { q: label } });
        }
        if (!Array.isArray(q.correct) || q.correct.length === 0 || !q.correct.every((c) => typeof c === "string")) {
          issues.push({ key: "import.err.choiceCorrect", params: { q: label } });
        } else if (options && q.correct.some((c) => !options.includes(c))) {
          issues.push({ key: "import.err.correctNotOption", params: { q: label } });
        }
      } else if (q.type === "number") {
        const c = q.correct;
        if (!isObj(c) || !isNum(c.value)) issues.push({ key: "import.err.numberCorrect", params: { q: label } });
        else if (c.tolerance !== undefined && (!isNum(c.tolerance) || c.tolerance < 0)) issues.push({ key: "import.err.tolerance", params: { q: label } });
      } else if (q.type === "text") {
        textQuestions += 1;
        if (!isText(q.rubric)) issues.push({ key: "import.err.rubric", params: { q: label } });
      } else {
        issues.push({ key: "import.err.type", params: { q: label } });
      }
    });
  });

  if (issues.length === 0 && isNum(data.max_points) && Math.round(total * 1e6) !== Math.round(data.max_points * 1e6)) {
    issues.push({ key: "import.err.sum", params: { sum: Math.round(total * 100) / 100, max: data.max_points } });
  }

  if (issues.length > 0) return fail(issues);
  return {
    ok: true,
    issues: [],
    payload: data,
    summary: {
      lessonNo: data.lesson_no as number,
      title: (data.title as string).trim(),
      exercises: data.exercises.length,
      questions,
      textQuestions,
      maxPoints: data.max_points as number,
      passPoints: data.pass_points as number,
    },
  };
}
