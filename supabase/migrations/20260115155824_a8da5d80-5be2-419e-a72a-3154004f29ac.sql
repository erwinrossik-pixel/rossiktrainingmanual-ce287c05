-- Fix remaining security issues (continue from previous migration)

-- 7. Fix source_check_logs - drop existing if any then recreate
DROP POLICY IF EXISTS "Admins can view source_check_logs" ON public.source_check_logs;
DROP POLICY IF EXISTS "Only service role can insert source_check_logs" ON public.source_check_logs;
DROP POLICY IF EXISTS "Only service role can update source_check_logs" ON public.source_check_logs;
DROP POLICY IF EXISTS "Only service role can delete source_check_logs" ON public.source_check_logs;

CREATE POLICY "Admins can view source_check_logs"
ON public.source_check_logs
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Only service role can insert source_check_logs"
ON public.source_check_logs
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Only service role can update source_check_logs"
ON public.source_check_logs
FOR UPDATE
TO service_role
USING (true);

CREATE POLICY "Only service role can delete source_check_logs"
ON public.source_check_logs
FOR DELETE
TO service_role
USING (true);

-- 8. Fix update_audit_log
DROP POLICY IF EXISTS "System can manage update_audit_log" ON public.update_audit_log;
DROP POLICY IF EXISTS "Admins can view update_audit_log" ON public.update_audit_log;
DROP POLICY IF EXISTS "Only service role can insert update_audit_log" ON public.update_audit_log;

CREATE POLICY "Admins can view update_audit_log"
ON public.update_audit_log
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Only service role can insert update_audit_log"
ON public.update_audit_log
FOR INSERT
TO service_role
WITH CHECK (true);

-- 9. Fix user_sessions
DROP POLICY IF EXISTS "System can manage user_sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Admins can view all user_sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Users can view own sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Only service role can insert user_sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Only service role can update user_sessions" ON public.user_sessions;

CREATE POLICY "Admins can view all user_sessions"
ON public.user_sessions
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view own sessions"
ON public.user_sessions
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Only service role can insert user_sessions"
ON public.user_sessions
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Only service role can update user_sessions"
ON public.user_sessions
FOR UPDATE
TO service_role
USING (true);

-- 10. Fix user_learning_analytics
DROP POLICY IF EXISTS "System can manage user_learning_analytics" ON public.user_learning_analytics;
DROP POLICY IF EXISTS "Admins can view all user_learning_analytics" ON public.user_learning_analytics;
DROP POLICY IF EXISTS "Users can view own learning_analytics" ON public.user_learning_analytics;
DROP POLICY IF EXISTS "Only service role can manage user_learning_analytics" ON public.user_learning_analytics;

CREATE POLICY "Admins can view all user_learning_analytics"
ON public.user_learning_analytics
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view own learning_analytics"
ON public.user_learning_analytics
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Only service role can manage user_learning_analytics"
ON public.user_learning_analytics
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);