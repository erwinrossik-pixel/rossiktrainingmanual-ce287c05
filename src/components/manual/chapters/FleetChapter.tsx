import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { MapPin, Truck, BarChart3, Clock, Shield, Fuel, Settings, AlertTriangle } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function FleetChapter() {
  const { ct } = useChapterTranslation("fleet");
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <MapPin className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            {ct("title")}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            {ct("subtitle")}
          </p>
        </div>
      </div>

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

      {/* Telematics Systems */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" />
          {ct("telematicsSystems")}
        </h2>
        <DataTable
          headers={[ct("system"), ct("keyFeatures"), ct("bestFor")]}
          rows={[
            ["Webfleet (TomTom)", "Route planning, driver feedback, fuel management", "Large fleets, comprehensive solution"],
            ["Samsara", "AI dashcams, real-time alerts, maintenance", "Safety-focused fleets"],
            ["Fleetboard (Mercedes)", "OEM integration, predictive maintenance", "Mercedes truck fleets"],
            ["MAN TeleMatics", "OEM integration, driver scoring", "MAN truck fleets"],
            ["Verizon Connect", "Workflow management, compliance", "Multi-brand fleets"],
            ["Transics (WABCO)", "Tachograph integration, messaging", "European operations"],
          ]}
        />
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
                <li><strong>{ct("downtime")}:</strong> Days out of service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("driverKpis")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>{ct("drivingScore")}:</strong> Acceleration, braking, speed</li>
                <li><strong>{ct("idleTime")}:</strong> Target &lt;10% of running time</li>
                <li><strong>{ct("onTimeDelivery")}:</strong> Target &gt;95%</li>
                <li><strong>{ct("fuelEfficiency")}:</strong> vs. fleet average</li>
                <li><strong>{ct("compliance")}:</strong> Driving hours adherence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Route Optimization */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          {ct("routeOptimizationTitle")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title={ct("optimizationFactors")} icon={Settings} variant="info">
            <ul className="space-y-2">
              <li>• {ct("distanceTimeConstraints")}</li>
              <li>• {ct("deliveryTimeWindows")}</li>
              <li>• {ct("vehicleCapacityType")}</li>
              <li>• {ct("driverHoursRemaining")}</li>
              <li>• {ct("tollCostsVsTime")}</li>
              <li>• {ct("trafficPatterns")}</li>
            </ul>
          </InfoCard>
          <InfoCard title={ct("toolsSoftware")} icon={MapPin} variant="highlight">
            <ul className="space-y-2">
              <li>• Google Maps/Waze (basic routing)</li>
              <li>• TomTom/HERE truck routing</li>
              <li>• PTV Route Optimiser</li>
              <li>• Trimble/ALK CoPilot</li>
              <li>• TMS-integrated planners</li>
            </ul>
          </InfoCard>
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
                <li>• {ct("theftDetectionAlerts")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("efficiencyTips")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("driverTraining")}</li>
                <li>• {ct("speedLimiters")}</li>
                <li>• {ct("tirePressureChecks")}</li>
                <li>• {ct("aerodynamicEquipment")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("benchmarks")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("longHaul")}: 28-32 l/100km</li>
                <li>• {ct("regional")}: 30-35 l/100km</li>
                <li>• {ct("distribution")}: 35-45 l/100km</li>
                <li>• {ct("yearlyImprovement")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geofencing */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          {ct("geofencingApplications")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct("useCases")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct("automaticNotifications")}</li>
              <li>• {ct("unauthorizedZoneAlerts")}</li>
              <li>• {ct("customerEtaUpdates")}</li>
              <li>• {ct("borderCrossingTimestamps")}</li>
              <li>• {ct("loadingUnloadingTracking")}</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">{ct("setupTips")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {ct("appropriateRadius")}</li>
              <li>• {ct("createZones")}</li>
              <li>• {ct("secureParking")}</li>
              <li>• {ct("configureAlerts")}</li>
              <li>• {ct("reviewUpdate")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maintenance Planning */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" />
          {ct("predictiveMaintenance")}
        </h2>
        <InfoCard title={ct("fleetMaintenanceManagement")} icon={Settings} variant="warning">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{ct("monitoredParameters")}</h4>
              <ul className="space-y-1 text-sm">
                <li>• {ct("engineDiagnostics")}</li>
                <li>• {ct("brakeWearIndicators")}</li>
                <li>• {ct("tirePressureTemperature")}</li>
                <li>• {ct("oilConditionSensors")}</li>
                <li>• {ct("batteryHealth")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{ct("schedulingApproach")}</h4>
              <ul className="space-y-1 text-sm">
                <li>• {ct("kmBasedIntervals")}</li>
                <li>• {ct("integrateTmsPlanning")}</li>
                <li>• {ct("scheduleLowDemand")}</li>
                <li>• {ct("digitalMaintenanceRecords")}</li>
                <li>• {ct("trackWarrantyExpirations")}</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Data Security */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          {ct("dataPrivacyConsiderations")}
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{ct("legalRequirements")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("gdprCompliance")}</li>
                <li>• {ct("informDrivers")}</li>
                <li>• {ct("worksCouncilConsultation")}</li>
                <li>• {ct("dataRetentionPolicies")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{ct("bestPractices")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {ct("clearTrackingPolicy")}</li>
                <li>• {ct("limitAccessLocationData")}</li>
                <li>• {ct("useDataForImprovement")}</li>
                <li>• {ct("regularSecurityAudits")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.fleet && (
        <Quiz title={ct("quizTitle")} questions={quizzes.fleet} chapterId="fleet" />
      )}
    </div>
  );
}
