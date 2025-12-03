import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Target, MessageSquare, Brain, FileText, Scale, Users, CheckCircle, AlertTriangle, Clock, Phone } from "lucide-react";

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
            <p>Make <strong>reasoned, timely decisions</strong> based on priorities and pre-set rules. Do not panic.</p>
          </InfoCard>
          
          <InfoCard title="Documentation = Protection" icon={FileText}>
            <p>Every step must be <strong>auditable</strong>: messages, PODs, timestamps, CMRs. If it is not documented, it did not happen.</p>
          </InfoCard>
        </div>
      </div>

      {/* Daily Responsibilities */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          Daily Responsibilities of a Dispatcher
        </h2>
        <DataTable
          headers={["Time", "Activity", "Priority", "Notes"]}
          rows={[
            ["07:00-08:00", "Check overnight messages, driver status", "Critical", "Respond to urgent issues first"],
            ["08:00-09:00", "Confirm today's pickups, verify driver ETAs", "Critical", "Call drivers if no update"],
            ["09:00-12:00", "Monitor active transports, handle new orders", "High", "Update TMS continuously"],
            ["12:00-13:00", "Follow up on deliveries, collect PODs", "High", "Chase missing PODs immediately"],
            ["13:00-16:00", "Quote new requests, source capacity", "Medium", "Prioritize urgent spot requests"],
            ["16:00-17:00", "Plan next day, prepare documents", "Medium", "Ensure all drivers have orders"],
            ["17:00-18:00", "Final status check, handover notes", "High", "Brief night shift if applicable"],
          ]}
        />
      </section>

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

      {/* Communication Examples */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          Practical Communication Examples
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Good Communication
            </h3>
            <div className="bg-success/10 p-4 rounded-lg text-sm space-y-2">
              <p><strong>To driver:</strong> "Hello Stefan, please confirm arrival at ABC GmbH Munich by 08:00. Loading dock 3, contact Mr. Schmidt +49 xxx. Reply when you arrive."</p>
              <p className="text-muted-foreground mt-2">Clear, complete, actionable with all needed details.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              Poor Communication
            </h3>
            <div className="bg-destructive/10 p-4 rounded-lg text-sm space-y-2">
              <p><strong>To driver:</strong> "Go to Munich tomorrow morning."</p>
              <p className="text-muted-foreground mt-2">Missing: exact time, address, contact, dock number, reference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Management */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          Managing Different Stakeholders
        </h2>
        <DataTable
          headers={["Stakeholder", "Their Priority", "Your Approach", "Common Issues"]}
          rows={[
            ["Client/Shipper", "On-time, damage-free delivery", "Proactive updates, quick responses", "Late notifications, no tracking info"],
            ["Driver", "Clear instructions, respect, fair pay", "Complete info, reasonable timelines", "Unclear loading times, unrealistic ETAs"],
            ["Warehouse/Receiver", "Punctuality, correct paperwork", "Accurate ETAs, proper documents", "No-shows, missing PODs"],
            ["Carrier Partner", "Fair rates, repeat business", "Pay on time, good communication", "Late payments, last-minute cancellations"],
            ["Your Manager", "Margin protection, problem-free ops", "Escalate early, propose solutions", "Hidden problems, blame-shifting"],
          ]}
        />
      </section>

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

      {/* Stress Management */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Brain className="w-6 h-6 text-primary" />
          Handling Stress & Difficult Situations
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">When Things Go Wrong</h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li><strong>Stop</strong> - Take a breath before reacting</li>
                <li><strong>Assess</strong> - What exactly is the problem?</li>
                <li><strong>Options</strong> - What solutions are available?</li>
                <li><strong>Act</strong> - Choose the best option and execute</li>
                <li><strong>Communicate</strong> - Inform all affected parties</li>
                <li><strong>Document</strong> - Record what happened and why</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Preventing Burnout</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Set clear boundaries for work hours</li>
                <li>• Use checklists to reduce mental load</li>
                <li>• Delegate when possible</li>
                <li>• Take regular short breaks</li>
                <li>• Celebrate wins, learn from losses</li>
                <li>• Ask for help early, not late</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          Core Principles to Live By
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { num: "1", title: "Under-Promise, Over-Deliver", desc: "Give realistic timelines, then beat them." },
            { num: "2", title: "Bad News Travels Fast", desc: "Inform clients of problems before they find out." },
            { num: "3", title: "Document Everything", desc: "If it is not written, it did not happen." },
            { num: "4", title: "Relationships Beat Transactions", desc: "Long-term partners forgive occasional mistakes." },
            { num: "5", title: "Own Your Mistakes", desc: "Apologize, fix it, learn from it. No excuses." },
            { num: "6", title: "Think One Step Ahead", desc: "Anticipate problems before they occur." },
          ].map((principle) => (
            <div key={principle.num} className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">{principle.num}</span>
              </div>
              <div>
                <h4 className="font-semibold">{principle.title}</h4>
                <p className="text-sm text-muted-foreground">{principle.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Role & Mindset" questions={quizzes.mindset} chapterId="mindset" />
    </div>
  );
}
