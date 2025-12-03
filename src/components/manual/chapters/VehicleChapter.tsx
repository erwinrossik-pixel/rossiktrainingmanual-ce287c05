import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Truck, Ruler, Weight, Package, Shield, CheckCircle2 } from "lucide-react";

export function VehicleChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Vehicle Reference – 13.6m Curtainsider</h1>
        <p className="text-lg text-muted-foreground">
          Technical specifications and checkpoints for the standard European trailer.
        </p>
      </div>

      {/* Visual Specs */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sidebar to-sidebar/80 p-8 text-sidebar-foreground">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <Ruler className="w-10 h-10 mx-auto mb-3 text-sidebar-primary" />
            <p className="text-3xl font-bold">13.6m</p>
            <p className="text-sm text-sidebar-foreground/70">Length</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl text-sidebar-primary">W</span>
            </div>
            <p className="text-3xl font-bold">2.48m</p>
            <p className="text-sm text-sidebar-foreground/70">Width</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl text-sidebar-primary">H</span>
            </div>
            <p className="text-3xl font-bold">2.9–3.2m</p>
            <p className="text-sm text-sidebar-foreground/70">Height</p>
          </div>
          <div className="text-center">
            <Package className="w-10 h-10 mx-auto mb-3 text-sidebar-primary" />
            <p className="text-3xl font-bold">~33</p>
            <p className="text-sm text-sidebar-foreground/70">EUR Pallets</p>
          </div>
        </div>
        <Truck className="absolute -bottom-4 -right-4 w-40 h-40 text-sidebar-foreground/5" />
      </div>

      {/* Key Specs */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title="Payload Capacity" icon={Weight}>
          <p className="text-2xl font-bold text-primary">24–29 tonnes</p>
          <p className="text-sm">Depending on truck/trailer specification</p>
        </InfoCard>
        
        <InfoCard title="Volume Capacity" icon={Package}>
          <p className="text-2xl font-bold text-primary">~99–105 m³</p>
          <p className="text-sm">Standard curtainsider/tautliner</p>
        </InfoCard>
      </div>

      {/* Securing Requirements */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          Cargo Securing Standards
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2">Code XL Structure</h3>
            <p className="text-sm text-muted-foreground">EN 12642 certified structure for blocking against side walls</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2">Securing Equipment</h3>
            <p className="text-sm text-muted-foreground">Straps, friction mats, edge protectors (EN 12195-1)</p>
          </div>
        </div>
      </div>

      {/* Checkpoints */}
      <div className="info-card">
        <h2 className="section-title">Loading Checkpoints</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[
            { title: "Loading Method", desc: "Side / Top / Rear" },
            { title: "Forklift Access", desc: "Verify ramp & height" },
            { title: "Weight Distribution", desc: "Axle limits & CoG" },
            { title: "Equipment", desc: "Straps & protectors ready" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-accent rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Vehicle Reference" questions={quizzes.vehicle} chapterId="vehicle" />
    </div>
  );
}
