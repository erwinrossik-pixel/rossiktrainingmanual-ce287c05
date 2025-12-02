import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import {
  Monitor, Users, Truck, Package, CalendarDays, FileText, 
  BarChart3, Settings, Link, CheckCircle2, ArrowRight
} from "lucide-react";

export function TranslogicaChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Translogica TMS Guide</h1>
        <p className="text-lg text-muted-foreground">
          Complete guide to using our Transport Management System.
        </p>
      </div>

      {/* Quick Start */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sidebar to-sidebar/80 p-8 text-sidebar-foreground">
        <Monitor className="absolute top-4 right-4 w-20 h-20 text-sidebar-foreground/10" />
        <h2 className="text-2xl font-bold mb-2 font-serif">Quick Start Guide</h2>
        <p className="text-sidebar-foreground/80 mb-6">Essential operations every dispatcher needs to know.</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Users, label: "Register Client", path: "Master Data → Addresses" },
            { icon: Truck, label: "Register Vehicle", path: "Master Data → Vehicles" },
            { icon: Package, label: "Create Order", path: "Orders → New Order" },
          ].map((item, i) => (
            <div key={i} className="bg-sidebar-accent/50 rounded-lg p-4">
              <item.icon className="w-8 h-8 text-sidebar-primary mb-2" />
              <h3 className="font-semibold">{item.label}</h3>
              <p className="text-xs text-sidebar-foreground/60">{item.path}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step by Step Guides */}
      <div className="space-y-6">
        {/* Register Client */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">🧾</span>
            1. Register a Client
          </h2>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 1</span>
              <span>Menu: <strong>Master Data → Addresses → New</strong></span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 2</span>
              <span>Click <strong>New</strong>, tick <strong>Customer</strong> checkbox</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 3</span>
              <span>Fill: company name, address, contact, email, phone</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 4</span>
              <span>Go to <strong>Customer tab</strong>: add number, payment terms, invoice address</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-medium">Save ✅</span>
            </div>
          </div>
        </div>

        {/* Register Vehicle */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">🚛</span>
            2. Register a Vehicle
          </h2>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 1</span>
              <span>Menu: <strong>Master Data → Vehicles → New</strong></span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 2</span>
              <span>Click <strong>New</strong>, add license plate, type, owner, driver</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 3</span>
              <span>Add technical details: weight, emission class, equipment</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-medium">Save ✅</span>
            </div>
          </div>
        </div>

        {/* Create Order */}
        <div className="info-card">
          <h2 className="section-title flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">📦</span>
            3. Register a Transport Order
          </h2>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 1</span>
              <span>Menu: <strong>Orders → New Order</strong> (or Quick Entry)</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 2</span>
              <span>Enter client, loading/unloading points, goods details</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <span className="badge-primary">Step 3</span>
              <span>Assign vehicle type, confirm details</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-medium">Order appears in dispatch list ✅</span>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div>
        <h2 className="section-title mb-4">🚀 Advanced Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Dispatch Planning (Dispoplan)" icon={CalendarDays}>
            <ul className="space-y-1 text-sm">
              <li>• Drag & drop orders to trucks</li>
              <li>• Monitor free vehicles, open jobs</li>
              <li>• Send messages/emails to drivers</li>
              <li>• PTV xServer route & toll calc</li>
            </ul>
          </InfoCard>

          <InfoCard title="Platform Integrations" icon={Link}>
            <ul className="space-y-1 text-sm">
              <li>• <strong>TIMOCOM:</strong> Post/search directly</li>
              <li>• <strong>Transporeon:</strong> Auto-import orders</li>
              <li>• <strong>dotiga:</strong> Archive docs</li>
              <li>• Email/SMS driver communication</li>
            </ul>
          </InfoCard>

          <InfoCard title="Invoicing & Profit Control" icon={FileText}>
            <ul className="space-y-1 text-sm">
              <li>• Auto rate calc by km or zone</li>
              <li>• Generate invoices in clicks</li>
              <li>• Subcontractor credit notes</li>
              <li>• Real-time profit view</li>
            </ul>
          </InfoCard>

          <InfoCard title="Reports & Dashboards" icon={BarChart3}>
            <ul className="space-y-1 text-sm">
              <li>• KPIs by client, dispatcher, lane</li>
              <li>• Monthly performance reports</li>
              <li>• Cube Dashboard analytics</li>
              <li>• Profit, cost, km tracking</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Settings className="w-6 h-6 text-primary" />
          Key Benefits Summary
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {[
            { title: "Centralized Data", desc: "Clients, carriers, vehicles, orders unified" },
            { title: "Automation", desc: "Quotes, invoices, docs in 1–2 clicks" },
            { title: "Integrations", desc: "TIMOCOM, Transporeon, PTV, Email" },
            { title: "Real-time Margin", desc: "Instant profit visibility per order" },
            { title: "Collaboration", desc: "Multiple dispatchers simultaneously" },
            { title: "Multilingual", desc: "English, German, Romanian UI" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-accent rounded-lg">
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz */}
      <Quiz title="🎯 Knowledge Check: Translogica TMS" questions={quizzes.translogica} />
    </div>
  );
}
