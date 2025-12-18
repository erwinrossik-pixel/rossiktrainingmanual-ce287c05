import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Users, Target, MessageSquare, CheckCircle2, XCircle, AlertTriangle, Zap, Scale, TrendingUp, Handshake, Shield, Euro } from "lucide-react";

export function NegotiationChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Negotiation Skills</h1>
        <p className="text-lg text-muted-foreground">
          Master the art of negotiation in freight forwarding - with clients on rates, with carriers on costs, and with partners on terms.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Handshake className="w-6 h-6 text-primary" />
          Why Negotiation Skills Matter
        </h2>
        <p className="text-muted-foreground mb-4">
          As a freight forwarder, you negotiate daily - every quote, every carrier booking, every problem resolution involves negotiation. Strong negotiation skills directly impact your margins, relationships, and career success.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Euro className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Better Margins</p>
            <p className="text-xs text-muted-foreground">5% better rates = significant profit</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Stronger Relationships</p>
            <p className="text-xs text-muted-foreground">Win-win creates loyalty</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Problem Resolution</p>
            <p className="text-xs text-muted-foreground">Fair outcomes from disputes</p>
          </div>
        </div>
      </div>

      {/* Negotiation Fundamentals */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          Negotiation Fundamentals
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Key Principles</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Preparation:</strong> Know your position, limits, and alternatives</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Listen First:</strong> Understand the other party's needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Focus on Interests:</strong> Not just positions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Create Value:</strong> Expand the pie before dividing it</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Win-Win:</strong> Sustainable agreements benefit both</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">BATNA Concept</h3>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-medium text-primary mb-2">Best Alternative To Negotiated Agreement</p>
              <p className="text-sm text-muted-foreground mb-3">
                Your BATNA is your fallback option if negotiation fails. The stronger your BATNA, the stronger your negotiating position.
              </p>
              <p className="text-sm">
                <strong>Example:</strong> If negotiating with one carrier, having two other qualified carriers ready gives you a strong BATNA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Negotiation Scenarios */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-primary" />
          Common Negotiation Scenarios
        </h2>

        <DataTable
          headers={["Scenario", "Your Goal", "Their Goal", "Strategy"]}
          rows={[
            ["Client Rate Negotiation", "Maintain margin, win business", "Lower price", "Lead with value, justify with costs"],
            ["Carrier Rate Negotiation", "Get best rate", "Maximize revenue", "Volume commitment, regular business offer"],
            ["Payment Terms", "Faster payment from clients", "Extended terms", "Early payment discount, staged terms"],
            ["Claim Settlement", "Fair resolution", "Minimize payout", "Facts and documentation focus"],
            ["Service Recovery", "Keep client, minimize cost", "Compensation", "Understand impact, offer appropriate remedy"],
            ["Contract Renewal", "Better terms, keep relationship", "Rate increase", "Performance data, market comparison"],
          ]}
        />
      </div>

      {/* Negotiating with Clients */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          Negotiating with Clients
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Effective Approaches</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>Lead with value proposition, not price</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>Understand their total cost, not just transport cost</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>Offer alternatives at different price points</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>Use volume/commitment for better rates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                <span>Document agreed terms clearly</span>
              </li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Avoid These Mistakes</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>Dropping price immediately when pushed</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>Competing on price alone</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>Making concessions without getting something back</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>Promising what you can't deliver</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5" />
                <span>Being desperate to win at any cost</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Sample Client Negotiation Dialogue</h4>
          <div className="text-sm space-y-2">
            <p><strong>Client:</strong> "Your rate is €1,450 but I have a quote for €1,350."</p>
            <p><strong>You:</strong> "I understand price is important. Can you help me understand what's included in their offer? Our rate includes real-time GPS tracking, dedicated account management, and 95%+ on-time guarantee. What's most important for this shipment?"</p>
            <p><strong>Client:</strong> "We need reliable delivery for production."</p>
            <p><strong>You:</strong> "Our on-time rate is 97% this quarter. If I can offer you a €1,400 rate with priority carrier allocation, would that work for both of us?"</p>
          </div>
        </div>
      </div>

      {/* Negotiating with Carriers */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          Negotiating with Carriers
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">What You Can Offer</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Volume:</strong> Regular, predictable loads</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Payment:</strong> Quick payment, reliable terms</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Backloads:</strong> Help finding return loads</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Flexibility:</strong> Reasonable loading windows</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Partnership:</strong> Fair treatment, good relationship</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">What You Want</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Competitive rates:</strong> Market-aligned pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Reliability:</strong> On-time performance commitment</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Communication:</strong> Good tracking, proactive updates</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Flexibility:</strong> Willingness to handle issues</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Capacity:</strong> Priority during peak periods</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            Golden Rule of Carrier Negotiation
          </h4>
          <p className="text-sm">
            A carrier who loses money on your loads will deprioritize your freight. Sustainable rates that allow carriers to profit ensure reliable service. Squeeze too hard, and quality suffers.
          </p>
        </div>
      </div>

      {/* Negotiation Tactics */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          Practical Negotiation Tactics
        </h2>

        <DataTable
          headers={["Tactic", "How It Works", "When to Use"]}
          rows={[
            ["Anchoring", "Start with a number that sets expectations", "First to quote often sets the range"],
            ["Bracketing", "Ask for more than you expect to get", "Leaves room to compromise"],
            ["Silence", "Pause after their offer - let them fill the silence", "When they make first offer"],
            ["Trade-offs", "If you want X, I need Y in return", "When making concessions"],
            ["Good cop/bad cop", "Reference manager approval for final decision", "When need time or authority"],
            ["Walk away power", "Be willing to decline if terms are unacceptable", "When you have alternatives"],
            ["Deadline pressure", "Create urgency for decision", "Closing a negotiation"],
            ["Nibbling", "Ask for small extras after main agreement", "After price is agreed"],
          ]}
        />
      </div>

      {/* Handling Difficult Situations */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          Handling Difficult Negotiations
        </h2>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">When They Say: "That's too expensive"</h4>
            <p className="text-sm text-muted-foreground mb-2">Don't immediately drop your price. Instead:</p>
            <ul className="text-sm space-y-1">
              <li>• Ask what they're comparing to</li>
              <li>• Understand what's driving their budget</li>
              <li>• Explain what's included in your rate</li>
              <li>• Offer alternatives at different service levels</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">When They Make an Unreasonable Demand</h4>
            <p className="text-sm text-muted-foreground mb-2">Stay calm and professional:</p>
            <ul className="text-sm space-y-1">
              <li>• Acknowledge their position without agreeing</li>
              <li>• Ask them to explain their reasoning</li>
              <li>• Use objective criteria (market data, costs)</li>
              <li>• Offer a counter-proposal that addresses their underlying interest</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">When Negotiations Stall</h4>
            <p className="text-sm text-muted-foreground mb-2">Break the deadlock:</p>
            <ul className="text-sm space-y-1">
              <li>• Summarize what's been agreed so far</li>
              <li>• Identify the specific sticking points</li>
              <li>• Suggest a break or time to think</li>
              <li>• Bring in a fresh perspective (colleague, manager)</li>
              <li>• Look for creative solutions outside the original scope</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Useful Phrases */}
      <div className="info-card bg-muted/30">
        <h2 className="section-title">Powerful Negotiation Phrases</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-success">Use These</h4>
            <ul className="space-y-2 text-sm">
              <li>"Help me understand your priorities..."</li>
              <li>"What would make this work for you?"</li>
              <li>"Based on market data, we see..."</li>
              <li>"If we could do X, would you be able to..."</li>
              <li>"I appreciate your position, and..."</li>
              <li>"What if we approached this differently..."</li>
              <li>"Is there flexibility on...?"</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-destructive">Avoid These</h4>
            <ul className="space-y-2 text-sm">
              <li>"Take it or leave it"</li>
              <li>"That's our final offer" (unless it really is)</li>
              <li>"You're wrong about..."</li>
              <li>"I need this deal"</li>
              <li>"The competition is offering..."</li>
              <li>"I can't do anything about the price"</li>
              <li>"That's not my problem"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["negotiation"] && (
        <Quiz
          title="Negotiation Skills Quiz"
          questions={quizzes["negotiation"]}
          chapterId="negotiation"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
