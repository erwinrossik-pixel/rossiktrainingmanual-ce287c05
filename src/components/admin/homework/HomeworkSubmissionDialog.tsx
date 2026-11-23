import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RotateCcw, Save } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { HomeworkStatusBadge } from "@/components/homework/HomeworkStatusBadge";
import { describeAnswerKey } from "@/components/homework/HomeworkQuestionField";
import { cn } from "@/lib/utils";
import { autoPointsFor, formatPoints, isPassed, parseHomeworkNumber } from "@/lib/homework/grading";
import { useHomeworkT } from "@/lib/homework/i18n";
import {
  groupExercises, mapQuestionRow, parseAnswerKey,
  type HomeworkAnswerKey, type HomeworkAssignment, type HomeworkSubmission,
} from "@/lib/homework/types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  assignment: HomeworkAssignment;
  learnerName: string;
  submission: HomeworkSubmission | null;
  onChanged: () => void;
}

export function HomeworkSubmissionDialog({ open, onOpenChange, assignment, learnerName, submission, onChanged }: Props) {
  const { t, formatDate } = useHomeworkT();
  const [manual, setManual] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState("");
  const [busy, setBusy] = useState(false);
  const [confirmReopen, setConfirmReopen] = useState(false);

  const { data } = useQuery({
    queryKey: ["hw-admin-questions", assignment.id],
    enabled: open,
    queryFn: async () => {
      const { data: rows, error } = await supabase
        .from("homework_questions")
        .select("*")
        .eq("assignment_id", assignment.id)
        .order("exercise_no", { ascending: true })
        .order("sort", { ascending: true });
      if (error) throw error;
      const questions = (rows ?? []).map(mapQuestionRow);
      const { data: keyRows, error: keyError } = await supabase
        .from("homework_answer_keys")
        .select("question_id, correct")
        .in("question_id", questions.map((q) => q.id));
      if (keyError) throw keyError;
      const keys = new Map<string, HomeworkAnswerKey>();
      for (const row of keyRows ?? []) {
        const q = questions.find((x) => x.id === row.question_id);
        const key = q ? parseAnswerKey(q.type, row.correct) : null;
        if (q && key) keys.set(q.q_key, key);
      }
      return { questions, keys };
    },
  });

  useEffect(() => {
    if (!open) return;
    const initial: Record<string, string> = {};
    for (const [k, v] of Object.entries(submission?.manual_scores ?? {})) initial[k] = String(v);
    setManual(initial);
    setFeedback(submission?.feedback ?? "");
  }, [open, submission]);

  const questions = useMemo(() => data?.questions ?? [], [data?.questions]);
  const exercises = useMemo(() => groupExercises(questions), [questions]);
  const textQuestions = questions.filter((q) => q.type === "text");
  const answers = submission?.answers ?? {};
  const canGrade = submission?.status === "submitted" || submission?.status === "graded";

  const manualSum = textQuestions.reduce((s, q) => s + (parseHomeworkNumber(manual[q.q_key]) ?? 0), 0);
  const previewTotal = (submission?.auto_points ?? 0) + manualSum;

  const finalize = async () => {
    if (!submission) return;
    const payload: Record<string, number> = {};
    for (const q of textQuestions) {
      const n = parseHomeworkNumber(manual[q.q_key]);
      if (n === null || n < 0 || n > q.points) {
        toast.error(t("detail.invalidPoints", { q: q.q_key, max: formatPoints(q.points) }));
        return;
      }
      payload[q.q_key] = n;
    }
    setBusy(true);
    const { error } = await supabase.rpc("grade_homework_submission", {
      p_submission: submission.id,
      p_manual: payload,
      p_feedback: feedback,
    });
    setBusy(false);
    if (error) {
      toast.error(t("admin.error", { msg: error.message }));
      return;
    }
    toast.success(t("detail.finalized"));
    onChanged();
    onOpenChange(false);
  };

  const reopen = async () => {
    if (!submission) return;
    setConfirmReopen(false);
    setBusy(true);
    const { error } = await supabase.rpc("reopen_homework_submission", { p_submission: submission.id });
    setBusy(false);
    if (error) {
      toast.error(t("admin.error", { msg: error.message }));
      return;
    }
    toast.success(t("detail.reopened"));
    onChanged();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("detail.title", { name: learnerName, n: assignment.lesson_no })}</DialogTitle>
          <DialogDescription className="flex flex-wrap items-center gap-2">
            <HomeworkStatusBadge status={submission?.status ?? "none"} />
            <span>{assignment.title}</span>
            {submission?.submitted_at && <span>· {t("detail.submittedAt", { date: formatDate(submission.submitted_at) })}</span>}
            {submission?.graded_at && <span>· {t("detail.gradedAt", { date: formatDate(submission.graded_at) })}</span>}
          </DialogDescription>
        </DialogHeader>

        {submission && (
          <div className="grid grid-cols-3 gap-2 rounded-lg border border-border bg-muted/40 p-3 text-center text-sm">
            <div>
              <p className="text-xs text-muted-foreground">{t("detail.auto")}</p>
              <p className="font-semibold text-foreground">{formatPoints(submission.auto_points)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("detail.manual")}</p>
              <p className="font-semibold text-foreground">{canGrade ? formatPoints(manualSum) : "–"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("detail.total")}</p>
              <p className="font-semibold text-foreground">
                {canGrade ? `${formatPoints(previewTotal)}/${assignment.max_points}` : "–"}
                {canGrade && (isPassed(previewTotal, assignment.pass_points) ? ` ✓ ${t("passed")}` : ` ✗ ${t("failed")}`)}
              </p>
            </div>
          </div>
        )}

        {submission?.status === "draft" && (
          <p className="rounded-md border border-warning/40 bg-warning/10 p-3 text-sm text-warning">{t("detail.draftInfo")}</p>
        )}

        <div className="space-y-6">
          {exercises.map((ex) => (
            <section key={ex.no} className="space-y-2">
              <h3 className="font-semibold text-foreground">{t("exercise", { n: ex.no })} — {ex.title}</h3>
              {ex.intro && <p className="text-sm text-muted-foreground">{ex.intro}</p>}
              <ul className="space-y-2">
                {ex.questions.map((q) => {
                  const answer = answers[q.q_key] ?? "";
                  const key = data?.keys.get(q.q_key) ?? null;
                  const pts = autoPointsFor(q, key, answer);
                  return (
                    <li key={q.id} className="space-y-1.5 rounded-md border border-border p-3 text-sm">
                      <p className="font-medium text-foreground">
                        <span className="mr-2 font-mono text-xs text-muted-foreground">{q.q_key}</span>
                        {q.prompt}
                      </p>
                      <p>
                        <span className="text-muted-foreground">{t("detail.answer")}: </span>
                        {answer.trim() ? (
                          <span className="whitespace-pre-line text-foreground">{answer}{q.type === "number" && q.unit ? ` ${q.unit}` : ""}</span>
                        ) : (
                          <span className="italic text-muted-foreground">{t("noAnswer")}</span>
                        )}
                      </p>
                      {key && (
                        <p>
                          <span className="text-muted-foreground">{q.type === "text" ? t("detail.rubric") : t("detail.correct")}: </span>
                          <span className="whitespace-pre-line text-foreground">{describeAnswerKey(key, q.unit, t)}</span>
                        </p>
                      )}
                      {q.type !== "text" ? (
                        <p className={cn("font-medium", pts && pts > 0 ? "text-success" : "text-destructive")}>
                          {pts && pts > 0 ? `✓ ${t("correct")}` : `✗ ${t("wrong")}`} · {formatPoints(pts)}/{formatPoints(q.points)}
                        </p>
                      ) : (
                        <div className="flex items-center gap-2 pt-1">
                          <Label htmlFor={`manual-${q.q_key}`} className="text-xs">
                            {t("detail.manualPoints", { max: formatPoints(q.points) })}
                          </Label>
                          <Input
                            id={`manual-${q.q_key}`}
                            type="text"
                            inputMode="decimal"
                            className="w-24"
                            value={manual[q.q_key] ?? ""}
                            disabled={!canGrade}
                            onChange={(e) => setManual((prev) => ({ ...prev, [q.q_key]: e.target.value }))}
                          />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              {ex.showCalcBox && (
                <div className="rounded-md border border-dashed border-border p-3 text-sm">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">{t("detail.calcNotes")}</p>
                  {submission?.calc_notes[String(ex.no)]?.trim() ? (
                    <p className="whitespace-pre-line text-foreground">{submission.calc_notes[String(ex.no)]}</p>
                  ) : (
                    <p className="italic text-muted-foreground">{t("detail.noCalc")}</p>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>

        {canGrade && (
          <div className="space-y-3 border-t border-border pt-4">
            <div className="space-y-1.5">
              <Label htmlFor="hw-feedback">{t("detail.feedback")}</Label>
              <Textarea id="hw-feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} rows={4} />
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <Button variant="outline" disabled={busy} onClick={() => setConfirmReopen(true)}>
                <RotateCcw className="mr-2 h-4 w-4" />
                {t("detail.reopen")}
              </Button>
              <Button disabled={busy} onClick={finalize}>
                <Save className="mr-2 h-4 w-4" />
                {t("detail.finalize")}
              </Button>
            </div>
          </div>
        )}

        <AlertDialog open={confirmReopen} onOpenChange={setConfirmReopen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t("detail.reopen")}</AlertDialogTitle>
              <AlertDialogDescription>{t("detail.reopenConfirm")}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
              <AlertDialogAction onClick={reopen}>{t("detail.reopen")}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DialogContent>
    </Dialog>
  );
}
