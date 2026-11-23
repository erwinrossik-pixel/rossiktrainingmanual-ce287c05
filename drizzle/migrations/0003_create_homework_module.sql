-- ============================================================
-- Homework module ("Teme")
-- ============================================================

CREATE TABLE public.homework_courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  title text NOT NULL CHECK (length(btrim(title)) > 0),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX homework_courses_company_idx ON public.homework_courses(company_id);

CREATE TABLE public.homework_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES public.homework_courses(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT homework_enrollments_course_user_key UNIQUE (course_id, user_id)
);
CREATE INDEX homework_enrollments_user_idx ON public.homework_enrollments(user_id);

CREATE TABLE public.homework_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES public.homework_courses(id) ON DELETE CASCADE,
  lesson_no integer NOT NULL CHECK (lesson_no >= 1),
  title text NOT NULL CHECK (length(btrim(title)) > 0),
  description text,
  max_points integer NOT NULL CHECK (max_points > 0),
  pass_points integer NOT NULL CHECK (pass_points >= 0),
  due_at timestamptz,
  published boolean NOT NULL DEFAULT false,
  show_solutions boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT homework_assignments_pass_le_max CHECK (pass_points <= max_points),
  CONSTRAINT homework_assignments_course_lesson_key UNIQUE (course_id, lesson_no)
);

CREATE TABLE public.homework_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id uuid NOT NULL REFERENCES public.homework_assignments(id) ON DELETE CASCADE,
  exercise_no integer NOT NULL,
  exercise_title text NOT NULL,
  exercise_intro text,
  show_calc_box boolean NOT NULL DEFAULT false,
  q_key text NOT NULL,
  sort integer NOT NULL DEFAULT 0,
  prompt text NOT NULL,
  type text NOT NULL CHECK (type IN ('choice', 'number', 'text')),
  options jsonb,
  unit text,
  points numeric NOT NULL CHECK (points >= 0),
  CONSTRAINT homework_questions_assignment_key UNIQUE (assignment_id, q_key)
);
CREATE INDEX homework_questions_assignment_idx ON public.homework_questions(assignment_id, sort);

CREATE TABLE public.homework_answer_keys (
  question_id uuid PRIMARY KEY REFERENCES public.homework_questions(id) ON DELETE CASCADE,
  correct jsonb NOT NULL
);

CREATE TABLE public.homework_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id uuid NOT NULL REFERENCES public.homework_assignments(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'submitted', 'graded')),
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  calc_notes jsonb NOT NULL DEFAULT '{}'::jsonb,
  manual_scores jsonb NOT NULL DEFAULT '{}'::jsonb,
  auto_points numeric,
  manual_points numeric,
  total_points numeric,
  feedback text,
  submitted_at timestamptz,
  graded_at timestamptz,
  graded_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT homework_submissions_assignment_user_key UNIQUE (assignment_id, user_id)
);
CREATE INDEX homework_submissions_user_idx ON public.homework_submissions(user_id);

-- ---------- Grants (RLS below decides which rows) ----------
GRANT SELECT, INSERT, UPDATE, DELETE ON public.homework_courses TO authenticated;
GRANT ALL ON public.homework_courses TO service_role;
GRANT SELECT, INSERT, DELETE ON public.homework_enrollments TO authenticated;
GRANT ALL ON public.homework_enrollments TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.homework_assignments TO authenticated;
GRANT ALL ON public.homework_assignments TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.homework_questions TO authenticated;
GRANT ALL ON public.homework_questions TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.homework_answer_keys TO authenticated;
GRANT ALL ON public.homework_answer_keys TO service_role;
GRANT SELECT, INSERT, UPDATE ON public.homework_submissions TO authenticated;
GRANT ALL ON public.homework_submissions TO service_role;

ALTER TABLE public.homework_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.homework_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.homework_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.homework_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.homework_answer_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.homework_submissions ENABLE ROW LEVEL SECURITY;

-- ---------- Helper functions ----------
CREATE OR REPLACE FUNCTION public.homework_course_company(_course uuid)
RETURNS uuid LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT company_id FROM public.homework_courses WHERE id = _course
$$;

CREATE OR REPLACE FUNCTION public.homework_assignment_course(_assignment uuid)
RETURNS uuid LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT course_id FROM public.homework_assignments WHERE id = _assignment
$$;

CREATE OR REPLACE FUNCTION public.homework_question_course(_question uuid)
RETURNS uuid LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT a.course_id
  FROM public.homework_questions q
  JOIN public.homework_assignments a ON a.id = q.assignment_id
  WHERE q.id = _question
$$;

-- Trainer of a course: approved company admin of the course's company, or the master super admin.
CREATE OR REPLACE FUNCTION public.homework_is_course_admin(_course uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.is_super_admin(auth.uid())
      OR EXISTS (
        SELECT 1 FROM public.homework_courses c
        WHERE c.id = _course AND public.is_company_admin(auth.uid(), c.company_id)
      )
$$;

-- Learner of a course: enrolled and still an approved member of the course's company.
CREATE OR REPLACE FUNCTION public.homework_is_enrolled(_course uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.homework_enrollments e
    JOIN public.homework_courses c ON c.id = e.course_id
    WHERE e.course_id = _course
      AND e.user_id = auth.uid()
      AND public.user_belongs_to_company(auth.uid(), c.company_id)
  )
$$;

CREATE OR REPLACE FUNCTION public.homework_learner_can_see_assignment(_assignment uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.homework_assignments a
    WHERE a.id = _assignment AND a.published AND public.homework_is_enrolled(a.course_id)
  )
$$;

-- jsonb_typeof that never returns NULL (missing keys -> 'null')
CREATE OR REPLACE FUNCTION public.homework_jtype(j jsonb)
RETURNS text LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  SELECT COALESCE(jsonb_typeof(j), 'null')
$$;

-- "14,7" / "14.7" / " 14.70 " -> 14.7 ; anything else -> NULL
CREATE OR REPLACE FUNCTION public.homework_parse_number(p text)
RETURNS numeric LANGUAGE plpgsql IMMUTABLE SET search_path = public AS $$
DECLARE v text;
BEGIN
  IF p IS NULL THEN RETURN NULL; END IF;
  v := replace(regexp_replace(p, '\s', '', 'g'), ',', '.');
  IF v ~ '^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$' THEN
    RETURN v::numeric;
  END IF;
  RETURN NULL;
END;
$$;

-- ---------- Policies ----------
-- Courses
CREATE POLICY "Homework courses: trainers and enrolled learners read"
  ON public.homework_courses FOR SELECT TO authenticated
  USING (public.homework_is_course_admin(id) OR public.homework_is_enrolled(id));
CREATE POLICY "Homework courses: company admins create"
  ON public.homework_courses FOR INSERT TO authenticated
  WITH CHECK (public.is_super_admin(auth.uid()) OR public.is_company_admin(auth.uid(), company_id));
CREATE POLICY "Homework courses: company admins update"
  ON public.homework_courses FOR UPDATE TO authenticated
  USING (public.is_super_admin(auth.uid()) OR public.is_company_admin(auth.uid(), company_id))
  WITH CHECK (public.is_super_admin(auth.uid()) OR public.is_company_admin(auth.uid(), company_id));
CREATE POLICY "Homework courses: company admins delete"
  ON public.homework_courses FOR DELETE TO authenticated
  USING (public.is_super_admin(auth.uid()) OR public.is_company_admin(auth.uid(), company_id));

-- Enrollments
CREATE POLICY "Homework enrollments: own or trainer read"
  ON public.homework_enrollments FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.homework_is_course_admin(course_id));
CREATE POLICY "Homework enrollments: trainer adds company members"
  ON public.homework_enrollments FOR INSERT TO authenticated
  WITH CHECK (
    public.homework_is_course_admin(course_id)
    AND public.user_belongs_to_company(user_id, public.homework_course_company(course_id))
  );
CREATE POLICY "Homework enrollments: trainer removes"
  ON public.homework_enrollments FOR DELETE TO authenticated
  USING (public.homework_is_course_admin(course_id));

-- Assignments
CREATE POLICY "Homework assignments: trainer or enrolled learner (published) read"
  ON public.homework_assignments FOR SELECT TO authenticated
  USING (public.homework_is_course_admin(course_id) OR (published AND public.homework_is_enrolled(course_id)));
CREATE POLICY "Homework assignments: trainer creates"
  ON public.homework_assignments FOR INSERT TO authenticated
  WITH CHECK (public.homework_is_course_admin(course_id));
CREATE POLICY "Homework assignments: trainer updates"
  ON public.homework_assignments FOR UPDATE TO authenticated
  USING (public.homework_is_course_admin(course_id))
  WITH CHECK (public.homework_is_course_admin(course_id));
CREATE POLICY "Homework assignments: trainer deletes unpublished"
  ON public.homework_assignments FOR DELETE TO authenticated
  USING (public.homework_is_course_admin(course_id) AND published = false);

-- Questions
CREATE POLICY "Homework questions: trainer or enrolled learner (published) read"
  ON public.homework_questions FOR SELECT TO authenticated
  USING (
    public.homework_is_course_admin(public.homework_assignment_course(assignment_id))
    OR public.homework_learner_can_see_assignment(assignment_id)
  );
CREATE POLICY "Homework questions: trainer manages"
  ON public.homework_questions FOR ALL TO authenticated
  USING (public.homework_is_course_admin(public.homework_assignment_course(assignment_id)))
  WITH CHECK (public.homework_is_course_admin(public.homework_assignment_course(assignment_id)));

-- Answer keys: trainers only. No policy for learners, so they can never read them.
CREATE POLICY "Homework answer keys: trainer only"
  ON public.homework_answer_keys FOR ALL TO authenticated
  USING (public.homework_is_course_admin(public.homework_question_course(question_id)))
  WITH CHECK (public.homework_is_course_admin(public.homework_question_course(question_id)));

-- Submissions
CREATE POLICY "Homework submissions: learner reads own"
  ON public.homework_submissions FOR SELECT TO authenticated
  USING (user_id = auth.uid());
CREATE POLICY "Homework submissions: trainer reads company learners"
  ON public.homework_submissions FOR SELECT TO authenticated
  USING (
    public.can_admin_view_user(user_id)
    AND public.homework_is_course_admin(public.homework_assignment_course(assignment_id))
  );
CREATE POLICY "Homework submissions: learner creates own draft"
  ON public.homework_submissions FOR INSERT TO authenticated
  WITH CHECK (
    user_id = auth.uid() AND status = 'draft'
    AND public.homework_learner_can_see_assignment(assignment_id)
  );
CREATE POLICY "Homework submissions: learner edits own draft"
  ON public.homework_submissions FOR UPDATE TO authenticated
  USING (user_id = auth.uid() AND status = 'draft')
  WITH CHECK (
    user_id = auth.uid() AND status = 'draft'
    AND public.homework_learner_can_see_assignment(assignment_id)
  );
CREATE POLICY "Homework submissions: trainer grades company learners"
  ON public.homework_submissions FOR UPDATE TO authenticated
  USING (
    public.can_admin_view_user(user_id)
    AND public.homework_is_course_admin(public.homework_assignment_course(assignment_id))
  )
  WITH CHECK (
    public.can_admin_view_user(user_id)
    AND public.homework_is_course_admin(public.homework_assignment_course(assignment_id))
  );

-- ---------- Guard: learners never write grading fields; trainers never rewrite answers ----------
CREATE OR REPLACE FUNCTION public.homework_submissions_guard()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  NEW.updated_at := now();
  -- Writes from the homework RPCs or from the server itself are trusted.
  IF COALESCE(current_setting('app.homework_rpc', true), '') = 'on' OR auth.uid() IS NULL THEN
    RETURN NEW;
  END IF;

  IF NEW.user_id = auth.uid() THEN
    IF TG_OP = 'INSERT' THEN
      NEW.status := 'draft';
      NEW.manual_scores := '{}'::jsonb;
      NEW.auto_points := NULL; NEW.manual_points := NULL; NEW.total_points := NULL;
      NEW.feedback := NULL; NEW.submitted_at := NULL; NEW.graded_at := NULL; NEW.graded_by := NULL;
    ELSE
      NEW.assignment_id := OLD.assignment_id; NEW.user_id := OLD.user_id; NEW.status := OLD.status;
      NEW.manual_scores := OLD.manual_scores;
      NEW.auto_points := OLD.auto_points; NEW.manual_points := OLD.manual_points; NEW.total_points := OLD.total_points;
      NEW.feedback := OLD.feedback; NEW.submitted_at := OLD.submitted_at;
      NEW.graded_at := OLD.graded_at; NEW.graded_by := OLD.graded_by;
    END IF;
  ELSIF TG_OP = 'UPDATE' THEN
    NEW.assignment_id := OLD.assignment_id; NEW.user_id := OLD.user_id;
    NEW.answers := OLD.answers; NEW.calc_notes := OLD.calc_notes;
    NEW.auto_points := OLD.auto_points; NEW.submitted_at := OLD.submitted_at;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER homework_submissions_guard
  BEFORE INSERT OR UPDATE ON public.homework_submissions
  FOR EACH ROW EXECUTE FUNCTION public.homework_submissions_guard();

-- ---------- Learner: submit and auto-grade ----------
CREATE OR REPLACE FUNCTION public.submit_homework(p_assignment uuid, p_answers jsonb, p_calc jsonb)
RETURNS json LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_uid uuid := auth.uid();
  v_a public.homework_assignments%ROWTYPE;
  v_sub public.homework_submissions%ROWTYPE;
  v_q record;
  v_answers jsonb := COALESCE(p_answers, '{}'::jsonb);
  v_calc jsonb := COALESCE(p_calc, '{}'::jsonb);
  v_auto numeric := 0;
  v_auto_max numeric := 0;
  v_has_text boolean := false;
  v_raw text;
  v_num numeric;
  v_status text;
BEGIN
  IF v_uid IS NULL THEN RAISE EXCEPTION 'Not authenticated'; END IF;
  IF public.homework_jtype(v_answers) <> 'object' OR public.homework_jtype(v_calc) <> 'object' THEN
    RAISE EXCEPTION 'Invalid answers format';
  END IF;

  SELECT * INTO v_a FROM public.homework_assignments WHERE id = p_assignment;
  IF NOT FOUND OR NOT v_a.published THEN RAISE EXCEPTION 'Homework not available'; END IF;

  IF NOT EXISTS (
    SELECT 1 FROM public.homework_enrollments e
    WHERE e.course_id = v_a.course_id AND e.user_id = v_uid
  ) OR NOT public.user_belongs_to_company(v_uid, public.homework_course_company(v_a.course_id)) THEN
    RAISE EXCEPTION 'Not enrolled in this course';
  END IF;

  SELECT * INTO v_sub FROM public.homework_submissions
  WHERE assignment_id = p_assignment AND user_id = v_uid
  FOR UPDATE;
  IF FOUND AND v_sub.status <> 'draft' THEN
    RAISE EXCEPTION 'Homework already submitted';
  END IF;

  FOR v_q IN
    SELECT q.q_key, q.type, q.points, k.correct
    FROM public.homework_questions q
    LEFT JOIN public.homework_answer_keys k ON k.question_id = q.id
    WHERE q.assignment_id = p_assignment
  LOOP
    IF v_q.type = 'text' THEN
      v_has_text := true;
      CONTINUE;
    END IF;
    v_auto_max := v_auto_max + v_q.points;
    IF v_q.correct IS NULL THEN CONTINUE; END IF;
    v_raw := v_answers ->> v_q.q_key;
    IF v_raw IS NULL OR btrim(v_raw) = '' THEN CONTINUE; END IF;

    IF v_q.type = 'choice' THEN
      IF public.homework_jtype(v_q.correct) = 'array' AND v_q.correct @> jsonb_build_array(v_raw) THEN
        v_auto := v_auto + v_q.points;
      END IF;
    ELSIF v_q.type = 'number' THEN
      v_num := public.homework_parse_number(v_raw);
      IF v_num IS NOT NULL
         AND public.homework_jtype(v_q.correct -> 'value') = 'number'
         AND abs(v_num - (v_q.correct ->> 'value')::numeric)
             <= COALESCE(public.homework_parse_number(v_q.correct ->> 'tolerance'), 0) THEN
        v_auto := v_auto + v_q.points;
      END IF;
    END IF;
  END LOOP;

  v_status := CASE WHEN v_has_text THEN 'submitted' ELSE 'graded' END;

  PERFORM set_config('app.homework_rpc', 'on', true);
  INSERT INTO public.homework_submissions AS s (
    assignment_id, user_id, status, answers, calc_notes, manual_scores,
    auto_points, manual_points, total_points, feedback, submitted_at, graded_at, graded_by
  ) VALUES (
    p_assignment, v_uid, v_status, v_answers, v_calc, '{}'::jsonb,
    v_auto,
    CASE WHEN v_has_text THEN NULL ELSE 0 END,
    CASE WHEN v_has_text THEN NULL ELSE v_auto END,
    NULL, now(),
    CASE WHEN v_has_text THEN NULL ELSE now() END,
    NULL
  )
  ON CONFLICT (assignment_id, user_id) DO UPDATE SET
    status = EXCLUDED.status,
    answers = EXCLUDED.answers,
    calc_notes = EXCLUDED.calc_notes,
    manual_scores = '{}'::jsonb,
    auto_points = EXCLUDED.auto_points,
    manual_points = EXCLUDED.manual_points,
    total_points = EXCLUDED.total_points,
    feedback = NULL,
    submitted_at = EXCLUDED.submitted_at,
    graded_at = EXCLUDED.graded_at,
    graded_by = NULL;
  PERFORM set_config('app.homework_rpc', 'off', true);

  RETURN json_build_object(
    'status', v_status,
    'auto_points', v_auto,
    'auto_max', v_auto_max,
    'needs_manual_grading', v_has_text
  );
END;
$$;

-- ---------- Learner: correct answers after grading, only when the trainer allows it ----------
CREATE OR REPLACE FUNCTION public.get_homework_solutions(p_assignment uuid)
RETURNS TABLE (q_key text, correct jsonb)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF auth.uid() IS NULL THEN RETURN; END IF;
  IF NOT EXISTS (
    SELECT 1
    FROM public.homework_assignments a
    JOIN public.homework_submissions s ON s.assignment_id = a.id AND s.user_id = auth.uid()
    WHERE a.id = p_assignment
      AND a.published AND a.show_solutions
      AND s.status = 'graded'
      AND public.homework_is_enrolled(a.course_id)
  ) THEN
    RETURN;
  END IF;
  RETURN QUERY
    SELECT q.q_key, k.correct
    FROM public.homework_questions q
    JOIN public.homework_answer_keys k ON k.question_id = q.id
    WHERE q.assignment_id = p_assignment;
END;
$$;

-- ---------- Trainer: manual grading ----------
CREATE OR REPLACE FUNCTION public.grade_homework_submission(p_submission uuid, p_manual jsonb, p_feedback text)
RETURNS json LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_sub public.homework_submissions%ROWTYPE;
  v_q record;
  v_manual jsonb := COALESCE(p_manual, '{}'::jsonb);
  v_scores jsonb := '{}'::jsonb;
  v_sum numeric := 0;
  v_pts numeric;
  v_total numeric;
BEGIN
  SELECT * INTO v_sub FROM public.homework_submissions WHERE id = p_submission FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Submission not found'; END IF;
  IF NOT (public.homework_is_course_admin(public.homework_assignment_course(v_sub.assignment_id))
          AND public.can_admin_view_user(v_sub.user_id)) THEN
    RAISE EXCEPTION 'Only trainers of this course can grade';
  END IF;
  IF v_sub.status = 'draft' THEN RAISE EXCEPTION 'Submission is still a draft'; END IF;

  FOR v_q IN
    SELECT q.q_key, q.points FROM public.homework_questions q
    WHERE q.assignment_id = v_sub.assignment_id AND q.type = 'text'
  LOOP
    v_pts := public.homework_parse_number(v_manual ->> v_q.q_key);
    IF v_pts IS NULL THEN
      RAISE EXCEPTION 'Missing points for question %', v_q.q_key;
    END IF;
    IF v_pts < 0 OR v_pts > v_q.points THEN
      RAISE EXCEPTION 'Points for question % must be between 0 and %', v_q.q_key, v_q.points;
    END IF;
    v_scores := v_scores || jsonb_build_object(v_q.q_key, v_pts);
    v_sum := v_sum + v_pts;
  END LOOP;

  v_total := COALESCE(v_sub.auto_points, 0) + v_sum;

  PERFORM set_config('app.homework_rpc', 'on', true);
  UPDATE public.homework_submissions SET
    manual_scores = v_scores,
    manual_points = v_sum,
    total_points = v_total,
    feedback = NULLIF(btrim(COALESCE(p_feedback, '')), ''),
    status = 'graded',
    graded_at = now(),
    graded_by = auth.uid()
  WHERE id = p_submission;
  PERFORM set_config('app.homework_rpc', 'off', true);

  RETURN json_build_object('success', true, 'manual_points', v_sum, 'total_points', v_total);
END;
$$;

-- ---------- Trainer: reopen a submission (back to draft) ----------
CREATE OR REPLACE FUNCTION public.reopen_homework_submission(p_submission uuid)
RETURNS json LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_sub public.homework_submissions%ROWTYPE;
BEGIN
  SELECT * INTO v_sub FROM public.homework_submissions WHERE id = p_submission FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Submission not found'; END IF;
  IF NOT (public.homework_is_course_admin(public.homework_assignment_course(v_sub.assignment_id))
          AND public.can_admin_view_user(v_sub.user_id)) THEN
    RAISE EXCEPTION 'Only trainers of this course can reopen';
  END IF;

  PERFORM set_config('app.homework_rpc', 'on', true);
  UPDATE public.homework_submissions SET
    status = 'draft',
    manual_scores = '{}'::jsonb,
    auto_points = NULL, manual_points = NULL, total_points = NULL,
    feedback = NULL, submitted_at = NULL, graded_at = NULL, graded_by = NULL
  WHERE id = p_submission;
  PERFORM set_config('app.homework_rpc', 'off', true);

  RETURN json_build_object('success', true);
END;
$$;

-- ---------- Import (assignment + questions + answer keys in one transaction) ----------
CREATE OR REPLACE FUNCTION public.homework_import_assignment_internal(p_course uuid, p_payload jsonb)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_aid uuid;
  v_qid uuid;
  v_ex jsonb;
  v_q jsonb;
  v_type text;
  v_key text;
  v_sort integer := 0;
  v_total numeric := 0;
  v_correct jsonb;
  v_tol numeric;
BEGIN
  IF p_payload IS NULL OR public.homework_jtype(p_payload) <> 'object' THEN
    RAISE EXCEPTION 'Invalid JSON: expected an object';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM public.homework_courses WHERE id = p_course) THEN
    RAISE EXCEPTION 'Course not found';
  END IF;
  IF public.homework_jtype(p_payload -> 'lesson_no') <> 'number'
     OR public.homework_jtype(p_payload -> 'max_points') <> 'number'
     OR public.homework_jtype(p_payload -> 'pass_points') <> 'number' THEN
    RAISE EXCEPTION 'lesson_no, max_points and pass_points must be numbers';
  END IF;
  IF COALESCE(btrim(p_payload ->> 'title'), '') = '' THEN
    RAISE EXCEPTION 'title is required';
  END IF;
  IF public.homework_jtype(p_payload -> 'exercises') <> 'array' OR jsonb_array_length(p_payload -> 'exercises') = 0 THEN
    RAISE EXCEPTION 'exercises must be a non-empty array';
  END IF;
  IF EXISTS (SELECT 1 FROM public.homework_assignments
             WHERE course_id = p_course AND lesson_no = (p_payload ->> 'lesson_no')::integer) THEN
    RAISE EXCEPTION 'Lesson % already has a homework in this course', p_payload ->> 'lesson_no';
  END IF;

  INSERT INTO public.homework_assignments (course_id, lesson_no, title, description, max_points, pass_points, published, show_solutions)
  VALUES (
    p_course,
    (p_payload ->> 'lesson_no')::integer,
    btrim(p_payload ->> 'title'),
    NULLIF(btrim(COALESCE(p_payload ->> 'description', '')), ''),
    (p_payload ->> 'max_points')::integer,
    (p_payload ->> 'pass_points')::integer,
    false, false
  )
  RETURNING id INTO v_aid;

  FOR v_ex IN SELECT value FROM jsonb_array_elements(p_payload -> 'exercises') LOOP
    IF public.homework_jtype(v_ex -> 'no') <> 'number' OR COALESCE(btrim(v_ex ->> 'title'), '') = '' THEN
      RAISE EXCEPTION 'Each exercise needs a number "no" and a "title"';
    END IF;
    IF public.homework_jtype(v_ex -> 'questions') <> 'array' OR jsonb_array_length(v_ex -> 'questions') = 0 THEN
      RAISE EXCEPTION 'Exercise % has no questions', v_ex ->> 'no';
    END IF;

    FOR v_q IN SELECT value FROM jsonb_array_elements(v_ex -> 'questions') LOOP
      v_sort := v_sort + 1;
      v_type := v_q ->> 'type';
      v_key := btrim(COALESCE(v_q ->> 'key', ''));
      IF v_key = '' THEN RAISE EXCEPTION 'Question % of exercise % has no key', v_sort, v_ex ->> 'no'; END IF;
      IF COALESCE(btrim(v_q ->> 'prompt'), '') = '' THEN RAISE EXCEPTION 'Question % has no prompt', v_key; END IF;
      IF public.homework_jtype(v_q -> 'points') <> 'number' OR (v_q ->> 'points')::numeric < 0 THEN
        RAISE EXCEPTION 'Question % needs points >= 0', v_key;
      END IF;

      IF v_type = 'choice' THEN
        IF public.homework_jtype(v_q -> 'options') <> 'array' OR jsonb_array_length(v_q -> 'options') < 2 THEN
          RAISE EXCEPTION 'Question % needs at least 2 options', v_key;
        END IF;
        IF EXISTS (SELECT 1 FROM jsonb_array_elements(v_q -> 'options') o WHERE public.homework_jtype(o) <> 'string') THEN
          RAISE EXCEPTION 'Question %: options must be text', v_key;
        END IF;
        IF public.homework_jtype(v_q -> 'correct') <> 'array' OR jsonb_array_length(v_q -> 'correct') = 0 THEN
          RAISE EXCEPTION 'Question % needs a non-empty "correct" list', v_key;
        END IF;
        IF EXISTS (SELECT 1 FROM jsonb_array_elements(v_q -> 'correct') c
                   WHERE NOT ((v_q -> 'options') @> jsonb_build_array(c))) THEN
          RAISE EXCEPTION 'Question %: every correct answer must be one of the options', v_key;
        END IF;
        v_correct := v_q -> 'correct';
      ELSIF v_type = 'number' THEN
        IF public.homework_jtype(v_q -> 'correct') <> 'object' OR public.homework_jtype(v_q -> 'correct' -> 'value') <> 'number' THEN
          RAISE EXCEPTION 'Question % needs "correct": {"value": number, "tolerance": number}', v_key;
        END IF;
        IF (v_q -> 'correct' -> 'tolerance') IS NOT NULL AND public.homework_jtype(v_q -> 'correct' -> 'tolerance') <> 'number' THEN
          RAISE EXCEPTION 'Question %: tolerance must be a number', v_key;
        END IF;
        v_tol := COALESCE((v_q -> 'correct' ->> 'tolerance')::numeric, 0);
        IF v_tol < 0 THEN RAISE EXCEPTION 'Question %: tolerance must be >= 0', v_key; END IF;
        v_correct := jsonb_build_object('value', v_q -> 'correct' -> 'value', 'tolerance', v_tol);
      ELSIF v_type = 'text' THEN
        IF COALESCE(btrim(v_q ->> 'rubric'), '') = '' THEN
          RAISE EXCEPTION 'Question % needs a rubric', v_key;
        END IF;
        v_correct := jsonb_build_object('rubric', v_q ->> 'rubric');
      ELSE
        RAISE EXCEPTION 'Question %: type must be choice, number or text', v_key;
      END IF;

      INSERT INTO public.homework_questions (
        assignment_id, exercise_no, exercise_title, exercise_intro, show_calc_box,
        q_key, sort, prompt, type, options, unit, points
      ) VALUES (
        v_aid,
        (v_ex ->> 'no')::integer,
        btrim(v_ex ->> 'title'),
        NULLIF(btrim(COALESCE(v_ex ->> 'intro', '')), ''),
        COALESCE((v_ex ->> 'show_calc_box')::boolean, false),
        v_key, v_sort, btrim(v_q ->> 'prompt'), v_type,
        CASE WHEN v_type = 'choice' THEN v_q -> 'options' ELSE NULL END,
        NULLIF(btrim(COALESCE(v_q ->> 'unit', '')), ''),
        (v_q ->> 'points')::numeric
      )
      RETURNING id INTO v_qid;

      INSERT INTO public.homework_answer_keys (question_id, correct) VALUES (v_qid, v_correct);
      v_total := v_total + (v_q ->> 'points')::numeric;
    END LOOP;
  END LOOP;

  IF v_total <> (p_payload ->> 'max_points')::numeric THEN
    RAISE EXCEPTION 'Question points add up to %, but max_points is %', v_total, p_payload ->> 'max_points';
  END IF;

  RETURN v_aid;
END;
$$;

CREATE OR REPLACE FUNCTION public.import_homework_assignment(p_course uuid, p_payload jsonb)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.homework_is_course_admin(p_course) THEN
    RAISE EXCEPTION 'Only trainers of this course can import homework';
  END IF;
  RETURN public.homework_import_assignment_internal(p_course, p_payload);
END;
$$;

-- ---------- Function privileges ----------
REVOKE ALL ON FUNCTION public.submit_homework(uuid, jsonb, jsonb) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.submit_homework(uuid, jsonb, jsonb) TO authenticated;
REVOKE ALL ON FUNCTION public.get_homework_solutions(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_homework_solutions(uuid) TO authenticated;
REVOKE ALL ON FUNCTION public.grade_homework_submission(uuid, jsonb, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.grade_homework_submission(uuid, jsonb, text) TO authenticated;
REVOKE ALL ON FUNCTION public.reopen_homework_submission(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.reopen_homework_submission(uuid) TO authenticated;
REVOKE ALL ON FUNCTION public.import_homework_assignment(uuid, jsonb) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.import_homework_assignment(uuid, jsonb) TO authenticated;
REVOKE ALL ON FUNCTION public.homework_import_assignment_internal(uuid, jsonb) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.homework_import_assignment_internal(uuid, jsonb) TO service_role;
REVOKE ALL ON FUNCTION public.homework_submissions_guard() FROM PUBLIC, anon, authenticated;