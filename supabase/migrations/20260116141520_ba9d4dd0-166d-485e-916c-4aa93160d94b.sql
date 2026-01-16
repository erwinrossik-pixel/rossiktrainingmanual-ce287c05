
-- Fix the overly permissive INSERT policy by requiring user_id to match auth.uid() OR allowing authenticated users
DROP POLICY IF EXISTS "Service role can insert notifications" ON public.user_notifications;

-- Allow authenticated users to create notifications for themselves (for self-notifications like achievements)
CREATE POLICY "Users can insert their own notifications"
  ON public.user_notifications FOR INSERT
  WITH CHECK (auth.uid() = user_id);
