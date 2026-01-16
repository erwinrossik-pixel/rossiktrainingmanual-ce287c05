-- Fix RLS Policy Always True warning - make registration request policy more restrictive
DROP POLICY IF EXISTS "Anyone can create registration request" ON public.user_registration_requests;

-- Only allow authenticated users to create registration requests for themselves
CREATE POLICY "Authenticated users can create their own registration request" ON public.user_registration_requests
  FOR INSERT WITH CHECK (
    auth.uid() IS NOT NULL 
    AND (user_id = auth.uid() OR user_id IS NULL)
  );