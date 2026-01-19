-- Fix security issues for companies and company_branding tables

-- 1. Drop the overly permissive policies on companies table
DROP POLICY IF EXISTS "Anyone can view active companies for registration" ON public.companies;

-- 2. Create more restrictive policies for companies
-- Only authenticated users can view their own company
CREATE POLICY "Users can view their own company"
ON public.companies
FOR SELECT
TO authenticated
USING (
  public.is_super_admin(auth.uid()) OR
  public.user_belongs_to_company(auth.uid(), id)
);

-- 3. Create a security definer function to lookup company by registration code (for registration flow)
CREATE OR REPLACE FUNCTION public.lookup_company_for_registration(p_code text)
RETURNS TABLE(company_id uuid, company_name text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.id,
    c.name
  FROM public.company_settings cs
  JOIN public.companies c ON cs.company_id = c.id
  WHERE cs.registration_code = UPPER(TRIM(p_code))
    AND c.is_active = true;
END;
$$;

-- 4. Drop the overly permissive policy on company_branding
DROP POLICY IF EXISTS "Public can view branding for active companies" ON public.company_branding;

-- 5. Create restrictive policies for company_branding
-- Only authenticated users can view their own company branding
CREATE POLICY "Users can view their own company branding"
ON public.company_branding
FOR SELECT
TO authenticated
USING (
  public.is_super_admin(auth.uid()) OR
  public.user_belongs_to_company(auth.uid(), company_id)
);

-- 6. Create a security definer function to get branding for the current domain (for theming)
CREATE OR REPLACE FUNCTION public.get_company_branding_by_domain(p_domain text)
RETURNS TABLE(
  company_id uuid,
  company_name text,
  company_slug text,
  logo_url text,
  primary_color text,
  secondary_color text,
  accent_color text,
  background_color text,
  text_color text,
  font_family text,
  platform_name text,
  favicon_url text,
  custom_css text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.id,
    c.name,
    c.slug,
    cb.logo_url,
    cb.primary_color,
    cb.secondary_color,
    cb.accent_color,
    cb.background_color,
    cb.text_color,
    cb.font_family,
    cb.platform_name,
    cb.favicon_url,
    cb.custom_css
  FROM public.companies c
  LEFT JOIN public.company_branding cb ON cb.company_id = c.id
  WHERE c.is_active = true
    AND (
      c.custom_domain = p_domain 
      OR c.slug = SPLIT_PART(p_domain, '.', 1)
      OR c.is_master = true
    )
  ORDER BY 
    CASE WHEN c.custom_domain = p_domain THEN 1
         WHEN c.slug = SPLIT_PART(p_domain, '.', 1) THEN 2
         ELSE 3 END
  LIMIT 1;
END;
$$;

-- 7. Create a function to get company settings by domain (for theming)
CREATE OR REPLACE FUNCTION public.get_company_settings_by_domain(p_domain text)
RETURNS TABLE(
  company_id uuid,
  default_language text,
  active_languages text[],
  timezone text,
  welcome_message text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.id,
    cs.default_language,
    cs.active_languages,
    cs.timezone,
    cs.welcome_message
  FROM public.companies c
  LEFT JOIN public.company_settings cs ON cs.company_id = c.id
  WHERE c.is_active = true
    AND (
      c.custom_domain = p_domain 
      OR c.slug = SPLIT_PART(p_domain, '.', 1)
      OR c.is_master = true
    )
  ORDER BY 
    CASE WHEN c.custom_domain = p_domain THEN 1
         WHEN c.slug = SPLIT_PART(p_domain, '.', 1) THEN 2
         ELSE 3 END
  LIMIT 1;
END;
$$;