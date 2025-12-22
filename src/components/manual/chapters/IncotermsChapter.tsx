import { DataTable } from "../DataTable";
import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { quizzes } from "@/data/quizData";
import { FileText, Ship, Truck, Plane, Package, AlertTriangle, CheckCircle2, ArrowRight, Scale, Euro, MapPin } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";

export function IncotermsChapter() {
  const { ct } = useChapterTranslation("incoterms");
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="chapter-title">{ct("title")}</h1>
        <p className="text-lg text-muted-foreground">
          {ct("subtitle")}
        </p>
      </div>

      {/* Introduction */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10">
        <h2 className="section-title flex items-center gap-3">
          <FileText className="w-6 h-6 text-primary" />
          What Are Incoterms?
        </h2>
        <p className="text-muted-foreground mb-4">
          Incoterms (International Commercial Terms) are standardized trade terms published by the International Chamber of Commerce (ICC). They define the responsibilities of buyers and sellers for delivery, risk transfer, and cost allocation in international trade transactions.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <Package className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-medium">Delivery Point</p>
            <p className="text-xs text-muted-foreground">Where goods are delivered</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
            <p className="font-medium">Risk Transfer</p>
            <p className="text-xs text-muted-foreground">When risk passes to buyer</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <Euro className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="font-medium">Cost Allocation</p>
            <p className="text-xs text-muted-foreground">Who pays for what</p>
          </div>
        </div>
      </div>

      {/* Incoterms Categories */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Scale className="w-6 h-6 text-primary" />
          Incoterms 2020 Categories
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-info/10 border border-info/30 p-4 rounded-lg">
            <h3 className="font-semibold text-info mb-2 flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Any Mode of Transport (7 terms)
            </h3>
            <p className="text-sm text-muted-foreground mb-2">Can be used for road, rail, air, sea, or multimodal</p>
            <ul className="text-sm space-y-1">
              <li>• EXW - Ex Works</li>
              <li>• FCA - Free Carrier</li>
              <li>• CPT - Carriage Paid To</li>
              <li>• CIP - Carriage and Insurance Paid To</li>
              <li>• DAP - Delivered at Place</li>
              <li>• DPU - Delivered at Place Unloaded</li>
              <li>• DDP - Delivered Duty Paid</li>
            </ul>
          </div>
          <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
            <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Ship className="w-4 h-4" />
              Sea & Inland Waterway Only (4 terms)
            </h3>
            <p className="text-sm text-muted-foreground mb-2">Only for traditional port-to-port shipping</p>
            <ul className="text-sm space-y-1">
              <li>• FAS - Free Alongside Ship</li>
              <li>• FOB - Free On Board</li>
              <li>• CFR - Cost and Freight</li>
              <li>• CIF - Cost, Insurance and Freight</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Most Common for Road Freight */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Truck className="w-6 h-6 text-primary" />
          Key Incoterms for Road Freight
        </h2>

        <div className="space-y-6">
          {/* EXW */}
          <div className="border-l-4 border-l-destructive p-4 bg-destructive/5 rounded-r-lg">
            <h3 className="font-bold text-lg flex items-center gap-2">
              EXW - Ex Works
              <span className="text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded">Minimum Seller Obligation</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">Seller makes goods available at their premises. Buyer bears all costs and risks from that point.</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-success mb-1">Seller Responsibilities:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Make goods available at premises</li>
                  <li>• Provide commercial invoice</li>
                  <li>• Package goods for collection</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">Buyer Responsibilities:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• All transport costs</li>
                  <li>• Loading at seller's premises</li>
                  <li>• Export/import clearance</li>
                  <li>• All risk from collection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FCA */}
          <div className="border-l-4 border-l-warning p-4 bg-warning/5 rounded-r-lg">
            <h3 className="font-bold text-lg flex items-center gap-2">
              FCA - Free Carrier
              <span className="text-xs bg-warning/20 text-warning px-2 py-0.5 rounded">Most Recommended</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">Seller delivers goods to a carrier or named place. Risk transfers when goods are handed to carrier.</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-success mb-1">Seller Responsibilities:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Deliver to carrier/named place</li>
                  <li>• Export clearance</li>
                  <li>• Loading (if at seller's premises)</li>
                  <li>• Provide transport documents</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">Buyer Responsibilities:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Main carriage costs</li>
                  <li>• Import clearance and duties</li>
                  <li>• Risk from delivery to carrier</li>
                  <li>• Unloading at destination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DAP */}
          <div className="border-l-4 border-l-info p-4 bg-info/5 rounded-r-lg">
            <h3 className="font-bold text-lg flex items-center gap-2">
              DAP - Delivered at Place
              <span className="text-xs bg-info/20 text-info px-2 py-0.5 rounded">Very Common in Road Freight</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">Seller delivers goods to named destination, ready for unloading. Buyer handles import clearance.</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-success mb-1">Seller Responsibilities:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• All transport to destination</li>
                  <li>• Export clearance</li>
                  <li>• Risk until arrival at destination</li>
                  <li>• Transit insurance (optional)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">Buyer Responsibilities:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Import clearance and duties</li>
                  <li>• Unloading from vehicle</li>
                  <li>• Risk after arrival</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DDP */}
          <div className="border-l-4 border-l-success p-4 bg-success/5 rounded-r-lg">
            <h3 className="font-bold text-lg flex items-center gap-2">
              DDP - Delivered Duty Paid
              <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded">Maximum Seller Obligation</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">Seller bears all costs and risks including import duties. Maximum obligation for seller.</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-success mb-1">Seller Responsibilities:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• All transport costs</li>
                  <li>• Export AND import clearance</li>
                  <li>• All duties and taxes</li>
                  <li>• Risk until destination</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-destructive mb-1">Buyer Responsibilities:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Unloading only</li>
                  <li>• Minimal obligations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Incoterms Table */}
      <div className="info-card">
        <h2 className="section-title">All Incoterms 2020 Quick Reference</h2>
        
        <DataTable
          headers={["Term", "Name", "Delivery Point", "Risk Transfer", "Who Pays Transport"]}
          rows={[
            ["EXW", "Ex Works", "Seller's premises", "At pickup", "Buyer"],
            ["FCA", "Free Carrier", "Named place/carrier", "To carrier", "Buyer (main)"],
            ["CPT", "Carriage Paid To", "Named destination", "To first carrier", "Seller (main)"],
            ["CIP", "Carriage Insurance Paid", "Named destination", "To first carrier", "Seller + Insurance"],
            ["DAP", "Delivered at Place", "Named destination", "At destination", "Seller"],
            ["DPU", "Delivered Place Unloaded", "Named destination", "After unloading", "Seller + Unloading"],
            ["DDP", "Delivered Duty Paid", "Named destination", "At destination", "Seller + Duties"],
            ["FAS", "Free Alongside Ship", "Port of shipment", "Alongside ship", "Buyer (main)"],
            ["FOB", "Free On Board", "Port of shipment", "On board ship", "Buyer (main)"],
            ["CFR", "Cost and Freight", "Port of destination", "On board ship", "Seller (main)"],
            ["CIF", "Cost Insurance Freight", "Port of destination", "On board ship", "Seller + Insurance"],
          ]}
        />
      </div>

      {/* Visual Risk Transfer */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <ArrowRight className="w-6 h-6 text-primary" />
          Risk Transfer Visualization
        </h2>

        <div className="bg-muted/30 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4 text-sm">
            <span className="font-medium">Seller's Risk</span>
            <span className="font-medium">Buyer's Risk</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs font-medium">EXW</span>
              <div className="flex-1 h-6 bg-gradient-to-r from-success to-success rounded-l" style={{width: '5%'}}></div>
              <div className="flex-1 h-6 bg-gradient-to-r from-destructive to-destructive rounded-r" style={{width: '95%'}}></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs font-medium">FCA</span>
              <div className="flex-1 h-6 bg-success rounded-l" style={{width: '15%'}}></div>
              <div className="flex-1 h-6 bg-destructive rounded-r" style={{width: '85%'}}></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs font-medium">DAP</span>
              <div className="flex-1 h-6 bg-success rounded-l" style={{width: '85%'}}></div>
              <div className="flex-1 h-6 bg-destructive rounded-r" style={{width: '15%'}}></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs font-medium">DDP</span>
              <div className="flex-1 h-6 bg-success rounded-l" style={{width: '95%'}}></div>
              <div className="flex-1 h-6 bg-destructive rounded-r" style={{width: '5%'}}></div>
            </div>
          </div>

          <div className="flex justify-between mt-4 text-xs text-muted-foreground">
            <span>Seller's premises</span>
            <span>Export</span>
            <span>Main carriage</span>
            <span>Import</span>
            <span>Destination</span>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-warning" />
          Common Incoterms Mistakes
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">Mistakes to Avoid</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Using FOB/CIF for road freight (sea terms only)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Not specifying the named place precisely</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Confusing cost responsibility with risk transfer</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Using outdated Incoterms versions (use 2020)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>EXW with buyer unable to export (use FCA instead)</span>
              </li>
            </ul>
          </div>
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h4 className="font-semibold text-success mb-2">Best Practices</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Always specify "Incoterms 2020" with the term</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Include precise address for named place</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Use FCA or DAP for road freight</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Match insurance to risk transfer point</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Clarify who arranges customs clearance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practical Examples */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          Practical Examples
        </h2>

        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example 1: FCA Munich, Germany</h4>
            <p className="text-sm text-muted-foreground mb-2">
              "FCA Warehouse ABC, Industriestrasse 15, 80939 Munich, Germany, Incoterms 2020"
            </p>
            <p className="text-sm">
              Seller delivers loaded goods to the named warehouse. Risk transfers when carrier takes possession. Buyer arranges and pays for main transport.
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example 2: DAP Milan, Italy</h4>
            <p className="text-sm text-muted-foreground mb-2">
              "DAP Via Roma 100, 20100 Milan, Italy, Incoterms 2020"
            </p>
            <p className="text-sm">
              Seller arranges and pays for transport to Milan. Risk transfers when truck arrives at destination. Buyer handles unloading and import customs (if applicable).
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example 3: DDP London, UK</h4>
            <p className="text-sm text-muted-foreground mb-2">
              "DDP Customer Warehouse, London NW1 1AA, United Kingdom, Incoterms 2020"
            </p>
            <p className="text-sm">
              Seller handles everything including UK import customs and duties. Buyer only needs to unload. Note: Post-Brexit, DDP to UK requires seller to have UK VAT registration.
            </p>
          </div>
        </div>
      </div>

      {/* Quiz */}
      {quizzes["incoterms"] && (
        <Quiz
          title="Incoterms Knowledge Check"
          questions={quizzes["incoterms"]}
          chapterId="incoterms"
          questionsPerRound={5}
        />
      )}
    </div>
  );
}
