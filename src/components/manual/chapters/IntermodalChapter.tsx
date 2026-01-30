import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { DataTable } from "../DataTable";
import { FlowDiagram, ProcessMap } from "../FlowDiagram";
import {
  Train, Truck, Ship, Package, FileText, Users,
  Clock, AlertTriangle, Laptop, TrendingUp, CheckCircle, Leaf, MapPin, DollarSign
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import intermodalImg from "@/assets/chapters/intermodal-transport.jpg";

export function IntermodalChapter() {
  const { ct } = useChapterTranslation('intermodal');

  // Mode comparison table
  const modeComparisonHeaders = [
    ct('modeHeader') || "Mode",
    ct('costPerKmHeader') || "Cost/km",
    ct('co2Header') || "CO₂/ton-km",
    ct('speedHeader') || "Speed",
    ct('bestForHeader') || "Best For"
  ];

  const modeComparisonRows = [
    [
      <span className="font-semibold flex items-center gap-2"><Truck className="w-4 h-4 text-primary" /> Road</span>,
      "€1.20-1.80",
      "62g",
      ct('speedFast') || "Fast",
      ct('roadBestFor') || "Short distances, flexibility"
    ],
    [
      <span className="font-semibold flex items-center gap-2"><Train className="w-4 h-4 text-success" /> Rail</span>,
      "€0.25-0.45",
      "22g",
      ct('speedMedium') || "Medium",
      ct('railBestFor') || "Long distance, heavy loads"
    ],
    [
      <span className="font-semibold flex items-center gap-2"><Ship className="w-4 h-4 text-info" /> Barge</span>,
      "€0.15-0.30",
      "16g",
      ct('speedSlow') || "Slow",
      ct('bargeBestFor') || "Bulk, non-urgent"
    ],
    [
      <span className="font-semibold flex items-center gap-2"><Package className="w-4 h-4 text-warning" /> Short Sea</span>,
      "€0.20-0.40",
      "18g",
      ct('speedVariable') || "Variable",
      ct('shortSeaBestFor') || "Coastal routes, RoRo"
    ]
  ];

  // Intermodal process flow
  const intermodalProcessSteps = [
    { id: "1", label: ct('processPreHaul') || "Pre-Haul", description: ct('processPreHaulDesc') || "Road to terminal", color: "primary" as const },
    { id: "2", label: ct('processTerminal1') || "Terminal 1", description: ct('processTerminal1Desc') || "Loading/transfer", color: "warning" as const },
    { id: "3", label: ct('processMainHaul') || "Main Haul", description: ct('processMainHaulDesc') || "Rail/Barge", color: "success" as const },
    { id: "4", label: ct('processTerminal2') || "Terminal 2", description: ct('processTerminal2Desc') || "Unloading", color: "warning" as const },
    { id: "5", label: ct('processLastMile') || "Last Mile", description: ct('processLastMileDesc') || "Road delivery", color: "primary" as const }
  ];

  // European corridors
  const corridorsData = [
    {
      name: ct('corridorRhine') || "Rhine-Alpine",
      color: "info" as const,
      steps: [
        "Rotterdam → Basel → Genoa",
        ct('corridorRhineNote1') || "Highest volume corridor",
        ct('corridorRhineNote2') || "Rail + Barge options"
      ]
    },
    {
      name: ct('corridorNorthSea') || "North Sea-Baltic",
      color: "primary" as const,
      steps: [
        "Antwerp → Hamburg → Gdańsk",
        ct('corridorNorthSeaNote1') || "Container shuttle services",
        ct('corridorNorthSeaNote2') || "Strong rail frequency"
      ]
    },
    {
      name: ct('corridorAtlantic') || "Atlantic",
      color: "success" as const,
      steps: [
        "Le Havre → Paris → Mannheim",
        ct('corridorAtlanticNote1') || "Growing capacity",
        ct('corridorAtlanticNote2') || "Combined rail services"
      ]
    },
    {
      name: ct('corridorMed') || "Mediterranean",
      color: "warning" as const,
      steps: [
        "Valencia → Lyon → Milano",
        ct('corridorMedNote1') || "Short sea + rail",
        ct('corridorMedNote2') || "RoRo connections"
      ]
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Train}
        variant="intermodal"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Train className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="section-title mb-1.5 sm:mb-2">{ct('section1Title')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* What is Intermodal */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Package className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section1Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section1Content')}</p>
        </div>
      </section>

      {/* Intermodal Process Flow - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('processFlowTitle') || "Intermodal Transport Chain"}</span>
        </h2>
        <FlowDiagram 
          title="" 
          steps={intermodalProcessSteps} 
          direction="horizontal" 
        />
      </section>

      {/* Mode Comparison Table - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('modeComparisonTitle') || "Transport Mode Comparison"}</span>
        </h2>
        <DataTable headers={modeComparisonHeaders} rows={modeComparisonRows} />
      </section>

      {/* Types & Benefits */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Ship className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section2Title')}</span>
        </h2>
        
        {/* Intermodal Transport Image - contextual before transport types */}
        <ChapterImage
          src={intermodalImg}
          alt="Intermodal transport combining truck, rail and ship"
          variant="float-right"
          className="mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section2Title')} icon={Train}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} variant="success" icon={Leaf}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* European Corridors - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('corridorsTitle') || "Key European Corridors"}</span>
        </h2>
        <ProcessMap 
          title="" 
          phases={corridorsData} 
        />
      </section>

      {/* CO2 Savings Card - NEW */}
      <section>
        <div className="bg-success/10 border border-success/30 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-success">
            <Leaf className="w-5 h-5" />
            {ct('co2SavingsTitle') || "Environmental Benefits"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card rounded-lg p-4 text-center border border-border">
              <p className="text-3xl font-bold text-success">-65%</p>
              <p className="text-sm text-muted-foreground">{ct('co2Reduction') || "CO₂ vs Road"}</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center border border-border">
              <p className="text-3xl font-bold text-info">-40%</p>
              <p className="text-sm text-muted-foreground">{ct('costReduction') || "Cost Savings 500km+"}</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center border border-border">
              <p className="text-3xl font-bold text-warning">+24h</p>
              <p className="text-sm text-muted-foreground">{ct('timeAddition') || "Additional Transit"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section4Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section4Content')}</p>
        </div>
      </section>

      {/* Documentation & Operators */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section5Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section5Title')} icon={FileText}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section6Title')} icon={Users}>
            <p className="text-muted-foreground">{ct('section6Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Planning & Challenges */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section7Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section7Title')} icon={Clock}>
            <p className="text-muted-foreground">{ct('section7Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section8Title')} variant="warning" icon={AlertTriangle}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* TMS Integration & Future */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section9Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section9Title')} icon={Laptop}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section10Title')} icon={TrendingUp}>
            <p className="text-muted-foreground">{ct('section10Content')}</p>
          </InfoCard>
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
          <Package className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
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
      <MultiModalContent chapterId="intermodal" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="intermodal" />
    </div>
  );
}
