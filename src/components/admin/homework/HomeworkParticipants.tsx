import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { UserMinus, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useHomeworkT } from "@/lib/homework/i18n";
import type { HomeworkCourse } from "@/lib/homework/types";
import { homeworkKeys, useCompanyMembers, useCourseEnrollments, type Enrollment } from "./useHomeworkAdminData";

export function HomeworkParticipants({ course }: { course: HomeworkCourse }) {
  const { t, formatDate } = useHomeworkT();
  const queryClient = useQueryClient();
  const { data: enrollments = [], isLoading } = useCourseEnrollments(course.id);
  const { data: members = [] } = useCompanyMembers(course.company_id);
  const [selected, setSelected] = useState("");
  const [busy, setBusy] = useState(false);
  const [toRemove, setToRemove] = useState<Enrollment | null>(null);

  const enrolledIds = new Set(enrollments.map((e) => e.userId));
  const available = members.filter((m) => !enrolledIds.has(m.userId));

  const refresh = () => {
    queryClient.invalidateQueries({ queryKey: homeworkKeys.enrollments(course.id) });
    queryClient.invalidateQueries({ queryKey: ["homework-enrollment"] });
  };

  const add = async () => {
    if (!selected) return;
    setBusy(true);
    const { error } = await supabase.from("homework_enrollments").insert({ course_id: course.id, user_id: selected });
    setBusy(false);
    if (error) {
      toast.error(t("admin.error", { msg: error.message }));
      return;
    }
    toast.success(t("participants.added"));
    setSelected("");
    refresh();
  };

  const remove = async () => {
    if (!toRemove) return;
    const { error } = await supabase.from("homework_enrollments").delete().eq("id", toRemove.id);
    setToRemove(null);
    if (error) {
      toast.error(t("admin.error", { msg: error.message }));
      return;
    }
    toast.success(t("participants.removed"));
    refresh();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t("participants.title", { n: enrollments.length })}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          <Select value={selected} onValueChange={setSelected} disabled={available.length === 0}>
            <SelectTrigger className="sm:max-w-md" aria-label={t("participants.pick")}>
              <SelectValue placeholder={available.length === 0 ? t("participants.allEnrolled") : t("participants.pick")} />
            </SelectTrigger>
            <SelectContent>
              {available.map((m) => (
                <SelectItem key={m.userId} value={m.userId}>
                  {m.name}{m.email && m.email !== m.name ? ` · ${m.email}` : ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={add} disabled={!selected || busy}>
            <UserPlus className="mr-2 h-4 w-4" />
            {t("participants.add")}
          </Button>
        </div>

        {isLoading ? (
          <p className="text-sm text-muted-foreground">{t("loading")}</p>
        ) : enrollments.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t("participants.none")}</p>
        ) : (
          <ul className="divide-y divide-border rounded-lg border border-border">
            {enrollments.map((e) => (
              <li key={e.id} className="flex items-center justify-between gap-3 px-4 py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{e.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {e.email} · {t("participants.since", { date: formatDate(e.createdAt, false) })}
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setToRemove(e)} className="text-destructive hover:text-destructive">
                  <UserMinus className="mr-1.5 h-4 w-4" />
                  {t("participants.remove")}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <AlertDialog open={!!toRemove} onOpenChange={(open) => !open && setToRemove(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("participants.remove")}</AlertDialogTitle>
            <AlertDialogDescription>{t("participants.removeConfirm", { name: toRemove?.name ?? "" })}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction onClick={remove}>{t("participants.remove")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
