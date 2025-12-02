import { InfoCard } from "../InfoCard";
import { Building2, Search, FileText, BarChart3, Target, Handshake } from "lucide-react";

export function ClientsChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Finding & Managing Clients</h1>
        <p className="text-lg text-muted-foreground">
          Strategies for client acquisition and relationship management.
        </p>
      </div>

      {/* Client Sources */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Search, title: "Freight Exchanges", desc: "Monitor for shippers posting loads" },
          { icon: Building2, title: "Direct Approach", desc: "Contact producers & retailers" },
          { icon: Target, title: "Seasonal Shippers", desc: "Agricultural, retail peaks" },
          { icon: Handshake, title: "Referrals", desc: "Network with industry contacts" },
        ].map((item, i) => (
          <div key={i} className="info-card text-center">
            <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Contract Tips */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          Contract Best Practices
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-3">
            <h3 className="font-semibold">Quarterly Mini-Contracts</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="badge-success text-xs">✓</span>
                Include fuel indexation clause
              </li>
              <li className="flex items-start gap-2">
                <span className="badge-success text-xs">✓</span>
                Toll adjustment provisions
              </li>
              <li className="flex items-start gap-2">
                <span className="badge-success text-xs">✓</span>
                Volume commitments with flexibility
              </li>
              <li className="flex items-start gap-2">
                <span className="badge-success text-xs">✓</span>
                Clear payment terms (net 30-45 days)
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Negotiation Points</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="badge-info text-xs">→</span>
                Lead with value, not price
              </li>
              <li className="flex items-start gap-2">
                <span className="badge-info text-xs">→</span>
                Offer tracking & visibility
              </li>
              <li className="flex items-start gap-2">
                <span className="badge-info text-xs">→</span>
                Highlight punctuality record
              </li>
              <li className="flex items-start gap-2">
                <span className="badge-info text-xs">→</span>
                Propose dedicated capacity
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          Key Performance Indicators (KPIs)
        </h2>
        <div className="grid md:grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-success/10 rounded-lg text-center border border-success/20">
            <p className="text-2xl font-bold text-success">95%+</p>
            <p className="text-sm text-muted-foreground">On-time delivery</p>
          </div>
          <div className="p-4 bg-info/10 rounded-lg text-center border border-info/20">
            <p className="text-2xl font-bold text-info">&lt;1%</p>
            <p className="text-sm text-muted-foreground">Claim rate</p>
          </div>
          <div className="p-4 bg-warning/10 rounded-lg text-center border border-warning/20">
            <p className="text-2xl font-bold text-warning">&lt;24h</p>
            <p className="text-sm text-muted-foreground">ePOD delivery</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg text-center border border-primary/20">
            <p className="text-2xl font-bold text-primary">4.5+</p>
            <p className="text-sm text-muted-foreground">Customer rating</p>
          </div>
        </div>
      </div>

      {/* Client Communication */}
      <div className="highlight-card">
        <h3 className="font-semibold mb-3">📞 Client Communication Tips</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium mb-2">Proactive Updates:</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Pickup confirmation</li>
              <li>• Delay notifications ASAP</li>
              <li>• Delivery ETA updates</li>
              <li>• POD within 24 hours</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Issue Handling:</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Acknowledge immediately</li>
              <li>• Offer solutions, not excuses</li>
              <li>• Document everything</li>
              <li>• Follow up on resolution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
