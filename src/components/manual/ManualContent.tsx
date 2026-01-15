import { IntroChapter } from "./chapters/IntroChapter";
import { MindsetChapter } from "./chapters/MindsetChapter";
import { WorkflowChapter } from "./chapters/WorkflowChapter";
import { ReadingProgress } from "./ReadingProgress";
import { VehicleChapter } from "./chapters/VehicleChapter";
import { LoadingChapter } from "./chapters/LoadingChapter";
import { ReeferChapter } from "./chapters/ReeferChapter";
import { ComplianceChapter } from "./chapters/ComplianceChapter";
import { DrivingTimeChapter } from "./chapters/DrivingTimeChapter";
import { PricingChapter } from "./chapters/PricingChapter";
import { PaymentChapter } from "./chapters/PaymentChapter";
import { ClientsChapter } from "./chapters/ClientsChapter";
import { ExchangesChapter } from "./chapters/ExchangesChapter";
import { TranslogicaChapter } from "./chapters/TranslogicaChapter";
import { FleetChapter } from "./chapters/FleetChapter";
import { CustomsChapter } from "./chapters/CustomsChapter";
import { TrainingChapter } from "./chapters/TrainingChapter";
import { RedFlagsChapter } from "./chapters/RedFlagsChapter";
import { ChecklistsChapter } from "./chapters/ChecklistsChapter";
import { EmergencyChapter } from "./chapters/EmergencyChapter";
import { CommunicationChapter } from "./chapters/CommunicationChapter";
import { ClaimsChapter } from "./chapters/ClaimsChapter";
import { InsuranceChapter } from "./chapters/InsuranceChapter";
import { ADRChapter } from "./chapters/ADRChapter";
import { DocumentsChapter } from "./chapters/DocumentsChapter";
import { EnvironmentChapter } from "./chapters/EnvironmentChapter";
import { GlossaryChapter } from "./chapters/GlossaryChapter";
import { CaseStudiesChapter } from "./chapters/CaseStudiesChapter";
import { CarrierManagementChapter } from "./chapters/CarrierManagementChapter";
import { CommercialChapter } from "./chapters/CommercialChapter";
import { KPIChapter } from "./chapters/KPIChapter";
import { SoftSkillsChapter } from "./chapters/SoftSkillsChapter";
import { EuropeZonesChapter } from "./chapters/EuropeZonesChapter";
import { IncotermsChapter } from "./chapters/IncotermsChapter";
import { TechnologyChapter } from "./chapters/TechnologyChapter";
import { SupplyChainChapter } from "./chapters/SupplyChainChapter";
import { RiskManagementChapter } from "./chapters/RiskManagementChapter";
import { AccountingChapter } from "./chapters/AccountingChapter";
import { NegotiationChapter } from "./chapters/NegotiationChapter";
import { WarehouseChapter } from "./chapters/WarehouseChapter";
import { LicensesOversizeChapter } from "./chapters/LicensesOversizeChapter";
import { StressManagementChapter } from "./chapters/StressManagementChapter";
import { SustainabilityChapter } from "./chapters/SustainabilityChapter";
import { AuthoritiesChapter } from "./chapters/AuthoritiesChapter";
import { DigitalizationChapter } from "./chapters/DigitalizationChapter";
import { EuropeanCountriesChapter } from "./chapters/EuropeanCountriesChapter";
import { ExpressTransportChapter } from "./chapters/ExpressTransportChapter";
import { HighValueGoodsChapter } from "./chapters/HighValueGoodsChapter";
import { IntermodalChapter } from "./chapters/IntermodalChapter";
import { NetworkingChapter } from "./chapters/NetworkingChapter";
import { ProfessionalDevelopmentChapter } from "./chapters/ProfessionalDevelopmentChapter";
import { ChapterNavigation } from "./ChapterNavigation";

interface ManualContentProps {
  activeChapter: string;
  onChapterChange: (chapterId: string) => void;
}

export function ManualContent({ activeChapter, onChapterChange }: ManualContentProps) {
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

  return (
    <>
      <ReadingProgress />
      <main className="lg:ml-72 min-h-screen pt-14 bg-background">
        {/* Clean background */}
        <div className="fixed inset-0 lg:left-72 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-muted rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div 
              key={activeChapter}
              className="animate-chapter-enter"
            >
              {chapters[activeChapter] || <IntroChapter />}
              <ChapterNavigation 
                activeChapter={activeChapter} 
                onChapterChange={onChapterChange} 
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
