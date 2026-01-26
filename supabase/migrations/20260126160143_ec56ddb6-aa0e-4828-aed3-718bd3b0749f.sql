-- Fix security issues: Restrict public access to sensitive tables

-- 1. Drop existing overly permissive policies on company_branding
DROP POLICY IF EXISTS "Anyone can view company branding" ON public.company_branding;
DROP POLICY IF EXISTS "Public can view company branding" ON public.company_branding;

-- Create secure policy for company_branding (only authenticated users from same company OR via secure RPC)
CREATE POLICY "Users can view their company branding"
ON public.company_branding
FOR SELECT
TO authenticated
USING (public.user_belongs_to_company(auth.uid(), company_id));

-- 2. Drop existing overly permissive policies on certificate_settings
DROP POLICY IF EXISTS "Anyone can view certificate settings" ON public.certificate_settings;
DROP POLICY IF EXISTS "Public can view certificate settings" ON public.certificate_settings;

-- Create secure policy for certificate_settings (only authenticated users)
CREATE POLICY "Authenticated users can view certificate settings"
ON public.certificate_settings
FOR SELECT
TO authenticated
USING (true);

-- 3. Drop existing overly permissive policies on subscription_plans
DROP POLICY IF EXISTS "Anyone can view subscription plans" ON public.subscription_plans;
DROP POLICY IF EXISTS "Public can view subscription plans" ON public.subscription_plans;

-- Create secure policy for subscription_plans (only authenticated users)
CREATE POLICY "Authenticated users can view subscription plans"
ON public.subscription_plans
FOR SELECT
TO authenticated
USING (true);

-- 4. Drop existing overly permissive policies on retention_campaigns
DROP POLICY IF EXISTS "Anyone can view retention campaigns" ON public.retention_campaigns;
DROP POLICY IF EXISTS "Public can view retention campaigns" ON public.retention_campaigns;

-- Create secure policy for retention_campaigns (only admins)
CREATE POLICY "Only admins can view retention campaigns"
ON public.retention_campaigns
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

-- 5. Drop existing overly permissive policies on chapters
DROP POLICY IF EXISTS "Anyone can view chapters" ON public.chapters;
DROP POLICY IF EXISTS "Public can view chapters" ON public.chapters;

-- Create secure policy for chapters (only authenticated users)
CREATE POLICY "Authenticated users can view chapters"
ON public.chapters
FOR SELECT
TO authenticated
USING (true);

-- 6. Drop existing overly permissive policies on app_metadata
DROP POLICY IF EXISTS "Anyone can view app metadata" ON public.app_metadata;
DROP POLICY IF EXISTS "Public can view app metadata" ON public.app_metadata;

-- Create secure policy for app_metadata (only authenticated users)
CREATE POLICY "Authenticated users can view app metadata"
ON public.app_metadata
FOR SELECT
TO authenticated
USING (true);