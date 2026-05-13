-- 1. Fix auto_generate_certificate: use training_time.total_seconds
CREATE OR REPLACE FUNCTION public.auto_generate_certificate()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_trainee_name TEXT;
  v_avg_score NUMERIC;
  v_total_hours NUMERIC;
  v_chapters_count INTEGER;
  v_quizzes_count INTEGER;
  v_existing_cert UUID;
BEGIN
  IF NEW.passed = false THEN
    RETURN NEW;
  END IF;

  SELECT id INTO v_existing_cert FROM public.certificates WHERE user_id = NEW.user_id LIMIT 1;
  IF v_existing_cert IS NOT NULL THEN
    RETURN NEW;
  END IF;

  SELECT CONCAT(first_name, ' ', last_name) INTO v_trainee_name
  FROM public.profiles WHERE id = NEW.user_id;

  SELECT COALESCE(AVG(best_score), 0) INTO v_avg_score
  FROM public.chapter_progress
  WHERE user_id = NEW.user_id AND status = 'completed';

  SELECT COUNT(*) INTO v_chapters_count
  FROM public.chapter_progress
  WHERE user_id = NEW.user_id AND status = 'completed';

  SELECT COUNT(*) INTO v_quizzes_count
  FROM public.chapter_progress
  WHERE user_id = NEW.user_id AND status = 'completed' AND best_score >= 9;

  -- FIX: use training_time.total_seconds (actual timer source) not training_sessions
  SELECT COALESCE(SUM(total_seconds) / 3600.0, 0) INTO v_total_hours
  FROM public.training_time
  WHERE user_id = NEW.user_id;

  INSERT INTO public.certificates (
    user_id, certificate_code, trainee_name, issued_at, expires_at,
    chapters_completed, quizzes_passed, average_score, total_training_hours,
    final_exam_score, final_exam_passed_at, final_exam_attempt_id
  ) VALUES (
    NEW.user_id, public.generate_certificate_code(), v_trainee_name,
    NOW(), NOW() + INTERVAL '2 years',
    v_chapters_count, v_quizzes_count, v_avg_score, COALESCE(v_total_hours, 0),
    NEW.percentage, NEW.completed_at, NEW.id
  );

  RETURN NEW;
END;
$function$;

-- 2. Drop public read policy on weekly_challenges
DROP POLICY IF EXISTS "Anyone can view challenges" ON public.weekly_challenges;

-- 3. Composite indexes for admin analytics
CREATE INDEX IF NOT EXISTS idx_page_views_user_created 
  ON public.page_views(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_chapter_created 
  ON public.quiz_attempts(user_id, chapter_id, created_at DESC);
