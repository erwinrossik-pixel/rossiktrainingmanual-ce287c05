import { useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useHomeworkT } from "@/lib/homework/i18n";
import { buildMatrixCell, buildMatrixCsv, lessonColumns, type MatrixCell } from "@/lib/homework/matrix";
import type { HomeworkCourse } from "@/lib/homework/types";
import { HomeworkSubmissionDialog } from "./HomeworkSubmissionDialog";
import { homeworkKeys, useCourseAssignments, useCourseEnrollments, useCourseSubmissions } from "./useHomeworkAdminData";

const CELL_STYLES: Record<MatrixCell["state"], string> = {
  no_assignment: "text-muted-foreground",
  unpublished: "text-muted-foreground",
  none: "bg-muted/50 text-muted-foreground",
  draft: "bg-warning/10 text-warning",
  submitted: "bg-info/10 text-info",
  graded: "",
};

export function HomeworkMatrix({ course }: { course: HomeworkCourse }) {
  const { t } = useHomeworkT();
  const queryClient = useQueryClient();
  const { data: enrollments = [], isLoading: loadingEnrollments } = useCourseEnrollments(course.id);
  const { data: assignmentData } = useCourseAssignments(course.id);
  const assignments = useMemo(() => assignmentData?.assignments ?? [], [assignmentData]);
  const { data: submissions = [] } = useCourseSubmissions(course.id, assignments.map((a) => a.id));
  const [open, setOpen] = useState<{ cell: MatrixCell; learner: string } | null>(null);

  const lessons = lessonColumns(assignments);
  const byLesson = new Map(assignments.map((a) => [a.lesson_no, a]));
  const subKey = (assignmentId: string, userId: string) => `${assignmentId}:${userId}`;
  const subs = new Map(submissions.map((s) => [subKey(s.assignment_id, s.user_id), s]));

  const rows = enrollments.map((e) => ({
    learner: e,
    cells: lessons.map((n) => {
      const a = byLesson.get(n);
      return buildMatrixCell(a, a ? subs.get(subKey(a.id, e.userId)) : undefined);
    }),
  }));

  const cellText = (cell: MatrixCell) => {
    if (cell.state === "graded") return `${cell.score} ${cell.passed ? "✓" : "✗"} ${t(cell.passed ? "cell.passed" : "cell.failed")}`;
    if (cell.state === "submitted") return `${t("cell.submitted")} (${t("cell.auto", { score: cell.score })})`;
    return t(`cell.${cell.state}`);
  };

  const exportCsv = () => {
    const headers = [t("matrix.learner"), "Email", ...lessons.map((n) => t("lesson", { n }))];
    const csv = buildMatrixCsv(headers, rows.map((r) => ({ name: r.learner.name, email: r.learner.email, cells: r.cells })), cellText);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${course.title.replace(/[^\p{L}\p{N}]+/gu, "_")}_teme.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const refresh = () => queryClient.invalidateQueries({ queryKey: homeworkKeys.submissions(course.id) });

  return (
    <Card>
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3 space-y-0">
        <div>
          <CardTitle className="text-lg">{t("matrix.title")}</CardTitle>
          <CardDescription>{t("matrix.legend")}</CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={exportCsv} disabled={rows.length === 0}>
          <Download className="mr-2 h-4 w-4" />
          {t("matrix.export")}
        </Button>
      </CardHeader>
      <CardContent>
        {loadingEnrollments ? (
          <p className="text-sm text-muted-foreground">{t("loading")}</p>
        ) : rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t("matrix.empty")}</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[180px]">{t("matrix.learner")}</TableHead>
                  {lessons.map((n) => (
                    <TableHead key={n} className="min-w-[120px] text-center">{t("lesson", { n })}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map(({ learner, cells }) => (
                  <TableRow key={learner.userId}>
                    <TableCell>
                      <p className="font-medium text-foreground">{learner.name}</p>
                      <p className="text-xs text-muted-foreground">{learner.email}</p>
                    </TableCell>
                    {cells.map((cell, i) => {
                      const clickable = !!cell.assignment && cell.state !== "unpublished";
                      const graded = cell.state === "graded";
                      return (
                        <TableCell key={i} className="p-1 text-center">
                          <button
                            type="button"
                            disabled={!clickable}
                            onClick={() => clickable && setOpen({ cell, learner: learner.name })}
                            className={cn(
                              "w-full rounded-md px-2 py-1.5 text-xs transition-colors",
                              CELL_STYLES[cell.state],
                              graded && (cell.passed ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"),
                              clickable ? "hover:ring-1 hover:ring-primary/40" : "cursor-default",
                            )}
                          >
                            {graded ? (
                              <>
                                <span className="block text-sm font-semibold">{cell.score} {cell.passed ? "✓" : "✗"}</span>
                                <span className="block">{t(cell.passed ? "cell.passed" : "cell.failed")}</span>
                              </>
                            ) : cell.state === "submitted" ? (
                              <>
                                <span className="block font-semibold">{t("cell.submitted")}</span>
                                <span className="block">{t("cell.auto", { score: cell.score })}</span>
                              </>
                            ) : (
                              <span className="block">{t(`cell.${cell.state}`)}</span>
                            )}
                          </button>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
      {open?.cell.assignment && (
        <HomeworkSubmissionDialog
          open={!!open}
          onOpenChange={(v) => !v && setOpen(null)}
          assignment={open.cell.assignment}
          learnerName={open.learner}
          submission={open.cell.submission}
          onChanged={refresh}
        />
      )}
    </Card>
  );
}
