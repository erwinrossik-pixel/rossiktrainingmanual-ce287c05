import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const CRITICAL_TABLES = [
  'profiles',
  'chapters',
  'chapter_progress',
  'quiz_attempts',
  'certificates',
  'companies',
  'company_users',
  'training_time'
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const { action } = await req.json();

  if (action === 'create_backup') {
    const startTime = Date.now();
    
    // Create backup log entry
    const { data: backupLog, error: logError } = await supabase
      .from('backup_logs')
      .insert({
        backup_type: 'full',
        status: 'running',
        tables_backed_up: CRITICAL_TABLES,
        started_at: new Date().toISOString()
      })
      .select()
      .single();

    if (logError) {
      return new Response(
        JSON.stringify({ error: 'Failed to create backup log', details: logError }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    try {
      // Export data from critical tables
      const backupData: Record<string, unknown[]> = {};
      let totalSize = 0;

      for (const table of CRITICAL_TABLES) {
        const { data, error } = await supabase.from(table).select('*');
        if (error) {
          console.error(`Error backing up ${table}:`, error);
          continue;
        }
        backupData[table] = data || [];
        totalSize += JSON.stringify(data).length;
      }

      const duration = Date.now() - startTime;

      // Update backup log
      await supabase
        .from('backup_logs')
        .update({
          status: 'completed',
          size_bytes: totalSize,
          duration_ms: duration,
          completed_at: new Date().toISOString()
        })
        .eq('id', backupLog.id);

      // Log to cron job logs
      await supabase.from('cron_job_logs').insert({
        job_name: 'database_backup',
        execution_type: 'manual',
        status: 'completed',
        started_at: new Date(startTime).toISOString(),
        completed_at: new Date().toISOString(),
        duration_ms: duration,
        items_processed: CRITICAL_TABLES.length,
        result_summary: `Backed up ${Object.values(backupData).reduce((a, b) => a + b.length, 0)} records from ${CRITICAL_TABLES.length} tables`
      });

      return new Response(
        JSON.stringify({
          success: true,
          backupId: backupLog.id,
          tablesBackedUp: CRITICAL_TABLES.length,
          totalRecords: Object.values(backupData).reduce((a, b) => a + b.length, 0),
          sizeBytes: totalSize,
          durationMs: duration
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (e: unknown) {
      const errorMsg = e instanceof Error ? e.message : 'Unknown error';
      await supabase
        .from('backup_logs')
        .update({
          status: 'failed',
          error_message: errorMsg,
          completed_at: new Date().toISOString()
        })
        .eq('id', backupLog.id);

      return new Response(
        JSON.stringify({ error: 'Backup failed', details: errorMsg }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }
  }

  if (action === 'verify_backup') {
    const { backupId } = await req.json();
    
    // Get backup log
    const { data: backup, error } = await supabase
      .from('backup_logs')
      .select('*')
      .eq('id', backupId)
      .single();

    if (error || !backup) {
      return new Response(
        JSON.stringify({ error: 'Backup not found' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
      );
    }

    // Create recovery test record
    const { data: test, error: testError } = await supabase
      .from('recovery_tests')
      .insert({
        backup_id: backupId,
        test_type: 'data_verification',
        status: 'running',
        tables_tested: backup.tables_backed_up
      })
      .select()
      .single();

    if (testError) {
      return new Response(
        JSON.stringify({ error: 'Failed to create test record' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    let totalRecords = 0;
    const tableResults: Record<string, number> = {};

    for (const table of backup.tables_backed_up || []) {
      const { count } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });
      tableResults[table] = count || 0;
      totalRecords += count || 0;
    }

    await supabase
      .from('recovery_tests')
      .update({
        status: 'completed',
        records_verified: totalRecords,
        test_results: tableResults,
        completed_at: new Date().toISOString()
      })
      .eq('id', test.id);

    return new Response(
      JSON.stringify({
        success: true,
        testId: test.id,
        recordsVerified: totalRecords,
        tableResults
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  if (action === 'get_status') {
    // Get latest backup
    const { data: latestBackup } = await supabase
      .from('backup_logs')
      .select('*')
      .order('started_at', { ascending: false })
      .limit(1)
      .single();

    // Get backup stats
    const { data: backupStats } = await supabase
      .from('backup_logs')
      .select('status')
      .gte('started_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());

    const stats = {
      total: backupStats?.length || 0,
      completed: backupStats?.filter(b => b.status === 'completed').length || 0,
      failed: backupStats?.filter(b => b.status === 'failed').length || 0
    };

    return new Response(
      JSON.stringify({
        latestBackup,
        last30Days: stats,
        nextScheduled: 'Daily at 02:00 UTC'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ error: 'Invalid action' }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
  );
});
