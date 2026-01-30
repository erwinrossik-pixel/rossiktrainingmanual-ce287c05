-- Fix overly permissive INSERT policy for notifications
-- Drop the permissive policy
DROP POLICY IF EXISTS "Service can insert notifications" ON public.notifications;

-- Create a stricter policy that only allows authenticated users or admins to insert
-- Notifications should only be created by the system (service role) or for the user themselves
CREATE POLICY "Authenticated users receive notifications" ON public.notifications
    FOR INSERT WITH CHECK (auth.uid() = user_id OR public.is_admin_user(auth.uid()));