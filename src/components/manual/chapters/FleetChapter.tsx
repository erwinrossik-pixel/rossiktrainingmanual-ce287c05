import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { MapPin, Truck, BarChart3, Shield, Fuel, Settings, AlertTriangle, Monitor, Database, Navigation, Calendar, Users, FileText } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";
import fleetDashboardImg from "@/assets/chapters/fleet-management-dashboard.jpg";
import fleetMaintenanceImg from "@/assets/chapters/fleet-maintenance-workshop.jpg";

export function FleetChapter() {
  const { ct } = useChapterTranslation("fleet");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Truck}
        variant="fleet"
      />


      {/* TMS Dispoplan Integration */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Monitor className="w-6 h-6 text-primary" />
          {ct("dispoplanTitle")}
        </h2>
        <p className="text-muted-foreground mb-4">{ct("dispoplanDescription")}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("dispoplanInterface")} icon={Monitor} variant="highlight">
            <ul className="space-y-2">
              <li>• {ct("dispoplanTimeline")}</li>
              <li>• {ct("dispoplanDragDrop")}</li>
              <li>• {ct("dispoplanColorCoding")}</li>
              <li>• {ct("dispoplanConflictDetection")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("dispoplanFeatures")} icon={Navigation} variant="info">
            <ul className="space-y-2">
              <li>• {ct("dispoplanTourView")}</li>
              <li>• {ct("dispoplanLoadOptimization")}</li>
              <li>• {ct("dispoplanDriverAssignment")}</li>
              <li>• {ct("dispoplanStatusTracking")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Vehicle Data Management */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Database className="w-6 h-6 text-primary" />
          {ct("fahrzeugdatenTitle")}
        </h2>
        <DataTable
          headers={[ct("vehicleType"), ct("dimensions"), ct("payload"), ct("palletSpaces")]}
          rows={[
            ["Sattelzug (Tautliner)", "13.6m x 2.45m x 2.70m", "24-25t", "33 EUR"],
            ["Anhängerzug (Jumbo)", "7.7m + 7.7m", "24t", "38 EUR"],
            ["Mega Trailer", "13.6m x 2.45m x 3.00m", "24t", "33 EUR"],
            ["Solo-LKW 12t", "7.2m x 2.45m x 2.40m", "5-6t", "15-18 EUR"],
            ["Sprinter 3.5t", "4.2m x 1.8m x 1.9m", "1-1.2t", "6-8 EUR"],
          ]}
        />
        
        {/* Fleet Dashboard Image - contextual after vehicle data */}
        <ChapterImage
          src={fleetDashboardImg}
          alt="Fleet management control center dashboard with real-time tracking"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* TMS Telematics Integration */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          {ct("tmsTelematics")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={ct("positionData")} icon={MapPin} variant="highlight">
            <ul className="space-y-2">
              <li>• {ct("realtimeGps")}</li>
              <li>• {ct("routeHistory")}</li>
              <li>• {ct("speedMonitoring")}</li>
              <li>• {ct("borderCrossings")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("vehicleTelemetry")} icon={Settings} variant="info">
            <ul className="space-y-2">
              <li>• {ct("fuelLevel")}</li>
              <li>• {ct("reeferTemperature")}</li>
              <li>• {ct("engineData")}</li>
              <li>• {ct("doorStatus")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("driverCommunication")} icon={Users} variant="success">
            <ul className="space-y-2">
              <li>• {ct("orderTransmission")}</li>
              <li>• {ct("statusUpdates")}</li>
              <li>• {ct("documentScanning")}</li>
              <li>• {ct("twoWayMessaging")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Tour Planning */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          {ct("tourPlanningTitle")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct("tourCreation")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>1.</strong> {ct("tourStep1")}</li>
                <li><strong>2.</strong> {ct("tourStep2")}</li>
                <li><strong>3.</strong> {ct("tourStep3")}</li>
                <li><strong>4.</strong> {ct("tourStep4")}</li>
                <li><strong>5.</strong> {ct("tourStep5")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("tourOptimization")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("multiStopRouting")}</li>
                <li>• {ct("timeWindowCompliance")}</li>
                <li>• {ct("drivingTimeCalc")}</li>
                <li>• {ct("tollOptimization")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GPS Tracking Benefits */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          {ct("gpsTrackingBenefits")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={ct("realTimeVisibility")} icon={MapPin} variant="highlight">
            <ul className="space-y-2">
              <li>• {ct("liveVehicleLocation")}</li>
              <li>• {ct("accurateEta")}</li>
              <li>• {ct("geofenceAlerts")}</li>
              <li>• {ct("routeDeviationWarnings")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("operationalEfficiency")} icon={BarChart3} variant="info">
            <ul className="space-y-2">
              <li>• {ct("routeOptimization")}</li>
              <li>• {ct("fuelConsumptionMonitoring")}</li>
              <li>• {ct("idleTimeReduction")}</li>
              <li>• {ct("driverBehaviorAnalysis")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("securityCompliance")} icon={Shield} variant="success">
            <ul className="space-y-2">
              <li>• {ct("theftPrevention")}</li>
              <li>• {ct("proofOfDelivery")}</li>
              <li>• {ct("drivingHoursIntegration")}</li>
              <li>• {ct("insurancePremiumReduction")}</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Document Expiry Alerts */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-warning" />
          {ct("documentExpiryTitle")}
        </h2>
        <InfoCard title={ct("documentExpiryManagement")} icon={AlertTriangle} variant="warning">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{ct("trackedDocuments")}</h4>
              <ul className="space-y-1 text-sm">
                <li>• TÜV/HU - {ct("tuvHu")}</li>
                <li>• {ct("adrCertificate")}</li>
                <li>• {ct("insurancePolicy")}</li>
                <li>• {ct("tachographCalibration")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{ct("alertConfiguration")}</h4>
              <ul className="space-y-1 text-sm">
                <li>• {ct("alert90Days")}</li>
                <li>• {ct("alert30Days")}</li>
                <li>• {ct("alert7Days")}</li>
                <li>• {ct("alertExpired")}</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Key Metrics */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-primary" />
          {ct("keyPerformanceIndicators")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct("vehicleKpis")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>{ct("utilizationRate")}:</strong> Target 85-95%</li>
                <li><strong>{ct("emptyKmPercentage")}:</strong> Target &lt;20%</li>
                <li><strong>{ct("fuelConsumption")}:</strong> l/100km benchmark</li>
                <li><strong>{ct("maintenanceCosts")}:</strong> €/km tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("driverKpis")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>{ct("drivingScore")}:</strong> Acceleration, braking, speed</li>
                <li><strong>{ct("idleTime")}:</strong> Target &lt;10%</li>
                <li><strong>{ct("onTimeDelivery")}:</strong> Target &gt;95%</li>
                <li><strong>{ct("compliance")}:</strong> Driving hours adherence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Management */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Fuel className="w-6 h-6 text-primary" />
          {ct("fuelManagement")}
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct("monitoring")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("fuelCardIntegration")}</li>
                <li>• {ct("tankLevelSensors")}</li>
                <li>• {ct("consumptionAnalytics")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("efficiencyTips")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("driverTraining")}</li>
                <li>• {ct("speedLimiters")}</li>
                <li>• {ct("tirePressureChecks")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("benchmarks")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("longHaul")}: 28-32 l/100km</li>
                <li>• {ct("regional")}: 30-35 l/100km</li>
                <li>• {ct("distribution")}: 35-45 l/100km</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Maintenance Workshop Image - contextual after fuel management */}
        <ChapterImage
          src={fleetMaintenanceImg}
          alt="Fleet maintenance workshop with trucks being serviced"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="fleet" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="fleet" />
    </div>
  );
}