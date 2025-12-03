import { useState, useMemo } from "react";
import { Book, Search, Filter } from "lucide-react";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  german?: string;
}

const glossaryTerms: GlossaryTerm[] = [
  // Transport & Logistics
  { term: "ADR", definition: "European Agreement concerning the International Carriage of Dangerous Goods by Road. Governs transport of hazardous materials.", category: "Compliance", german: "ADR (Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße)" },
  { term: "AEO", definition: "Authorized Economic Operator. A customs certification showing security and compliance standards.", category: "Customs", german: "Zugelassener Wirtschaftsbeteiligter" },
  { term: "Backhaul", definition: "Return journey of a truck, ideally loaded with cargo to avoid empty running.", category: "Operations", german: "Rückfracht" },
  { term: "Bill of Lading (B/L)", definition: "Document issued by carrier acknowledging receipt of cargo for shipment. Acts as contract of carriage.", category: "Documents", german: "Konnossement / Frachtbrief" },
  { term: "Cabotage", definition: "Domestic transport operations performed by foreign carriers within a country. Heavily regulated in EU.", category: "Compliance", german: "Kabotage" },
  { term: "CMR", definition: "Convention relative au contrat de transport international de marchandises par route. International consignment note for road transport.", category: "Documents", german: "CMR-Frachtbrief" },
  { term: "Cross-docking", definition: "Logistics practice of unloading materials from inbound transport and loading directly onto outbound vehicles with minimal storage.", category: "Operations", german: "Cross-Docking / Umschlag" },
  { term: "Curtainsider", definition: "Truck with flexible side curtains instead of solid panels, allowing side loading. Standard European trailer type.", category: "Vehicles", german: "Curtainsider / Schiebeplane" },
  { term: "Dead freight", definition: "Freight paid for space booked but not used. Usually penalty for cancellation.", category: "Pricing", german: "Fautfracht" },
  { term: "Deadhead", definition: "Empty vehicle movement without cargo. Should be minimized for profitability.", category: "Operations", german: "Leerfahrt" },
  { term: "Demurrage", definition: "Charge for holding transport equipment (truck/trailer) beyond free time at loading/unloading.", category: "Pricing", german: "Standgeld / Liegegebühren" },
  { term: "Dispatch", definition: "Process of planning and coordinating vehicle movements and driver assignments.", category: "Operations", german: "Disposition / Disponierung" },
  { term: "EDI", definition: "Electronic Data Interchange. Standard format for exchanging business documents electronically.", category: "Technology", german: "EDI (Elektronischer Datenaustausch)" },
  { term: "EN 12195", definition: "European standard for cargo securing calculations and equipment.", category: "Compliance", german: "EN 12195 (Ladungssicherungsnorm)" },
  { term: "ETA", definition: "Estimated Time of Arrival. When the vehicle is expected to reach destination.", category: "Operations", german: "Voraussichtliche Ankunftszeit" },
  { term: "ETD", definition: "Estimated Time of Departure. When the vehicle is expected to leave.", category: "Operations", german: "Voraussichtliche Abfahrtszeit" },
  { term: "EUR Pallet", definition: "Standard European pallet measuring 800mm x 1200mm. Most common in EU logistics.", category: "Cargo", german: "Europalette" },
  { term: "FTL", definition: "Full Truck Load. Shipment using entire capacity of a truck.", category: "Operations", german: "Komplettladung (FTL)" },
  { term: "Freight exchange", definition: "Online marketplace where shippers post loads and carriers offer capacity (e.g., TIMOCOM, Trans.eu).", category: "Operations", german: "Frachtenbörse" },
  { term: "Groupage", definition: "Consolidation of multiple smaller shipments into one vehicle load.", category: "Operations", german: "Sammelgut / Stückgut" },
  { term: "GVW / GTW", definition: "Gross Vehicle/Train Weight. Total weight of vehicle plus cargo. EU limit: 40 tonnes.", category: "Vehicles", german: "Zulässiges Gesamtgewicht" },
  { term: "HGV", definition: "Heavy Goods Vehicle. British term for trucks over 3.5 tonnes.", category: "Vehicles", german: "LKW (Lastkraftwagen)" },
  { term: "Incoterms", definition: "International Commercial Terms. Standard trade terms defining seller/buyer responsibilities (e.g., DAP, FCA, EXW).", category: "Pricing", german: "Incoterms (Internationale Handelsklauseln)" },
  { term: "LDM", definition: "Loading Meter. Unit measuring floor space used: 1 LDM = 1m × 2.4m = 2.4 m².", category: "Cargo", german: "Lademeter (LDM)" },
  { term: "LKW", definition: "German term for truck (Lastkraftwagen). Common in Central European documentation.", category: "Vehicles", german: "LKW" },
  { term: "LQ / Limited Quantities", definition: "Small quantities of dangerous goods that can be transported under simplified ADR rules.", category: "Compliance", german: "Begrenzte Mengen" },
  { term: "LTL", definition: "Less Than Truck Load. Shipment not requiring full truck capacity.", category: "Operations", german: "Teilladung" },
  { term: "Maut", definition: "German toll system for heavy vehicles on motorways. Pay-per-km.", category: "Pricing", german: "Maut" },
  { term: "MRN", definition: "Movement Reference Number. Unique identifier for customs transit movements.", category: "Customs", german: "Bezugsnummer der Anmeldung" },
  { term: "NCTS", definition: "New Computerised Transit System. EU customs system for tracking transit movements.", category: "Customs", german: "NCTS (Neues computergestütztes Versandverfahren)" },
  { term: "Payload", definition: "Maximum weight of cargo a vehicle can legally carry.", category: "Vehicles", german: "Nutzlast" },
  { term: "POD", definition: "Proof of Delivery. Signed document confirming goods received by consignee.", category: "Documents", german: "Zustellnachweis / Abliefernachweis" },
  { term: "Reefer", definition: "Refrigerated trailer for temperature-controlled transport.", category: "Vehicles", german: "Kühlfahrzeug / Kühlauflieger" },
  { term: "RLS", definition: "Regional Logistics Specialist. Dispatcher handling specific geographic areas.", category: "Operations" },
  { term: "SDR", definition: "Special Drawing Rights. IMF currency unit used for CMR liability calculations. 8.33 SDR/kg ≈ €10/kg.", category: "Compliance", german: "Sonderziehungsrechte" },
  { term: "Spot market", definition: "Immediate capacity market for one-time shipments, vs. contract/regular business.", category: "Operations", german: "Spotmarkt" },
  { term: "T1 / T2", definition: "EU transit documents. T1 for non-EU goods, T2 for EU goods moving through non-EU territory.", category: "Customs", german: "T1 / T2 Versandverfahren" },
  { term: "Tachograph", definition: "Device recording driver hours, speed, and rest periods. Digital version mandatory.", category: "Compliance", german: "Tachograph / Fahrtenschreiber" },
  { term: "Tautliner", definition: "Another name for curtainsider trailer. Common in UK terminology.", category: "Vehicles", german: "Tautliner / Schiebeplane" },
  { term: "TIMOCOM", definition: "Major European freight exchange platform based in Germany.", category: "Technology", german: "TIMOCOM" },
  { term: "TMS", definition: "Transport Management System. Software for managing transport operations.", category: "Technology", german: "Transportmanagementsystem" },
  { term: "Toll-Collect", definition: "German toll collection system for HGV on motorways.", category: "Pricing", german: "Toll Collect" },
  { term: "Trans.eu", definition: "Polish freight exchange platform, strong in Central/Eastern Europe.", category: "Technology", german: "Trans.eu" },
  { term: "Transporeon", definition: "Digital logistics platform offering carrier management and real-time visibility.", category: "Technology", german: "Transporeon" },
  { term: "UN Number", definition: "Four-digit number identifying dangerous goods under ADR regulations.", category: "Compliance", german: "UN-Nummer" },
  { term: "VAT", definition: "Value Added Tax. Must be handled correctly for international transport invoicing.", category: "Pricing", german: "Mehrwertsteuer (MwSt.)" },
  { term: "Waiting time", definition: "Time driver spends waiting at loading/unloading beyond free time. Usually charged per hour.", category: "Pricing", german: "Wartezeit / Standzeit" },
  { term: "Way bill", definition: "Document containing shipment details accompanying cargo during transport.", category: "Documents", german: "Frachtbrief" },
];

const categories = ["All", "Operations", "Compliance", "Documents", "Vehicles", "Pricing", "Customs", "Cargo", "Technology"];

export function GlossaryChapter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (term.german && term.german.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="relative">
          <Book className="w-12 h-12 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Glossary of Terms
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Essential freight forwarding terminology with German translations where applicable.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="sticky top-0 z-10 bg-background py-4 border-b border-border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search terms... (English or German)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Showing {filteredTerms.length} of {glossaryTerms.length} terms
        </p>
      </section>

      {/* Glossary Terms */}
      <section>
        <div className="space-y-4">
          {filteredTerms.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-primary font-mono">{item.term}</h3>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">{item.category}</span>
              </div>
              <p className="text-sm text-foreground mb-2">{item.definition}</p>
              {item.german && (
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="font-semibold">🇩🇪</span> {item.german}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* No Results */}
      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <Book className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No terms found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
