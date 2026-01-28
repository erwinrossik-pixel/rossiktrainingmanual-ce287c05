-- Function to automatically generate certificate when final exam is passed
CREATE OR REPLACE FUNCTION public.auto_generate_certificate()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_trainee_name TEXT;
  v_avg_score NUMERIC;
  v_total_hours NUMERIC;
  v_chapters_count INTEGER;
  v_quizzes_count INTEGER;
  v_existing_cert UUID;
BEGIN
  -- Only proceed if exam was passed
  IF NEW.passed = false THEN
    RETURN NEW;
  END IF;

  -- Check if certificate already exists for this user
  SELECT id INTO v_existing_cert
  FROM public.certificates
  WHERE user_id = NEW.user_id
  LIMIT 1;

  -- If certificate already exists, skip creation
  IF v_existing_cert IS NOT NULL THEN
    RETURN NEW;
  END IF;

  -- Get trainee name from profile
  SELECT CONCAT(first_name, ' ', last_name) INTO v_trainee_name
  FROM public.profiles
  WHERE id = NEW.user_id;

  -- Calculate average quiz score
  SELECT COALESCE(AVG(best_score), 0) INTO v_avg_score
  FROM public.chapter_progress
  WHERE user_id = NEW.user_id AND status = 'completed';

  -- Count completed chapters
  SELECT COUNT(*) INTO v_chapters_count
  FROM public.chapter_progress
  WHERE user_id = NEW.user_id AND status = 'completed';

  -- Count passed quizzes
  SELECT COUNT(*) INTO v_quizzes_count
  FROM public.chapter_progress
  WHERE user_id = NEW.user_id AND status = 'completed' AND best_score >= 9;

  -- Get total training hours
  SELECT COALESCE(SUM(total_duration) / 3600.0, 0) INTO v_total_hours
  FROM public.training_sessions
  WHERE user_id = NEW.user_id;

  -- Insert certificate
  INSERT INTO public.certificates (
    user_id,
    certificate_code,
    trainee_name,
    issued_at,
    expires_at,
    chapters_completed,
    quizzes_passed,
    average_score,
    total_training_hours,
    final_exam_score,
    final_exam_passed_at,
    final_exam_attempt_id
  ) VALUES (
    NEW.user_id,
    public.generate_certificate_code(),
    v_trainee_name,
    NOW(),
    NOW() + INTERVAL '2 years',
    v_chapters_count,
    v_quizzes_count,
    v_avg_score,
    COALESCE(v_total_hours, 0),
    NEW.percentage,
    NEW.completed_at,
    NEW.id
  );

  RETURN NEW;
END;
$$;

-- Create trigger on final_exam_attempts
DROP TRIGGER IF EXISTS trigger_auto_certificate ON public.final_exam_attempts;

CREATE TRIGGER trigger_auto_certificate
AFTER INSERT ON public.final_exam_attempts
FOR EACH ROW
EXECUTE FUNCTION public.auto_generate_certificate();