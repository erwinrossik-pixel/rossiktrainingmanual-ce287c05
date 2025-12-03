import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import {
  ClipboardList, Search, Calculator, Play, Package, 
  ArrowRight, CheckCircle2, AlertCircle
} from "lucide-react";

export function WorkflowChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Operational Workflow (End-to-End)</h1>
        <p className="text-lg text-muted-foreground">
          The complete process from customer request to delivery completion.
        </p>
      </div>

      {/* Visual Flow */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-6 bg-muted/50 rounded-xl">
        {[
          { icon: ClipboardList, label: "Intake" },
          { icon: Search, label: "Sourcing" },
          { icon: Calculator, label: "Costing" },
          { icon: Play, label: "Execution" },
          { icon: Package, label: "Delivery" },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <step.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium mt-1">{step.label}</span>
            </div>
            {i < 4 && <ArrowRight className="w-5 h-5 text-muted-foreground mx-2" />}
          </div>
        ))}
      </div>

      {/* 1. Intake */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
          Intake (Customer Request)
        </h2>
        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Gather Full Shipment Details:</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                "Pickup/delivery addresses",
                "Contact persons & phones",
                "Time windows",
                "Weight & pallets count",
                "Stackability",
                "Loading side (rear/side/top)",
                "Vehicle specification",
                "ADR (if needed)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-warning/5 rounded-lg border border-warning/20">
            <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <strong>Confirm Incoterms responsibilities:</strong>
              <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                <li>• Who loads/unloads?</li>
                <li>• Who secures the cargo?</li>
                <li>• Who pays waiting time?</li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground">
            <strong>Check feasibility:</strong> legal driving hours, toll country exposure, realistic transit times.
          </p>
        </div>
      </div>

      {/* 2. Capacity Sourcing */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
          Capacity Sourcing
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <h3 className="font-semibold mb-2">Priority Order:</h3>
            <ol className="space-y-2">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Own fleet</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Preferred carriers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary/60 text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Spot market (TIMOCOM / Trans.eu / Teleroute / Transporeon Spot)</span>
              </li>
            </ol>
          </div>
          <p className="text-muted-foreground">
            Use <strong>verified partners</strong>; store rating and docs. Keep all communication logged in TMS.
          </p>
        </div>
      </div>

      {/* 3. Costing & Quote */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
          Costing & Quote
        </h2>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">Base Cost Formula</h3>
              <p className="text-2xl font-mono text-primary">€1.10/km × total km</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">Typical Margin</h3>
              <p className="text-2xl font-mono text-primary">8–18%</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Add to base cost:</h3>
            <div className="flex flex-wrap gap-2">
              {["Tolls", "Ferries", "Accessorials", "Waiting time", "Border fees"].map((item) => (
                <span key={item} className="badge-info">+ {item}</span>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground">
            Provide both <strong>cost-optimized</strong> and <strong>express</strong> options. Document tolls per country in your lane template.
          </p>
        </div>
      </div>

      {/* 4. Execution */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
          Execution
        </h2>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-info/5 rounded-lg border border-info/20">
              <h3 className="font-semibold text-info mb-2">Plan Routes</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Include 45' breaks after 4h30 driving</li>
                <li>• Rest 11h/day or reduced 9h (max 3× between weekly rests)</li>
              </ul>
            </div>
            <div className="p-4 bg-success/5 rounded-lg border border-success/20">
              <h3 className="font-semibold text-success mb-2">Update Milestones</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Pickup confirmed</li>
                <li>• Border crossing</li>
                <li>• Rest stops</li>
                <li>• Delivery ETA</li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground font-medium">
            <AlertCircle className="inline w-4 h-4 mr-1 text-warning" />
            Communicate <strong>proactively</strong> about delays and mitigation options.
          </p>
        </div>
      </div>

      {/* 5. Delivery & Post-Trip */}
      <div className="info-card">
        <h2 className="section-title text-primary flex items-center gap-3">
          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
          Delivery & Post-Trip
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <Package className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Collect POD</h3>
            <p className="text-sm text-muted-foreground">Signed CMR/POD. Scan or upload via TMS.</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Calculate Margin</h3>
            <p className="text-sm text-muted-foreground">Compare actual vs planned (km, tolls, waiting).</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg text-center">
            <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Rate Carrier</h3>
            <p className="text-sm text-muted-foreground">Score carrier performance for future reference.</p>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Operational Workflow" questions={quizzes.workflow} chapterId="workflow" />
    </div>
  );
}
