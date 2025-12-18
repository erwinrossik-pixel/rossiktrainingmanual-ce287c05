import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Brain, MessageSquare, Clock, Users, Target, Lightbulb, Heart, Shield, Zap, CheckCircle2, AlertTriangle, Volume2, Ear, PenTool } from "lucide-react";

export function SoftSkillsChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Soft Skills for Logistics</h1>
        <p className="text-lg text-muted-foreground">
          Essential interpersonal and professional skills for success in freight forwarding: communication, negotiation, stress management, and problem-solving.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Brain className="w-6 h-6 text-primary" />
          Why Soft Skills Matter in Logistics
        </h2>
        <p className="text-muted-foreground mb-4">
          Technical knowledge gets you started, but soft skills determine your career success. In freight forwarding, you work with diverse stakeholders under pressure - your ability to communicate, negotiate, and solve problems efficiently makes all the difference.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Communication</p>
            <p className="text-xs text-muted-foreground">Clear & professional</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Negotiation</p>
            <p className="text-xs text-muted-foreground">Win-win solutions</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Stress Management</p>
            <p className="text-xs text-muted-foreground">Stay calm under pressure</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Problem Solving</p>
            <p className="text-xs text-muted-foreground">Solutions-oriented</p>
          </div>
        </div>
      </div>

      {/* Communication */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-primary" />
          Professional Communication
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-primary" />
              Verbal Communication
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Be clear:</strong> Use simple, direct language</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Be concise:</strong> Get to the point quickly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Confirm understanding:</strong> Repeat key details back</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Stay professional:</strong> Even under stress</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Adapt tone:</strong> Match the situation and audience</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <PenTool className="w-4 h-4 text-primary" />
              Written Communication
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Structure:</strong> Clear subject lines, organized content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Grammar:</strong> Proofread before sending</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Completeness:</strong> Include all relevant information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Documentation:</strong> Keep written records of agreements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span><strong>Timeliness:</strong> Respond promptly</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Ear className="w-4 h-4" />
            Active Listening
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Listening is as important as speaking. In logistics, miscommunication causes delays, costs, and lost business.
          </p>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="bg-background p-3 rounded">
              <p className="font-medium text-primary">1. Focus</p>
              <p className="text-xs text-muted-foreground">Give full attention, no multitasking</p>
            </div>
            <div className="bg-background p-3 rounded">
              <p className="font-medium text-primary">2. Don't Interrupt</p>
              <p className="text-xs text-muted-foreground">Let them finish speaking</p>
            </div>
            <div className="bg-background p-3 rounded">
              <p className="font-medium text-primary">3. Clarify</p>
              <p className="text-xs text-muted-foreground">Ask questions to understand</p>
            </div>
            <div className="bg-background p-3 rounded">
              <p className="font-medium text-primary">4. Confirm</p>
              <p className="text-xs text-muted-foreground">Summarize what you heard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Negotiation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          Negotiation Skills
        </h2>

        <p className="text-muted-foreground mb-4">
          Freight forwarders negotiate daily - with carriers on rates, with clients on prices, and with partners on terms. Effective negotiation creates value for all parties.
        </p>

        <DataTable
          headers={["Principle", "Description", "Application"]}
          rows={[
            ["Preparation", "Know your position, limits, and alternatives before negotiating", "Research market rates, calculate your minimum margin"],
            ["Win-Win Focus", "Seek outcomes that benefit both parties", "Find creative solutions beyond just price"],
            ["BATNA", "Know your Best Alternative To Negotiated Agreement", "Have backup carriers/options ready"],
            ["Listen First", "Understand the other party's needs and constraints", "Ask about their priorities before presenting yours"],
            ["Separate People from Problem", "Focus on interests, not positions", "\"I understand your cost pressure\" vs. \"Your price is too high\""],
            ["Use Objective Criteria", "Base arguments on facts and market data", "\"Market rates for this lane are €X-Y\""],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Effective Negotiation Phrases</h4>
            <ul className="text-sm space-y-1">
              <li>• "Help me understand your position..."</li>
              <li>• "What if we could find a way to..."</li>
              <li>• "Based on market data, we see..."</li>
              <li>• "I understand your concern about..."</li>
              <li>• "What would make this work for you?"</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Avoid These Tactics</h4>
            <ul className="text-sm space-y-1">
              <li>• Ultimatums ("Take it or leave it")</li>
              <li>• Emotional manipulation</li>
              <li>• Dishonest claims about competitors</li>
              <li>• Personal attacks</li>
              <li>• Last-minute price changes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stress Management */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Heart className="w-6 h-6 text-primary" />
          Stress Management
        </h2>

        <p className="text-muted-foreground mb-4">
          Freight forwarding is inherently stressful - tight deadlines, multiple demands, and things going wrong. Managing stress is essential for sustained performance and wellbeing.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <InfoCard title="Common Stressors" icon={AlertTriangle}>
            <ul className="text-sm space-y-1">
              <li>• Urgent client demands</li>
              <li>• Transport delays and issues</li>
              <li>• Multiple priorities competing</li>
              <li>• Difficult conversations</li>
              <li>• Information overload</li>
              <li>• Long hours during peaks</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Warning Signs" icon={AlertTriangle}>
            <ul className="text-sm space-y-1">
              <li>• Irritability, short temper</li>
              <li>• Difficulty concentrating</li>
              <li>• Making more mistakes</li>
              <li>• Physical symptoms (headaches)</li>
              <li>• Sleep problems</li>
              <li>• Dreading work</li>
            </ul>
          </InfoCard>
          
          <InfoCard title="Healthy Responses" icon={Shield}>
            <ul className="text-sm space-y-1">
              <li>• Take short breaks</li>
              <li>• Prioritize tasks ruthlessly</li>
              <li>• Ask for help when needed</li>
              <li>• Maintain perspective</li>
              <li>• Physical exercise</li>
              <li>• Set boundaries</li>
            </ul>
          </InfoCard>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">In-the-Moment Stress Techniques</h4>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div>
              <p className="font-medium">Deep Breathing</p>
              <p className="text-xs text-muted-foreground">4 seconds in, 4 hold, 4 out</p>
            </div>
            <div>
              <p className="font-medium">Step Away</p>
              <p className="text-xs text-muted-foreground">2-minute break, get water</p>
            </div>
            <div>
              <p className="font-medium">Write It Down</p>
              <p className="text-xs text-muted-foreground">List tasks, clear your head</p>
            </div>
            <div>
              <p className="font-medium">Ask for Help</p>
              <p className="text-xs text-muted-foreground">It's strength, not weakness</p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Solving */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-primary" />
          Problem-Solving Mindset
        </h2>

        <p className="text-muted-foreground mb-4">
          Problems are opportunities to demonstrate value. Clients remember how you solved their problems more than they remember perfect shipments.
        </p>

        <div className="bg-muted/50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-4">5-Step Problem-Solving Process</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
              <div>
                <p className="font-medium">Define the Problem</p>
                <p className="text-sm text-muted-foreground">What exactly is wrong? What are the facts?</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
              <div>
                <p className="font-medium">Identify Root Cause</p>
                <p className="text-sm text-muted-foreground">Why did this happen? Ask "why" 5 times.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
              <div>
                <p className="font-medium">Generate Options</p>
                <p className="text-sm text-muted-foreground">What are possible solutions? Brainstorm without judging.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
              <div>
                <p className="font-medium">Evaluate & Decide</p>
                <p className="text-sm text-muted-foreground">Which option best balances speed, cost, and effectiveness?</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
              <div>
                <p className="font-medium">Implement & Follow Up</p>
                <p className="text-sm text-muted-foreground">Execute the solution, verify it worked, prevent recurrence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Solutions-Oriented Mindset</h4>
            <ul className="text-sm space-y-1">
              <li>• "Here's what we can do..."</li>
              <li>• "I have three options for you..."</li>
              <li>• "To solve this, I recommend..."</li>
              <li>• "This is recoverable, here's how..."</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Avoid Problem-Focused Language</h4>
            <ul className="text-sm space-y-1">
              <li>• "This is impossible..."</li>
              <li>• "It's not my fault..."</li>
              <li>• "We can't do anything..."</li>
              <li>• "That's the carrier's problem..."</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Time Management */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          Time Management & Prioritization
        </h2>

        <p className="text-muted-foreground mb-4">
          In freight forwarding, everything seems urgent. Effective prioritization separates high performers from those drowning in tasks.
        </p>

        <DataTable
          headers={["Priority Matrix", "Urgent", "Not Urgent"]}
          rows={[
            ["Important", "DO FIRST: Delivery problems, client escalations, immediate deadlines", "SCHEDULE: Business development, training, process improvement"],
            ["Not Important", "DELEGATE: Routine admin, simple queries others can handle", "ELIMINATE: Unnecessary meetings, excessive email checking, low-value tasks"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div>
            <h4 className="font-semibold mb-2">Daily Prioritization Habits</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Morning review:</strong> Check today's pickups/deliveries first</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Block time:</strong> Reserve focus time for complex tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Batch similar tasks:</strong> Do all quotes together, then all tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>End-of-day review:</strong> Prepare tomorrow's priority list</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Time Wasters to Avoid</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Constant email checking (check scheduled times)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Unnecessary meetings without agenda</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Perfectionism on low-impact tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive mt-0.5" />
                <span>Multitasking (reduces quality, increases errors)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Proactivity */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          Proactive Mindset
        </h2>

        <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Reactive vs. Proactive Approach</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-destructive mb-2">❌ Reactive</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Waits for client to ask for updates</li>
                <li>• Reports problems after they escalate</li>
                <li>• Relies on others to spot issues</li>
                <li>• Only does what's asked</li>
                <li>• Surprised by predictable problems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-success mb-2">✓ Proactive</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Sends updates before client asks</li>
                <li>• Identifies and communicates risks early</li>
                <li>• Monitors shipments actively</li>
                <li>• Anticipates needs and suggests solutions</li>
                <li>• Plans for known challenges (weather, holidays)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-3">Proactive Behaviors in Freight Forwarding</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>Check tomorrow's shipments today:</strong> Identify potential issues before they happen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>Update clients without prompting:</strong> "Your shipment loaded successfully at 14:30"</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>Anticipate seasonal challenges:</strong> Prepare for holidays, weather, peak periods</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>Suggest improvements:</strong> "I noticed we could save time by..."</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
              <span><strong>Build relationships:</strong> Regular check-ins with key clients and carriers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["soft-skills"] && (
        <Quiz
          title="Soft Skills Knowledge Check"
          questions={quizzes["soft-skills"]}
          chapterId="soft-skills"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
