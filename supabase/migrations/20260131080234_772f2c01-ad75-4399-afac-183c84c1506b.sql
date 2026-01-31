
-- Fix all RLS policies that incorrectly use profiles.role instead of user_roles/has_role

-- 1. audio_cache
DROP POLICY IF EXISTS "System can manage audio cache" ON public.audio_cache;
CREATE POLICY "Admins can manage audio cache"
  ON public.audio_cache FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));

-- 2. chapter_media
DROP POLICY IF EXISTS "Admins can manage chapter media" ON public.chapter_media;
CREATE POLICY "Admins can manage chapter media"
  ON public.chapter_media FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));

-- 3. content_analyzer_schedule
DROP POLICY IF EXISTS "Admins can manage schedules" ON public.content_analyzer_schedule;
DROP POLICY IF EXISTS "Admins can view schedules" ON public.content_analyzer_schedule;
CREATE POLICY "Admins can manage schedules"
  ON public.content_analyzer_schedule FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));

-- 4. content_auto_fixer_logs
DROP POLICY IF EXISTS "Admins can manage fixer logs" ON public.content_auto_fixer_logs;
DROP POLICY IF EXISTS "Admins can view fixer logs" ON public.content_auto_fixer_logs;
CREATE POLICY "Admins can manage fixer logs"
  ON public.content_auto_fixer_logs FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));

-- 5. content_visual_analysis
DROP POLICY IF EXISTS "Admins can manage visual analysis" ON public.content_visual_analysis;
DROP POLICY IF EXISTS "Admins can view visual analysis" ON public.content_visual_analysis;
CREATE POLICY "Admins can manage visual analysis"
  ON public.content_visual_analysis FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));

-- 6. ml_predictions
DROP POLICY IF EXISTS "System can manage predictions" ON public.ml_predictions;
CREATE POLICY "Admins can manage predictions"
  ON public.ml_predictions FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));

-- 7. regeneration_jobs
DROP POLICY IF EXISTS "Admins can view all regeneration jobs" ON public.regeneration_jobs;
CREATE POLICY "Admins can manage regeneration jobs"
  ON public.regeneration_jobs FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));

-- 8. video_lessons
DROP POLICY IF EXISTS "Admins can manage video lessons" ON public.video_lessons;
CREATE POLICY "Admins can manage video lessons"
  ON public.video_lessons FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));

-- 9. webinars
DROP POLICY IF EXISTS "Admins can manage webinars" ON public.webinars;
CREATE POLICY "Admins can manage webinars"
  ON public.webinars FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));

-- 10. weekly_challenges
DROP POLICY IF EXISTS "Admins can manage challenges" ON public.weekly_challenges;
CREATE POLICY "Admins can manage challenges"
  ON public.weekly_challenges FOR ALL
  USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.is_super_admin(auth.uid()));
