-- Add user_restart_count column to track user-initiated quiz restarts
ALTER TABLE public.chapter_progress 
ADD COLUMN IF NOT EXISTS user_restart_count INTEGER DEFAULT 0;

-- Add comment for documentation
COMMENT ON COLUMN public.chapter_progress.user_restart_count IS 'Tracks how many times user restarted quiz (applies difficulty increase)';