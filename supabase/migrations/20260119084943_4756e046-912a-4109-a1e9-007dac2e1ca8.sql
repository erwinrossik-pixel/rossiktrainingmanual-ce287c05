-- Clean up conflicting RLS policies for production security

-- 1. Fix user_gamification - remove public access policy
DROP POLICY IF EXISTS "Everyone can view all gamification for leaderboard" ON public.user_gamification;
DROP POLICY IF EXISTS "Users can view their own gamification data" ON public.user_gamification;
-- Keep only "Users can view own gamification"

-- 2. Fix chapter_media - remove public access policy
DROP POLICY IF EXISTS "Anyone can view chapter media" ON public.chapter_media;
-- Keep only "Authenticated users can view chapter media"

-- 3. Fix companies - remove overly permissive domain policy
DROP POLICY IF EXISTS "Anyone can view company by domain for login" ON public.companies;
DROP POLICY IF EXISTS "Users can view their own company" ON public.companies;
-- Keep "Public can view master company for auth" and "Authenticated users can view their company"