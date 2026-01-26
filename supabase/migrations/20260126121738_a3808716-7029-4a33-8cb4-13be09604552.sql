-- Fix RLS for admin visibility on AI recommendations
-- Existing policy uses public.has_role(), which depends on public.user_roles.
-- In this project admins are represented in public.profiles.role, so we use public.get_user_role() instead.

DROP POLICY IF EXISTS "Admins can manage ai_recommendations" ON public.ai_recommendations;

CREATE POLICY "Admins can manage ai_recommendations"
ON public.ai_recommendations
FOR ALL
TO authenticated
USING (public.get_user_role(auth.uid()) = 'admin')
WITH CHECK (public.get_user_role(auth.uid()) = 'admin');
