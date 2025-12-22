import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Building2, Search, FileText, BarChart3, Target, Handshake, Phone, Mail, Users, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function ClientsChapter() {
  const { ct } = useChapterTranslation("clients");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
      </div>

      {/* Client Sources */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Search className="w-6 h-6 text-primary" />
          Client Acquisition Channels
        </h2>
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
      </section>

      {/* Industry Sectors */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Building2 className="w-6 h-6 text-primary" />
          Target Industry Sectors
        </h2>
        <DataTable
          headers={["Sector", "Transport Needs", "Typical Volumes", "Key Considerations"]}
          rows={[
            ["Automotive", "JIT parts, finished vehicles", "High, regular", "Strict timing, clean equipment"],
            ["FMCG/Retail", "Distribution, seasonal peaks", "Very high", "Multi-drop, time windows"],
            ["Construction", "Materials, machinery", "Project-based", "Heavy loads, site access"],
            ["Agriculture", "Seasonal produce, grains", "Seasonal peaks", "Temperature, timing critical"],
            ["Pharmaceuticals", "GDP transport", "Low-medium", "Temperature control, compliance"],
            ["Industrial/Machinery", "Heavy equipment, parts", "Irregular", "Special equipment, permits"],
            ["Food & Beverage", "Fresh, frozen, dry goods", "High, regular", "Temperature, hygiene, timing"],
            ["E-commerce", "Palletized goods to warehouses", "Growing", "Speed, flexibility, tracking"],
          ]}
        />
      </section>

      {/* Cold Calling Script */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          Cold Calling Framework
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Introduction (10 seconds)</h4>
                <p className="text-sm text-muted-foreground italic">"Good morning, this is [Name] from [Company]. I am calling about your transport requirements for [specific route/product]."</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Value Hook (15 seconds)</h4>
                <p className="text-sm text-muted-foreground italic">"We specialize in [route/product type] with own fleet coverage and 98% on-time delivery. Could I speak with whoever handles your logistics?"</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Discovery Questions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "What routes do you currently need most capacity for?"</li>
                  <li>• "How often do you ship to [destination]?"</li>
                  <li>• "What is most important to you - price, reliability, or flexibility?"</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary text-sm">4</span>
              </div>
              <div>
                <h4 className="font-semibold">Close for Next Step</h4>
                <p className="text-sm text-muted-foreground italic">"Could I send you our company profile and a sample quote for your [route]? What email should I use?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Templates */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Mail className="w-6 h-6 text-primary" />
          Email Templates for Prospecting
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Initial Contact Email</h3>
            <div className="bg-muted/30 rounded-lg p-4 text-sm font-mono">
              <p><strong>Subject:</strong> Transport capacity [Route] - [Company]</p>
              <br />
              <p>Dear [Name],</p>
              <br />
              <p>I noticed [Company] ships regularly to [region]. We operate dedicated capacity on this route with:</p>
              <br />
              <p>• 98% on-time delivery rate</p>
              <p>• Real-time GPS tracking</p>
              <p>• Flexible loading schedules</p>
              <br />
              <p>Would you have 10 minutes this week to discuss your transport needs?</p>
              <br />
              <p>Best regards,<br />[Your Name]</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3">Follow-up Email</h3>
            <div className="bg-muted/30 rounded-lg p-4 text-sm font-mono">
              <p><strong>Subject:</strong> RE: Transport capacity - Quick follow-up</p>
              <br />
              <p>Dear [Name],</p>
              <br />
              <p>Following up on my previous message about transport to [destination].</p>
              <br />
              <p>We currently have available capacity next week and could offer competitive rates for a trial shipment.</p>
              <br />
              <p>No commitment required - just a chance to demonstrate our service quality.</p>
              <br />
              <p>Would a quick 5-minute call work for you?</p>
              <br />
              <p>Best regards,<br />[Your Name]</p>
            </div>
          </div>
        </div>
      </section>

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
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                Include fuel indexation clause
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                Toll adjustment provisions
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                Volume commitments with flexibility
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                Clear payment terms (net 30-45 days)
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Negotiation Points</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-info mt-0.5" />
                Lead with value, not price
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-info mt-0.5" />
                Offer tracking & visibility
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-info mt-0.5" />
                Highlight punctuality record
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-info mt-0.5" />
                Propose dedicated capacity
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Client Segmentation */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          Client Segmentation Strategy
        </h2>
        <DataTable
          headers={["Segment", "Volume", "Service Level", "Pricing Strategy", "Attention Level"]}
          rows={[
            ["A - Strategic", "High, regular", "Premium, dedicated", "Negotiated contracts", "Daily contact"],
            ["B - Growing", "Medium, growing", "Standard+", "Competitive rates", "Weekly reviews"],
            ["C - Occasional", "Low, irregular", "Standard", "Market rates", "As needed"],
            ["D - Unprofitable", "Any", "Review", "Increase or exit", "Minimal"],
          ]}
        />
        <p className="text-sm text-muted-foreground mt-4">
          Focus 80% of your business development time on A and B clients. Review D clients quarterly for potential exit.
        </p>
      </section>

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

      {/* Retention Strategies */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          Client Retention Strategies
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title="Proactive Communication" icon={Phone} variant="success">
            <ul className="space-y-2 text-sm">
              <li>• Regular performance reviews</li>
              <li>• Quarterly business meetings</li>
              <li>• Early warning on issues</li>
              <li>• Share market insights</li>
            </ul>
          </InfoCard>
          <InfoCard title="Value-Added Services" icon={Target} variant="info">
            <ul className="space-y-2 text-sm">
              <li>• Customized reporting</li>
              <li>• Dedicated account manager</li>
              <li>• Priority capacity access</li>
              <li>• Integration with their systems</li>
            </ul>
          </InfoCard>
          <InfoCard title="Issue Resolution" icon={AlertTriangle} variant="warning">
            <ul className="space-y-2 text-sm">
              <li>• Respond within 1 hour</li>
              <li>• Own the problem completely</li>
              <li>• Provide solutions, not excuses</li>
              <li>• Follow up after resolution</li>
            </ul>
          </InfoCard>
        </div>
      </section>

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

      {/* Warning Signs */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Warning Signs - Client Risks
        </h2>
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Financial Red Flags</h3>
              <ul className="space-y-2 text-sm">
                <li>• Consistently late payments</li>
                <li>• Requests for extended terms</li>
                <li>• Disputes on valid invoices</li>
                <li>• Negative credit reports</li>
                <li>• Bounced payments</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Operational Red Flags</h3>
              <ul className="space-y-2 text-sm">
                <li>• Unrealistic expectations</li>
                <li>• Constant last-minute changes</li>
                <li>• Blame-shifting culture</li>
                <li>• No respect for drivers</li>
                <li>• Excessive waiting times</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz - would need to add clients quiz to quizData */}
      {quizzes.clients && (
        <Quiz title="Finding & Managing Clients Quiz" questions={quizzes.clients} chapterId="clients" />
      )}
    </div>
  );
}
