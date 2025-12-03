import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Calculator, Euro, Route, TrendingUp } from "lucide-react";

export function PricingChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Pricing & Toll Logic</h1>
        <p className="text-lg text-muted-foreground">
          Cost calculation formulas and real-world pricing examples.
        </p>
      </div>

      {/* Main Formula */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-rossik-dark p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold mb-4 font-serif">Cost Calculation Formula</h2>
        <div className="bg-primary-foreground/10 p-4 rounded-lg font-mono text-lg mb-4">
          Cost = (km × €1.10) + Σ(tolls) + accessorials
        </div>
        <div className="bg-primary-foreground/10 p-4 rounded-lg font-mono text-lg">
          Price = Cost × (1 + margin%) <span className="text-primary-foreground/60">or</span> Cost + (€/km × km)
        </div>
        <Calculator className="absolute bottom-4 right-4 w-24 h-24 text-primary-foreground/10" />
      </div>

      {/* Key Rates */}
      <div className="grid md:grid-cols-3 gap-6">
        <InfoCard title="Base Rate" icon={Euro}>
          <p className="text-3xl font-bold text-primary">€1.10/km</p>
          <p className="text-sm">Standard calculation basis</p>
        </InfoCard>
        
        <InfoCard title="Target Margin" icon={TrendingUp}>
          <p className="text-3xl font-bold text-primary">8–18%</p>
          <p className="text-sm">Typical profit range</p>
        </InfoCard>
        
        <InfoCard title="Cost Components" icon={Calculator}>
          <div className="flex flex-wrap gap-1 text-xs">
            {["Base km", "Tolls", "Ferries", "Waiting", "Border fees"].map((item) => (
              <span key={item} className="badge-primary">{item}</span>
            ))}
          </div>
        </InfoCard>
      </div>

      {/* Toll Rates by Country */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-6 h-6 text-primary" />
          Toll Rates by Country (Approximate)
        </h2>
        <DataTable 
          headers={["Country", "Rate per km", "Notes"]}
          rows={[
            ["Germany (DE)", "~€0.45/km", "CO₂-based tiers since 2024"],
            ["France (FR)", "~€0.35/km", "Toll roads vary by operator"],
            ["Austria (AT)", "~€0.38/km", "GO-Box system"],
            ["Italy (IT)", "~€0.30/km", "Telepas recommended"],
            ["Switzerland (CH)", "Flat fee", "Annual vignette + LSVA"],
            ["Poland (PL)", "~€0.15/km", "e-TOLL system"],
            ["Czech Republic (CZ)", "~€0.18/km", "CzechToll OBU"],
          ]}
        />
        <p className="text-xs text-muted-foreground mt-3">
          Note: Rates vary by vehicle class, emission standard, and axle count. Always verify current rates.
        </p>
      </div>

      {/* Pricing Examples */}
      <div>
        <h2 className="section-title">Real-World Pricing Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Example 1 */}
          <div className="info-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <h3 className="font-semibold">Munich → Paris (~830 km)</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Base cost (830 × €1.10)</span>
                <span className="font-medium">€913</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>DE toll (150km × €0.45)</span>
                <span className="font-medium">€68</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>FR toll (680km × €0.35)</span>
                <span className="font-medium">€238</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold text-primary">€1,219</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold text-success">Offer Price</span>
                <span className="font-bold text-success">€1,350–1,420</span>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="info-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <h3 className="font-semibold">Vienna → Milan (~810 km)</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Base cost (810 × €1.10)</span>
                <span className="font-medium">€891</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>AT toll (70km × €0.38)</span>
                <span className="font-medium">€27</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>IT toll (740km × €0.30)</span>
                <span className="font-medium">€222</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold text-primary">€1,140</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold text-success">Offer Price</span>
                <span className="font-bold text-success">€1,270–1,340</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="highlight-card">
        <h3 className="font-semibold mb-3">💡 Pricing Pro Tips</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Store toll splits in your TMS lane templates for quick quotes</li>
          <li>• Always verify Germany's 2024 CO₂ toll tiers – rates depend on axle count & emission class</li>
          <li>• Don't accept cheap FR lanes without full toll analysis</li>
          <li>• Offer both economy (longer route, lower tolls) and express options</li>
          <li>• Add waiting time fees upfront in your quote terms</li>
        </ul>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Pricing & Tolls" questions={quizzes.pricing} chapterId="pricing" />
    </div>
  );
}
