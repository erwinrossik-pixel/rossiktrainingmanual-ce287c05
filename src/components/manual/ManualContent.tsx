import { IntroChapter } from "./chapters/IntroChapter";
import { MindsetChapter } from "./chapters/MindsetChapter";
import { WorkflowChapter } from "./chapters/WorkflowChapter";
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

interface ManualContentProps {
  activeChapter: string;
}

export function ManualContent({ activeChapter }: ManualContentProps) {
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
    exchanges: <ExchangesChapter />,
    translogica: <TranslogicaChapter />,
    fleet: <FleetChapter />,
    customs: <CustomsChapter />,
    emergency: <EmergencyChapter />,
    communication: <CommunicationChapter />,
    claims: <ClaimsChapter />,
    insurance: <InsuranceChapter />,
    adr: <ADRChapter />,
    documents: <DocumentsChapter />,
    environment: <EnvironmentChapter />,
    "case-studies": <CaseStudiesChapter />,
    glossary: <GlossaryChapter />,
    training: <TrainingChapter />,
    "red-flags": <RedFlagsChapter />,
    checklists: <ChecklistsChapter />,
  };

  return (
    <main className="lg:ml-72 min-h-screen p-6 lg:p-10">
      <div className="max-w-4xl mx-auto">
        {chapters[activeChapter] || <IntroChapter />}
      </div>
    </main>
  );
}
