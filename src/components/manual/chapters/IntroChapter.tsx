import { Truck, Globe, BookOpen, Target, Award } from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";

export function IntroChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-rossik-dark p-8 md:p-12 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <img 
            src={rossikLogo} 
            alt="Rossik Logo" 
            className="h-16 mb-6 brightness-0 invert"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
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

      {/* Scope Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Scope</h2>
          </div>
          <p className="text-muted-foreground">
            European road transport operations using <strong>13.6m curtainsider/tautliner</strong> 
            with up to <strong>24–29 tonnes payload</strong>.
          </p>
        </div>

        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">Audience</h2>
          </div>
          <p className="text-muted-foreground">
            Trainees and junior freight forwarders/dispatchers in transport and forwarding companies.
          </p>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          What You'll Learn
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { title: "Operations", desc: "End-to-end workflow from intake to delivery" },
            { title: "Compliance", desc: "Drivers' hours, regulations, driving bans" },
            { title: "Vehicle Knowledge", desc: "13.6m curtainsider specifications" },
            { title: "Pricing", desc: "Cost calculation, tolls, margins" },
            { title: "TMS Translogica", desc: "Complete system operation guide" },
            { title: "Freight Exchanges", desc: "TIMOCOM, Trans.eu, Teleroute, Transporeon" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TMS Note */}
      <div className="highlight-card">
        <div className="flex items-start gap-4">
          <Globe className="w-8 h-8 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-foreground mb-2 font-serif">About Our TMS</h3>
            <p className="text-muted-foreground">
              This manual is designed for use with <strong>TMS Translogica</strong> – our integrated 
              transport management system. You'll find step-by-step guides for all common operations 
              including client management, order handling, dispatch planning, and invoicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
