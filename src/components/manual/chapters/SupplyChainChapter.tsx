import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Link, Factory, Truck, Package, BarChart3, Users, Globe, TrendingUp, CheckCircle2, AlertTriangle, ArrowRight, Zap, Target } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function SupplyChainChapter() {
  const { ct } = useChapterTranslation("supply-chain");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Link className="w-6 h-6 text-primary" />
          {ct("whatIsSupplyChain")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("whatIsSupplyChainDesc")}
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap p-4 bg-background rounded-lg">
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Factory className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs">{ct("supplier")}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Factory className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs">{ct("manufacturer")}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <div className="text-center p-3 bg-primary/20 rounded-lg border-2 border-primary">
            <Truck className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs font-medium">{ct("freight")}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Package className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs">{ct("warehouse")}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Users className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs">{ct("customer")}</p>
          </div>
        </div>
      </div>

      {/* Supply Chain Types */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          {ct("typesOfSupplyChains")}
        </h2>

        <DataTable
          headers={[ct("type"), ct("characteristics"), ct("logisticsNeeds"), ct("examples")]}
          rows={[
            [ct("leanEfficient"), "Low inventory, JIT delivery, cost focus", "Reliable, predictable transport", "Automotive, electronics assembly"],
            [ct("agileResponsive"), "Fast response, flexible, demand-driven", "Speed, flexibility, express options", "Fashion, e-commerce"],
            [ct("riskHedging"), "Buffer stock, multiple sources", "Redundant routes, secure transport", "Pharma, critical components"],
            [ct("continuous"), "Steady flow, commodity products", "Bulk transport, consistent capacity", "Food processing, chemicals"],
            [ct("makeToOrder"), "Custom products, variable demand", "Flexible scheduling, partial loads", "Industrial equipment, furniture"],
          ]}
        />
      </div>

      {/* Freight Forwarder's Role */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          {ct("freightForwarderRole")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("coreFunctions")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("coordination")}:</strong> {ct("coordinationDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("optimization")}:</strong> {ct("optimizationDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("consolidation")}:</strong> {ct("consolidationDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("documentation")}:</strong> {ct("documentationDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("riskManagement")}:</strong> {ct("riskManagementDesc")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("valueAddedServices")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("crossDocking")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("pickAndPack")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("customsBrokerage")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("inventoryManagement")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>{ct("reversLogistics")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Just-in-Time */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          {ct("jitLogistics")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("jitLogisticsDesc")}
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("jitBenefits")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("reducedInventoryCosts")}</li>
              <li>• {ct("lessWarehouseSpace")}</li>
              <li>• {ct("lowerWorkingCapital")}</li>
              <li>• {ct("fasterQualityIssues")}</li>
              <li>• {ct("moreResponsive")}</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">{ct("jitChallenges")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("zeroToleranceDelays")}</li>
              <li>• {ct("preciseScheduling")}</li>
              <li>• {ct("higherTransportCost")}</li>
              <li>• {ct("vulnerableDisruptions")}</li>
              <li>• {ct("excellentCommunication")}</li>
            </ul>
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("jitRequirements")}</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>{ct("reliability")}:</strong> {ct("reliabilityDesc")}</li>
            <li>• <strong>{ct("flexibility")}:</strong> {ct("flexibilityDesc")}</li>
            <li>• <strong>{ct("communication")}:</strong> {ct("communicationDesc")}</li>
            <li>• <strong>{ct("backupPlans")}:</strong> {ct("backupPlansDesc")}</li>
          </ul>
        </div>
      </div>

      {/* Industry-Specific */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Factory className="w-6 h-6 text-primary" />
          {ct("industrySpecific")}
        </h2>

        <DataTable
          headers={[ct("industry"), ct("keyRequirements"), ct("transportChallenges"), ct("criticalSuccessFactors")]}
          rows={[
            [ct("automotive"), "JIT, sequenced delivery, line-side", "Exact timing, damage prevention", "Reliability, EDI integration"],
            [ct("retailFmcg"), "High volume, seasonal peaks, DC network", "Peak capacity, reverse logistics", "Cost efficiency, scalability"],
            [ct("pharma"), "GDP compliance, cold chain, security", "Temperature control, documentation", "Compliance, traceability"],
            [ct("ecommerce"), "Fast, flexible, last-mile focus", "Speed, returns handling", "Speed, visibility, flexibility"],
            [ct("industrial"), "Heavy goods, project logistics", "Specialized equipment, permits", "Technical expertise, planning"],
            [ct("foodBeverage"), "Temperature control, shelf life", "Cold chain, handling care", "Freshness, compliance"],
          ]}
        />
      </div>

      {/* Supply Chain Visibility */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          {ct("supplyChainVisibility")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("supplyChainVisibilityDesc")}
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={ct("trackTrace")} icon={TrendingUp}>
            <ul className="text-sm space-y-1">
              <li>• {ct("realTimeLocation")}</li>
              <li>• {ct("statusMilestones")}</li>
              <li>• {ct("etaPredictions")}</li>
              <li>• {ct("exceptionAlerts")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("predictiveAnalytics")} icon={BarChart3}>
            <ul className="text-sm space-y-1">
              <li>• {ct("delayRiskAssessment")}</li>
              <li>• {ct("demandForecasting")}</li>
              <li>• {ct("capacityPlanning")}</li>
              <li>• {ct("costOptimization")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("integration")} icon={Link}>
            <ul className="text-sm space-y-1">
              <li>• {ct("ediConnections")}</li>
              <li>• {ct("apiDataSharing")}</li>
              <li>• {ct("customerPortal")}</li>
              <li>• {ct("erpIntegration")}</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Supply Chain Disruptions */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-warning" />
          {ct("supplyChainDisruptions")}
        </h2>

        <DataTable
          headers={[ct("disruptionType"), ct("examples"), ct("impact"), ct("mitigation")]}
          rows={[
            [ct("naturalDisasters"), "Floods, earthquakes, severe weather", "Route closures, facility damage", "Alternative routes, safety stock"],
            [ct("geopolitical"), "Wars, sanctions, border closures", "Route changes, customs delays", "Diversified sourcing, compliance monitoring"],
            [ct("pandemics"), "COVID-19, health restrictions", "Capacity constraints, labor shortages", "Flexible contracts, digital processes"],
            [ct("economic"), "Fuel price spikes, currency fluctuations", "Cost increases, margin pressure", "Fuel surcharges, hedging"],
            [ct("technical"), "System failures, cyber attacks", "Operational disruption", "Backup systems, cybersecurity"],
            [ct("labor"), "Strikes, driver shortages", "Capacity constraints, delays", "Multiple carrier options, automation"],
          ]}
        />

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-4">
          <h4 className="font-semibold mb-2">{ct("buildingResilientSupplyChains")}</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>{ct("diversification")}:</strong> {ct("diversificationDesc")}</li>
            <li>• <strong>{ct("visibility")}:</strong> {ct("visibilityDesc")}</li>
            <li>• <strong>{ct("agility")}:</strong> {ct("agilityDesc")}</li>
            <li>• <strong>{ct("collaboration")}:</strong> {ct("collaborationDesc")}</li>
            <li>• <strong>{ct("planning")}:</strong> {ct("planningDesc")}</li>
          </ul>
        </div>
      </div>

      {/* Sustainability */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          {ct("sustainableSupplyChains")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("sustainableDesc")}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("greenLogisticsStrategies")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("modalShift")}</li>
              <li>• {ct("loadOptimization")}</li>
              <li>• {ct("routeOptimization")}</li>
              <li>• {ct("euroVehicles")}</li>
              <li>• {ct("carbonOffsetting")}</li>
            </ul>
          </div>
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h4 className="font-semibold text-info mb-2">{ct("reportingCompliance")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("co2Calculation")}</li>
              <li>• {ct("scope3Reporting")}</li>
              <li>• {ct("environmentalCertifications")}</li>
              <li>• {ct("customerSustainability")}</li>
              <li>• {ct("euGreenDeal")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["supply-chain"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["supply-chain"]}
          chapterId="supply-chain"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
