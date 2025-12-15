import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Calculator, Euro, Route, TrendingUp, Calendar, AlertTriangle, Percent, MapPin } from "lucide-react";

export function PricingChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Pricing & Toll Logic</h1>
        <p className="text-lg text-muted-foreground">
          Cost calculation formulas, real-world pricing examples, margin strategies, and seasonal variations.
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

      {/* Toll Rates by Country - 2026 */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-6 h-6 text-primary" />
          Toll Rates by Country — 2026 (Euro VI / 24t / 5+ axle)
        </h2>
        <DataTable 
          headers={["Country", "Rate per km", "System / Notes"]}
          rows={[
            ["🇩🇪 Germany (DE)", "€0.348/km", "LKW-Maut > 18t, 5+ axle, CO₂ Class 1 (Euro VI)"],
            ["🇦🇹 Austria (AT)", "€0.532/km", "GO-Maut Euro VI, CO₂ Class 1, 4+ axle (ASFINAG 2025)"],
            ["🇧🇪 Belgium (BE)", "€0.171/km", "Viapass Euro 6, 12–32t, autoroute (Flanders/Brussels); Wallonia ≈ €0.163/km"],
            ["🇳🇱 Netherlands (NL)", "€0.159/km", "Vrachtwagenheffing (18–32t, Euro 6) from 01.07.2026"],
            ["🇵🇱 Poland (PL)", "€0.092/km", "e-TOLL 2025: 0.40 PLN/km (autoroute) × 0.23€"],
            ["🇭🇺 Hungary (HU)", "€0.425/km", "HU-GO 2026: 163.26 HUF/km (J4 ≥ 4 axle)"],
            ["🇨🇭 Switzerland (CH)", "€0.55/km", "LSVA Euro 6 = 0.0239 CHF/tkm × 24t"],
            ["🇫🇷 France (FR)", "€0.28–0.33/km", "Varies by concessionaire (ASF, Sanef, APRR etc.)"],
            ["🇮🇹 Italy (IT)", "€0.30/km", "Private autoroutes (A1, A4, Autostrade per l'Italia)"],
            ["🇪🇸 Spain (ES)", "€0.28–0.31/km", "Only some autoroutes tolled (regional concessionaires)"],
            ["🇨🇿 Czech Republic (CZ)", "€0.26/km", "MYTO CZ 2025 Euro VI > 12t, 5 axle"],
            ["🇸🇮 Slovenia (SI)", "€0.24/km", "DarsGo Euro VI > 3.5t – A1/A2 autoroute sections"],
          ]}
        />
        <p className="text-xs text-muted-foreground mt-3">
          Note: Rates for Euro VI, CO₂ Class 1, 24t, 5+ axles. Rates vary by vehicle class, emission standard, and axle count. Always verify current rates with official toll operator.
        </p>
      </div>

      {/* Extended Route Examples */}
      <div>
        <h2 className="section-title flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          Comprehensive Route Pricing Examples
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Example 1 - Munich → Paris */}
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
                <span>🇩🇪 DE toll (150km × €0.348)</span>
                <span className="font-medium">€52</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇫🇷 FR toll (680km × €0.30)</span>
                <span className="font-medium">€204</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold text-primary">€1,169</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold text-success">Offer Price (12%)</span>
                <span className="font-bold text-success">€1,309</span>
              </div>
            </div>
          </div>

          {/* Example 2 - Vienna → Milan */}
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
                <span>🇦🇹 AT toll (70km × €0.532)</span>
                <span className="font-medium">€37</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇮🇹 IT toll (740km × €0.30)</span>
                <span className="font-medium">€222</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold text-primary">€1,150</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold text-success">Offer Price (15%)</span>
                <span className="font-bold text-success">€1,323</span>
              </div>
            </div>
          </div>

          {/* Example 3 - Rotterdam → Barcelona */}
          <div className="info-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <h3 className="font-semibold">Rotterdam → Barcelona (~1,450 km)</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Base cost (1450 × €1.10)</span>
                <span className="font-medium">€1,595</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇳🇱 NL toll (150km × €0.159)</span>
                <span className="font-medium">€24</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇧🇪 BE toll (150km × €0.171)</span>
                <span className="font-medium">€26</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇫🇷 FR toll (850km × €0.30)</span>
                <span className="font-medium">€255</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇪🇸 ES toll (300km × €0.29)</span>
                <span className="font-medium">€87</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold text-primary">€1,987</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold text-success">Offer Price (10%)</span>
                <span className="font-bold text-success">€2,186</span>
              </div>
            </div>
          </div>

          {/* Example 4 - Hamburg → Warsaw */}
          <div className="info-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <h3 className="font-semibold">Hamburg → Warsaw (~680 km)</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Base cost (680 × €1.10)</span>
                <span className="font-medium">€748</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇩🇪 DE toll (380km × €0.348)</span>
                <span className="font-medium">€132</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇵🇱 PL toll (300km × €0.092)</span>
                <span className="font-medium">€28</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold text-primary">€908</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold text-success">Offer Price (14%)</span>
                <span className="font-bold text-success">€1,035</span>
              </div>
            </div>
          </div>

          {/* Example 5 - Prague → Lyon */}
          <div className="info-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <h3 className="font-semibold">Prague → Lyon (~1,100 km)</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Base cost (1100 × €1.10)</span>
                <span className="font-medium">€1,210</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇨🇿 CZ toll (100km × €0.26)</span>
                <span className="font-medium">€26</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇩🇪 DE toll (400km × €0.348)</span>
                <span className="font-medium">€139</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇫🇷 FR toll (600km × €0.30)</span>
                <span className="font-medium">€180</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold text-primary">€1,555</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold text-success">Offer Price (11%)</span>
                <span className="font-bold text-success">€1,726</span>
              </div>
            </div>
          </div>

          {/* Example 6 - Budapest → Amsterdam */}
          <div className="info-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <h3 className="font-semibold">Budapest → Amsterdam (~1,320 km)</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Base cost (1320 × €1.10)</span>
                <span className="font-medium">€1,452</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇭🇺 HU toll (200km × €0.425)</span>
                <span className="font-medium">€85</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇦🇹 AT toll (150km × €0.532)</span>
                <span className="font-medium">€80</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇩🇪 DE toll (700km × €0.348)</span>
                <span className="font-medium">€244</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span>🇳🇱 NL toll (270km × €0.159)</span>
                <span className="font-medium">€43</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border bg-muted/50 px-2 rounded">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold text-primary">€1,904</span>
              </div>
              <div className="flex justify-between py-2 px-2 bg-success/10 rounded">
                <span className="font-semibold text-success">Offer Price (13%)</span>
                <span className="font-bold text-success">€2,152</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Margin Calculation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Percent className="w-6 h-6 text-primary" />
          Detailed Margin Calculation Strategy
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Margin Tiers by Lane Type</h3>
            <DataTable
              headers={["Lane Type", "Target Margin", "Reasoning"]}
              rows={[
                ["Regular/Spot", "10-15%", "Standard market rate"],
                ["Dedicated/Contract", "8-12%", "Volume security"],
                ["Premium/Express", "15-20%", "Time-critical service"],
                ["Return Load", "5-10%", "Better than empty run"],
                ["New Customer", "12-18%", "Test reliability first"],
                ["Long-term Partner", "8-12%", "Relationship value"],
              ]}
            />
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Margin Adjustment Factors</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Tight delivery window (±2h)</span>
                <span className="text-success font-medium">+3-5%</span>
              </li>
              <li className="flex justify-between">
                <span>Weekend/Holiday loading</span>
                <span className="text-success font-medium">+5-8%</span>
              </li>
              <li className="flex justify-between">
                <span>ADR cargo handling</span>
                <span className="text-success font-medium">+8-15%</span>
              </li>
              <li className="flex justify-between">
                <span>Reefer transport</span>
                <span className="text-success font-medium">+10-20%</span>
              </li>
              <li className="flex justify-between">
                <span>Multi-stop delivery</span>
                <span className="text-success font-medium">+€50-100/stop</span>
              </li>
              <li className="flex justify-between">
                <span>Express (same day)</span>
                <span className="text-success font-medium">+25-40%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">💡 Margin Calculation Example</h4>
          <div className="font-mono text-sm space-y-1">
            <p>Route: Munich → Paris (Standard)</p>
            <p>Base Cost: €1,219</p>
            <p>Target Margin: 12%</p>
            <p>Adjustment: Weekend loading (+5%)</p>
            <p className="border-t border-border pt-2 mt-2">
              <span className="text-muted-foreground">Final Price = €1,219 × (1 + 0.12 + 0.05) = </span>
              <span className="text-primary font-bold">€1,426</span>
            </p>
          </div>
        </div>
      </div>

      {/* Seasonal Price Variations */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          Seasonal Price Variations
        </h2>
        
        <DataTable
          headers={["Period", "Price Impact", "Reason", "Strategy"]}
          rows={[
            ["January-February", "-5 to -10%", "Post-holiday slowdown", "Accept lower margins, focus on volume"],
            ["March-April", "Baseline", "Normal market activity", "Standard pricing applies"],
            ["May-June", "+5 to +10%", "Pre-summer peak, agriculture", "Increase margins on produce lanes"],
            ["July-August", "-5% to +5%", "Holiday season, mixed demand", "Focus on reliable customers"],
            ["September-October", "+10 to +15%", "Q4 preparation, harvest season", "Premium pricing justified"],
            ["November", "+15 to +25%", "Black Friday, pre-Christmas rush", "Maximum margin period"],
            ["December (1-15)", "+20 to +30%", "Christmas logistics peak", "Highest demand, premium rates"],
            ["December (16-31)", "-10 to -20%", "Industry shutdown", "Minimal operations, spot rates"],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Peak Season Alert
            </h4>
            <p className="text-sm">September-November: Book capacity early, rates increase weekly. Don't commit to fixed prices for more than 2 weeks.</p>
          </div>
          
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h4 className="font-semibold text-info mb-2">🌡️ Temperature Impact</h4>
            <p className="text-sm">Reefer transport: +20-30% in summer due to higher demand and increased fuel consumption for cooling.</p>
          </div>
          
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">💰 Best Value Period</h4>
            <p className="text-sm">January-February: Negotiate annual contracts during slow period for better carrier rates.</p>
          </div>
        </div>
      </div>

      {/* Country-Specific Seasonal Patterns */}
      <div className="info-card">
        <h2 className="section-title">Regional Seasonal Patterns</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">🇪🇸 Spain / 🇮🇹 Italy</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>March-June:</strong> Fruit/vegetable export peak (+15-25%)</li>
              <li>• <strong>August:</strong> Factory closures, reduced capacity</li>
              <li>• <strong>September:</strong> Wine harvest transport surge</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">🇩🇪 Germany / 🇳🇱 Netherlands</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>March-April:</strong> Easter retail preparation</li>
              <li>• <strong>September:</strong> IAA/trade fair logistics</li>
              <li>• <strong>October-November:</strong> Christmas goods distribution</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">🇵🇱 Poland / 🇨🇿 Czech Republic</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Year-round:</strong> Competitive rates for EU distribution</li>
              <li>• <strong>Summer:</strong> Agricultural export season</li>
              <li>• <strong>Q4:</strong> Automotive parts surge</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">🇫🇷 France</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>May-June:</strong> Wine region transport peak</li>
              <li>• <strong>August:</strong> Reduced capacity (holidays)</li>
              <li>• <strong>November:</strong> Beaujolais Nouveau rush</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accessorial Charges Reference */}
      <div className="info-card">
        <h2 className="section-title">Standard Accessorial Charges</h2>
        <DataTable
          headers={["Service", "Typical Rate", "When to Apply"]}
          rows={[
            ["Waiting time", "€35-50/hour", "After 2h free loading/unloading"],
            ["Overnight parking", "€50-100/night", "Secure parking required"],
            ["ADR surcharge", "€100-300", "Dangerous goods classes"],
            ["Tail-lift usage", "€25-50", "Per loading/unloading"],
            ["Weekend delivery", "€100-200", "Saturday/Sunday operations"],
            ["Express/Priority", "+25-40%", "Same-day or next-day guarantee"],
            ["Multi-drop", "€50-100/stop", "Additional delivery points"],
            ["Pallet exchange", "€10-15/pallet", "If not pre-arranged"],
            ["CMR documentation", "€15-25", "Special documentation needs"],
            ["Temperature recording", "€30-50", "Reefer printout required"],
          ]}
        />
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
          <li>• <strong>Track fuel prices weekly</strong> – adjust base rate ±5% based on diesel fluctuations</li>
          <li>• <strong>Review carrier rates quarterly</strong> – market conditions change</li>
          <li>• <strong>Build seasonal surcharge clauses</strong> into annual contracts</li>
        </ul>
      </div>

      {/* Quick Reference Card */}
      <div className="bg-gradient-to-r from-rossik-dark to-primary p-6 rounded-2xl text-primary-foreground">
        <h3 className="font-bold text-xl mb-4">⚡ Quick Pricing Reference</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div className="bg-primary-foreground/10 p-3 rounded-lg">
            <p className="font-semibold">Base Rate</p>
            <p className="text-2xl font-bold">€1.10/km</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg">
            <p className="font-semibold">Target Margin</p>
            <p className="text-2xl font-bold">10-15%</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg">
            <p className="font-semibold">Peak Season</p>
            <p className="text-2xl font-bold">+15-25%</p>
          </div>
          <div className="bg-primary-foreground/10 p-3 rounded-lg">
            <p className="font-semibold">Waiting Fee</p>
            <p className="text-2xl font-bold">€40/h</p>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Pricing & Tolls" questions={quizzes.pricing} chapterId="pricing" />
    </div>
  );
}