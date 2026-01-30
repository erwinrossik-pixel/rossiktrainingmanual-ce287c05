
-- Create a dynamic translations table to store auto-corrected translations
CREATE TABLE IF NOT EXISTS public.translation_overrides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'ro',
  translation_key TEXT NOT NULL,
  original_value TEXT,
  corrected_value TEXT NOT NULL,
  fix_source TEXT DEFAULT 'auto', -- 'auto' or 'manual'
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  applied_by TEXT, -- 'content-visual-analyzer' or admin user id
  is_active BOOLEAN DEFAULT true,
  rollback_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  
  CONSTRAINT unique_translation_override UNIQUE (chapter_id, language, translation_key)
);

-- Enable RLS
ALTER TABLE public.translation_overrides ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Translation overrides are viewable by everyone" 
ON public.translation_overrides 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage translation overrides" 
ON public.translation_overrides 
FOR ALL 
USING (public.is_admin_user(auth.uid()));

-- Create index for fast lookups
CREATE INDEX IF NOT EXISTS idx_translation_overrides_lookup 
ON public.translation_overrides (chapter_id, language, is_active);

-- Create trigger for updated_at
CREATE TRIGGER update_translation_overrides_timestamp
BEFORE UPDATE ON public.translation_overrides
FOR EACH ROW
EXECUTE FUNCTION public.update_modified_column();

-- Add comment
COMMENT ON TABLE public.translation_overrides IS 'Stores dynamically corrected translations that override static file translations';
