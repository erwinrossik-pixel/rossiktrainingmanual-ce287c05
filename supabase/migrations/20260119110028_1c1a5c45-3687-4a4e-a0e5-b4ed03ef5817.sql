-- Fix the critical error - restrict public access to companies table

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Public can view master company for auth" ON public.companies;

-- The get_company_branding_by_domain RPC function handles public access securely