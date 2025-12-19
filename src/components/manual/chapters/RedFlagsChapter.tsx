import { AlertTriangle, Lightbulb, X, Check, Shield, Eye, Clock, Euro, Users, FileText, MapPin, Truck, Phone, Ban, Scale, Zap, Target, Brain, CheckCircle2 } from "lucide-react";
import { Quiz } from "../Quiz";
import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { quizzes } from "@/data/quizData";

export function RedFlagsChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-destructive to-destructive/80 p-8 md:p-12 text-destructive-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <AlertTriangle className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Red Flags & Pro Tips
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Critical warning signs to watch for, common pitfalls to avoid, and expert advice for success in freight forwarding.
          </p>
        </div>
      </div>

      {/* Why Red Flags Matter */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Eye className="w-6 h-6 text-primary" />
          Why Recognizing Red Flags is Critical
        </h2>
        <p className="text-muted-foreground mb-4">
          In freight forwarding, one mistake can cost thousands of euros and damage client relationships permanently. Learning to recognize warning signs early can save you from costly errors and protect your company's reputation.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Euro className="w-8 h-8 text-destructive mx-auto mb-2" />
            <p className="text-2xl font-bold text-destructive">€5-50k</p>
            <p className="text-xs text-muted-foreground">Average claim cost</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold text-warning">80%</p>
            <p className="text-xs text-muted-foreground">Claims from poor vetting</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Clock className="w-8 h-8 text-info mx-auto mb-2" />
            <p className="text-2xl font-bold text-info">48h</p>
            <p className="text-xs text-muted-foreground">Time to spot fraud</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Shield className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold text-success">95%</p>
            <p className="text-xs text-muted-foreground">Preventable issues</p>
          </div>
        </div>
      </div>

      {/* Critical Red Flags - Carriers */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-destructive">
          <Ban className="w-6 h-6" />
          Carrier Red Flags - Do Not Proceed!
        </h2>
        
        <div className="space-y-4">
          {[
            {
              title: "Company Less Than 6 Months Old",
              desc: "New companies have no track record. Many fraud operations are set up, used, and abandoned within months.",
              severity: "critical",
              action: "Reject or require prepayment + verified references"
            },
            {
              title: "No Freight Exchange Ratings or Very Low Scores",
              desc: "Legitimate carriers build ratings over time. Zero ratings after months of claimed operation is suspicious.",
              severity: "critical",
              action: "Avoid or proceed with extreme caution, first load only"
            },
            {
              title: "Insurance Documents Look Fake or Expired",
              desc: "Forged insurance certificates are common in fraud. Always verify directly with the insurer.",
              severity: "critical",
              action: "Call insurance company to verify certificate is genuine"
            },
            {
              title: "Prices Significantly Below Market Rate",
              desc: "If it's too good to be true, it probably is. Below-market rates often signal fraud or desperation.",
              severity: "high",
              action: "Question why they're cheap - usually a bad sign"
            },
            {
              title: "Communication Only via WhatsApp/Mobile",
              desc: "Professional carriers have office lines, email domains. Mobile-only contact suggests one-person operation.",
              severity: "medium",
              action: "Request landline, verify office address exists"
            },
            {
              title: "Refuses to Provide Documentation",
              desc: "Legitimate carriers readily provide license, insurance, registration. Reluctance = hiding something.",
              severity: "critical",
              action: "Do not proceed without full documentation"
            },
            {
              title: "Pressure to Decide Immediately",
              desc: "Fraudsters create urgency to prevent you from doing proper checks. Legitimate carriers understand due diligence.",
              severity: "high",
              action: "Always take time to verify - if they can't wait, let them go"
            },
            {
              title: "Bank Details in Different Country than Registration",
              desc: "Company registered in Poland but bank account in Bulgaria? Major fraud indicator.",
              severity: "critical",
              action: "Verify bank account matches company country"
            },
          ].map((item, i) => (
            <div key={i} className={`p-5 rounded-xl border ${
              item.severity === 'critical' ? 'bg-destructive/10 border-destructive/30' :
              item.severity === 'high' ? 'bg-warning/10 border-warning/30' :
              'bg-info/10 border-info/30'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.severity === 'critical' ? 'bg-destructive/20' :
                  item.severity === 'high' ? 'bg-warning/20' :
                  'bg-info/20'
                }`}>
                  <X className={`w-5 h-5 ${
                    item.severity === 'critical' ? 'text-destructive' :
                    item.severity === 'high' ? 'text-warning' :
                    'text-info'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      item.severity === 'critical' ? 'bg-destructive text-destructive-foreground' :
                      item.severity === 'high' ? 'bg-warning text-warning-foreground' :
                      'bg-info text-info-foreground'
                    }`}>
                      {item.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-success">
                    <Lightbulb className="w-4 h-4" />
                    <span><strong>Action:</strong> {item.action}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-warning">
          <Euro className="w-6 h-6" />
          Pricing & Costing Red Flags
        </h2>
        
        <DataTable
          headers={["Red Flag", "What It Means", "How to Avoid", "Impact"]}
          rows={[
            ["Cheap FR Lanes Without Toll Analysis", "France has expensive tolls (€0.28-0.33/km). Accepting 'all-in' rates without calculating tolls leads to losses.", "Always calculate tolls with ViaMichelin or Google Maps toll option", "€100-300 loss per trip"],
            ["Ignoring Swiss LSVA Costs", "Switzerland has the highest toll rates in Europe (€0.55/km). Easy to underestimate on CH transit.", "Add €0.55/km for Swiss sections, verify route", "€50-200+ loss"],
            ["Underestimating Ferry/Tunnel Costs", "Mont Blanc tunnel €280+, Calais-Dover €180+. These add significantly to costs.", "Get exact ferry/tunnel quotes before pricing", "€100-400 loss"],
            ["Not Including Waiting Time Buffer", "Loading delays happen. Quoting without waiting time provision causes disputes.", "Include €50-100 buffer or specify waiting rates", "€50-200 per occurrence"],
            ["Quoting Before Verifying Carrier Cost", "Eager to win business, quote without checking actual carrier availability and cost.", "Always verify carrier cost BEFORE quoting client", "Variable - can wipe margin"],
            ["Seasonal Rate Blindness", "Using standard rates during peak season when carriers charge 20-40% more.", "Check current spot rates before quoting", "Entire margin erased"],
          ]}
        />
      </div>

      {/* Compliance Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-destructive">
          <Scale className="w-6 h-6" />
          Compliance Red Flags
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Germany's CO₂ Toll Tiers (2024+)",
              desc: "Toll rates now depend on CO₂ class AND axle count. Euro 6 trucks pay less than older vehicles. Wrong calculation = margin erosion.",
              tip: "Verify exact vehicle specs and emission class before quoting German routes."
            },
            {
              title: "Tirol/Austria Restrictions",
              desc: "Night driving bans, sectoral driving bans, and double toll between 22:00-05:00 on Brenner. Many drivers caught unaware.",
              tip: "Plan alternative corridors (Fernpass, Reschenpass) or adjust timing."
            },
            {
              title: "Sunday/Holiday Driving Bans",
              desc: "Most EU countries ban HGV driving on Sundays and public holidays. Ignoring this = stranded trucks, delays, fines.",
              tip: "Check ALL countries on route for driving bans, plan around them."
            },
            {
              title: "Driver Hours Miscalculation",
              desc: "Assuming 9h driving = 700km ignores breaks, borders, loading time. Real daily distance often 500-600km.",
              tip: "Calculate shift time, not just driving time. Include loading windows."
            },
            {
              title: "Weight Limits Variation",
              desc: "40t in Germany, 44t in Belgium, 50t in Netherlands (domestic). Overweight fines can exceed €10,000.",
              tip: "Verify max weight for ALL countries on route, not just origin/destination."
            },
            {
              title: "LEZ/ZTL Entry Requirements",
              desc: "Low Emission Zones and ZTL zones require permits or specific vehicle classes. Entry without = €200-500 fines.",
              tip: "Check destination city requirements, ensure carrier has necessary permits."
            },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-destructive/5 rounded-xl border border-destructive/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-success">
                    <Lightbulb className="w-4 h-4" />
                    <span>{item.tip}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3 text-warning">
          <Users className="w-6 h-6" />
          Client Red Flags
        </h2>

        <DataTable
          headers={["Warning Sign", "What It Indicates", "Recommended Action"]}
          rows={[
            ["New company, large order, wants credit immediately", "Classic fraud pattern - build debt, disappear", "Start with prepayment, build credit gradually"],
            ["Constantly pushes for lower prices", "Will never be profitable, high maintenance", "Set clear boundaries or walk away"],
            ["Vague cargo descriptions", "May be hiding dangerous goods, value, or problems", "Require full details before accepting"],
            ["Multiple address changes for delivery", "Could be redirection fraud or operational chaos", "Verify each change, get written confirmation"],
            ["Disputes every invoice", "Cash flow nightmare, relationship will deteriorate", "Clarify terms upfront, document everything"],
            ["Unrealistic delivery expectations", "Sets you up for failure, will blame you", "Educate on realistic timelines or decline"],
            ["Won't provide purchase order or reference", "May not pay, creates billing problems", "Require written order confirmation always"],
            ["Asks you to invoice a different entity", "Possible VAT fraud, payment avoidance", "Invoice only the contracting party"],
          ]}
        />
      </div>

      {/* Documentation Red Flags */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          Documentation Red Flags
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
              <X className="w-5 h-5" />
              Never Accept:
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <span>Clean CMR when you can see damage at loading</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <span>POD without date, time, stamp, or signature</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <span>Scanned copies without original available</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <span>Temperature records with gaps or errors</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <span>CMR with different vehicle than booked</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <span>Late claim without written reservation</span>
              </li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Always Require:
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Photos at loading AND unloading (timestamped)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Written reservations for any visible issues</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>CMR signed by all parties with stamps</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Delivery confirmation within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Written order confirmation before dispatch</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Complete temperature logs for reefer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="space-y-4">
        <h2 className="section-title flex items-center gap-3 text-success">
          <Lightbulb className="w-6 h-6" />
          Pro Tips – Best Practices from Experienced Forwarders
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Photo + Timestamp = Protection",
              desc: "Every loading and unloading should be documented with timestamped photos. This is your insurance defense. No photos = no proof = claim denied.",
              icon: FileText
            },
            {
              title: "Store Lane Templates",
              desc: "Create templates in your TMS for regular routes with pre-calculated tolls, distances, and typical rates. Saves time and prevents calculation errors.",
              icon: MapPin
            },
            {
              title: "Build Carrier Relationships",
              desc: "Reliable carriers are worth more than cheap spot rates. A trusted carrier who answers at 18:00 on Friday is invaluable. Invest in long-term partnerships.",
              icon: Users
            },
            {
              title: "Communicate Proactively",
              desc: "Inform clients about delays BEFORE they ask. Bad news delivered early is always better than surprises. Clients forgive problems; they don't forgive silence.",
              icon: Phone
            },
            {
              title: "Double-Check Border Crossings",
              desc: "Verify customs requirements, transit permits (T1/T2), and any special documentation needed. Non-EU borders cause 80% of delays for unprepared forwarders.",
              icon: Shield
            },
            {
              title: "Use the 4W Model Always",
              desc: "Who, What, When, Where – cover these in every communication and you'll avoid 90% of misunderstandings. Add 'How Much' for pricing discussions.",
              icon: Target
            },
            {
              title: "Never Skip Vehicle Checks",
              desc: "Verify carrier has correct equipment BEFORE confirming. Mega trailer needed? Tail lift required? Double-deck? Confirm in writing.",
              icon: Truck
            },
            {
              title: "Build Your Knowledge Daily",
              desc: "Toll rates change. Regulations update. New routes emerge. Spend 15 minutes daily learning something new about your key lanes.",
              icon: Brain
            },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-success/5 rounded-xl border border-success/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Habits of Successful Dispatchers */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          Daily Habits of Successful Dispatchers
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">Morning Routine</h4>
            <ul className="text-sm space-y-1">
              <li>• Check all pickups scheduled for today</li>
              <li>• Verify driver confirmations received</li>
              <li>• Review overnight tracking alerts</li>
              <li>• Check weather/traffic for key routes</li>
              <li>• Prioritize urgent issues first</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">Throughout the Day</h4>
            <ul className="text-sm space-y-1">
              <li>• Update tracking status proactively</li>
              <li>• Respond to queries within 30 minutes</li>
              <li>• Document everything in writing</li>
              <li>• Escalate issues early, not late</li>
              <li>• Plan tomorrow's pickups in afternoon</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">End of Day</h4>
            <ul className="text-sm space-y-1">
              <li>• Confirm all deliveries completed</li>
              <li>• Chase missing PODs immediately</li>
              <li>• Update TMS with all changes</li>
              <li>• Prepare handover notes if needed</li>
              <li>• Check next day's schedule</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Golden Rules */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-rossik-dark p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold mb-6 font-serif">🏆 The 10 Golden Rules of Freight Forwarding</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Documentation = Protection - If it's not written, it didn't happen",
            "Communicate Early - Bad news doesn't improve with age",
            "Verify Before You Trust - Check everything, assume nothing",
            "Plan for Problems - Always have a backup plan",
            "Know Your Costs - Never quote without calculating",
            "Respect Your Partners - Carriers and clients are both essential",
            "Never Compromise on Safety - No load is worth an accident",
            "Learn from Every Mistake - Debrief problems, improve processes",
            "Build Relationships - Long-term partnerships beat one-time deals",
            "Stay Curious - The industry evolves; evolve with it",
          ].map((rule, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg">
              <span className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <span className="text-sm">{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reference: What to Check */}
      <div className="info-card">
        <h2 className="section-title">Quick Reference: Verification Checklist</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" />
              Before Booking Carrier
            </h4>
            <ul className="text-sm space-y-1">
              {[
                "Valid transport license",
                "Current CMR insurance",
                "Freight exchange ratings",
                "Company registration check",
                "Physical address verified",
                "Contact details confirmed"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Euro className="w-4 h-4 text-primary" />
              Before Quoting Price
            </h4>
            <ul className="text-sm space-y-1">
              {[
                "Total distance calculated",
                "All tolls included",
                "Ferry/tunnel costs added",
                "Carrier cost verified",
                "Margin calculated",
                "Waiting time provision"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Before Dispatch
            </h4>
            <ul className="text-sm space-y-1">
              {[
                "Driver details confirmed",
                "Vehicle type correct",
                "Route checked for bans",
                "Loading slot booked",
                "CMR data prepared",
                "Client expectations set"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="Red Flags & Pro Tips Quiz" questions={quizzes["red-flags"]} chapterId="red-flags" />
    </div>
  );
}
