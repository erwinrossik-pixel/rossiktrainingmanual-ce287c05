-- Add DELETE policy for admins on training_time table
CREATE POLICY "Admins can delete training time"
ON public.training_time
FOR DELETE
USING (get_user_role(auth.uid()) = 'admin'::app_role);

-- Also add DELETE policy for users to delete their own training time
CREATE POLICY "Users can delete own training time"
ON public.training_time
FOR DELETE
USING (auth.uid() = user_id);