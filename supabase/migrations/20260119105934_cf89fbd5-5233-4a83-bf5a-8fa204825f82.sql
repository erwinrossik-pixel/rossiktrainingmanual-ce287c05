-- Add missing RLS policies for company-related tables

-- 1. RLS policies for company_settings
-- Users can only view settings for their own company
CREATE POLICY "Users can view own company settings"
ON public.company_settings
FOR SELECT
TO authenticated
USING (
  public.is_super_admin(auth.uid()) OR
  public.user_belongs_to_company(auth.uid(), company_id)
);

-- Company admins can update their company settings
CREATE POLICY "Company admins can update settings"
ON public.company_settings
FOR UPDATE
TO authenticated
USING (public.is_company_admin(auth.uid(), company_id))
WITH CHECK (public.is_company_admin(auth.uid(), company_id));

-- Super admins can manage all settings
CREATE POLICY "Super admins can manage all settings"
ON public.company_settings
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

-- 2. RLS policies for company_chapters
CREATE POLICY "Users can view their company chapters"
ON public.company_chapters
FOR SELECT
TO authenticated
USING (
  public.is_super_admin(auth.uid()) OR
  public.user_belongs_to_company(auth.uid(), company_id)
);

CREATE POLICY "Super admins can manage company chapters"
ON public.company_chapters
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

-- 3. RLS policies for company_users
-- Users can view their own company membership
CREATE POLICY "Users can view own company membership"
ON public.company_users
FOR SELECT
TO authenticated
USING (
  user_id = auth.uid() OR
  public.is_super_admin(auth.uid()) OR
  public.is_company_admin(auth.uid(), company_id)
);

-- Users can update their own membership (limited fields)
CREATE POLICY "Users can update own membership"
ON public.company_users
FOR UPDATE
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Company admins can manage users in their company
CREATE POLICY "Company admins can manage company users"
ON public.company_users
FOR ALL
TO authenticated
USING (public.is_company_admin(auth.uid(), company_id))
WITH CHECK (public.is_company_admin(auth.uid(), company_id));

-- Super admins can manage all company users
CREATE POLICY "Super admins can manage all company users"
ON public.company_users
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

-- 4. RLS policies for company_subscriptions
CREATE POLICY "Users can view own company subscription"
ON public.company_subscriptions
FOR SELECT
TO authenticated
USING (
  public.is_super_admin(auth.uid()) OR
  public.user_belongs_to_company(auth.uid(), company_id)
);

CREATE POLICY "Super admins can manage subscriptions"
ON public.company_subscriptions
FOR ALL
TO authenticated
USING (public.is_super_admin(auth.uid()))
WITH CHECK (public.is_super_admin(auth.uid()));

-- 5. Fix companies table - ensure no anon access
-- Drop policy that might allow anon access
DROP POLICY IF EXISTS "Anyone can view active companies for registration" ON public.companies;