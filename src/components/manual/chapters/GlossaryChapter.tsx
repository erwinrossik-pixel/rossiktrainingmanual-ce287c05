import { useState, useMemo } from "react";
import { Book, Search, Filter } from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { ChapterHero } from "../ChapterHero";

interface GlossaryTerm {
  termKey: string;
  term: string;
  definitionKey: string;
  category: string;
  german?: string;
}

const glossaryTerms: GlossaryTerm[] = [
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
  { termKey: "Zustellzeit", term: "Zustellzeit", definitionKey: "Zustellzeit_def", category: "Operations", german: "Zustellzeit / Lieferfenster" },
  { termKey: "Zwischenlagerung", term: "Zwischenlagerung", definitionKey: "Zwischenlagerung_def", category: "Operations", german: "Zwischenlagerung" },
  { termKey: "24/7 Operation", term: "24/7 Operation", definitionKey: "Operation247_def", category: "Operations" },
  { termKey: "3PL", term: "3PL", definitionKey: "ThreePL_def", category: "Operations", german: "Logistikdienstleister" },
  { termKey: "4PL", term: "4PL", definitionKey: "FourPL_def", category: "Operations", german: "Logistikintegrator" },
  { termKey: "B2B", term: "B2B", definitionKey: "B2B_def", category: "Operations", german: "B2B (Geschäftskunden)" },
  { termKey: "BAF", term: "BAF", definitionKey: "BAF_def", category: "Pricing", german: "Bunker-/Treibstoffzuschlag" },
  { termKey: "Bobtail", term: "Bobtail", definitionKey: "Bobtail_def", category: "Vehicles", german: "Leerfahrt (nur Zugmaschine)" },
  { termKey: "Bonded warehouse", term: "Bonded warehouse", definitionKey: "BondedWarehouse_def", category: "Customs", german: "Zolllager" },
  { termKey: "Break bulk", term: "Break bulk", definitionKey: "BreakBulk_def", category: "Cargo", german: "Stückgut / Konventionelle Ladung" },
  { termKey: "Carrier", term: "Carrier", definitionKey: "Carrier_def", category: "Operations", german: "Frachtführer / Spediteur" },
  { termKey: "CFR", term: "CFR", definitionKey: "CFR_def", category: "Pricing", german: "CFR (Kosten und Fracht)" },
  { termKey: "Charter", term: "Charter", definitionKey: "Charter_def", category: "Operations", german: "Charter / Exklusivfahrt" },
  { termKey: "CIF", term: "CIF", definitionKey: "CIF_def", category: "Pricing", german: "CIF (Kosten, Versicherung, Fracht)" },
  { termKey: "Colli", term: "Colli", definitionKey: "Colli_def", category: "Cargo", german: "Colli / Packstück" },
  { termKey: "Consignee", term: "Consignee", definitionKey: "Consignee_def", category: "Documents", german: "Empfänger" },
  { termKey: "Consignor", term: "Consignor", definitionKey: "Consignor_def", category: "Documents", german: "Versender / Absender" },
  { termKey: "DAP", term: "DAP", definitionKey: "DAP_def", category: "Pricing", german: "DAP (Geliefert benannter Ort)" },
  { termKey: "DDP", term: "DDP", definitionKey: "DDP_def", category: "Pricing", german: "DDP (Geliefert verzollt)" },
  { termKey: "DKV", term: "DKV", definitionKey: "DKV_def", category: "Technology", german: "DKV Euro Service" },
  { termKey: "Dock leveler", term: "Dock leveler", definitionKey: "DockLeveler_def", category: "Operations", german: "Überladebrücke" },
  { termKey: "EXW", term: "EXW", definitionKey: "EXW_def", category: "Pricing", german: "EXW (Ab Werk)" },
  { termKey: "FCA", term: "FCA", definitionKey: "FCA_def", category: "Pricing", german: "FCA (Frei Frachtführer)" },
  { termKey: "Forwarder", term: "Forwarder", definitionKey: "Forwarder_def", category: "Operations", german: "Spediteur / Spedition" },
  { termKey: "Free time", term: "Free time", definitionKey: "FreeTime_def", category: "Pricing", german: "Freie Ladezeit" },
  { termKey: "Freight class", term: "Freight class", definitionKey: "FreightClass_def", category: "Pricing", german: "Frachtklasse" },
  { termKey: "FIFO", term: "FIFO", definitionKey: "FIFO_def", category: "Operations", german: "FIFO (First In, First Out)" },
  { termKey: "Hub", term: "Hub", definitionKey: "Hub_def", category: "Operations", german: "Hub / Umschlagzentrum" },
  { termKey: "IBC", term: "IBC", definitionKey: "IBC_def", category: "Cargo", german: "IBC-Container" },
  { termKey: "JIT", term: "JIT", definitionKey: "JIT_def", category: "Operations", german: "Just-in-Time Lieferung" },
  { termKey: "Kilometerstand", term: "Kilometerstand", definitionKey: "Kilometerstand_def", category: "Vehicles", german: "Kilometerstand" },
  { termKey: "Lane", term: "Lane", definitionKey: "Lane_def", category: "Operations", german: "Verkehrsrelation / Strecke" },
  { termKey: "Lead time", term: "Lead time", definitionKey: "LeadTime_def", category: "Operations", german: "Vorlaufzeit / Lieferzeit" },
  { termKey: "LIFO", term: "LIFO", definitionKey: "LIFO_def", category: "Operations", german: "LIFO (Last In, First Out)" },
  { termKey: "Load factor", term: "Load factor", definitionKey: "LoadFactor_def", category: "Operations", german: "Auslastung" },
  { termKey: "Manifest", term: "Manifest", definitionKey: "Manifest_def", category: "Documents", german: "Ladungsliste / Manifest" },
  { termKey: "Milk run", term: "Milk run", definitionKey: "MilkRun_def", category: "Operations", german: "Milkrun / Sammelrunde" },
  { termKey: "OBU", term: "OBU", definitionKey: "OBU_def", category: "Technology", german: "OBU (Mautgerät)" },
  { termKey: "Pallet exchange", term: "Pallet exchange", definitionKey: "PalletExchange_def", category: "Operations", german: "Palettentausch" },
  { termKey: "Pick-up order", term: "Pick-up order", definitionKey: "PickUpOrder_def", category: "Documents", german: "Abholauftrag" },
  { termKey: "Pre-carriage", term: "Pre-carriage", definitionKey: "PreCarriage_def", category: "Operations", german: "Vorlauf" },
  { termKey: "On-carriage", term: "On-carriage", definitionKey: "OnCarriage_def", category: "Operations", german: "Nachlauf" },
  { termKey: "Rate card", term: "Rate card", definitionKey: "RateCard_def", category: "Pricing", german: "Preisliste / Tarif" },
  { termKey: "Relay", term: "Relay", definitionKey: "Relay_def", category: "Operations", german: "Trailerwechsel / Relais" },
  { termKey: "RoRo", term: "RoRo", definitionKey: "RoRo_def", category: "Vehicles", german: "RoRo-Fähre" },
  { termKey: "Seal number", term: "Seal number", definitionKey: "SealNumber_def", category: "Customs", german: "Plombennummer" },
  { termKey: "Shipper", term: "Shipper", definitionKey: "Shipper_def", category: "Operations", german: "Verlader / Auftraggeber" },
  { termKey: "Slot booking", term: "Slot booking", definitionKey: "SlotBooking_def", category: "Operations", german: "Zeitfensterbuchung" },
  { termKey: "Stackable", term: "Stackable", definitionKey: "Stackable_def", category: "Cargo", german: "Stapelbar" },
  { termKey: "Tail lift", term: "Tail lift", definitionKey: "TailLift_def", category: "Vehicles", german: "Ladebordwand / LBW" },
  { termKey: "Tare weight", term: "Tare weight", definitionKey: "TareWeight_def", category: "Vehicles", german: "Leergewicht / Eigengewicht" },
  { termKey: "Temperature logger", term: "Temperature logger", definitionKey: "TemperatureLogger_def", category: "Technology", german: "Temperaturdatenlogger" },
  { termKey: "Through transport", term: "Through transport", definitionKey: "ThroughTransport_def", category: "Documents", german: "Durchgangstransport" },
  { termKey: "Time slot", term: "Time slot", definitionKey: "TimeSlot_def", category: "Operations", german: "Zeitfenster" },
  { termKey: "Transit time", term: "Transit time", definitionKey: "TransitTime_def", category: "Operations", german: "Laufzeit / Transitzeit" },
  { termKey: "Triangular trade", term: "Triangular trade", definitionKey: "TriangularTrade_def", category: "Operations", german: "Dreiecksgeschäft" },
  { termKey: "UTA", term: "UTA", definitionKey: "UTA_def", category: "Technology", german: "UTA (Union Tank Eckstein)" },
  { termKey: "Vehicle utilization", term: "Vehicle utilization", definitionKey: "VehicleUtilization_def", category: "Operations", german: "Fahrzeugauslastung" },
  { termKey: "Verified gross mass", term: "Verified gross mass", definitionKey: "VerifiedGrossMass_def", category: "Compliance", german: "Verifizierte Bruttomasse (VGM)" },
  // Additional terms
  { termKey: "Palettenschein", term: "Palettenschein", definitionKey: "Palettenschein_def", category: "Documents", german: "Palettenschein" },
  { termKey: "Speditionsauftrag", term: "Speditionsauftrag", definitionKey: "Speditionsauftrag_def", category: "Documents", german: "Speditionsauftrag" },
  { termKey: "Rollende Landstraße", term: "Rollende Landstraße", definitionKey: "RollendeLandstrasse_def", category: "Operations", german: "Rollende Landstraße (RoLa)" },
  { termKey: "Gefahrgut", term: "Gefahrgut", definitionKey: "Gefahrgut_def", category: "Compliance", german: "Gefahrgut" },
  { termKey: "Lieferschein", term: "Lieferschein", definitionKey: "Lieferschein_def", category: "Documents", german: "Lieferschein" },
  { termKey: "Frachtkostenrechnung", term: "Frachtkostenrechnung", definitionKey: "Frachtkostenrechnung_def", category: "Pricing", german: "Frachtkostenrechnung" },
  { termKey: "Ladungssicherung", term: "Ladungssicherung", definitionKey: "Ladungssicherung_def", category: "Compliance", german: "Ladungssicherung" },
  { termKey: "Umschlag", term: "Umschlag", definitionKey: "Umschlag_def", category: "Operations", german: "Umschlag" },
  { termKey: "Sendungsverfolgung", term: "Sendungsverfolgung", definitionKey: "Sendungsverfolgung_def", category: "Technology", german: "Sendungsverfolgung" },
  { termKey: "Frachtvermittlung", term: "Frachtvermittlung", definitionKey: "Frachtvermittlung_def", category: "Operations", german: "Frachtvermittlung" },
  { termKey: "Auflieger", term: "Auflieger", definitionKey: "Auflieger_def", category: "Vehicles", german: "Auflieger / Sattelauflieger" },
  { termKey: "Wechselverkehr", term: "Wechselverkehr", definitionKey: "Wechselverkehr_def", category: "Operations", german: "Wechselverkehr" },
  { termKey: "Nachnahme", term: "Nachnahme", definitionKey: "Nachnahme_def", category: "Pricing", german: "Nachnahme" },
  { termKey: "Abholauftrag", term: "Abholauftrag", definitionKey: "Abholauftrag_def", category: "Documents", german: "Abholauftrag" },
  { termKey: "Versandauftrag", term: "Versandauftrag", definitionKey: "Versandauftrag_def", category: "Documents", german: "Versandauftrag" },
  { termKey: "Bereitstellungsgebühr", term: "Bereitstellungsgebühr", definitionKey: "Bereitstellungsgebuehr_def", category: "Pricing", german: "Bereitstellungsgebühr" },
  { termKey: "Leerfahrt", term: "Leerfahrt", definitionKey: "Leerfahrt_def", category: "Operations", german: "Leerfahrt" },
  { termKey: "Pendelverkehr", term: "Pendelverkehr", definitionKey: "Pendelverkehr_def", category: "Operations", german: "Pendelverkehr" },
  { termKey: "Sperrfrist", term: "Sperrfrist", definitionKey: "Sperrfrist_def", category: "Operations", german: "Sperrfrist" },
  { termKey: "Begleitpapiere", term: "Begleitpapiere", definitionKey: "Begleitpapiere_def", category: "Documents", german: "Begleitpapiere" },
  { termKey: "Fixkosten", term: "Fixkosten", definitionKey: "Fixkosten_def", category: "Pricing", german: "Fixkosten" },
  { termKey: "Variable Kosten", term: "Variable Kosten", definitionKey: "VariableKosten_def", category: "Pricing", german: "Variable Kosten" },
  { termKey: "Zollabfertigung", term: "Zollabfertigung", definitionKey: "Zollabfertigung_def", category: "Customs", german: "Zollabfertigung" },
  { termKey: "Transitland", term: "Transitland", definitionKey: "Transitland_def", category: "Customs", german: "Transitland" },
  { termKey: "Ursprungszeugnis", term: "Ursprungszeugnis", definitionKey: "Ursprungszeugnis_def", category: "Customs", german: "Ursprungszeugnis" },
  { termKey: "Carnet TIR", term: "Carnet TIR", definitionKey: "CarnetTIR_def", category: "Customs", german: "Carnet TIR" },
  { termKey: "Carnet ATA", term: "Carnet ATA", definitionKey: "CarnetATA_def", category: "Customs", german: "Carnet ATA" },
  { termKey: "Verzollung", term: "Verzollung", definitionKey: "Verzollung_def", category: "Customs", german: "Verzollung" },
  { termKey: "Einfuhrabgaben", term: "Einfuhrabgaben", definitionKey: "Einfuhrabgaben_def", category: "Customs", german: "Einfuhrabgaben" },
];

const categories = ["All", "Operations", "Compliance", "Documents", "Vehicles", "Pricing", "Customs", "Cargo", "Technology"];

export function GlossaryChapter() {
  const { ct } = useChapterTranslation("glossary");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      "All": ct("allCategories"),
      "Operations": ct("operations"),
      "Compliance": ct("compliance"),
      "Documents": ct("documents"),
      "Vehicles": ct("vehicles"),
      "Pricing": ct("pricing"),
      "Customs": ct("customs"),
      "Cargo": ct("cargo"),
      "Technology": ct("technology"),
    };
    return categoryMap[category] || category;
  };

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const definition = ct(term.definitionKey);
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (term.german && term.german.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, selectedCategory, ct]);

  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct('chapterTitle')}
        description={ct('heroDescription')}
        icon={Book}
        variant="glossary"
      />

      {/* Search and Filter */}
      <section className="sticky top-0 z-10 bg-background py-4 border-b border-border">
      <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={ct("searchPlaceholder")}
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
                <option key={cat} value={cat}>{getCategoryLabel(cat)}</option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {filteredTerms.length} / {glossaryTerms.length} {ct("termsCount")}
        </p>
      </section>

      {/* Glossary Terms */}
      <section>
        <div className="space-y-4">
          {filteredTerms.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-primary font-mono">{item.term}</h3>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">{getCategoryLabel(item.category)}</span>
              </div>
              <p className="text-sm text-foreground mb-2">{ct(item.definitionKey)}</p>
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
          <h3 className="text-lg font-semibold mb-2">{ct("noResults")}</h3>
          <p className="text-muted-foreground">{ct("noResults")}</p>
        </div>
      )}
    </div>
  );
}
