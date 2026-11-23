import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { CheckCircle2, Eye, EyeOff, FileJson, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useHomeworkT } from "@/lib/homework/i18n";
import { validateHomeworkImport, type ImportResult } from "@/lib/homework/importValidation";
import type { HomeworkAssignment, HomeworkCourse } from "@/lib/homework/types";
import { homeworkKeys, useCourseAssignments } from "./useHomeworkAdminData";

/** ISO → value for <input type="datetime-local"> in the browser's time zone. */
const toLocalInput = (iso: string | null) => {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

function AssignmentRow({ assignment, questionCount, onChanged }: { assignment: HomeworkAssignment; questionCount: number; onChanged: () => void }) {
  const { t } = useHomeworkT();
  const [due, setDue] = useState(toLocalInput(assignment.due_at));
  const [busy, setBusy] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const update = async (patch: Partial<Pick<HomeworkAssignment, "published" | "due_at" | "show_solutions">>, okMessage: string) => {
    setBusy(true);
    const { error } = await supabase.from("homework_assignments").update(patch).eq("id", assignment.id);
    setBusy(false);
    if (error) {
      toast.error(t("admin.error", { msg: error.message }));
      return;
    }
    toast.success(okMessage);
    onChanged();
  };

  const remove = async () => {
    setConfirmDelete(false);
    const { error } = await supabase.from("homework_assignments").delete().eq("id", assignment.id).eq("published", false);
    if (error) {
      toast.error(t("admin.error", { msg: error.message }));
      return;
    }
    toast.success(t("assignments.deleted"));
    onChanged();
  };

  const dueChanged = due !== toLocalInput(assignment.due_at);

  return (
    <li className="space-y-3 rounded-lg border border-border p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-semibold text-foreground">
            {t("lesson", { n: assignment.lesson_no })} — {assignment.title}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("assignments.info", { q: questionCount, max: assignment.max_points, pass: assignment.pass_points })}
          </p>
        </div>
        <Badge
          variant="outline"
          className={assignment.published ? "border-success/30 bg-success/10 text-success" : "border-border bg-muted text-muted-foreground"}
        >
          {assignment.published ? `● ${t("assignments.published")}` : `○ ${t("assignments.unpublished")}`}
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex flex-wrap items-end gap-2">
          <div className="space-y-1">
            <Label htmlFor={`due-${assignment.id}`} className="text-xs">{t("assignments.due")}</Label>
            <Input id={`due-${assignment.id}`} type="datetime-local" value={due} onChange={(e) => setDue(e.target.value)} className="w-56" />
          </div>
          <Button
            variant="outline"
            size="sm"
            disabled={busy || !dueChanged}
            onClick={() => update({ due_at: due ? new Date(due).toISOString() : null }, t("assignments.dueSaved"))}
          >
            {t("assignments.saveDue")}
          </Button>
          {assignment.due_at && (
            <Button variant="ghost" size="sm" disabled={busy} onClick={() => { setDue(""); void update({ due_at: null }, t("assignments.dueSaved")); }}>
              {t("assignments.clearDue")}
            </Button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Switch
            id={`sol-${assignment.id}`}
            checked={assignment.show_solutions}
            disabled={busy}
            onCheckedChange={(v) => update({ show_solutions: v }, t("assignments.solutionsSaved"))}
          />
          <Label htmlFor={`sol-${assignment.id}`} className="text-sm">{t("assignments.showSolutions")}</Label>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {assignment.published ? (
          <Button variant="outline" size="sm" disabled={busy} onClick={() => update({ published: false }, t("assignments.unpublishedToast"))}>
            <EyeOff className="mr-1.5 h-4 w-4" />
            {t("assignments.unpublish")}
          </Button>
        ) : (
          <Button size="sm" disabled={busy} onClick={() => update({ published: true }, t("assignments.publishedToast"))}>
            <Eye className="mr-1.5 h-4 w-4" />
            {t("assignments.publish")}
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          disabled={busy || assignment.published}
          title={assignment.published ? t("assignments.deleteOnlyDraft") : undefined}
          onClick={() => setConfirmDelete(true)}
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="mr-1.5 h-4 w-4" />
          {t("assignments.delete")}
        </Button>
      </div>

      <AlertDialog open={confirmDelete} onOpenChange={setConfirmDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("assignments.delete")}</AlertDialogTitle>
            <AlertDialogDescription>{t("assignments.deleteConfirm", { title: assignment.title })}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction onClick={remove}>{t("assignments.delete")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </li>
  );
}

function ImportCard({ course, onImported }: { course: HomeworkCourse; onImported: () => void }) {
  const { t } = useHomeworkT();
  const [text, setText] = useState("");
  const [result, setResult] = useState<ImportResult | null>(null);
  const [busy, setBusy] = useState(false);

  const runImport = async () => {
    const checked = validateHomeworkImport(text);
    setResult(checked);
    if (!checked.ok || !checked.payload) return;
    setBusy(true);
    const { error } = await supabase.rpc("import_homework_assignment", {
      p_course: course.id,
      p_payload: checked.payload as Json,
    });
    setBusy(false);
    if (error) {
      toast.error(t("import.failed", { msg: error.message }));
      return;
    }
    toast.success(t("import.done"));
    setText("");
    setResult(null);
    onImported();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <FileJson className="h-5 w-5" /> {t("import.title")}
        </CardTitle>
        <CardDescription>{t("import.help")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea
          value={text}
          onChange={(e) => { setText(e.target.value); setResult(null); }}
          placeholder={t("import.placeholder")}
          rows={10}
          className="font-mono text-xs"
          aria-label={t("import.title")}
        />
        {result && !result.ok && (
          <ul className="space-y-1 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive" role="alert">
            {result.issues.map((issue, i) => (
              <li key={i}>✗ {t(issue.key, issue.params)}</li>
            ))}
          </ul>
        )}
        {result && result.ok && result.summary && (
          <p className="flex items-start gap-2 rounded-md border border-success/40 bg-success/5 p-3 text-sm text-success">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            {t("import.ok", {
              n: result.summary.lessonNo, title: result.summary.title, ex: result.summary.exercises,
              q: result.summary.questions, text: result.summary.textQuestions,
              max: result.summary.maxPoints, pass: result.summary.passPoints,
            })}
          </p>
        )}
        <div className="flex gap-2">
          <Button variant="outline" disabled={!text.trim()} onClick={() => setResult(validateHomeworkImport(text))}>
            {t("import.validate")}
          </Button>
          <Button disabled={!text.trim() || busy} onClick={runImport}>
            {t("import.import")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function HomeworkAssignmentsAdmin({ course }: { course: HomeworkCourse }) {
  const { t } = useHomeworkT();
  const queryClient = useQueryClient();
  const { data, isLoading } = useCourseAssignments(course.id);
  const refresh = () => queryClient.invalidateQueries({ queryKey: homeworkKeys.assignments(course.id) });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t("assignments.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-sm text-muted-foreground">{t("loading")}</p>
          ) : !data || data.assignments.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t("assignments.empty")}</p>
          ) : (
            <ul className="space-y-3">
              {data.assignments.map((a) => (
                <AssignmentRow
                  key={`${a.id}-${a.due_at}-${a.published}-${a.show_solutions}`}
                  assignment={a}
                  questionCount={data.questionCounts.get(a.id) ?? 0}
                  onChanged={refresh}
                />
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      <ImportCard course={course} onImported={refresh} />
    </div>
  );
}
