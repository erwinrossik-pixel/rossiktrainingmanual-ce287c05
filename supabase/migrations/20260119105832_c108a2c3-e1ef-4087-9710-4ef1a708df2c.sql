-- Fix remaining security issues

-- 1. Drop any remaining permissive policies on companies
DROP POLICY IF EXISTS "Users can view their own company" ON public.companies;
DROP POLICY IF EXISTS "Super admins can manage all companies" ON public.companies;

-- 2. Create strictly scoped policies for companies - ONLY for authenticated users who belong to the company
CREATE POLICY "Authenticated users can view their own company"
ON public.companies
FOR SELECT
TO authenticated
USING (
  public.is_super_admin(auth.uid()) OR
  public.user_belongs_to_company(auth.uid(), id)
);

CREATE POLICY "Super admins can manage companies"
ON public.companies
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

-- 3. Drop any remaining permissive policies on company_branding
DROP POLICY IF EXISTS "Users can view their own company branding" ON public.company_branding;
DROP POLICY IF EXISTS "Super admins can manage all branding" ON public.company_branding;

-- 4. Create strictly scoped policies for company_branding
CREATE POLICY "Authenticated users can view their own company branding"
ON public.company_branding
FOR SELECT
TO authenticated
USING (
  public.is_super_admin(auth.uid()) OR
  public.user_belongs_to_company(auth.uid(), company_id)
);

CREATE POLICY "Super admins can manage branding"
ON public.company_branding
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));