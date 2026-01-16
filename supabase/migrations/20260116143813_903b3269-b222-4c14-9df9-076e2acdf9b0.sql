-- Fix SECURITY DEFINER view - recreate with SECURITY INVOKER
DROP VIEW IF EXISTS public.team_competency_matrix;

CREATE OR REPLACE VIEW public.team_competency_matrix 
WITH (security_invoker = true) AS
SELECT 
  cs.user_id,
  p.first_name,
  p.last_name,
  p.email,
  cu.company_id,
  jsonb_object_agg(cs.competency_area, cs.score) as competencies,
  AVG(cs.score) as avg_score,
  MAX(cs.last_assessment_at) as last_updated
FROM public.competency_scores cs
JOIN public.profiles p ON cs.user_id = p.id
LEFT JOIN public.company_users cu ON cs.user_id = cu.user_id
GROUP BY cs.user_id, p.first_name, p.last_name, p.email, cu.company_id;