import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { quizzes } from "@/data/quizData";
import { Cpu, Smartphone, Cloud, Globe, BarChart3, Zap, Shield, TrendingUp, CheckCircle2, AlertTriangle, Bot, Wifi, Database, MapPin, Link, Users, Package, FileText, Workflow } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import technologyControlRoomImg from "@/assets/chapters/technology-control-room.jpg";

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

      {/* Technology Control Room Image - Full width */}
      <ChapterImage
        src={technologyControlRoomImg}
        alt="Modern Logistics Control Room"
        caption={ct('controlRoomCaption') || "Control room modern pentru monitorizare transport și logistică"}
        variant="full"
        className="mb-6"
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

      {/* TMS Deep Dive - Module Details */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Database className="w-6 h-6 text-primary" />
          {ct("tmsDeepDiveTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("tmsDeepDiveDesc")}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-primary" />
              {ct("masterDataModule")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("addressMgmt")}:</strong> {ct("addressMgmtDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("vehicleMgmt")}:</strong> {ct("vehicleMgmtDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("personnelMgmt")}:</strong> {ct("personnelMgmtDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("tariffMgmt")}:</strong> {ct("tariffMgmtDesc")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Package className="w-4 h-4 text-primary" />
              {ct("orderModule")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("orderCapture")}:</strong> {ct("orderCaptureDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("shipmentMgmt")}:</strong> {ct("shipmentMgmtDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("adrHandling")}:</strong> {ct("adrHandlingDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>{ct("splitRouting")}:</strong> {ct("splitRoutingDesc")}</span>
              </li>
            </ul>
          </div>
        </div>

        <DataTable
          headers={[ct("tmsModule"), ct("keyFeatures"), ct("businessValue")]}
          rows={[
            [ct("dispoplanModule"), ct("dispoplanFeatures"), ct("dispoplanValue")],
            [ct("routeModule"), ct("routeFeatures"), ct("routeValue")],
            [ct("invoiceModule"), ct("invoiceFeatures"), ct("invoiceValue")],
            [ct("telematicsModule"), ct("telematicsFeatures"), ct("telematicsValue")],
            [ct("palletModule"), ct("palletFeatures"), ct("palletValue")],
            [ct("reportingModule"), ct("reportingFeatures"), ct("reportingValue")],
          ]}
        />
      </div>

      {/* EDI & API Integrations */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Link className="w-6 h-6 text-primary" />
          {ct("ediApiTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("ediApiDesc")}</p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title={ct("freightExchangeInt")} icon={Globe}>
            <ul className="text-sm space-y-1">
              <li>• <strong>TIMOCOM:</strong> {ct("timocomDesc")}</li>
              <li>• <strong>Trans.eu:</strong> {ct("transeuDesc")}</li>
              <li>• <strong>Teleroute:</strong> {ct("telerouteDesc")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("customerPortals")} icon={Users}>
            <ul className="text-sm space-y-1">
              <li>• <strong>Transporeon:</strong> {ct("transporeonDesc")}</li>
              <li>• <strong>CargoLink:</strong> {ct("cargolinkDesc")}</li>
              <li>• {ct("customEdiDesc")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("internalSystems")} icon={Database}>
            <ul className="text-sm space-y-1">
              <li>• <strong>FIBU Export:</strong> {ct("fibuDesc")}</li>
              <li>• <strong>dotiga:</strong> {ct("dotigaDesc")}</li>
              <li>• <strong>PTV xServer:</strong> {ct("ptvDesc")}</li>
            </ul>
          </InfoCard>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">{ct("ediFormatsTitle")}</h4>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="p-2 bg-background rounded">
              <strong>EDIFACT</strong>
              <p className="text-xs text-muted-foreground">{ct("edifactDesc")}</p>
            </div>
            <div className="p-2 bg-background rounded">
              <strong>XML/JSON</strong>
              <p className="text-xs text-muted-foreground">{ct("xmlJsonDesc")}</p>
            </div>
            <div className="p-2 bg-background rounded">
              <strong>CSV/Excel</strong>
              <p className="text-xs text-muted-foreground">{ct("csvExcelDesc")}</p>
            </div>
            <div className="p-2 bg-background rounded">
              <strong>REST API</strong>
              <p className="text-xs text-muted-foreground">{ct("restApiDesc")}</p>
            </div>
          </div>
        </div>

        <DataTable
          headers={[ct("integrationName"), ct("dataFlow"), ct("frequency"), ct("purpose")]}
          rows={[
            [ct("transporeonInt"), ct("transporeonFlow"), ct("realTime"), ct("transporeonPurpose")],
            [ct("timocomInt"), ct("timocomFlow"), ct("onDemand"), ct("timocomPurpose")],
            [ct("telematicsInt"), ct("telematicsFlow"), ct("continuous"), ct("telematicsPurpose")],
            [ct("fibuInt"), ct("fibuFlow"), ct("daily"), ct("fibuPurpose")],
            [ct("dotigaInt"), ct("dotigaFlow"), ct("onEvent"), ct("dotigaPurpose")],
          ]}
        />
      </div>

      {/* Workflow Automation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Workflow className="w-6 h-6 text-primary" />
          {ct("workflowTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("workflowDesc")}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-3">{ct("triggerEvents")}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-warning mt-0.5" />
                <span><strong>{ct("onCreate")}:</strong> {ct("onCreateDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-warning mt-0.5" />
                <span><strong>{ct("onSave")}:</strong> {ct("onSaveDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-warning mt-0.5" />
                <span><strong>{ct("onFieldChange")}:</strong> {ct("onFieldChangeDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-warning mt-0.5" />
                <span><strong>{ct("onStatusChange")}:</strong> {ct("onStatusChangeDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-warning mt-0.5" />
                <span><strong>{ct("scheduled")}:</strong> {ct("scheduledDesc")}</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-3">{ct("automatedActions")}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("setValues")}:</strong> {ct("setValuesDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("sendNotifications")}:</strong> {ct("sendNotificationsDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("createRecords")}:</strong> {ct("createRecordsDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("validateData")}:</strong> {ct("validateDataDesc")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>{ct("calculatePrices")}:</strong> {ct("calculatePricesDesc")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">{ct("workflowExamples")}</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">{ct("example1Title")}</p>
              <p className="text-muted-foreground">{ct("example1Desc")}</p>
            </div>
            <div>
              <p className="font-medium">{ct("example2Title")}</p>
              <p className="text-muted-foreground">{ct("example2Desc")}</p>
            </div>
            <div>
              <p className="font-medium">{ct("example3Title")}</p>
              <p className="text-muted-foreground">{ct("example3Desc")}</p>
            </div>
            <div>
              <p className="font-medium">{ct("example4Title")}</p>
              <p className="text-muted-foreground">{ct("example4Desc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Document Management */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          {ct("docMgmtTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("docMgmtDesc")}</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("transportDocs")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("orderConfirmation")}</li>
              <li>• {ct("loadingOrder")}</li>
              <li>• {ct("cmrWaybill")}</li>
              <li>• {ct("deliveryNote")}</li>
              <li>• {ct("exportCert")}</li>
            </ul>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("financialDocs")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("invoices")}</li>
              <li>• {ct("creditNotes")}</li>
              <li>• {ct("costEstimates")}</li>
              <li>• {ct("marginReports")}</li>
              <li>• {ct("palletStatements")}</li>
            </ul>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">{ct("archiving")}</h4>
            <ul className="text-sm space-y-1">
              <li>• {ct("dotigaArchive")}</li>
              <li>• {ct("scanProtocol")}</li>
              <li>• {ct("emailAttach")}</li>
              <li>• {ct("auditTrail")}</li>
              <li>• {ct("legalRetention")}</li>
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

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="technology" />

      {/* Quiz */}
      {quizzes["technology"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["technology"]}
          chapterId="technology"
          questionsPerRound={10}
        />
      )}
    </div>
  );
}
