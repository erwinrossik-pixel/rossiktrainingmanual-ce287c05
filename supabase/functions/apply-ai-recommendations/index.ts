import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface ApplyRequest {
  recommendationIds?: string[];
  autoApply?: boolean;
}

interface Recommendation {
  id: string;
  recommendation_type: string;
  target_entity: string;
  severity: string;
  title: string;
  description: string;
  suggested_action: string | null;
  ai_confidence: number;
  status: string;
  kpi_data: Record<string, unknown>;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const { recommendationIds, autoApply }: ApplyRequest = await req.json();
    
    console.log(`Apply AI Recommendations: Starting. AutoApply: ${autoApply}, IDs: ${recommendationIds?.length || 'all'}`);

    // Fetch recommendations to apply
    let query = supabase
      .from('ai_recommendations')
      .select('*');

    if (recommendationIds && recommendationIds.length > 0) {
      query = query.in('id', recommendationIds);
    } else if (autoApply) {
      query = query.eq('status', 'applied').is('applied_at', null);
    } else {
      query = query.eq('status', 'pending');
    }

    const { data: recommendations, error: fetchError } = await query;

    if (fetchError) {
      throw new Error(`Failed to fetch recommendations: ${fetchError.message}`);
    }

    if (!recommendations || recommendations.length === 0) {
      return new Response(JSON.stringify({
        success: true,
        message: 'No recommendations to apply',
        applied: 0,
        failed: 0,
        results: []
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log(`Processing ${recommendations.length} recommendations...`);

    const results: { id: string; status: 'success' | 'failed'; message: string; action?: string }[] = [];
    let appliedCount = 0;
    let failedCount = 0;

    for (const rec of recommendations as Recommendation[]) {
      try {
        const result = await applyRecommendation(supabase, rec);
        results.push({
          id: rec.id,
          status: 'success',
          message: result.message,
          action: result.action
        });

        // Update recommendation status
        await supabase
          .from('ai_recommendations' as any)
          .update({
            status: 'applied',
            applied_at: new Date().toISOString(),
            kpi_data: {
              ...rec.kpi_data,
              applied_result: result.action,
              applied_timestamp: new Date().toISOString()
            }
          })
          .eq('id', rec.id);

        appliedCount++;
        console.log(`✓ Applied recommendation ${rec.id}: ${rec.title}`);
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        results.push({
          id: rec.id,
          status: 'failed',
          message: errorMsg
        });
        failedCount++;
        console.error(`✗ Failed to apply ${rec.id}: ${errorMsg}`);
      }
    }

    // Log the batch operation
    await supabase
      .from('cron_job_logs' as any)
      .insert({
        job_name: 'apply-ai-recommendations',
        execution_type: 'manual',
        status: failedCount === 0 ? 'success' : 'partial',
        completed_at: new Date().toISOString(),
        items_processed: appliedCount,
        items_failed: failedCount,
        result_summary: `Applied ${appliedCount} recommendations, ${failedCount} failed`,
        execution_details: { results }
      });

    return new Response(JSON.stringify({
      success: true,
      message: `Applied ${appliedCount} recommendations`,
      applied: appliedCount,
      failed: failedCount,
      results
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in Apply AI Recommendations:', error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

async function applyRecommendation(
  supabase: any,
  rec: Recommendation
): Promise<{ message: string; action: string }> {
  const { recommendation_type, target_entity, suggested_action, severity } = rec;

  switch (recommendation_type) {
    case 'content_improvement': {
      // Update chapter difficulty analysis and flag for review
      const { error } = await supabase
        .from('content_difficulty_analysis')
        .upsert({
          chapter_id: target_entity,
          needs_review: true,
          last_analyzed_at: new Date().toISOString(),
          comprehension_issues: {
            ai_recommendation: rec.title,
            suggested_action: suggested_action,
            severity: severity,
            flagged_at: new Date().toISOString()
          }
        }, { onConflict: 'chapter_id' });

      if (error && !error.message.includes('duplicate')) {
        console.warn('Content difficulty update issue:', error.message);
      }

      // Create a governance incident for tracking
      await supabase
        .from('governance_incidents')
        .insert({
          incident_type: 'ai_recommendation_applied',
          severity: severity === 'critical' ? 'high' : severity,
          status: 'pending',
          chapter_id: target_entity,
          content_preview: rec.title,
          details: {
            recommendation_id: rec.id,
            type: recommendation_type,
            suggested_action: suggested_action
          },
          violated_rule: `AI: ${rec.title}`
        });

      return {
        message: `Flagged chapter ${target_entity} for content review`,
        action: 'content_flagged_for_review'
      };
    }

    case 'question_update': {
      const [chapterId, questionIndex] = target_entity.split(':');
      
      // Flag the chapter for review
      await supabase
        .from('content_difficulty_analysis')
        .upsert({
          chapter_id: chapterId || target_entity,
          needs_review: true,
          last_analyzed_at: new Date().toISOString(),
          comprehension_issues: {
            question_issue: true,
            question_index: parseInt(questionIndex) || 0,
            revision_notes: suggested_action || rec.description,
            flagged_at: new Date().toISOString()
          }
        }, { onConflict: 'chapter_id' });

      // Create governance incident
      await supabase
        .from('governance_incidents')
        .insert({
          incident_type: 'question_revision_needed',
          severity: severity === 'critical' ? 'high' : 'medium',
          status: 'pending',
          chapter_id: chapterId || target_entity,
          content_preview: `Question ${questionIndex || '?'}: ${rec.title}`,
          details: {
            recommendation_id: rec.id,
            type: recommendation_type,
            question_index: parseInt(questionIndex) || 0,
            suggested_action: suggested_action
          },
          violated_rule: `Question: ${rec.title}`
        });

      return {
        message: `Flagged question in ${target_entity} for revision`,
        action: 'question_flagged_for_revision'
      };
    }

    case 'chapter_restructure': {
      // Create a governance incident for major restructuring
      await supabase
        .from('governance_incidents')
        .insert({
          incident_type: 'chapter_restructure_recommended',
          severity: severity === 'critical' ? 'critical' : 'high',
          status: 'pending',
          chapter_id: target_entity,
          content_preview: rec.title,
          details: {
            recommendation_id: rec.id,
            type: recommendation_type,
            suggested_action: suggested_action,
            ai_confidence: rec.ai_confidence
          },
          violated_rule: `Restructure: ${rec.title}`
        });

      // Mark chapter as needing major review
      await supabase
        .from('content_difficulty_analysis')
        .upsert({
          chapter_id: target_entity,
          needs_review: true,
          difficulty_rating: 'very_hard',
          last_analyzed_at: new Date().toISOString()
        }, { onConflict: 'chapter_id' });

      // Block auto-updates for this chapter until restructured
      await supabase
        .from('chapters')
        .update({
          auto_update_blocked: true,
          auto_update_blocked_at: new Date().toISOString()
        })
        .eq('id', target_entity);

      return {
        message: `Blocked auto-updates and flagged ${target_entity} for restructuring`,
        action: 'chapter_blocked_for_restructure'
      };
    }

    default: {
      // Generic action: create a governance incident
      await supabase
        .from('governance_incidents')
        .insert({
          incident_type: 'ai_recommendation',
          severity: severity === 'critical' ? 'high' : 'medium',
          status: 'pending',
          chapter_id: target_entity,
          content_preview: rec.title,
          details: {
            recommendation_id: rec.id,
            type: recommendation_type,
            suggested_action: suggested_action
          }
        });

      return {
        message: `Created governance incident for ${target_entity}`,
        action: 'incident_created'
      };
    }
  }
}
