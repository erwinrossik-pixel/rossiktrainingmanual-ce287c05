import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Leaf, Truck, BarChart3, FileText, Globe, Fuel, TrendingDown, Award } from "lucide-react";

export function EnvironmentChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Leaf className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Environmental Compliance
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            CO₂ emissions, Euro standards, green logistics, and sustainability in transport.
          </p>
        </div>
      </div>

      {/* Euro Emission Standards */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          Euro Emission Standards
        </h2>
        <DataTable
          headers={["Standard", "Introduction", "Key Limits", "Impact on Operations"]}
          rows={[
            ["Euro 5", "2009", "NOx: 2.0 g/kWh, PM: 0.03", "Still allowed, higher tolls in some countries"],
            ["Euro 6", "2014", "NOx: 0.4 g/kWh, PM: 0.01", "Standard for current operations"],
            ["Euro 6d", "2019", "Real-world testing added", "Required for new truck registrations"],
            ["Euro 7", "2027 (expected)", "Further NOx/PM reduction", "Will require new technology investment"],
          ]}
        />
        <p className="text-sm text-muted-foreground mt-4">
          Euro class affects toll rates in Germany (Maut) and other countries. Euro 6 vehicles pay significantly less than Euro 5.
        </p>
      </section>

      {/* CO2 Emissions */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-primary" />
          CO₂ Emissions & Reporting
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Emission Factors" icon={Fuel} variant="info">
            <ul className="space-y-2">
              <li><strong>Diesel:</strong> ~2.64 kg CO₂ per liter</li>
              <li><strong>40t truck:</strong> ~800-900g CO₂/km</li>
              <li><strong>LNG:</strong> ~15-20% CO₂ reduction</li>
              <li><strong>Electric:</strong> Zero direct emissions</li>
              <li><strong>HVO/Biodiesel:</strong> Up to 90% reduction</li>
            </ul>
          </InfoCard>
          <InfoCard title="Calculation Method" icon={BarChart3} variant="highlight">
            <p className="mb-2 text-sm">Basic formula:</p>
            <div className="bg-muted p-3 rounded-lg font-mono text-sm mb-2">
              CO₂ = Distance × Fuel Consumption × Emission Factor
            </div>
            <p className="text-sm text-muted-foreground">
              Per shipment: Divide by cargo weight for g CO₂/tonne-km
            </p>
          </InfoCard>
        </div>
      </section>

      {/* Green Logistics Initiatives */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          Green Logistics Initiatives
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                Certifications
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>ISO 14001:</strong> Environmental management</li>
                <li><strong>Lean & Green:</strong> Logistics sustainability</li>
                <li><strong>SmartWay:</strong> EPA efficiency program</li>
                <li><strong>SQAS:</strong> Chemical transport safety</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-success" />
                Reduction Strategies
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Route optimization (-5-15%)</li>
                <li>• Eco-driving training (-5-10%)</li>
                <li>• Higher load factors</li>
                <li>• Modal shift where possible</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Leaf className="w-4 h-4 text-success" />
                Alternative Fuels
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• LNG/CNG (natural gas)</li>
                <li>• HVO (renewable diesel)</li>
                <li>• Electric (urban distribution)</li>
                <li>• Hydrogen (emerging)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Low Emission Zones */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          Low Emission Zones (LEZ)
        </h2>
        <DataTable
          headers={["City/Area", "Requirement", "Enforcement"]}
          rows={[
            ["Germany (Umweltzone)", "Green sticker (Euro 4+ diesel)", "Fine €80, widespread in cities"],
            ["London (ULEZ)", "Euro 6 diesel / Euro 4 petrol", "Daily charge £100 for non-compliant"],
            ["Paris (Crit'Air)", "Crit'Air sticker system", "Restrictions during pollution peaks"],
            ["Amsterdam", "Euro 6 from 2025", "City center restrictions"],
            ["Brussels (LEZ)", "Euro 5 minimum", "Camera enforcement, fines €350"],
            ["Milan (Area B/C)", "Euro 5+ diesel", "Camera controlled zones"],
          ]}
        />
      </section>

      {/* German Maut CO2 Classes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          German Maut CO₂ Toll Classes
        </h2>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Since December 2023, German tolls include a CO₂ component based on emission class:
          </p>
          <DataTable
            headers={["CO₂ Class", "Description", "Toll Impact"]}
            rows={[
              ["Class 1", "Zero-emission vehicles (electric, hydrogen)", "Exempt until 2026, then reduced"],
              ["Class 2", "Lowest CO₂ (newer Euro 6d-ISC)", "Lowest toll rate"],
              ["Class 3", "Low CO₂ (Euro 6)", "Reduced rate"],
              ["Class 4", "Medium CO₂ (older Euro 6)", "Standard rate"],
              ["Class 5", "Higher CO₂ (Euro 5 and older)", "Highest toll rate (+€200/1000km)"],
            ]}
          />
        </div>
      </section>

      {/* Customer Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Customer Sustainability Requirements
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Common Requirements</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• CO₂ reporting per shipment</li>
              <li>• Euro 6 minimum fleet standard</li>
              <li>• ISO 14001 certification</li>
              <li>• Annual sustainability report</li>
              <li>• Emission reduction targets</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">How to Prepare</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Track fuel consumption per order</li>
              <li>• Use TMS with CO₂ calculation</li>
              <li>• Keep fleet age documentation</li>
              <li>• Document green initiatives</li>
              <li>• Prepare standard CO₂ reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Eco-Driving */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Fuel className="w-6 h-6 text-primary" />
          Eco-Driving Principles
        </h2>
        <InfoCard title="Driver Training for Fuel Efficiency" icon={TrendingDown} variant="success">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Key Techniques</h4>
              <ul className="space-y-1 text-sm">
                <li>• Maintain steady speed (cruise control)</li>
                <li>• Anticipate traffic flow</li>
                <li>• Use engine braking</li>
                <li>• Optimal gear selection</li>
                <li>• Minimize idling time</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Expected Results</h4>
              <ul className="space-y-1 text-sm">
                <li>• 5-15% fuel reduction</li>
                <li>• Reduced maintenance costs</li>
                <li>• Lower accident risk</li>
                <li>• Improved driver satisfaction</li>
                <li>• Better customer perception</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Future Trends */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-primary" />
          Future Trends
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Regulatory Outlook</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• EU Green Deal: -55% emissions by 2030</li>
                <li>• Zero-emission truck targets</li>
                <li>• Carbon border adjustments</li>
                <li>• Expanded emission trading</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Technology Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Electric trucks: 300-500km range now</li>
                <li>• Hydrogen fuel cells: Long-haul potential</li>
                <li>• Megawatt charging: Under development</li>
                <li>• Autonomous platooning: Efficiency gains</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.environment && (
        <Quiz title="Environmental Compliance Quiz" questions={quizzes.environment} chapterId="environment" />
      )}
    </div>
  );
}
