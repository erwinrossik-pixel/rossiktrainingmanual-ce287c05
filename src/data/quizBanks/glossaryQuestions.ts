import { QuizQuestion } from '../quizData';

export const glossaryQuestions: QuizQuestion[] = [
  // Romanian Questions
  {
    question: "Ce înseamnă termenul 'CMR' în transport internațional?",
    options: [
      "Convention relative au contrat de transport international de Marchandises par Route",
      "Central Motor Registry",
      "Cargo Management Report",
      "Container Movement Record"
    ],
    correctIndex: 0,
    explanation: "CMR este convenția internațională care reglementează transportul rutier de mărfuri.",
    language: "ro"
  },
  {
    question: "Ce reprezintă 'FTL' în logistică?",
    options: [
      "Full Truck Load - încărcătură completă de camion",
      "Fast Track Logistics",
      "Freight Transport License",
      "Final Transport Location"
    ],
    correctIndex: 0,
    explanation: "FTL desemnează un transport în care întregul vehicul este utilizat pentru o singură expediere.",
    language: "ro"
  },
  {
    question: "Ce înseamnă 'LTL' în expediere?",
    options: [
      "Less Than Truckload - încărcătură parțială",
      "Long Term Lease",
      "Local Transport Logistics",
      "Limited Time Loading"
    ],
    correctIndex: 0,
    explanation: "LTL reprezintă transporturi care nu umplu complet un vehicul, permițând consolidarea.",
    language: "ro"
  },
  {
    question: "Ce este un 'Bill of Lading' (B/L)?",
    options: [
      "Document de transport maritim care dovedește primirea mărfii",
      "Factură de transport",
      "Certificat de asigurare",
      "Licență de operator"
    ],
    correctIndex: 0,
    explanation: "Bill of Lading este documentul fundamental în transportul maritim, servind ca titlu de proprietate.",
    language: "ro"
  },
  {
    question: "Ce înseamnă 'Demurrage'?",
    options: [
      "Penalizare pentru depășirea timpului gratuit de staționare",
      "Discount pentru volum",
      "Taxa de drum",
      "Costuri de manipulare"
    ],
    correctIndex: 0,
    explanation: "Demurrage este taxa percepută când un container/vehicul depășește timpul alocat pentru încărcare/descărcare.",
    language: "ro"
  },
  {
    question: "Ce reprezintă 'Cabotaj' în transport?",
    options: [
      "Transportul de mărfuri în interiorul unei țări de către un transportator străin",
      "Transport internațional",
      "Transport multimodal",
      "Transport de pasageri"
    ],
    correctIndex: 0,
    explanation: "Cabotajul permite transportatorilor străini să efectueze transporturi interne, cu restricții.",
    language: "ro"
  },
  {
    question: "Ce înseamnă 'ETA' în logistică?",
    options: [
      "Estimated Time of Arrival - Ora estimată de sosire",
      "Electronic Transport Agreement",
      "European Transport Association",
      "Extended Transit Area"
    ],
    correctIndex: 0,
    explanation: "ETA indică momentul estimat de sosire la destinație.",
    language: "ro"
  },
  {
    question: "Ce este 'Cross-docking'?",
    options: [
      "Transfer direct din vehicul în vehicul fără depozitare",
      "Transport maritim",
      "Încărcare dublă",
      "Livrare expresă"
    ],
    correctIndex: 0,
    explanation: "Cross-docking minimizează timpul de depozitare prin transferul direct între vehicule.",
    language: "ro"
  },
  {
    question: "Ce reprezintă 'ADR' în transport?",
    options: [
      "Accord européen relatif au transport international des marchandises Dangereuses par Route",
      "Advanced Driver Requirements",
      "Automatic Dispatch Routing",
      "Annual Distance Report"
    ],
    correctIndex: 0,
    explanation: "ADR reglementează transportul internațional rutier de mărfuri periculoase în Europa.",
    language: "ro"
  },
  {
    question: "Ce înseamnă 'POD' în livrări?",
    options: [
      "Proof of Delivery - Dovadă de livrare",
      "Point of Departure",
      "Package Order Document",
      "Priority Order Delivery"
    ],
    correctIndex: 0,
    explanation: "POD confirmă că marfa a fost livrată și recepționată de destinatar.",
    language: "ro"
  },

  // German Questions
  {
    question: "Was bedeutet der Begriff 'CMR' im internationalen Transport?",
    options: [
      "Convention relative au contrat de transport international de Marchandises par Route",
      "Central Motor Registry",
      "Cargo Management Report",
      "Container Movement Record"
    ],
    correctIndex: 0,
    explanation: "CMR ist das internationale Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr.",
    language: "de"
  },
  {
    question: "Was bedeutet 'FTL' in der Logistik?",
    options: [
      "Full Truck Load - Komplettladung",
      "Fast Track Logistics",
      "Freight Transport License",
      "Final Transport Location"
    ],
    correctIndex: 0,
    explanation: "FTL bezeichnet einen Transport, bei dem das gesamte Fahrzeug für eine einzige Sendung genutzt wird.",
    language: "de"
  },
  {
    question: "Was bedeutet 'LTL' in der Spedition?",
    options: [
      "Less Than Truckload - Teilladung",
      "Long Term Lease",
      "Local Transport Logistics",
      "Limited Time Loading"
    ],
    correctIndex: 0,
    explanation: "LTL bezeichnet Sendungen, die ein Fahrzeug nicht vollständig füllen und Konsolidierung ermöglichen.",
    language: "de"
  },
  {
    question: "Was ist ein 'Bill of Lading' (B/L)?",
    options: [
      "Seetransportdokument als Nachweis der Warenannahme",
      "Transportrechnung",
      "Versicherungszertifikat",
      "Betreiberlizenz"
    ],
    correctIndex: 0,
    explanation: "Das Bill of Lading ist das grundlegende Dokument im Seetransport und dient als Eigentumstitel.",
    language: "de"
  },
  {
    question: "Was bedeutet 'Demurrage'?",
    options: [
      "Strafe für Überschreitung der kostenlosen Standzeit",
      "Mengenrabatt",
      "Mautgebühr",
      "Umschlagskosten"
    ],
    correctIndex: 0,
    explanation: "Demurrage ist die Gebühr, wenn ein Container/Fahrzeug die zugeteilte Lade-/Entladezeit überschreitet.",
    language: "de"
  },
  {
    question: "Was bedeutet 'Kabotage' im Transport?",
    options: [
      "Inlandstransport durch ausländischen Frachtführer",
      "Internationaler Transport",
      "Multimodaler Transport",
      "Personenbeförderung"
    ],
    correctIndex: 0,
    explanation: "Kabotage erlaubt ausländischen Frachtführern Inlandstransporte mit Einschränkungen durchzuführen.",
    language: "de"
  },
  {
    question: "Was bedeutet 'ETA' in der Logistik?",
    options: [
      "Estimated Time of Arrival - Geschätzte Ankunftszeit",
      "Electronic Transport Agreement",
      "European Transport Association",
      "Extended Transit Area"
    ],
    correctIndex: 0,
    explanation: "ETA gibt den geschätzten Ankunftszeitpunkt am Zielort an.",
    language: "de"
  },
  {
    question: "Was ist 'Cross-Docking'?",
    options: [
      "Direkter Umschlag von Fahrzeug zu Fahrzeug ohne Lagerung",
      "Seetransport",
      "Doppelbeladung",
      "Expresslieferung"
    ],
    correctIndex: 0,
    explanation: "Cross-Docking minimiert die Lagerzeit durch direkten Transfer zwischen Fahrzeugen.",
    language: "de"
  },
  {
    question: "Was bedeutet 'ADR' im Transport?",
    options: [
      "Accord européen relatif au transport international des marchandises Dangereuses par Route",
      "Advanced Driver Requirements",
      "Automatic Dispatch Routing",
      "Annual Distance Report"
    ],
    correctIndex: 0,
    explanation: "ADR regelt den internationalen Straßentransport gefährlicher Güter in Europa.",
    language: "de"
  },
  {
    question: "Was bedeutet 'POD' bei Lieferungen?",
    options: [
      "Proof of Delivery - Liefernachweis",
      "Point of Departure",
      "Package Order Document",
      "Priority Order Delivery"
    ],
    correctIndex: 0,
    explanation: "POD bestätigt, dass die Ware geliefert und vom Empfänger angenommen wurde.",
    language: "de"
  },

  // English Questions
  {
    question: "What does the term 'CMR' mean in international transport?",
    options: [
      "Convention on the Contract for the International Carriage of Goods by Road",
      "Central Motor Registry",
      "Cargo Management Report",
      "Container Movement Record"
    ],
    correctIndex: 0,
    explanation: "CMR is the international convention governing the carriage of goods by road.",
    language: "en"
  },
  {
    question: "What does 'FTL' represent in logistics?",
    options: [
      "Full Truck Load - complete truck shipment",
      "Fast Track Logistics",
      "Freight Transport License",
      "Final Transport Location"
    ],
    correctIndex: 0,
    explanation: "FTL designates a transport where the entire vehicle is used for a single shipment.",
    language: "en"
  },
  {
    question: "What does 'LTL' mean in shipping?",
    options: [
      "Less Than Truckload - partial load",
      "Long Term Lease",
      "Local Transport Logistics",
      "Limited Time Loading"
    ],
    correctIndex: 0,
    explanation: "LTL represents shipments that don't completely fill a vehicle, allowing consolidation.",
    language: "en"
  },
  {
    question: "What is a 'Bill of Lading' (B/L)?",
    options: [
      "Maritime transport document proving cargo receipt",
      "Transport invoice",
      "Insurance certificate",
      "Operator license"
    ],
    correctIndex: 0,
    explanation: "Bill of Lading is the fundamental document in maritime transport, serving as title of ownership.",
    language: "en"
  },
  {
    question: "What does 'Demurrage' mean?",
    options: [
      "Penalty for exceeding free standing time",
      "Volume discount",
      "Road toll",
      "Handling costs"
    ],
    correctIndex: 0,
    explanation: "Demurrage is the charge when a container/vehicle exceeds the allocated loading/unloading time.",
    language: "en"
  },
  {
    question: "What does 'Cabotage' represent in transport?",
    options: [
      "Domestic transport within a country by a foreign carrier",
      "International transport",
      "Multimodal transport",
      "Passenger transport"
    ],
    correctIndex: 0,
    explanation: "Cabotage allows foreign carriers to perform domestic transports, with restrictions.",
    language: "en"
  },
  {
    question: "What does 'ETA' mean in logistics?",
    options: [
      "Estimated Time of Arrival",
      "Electronic Transport Agreement",
      "European Transport Association",
      "Extended Transit Area"
    ],
    correctIndex: 0,
    explanation: "ETA indicates the estimated arrival time at destination.",
    language: "en"
  },
  {
    question: "What is 'Cross-docking'?",
    options: [
      "Direct transfer from vehicle to vehicle without storage",
      "Maritime transport",
      "Double loading",
      "Express delivery"
    ],
    correctIndex: 0,
    explanation: "Cross-docking minimizes storage time through direct transfer between vehicles.",
    language: "en"
  },
  {
    question: "What does 'ADR' represent in transport?",
    options: [
      "European Agreement concerning the International Carriage of Dangerous Goods by Road",
      "Advanced Driver Requirements",
      "Automatic Dispatch Routing",
      "Annual Distance Report"
    ],
    correctIndex: 0,
    explanation: "ADR regulates international road transport of dangerous goods in Europe.",
    language: "en"
  },
  {
    question: "What does 'POD' mean in deliveries?",
    options: [
      "Proof of Delivery",
      "Point of Departure",
      "Package Order Document",
      "Priority Order Delivery"
    ],
    correctIndex: 0,
    explanation: "POD confirms that the goods were delivered and received by the consignee.",
    language: "en"
  }
];
