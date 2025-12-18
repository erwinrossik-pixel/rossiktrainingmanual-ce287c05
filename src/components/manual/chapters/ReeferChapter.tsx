import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Checklist } from "../Checklist";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { 
  Thermometer, Snowflake, AlertTriangle, CheckCircle, FileText, Clock, Truck,
  Shield, Zap, Eye, AlertCircle, Info, Target, Package, Euro, Phone,
  CheckCircle2, XCircle, Gauge, Settings, BookOpen
} from "lucide-react";

export function ReeferChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Snowflake className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display">
            Temperature-Controlled Transport
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Complete guide to refrigerated transport, cold chain logistics, ATP compliance, and 
            handling temperature-sensitive cargo safely across Europe.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Thermometer className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="section-title mb-2">Understanding Cold Chain Logistics</h2>
            <p className="text-muted-foreground mb-4">
              Temperature-controlled transport (reefer) is one of the most demanding sectors in road freight. 
              A single temperature deviation can spoil an entire load worth thousands of euros. Understanding 
              cold chain principles, ATP regulations, and proper procedures is essential for any freight forwarder.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-600">€50B+</p>
                <p className="text-muted-foreground">EU reefer market annually</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-600">+25-40%</p>
                <p className="text-muted-foreground">Premium over standard rates</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-600">Zero tolerance</p>
                <p className="text-muted-foreground">For pharma temp deviations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Classes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Thermometer className="w-6 h-6 text-primary" />
          Temperature Classes & Requirements
        </h2>
        <DataTable
          headers={["Class", "Temperature Range", "Typical Cargo", "Equipment", "Special Notes"]}
          rows={[
            ["Deep Frozen", "-25°C to -18°C", "Ice cream, frozen meat, seafood", "FRC reefer", "Strictest temp control"],
            ["Frozen", "-18°C to -12°C", "Frozen vegetables, frozen fish", "FRC reefer", "Most common frozen class"],
            ["Chilled", "+2°C to +8°C", "Fresh meat, dairy, pharmaceuticals", "FRC/FNA reefer", "Highest volume segment"],
            ["Cool", "+8°C to +14°C", "Fruits, vegetables, flowers", "FNA reefer", "Needs ventilation"],
            ["Ambient Controlled", "+15°C to +25°C", "Chocolate, wine, cosmetics", "FNA/Insulated", "Protect from extreme heat/cold"],
            ["Multi-Temperature", "Various zones", "Mixed loads", "Dual-temp reefer", "Dividers required"],
          ]}
        />
        <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-info" />
            <span><strong>Critical:</strong> Always verify required temperature with shipper. Pharmaceutical loads often require +2°C to +8°C with zero deviation tolerance.</span>
          </p>
        </div>
      </section>

      {/* ATP Certification - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          ATP Agreement & Certification
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">What is ATP?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The ATP (Agreement on the International Carriage of Perishable Foodstuffs and on the 
                Special Equipment to be used for such Carriage) is an international agreement signed 
                in Geneva 1970. It sets standards for temperature-controlled vehicles.
              </p>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">ATP Coverage:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Equipment construction standards</li>
                  <li>• Temperature maintenance capability</li>
                  <li>• Testing and certification procedures</li>
                  <li>• Marking requirements</li>
                  <li>• International recognition</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">ATP Classification Codes</h3>
              <DataTable
                headers={["Code", "Meaning", "Temp Capability"]}
                rows={[
                  ["FRC", "Refrigerated, heavy insulation", "Down to -20°C"],
                  ["FRF", "Refrigerated, heavy insulation", "Down to -10°C"],
                  ["FNA", "Refrigerated, normal insulation", "0°C to +12°C"],
                  ["FNB", "Refrigerated, normal insulation", "+12°C"],
                  ["IN", "Insulated only", "No active cooling"],
                  ["IR", "Insulated, reinforced", "No active cooling"],
                ]}
              />
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-warning/10 border border-warning/30 rounded-lg">
            <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Certificate Requirements
            </h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>• Valid ATP certificate must be on board at all times</li>
              <li>• Certificate valid for 6 years (3+3 with renewal test)</li>
              <li>• Annual inspection recommended</li>
              <li>• Required for ALL international perishable transport</li>
              <li>• Check expiry date before accepting reefer orders</li>
              <li>• Certificate must match vehicle registration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cold Chain Best Practices - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Snowflake className="w-6 h-6 text-primary" />
          Cold Chain Best Practices
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <Thermometer className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-3">Pre-Cooling Protocol</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Pre-cool trailer to required temp BEFORE loading</li>
              <li>• Allow 2-4 hours for deep freeze loads</li>
              <li>• 1-2 hours for chilled loads</li>
              <li>• Never load warm cargo into cold trailer</li>
              <li>• Document pre-cool temperature</li>
              <li>• Take photo of temp display before loading</li>
            </ul>
          </div>
          <div className="p-6 bg-cyan-50 rounded-xl border border-cyan-200">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-3">
              <Truck className="w-5 h-5 text-cyan-600" />
            </div>
            <h3 className="font-semibold mb-3">Loading Protocol</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Load quickly to minimize temperature rise</li>
              <li>• Check cargo temperature before loading</li>
              <li>• Ensure proper air circulation gaps</li>
              <li>• Never block the evaporator unit</li>
              <li>• Use floor channels for airflow</li>
              <li>• Maximum 30 min door open time</li>
            </ul>
          </div>
          <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-3">Temperature Monitoring</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use calibrated data loggers</li>
              <li>• Check temperatures at every stop</li>
              <li>• Print temperature report at delivery</li>
              <li>• Keep records for minimum 1 year</li>
              <li>• GPS-linked monitoring preferred</li>
              <li>• Real-time alerts for deviations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Temperature Deviations - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Handling Temperature Deviations
        </h2>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-warning">Critical Actions – STOP Protocol</h3>
              <ol className="space-y-3 text-sm">
                {[
                  { step: "S", action: "STOP", desc: "Stop vehicle safely, do not continue journey" },
                  { step: "T", action: "TEMPERATURE", desc: "Check and record actual vs required temp" },
                  { step: "O", action: "OPERATE", desc: "Check reefer unit, fuel level, settings" },
                  { step: "P", action: "PHONE", desc: "Contact dispatcher immediately with all details" },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-warning text-warning-foreground rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">{item.step}</span>
                    <div>
                      <p className="font-medium">{item.action}</p>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Tolerance Limits by Product</h3>
              <DataTable
                headers={["Product Type", "Max Deviation", "Max Duration"]}
                rows={[
                  ["Frozen goods", "+3°C", "< 30 minutes"],
                  ["Chilled goods", "+2°C", "< 1 hour"],
                  ["Fresh meat", "+2°C", "< 30 minutes"],
                  ["Dairy", "+2°C", "< 1 hour"],
                  ["Pharmaceuticals", "ZERO", "ANY = reject"],
                  ["Vaccines", "ZERO", "ANY = reject"],
                ]}
              />
              <p className="text-xs text-warning mt-2">
                <AlertTriangle className="w-3 h-3 inline mr-1" />
                ANY deviation must be documented on CMR. Never hide temperature issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reefer Unit Operation - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" />
          Reefer Unit Operation
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Common Reefer Unit Brands</h3>
              <DataTable
                headers={["Brand", "Popular Models", "Notes"]}
                rows={[
                  ["Carrier Transicold", "Vector 1950, Supra 1150", "Most common globally"],
                  ["Thermo King", "SLXe 400, SLXi Whisper", "Strong in EU market"],
                  ["Schmitz Cargobull", "S.CU 2300", "German manufacturer"],
                  ["Daikin", "Various models", "Growing presence"],
                ]}
              />
            </div>
            <div>
              <h3 className="font-semibold mb-3">Operating Modes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="p-2 bg-muted/50 rounded">
                  <span className="font-medium">Continuous:</span> Reefer always on, constant temperature
                </li>
                <li className="p-2 bg-muted/50 rounded">
                  <span className="font-medium">Start/Stop:</span> Cycles to maintain temp (more fuel efficient)
                </li>
                <li className="p-2 bg-muted/50 rounded">
                  <span className="font-medium">Null/Defrost:</span> Prevents ice build-up on evaporator
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Fuel Consumption Guide</h3>
            <DataTable
              headers={["Condition", "Consumption", "Cost per Day", "Notes"]}
              rows={[
                ["Chilled (+2°C to +8°C)", "2-3 L/hour", "€40-60/day", "Standard operating conditions"],
                ["Frozen (-18°C)", "3-4 L/hour", "€60-80/day", "Higher consumption in summer"],
                ["Deep Freeze (-25°C)", "4-5 L/hour", "€80-100/day", "Highest consumption"],
                ["Multi-temp", "4-5 L/hour", "€80-100/day", "Two compartments = more fuel"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* Product-Specific Requirements - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Package className="w-6 h-6 text-primary" />
          Product-Specific Requirements
        </h2>
        <DataTable
          headers={["Product", "Temperature", "Humidity", "Special Notes", "Documents Needed"]}
          rows={[
            ["Fresh meat (beef, pork)", "+0°C to +4°C", "85-90%", "Health certificate required, HACCP", "CMR, Health cert, ATP"],
            ["Poultry", "+0°C to +2°C", "85-90%", "Stricter than red meat", "CMR, Health cert, ATP"],
            ["Fresh fish", "-2°C to +2°C", "95-100%", "Often packed in ice, drain holes needed", "CMR, Catch cert, ATP"],
            ["Dairy products", "+2°C to +6°C", "80-85%", "Very sensitive to fluctuation", "CMR, ATP"],
            ["Fruits & vegetables", "+4°C to +14°C", "85-95%", "Need ventilation, some produce ethylene", "CMR, Phyto cert, ATP"],
            ["Pharmaceuticals", "+2°C to +8°C", "Controlled", "GDP compliance, calibrated monitoring", "CMR, GDP docs, ATP, Temp log"],
            ["Vaccines", "+2°C to +8°C", "Controlled", "ZERO tolerance, dedicated transport", "CMR, GDP, Batch records"],
            ["Frozen foods", "-18°C or below", "N/A", "Must maintain throughout transport", "CMR, ATP"],
            ["Ice cream", "-25°C to -20°C", "N/A", "Very sensitive to temperature rise", "CMR, ATP"],
            ["Flowers", "+2°C to +8°C", "90-95%", "High humidity, quick delivery needed", "CMR, Phyto cert, ATP"],
            ["Chocolate", "+12°C to +18°C", "50-65%", "Avoid condensation and bloom", "CMR, (ATP optional)"],
            ["Wine", "+10°C to +16°C", "60-70%", "Protect from vibration and light", "CMR, (ATP optional)"],
          ]}
        />
      </section>

      {/* GDP Compliance (Pharmaceutical) */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          GDP Compliance for Pharmaceuticals
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground mb-4">
            Good Distribution Practice (GDP) is the minimum standard for pharmaceutical logistics. 
            Failure to comply can result in product recall, regulatory action, and loss of license.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary">GDP Requirements for Transport</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Validated transport equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Calibrated temperature monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Trained personnel with documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Continuous temperature records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Deviation handling procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Clean, dedicated vehicles</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-destructive">GDP Non-Compliance Risks</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Product rejection and return</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Regulatory investigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Loss of GDP authorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Client blacklisting</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Criminal liability (patient harm)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Required Documentation
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Vehicle Documents</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Valid ATP certificate (check expiry!)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Reefer unit service record</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Temperature logger calibration certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Vehicle cleaning records (for food)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>GDP authorization (for pharma)</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Shipment Documents</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>CMR with temperature requirement noted</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Temperature printout at loading</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Temperature printout at delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Health certificates (food products)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Phytosanitary certificate (produce)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Considerations - Expanded */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <Euro className="w-6 h-6 text-primary" />
          Reefer Pricing & Cost Factors
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Premium Over Standard Rates</h4>
              <DataTable
                headers={["Temperature Class", "Premium", "Notes"]}
                rows={[
                  ["Chilled (+2°C to +8°C)", "+15-25%", "Standard reefer"],
                  ["Frozen (-18°C)", "+25-35%", "Higher fuel cost"],
                  ["Deep freeze (-25°C)", "+35-50%", "Specialist equipment"],
                  ["Pharma/GDP", "+50-100%", "Documentation, liability"],
                  ["Multi-temperature", "+40-60%", "Complex loads"],
                ]}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-3">Additional Cost Factors</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between py-2 border-b border-border">
                  <span>Reefer fuel</span>
                  <span className="font-medium">€30-100/day</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border">
                  <span>Pre-cooling</span>
                  <span className="font-medium">€50-100</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border">
                  <span>Temperature monitoring</span>
                  <span className="font-medium">€25-50/shipment</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border">
                  <span>Cleaning (food grade)</span>
                  <span className="font-medium">€50-150</span>
                </li>
                <li className="flex justify-between py-2 border-b border-border">
                  <span>Temperature report</span>
                  <span className="font-medium">Included or €15-30</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          Common Reefer Problems & Solutions
        </h2>
        <DataTable
          headers={["Problem", "Possible Cause", "Immediate Action", "Prevention"]}
          rows={[
            ["Unit not cooling", "Low fuel, electrical fault", "Check fuel, reset unit, call for breakdown", "Pre-trip checks"],
            ["Temperature rising", "Door seal leak, overloaded", "Check seals, verify airflow", "Inspect seals before loading"],
            ["Ice on evaporator", "Defrost cycle skipped", "Run manual defrost", "Ensure auto-defrost enabled"],
            ["Inconsistent temp", "Blocked airflow, mixed cargo", "Check cargo placement, ensure gaps", "Proper loading training"],
            ["Unit alarm", "Various", "Check display for error code, contact support", "Regular maintenance"],
            ["No temp printout", "Printer fault, no paper", "Manual record, get printout at next stop", "Check printer before trip"],
          ]}
        />
      </section>

      {/* Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <Checklist 
          title="Pre-Loading Reefer Checklist"
          items={[
            "ATP certificate valid and on board",
            "Reefer unit pre-cooled to required temp",
            "Temperature display functional",
            "Data logger calibrated and activated",
            "Trailer interior clean and dry",
            "Door seals in good condition",
            "Pre-cool temp photo taken"
          ]}
        />
        <Checklist 
          title="Post-Loading Reefer Checklist"
          items={[
            "Cargo temp checked and documented",
            "Set point verified and confirmed",
            "Airflow gaps maintained",
            "Evaporator not blocked",
            "Doors sealed properly",
            "Data logger recording",
            "CMR notes temperature requirement"
          ]}
        />
      </div>

      {/* Quiz */}
      {quizzes.reefer && (
        <Quiz title="🎯 Temperature-Controlled Transport Quiz" questions={quizzes.reefer} chapterId="reefer" />
      )}
    </div>
  );
}
