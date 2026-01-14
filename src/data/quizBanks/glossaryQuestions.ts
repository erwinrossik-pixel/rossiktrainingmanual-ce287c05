import { TranslatedQuizQuestion } from '../quizTranslations';

export const glossaryQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Ce înseamnă termenul 'CMR' în transport internațional?",
      de: "Was bedeutet der Begriff 'CMR' im internationalen Transport?",
      en: "What does the term 'CMR' mean in international transport?"
    },
    options: {
      ro: ["Convention relative au contrat de transport international de Marchandises par Route", "Central Motor Registry", "Cargo Management Report", "Container Movement Record"],
      de: ["Convention relative au contrat de transport international de Marchandises par Route", "Central Motor Registry", "Cargo Management Report", "Container Movement Record"],
      en: ["Convention on the Contract for the International Carriage of Goods by Road", "Central Motor Registry", "Cargo Management Report", "Container Movement Record"]
    },
    correctIndex: 0,
    explanation: {
      ro: "CMR este convenția internațională care reglementează transportul rutier de mărfuri.",
      de: "CMR ist das internationale Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr.",
      en: "CMR is the international convention governing the carriage of goods by road."
    }
  },
  {
    question: {
      ro: "Ce reprezintă 'FTL' în logistică?",
      de: "Was bedeutet 'FTL' in der Logistik?",
      en: "What does 'FTL' represent in logistics?"
    },
    options: {
      ro: ["Full Truck Load - încărcătură completă de camion", "Fast Track Logistics", "Freight Transport License", "Final Transport Location"],
      de: ["Full Truck Load - Komplettladung", "Fast Track Logistics", "Freight Transport License", "Final Transport Location"],
      en: ["Full Truck Load - complete truck shipment", "Fast Track Logistics", "Freight Transport License", "Final Transport Location"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FTL desemnează un transport în care întregul vehicul este utilizat pentru o singură expediere.",
      de: "FTL bezeichnet einen Transport, bei dem das gesamte Fahrzeug für eine einzige Sendung genutzt wird.",
      en: "FTL designates a transport where the entire vehicle is used for a single shipment."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'LTL' în expediere?",
      de: "Was bedeutet 'LTL' in der Spedition?",
      en: "What does 'LTL' mean in shipping?"
    },
    options: {
      ro: ["Less Than Truckload - încărcătură parțială", "Long Term Lease", "Local Transport Logistics", "Limited Time Loading"],
      de: ["Less Than Truckload - Teilladung", "Long Term Lease", "Local Transport Logistics", "Limited Time Loading"],
      en: ["Less Than Truckload - partial load", "Long Term Lease", "Local Transport Logistics", "Limited Time Loading"]
    },
    correctIndex: 0,
    explanation: {
      ro: "LTL reprezintă transporturi care nu umplu complet un vehicul, permițând consolidarea.",
      de: "LTL bezeichnet Sendungen, die ein Fahrzeug nicht vollständig füllen und Konsolidierung ermöglichen.",
      en: "LTL represents shipments that don't completely fill a vehicle, allowing consolidation."
    }
  },
  {
    question: {
      ro: "Ce este un 'Bill of Lading' (B/L)?",
      de: "Was ist ein 'Bill of Lading' (B/L)?",
      en: "What is a 'Bill of Lading' (B/L)?"
    },
    options: {
      ro: ["Document de transport maritim care dovedește primirea mărfii", "Factură de transport", "Certificat de asigurare", "Licență de operator"],
      de: ["Seetransportdokument als Nachweis der Warenannahme", "Transportrechnung", "Versicherungszertifikat", "Betreiberlizenz"],
      en: ["Maritime transport document proving cargo receipt", "Transport invoice", "Insurance certificate", "Operator license"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Bill of Lading este documentul fundamental în transportul maritim, servind ca titlu de proprietate.",
      de: "Das Bill of Lading ist das grundlegende Dokument im Seetransport und dient als Eigentumstitel.",
      en: "Bill of Lading is the fundamental document in maritime transport, serving as title of ownership."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Demurrage'?",
      de: "Was bedeutet 'Demurrage'?",
      en: "What does 'Demurrage' mean?"
    },
    options: {
      ro: ["Penalizare pentru depășirea timpului gratuit de staționare", "Discount pentru volum", "Taxa de drum", "Costuri de manipulare"],
      de: ["Strafe für Überschreitung der kostenlosen Standzeit", "Mengenrabatt", "Mautgebühr", "Umschlagskosten"],
      en: ["Penalty for exceeding free standing time", "Volume discount", "Road toll", "Handling costs"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Demurrage este taxa percepută când un container/vehicul depășește timpul alocat pentru încărcare/descărcare.",
      de: "Demurrage ist die Gebühr, wenn ein Container/Fahrzeug die zugeteilte Lade-/Entladezeit überschreitet.",
      en: "Demurrage is the charge when a container/vehicle exceeds the allocated loading/unloading time."
    }
  },
  {
    question: {
      ro: "Ce reprezintă 'Cabotaj' în transport?",
      de: "Was bedeutet 'Kabotage' im Transport?",
      en: "What does 'Cabotage' represent in transport?"
    },
    options: {
      ro: ["Transportul de mărfuri în interiorul unei țări de către un transportator străin", "Transport internațional", "Transport multimodal", "Transport de pasageri"],
      de: ["Inlandstransport durch ausländischen Frachtführer", "Internationaler Transport", "Multimodaler Transport", "Personenbeförderung"],
      en: ["Domestic transport within a country by a foreign carrier", "International transport", "Multimodal transport", "Passenger transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cabotajul permite transportatorilor străini să efectueze transporturi interne, cu restricții.",
      de: "Kabotage erlaubt ausländischen Frachtführern Inlandstransporte mit Einschränkungen durchzuführen.",
      en: "Cabotage allows foreign carriers to perform domestic transports, with restrictions."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'ETA' în logistică?",
      de: "Was bedeutet 'ETA' in der Logistik?",
      en: "What does 'ETA' mean in logistics?"
    },
    options: {
      ro: ["Estimated Time of Arrival - Ora estimată de sosire", "Electronic Transport Agreement", "European Transport Association", "Extended Transit Area"],
      de: ["Estimated Time of Arrival - Geschätzte Ankunftszeit", "Electronic Transport Agreement", "European Transport Association", "Extended Transit Area"],
      en: ["Estimated Time of Arrival", "Electronic Transport Agreement", "European Transport Association", "Extended Transit Area"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ETA indică momentul estimat de sosire la destinație.",
      de: "ETA gibt den geschätzten Ankunftszeitpunkt am Zielort an.",
      en: "ETA indicates the estimated arrival time at destination."
    }
  },
  {
    question: {
      ro: "Ce este 'Cross-docking'?",
      de: "Was ist 'Cross-Docking'?",
      en: "What is 'Cross-docking'?"
    },
    options: {
      ro: ["Transfer direct din vehicul în vehicul fără depozitare", "Transport maritim", "Încărcare dublă", "Livrare expresă"],
      de: ["Direkter Umschlag von Fahrzeug zu Fahrzeug ohne Lagerung", "Seetransport", "Doppelbeladung", "Expresslieferung"],
      en: ["Direct transfer from vehicle to vehicle without storage", "Maritime transport", "Double loading", "Express delivery"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cross-docking minimizează timpul de depozitare prin transferul direct între vehicule.",
      de: "Cross-Docking minimiert die Lagerzeit durch direkten Transfer zwischen Fahrzeugen.",
      en: "Cross-docking minimizes storage time through direct transfer between vehicles."
    }
  },
  {
    question: {
      ro: "Ce reprezintă 'ADR' în transport?",
      de: "Was bedeutet 'ADR' im Transport?",
      en: "What does 'ADR' represent in transport?"
    },
    options: {
      ro: ["Acordul European pentru Transportul Mărfurilor Periculoase", "Advanced Driver Requirements", "Automatic Dispatch Routing", "Annual Distance Report"],
      de: ["Europäisches Übereinkommen über den Transport gefährlicher Güter", "Advanced Driver Requirements", "Automatic Dispatch Routing", "Annual Distance Report"],
      en: ["European Agreement on Dangerous Goods Transport", "Advanced Driver Requirements", "Automatic Dispatch Routing", "Annual Distance Report"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ADR reglementează transportul internațional rutier de mărfuri periculoase în Europa.",
      de: "ADR regelt den internationalen Straßentransport gefährlicher Güter in Europa.",
      en: "ADR regulates international road transport of dangerous goods in Europe."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'POD' în livrări?",
      de: "Was bedeutet 'POD' bei Lieferungen?",
      en: "What does 'POD' mean in deliveries?"
    },
    options: {
      ro: ["Proof of Delivery - Dovadă de livrare", "Point of Departure", "Package Order Document", "Priority Order Delivery"],
      de: ["Proof of Delivery - Liefernachweis", "Point of Departure", "Package Order Document", "Priority Order Delivery"],
      en: ["Proof of Delivery", "Point of Departure", "Package Order Document", "Priority Order Delivery"]
    },
    correctIndex: 0,
    explanation: {
      ro: "POD confirmă că marfa a fost livrată și recepționată de destinatar.",
      de: "POD bestätigt, dass die Ware geliefert und vom Empfänger angenommen wurde.",
      en: "POD confirms that the goods were delivered and received by the consignee."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'ETD' în transport?",
      de: "Was bedeutet 'ETD' im Transport?",
      en: "What does 'ETD' mean in transport?"
    },
    options: {
      ro: ["Estimated Time of Departure - Ora estimată de plecare", "Electronic Transport Document", "European Transport Directive", "Extended Transit Duration"],
      de: ["Estimated Time of Departure - Geschätzte Abfahrtszeit", "Electronic Transport Document", "European Transport Directive", "Extended Transit Duration"],
      en: ["Estimated Time of Departure", "Electronic Transport Document", "European Transport Directive", "Extended Transit Duration"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ETD indică ora estimată la care vehiculul va pleca din punctul de încărcare.",
      de: "ETD gibt die geschätzte Zeit an, zu der das Fahrzeug vom Ladepunkt abfährt.",
      en: "ETD indicates the estimated time when the vehicle will depart from the loading point."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'LDM' (Loading Meters)?",
      de: "Was bedeutet 'LDM' (Lademeter)?",
      en: "What does 'LDM' (Loading Meters) mean?"
    },
    options: {
      ro: ["Metri liniari de încărcare pe podeaua vehiculului", "Distanța de livrare maximă", "Limita de greutate pe osie", "Lungimea documentelor de transport"],
      de: ["Lineare Lademeter auf dem Fahrzeugboden", "Maximale Lieferentfernung", "Achslastgrenze", "Länge der Transportdokumente"],
      en: ["Linear loading meters on the vehicle floor", "Maximum delivery distance", "Axle weight limit", "Transport document length"]
    },
    correctIndex: 0,
    explanation: {
      ro: "LDM măsoară spațiul ocupat pe podea, calculat ca (Lungime × Lățime) / 2.4.",
      de: "LDM misst den belegten Bodenraum, berechnet als (Länge × Breite) / 2,4.",
      en: "LDM measures floor space occupied, calculated as (Length × Width) / 2.4."
    }
  },
  {
    question: {
      ro: "Ce este 'Groupage' sau 'Consolidation'?",
      de: "Was ist 'Sammelgut' oder 'Konsolidierung'?",
      en: "What is 'Groupage' or 'Consolidation'?"
    },
    options: {
      ro: ["Combinarea mai multor expediții mici într-un singur transport", "Transport individual premium", "Depozitare pe termen lung", "Despachetare la destinație"],
      de: ["Kombination mehrerer kleiner Sendungen in einen Transport", "Premium-Einzeltransport", "Langzeitlagerung", "Auspacken am Ziel"],
      en: ["Combining multiple small shipments into one transport", "Individual premium transport", "Long-term storage", "Unpacking at destination"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Grupajul optimizează costurile și utilizarea spațiului prin consolidarea mărfurilor.",
      de: "Sammelgut optimiert Kosten und Raumnutzung durch Warenkonsolidierung.",
      en: "Groupage optimizes costs and space utilization through goods consolidation."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Tautliner' sau 'Curtainsider'?",
      de: "Was bedeutet 'Tautliner' oder 'Planenauflieger'?",
      en: "What does 'Tautliner' or 'Curtainsider' mean?"
    },
    options: {
      ro: ["Semiremorcă cu prelată laterală pentru încărcare din lateral", "Camion cisternă", "Semiremorcă frigorifică", "Vehicul basculant"],
      de: ["Auflieger mit Seitenplane für seitliche Beladung", "Tankwagen", "Kühlauflieger", "Kipperfahrzeug"],
      en: ["Trailer with side curtains for side loading", "Tank truck", "Refrigerated trailer", "Tipper vehicle"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Tautliner permite încărcarea și descărcarea din lateral, oferind flexibilitate maximă.",
      de: "Tautliner ermöglicht seitliches Be- und Entladen für maximale Flexibilität.",
      en: "Tautliner allows side loading and unloading, offering maximum flexibility."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Reefer' în transport?",
      de: "Was bedeutet 'Reefer' im Transport?",
      en: "What does 'Reefer' mean in transport?"
    },
    options: {
      ro: ["Vehicul sau container frigorific pentru transport la temperatură controlată", "Vehicul de mare viteză", "Transport de materiale reciclabile", "Vehicul de urgență"],
      de: ["Kühlfahrzeug oder -container für temperaturgeführten Transport", "Hochgeschwindigkeitsfahrzeug", "Transport von Recyclingmaterialien", "Notfallfahrzeug"],
      en: ["Refrigerated vehicle or container for temperature-controlled transport", "High-speed vehicle", "Recyclable materials transport", "Emergency vehicle"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Reefer-ul menține mărfurile la temperaturi controlate pe toată durata transportului.",
      de: "Der Reefer hält Waren während des gesamten Transports bei kontrollierten Temperaturen.",
      en: "Reefer maintains goods at controlled temperatures throughout transport."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Mega Trailer' sau 'Jumbo Trailer'?",
      de: "Was bedeutet 'Mega Trailer' oder 'Jumbo Trailer'?",
      en: "What does 'Mega Trailer' or 'Jumbo Trailer' mean?"
    },
    options: {
      ro: ["Semiremorcă cu înălțime internă de 3m pentru volum suplimentar", "Semiremorcă foarte grea", "Semiremorcă scurtă", "Semiremorcă pentru containere"],
      de: ["Auflieger mit 3m Innenhöhe für zusätzliches Volumen", "Sehr schwerer Auflieger", "Kurzer Auflieger", "Containerauflieger"],
      en: ["Trailer with 3m internal height for extra volume", "Very heavy trailer", "Short trailer", "Container trailer"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Mega Trailer oferă 3m înălțime internă vs 2.7m standard, ideal pentru marfă voluminoasă ușoară.",
      de: "Mega Trailer bietet 3m Innenhöhe vs. 2,7m Standard, ideal für voluminöse leichte Fracht.",
      en: "Mega Trailer offers 3m internal height vs 2.7m standard, ideal for voluminous light cargo."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'AWB' (Air Waybill)?",
      de: "Was bedeutet 'AWB' (Air Waybill)?",
      en: "What does 'AWB' (Air Waybill) mean?"
    },
    options: {
      ro: ["Document de transport aerian echivalent cu CMR pentru transport rutier", "Document vamal", "Factură de transport", "Certificat de asigurare"],
      de: ["Luftfrachtbrief, Äquivalent zum CMR im Straßentransport", "Zolldokument", "Transportrechnung", "Versicherungszertifikat"],
      en: ["Air transport document equivalent to CMR in road transport", "Customs document", "Transport invoice", "Insurance certificate"]
    },
    correctIndex: 0,
    explanation: {
      ro: "AWB este documentul principal pentru expedierea aeriană de mărfuri.",
      de: "AWB ist das Hauptdokument für Luftfrachtversand.",
      en: "AWB is the main document for air cargo shipment."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'GVW' (Gross Vehicle Weight)?",
      de: "Was bedeutet 'GVW' (Gross Vehicle Weight)?",
      en: "What does 'GVW' (Gross Vehicle Weight) mean?"
    },
    options: {
      ro: ["Greutatea totală a vehiculului inclusiv marfă și combustibil", "Doar greutatea mărfii", "Greutatea șoferului", "Capacitatea de remorcare"],
      de: ["Gesamtgewicht des Fahrzeugs einschließlich Ladung und Kraftstoff", "Nur Ladungsgewicht", "Fahrergewicht", "Zugkapazität"],
      en: ["Total weight of vehicle including cargo and fuel", "Only cargo weight", "Driver weight", "Towing capacity"]
    },
    correctIndex: 0,
    explanation: {
      ro: "GVW include greutatea vehiculului gol plus marfa, combustibilul și ocupanții.",
      de: "GVW umfasst das Leergewicht des Fahrzeugs plus Ladung, Kraftstoff und Insassen.",
      en: "GVW includes the empty vehicle weight plus cargo, fuel and occupants."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'EPAL' referitor la paleți?",
      de: "Was bedeutet 'EPAL' in Bezug auf Paletten?",
      en: "What does 'EPAL' mean regarding pallets?"
    },
    options: {
      ro: ["European Pallet Association - paleți standardizați 80x120cm schimbabili", "Extra Plastic Pallet", "Electronic Pallet Allocation", "Emergency Pallet Alternative"],
      de: ["European Pallet Association - standardisierte austauschbare 80x120cm Paletten", "Extra Plastic Pallet", "Electronic Pallet Allocation", "Emergency Pallet Alternative"],
      en: ["European Pallet Association - standardized exchangeable 80x120cm pallets", "Extra Plastic Pallet", "Electronic Pallet Allocation", "Emergency Pallet Alternative"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Paleții EPAL sunt standardizați și pot fi schimbați 1:1 în rețeaua europeană de transport.",
      de: "EPAL-Paletten sind standardisiert und können 1:1 im europäischen Transportnetzwerk ausgetauscht werden.",
      en: "EPAL pallets are standardized and can be exchanged 1:1 in the European transport network."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Transit Time'?",
      de: "Was bedeutet 'Transit Time'?",
      en: "What does 'Transit Time' mean?"
    },
    options: {
      ro: ["Timpul total de la încărcare până la livrare", "Doar timpul de conducere", "Timpul de așteptare la vamă", "Timpul de încărcare"],
      de: ["Gesamtzeit von Beladung bis Lieferung", "Nur Fahrzeit", "Wartezeit beim Zoll", "Ladezeit"],
      en: ["Total time from loading to delivery", "Only driving time", "Customs waiting time", "Loading time"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Transit time include toate etapele: încărcare, transport, descărcare, pauze legale.",
      de: "Transit Time umfasst alle Etappen: Beladung, Transport, Entladung, gesetzliche Pausen.",
      en: "Transit time includes all stages: loading, transport, unloading, legal breaks."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Slot' în context de livrare?",
      de: "Was bedeutet 'Slot' im Lieferkontext?",
      en: "What does 'Slot' mean in delivery context?"
    },
    options: {
      ro: ["Interval de timp rezervat pentru încărcare/descărcare la rampă", "Spațiu în camion", "Poziție pe palet", "Locație pe hartă"],
      de: ["Reserviertes Zeitfenster für Be-/Entladung an der Rampe", "Platz im LKW", "Position auf Palette", "Kartenstandort"],
      en: ["Reserved time interval for loading/unloading at dock", "Space in truck", "Position on pallet", "Map location"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Slot-ul asigură că vehiculul are acces la rampă în intervalul planificat.",
      de: "Der Slot stellt sicher, dass das Fahrzeug im geplanten Zeitraum Zugang zur Rampe hat.",
      en: "Slot ensures the vehicle has dock access during the planned interval."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Detention'?",
      de: "Was bedeutet 'Detention'?",
      en: "What does 'Detention' mean?"
    },
    options: {
      ro: ["Taxa pentru reținerea vehiculului peste timpul gratuit de încărcare/descărcare", "Pedeapsă pentru șofer", "Reținere la vamă", "Oprire pentru control"],
      de: ["Gebühr für Zurückhaltung des Fahrzeugs über kostenlose Lade-/Entladezeit hinaus", "Fahrstrafe", "Zollrückhaltung", "Kontrollstopp"],
      en: ["Fee for vehicle retention beyond free loading/unloading time", "Driver penalty", "Customs detention", "Control stop"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Detention compensează transportatorul pentru timpul pierdut în așteptare peste norma gratuită.",
      de: "Detention entschädigt den Spediteur für Wartezeit über die kostenlose Norm hinaus.",
      en: "Detention compensates the carrier for waiting time beyond the free allowance."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'FOB' (Free On Board)?",
      de: "Was bedeutet 'FOB' (Free On Board)?",
      en: "What does 'FOB' (Free On Board) mean?"
    },
    options: {
      ro: ["Responsabilitatea trece la cumpărător când marfa este pe bord în portul de expediere", "Transport gratuit", "Asigurare inclusă", "Livrare la ușă"],
      de: ["Verantwortung geht auf Käufer über wenn Ware im Verschiffungshafen an Bord ist", "Kostenloser Transport", "Versicherung inklusive", "Lieferung bis zur Tür"],
      en: ["Responsibility transfers to buyer when goods are on board at shipping port", "Free transport", "Insurance included", "Door delivery"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FOB este un termen Incoterms care definește punctul de transfer al riscului și costurilor.",
      de: "FOB ist ein Incoterms-Begriff, der den Punkt des Risiko- und Kostenübergangs definiert.",
      en: "FOB is an Incoterms term defining the point of risk and cost transfer."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'CIF' (Cost, Insurance and Freight)?",
      de: "Was bedeutet 'CIF' (Cost, Insurance and Freight)?",
      en: "What does 'CIF' (Cost, Insurance and Freight) mean?"
    },
    options: {
      ro: ["Vânzătorul plătește transportul și asigurarea până în portul de destinație", "Cumpărătorul plătește totul", "Transport fără asigurare", "Doar costuri locale"],
      de: ["Verkäufer zahlt Transport und Versicherung bis Bestimmungshafen", "Käufer zahlt alles", "Transport ohne Versicherung", "Nur lokale Kosten"],
      en: ["Seller pays transport and insurance to destination port", "Buyer pays everything", "Transport without insurance", "Only local costs"]
    },
    correctIndex: 0,
    explanation: {
      ro: "CIF include costul mărfii, transportul maritim și asigurarea până în portul de destinație.",
      de: "CIF umfasst Warenkosten, Seefracht und Versicherung bis zum Bestimmungshafen.",
      en: "CIF includes goods cost, sea freight and insurance to the destination port."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'DAP' (Delivered At Place)?",
      de: "Was bedeutet 'DAP' (Delivered At Place)?",
      en: "What does 'DAP' (Delivered At Place) mean?"
    },
    options: {
      ro: ["Vânzătorul livrează marfa gata de descărcare la locația convenită", "Doar livrare parțială", "Livrare la aeroport", "Depozitare temporară"],
      de: ["Verkäufer liefert Ware entladebereit am vereinbarten Ort", "Nur Teillieferung", "Lieferung am Flughafen", "Temporäre Lagerung"],
      en: ["Seller delivers goods ready for unloading at agreed place", "Only partial delivery", "Airport delivery", "Temporary storage"]
    },
    correctIndex: 0,
    explanation: {
      ro: "DAP înseamnă că vânzătorul suportă toate riscurile și costurile până la locația de livrare.",
      de: "DAP bedeutet, dass der Verkäufer alle Risiken und Kosten bis zum Lieferort trägt.",
      en: "DAP means the seller bears all risks and costs until the delivery location."
    }
  },
  {
    question: {
      ro: "Ce este 'Multimodal Transport'?",
      de: "Was ist 'Multimodaler Transport'?",
      en: "What is 'Multimodal Transport'?"
    },
    options: {
      ro: ["Transport folosind mai multe moduri (rutier, feroviar, maritim, aerian)", "Transport doar rutier", "Transport numai aerian", "Transport local"],
      de: ["Transport mit mehreren Verkehrsträgern (Straße, Schiene, See, Luft)", "Nur Straßentransport", "Nur Lufttransport", "Lokaler Transport"],
      en: ["Transport using multiple modes (road, rail, sea, air)", "Only road transport", "Only air transport", "Local transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Multimodal combină diferite moduri de transport pentru eficiență optimă.",
      de: "Multimodal kombiniert verschiedene Transportmodi für optimale Effizienz.",
      en: "Multimodal combines different transport modes for optimal efficiency."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Intermodal Transport'?",
      de: "Was bedeutet 'Intermodaler Transport'?",
      en: "What does 'Intermodal Transport' mean?"
    },
    options: {
      ro: ["Transport folosind containere/unități standardizate pe diferite moduri fără manipularea mărfii", "Transport cu un singur mod", "Transport expres", "Transport local"],
      de: ["Transport mit standardisierten Containern/Einheiten über verschiedene Modi ohne Warenhandhabung", "Einzelmodus-Transport", "Expresstransport", "Lokaler Transport"],
      en: ["Transport using standardized containers/units across modes without cargo handling", "Single mode transport", "Express transport", "Local transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Intermodal menține marfa în aceeași unitate de încărcare pe parcursul întregului lanț.",
      de: "Intermodal hält die Ware in derselben Ladeeinheit über die gesamte Kette.",
      en: "Intermodal keeps cargo in the same loading unit throughout the entire chain."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Freight Class'?",
      de: "Was bedeutet 'Frachtklasse'?",
      en: "What does 'Freight Class' mean?"
    },
    options: {
      ro: ["Clasificare a mărfii bazată pe densitate, manipulare, responsabilitate și stivuire", "Categoria vehiculului", "Clasa șoferului", "Tipul drumului"],
      de: ["Warenklassifizierung basierend auf Dichte, Handhabung, Haftung und Stapelbarkeit", "Fahrzeugkategorie", "Fahrerklasse", "Straßentyp"],
      en: ["Cargo classification based on density, handling, liability and stackability", "Vehicle category", "Driver class", "Road type"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Freight class determină tarifele de transport bazat pe caracteristicile mărfii.",
      de: "Frachtklasse bestimmt Transporttarife basierend auf Wareneigenschaften.",
      en: "Freight class determines transport rates based on cargo characteristics."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Break Bulk'?",
      de: "Was bedeutet 'Break Bulk'?",
      en: "What does 'Break Bulk' mean?"
    },
    options: {
      ro: ["Mărfuri transportate individual, nu în containere standard", "Containere sparte", "Transport de vrac", "Livrare expresă"],
      de: ["Waren, die einzeln transportiert werden, nicht in Standardcontainern", "Zerbrochene Container", "Schüttguttransport", "Expresslieferung"],
      en: ["Goods transported individually, not in standard containers", "Broken containers", "Bulk transport", "Express delivery"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Break bulk include utilaje mari, bobine de oțel și alte mărfuri non-containerizabile.",
      de: "Break Bulk umfasst große Maschinen, Stahlcoils und andere nicht containerisierbare Waren.",
      en: "Break bulk includes large machinery, steel coils and other non-containerizable goods."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'Surcharge' în transport?",
      de: "Was bedeutet 'Surcharge' im Transport?",
      en: "What does 'Surcharge' mean in transport?"
    },
    options: {
      ro: ["Taxă suplimentară peste tariful de bază pentru condiții speciale", "Reducere de preț", "Plată în avans", "Penalizare pentru întârziere"],
      de: ["Zusatzgebühr über den Grundtarif für besondere Bedingungen", "Preisreduzierung", "Vorauszahlung", "Verspätungsstrafe"],
      en: ["Additional fee above base rate for special conditions", "Price reduction", "Advance payment", "Delay penalty"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Surcharges includ taxa de combustibil, taxe pentru destinații dificile, sezonalitate etc.",
      de: "Zuschläge umfassen Kraftstoffgebühren, Gebühren für schwierige Ziele, Saisonalität usw.",
      en: "Surcharges include fuel fees, difficult destination fees, seasonality etc."
    }
  }
];
