-- Add admin policy for content_quality_analysis to allow company admins to view quality data
CREATE POLICY "Company admins can view content quality analysis"
ON public.content_quality_analysis
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));