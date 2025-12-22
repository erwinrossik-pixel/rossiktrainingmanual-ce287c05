import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Link, Factory, Truck, Package, BarChart3, Users, Globe, TrendingUp, CheckCircle2, AlertTriangle, ArrowRight, Zap, Target } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function SupplyChainChapter() {
  const { ct } = useChapterTranslation("supply-chain");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Link className="w-6 h-6 text-primary" />
          {ct("whatIsSupplyChain")}
        </h2>
        <p className="text-muted-foreground mb-4">
          {ct("whatIsSupplyChainDesc")}
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap p-4 bg-background rounded-lg">
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Factory className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs">{ct("supplier")}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Factory className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs">{ct("manufacturer")}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <div className="text-center p-3 bg-primary/20 rounded-lg border-2 border-primary">
            <Truck className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs font-medium">{ct("freight")}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Package className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs">{ct("warehouse")}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Users className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-xs">{ct("customer")}</p>
          </div>
        </div>
      </div>

      {/* Supply Chain Types */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          Types of Supply Chains
        </h2>

        <DataTable
          headers={["Type", "Characteristics", "Logistics Needs", "Examples"]}
          rows={[
            ["Lean/Efficient", "Low inventory, JIT delivery, cost focus", "Reliable, predictable transport", "Automotive, electronics assembly"],
            ["Agile/Responsive", "Fast response, flexible, demand-driven", "Speed, flexibility, express options", "Fashion, e-commerce"],
            ["Risk-Hedging", "Buffer stock, multiple sources", "Redundant routes, secure transport", "Pharma, critical components"],
            ["Continuous", "Steady flow, commodity products", "Bulk transport, consistent capacity", "Food processing, chemicals"],
            ["Make-to-Order", "Custom products, variable demand", "Flexible scheduling, partial loads", "Industrial equipment, furniture"],
          ]}
        />
      </div>

      {/* Freight Forwarder's Role */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          The Freight Forwarder's Role in Supply Chains
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Core Functions</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Coordination:</strong> Connecting supply chain parties</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Optimization:</strong> Finding best routes and modes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Consolidation:</strong> Combining shipments for efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Documentation:</strong> Managing compliance and paperwork</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Risk Management:</strong> Insurance, tracking, security</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Value-Added Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>Cross-docking and transshipment</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>Pick and pack services</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>Customs brokerage</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>Inventory management</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span>Returns/reverse logistics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Just-in-Time */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          Just-in-Time (JIT) Logistics
        </h2>

        <p className="text-muted-foreground mb-4">
          JIT is a production strategy where materials arrive exactly when needed, minimizing inventory costs. It demands highly reliable transport.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">JIT Benefits</h4>
            <ul className="text-sm space-y-1">
              <li>• Reduced inventory holding costs</li>
              <li>• Less warehouse space needed</li>
              <li>• Lower working capital requirements</li>
              <li>• Faster identification of quality issues</li>
              <li>• More responsive to demand changes</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">JIT Transport Challenges</h4>
            <ul className="text-sm space-y-1">
              <li>• Zero tolerance for delays</li>
              <li>• Requires precise scheduling</li>
              <li>• Higher per-unit transport cost</li>
              <li>• Vulnerable to disruptions</li>
              <li>• Needs excellent communication</li>
            </ul>
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">JIT Transport Requirements</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Reliability:</strong> 99%+ on-time delivery required</li>
            <li>• <strong>Flexibility:</strong> Ability to adjust schedules quickly</li>
            <li>• <strong>Communication:</strong> Real-time tracking and updates</li>
            <li>• <strong>Backup Plans:</strong> Alternative carriers ready if issues arise</li>
          </ul>
        </div>
      </div>

      {/* Industry-Specific */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Factory className="w-6 h-6 text-primary" />
          Industry-Specific Supply Chain Needs
        </h2>

        <DataTable
          headers={["Industry", "Key Requirements", "Transport Challenges", "Critical Success Factors"]}
          rows={[
            ["Automotive", "JIT, sequenced delivery, line-side", "Exact timing, damage prevention", "Reliability, EDI integration"],
            ["Retail/FMCG", "High volume, seasonal peaks, DC network", "Peak capacity, reverse logistics", "Cost efficiency, scalability"],
            ["Pharma", "GDP compliance, cold chain, security", "Temperature control, documentation", "Compliance, traceability"],
            ["E-commerce", "Fast, flexible, last-mile focus", "Speed, returns handling", "Speed, visibility, flexibility"],
            ["Industrial", "Heavy goods, project logistics", "Specialized equipment, permits", "Technical expertise, planning"],
            ["Food & Beverage", "Temperature control, shelf life", "Cold chain, handling care", "Freshness, compliance"],
          ]}
        />
      </div>

      {/* Supply Chain Visibility */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          Supply Chain Visibility
        </h2>

        <p className="text-muted-foreground mb-4">
          Modern supply chains demand real-time visibility. Freight forwarders play a key role in providing tracking data and predictive insights.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title="Track & Trace" icon={TrendingUp}>
            <ul className="text-sm space-y-1">
              <li>• Real-time shipment location</li>
              <li>• Status milestones</li>
              <li>• ETA predictions</li>
              <li>• Exception alerts</li>
            </ul>
          </InfoCard>
          <InfoCard title="Predictive Analytics" icon={BarChart3}>
            <ul className="text-sm space-y-1">
              <li>• Delay risk assessment</li>
              <li>• Demand forecasting</li>
              <li>• Capacity planning</li>
              <li>• Cost optimization</li>
            </ul>
          </InfoCard>
          <InfoCard title="Integration" icon={Link}>
            <ul className="text-sm space-y-1">
              <li>• EDI connections</li>
              <li>• API data sharing</li>
              <li>• Customer portal access</li>
              <li>• ERP integration</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Supply Chain Disruptions */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Supply Chain Disruptions
        </h2>

        <DataTable
          headers={["Disruption Type", "Examples", "Impact", "Mitigation"]}
          rows={[
            ["Natural Disasters", "Floods, earthquakes, severe weather", "Route closures, facility damage", "Alternative routes, safety stock"],
            ["Geopolitical", "Wars, sanctions, border closures", "Route changes, customs delays", "Diversified sourcing, compliance monitoring"],
            ["Pandemics", "COVID-19, health restrictions", "Capacity constraints, labor shortages", "Flexible contracts, digital processes"],
            ["Economic", "Fuel price spikes, currency fluctuations", "Cost increases, margin pressure", "Fuel surcharges, hedging"],
            ["Technical", "System failures, cyber attacks", "Operational disruption", "Backup systems, cybersecurity"],
            ["Labor", "Strikes, driver shortages", "Capacity constraints, delays", "Multiple carrier options, automation"],
          ]}
        />

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-4">
          <h4 className="font-semibold mb-2">Building Resilient Supply Chains</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Diversification:</strong> Multiple suppliers, carriers, routes</li>
            <li>• <strong>Visibility:</strong> Early warning systems, real-time monitoring</li>
            <li>• <strong>Flexibility:</strong> Agile contracts, scalable capacity</li>
            <li>• <strong>Collaboration:</strong> Strong relationships across the chain</li>
            <li>• <strong>Planning:</strong> Scenario planning, risk assessment</li>
          </ul>
        </div>
      </div>

      {/* Sustainability */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          Sustainable Supply Chains
        </h2>

        <p className="text-muted-foreground mb-4">
          Environmental sustainability is increasingly important in supply chain decisions. Freight forwarders must offer greener solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Green Logistics Strategies</h4>
            <ul className="text-sm space-y-1">
              <li>• Modal shift (road to rail where possible)</li>
              <li>• Load optimization (fuller trucks)</li>
              <li>• Route optimization (fewer km)</li>
              <li>• Euro 6 / electric vehicles</li>
              <li>• Carbon offsetting programs</li>
            </ul>
          </div>
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h4 className="font-semibold text-info mb-2">Reporting & Compliance</h4>
            <ul className="text-sm space-y-1">
              <li>• CO₂ emissions calculation</li>
              <li>• Scope 3 emissions reporting</li>
              <li>• Environmental certifications</li>
              <li>• Customer sustainability requirements</li>
              <li>• EU Green Deal regulations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["supply-chain"] && (
        <Quiz
          title={ct("quizTitle")}
          questions={quizzes["supply-chain"]}
          chapterId="supply-chain"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
