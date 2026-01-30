-- Content Visual Analysis table to track automated analysis results
CREATE TABLE public.content_visual_analysis (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_id TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'ro',
  analysis_type TEXT NOT NULL DEFAULT 'visual', -- 'visual', 'text', 'translation', 'comprehensive'
  
  -- Visual analysis results
  visual_score INTEGER DEFAULT 0 CHECK (visual_score >= 0 AND visual_score <= 100),
  text_score INTEGER DEFAULT 0 CHECK (text_score >= 0 AND text_score <= 100),
  translation_score INTEGER DEFAULT 0 CHECK (translation_score >= 0 AND translation_score <= 100),
  overall_score INTEGER DEFAULT 0 CHECK (overall_score >= 0 AND overall_score <= 100),
  
  -- Issues found
  missing_translations JSONB DEFAULT '[]'::jsonb,
  broken_graphics JSONB DEFAULT '[]'::jsonb,
  text_issues JSONB DEFAULT '[]'::jsonb,
  color_issues JSONB DEFAULT '[]'::jsonb,
  layout_issues JSONB DEFAULT '[]'::jsonb,
  
  -- Auto-corrections applied
  corrections_applied JSONB DEFAULT '[]'::jsonb,
  corrections_count INTEGER DEFAULT 0,
  auto_fixed BOOLEAN DEFAULT false,
  
  -- Metadata
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'analyzing', 'completed', 'failed', 'auto_fixed'
  error_message TEXT,
  ai_model_used TEXT,
  analyzed_at TIMESTAMPTZ,
  fixed_at TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for fast lookups
CREATE INDEX idx_content_visual_analysis_chapter ON public.content_visual_analysis(chapter_id);
CREATE INDEX idx_content_visual_analysis_status ON public.content_visual_analysis(status);
CREATE INDEX idx_content_visual_analysis_created ON public.content_visual_analysis(created_at DESC);

-- Unique constraint for latest analysis per chapter/language
CREATE UNIQUE INDEX idx_content_visual_unique_latest ON public.content_visual_analysis(chapter_id, language, analysis_type) 
WHERE status IN ('completed', 'auto_fixed');

-- Content Auto-Fixer Logs table
CREATE TABLE public.content_auto_fixer_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  analysis_id UUID REFERENCES public.content_visual_analysis(id) ON DELETE CASCADE,
  chapter_id TEXT NOT NULL,
  
  -- Fix details
  fix_type TEXT NOT NULL, -- 'translation', 'text', 'color', 'layout', 'graphic'
  original_value TEXT,
  fixed_value TEXT,
  fix_reason TEXT,
  
  -- Status
  success BOOLEAN DEFAULT false,
  error_message TEXT,
  
  -- Metadata
  applied_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  rollback_at TIMESTAMPTZ,
  rolled_back BOOLEAN DEFAULT false
);

CREATE INDEX idx_auto_fixer_logs_chapter ON public.content_auto_fixer_logs(chapter_id);
CREATE INDEX idx_auto_fixer_logs_analysis ON public.content_auto_fixer_logs(analysis_id);

-- Content Analyzer Schedule table
CREATE TABLE public.content_analyzer_schedule (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_name TEXT NOT NULL UNIQUE,
  cron_expression TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  last_run_at TIMESTAMPTZ,
  next_run_at TIMESTAMPTZ,
  
  -- Configuration
  chapters_per_run INTEGER DEFAULT 5,
  languages TEXT[] DEFAULT ARRAY['ro', 'en', 'de'],
  auto_fix_enabled BOOLEAN DEFAULT true,
  
  -- Stats
  total_runs INTEGER DEFAULT 0,
  successful_runs INTEGER DEFAULT 0,
  failed_runs INTEGER DEFAULT 0,
  total_fixes_applied INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Insert default schedules (96 times per 24h = every 15 minutes)
INSERT INTO public.content_analyzer_schedule (job_name, cron_expression, chapters_per_run) VALUES
('visual_analyzer_main', '*/15 * * * *', 5),  -- Every 15 min, 5 chapters
('text_analyzer', '*/15 * * * *', 5),          -- Every 15 min, 5 chapters
('translation_checker', '0 * * * *', 10),      -- Every hour, 10 chapters
('comprehensive_scan', '0 */6 * * *', 50);     -- Every 6 hours, all chapters

-- Enable RLS
ALTER TABLE public.content_visual_analysis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_auto_fixer_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_analyzer_schedule ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Admin only access
CREATE POLICY "Admins can view visual analysis" ON public.content_visual_analysis
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can manage visual analysis" ON public.content_visual_analysis
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can view fixer logs" ON public.content_auto_fixer_logs
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can manage fixer logs" ON public.content_auto_fixer_logs
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can view schedules" ON public.content_analyzer_schedule
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can manage schedules" ON public.content_analyzer_schedule
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_content_visual_analysis_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_content_visual_analysis_updated_at
  BEFORE UPDATE ON public.content_visual_analysis
  FOR EACH ROW EXECUTE FUNCTION update_content_visual_analysis_timestamp();

CREATE TRIGGER update_content_analyzer_schedule_updated_at
  BEFORE UPDATE ON public.content_analyzer_schedule
  FOR EACH ROW EXECUTE FUNCTION update_content_visual_analysis_timestamp();