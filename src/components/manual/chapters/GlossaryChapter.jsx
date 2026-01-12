import { useState, useMemo } from "react";
import { Book, Search, Filter } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

const glossaryTerms = [
  // Transport & Logistics
  { termKey: "ADR", term: "ADR", definitionKey: "ADR_def", category: "Compliance", german: "ADR (Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße)" },
  { termKey: "Artikelnummer", term: "Artikelnummer", definitionKey: "Artikelnummer_def", category: "Operations", german: "Artikelnummer" },
  { termKey: "ATP", term: "ATP", definitionKey: "ATP_def", category: "Compliance", german: "ATP-Bescheinigung" },
  { termKey: "Avisierung", term: "Avisierung", definitionKey: "Avisierung_def", category: "Operations", german: "Avisierung" },
  { termKey: "AEO", term: "AEO", definitionKey: "AEO_def", category: "Customs", german: "Zugelassener Wirtschaftsbeteiligter" },
  { termKey: "Backhaul", term: "Backhaul", definitionKey: "Backhaul_def", category: "Operations", german: "Rückfracht" },
  { termKey: "Bill of Lading (B/L)", term: "Bill of Lading (B/L)", definitionKey: "BillOfLading_def", category: "Documents", german: "Konnossement / Frachtbrief" },
  { termKey: "Cabotage", term: "Cabotage", definitionKey: "Cabotage_def", category: "Compliance", german: "Kabotage" },
  { termKey: "CMR", term: "CMR", definitionKey: "CMR_def", category: "Documents", german: "CMR-Frachtbrief" },
  { termKey: "Cross-docking", term: "Cross-docking", definitionKey: "CrossDocking_def", category: "Operations", german: "Cross-Docking / Umschlag" },
  { termKey: "Curtainsider", term: "Curtainsider", definitionKey: "Curtainsider_def", category: "Vehicles", german: "Curtainsider / Schiebeplane" },
  { termKey: "Dead freight", term: "Dead freight", definitionKey: "DeadFreight_def", category: "Pricing", german: "Fautfracht" },
  { termKey: "Deadhead", term: "Deadhead", definitionKey: "Deadhead_def", category: "Operations", german: "Leerfahrt" },
  { termKey: "Demurrage", term: "Demurrage", definitionKey: "Demurrage_def", category: "Pricing", german: "Standgeld / Liegegebühren" },
  { termKey: "Dispatch", term: "Dispatch", definitionKey: "Dispatch_def", category: "Operations", german: "Disposition / Disponierung" },
  { termKey: "EDI", term: "EDI", definitionKey: "EDI_def", category: "Technology", german: "EDI (Elektronischer Datenaustausch)" },
  { termKey: "EN 12195", term: "EN 12195", definitionKey: "EN12195_def", category: "Compliance", german: "EN 12195 (Ladungssicherungsnorm)" },
  { termKey: "ETA", term: "ETA", definitionKey: "ETA_def", category: "Operations", german: "Voraussichtliche Ankunftszeit" },
  { termKey: "ETD", term: "ETD", definitionKey: "ETD_def", category: "Operations", german: "Voraussichtliche Abfahrtszeit" },
  { termKey: "EUR Pallet", term: "EUR Pallet", definitionKey: "EURPallet_def", category: "Cargo", german: "Europalette" },
  { termKey: "FTL", term: "FTL", definitionKey: "FTL_def", category: "Operations", german: "Komplettladung (FTL)" },
  { termKey: "Freight exchange", term: "Freight exchange", definitionKey: "FreightExchange_def", category: "Operations", german: "Frachtenbörse" },
  { termKey: "Groupage", term: "Groupage", definitionKey: "Groupage_def", category: "Operations", german: "Sammelgut / Stückgut" },
  { termKey: "GVW / GTW", term: "GVW / GTW", definitionKey: "GVW_def", category: "Vehicles", german: "Zulässiges Gesamtgewicht" },
  { termKey: "HGV", term: "HGV", definitionKey: "HGV_def", category: "Vehicles", german: "LKW (Lastkraftwagen)" },
  { termKey: "Incoterms", term: "Incoterms", definitionKey: "Incoterms_def", category: "Pricing", german: "Incoterms (Internationale Handelsklauseln)" },
  { termKey: "LDM", term: "LDM", definitionKey: "LDM_def", category: "Cargo", german: "Lademeter (LDM)" },
  { termKey: "LKW", term: "LKW", definitionKey: "LKW_def", category: "Vehicles", german: "LKW" },
  { termKey: "LQ / Limited Quantities", term: "LQ / Limited Quantities", definitionKey: "LQ_def", category: "Compliance", german: "Begrenzte Mengen" },
  { termKey: "LTL", term: "LTL", definitionKey: "LTL_def", category: "Operations", german: "Teilladung" },
  { termKey: "Maut", term: "Maut", definitionKey: "Maut_def", category: "Pricing", german: "Maut" },
  { termKey: "MRN", term: "MRN", definitionKey: "MRN_def", category: "Customs", german: "Bezugsnummer der Anmeldung" },
  { termKey: "NCTS", term: "NCTS", definitionKey: "NCTS_def", category: "Customs", german: "NCTS (Neues computergestütztes Versandverfahren)" },
  { termKey: "Payload", term: "Payload", definitionKey: "Payload_def", category: "Vehicles", german: "Nutzlast" },
  { termKey: "POD", term: "POD", definitionKey: "POD_def", category: "Documents", german: "Zustellnachweis / Abliefernachweis" },
  { termKey: "Reefer", term: "Reefer", definitionKey: "Reefer_def", category: "Vehicles", german: "Kühlfahrzeug / Kühlauflieger" },
  { termKey: "RLS", term: "RLS", definitionKey: "RLS_def", category: "Operations" },
  { termKey: "SDR", term: "SDR", definitionKey: "SDR_def", category: "Compliance", german: "Sonderziehungsrechte" },
  { termKey: "Spot market", term: "Spot market", definitionKey: "SpotMarket_def", category: "Operations", german: "Spotmarkt" },
  { termKey: "T1 / T2", term: "T1 / T2", definitionKey: "T1T2_def", category: "Customs", german: "T1 / T2 Versandverfahren" },
  { termKey: "Tachograph", term: "Tachograph", definitionKey: "Tachograph_def", category: "Compliance", german: "Tachograph / Fahrtenschreiber" },
  { termKey: "Tautliner", term: "Tautliner", definitionKey: "Tautliner_def", category: "Vehicles", german: "Tautliner / Schiebeplane" },
  { termKey: "TIMOCOM", term: "TIMOCOM", definitionKey: "TIMOCOM_def", category: "Technology", german: "TIMOCOM" },
  { termKey: "TMS", term: "TMS", definitionKey: "TMS_def", category: "Technology", german: "Transportmanagementsystem" },
  { termKey: "Toll-Collect", term: "Toll-Collect", definitionKey: "TollCollect_def", category: "Pricing", german: "Toll Collect" },
  { termKey: "Trans.eu", term: "Trans.eu", definitionKey: "TransEu_def", category: "Technology", german: "Trans.eu" },
  { termKey: "Transporeon", term: "Transporeon", definitionKey: "Transporeon_def", category: "Technology", german: "Transporeon" },
  { termKey: "UN Number", term: "UN Number", definitionKey: "UNNumber_def", category: "Compliance", german: "UN-Nummer" },
  { termKey: "VAT", term: "VAT", definitionKey: "VAT_def", category: "Pricing", german: "Mehrwertsteuer (MwSt.)" },
  { termKey: "Waiting time", term: "Waiting time", definitionKey: "WaitingTime_def", category: "Pricing", german: "Wartezeit / Standzeit" },
  { termKey: "Way bill", term: "Way bill", definitionKey: "WayBill_def", category: "Documents", german: "Frachtbrief" },
  { termKey: "Wechselbrücke", term: "Wechselbrücke", definitionKey: "Wechselbruecke_def", category: "Vehicles", german: "Wechselbrücke / Wechselaufbau" },
  { termKey: "Weight note", term: "Weight note", definitionKey: "WeightNote_def", category: "Documents", german: "Wiegenachweis" },
  { termKey: "XL Code", term: "XL Code", definitionKey: "XLCode_def", category: "Compliance", german: "Code XL" },
  { termKey: "Zero declaration", term: "Zero declaration", definitionKey: "ZeroDeclaration_def", category: "Customs", german: "Nullbescheid" },
  { termKey: "Zone pricing", term: "Zone pricing", definitionKey: "ZonePricing_def", category: "Pricing", german: "Zonenpreise" },
  { termKey: "3PL", term: "3PL", definitionKey: "ThreePL_def", category: "Operations", german: "Logistikdienstleister" },
  { termKey: "4PL", term: "4PL", definitionKey: "FourPL_def", category: "Operations", german: "Logistikintegrator" },
];

const categories = ["All", "Operations", "Documents", "Pricing", "Vehicles", "Compliance", "Customs", "Cargo", "Technology"];

export function GlossaryChapter() {
  const { ct } = useChapterTranslation("glossary");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTerms = useMemo(() => {
    return glossaryTerms
      .filter((item) => {
        const matchesSearch =
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.german && item.german.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Book}
        variant="glossary"
      />

      {/* Search and Filter */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={ct("searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? ct("allCategories") : cat}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {ct("showingTerms").replace("{count}", filteredTerms.length.toString())}
        </p>
      </div>

      {/* Glossary List */}
      <div className="space-y-4">
        {filteredTerms.map((item) => (
          <div
            key={item.termKey}
            className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg text-primary">{item.term}</h3>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">{item.category}</span>
                </div>
                {item.german && (
                  <p className="text-sm text-muted-foreground mb-2">🇩🇪 {item.german}</p>
                )}
                <p className="text-foreground">{ct(item.definitionKey)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <Book className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>{ct("noTermsFound")}</p>
        </div>
      )}
    </div>
  );
}