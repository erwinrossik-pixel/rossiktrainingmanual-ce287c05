-- Fix critical security issues: Restrict public access to sensitive tables

-- 1. Fix translation_overrides - restrict to authenticated users only
DROP POLICY IF EXISTS "Translation overrides are viewable by everyone" ON public.translation_overrides;
CREATE POLICY "Authenticated users can view translation overrides" 
ON public.translation_overrides FOR SELECT 
TO authenticated
USING (true);

-- 2. Fix video_lessons - restrict to authenticated users only
DROP POLICY IF EXISTS "Anyone can view video lessons" ON public.video_lessons;
CREATE POLICY "Authenticated users can view video lessons" 
ON public.video_lessons FOR SELECT 
TO authenticated
USING (true);

-- 3. Fix webinars - restrict to authenticated users only
DROP POLICY IF EXISTS "Anyone can view webinars" ON public.webinars;
CREATE POLICY "Authenticated users can view webinars" 
ON public.webinars FOR SELECT 
TO authenticated
USING (true);

-- 4. Fix weekly_challenges - restrict to authenticated users only
DROP POLICY IF EXISTS "Anyone can view weekly challenges" ON public.weekly_challenges;
CREATE POLICY "Authenticated users can view weekly challenges" 
ON public.weekly_challenges FOR SELECT 
TO authenticated
USING (true);

-- 5. Fix audio_cache - restrict to authenticated users only
DROP POLICY IF EXISTS "Anyone can view audio cache" ON public.audio_cache;
CREATE POLICY "Authenticated users can view audio cache" 
ON public.audio_cache FOR SELECT 
TO authenticated
USING (true);

-- 6. Fix mentor_profiles - restrict to authenticated users only
DROP POLICY IF EXISTS "Anyone can view mentor profiles" ON public.mentor_profiles;
CREATE POLICY "Authenticated users can view mentor profiles" 
ON public.mentor_profiles FOR SELECT 
TO authenticated
USING (true);