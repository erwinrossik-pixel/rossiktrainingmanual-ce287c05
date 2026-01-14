-- Create training_time table to store learning time per user per day
CREATE TABLE public.training_time (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  day_number INTEGER NOT NULL CHECK (day_number >= 1 AND day_number <= 5),
  total_seconds INTEGER NOT NULL DEFAULT 0,
  last_start_time TIMESTAMP WITH TIME ZONE,
  is_running BOOLEAN NOT NULL DEFAULT false,
  training_started_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, day_number)
);

-- Enable RLS
ALTER TABLE public.training_time ENABLE ROW LEVEL SECURITY;

-- Users can view their own training time
CREATE POLICY "Users can view own training time"
ON public.training_time
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own training time
CREATE POLICY "Users can insert own training time"
ON public.training_time
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own training time
CREATE POLICY "Users can update own training time"
ON public.training_time
FOR UPDATE
USING (auth.uid() = user_id);

-- Admins can view all training time
CREATE POLICY "Admins can view all training time"
ON public.training_time
FOR SELECT
USING (get_user_role(auth.uid()) = 'admin'::app_role);

-- Create trigger to update updated_at
CREATE TRIGGER update_training_time_updated_at
BEFORE UPDATE ON public.training_time
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for training_time
ALTER PUBLICATION supabase_realtime ADD TABLE public.training_time;