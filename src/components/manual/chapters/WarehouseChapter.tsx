import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { Warehouse, Package, ArrowRight, Clock, Truck, CheckCircle2, AlertTriangle, Zap, BarChart3, MapPin, Users, RefreshCw } from "lucide-react";

export function WarehouseChapter() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">Warehouse & Cross-Docking</h1>
        <p className="text-lg text-muted-foreground">
          Understanding warehouse operations, cross-docking, consolidation, and how they integrate with transport in the supply chain.
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <Warehouse className="w-6 h-6 text-primary" />
          The Role of Warehousing in Logistics
        </h2>
        <p className="text-muted-foreground mb-4">
          Warehouses are critical nodes in the supply chain where goods are received, stored, processed, and shipped. As a freight forwarder, understanding warehouse operations helps you optimize transport and provide better service.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Package className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Receiving</p>
            <p className="text-xs text-muted-foreground">Inbound goods</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Warehouse className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Storage</p>
            <p className="text-xs text-muted-foreground">Inventory holding</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Processing</p>
            <p className="text-xs text-muted-foreground">Pick, pack, label</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Dispatch</p>
            <p className="text-xs text-muted-foreground">Outbound shipping</p>
          </div>
        </div>
      </div>

      {/* Warehouse Types */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Warehouse className="w-6 h-6 text-primary" />
          Types of Warehouse Facilities
        </h2>

        <DataTable
          headers={["Type", "Purpose", "Typical Features", "Transport Implications"]}
          rows={[
            ["Distribution Center (DC)", "Fast throughput, regional distribution", "High automation, many dock doors", "Strict time windows, high frequency"],
            ["Fulfillment Center", "E-commerce order processing", "Pick-pack stations, conveyor systems", "Small parcels, express deliveries"],
            ["Cross-Dock", "Transshipment without storage", "Inbound/outbound docks only", "Tight scheduling, quick turnaround"],
            ["Cold Storage", "Temperature-controlled goods", "Refrigeration zones, airlocks", "Pre-cooling, temp monitoring"],
            ["Bonded Warehouse", "Customs storage before clearance", "Secure, customs-supervised", "Customs documentation required"],
            ["General Storage", "Long-term inventory holding", "Racking, bulk storage", "Flexible scheduling"],
          ]}
        />
      </div>

      {/* Cross-Docking */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <RefreshCw className="w-6 h-6 text-primary" />
          Cross-Docking Operations
        </h2>

        <p className="text-muted-foreground mb-4">
          Cross-docking is a logistics process where products are transferred directly from inbound to outbound transport with minimal or no storage time. It's highly efficient but requires precise coordination.
        </p>

        <div className="bg-muted/30 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-4">Cross-Dock Process Flow</h3>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="text-center p-3 bg-background rounded-lg">
              <Truck className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs">Inbound</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center p-3 bg-background rounded-lg">
              <Package className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs">Unload</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center p-3 bg-primary/10 rounded-lg border-2 border-primary">
              <RefreshCw className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs font-medium">Sort</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center p-3 bg-background rounded-lg">
              <Package className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs">Load</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="text-center p-3 bg-background rounded-lg">
              <Truck className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs">Outbound</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Cross-Dock Benefits</h4>
            <ul className="text-sm space-y-1">
              <li>• Reduced storage costs</li>
              <li>• Faster transit times</li>
              <li>• Lower handling damage</li>
              <li>• Better inventory turns</li>
              <li>• Reduced warehouse space needs</li>
            </ul>
          </div>
          <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">Cross-Dock Challenges</h4>
            <ul className="text-sm space-y-1">
              <li>• Requires precise timing</li>
              <li>• Limited buffer for delays</li>
              <li>• High coordination needs</li>
              <li>• Dependent on reliable transport</li>
              <li>• Complex scheduling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Loading/Unloading */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          Loading & Unloading Operations
        </h2>

        <DataTable
          headers={["Activity", "Typical Duration", "Factors Affecting Time", "Free Time Standard"]}
          rows={[
            ["FTL Loading (dock)", "30-60 min", "Cargo type, equipment, staffing", "1-2 hours"],
            ["FTL Loading (ground)", "1-2 hours", "Manual handling, forklift access", "2 hours"],
            ["FTL Unloading (dock)", "30-60 min", "Same as loading", "1-2 hours"],
            ["LTL Loading", "15-30 min", "Consolidation complexity", "30 min"],
            ["Container stripping", "2-4 hours", "Hand-stacking, volume", "2-4 hours"],
            ["Cross-dock transfer", "30-60 min", "Number of items, sorting", "1 hour"],
          ]}
        />

        <div className="bg-info/10 border border-info/30 p-4 rounded-lg mt-4">
          <h4 className="font-semibold mb-2">Waiting Time (Demurrage)</h4>
          <p className="text-sm">
            Most transport agreements include free loading/unloading time (typically 1-2 hours). Time beyond this incurs demurrage charges (€35-50/hour). Always confirm free time and waiting charges in transport orders.
          </p>
        </div>
      </div>

      {/* Consolidation */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Package className="w-6 h-6 text-primary" />
          Consolidation & Deconsolidation
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Consolidation (Groupage)
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Combining multiple small shipments into one full load for cost efficiency.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Reduces per-shipment cost</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Offers service to LTL customers</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Requires coordination of multiple pickups</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Longer transit times than direct</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-primary" />
              Deconsolidation
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Breaking down full loads into individual shipments for final delivery.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Enables regional distribution</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Supports hub-and-spoke networks</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Adds handling and sorting time</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
                <span>Potential for mis-sorting errors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Warehouse KPIs */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          Warehouse Performance Metrics
        </h2>

        <DataTable
          headers={["KPI", "Definition", "Target", "Why It Matters"]}
          rows={[
            ["Dock-to-Stock Time", "Time from arrival to storage location", "<2 hours", "Receiving efficiency"],
            ["Order Accuracy", "Orders picked correctly", ">99.5%", "Customer satisfaction"],
            ["On-Time Dispatch", "Orders shipped on schedule", ">98%", "Transport coordination"],
            ["Inventory Accuracy", "Physical vs system count", ">99%", "Stock reliability"],
            ["Space Utilization", "Used space / Available space", "85-90%", "Cost efficiency"],
            ["Dock Door Utilization", "Time doors in use / Available time", ">75%", "Throughput capacity"],
          ]}
        />
      </div>

      {/* Coordination Tips */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          Coordinating with Warehouses
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Before Arrival</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Book time slot in advance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Provide accurate cargo details (pallets, weight)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Share delivery reference numbers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Confirm special requirements (tail lift, etc.)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">During Operations</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Driver arrives on time with correct documents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Report any delays immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Document any discrepancies on CMR</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <span>Collect signed POD before departure</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mt-6">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            Common Issues at Warehouses
          </h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Missed time slots:</strong> May result in long waits or rescheduling</li>
            <li>• <strong>Quantity discrepancies:</strong> Always count and note on CMR</li>
            <li>• <strong>Wrong unloading point:</strong> Verify address and dock number</li>
            <li>• <strong>Damaged goods:</strong> Photograph and note on delivery documents</li>
          </ul>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["warehouse"] && (
        <Quiz
          title="Warehouse & Cross-Docking Quiz"
          questions={quizzes["warehouse"]}
          chapterId="warehouse"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
