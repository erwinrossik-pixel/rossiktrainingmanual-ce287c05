import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Thermometer, Snowflake, AlertTriangle, CheckCircle, FileText, Clock, Truck } from "lucide-react";

export function ReeferChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Snowflake className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Temperature-Controlled Transport
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Complete guide to refrigerated transport, cold chain logistics, and ATP compliance.
          </p>
        </div>
      </div>

      {/* Temperature Classes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Thermometer className="w-6 h-6 text-primary" />
          Temperature Classes & Requirements
        </h2>
        <DataTable
          headers={["Class", "Temperature Range", "Typical Cargo", "Equipment"]}
          rows={[
            ["Deep Frozen", "-25°C to -18°C", "Ice cream, frozen meat, seafood", "FRC reefer"],
            ["Frozen", "-18°C to -12°C", "Frozen vegetables, frozen fish", "FRC reefer"],
            ["Chilled", "+2°C to +8°C", "Fresh meat, dairy, pharmaceuticals", "FRC/FNA reefer"],
            ["Cool", "+8°C to +14°C", "Fruits, vegetables, flowers", "FNA reefer"],
            ["Ambient Controlled", "+15°C to +25°C", "Chocolate, wine, cosmetics", "FNA/Insulated"],
          ]}
        />
      </section>

      {/* ATP Certification */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          ATP Certification
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-muted-foreground mb-4">
            The ATP (Agreement on the International Carriage of Perishable Foodstuffs) establishes standards for temperature-controlled vehicles.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">ATP Classification Codes</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-12 font-mono bg-muted px-2 py-1 rounded">FRC</span>
                  <span>Refrigerated, heavy insulation, -20°C capable</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-12 font-mono bg-muted px-2 py-1 rounded">FNA</span>
                  <span>Refrigerated, normal insulation, 0°C to +12°C</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-12 font-mono bg-muted px-2 py-1 rounded">IN</span>
                  <span>Insulated only, no active cooling</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Certificate Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Valid ATP certificate must be on board</li>
                <li>• Certificate valid for 6 years (3+3 with renewal test)</li>
                <li>• Annual inspection recommended</li>
                <li>• Required for international perishable goods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cold Chain Best Practices */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Snowflake className="w-6 h-6 text-primary" />
          Cold Chain Best Practices
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title="Pre-Cooling" icon={Thermometer} variant="info">
            <ul className="space-y-2">
              <li>• Pre-cool trailer to required temp before loading</li>
              <li>• Allow 2-4 hours for deep freeze loads</li>
              <li>• Never load warm cargo into cold trailer</li>
              <li>• Document pre-cool temperature</li>
            </ul>
          </InfoCard>
          <InfoCard title="Loading Protocol" icon={Truck} variant="highlight">
            <ul className="space-y-2">
              <li>• Load quickly to minimize temperature rise</li>
              <li>• Check cargo temperature before loading</li>
              <li>• Ensure proper air circulation gaps</li>
              <li>• Never block the evaporator unit</li>
            </ul>
          </InfoCard>
          <InfoCard title="Temperature Monitoring" icon={CheckCircle} variant="success">
            <ul className="space-y-2">
              <li>• Use calibrated data loggers</li>
              <li>• Check temperatures at every stop</li>
              <li>• Print temperature report at delivery</li>
              <li>• Keep records for minimum 1 year</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Temperature Deviations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Handling Temperature Deviations
        </h2>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-warning">Critical Actions</h3>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Stop and check reefer unit immediately</li>
                <li>Document actual vs. required temperature</li>
                <li>Contact dispatcher with full details</li>
                <li>Take photos of temperature display</li>
                <li>Check fuel level and unit operation</li>
                <li>Do NOT continue if deviation is critical</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Tolerance Limits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Frozen goods:</strong> Max +3°C deviation for &lt;30 min</li>
                <li><strong>Chilled goods:</strong> Max +2°C deviation for &lt;1 hour</li>
                <li><strong>Pharmaceuticals:</strong> ZERO tolerance - reject if exceeded</li>
                <li><strong>Documentation:</strong> Always note deviations on CMR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reefer Unit Operation */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          Reefer Unit Operation
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Common Reefer Brands</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Carrier (Transicold):</strong> Vector, Supra series</li>
                <li><strong>Thermo King:</strong> SLXe, SLXi series</li>
                <li><strong>Schmitz Cargobull:</strong> S.CU series</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Fuel Consumption</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Diesel units: 2-4 liters/hour</li>
                <li>• Factor in reefer fuel for pricing</li>
                <li>• Colder temps = higher consumption</li>
                <li>• Check fuel before long journeys</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product-Specific Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Product-Specific Requirements
        </h2>
        <DataTable
          headers={["Product", "Temperature", "Special Notes"]}
          rows={[
            ["Fresh meat", "+0°C to +4°C", "Must have health certificate, HACCP"],
            ["Fresh fish", "-2°C to +2°C", "Often packed in ice, drain holes needed"],
            ["Dairy products", "+2°C to +6°C", "Sensitive to temperature fluctuation"],
            ["Fruits & vegetables", "+4°C to +14°C", "Need ventilation, some produce ethylene"],
            ["Pharmaceuticals", "+2°C to +8°C", "GDP compliance, calibrated monitoring"],
            ["Frozen foods", "-18°C or below", "Must maintain throughout transport"],
            ["Ice cream", "-25°C to -20°C", "Very sensitive to temperature rise"],
            ["Flowers", "+2°C to +8°C", "High humidity, quick delivery needed"],
          ]}
        />
      </section>

      {/* Documentation */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Required Documentation
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Vehicle Documents</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Valid ATP certificate</li>
              <li>• Reefer unit service record</li>
              <li>• Temperature logger calibration certificate</li>
              <li>• Vehicle cleaning records (for food)</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Shipment Documents</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• CMR with temperature requirement noted</li>
              <li>• Temperature printout at loading</li>
              <li>• Temperature printout at delivery</li>
              <li>• Health certificates (if food products)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Considerations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          Pricing Considerations
        </h2>
        <InfoCard title="Reefer Transport Costs" icon={Thermometer} variant="highlight">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Additional Costs vs. Standard</h4>
              <ul className="space-y-1 text-sm">
                <li>• Base rate: +15-30% over standard trailer</li>
                <li>• Deep freeze: +25-40% over standard</li>
                <li>• Reefer fuel: €30-80/day extra</li>
                <li>• Pharma/GDP loads: +50-100% premium</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Factors Affecting Price</h4>
              <ul className="space-y-1 text-sm">
                <li>• Temperature class required</li>
                <li>• Distance and duration</li>
                <li>• Product sensitivity level</li>
                <li>• Multi-temperature requirements</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Quiz */}
      {quizzes.reefer && (
        <Quiz title="Temperature-Controlled Transport Quiz" questions={quizzes.reefer} chapterId="reefer" />
      )}
    </div>
  );
}
