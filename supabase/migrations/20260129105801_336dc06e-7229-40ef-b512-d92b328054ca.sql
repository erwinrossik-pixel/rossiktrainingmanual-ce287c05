-- Update function to reset chapter progress only (keep all historical data)
CREATE OR REPLACE FUNCTION public.admin_reset_all_user_training(p_user_id uuid)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_chapters_reset INTEGER;
  v_previous_completed INTEGER;
  v_previous_avg_score NUMERIC;
  v_result JSON;
BEGIN
  -- Check if caller is admin
  IF NOT public.is_admin_user(auth.uid()) THEN
    RAISE EXCEPTION 'Only admins can reset user training data';
  END IF;

  -- Count chapters that were completed (for logging)
  SELECT COUNT(*), COALESCE(AVG(best_score), 0) INTO v_previous_completed, v_previous_avg_score
  FROM public.chapter_progress
  WHERE user_id = p_user_id AND status = 'completed';

  -- Count total chapters to be reset
  SELECT COUNT(*) INTO v_chapters_reset
  FROM public.chapter_progress
  WHERE user_id = p_user_id;

  -- Log this reset action in a new table for audit trail
  INSERT INTO public.training_reset_log (
    user_id,
    reset_by,
    chapters_completed_before,
    avg_score_before,
    reset_at
  ) VALUES (
    p_user_id,
    auth.uid(),
    v_previous_completed,
    v_previous_avg_score,
    NOW()
  );

  -- Delete only chapter_progress entries (NOT quiz attempts, training time, etc.)
  -- All historical data is preserved!
  DELETE FROM public.chapter_progress WHERE user_id = p_user_id;

  -- Initialize first chapter as unlocked (so user can start fresh)
  INSERT INTO public.chapter_progress (
    user_id, 
    chapter_id, 
    status,
    best_score,
    attempts_count,
    consecutive_fails,
    is_locked_out,
    difficulty_level
  )
  SELECT 
    p_user_id,
    c.id,
    'unlocked',
    0,
    0,
    0,
    false,
    1
  FROM public.chapters c
  WHERE c.order_index = 0
  LIMIT 1;

  v_result := json_build_object(
    'success', true,
    'user_id', p_user_id,
    'chapters_reset', v_chapters_reset,
    'previous_completed', v_previous_completed,
    'previous_avg_score', ROUND(v_previous_avg_score, 2),
    'historical_data_preserved', true,
    'reset_by', auth.uid(),
    'reset_at', NOW()
  );
  
  RETURN v_result;
END;
$$;

-- Create audit log table for training resets
CREATE TABLE IF NOT EXISTS public.training_reset_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  reset_by uuid NOT NULL,
  chapters_completed_before INTEGER DEFAULT 0,
  avg_score_before NUMERIC DEFAULT 0,
  reset_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.training_reset_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view reset logs
CREATE POLICY "Admins can view reset logs"
  ON public.training_reset_log
  FOR SELECT
  TO authenticated
  USING (public.is_admin_user(auth.uid()));

-- Only admins can insert reset logs (via the function)
CREATE POLICY "Admins can insert reset logs"
  ON public.training_reset_log
  FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin_user(auth.uid()));

-- Prevent deletion of audit logs
CREATE POLICY "No one can delete reset logs"
  ON public.training_reset_log
  FOR DELETE
  TO authenticated
  USING (false);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_training_reset_log_user ON public.training_reset_log(user_id);
CREATE INDEX IF NOT EXISTS idx_training_reset_log_date ON public.training_reset_log(reset_at DESC);