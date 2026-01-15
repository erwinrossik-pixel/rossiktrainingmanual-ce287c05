import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AnalysisChange {
  type?: string;
  severity?: string;
  title?: string;
  description?: string;
  oldValue?: string;
  newValue?: string;
  affectedCategories?: string[];
}

interface AnalysisResult {
  hasChanges: boolean;
  changes: AnalysisChange[];
}

interface ChangeRecord {
  source_id: string;
  detected_at: string;
  change_type: string;
  severity: string;
  title: string;
  description: string;
  old_value: string;
  new_value: string;
  source_url: string;
  raw_data: AnalysisChange;
  is_processed: boolean;
  affected_chapters?: string[];
}

// Chapter mappings for impact detection
const CHAPTER_MAPPINGS: Record<string, string[]> = {
  'transport': ['intro', 'workflow', 'vehicle', 'loading', 'driving-time', 'fleet', 'carrier-management'],
  'customs': ['customs', 'compliance', 'documents', 'incoterms', 'europe-zones'],
  'pricing': ['pricing', 'commercial', 'negotiation', 'accounting', 'payment'],
  'compliance': ['compliance', 'driving-time', 'adr', 'licenses-oversize', 'documents'],
  'sanctions': ['risk-management', 'compliance', 'red-flags', 'customs'],
  'legislation': ['compliance', 'driving-time', 'customs', 'environment', 'licenses-oversize'],
  'fuel': ['pricing', 'commercial', 'fleet', 'accounting'],
  'tolls': ['pricing', 'europe-zones', 'commercial'],
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
  
  const supabase = createClient(supabaseUrl, supabaseServiceKey);
  const startTime = Date.now();
  let logId: string | null = null;

  try {
    const { action, source_id, force_check, manual, triggered_by } = await req.json().catch(() => ({}));
    const executionType = manual ? 'manual' : 'scheduled';
    
    console.log(`[AUTO-UPDATE] Action: ${action || 'daily_check'}, Source: ${source_id || 'all'}, Type: ${executionType}`);

    // Create cron job log entry
    const { data: logEntry } = await supabase
      .from('cron_job_logs')
      .insert({
        job_name: 'auto-update-check',
        execution_type: executionType,
        status: 'running',
        triggered_by: triggered_by || null,
        execution_details: { action: action || 'daily_check', source_id, force_check }
      })
      .select('id')
      .single();
    
    logId = logEntry?.id;

    // Log the start in audit log
    await supabase.from('update_audit_log').insert({
      action: 'source_check',
      entity_type: 'system',
      details: { action: action || 'daily_check', source_id, force_check },
      performed_by: 'system'
    });

    // Get active sources to check
    let sourcesQuery = supabase
      .from('content_sources')
      .select('*')
      .eq('is_active', true);
    
    if (source_id) {
      sourcesQuery = sourcesQuery.eq('id', source_id);
    }

    const { data: sources, error: sourcesError } = await sourcesQuery;
    
    if (sourcesError) {
      console.error('[AUTO-UPDATE] Error fetching sources:', sourcesError);
      throw sourcesError;
    }

    console.log(`[AUTO-UPDATE] Found ${sources?.length || 0} active sources to check`);

    const results: Array<{
      source: string;
      status: string;
      changes_detected: boolean;
      response_time_ms: number;
    }> = [];
    const detectedChanges: ChangeRecord[] = [];

    for (const source of sources || []) {
      const startTime = Date.now();
      let checkResult: {
        source_id: string;
        checked_at: string;
        status: string;
        changes_detected: boolean;
        content_hash?: string;
        response_time_ms?: number;
        error_message?: string;
        raw_data?: { analysis: AnalysisResult };
      } = {
        source_id: source.id,
        checked_at: new Date().toISOString(),
        status: 'success',
        changes_detected: false,
      };

      try {
        // Simulate fetching source (in production, this would be real HTTP calls)
        // For now, we'll use AI to simulate content analysis
        const analysisPrompt = `You are a freight forwarding industry expert monitoring for regulatory changes.

Analyze the following source for potential updates relevant to freight forwarding training:
- Source: ${source.name}
- Category: ${source.category}
- URL: ${source.url}

Based on current industry knowledge (as of January 2026), identify any recent changes in:
1. Transport regulations (EU, national)
2. Customs procedures
3. Fuel surcharges and pricing
4. Environmental regulations
5. Driving time rules
6. ADR/dangerous goods
7. Sanctions and trade restrictions

Respond in JSON format:
{
  "hasChanges": boolean,
  "changes": [
    {
      "type": "value_change|new_rule|restriction|invalidation",
      "severity": "minor|major|critical",
      "title": "Brief title",
      "description": "Detailed description",
      "oldValue": "Previous value if applicable",
      "newValue": "New value if applicable",
      "affectedCategories": ["transport", "customs", etc]
    }
  ]
}

If no significant changes, return {"hasChanges": false, "changes": []}`;

        // Call Lovable AI for analysis
        let analysisResult: AnalysisResult = { hasChanges: false, changes: [] };
        
        if (lovableApiKey) {
          const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${lovableApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'google/gemini-2.5-flash-lite',
              messages: [
                { role: 'system', content: 'You are a freight forwarding regulatory expert. Respond only with valid JSON.' },
                { role: 'user', content: analysisPrompt }
              ],
            }),
          });

          if (aiResponse.ok) {
            const aiData = await aiResponse.json();
            const content = aiData.choices?.[0]?.message?.content || '{}';
            try {
              // Extract JSON from response
              const jsonMatch = content.match(/\{[\s\S]*\}/);
              if (jsonMatch) {
                analysisResult = JSON.parse(jsonMatch[0]);
              }
            } catch {
              console.log('[AUTO-UPDATE] Could not parse AI response, assuming no changes');
            }
          }
        }

        // Generate content hash for change detection
        const contentHash = btoa(JSON.stringify(analysisResult)).slice(0, 32);
        checkResult.content_hash = contentHash;
        checkResult.response_time_ms = Date.now() - startTime;

        // Check if content changed from last check
        if (source.last_hash && source.last_hash !== contentHash) {
          checkResult.changes_detected = true;
        }

        // Process detected changes
        if (analysisResult.hasChanges && analysisResult.changes?.length > 0) {
          checkResult.changes_detected = true;
          
          for (const change of analysisResult.changes) {
            const changeRecord: ChangeRecord = {
              source_id: source.id,
              detected_at: new Date().toISOString(),
              change_type: change.type || 'value_change',
              severity: change.severity || 'minor',
              title: change.title || 'Untitled change',
              description: change.description || '',
              old_value: change.oldValue || '',
              new_value: change.newValue || '',
              source_url: source.url,
              raw_data: change,
              is_processed: false,
            };
            
            // Map to affected chapters
            const affectedChapters = new Set<string>();
            for (const cat of change.affectedCategories || [source.category]) {
              const chapters = CHAPTER_MAPPINGS[cat] || [];
              chapters.forEach(c => affectedChapters.add(c));
            }

            changeRecord.affected_chapters = Array.from(affectedChapters);
            detectedChanges.push(changeRecord);
          }
        }

        // Log the check
        checkResult.raw_data = { analysis: analysisResult };

      } catch (sourceError) {
        console.error(`[AUTO-UPDATE] Error checking source ${source.name}:`, sourceError);
        checkResult.status = 'error';
        checkResult.error_message = sourceError instanceof Error ? sourceError.message : 'Unknown error';
        checkResult.response_time_ms = Date.now() - startTime;
      }

      // Insert check log
      const { error: logError } = await supabase
        .from('source_check_logs')
        .insert(checkResult);

      if (logError) {
        console.error('[AUTO-UPDATE] Error inserting check log:', logError);
      }

      // Update source last_checked
      await supabase
        .from('content_sources')
        .update({ 
          last_checked_at: new Date().toISOString(),
          last_hash: checkResult.content_hash 
        })
        .eq('id', source.id);

      results.push({
        source: source.name,
        status: checkResult.status,
        changes_detected: checkResult.changes_detected,
        response_time_ms: checkResult.response_time_ms || 0,
      });
    }

    // Insert detected changes
    if (detectedChanges.length > 0) {
      const { data: insertedChanges, error: changesError } = await supabase
        .from('detected_changes')
        .insert(detectedChanges.map(c => ({
          source_id: c.source_id,
          detected_at: c.detected_at,
          change_type: c.change_type,
          severity: c.severity,
          title: c.title,
          description: c.description,
          old_value: c.old_value,
          new_value: c.new_value,
          source_url: c.source_url,
          raw_data: c.raw_data,
          is_processed: false,
        })))
        .select();

      if (changesError) {
        console.error('[AUTO-UPDATE] Error inserting changes:', changesError);
      } else {
        console.log(`[AUTO-UPDATE] Inserted ${insertedChanges?.length || 0} detected changes`);

        // Create chapter impacts for each change
        for (let i = 0; i < (insertedChanges?.length || 0); i++) {
          const change = insertedChanges![i];
          const affectedChapters = detectedChanges[i]?.affected_chapters || [];

          for (const chapterId of affectedChapters) {
            await supabase.from('chapter_impacts').insert({
              change_id: change.id,
              chapter_id: chapterId,
              impact_level: change.severity === 'critical' ? 'direct' : 'indirect',
              ai_confidence: 0.75,
            });
          }

          // Send email notification for CRITICAL changes
          if (change.severity === 'critical') {
            console.log(`[AUTO-UPDATE] Sending email notification for critical change: ${change.title}`);
            try {
              await fetch(`${supabaseUrl}/functions/v1/send-admin-notification`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${supabaseServiceKey}`,
                },
                body: JSON.stringify({
                  type: 'critical_change',
                  data: {
                    change_title: change.title,
                    source_name: detectedChanges[i]?.source_url || 'Unknown source',
                    severity: change.severity,
                    summary: change.description,
                  }
                }),
              });
            } catch (notifError) {
              console.error('[AUTO-UPDATE] Failed to send notification:', notifError);
            }
          }
        }
      }
    }

    // Update last full check timestamp
    await supabase
      .from('auto_update_settings')
      .update({ setting_value: JSON.stringify(new Date().toISOString()) })
      .eq('setting_key', 'last_full_check');

    const durationMs = Date.now() - startTime;

    // Update cron job log with success
    if (logId) {
      await supabase
        .from('cron_job_logs')
        .update({
          status: 'success',
          completed_at: new Date().toISOString(),
          duration_ms: durationMs,
          items_processed: results.length,
          items_failed: 0,
          result_summary: `Verificate ${results.length} surse, detectate ${detectedChanges.length} schimbări`,
          execution_details: {
            sources_checked: results.length,
            changes_detected: detectedChanges.length,
            results: results.map(r => ({ source: r.source, status: r.status, changes: r.changes_detected }))
          }
        })
        .eq('id', logId);
    }

    // Log completion in audit log
    await supabase.from('update_audit_log').insert({
      action: 'source_check',
      entity_type: 'system',
      details: { 
        completed: true,
        sources_checked: results.length,
        changes_detected: detectedChanges.length,
        duration_ms: durationMs
      },
      performed_by: 'system'
    });

    console.log(`[AUTO-UPDATE] Completed in ${durationMs}ms. Checked ${results.length} sources, found ${detectedChanges.length} changes`);

    return new Response(JSON.stringify({
      success: true,
      sources_checked: results.length,
      changes_detected: detectedChanges.length,
      duration_ms: durationMs,
      results,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[AUTO-UPDATE] Error:', error);
    const durationMs = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Update cron job log with failure
    if (logId) {
      await supabase
        .from('cron_job_logs')
        .update({
          status: 'failed',
          completed_at: new Date().toISOString(),
          duration_ms: durationMs,
          error_message: errorMessage,
          result_summary: `Eroare: ${errorMessage}`
        })
        .eq('id', logId);
    }

    await supabase.from('update_audit_log').insert({
      action: 'source_check',
      entity_type: 'system',
      details: { error: errorMessage, duration_ms: durationMs },
      performed_by: 'system'
    });

    return new Response(JSON.stringify({ 
      error: errorMessage,
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
