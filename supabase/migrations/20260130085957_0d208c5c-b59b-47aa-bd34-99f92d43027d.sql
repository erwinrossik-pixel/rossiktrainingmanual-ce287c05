-- Drop existing restrictive policy
DROP POLICY IF EXISTS "Admins can manage production checklist" ON public.production_checklist;

-- Create new policy that uses is_admin_user function (includes company_admin and super_admin)
CREATE POLICY "Admins can manage production checklist"
ON public.production_checklist
FOR ALL
USING (public.is_admin_user(auth.uid()))
WITH CHECK (public.is_admin_user(auth.uid()));