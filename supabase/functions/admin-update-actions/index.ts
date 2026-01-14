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

  try {
    const { action, update_id, user_id, reason } = await req.json();

    console.log(`[ADMIN-ACTIONS] Action: ${action}, Update: ${update_id}`);

    if (!action) {
      throw new Error('Action is required');
    }

    // Handle force_recheck without update_id
    if (action === 'force_recheck') {
      const { data: sources } = await supabase
        .from('content_sources')
        .select('id')
        .eq('is_active', true);

      await supabase.from('update_audit_log').insert({
        action: 'force_recheck',
        entity_type: 'system',
        details: { triggered_by: user_id, sources_count: sources?.length },
        performed_by: user_id || 'admin'
      });

      return new Response(JSON.stringify({ 
        success: true, 
        message: `Force recheck triggered for ${sources?.length || 0} sources`,
        sources_count: sources?.length 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!update_id) {
      throw new Error('update_id is required for this action');
    }

    // Get the update record
    const { data: updateRecord, error: updateError } = await supabase
      .from('auto_updates')
      .select('*')
      .eq('id', update_id)
      .single();

    if (updateError || !updateRecord) {
      throw new Error('Update record not found');
    }

    let result: { success: boolean; status?: string; message: string } = { success: false, message: '' };

    switch (action) {
      case 'approve':
        // Approve and apply the update
        const { error: approveError } = await supabase
          .from('auto_updates')
          .update({
            status: 'applied',
            approved_by: user_id,
            approved_at: new Date().toISOString(),
            applied_at: new Date().toISOString(),
          })
          .eq('id', update_id);

        if (approveError) throw approveError;

        await supabase.from('update_audit_log').insert({
          action: 'update_applied',
          entity_type: 'update',
          entity_id: update_id,
          chapter_id: updateRecord.chapter_id,
          details: { approved_by: user_id },
          performed_by: user_id || 'admin'
        });

        result = { success: true, status: 'applied', message: 'Update approved and applied' };
        break;

      case 'reject':
        // Reject the update
        const { error: rejectError } = await supabase
          .from('auto_updates')
          .update({
            status: 'rejected',
            rollback_reason: reason || 'Rejected by admin',
          })
          .eq('id', update_id);

        if (rejectError) throw rejectError;

        await supabase.from('update_audit_log').insert({
          action: 'update_rejected',
          entity_type: 'update',
          entity_id: update_id,
          chapter_id: updateRecord.chapter_id,
          details: { rejected_by: user_id, reason },
          performed_by: user_id || 'admin'
        });

        result = { success: true, status: 'rejected', message: 'Update rejected' };
        break;

      case 'rollback':
        // Rollback an applied update
        if (updateRecord.status !== 'applied') {
          throw new Error('Can only rollback applied updates');
        }

        // Get previous version
        const { data: versions } = await supabase
          .from('chapter_versions')
          .select('*')
          .eq('chapter_id', updateRecord.chapter_id)
          .order('version_number', { ascending: false })
          .limit(2);

        if (!versions || versions.length < 2) {
          throw new Error('No previous version to rollback to');
        }

        const previousVersion = versions[1];

        // Create rollback version
        const { error: rollbackVersionError } = await supabase
          .from('chapter_versions')
          .insert({
            chapter_id: updateRecord.chapter_id,
            version_number: versions[0].version_number + 1,
            content_snapshot: previousVersion.content_snapshot,
            change_summary: `Rollback to version ${previousVersion.version_number}`,
            update_source: 'rollback',
            word_count: previousVersion.word_count,
          });

        if (rollbackVersionError) throw rollbackVersionError;

        // Update the auto_update record
        const { error: rollbackUpdateError } = await supabase
          .from('auto_updates')
          .update({
            status: 'rolled_back',
            rolled_back_at: new Date().toISOString(),
            rollback_reason: reason || 'Rolled back by admin',
          })
          .eq('id', update_id);

        if (rollbackUpdateError) throw rollbackUpdateError;

        await supabase.from('update_audit_log').insert({
          action: 'rollback',
          entity_type: 'update',
          entity_id: update_id,
          chapter_id: updateRecord.chapter_id,
          details: { 
            rolled_back_by: user_id, 
            reason,
            previous_version: previousVersion.version_number 
          },
          performed_by: user_id || 'admin'
        });

        result = { success: true, status: 'rolled_back', message: 'Update rolled back successfully' };
        break;

      default:
        throw new Error(`Unknown action: ${action}`);
    }

    console.log(`[ADMIN-ACTIONS] Completed: ${action}`, result);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[ADMIN-ACTIONS] Error:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
