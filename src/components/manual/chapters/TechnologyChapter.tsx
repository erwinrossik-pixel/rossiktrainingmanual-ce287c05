import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Cpu, Smartphone, Cloud, Globe, BarChart3, Zap, Shield, TrendingUp, CheckCircle2, AlertTriangle, Bot, Wifi, Database, MapPin } from "lucide-react";

export function TechnologyChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Technology & Digitalization</h1>
        <p className="text-lg text-muted-foreground">
          Digital transformation in freight forwarding: TMS systems, tracking technologies, automation, AI applications, and the future of logistics technology.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Cpu className="w-6 h-6 text-primary" />
          Digital Transformation in Logistics
        </h2>
        <p className="text-muted-foreground mb-4">
          The logistics industry is undergoing rapid digital transformation. Modern freight forwarders leverage technology for efficiency, visibility, and competitive advantage. Understanding these tools is essential for career success.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Cloud className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Cloud TMS</p>
            <p className="text-xs text-muted-foreground">Centralized operations</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Real-time Tracking</p>
            <p className="text-xs text-muted-foreground">GPS & telematics</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Bot className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">AI & Automation</p>
            <p className="text-xs text-muted-foreground">Smart decision support</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Digital Platforms</p>
            <p className="text-xs text-muted-foreground">Connected ecosystem</p>
          </div>
        </div>
      </div>

      {/* TMS Systems */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Database className="w-6 h-6 text-primary" />
          Transport Management Systems (TMS)
        </h2>

        <p className="text-muted-foreground mb-4">
          A TMS is the central nervous system of a freight forwarding operation, managing orders, carriers, tracking, documentation, and invoicing in one integrated platform.
        </p>

        <DataTable
          headers={["Module", "Functions", "Benefits"]}
          rows={[
            ["Order Management", "Order entry, validation, confirmation", "Reduced errors, faster processing"],
            ["Dispatch Planning", "Load assignment, route optimization", "Better resource utilization"],
            ["Carrier Management", "Carrier database, qualification, performance", "Quality control, compliance"],
            ["Tracking & Tracing", "Real-time visibility, ETA calculation", "Proactive issue management"],
            ["Documentation", "CMR generation, POD management", "Paperless operations, audit trail"],
            ["Financial", "Invoicing, cost calculation, margin analysis", "Faster cash flow, profitability insight"],
            ["Reporting", "KPIs, analytics, dashboards", "Data-driven decisions"],
            ["Integration", "EDI, API connections, carrier systems", "Automated data exchange"],
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Common TMS Providers</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Translogica</strong> - Popular in DACH region</li>
              <li>• <strong>CargoWise</strong> - Global, comprehensive</li>
              <li>• <strong>SAP TM</strong> - Enterprise integration</li>
              <li>• <strong>Oracle TMS</strong> - Large enterprises</li>
              <li>• <strong>Alpega TMS</strong> - European focus</li>
              <li>• <strong>project44</strong> - Visibility platform</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">TMS Selection Criteria</h4>
            <ul className="text-sm space-y-1">
              <li>• Ease of use and learning curve</li>
              <li>• Integration capabilities (EDI, API)</li>
              <li>• Carrier connectivity</li>
              <li>• Reporting and analytics</li>
              <li>• Scalability</li>
              <li>• Total cost of ownership</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tracking Technologies */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Wifi className="w-6 h-6 text-primary" />
          Tracking & Visibility Technologies
        </h2>

        <DataTable
          headers={["Technology", "How It Works", "Use Cases", "Accuracy"]}
          rows={[
            ["GPS Tracking", "Satellite-based vehicle location", "Real-time truck position, ETA", "3-15 meters"],
            ["Telematics", "GPS + vehicle data (speed, fuel, etc.)", "Fleet management, driver behavior", "High"],
            ["Cellular IoT", "Mobile network sensor tracking", "Trailer/container tracking", "Cell tower based"],
            ["RFID", "Radio frequency identification tags", "Warehouse, yard management", "Read range dependent"],
            ["Bluetooth Beacons", "Short-range wireless tracking", "Indoor tracking, last mile", "1-3 meters"],
            ["LoRaWAN", "Long-range, low-power sensors", "Temperature monitoring, rural areas", "GPS-enhanced"],
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <InfoCard title="Vehicle Tracking" icon={MapPin}>
            <ul className="text-sm space-y-1">
              <li>• Real-time GPS position</li>
              <li>• Speed and route monitoring</li>
              <li>• Geofencing alerts</li>
              <li>• ETA calculation</li>
              <li>• Historical playback</li>
            </ul>
          </InfoCard>
          <InfoCard title="Cargo Monitoring" icon={Shield}>
            <ul className="text-sm space-y-1">
              <li>• Temperature logging</li>
              <li>• Humidity sensors</li>
              <li>• Shock/tilt detection</li>
              <li>• Door open alerts</li>
              <li>• Light exposure</li>
            </ul>
          </InfoCard>
          <InfoCard title="Visibility Platforms" icon={Globe}>
            <ul className="text-sm space-y-1">
              <li>• project44</li>
              <li>• FourKites</li>
              <li>• Shippeo</li>
              <li>• Sixfold</li>
              <li>• Transporeon Visibility</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Automation & AI */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Bot className="w-6 h-6 text-primary" />
          Automation & Artificial Intelligence
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-3">Process Automation (RPA)</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Order Entry:</strong> Auto-import from emails, portals</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Document Processing:</strong> OCR for CMRs, invoices</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Status Updates:</strong> Automated tracking notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Invoice Matching:</strong> Auto-reconciliation</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Reporting:</strong> Scheduled report generation</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">AI Applications</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Rate Prediction:</strong> Dynamic pricing recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>ETA Prediction:</strong> ML-based arrival forecasting</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Demand Forecasting:</strong> Capacity planning</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Route Optimization:</strong> Best route selection</span>
              </li>
              <li className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Anomaly Detection:</strong> Fraud, delay risk alerts</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">AI Impact on Freight Forwarding</h4>
          <p className="text-sm text-muted-foreground">
            AI doesn't replace freight forwarders - it augments their capabilities. AI handles routine decisions and data analysis, freeing forwarders to focus on relationship building, complex problem solving, and strategic decisions that require human judgment.
          </p>
        </div>
      </div>

      {/* Digital Platforms */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          Digital Freight Platforms
        </h2>

        <DataTable
          headers={["Platform Type", "Examples", "Function", "For Whom"]}
          rows={[
            ["Freight Exchanges", "TIMOCOM, Trans.eu, Teleroute", "Spot market matching", "Forwarders, carriers"],
            ["Digital Forwarders", "Flexport, Forto, Sennder", "End-to-end digital booking", "Shippers"],
            ["Carrier Marketplaces", "Uber Freight, Convoy", "Direct shipper-carrier matching", "Shippers, carriers"],
            ["Visibility Networks", "project44, FourKites", "Real-time tracking aggregation", "Shippers, forwarders"],
            ["Tender Platforms", "Transporeon, Freightos", "RFQ management, rate bidding", "Shippers, forwarders"],
            ["Customs/Compliance", "Descartes, MIC", "Digital customs processing", "Forwarders, customs"],
          ]}
        />

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            Digital Disruption
          </h4>
          <p className="text-sm">
            Digital platforms are changing the industry. Traditional forwarders must embrace technology or risk losing business to digital-native competitors. However, complex logistics still require human expertise - technology is a tool, not a replacement.
          </p>
        </div>
      </div>

      {/* Data & Analytics */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          Data & Analytics
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Key Metrics to Track</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>On-time delivery performance by lane/carrier</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Cost per km/shipment trends</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Margin analysis by customer/service</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Carrier performance scorecards</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Customer satisfaction scores</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Analytics Tools</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>TMS Reports:</strong> Built-in dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Excel/Sheets:</strong> Ad-hoc analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Power BI/Tableau:</strong> Advanced visualization</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>Python/R:</strong> Statistical analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-primary mt-0.5" />
                <span><strong>AI Tools:</strong> Predictive analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cybersecurity */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          Cybersecurity in Logistics
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Common Threats</h4>
            <ul className="text-sm space-y-1">
              <li>• Phishing emails (fake booking requests)</li>
              <li>• Ransomware attacks on TMS</li>
              <li>• Payment fraud (fake carrier invoices)</li>
              <li>• Data breaches (customer information)</li>
              <li>• GPS spoofing</li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Protection Measures</h4>
            <ul className="text-sm space-y-1">
              <li>• Strong passwords, 2FA authentication</li>
              <li>• Regular security training</li>
              <li>• Verify payment details by phone</li>
              <li>• Regular system backups</li>
              <li>• Encrypted communications</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Future Trends */}
      <div className="info-card bg-muted/30">
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          Future Technology Trends
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Near Term (1-3 years)</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Wider AI adoption</li>
              <li>• Enhanced visibility platforms</li>
              <li>• Digital document standards</li>
              <li>• Automated booking</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Medium Term (3-5 years)</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Blockchain for documentation</li>
              <li>• Autonomous yard operations</li>
              <li>• IoT everywhere</li>
              <li>• Predictive logistics</li>
            </ul>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Long Term (5+ years)</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Autonomous trucks</li>
              <li>• Drone deliveries</li>
              <li>• Physical internet concept</li>
              <li>• Fully automated warehouses</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["technology"] && (
        <Quiz
          title="Technology & Digitalization Quiz"
          questions={quizzes["technology"]}
          chapterId="technology"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
