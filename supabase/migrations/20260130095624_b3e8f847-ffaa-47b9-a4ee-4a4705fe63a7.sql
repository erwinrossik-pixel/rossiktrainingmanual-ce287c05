
-- Fix RLS policies for Retention Dashboard (user_retention, retention_logs)
-- Allow company_admin and super_admin to view/manage retention data

-- user_retention: Drop old policy and create new one
DROP POLICY IF EXISTS "Super admins manage retention data" ON public.user_retention;

CREATE POLICY "Admins can manage retention data"
ON public.user_retention
FOR ALL
USING (public.is_admin_user(auth.uid()))
WITH CHECK (public.is_admin_user(auth.uid()));

-- retention_logs: Update policies
DROP POLICY IF EXISTS "Admins can view all logs" ON public.retention_logs;
DROP POLICY IF EXISTS "Admins can insert logs" ON public.retention_logs;
DROP POLICY IF EXISTS "Admins can update logs" ON public.retention_logs;

CREATE POLICY "Admins can view all retention logs"
ON public.retention_logs
FOR SELECT
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can insert retention logs"
ON public.retention_logs
FOR INSERT
WITH CHECK (public.is_admin_user(auth.uid()) OR (auth.uid() = user_id));

CREATE POLICY "Admins can update retention logs"
ON public.retention_logs
FOR UPDATE
USING (public.is_admin_user(auth.uid()) OR (auth.uid() = user_id));

-- cron_job_logs: Fix policy
DROP POLICY IF EXISTS "Admins can view cron_job_logs" ON public.cron_job_logs;

CREATE POLICY "Admins can view cron_job_logs"
ON public.cron_job_logs
FOR SELECT
USING (public.is_admin_user(auth.uid()));

-- backup_logs: Fix policy
DROP POLICY IF EXISTS "Admins can manage backup logs" ON public.backup_logs;

CREATE POLICY "Admins can manage backup logs"
ON public.backup_logs
FOR ALL
USING (public.is_admin_user(auth.uid()))
WITH CHECK (public.is_admin_user(auth.uid()));

-- ai_recommendations: Fix policy
DROP POLICY IF EXISTS "Admins can manage ai_recommendations" ON public.ai_recommendations;

CREATE POLICY "Admins can manage ai_recommendations"
ON public.ai_recommendations
FOR ALL
USING (public.is_admin_user(auth.uid()))
WITH CHECK (public.is_admin_user(auth.uid()));
