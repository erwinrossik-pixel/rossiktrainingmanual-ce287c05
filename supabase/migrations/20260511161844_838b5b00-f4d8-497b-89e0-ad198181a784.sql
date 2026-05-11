DROP POLICY IF EXISTS "Users can update their own page views" ON public.page_views;

CREATE POLICY "Users can update their own page views"
ON public.page_views
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);