import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { FileText, Truck, Globe, CheckCircle, AlertTriangle, Package, Shield, Stamp } from "lucide-react";

export function DocumentsChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <FileText className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Transport Documents
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            CMR, customs declarations, and essential documentation for European road transport.
          </p>
        </div>
      </div>

      {/* CMR Consignment Note */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          CMR Consignment Note
        </h2>
        <InfoCard title="The Most Important Transport Document" icon={FileText} variant="highlight">
          <p className="mb-4">
            The CMR note is the contract of carriage for international road transport. It proves the contract exists, 
            describes the goods, and serves as evidence of delivery.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">4 Copies Required</h4>
              <ul className="text-sm space-y-1">
                <li><strong>Copy 1 (Red):</strong> Sender</li>
                <li><strong>Copy 2 (Blue):</strong> Consignee</li>
                <li><strong>Copy 3 (Green):</strong> Carrier</li>
                <li><strong>Copy 4 (Black):</strong> For administration</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Key Functions</h4>
              <ul className="text-sm space-y-1">
                <li>• Proof of transport contract</li>
                <li>• Receipt for goods</li>
                <li>• Proof of delivery (POD)</li>
                <li>• Basis for claims</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* CMR Fields Explained */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          CMR Fields - What to Check
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-left border border-border">Field</th>
                  <th className="p-3 text-left border border-border">Content</th>
                  <th className="p-3 text-left border border-border">Critical?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">Box 1</td>
                  <td className="p-3 border border-border">Sender name & address</td>
                  <td className="p-3 border border-border text-success">✓ Yes</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">Box 2</td>
                  <td className="p-3 border border-border">Consignee name & address</td>
                  <td className="p-3 border border-border text-success">✓ Yes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">Box 3</td>
                  <td className="p-3 border border-border">Place of delivery</td>
                  <td className="p-3 border border-border text-success">✓ Yes</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">Box 4</td>
                  <td className="p-3 border border-border">Place & date of loading</td>
                  <td className="p-3 border border-border text-success">✓ Yes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">Box 6-9</td>
                  <td className="p-3 border border-border">Goods description, marks, packages, weight</td>
                  <td className="p-3 border border-border text-success">✓ Yes</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">Box 13</td>
                  <td className="p-3 border border-border">Sender's instructions (ADR, temperature)</td>
                  <td className="p-3 border border-border text-warning">⚠️ When applicable</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">Box 16</td>
                  <td className="p-3 border border-border">Carrier name & address</td>
                  <td className="p-3 border border-border text-success">✓ Yes</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">Box 18</td>
                  <td className="p-3 border border-border">Reservations at loading</td>
                  <td className="p-3 border border-border text-destructive">⚠️ Critical for claims</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">Box 22</td>
                  <td className="p-3 border border-border">Sender signature</td>
                  <td className="p-3 border border-border text-success">✓ Yes</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 border border-border font-mono text-sm">Box 23</td>
                  <td className="p-3 border border-border">Carrier signature + date</td>
                  <td className="p-3 border border-border text-success">✓ Yes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-mono text-sm">Box 24</td>
                  <td className="p-3 border border-border">Consignee signature + date (delivery)</td>
                  <td className="p-3 border border-border text-destructive">⚠️ Critical - POD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CMR Reservations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          CMR Reservations - Critical for Claims
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="At Loading (Box 18)" icon={Package} variant="warning">
            <p className="mb-2 font-semibold text-foreground">Driver MUST note any issues:</p>
            <ul className="space-y-1">
              <li>• "Goods already damaged"</li>
              <li>• "Unable to verify quantity - sealed load"</li>
              <li>• "Packaging damaged"</li>
              <li>• "Loaded by sender"</li>
              <li>• "Cannot verify weight"</li>
            </ul>
          </InfoCard>
          <InfoCard title="At Delivery (Box 24)" icon={Truck} variant="warning">
            <p className="mb-2 font-semibold text-foreground">Receiver MUST note any issues:</p>
            <ul className="space-y-1">
              <li>• "3 pallets damaged"</li>
              <li>• "1 box missing"</li>
              <li>• "Seal broken on arrival"</li>
              <li>• "Temperature exceeded"</li>
              <li>• "Delivery 4 hours late"</li>
            </ul>
          </InfoCard>
        </div>
        <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
          <p className="text-sm font-medium text-destructive flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            A "clean" CMR (no reservations) means cargo was accepted in good condition. Without reservations, proving damage is much harder!
          </p>
        </div>
      </section>

      {/* Customs Documents */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          Customs Documents
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="T1 Transit Document" icon={Stamp} variant="info">
            <p className="mb-3">For goods moving through EU in transit (non-EU goods or certain EU movements).</p>
            <ul className="space-y-1 text-sm">
              <li><strong>Purpose:</strong> Suspend customs duties during transit</li>
              <li><strong>Validity:</strong> Set by departure customs office</li>
              <li><strong>Guarantee:</strong> Required (bank guarantee/cash deposit)</li>
              <li><strong>Discharge:</strong> Must be presented at destination customs</li>
            </ul>
          </InfoCard>
          <InfoCard title="T2 Transit Document" icon={Stamp} variant="info">
            <p className="mb-3">For EU goods moving between EU member states through non-EU territory.</p>
            <ul className="space-y-1 text-sm">
              <li><strong>Example:</strong> Germany → Austria via Switzerland</li>
              <li><strong>Purpose:</strong> Prove EU status of goods</li>
              <li><strong>Simpler:</strong> Than T1, lower guarantee requirements</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Export/Import Documents */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          Export/Import Documents (Non-EU)
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Commercial Documents
              </h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Commercial invoice</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Packing list</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Certificate of origin</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-info flex items-center gap-2">
                <Stamp className="w-4 h-4" />
                Customs Forms
              </h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Export declaration (EX-A)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Import declaration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>AEO certification (if applicable)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-warning flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Special Documents
              </h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>Phytosanitary certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>Veterinary certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>CITES permits (wildlife)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POD Best Practices */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          POD (Proof of Delivery) Best Practices
        </h2>
        <InfoCard title="Getting a Valid POD" icon={CheckCircle} variant="success">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-success">Must Have:</h4>
              <ul className="space-y-1 text-sm">
                <li>✓ Receiver signature</li>
                <li>✓ Date and time of delivery</li>
                <li>✓ Company stamp (if available)</li>
                <li>✓ Name of signatory (printed)</li>
                <li>✓ Any reservations noted clearly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-destructive">Never Accept:</h4>
              <ul className="space-y-1 text-sm">
                <li>✗ Unsigned CMR</li>
                <li>✗ Missing delivery date</li>
                <li>✗ Illegible signature without name</li>
                <li>✗ "Subject to inspection" without follow-up</li>
                <li>✗ Partial delivery without noting</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Document Checklist */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          Pre-Transport Document Checklist
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "CMR completed with all boxes filled",
              "Sender and consignee details verified",
              "Goods description matches invoice",
              "Weight and package count confirmed",
              "Any special instructions in Box 13",
              "Driver has copy of all documents",
              "T1/T2 if crossing non-EU borders",
              "ADR documents if dangerous goods",
              "Temperature records if required",
              "Photos taken at loading"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.documents && (
        <Quiz title="Transport Documents Quiz" questions={quizzes.documents} chapterId="documents" />
      )}
    </div>
  );
}
