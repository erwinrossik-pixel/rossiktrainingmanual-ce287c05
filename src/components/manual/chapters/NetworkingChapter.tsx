import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { ChapterImage } from "../ChapterImage";
import { MultiModalContent } from "../MultiModalContent";
import { DataTable } from "../DataTable";
import { ProcessMap } from "../FlowDiagram";
import {
  Users, Handshake, Globe, Calendar, Laptop,
  Building2, Heart, Shield, Gift, Clock, CheckCircle, AlertTriangle, Book, Star, MessageSquare
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import networkingEventImg from "@/assets/chapters/networking-event.jpg";
import networkingConferenceImg from "@/assets/chapters/networking-conference.jpg";

export function NetworkingChapter() {
  const { ct } = useChapterTranslation('networking');

  // Industry events table
  const eventsHeaders = [
    ct('eventNameHeader') || "Event",
    ct('eventLocationHeader') || "Location",
    ct('eventTypeHeader') || "Type",
    ct('eventFrequencyHeader') || "Frequency"
  ];

  const eventsRows = [
    [
      <span className="font-semibold text-primary">Transport Logistic</span>,
      "Munich, DE",
      ct('eventTypeTrade') || "Trade Fair",
      ct('eventBiennial') || "Biennial"
    ],
    [
      <span className="font-semibold text-info">IRU World Congress</span>,
      ct('eventRotating') || "Rotating",
      ct('eventTypeConference') || "Conference",
      ct('eventAnnual') || "Annual"
    ],
    [
      <span className="font-semibold text-success">FIATA World Congress</span>,
      ct('eventRotating') || "Rotating",
      ct('eventTypeConference') || "Conference",
      ct('eventAnnual') || "Annual"
    ],
    [
      <span className="font-semibold text-warning">Breakbulk Europe</span>,
      "Rotterdam, NL",
      ct('eventTypeTrade') || "Trade Fair",
      ct('eventAnnual') || "Annual"
    ],
    [
      <span className="font-semibold">ChemLogistics</span>,
      "Antwerp, BE",
      ct('eventTypeSpecialized') || "Specialized",
      ct('eventAnnual') || "Annual"
    ]
  ];

  // Networking strategies
  const networkingStrategies = [
    {
      name: ct('strategyEvents') || "Industry Events",
      color: "primary" as const,
      steps: [
        ct('strategyEventsStep1') || "Prepare elevator pitch (30 sec)",
        ct('strategyEventsStep2') || "Bring quality business cards",
        ct('strategyEventsStep3') || "Follow up within 48 hours"
      ]
    },
    {
      name: ct('strategyDigital') || "Digital Networking",
      color: "info" as const,
      steps: [
        ct('strategyDigitalStep1') || "LinkedIn: connect with context",
        ct('strategyDigitalStep2') || "Join freight forwarding groups",
        ct('strategyDigitalStep3') || "Share industry insights regularly"
      ]
    },
    {
      name: ct('strategyPartner') || "Partner Development",
      color: "success" as const,
      steps: [
        ct('strategyPartnerStep1') || "Start with small test shipments",
        ct('strategyPartnerStep2') || "Build trust before volume",
        ct('strategyPartnerStep3') || "Regular performance reviews"
      ]
    },
    {
      name: ct('strategyMaintenance') || "Relationship Maintenance",
      color: "warning" as const,
      steps: [
        ct('strategyMaintenanceStep1') || "Quarterly check-in calls",
        ct('strategyMaintenanceStep2') || "Share relevant market intel",
        ct('strategyMaintenanceStep3') || "Remember personal details"
      ]
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Users}
        variant="networking"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="section-title mb-1.5 sm:mb-2">{ct('section1Title')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* Why Networking */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section1Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section1Content')}</p>
        </div>
      </section>

      {/* Networking Strategies - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('strategiesTitle') || "Networking Strategies"}</span>
        </h2>
        <ProcessMap 
          title="" 
          phases={networkingStrategies} 
        />
      </section>

      {/* Industry Events Table - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('eventsTitle') || "Key Industry Events"}</span>
        </h2>
        <DataTable headers={eventsHeaders} rows={eventsRows} />
      </section>

      {/* Elevator Pitch Template - NEW */}
      <section>
        <div className="bg-accent border border-primary/20 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-primary">
            <MessageSquare className="w-5 h-5" />
            {ct('elevatorPitchTitle') || "30-Second Elevator Pitch Template"}
          </h3>
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-medium text-foreground">{ct('pitchStep1Title') || "Introduction"}</p>
                  <p className="text-muted-foreground text-xs">{ct('pitchStep1Example') || '"I\'m [Name] from [Company], specializing in [Service Type]."'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-medium text-foreground">{ct('pitchStep2Title') || "Value Proposition"}</p>
                  <p className="text-muted-foreground text-xs">{ct('pitchStep2Example') || '"We help companies with [specific solution] in [geographic area]."'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-medium text-foreground">{ct('pitchStep3Title') || "Differentiator"}</p>
                  <p className="text-muted-foreground text-xs">{ct('pitchStep3Example') || '"What sets us apart is [unique strength / capability]."'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-success text-success-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-medium text-foreground">{ct('pitchStep4Title') || "Call to Action"}</p>
                  <p className="text-muted-foreground text-xs">{ct('pitchStep4Example') || '"I\'d love to discuss how we could work together - here\'s my card."'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Relationships */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section2Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section2Title')} icon={Heart}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} icon={Users}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Events & Digital */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section4Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section4Title')} icon={Calendar}>
            <p className="text-muted-foreground">{ct('section4Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section5Title')} icon={Laptop}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section6Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section6Content')}</p>
        </div>
        
        {/* Networking Event Image - contextual after partnerships section */}
        <ChapterImage
          src={networkingEventImg}
          alt="Professional logistics networking event with industry partners"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Follow-up Template Card - NEW */}
      <section>
        <div className="bg-info/10 border border-info/30 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-info">
            <Laptop className="w-5 h-5" />
            {ct('followUpTitle') || "48-Hour Follow-up Email Template"}
          </h3>
          <div className="bg-card rounded-lg p-4 border border-border text-sm">
            <p className="text-muted-foreground italic">
              Subject: {ct('followUpSubject') || "Great meeting you at [Event Name]"}
            </p>
            <div className="mt-3 space-y-2 text-muted-foreground">
              <p>{ct('followUpLine1') || "Dear [Name],"}</p>
              <p>{ct('followUpLine2') || "It was a pleasure meeting you at [Event] yesterday. I enjoyed our conversation about [specific topic discussed]."}</p>
              <p>{ct('followUpLine3') || "As mentioned, I'd be happy to [specific offer / next step]. Please find attached [relevant materials]."}</p>
              <p>{ct('followUpLine4') || "Would you be available for a brief call next week to explore potential collaboration?"}</p>
              <p className="mt-3">{ct('followUpClosing') || "Best regards,"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Management & Crisis */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section7Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section7Title')} icon={Globe}>
            <p className="text-muted-foreground">{ct('section7Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section8Title')} variant="warning" icon={Shield}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Reciprocity & Maintenance */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section9Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section9Title')} icon={Gift}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section10Title')} icon={Clock}>
            <p className="text-muted-foreground">{ct('section10Content')}</p>
          </InfoCard>
        </div>
        
        {/* Conference Image - contextual after reciprocity section */}
        <ChapterImage
          src={networkingConferenceImg}
          alt="Logistics conference networking event with professionals exchanging ideas"
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
      <MultiModalContent chapterId="networking" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="networking" />
    </div>
  );
}
