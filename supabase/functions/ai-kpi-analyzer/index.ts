import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ChapterKPIData {
  chapterId: string;
  chapterName: string;
  passRate: number;
  avgAttempts: number;
  failureRate: number;
  mostFailedQuestions: { questionIndex: number; failureRate: number }[];
}

interface ContentAnalysis {
  chapterId: string;
  difficulty: string;
  bounceRate: number;
  skipRate: number;
  needsReview: boolean;
}

interface AnalysisRequest {
  type: 'full' | 'chapter' | 'questions';
  chapterId?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { type, chapterId }: AnalysisRequest = await req.json();
    console.log(`AI KPI Analyzer: Starting ${type} analysis${chapterId ? ` for ${chapterId}` : ''}`);

    // Fetch quiz attempts data
    const { data: attempts, error: attemptsError } = await supabase
      .from('quiz_attempts')
      .select('*');

    if (attemptsError) {
      console.error('Error fetching attempts:', attemptsError);
      throw new Error('Failed to fetch quiz attempts');
    }

    // Fetch chapters
    const { data: chapters, error: chaptersError } = await supabase
      .from('chapters')
      .select('id, slug, order_index')
      .order('order_index');

    if (chaptersError) {
      console.error('Error fetching chapters:', chaptersError);
      throw new Error('Failed to fetch chapters');
    }

    // Fetch existing content difficulty analysis
    const { data: contentAnalysis } = await supabase
      .from('content_difficulty_analysis')
      .select('*');

    // Calculate KPIs per chapter
    const chapterKPIs: ChapterKPIData[] = chapters.map(chapter => {
      const chapterAttempts = attempts?.filter(a => a.chapter_id === chapter.id) || [];
      const passedAttempts = chapterAttempts.filter(a => a.passed);
      
      // Calculate question failures
      const questionFailures: { [key: number]: { correct: number; total: number } } = {};
      chapterAttempts.forEach(attempt => {
        if (attempt.questions_answered && typeof attempt.questions_answered === 'object') {
          const qa = attempt.questions_answered as Record<string, { correct: boolean }>;
          Object.entries(qa).forEach(([idx, data]) => {
            const qIdx = parseInt(idx);
            if (!questionFailures[qIdx]) {
              questionFailures[qIdx] = { correct: 0, total: 0 };
            }
            questionFailures[qIdx].total++;
            if (data.correct) questionFailures[qIdx].correct++;
          });
        }
      });

      const mostFailed = Object.entries(questionFailures)
        .map(([idx, data]) => ({
          questionIndex: parseInt(idx),
          failureRate: data.total > 0 ? ((data.total - data.correct) / data.total) * 100 : 0,
        }))
        .filter(q => q.failureRate > 40)
        .sort((a, b) => b.failureRate - a.failureRate)
        .slice(0, 5);

      const uniqueUsers = [...new Set(chapterAttempts.map(a => a.user_id))];
      const avgAttempts = uniqueUsers.length > 0 
        ? chapterAttempts.length / uniqueUsers.length 
        : 0;

      return {
        chapterId: chapter.id,
        chapterName: chapter.slug.replace(/-/g, ' '),
        passRate: chapterAttempts.length > 0 
          ? (passedAttempts.length / chapterAttempts.length) * 100 
          : 100,
        avgAttempts,
        failureRate: chapterAttempts.length > 0 
          ? ((chapterAttempts.length - passedAttempts.length) / chapterAttempts.length) * 100 
          : 0,
        mostFailedQuestions: mostFailed,
      };
    });

    // Filter data based on request type
    let analysisData = chapterKPIs;
    if (type === 'chapter' && chapterId) {
      analysisData = chapterKPIs.filter(c => c.chapterId === chapterId);
    }

    // Identify problematic chapters
    const problematicChapters = chapterKPIs
      .filter(c => c.passRate < 60 || c.avgAttempts > 3)
      .sort((a, b) => a.passRate - b.passRate);

    // Identify chapters that might be too easy
    const tooEasyChapters = chapterKPIs
      .filter(c => c.passRate > 95 && c.avgAttempts < 1.2);

    // Build the analysis prompt
    const systemPrompt = `Ești un expert în pedagogie și design de conținut educațional pentru training profesional în freight forwarding.
    
Analizează datele KPI furnizate și generează recomandări specifice, acționabile pentru îmbunătățirea conținutului.

Răspunde în format JSON strict cu următoarea structură:
{
  "recommendations": [
    {
      "type": "content_improvement" | "question_update" | "chapter_restructure",
      "targetEntity": "chapter_id sau question_identifier",
      "severity": "low" | "medium" | "high" | "critical",
      "title": "Titlu scurt și descriptiv",
      "description": "Descriere detaliată a problemei identificate",
      "suggestedAction": "Acțiune concretă de remediere",
      "confidence": 0.0-1.0
    }
  ],
  "summary": "Rezumat executiv al analizei",
  "priorityActions": ["Lista de acțiuni prioritare"]
}

Focusează-te pe:
1. Capitolele cu rată de promovare sub 60% - necesită simplificare
2. Întrebările cu rată de eșec peste 50% - necesită reformulare sau hint-uri
3. Capitolele prea ușoare (>95% promovare, <1.2 încercări) - pot fi extinse
4. Corelații între capitole și pattern-uri de învățare`;

    const userPrompt = `Analizează următoarele date KPI:

CAPITOLE PROBLEMATICE (rata promovare scăzută sau încercări multe):
${JSON.stringify(problematicChapters, null, 2)}

CAPITOLE PREA UȘOARE:
${JSON.stringify(tooEasyChapters, null, 2)}

TOATE CAPITOLELE:
${JSON.stringify(analysisData.map(c => ({
  capitol: c.chapterName,
  rataPromovare: c.passRate.toFixed(1) + '%',
  incercariMedii: c.avgAttempts.toFixed(1),
  rataEsec: c.failureRate.toFixed(1) + '%',
  intrebariProblematice: c.mostFailedQuestions.length
})), null, 2)}

Generează recomandări concrete pentru îmbunătățirea conținutului educațional.`;

    console.log('Calling Lovable AI for analysis...');

    // Call Lovable AI
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI Gateway error:', aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(JSON.stringify({ 
          error: 'Rate limit exceeded. Please try again later.',
          recommendations: []
        }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      if (aiResponse.status === 402) {
        return new Response(JSON.stringify({ 
          error: 'Payment required. Please add funds to your Lovable AI workspace.',
          recommendations: []
        }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`AI gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const content = aiData.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No content in AI response');
    }

    console.log('AI Response received, parsing...');

    // Parse AI response
    let parsedRecommendations;
    try {
      // Extract JSON from response (handle markdown code blocks)
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                        content.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : content;
      parsedRecommendations = JSON.parse(jsonStr);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      console.log('Raw content:', content);
      
      // Return a basic response if parsing fails
      parsedRecommendations = {
        recommendations: [],
        summary: 'Analiza nu a putut fi procesată complet',
        priorityActions: []
      };
    }

    // Store recommendations in database
    if (parsedRecommendations.recommendations && parsedRecommendations.recommendations.length > 0) {
      console.log(`Storing ${parsedRecommendations.recommendations.length} recommendations...`);
      
      for (const rec of parsedRecommendations.recommendations) {
        const { error: insertError } = await supabase
          .from('ai_recommendations')
          .upsert({
            recommendation_type: rec.type || 'content_improvement',
            target_entity: rec.targetEntity || 'general',
            severity: rec.severity || 'medium',
            title: rec.title,
            description: rec.description,
            suggested_action: rec.suggestedAction,
            ai_confidence: rec.confidence || 0.7,
            status: 'pending',
            kpi_data: {
              analysisType: type,
              timestamp: new Date().toISOString(),
              problematicChaptersCount: problematicChapters.length,
              tooEasyChaptersCount: tooEasyChapters.length,
            },
            updated_at: new Date().toISOString(),
          }, {
            onConflict: 'id',
          });

        if (insertError) {
          console.error('Error storing recommendation:', insertError);
        }
      }
    }

    // Update content difficulty analysis
    for (const chapter of chapterKPIs) {
      let difficulty: string;
      if (chapter.passRate >= 90) difficulty = 'very_easy';
      else if (chapter.passRate >= 75) difficulty = 'easy';
      else if (chapter.passRate >= 50) difficulty = 'medium';
      else if (chapter.passRate >= 30) difficulty = 'hard';
      else difficulty = 'very_hard';

      const { error: upsertError } = await supabase
        .from('content_difficulty_analysis')
        .upsert({
          chapter_id: chapter.chapterId,
          difficulty_rating: difficulty,
          avg_pass_rate: chapter.passRate,
          avg_attempts_to_pass: chapter.avgAttempts,
          needs_review: chapter.passRate < 50 || chapter.avgAttempts > 4,
          last_analyzed_at: new Date().toISOString(),
        }, {
          onConflict: 'chapter_id',
        });

      if (upsertError) {
        console.error('Error updating difficulty analysis:', upsertError);
      }
    }

    console.log('Analysis complete!');

    return new Response(JSON.stringify({
      success: true,
      ...parsedRecommendations,
      stats: {
        totalChapters: chapters.length,
        problematicCount: problematicChapters.length,
        tooEasyCount: tooEasyChapters.length,
        analyzedAt: new Date().toISOString(),
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in AI KPI Analyzer:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
