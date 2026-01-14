-- Enable realtime for regeneration_jobs table
ALTER TABLE public.regeneration_jobs REPLICA IDENTITY FULL;

-- Note: The table will be added to supabase_realtime publication automatically
-- when using the Supabase client's realtime subscriptions