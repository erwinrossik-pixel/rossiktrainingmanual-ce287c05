import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Cpu, Smartphone, Cloud, Globe, BarChart3, Zap, Shield, TrendingUp, CheckCircle2, AlertTriangle, Bot, Wifi, Database, MapPin } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

export function TechnologyChapter() {
  const { ct } = useChapterTranslation("technology");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Cpu}
        variant="technology"
      />

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Cpu className="w-6 h-6 text-primary" />
          {ct("digitalTransformationTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("digitalTransformationDesc")}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Cloud className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("cloudTms")}</p>
            <p className="text-xs text-muted-foreground">{ct("cloudTmsDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("realTimeTracking")}</p>
            <p className="text-xs text-muted-foreground">{ct("realTimeTrackingDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Bot className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("aiAutomation")}</p>
            <p className="text-xs text-muted-foreground">{ct("aiAutomationDesc")}</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">{ct("digitalPlatforms")}</p>
            <p className="text-xs text-muted-foreground">{ct("digitalPlatformsDesc")}</p>
          </div>
        </div>
      </div>

      {/* TMS Systems */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Database className="w-6 h-6 text-primary" />
          {ct("tmsSystemsTitle")}
        </h2>

        <p className="text-muted-foreground mb-4">
          {ct("tmsSystemsDesc")}
        </p>

        <DataTable
          headers={[ct("module"), ct("functions"), ct("benefits")]}
          rows={[
            [ct("orderManagement"), "Order entry, validation, confirmation", "Reduced errors, faster processing"],
            [ct("dispatchPlanning"), "Load assignment, route optimization", "Better resource utilization"],
            [ct("carrierManagement"), "Carrier database, qualification, performance", "Quality control, compliance"],
            [ct("trackingTracing"), "Real-time visibility, ETA calculation", "Proactive issue management"],
            [ct("documentation"), "CMR generation, POD management", "Paperless operations, audit trail"],
            [ct("financial"), "Invoicing, cost calculation, margin analysis", "Faster cash flow, profitability insight"],
            [ct("reporting"), "KPIs, analytics, dashboards", "Data-driven decisions"],
            [ct("integration"), "EDI, API connections, carrier systems", "Automated data exchange"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("commonTmsProviders")}</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Translogica</strong> - Popular in DACH region</li>
              <li>• <strong>CargoWise</strong> - Global, comprehensive</li>
              <li>• <strong>SAP TM</strong> - Enterprise integration</li>
              <li>• <strong>Oracle TMS</strong> - Large enterprises</li>
              <li>• <strong>Alpega TMS</strong> - European focus</li>
              <li>• <strong>project44</strong> - Visibility platform</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("tmsSelectionCriteria")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("easeOfUse")}</li>
              <li>• {ct("integrationCapabilities")}</li>
              <li>• {ct("carrierConnectivity")}</li>
              <li>• {ct("reportingAnalytics")}</li>
              <li>• {ct("scalability")}</li>
              <li>• {ct("totalCostOwnership")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tracking Technologies */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Wifi className="w-6 h-6 text-primary" />
          {ct("trackingTechnologies")}
        </h2>

        <DataTable
          headers={[ct("technology"), ct("howItWorks"), ct("useCases"), ct("accuracy")]}
          rows={[
            [ct("gpsTracking"), "Satellite-based vehicle location", "Real-time truck position, ETA", "3-15 meters"],
            [ct("telematics"), "GPS + vehicle data (speed, fuel, etc.)", "Fleet management, driver behavior", "High"],
            [ct("cellularIot"), "Mobile network sensor tracking", "Trailer/container tracking", "Cell tower based"],
            [ct("rfid"), "Radio frequency identification tags", "Warehouse, yard management", "Read range dependent"],
            [ct("bluetoothBeacons"), "Short-range wireless tracking", "Indoor tracking, last mile", "1-3 meters"],
            [ct("loraWan"), "Long-range, low-power sensors", "Temperature monitoring, rural areas", "GPS-enhanced"],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <InfoCard title={ct("vehicleTracking")} icon={MapPin}>
            <ul className="text-sm space-y-1">
              <li>• {ct("liveGpsPosition")}</li>
              <li>• {ct("speedRouteMonitoring")}</li>
              <li>• {ct("geofencingAlerts")}</li>
              <li>• {ct("etaCalculation")}</li>
              <li>• {ct("historicalPlayback")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("cargoMonitoring")} icon={Shield}>
            <ul className="text-sm space-y-1">
              <li>• {ct("temperatureLogging")}</li>
              <li>• {ct("humiditySensors")}</li>
              <li>• {ct("shockTiltDetection")}</li>
              <li>• {ct("doorOpenAlerts")}</li>
              <li>• {ct("lightExposure")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("visibilityPlatforms")} icon={Globe}>
            <ul className="text-sm space-y-1">
              <li>• project44</li>
              <li>• FourKites</li>
              <li>• Shippeo</li>
              <li>• Sixfold</li>
              <li>• Transporeon Visibility</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Automation & AI */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Bot className="w-6 h-6 text-primary" />
          {ct("automationAiTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("processAutomation")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("orderEntry")}:</strong> {ct("orderEntryDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("documentProcessing")}:</strong> {ct("documentProcessingDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("statusUpdates")}:</strong> {ct("statusUpdatesDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("invoiceMatching")}:</strong> {ct("invoiceMatchingDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("reportingAuto")}:</strong> {ct("reportingAutoDesc")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("aiApplications")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("ratePrediction")}:</strong> {ct("ratePredictionDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("etaPrediction")}:</strong> {ct("etaPredictionDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("demandForecasting")}:</strong> {ct("demandForecastingDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("routeOptimization")}:</strong> {ct("routeOptimizationDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("anomalyDetection")}:</strong> {ct("anomalyDetectionDesc")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("aiImpactTitle")}</h4>
          <p className="text-sm text-muted-foreground">
            {ct("aiImpactDesc")}
          </p>
        </div>
      </div>

      {/* Digital Platforms */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          {ct("digitalFreightPlatforms")}
        </h2>

        <DataTable
          headers={[ct("platformType"), ct("examples"), ct("function"), ct("forWhom")]}
          rows={[
            [ct("freightExchanges"), "TIMOCOM, Trans.eu, Teleroute", "Spot market matching", "Forwarders, carriers"],
            [ct("digitalForwarders"), "Flexport, Forto, Sennder", "End-to-end digital booking", "Shippers"],
            [ct("carrierMarketplaces"), "Uber Freight, Convoy", "Direct shipper-carrier matching", "Shippers, carriers"],
            [ct("visibilityNetworks"), "project44, FourKites", "Real-time tracking aggregation", "Shippers, forwarders"],
            [ct("tenderPlatforms"), "Transporeon, Freightos", "RFQ management, rate bidding", "Shippers, forwarders"],
            [ct("customsCompliance"), "Descartes, MIC", "Digital customs processing", "Forwarders, customs"],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            {ct("digitalDisruption")}
          </h4>
          <p className="text-sm">
            {ct("digitalDisruptionDesc")}
          </p>
        </div>
      </div>

      {/* Data & Analytics */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          {ct("dataAnalytics")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">{ct("keyMetricsToTrack")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("onTimeDeliveryPerformance")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("costPerKmTrends")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("marginAnalysis")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("carrierScorecard")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>{ct("customerSatisfactionScores")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{ct("analyticsTools")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("tmsReports")}:</strong> {ct("tmsReportsDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("excelSheets")}:</strong> {ct("excelSheetsDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("powerBiTableau")}:</strong> {ct("powerBiTableauDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("pythonR")}:</strong> {ct("pythonRDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("aiTools")}:</strong> {ct("aiToolsDesc")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cybersecurity */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          {ct("cybersecurity")}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">{ct("commonThreats")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("phishingEmails")}</li>
              <li>• {ct("ransomwareAttacks")}</li>
              <li>• {ct("paymentFraud")}</li>
              <li>• {ct("dataBreaches")}</li>
              <li>• {ct("gpsSpoofing")}</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">{ct("protectionMeasures")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("strongPasswords")}</li>
              <li>• {ct("regularSecurityTraining")}</li>
              <li>• {ct("verifyPaymentDetails")}</li>
              <li>• {ct("regularBackups")}</li>
              <li>• {ct("encryptedCommunications")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Future Trends */}
      <div className="info-card bg-muted/30">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          {ct("futureTrends")}
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("nearTerm")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("widerAiAdoption")}</li>
              <li>• {ct("enhancedVisibility")}</li>
              <li>• {ct("digitalDocumentStandards")}</li>
              <li>• {ct("automatedBooking")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("mediumTerm")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("blockchainDocumentation")}</li>
              <li>• {ct("autonomousYard")}</li>
              <li>• {ct("iotEverywhere")}</li>
              <li>• {ct("predictiveLogistics")}</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("longTerm")}</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• {ct("autonomousTrucks")}</li>
              <li>• {ct("droneDeliveries")}</li>
              <li>• {ct("quantumOptimization")}</li>
              <li>• {ct("fullyDigitalSupplyChain")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["technology"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["technology"]}
          chapterId="technology"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
