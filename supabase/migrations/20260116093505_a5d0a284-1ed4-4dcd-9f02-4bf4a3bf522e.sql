
-- Fix overly permissive RLS policies by restricting INSERT to service role only
DROP POLICY IF EXISTS "Service role can insert health checks" ON public.system_health_checks;
DROP POLICY IF EXISTS "Service role can insert error logs" ON public.error_logs;
DROP POLICY IF EXISTS "Service role can insert performance metrics" ON public.performance_metrics;

-- These tables should only be writable by authenticated admins or edge functions (service role)
-- The existing admin policies cover admin access, edge functions use service role which bypasses RLS
