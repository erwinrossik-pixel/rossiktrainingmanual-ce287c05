-- Create a function to calculate and update competency scores from quiz attempts
CREATE OR REPLACE FUNCTION public.update_competency_from_quiz()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_area TEXT;
  v_chapters TEXT[];
  v_avg_score NUMERIC;
  v_count INTEGER;
BEGIN
  -- Define competency area mappings
  FOR v_area, v_chapters IN
    SELECT * FROM (VALUES
      ('pricing', ARRAY['pricing', 'commercial']),
      ('customs', ARRAY['customs', 'documents']),
      ('adr', ARRAY['adr']),
      ('vehicles', ARRAY['vehicle', 'fleet']),
      ('compliance', ARRAY['compliance', 'driving-time']),
      ('clients', ARRAY['clients', 'communication']),
      ('claims', ARRAY['claims', 'insurance']),
      ('technology', ARRAY['technology', 'digitalization', 'translogica']),
      ('negotiation', ARRAY['negotiation', 'soft-skills']),
      ('logistics', ARRAY['loading', 'warehouse', 'intermodal'])
    ) AS t(area, chapters)
  LOOP
    -- Check if this quiz's chapter belongs to this competency area
    IF NEW.chapter_id = ANY(v_chapters) THEN
      -- Calculate average score for this user in this competency area
      SELECT 
        AVG((qa.score::NUMERIC / qa.total_questions) * 100),
        COUNT(*)
      INTO v_avg_score, v_count
      FROM public.quiz_attempts qa
      WHERE qa.user_id = NEW.user_id
        AND qa.chapter_id = ANY(v_chapters)
        AND qa.passed = true;
      
      IF v_count > 0 THEN
        -- Upsert the competency score
        INSERT INTO public.competency_scores (user_id, competency_area, score, max_score, last_assessment_at)
        VALUES (NEW.user_id, v_area, ROUND(v_avg_score), 100, NOW())
        ON CONFLICT (user_id, competency_area) 
        DO UPDATE SET 
          score = ROUND(v_avg_score),
          last_assessment_at = NOW(),
          updated_at = NOW();
      END IF;
    END IF;
  END LOOP;
  
  RETURN NEW;
END;
$$;

-- Create trigger on quiz_attempts
DROP TRIGGER IF EXISTS update_competency_on_quiz_complete ON public.quiz_attempts;
CREATE TRIGGER update_competency_on_quiz_complete
  AFTER INSERT ON public.quiz_attempts
  FOR EACH ROW
  WHEN (NEW.passed = true)
  EXECUTE FUNCTION public.update_competency_from_quiz();

-- Populate competency_scores from existing quiz_attempts data
INSERT INTO public.competency_scores (user_id, competency_area, score, max_score, last_assessment_at)
SELECT 
  user_id,
  area,
  ROUND(AVG((score::NUMERIC / total_questions) * 100)),
  100,
  MAX(created_at)
FROM public.quiz_attempts qa
CROSS JOIN (
  SELECT 'pricing' AS area, ARRAY['pricing', 'commercial'] AS chapters UNION ALL
  SELECT 'customs', ARRAY['customs', 'documents'] UNION ALL
  SELECT 'adr', ARRAY['adr'] UNION ALL
  SELECT 'vehicles', ARRAY['vehicle', 'fleet'] UNION ALL
  SELECT 'compliance', ARRAY['compliance', 'driving-time'] UNION ALL
  SELECT 'clients', ARRAY['clients', 'communication'] UNION ALL
  SELECT 'claims', ARRAY['claims', 'insurance'] UNION ALL
  SELECT 'technology', ARRAY['technology', 'digitalization', 'translogica'] UNION ALL
  SELECT 'negotiation', ARRAY['negotiation', 'soft-skills'] UNION ALL
  SELECT 'logistics', ARRAY['loading', 'warehouse', 'intermodal']
) AS areas
WHERE qa.chapter_id = ANY(areas.chapters)
  AND qa.passed = true
GROUP BY user_id, area
ON CONFLICT (user_id, competency_area) 
DO UPDATE SET 
  score = EXCLUDED.score,
  last_assessment_at = EXCLUDED.last_assessment_at,
  updated_at = NOW();