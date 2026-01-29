-- Fix RLS policies for Governance Dashboard to support company_admin role

-- 1. update_audit_log - allow admins (including company_admin) to SELECT and INSERT
DROP POLICY IF EXISTS "Admins can view update_audit_log" ON public.update_audit_log;
DROP POLICY IF EXISTS "Only service role can insert update_audit_log" ON public.update_audit_log;

CREATE POLICY "Admins can view update_audit_log"
ON public.update_audit_log FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can insert update_audit_log"
ON public.update_audit_log FOR INSERT
TO authenticated
WITH CHECK (public.is_admin_user(auth.uid()));

-- 2. auto_updates - fix to use is_admin_user()
DROP POLICY IF EXISTS "Admins can manage auto_updates" ON public.auto_updates;
DROP POLICY IF EXISTS "Admins can view auto_updates" ON public.auto_updates;

CREATE POLICY "Admins can view auto_updates"
ON public.auto_updates FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can manage auto_updates"
ON public.auto_updates FOR ALL
TO authenticated
USING (public.is_admin_user(auth.uid()))
WITH CHECK (public.is_admin_user(auth.uid()));

-- 3. detected_changes - fix to use is_admin_user()
DROP POLICY IF EXISTS "Admins can view detected_changes" ON public.detected_changes;

CREATE POLICY "Admins can view detected_changes"
ON public.detected_changes FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

-- 4. governance_settings - fix to use is_admin_user()
DROP POLICY IF EXISTS "Admins can manage governance_settings" ON public.governance_settings;
DROP POLICY IF EXISTS "Admins can view governance_settings" ON public.governance_settings;

CREATE POLICY "Admins can view governance_settings"
ON public.governance_settings FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can manage governance_settings"
ON public.governance_settings FOR ALL
TO authenticated
USING (public.is_admin_user(auth.uid()))
WITH CHECK (public.is_admin_user(auth.uid()));

-- 5. chapter_versions - ensure admins can access
DROP POLICY IF EXISTS "Admins can view chapter_versions" ON public.chapter_versions;
DROP POLICY IF EXISTS "Admins can manage chapter_versions" ON public.chapter_versions;

CREATE POLICY "Admins can view chapter_versions"
ON public.chapter_versions FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can manage chapter_versions"
ON public.chapter_versions FOR ALL
TO authenticated
USING (public.is_admin_user(auth.uid()))
WITH CHECK (public.is_admin_user(auth.uid()));