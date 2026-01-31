import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { DataTable } from "../DataTable";
import { FlowDiagram, ProcessMap } from "../FlowDiagram";
import {
  Zap, Clock, Truck, Target, Users, Calculator,
  FileText, Shield, BarChart3, XCircle, CheckCircle, AlertTriangle, Package, MapPin
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import expressImg from "@/assets/chapters/express-delivery-fleet.jpg";
import expressVanImg from "@/assets/chapters/express-delivery-van.jpg";

export function ExpressTransportChapter() {
  const { ct } = useChapterTranslation('express-transport');
  
  // Service types table data
  const serviceTypesHeaders = [
    ct('serviceTypeHeader') || "Service Type",
    ct('deliveryTimeHeader') || "Delivery Time",
    ct('useCasesHeader') || "Use Cases",
    ct('premiumHeader') || "Premium (%)"
  ];

  const serviceTypesRows = [
    [
      <span className="font-semibold text-primary">Same Day</span>,
      "2-8h",
      ct('sameDayUseCase') || "Urgent spare parts, medical supplies",
      "+200-400%"
    ],
    [
      <span className="font-semibold text-warning">Next Day AM</span>,
      "12-18h",
      ct('nextDayAMUseCase') || "Production line supplies, documents",
      "+80-150%"
    ],
    [
      <span className="font-semibold text-info">Next Day PM</span>,
      "24h",
      ct('nextDayPMUseCase') || "E-commerce, retail replenishment",
      "+40-80%"
    ],
    [
      <span className="font-semibold text-success">Time Definite</span>,
      "Fixed slot",
      ct('timeDefiniteUseCase') || "JIT manufacturing, events",
      "+60-120%"
    ],
    [
      <span className="font-semibold">Weekend/Holiday</span>,
      "Variable",
      ct('weekendUseCase') || "Critical breakdowns, emergency",
      "+150-300%"
    ]
  ];

  // Express process flow
  const expressProcessSteps = [
    { id: "1", label: ct('processStep1') || "Order Receipt", description: ct('processStep1Desc') || "Validate urgency", color: "primary" as const },
    { id: "2", label: ct('processStep2') || "Vehicle Assignment", description: ct('processStep2Desc') || "Direct/dedicated", color: "info" as const },
    { id: "3", label: ct('processStep3') || "Pickup", description: ct('processStep3Desc') || "Max 1-2h", color: "warning" as const },
    { id: "4", label: ct('processStep4') || "Direct Transit", description: ct('processStep4Desc') || "No hub stops", color: "success" as const },
    { id: "5", label: ct('processStep5') || "Delivery + POD", description: ct('processStep5Desc') || "Real-time confirm", color: "primary" as const }
  ];

  // Industries using express
  const industriesData = [
    {
      name: ct('industryAutomotive') || "Automotive",
      color: "primary" as const,
      steps: [
        ct('automotiveUse1') || "Line-stop spare parts",
        ct('automotiveUse2') || "JIT component delivery",
        ct('automotiveUse3') || "Prototype transport"
      ]
    },
    {
      name: ct('industryMedical') || "Medical/Pharma",
      color: "success" as const,
      steps: [
        ct('medicalUse1') || "Temperature-controlled samples",
        ct('medicalUse2') || "Organ/tissue transport",
        ct('medicalUse3') || "Clinical trial materials"
      ]
    },
    {
      name: ct('industryTech') || "Technology",
      color: "info" as const,
      steps: [
        ct('techUse1') || "Server/hardware replacement",
        ct('techUse2') || "Data center equipment",
        ct('techUse3') || "Prototype delivery"
      ]
    },
    {
      name: ct('industryRetail') || "Retail/E-commerce",
      color: "warning" as const,
      steps: [
        ct('retailUse1') || "Flash sale fulfillment",
        ct('retailUse2') || "Store replenishment",
        ct('retailUse3') || "VIP customer orders"
      ]
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Zap}
        variant="express-transport"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="section-title mb-1.5 sm:mb-2">{ct('section1Title')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* What Defines Express */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section1Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section1Content')}</p>
        </div>
      </section>

      {/* Express Process Flow - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('processFlowTitle') || "Express Transport Process"}</span>
        </h2>
        <FlowDiagram 
          title="" 
          steps={expressProcessSteps} 
          direction="horizontal" 
        />
      </section>

      {/* Service Types Table - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Package className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('serviceTypesTitle') || "Express Service Categories"}</span>
        </h2>
        <DataTable headers={serviceTypesHeaders} rows={serviceTypesRows} />
      </section>

      {/* Industries Using Express - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('industriesTitle') || "Key Industries"}</span>
        </h2>
        <ProcessMap 
          title="" 
          phases={industriesData} 
        />
      </section>

      {/* Types of Services & Industries */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section2Title')}</span>
        </h2>
        
        {/* Express Delivery Fleet Image - contextual before service types */}
        <ChapterImage
          src={expressImg}
          alt="Express transport fleet - dedicated delivery vehicles"
          variant="float-right"
          className="mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section2Title')} icon={Truck}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} icon={Target}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Planning */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section4Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section4Content')}</p>
        </div>
      </section>

      {/* Network & Costs */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section5Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section5Title')} icon={Users}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section6Title')} icon={Calculator}>
            <p className="text-muted-foreground">{ct('section6Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Pricing Formula Card - NEW */}
      <section>
        <div className="bg-accent border border-primary/20 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-primary">
            <Calculator className="w-5 h-5" />
            {ct('pricingFormulaTitle') || "Express Pricing Formula"}
          </h3>
          <div className="bg-card rounded-lg p-4 font-mono text-sm text-center border border-border">
            <p className="text-muted-foreground mb-2">{ct('pricingFormulaLabel') || "Express Rate ="}</p>
            <p className="text-lg font-bold text-primary">
              Base Rate × Urgency Factor × (1 + Distance Premium) × Time Slot Multiplier
            </p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-warning" />
              {ct('pricingNote1') || "Same-day: 2.5-4x base rate"}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-info" />
              {ct('pricingNote2') || "Night/weekend: +50-100% surcharge"}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              {ct('pricingNote3') || "Dedicated vehicle: flat rate per km"}
            </li>
          </ul>
        </div>
      </section>

      {/* Documentation & Risk */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section7Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section7Title')} icon={FileText}>
            <p className="text-muted-foreground">{ct('section7Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section8Title')} variant="warning" icon={Shield}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* KPIs & When to Refuse */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section9Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section9Title')} icon={BarChart3}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section10Title')} variant="warning" icon={XCircle}>
            <p className="text-muted-foreground">{ct('section10Content')}</p>
          </InfoCard>
        </div>
        
        {/* Express Delivery Van Image - contextual after KPIs */}
        <ChapterImage
          src={expressVanImg}
          alt="Express courier van speeding on highway for urgent delivery"
          variant="float-right"
          className="mt-4"
        />
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
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
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
      <MultiModalContent chapterId="express-transport" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="express-transport" />
    </div>
  );
}
