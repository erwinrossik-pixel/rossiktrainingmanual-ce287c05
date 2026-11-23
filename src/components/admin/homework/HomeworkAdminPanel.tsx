import { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { NotebookPen, Plus } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useCompany } from "@/contexts/CompanyContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHomeworkT } from "@/lib/homework/i18n";
import { HomeworkParticipants } from "./HomeworkParticipants";
import { HomeworkAssignmentsAdmin } from "./HomeworkAssignmentsAdmin";
import { HomeworkMatrix } from "./HomeworkMatrix";
import { homeworkKeys, useHomeworkCourses } from "./useHomeworkAdminData";

export function HomeworkAdminPanel() {
  const { t } = useHomeworkT();
  const queryClient = useQueryClient();
  const { company, isSuperAdmin, isCompanyAdmin } = useCompany();
  const { data: allCourses = [], isLoading } = useHomeworkCourses(isCompanyAdmin || isSuperAdmin);
  // Company admins manage only their own company's courses (the list can also contain courses they take as learners).
  const courses = useMemo(
    () => (isSuperAdmin ? allCourses : allCourses.filter((c) => c.company_id === company?.id)),
    [allCourses, isSuperAdmin, company?.id],
  );
  const [courseId, setCourseId] = useState<string>("");
  const [newTitle, setNewTitle] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (!courseId && courses.length > 0) setCourseId(courses[0].id);
  }, [courses, courseId]);

  const course = courses.find((c) => c.id === courseId) ?? null;

  const createCourse = async () => {
    if (!company || !newTitle.trim()) return;
    setCreating(true);
    const { data, error } = await supabase
      .from("homework_courses")
      .insert({ company_id: company.id, title: newTitle.trim() })
      .select("id")
      .maybeSingle();
    setCreating(false);
    if (error) {
      toast.error(t("admin.error", { msg: error.message }));
      return;
    }
    toast.success(t("admin.courseCreated"));
    setNewTitle("");
    await queryClient.invalidateQueries({ queryKey: homeworkKeys.courses });
    if (data?.id) setCourseId(data.id);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <NotebookPen className="h-5 w-5 text-primary" /> {t("admin.title")}
          </CardTitle>
          <CardDescription>{t("admin.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label>{t("admin.course")}</Label>
            {isLoading ? (
              <p className="text-sm text-muted-foreground">{t("loading")}</p>
            ) : courses.length === 0 ? (
              <p className="text-sm text-muted-foreground">{t("admin.noCourse")}</p>
            ) : (
              <Select value={courseId} onValueChange={setCourseId}>
                <SelectTrigger aria-label={t("admin.selectCourse")}>
                  <SelectValue placeholder={t("admin.selectCourse")} />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="hw-new-course">{t("admin.newCourse")}</Label>
            <div className="flex gap-2">
              <Input
                id="hw-new-course"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder={t("admin.courseTitle")}
              />
              <Button onClick={createCourse} disabled={!newTitle.trim() || creating || !company}>
                <Plus className="mr-1.5 h-4 w-4" />
                {t("admin.create")}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {course && (
        <Tabs defaultValue="matrix" key={course.id}>
          <TabsList>
            <TabsTrigger value="matrix">{t("admin.sub.matrix")}</TabsTrigger>
            <TabsTrigger value="assignments">{t("admin.sub.assignments")}</TabsTrigger>
            <TabsTrigger value="participants">{t("admin.sub.participants")}</TabsTrigger>
          </TabsList>
          <TabsContent value="matrix" className="mt-4"><HomeworkMatrix course={course} /></TabsContent>
          <TabsContent value="assignments" className="mt-4"><HomeworkAssignmentsAdmin course={course} /></TabsContent>
          <TabsContent value="participants" className="mt-4"><HomeworkParticipants course={course} /></TabsContent>
        </Tabs>
      )}
    </div>
  );
}
