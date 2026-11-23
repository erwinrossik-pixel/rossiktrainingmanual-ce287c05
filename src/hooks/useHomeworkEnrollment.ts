import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

/** True when the signed-in user is enrolled in at least one homework course (drives the sidebar entry). */
export function useHomeworkEnrollment() {
  const { user } = useAuth();
  const query = useQuery({
    queryKey: ["homework-enrollment", user?.id],
    enabled: !!user,
    staleTime: 60 * 1000,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("homework_enrollments")
        .select("course_id")
        .eq("user_id", user!.id);
      if (error) throw error;
      return (data ?? []).map((row) => row.course_id);
    },
  });
  const courseIds = query.data ?? [];
  return { courseIds, enrolled: courseIds.length > 0, loading: query.isLoading };
}
