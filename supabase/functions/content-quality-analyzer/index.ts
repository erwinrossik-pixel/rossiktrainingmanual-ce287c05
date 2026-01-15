import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QualityIssue {
  type: string;
  severity: "low" | "medium" | "high";
  description: string;
  location?: string;
  suggestion?: string;
}

interface AnalysisResult {
  quality_score: number;
  terminology_issues: QualityIssue[];
  consistency_issues: QualityIssue[];
  translation_issues: QualityIssue[];
  outdated_content: QualityIssue[];
  duplication_issues: QualityIssue[];
  suggested_corrections: Array<{
    issue_type: string;
    original: string;
    correction: string;
    reason: string;
  }>;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { chapter_id, language, content } = await req.json();

    if (!chapter_id) {
      throw new Error("chapter_id is required");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");

    if (!lovableApiKey) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get chapter info
    const { data: chapter, error: chapterError } = await supabase
      .from("chapters")
      .select("*")
      .eq("id", chapter_id)
      .single();

    if (chapterError || !chapter) {
      throw new Error(`Chapter not found: ${chapter_id}`);
    }

    // Build the analysis prompt
    const systemPrompt = `Ești un expert în asigurarea calității conținutului pentru un manual de training în logistică și freight forwarding.
    
Analizează conținutul capitolului și identifică:
1. Probleme de terminologie (termeni folosiți incorect sau inconsistent)
2. Probleme de consistență (informații care se contrazic)
3. Probleme de traducere (dacă textul pare tradus greșit sau nenatural)
4. Conținut depășit (informații care ar putea fi învechite)
5. Duplicări (informații repetate inutil)

Pentru fiecare problemă identificată, oferă:
- Tipul problemei
- Severitatea (low/medium/high)
- Descrierea problemei
- Locația în text (dacă posibil)
- Sugestie de corectare

Acordă un scor de calitate de la 0 la 100 bazat pe:
- 90-100: Conținut excelent, fără probleme semnificative
- 75-89: Calitate bună, probleme minore
- 60-74: Calitate acceptabilă, necesită îmbunătățiri
- 40-59: Calitate slabă, probleme semnificative
- 0-39: Calitate foarte slabă, necesită rescriere majoră`;

    const userPrompt = `Analizează următorul conținut pentru capitolul "${chapter_id}" în limba "${language || 'ro'}":

${content || `[Conținut pentru capitolul ${chapter_id} - ${chapter.slug}]`}

Returnează analiza în format JSON cu structura:
{
  "quality_score": number (0-100),
  "terminology_issues": [{"type": string, "severity": "low"|"medium"|"high", "description": string, "location": string, "suggestion": string}],
  "consistency_issues": [...],
  "translation_issues": [...],
  "outdated_content": [...],
  "duplication_issues": [...],
  "suggested_corrections": [{"issue_type": string, "original": string, "correction": string, "reason": string}]
}`;

    // Call Lovable AI Gateway
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
              name: "submit_quality_analysis",
              description: "Submit the quality analysis results",
              parameters: {
                type: "object",
                properties: {
                  quality_score: {
                    type: "number",
                    description: "Quality score from 0-100",
                  },
                  terminology_issues: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: { type: "string" },
                        severity: { type: "string", enum: ["low", "medium", "high"] },
                        description: { type: "string" },
                        location: { type: "string" },
                        suggestion: { type: "string" },
                      },
                      required: ["type", "severity", "description"],
                    },
                  },
                  consistency_issues: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: { type: "string" },
                        severity: { type: "string", enum: ["low", "medium", "high"] },
                        description: { type: "string" },
                        location: { type: "string" },
                        suggestion: { type: "string" },
                      },
                      required: ["type", "severity", "description"],
                    },
                  },
                  translation_issues: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: { type: "string" },
                        severity: { type: "string", enum: ["low", "medium", "high"] },
                        description: { type: "string" },
                        location: { type: "string" },
                        suggestion: { type: "string" },
                      },
                      required: ["type", "severity", "description"],
                    },
                  },
                  outdated_content: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: { type: "string" },
                        severity: { type: "string", enum: ["low", "medium", "high"] },
                        description: { type: "string" },
                        location: { type: "string" },
                        suggestion: { type: "string" },
                      },
                      required: ["type", "severity", "description"],
                    },
                  },
                  duplication_issues: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: { type: "string" },
                        severity: { type: "string", enum: ["low", "medium", "high"] },
                        description: { type: "string" },
                        location: { type: "string" },
                        suggestion: { type: "string" },
                      },
                      required: ["type", "severity", "description"],
                    },
                  },
                  suggested_corrections: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        issue_type: { type: "string" },
                        original: { type: "string" },
                        correction: { type: "string" },
                        reason: { type: "string" },
                      },
                      required: ["issue_type", "original", "correction", "reason"],
                    },
                  },
                },
                required: ["quality_score"],
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "submit_quality_analysis" } },
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error("AI Gateway error:", aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw new Error(`AI Gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    
    // Extract the tool call result
    let analysisResult: AnalysisResult;
    
    if (aiData.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments) {
      analysisResult = JSON.parse(aiData.choices[0].message.tool_calls[0].function.arguments);
    } else {
      // Fallback: try to parse from content
      const content = aiData.choices?.[0]?.message?.content || "";
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysisResult = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not parse AI response");
      }
    }

    // Get current max version for this chapter/language
    const { data: existingAnalysis } = await supabase
      .from("content_quality_analysis")
      .select("analysis_version")
      .eq("chapter_id", chapter_id)
      .eq("language", language || "ro")
      .order("analysis_version", { ascending: false })
      .limit(1);

    const nextVersion = existingAnalysis?.[0]?.analysis_version 
      ? existingAnalysis[0].analysis_version + 1 
      : 1;

    // Store the analysis result
    const { data: savedAnalysis, error: saveError } = await supabase
      .from("content_quality_analysis")
      .insert({
        chapter_id,
        language: language || "ro",
        quality_score: analysisResult.quality_score || 0,
        terminology_issues: analysisResult.terminology_issues || [],
        consistency_issues: analysisResult.consistency_issues || [],
        translation_issues: analysisResult.translation_issues || [],
        outdated_content: analysisResult.outdated_content || [],
        duplication_issues: analysisResult.duplication_issues || [],
        suggested_corrections: analysisResult.suggested_corrections || [],
        analysis_version: nextVersion,
        status: "analyzed",
        ai_model_used: "google/gemini-2.5-flash",
      })
      .select()
      .single();

    if (saveError) {
      console.error("Error saving analysis:", saveError);
      throw new Error(`Failed to save analysis: ${saveError.message}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        analysis: savedAnalysis,
        message: `Quality analysis completed for ${chapter_id} (${language || "ro"}) - Score: ${analysisResult.quality_score}/100`,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in content-quality-analyzer:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        success: false 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
