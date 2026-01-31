
-- Add missing indexes on user_id columns for performance
CREATE INDEX IF NOT EXISTS idx_error_logs_user_id ON public.error_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_ml_predictions_user_id ON public.ml_predictions(user_id);
CREATE INDEX IF NOT EXISTS idx_social_shares_user_id ON public.social_shares(user_id);
CREATE INDEX IF NOT EXISTS idx_user_registration_requests_user_id ON public.user_registration_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_video_progress_user_id ON public.video_progress(user_id);

-- Add composite indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_chapter ON public.quiz_attempts(user_id, chapter_id);
CREATE INDEX IF NOT EXISTS idx_chapter_progress_user_status ON public.chapter_progress(user_id, status);
CREATE INDEX IF NOT EXISTS idx_training_sessions_user_date ON public.training_sessions(user_id, scheduled_at DESC);
