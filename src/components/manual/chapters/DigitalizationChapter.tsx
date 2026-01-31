import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { DataTable } from "../DataTable";
import { ProcessMap } from "../FlowDiagram";
import {
  Laptop, Brain, Cpu, BarChart3, Globe, Wifi, 
  Lock, FileText, Zap, GraduationCap, CheckCircle, AlertTriangle, Book, Bot, Cloud
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import digitalizationImg from "@/assets/chapters/digitalization-ai-analytics.jpg";
import digitalizationAutomationImg from "@/assets/chapters/digitalization-automation.jpg";

export function DigitalizationChapter() {
  const { ct } = useChapterTranslation('digitalization');

  // AI Tools table
  const aiToolsHeaders = [
    ct('toolCategoryHeader') || "Category",
    ct('toolExamplesHeader') || "Examples",
    ct('toolUseCaseHeader') || "Use Cases",
    ct('toolImpactHeader') || "Impact"
  ];

  const aiToolsRows = [
    [
      <span className="font-semibold flex items-center gap-2"><Bot className="w-4 h-4 text-primary" /> {ct('toolCategoryLLM') || "LLM/Chatbots"}</span>,
      "ChatGPT, Claude, Gemini",
      ct('toolLLMUseCase') || "Email drafts, documentation, research",
      <span className="text-success font-medium">+40% {ct('efficiencyLabel') || "efficiency"}</span>
    ],
    [
      <span className="font-semibold flex items-center gap-2"><BarChart3 className="w-4 h-4 text-info" /> {ct('toolCategoryPredictive') || "Predictive Analytics"}</span>,
      "Transporeon, FourKites",
      ct('toolPredictiveUseCase') || "ETA prediction, demand forecasting",
      <span className="text-success font-medium">-25% {ct('delaysLabel') || "delays"}</span>
    ],
    [
      <span className="font-semibold flex items-center gap-2"><Cpu className="w-4 h-4 text-warning" /> {ct('toolCategoryRPA') || "RPA"}</span>,
      "UiPath, Automation Anywhere",
      ct('toolRPAUseCase') || "Invoice processing, data entry",
      <span className="text-success font-medium">-60% {ct('manualWorkLabel') || "manual work"}</span>
    ],
    [
      <span className="font-semibold flex items-center gap-2"><FileText className="w-4 h-4 text-success" /> {ct('toolCategoryOCR') || "OCR/IDP"}</span>,
      "ABBYY, Nanonets",
      ct('toolOCRUseCase') || "CMR scanning, customs docs",
      <span className="text-success font-medium">-70% {ct('processingTimeLabel') || "processing"}</span>
    ],
    [
      <span className="font-semibold flex items-center gap-2"><Cloud className="w-4 h-4" /> {ct('toolCategoryTMS') || "Cloud TMS"}</span>,
      "Translogica, Cargoson, Flexport",
      ct('toolTMSUseCase') || "Full operations management",
      <span className="text-success font-medium">{ct('integratedLabel') || "Integrated"}</span>
    ]
  ];

  // Digital transformation phases
  const digitalPhases = [
    {
      name: ct('phaseDigitization') || "1. Digitization",
      color: "primary" as const,
      steps: [
        ct('phaseDigitizationStep1') || "Paper to digital documents",
        ct('phaseDigitizationStep2') || "Electronic signatures",
        ct('phaseDigitizationStep3') || "Cloud storage adoption"
      ]
    },
    {
      name: ct('phaseDigitalization') || "2. Digitalization",
      color: "info" as const,
      steps: [
        ct('phaseDigitalizationStep1') || "Workflow automation",
        ct('phaseDigitalizationStep2') || "System integrations (API)",
        ct('phaseDigitalizationStep3') || "Real-time tracking"
      ]
    },
    {
      name: ct('phaseTransformation') || "3. Transformation",
      color: "success" as const,
      steps: [
        ct('phaseTransformationStep1') || "AI-driven decisions",
        ct('phaseTransformationStep2') || "Predictive operations",
        ct('phaseTransformationStep3') || "New business models"
      ]
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Laptop}
        variant="digitalization"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="section-title mb-1.5 sm:mb-2">{ct('section1Title')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* What is Digitalization */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section1Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section1Content')}</p>
        </div>
      </section>

      {/* Digital Transformation Phases - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('digitalPhasesTitle') || "Digital Transformation Journey"}</span>
        </h2>
        <ProcessMap 
          title="" 
          phases={digitalPhases} 
        />
      </section>

      {/* AI in Transport */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section2Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section2Title')} icon={Brain}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} icon={Zap}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
        
        {/* AI Control Center Image - contextual placement */}
        <ChapterImage
          src={digitalizationImg}
          alt="Digital logistics control center with AI-powered analytics dashboard"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* AI Tools Table - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('aiToolsTitle') || "AI & Automation Tools"}</span>
        </h2>
        <DataTable headers={aiToolsHeaders} rows={aiToolsRows} />
      </section>

      {/* Implementation Checklist - NEW */}
      <section>
        <div className="bg-accent border border-primary/20 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-primary">
            <CheckCircle className="w-5 h-5" />
            {ct('implementationChecklistTitle') || "Digital Implementation Checklist"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">{ct('checklistPhase1') || "Phase 1: Foundation"}</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('checklistItem1') || "Cloud-based TMS implemented"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('checklistItem2') || "Electronic document management"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('checklistItem3') || "API integrations with carriers"}
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">{ct('checklistPhase2') || "Phase 2: Optimization"}</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('checklistItem4') || "Real-time visibility platform"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('checklistItem5') || "Automated invoice processing"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                  {ct('checklistItem6') || "AI-powered pricing tools"}
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Automation Image - contextual after digital adoption checklist */}
        <ChapterImage
          src={digitalizationAutomationImg}
          alt="Digitalization workflow on multiple screens showing paperless logistics automation"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* ML for Pricing */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section4Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section4Content')}</p>
        </div>
      </section>

      {/* Digital Platforms */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section5Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section5Title')} icon={Globe}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section6Title')} icon={Wifi}>
            <p className="text-muted-foreground">{ct('section6Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Blockchain */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section7Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section7Content')}</p>
        </div>
      </section>

      {/* e-CMR & Cybersecurity */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section8Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section8Title')} icon={FileText}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section9Title')} variant="warning" icon={Lock}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Future Preparation */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section10Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section10Content')}</p>
        </div>
      </section>

      {/* Best Practices & Common Mistakes */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-4 sm:p-5 lg:p-6">
            <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-success text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>{ct('bestPracticesTitle')}</span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• {ct('bestPractice1')}</li>
              <li>• {ct('bestPractice2')}</li>
              <li>• {ct('bestPractice3')}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 sm:p-5 lg:p-6">
            <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-destructive text-sm sm:text-base">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>{ct('commonMistakesTitle')}</span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• {ct('commonMistake1')}</li>
              <li>• {ct('commonMistake2')}</li>
              <li>• {ct('commonMistake3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Book className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('glossaryTitle')}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="bg-card border border-border rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-colors">
              <dt className="font-semibold text-primary mb-0.5 sm:mb-1 text-sm sm:text-base">
                {ct(`glossaryTerm${num}`)}
              </dt>
              <dd className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ct(`glossaryDef${num}`)}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="digitalization" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="digitalization" />
    </div>
  );
}
