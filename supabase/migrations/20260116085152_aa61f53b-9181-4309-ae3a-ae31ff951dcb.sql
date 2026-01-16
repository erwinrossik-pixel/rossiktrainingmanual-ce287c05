-- Create bookmarked questions table
CREATE TABLE public.bookmarked_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  chapter_id TEXT NOT NULL,
  question_text TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_index INTEGER NOT NULL,
  correct_answer TEXT NOT NULL,
  explanation TEXT NOT NULL,
  notes TEXT,
  bookmarked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create unique constraint to prevent duplicate bookmarks
CREATE UNIQUE INDEX idx_bookmarked_questions_unique 
ON public.bookmarked_questions(user_id, chapter_id, question_text);

-- Create index for faster queries
CREATE INDEX idx_bookmarked_questions_user_id ON public.bookmarked_questions(user_id);
CREATE INDEX idx_bookmarked_questions_chapter_id ON public.bookmarked_questions(chapter_id);

-- Enable Row Level Security
ALTER TABLE public.bookmarked_questions ENABLE ROW LEVEL SECURITY;

-- Users can only view their own bookmarks
CREATE POLICY "Users can view their own bookmarks"
ON public.bookmarked_questions
FOR SELECT
USING (auth.uid() = user_id);

-- Users can create their own bookmarks
CREATE POLICY "Users can create their own bookmarks"
ON public.bookmarked_questions
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own bookmarks (for notes)
CREATE POLICY "Users can update their own bookmarks"
ON public.bookmarked_questions
FOR UPDATE
USING (auth.uid() = user_id);

-- Users can delete their own bookmarks
CREATE POLICY "Users can delete their own bookmarks"
ON public.bookmarked_questions
FOR DELETE
USING (auth.uid() = user_id);

-- Admins can view all bookmarks for analytics
CREATE POLICY "Admins can view all bookmarks"
ON public.bookmarked_questions
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role = 'admin'
  )
);