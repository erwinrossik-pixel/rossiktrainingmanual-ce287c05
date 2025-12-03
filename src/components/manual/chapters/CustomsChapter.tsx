import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Globe, FileText, AlertTriangle, CheckCircle, Clock, MapPin, Shield } from "lucide-react";

export function CustomsChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Globe className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Customs & Border Procedures
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Essential knowledge for EU/non-EU border crossings, customs documentation, and compliance.
          </p>
        </div>
      </div>

      {/* EU vs Non-EU */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          EU vs Non-EU Transport
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Within EU (Intra-Community)" icon={CheckCircle} variant="success">
            <ul className="space-y-2">
              <li>• No customs formalities at borders</li>
              <li>• Free movement of goods</li>
              <li>• Only CMR required for transport</li>
              <li>• VAT handled via VIES system</li>
              <li>• Intrastat reporting may apply</li>
            </ul>
          </InfoCard>
          <InfoCard title="EU ↔ Non-EU (Import/Export)" icon={FileText} variant="warning">
            <ul className="space-y-2">
              <li>• Full customs clearance required</li>
              <li>• Export/Import declarations</li>
              <li>• T1/T2 transit documents</li>
              <li>• Possible duties and taxes</li>
              <li>• Border inspections possible</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Transit Documents */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Transit Documents
        </h2>
        <DataTable
          headers={["Document", "Purpose", "When Required"]}
          rows={[
            ["T1 (External Transit)", "Non-EU goods moving through EU territory", "Import from non-EU, transit through EU"],
            ["T2 (Internal Transit)", "EU goods moving through non-EU territory", "EU goods transiting Switzerland/Norway"],
            ["TIR Carnet", "Simplified border crossing for sealed loads", "Long-distance transport through multiple countries"],
            ["ATA Carnet", "Temporary import of goods", "Trade fairs, samples, professional equipment"],
            ["EUR.1", "Proof of preferential origin", "Reduced/zero duties under trade agreements"],
          ]}
        />
      </section>

      {/* T1 Procedure */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          T1 Transit Procedure
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Opening the T1</h3>
                <p className="text-sm text-muted-foreground">
                  T1 is opened at the customs office of departure (port, border, or inland customs). 
                  Goods are placed under transit procedure with guarantee.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Transit Through EU</h3>
                <p className="text-sm text-muted-foreground">
                  Vehicle travels with customs seals intact. MRN (Movement Reference Number) 
                  is used to track the movement. Seals must NOT be broken.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Closing the T1</h3>
                <p className="text-sm text-muted-foreground">
                  T1 must be closed at destination customs within time limit (usually shown on document). 
                  Seals are checked and removed. Failure to close = guarantee called.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Borders */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          Key Border Crossings
        </h2>
        <DataTable
          headers={["Route", "Border Point", "Notes"]}
          rows={[
            ["EU ↔ UK", "Dover-Calais, Eurostar", "Post-Brexit: Full customs, GVMS required"],
            ["EU ↔ Switzerland", "Basel, Chiasso", "T2 transit, CH not in EU but Schengen"],
            ["EU ↔ Norway", "Svinesund, Ørje", "T2 transit, EEA but not EU customs union"],
            ["EU ↔ Turkey", "Kapıkule (BG)", "TIR or T1, lengthy border checks possible"],
            ["EU ↔ Ukraine", "Dorohusk (PL)", "Full customs, long queues possible"],
            ["EU ↔ Serbia", "Batrovci (HR)", "T1 required, Serbia not in EU"],
          ]}
        />
      </section>

      {/* UK Post-Brexit */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          UK Post-Brexit Requirements
        </h2>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Required Documents</h3>
              <ul className="space-y-2 text-sm">
                <li>• Export declaration (EU side)</li>
                <li>• Import declaration (UK side)</li>
                <li>• GVMS (Goods Vehicle Movement Service) registration</li>
                <li>• GMR (Goods Movement Reference)</li>
                <li>• Commercial invoice</li>
                <li>• Packing list</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Special Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Animal products: IPAFFS, health certificates</li>
                <li>• Plants: Phytosanitary certificates</li>
                <li>• Food: GB importer must be registered</li>
                <li>• Safety & Security declarations may apply</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customs Terminology */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Key Customs Terms
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3">Documents & Codes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>MRN:</strong> Movement Reference Number - tracking code for customs movements</li>
              <li><strong>EORI:</strong> Economic Operator Registration - required for customs activities</li>
              <li><strong>HS Code:</strong> Harmonized System - product classification code</li>
              <li><strong>SAD:</strong> Single Administrative Document - customs declaration form</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3">Procedures</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>AEO:</strong> Authorized Economic Operator - trusted trader status</li>
              <li><strong>Inward Processing:</strong> Import for processing, re-export</li>
              <li><strong>Customs Warehouse:</strong> Duty-free storage until released</li>
              <li><strong>Free Zone:</strong> Area with suspended customs duties</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Common Customs Issues
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-destructive">Problems to Avoid</h3>
              <ul className="space-y-2 text-sm">
                <li>• Broken or missing customs seals</li>
                <li>• Incorrect or incomplete documentation</li>
                <li>• Mismatch between declared and actual goods</li>
                <li>• Expired T1 transit (time limit exceeded)</li>
                <li>• Missing EORI number</li>
                <li>• Wrong HS codes declared</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-success">Best Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Verify all documents before departure</li>
                <li>• Check seal numbers match documents</li>
                <li>• Keep copies of all customs papers</li>
                <li>• Know the T1 deadline and route</li>
                <li>• Have customs agent contact ready</li>
                <li>• Allow extra time for border crossings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Time Estimates */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          Border Crossing Times
        </h2>
        <InfoCard title="Estimated Wait Times" icon={Clock} variant="info">
          <p className="text-sm text-muted-foreground mb-4">
            These are estimates only - actual times vary based on traffic, inspections, and time of day.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-1 text-sm">
              <li><strong>EU internal:</strong> 0 minutes (no border stops)</li>
              <li><strong>EU-UK Dover:</strong> 30 min - 4 hours</li>
              <li><strong>EU-Switzerland:</strong> 15-45 minutes</li>
            </ul>
            <ul className="space-y-1 text-sm">
              <li><strong>EU-Turkey:</strong> 2-8 hours</li>
              <li><strong>EU-Ukraine:</strong> 4-24+ hours</li>
              <li><strong>EU-Serbia:</strong> 1-3 hours</li>
            </ul>
          </div>
        </InfoCard>
      </section>

      {/* Quiz */}
      {quizzes.customs && (
        <Quiz title="Customs & Border Procedures Quiz" questions={quizzes.customs} chapterId="customs" />
      )}
    </div>
  );
}
