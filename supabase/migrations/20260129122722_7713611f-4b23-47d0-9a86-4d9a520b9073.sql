-- Add foreign key from user_retention to profiles
ALTER TABLE public.user_retention
ADD CONSTRAINT user_retention_user_id_profiles_fkey 
FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;

-- Add foreign key from retention_logs to profiles  
ALTER TABLE public.retention_logs
ADD CONSTRAINT retention_logs_user_id_profiles_fkey 
FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;