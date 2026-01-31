
-- Fix RLS policies for profiles table to prevent email exposure
-- Drop the potentially problematic policy and create a more restrictive one

-- First, check and drop if exists
DROP POLICY IF EXISTS "Block anonymous profile access" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view profiles of same company" ON public.profiles;

-- Create strict policies: users can only see their own profile
-- Admins can see profiles in their company
CREATE POLICY "Users view own profile only" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Company admins view company profiles" 
ON public.profiles 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.company_users cu
    WHERE cu.user_id = auth.uid()
    AND cu.role IN ('company_admin', 'super_admin')
    AND cu.status = 'approved'
    AND cu.company_id IN (
      SELECT company_id FROM public.company_users 
      WHERE user_id = profiles.id AND status = 'approved'
    )
  )
);

-- Update policy for profiles to allow users to update their own
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users update own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = id);

-- Fix certificates table: strict company isolation
DROP POLICY IF EXISTS "Users can view own certificates" ON public.certificates;
DROP POLICY IF EXISTS "Company admins can view company certificates" ON public.certificates;

CREATE POLICY "Users view own certificates" 
ON public.certificates 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Company admins view company certificates" 
ON public.certificates 
FOR SELECT 
USING (
  public.is_company_admin(auth.uid(), public.get_user_company_id(user_id))
);

-- Fix company_users to prevent cross-company queries
DROP POLICY IF EXISTS "Block anonymous company_users access" ON public.company_users;
DROP POLICY IF EXISTS "Users can view own company membership" ON public.company_users;

CREATE POLICY "Users view own membership" 
ON public.company_users 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Company admins view company members" 
ON public.company_users 
FOR SELECT 
USING (
  public.is_company_admin(auth.uid(), company_id)
);
