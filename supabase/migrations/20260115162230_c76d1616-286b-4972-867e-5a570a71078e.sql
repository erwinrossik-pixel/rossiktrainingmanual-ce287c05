-- Content Quality Analysis table to store scores and issues per chapter/language
CREATE TABLE public.content_quality_analysis (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_id TEXT NOT NULL REFERENCES public.chapters(id),
  language TEXT NOT NULL DEFAULT 'ro',
  quality_score INTEGER NOT NULL DEFAULT 0 CHECK (quality_score >= 0 AND quality_score <= 100),
  
  -- Issue categories
  terminology_issues JSONB DEFAULT '[]'::jsonb,
  consistency_issues JSONB DEFAULT '[]'::jsonb,
  translation_issues JSONB DEFAULT '[]'::jsonb,
  outdated_content JSONB DEFAULT '[]'::jsonb,
  duplication_issues JSONB DEFAULT '[]'::jsonb,
  
  -- Suggested corrections (not auto-applied)
  suggested_corrections JSONB DEFAULT '[]'::jsonb,
  
  -- Metadata
  analyzed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  analyzed_by TEXT DEFAULT 'ai-quality-analyzer',
  ai_model_used TEXT DEFAULT 'google/gemini-2.5-flash',
  analysis_version INTEGER NOT NULL DEFAULT 1,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'analyzed', 'reviewed', 'corrections_applied')),
  reviewed_by UUID REFERENCES auth.users(id),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  review_notes TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Unique constraint per chapter/language/version
  CONSTRAINT unique_chapter_language_version UNIQUE (chapter_id, language, analysis_version)
);

-- Enable RLS
ALTER TABLE public.content_quality_analysis ENABLE ROW LEVEL SECURITY;

-- Admin-only access
CREATE POLICY "Admins can manage content_quality_analysis"
ON public.content_quality_analysis
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Indexes for performance
CREATE INDEX idx_content_quality_chapter ON public.content_quality_analysis(chapter_id);
CREATE INDEX idx_content_quality_score ON public.content_quality_analysis(quality_score);
CREATE INDEX idx_content_quality_status ON public.content_quality_analysis(status);
CREATE INDEX idx_content_quality_language ON public.content_quality_analysis(language);

-- Trigger for updated_at
CREATE TRIGGER update_content_quality_analysis_updated_at
  BEFORE UPDATE ON public.content_quality_analysis
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Quality Analysis Summary view for dashboard
CREATE OR REPLACE VIEW public.content_quality_summary AS
SELECT 
  c.id as chapter_id,
  c.slug,
  c.order_index,
  c.content_level,
  c.module,
  COALESCE(
    (SELECT quality_score FROM content_quality_analysis 
     WHERE chapter_id = c.id AND language = 'ro' 
     ORDER BY analysis_version DESC LIMIT 1), 0
  ) as ro_score,
  COALESCE(
    (SELECT quality_score FROM content_quality_analysis 
     WHERE chapter_id = c.id AND language = 'de' 
     ORDER BY analysis_version DESC LIMIT 1), 0
  ) as de_score,
  COALESCE(
    (SELECT quality_score FROM content_quality_analysis 
     WHERE chapter_id = c.id AND language = 'en' 
     ORDER BY analysis_version DESC LIMIT 1), 0
  ) as en_score,
  ROUND(
    (COALESCE(
      (SELECT quality_score FROM content_quality_analysis 
       WHERE chapter_id = c.id AND language = 'ro' 
       ORDER BY analysis_version DESC LIMIT 1), 0
    ) + 
    COALESCE(
      (SELECT quality_score FROM content_quality_analysis 
       WHERE chapter_id = c.id AND language = 'de' 
       ORDER BY analysis_version DESC LIMIT 1), 0
    ) + 
    COALESCE(
      (SELECT quality_score FROM content_quality_analysis 
       WHERE chapter_id = c.id AND language = 'en' 
       ORDER BY analysis_version DESC LIMIT 1), 0
    )) / 3.0
  ) as avg_score,
  (SELECT status FROM content_quality_analysis 
   WHERE chapter_id = c.id 
   ORDER BY analyzed_at DESC LIMIT 1) as latest_status,
  (SELECT analyzed_at FROM content_quality_analysis 
   WHERE chapter_id = c.id 
   ORDER BY analyzed_at DESC LIMIT 1) as last_analyzed
FROM public.chapters c
ORDER BY c.order_index;