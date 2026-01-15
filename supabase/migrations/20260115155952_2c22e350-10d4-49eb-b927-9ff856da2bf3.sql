-- Clean up all overly permissive RLS policies
-- These policies should only allow service_role access, not authenticated users

-- 1. auto_updates - remove old permissive insert
DROP POLICY IF EXISTS "System can insert auto_updates" ON public.auto_updates;

-- 2. chapter_impacts - remove old permissive policy  
DROP POLICY IF EXISTS "System can manage chapter_impacts" ON public.chapter_impacts;

-- 3. chapter_versions - remove old permissive policy
DROP POLICY IF EXISTS "System can manage chapter_versions" ON public.chapter_versions;

-- 4. cron_job_logs - remove old permissive policy
DROP POLICY IF EXISTS "System can manage cron_job_logs" ON public.cron_job_logs;

-- 5. detected_changes - remove old permissive policy
DROP POLICY IF EXISTS "System can manage detected_changes" ON public.detected_changes;

-- 6. regeneration_jobs - remove old permissive policy
DROP POLICY IF EXISTS "Service role can manage regeneration jobs" ON public.regeneration_jobs;

-- 7. source_check_logs - remove duplicate policies
DROP POLICY IF EXISTS "System can insert source_check_logs" ON public.source_check_logs;

-- 8. update_audit_log - remove duplicate policies
DROP POLICY IF EXISTS "System can insert update_audit_log" ON public.update_audit_log;

-- Note: Policies with "Only service role can..." are intentional for service_role access
-- These use TO service_role which restricts them properly
-- The linter may still flag them but they're secure because service_role is trusted