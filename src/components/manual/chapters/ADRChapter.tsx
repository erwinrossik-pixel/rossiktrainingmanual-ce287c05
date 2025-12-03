import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { AlertTriangle, FileText, Truck, Shield, Book, CheckCircle, XCircle, Flame } from "lucide-react";

export function ADRChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 to-orange-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Flame className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            ADR - Dangerous Goods
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            European Agreement concerning the International Carriage of Dangerous Goods by Road.
          </p>
        </div>
      </div>

      {/* What is ADR */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Book className="w-6 h-6 text-primary" />
          What is ADR?
        </h2>
        <InfoCard title="ADR Overview" icon={FileText} variant="info">
          <p className="mb-4">
            ADR (Accord européen relatif au transport international des marchandises Dangereuses par Route) is the European agreement concerning the international carriage of dangerous goods by road. It applies to all cross-border dangerous goods transport in Europe.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">54</p>
              <p className="text-sm">Contracting countries</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">9</p>
              <p className="text-sm">Hazard classes</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary">2 years</p>
              <p className="text-sm">Update cycle</p>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* ADR Classes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" />
          ADR Hazard Classes
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">Class</th>
                <th className="p-3 text-left border border-border">Description</th>
                <th className="p-3 text-left border border-border">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-bold">Class 1</td>
                <td className="p-3 border border-border">Explosives</td>
                <td className="p-3 border border-border text-sm">Fireworks, ammunition, flares</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-bold">Class 2</td>
                <td className="p-3 border border-border">Gases</td>
                <td className="p-3 border border-border text-sm">LPG, aerosols, compressed oxygen</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-bold">Class 3</td>
                <td className="p-3 border border-border">Flammable liquids</td>
                <td className="p-3 border border-border text-sm">Petrol, diesel, paints, alcohol</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-bold">Class 4</td>
                <td className="p-3 border border-border">Flammable solids</td>
                <td className="p-3 border border-border text-sm">Matches, sulfur, metal powders</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-bold">Class 5</td>
                <td className="p-3 border border-border">Oxidizing substances</td>
                <td className="p-3 border border-border text-sm">Hydrogen peroxide, fertilizers</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-bold">Class 6</td>
                <td className="p-3 border border-border">Toxic & infectious</td>
                <td className="p-3 border border-border text-sm">Pesticides, medical waste</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-bold">Class 7</td>
                <td className="p-3 border border-border">Radioactive</td>
                <td className="p-3 border border-border text-sm">Medical isotopes, uranium</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border font-bold">Class 8</td>
                <td className="p-3 border border-border">Corrosives</td>
                <td className="p-3 border border-border text-sm">Acids, batteries, bleach</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-bold">Class 9</td>
                <td className="p-3 border border-border">Miscellaneous</td>
                <td className="p-3 border border-border text-sm">Lithium batteries, dry ice, asbestos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ADR Requirements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          ADR Transport Requirements
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Driver Requirements" icon={Shield} variant="warning">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>ADR Certificate</strong> - Valid driver training certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Training</strong> - Class-specific for certain goods</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Equipment</strong> - PPE appropriate to cargo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Knowledge</strong> - Emergency procedures</span>
              </li>
            </ul>
          </InfoCard>
          <InfoCard title="Vehicle Requirements" icon={Truck} variant="info">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>ADR Certificate</strong> - Vehicle approval certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Placards</strong> - Correct hazard diamonds displayed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Equipment</strong> - Fire extinguishers, warning signs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Orange plates</strong> - UN numbers visible</span>
              </li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Required Documents */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Required ADR Documents
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary">Always Required</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Transport document (CMR with DG details)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Driver's ADR training certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Instructions in writing (safety data)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Photo ID for driver</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-warning">When Applicable</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>Vehicle ADR approval certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>Special permits (tunnels, countries)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>Container packing certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                  <span>Exemption certificates (if applicable)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Quantities Exception */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Limited Quantities (LQ) Exception
        </h2>
        <InfoCard title="When Full ADR Doesn't Apply" icon={CheckCircle} variant="success">
          <p className="mb-4">
            Small quantities of dangerous goods packed in small inner packagings may be transported under simplified "Limited Quantities" rules.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">LQ Requirements:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Inner packaging ≤ specified limit (varies by UN number)</li>
                <li>• Gross weight per package ≤ 30kg</li>
                <li>• Proper LQ marking on packages</li>
                <li>• No ADR placards needed on vehicle</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Still Required:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Proper packaging</li>
                <li>• LQ diamond marking</li>
                <li>• Transport document</li>
                <li>• General safety training</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Common Mistakes */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <XCircle className="w-6 h-6 text-primary" />
          Common ADR Mistakes
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { mistake: "Mixing incompatible goods", consequence: "Chemical reaction, fire, explosion" },
            { mistake: "Missing/incorrect placards", consequence: "Fines €5,000+, vehicle impounded" },
            { mistake: "Driver without ADR certificate", consequence: "Driver liability, transport stopped" },
            { mistake: "Incorrect UN number declaration", consequence: "Wrong emergency response" },
            { mistake: "Tunnel restrictions ignored", consequence: "Fines, route re-planning needed" },
            { mistake: "Expired ADR vehicle certificate", consequence: "Transport prohibited" },
          ].map((item, index) => (
            <div key={index} className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                <div>
                  <p className="font-semibold">{item.mistake}</p>
                  <p className="text-sm text-muted-foreground mt-1">→ {item.consequence}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADR Checklist */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary" />
          Pre-Transport ADR Checklist
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "UN number and proper shipping name confirmed",
              "Packing group identified (I, II, or III)",
              "Driver has valid ADR certificate for class",
              "Vehicle ADR approval valid (if required)",
              "Correct placards and orange plates",
              "Instructions in writing in driver's language",
              "Emergency equipment on board",
              "Tunnel category checked for route",
              "No prohibited combinations loaded",
              "Transport document complete and correct"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info Box */}
      <section>
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            Important Note
          </h3>
          <p className="text-sm">
            ADR is complex and updated every 2 years. This chapter provides an overview for freight forwarders. 
            For actual ADR shipments, always verify current regulations and consult with your DGSA 
            (Dangerous Goods Safety Adviser) if your company handles ADR goods regularly.
          </p>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.adr && (
        <Quiz title="ADR Dangerous Goods Quiz" questions={quizzes.adr} />
      )}
    </div>
  );
}
