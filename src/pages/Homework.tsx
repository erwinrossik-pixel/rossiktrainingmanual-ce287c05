import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, CalendarClock, ChevronRight, NotebookPen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useHomeworkEnrollment } from "@/hooks/useHomeworkEnrollment";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomeworkStatusBadge } from "@/components/homework/HomeworkStatusBadge";
import { useHomeworkT } from "@/lib/homework/i18n";
import { formatPoints, isPassed } from "@/lib/homework/grading";
import { mapSubmissionRow, type HomeworkAssignment, type HomeworkSubmission } from "@/lib/homework/types";

export default function Homework() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { t, formatDate } = useHomeworkT();
  const { courseIds, loading: enrollmentLoading } = useHomeworkEnrollment();

  useEffect(() => {
    if (!authLoading && !user) navigate("/auth");
  }, [authLoading, user, navigate]);

  const { data, isLoading } = useQuery({
    queryKey: ["homework-list", user?.id, courseIds.join(",")],
    enabled: !!user && courseIds.length > 0,
    staleTime: 0,
    queryFn: async () => {
      const { data: assignments, error } = await supabase
        .from("homework_assignments")
        .select("*")
        .in("course_id", courseIds)
        .eq("published", true)
        .order("lesson_no", { ascending: true });
      if (error) throw error;
      const ids = (assignments ?? []).map((a) => a.id);
      let submissions: HomeworkSubmission[] = [];
      if (ids.length > 0) {
        const { data: subs, error: subError } = await supabase
          .from("homework_submissions")
          .select("*")
          .eq("user_id", user!.id)
          .in("assignment_id", ids);
        if (subError) throw subError;
        submissions = (subs ?? []).map(mapSubmissionRow);
      }
      return { assignments: (assignments ?? []) as HomeworkAssignment[], submissions };
    },
  });

  const loading = authLoading || enrollmentLoading || (courseIds.length > 0 && isLoading);
  const assignments = data?.assignments ?? [];
  const byAssignment = new Map((data?.submissions ?? []).map((s) => [s.assignment_id, s]));

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl p-6 lg:p-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-accent p-2.5 text-accent-foreground">
              <NotebookPen className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{t("list.title")}</h1>
              <p className="text-sm text-muted-foreground">{t("list.subtitle")}</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("back")}
          </Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground">{t("loading")}</p>
        ) : courseIds.length === 0 ? (
          <Card><CardContent className="p-6 text-muted-foreground">{t("list.notEnrolled")}</CardContent></Card>
        ) : assignments.length === 0 ? (
          <Card><CardContent className="p-6 text-muted-foreground">{t("list.empty")}</CardContent></Card>
        ) : (
          <ul className="space-y-3">
            {assignments.map((a) => {
              const sub = byAssignment.get(a.id);
              const status = sub?.status ?? "none";
              const overdue = !!a.due_at && new Date(a.due_at) < new Date() && (status === "none" || status === "draft");
              return (
                <li key={a.id}>
                  <button
                    type="button"
                    onClick={() => navigate(`/teme/${a.id}`)}
                    className="w-full rounded-xl border border-border bg-card p-4 text-left shadow-sm transition-colors hover:border-primary/40 hover:bg-accent/40"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0 space-y-1">
                        <p className="font-semibold text-foreground">
                          {t("lesson", { n: a.lesson_no })} — {a.title}
                        </p>
                        <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                          <CalendarClock className="h-4 w-4" aria-hidden="true" />
                          {a.due_at ? t("due", { date: formatDate(a.due_at) }) : t("noDue")}
                          {overdue && <span className="font-medium text-destructive">· {t("overdue")}</span>}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-1.5">
                        <HomeworkStatusBadge status={status} />
                        {sub?.status === "graded" && (
                          <span className="text-sm font-medium text-foreground">
                            {t("score", { score: formatPoints(sub.total_points), max: a.max_points })}{" "}
                            {isPassed(sub.total_points, a.pass_points) ? `✓ ${t("passed")}` : `✗ ${t("failed")}`}
                          </span>
                        )}
                      </div>
                      <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
