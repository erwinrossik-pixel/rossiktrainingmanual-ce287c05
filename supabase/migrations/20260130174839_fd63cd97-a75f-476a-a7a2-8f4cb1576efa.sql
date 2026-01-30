-- Ensure RLS is enabled on all sensitive tables and add stricter policies

-- Drop and recreate stricter policy for profiles to ensure anonymous cannot access
DROP POLICY IF EXISTS "Block anonymous profile access" ON public.profiles;
CREATE POLICY "Block anonymous profile access" ON public.profiles
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Ensure company_settings registration codes are protected
DROP POLICY IF EXISTS "Block anonymous company_settings access" ON public.company_settings;
CREATE POLICY "Block anonymous company_settings access" ON public.company_settings
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Protect user_2fa from any non-owner access
DROP POLICY IF EXISTS "Users manage own 2fa strict" ON public.user_2fa;
CREATE POLICY "Users manage own 2fa strict" ON public.user_2fa
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Protect company_users from anonymous access
DROP POLICY IF EXISTS "Block anonymous company_users access" ON public.company_users;
CREATE POLICY "Block anonymous company_users access" ON public.company_users
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Protect user_sessions from unauthorized access
DROP POLICY IF EXISTS "Block anonymous user_sessions access" ON public.user_sessions;
CREATE POLICY "Block anonymous user_sessions access" ON public.user_sessions
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Protect certificates table
DROP POLICY IF EXISTS "Block anonymous certificates access" ON public.certificates;
CREATE POLICY "Block anonymous certificates access" ON public.certificates
  FOR SELECT
  USING (auth.uid() IS NOT NULL);