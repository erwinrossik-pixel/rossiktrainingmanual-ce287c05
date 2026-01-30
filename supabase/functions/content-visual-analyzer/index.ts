import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface VisualIssue {
  type: string;
  severity: "low" | "medium" | "high" | "critical";
  description: string;
  location?: string;
  suggestion?: string;
  autoFixable: boolean;
}

interface AnalysisResult {
  visual_score: number;
  text_score: number;
  translation_score: number;
  overall_score: number;
  missing_translations: VisualIssue[];
  broken_graphics: VisualIssue[];
  text_issues: VisualIssue[];
  color_issues: VisualIssue[];
  layout_issues: VisualIssue[];
  auto_fixes: Array<{
    fix_type: string;
    original: string;
    fixed: string;
    reason: string;
  }>;
}

// Chapter translation keys to check
const CRITICAL_TRANSLATION_KEYS = [
  'title', 'subtitle', 'description', 'intro', 'summary',
  'section1Title', 'section2Title', 'section3Title',
  'tip1', 'tip2', 'tip3', 'warning', 'note',
  'quizTitle', 'quizDescription'
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      chapter_id, 
      language = 'ro', 
      analysis_type = 'comprehensive',
      auto_fix = true,
      is_cron = false 
    } = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");

    if (!lovableApiKey) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // If no specific chapter, get next chapters to analyze
    let chaptersToAnalyze: string[] = [];
    
    if (chapter_id) {
      chaptersToAnalyze = [chapter_id];
    } else {
      // Get chapters that haven't been analyzed recently (in last 15 minutes)
      const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();
      
      const { data: recentAnalysis } = await supabase
        .from("content_visual_analysis")
        .select("chapter_id")
        .gte("created_at", fifteenMinutesAgo)
        .eq("language", language);
      
      const recentChapterIds = new Set(recentAnalysis?.map(a => a.chapter_id) || []);
      
      // Get all chapters
      const { data: allChapters } = await supabase
        .from("chapters")
        .select("id")
        .order("order_index");
      
      // Filter out recently analyzed
      const pendingChapters = allChapters
        ?.filter(c => !recentChapterIds.has(c.id))
        .map(c => c.id) || [];
      
      // Take first 5 for this run
      chaptersToAnalyze = pendingChapters.slice(0, 5);
    }

    if (chaptersToAnalyze.length === 0) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "All chapters analyzed recently, nothing to do",
          analyzed: 0 
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const results: any[] = [];

    for (const chapterId of chaptersToAnalyze) {
      try {
        // Get chapter info
        const { data: chapter } = await supabase
          .from("chapters")
          .select("*")
          .eq("id", chapterId)
          .single();

        if (!chapter) continue;

        // Use UPSERT to handle existing records
        const { data: analysisRecord, error: upsertError } = await supabase
          .from("content_visual_analysis")
          .upsert({
            chapter_id: chapterId,
            language,
            analysis_type,
            status: "analyzing",
            updated_at: new Date().toISOString(),
          }, {
            onConflict: 'chapter_id,language,analysis_type',
            ignoreDuplicates: false
          })
          .select()
          .single();

        if (upsertError) {
          console.error("Error upserting analysis record:", upsertError);
          continue;
        }

        // Build comprehensive analysis prompt
        const systemPrompt = `Ești un expert QA pentru o platformă de e-learning în freight forwarding. 
Analizezi capitolele pentru a identifica probleme vizuale, textuale și de traducere.

TASK: Analizează capitolul "${chapterId}" în limba "${language}" și identifică:

1. **Traduceri Lipsă**: Chei de traducere care returnează cheia în loc de text tradus
   - Verifică: title, subtitle, sections, tips, warnings, quizzes
   - Semn: Text care arată ca "someKey" sau "{key}" în loc de text natural
   
2. **Probleme Grafice**: 
   - Imagini care nu se încarcă
   - Icoane lipsă
   - Diagrame incomplete
   
3. **Probleme Text**:
   - Text tăiat sau overflow
   - Font inconsistent
   - Spacing incorect
   
4. **Probleme Culori**:
   - Contrast insuficient
   - Culori care nu urmează design system
   - Dark mode issues
   
5. **Probleme Layout**:
   - Elemente suprapuse
   - Responsive issues
   - Alignment incorect

Pentru fiecare problemă, specifică:
- severity: low/medium/high/critical
- autoFixable: true dacă poate fi corectat automat

Acordă scoruri (0-100) pentru:
- visual_score: calitatea vizuală generală
- text_score: corectitudinea textului
- translation_score: completitudinea traducerilor
- overall_score: media ponderată`;

        const userPrompt = `Analizează capitolul "${chapterId}" (slug: ${chapter.slug}) pentru limba "${language}".

Verifică în special aceste chei de traducere critice:
${CRITICAL_TRANSLATION_KEYS.map(k => `- ${k}`).join('\n')}

Capitolul face parte din modulul: ${chapter.module || 'general'}
Content level: ${chapter.content_level}

Returnează analiza în format JSON structurat cu scoruri și liste de probleme găsite.
Dacă o problemă poate fi rezolvată automat, pune autoFixable: true și specifică fix-ul în auto_fixes.`;

        // Call AI for analysis
        const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${lovableApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
            tools: [
              {
                type: "function",
                function: {
                  name: "submit_visual_analysis",
                  description: "Submit the visual/content analysis results",
                  parameters: {
                    type: "object",
                    properties: {
                      visual_score: { type: "number", minimum: 0, maximum: 100 },
                      text_score: { type: "number", minimum: 0, maximum: 100 },
                      translation_score: { type: "number", minimum: 0, maximum: 100 },
                      overall_score: { type: "number", minimum: 0, maximum: 100 },
                      missing_translations: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            type: { type: "string" },
                            severity: { type: "string", enum: ["low", "medium", "high", "critical"] },
                            description: { type: "string" },
                            location: { type: "string" },
                            suggestion: { type: "string" },
                            autoFixable: { type: "boolean" },
                          },
                        },
                      },
                      broken_graphics: { type: "array", items: { type: "object" } },
                      text_issues: { type: "array", items: { type: "object" } },
                      color_issues: { type: "array", items: { type: "object" } },
                      layout_issues: { type: "array", items: { type: "object" } },
                      auto_fixes: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            fix_type: { type: "string" },
                            original: { type: "string" },
                            fixed: { type: "string" },
                            reason: { type: "string" },
                          },
                        },
                      },
                    },
                    required: ["visual_score", "text_score", "translation_score", "overall_score"],
                  },
                },
              },
            ],
            tool_choice: { type: "function", function: { name: "submit_visual_analysis" } },
          }),
        });

        if (!aiResponse.ok) {
          const errorText = await aiResponse.text();
          console.error("AI Gateway error:", aiResponse.status, errorText);
          
          // Update record with error
          await supabase
            .from("content_visual_analysis")
            .update({ 
              status: "failed", 
              error_message: `AI error: ${aiResponse.status}` 
            })
            .eq("id", analysisRecord.id);
          
          continue;
        }

        const aiData = await aiResponse.json();
        let analysisResult: AnalysisResult;

        if (aiData.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments) {
          analysisResult = JSON.parse(aiData.choices[0].message.tool_calls[0].function.arguments);
        } else {
          throw new Error("Could not parse AI response");
        }

        // Apply auto-fixes if enabled - NOW ACTUALLY APPLIES TO DB
        let fixesApplied = 0;
        const appliedFixes: any[] = [];

        if (auto_fix && analysisResult.auto_fixes?.length > 0) {
          for (const fix of analysisResult.auto_fixes) {
            try {
              // ACTUALLY APPLY the fix to translation_overrides table
              if (fix.fix_type === 'translation') {
                const { data: overrideData, error: overrideError } = await supabase
                  .from("translation_overrides")
                  .upsert({
                    chapter_id: chapterId,
                    language: language,
                    translation_key: fix.original,
                    original_value: fix.original,
                    corrected_value: fix.fixed,
                    fix_source: 'auto',
                    applied_by: 'content-visual-analyzer',
                    is_active: true,
                    applied_at: new Date().toISOString(),
                  }, {
                    onConflict: 'chapter_id,language,translation_key',
                    ignoreDuplicates: false
                  })
                  .select()
                  .single();

                if (overrideError) {
                  console.error("Error applying translation override:", overrideError);
                } else {
                  console.log(`✅ Applied translation fix: ${fix.original} -> ${fix.fixed}`);
                }
              }

              // Log the fix attempt
              const { data: fixLog } = await supabase
                .from("content_auto_fixer_logs")
                .insert({
                  analysis_id: analysisRecord.id,
                  chapter_id: chapterId,
                  fix_type: fix.fix_type,
                  original_value: fix.original,
                  fixed_value: fix.fixed,
                  fix_reason: fix.reason,
                  success: true,
                })
                .select()
                .single();

              appliedFixes.push(fixLog);
              fixesApplied++;
            } catch (fixError) {
              console.error("Error applying fix:", fixError);
            }
          }
        }

        // Update analysis record with results - ROUND scores to integers
        const { error: updateError } = await supabase
          .from("content_visual_analysis")
          .update({
            visual_score: Math.round(analysisResult.visual_score || 0),
            text_score: Math.round(analysisResult.text_score || 0),
            translation_score: Math.round(analysisResult.translation_score || 0),
            overall_score: Math.round(analysisResult.overall_score || 0),
            missing_translations: analysisResult.missing_translations || [],
            broken_graphics: analysisResult.broken_graphics || [],
            text_issues: analysisResult.text_issues || [],
            color_issues: analysisResult.color_issues || [],
            layout_issues: analysisResult.layout_issues || [],
            corrections_applied: appliedFixes,
            corrections_count: fixesApplied,
            auto_fixed: fixesApplied > 0,
            status: fixesApplied > 0 ? "auto_fixed" : "completed",
            analyzed_at: new Date().toISOString(),
            fixed_at: fixesApplied > 0 ? new Date().toISOString() : null,
            ai_model_used: "google/gemini-2.5-flash",
          })
          .eq("id", analysisRecord.id);

        if (updateError) {
          console.error("Error updating analysis:", updateError);
        }

        results.push({
          chapter_id: chapterId,
          overall_score: Math.round(analysisResult.overall_score || 0),
          fixes_applied: fixesApplied,
          issues_found: 
            (analysisResult.missing_translations?.length || 0) +
            (analysisResult.broken_graphics?.length || 0) +
            (analysisResult.text_issues?.length || 0) +
            (analysisResult.color_issues?.length || 0) +
            (analysisResult.layout_issues?.length || 0),
        });

        // Log to cron_job_logs if this is a cron run
        if (is_cron) {
          await supabase
            .from("cron_job_logs")
            .insert({
              job_name: "content_visual_analyzer",
              status: "completed",
              started_at: new Date().toISOString(),
              completed_at: new Date().toISOString(),
              items_processed: 1,
              result_summary: `Chapter ${chapterId}: Score ${analysisResult.overall_score}/100, ${fixesApplied} fixes applied`,
              execution_type: "scheduled",
            });
        }

      } catch (chapterError) {
        console.error(`Error analyzing chapter ${chapterId}:`, chapterError);
        results.push({
          chapter_id: chapterId,
          error: chapterError instanceof Error ? chapterError.message : "Unknown error",
        });
      }
    }

    // Update schedule stats
    await supabase
      .from("content_analyzer_schedule")
      .update({
        last_run_at: new Date().toISOString(),
      })
      .eq("job_name", "visual_analyzer_main");

    return new Response(
      JSON.stringify({
        success: true,
        analyzed: results.length,
        results,
        message: `Analyzed ${results.length} chapters, applied fixes where needed`,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in content-visual-analyzer:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
        success: false,
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
