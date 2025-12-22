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
          GPS Tracking Benefits
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title="Real-time Visibility" icon={MapPin} variant="highlight">
            <ul className="space-y-2">
              <li>• Live vehicle location</li>
              <li>• Accurate ETA calculations</li>
              <li>• Geofence alerts</li>
              <li>• Route deviation warnings</li>
            </ul>
          </InfoCard>
          <InfoCard title="Operational Efficiency" icon={BarChart3} variant="info">
            <ul className="space-y-2">
              <li>• Route optimization</li>
              <li>• Fuel consumption monitoring</li>
              <li>• Idle time reduction</li>
              <li>• Driver behavior analysis</li>
            </ul>
          </InfoCard>
          <InfoCard title="Security & Compliance" icon={Shield} variant="success">
            <ul className="space-y-2">
              <li>• Theft prevention/recovery</li>
              <li>• Proof of delivery location</li>
              <li>• Driving hours integration</li>
              <li>• Insurance premium reduction</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Telematics Systems */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" />
          Popular Telematics Systems
        </h2>
        <DataTable
          headers={["System", "Key Features", "Best For"]}
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
          Key Performance Indicators
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Vehicle KPIs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Utilization rate:</strong> Target 85-95%</li>
                <li><strong>Empty km percentage:</strong> Target &lt;20%</li>
                <li><strong>Fuel consumption:</strong> l/100km benchmark</li>
                <li><strong>Maintenance costs:</strong> €/km tracking</li>
                <li><strong>Downtime:</strong> Days out of service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Driver KPIs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Driving score:</strong> Acceleration, braking, speed</li>
                <li><strong>Idle time:</strong> Target &lt;10% of running time</li>
                <li><strong>On-time delivery:</strong> Target &gt;95%</li>
                <li><strong>Fuel efficiency:</strong> vs. fleet average</li>
                <li><strong>Compliance:</strong> Driving hours adherence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Route Optimization */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          Route Optimization
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Optimization Factors" icon={Settings} variant="info">
            <ul className="space-y-2">
              <li>• Distance and time constraints</li>
              <li>• Delivery time windows</li>
              <li>• Vehicle capacity and type</li>
              <li>• Driver hours remaining</li>
              <li>• Toll costs vs. time</li>
              <li>• Traffic patterns</li>
            </ul>
          </InfoCard>
          <InfoCard title="Tools & Software" icon={MapPin} variant="highlight">
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
          Fuel Management
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Monitoring</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fuel card integration</li>
                <li>• Tank level sensors</li>
                <li>• Consumption analytics</li>
                <li>• Theft detection alerts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Efficiency Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Driver training (eco-driving)</li>
                <li>• Speed limiters (85-90 km/h)</li>
                <li>• Tire pressure checks</li>
                <li>• Aerodynamic equipment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Benchmarks</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Long haul: 28-32 l/100km</li>
                <li>• Regional: 30-35 l/100km</li>
                <li>• Distribution: 35-45 l/100km</li>
                <li>• Target 5% yearly improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geofencing */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          Geofencing Applications
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Use Cases</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Automatic arrival/departure notifications</li>
              <li>• Unauthorized zone alerts</li>
              <li>• Customer ETA updates</li>
              <li>• Border crossing timestamps</li>
              <li>• Loading/unloading time tracking</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Setup Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Set appropriate radius (100-500m typical)</li>
              <li>• Create zones for regular customers</li>
              <li>• Include secure parking locations</li>
              <li>• Configure relevant alerts per zone</li>
              <li>• Review and update zones regularly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maintenance Planning */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" />
          Predictive Maintenance
        </h2>
        <InfoCard title="Fleet Maintenance Management" icon={Settings} variant="warning">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Monitored Parameters</h4>
              <ul className="space-y-1 text-sm">
                <li>• Engine diagnostics (OBD-II)</li>
                <li>• Brake wear indicators</li>
                <li>• Tire pressure and temperature</li>
                <li>• Oil condition sensors</li>
                <li>• Battery health</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Scheduling Approach</h4>
              <ul className="space-y-1 text-sm">
                <li>• Km-based intervals + condition</li>
                <li>• Integrate with TMS planning</li>
                <li>• Schedule during low-demand periods</li>
                <li>• Keep digital maintenance records</li>
                <li>• Track warranty expirations</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Data Security */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Data & Privacy Considerations
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Legal Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• GDPR compliance for driver data</li>
                <li>• Inform drivers about tracking</li>
                <li>• Works council consultation (if applicable)</li>
                <li>• Data retention policies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Best Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Clear company tracking policy</li>
                <li>• Limit access to location data</li>
                <li>• Use data for improvement, not punishment</li>
                <li>• Regular data security audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.fleet && (
        <Quiz title="Fleet Management & GPS Quiz" questions={quizzes.fleet} chapterId="fleet" />
      )}
    </div>
  );
}
