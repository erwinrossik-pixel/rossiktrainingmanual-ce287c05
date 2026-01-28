-- Add reset_count and difficulty_level columns to chapter_progress
ALTER TABLE public.chapter_progress 
ADD COLUMN IF NOT EXISTS reset_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS difficulty_level INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS last_reset_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS last_reset_by UUID;

-- Create a table to track quiz reset history for audit purposes
CREATE TABLE IF NOT EXISTS public.quiz_reset_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  chapter_id TEXT NOT NULL,
  reset_by UUID NOT NULL,
  reset_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  previous_score INTEGER,
  previous_attempts INTEGER,
  difficulty_before INTEGER DEFAULT 1,
  difficulty_after INTEGER DEFAULT 2,
  reset_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_quiz_reset_history_user_chapter 
ON public.quiz_reset_history(user_id, chapter_id);

CREATE INDEX IF NOT EXISTS idx_quiz_reset_history_reset_at 
ON public.quiz_reset_history(reset_at DESC);

-- Enable RLS on the new table
ALTER TABLE public.quiz_reset_history ENABLE ROW LEVEL SECURITY;

-- RLS policies for quiz_reset_history
CREATE POLICY "Admins can view all reset history"
  ON public.quiz_reset_history FOR SELECT
  USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can insert reset history"
  ON public.quiz_reset_history FOR INSERT
  WITH CHECK (public.is_admin_user(auth.uid()));

-- Users can view their own reset history
CREATE POLICY "Users can view their own reset history"
  ON public.quiz_reset_history FOR SELECT
  USING (auth.uid() = user_id);

-- Create function to reset a user's quiz for a chapter (admin action)
CREATE OR REPLACE FUNCTION public.admin_reset_quiz(
  p_user_id UUID,
  p_chapter_id TEXT,
  p_reset_reason TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_current_progress RECORD;
  v_new_difficulty INTEGER;
  v_result JSON;
BEGIN
  -- Check if caller is admin
  IF NOT public.is_admin_user(auth.uid()) THEN
    RAISE EXCEPTION 'Only admins can reset quizzes';
  END IF;

  -- Get current progress
  SELECT * INTO v_current_progress
  FROM public.chapter_progress
  WHERE user_id = p_user_id AND chapter_id = p_chapter_id;

  IF NOT FOUND THEN
    -- No progress exists, create initial unlocked state with difficulty 2 (since this is a reset request)
    INSERT INTO public.chapter_progress (
      user_id, chapter_id, status, best_score, attempts_count, 
      reset_count, difficulty_level, last_reset_at, last_reset_by
    ) VALUES (
      p_user_id, p_chapter_id, 'unlocked', 0, 0,
      1, 2, NOW(), auth.uid()
    );
    
    v_new_difficulty := 2;
  ELSE
    -- Calculate new difficulty (max 5)
    v_new_difficulty := LEAST((v_current_progress.difficulty_level + 1), 5);
    
    -- Record reset history
    INSERT INTO public.quiz_reset_history (
      user_id, chapter_id, reset_by, 
      previous_score, previous_attempts,
      difficulty_before, difficulty_after, reset_reason
    ) VALUES (
      p_user_id, p_chapter_id, auth.uid(),
      v_current_progress.best_score, v_current_progress.attempts_count,
      v_current_progress.difficulty_level, v_new_difficulty, p_reset_reason
    );
    
    -- Reset the quiz progress but increment difficulty
    UPDATE public.chapter_progress
    SET 
      status = 'unlocked',
      best_score = 0,
      attempts_count = 0,
      completed_at = NULL,
      reset_count = COALESCE(reset_count, 0) + 1,
      difficulty_level = v_new_difficulty,
      last_reset_at = NOW(),
      last_reset_by = auth.uid(),
      updated_at = NOW()
    WHERE user_id = p_user_id AND chapter_id = p_chapter_id;
  END IF;

  -- Return result
  v_result := json_build_object(
    'success', true,
    'user_id', p_user_id,
    'chapter_id', p_chapter_id,
    'new_difficulty', v_new_difficulty,
    'reset_count', COALESCE(v_current_progress.reset_count, 0) + 1
  );
  
  RETURN v_result;
END;
$$;

-- Function to get user's quiz difficulty for a chapter
CREATE OR REPLACE FUNCTION public.get_quiz_difficulty(
  p_user_id UUID,
  p_chapter_id TEXT
)
RETURNS INTEGER
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(difficulty_level, 1)
  FROM public.chapter_progress
  WHERE user_id = p_user_id AND chapter_id = p_chapter_id
  LIMIT 1;
$$;

-- Update RLS policies for chapter_progress to allow admins to update reset fields
DROP POLICY IF EXISTS "Admins can update chapter_progress" ON public.chapter_progress;

CREATE POLICY "Admins can update chapter_progress"
  ON public.chapter_progress FOR UPDATE
  USING (public.is_admin_user(auth.uid()));

-- Add comment explaining the difficulty levels
COMMENT ON COLUMN public.chapter_progress.difficulty_level IS 
'Quiz difficulty level: 1=normal (4 options, 1 correct), 2=harder (some 2-option questions), 3=harder (some multi-correct), 4=hardest (mixed), 5=expert (maximum difficulty)';