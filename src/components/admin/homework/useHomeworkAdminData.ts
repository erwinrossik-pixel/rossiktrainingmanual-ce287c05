import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { mapSubmissionRow, type HomeworkAssignment, type HomeworkCourse, type HomeworkSubmission } from "@/lib/homework/types";

export interface LearnerInfo {
  userId: string;
  name: string;
  email: string;
}

export interface Enrollment extends LearnerInfo {
  id: string;
  createdAt: string;
}

type ProfileRow = { id: string; first_name: string | null; last_name: string | null; email: string | null };

export const learnerName = (p: ProfileRow | undefined, fallback: string) => {
  const full = `${p?.first_name ?? ""} ${p?.last_name ?? ""}`.trim();
  return full || p?.email || fallback;
};

async function fetchProfiles(ids: string[]): Promise<Map<string, ProfileRow>> {
  if (ids.length === 0) return new Map();
  const { data, error } = await supabase.from("profiles").select("id, first_name, last_name, email").in("id", ids);
  if (error) throw error;
  return new Map((data ?? []).map((p) => [p.id, p]));
}

export const homeworkKeys = {
  courses: ["hw-admin-courses"] as const,
  enrollments: (courseId: string) => ["hw-admin-enrollments", courseId] as const,
  members: (companyId: string) => ["hw-admin-members", companyId] as const,
  assignments: (courseId: string) => ["hw-admin-assignments", courseId] as const,
  submissions: (courseId: string) => ["hw-admin-submissions", courseId] as const,
};

export function useHomeworkCourses(enabled: boolean) {
  return useQuery({
    queryKey: homeworkKeys.courses,
    enabled,
    staleTime: 0,
    queryFn: async () => {
      const { data, error } = await supabase.from("homework_courses").select("*").order("created_at", { ascending: true });
      if (error) throw error;
      return (data ?? []) as HomeworkCourse[];
    },
  });
}

export function useCourseEnrollments(courseId: string | null) {
  return useQuery({
    queryKey: homeworkKeys.enrollments(courseId ?? ""),
    enabled: !!courseId,
    staleTime: 0,
    queryFn: async (): Promise<Enrollment[]> => {
      const { data, error } = await supabase
        .from("homework_enrollments")
        .select("id, user_id, created_at")
        .eq("course_id", courseId!);
      if (error) throw error;
      const profiles = await fetchProfiles((data ?? []).map((e) => e.user_id));
      return (data ?? [])
        .map((e) => {
          const p = profiles.get(e.user_id);
          return { id: e.id, userId: e.user_id, createdAt: e.created_at, name: learnerName(p, e.user_id.slice(0, 8)), email: p?.email ?? "" };
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  });
}

/** Approved members of the course's company (the only users that can be enrolled). */
export function useCompanyMembers(companyId: string | null) {
  return useQuery({
    queryKey: homeworkKeys.members(companyId ?? ""),
    enabled: !!companyId,
    queryFn: async (): Promise<LearnerInfo[]> => {
      const { data, error } = await supabase
        .from("company_users")
        .select("user_id")
        .eq("company_id", companyId!)
        .eq("status", "approved");
      if (error) throw error;
      const ids = [...new Set((data ?? []).map((m) => m.user_id))];
      const profiles = await fetchProfiles(ids);
      return ids
        .map((id) => {
          const p = profiles.get(id);
          return { userId: id, name: learnerName(p, id.slice(0, 8)), email: p?.email ?? "" };
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  });
}

export function useCourseAssignments(courseId: string | null) {
  return useQuery({
    queryKey: homeworkKeys.assignments(courseId ?? ""),
    enabled: !!courseId,
    staleTime: 0,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("homework_assignments")
        .select("*")
        .eq("course_id", courseId!)
        .order("lesson_no", { ascending: true });
      if (error) throw error;
      const assignments = (data ?? []) as HomeworkAssignment[];
      const counts = new Map<string, number>();
      if (assignments.length > 0) {
        const { data: qs, error: qError } = await supabase
          .from("homework_questions")
          .select("assignment_id")
          .in("assignment_id", assignments.map((a) => a.id));
        if (qError) throw qError;
        for (const q of qs ?? []) counts.set(q.assignment_id, (counts.get(q.assignment_id) ?? 0) + 1);
      }
      return { assignments, questionCounts: counts };
    },
  });
}

export function useCourseSubmissions(courseId: string | null, assignmentIds: string[]) {
  return useQuery({
    queryKey: [...homeworkKeys.submissions(courseId ?? ""), assignmentIds.join(",")],
    enabled: !!courseId && assignmentIds.length > 0,
    staleTime: 0,
    queryFn: async (): Promise<HomeworkSubmission[]> => {
      const { data, error } = await supabase.from("homework_submissions").select("*").in("assignment_id", assignmentIds);
      if (error) throw error;
      return (data ?? []).map(mapSubmissionRow);
    },
  });
}
