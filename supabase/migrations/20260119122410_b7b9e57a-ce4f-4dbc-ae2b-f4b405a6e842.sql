-- Fix security warnings: set search_path and update overly permissive policies

-- Fix function search paths
ALTER FUNCTION public.calculate_engagement_score(INTEGER, INTEGER, INTEGER, INTEGER, INTEGER) 
SET search_path = public;

ALTER FUNCTION public.determine_risk_level(INTEGER, NUMERIC) 
SET search_path = public;

-- Replace overly permissive policies with service role based policies
DROP POLICY IF EXISTS "System can manage retention data" ON public.user_retention;
DROP POLICY IF EXISTS "System can manage logs" ON public.retention_logs;

-- For user_retention: allow inserts via trigger/edge function with service role
CREATE POLICY "Admins can insert retention data"
  ON public.user_retention FOR INSERT
  WITH CHECK (public.is_super_admin(auth.uid()));

CREATE POLICY "Admins can update retention data"
  ON public.user_retention FOR UPDATE
  USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Admins can delete retention data"
  ON public.user_retention FOR DELETE
  USING (public.is_super_admin(auth.uid()));

-- For retention_logs: allow system inserts
CREATE POLICY "Admins can insert logs"
  ON public.retention_logs FOR INSERT
  WITH CHECK (public.is_super_admin(auth.uid()) OR auth.uid() = user_id);

CREATE POLICY "Admins can update logs"
  ON public.retention_logs FOR UPDATE
  USING (public.is_super_admin(auth.uid()) OR auth.uid() = user_id);