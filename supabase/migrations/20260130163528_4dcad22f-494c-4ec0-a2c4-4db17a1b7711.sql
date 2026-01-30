-- Fix search_path for core functions one by one

ALTER FUNCTION public.generate_incident_number() SET search_path = public;
ALTER FUNCTION public.get_user_role(uuid) SET search_path = public;
ALTER FUNCTION public.auto_generate_certificate() SET search_path = public;
ALTER FUNCTION public.generate_certificate_code() SET search_path = public;
ALTER FUNCTION public.handle_new_user() SET search_path = public;
ALTER FUNCTION public.prevent_audit_log_delete() SET search_path = public;
ALTER FUNCTION public.prevent_profile_role_change() SET search_path = public;
ALTER FUNCTION public.update_company_timestamp() SET search_path = public;
ALTER FUNCTION public.update_competency_from_quiz() SET search_path = public;
ALTER FUNCTION public.update_content_visual_analysis_timestamp() SET search_path = public;
ALTER FUNCTION public.update_kpi_timestamp() SET search_path = public;
ALTER FUNCTION public.update_modified_column() SET search_path = public;