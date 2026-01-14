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
  const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
  
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const { change_id, chapter_id, auto_apply } = await req.json();

    if (!change_id && !chapter_id) {
      throw new Error('Either change_id or chapter_id is required');
    }

    console.log(`[CONTENT-REGEN] Processing change: ${change_id}, chapter: ${chapter_id}`);

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
      change = changeData;

      // Get impacted chapters
      const { data: impactData } = await supabase
        .from('chapter_impacts')
        .select('*')
        .eq('change_id', change_id);

      impacts = impactData || [];
    }

    const chaptersToUpdate = chapter_id 
      ? [chapter_id] 
      : impacts.map(i => i.chapter_id);

    console.log(`[CONTENT-REGEN] Chapters to update: ${chaptersToUpdate.join(', ')}`);

    const results: Array<{
      chapter_id: string;
      version_number?: number;
      status: string;
      sections_updated?: string[];
      summary?: string;
      error?: string;
    }> = [];

    for (const chId of chaptersToUpdate) {
      try {
        // Get current chapter version
        const { data: existingVersions } = await supabase
          .from('chapter_versions')
          .select('*')
          .eq('chapter_id', chId)
          .order('version_number', { ascending: false })
          .limit(1);

        const currentVersion = existingVersions?.[0];
        const newVersionNumber = (currentVersion?.version_number || 0) + 1;

        // Prepare update prompt
        const updatePrompt = `You are updating content for a freight forwarding training manual chapter.

CHAPTER: ${chId}
CHANGE DETECTED: ${change?.title || 'Manual update requested'}
CHANGE DETAILS: ${change?.description || 'Update content based on latest industry standards'}
SEVERITY: ${change?.severity || 'minor'}
OLD VALUE: ${change?.old_value || 'N/A'}
NEW VALUE: ${change?.new_value || 'N/A'}

Generate updated content sections that:
1. Incorporate the new information accurately
2. Maintain professional training manual tone
3. Provide content in all THREE languages (RO, DE, EN)
4. Keep minimum 3500 words per language
5. Include practical examples where relevant

Respond in JSON format:
{
  "sections_updated": ["section_name1", "section_name2"],
  "content": {
    "ro": "Updated Romanian content...",
    "de": "Updated German content...",
    "en": "Updated English content..."
  },
  "summary": "Brief summary of changes made",
  "word_counts": { "ro": 3500, "de": 3500, "en": 3500 }
}`;

        let regeneratedContent: {
          sections_updated: string[];
          content: { ro: string; de: string; en: string };
          summary: string;
          word_counts: { ro: number; de: number; en: number };
        } | null = null;

        if (lovableApiKey) {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 50000); // 50s timeout
            
            const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${lovableApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                model: 'google/gemini-2.5-flash-lite', // Use lighter model for faster response
                messages: [
                  { 
                    role: 'system', 
                    content: 'You are a freight forwarding training content updater. Generate brief, accurate content updates. Respond only with valid JSON.' 
                  },
                  { role: 'user', content: updatePrompt }
                ],
              }),
              signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (aiResponse.ok) {
              const aiData = await aiResponse.json();
              const content = aiData.choices?.[0]?.message?.content || '{}';
              console.log(`[CONTENT-REGEN] AI response for ${chId}: ${content.substring(0, 200)}...`);
              try {
                const jsonMatch = content.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                  regeneratedContent = JSON.parse(jsonMatch[0]);
                }
              } catch (parseErr) {
                console.log('[CONTENT-REGEN] Could not parse AI response:', parseErr);
              }
            } else {
              const errText = await aiResponse.text();
              console.error('[CONTENT-REGEN] AI API error:', aiResponse.status, errText);
            }
          } catch (aiError) {
            if (aiError instanceof Error && aiError.name === 'AbortError') {
              console.log('[CONTENT-REGEN] AI request timed out for chapter:', chId);
            } else {
              console.error('[CONTENT-REGEN] AI fetch error:', aiError);
            }
          }
        }

        if (!regeneratedContent) {
          regeneratedContent = {
            sections_updated: ['general'],
            content: { ro: '', de: '', en: '' },
            summary: 'Update pending - AI generation failed',
            word_counts: { ro: 0, de: 0, en: 0 }
          };
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
          })
          .select()
          .single();

        if (versionError) {
          console.error('[CONTENT-REGEN] Error creating version:', versionError);
          throw versionError;
        }

        // Create auto_update record
        const changeSeverity = change?.severity as string || 'minor';
        const requiresApproval = changeSeverity === 'critical';
        
        const { error: updateError } = await supabase
          .from('auto_updates')
          .insert({
            chapter_id: chId,
            change_id: change_id,
            status: requiresApproval ? 'pending' : (auto_apply ? 'applied' : 'pending'),
            severity: changeSeverity,
            title: `Update: ${change?.title || 'Content refresh'}`,
            description: regeneratedContent.summary,
            original_content: currentVersion?.content_snapshot,
            updated_content: regeneratedContent,
            sections_affected: regeneratedContent.sections_updated,
            languages_updated: ['ro', 'de', 'en'],
            ai_model_used: 'google/gemini-2.5-flash',
            requires_approval: requiresApproval,
            applied_at: auto_apply && !requiresApproval ? new Date().toISOString() : null,
          });

        if (updateError) {
          console.error('[CONTENT-REGEN] Error creating update record:', updateError);
        }

        // Mark change as processed
        if (change_id) {
          await supabase
            .from('detected_changes')
            .update({ 
              is_processed: true, 
              processed_at: new Date().toISOString() 
            })
            .eq('id', change_id);
        }

        // Log the regeneration
        await supabase.from('update_audit_log').insert({
          action: 'content_regenerated',
          entity_type: 'chapter',
          entity_id: newVersion?.id,
          chapter_id: chId,
          details: {
            version_number: newVersionNumber,
            change_id,
            severity: changeSeverity,
            sections_updated: regeneratedContent.sections_updated,
            auto_applied: auto_apply && !requiresApproval,
          },
          performed_by: 'system'
        });

        results.push({
          chapter_id: chId,
          version_number: newVersionNumber,
          status: requiresApproval ? 'pending_approval' : (auto_apply ? 'applied' : 'pending'),
          sections_updated: regeneratedContent.sections_updated,
          summary: regeneratedContent.summary,
        });

        console.log(`[CONTENT-REGEN] Chapter ${chId} updated to version ${newVersionNumber}`);

      } catch (chapterError) {
        console.error(`[CONTENT-REGEN] Error processing chapter ${chId}:`, chapterError);
        results.push({
          chapter_id: chId,
          status: 'error',
          error: chapterError instanceof Error ? chapterError.message : 'Unknown error',
        });
      }
    }

    return new Response(JSON.stringify({
      success: true,
      chapters_processed: results.length,
      results,
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
