-- Security hardening batch 3: remove leftover public policies, restrict to authenticated only

--------------------------------------------
-- 1) app_metadata: remove public read, keep authenticated
--------------------------------------------
DROP POLICY IF EXISTS "Anyone can read app metadata" ON public.app_metadata;

--------------------------------------------
-- 2) certificate_settings: remove duplicates + public read
--------------------------------------------
DROP POLICY IF EXISTS "Anyone can view certificate_settings" ON public.certificate_settings;
DROP POLICY IF EXISTS "Authenticated users can view certificate settings" ON public.certificate_settings;
DROP POLICY IF EXISTS "Admins can view certificate settings" ON public.certificate_settings;
DROP POLICY IF EXISTS "Only admins can view certificate settings" ON public.certificate_settings;
DROP POLICY IF EXISTS "Admins can manage certificate_settings" ON public.certificate_settings;

CREATE POLICY "Authenticated users view certificate settings"
ON public.certificate_settings
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Admins manage certificate settings"
ON public.certificate_settings
FOR ALL
TO authenticated
USING (public.is_admin_user(auth.uid()))
WITH CHECK (public.is_admin_user(auth.uid()));

--------------------------------------------
-- 3) company_branding: public needed for login page, but restrict custom_css access
-- We'll keep one minimal public policy for read (logo, colors) and remove duplicates
--------------------------------------------
DROP POLICY IF EXISTS "Anyone can view branding for display" ON public.company_branding;
DROP POLICY IF EXISTS "Public can view company branding for display" ON public.company_branding;
DROP POLICY IF EXISTS "Authenticated users can view their own company branding" ON public.company_branding;
DROP POLICY IF EXISTS "Company admins manage their branding" ON public.company_branding;
DROP POLICY IF EXISTS "Super admins can manage branding" ON public.company_branding;
DROP POLICY IF EXISTS "Super admins manage all branding" ON public.company_branding;
DROP POLICY IF EXISTS "Users can view their company branding" ON public.company_branding;
DROP POLICY IF EXISTS "Users view their company branding" ON public.company_branding;
DROP POLICY IF EXISTS "Users can view their company branding" ON public.company_branding;

-- Create a public-safe view excluding custom_css
CREATE OR REPLACE VIEW public.company_branding_public
WITH (security_invoker=on) AS
  SELECT 
    id,
    company_id,
    logo_url,
    primary_color,
    secondary_color,
    accent_color,
    background_color,
    text_color,
    font_family,
    platform_name,
    favicon_url
  FROM public.company_branding;

-- Base table: deny direct anon SELECT entirely, authenticated can view own company
CREATE POLICY "Authenticated view own company branding"
ON public.company_branding
FOR SELECT
TO authenticated
USING (public.user_belongs_to_company(auth.uid(), company_id) OR public.is_admin_user(auth.uid()));

CREATE POLICY "Company admins manage branding"
ON public.company_branding
FOR ALL
TO authenticated
USING (public.is_company_admin(auth.uid(), company_id))
WITH CHECK (public.is_company_admin(auth.uid(), company_id));

CREATE POLICY "Super admins manage all branding"
ON public.company_branding
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

--------------------------------------------
-- 4) retention_campaigns: remove public read
--------------------------------------------
DROP POLICY IF EXISTS "Users can view active campaigns" ON public.retention_campaigns;
DROP POLICY IF EXISTS "Admins can manage campaigns" ON public.retention_campaigns;
DROP POLICY IF EXISTS "Only admins can view retention campaigns" ON public.retention_campaigns;

CREATE POLICY "Admins view retention campaigns"
ON public.retention_campaigns
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Super admins manage retention campaigns"
ON public.retention_campaigns
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

--------------------------------------------
-- 5) subscription_plans: remove public policies
--------------------------------------------
DROP POLICY IF EXISTS "Anyone can view active plans" ON public.subscription_plans;
DROP POLICY IF EXISTS "Authenticated users can view active plans" ON public.subscription_plans;
DROP POLICY IF EXISTS "Public can view basic plan info" ON public.subscription_plans;
DROP POLICY IF EXISTS "Super admins manage plans" ON public.subscription_plans;

CREATE POLICY "Authenticated view active subscription plans"
ON public.subscription_plans
FOR SELECT
TO authenticated
USING (is_active = true);

CREATE POLICY "Super admins manage subscription plans"
ON public.subscription_plans
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

--------------------------------------------
-- 6) user_achievements: remove public leaderboard policy
--------------------------------------------
DROP POLICY IF EXISTS "Everyone can view all achievements for leaderboard" ON public.user_achievements;
DROP POLICY IF EXISTS "Users can insert their own achievements" ON public.user_achievements;
DROP POLICY IF EXISTS "Users can view their own achievements" ON public.user_achievements;

CREATE POLICY "Users manage own achievements"
ON public.user_achievements
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Leaderboard: authenticated can see summary (ID + counts) of company members
CREATE POLICY "Authenticated view company achievements"
ON public.user_achievements
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.company_users cu_me
    JOIN public.company_users cu_them ON cu_me.company_id = cu_them.company_id
    WHERE cu_me.user_id = auth.uid()
      AND cu_me.status = 'approved'
      AND cu_them.user_id = user_achievements.user_id
  )
);