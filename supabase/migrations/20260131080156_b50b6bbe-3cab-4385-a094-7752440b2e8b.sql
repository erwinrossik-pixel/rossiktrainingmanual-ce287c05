
-- Fix RLS policies on quiz_sessions to use user_roles table instead of profiles.role
-- Drop old admin policy that checks profiles.role (deprecated)
DROP POLICY IF EXISTS "Admins can view all quiz sessions" ON public.quiz_sessions;

-- Create new admin policy using has_role function (correct approach)
CREATE POLICY "Admins can view all quiz sessions"
  ON public.quiz_sessions FOR SELECT
  USING (
    public.has_role(auth.uid(), 'admin'::app_role)
    OR public.is_super_admin(auth.uid())
    OR public.is_company_admin(auth.uid(), (
      SELECT company_id FROM public.company_users 
      WHERE user_id = quiz_sessions.user_id AND status = 'approved' 
      LIMIT 1
    ))
  );

-- Fix question_performance table as well
DROP POLICY IF EXISTS "Admins can view all question performance" ON public.question_performance;

CREATE POLICY "Admins can view all question performance"
  ON public.question_performance FOR SELECT
  USING (
    auth.uid() = user_id
    OR public.has_role(auth.uid(), 'admin'::app_role)
    OR public.is_super_admin(auth.uid())
  );

-- Fix quiz_attempts if needed (check and update)
DROP POLICY IF EXISTS "Admins can view all quiz attempts" ON public.quiz_attempts;

CREATE POLICY "Admins can view all quiz attempts"
  ON public.quiz_attempts FOR SELECT
  USING (
    auth.uid() = user_id
    OR public.has_role(auth.uid(), 'admin'::app_role)
    OR public.is_super_admin(auth.uid())
  );
