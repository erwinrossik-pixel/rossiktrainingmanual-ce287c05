import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import {
  Monitor, Users, Truck, Package, CalendarDays, FileText, 
  BarChart3, Settings, Link, CheckCircle2
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function TranslogicaChapter() {
  const { ct } = useChapterTranslation("translogica");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
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

      {/* Step by Step Guides */}
      <div className="space-y-6">
        {/* Register Client */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">🧾</span>
            {ct("registerClientTitle")}
          </h2>
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
        </div>

        {/* Register Vehicle */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">🚛</span>
            {ct("registerVehicleTitle")}
          </h2>
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
        </div>

        {/* Create Order */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">📦</span>
            {ct("registerOrderTitle")}
          </h2>
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

      {/* Quiz */}
      <Quiz title={`🎯 ${ct("knowledgeCheck")}`} questions={quizzes.translogica} chapterId="translogica" />
    </div>
  );
}
