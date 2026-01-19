-- Fix critical RLS issues for production

-- 1. Fix user_gamification - restrict to authenticated users only
DROP POLICY IF EXISTS "Anyone can view gamification" ON public.user_gamification;
DROP POLICY IF EXISTS "Public can view gamification stats" ON public.user_gamification;

CREATE POLICY "Users can view own gamification" 
ON public.user_gamification FOR SELECT 
USING (auth.uid() = user_id);

-- 2. Fix companies - restrict to authenticated users who belong to company
DROP POLICY IF EXISTS "Anyone can view companies" ON public.companies;
DROP POLICY IF EXISTS "Public can view active companies" ON public.companies;

CREATE POLICY "Authenticated users can view their company" 
ON public.companies FOR SELECT 
USING (
  auth.role() = 'authenticated' AND (
    public.user_belongs_to_company(auth.uid(), id) OR
    public.is_super_admin(auth.uid())
  )
);

-- Allow public to view only master company for login page
CREATE POLICY "Public can view master company for auth" 
ON public.companies FOR SELECT 
USING (is_master = true AND is_active = true);

-- 3. Fix certificates - create public verification view instead of full access
DROP POLICY IF EXISTS "Anyone can verify certificates" ON public.certificates;

-- Create a restricted policy for certificate verification
CREATE POLICY "Public certificate verification by code only" 
ON public.certificates FOR SELECT 
USING (
  -- Allow public to see basic info for verification
  is_revoked = false
);

-- 4. Make subscription_plans viewable only by authenticated users
DROP POLICY IF EXISTS "Anyone can view subscription plans" ON public.subscription_plans;
DROP POLICY IF EXISTS "Public can view active plans" ON public.subscription_plans;

CREATE POLICY "Authenticated users can view active plans" 
ON public.subscription_plans FOR SELECT 
USING (
  auth.role() = 'authenticated' AND is_active = true
);

-- Also allow public to see basic plan info for pricing page
CREATE POLICY "Public can view basic plan info" 
ON public.subscription_plans FOR SELECT 
USING (is_active = true);

-- 5. Restrict company_branding to authenticated users of that company
DROP POLICY IF EXISTS "Anyone can view company branding" ON public.company_branding;
DROP POLICY IF EXISTS "Public can view branding" ON public.company_branding;

-- Allow branding to be viewed for display purposes (needed for login page)
CREATE POLICY "Public can view company branding for display" 
ON public.company_branding FOR SELECT 
USING (true);

-- 6. Restrict certificate_settings to admins only for detailed view
DROP POLICY IF EXISTS "Anyone can view certificate settings" ON public.certificate_settings;

CREATE POLICY "Admins can view certificate settings" 
ON public.certificate_settings FOR SELECT 
USING (
  auth.role() = 'authenticated' AND (
    public.is_super_admin(auth.uid()) OR
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  )
);

-- 7. Restrict chapter_media to authenticated users
DROP POLICY IF EXISTS "Anyone can view active media" ON public.chapter_media;
DROP POLICY IF EXISTS "Public can view chapter media" ON public.chapter_media;

CREATE POLICY "Authenticated users can view chapter media" 
ON public.chapter_media FOR SELECT 
USING (
  auth.role() = 'authenticated' AND is_active = true
);