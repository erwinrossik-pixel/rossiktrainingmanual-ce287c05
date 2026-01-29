-- Add lockout tracking columns to chapter_progress
ALTER TABLE public.chapter_progress 
ADD COLUMN IF NOT EXISTS is_locked_out BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS locked_out_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS unlocked_by UUID REFERENCES auth.users(id),
ADD COLUMN IF NOT EXISTS unlocked_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS consecutive_fails INTEGER DEFAULT 0;

-- Create a function to check if chapter is locked for a user
CREATE OR REPLACE FUNCTION public.is_chapter_locked(p_user_id UUID, p_chapter_id TEXT)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT is_locked_out FROM public.chapter_progress 
     WHERE user_id = p_user_id AND chapter_id = p_chapter_id),
    false
  );
$$;

-- Create admin function to unlock a chapter for a user
CREATE OR REPLACE FUNCTION public.admin_unlock_chapter(p_user_id UUID, p_chapter_id TEXT)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_result JSON;
BEGIN
  -- Check if caller is admin
  IF NOT public.is_admin_user(auth.uid()) THEN
    RAISE EXCEPTION 'Only admins can unlock chapters';
  END IF;

  -- Unlock the chapter and reset consecutive fails
  UPDATE public.chapter_progress
  SET 
    is_locked_out = false,
    locked_out_at = NULL,
    unlocked_by = auth.uid(),
    unlocked_at = NOW(),
    consecutive_fails = 0,
    status = 'unlocked',
    updated_at = NOW()
  WHERE user_id = p_user_id AND chapter_id = p_chapter_id;

  -- If no row existed, create one
  IF NOT FOUND THEN
    INSERT INTO public.chapter_progress (
      user_id, chapter_id, status, is_locked_out, consecutive_fails
    ) VALUES (
      p_user_id, p_chapter_id, 'unlocked', false, 0
    );
  END IF;

  v_result := json_build_object(
    'success', true,
    'user_id', p_user_id,
    'chapter_id', p_chapter_id,
    'unlocked_by', auth.uid()
  );
  
  RETURN v_result;
END;
$$;

-- Add index for faster lockout checks
CREATE INDEX IF NOT EXISTS idx_chapter_progress_lockout 
ON public.chapter_progress(user_id, chapter_id, is_locked_out) 
WHERE is_locked_out = true;