
-- Performance optimization: Add missing indexes for frequently queried tables

-- quiz_attempts: Very high sequential scans (5746) vs low index scans (4)
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON public.quiz_attempts(user_id);

-- premium_chapters: High sequential scans (16227) vs very low index scans (8)
CREATE INDEX IF NOT EXISTS idx_premium_chapters_chapter_id ON public.premium_chapters(chapter_id);

-- media_progress: Optimize user lookups
CREATE INDEX IF NOT EXISTS idx_media_progress_user_id ON public.media_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_media_progress_user_media ON public.media_progress(user_id, media_id);

-- system_health_checks: Optimize time-based queries
CREATE INDEX IF NOT EXISTS idx_system_health_checks_checked_at ON public.system_health_checks(checked_at DESC);
CREATE INDEX IF NOT EXISTS idx_system_health_checks_status ON public.system_health_checks(status);

-- training_time: Optimize user lookups
CREATE INDEX IF NOT EXISTS idx_training_time_user_id ON public.training_time(user_id);

-- user_sessions: Optimize session lookups (correct column names)
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON public.user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_last_activity ON public.user_sessions(last_activity_at DESC);
