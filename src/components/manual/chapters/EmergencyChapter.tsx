import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { FlowDiagram, DecisionDiagram, ProcessMap } from "../FlowDiagram";
import { quizzes } from "@/data/quizData";
import { AlertTriangle, Phone, FileText, Shield, Truck, MapPin, Clock, CheckCircle } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function EmergencyChapter() {
  const { ct } = useChapterTranslation("emergency");
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-destructive to-destructive/80 p-8 md:p-12 text-destructive-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <AlertTriangle className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            {ct("title")}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            {ct("subtitle")}
          </p>
        </div>
      </div>

      {/* Emergency Response Flow */}
      <FlowDiagram
        title="Emergency Response Protocol"
        steps={[
          { id: "secure", label: "Secure Scene", description: "Hazards & safety", color: "destructive" },
          { id: "call", label: "Call 112", description: "Emergency services", color: "warning" },
          { id: "document", label: "Document", description: "Photos & info", color: "info" },
          { id: "notify", label: "Notify", description: "Dispatcher", color: "primary" },
          { id: "wait", label: "Wait", description: "Follow instructions", color: "success" },
        ]}
      />

      {/* Decision Diagram */}
      <DecisionDiagram
        title="Injury Assessment"
        question="Are there injuries?"
        yesPath={{
          label: "Call 112 First",
          result: "Provide first aid, wait for ambulance"
        }}
        noPath={{
          label: "Secure & Document",
          result: "Exchange info, call dispatcher"
        }}
      />

      {/* Emergency Response Process Map */}
      <ProcessMap
        title="Emergency Situation Handling"
        phases={[
          {
            name: "Road Accident",
            color: "destructive",
            steps: [
              "Turn on hazard lights",
              "Place warning triangle",
              "Put on high-vis vest",
              "Call 112 immediately",
              "Document with photos"
            ]
          },
          {
            name: "Vehicle Breakdown",
            color: "warning",
            steps: [
              "Pull off the road",
              "Activate hazards",
              "Exit on safe side",
              "Call breakdown service",
              "Notify dispatcher"
            ]
          },
          {
            name: "Cargo Damage",
            color: "info",
            steps: [
              "Stop and assess",
              "Take timestamped photos",
              "Note CMR reservation",
              "Do NOT sign clean POD",
              "Inform all parties"
            ]
          },
          {
            name: "Theft/Security",
            color: "primary",
            steps: [
              "Do NOT confront",
              "Call police (112)",
              "Preserve crime scene",
              "Document everything",
              "Notify insurance"
            ]
          }
        ]}
      />

      {/* Emergency Contacts */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          Emergency Contact Numbers
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="European Emergency Number" icon={Phone} variant="warning">
            <p className="text-2xl font-bold text-warning">112</p>
            <p>Works in all EU countries for police, ambulance, fire.</p>
          </InfoCard>
          <InfoCard title="Roadside Assistance" icon={Truck} variant="info">
            <ul className="space-y-1">
              <li><strong>ADAC (Germany):</strong> +49 89 22 22 22</li>
              <li><strong>ÖAMTC (Austria):</strong> +43 1 120</li>
              <li><strong>AA (UK):</strong> +44 800 887 766</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Accident Protocol */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Road Accident Protocol
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-destructive">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Secure the Scene</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Turn on hazard lights immediately</li>
                  <li>• Place warning triangle 100-200m behind vehicle</li>
                  <li>• Put on high-visibility vest before leaving vehicle</li>
                  <li>• Move injured to safety if possible</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-warning">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Emergency Services</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Call 112 (European emergency number)</li>
                  <li>• Provide exact location (GPS coordinates, highway markers)</li>
                  <li>• Describe injuries and number of vehicles involved</li>
                  <li>• Stay on the line until instructed otherwise</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-info">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Document Everything</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Take photos of all vehicles, damages, road conditions</li>
                  <li>• Get witness contact details</li>
                  <li>• Exchange insurance information with other parties</li>
                  <li>• Fill in European Accident Statement (if available)</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-success">4</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Notify Dispatcher</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Call your dispatcher immediately after scene is secured</li>
                  <li>• Provide location, nature of accident, estimated delay</li>
                  <li>• Wait for instructions before moving cargo</li>
                  <li>• Keep all documentation for claims</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown Procedures */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          Breakdown Procedures
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Highway Breakdown" icon={MapPin} variant="warning">
            <ol className="space-y-2 list-decimal list-inside">
              <li>Pull completely off the road if possible</li>
              <li>Activate hazard lights and place warning triangle</li>
              <li>Exit vehicle on the side away from traffic</li>
              <li>Call breakdown service from behind barrier</li>
              <li>Never attempt repairs on the highway</li>
            </ol>
          </InfoCard>
          <InfoCard title="Urban/Rural Breakdown" icon={MapPin} variant="info">
            <ol className="space-y-2 list-decimal list-inside">
              <li>Find safe parking spot off traffic flow</li>
              <li>Assess if minor repair is possible</li>
              <li>Contact dispatcher with ETA for repair</li>
              <li>Secure cargo before leaving vehicle</li>
              <li>Document condition with photos</li>
            </ol>
          </InfoCard>
        </div>
      </section>

      {/* Cargo Damage */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Cargo Damage Protocol
        </h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-warning flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Immediate Actions
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Stop and assess damage extent</li>
                <li>• Take detailed photos with timestamps</li>
                <li>• Note CMR reservation on delivery</li>
                <li>• Do NOT sign clean POD if damaged</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-info flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Notification
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Inform dispatcher immediately</li>
                <li>• Notify shipper/consignee</li>
                <li>• Report to insurance if significant</li>
                <li>• Keep all parties updated</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-success flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Documentation
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Written description of damage</li>
                <li>• Photos before and after</li>
                <li>• Witness statements if available</li>
                <li>• Preserve damaged goods if possible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Theft Prevention */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          Theft Prevention & Response
        </h2>
        <InfoCard title="High-Risk Areas & Prevention" icon={AlertTriangle} variant="warning">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Prevention Measures</h4>
              <ul className="space-y-1">
                <li>• Use secure parking (TAPA certified if high-value)</li>
                <li>• Never leave truck unattended at rest areas</li>
                <li>• Vary routes and parking locations</li>
                <li>• Install tracking and alarm systems</li>
                <li>• Keep cargo information confidential</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">If Theft Occurs</h4>
              <ul className="space-y-1">
                <li>• Call police immediately (112)</li>
                <li>• Do not chase or confront thieves</li>
                <li>• Document everything visible</li>
                <li>• Notify dispatcher and insurance</li>
                <li>• Preserve crime scene for police</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* Crisis Communication */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          Crisis Communication Checklist
        </h2>
        <div className="bg-muted/30 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Driver safety confirmed first",
              "Emergency services contacted",
              "Exact location shared (GPS)",
              "Photos/video captured",
              "Dispatcher notified with details",
              "Client/shipper informed",
              "Insurance notified if required",
              "Written incident report started",
              "Alternative transport arranged",
              "All documentation secured"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section>
        <h2 className="text-2xl font-bold mb-4 font-serif flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" />
          Emergency Response Times
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left border border-border">Situation</th>
                <th className="p-3 text-left border border-border">Notify Within</th>
                <th className="p-3 text-left border border-border">Who to Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border">Road accident with injuries</td>
                <td className="p-3 border border-border text-destructive font-semibold">Immediate</td>
                <td className="p-3 border border-border">112 → Dispatcher → Insurance</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">Vehicle breakdown</td>
                <td className="p-3 border border-border text-warning font-semibold">15 minutes</td>
                <td className="p-3 border border-border">Breakdown service → Dispatcher</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Cargo damage discovered</td>
                <td className="p-3 border border-border text-warning font-semibold">30 minutes</td>
                <td className="p-3 border border-border">Dispatcher → Shipper/Consignee</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="p-3 border border-border">Theft or robbery</td>
                <td className="p-3 border border-border text-destructive font-semibold">Immediate</td>
                <td className="p-3 border border-border">Police (112) → Dispatcher → Insurance</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Delay &gt;1 hour</td>
                <td className="p-3 border border-border text-info font-semibold">1 hour</td>
                <td className="p-3 border border-border">Dispatcher → Client</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quiz */}
      {quizzes.emergency && (
        <Quiz title="Emergency Procedures Quiz" questions={quizzes.emergency} chapterId="emergency" />
      )}
    </div>
  );
}
