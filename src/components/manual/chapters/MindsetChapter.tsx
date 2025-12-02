import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Target, MessageSquare, Brain, FileText, Scale, Users } from "lucide-react";

export function MindsetChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Role, Mindset & Human Factors</h1>
        <p className="text-lg text-muted-foreground">
          Understanding the core responsibilities and psychology of freight forwarding.
        </p>
      </div>

      {/* What This Job Is About */}
      <div>
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          What This Job Is Really About
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Risk & Coordination" icon={Scale}>
            <p>Balancing <strong>speed, cost, compliance, and reliability</strong> across multiple actors. Every decision involves trade-offs.</p>
          </InfoCard>
          
          <InfoCard title="Human Management" icon={Users}>
            <p>Drivers, clients, and partners each have stressors—communicate <strong>clearly and respectfully</strong>.</p>
          </InfoCard>
          
          <InfoCard title="Decision Under Pressure" icon={Brain}>
            <p>Make <strong>reasoned, timely decisions</strong> based on priorities and pre-set rules. Don't panic.</p>
          </InfoCard>
          
          <InfoCard title="Documentation = Protection" icon={FileText}>
            <p>Every step must be <strong>auditable</strong>: messages, PODs, timestamps, CMRs. If it's not documented, it didn't happen.</p>
          </InfoCard>
        </div>
      </div>

      {/* Communication & Negotiation */}
      <div>
        <h2 className="section-title flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-primary" />
          Communication & Negotiation
        </h2>
        <div className="info-card">
          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold mb-2">The 4W Model</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {["Who", "What", "When", "Where"].map((w) => (
                  <div key={w} className="bg-card p-3 rounded-lg shadow-sm">
                    <span className="text-2xl font-bold text-primary">{w}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">Always use this model in every communication.</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="badge-primary flex-shrink-0">Tip 1</span>
                <p className="text-muted-foreground">Offer <strong>two solutions</strong> to reduce pushback: economy vs express.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="badge-primary flex-shrink-0">Tip 2</span>
                <p className="text-muted-foreground">Negotiate with <strong>value</strong> (service scope, punctuality, tracking) before touching price.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="badge-primary flex-shrink-0">Tip 3</span>
                <p className="text-muted-foreground"><strong>Confirm all agreements in writing</strong> – CMR data, accessorials, responsibility splits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Psychology in Forwarding */}
      <div>
        <h2 className="section-title flex items-center gap-3">
          <Brain className="w-6 h-6 text-primary" />
          Psychology in Forwarding
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title="Stay Calm" variant="info" icon={Brain}>
            <p>Remain <strong>factual and solution-oriented</strong> under stress. Panic spreads.</p>
          </InfoCard>
          
          <InfoCard title="Respect Drivers" variant="success" icon={Users}>
            <p>Treat drivers as <strong>partners</strong>; motivation and respect directly improve punctuality.</p>
          </InfoCard>
          
          <InfoCard title="Plan Fallbacks" variant="warning" icon={Target}>
            <p>Define <strong>fallback options</strong> (second carrier, alternative route) in advance.</p>
          </InfoCard>
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Role & Mindset" questions={quizzes.mindset} />
    </div>
  );
}
