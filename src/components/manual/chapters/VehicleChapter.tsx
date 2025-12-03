import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { FlowDiagram, ProcessMap } from "../FlowDiagram";
import { quizzes } from "@/data/quizData";
import { Truck, Ruler, Weight, Package, Shield, CheckCircle2, AlertTriangle, Settings, Globe, Gauge } from "lucide-react";

export function VehicleChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Vehicle Reference – 13.6m Curtainsider</h1>
        <p className="text-lg text-muted-foreground">
          Technical specifications, weight limits, vehicle types, and inspection checkpoints.
        </p>
      </div>

      {/* Visual Specs */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sidebar to-sidebar/80 p-8 text-sidebar-foreground">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <Ruler className="w-10 h-10 mx-auto mb-3 text-sidebar-primary" />
            <p className="text-3xl font-bold">13.6m</p>
            <p className="text-sm text-sidebar-foreground/70">Length</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl text-sidebar-primary">W</span>
            </div>
            <p className="text-3xl font-bold">2.48m</p>
            <p className="text-sm text-sidebar-foreground/70">Width</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl text-sidebar-primary">H</span>
            </div>
            <p className="text-3xl font-bold">2.9–3.2m</p>
            <p className="text-sm text-sidebar-foreground/70">Height</p>
          </div>
          <div className="text-center">
            <Package className="w-10 h-10 mx-auto mb-3 text-sidebar-primary" />
            <p className="text-3xl font-bold">~33</p>
            <p className="text-sm text-sidebar-foreground/70">EUR Pallets</p>
          </div>
        </div>
        <Truck className="absolute -bottom-4 -right-4 w-40 h-40 text-sidebar-foreground/5" />
      </div>

      {/* Key Specs */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title="Payload Capacity" icon={Weight}>
          <p className="text-2xl font-bold text-primary">24–29 tonnes</p>
          <p className="text-sm">Depending on truck/trailer specification</p>
        </InfoCard>
        
        <InfoCard title="Volume Capacity" icon={Package}>
          <p className="text-2xl font-bold text-primary">~99–105 m³</p>
          <p className="text-sm">Standard curtainsider/tautliner</p>
        </InfoCard>
      </div>

      {/* Vehicle Types */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          European Vehicle Types
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">Type</th>
                <th className="p-3 text-left border border-border">Dimensions</th>
                <th className="p-3 text-left border border-border">Capacity</th>
                <th className="p-3 text-left border border-border">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-semibold">Standard Curtainsider</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 2.7m</td>
                <td className="p-3 border border-border text-sm">33 pallets, 24-25t</td>
                <td className="p-3 border border-border text-sm">General cargo, side loading</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">Mega Trailer</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 3.0m</td>
                <td className="p-3 border border-border text-sm">33 pallets, 24t</td>
                <td className="p-3 border border-border text-sm">Voluminous cargo, automotive</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">Box Trailer (Koffer)</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 2.7m</td>
                <td className="p-3 border border-border text-sm">33 pallets, 24-25t</td>
                <td className="p-3 border border-border text-sm">Secure cargo, rear loading only</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">Reefer</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 2.6m</td>
                <td className="p-3 border border-border text-sm">33 pallets, 22-24t</td>
                <td className="p-3 border border-border text-sm">Temperature-controlled</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">Flatbed / Platform</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m</td>
                <td className="p-3 border border-border text-sm">Varies, 24-27t</td>
                <td className="p-3 border border-border text-sm">Machinery, oversized cargo</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">Double Deck</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 3.0m</td>
                <td className="p-3 border border-border text-sm">66 pallets, 24t</td>
                <td className="p-3 border border-border text-sm">Light, stackable goods</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">Walking Floor</td>
                <td className="p-3 border border-border text-sm">13.6m × 2.48m × 2.7m</td>
                <td className="p-3 border border-border text-sm">90-100 m³</td>
                <td className="p-3 border border-border text-sm">Bulk goods, waste, recycling</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">Tanker</td>
                <td className="p-3 border border-border text-sm">Varies</td>
                <td className="p-3 border border-border text-sm">30,000-40,000 L</td>
                <td className="p-3 border border-border text-sm">Liquids, chemicals, food grade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Weight Limits by Country */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          GVW Limits by Country
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">Country</th>
                <th className="p-3 text-center border border-border">Standard (5 axles)</th>
                <th className="p-3 text-center border border-border">6 axles</th>
                <th className="p-3 text-left border border-border">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-semibold">🇩🇪 Germany</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-sm">44t for combined transport</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇫🇷 France</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">44t with 3-axle trailer</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇳🇱 Netherlands</td>
                <td className="p-3 border border-border text-center">50t</td>
                <td className="p-3 border border-border text-center">50t</td>
                <td className="p-3 border border-border text-sm">Domestic only, specific routes</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇧🇪 Belgium</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">Standard for international</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇵🇱 Poland</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-sm">Strict enforcement</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇮🇹 Italy</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">5 axles minimum for 44t</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇪🇸 Spain</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">44t for intermodal</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇦🇹 Austria</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">Strict Brenner controls</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇬🇧 UK</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">44t</td>
                <td className="p-3 border border-border text-sm">44t for 6 axles articulated</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇨🇭 Switzerland</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-center">40t</td>
                <td className="p-3 border border-border text-sm">LSVA tax applies</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-semibold">🇸🇪 Sweden</td>
                <td className="p-3 border border-border text-center">60t</td>
                <td className="p-3 border border-border text-center">64t</td>
                <td className="p-3 border border-border text-sm">Longer combinations allowed</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-semibold">🇫🇮 Finland</td>
                <td className="p-3 border border-border text-center">60t</td>
                <td className="p-3 border border-border text-center">76t</td>
                <td className="p-3 border border-border text-sm">HCT (High Capacity Transport)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <span><strong>Important:</strong> Always verify current regulations. Overweight fines can exceed €10,000 and result in vehicle impoundment!</span>
          </p>
        </div>
      </section>

      {/* Axle Configuration */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" />
          Axle Load Limits (EU Standard)
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Steering Axle</h3>
            <p className="text-2xl font-bold text-primary">7.5t</p>
            <p className="text-xs text-muted-foreground">Front axle max</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Drive Axle</h3>
            <p className="text-2xl font-bold text-primary">11.5t</p>
            <p className="text-xs text-muted-foreground">Single drive axle</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Tandem Axle</h3>
            <p className="text-2xl font-bold text-primary">18-20t</p>
            <p className="text-xs text-muted-foreground">Depends on spacing</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Tridem Axle</h3>
            <p className="text-2xl font-bold text-primary">21-24t</p>
            <p className="text-xs text-muted-foreground">3-axle trailer group</p>
          </div>
        </div>
      </section>

      {/* Pallet Configurations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          Pallet Loading Configurations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3">EUR Pallets (800×1200mm)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Single row (lengthwise)</span>
                <span className="font-medium">17 pallets</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>Double row (crosswise)</span>
                <span className="font-medium">33 pallets</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>Double deck (if stackable)</span>
                <span className="font-medium">66 pallets</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Loading meters</span>
                <span className="font-medium">13.6 LDM</span>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3">Industrial Pallets (1000×1200mm)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Single row (lengthwise)</span>
                <span className="font-medium">13 pallets</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>Double row (crosswise)</span>
                <span className="font-medium">26 pallets</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>Double deck (if stackable)</span>
                <span className="font-medium">52 pallets</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Loading meters</span>
                <span className="font-medium">13.6 LDM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Securing Requirements */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          Cargo Securing Standards
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2">Code XL Structure</h3>
            <p className="text-sm text-muted-foreground">EN 12642 certified structure for blocking against side walls</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2">Securing Equipment</h3>
            <p className="text-sm text-muted-foreground">Straps, friction mats, edge protectors (EN 12195-1)</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-primary/10 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">80%</p>
            <p className="text-sm text-muted-foreground">Forward restraint (0.8g)</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">50%</p>
            <p className="text-sm text-muted-foreground">Sideways restraint (0.5g)</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">50%</p>
            <p className="text-sm text-muted-foreground">Backward restraint (0.5g)</p>
          </div>
        </div>
      </div>

      {/* Technical Inspection */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          Technical Inspection Checklist
        </h2>
        <ProcessMap
          title="Pre-Trip Vehicle Inspection"
          phases={[
            {
              name: "Exterior Check",
              color: "primary",
              steps: [
                "Lights & reflectors working",
                "Tires condition & pressure",
                "Brake lines & connections",
                "Coupling mechanism secure",
                "Registration plates visible"
              ]
            },
            {
              name: "Trailer Check",
              color: "info",
              steps: [
                "Floor condition",
                "Side curtains/walls intact",
                "Roof condition (no holes)",
                "Doors/locks working",
                "Lashing points present"
              ]
            },
            {
              name: "Documents Check",
              color: "warning",
              steps: [
                "Vehicle registration",
                "Insurance certificate",
                "TÜV/MOT valid",
                "Tachograph calibration",
                "ADR certificate (if needed)"
              ]
            },
            {
              name: "Equipment Check",
              color: "success",
              steps: [
                "Warning triangle",
                "High-vis vests",
                "Fire extinguisher",
                "First aid kit",
                "Wheel chocks"
              ]
            }
          ]}
        />
      </section>

      {/* Checkpoints */}
      <div className="info-card">
        <h2 className="section-title">Loading Checkpoints</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[
            { title: "Loading Method", desc: "Side / Top / Rear" },
            { title: "Forklift Access", desc: "Verify ramp & height" },
            { title: "Weight Distribution", desc: "Axle limits & CoG" },
            { title: "Equipment", desc: "Straps & protectors ready" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-accent rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Vehicle Reference" questions={quizzes.vehicle} chapterId="vehicle" />
    </div>
  );
}
