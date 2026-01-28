-- Create table for final exam attempts
CREATE TABLE public.final_exam_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL DEFAULT 100,
  percentage NUMERIC(5,2) NOT NULL,
  passed BOOLEAN NOT NULL,
  time_spent_seconds INTEGER,
  wrong_answers JSONB,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.final_exam_attempts ENABLE ROW LEVEL SECURITY;

-- Users can view their own attempts
CREATE POLICY "Users can view own attempts"
  ON public.final_exam_attempts
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own attempts
CREATE POLICY "Users can insert own attempts"
  ON public.final_exam_attempts
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Admins can view all attempts
CREATE POLICY "Admins can view all attempts"
  ON public.final_exam_attempts
  FOR SELECT
  USING (public.is_admin_user(auth.uid()));

-- Create index for faster queries
CREATE INDEX idx_final_exam_attempts_user_id ON public.final_exam_attempts(user_id);
CREATE INDEX idx_final_exam_attempts_completed_at ON public.final_exam_attempts(completed_at DESC);