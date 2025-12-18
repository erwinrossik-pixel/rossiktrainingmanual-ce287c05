import { Checklist } from "../Checklist";
import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { FlowDiagram, DecisionDiagram } from "../FlowDiagram";
import { quizzes } from "@/data/quizData";
import { 
  Package, Camera, FileText, AlertTriangle, Shield, Truck, 
  CheckCircle2, Scale, Ruler, Target, Info, Clock, Users,
  Eye, Zap, AlertCircle, ArrowRight, XCircle, BookOpen
} from "lucide-react";

export function LoadingChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Loading & Cargo Securing SOP</h1>
        <p className="text-lg text-muted-foreground">
          Standard Operating Procedure for safe cargo loading and securing. This chapter covers 
          EU standards, best practices, weight distribution, and documentation requirements.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Package className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">Why Loading Matters</h2>
            <p className="text-muted-foreground mb-4">
              Improper loading is one of the leading causes of accidents, cargo damage, and regulatory fines 
              in road transport. A well-loaded vehicle is safer, more fuel-efficient, and protects your cargo. 
              Understanding loading principles is essential for every freight forwarder.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <p className="font-semibold text-destructive">25%</p>
                <p className="text-muted-foreground">of HGV accidents involve load shift</p>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg">
                <p className="font-semibold text-warning">€10,000+</p>
                <p className="text-muted-foreground">fines for improper securing</p>
              </div>
              <div className="p-3 bg-success/10 rounded-lg">
                <p className="font-semibold text-success">5-10%</p>
                <p className="text-muted-foreground">fuel savings with proper loading</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Flow Diagram */}
      <FlowDiagram
        title="Loading Process Flow"
        steps={[
          { id: "slot", label: "Confirm Slot", description: "Verify booking", color: "primary" },
          { id: "position", label: "Position", description: "Park & secure", color: "info" },
          { id: "inspect", label: "Inspect", description: "Check trailer", color: "warning" },
          { id: "load", label: "Load", description: "Distribute evenly", color: "success" },
          { id: "secure", label: "Secure", description: "EN 12195-1", color: "primary" },
          { id: "document", label: "Document", description: "Photos + CMR", color: "info" },
        ]}
      />

      {/* Decision Diagram */}
      <DecisionDiagram
        title="Damage Found at Loading?"
        question="Cargo damaged before loading?"
        yesPath={{
          label: "Document & Notify",
          result: "Note on CMR, take photos, contact dispatcher. DO NOT LOAD without approval."
        }}
        noPath={{
          label: "Proceed with Loading",
          result: "Continue standard loading procedure. Take photos of cargo in good condition."
        }}
      />

      {/* Step by Step Process */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          Loading Process Step-by-Step
        </h2>
        <div className="space-y-4">
          {[
            { 
              num: 1, 
              title: "Confirm Ramp Slot & Arrival", 
              desc: "Verify slot booking before arrival. Check PPE requirements, forklift availability, and any special instructions.",
              details: ["Call warehouse 1 hour before arrival", "Confirm dock/gate number", "Check if ADR area needed", "Verify appointment in TMS"]
            },
            { 
              num: 2, 
              title: "Position & Secure Vehicle", 
              desc: "Park level at the correct dock. Apply handbrake, secure wheels with chocks, place warning signs if required.",
              details: ["Engine off during loading", "Wheel chocks both sides", "Traffic cones if open area", "High-vis vest required"]
            },
            { 
              num: 3, 
              title: "Inspect Trailer Before Loading", 
              desc: "Check floor condition, headboard integrity, lash points, curtains/doors, and cleanliness.",
              details: ["No holes or damage in floor", "All straps/bars present", "Previous cargo residue cleaned", "No water damage or odors"]
            },
            { 
              num: 4, 
              title: "Verify Cargo Before Loading", 
              desc: "Check cargo condition, count pieces, verify labels match CMR. Document any pre-existing damage.",
              details: ["Count matches delivery note", "No visible damage", "Labels readable", "Correct product loaded"]
            },
            { 
              num: 5, 
              title: "Load Cargo Correctly", 
              desc: "Stow evenly, respect axle limits & center of gravity. Heavy items at bottom, against headboard.",
              details: ["Distribute weight evenly", "Heavy items low and forward", "No gaps between cargo", "Leave air circulation space"]
            },
            { 
              num: 6, 
              title: "Secure Cargo Properly", 
              desc: "Use straps, friction mats, edge protectors per EN 12195-1. Ensure nothing can shift.",
              details: ["Minimum 2 straps per pallet row", "Friction mats where needed", "Edge protectors on sharp edges", "Check all securing points"]
            },
            { 
              num: 7, 
              title: "Document Everything", 
              desc: "Take photos of loaded cargo from multiple angles. Include timestamps.",
              details: ["Photo before loading (empty)", "Photos during loading", "Photos after securing", "Close-up of any existing damage"]
            },
            { 
              num: 8, 
              title: "Complete Documentation", 
              desc: "Sign & archive CMR, get shipper signature, note any reservations.",
              details: ["CMR fully completed", "Weight confirmed", "Seal number recorded", "Departure time noted"]
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{step.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {step.details.map((detail, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded">{detail}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weight Distribution */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          Weight Distribution Principles
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Center of Gravity (CoG)</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The center of gravity should be as low and as central as possible. A high or offset CoG 
                increases rollover risk and makes the vehicle harder to control.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Golden Rules:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Heavy items at the bottom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Heavy items against headboard (forward)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Distribute evenly left to right</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Fill gaps to prevent shifting</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Axle Load Distribution</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Even if total weight is legal, exceeding individual axle limits is an offense. 
                Check axle loads after loading.
              </p>
              <DataTable
                headers={["Axle Type", "Max Load", "Check Point"]}
                rows={[
                  ["Front (steering)", "7.5t", "Should not be underloaded"],
                  ["Drive axle", "11.5t", "Key for traction"],
                  ["Trailer tandem", "18-20t", "Depends on spacing"],
                  ["Trailer tridem", "21-24t", "3-axle group"],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* EN 12195-1 Standards */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          EN 12195-1 Cargo Securing Standards
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground mb-4">
            European standard EN 12195-1 defines the minimum forces cargo securing must withstand. 
            These are expressed as percentages of the cargo weight.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-6 bg-destructive/10 rounded-lg text-center">
              <p className="text-4xl font-bold text-destructive">80%</p>
              <p className="text-sm text-muted-foreground mt-2">Forward restraint (0.8g)</p>
              <p className="text-xs text-muted-foreground">Emergency braking</p>
            </div>
            <div className="p-6 bg-warning/10 rounded-lg text-center">
              <p className="text-4xl font-bold text-warning">50%</p>
              <p className="text-sm text-muted-foreground mt-2">Sideways restraint (0.5g)</p>
              <p className="text-xs text-muted-foreground">Cornering / evasive maneuvers</p>
            </div>
            <div className="p-6 bg-info/10 rounded-lg text-center">
              <p className="text-4xl font-bold text-info">50%</p>
              <p className="text-sm text-muted-foreground mt-2">Backward restraint (0.5g)</p>
              <p className="text-xs text-muted-foreground">Acceleration / uphill</p>
            </div>
          </div>

          <h3 className="font-semibold mb-3">What This Means in Practice</h3>
          <p className="text-sm text-muted-foreground mb-4">
            For a 10-tonne load, securing must prevent:
          </p>
          <ul className="grid md:grid-cols-3 gap-4 text-sm">
            <li className="p-3 bg-muted/50 rounded-lg">
              <span className="font-medium">Forward:</span> 8 tonnes of force
            </li>
            <li className="p-3 bg-muted/50 rounded-lg">
              <span className="font-medium">Sideways:</span> 5 tonnes of force
            </li>
            <li className="p-3 bg-muted/50 rounded-lg">
              <span className="font-medium">Backward:</span> 5 tonnes of force
            </li>
          </ul>
        </div>
      </section>

      {/* Securing Equipment */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Package className="w-6 h-6 text-primary" />
          Securing Equipment Guide
        </h2>
        <DataTable
          headers={["Equipment", "Use For", "Lashing Capacity", "Important Notes"]}
          rows={[
            ["Ratchet straps", "Most cargo types", "1,500-5,000 daN", "Check webbing condition, no cuts or fraying"],
            ["Chains", "Heavy machinery, steel", "4,000-10,000 daN", "Use with corner protectors on soft materials"],
            ["Friction mats", "Pallets, boxes", "+50% friction coefficient", "Place under cargo, not between pallets"],
            ["Edge protectors", "Preventing strap damage", "N/A", "Mandatory for sharp edges, protects straps too"],
            ["Blocking boards", "Filling gaps", "N/A", "Prevent lateral movement"],
            ["Airbags (dunnage)", "Gap filling", "Varies", "Quick to install, single use"],
            ["Anti-slip paper", "Between layers", "+20% friction", "Cost-effective for light goods"],
            ["Headboard", "Forward blocking", "Up to 40% of load", "Must be EN 12642 certified for full use"],
          ]}
        />
      </section>

      {/* Code XL Standards */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          Code XL Trailer Structure (EN 12642)
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">What is Code XL?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                EN 12642 Code XL is a certification for trailer bodies that can withstand specified forces, 
                allowing cargo to be blocked against walls instead of tied down.
              </p>
              <div className="p-4 bg-success/10 rounded-lg">
                <h4 className="font-medium text-success mb-2">Code XL Benefits</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Faster loading (less strapping)</li>
                  <li>• Cargo blocked against walls counts as secured</li>
                  <li>• Reduced securing equipment needed</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Code XL Force Limits</h3>
              <DataTable
                headers={["Surface", "Force Resistance"]}
                rows={[
                  ["Front wall (headboard)", "40% of payload"],
                  ["Side walls", "30% of payload"],
                  ["Rear doors", "25% of payload"],
                  ["Roof", "Not load-bearing"],
                ]}
              />
              <p className="text-xs text-muted-foreground mt-2">
                <AlertTriangle className="w-3 h-3 inline mr-1" />
                Code XL does not eliminate need for securing – it reduces it for form-fit loads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Documentation */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Camera className="w-6 h-6 text-primary" />
          Photo Documentation Requirements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-info/5 rounded-xl border border-info/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Camera className="w-5 h-5 text-info" />
              When to Take Photos
            </h3>
            <div className="space-y-3">
              {[
                { stage: "Before loading", what: "Empty trailer interior, any existing damage" },
                { stage: "During loading", what: "Cargo placement, labels, condition" },
                { stage: "After loading", what: "Full load secured, from multiple angles" },
                { stage: "At delivery", what: "Before unloading, after unloading" },
                { stage: "Any damage", what: "Close-up of damage, context shot" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-info mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{item.stage}</p>
                    <p className="text-xs text-muted-foreground">{item.what}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-warning/5 rounded-xl border border-warning/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-warning" />
              Photo Quality Requirements
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Include timestamp (phone date/time)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Clear, well-lit images</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Show reference number/labels where possible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Multiple angles: front, side, rear</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Close-ups of securing equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <span>Avoid: blurry, dark, partial images</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Loading Mistakes */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Common Loading Mistakes & Solutions
        </h2>
        <DataTable
          headers={["Mistake", "Risk", "Solution", "Prevention"]}
          rows={[
            ["Overloaded axle", "Fine €5,000+, vehicle impounded", "Redistribute cargo", "Weigh after loading"],
            ["Cargo against curtain", "Curtain tear, cargo falls", "Leave gap or use blocking", "Never rely on curtain"],
            ["Missing straps", "Load shift, accident", "Always strap even if blocked", "Standard min 2 per row"],
            ["No friction mats", "50% less friction, movement", "Use mats under pallets", "Part of standard kit"],
            ["Wrong sequence", "Inefficient unloading", "Load in delivery order", "Plan loading sequence"],
            ["No edge protectors", "Strap cuts, load falls", "Use on all sharp edges", "Carry sufficient stock"],
            ["Insufficient photos", "No evidence for claims", "Photo everything", "Make it routine"],
            ["Unsigned CMR", "Liability unclear", "Always get signature", "Check before leaving"],
          ]}
        />
      </section>

      {/* Special Cargo Considerations */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Package className="w-6 h-6 text-primary" />
          Special Cargo Loading Requirements
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Steel Coils" icon={Package}>
            <ul className="space-y-1 text-sm">
              <li>• Use coil wells or wedges</li>
              <li>• Secure with chains, not straps</li>
              <li>• Eye horizontal = more stable</li>
              <li>• Check total and axle weight</li>
            </ul>
          </InfoCard>
          <InfoCard title="Machinery" icon={Package}>
            <ul className="space-y-1 text-sm">
              <li>• Secure at multiple points</li>
              <li>• Use chains for heavy items</li>
              <li>• Protect hydraulic lines</li>
              <li>• Document condition in detail</li>
            </ul>
          </InfoCard>
          <InfoCard title="Paper Rolls" icon={Package}>
            <ul className="space-y-1 text-sm">
              <li>• Standing: use anti-roll devices</li>
              <li>• Lying: block front and back</li>
              <li>• No stacking unless rated</li>
              <li>• Protect from moisture</li>
            </ul>
          </InfoCard>
          <InfoCard title="Beverages" icon={Package}>
            <ul className="space-y-1 text-sm">
              <li>• Heavy! Check axle limits</li>
              <li>• Shrink-wrapped pallets</li>
              <li>• No double-stacking unless rated</li>
              <li>• Temperature consideration</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <Checklist 
          title="Pre-Loading Checklist"
          items={[
            "Slot confirmed with warehouse",
            "PPE ready (vest, shoes, gloves)",
            "Trailer inspected & clean",
            "Floor dry and undamaged",
            "Securing equipment available",
            "CMR documents prepared",
            "Camera/phone charged for photos"
          ]}
        />
        <Checklist 
          title="Post-Loading Checklist"
          items={[
            "Cargo evenly distributed",
            "Axle loads within limits",
            "All items secured properly",
            "Photos taken with timestamp",
            "CMR signed by shipper",
            "Seal number recorded",
            "Doors/curtains closed & secure"
          ]}
        />
      </div>

      {/* Unloading Notes */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          Unloading Considerations
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Driver Responsibilities</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Do NOT open doors/curtains until safe</li>
                <li>• Check cargo has not shifted before opening</li>
                <li>• Stand clear when doors open</li>
                <li>• Take photos before unloading begins</li>
                <li>• Count pieces against CMR</li>
                <li>• Note any damage immediately</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Getting the POD Signed</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Receiver must sign CMR with date/time</li>
                <li>• Any damage: note on CMR before signing</li>
                <li>• Missing pieces: note "X pallets short"</li>
                <li>• Never leave without signed POD</li>
                <li>• If refused: note refusal, take photos, call dispatcher</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Loading & Securing" questions={quizzes.loading} chapterId="loading" />
    </div>
  );
}
