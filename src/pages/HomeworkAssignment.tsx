import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, CalendarClock, CheckCircle2, Send, XCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { HomeworkStatusBadge } from "@/components/homework/HomeworkStatusBadge";
import { HomeworkQuestionField } from "@/components/homework/HomeworkQuestionField";
import { useHomeworkT } from "@/lib/homework/i18n";
import { formatPoints, isPassed } from "@/lib/homework/grading";
import {
  groupExercises, mapQuestionRow, mapSubmissionRow, parseAnswerKey,
  type HomeworkAnswerKey, type HomeworkAssignment as Assignment,
} from "@/lib/homework/types";

const AUTOSAVE_MS = 2500;
type SaveState = "idle" | "saving" | "saved" | "error";

export default function HomeworkAssignment() {
  const { assignmentId = "" } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user, loading: authLoading } = useAuth();
  const { t, formatDate, formatTime } = useHomeworkT();

  useEffect(() => {
    if (!authLoading && !user) navigate("/auth");
  }, [authLoading, user, navigate]);

  const queryKey = ["homework-assignment", assignmentId, user?.id];
  const { data, isLoading, refetch } = useQuery({
    queryKey,
    enabled: !!user && !!assignmentId,
    staleTime: 0,
    queryFn: async () => {
      const { data: assignment, error } = await supabase
        .from("homework_assignments")
        .select("*")
        .eq("id", assignmentId)
        .eq("published", true)
        .maybeSingle();
      if (error) throw error;
      if (!assignment) return null;
      const { data: enrollment } = await supabase
        .from("homework_enrollments")
        .select("id")
        .eq("course_id", assignment.course_id)
        .eq("user_id", user!.id)
        .maybeSingle();
      if (!enrollment) return null;
      const [{ data: questions, error: qError }, { data: submission, error: sError }] = await Promise.all([
        supabase.from("homework_questions").select("*").eq("assignment_id", assignmentId)
          .order("exercise_no", { ascending: true }).order("sort", { ascending: true }),
        supabase.from("homework_submissions").select("*").eq("assignment_id", assignmentId)
          .eq("user_id", user!.id).maybeSingle(),
      ]);
      if (qError) throw qError;
      if (sError) throw sError;
      return {
        assignment: assignment as Assignment,
        questions: (questions ?? []).map(mapQuestionRow),
        submission: submission ? mapSubmissionRow(submission) : null,
      };
    },
  });

  const assignment = data?.assignment ?? null;
  const questions = useMemo(() => data?.questions ?? [], [data?.questions]);
  const submission = data?.submission ?? null;
  const exercises = useMemo(() => groupExercises(questions), [questions]);
  const status = submission?.status ?? "none";
  const editable = !!assignment && (status === "none" || status === "draft");

  // ---------- local draft state ----------
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [calc, setCalc] = useState<Record<string, string>>({});
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const initialisedFor = useRef<string | null>(null);
  const dirty = useRef(false);
  const latest = useRef({ answers, calc });
  latest.current = { answers, calc };
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!data || initialisedFor.current === `${assignmentId}:${submission?.status ?? "none"}`) return;
    initialisedFor.current = `${assignmentId}:${submission?.status ?? "none"}`;
    setAnswers(submission?.answers ?? {});
    setCalc(submission?.calc_notes ?? {});
    dirty.current = false;
  }, [data, assignmentId, submission]);

  const saveDraft = useCallback(async () => {
    if (!user || !assignment || !dirty.current) return;
    dirty.current = false;
    setSaveState("saving");
    const { error } = await supabase.from("homework_submissions").upsert(
      {
        assignment_id: assignment.id,
        user_id: user.id,
        answers: latest.current.answers,
        calc_notes: latest.current.calc,
      },
      { onConflict: "assignment_id,user_id" },
    );
    if (error) {
      dirty.current = true;
      setSaveState("error");
      return;
    }
    setSaveState("saved");
    setSavedAt(new Date());
  }, [user, assignment]);

  const scheduleSave = useCallback(() => {
    dirty.current = true;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => void saveDraft(), AUTOSAVE_MS);
  }, [saveDraft]);

  // Save pending changes when leaving the page.
  useEffect(() => {
    const flush = () => {
      if (dirty.current) void saveDraft();
    };
    window.addEventListener("beforeunload", flush);
    return () => {
      window.removeEventListener("beforeunload", flush);
      if (timer.current) clearTimeout(timer.current);
      flush();
    };
  }, [saveDraft]);

  const setAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    scheduleSave();
  };
  const setCalcNote = (exerciseNo: number, value: string) => {
    setCalc((prev) => ({ ...prev, [String(exerciseNo)]: value }));
    scheduleSave();
  };

  const unanswered = questions.filter((q) => !(answers[q.q_key] ?? "").trim()).length;
  const autoMax = questions.filter((q) => q.type !== "text").reduce((s, q) => s + q.points, 0);
  const hasText = questions.some((q) => q.type === "text");

  const handleSubmit = async () => {
    if (!assignment) return;
    if (timer.current) clearTimeout(timer.current);
    dirty.current = false;
    setSubmitting(true);
    const { error } = await supabase.rpc("submit_homework", {
      p_assignment: assignment.id,
      p_answers: answers,
      p_calc: calc,
    });
    setSubmitting(false);
    setConfirmOpen(false);
    if (error) {
      toast.error(t("submitError", { msg: error.message }));
      return;
    }
    toast.success(t("submittedTitle"));
    await refetch();
    queryClient.invalidateQueries({ queryKey: ["homework-list"] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ---------- solutions (only after grading, only if allowed) ----------
  const showSolutions = !!assignment?.show_solutions && status === "graded";
  const { data: solutions } = useQuery({
    queryKey: ["homework-solutions", assignmentId, user?.id, status],
    enabled: showSolutions,
    queryFn: async () => {
      const { data: rows, error } = await supabase.rpc("get_homework_solutions", { p_assignment: assignmentId });
      if (error) throw error;
      const map = new Map<string, HomeworkAnswerKey>();
      for (const row of rows ?? []) {
        const q = questions.find((x) => x.q_key === row.q_key);
        const key = q ? parseAnswerKey(q.type, row.correct) : null;
        if (key) map.set(row.q_key, key);
      }
      return map;
    },
  });

  if (authLoading || isLoading) {
    return <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">{t("loading")}</div>;
  }

  if (!assignment) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl space-y-4 p-6 lg:p-10">
          <Button variant="outline" onClick={() => navigate("/teme")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("backToList")}
          </Button>
          <Card><CardContent className="p-6 text-muted-foreground">{t("notFound")}</CardContent></Card>
        </div>
      </div>
    );
  }

  const passed = isPassed(submission?.total_points ?? null, assignment.pass_points);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl space-y-6 p-6 pb-28 lg:p-10 lg:pb-28">
        <div className="flex items-center justify-between gap-4">
          <Button variant="outline" onClick={() => navigate("/teme")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("backToList")}
          </Button>
          <HomeworkStatusBadge status={status} />
        </div>

        <header className="space-y-2">
          <p className="text-sm font-medium text-primary">{t("lesson", { n: assignment.lesson_no })}</p>
          <h1 className="text-2xl font-bold text-foreground">{assignment.title}</h1>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarClock className="h-4 w-4" aria-hidden="true" />
            {assignment.due_at ? t("due", { date: formatDate(assignment.due_at) }) : t("noDue")}
            <span>· {t("passHint", { n: assignment.pass_points })}</span>
          </p>
          {assignment.description && (
            <p className="whitespace-pre-line rounded-lg border border-border bg-muted/40 p-4 text-sm leading-relaxed text-foreground">
              {assignment.description}
            </p>
          )}
        </header>

        {status === "submitted" && (
          <Card className="border-info/40">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg text-info">
                <Send className="h-5 w-5" /> {t("submittedTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              <p className="font-medium text-foreground">
                {t("autoScore", { score: formatPoints(submission?.auto_points), max: formatPoints(autoMax) })}
              </p>
              {hasText && <p className="text-muted-foreground">{t("manualPending")}</p>}
            </CardContent>
          </Card>
        )}

        {status === "graded" && submission && (
          <Card className={passed ? "border-success/40" : "border-destructive/40"}>
            <CardHeader className="pb-2">
              <CardTitle className={`flex items-center gap-2 text-lg ${passed ? "text-success" : "text-destructive"}`}>
                {passed ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                {t("gradedTitle")} — {passed ? t("passed") : t("failed")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-base font-semibold text-foreground">
                {t("total", { score: formatPoints(submission.total_points), max: assignment.max_points })}
              </p>
              <p className="text-muted-foreground">{t("passHint", { n: assignment.pass_points })}</p>
              {submission.feedback && (
                <div className="rounded-md border border-border bg-muted/40 p-3">
                  <p className="mb-1 font-medium text-foreground">{t("feedback")}</p>
                  <p className="whitespace-pre-line text-foreground">{submission.feedback}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {exercises.map((ex) => (
          <section key={ex.no} className="space-y-3">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {t("exercise", { n: ex.no })} — {ex.title}
              </h2>
              {ex.intro && <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ex.intro}</p>}
            </div>
            {ex.questions.map((q) => (
              <HomeworkQuestionField
                key={q.id}
                question={q}
                value={answers[q.q_key] ?? ""}
                onChange={(v) => setAnswer(q.q_key, v)}
                readOnly={!editable}
                solution={showSolutions ? solutions?.get(q.q_key) ?? null : undefined}
              />
            ))}
            {ex.showCalcBox && (
              <div className="space-y-1.5 rounded-lg border border-dashed border-border p-4">
                <Label htmlFor={`calc-${ex.no}`} className="text-sm font-medium text-foreground">
                  {t("calcLabel")} <span className="font-normal text-muted-foreground">({t("optional")})</span>
                </Label>
                <Textarea
                  id={`calc-${ex.no}`}
                  value={calc[String(ex.no)] ?? ""}
                  onChange={(e) => setCalcNote(ex.no, e.target.value)}
                  readOnly={!editable}
                  rows={4}
                />
              </div>
            )}
          </section>
        ))}
      </div>

      {editable && (
        <div className="fixed inset-x-0 bottom-0 border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
            <p data-testid="hw-save-state" className={`text-xs ${saveState === "error" ? "text-destructive" : "text-muted-foreground"}`} aria-live="polite">
              {saveState === "saving" && t("saving")}
              {saveState === "saved" && savedAt && t("saved", { time: formatTime(savedAt) })}
              {saveState === "error" && t("saveError")}
            </p>
            <Button onClick={() => setConfirmOpen(true)} disabled={submitting}>
              <Send className="mr-2 h-4 w-4" />
              {t("submit")}
            </Button>
          </div>
        </div>
      )}

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("submitConfirmTitle")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("submitConfirmBody")}
              {unanswered > 0 && <span className="mt-2 block font-medium text-warning">{t("unanswered", { n: unanswered })}</span>}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={submitting}>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                void handleSubmit();
              }}
              disabled={submitting}
            >
              {submitting ? t("submitting") : t("confirmSubmit")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
