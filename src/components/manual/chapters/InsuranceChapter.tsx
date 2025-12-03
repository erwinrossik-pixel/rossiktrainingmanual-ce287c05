import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Shield, FileText, Euro, AlertTriangle, CheckCircle, Truck, Package, Scale } from "lucide-react";

export function InsuranceChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-success to-success/80 p-8 md:p-12 text-success-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Shield className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Transport Insurance
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Understanding CMR liability, cargo insurance, and risk protection in freight forwarding.
          </p>
        </div>
      </div>

      {/* Insurance Types Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Types of Transport Insurance
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="CMR Liability Insurance" icon={Truck} variant="info">
            <p className="mb-3 font-semibold text-foreground">Mandatory for carriers</p>
            <ul className="space-y-2">
              <li><strong>What it covers:</strong> Carrier's legal liability under CMR Convention</li>
              <li><strong>Limit:</strong> 8.33 SDR/kg (≈€10/kg)</li>
              <li><strong>Who pays:</strong> Carrier's responsibility</li>
              <li><strong>Gap:</strong> Does NOT cover full cargo value</li>
            </ul>
          </InfoCard>
          <InfoCard title="Cargo (Goods) Insurance" icon={Package} variant="success">
            <p className="mb-3 font-semibold text-foreground">Optional - Full value protection</p>
            <ul className="space-y-2">
              <li><strong>What it covers:</strong> Full declared value of goods</li>
              <li><strong>Limit:</strong> As per policy (up to 100% value)</li>
              <li><strong>Who pays:</strong> Shipper/consignee or FF</li>
              <li><strong>Benefit:</strong> Covers all risks, faster payout</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* CMR Liability Gap Example */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          The CMR Liability Gap
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Example: Electronics Shipment</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm text-muted-foreground mb-1">Cargo Details</h4>
              <p className="text-lg font-semibold">10 pallets electronics</p>
              <p className="text-sm">Weight: 5,000 kg</p>
              <p className="text-sm">Invoice value: <strong className="text-primary">€200,000</strong></p>
            </div>
            <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
              <h4 className="text-sm text-muted-foreground mb-1">CMR Liability Only</h4>
              <p className="text-lg font-semibold">5,000 kg × €10/kg</p>
              <p className="text-2xl font-bold text-warning">= €50,000</p>
              <p className="text-sm text-destructive mt-2">Gap: <strong>€150,000</strong> uncovered!</p>
            </div>
            <div className="bg-success/10 border border-success/30 rounded-lg p-4">
              <h4 className="text-sm text-muted-foreground mb-1">With Cargo Insurance</h4>
              <p className="text-lg font-semibold">Full value covered</p>
              <p className="text-2xl font-bold text-success">= €200,000</p>
              <p className="text-sm text-success mt-2">100% protected</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
            <p className="text-sm font-medium text-destructive flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              High-value goods (electronics, pharma, machinery) should ALWAYS have additional cargo insurance!
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Coverage Comparison */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Scale className="w-6 h-6 text-primary" />
          Coverage Comparison Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">Risk</th>
                <th className="p-3 text-center border border-border">CMR Liability</th>
                <th className="p-3 text-center border border-border">Cargo Insurance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border">Accident damage</td>
                <td className="p-3 border border-border text-center">✅ Limited</td>
                <td className="p-3 border border-border text-center">✅ Full</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">Theft</td>
                <td className="p-3 border border-border text-center">✅ Limited</td>
                <td className="p-3 border border-border text-center">✅ Full</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Fire</td>
                <td className="p-3 border border-border text-center">✅ Limited</td>
                <td className="p-3 border border-border text-center">✅ Full</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">Water damage</td>
                <td className="p-3 border border-border text-center">✅ Limited</td>
                <td className="p-3 border border-border text-center">✅ Full</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Natural disaster</td>
                <td className="p-3 border border-border text-center text-destructive">❌ No</td>
                <td className="p-3 border border-border text-center">✅ Yes</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">Inherent vice</td>
                <td className="p-3 border border-border text-center text-destructive">❌ No</td>
                <td className="p-3 border border-border text-center">⚠️ Depends</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Improper packing</td>
                <td className="p-3 border border-border text-center text-destructive">❌ No</td>
                <td className="p-3 border border-border text-center text-destructive">❌ No</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">Full value coverage</td>
                <td className="p-3 border border-border text-center text-destructive">❌ No (8.33 SDR/kg)</td>
                <td className="p-3 border border-border text-center text-success">✅ Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* When to Recommend Insurance */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          When to Recommend Additional Insurance
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="High-Value Cargo" icon={Euro} variant="warning">
            <p className="mb-2">Always recommend cargo insurance when:</p>
            <ul className="space-y-1">
              <li>• Value exceeds €15/kg</li>
              <li>• Electronics, pharmaceuticals, luxury goods</li>
              <li>• New machinery/equipment</li>
              <li>• Art, antiques, collectibles</li>
              <li>• Total shipment value &gt; €100,000</li>
            </ul>
          </InfoCard>
          <InfoCard title="High-Risk Routes/Conditions" icon={AlertTriangle} variant="warning">
            <p className="mb-2">Extra caution required for:</p>
            <ul className="space-y-1">
              <li>• Routes through high-theft areas</li>
              <li>• Temperature-sensitive goods</li>
              <li>• Cross-border movements (more handling)</li>
              <li>• Seasonal weather risks</li>
              <li>• Long-distance shipments</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Insurance Cost Guide */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Euro className="w-6 h-6 text-primary" />
          Typical Insurance Costs
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">Standard Goods</h3>
              <p className="text-3xl font-bold text-primary">0.08-0.15%</p>
              <p className="text-sm text-muted-foreground mt-2">of declared value</p>
              <p className="text-xs text-muted-foreground">e.g., €200,000 = €160-300</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">High-Value Goods</h3>
              <p className="text-3xl font-bold text-warning">0.15-0.30%</p>
              <p className="text-sm text-muted-foreground mt-2">of declared value</p>
              <p className="text-xs text-muted-foreground">Electronics, pharma</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">Hazardous/Special</h3>
              <p className="text-3xl font-bold text-destructive">0.30-0.50%+</p>
              <p className="text-sm text-muted-foreground mt-2">of declared value</p>
              <p className="text-xs text-muted-foreground">ADR, temperature-controlled</p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents for Insurance */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Documents for Insurance Claims
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { doc: "Original commercial invoice", required: true },
              { doc: "Packing list with weights", required: true },
              { doc: "CMR/Bill of Lading", required: true },
              { doc: "Insurance certificate/policy", required: true },
              { doc: "Claim notification letter", required: true },
              { doc: "Photos of damage", required: true },
              { doc: "Survey report", required: false },
              { doc: "Police report (if theft)", required: false },
              { doc: "Repair quotes", required: false },
              { doc: "Proof of value (catalog, PO)", required: false },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className={`w-5 h-5 ${item.required ? 'text-destructive' : 'text-success'}`} />
                <span className="text-sm">{item.doc}</span>
                {item.required && <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded">Required</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          Key Takeaways
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-info/10 border border-info/30 rounded-xl p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-info" />
              Remember
            </h3>
            <ul className="text-sm space-y-2">
              <li>• CMR liability ≠ full cargo insurance</li>
              <li>• Always check carrier's insurance certificate</li>
              <li>• Offer cargo insurance to clients with high-value goods</li>
              <li>• Document everything for faster claims</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 rounded-xl p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Common Mistakes
            </h3>
            <ul className="text-sm space-y-2">
              <li>• Assuming CMR covers full value</li>
              <li>• Not checking carrier's insurance validity</li>
              <li>• Missing claim notification deadlines</li>
              <li>• Poor documentation at loading/delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.insurance && (
        <Quiz title="Transport Insurance Quiz" questions={quizzes.insurance} chapterId="insurance" />
      )}
    </div>
  );
}
