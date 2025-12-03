import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { FileText, AlertTriangle, Shield, Clock, Euro, CheckCircle, Scale, Camera } from "lucide-react";

export function ClaimsChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-warning to-warning/80 p-8 md:p-12 text-warning-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Scale className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Claims & Disputes
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            How to handle cargo claims, damage disputes, and liability under CMR Convention.
          </p>
        </div>
      </div>

      {/* CMR Liability Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Scale className="w-6 h-6 text-primary" />
          CMR Convention Liability
        </h2>
        <InfoCard title="Understanding CMR Liability" icon={FileText} variant="info">
          <p className="mb-4">The CMR Convention governs international road transport contracts in Europe. As a freight forwarder, understanding liability limits is crucial.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Carrier Liability Limit</h4>
              <p className="text-2xl font-bold text-primary">8.33 SDR/kg</p>
              <p className="text-sm mt-1">≈ €10/kg gross weight</p>
              <p className="text-xs text-muted-foreground mt-2">SDR = Special Drawing Rights (IMF currency)</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Delay Liability Limit</h4>
              <p className="text-2xl font-bold text-warning">Freight charge</p>
              <p className="text-sm mt-1">Maximum = transport price</p>
              <p className="text-xs text-muted-foreground mt-2">Only if deadline specified in CMR</p>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Types of Claims */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          Types of Transport Claims
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Total Loss" icon={AlertTriangle} variant="warning">
            <p className="mb-2">Complete loss of cargo during transport.</p>
            <ul className="space-y-1 text-sm">
              <li>• Theft of entire load</li>
              <li>• Complete destruction by fire/accident</li>
              <li>• Undelivered cargo after 30 days</li>
              <li><strong>Claim deadline:</strong> 30 days from agreed delivery date</li>
            </ul>
          </InfoCard>
          <InfoCard title="Partial Loss" icon={AlertTriangle} variant="info">
            <p className="mb-2">Some items missing or damaged.</p>
            <ul className="space-y-1 text-sm">
              <li>• Missing packages/pallets</li>
              <li>• Partial theft</li>
              <li>• Quantity discrepancy</li>
              <li><strong>Claim deadline:</strong> 7 days from delivery</li>
            </ul>
          </InfoCard>
          <InfoCard title="Damage" icon={Camera} variant="warning">
            <p className="mb-2">Cargo damaged but delivered.</p>
            <ul className="space-y-1 text-sm">
              <li>• Physical damage (crush, wet, broken)</li>
              <li>• Temperature deviation</li>
              <li>• Contamination</li>
              <li><strong>Claim deadline:</strong> 7 days from delivery (written reservation)</li>
            </ul>
          </InfoCard>
          <InfoCard title="Delay" icon={Clock} variant="info">
            <p className="mb-2">Delivery later than agreed.</p>
            <ul className="space-y-1 text-sm">
              <li>• Must be agreed deadline in CMR</li>
              <li>• Economic loss provable</li>
              <li>• Maximum = freight charge</li>
              <li><strong>Claim deadline:</strong> 21 days from delivery</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Claim Process Flowchart */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Claims Process Step-by-Step
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 text-destructive-foreground font-bold">1</div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Immediate Documentation</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Note reservation on CMR/POD at delivery</li>
                  <li>• Take timestamped photos of all damage</li>
                  <li>• Get receiver signature on reservation</li>
                  <li>• Preserve damaged goods for inspection</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-warning flex items-center justify-center flex-shrink-0 text-warning-foreground font-bold">2</div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Written Notification (within 7 days)</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Send written claim letter to carrier</li>
                  <li>• Include CMR number, date, route details</li>
                  <li>• Attach photo documentation</li>
                  <li>• Keep proof of sending (registered mail/email read receipt)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-info flex items-center justify-center flex-shrink-0 text-info-foreground font-bold">3</div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Claim Quantification</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Original invoice showing goods value</li>
                  <li>• Calculate weight for CMR limit (8.33 SDR/kg)</li>
                  <li>• Include repair/replacement quotes</li>
                  <li>• Document any consequential losses</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center flex-shrink-0 text-success-foreground font-bold">4</div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Negotiation & Settlement</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Submit to carrier's insurance if applicable</li>
                  <li>• Negotiate settlement within CMR limits</li>
                  <li>• Get settlement in writing</li>
                  <li>• Consider legal action if denied (1 year limit)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Camera className="w-6 h-6 text-primary" />
          Required Documentation
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { doc: "Signed CMR with reservations", critical: true },
              { doc: "Timestamped photos of damage", critical: true },
              { doc: "Original commercial invoice", critical: true },
              { doc: "Packing list with weights", critical: true },
              { doc: "Written claim notification", critical: true },
              { doc: "Proof of sending (registered mail)", critical: false },
              { doc: "Repair/replacement quotes", critical: false },
              { doc: "Independent survey report", critical: false },
              { doc: "Loading/unloading photos", critical: false },
              { doc: "Temperature records (if applicable)", critical: false },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className={`w-5 h-5 ${item.critical ? 'text-destructive' : 'text-success'}`} />
                <span className="text-sm">{item.doc}</span>
                {item.critical && <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded">Critical</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Deadlines Table */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          Critical Deadlines
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">Claim Type</th>
                <th className="p-3 text-left border border-border">Reservation</th>
                <th className="p-3 text-left border border-border">Written Claim</th>
                <th className="p-3 text-left border border-border">Legal Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-medium">Visible Damage</td>
                <td className="p-3 border border-border text-destructive font-semibold">At delivery</td>
                <td className="p-3 border border-border">7 days</td>
                <td className="p-3 border border-border">1 year</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">Hidden Damage</td>
                <td className="p-3 border border-border text-warning font-semibold">Within 7 days</td>
                <td className="p-3 border border-border">7 days</td>
                <td className="p-3 border border-border">1 year</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">Partial Loss</td>
                <td className="p-3 border border-border text-destructive font-semibold">At delivery</td>
                <td className="p-3 border border-border">7 days</td>
                <td className="p-3 border border-border">1 year</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-medium">Total Loss</td>
                <td className="p-3 border border-border">N/A</td>
                <td className="p-3 border border-border text-warning font-semibold">30 days</td>
                <td className="p-3 border border-border">1 year</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">Delay</td>
                <td className="p-3 border border-border">N/A</td>
                <td className="p-3 border border-border text-warning font-semibold">21 days</td>
                <td className="p-3 border border-border">1 year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Defenses Against Claims */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Carrier Defenses Under CMR
        </h2>
        <InfoCard title="When Carrier Is NOT Liable" icon={Shield} variant="success">
          <p className="mb-3">The carrier can escape liability if damage was caused by:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Wrongful act of the claimant</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Instructions of the claimant</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Inherent vice of the goods</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Circumstances beyond control</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Defective packing by sender</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Handling by sender/consignee</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Nature of certain goods (perishables)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span>Insufficient marking/numbering</span>
              </li>
            </ul>
          </div>
        </InfoCard>
      </section>

      {/* Claim Prevention Tips */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Preventing Claims
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Camera className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Photo Everything</h3>
            <p className="text-sm text-muted-foreground">Loading, securing, and delivery with timestamps</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <FileText className="w-10 h-10 text-info mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Clear CMR Notes</h3>
            <p className="text-sm text-muted-foreground">Always note existing damage at loading</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <Shield className="w-10 h-10 text-success mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Use Verified Carriers</h3>
            <p className="text-sm text-muted-foreground">Check insurance and ratings before booking</p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.claims && (
        <Quiz title="Claims & Disputes Quiz" questions={quizzes.claims} />
      )}
    </div>
  );
}
