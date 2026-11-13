-- Admins (platform role or company admin) may only see learner data from companies they belong to.
-- Only the master-company super admin keeps cross-company visibility.
CREATE OR REPLACE FUNCTION public.can_admin_view_user(_owner uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.is_super_admin(auth.uid())
    OR (
      public.is_admin_user(auth.uid())
      AND EXISTS (
        SELECT 1
        FROM public.company_users a
        JOIN public.company_users b ON a.company_id = b.company_id
        WHERE a.user_id = auth.uid()
          AND a.status = 'approved'
          AND b.user_id = _owner
      )
    )
$$;

REVOKE EXECUTE ON FUNCTION public.can_admin_view_user(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.can_admin_view_user(uuid) TO authenticated, service_role;

-- certificates
DROP POLICY IF EXISTS "Platform admins can manage all certificates" ON public.certificates;
CREATE POLICY "Admins manage certificates in their company" ON public.certificates
  FOR ALL TO authenticated
  USING (public.can_admin_view_user(user_id))
  WITH CHECK (public.can_admin_view_user(user_id));

-- community tables
DROP POLICY IF EXISTS "Users view challenge participants in their company" ON public.challenge_participants;
CREATE POLICY "Users view challenge participants in their company" ON public.challenge_participants
  FOR SELECT TO authenticated
  USING ((auth.uid() = user_id) OR public.can_admin_view_user(user_id) OR public.shares_company(auth.uid(), user_id));

DROP POLICY IF EXISTS "Users view discussions in their company" ON public.chapter_discussions;
CREATE POLICY "Users view discussions in their company" ON public.chapter_discussions
  FOR SELECT TO authenticated
  USING ((auth.uid() = user_id) OR public.can_admin_view_user(user_id) OR public.shares_company(auth.uid(), user_id));

DROP POLICY IF EXISTS "Users view likes in their company" ON public.discussion_likes;
CREATE POLICY "Users view likes in their company" ON public.discussion_likes
  FOR SELECT TO authenticated
  USING ((auth.uid() = user_id) OR public.can_admin_view_user(user_id) OR public.shares_company(auth.uid(), user_id));

DROP POLICY IF EXISTS "Users view mentor profiles in their company" ON public.mentor_profiles;
CREATE POLICY "Users view mentor profiles in their company" ON public.mentor_profiles
  FOR SELECT TO authenticated
  USING ((auth.uid() = user_id) OR public.can_admin_view_user(user_id) OR public.shares_company(auth.uid(), user_id));

-- progress / quiz data
DROP POLICY IF EXISTS "Admins can update chapter_progress" ON public.chapter_progress;
CREATE POLICY "Admins can update chapter_progress" ON public.chapter_progress
  FOR UPDATE TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins view all competency scores" ON public.competency_scores;
CREATE POLICY "Admins view company competency scores" ON public.competency_scores
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can view all attempts" ON public.final_exam_attempts;
CREATE POLICY "Admins view company exam attempts" ON public.final_exam_attempts
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can view all question performance" ON public.question_performance;
CREATE POLICY "Admins can view all question performance" ON public.question_performance
  FOR SELECT TO authenticated
  USING ((auth.uid() = user_id) OR public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can view all quiz attempts" ON public.quiz_attempts;
CREATE POLICY "Admins can view all quiz attempts" ON public.quiz_attempts
  FOR SELECT TO authenticated
  USING ((auth.uid() = user_id) OR public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can view all quiz sessions" ON public.quiz_sessions;
CREATE POLICY "Admins view company quiz sessions" ON public.quiz_sessions
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can view all reset history" ON public.quiz_reset_history;
CREATE POLICY "Admins view company reset history" ON public.quiz_reset_history
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can view all simulation attempts" ON public.simulation_attempts;
DROP POLICY IF EXISTS "Admins view all simulation attempts" ON public.simulation_attempts;
CREATE POLICY "Admins view company simulation attempts" ON public.simulation_attempts
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can view reset logs" ON public.training_reset_log;
CREATE POLICY "Admins view company reset logs" ON public.training_reset_log
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can delete training time" ON public.training_time;
CREATE POLICY "Admins can delete training time" ON public.training_time
  FOR DELETE TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can view all gamification data" ON public.user_gamification;
CREATE POLICY "Admins view company gamification data" ON public.user_gamification
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can manage all user_learning_analytics" ON public.user_learning_analytics;
DROP POLICY IF EXISTS "Admins can view all user_learning_analytics" ON public.user_learning_analytics;
CREATE POLICY "Admins manage company learning analytics" ON public.user_learning_analytics
  FOR ALL TO authenticated
  USING (public.can_admin_view_user(user_id))
  WITH CHECK (public.can_admin_view_user(user_id));

-- activity / engagement
DROP POLICY IF EXISTS "Admins can view all page views" ON public.page_views;
CREATE POLICY "Admins view company page views" ON public.page_views
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins view all sessions" ON public.user_sessions;
CREATE POLICY "Admins view company sessions" ON public.user_sessions
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins view all notifications" ON public.user_notifications;
CREATE POLICY "Admins view company notifications" ON public.user_notifications
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can view all retention logs" ON public.retention_logs;
CREATE POLICY "Admins view company retention logs" ON public.retention_logs
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(user_id));

DROP POLICY IF EXISTS "Admins can update retention logs" ON public.retention_logs;
CREATE POLICY "Admins can update retention logs" ON public.retention_logs
  FOR UPDATE TO authenticated
  USING (public.can_admin_view_user(user_id) OR (auth.uid() = user_id));

DROP POLICY IF EXISTS "Admins can manage retention data" ON public.user_retention;
CREATE POLICY "Admins manage company retention data" ON public.user_retention
  FOR ALL TO authenticated
  USING (public.can_admin_view_user(user_id))
  WITH CHECK (public.can_admin_view_user(user_id));

-- profiles
DROP POLICY IF EXISTS "Platform admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins view profiles in their company" ON public.profiles
  FOR SELECT TO authenticated
  USING (public.can_admin_view_user(id));