-- Drop the security definer view and recreate with proper security
DROP VIEW IF EXISTS public.content_quality_summary;

-- Recreate view with security_invoker = true (Postgres 15+)
-- This ensures RLS is checked against the querying user, not the view creator
CREATE OR REPLACE VIEW public.content_quality_summary 
WITH (security_invoker = true) AS
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