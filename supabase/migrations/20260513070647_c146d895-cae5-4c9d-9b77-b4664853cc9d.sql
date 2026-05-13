
-- Trigger function: notify on chapter completion
CREATE OR REPLACE FUNCTION public.notify_chapter_completed()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_name text;
BEGIN
  IF NEW.status = 'completed' AND (OLD.status IS DISTINCT FROM 'completed') THEN
    SELECT COALESCE(NULLIF(TRIM(CONCAT(first_name, ' ', last_name)), ''), email, 'User')
      INTO v_name FROM public.profiles WHERE id = NEW.user_id;

    INSERT INTO public.admin_alerts (alert_type, severity, user_id, title, message, details, dedup_hash)
    VALUES (
      'chapter_completed',
      'info',
      NEW.user_id,
      'Capitol finalizat: ' || NEW.chapter_id,
      COALESCE(v_name, 'User') || ' a finalizat capitolul „' || NEW.chapter_id || '" cu scor ' || COALESCE(NEW.best_score, 0) || '/10',
      jsonb_build_object('chapter_id', NEW.chapter_id, 'best_score', NEW.best_score, 'attempts', NEW.attempts_count),
      'chapter_completed:' || NEW.user_id::text || ':' || NEW.chapter_id
    )
    ON CONFLICT (dedup_hash) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

-- Trigger function: notify on lockout
CREATE OR REPLACE FUNCTION public.notify_chapter_lockout()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_name text;
BEGIN
  IF NEW.is_locked_out = true AND (OLD.is_locked_out IS DISTINCT FROM true) THEN
    SELECT COALESCE(NULLIF(TRIM(CONCAT(first_name, ' ', last_name)), ''), email, 'User')
      INTO v_name FROM public.profiles WHERE id = NEW.user_id;

    INSERT INTO public.admin_alerts (alert_type, severity, user_id, title, message, details, dedup_hash)
    VALUES (
      'chapter_lockout',
      'warning',
      NEW.user_id,
      'Lockout quiz: ' || NEW.chapter_id,
      COALESCE(v_name, 'User') || ' a fost blocat la capitolul „' || NEW.chapter_id || '" după ' || COALESCE(NEW.consecutive_fails, 3) || ' încercări eșuate',
      jsonb_build_object('chapter_id', NEW.chapter_id, 'consecutive_fails', NEW.consecutive_fails),
      'lockout:' || NEW.user_id::text || ':' || NEW.chapter_id || ':' || extract(epoch from NEW.locked_out_at)::bigint
    )
    ON CONFLICT (dedup_hash) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

-- Trigger function: notify on final exam outcome
CREATE OR REPLACE FUNCTION public.notify_final_exam_outcome()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_name text;
BEGIN
  IF NEW.completed_at IS NOT NULL AND (TG_OP = 'INSERT' OR OLD.completed_at IS NULL) THEN
    SELECT COALESCE(NULLIF(TRIM(CONCAT(first_name, ' ', last_name)), ''), email, 'User')
      INTO v_name FROM public.profiles WHERE id = NEW.user_id;

    IF NEW.passed = true THEN
      INSERT INTO public.admin_alerts (alert_type, severity, user_id, title, message, details, dedup_hash)
      VALUES (
        'final_exam_passed',
        'info',
        NEW.user_id,
        'Examen final PROMOVAT',
        COALESCE(v_name, 'User') || ' a promovat examenul final cu ' || ROUND(NEW.percentage)::text || '% (' || NEW.score || '/' || NEW.total_questions || ')',
        jsonb_build_object('score', NEW.score, 'total', NEW.total_questions, 'percentage', NEW.percentage),
        'exam_passed:' || NEW.id::text
      )
      ON CONFLICT (dedup_hash) DO NOTHING;
    ELSE
      INSERT INTO public.admin_alerts (alert_type, severity, user_id, title, message, details, dedup_hash)
      VALUES (
        'final_exam_failed',
        'warning',
        NEW.user_id,
        'Examen final EȘUAT',
        COALESCE(v_name, 'User') || ' a picat examenul final cu ' || ROUND(NEW.percentage)::text || '% (' || NEW.score || '/' || NEW.total_questions || ')',
        jsonb_build_object('score', NEW.score, 'total', NEW.total_questions, 'percentage', NEW.percentage),
        'exam_failed:' || NEW.id::text
      )
      ON CONFLICT (dedup_hash) DO NOTHING;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

-- Triggers
DROP TRIGGER IF EXISTS trg_notify_chapter_completed ON public.chapter_progress;
CREATE TRIGGER trg_notify_chapter_completed
AFTER UPDATE ON public.chapter_progress
FOR EACH ROW
EXECUTE FUNCTION public.notify_chapter_completed();

DROP TRIGGER IF EXISTS trg_notify_chapter_lockout ON public.chapter_progress;
CREATE TRIGGER trg_notify_chapter_lockout
AFTER UPDATE ON public.chapter_progress
FOR EACH ROW
EXECUTE FUNCTION public.notify_chapter_lockout();

DROP TRIGGER IF EXISTS trg_notify_final_exam_outcome ON public.final_exam_attempts;
CREATE TRIGGER trg_notify_final_exam_outcome
AFTER INSERT OR UPDATE ON public.final_exam_attempts
FOR EACH ROW
EXECUTE FUNCTION public.notify_final_exam_outcome();

-- Make sure dedup_hash is unique (idempotency)
CREATE UNIQUE INDEX IF NOT EXISTS admin_alerts_dedup_hash_unique ON public.admin_alerts(dedup_hash);
