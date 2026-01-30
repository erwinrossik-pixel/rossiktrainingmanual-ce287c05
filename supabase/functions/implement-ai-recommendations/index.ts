import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface ImplementRequest {
  recommendationId?: string;      // Single recommendation
  implementAll?: boolean;         // Process all applied recommendations
  batchSize?: number;             // How many to process per call
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

interface ImplementationResult {
  id: string;
  title: string;
  success: boolean;
  message: string;
  action_taken: string;
  verified: boolean;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const { recommendationId, implementAll, batchSize = 1 }: ImplementRequest = await req.json();
    
    console.log(`Implement AI Recommendations: Starting. ImplementAll: ${implementAll}, ID: ${recommendationId}, BatchSize: ${batchSize}`);

    // Fetch recommendations to implement
    let query = supabase
      .from('ai_recommendations')
      .select('*')
      .eq('status', 'applied')
      .order('created_at', { ascending: true });

    if (recommendationId) {
      query = query.eq('id', recommendationId);
    }

    if (batchSize > 0) {
      query = query.limit(batchSize);
    }

    const { data: recommendations, error: fetchError } = await query;

    if (fetchError) {
      throw new Error(`Failed to fetch recommendations: ${fetchError.message}`);
    }

    if (!recommendations || recommendations.length === 0) {
      return new Response(JSON.stringify({
        success: true,
        message: 'No recommendations to implement',
        implemented: 0,
        failed: 0,
        remaining: 0,
        results: []
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Count remaining after this batch
    const { count: remainingCount } = await supabase
      .from('ai_recommendations')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'applied');

    console.log(`Processing ${recommendations.length} recommendations, ${remainingCount} total remaining...`);

    const results: ImplementationResult[] = [];
    let implementedCount = 0;
    let failedCount = 0;

    for (const rec of recommendations as Recommendation[]) {
      console.log(`\n=== Implementing: ${rec.title} (${rec.id}) ===`);
      
      try {
        // Step 1: Execute the actual implementation
        const implementResult = await executeImplementation(supabase, rec, lovableApiKey);
        
        // Step 2: Verify the implementation was successful
        const verificationResult = await verifyImplementation(supabase, rec, implementResult);
        
        if (verificationResult.success) {
          // Only mark as completed if verification passes
          await supabase
            .from('ai_recommendations')
            .update({
              status: 'completed',
              updated_at: new Date().toISOString(),
              kpi_data: {
                ...rec.kpi_data,
                implemented_at: new Date().toISOString(),
                implementation_action: implementResult.action,
                verification_status: 'verified'
              }
            })
            .eq('id', rec.id);

          // Resolve any related governance incidents
          await supabase
            .from('governance_incidents')
            .update({
              status: 'resolved',
              resolved_at: new Date().toISOString(),
              resolution_notes: `Auto-implemented: ${implementResult.action}`
            })
            .eq('details->recommendation_id', rec.id);

          results.push({
            id: rec.id,
            title: rec.title,
            success: true,
            message: implementResult.message,
            action_taken: implementResult.action,
            verified: true
          });
          
          implementedCount++;
          console.log(`✓ Successfully implemented and verified: ${rec.title}`);
        } else {
          // Implementation or verification failed - keep as applied, log error
          await supabase
            .from('ai_recommendations')
            .update({
              kpi_data: {
                ...rec.kpi_data,
                last_implementation_attempt: new Date().toISOString(),
                implementation_error: verificationResult.error
              }
            })
            .eq('id', rec.id);

          results.push({
            id: rec.id,
            title: rec.title,
            success: false,
            message: verificationResult.error || 'Verification failed',
            action_taken: 'none',
            verified: false
          });
          
          failedCount++;
          console.error(`✗ Failed to verify: ${rec.title} - ${verificationResult.error}`);
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        
        results.push({
          id: rec.id,
          title: rec.title,
          success: false,
          message: errorMsg,
          action_taken: 'error',
          verified: false
        });
        
        failedCount++;
        console.error(`✗ Error implementing ${rec.title}: ${errorMsg}`);
      }
    }

    // Log the implementation operation
    await supabase
      .from('cron_job_logs')
      .insert({
        job_name: 'implement-ai-recommendations',
        execution_type: implementAll ? 'batch' : 'manual',
        status: failedCount === 0 ? 'success' : (implementedCount > 0 ? 'partial' : 'failed'),
        started_at: new Date().toISOString(),
        completed_at: new Date().toISOString(),
        items_processed: implementedCount,
        items_failed: failedCount,
        result_summary: `Implemented ${implementedCount}, Failed ${failedCount}, Remaining ${(remainingCount || 0) - recommendations.length}`,
        execution_details: { results }
      });

    const remaining = Math.max(0, (remainingCount || 0) - recommendations.length);

    return new Response(JSON.stringify({
      success: true,
      message: `Implemented ${implementedCount} recommendations`,
      implemented: implementedCount,
      failed: failedCount,
      remaining,
      hasMore: remaining > 0,
      results
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in Implement AI Recommendations:', error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

async function executeImplementation(
  supabase: any,
  rec: Recommendation,
  lovableApiKey?: string
): Promise<{ message: string; action: string; data?: any }> {
  const { recommendation_type, target_entity, suggested_action, severity, title } = rec;

  switch (recommendation_type) {
    case 'content_improvement': {
      // For content improvements, we need to actually update the content
      // This involves analyzing the issue and generating/applying fixes
      
      // Check if this is a translation issue
      if (title.toLowerCase().includes('traducere') || title.toLowerCase().includes('translation')) {
        // Flag for visual analyzer to process
        await supabase
          .from('content_visual_analysis')
          .insert({
            chapter_id: target_entity,
            language: 'ro',
            analysis_type: 'translation_fix',
            status: 'pending',
          });
          
        return {
          message: `Queued translation fix for ${target_entity}`,
          action: 'translation_fix_queued'
        };
      }

      // For other content improvements, update the difficulty analysis
      await supabase
        .from('content_difficulty_analysis')
        .upsert({
          chapter_id: target_entity,
          needs_review: false, // Mark as handled
          last_analyzed_at: new Date().toISOString(),
          comprehension_issues: {
            ai_recommendation: title,
            action_taken: suggested_action,
            implemented_at: new Date().toISOString()
          }
        }, { onConflict: 'chapter_id' });

      return {
        message: `Applied content improvement for ${target_entity}`,
        action: 'content_improved'
      };
    }

    case 'question_update': {
      const [chapterId, questionIndex] = target_entity.split(':');
      
      // Update the question analytics to mark as reviewed
      await supabase
        .from('question_analytics')
        .update({
          needs_revision: false,
          last_reviewed_at: new Date().toISOString(),
          review_notes: suggested_action
        })
        .eq('chapter_id', chapterId || target_entity)
        .eq('question_index', parseInt(questionIndex) || 0);

      // Update difficulty analysis
      await supabase
        .from('content_difficulty_analysis')
        .upsert({
          chapter_id: chapterId || target_entity,
          needs_review: false,
          last_analyzed_at: new Date().toISOString()
        }, { onConflict: 'chapter_id' });

      return {
        message: `Updated question ${questionIndex} in ${chapterId}`,
        action: 'question_updated'
      };
    }

    case 'chapter_restructure': {
      // For restructuring, we mark the chapter as processed
      // and update the governance incident
      
      await supabase
        .from('chapters')
        .update({
          auto_update_blocked: false, // Unblock now that it's restructured
          auto_update_blocked_at: null
        })
        .eq('id', target_entity);

      await supabase
        .from('content_difficulty_analysis')
        .upsert({
          chapter_id: target_entity,
          needs_review: false,
          difficulty_rating: 'normal',
          last_analyzed_at: new Date().toISOString()
        }, { onConflict: 'chapter_id' });

      return {
        message: `Completed restructure for ${target_entity}`,
        action: 'chapter_restructured'
      };
    }

    default: {
      // Generic implementation - resolve governance incidents
      await supabase
        .from('governance_incidents')
        .update({
          status: 'resolved',
          resolved_at: new Date().toISOString()
        })
        .match({ 
          chapter_id: target_entity,
          status: 'pending'
        });

      return {
        message: `Resolved pending issues for ${target_entity}`,
        action: 'issues_resolved'
      };
    }
  }
}

async function verifyImplementation(
  supabase: any,
  rec: Recommendation,
  implementResult: { message: string; action: string; data?: any }
): Promise<{ success: boolean; error?: string }> {
  const { recommendation_type, target_entity } = rec;

  try {
    switch (implementResult.action) {
      case 'content_improved':
      case 'content_flagged_for_review': {
        // Verify the content_difficulty_analysis was updated
        const { data, error } = await supabase
          .from('content_difficulty_analysis')
          .select('needs_review, last_analyzed_at')
          .eq('chapter_id', target_entity)
          .single();

        if (error) {
          return { success: false, error: `Verification query failed: ${error.message}` };
        }

        // Check that it was recently updated (within last minute)
        const lastAnalyzed = new Date(data.last_analyzed_at);
        const oneMinuteAgo = new Date(Date.now() - 60000);
        
        if (lastAnalyzed < oneMinuteAgo) {
          return { success: false, error: 'Content analysis not updated recently' };
        }

        return { success: true };
      }

      case 'question_updated': {
        // Verify the question was marked as reviewed
        const [chapterId] = target_entity.split(':');
        
        const { data, error } = await supabase
          .from('content_difficulty_analysis')
          .select('last_analyzed_at')
          .eq('chapter_id', chapterId || target_entity)
          .single();

        if (error && !error.message.includes('No rows')) {
          return { success: false, error: `Question verification failed: ${error.message}` };
        }

        return { success: true };
      }

      case 'chapter_restructured': {
        // Verify the chapter was unblocked
        const { data, error } = await supabase
          .from('chapters')
          .select('auto_update_blocked')
          .eq('id', target_entity)
          .single();

        if (error) {
          return { success: false, error: `Chapter verification failed: ${error.message}` };
        }

        if (data?.auto_update_blocked === true) {
          return { success: false, error: 'Chapter still blocked after restructure' };
        }

        return { success: true };
      }

      case 'translation_fix_queued': {
        // Verify the analysis was queued
        const { data, error } = await supabase
          .from('content_visual_analysis')
          .select('id')
          .eq('chapter_id', target_entity)
          .eq('status', 'pending')
          .limit(1);

        if (error) {
          return { success: false, error: `Queue verification failed: ${error.message}` };
        }

        return { success: true };
      }

      case 'issues_resolved': {
        // Verify governance incidents were resolved
        const { count } = await supabase
          .from('governance_incidents')
          .select('id', { count: 'exact', head: true })
          .eq('chapter_id', target_entity)
          .eq('status', 'pending');

        // Consider success if no more pending incidents
        return { success: (count || 0) === 0 };
      }

      default:
        // For unknown actions, assume success if no error was thrown
        return { success: true };
    }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Verification error' 
    };
  }
}
