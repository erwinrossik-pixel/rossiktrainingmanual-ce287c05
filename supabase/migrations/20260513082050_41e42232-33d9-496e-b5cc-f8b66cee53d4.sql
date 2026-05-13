
ALTER TABLE public.quiz_attempts
  ADD COLUMN IF NOT EXISTS client_attempt_id uuid;

CREATE UNIQUE INDEX IF NOT EXISTS quiz_attempts_client_idem_uniq
  ON public.quiz_attempts (user_id, chapter_id, client_attempt_id)
  WHERE client_attempt_id IS NOT NULL;
