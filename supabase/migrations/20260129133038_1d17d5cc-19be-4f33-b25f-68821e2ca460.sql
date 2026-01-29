
-- Add admin policy for user_gamification to allow admins to view all gamification data
CREATE POLICY "Admins can view all gamification data"
ON public.user_gamification
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));

-- Add admin policy for simulation_attempts to allow admins to view all simulation data
CREATE POLICY "Admins can view all simulation attempts"
ON public.simulation_attempts
FOR SELECT
TO authenticated
USING (public.is_admin_user(auth.uid()));
