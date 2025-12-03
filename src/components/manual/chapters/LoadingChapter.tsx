import { Checklist } from "../Checklist";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Package, Camera, FileText, AlertTriangle, Shield } from "lucide-react";

export function LoadingChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Loading & Cargo Securing SOP</h1>
        <p className="text-lg text-muted-foreground">
          Standard Operating Procedure for safe cargo loading and securing.
        </p>
      </div>

      {/* Step by Step */}
      <div className="space-y-4">
        {[
          { num: 1, title: "Confirm Ramp Slot", desc: "Verify slot booking, check PPE requirements, confirm forklift access." },
          { num: 2, title: "Position & Secure Vehicle", desc: "Park level, apply handbrake, secure wheels with chocks." },
          { num: 3, title: "Inspect Trailer", desc: "Check floor condition, headboard, lash points, curtains integrity." },
          { num: 4, title: "Load Cargo", desc: "Stow evenly, respect axle limits & center of gravity (CoG)." },
          { num: 5, title: "Secure Cargo", desc: "Use straps, friction mats, edge protectors per EN 12195-1." },
          { num: 6, title: "Document Everything", desc: "Take photos of loaded cargo for insurance/audit purposes." },
          { num: 7, title: "Complete CMR", desc: "Sign & archive CMR (digital if possible), get shipper signature." },
        ].map((step) => (
          <div key={step.num} className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-card">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
              {step.num}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Important Notes */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-warning/5 rounded-xl border border-warning/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Weight Distribution</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Keep CoG as low as possible</li>
                <li>• Distribute weight evenly</li>
                <li>• Check axle load limits</li>
                <li>• Heavier items at bottom</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 bg-info/5 rounded-xl border border-info/20">
          <div className="flex items-start gap-3">
            <Camera className="w-6 h-6 text-info flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Photo Documentation</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Before loading (empty trailer)</li>
                <li>• During loading (placement)</li>
                <li>• After loading (final state)</li>
                <li>• Include timestamp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Securing Standards */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          EN 12195-1 Securing Requirements
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <p className="text-3xl font-bold text-primary">80%</p>
            <p className="text-sm text-muted-foreground">Forward restraint (0.8g)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <p className="text-3xl font-bold text-primary">50%</p>
            <p className="text-sm text-muted-foreground">Sideways restraint (0.5g)</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <p className="text-3xl font-bold text-primary">50%</p>
            <p className="text-sm text-muted-foreground">Backward restraint (0.5g)</p>
          </div>
        </div>
      </div>

      {/* Quick Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <Checklist 
          title="Pre-Loading Checklist"
          items={[
            "Slot confirmed with warehouse",
            "PPE ready (vest, shoes, gloves)",
            "Trailer inspected & clean",
            "Securing equipment available",
            "CMR documents prepared"
          ]}
        />
        <Checklist 
          title="Post-Loading Checklist"
          items={[
            "Cargo evenly distributed",
            "All items secured properly",
            "Photos taken with timestamp",
            "CMR signed by shipper",
            "Doors/curtains closed & sealed"
          ]}
        />
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Loading & Securing" questions={quizzes.loading} chapterId="loading" />
    </div>
  );
}
