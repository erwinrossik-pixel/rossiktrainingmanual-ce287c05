-- Remove the policy that allows users to delete their own training time
DROP POLICY IF EXISTS "Users can delete own training time" ON public.training_time;