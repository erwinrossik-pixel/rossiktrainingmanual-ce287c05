-- Fix security issues: Block anonymous access to sensitive tables

-- 1. quiz_attempts - Add policy to require authentication
CREATE POLICY "Block anonymous access to quiz_attempts"
ON public.quiz_attempts
FOR ALL
TO anon
USING (false);

-- 2. profiles - Add policy to require authentication  
CREATE POLICY "Block anonymous access to profiles"
ON public.profiles
FOR ALL
TO anon
USING (false);

-- 3. chapter_progress - Add policy to require authentication
CREATE POLICY "Block anonymous access to chapter_progress"
ON public.chapter_progress
FOR ALL
TO anon
USING (false);

-- 4. training_time - Add policy to require authentication
CREATE POLICY "Block anonymous access to training_time"
ON public.training_time
FOR ALL
TO anon
USING (false);

-- 5. page_views - Add policy to require authentication
CREATE POLICY "Block anonymous access to page_views"
ON public.page_views
FOR ALL
TO anon
USING (false);

-- 6. user_sessions - Add policy to require authentication
CREATE POLICY "Block anonymous access to user_sessions"
ON public.user_sessions
FOR ALL
TO anon
USING (false);

-- 7. user_learning_analytics - Add policy to require authentication
CREATE POLICY "Block anonymous access to user_learning_analytics"
ON public.user_learning_analytics
FOR ALL
TO anon
USING (false);

-- 8. user_roles - Add policy to require authentication
CREATE POLICY "Block anonymous access to user_roles"
ON public.user_roles
FOR ALL
TO anon
USING (false);