import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RegeneratedContent {
  sections_updated: string[];
  content: { ro: string; de: string; en: string };
  summary: string;
  word_counts: { ro: number; de: number; en: number };
}

// Background task for processing a single chapter
async function processChapter(
  supabase: SupabaseClient,
  chId: string,
  change: Record<string, unknown> | null,
  change_id: string | undefined,
  auto_apply: boolean,
  jobId: string,
  lovableApiKey: string | undefined
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log(`[BG-REGEN] Processing chapter: ${chId}`);
    
    // Get current chapter version
    const { data: existingVersions } = await supabase
      .from('chapter_versions')
      .select('*')
      .eq('chapter_id', chId)
      .order('version_number', { ascending: false })
      .limit(1);

    const currentVersion = existingVersions?.[0] as Record<string, unknown> | undefined;
    const currentVersionNumber = typeof currentVersion?.version_number === 'number' 
      ? currentVersion.version_number 
      : 0;
    const newVersionNumber = currentVersionNumber + 1;

    // Prepare simpler update prompt for faster AI response
    const updatePrompt = `Update freight forwarding training content for chapter "${chId}".

CHANGE: ${change?.title || 'Content refresh'}
DETAILS: ${change?.description || 'Update based on latest standards'}
SEVERITY: ${change?.severity || 'minor'}
${change?.new_value ? `NEW VALUE: ${change.new_value}` : ''}

Generate a brief content update in JSON:
{
  "sections_updated": ["section1"],
  "content": {
    "ro": "Conținut actualizat în română (min 500 cuvinte)",
    "de": "Aktualisierter Inhalt auf Deutsch (min 500 Wörter)",
    "en": "Updated content in English (min 500 words)"
  },
  "summary": "Brief summary of changes",
  "word_counts": { "ro": 500, "de": 500, "en": 500 }
}`;

    let regeneratedContent: RegeneratedContent | null = null;

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
            { 
              role: 'system', 
              content: 'You are a freight forwarding content updater. Be concise. Respond with valid JSON only.' 
            },
            { role: 'user', content: updatePrompt }
          ],
        }),
      });

      if (aiResponse.ok) {
        const aiData = await aiResponse.json();
        const content = aiData.choices?.[0]?.message?.content || '{}';
        console.log(`[BG-REGEN] AI response received for ${chId}`);
        try {
          const jsonMatch = content.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            regeneratedContent = JSON.parse(jsonMatch[0]);
          }
        } catch (parseErr) {
          console.log('[BG-REGEN] Parse error:', parseErr);
        }
      } else {
        console.error('[BG-REGEN] AI error:', await aiResponse.text());
      }
    }

    // VALIDATION: Ensure content meets minimum word count (prevents content reduction attacks)
    const MIN_WORD_COUNT = 100; // Minimum per language
    const validateContent = (content: RegeneratedContent | null): boolean => {
      if (!content || !content.word_counts) return false;
      const { ro, de, en } = content.word_counts;
      return ro >= MIN_WORD_COUNT && de >= MIN_WORD_COUNT && en >= MIN_WORD_COUNT;
    };

    if (!regeneratedContent || !validateContent(regeneratedContent)) {
      console.log(`[BG-REGEN] Content validation failed for ${chId}, using fallback`);
      regeneratedContent = {
        sections_updated: ['general'],
        content: { 
          ro: `Capitol ${chId} actualizat conform ultimelor standarde din industrie. Acest conținut va fi revizuit manual.`,
          de: `Kapitel ${chId} gemäß den neuesten Industriestandards aktualisiert. Dieser Inhalt wird manuell überprüft.`,
          en: `Chapter ${chId} updated according to latest industry standards. This content will be reviewed manually.`
        },
        summary: 'Fallback update - AI content did not meet minimum requirements',
        word_counts: { ro: 15, de: 14, en: 16 }
      };
      
      // Log the validation failure for admin review
      await supabase.from('update_audit_log').insert({
        action: 'content_validation_failed',
        entity_type: 'chapter',
        chapter_id: chId,
        details: { 
          reason: 'AI content did not meet minimum word count requirement',
          min_required: MIN_WORD_COUNT,
          job_id: jobId
        },
        performed_by: 'system'
      } as Record<string, unknown>);
    }

    // Create new version
    const totalWords = Object.values(regeneratedContent.word_counts || {}).reduce((a, b) => a + b, 0);
    
    const { data: newVersion, error: versionError } = await supabase
      .from('chapter_versions')
      .insert({
        chapter_id: chId,
        version_number: newVersionNumber,
        content_snapshot: regeneratedContent,
        change_summary: regeneratedContent.summary,
        update_source: 'auto',
        related_change_ids: change_id ? [change_id] : [],
        word_count: totalWords,
      } as Record<string, unknown>)
      .select()
      .single();

    if (versionError) {
      console.error('[BG-REGEN] Version error:', versionError);
      throw versionError;
    }

    // Create auto_update record
    const changeSeverity = (change?.severity as string) || 'minor';
    
    // Check chapter's content level for governance rules
    const { data: chapterData } = await supabase
      .from('chapters')
      .select('content_level, auto_update_blocked')
      .eq('id', chId)
      .single();
    
    const contentLevel = chapterData?.content_level || 'informational';
    const isBlocked = chapterData?.auto_update_blocked || false;
    
    // Human-in-the-loop: CRITICAL content or MAJOR/CRITICAL severity always requires approval
    const requiresApproval = 
      changeSeverity === 'critical' || 
      changeSeverity === 'major' || 
      contentLevel === 'critical';
    
    // If chapter has auto-update blocked, skip creating update
    if (isBlocked) {
      console.log(`[BG-REGEN] Chapter ${chId} has auto-update blocked, skipping`);
      await supabase.from('update_audit_log').insert({
        action: 'auto_update_blocked_skip',
        entity_type: 'chapter',
        chapter_id: chId,
        details: { reason: 'Chapter has auto-update blocked by admin' },
        performed_by: 'system',
        content_level: contentLevel
      } as Record<string, unknown>);
      return { success: true };
    }
    
    await supabase
      .from('auto_updates')
      .insert({
        chapter_id: chId,
        change_id: change_id,
        status: requiresApproval ? 'pending' : (auto_apply ? 'applied' : 'pending'),
        severity: changeSeverity,
        content_level: contentLevel,
        title: `Update: ${change?.title || 'Content refresh'}`,
        description: regeneratedContent.summary,
        original_content: currentVersion?.content_snapshot,
        updated_content: regeneratedContent,
        sections_affected: regeneratedContent.sections_updated,
        languages_updated: ['ro', 'de', 'en'],
        ai_model_used: 'google/gemini-2.5-flash-lite',
        requires_approval: requiresApproval,
        applied_at: auto_apply && !requiresApproval ? new Date().toISOString() : null,
      } as Record<string, unknown>);

    const versionData = newVersion as Record<string, unknown> | null;

    // Log the regeneration
    await supabase.from('update_audit_log').insert({
      action: 'content_regenerated',
      entity_type: 'chapter',
      entity_id: versionData?.id,
      chapter_id: chId,
      details: {
        job_id: jobId,
        version_number: newVersionNumber,
        change_id,
        severity: changeSeverity,
        sections_updated: regeneratedContent.sections_updated,
      },
      performed_by: 'system'
    } as Record<string, unknown>);

    console.log(`[BG-REGEN] Chapter ${chId} completed - version ${newVersionNumber}`);
    return { success: true };

  } catch (error) {
    console.error(`[BG-REGEN] Chapter ${chId} failed:`, error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Main background processing function
async function processRegenerationJob(
  supabase: SupabaseClient,
  jobId: string,
  chaptersToUpdate: string[],
  change: Record<string, unknown> | null,
  change_id: string | undefined,
  auto_apply: boolean,
  lovableApiKey: string | undefined
) {
  console.log(`[BG-REGEN] Starting job ${jobId} with ${chaptersToUpdate.length} chapters`);
  
  // Update job status to processing
  await supabase
    .from('regeneration_jobs')
    .update({ 
      status: 'processing', 
      started_at: new Date().toISOString() 
    } as Record<string, unknown>)
    .eq('id', jobId);

  const completed: string[] = [];
  const failed: Array<{ chapter: string; error: string }> = [];

  // Process chapters sequentially to avoid rate limits
  for (const chId of chaptersToUpdate) {
    const result = await processChapter(
      supabase, chId, change, change_id, auto_apply, jobId, lovableApiKey
    );
    
    if (result.success) {
      completed.push(chId);
    } else {
      failed.push({ chapter: chId, error: result.error || 'Unknown error' });
    }

    // Update job progress
    await supabase
      .from('regeneration_jobs')
      .update({ 
        chapters_completed: completed,
        chapters_failed: failed,
        processed_chapters: completed.length + failed.length
      } as Record<string, unknown>)
      .eq('id', jobId);
  }

  // Mark change as processed
  if (change_id && completed.length > 0) {
    await supabase
      .from('detected_changes')
      .update({ 
        is_processed: true, 
        processed_at: new Date().toISOString() 
      } as Record<string, unknown>)
      .eq('id', change_id);
  }

  // Finalize job
  const finalStatus = failed.length === 0 
    ? 'completed' 
    : completed.length === 0 
      ? 'failed' 
      : 'partial';

  const completedAt = new Date().toISOString();
  await supabase
    .from('regeneration_jobs')
    .update({ 
      status: finalStatus,
      completed_at: completedAt,
      error_message: failed.length > 0 ? `${failed.length} chapter(s) failed` : null
    } as Record<string, unknown>)
    .eq('id', jobId);

  console.log(`[BG-REGEN] Job ${jobId} finished - Status: ${finalStatus}, Completed: ${completed.length}, Failed: ${failed.length}`);

  // Send email notification when job completes
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

  // Fetch the job to get started_at for duration calculation
  const { data: jobData } = await supabase
    .from('regeneration_jobs')
    .select('started_at')
    .eq('id', jobId)
    .single();

  let duration = 'N/A';
  if (jobData?.started_at) {
    const startTime = new Date(jobData.started_at as string).getTime();
    const endTime = new Date(completedAt).getTime();
    const durationMs = endTime - startTime;
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000);
    duration = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
  }

  try {
    const notificationType = finalStatus === 'failed' ? 'job_failed' : 'job_completed';
    await fetch(`${supabaseUrl}/functions/v1/send-admin-notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseServiceKey}`,
      },
      body: JSON.stringify({
        type: notificationType,
        data: {
          job_id: jobId,
          chapters_completed: completed.length,
          chapters_failed: failed.length,
          duration,
          error_message: failed.length > 0 ? failed.map(f => `${f.chapter}: ${f.error}`).join('; ') : undefined,
        }
      }),
    });
    console.log(`[BG-REGEN] Notification email sent for job ${jobId}`);
  } catch (notifError) {
    console.error(`[BG-REGEN] Failed to send notification for job ${jobId}:`, notifError);
  }
}

// Shutdown handler
addEventListener('beforeunload', (ev: Event) => {
  const detail = (ev as CustomEvent).detail;
  console.log(`[BG-REGEN] Function shutdown - reason: ${detail?.reason || 'unknown'}`);
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
  
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const { change_id, chapter_id, auto_apply = false, job_id } = await req.json();

    // Check job status if job_id provided
    if (job_id) {
      const { data: job, error } = await supabase
        .from('regeneration_jobs')
        .select('*')
        .eq('id', job_id)
        .single();

      if (error) throw error;
      
      return new Response(JSON.stringify({
        success: true,
        job,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!change_id && !chapter_id) {
      throw new Error('Either change_id or chapter_id is required');
    }

    console.log(`[CONTENT-REGEN] Request received - change: ${change_id}, chapter: ${chapter_id}`);

    // Get the change details
    let change: Record<string, unknown> | null = null;
    let impacts: Array<{ chapter_id: string }> = [];

    if (change_id) {
      const { data: changeData, error: changeError } = await supabase
        .from('detected_changes')
        .select('*, content_sources(*)')
        .eq('id', change_id)
        .single();

      if (changeError) throw changeError;
      change = changeData as Record<string, unknown>;

      const { data: impactData } = await supabase
        .from('chapter_impacts')
        .select('*')
        .eq('change_id', change_id);

      impacts = (impactData || []) as Array<{ chapter_id: string }>;
    }

    const chaptersToUpdate = chapter_id 
      ? [chapter_id] 
      : impacts.map(i => i.chapter_id);

    if (chaptersToUpdate.length === 0) {
      return new Response(JSON.stringify({
        success: true,
        message: 'No chapters to update',
        chapters_processed: 0,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Create job record
    const { data: job, error: jobError } = await supabase
      .from('regeneration_jobs')
      .insert({
        change_id,
        chapters_to_process: chaptersToUpdate,
        total_chapters: chaptersToUpdate.length,
        auto_apply,
        status: 'queued',
      } as Record<string, unknown>)
      .select()
      .single();

    if (jobError) throw jobError;

    const jobData = job as Record<string, unknown>;
    const jobIdValue = jobData.id as string;

    console.log(`[CONTENT-REGEN] Created job ${jobIdValue} for ${chaptersToUpdate.length} chapters`);

    // Start background processing using EdgeRuntime.waitUntil
    // @ts-ignore - EdgeRuntime is available in Supabase Edge Functions
    EdgeRuntime.waitUntil(
      processRegenerationJob(
        supabase, 
        jobIdValue, 
        chaptersToUpdate, 
        change, 
        change_id, 
        auto_apply,
        lovableApiKey
      )
    );

    // Return immediately with job info
    return new Response(JSON.stringify({
      success: true,
      message: 'Regeneration job started in background',
      job_id: jobIdValue,
      chapters_queued: chaptersToUpdate.length,
      chapters: chaptersToUpdate,
      status_url: `Check status by calling with { "job_id": "${jobIdValue}" }`,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[CONTENT-REGEN] Error:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
