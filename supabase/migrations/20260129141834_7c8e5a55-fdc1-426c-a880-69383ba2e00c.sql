-- Drop the old restrictive policy that only allows 'admin' role from user_roles
DROP POLICY IF EXISTS "Admins can manage content_quality_analysis" ON public.content_quality_analysis;

-- Keep the new policy that uses is_admin_user() which supports company_admin
-- Also add INSERT/UPDATE/DELETE policies for admins
CREATE POLICY "Admins can insert content quality analysis"
ON public.content_quality_analysis
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can update content quality analysis"
ON public.content_quality_analysis
FOR UPDATE
TO authenticated
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins can delete content quality analysis"
ON public.content_quality_analysis
FOR DELETE
TO authenticated
USING (public.is_admin_user(auth.uid()));