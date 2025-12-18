import { Truck, Globe, BookOpen, Target, Award, Users, Calendar, MapPin, Building2, Briefcase, CheckCircle2, Star, Clock, Shield, FileText, TrendingUp, Lightbulb, GraduationCap, Heart, Zap, Package, Route, Scale, Phone, Mail, AlertTriangle, Info } from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";
import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";

export function IntroChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-rossik-dark p-8 md:p-12 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <div className="bg-white rounded-lg p-3 inline-block mb-6">
            <img 
              src={rossikLogo} 
              alt="Rossik Logo" 
              className="h-14"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display">
            EU Road Freight Forwarding
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2">
            Extended Training & Operating Manual
          </p>
          <p className="text-primary-foreground/70">
            Version 2025 – Complete English Edition
          </p>
        </div>
        <Truck className="absolute bottom-4 right-4 w-32 h-32 text-primary-foreground/10" />
      </div>

      {/* Welcome Message */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">Welcome to Your Career in Freight Forwarding</h2>
            <p className="text-muted-foreground mb-4">
              Congratulations on joining one of the most dynamic and essential industries in the global economy. As a freight forwarder, 
              you will be at the heart of international trade, connecting businesses across Europe and ensuring goods reach their 
              destinations safely, on time, and cost-effectively.
            </p>
            <p className="text-muted-foreground">
              This comprehensive training manual has been developed by experienced professionals with decades of combined experience 
              in European road transport. Whether you are completely new to logistics or transitioning from another field, this guide 
              will provide you with the knowledge and practical skills needed to excel in your role.
            </p>
          </div>
        </div>
      </div>

      {/* Scope & Audience */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Scope</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            European road transport operations using <strong>13.6m curtainsider/tautliner</strong> 
            with up to <strong>24–29 tonnes payload</strong>.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Full Truck Load (FTL) operations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Part Load (LTL/PTL) groupage</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Cross-border EU transport</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>Temperature-controlled (reefer) basics</span>
            </li>
          </ul>
        </div>

        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Audience</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Trainees and junior freight forwarders/dispatchers in transport and forwarding companies.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>New hires with no prior logistics experience</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Career changers entering freight forwarding</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Junior dispatchers seeking comprehensive knowledge</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Support staff transitioning to operations</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Industry Overview */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          The European Road Freight Industry
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Industry at a Glance</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Road freight is the backbone of European commerce, accounting for approximately 75% of all goods transported 
                within the EU. The industry employs over 3 million people directly and supports countless businesses across 
                manufacturing, retail, and services sectors.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Over €400 billion market value annually</li>
                <li>• 2+ million commercial vehicles active in EU</li>
                <li>• 500,000+ freight forwarding companies</li>
                <li>• Growing 3-4% year-over-year</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Key Trends in 2025</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Digitalization:</strong> eCMR, digital freight exchanges, real-time tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Sustainability:</strong> CO2 reporting, alternative fuels, green corridors</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Driver Shortage:</strong> Aging workforce, recruitment challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Regulatory Changes:</strong> EU Mobility Package, smart tachographs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          Industry Statistics 2024-2025
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">€400B+</p>
            <p className="text-sm text-muted-foreground">Annual Market Value</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">75%</p>
            <p className="text-sm text-muted-foreground">EU Goods by Road</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">3M+</p>
            <p className="text-sm text-muted-foreground">Employed Workers</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">1.8T</p>
            <p className="text-sm text-muted-foreground">Tonne-km Annually</p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          What You Will Learn
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { title: "Operations", desc: "End-to-end workflow from intake to delivery, order management, dispatch planning" },
            { title: "Compliance", desc: "Drivers' hours, tachograph rules, driving bans, weight limits, EU regulations" },
            { title: "Vehicle Knowledge", desc: "13.6m curtainsider specifications, vehicle types, loading configurations" },
            { title: "Pricing & Costing", desc: "Cost calculation, toll systems, margins, fuel surcharges, accessorial fees" },
            { title: "TMS Translogica", desc: "Complete system operation guide, client management, invoicing workflows" },
            { title: "Freight Exchanges", desc: "TIMOCOM, Trans.eu, Teleroute, Transporeon – finding capacity and loads" },
            { title: "Documentation", desc: "CMR consignment notes, customs documents, PODs, insurance certificates" },
            { title: "Client Management", desc: "Building relationships, handling complaints, service quality metrics" },
            { title: "Emergency Procedures", desc: "Handling accidents, breakdowns, delays, cargo damage, escalation paths" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-6 h-6 text-primary" />
          Your Learning Journey
        </h2>
        <div className="info-card">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            <div className="space-y-6">
              {[
                { week: "Week 1-2", title: "Foundations", topics: "Industry overview, vehicle types, basic terminology, company systems" },
                { week: "Week 3-4", title: "Operations Core", topics: "Order handling, dispatch planning, driver communication, TMS basics" },
                { week: "Week 5-6", title: "Compliance & Regulations", topics: "Driving hours, weight limits, documentation requirements, driving bans" },
                { week: "Week 7-8", title: "Pricing & Commercial", topics: "Cost calculation, quoting, freight exchanges, margin management" },
                { week: "Week 9-10", title: "Client Management", topics: "Communication skills, problem solving, complaint handling, KPIs" },
                { week: "Week 11-12", title: "Advanced Topics", topics: "ADR, customs, reefer transport, emergency procedures, case studies" },
              ].map((phase, i) => (
                <div key={i} className="flex gap-4 relative">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{phase.week}</span>
                    </div>
                    <h4 className="font-semibold">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground">{phase.topics}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Roles in Freight Forwarding */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-primary" />
          Key Roles in Freight Forwarding
        </h2>
        <DataTable
          headers={["Role", "Primary Responsibilities", "Key Skills Required", "Typical Career Path"]}
          rows={[
            ["Dispatcher / Planner", "Daily vehicle scheduling, route planning, driver coordination", "Multitasking, geography knowledge, communication", "Junior → Senior → Team Lead"],
            ["Operations Controller", "Load monitoring, issue resolution, client updates", "Problem-solving, attention to detail, stress management", "Controller → Supervisor → Manager"],
            ["Sales / Business Development", "Client acquisition, quotations, relationship management", "Negotiation, market knowledge, networking", "Sales Rep → Account Manager → Sales Director"],
            ["Customer Service", "Client inquiries, POD management, complaint handling", "Communication, empathy, system proficiency", "CS Agent → Team Lead → CS Manager"],
            ["Pricing / Rate Analyst", "Cost calculations, rate negotiations, margin analysis", "Excel skills, market analysis, numerical ability", "Analyst → Senior Analyst → Pricing Manager"],
            ["Customs Specialist", "Documentation, compliance, duty calculations", "Regulatory knowledge, attention to detail", "Junior → Customs Officer → Compliance Manager"],
          ]}
        />
      </section>

      {/* Company Structure */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Building2 className="w-6 h-6 text-primary" />
          Typical Company Structure
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">Operations Department</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Operations Manager</li>
                <li>• Dispatch Team Leaders</li>
                <li>• Dispatchers / Planners</li>
                <li>• Operations Coordinators</li>
                <li>• Night Shift Controllers</li>
              </ul>
            </div>
            <div className="p-4 bg-info/5 rounded-lg">
              <h3 className="font-semibold mb-3 text-info">Commercial Department</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Commercial Director</li>
                <li>• Key Account Managers</li>
                <li>• Sales Representatives</li>
                <li>• Pricing Team</li>
                <li>• Tender Specialists</li>
              </ul>
            </div>
            <div className="p-4 bg-success/5 rounded-lg">
              <h3 className="font-semibold mb-3 text-success">Support Functions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Finance & Accounting</li>
                <li>• Customer Service</li>
                <li>• Fleet Management</li>
                <li>• HR & Training</li>
                <li>• IT & Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Star className="w-6 h-6 text-primary" />
          Core Values of a Professional Freight Forwarder
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Shield, title: "Reliability", desc: "Deliver on promises. If you commit to a deadline, move heaven and earth to meet it." },
            { icon: Phone, title: "Communication", desc: "Proactive updates prevent surprises. Bad news should travel faster than good news." },
            { icon: FileText, title: "Documentation", desc: "If it is not documented, it did not happen. Every action must be traceable." },
            { icon: Scale, title: "Integrity", desc: "Be honest with clients, carriers, and colleagues. Trust is hard to build, easy to lose." },
            { icon: Zap, title: "Responsiveness", desc: "Time is money in logistics. Quick decisions and fast responses win business." },
            { icon: Lightbulb, title: "Problem-Solving", desc: "Issues will arise. Your value is in finding solutions, not just reporting problems." },
          ].map((value, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{value.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Regulations Overview */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          Key EU Regulations You Must Know
        </h2>
        <DataTable
          headers={["Regulation", "Full Name", "Covers", "Why It Matters"]}
          rows={[
            ["EC 561/2006", "Driving Time Regulation", "Driving hours, rest periods", "Fines up to €30,000 for violations"],
            ["EC 165/2014", "Tachograph Regulation", "Recording equipment rules", "Smart tacho V2 mandatory from 2025"],
            ["CMR 1956", "Convention on Road Goods", "Liability, documentation", "Defines carrier responsibility limits"],
            ["ADR 2025", "Dangerous Goods Agreement", "Hazmat transport rules", "Criminal liability for violations"],
            ["Mobility Package", "EU 2020/1054 + 2020/1055", "Cabotage, posting of workers", "Major industry changes 2022-2025"],
            ["eFTI 2020/1056", "Electronic Freight Info", "Digital documentation", "eCMR becoming mandatory"],
          ]}
        />
      </section>

      {/* TMS Note */}
      <div className="highlight-card">
        <div className="flex items-start gap-4">
          <Globe className="w-8 h-8 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-foreground mb-2 font-display">About Our TMS – Translogica</h3>
            <p className="text-muted-foreground mb-4">
              This manual is designed for use with <strong>TMS Translogica</strong> – our integrated 
              transport management system. You will find step-by-step guides for all common operations 
              including client management, order handling, dispatch planning, and invoicing.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Key TMS Modules:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Client & Partner Management</li>
                  <li>• Order Entry & Processing</li>
                  <li>• Dispatch & Route Planning</li>
                  <li>• Real-time Tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Integration Features:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Freight Exchange Connectivity</li>
                  <li>• Automatic Document Generation</li>
                  <li>• Financial Reporting</li>
                  <li>• Customer Portal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-primary" />
          Important Contact Information
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-destructive/30 rounded-xl p-4">
            <h3 className="font-semibold mb-3 text-destructive">Emergency Contacts</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span><strong>EU Emergency:</strong> 112 (all countries)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span><strong>ADAC (DE):</strong> +49 89 22 22 22</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span><strong>ÖAMTC (AT):</strong> +43 1 25 120</span>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold mb-3">Internal Escalation</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Level 1:</strong> Your direct supervisor</p>
              <p><strong>Level 2:</strong> Operations Manager</p>
              <p><strong>Level 3:</strong> Department Director</p>
              <p><strong>After Hours:</strong> Night shift duty manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use This Manual */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-primary" />
          How to Use This Manual
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">For New Trainees</h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Read chapters sequentially for structured learning</li>
                <li>Complete the quiz at the end of each chapter</li>
                <li>Use the glossary for unfamiliar terms</li>
                <li>Practice scenarios in the case studies section</li>
                <li>Track your progress using the dashboard</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">For Reference</h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Use the search function to find specific topics</li>
                <li>Bookmark frequently used sections</li>
                <li>Check the checklists for daily operations</li>
                <li>Refer to data tables for quick lookups</li>
                <li>Download PDFs for offline access</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Preview */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Info className="w-6 h-6 text-primary" />
          Essential Terms to Know
        </h2>
        <DataTable
          headers={["Term", "Definition", "German Equivalent"]}
          rows={[
            ["FTL", "Full Truck Load – entire vehicle for single shipment", "Komplettladung"],
            ["LTL/PTL", "Less Than / Part Truck Load – shared capacity", "Teilladung"],
            ["CMR", "International consignment note for road transport", "Frachtbrief"],
            ["POD", "Proof of Delivery – signed delivery confirmation", "Ablieferungsnachweis"],
            ["ETA/ETD", "Estimated Time of Arrival / Departure", "Geschätzte Ankunft/Abfahrt"],
            ["LDM", "Loading Meters – floor space measurement", "Lademeter"],
            ["Tautliner", "Curtain-sided trailer (same as curtainsider)", "Schiebeplanenauflieger"],
            ["Cabotage", "Domestic transport by foreign carrier", "Kabotage"],
          ]}
        />
        <p className="text-sm text-muted-foreground mt-4 italic">
          See the complete Glossary chapter for 120+ industry terms with detailed explanations.
        </p>
      </section>

      {/* Success Tips */}
      <div className="bg-gradient-to-r from-success/10 to-success/5 border border-success/20 rounded-xl p-6">
        <h2 className="section-title flex items-center gap-3 text-success">
          <GraduationCap className="w-6 h-6" />
          Tips for Success in Your Training
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Ask Questions</h4>
                <p className="text-sm text-muted-foreground">There are no stupid questions. Better to ask than to make costly mistakes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Take Notes</h4>
                <p className="text-sm text-muted-foreground">Write down tips from experienced colleagues. Build your personal knowledge base.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Learn from Mistakes</h4>
                <p className="text-sm text-muted-foreground">Everyone makes errors. What matters is understanding why and preventing repeats.</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Build Relationships</h4>
                <p className="text-sm text-muted-foreground">Get to know drivers, clients, and partners. Logistics runs on trust and relationships.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Stay Organized</h4>
                <p className="text-sm text-muted-foreground">Use checklists, calendars, and reminders. A cluttered desk means a cluttered mind.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Be Patient</h4>
                <p className="text-sm text-muted-foreground">Mastery takes time. Focus on daily improvement rather than instant expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Begin */}
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Truck className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2 font-display">Ready to Begin?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Continue to the next chapter to understand the essential mindset and human factors that 
          separate good freight forwarders from great ones. Your journey to becoming a logistics 
          professional starts now!
        </p>
      </div>
    </div>
  );
}
