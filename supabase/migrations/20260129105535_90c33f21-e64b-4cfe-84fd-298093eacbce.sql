-- Create function to reset all training data for a user
CREATE OR REPLACE FUNCTION public.admin_reset_all_user_training(p_user_id uuid)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_chapters_reset INTEGER;
  v_attempts_deleted INTEGER;
  v_sessions_deleted INTEGER;
  v_result JSON;
BEGIN
  -- Check if caller is admin
  IF NOT public.is_admin_user(auth.uid()) THEN
    RAISE EXCEPTION 'Only admins can reset user training data';
  END IF;

  -- Count chapters to be reset
  SELECT COUNT(*) INTO v_chapters_reset
  FROM public.chapter_progress
  WHERE user_id = p_user_id;

  -- Count attempts to be deleted
  SELECT COUNT(*) INTO v_attempts_deleted
  FROM public.quiz_attempts
  WHERE user_id = p_user_id;

  -- Count training sessions to be deleted
  SELECT COUNT(*) INTO v_sessions_deleted
  FROM public.training_sessions
  WHERE user_id = p_user_id;

  -- Delete all quiz attempts
  DELETE FROM public.quiz_attempts WHERE user_id = p_user_id;

  -- Delete all chapter progress
  DELETE FROM public.chapter_progress WHERE user_id = p_user_id;

  -- Delete training sessions
  DELETE FROM public.training_sessions WHERE user_id = p_user_id;

  -- Delete training time records
  DELETE FROM public.training_time WHERE user_id = p_user_id;

  -- Delete page views for this user
  DELETE FROM public.page_views WHERE user_id = p_user_id;

  -- Delete user sessions
  DELETE FROM public.user_sessions WHERE user_id = p_user_id;

  -- Delete final exam attempts (but keep certificate if exists - that's a separate matter)
  DELETE FROM public.final_exam_attempts WHERE user_id = p_user_id;

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
    'attempts_deleted', v_attempts_deleted,
    'sessions_deleted', v_sessions_deleted,
    'reset_by', auth.uid(),
    'reset_at', NOW()
  );
  
  RETURN v_result;
END;
$$;