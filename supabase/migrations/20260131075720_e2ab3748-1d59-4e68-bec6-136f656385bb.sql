
-- Create cleanup function for old operational data
-- This preserves audit data but removes old operational logs

CREATE OR REPLACE FUNCTION public.cleanup_old_operational_data()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_health_deleted INTEGER;
  v_cron_deleted INTEGER;
  v_page_views_deleted INTEGER;
  v_result json;
BEGIN
  -- Delete health checks older than 7 days (keep enough for uptime calculations)
  DELETE FROM system_health_checks 
  WHERE checked_at < NOW() - INTERVAL '7 days';
  GET DIAGNOSTICS v_health_deleted = ROW_COUNT;
  
  -- Delete cron job logs older than 30 days
  DELETE FROM cron_job_logs 
  WHERE created_at < NOW() - INTERVAL '30 days';
  GET DIAGNOSTICS v_cron_deleted = ROW_COUNT;
  
  -- Delete page views older than 90 days (analytics)
  DELETE FROM page_views 
  WHERE created_at < NOW() - INTERVAL '90 days';
  GET DIAGNOSTICS v_page_views_deleted = ROW_COUNT;
  
  v_result := json_build_object(
    'success', true,
    'health_checks_deleted', v_health_deleted,
    'cron_logs_deleted', v_cron_deleted,
    'page_views_deleted', v_page_views_deleted,
    'executed_at', NOW()
  );
  
  RETURN v_result;
END;
$$;

-- Add comment
COMMENT ON FUNCTION public.cleanup_old_operational_data IS 'Scheduled cleanup function to remove old operational data while preserving audit trails';
