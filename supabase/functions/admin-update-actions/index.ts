import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// ============================================================
// AI CONTENT GOVERNOR - RULES OF TRUTH
// ============================================================

const LOCKED_TERMINOLOGY = [
  'CMR', 'ADR', 'AETR', 'Incoterms', 'TIR', 'GDP', 'IATA DGR', 
  'FIATA', 'ISO 9001', 'ISO 28000', 'TAPA', 'AEO'
];

const LOCKED_CONCEPTS = [
  'cmr_liability_limits',
  'adr_classification_system', 
  'incoterms_2020_definitions',
  'gdp_temperature_requirements',
  'aetr_driving_limits',
  'tir_carnet_procedures'
];

const CRITICAL_PATTERNS = [
  /CMR.*8\.33.*SDR/i,
  /ADR.*class\s*[1-9]/i,
  /Incoterms.*202[0-9]/i,
  /GDP.*[+-]?\d+.*°C/i,
  /AETR.*9.*hours?.*driving/i,
  /TIR.*carnet/i
];

interface GovernanceValidation {
  isValid: boolean;
  violations: string[];
  severity: 'none' | 'warning' | 'critical';
  autoReject: boolean;
}

function validateContentWithGovernor(
  originalContent: Record<string, unknown> | null,
  updatedContent: Record<string, unknown> | null,
  chapterId: string
): GovernanceValidation {
  const violations: string[] = [];
  let severity: 'none' | 'warning' | 'critical' = 'none';
  let autoReject = false;

  if (!originalContent || !updatedContent) {
    return { isValid: true, violations: [], severity: 'none', autoReject: false };
  }

  const originalStr = JSON.stringify(originalContent).toLowerCase();
  const updatedStr = JSON.stringify(updatedContent).toLowerCase();

  // Check locked terminology modifications
  for (const term of LOCKED_TERMINOLOGY) {
    const termLower = term.toLowerCase();
    const originalCount = (originalStr.match(new RegExp(termLower, 'g')) || []).length;
    const updatedCount = (updatedStr.match(new RegExp(termLower, 'g')) || []).length;
    
    if (originalCount > 0 && updatedCount === 0) {
      violations.push(`CRITICAL: Removed locked term "${term}"`);
      severity = 'critical';
      autoReject = true;
    }
  }

  // Check critical patterns
  for (const pattern of CRITICAL_PATTERNS) {
    const originalMatch = pattern.test(originalStr);
    const updatedMatch = pattern.test(updatedStr);
    
    if (originalMatch && !updatedMatch) {
      violations.push(`CRITICAL: Modified critical compliance pattern`);
      severity = 'critical';
      autoReject = true;
    }
  }

  // Check for locked concepts in chapter
  for (const concept of LOCKED_CONCEPTS) {
    if (chapterId.includes(concept.split('_')[0])) {
      const originalLen = originalStr.length;
      const updatedLen = updatedStr.length;
      const changePercent = Math.abs(originalLen - updatedLen) / originalLen * 100;
      
      if (changePercent > 30) {
        violations.push(`WARNING: Large change (${changePercent.toFixed(1)}%) to locked concept area`);
        if (severity !== 'critical') severity = 'warning';
      }
    }
  }

  // Cross-language consistency check
  const languages = ['en', 'de', 'ro'];
  const langContents: Record<string, string> = {};
  
  for (const lang of languages) {
    if (typeof updatedContent === 'object' && updatedContent !== null) {
      const langContent = (updatedContent as Record<string, unknown>)[lang];
      if (langContent) {
        langContents[lang] = JSON.stringify(langContent);
      }
    }
  }

  // Check that all languages have similar structure
  const langLengths = Object.values(langContents).map(c => c.length);
  if (langLengths.length > 1) {
    const avgLen = langLengths.reduce((a, b) => a + b, 0) / langLengths.length;
    for (const len of langLengths) {
      if (Math.abs(len - avgLen) / avgLen > 0.5) {
        violations.push('WARNING: Significant language content length mismatch');
        if (severity !== 'critical') severity = 'warning';
      }
    }
  }

  return {
    isValid: violations.length === 0,
    violations,
    severity,
    autoReject
  };
}

// deno-lint-ignore no-explicit-any
async function logGovernanceIncident(
  supabase: any,
  updateId: string,
  chapterId: string,
  validation: GovernanceValidation,
  userId: string | null
) {
  // Log to governance_incidents table
  for (const violation of validation.violations) {
    const incidentType = violation.includes('CRITICAL') ? 'terminology_violation' : 
                         violation.includes('pattern') ? 'concept_violation' : 
                         'consistency_failure';
    
    await supabase.from('governance_incidents').insert({
      incident_type: incidentType,
      severity: validation.severity,
      chapter_id: chapterId,
      update_id: updateId,
      violated_rule: violation,
      content_preview: null,
      details: {
        all_violations: validation.violations,
        auto_rejected: validation.autoReject,
        validated_at: new Date().toISOString()
      },
      status: validation.autoReject ? 'resolved' : 'open',
      resolved_by: validation.autoReject ? userId : null,
      resolution_notes: validation.autoReject ? 'Auto-rejected by AI Content Governor' : null
    });
  }

  // Also log to audit log for historical tracking
  await supabase.from('update_audit_log').insert({
    action: 'governance_violation',
    entity_type: 'update',
    entity_id: updateId,
    chapter_id: chapterId,
    details: {
      violations: validation.violations,
      severity: validation.severity,
      auto_rejected: validation.autoReject,
      validated_at: new Date().toISOString()
    },
    performed_by: userId || 'ai_governor'
  });
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const { action, update_id, user_id, reason, skip_governance } = await req.json();

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

    // Handle governance validation
    if (action === 'validate_governance') {
      const { original_content, updated_content, chapter_id } = await req.json();
      
      const validation = validateContentWithGovernor(
        original_content,
        updated_content,
        chapter_id
      );

      return new Response(JSON.stringify({
        success: true,
        validation
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

    let result: { success: boolean; status?: string; message: string; governance?: GovernanceValidation } = { success: false, message: '' };

    switch (action) {
      case 'approve':
        // ============================================================
        // AI CONTENT GOVERNOR - VALIDATION BEFORE APPROVE
        // ============================================================
        if (!skip_governance) {
          const validation = validateContentWithGovernor(
            updateRecord.original_content as Record<string, unknown> | null,
            updateRecord.updated_content as Record<string, unknown> | null,
            updateRecord.chapter_id
          );

          if (validation.autoReject) {
            // Auto-reject by governance
            await logGovernanceIncident(supabase, update_id, updateRecord.chapter_id, validation, user_id);
            
            await supabase
              .from('auto_updates')
              .update({
                status: 'rejected',
                rollback_reason: `AI Governor auto-reject: ${validation.violations.join('; ')}`,
              })
              .eq('id', update_id);

            return new Response(JSON.stringify({ 
              success: false, 
              status: 'rejected',
              message: 'Update rejected by AI Content Governor',
              governance: validation
            }), {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
          }

          if (validation.severity === 'warning') {
            await logGovernanceIncident(supabase, update_id, updateRecord.chapter_id, validation, user_id);
          }
        }

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
          details: { approved_by: user_id, governance_passed: true },
          performed_by: user_id || 'admin'
        });

        result = { success: true, status: 'applied', message: 'Update approved and applied (governance passed)' };
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