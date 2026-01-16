-- Enable realtime for user_sessions table
ALTER PUBLICATION supabase_realtime ADD TABLE public.user_sessions;

-- Enable realtime for page_views table
ALTER PUBLICATION supabase_realtime ADD TABLE public.page_views;

-- Enable realtime for quiz_attempts table (already might be enabled, but ensure it)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND schemaname = 'public' 
    AND tablename = 'quiz_attempts'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.quiz_attempts;
  END IF;
END $$;