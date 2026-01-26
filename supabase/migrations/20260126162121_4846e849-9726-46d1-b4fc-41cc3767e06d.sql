-- Security hardening batch 2: restrict company_users to own + admin, tighten other flagged tables

--------------------------------------------
-- 1) company_users: remove duplicate/redundant policies, keep strict access
--------------------------------------------
DROP POLICY IF EXISTS "Company admins can manage company users" ON public.company_users;
DROP POLICY IF EXISTS "Company admins manage their users" ON public.company_users;
DROP POLICY IF EXISTS "Super admins can manage all company users" ON public.company_users;
DROP POLICY IF EXISTS "Super admins manage all company users" ON public.company_users;
DROP POLICY IF EXISTS "Users can update own membership" ON public.company_users;
DROP POLICY IF EXISTS "Users can view own company membership" ON public.company_users;
DROP POLICY IF EXISTS "Users can view their own membership" ON public.company_users;
DROP POLICY IF EXISTS "Users view colleagues in their company" ON public.company_users;

-- Users see only their own membership
CREATE POLICY "Users can view own membership"
ON public.company_users
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Users may update their own (non-role fields; role changes controlled elsewhere)
CREATE POLICY "Users can update own membership"
ON public.company_users
FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Company admins manage users in their company
CREATE POLICY "Company admins manage company users"
ON public.company_users
FOR ALL
TO authenticated
USING (public.is_company_admin(auth.uid(), company_id))
WITH CHECK (public.is_company_admin(auth.uid(), company_id));

-- Super admins manage all
CREATE POLICY "Super admins manage all company users"
ON public.company_users
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

--------------------------------------------
-- 2) user_2fa: tighten to authenticated only
--------------------------------------------
DROP POLICY IF EXISTS "Users can manage own 2fa" ON public.user_2fa;
DROP POLICY IF EXISTS "Users can view own 2fa" ON public.user_2fa;

CREATE POLICY "Users manage own 2fa"
ON public.user_2fa
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

--------------------------------------------
-- 3) user_sessions: drop duplicates, keep authenticated + service_role
--------------------------------------------
DROP POLICY IF EXISTS "Admins can view all user_sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Block anonymous access to user_sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Super admins can view all sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Users can insert their own sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Users can only view own sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Users can update their own sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Users can view their own sessions" ON public.user_sessions;

CREATE POLICY "Users view own sessions"
ON public.user_sessions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users insert own sessions"
ON public.user_sessions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own sessions"
ON public.user_sessions
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins view all sessions"
ON public.user_sessions
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

--------------------------------------------
-- 4) push_subscriptions: tighten to authenticated
--------------------------------------------
DROP POLICY IF EXISTS "Users can create their own subscriptions" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Users can delete their own subscriptions" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Users can update their own subscriptions" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Users can view their own subscriptions" ON public.push_subscriptions;

CREATE POLICY "Users manage own push subscriptions"
ON public.push_subscriptions
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

--------------------------------------------
-- 5) quiz_attempts: tighten to authenticated, remove anon policy
--------------------------------------------
DROP POLICY IF EXISTS "Block anonymous access to quiz_attempts" ON public.quiz_attempts;
DROP POLICY IF EXISTS "Admins can view all attempts" ON public.quiz_attempts;
DROP POLICY IF EXISTS "Company admins view company attempts" ON public.quiz_attempts;
DROP POLICY IF EXISTS "Super admins view all attempts" ON public.quiz_attempts;
DROP POLICY IF EXISTS "Users can insert own attempts" ON public.quiz_attempts;
DROP POLICY IF EXISTS "Users can view own attempts" ON public.quiz_attempts;

CREATE POLICY "Users view own quiz attempts"
ON public.quiz_attempts
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users insert own quiz attempts"
ON public.quiz_attempts
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Company admins view company quiz attempts"
ON public.quiz_attempts
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.company_users cu_admin
    JOIN public.company_users cu_target ON cu_admin.company_id = cu_target.company_id
    WHERE cu_admin.user_id = auth.uid()
      AND cu_admin.role IN ('company_admin','super_admin')
      AND cu_admin.status = 'approved'
      AND cu_target.user_id = quiz_attempts.user_id
  )
);

CREATE POLICY "Super admins view all quiz attempts"
ON public.quiz_attempts
FOR SELECT
TO authenticated
USING (public.is_super_admin(auth.uid()));

--------------------------------------------
-- 6) chapter_progress: tighten to authenticated
--------------------------------------------
DROP POLICY IF EXISTS "Block anonymous access to chapter_progress" ON public.chapter_progress;
DROP POLICY IF EXISTS "Admins can view all progress" ON public.chapter_progress;
DROP POLICY IF EXISTS "Company admins view company progress" ON public.chapter_progress;
DROP POLICY IF EXISTS "Super admins view all progress" ON public.chapter_progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON public.chapter_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON public.chapter_progress;
DROP POLICY IF EXISTS "Users can view own progress" ON public.chapter_progress;

CREATE POLICY "Users view own chapter progress"
ON public.chapter_progress
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users insert own chapter progress"
ON public.chapter_progress
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own chapter progress"
ON public.chapter_progress
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Company admins view company chapter progress"
ON public.chapter_progress
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.company_users cu_admin
    JOIN public.company_users cu_target ON cu_admin.company_id = cu_target.company_id
    WHERE cu_admin.user_id = auth.uid()
      AND cu_admin.role IN ('company_admin','super_admin')
      AND cu_admin.status = 'approved'
      AND cu_target.user_id = chapter_progress.user_id
  )
);

CREATE POLICY "Super admins view all chapter progress"
ON public.chapter_progress
FOR SELECT
TO authenticated
USING (public.is_super_admin(auth.uid()));

--------------------------------------------
-- 7) bookmarked_questions: tighten to authenticated
--------------------------------------------
DROP POLICY IF EXISTS "Admins can view all bookmarks" ON public.bookmarked_questions;
DROP POLICY IF EXISTS "Users can create their own bookmarks" ON public.bookmarked_questions;
DROP POLICY IF EXISTS "Users can delete their own bookmarks" ON public.bookmarked_questions;
DROP POLICY IF EXISTS "Users can update their own bookmarks" ON public.bookmarked_questions;
DROP POLICY IF EXISTS "Users can view their own bookmarks" ON public.bookmarked_questions;

CREATE POLICY "Users manage own bookmarks"
ON public.bookmarked_questions
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

--------------------------------------------
-- 8) user_notifications: tighten to authenticated
--------------------------------------------
DROP POLICY IF EXISTS "Admins can view all notifications" ON public.user_notifications;
DROP POLICY IF EXISTS "Users can delete their own notifications" ON public.user_notifications;
DROP POLICY IF EXISTS "Users can insert their own notifications" ON public.user_notifications;
DROP POLICY IF EXISTS "Users can update their own notifications" ON public.user_notifications;
DROP POLICY IF EXISTS "Users can view their own notifications" ON public.user_notifications;

CREATE POLICY "Users manage own notifications"
ON public.user_notifications
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins view all notifications"
ON public.user_notifications
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

--------------------------------------------
-- 9) training_time: tighten to authenticated
--------------------------------------------
DROP POLICY IF EXISTS "Block anonymous access to training_time" ON public.training_time;
DROP POLICY IF EXISTS "Admins can delete training time" ON public.training_time;
DROP POLICY IF EXISTS "Admins can view all training time" ON public.training_time;
DROP POLICY IF EXISTS "Company admins view company training time" ON public.training_time;
DROP POLICY IF EXISTS "Super admins view all training time" ON public.training_time;
DROP POLICY IF EXISTS "Users can insert own training time" ON public.training_time;
DROP POLICY IF EXISTS "Users can update own training time" ON public.training_time;
DROP POLICY IF EXISTS "Users can view own training time" ON public.training_time;

CREATE POLICY "Users view own training time"
ON public.training_time
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users insert own training time"
ON public.training_time
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own training time"
ON public.training_time
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Company admins view company training time"
ON public.training_time
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.company_users cu_admin
    JOIN public.company_users cu_target ON cu_admin.company_id = cu_target.company_id
    WHERE cu_admin.user_id = auth.uid()
      AND cu_admin.role IN ('company_admin','super_admin')
      AND cu_admin.status = 'approved'
      AND cu_target.user_id = training_time.user_id
  )
);

CREATE POLICY "Super admins view all training time"
ON public.training_time
FOR SELECT
TO authenticated
USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Admins can delete training time"
ON public.training_time
FOR DELETE
TO authenticated
USING (public.is_admin_user(auth.uid()));

--------------------------------------------
-- 10) learning_goals: tighten to authenticated
--------------------------------------------
DROP POLICY IF EXISTS "Users can create their own goals" ON public.learning_goals;
DROP POLICY IF EXISTS "Users can delete their own goals" ON public.learning_goals;
DROP POLICY IF EXISTS "Users can update their own goals" ON public.learning_goals;
DROP POLICY IF EXISTS "Users can view their own goals" ON public.learning_goals;

CREATE POLICY "Users manage own learning goals"
ON public.learning_goals
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

--------------------------------------------
-- 11) competency_scores: tighten to authenticated
--------------------------------------------
DROP POLICY IF EXISTS "Admins can view all scores" ON public.competency_scores;
DROP POLICY IF EXISTS "Users can update own scores" ON public.competency_scores;
DROP POLICY IF EXISTS "Users can upsert own scores" ON public.competency_scores;
DROP POLICY IF EXISTS "Users can view own scores" ON public.competency_scores;

CREATE POLICY "Users manage own competency scores"
ON public.competency_scores
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins view all competency scores"
ON public.competency_scores
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

--------------------------------------------
-- 12) user_retention: tighten to authenticated (super_admin only manage)
--------------------------------------------
DROP POLICY IF EXISTS "Admins can delete retention data" ON public.user_retention;
DROP POLICY IF EXISTS "Admins can insert retention data" ON public.user_retention;
DROP POLICY IF EXISTS "Admins can update retention data" ON public.user_retention;
DROP POLICY IF EXISTS "Admins can view all retention data" ON public.user_retention;
DROP POLICY IF EXISTS "Users can view own retention data" ON public.user_retention;

CREATE POLICY "Users view own retention data"
ON public.user_retention
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Super admins manage retention data"
ON public.user_retention
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

--------------------------------------------
-- 13) simulation_attempts: tighten to authenticated
--------------------------------------------
DROP POLICY IF EXISTS "Admins can view all simulation attempts" ON public.simulation_attempts;
DROP POLICY IF EXISTS "Users can insert their own simulation attempts" ON public.simulation_attempts;
DROP POLICY IF EXISTS "Users can view their own simulation attempts" ON public.simulation_attempts;

CREATE POLICY "Users manage own simulation attempts"
ON public.simulation_attempts
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins view all simulation attempts"
ON public.simulation_attempts
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));