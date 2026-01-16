-- Add location columns to user_sessions table
ALTER TABLE public.user_sessions
ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION,
ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION,
ADD COLUMN IF NOT EXISTS country TEXT,
ADD COLUMN IF NOT EXISTS city TEXT;

-- Create index for efficient geo queries
CREATE INDEX IF NOT EXISTS idx_user_sessions_location 
ON public.user_sessions (latitude, longitude) 
WHERE latitude IS NOT NULL AND longitude IS NOT NULL;