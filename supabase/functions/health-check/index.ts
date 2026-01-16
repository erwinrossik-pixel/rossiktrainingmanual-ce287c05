import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface HealthCheckResult {
  service: string;
  status: 'healthy' | 'degraded' | 'down';
  responseTime: number;
  details?: Record<string, unknown>;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const startTime = Date.now();
  const results: HealthCheckResult[] = [];
  
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // 1. Database Health Check
  const dbStart = Date.now();
  try {
    const { data, error } = await supabase
      .from('chapters')
      .select('id')
      .limit(1);
    
    const dbTime = Date.now() - dbStart;
    results.push({
      service: 'database',
      status: error ? 'down' : dbTime > 1000 ? 'degraded' : 'healthy',
      responseTime: dbTime,
      details: error ? { error: error.message } : { connected: true }
    });
  } catch (e: unknown) {
    results.push({
      service: 'database',
      status: 'down',
      responseTime: Date.now() - dbStart,
      details: { error: e instanceof Error ? e.message : 'Unknown error' }
    });
  }

  // 2. Auth Service Check
  const authStart = Date.now();
  try {
    const { data, error } = await supabase.auth.getSession();
    const authTime = Date.now() - authStart;
    results.push({
      service: 'auth',
      status: error ? 'degraded' : authTime > 500 ? 'degraded' : 'healthy',
      responseTime: authTime,
      details: { operational: !error }
    });
  } catch (e: unknown) {
    results.push({
      service: 'auth',
      status: 'down',
      responseTime: Date.now() - authStart,
      details: { error: e instanceof Error ? e.message : 'Unknown error' }
    });
  }

  // 3. Storage Check
  const storageStart = Date.now();
  try {
    const { data, error } = await supabase.storage.listBuckets();
    const storageTime = Date.now() - storageStart;
    results.push({
      service: 'storage',
      status: error ? 'down' : storageTime > 1000 ? 'degraded' : 'healthy',
      responseTime: storageTime,
      details: { buckets: data?.length || 0 }
    });
  } catch (e: unknown) {
    results.push({
      service: 'storage',
      status: 'down',
      responseTime: Date.now() - storageStart,
      details: { error: e instanceof Error ? e.message : 'Unknown error' }
    });
  }

  // Calculate overall status
  const totalTime = Date.now() - startTime;
  const hasDown = results.some(r => r.status === 'down');
  const hasDegraded = results.some(r => r.status === 'degraded');
  const overallStatus = hasDown ? 'down' : hasDegraded ? 'degraded' : 'healthy';

  // Log health check to database
  try {
    await supabase.from('system_health_checks').insert(
      results.map(r => ({
        check_type: r.service,
        status: r.status,
        response_time_ms: r.responseTime,
        details: r.details,
        checked_at: new Date().toISOString()
      }))
    );
  } catch (e) {
    console.error('Failed to log health check:', e);
  }

  // Calculate uptime from last 24 hours
  let uptimePercent = 100;
  try {
    const { data: recentChecks } = await supabase
      .from('system_health_checks')
      .select('status')
      .gte('checked_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
    
    if (recentChecks && recentChecks.length > 0) {
      const healthyCount = recentChecks.filter(c => c.status === 'healthy').length;
      uptimePercent = (healthyCount / recentChecks.length) * 100;
    }
  } catch (e) {
    console.error('Failed to calculate uptime:', e);
  }

  return new Response(
    JSON.stringify({
      status: overallStatus,
      timestamp: new Date().toISOString(),
      totalResponseTime: totalTime,
      uptime24h: uptimePercent.toFixed(2),
      services: results
    }),
    { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: overallStatus === 'down' ? 503 : 200
    }
  );
});
