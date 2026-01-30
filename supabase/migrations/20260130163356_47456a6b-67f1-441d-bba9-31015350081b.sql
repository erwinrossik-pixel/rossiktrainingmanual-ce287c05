-- Fix search_path for remaining public functions

-- admin_reset_all_user_training
DROP FUNCTION IF EXISTS public.admin_reset_all_user_training(uuid);
CREATE OR REPLACE FUNCTION public.admin_reset_all_user_training(p_user_id uuid)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_chapters_reset INTEGER;
  v_previous_completed INTEGER;
  v_previous_avg_score NUMERIC;
  v_result JSON;
BEGIN
  IF NOT public.is_admin_user(auth.uid()) THEN
    RAISE EXCEPTION 'Only admins can reset user training data';
  END IF;

  SELECT COUNT(*), COALESCE(AVG(best_score), 0) INTO v_previous_completed, v_previous_avg_score
  FROM public.chapter_progress
  WHERE user_id = p_user_id AND status = 'completed';

  SELECT COUNT(*) INTO v_chapters_reset
  FROM public.chapter_progress
  WHERE user_id = p_user_id;

  INSERT INTO public.training_reset_log (user_id, reset_by, chapters_completed_before, avg_score_before, reset_at)
  VALUES (p_user_id, auth.uid(), v_previous_completed, v_previous_avg_score, NOW());

  DELETE FROM public.chapter_progress WHERE user_id = p_user_id;

  INSERT INTO public.chapter_progress (user_id, chapter_id, status, best_score, attempts_count, consecutive_fails, is_locked_out, difficulty_level)
  SELECT p_user_id, c.id, 'unlocked', 0, 0, 0, false, 1
  FROM public.chapters c WHERE c.order_index = 0 LIMIT 1;

  v_result := json_build_object('success', true, 'user_id', p_user_id, 'chapters_reset', v_chapters_reset,
    'previous_completed', v_previous_completed, 'previous_avg_score', ROUND(v_previous_avg_score, 2),
    'historical_data_preserved', true, 'reset_by', auth.uid(), 'reset_at', NOW());
  RETURN v_result;
END;
$$;

-- admin_reset_quiz  
DROP FUNCTION IF EXISTS public.admin_reset_quiz(uuid, text, text);
CREATE OR REPLACE FUNCTION public.admin_reset_quiz(p_user_id uuid, p_chapter_id text, p_reset_reason text DEFAULT NULL)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_current_progress RECORD;
  v_new_difficulty INTEGER;
  v_result JSON;
BEGIN
  IF NOT public.is_admin_user(auth.uid()) THEN
    RAISE EXCEPTION 'Only admins can reset quizzes';
  END IF;

  SELECT * INTO v_current_progress FROM public.chapter_progress WHERE user_id = p_user_id AND chapter_id = p_chapter_id;

  IF NOT FOUND THEN
    INSERT INTO public.chapter_progress (user_id, chapter_id, status, best_score, attempts_count, reset_count, difficulty_level, last_reset_at, last_reset_by)
    VALUES (p_user_id, p_chapter_id, 'unlocked', 0, 0, 1, 2, NOW(), auth.uid());
    v_new_difficulty := 2;
  ELSE
    v_new_difficulty := LEAST((v_current_progress.difficulty_level + 1), 5);
    
    INSERT INTO public.quiz_reset_history (user_id, chapter_id, reset_by, previous_score, previous_attempts, difficulty_before, difficulty_after, reset_reason)
    VALUES (p_user_id, p_chapter_id, auth.uid(), v_current_progress.best_score, v_current_progress.attempts_count, v_current_progress.difficulty_level, v_new_difficulty, p_reset_reason);
    
    UPDATE public.chapter_progress SET status = 'unlocked', best_score = 0, attempts_count = 0, completed_at = NULL,
      reset_count = COALESCE(reset_count, 0) + 1, difficulty_level = v_new_difficulty, last_reset_at = NOW(), last_reset_by = auth.uid(), updated_at = NOW()
    WHERE user_id = p_user_id AND chapter_id = p_chapter_id;
  END IF;

  v_result := json_build_object('success', true, 'user_id', p_user_id, 'chapter_id', p_chapter_id, 'new_difficulty', v_new_difficulty, 'reset_count', COALESCE(v_current_progress.reset_count, 0) + 1);
  RETURN v_result;
END;
$$;

-- admin_unlock_chapter
DROP FUNCTION IF EXISTS public.admin_unlock_chapter(uuid, text);
CREATE OR REPLACE FUNCTION public.admin_unlock_chapter(p_user_id uuid, p_chapter_id text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_result JSON;
BEGIN
  IF NOT public.is_admin_user(auth.uid()) THEN
    RAISE EXCEPTION 'Only admins can unlock chapters';
  END IF;

  UPDATE public.chapter_progress SET is_locked_out = false, consecutive_fails = 0, unlocked_at = NOW(), unlocked_by = auth.uid(), updated_at = NOW()
  WHERE user_id = p_user_id AND chapter_id = p_chapter_id;

  IF NOT FOUND THEN
    INSERT INTO public.chapter_progress (user_id, chapter_id, status, is_locked_out, unlocked_at, unlocked_by)
    VALUES (p_user_id, p_chapter_id, 'unlocked', false, NOW(), auth.uid());
  END IF;

  v_result := json_build_object('success', true, 'user_id', p_user_id, 'chapter_id', p_chapter_id, 'unlocked_by', auth.uid(), 'unlocked_at', NOW());
  RETURN v_result;
END;
$$;