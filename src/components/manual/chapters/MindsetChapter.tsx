import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Quiz } from "../Quiz";
import { Checklist } from "../Checklist";
import { quizzes } from "@/data/quizData";
import { 
  Target, MessageSquare, Brain, FileText, Scale, Users, CheckCircle, 
  AlertTriangle, Clock, Phone, Shield, Heart, Zap, Eye, Lightbulb,
  TrendingUp, Star, Award, BookOpen, Coffee, ThumbsUp, ThumbsDown,
  Volume2, Mail, Calendar, AlertCircle, Info, ArrowRight
} from "lucide-react";

export function MindsetChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Role, Mindset & Human Factors</h1>
        <p className="text-lg text-muted-foreground">
          Understanding the core responsibilities, psychology, and interpersonal skills that define 
          excellent freight forwarding. This chapter covers the human side of logistics that separates 
          average dispatchers from top performers.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">The Psychology of Freight Forwarding</h2>
            <p className="text-muted-foreground mb-4">
              Freight forwarding is not just about moving goods – it is about managing expectations, relationships, 
              and crises. Technical knowledge accounts for only 40% of success; the remaining 60% depends on 
              soft skills, decision-making under pressure, and the ability to maintain composure when things go wrong.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">Technical Skills</p>
                <p className="text-muted-foreground">40% of success</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">Soft Skills</p>
                <p className="text-muted-foreground">35% of success</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">Stress Management</p>
                <p className="text-muted-foreground">25% of success</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What This Job Is About */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          What This Job Is Really About
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Risk & Coordination" icon={Scale}>
            <p className="mb-3">Balancing <strong>speed, cost, compliance, and reliability</strong> across multiple actors. Every decision involves trade-offs.</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Faster delivery = higher cost or risk</li>
              <li>• Cheaper carrier = potentially lower reliability</li>
              <li>• Tighter deadlines = more stress, more margin</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Human Management" icon={Users}>
            <p className="mb-3">Drivers, clients, and partners each have stressors—communicate <strong>clearly and respectfully</strong>.</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Drivers: tired, far from home, strict regulations</li>
              <li>• Clients: under pressure from their own deadlines</li>
              <li>• Partners: juggling multiple commitments</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Decision Under Pressure" icon={Brain}>
            <p className="mb-3">Make <strong>reasoned, timely decisions</strong> based on priorities and pre-set rules. Do not panic.</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Gather facts before reacting</li>
              <li>• Consider consequences of each option</li>
              <li>• Act decisively once decided</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Documentation = Protection" icon={FileText}>
            <p className="mb-3">Every step must be <strong>auditable</strong>: messages, PODs, timestamps, CMRs. If it is not documented, it did not happen.</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Email confirmations for all agreements</li>
              <li>• Photos of cargo at loading/unloading</li>
              <li>• Notes on every call and conversation</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Daily Responsibilities */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          Daily Responsibilities of a Dispatcher
        </h2>
        <DataTable
          headers={["Time", "Activity", "Priority", "Key Actions"]}
          rows={[
            ["07:00-08:00", "Check overnight messages, driver status", "Critical", "Respond to urgent issues, check GPS positions"],
            ["08:00-09:00", "Confirm today's pickups, verify driver ETAs", "Critical", "Call drivers if no update by 08:30"],
            ["09:00-10:00", "Process new orders, start quoting", "High", "Assess feasibility, check capacity"],
            ["10:00-12:00", "Monitor active transports, handle issues", "High", "Update TMS continuously, client updates"],
            ["12:00-13:00", "Follow up on deliveries, collect PODs", "High", "Chase missing PODs immediately"],
            ["13:00-15:00", "Quote new requests, source capacity", "Medium", "Use exchanges if needed, compare rates"],
            ["15:00-16:00", "Plan next day, confirm loadings", "Medium", "Ensure all drivers have orders for tomorrow"],
            ["16:00-17:00", "Final status check, documentation", "High", "Archive PODs, update client portals"],
            ["17:00-18:00", "Handover notes, prepare for next day", "High", "Brief night shift if applicable"],
          ]}
        />
        <div className="mt-4 p-4 bg-info/10 border border-info/30 rounded-lg">
          <p className="text-sm flex items-start gap-2">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-info" />
            <span><strong>Pro Tip:</strong> Block the first hour for catching up on overnight issues. Never schedule meetings before 09:00 – mornings are for fire-fighting.</span>
          </p>
        </div>
      </section>

      {/* Communication & Negotiation */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-primary" />
          Communication & Negotiation
        </h2>
        <div className="info-card">
          <div className="space-y-6">
            {/* The 4W Model */}
            <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold mb-3">The 4W Communication Model</h3>
              <p className="text-sm text-muted-foreground mb-4">Every message or call should answer these four questions:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { w: "WHO", desc: "Contact person" },
                  { w: "WHAT", desc: "Action needed" },
                  { w: "WHEN", desc: "Deadline/time" },
                  { w: "WHERE", desc: "Location details" }
                ].map((item) => (
                  <div key={item.w} className="bg-card p-4 rounded-lg shadow-sm">
                    <span className="text-2xl font-bold text-primary">{item.w}</span>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication Tips */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-3">Negotiation Principles</h3>
                <div className="space-y-3">
                  {[
                    { num: "1", text: "Offer two solutions to reduce pushback: economy vs express" },
                    { num: "2", text: "Negotiate with value (service scope, punctuality, tracking) before touching price" },
                    { num: "3", text: "Confirm all agreements in writing – CMR data, accessorials, responsibility splits" },
                    { num: "4", text: "Never accept the first offer on spot market – there is always room" },
                    { num: "5", text: "Know your walk-away point before starting negotiation" },
                  ].map((tip) => (
                    <div key={tip.num} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{tip.num}</span>
                      <p className="text-sm text-muted-foreground">{tip.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Language & Tone</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <p className="font-medium text-success mb-1">✓ Professional phrases</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>"I will check and revert within 30 minutes"</li>
                      <li>"Let me propose a solution..."</li>
                      <li>"I understand your concern, here is what we can do..."</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <p className="font-medium text-destructive mb-1">✗ Avoid these</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>"That is not my problem"</li>
                      <li>"I do not know"</li>
                      <li>"The driver did not tell me"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="space-y-4">
              <div className="bg-success/10 p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">To driver:</p>
                <p className="text-muted-foreground italic">"Hello Stefan, please confirm arrival at ABC GmbH, Industriestraße 15, 80939 Munich by 08:00. Loading dock 3, contact Mr. Schmidt +49 171 xxx xxxx. Reference: ORD-12345. Reply when you arrive."</p>
              </div>
              <div className="bg-success/10 p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">To client (delay):</p>
                <p className="text-muted-foreground italic">"Dear Mr. Johnson, I need to inform you that delivery will be delayed by approximately 2 hours due to traffic on A3. New ETA is 14:30. I have confirmed with the receiver. Apologies for any inconvenience."</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              Poor Communication
            </h3>
            <div className="space-y-4">
              <div className="bg-destructive/10 p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">To driver:</p>
                <p className="text-muted-foreground italic">"Go to Munich tomorrow morning."</p>
                <p className="text-destructive text-xs mt-2">Missing: exact time, full address, contact, dock, reference</p>
              </div>
              <div className="bg-destructive/10 p-4 rounded-lg text-sm">
                <p className="font-medium mb-2">To client (delay):</p>
                <p className="text-muted-foreground italic">"There is a delay, not sure how long."</p>
                <p className="text-destructive text-xs mt-2">Missing: reason, new ETA, what has been done</p>
              </div>
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
          headers={["Stakeholder", "Their Priority", "Your Approach", "Common Pitfalls"]}
          rows={[
            ["Client/Shipper", "On-time, damage-free delivery at agreed price", "Proactive updates, quick responses, no surprises", "Late notifications, no tracking, blame-shifting"],
            ["Driver", "Clear instructions, respect, reasonable schedules", "Complete info, realistic timelines, appreciation", "Unclear loading times, impossible ETAs, no support"],
            ["Warehouse/Receiver", "Punctuality, correct paperwork, no waiting", "Accurate ETAs, proper documents, call ahead", "No-shows, missing PODs, wrong quantities"],
            ["Carrier Partner", "Fair rates, repeat business, payment on time", "Pay on time, good communication, consistency", "Late payments, last-minute cancellations, disputes"],
            ["Your Manager", "Margin protection, happy clients, no surprises", "Escalate early, propose solutions, own mistakes", "Hidden problems, blame-shifting, excuses"],
            ["Colleagues", "Teamwork, handovers, shared knowledge", "Help when asked, clear documentation", "Hoarding information, not sharing learnings"],
          ]}
        />
      </section>

      {/* Driver Communication Special Section */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Heart className="w-6 h-6 text-primary" />
          Building Relationships with Drivers
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground mb-4">
            Drivers are the backbone of our industry. They spend weeks away from family, work long hours, and face 
            constant pressure. How you treat drivers directly impacts service quality.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-success" />
                Do This
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Learn their names and use them</li>
                <li>• Ask about their journey, show interest</li>
                <li>• Give complete information upfront</li>
                <li>• Warn about difficult loading locations</li>
                <li>• Thank them after successful deliveries</li>
                <li>• Help resolve problems quickly</li>
                <li>• Respect their rest time – do not call during breaks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ThumbsDown className="w-4 h-4 text-destructive" />
                Avoid This
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Treating them as "just drivers"</li>
                <li>• Giving impossible timelines</li>
                <li>• Blaming them for external issues</li>
                <li>• Calling repeatedly during their rest</li>
                <li>• Withholding important information</li>
                <li>• Being condescending or rude</li>
                <li>• Ignoring their concerns about safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology in Forwarding */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Brain className="w-6 h-6 text-primary" />
          Psychology & Emotional Intelligence
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title="Stay Calm" variant="info" icon={Brain}>
            <p className="mb-3">Remain <strong>factual and solution-oriented</strong> under stress. Panic spreads and makes things worse.</p>
            <div className="text-xs p-2 bg-muted rounded">
              "Never make a permanent decision based on a temporary emotion"
            </div>
          </InfoCard>
          
          <InfoCard title="Empathy First" variant="success" icon={Heart}>
            <p className="mb-3">Understand the other person's perspective before responding. What pressure are they under?</p>
            <div className="text-xs p-2 bg-muted rounded">
              "People do not care how much you know until they know how much you care"
            </div>
          </InfoCard>
          
          <InfoCard title="Solution Focus" variant="warning" icon={Target}>
            <p className="mb-3">Define <strong>what can be done</strong> instead of dwelling on problems. Clients want solutions, not excuses.</p>
            <div className="text-xs p-2 bg-muted rounded">
              "For every problem, offer at least one solution"
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Handling Stress */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          Handling Stress & Difficult Situations
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">When Things Go Wrong: STOAC Method</h3>
              <div className="space-y-3">
                {[
                  { step: "S", name: "STOP", desc: "Take a breath before reacting. Count to 5 if needed." },
                  { step: "T", name: "THINK", desc: "What exactly is the problem? What is the impact?" },
                  { step: "O", name: "OPTIONS", desc: "What solutions are available? List at least 2-3." },
                  { step: "A", name: "ACT", desc: "Choose the best option and execute decisively." },
                  { step: "C", name: "COMMUNICATE", desc: "Inform all affected parties. Document everything." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</span>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Preventing Burnout</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Set clear boundaries for work hours – do not check emails at midnight</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Use checklists to reduce mental load</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Delegate when possible, ask for help when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Take regular short breaks – 5 min every hour</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Celebrate wins, learn from losses without dwelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Ask for help early, not when you are overwhelmed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Remember: not every problem is your emergency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Difficult Client Scenarios */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-primary" />
          Handling Difficult Client Scenarios
        </h2>
        <DataTable
          headers={["Scenario", "Client Says", "Your Response", "Key Principle"]}
          rows={[
            ["Unrealistic deadline", "I need this delivered tomorrow, 1500km away", "Let me check options. Express is €X with Y% success rate, or standard at €Z for day after.", "Offer alternatives, not just 'no'"],
            ["Price complaint", "Your competitor quoted 20% less", "I understand. Our rate includes X, Y, Z. Can you share the competitor scope?", "Understand before defending"],
            ["Angry about delay", "This is unacceptable! I will lose my customer!", "I understand your frustration. Here is what we are doing: [solution]. I will update you in 1 hour.", "Acknowledge, act, commit to update"],
            ["Damage claim", "The goods arrived damaged, I want compensation NOW", "I am sorry to hear this. Please send photos and I will start the claim process today.", "Do not admit liability, start process"],
            ["Last-minute change", "I need to change delivery address, truck is loading now", "Let me check with the driver. There may be a detour surcharge of €X. OK to proceed?", "Never say yes without checking"],
          ]}
        />
      </section>

      {/* Core Principles */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Star className="w-6 h-6 text-primary" />
          Core Principles to Live By
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { num: "1", title: "Under-Promise, Over-Deliver", desc: "Give realistic timelines, then beat them. Clients remember positive surprises." },
            { num: "2", title: "Bad News Travels Fast", desc: "Inform clients of problems before they find out. They will appreciate the honesty." },
            { num: "3", title: "Document Everything", desc: "If it is not written, it did not happen. Protect yourself and your company." },
            { num: "4", title: "Relationships Beat Transactions", desc: "Long-term partners forgive occasional mistakes. Invest in relationships." },
            { num: "5", title: "Own Your Mistakes", desc: "Apologize, fix it, learn from it. No excuses. Blame-shifting destroys trust." },
            { num: "6", title: "Think One Step Ahead", desc: "Anticipate problems before they occur. What could go wrong? Have a backup." },
            { num: "7", title: "Respect Everyone", desc: "From the warehouse worker to the CEO. Everyone deserves professional treatment." },
            { num: "8", title: "Never Stop Learning", desc: "The industry changes constantly. Stay curious, ask questions, seek feedback." },
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

      {/* Self-Assessment */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Eye className="w-6 h-6 text-primary" />
          Self-Assessment: Are You Ready?
        </h2>
        <div className="info-card">
          <p className="text-muted-foreground mb-4">
            Rate yourself honestly on these competencies. Identify areas for improvement.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "I stay calm under pressure",
              "I communicate clearly and concisely",
              "I document all important decisions",
              "I respect drivers and partners",
              "I admit mistakes and learn from them",
              "I proactively update clients",
              "I can negotiate effectively",
              "I manage my time efficiently",
              "I ask for help when needed",
              "I maintain work-life balance",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-6 h-6 rounded border-2 border-border"></div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference Checklists */}
      <div className="grid md:grid-cols-2 gap-6">
        <Checklist
          title="Before Every Client Call"
          items={[
            "Have all relevant information ready",
            "Know the shipment status",
            "Prepare possible solutions if there is an issue",
            "Have reference numbers at hand",
            "Be ready to take notes"
          ]}
        />
        <Checklist
          title="After Every Problem"
          items={[
            "Document what happened and when",
            "Record the solution implemented",
            "Note what could prevent it next time",
            "Update relevant parties",
            "Archive communication"
          ]}
        />
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Role & Mindset" questions={quizzes.mindset} chapterId="mindset" />
    </div>
  );
}
