import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import {
  Monitor, Users, Truck, Package, CalendarDays, FileText, 
  BarChart3, Settings, Link, CheckCircle2, Search, MapPin, 
  Send, Calculator, Database, Workflow, FileSearch, Clock,
  Navigation, Layers, Filter, Bell, MessageSquare, Globe
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import tmsInterfaceImg from "@/assets/chapters/translogica-tms-interface.jpg";

export function TranslogicaChapter() {
  const { ct } = useChapterTranslation("translogica");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Monitor}
        variant="translogica"
      />

      {/* TMS Interface Image */}
      <ChapterImage
        src={tmsInterfaceImg}
        alt="TMS Transport Management System Interface"
        variant="inline"
        className="mb-6"
      />

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Monitor className="w-6 h-6 text-primary" />
          {ct("introTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("introDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Database className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("masterData")}</p>
            <p className="text-xs text-muted-foreground">{ct("masterDataDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <CalendarDays className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("dispoPlan")}</p>
            <p className="text-xs text-muted-foreground">{ct("dispoPlanDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("routePlanning")}</p>
            <p className="text-xs text-muted-foreground">{ct("routePlanningDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("invoicing")}</p>
            <p className="text-xs text-muted-foreground">{ct("invoicingDesc")}</p>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sidebar to-sidebar/80 p-8 text-sidebar-foreground">
        <Monitor className="absolute top-4 right-4 w-20 h-20 text-sidebar-foreground/10" />
        <h2 className="text-2xl font-bold mb-2 font-serif">{ct("quickStartGuide")}</h2>
        <p className="text-sidebar-foreground/80 mb-6">{ct("quickStartDesc")}</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Users, label: ct("registerClient"), path: ct("registerClientPath") },
            { icon: Truck, label: ct("registerVehicle"), path: ct("registerVehiclePath") },
            { icon: Package, label: ct("createOrder"), path: ct("createOrderPath") },
          ].map((item, i) => (
            <div key={i} className="bg-sidebar-accent/50 rounded-lg p-4">
              <item.icon className="w-8 h-8 text-sidebar-primary mb-2" />
              <h3 className="font-semibold">{item.label}</h3>
              <p className="text-xs text-sidebar-foreground/60">{item.path}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation & Interface */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Navigation className="w-6 h-6 text-primary" />
          {ct("navigationTitle")}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("mainNavigation")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("menuPinning")}:</strong> {ct("menuPinningDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("favorites")}:</strong> {ct("favoritesDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("quickSearch")}:</strong> {ct("quickSearchDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("layoutSave")}:</strong> {ct("layoutSaveDesc")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("keyboardShortcuts")}</h3>
            <DataTable
              headers={[ct("shortcut"), ct("function")]}
              rows={[
                ["F5", ct("goToNavigation")],
                ["F8", ct("jumpToSearch")],
                ["Ctrl + N", ct("newRecord")],
                ["Ctrl + S", ct("saveRecord")],
                ["Ctrl + D", ct("duplicateRecord")],
                ["Ctrl + L", ct("deleteRecord")],
                ["Ctrl + Tab", ct("switchTabs")],
                ["Alt + Click", ct("copyToClipboard")],
              ]}
            />
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("dfsSearchTitle")}</h4>
          <p className="text-sm text-muted-foreground mb-2">{ct("dfsSearchDesc")}</p>
          <ul className="text-sm space-y-1">
            <li>• {ct("dfsFeature1")}</li>
            <li>• {ct("dfsFeature2")}</li>
            <li>• {ct("dfsFeature3")}</li>
          </ul>
        </div>
      </div>

      {/* Step by Step Guides */}
      <div className="space-y-6">
        {/* Register Client */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">🧾</span>
            {ct("registerClientTitle")}
          </h2>
          <p className="text-muted-foreground mb-4">{ct("registerClientIntro")}</p>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step1")}</span>
              <span>{ct("clientStep1")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step2")}</span>
              <span>{ct("clientStep2")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step3")}</span>
              <span>{ct("clientStep3")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step4")}</span>
              <span>{ct("clientStep4")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-medium">{ct("save")} ✅</span>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("addressTypes")}</h4>
            <div className="grid md:grid-cols-3 gap-2 text-sm">
              <div className="p-2 bg-background rounded">
                <strong>{ct("kunde")}</strong> - {ct("kundeDesc")}
              </div>
              <div className="p-2 bg-background rounded">
                <strong>{ct("lieferant")}</strong> - {ct("lieferantDesc")}
              </div>
              <div className="p-2 bg-background rounded">
                <strong>{ct("unternehmer")}</strong> - {ct("unternehmerDesc")}
              </div>
              <div className="p-2 bg-background rounded">
                <strong>{ct("hub")}</strong> - {ct("hubDesc")}
              </div>
              <div className="p-2 bg-background rounded">
                <strong>{ct("grenzubergang")}</strong> - {ct("grenzubergangDesc")}
              </div>
              <div className="p-2 bg-background rounded">
                <strong>{ct("zollspedition")}</strong> - {ct("zollspeditionDesc")}
              </div>
            </div>
          </div>
        </div>

        {/* Register Vehicle */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">🚛</span>
            {ct("registerVehicleTitle")}
          </h2>
          <p className="text-muted-foreground mb-4">{ct("registerVehicleIntro")}</p>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step1")}</span>
              <span>{ct("vehicleStep1")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step2")}</span>
              <span>{ct("vehicleStep2")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step3")}</span>
              <span>{ct("vehicleStep3")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-medium">{ct("save")} ✅</span>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold mb-2">{ct("vehicleDataFields")}</h4>
            <DataTable
              headers={[ct("field"), ct("description")]}
              rows={[
                [ct("vehicleType"), ct("vehicleTypeDesc")],
                [ct("vehicleOwner"), ct("vehicleOwnerDesc")],
                [ct("technicalData"), ct("technicalDataDesc")],
                [ct("weights"), ct("weightsDesc")],
                [ct("emissionClass"), ct("emissionClassDesc")],
                [ct("coolingUnit"), ct("coolingUnitDesc")],
                [ct("teamAssignment"), ct("teamAssignmentDesc")],
                [ct("telematicsId"), ct("telematicsIdDesc")],
              ]}
            />
          </div>
        </div>

        {/* Create Order */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">📦</span>
            {ct("registerOrderTitle")}
          </h2>
          <p className="text-muted-foreground mb-4">{ct("registerOrderIntro")}</p>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step1")}</span>
              <span>{ct("orderStep1")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step2")}</span>
              <span>{ct("orderStep2")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">{ct("step3")}</span>
              <span>{ct("orderStep3")}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-medium">{ct("orderComplete")} ✅</span>
            </div>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">{ct("sendungFeatures")}</h4>
              <ul className="text-sm space-y-1">
                <li>• {ct("sendungSplit")}</li>
                <li>• {ct("sendungAdr")}</li>
                <li>• {ct("sendungPricing")}</li>
                <li>• {ct("sendungStatus")}</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">{ct("orderDocuments")}</h4>
              <ul className="text-sm space-y-1">
                <li>• {ct("orderConfirmation")}</li>
                <li>• {ct("coverSheet")}</li>
                <li>• {ct("cmrWaybill")}</li>
                <li>• {ct("exportCertificate")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Dispoplan */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <CalendarDays className="w-6 h-6 text-primary" />
          {ct("dispoplanTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("dispoplanDesc")}</p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title={ct("dispoVehicles")} icon={Truck}>
            <ul className="text-sm space-y-1">
              <li>• {ct("dispoVehicle1")}</li>
              <li>• {ct("dispoVehicle2")}</li>
              <li>• {ct("dispoVehicle3")}</li>
              <li>• {ct("dispoVehicle4")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("dispoTours")} icon={MapPin}>
            <ul className="text-sm space-y-1">
              <li>• {ct("dispoTour1")}</li>
              <li>• {ct("dispoTour2")}</li>
              <li>• {ct("dispoTour3")}</li>
              <li>• {ct("dispoTour4")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("dispoMap")} icon={Globe}>
            <ul className="text-sm space-y-1">
              <li>• {ct("dispoMap1")}</li>
              <li>• {ct("dispoMap2")}</li>
              <li>• {ct("dispoMap3")}</li>
              <li>• {ct("dispoMap4")}</li>
            </ul>
          </InfoCard>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("dispoPracticalTips")}</h4>
          <ul className="text-sm space-y-1">
            <li>• {ct("dispoTip1")}</li>
            <li>• {ct("dispoTip2")}</li>
            <li>• {ct("dispoTip3")}</li>
          </ul>
        </div>
      </div>

      {/* Route Planning */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          {ct("routePlanningTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("routePlanningDesc2")}</p>
        
        <DataTable
          headers={[ct("feature"), ct("description"), ct("benefit")]}
          rows={[
            [ct("ptvIntegration"), ct("ptvIntegrationDesc"), ct("ptvIntegrationBenefit")],
            [ct("tollCalc"), ct("tollCalcDesc"), ct("tollCalcBenefit")],
            [ct("ferryBooking"), ct("ferryBookingDesc"), ct("ferryBookingBenefit")],
            [ct("routeArchive"), ct("routeArchiveDesc"), ct("routeArchiveBenefit")],
            [ct("drivingInstructions"), ct("drivingInstructionsDesc"), ct("drivingInstructionsBenefit")],
          ]}
        />
      </div>

      {/* Telematik */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Bell className="w-6 h-6 text-primary" />
          {ct("telematikTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("telematikDesc")}</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("telematikFeatures")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("telematikFeature1")}</li>
              <li>• {ct("telematikFeature2")}</li>
              <li>• {ct("telematikFeature3")}</li>
              <li>• {ct("telematikFeature4")}</li>
              <li>• {ct("telematikFeature5")}</li>
            </ul>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("liveTracking")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("liveTracking1")}</li>
              <li>• {ct("liveTracking2")}</li>
              <li>• {ct("liveTracking3")}</li>
              <li>• {ct("liveTracking4")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div>
        <h2 className="section-title mb-4">🚀 {ct("advancedFeatures")}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("dispatchPlanning")} icon={CalendarDays}>
            <ul className="space-y-1 text-sm">
              <li>• {ct("dispatchPlanningDesc1")}</li>
              <li>• {ct("dispatchPlanningDesc2")}</li>
              <li>• {ct("dispatchPlanningDesc3")}</li>
              <li>• {ct("dispatchPlanningDesc4")}</li>
            </ul>
          </InfoCard>

          <InfoCard title={ct("platformIntegrations")} icon={Link}>
            <ul className="space-y-1 text-sm">
              <li>• {ct("timocomIntegration")}</li>
              <li>• {ct("transporeonIntegration")}</li>
              <li>• {ct("dotigaIntegration")}</li>
              <li>• {ct("emailSmsIntegration")}</li>
            </ul>
          </InfoCard>

          <InfoCard title={ct("invoicingProfitControl")} icon={FileText}>
            <ul className="space-y-1 text-sm">
              <li>• {ct("autoRateCalc")}</li>
              <li>• {ct("generateInvoices")}</li>
              <li>• {ct("subcontractorNotes")}</li>
              <li>• {ct("realTimeProfitView")}</li>
            </ul>
          </InfoCard>

          <InfoCard title={ct("reportsDashboards")} icon={BarChart3}>
            <ul className="space-y-1 text-sm">
              <li>• {ct("kpisByClient")}</li>
              <li>• {ct("monthlyPerformance")}</li>
              <li>• {ct("cubeDashboard")}</li>
              <li>• {ct("profitCostKmTracking")}</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Fakturierung */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calculator className="w-6 h-6 text-primary" />
          {ct("fakturierungTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("fakturierungDesc")}</p>
        
        <DataTable
          headers={[ct("module"), ct("functions"), ct("benefits")]}
          rows={[
            [ct("priceCalc"), ct("priceCalcFunc"), ct("priceCalcBenefit")],
            [ct("tariffs"), ct("tariffsFunc"), ct("tariffsBenefit")],
            [ct("invoiceGen"), ct("invoiceGenFunc"), ct("invoiceGenBenefit")],
            [ct("creditNotes"), ct("creditNotesFunc"), ct("creditNotesBenefit")],
            [ct("costCenters"), ct("costCentersFunc"), ct("costCentersBenefit")],
            [ct("fibuExport"), ct("fibuExportFunc"), ct("fibuExportBenefit")],
          ]}
        />
      </div>

      {/* Lademittelverwaltung */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Layers className="w-6 h-6 text-primary" />
          {ct("lademittelTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("lademittelDesc")}</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("palletAccounts")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("palletAccount1")}</li>
              <li>• {ct("palletAccount2")}</li>
              <li>• {ct("palletAccount3")}</li>
            </ul>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("palletBookings")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("palletBooking1")}</li>
              <li>• {ct("palletBooking2")}</li>
              <li>• {ct("palletBooking3")}</li>
            </ul>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("palletReporting")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("palletReport1")}</li>
              <li>• {ct("palletReport2")}</li>
              <li>• {ct("palletReport3")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Business Rules */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Workflow className="w-6 h-6 text-primary" />
          {ct("businessRulesTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("businessRulesDesc")}</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("triggerTypes")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("triggerType1")}</li>
              <li>• {ct("triggerType2")}</li>
              <li>• {ct("triggerType3")}</li>
              <li>• {ct("triggerType4")}</li>
            </ul>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("actionTypes")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("actionType1")}</li>
              <li>• {ct("actionType2")}</li>
              <li>• {ct("actionType3")}</li>
              <li>• {ct("actionType4")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Settings className="w-6 h-6 text-primary" />
          {ct("keyBenefitsSummary")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {[
            { title: ct("centralizedData"), desc: ct("centralizedDataDesc") },
            { title: ct("automation"), desc: ct("automationDesc") },
            { title: ct("integrations"), desc: ct("integrationsDesc") },
            { title: ct("realTimeMargin"), desc: ct("realTimeMarginDesc") },
            { title: ct("collaboration"), desc: ct("collaborationDesc") },
            { title: ct("multilingual"), desc: ct("multilingualDesc") },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-accent rounded-lg">
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="translogica" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="translogica" />
    </div>
  );
}
