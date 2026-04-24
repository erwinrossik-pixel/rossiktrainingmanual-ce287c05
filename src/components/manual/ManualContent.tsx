import { lazy, Suspense } from "react";
import { ReadingProgress } from "./ReadingProgress";
import { AITutor } from "./AITutor";
import { PaywallOverlay } from "@/components/subscription/PaywallOverlay";
import { usePremiumChapters } from "@/hooks/usePremiumChapters";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChapterNavigation } from "./ChapterNavigation";
import { ChapterDiscussions } from "./ChapterDiscussions";
import { MultiModalContent } from "./MultiModalContent";

// Helper: lazy-load a named export as default
const lazyNamed = <T extends string>(
  loader: () => Promise<Record<T, React.ComponentType<any>>>,
  name: T
) => lazy(() => loader().then((m) => ({ default: m[name] })));

// Lazy-loaded chapter components — each is fetched only when the user opens it
const IntroChapter = lazyNamed(() => import("./chapters/IntroChapter"), "IntroChapter");
const MindsetChapter = lazyNamed(() => import("./chapters/MindsetChapter"), "MindsetChapter");
const WorkflowChapter = lazyNamed(() => import("./chapters/WorkflowChapter"), "WorkflowChapter");
const VehicleChapter = lazyNamed(() => import("./chapters/VehicleChapter"), "VehicleChapter");
const LoadingChapter = lazyNamed(() => import("./chapters/LoadingChapter"), "LoadingChapter");
const ReeferChapter = lazyNamed(() => import("./chapters/ReeferChapter"), "ReeferChapter");
const ComplianceChapter = lazyNamed(() => import("./chapters/ComplianceChapter"), "ComplianceChapter");
const DrivingTimeChapter = lazyNamed(() => import("./chapters/DrivingTimeChapter"), "DrivingTimeChapter");
const PricingChapter = lazyNamed(() => import("./chapters/PricingChapter"), "PricingChapter");
const PaymentChapter = lazyNamed(() => import("./chapters/PaymentChapter"), "PaymentChapter");
const ClientsChapter = lazyNamed(() => import("./chapters/ClientsChapter"), "ClientsChapter");
const ExchangesChapter = lazyNamed(() => import("./chapters/ExchangesChapter"), "ExchangesChapter");
const TranslogicaChapter = lazyNamed(() => import("./chapters/TranslogicaChapter"), "TranslogicaChapter");
const FleetChapter = lazyNamed(() => import("./chapters/FleetChapter"), "FleetChapter");
const CustomsChapter = lazyNamed(() => import("./chapters/CustomsChapter"), "CustomsChapter");
const TrainingChapter = lazyNamed(() => import("./chapters/TrainingChapter"), "TrainingChapter");
const RedFlagsChapter = lazyNamed(() => import("./chapters/RedFlagsChapter"), "RedFlagsChapter");
const ChecklistsChapter = lazyNamed(() => import("./chapters/ChecklistsChapter"), "ChecklistsChapter");
const EmergencyChapter = lazyNamed(() => import("./chapters/EmergencyChapter"), "EmergencyChapter");
const CommunicationChapter = lazyNamed(() => import("./chapters/CommunicationChapter"), "CommunicationChapter");
const ClaimsChapter = lazyNamed(() => import("./chapters/ClaimsChapter"), "ClaimsChapter");
const InsuranceChapter = lazyNamed(() => import("./chapters/InsuranceChapter"), "InsuranceChapter");
const ADRChapter = lazyNamed(() => import("./chapters/ADRChapter"), "ADRChapter");
const DocumentsChapter = lazyNamed(() => import("./chapters/DocumentsChapter"), "DocumentsChapter");
const EnvironmentChapter = lazyNamed(() => import("./chapters/EnvironmentChapter"), "EnvironmentChapter");
const GlossaryChapter = lazyNamed(() => import("./chapters/GlossaryChapter"), "GlossaryChapter");
const CaseStudiesChapter = lazyNamed(() => import("./chapters/CaseStudiesChapter"), "CaseStudiesChapter");
const CarrierManagementChapter = lazyNamed(() => import("./chapters/CarrierManagementChapter"), "CarrierManagementChapter");
const CommercialChapter = lazyNamed(() => import("./chapters/CommercialChapter"), "CommercialChapter");
const KPIChapter = lazyNamed(() => import("./chapters/KPIChapter"), "KPIChapter");
const SoftSkillsChapter = lazyNamed(() => import("./chapters/SoftSkillsChapter"), "SoftSkillsChapter");
const EuropeZonesChapter = lazyNamed(() => import("./chapters/EuropeZonesChapter"), "EuropeZonesChapter");
const IncotermsChapter = lazyNamed(() => import("./chapters/IncotermsChapter"), "IncotermsChapter");
const TechnologyChapter = lazyNamed(() => import("./chapters/TechnologyChapter"), "TechnologyChapter");
const SupplyChainChapter = lazyNamed(() => import("./chapters/SupplyChainChapter"), "SupplyChainChapter");
const RiskManagementChapter = lazyNamed(() => import("./chapters/RiskManagementChapter"), "RiskManagementChapter");
const AccountingChapter = lazyNamed(() => import("./chapters/AccountingChapter"), "AccountingChapter");
const NegotiationChapter = lazyNamed(() => import("./chapters/NegotiationChapter"), "NegotiationChapter");
const WarehouseChapter = lazyNamed(() => import("./chapters/WarehouseChapter"), "WarehouseChapter");
const LicensesOversizeChapter = lazyNamed(() => import("./chapters/LicensesOversizeChapter"), "LicensesOversizeChapter");
const StressManagementChapter = lazyNamed(() => import("./chapters/StressManagementChapter"), "StressManagementChapter");
const SustainabilityChapter = lazyNamed(() => import("./chapters/SustainabilityChapter"), "SustainabilityChapter");
const AuthoritiesChapter = lazyNamed(() => import("./chapters/AuthoritiesChapter"), "AuthoritiesChapter");
const DigitalizationChapter = lazyNamed(() => import("./chapters/DigitalizationChapter"), "DigitalizationChapter");
const EuropeanCountriesChapter = lazyNamed(() => import("./chapters/EuropeanCountriesChapter"), "EuropeanCountriesChapter");
const ExpressTransportChapter = lazyNamed(() => import("./chapters/ExpressTransportChapter"), "ExpressTransportChapter");
const HighValueGoodsChapter = lazyNamed(() => import("./chapters/HighValueGoodsChapter"), "HighValueGoodsChapter");
const IntermodalChapter = lazyNamed(() => import("./chapters/IntermodalChapter"), "IntermodalChapter");
const NetworkingChapter = lazyNamed(() => import("./chapters/NetworkingChapter"), "NetworkingChapter");
const ProfessionalDevelopmentChapter = lazyNamed(() => import("./chapters/ProfessionalDevelopmentChapter"), "ProfessionalDevelopmentChapter");

interface ManualContentProps {
  activeChapter: string;
  onChapterChange: (chapterId: string) => void;
}

// Loading skeleton shown while a chapter chunk is being downloaded
const ChapterLoader = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Loading chapter…</p>
    </div>
  </div>
);

export function ManualContent({ activeChapter, onChapterChange }: ManualContentProps) {
  const { isChapterLocked, getChapterMinPlan } = usePremiumChapters();
  const { t } = useLanguage();
  
  const chapters: Record<string, React.ReactNode> = {
    intro: <IntroChapter />,
    mindset: <MindsetChapter />,
    workflow: <WorkflowChapter />,
    vehicle: <VehicleChapter />,
    loading: <LoadingChapter />,
    reefer: <ReeferChapter />,
    compliance: <ComplianceChapter />,
    "driving-time": <DrivingTimeChapter />,
    pricing: <PricingChapter />,
    payment: <PaymentChapter />,
    clients: <ClientsChapter />,
    "carrier-management": <CarrierManagementChapter />,
    commercial: <CommercialChapter />,
    negotiation: <NegotiationChapter />,
    exchanges: <ExchangesChapter />,
    translogica: <TranslogicaChapter />,
    fleet: <FleetChapter />,
    customs: <CustomsChapter />,
    incoterms: <IncotermsChapter />,
    "europe-zones": <EuropeZonesChapter />,
    warehouse: <WarehouseChapter />,
    "supply-chain": <SupplyChainChapter />,
    emergency: <EmergencyChapter />,
    communication: <CommunicationChapter />,
    claims: <ClaimsChapter />,
    insurance: <InsuranceChapter />,
    adr: <ADRChapter />,
    documents: <DocumentsChapter />,
    environment: <EnvironmentChapter />,
    "risk-management": <RiskManagementChapter />,
    accounting: <AccountingChapter />,
    kpi: <KPIChapter />,
    "soft-skills": <SoftSkillsChapter />,
    technology: <TechnologyChapter />,
    "case-studies": <CaseStudiesChapter />,
    glossary: <GlossaryChapter />,
    training: <TrainingChapter />,
    "red-flags": <RedFlagsChapter />,
    checklists: <ChecklistsChapter />,
    "licenses-oversize": <LicensesOversizeChapter />,
    "stress-management": <StressManagementChapter />,
    sustainability: <SustainabilityChapter />,
    authorities: <AuthoritiesChapter />,
    digitalization: <DigitalizationChapter />,
    "european-countries": <EuropeanCountriesChapter />,
    "express-transport": <ExpressTransportChapter />,
    "high-value-goods": <HighValueGoodsChapter />,
    intermodal: <IntermodalChapter />,
    networking: <NetworkingChapter />,
    "professional-development": <ProfessionalDevelopmentChapter />,
  };

  // Get translated chapter name using the t() function
  const getChapterName = (chapterId: string): string => {
    return t(`chapter.${chapterId}`) || chapterId;
  };

  const isLocked = isChapterLocked(activeChapter);
  const requiredPlan = getChapterMinPlan(activeChapter);

  return (
    <>
      <ReadingProgress />
      <main className="lg:ml-72 min-h-screen bg-background">
        {/* Clean background */}
        <div className="fixed inset-0 lg:left-72 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-muted rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 xl:px-12 xl:py-10">
          <div className="max-w-4xl mx-auto w-full">
            <div 
              key={activeChapter}
              className="animate-chapter-enter space-y-6 sm:space-y-8"
            >
              {isLocked && requiredPlan ? (
                <PaywallOverlay 
                  requiredPlan={requiredPlan} 
                  featureName={getChapterName(activeChapter)}
                  className="min-h-[60vh]"
                >
                  <Suspense fallback={<ChapterLoader />}>
                    {chapters[activeChapter] || <IntroChapter />}
                  </Suspense>
                </PaywallOverlay>
              ) : (
              <>
                  <Suspense fallback={<ChapterLoader />}>
                    {chapters[activeChapter] || <IntroChapter />}
                  </Suspense>
                  
                  {/* Multi-Modal Content: Audio, Video Scripts, Diagrams */}
                  <div className="mt-6 sm:mt-8">
                    <MultiModalContent chapterId={activeChapter} />
                  </div>
                  
                  <ChapterNavigation 
                    activeChapter={activeChapter} 
                    onChapterChange={onChapterChange} 
                  />
                  {/* Chapter Discussions */}
                  <ChapterDiscussions chapterId={activeChapter} />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* AI Tutor - available on all chapters */}
      <AITutor chapterId={activeChapter} />
    </>
  );
}
