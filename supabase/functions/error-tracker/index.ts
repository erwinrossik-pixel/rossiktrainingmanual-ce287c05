import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const { action, ...payload } = await req.json();

  if (action === 'log_error') {
    const {
      errorType,
      errorMessage,
      errorStack,
      userId,
      sessionId,
      pageUrl,
      userAgent,
      severity = 'error',
      metadata
    } = payload;

    const { data, error } = await supabase
      .from('error_logs')
      .insert({
        error_type: errorType,
        error_message: errorMessage,
        error_stack: errorStack,
        user_id: userId,
        session_id: sessionId,
        page_url: pageUrl,
        user_agent: userAgent,
        severity,
        metadata
      })
      .select()
      .single();

    if (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to log error', details: error }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    // If critical error, create incident
    if (severity === 'critical') {
      await supabase.from('incidents').insert({
        title: `Critical Error: ${errorMessage.substring(0, 100)}`,
        description: errorMessage,
        severity: 'critical',
        status: 'open',
        affected_services: [errorType],
        impact: 'User experience may be affected'
      });

      // Send notification to admins
      try {
        await supabase.functions.invoke('send-admin-notification', {
          body: {
            type: 'critical_error',
            error_message: errorMessage,
            error_type: errorType,
            page_url: pageUrl
          }
        });
      } catch (e) {
        console.error('Failed to send admin notification:', e);
      }
    }

    return new Response(
      JSON.stringify({ success: true, errorId: data.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  if (action === 'get_stats') {
    const { period = '24h' } = payload;
    
    const periodMs = period === '24h' ? 24 * 60 * 60 * 1000 :
                     period === '7d' ? 7 * 24 * 60 * 60 * 1000 :
                     30 * 24 * 60 * 60 * 1000;

    const since = new Date(Date.now() - periodMs).toISOString();

    const { data: errors } = await supabase
      .from('error_logs')
      .select('severity, error_type, created_at')
      .gte('created_at', since);

    const stats = {
      total: errors?.length || 0,
      bySeverity: {
        critical: errors?.filter(e => e.severity === 'critical').length || 0,
        error: errors?.filter(e => e.severity === 'error').length || 0,
        warning: errors?.filter(e => e.severity === 'warning').length || 0
      },
      byType: {} as Record<string, number>,
      unresolved: 0
    };

    errors?.forEach(e => {
      stats.byType[e.error_type] = (stats.byType[e.error_type] || 0) + 1;
    });

    const { count: unresolvedCount } = await supabase
      .from('error_logs')
      .select('*', { count: 'exact', head: true })
      .is('resolved_at', null)
      .gte('created_at', since);

    stats.unresolved = unresolvedCount || 0;

    return new Response(
      JSON.stringify(stats),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  if (action === 'resolve_error') {
    const { errorId, resolvedBy } = payload;

    const { error } = await supabase
      .from('error_logs')
      .update({
        resolved_at: new Date().toISOString(),
        resolved_by: resolvedBy
      })
      .eq('id', errorId);

    if (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to resolve error' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ error: 'Invalid action' }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
  );
});
