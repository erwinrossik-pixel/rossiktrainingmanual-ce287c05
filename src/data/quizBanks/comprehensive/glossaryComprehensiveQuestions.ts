import { TranslatedQuizQuestion } from '../../quizTranslations';

export const glossaryComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă CMR în transport?",
      de: "Was bedeutet CMR im Transport?",
      en: "What does CMR mean in transport?"
    },
    options: {
      ro: ["Cost Minimal Rutier", "Convention relative au contrat de transport international de Marchandises par Route", "Container Marfă Rapidă", "Control Marfă România"],
      de: ["Kostenminimale Route", "Convention relative au contrat de transport international de Marchandises par Route", "Container Massen Route", "Kontrolle Massen Richtung"],
      en: ["Cost Minimal Road", "Convention relative au contrat de transport international de Marchandises par Route", "Container Mass Road", "Control Mass Route"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR = Convenția referitoare la contractul de transport internațional de mărfuri pe șosele. Reglementează transportul rutier internațional în Europa, stabilește responsabilitățile și limitele de răspundere.",
      de: "CMR = Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr. Regelt den internationalen Straßengüterverkehr in Europa, legt Verantwortlichkeiten und Haftungsgrenzen fest.",
      en: "CMR = Convention on the Contract for the International Carriage of Goods by Road. Governs international road transport in Europe, establishes responsibilities and liability limits."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă FTL?",
      de: "Was bedeutet FTL?",
      en: "What does FTL mean?"
    },
    options: {
      ro: ["Fast Transport Line", "Full Truck Load - camion complet", "Free Transport Limit", "Final Transport Location"],
      de: ["Schnelle Transportlinie", "Full Truck Load - Komplettladung", "Freie Transportgrenze", "Endtransportstandort"],
      en: ["Fast Transport Line", "Full Truck Load - complete truck", "Free Transport Limit", "Final Transport Location"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FTL (Full Truck Load) = camion complet dedicat unui singur client/destinație. Opusul este LTL (Less Than Truck Load) = grupaj cu mai mulți clienți.",
      de: "FTL (Full Truck Load) = Komplettladung für einen einzelnen Kunden/Ziel. Gegenteil ist LTL (Less Than Truck Load) = Sammelladung mit mehreren Kunden.",
      en: "FTL (Full Truck Load) = complete truck dedicated to one client/destination. Opposite is LTL (Less Than Truck Load) = groupage with multiple clients."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este un 'deadhead' sau 'goală' în transport?",
      de: "Was ist eine 'Leerfahrt' im Transport?",
      en: "What is a 'deadhead' or empty run in transport?"
    },
    options: {
      ro: ["Șofer obosit", "Cursă fără marfă, vehicul gol care se deplasează pentru a prelua următoarea încărcătură", "Camion defect", "Transport express"],
      de: ["Müder Fahrer", "Fahrt ohne Ware, leeres Fahrzeug das zur nächsten Beladung fährt", "Defekter LKW", "Express-Transport"],
      en: ["Tired driver", "Trip without cargo, empty vehicle moving to pick up next load", "Broken truck", "Express transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Deadhead/goală: km parcurși fără marfă. Cost pur, fără venit. Obiectiv: minimizare prin planificare inteligentă, retur-uri, bursă de transport.",
      de: "Leerfahrt: km ohne Ware gefahren. Reiner Kostenfaktor ohne Einnahmen. Ziel: Minimierung durch intelligente Planung, Rückfahrten, Frachtbörse.",
      en: "Deadhead: km traveled without cargo. Pure cost, no revenue. Goal: minimize through smart planning, return loads, freight exchange."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Ce este 'cabotaj' și care sunt regulile în UE?",
      de: "Was ist 'Kabotage' und was sind die EU-Regeln?",
      en: "What is 'cabotage' and what are the EU rules?"
    },
    options: {
      ro: ["Tip de camion", "Transport intern efectuat de transportator străin; UE: max 3 operații în 7 zile după transport internațional", "Taxă vamală", "Licență specială"],
      de: ["LKW-Typ", "Inlandstransport durch ausländischen Spediteur; EU: max 3 Operationen in 7 Tagen nach internationalem Transport", "Zollgebühr", "Sonderlizenz"],
      en: ["Truck type", "Domestic transport by foreign carrier; EU: max 3 operations in 7 days after international transport", "Customs fee", "Special license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cabotaj: transport intern într-o țară de către transportator din altă țară. Regulă UE: max 3 operațiuni de cabotaj în 7 zile după descărcarea unui transport internațional. Apoi, cooling-off 4 zile.",
      de: "Kabotage: Inlandstransport in einem Land durch Spediteur aus anderem Land. EU-Regel: max 3 Kabotageoperationen in 7 Tagen nach Entladung eines internationalen Transports. Dann 4 Tage Cooling-off.",
      en: "Cabotage: domestic transport in a country by carrier from another country. EU rule: max 3 cabotage operations in 7 days after unloading an international transport. Then 4-day cooling-off."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă POD?",
      de: "Was bedeutet POD?",
      en: "What does POD mean?"
    },
    options: {
      ro: ["Point of Delivery", "Proof of Delivery - dovada livrării", "Package on Demand", "Port of Departure"],
      de: ["Lieferpunkt", "Proof of Delivery - Liefernachweis", "Paket auf Abruf", "Abfahrtshafen"],
      en: ["Point of Delivery", "Proof of Delivery - delivery confirmation", "Package on Demand", "Port of Departure"]
    },
    correctIndex: 1,
    explanation: {
      ro: "POD (Proof of Delivery): document care dovedește că marfa a fost livrată (CMR semnat, fotografie, semnătură electronică). Esențial pentru facturare și claims.",
      de: "POD (Proof of Delivery): Dokument das beweist dass Ware geliefert wurde (unterschriebener CMR, Foto, elektronische Unterschrift). Wesentlich für Fakturierung und Claims.",
      en: "POD (Proof of Delivery): document proving goods were delivered (signed CMR, photo, electronic signature). Essential for invoicing and claims."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce înseamnă 'demurrage' și 'detention'?",
      de: "Was bedeuten 'Demurrage' und 'Detention'?",
      en: "What do 'demurrage' and 'detention' mean?"
    },
    options: {
      ro: ["Taxe vamale", "Demurrage: așteptare la încărcare/descărcare; Detention: reținere echipament peste timp alocat", "Tipuri de camioane", "Asigurări"],
      de: ["Zollgebühren", "Demurrage: Wartezeit bei Be-/Entladung; Detention: Zurückhaltung von Ausrüstung über zugeteilte Zeit", "LKW-Typen", "Versicherungen"],
      en: ["Customs fees", "Demurrage: waiting at loading/unloading; Detention: holding equipment beyond allocated time", "Truck types", "Insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Demurrage: taxă pentru așteptare excesivă la terminal/port. Detention: taxă pentru reținere container/trailer peste timpul liber acordat. Ambele = costuri suplimentare de evitat.",
      de: "Demurrage: Gebühr für übermäßige Wartezeit am Terminal/Hafen. Detention: Gebühr für Container-/Trailer-Zurückhaltung über Freizeit hinaus. Beide = zu vermeidende Zusatzkosten.",
      en: "Demurrage: fee for excessive waiting at terminal/port. Detention: fee for holding container/trailer beyond free time. Both = additional costs to avoid."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Ce este 'cross-docking' și care sunt avantajele?",
      de: "Was ist 'Cross-Docking' und welche Vorteile hat es?",
      en: "What is 'cross-docking' and what are its advantages?"
    },
    options: {
      ro: ["Traversare pod", "Proces logistic: marfa trece direct din vehiculul de intrare în cel de ieșire, fără stocare", "Tip de vamă", "Schimb de șoferi"],
      de: ["Brückenüberquerung", "Logistikprozess: Ware geht direkt vom Eingangs- ins Ausgangsfahrzeug, ohne Lagerung", "Zollart", "Fahrerwechsel"],
      en: ["Bridge crossing", "Logistics process: goods go directly from incoming to outgoing vehicle, without storage", "Customs type", "Driver exchange"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cross-docking: marfa ajunge într-un hub și e transferată direct în vehiculul de distribuție, fără depozitare. Avantaje: viteză, costuri reduse de stocare, freshness pentru perisabile.",
      de: "Cross-Docking: Ware kommt in Hub an und wird direkt ins Verteilfahrzeug transferiert, ohne Lagerung. Vorteile: Geschwindigkeit, reduzierte Lagerkosten, Frische für Verderbliches.",
      en: "Cross-docking: goods arrive at hub and transfer directly to distribution vehicle, without storage. Advantages: speed, reduced storage costs, freshness for perishables."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă ETA și ETD?",
      de: "Was bedeuten ETA und ETD?",
      en: "What do ETA and ETD mean?"
    },
    options: {
      ro: ["Taxe europene", "ETA: Estimated Time of Arrival; ETD: Estimated Time of Departure", "Tipuri de camioane", "Documente vamale"],
      de: ["Europäische Steuern", "ETA: Geschätzte Ankunftszeit; ETD: Geschätzte Abfahrtszeit", "LKW-Typen", "Zolldokumente"],
      en: ["European taxes", "ETA: Estimated Time of Arrival; ETD: Estimated Time of Departure", "Truck types", "Customs documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ETA: ora estimată de sosire. ETD: ora estimată de plecare. Esențiale pentru planificare și comunicare cu clienții. Update regulat dacă se schimbă.",
      de: "ETA: geschätzte Ankunftszeit. ETD: geschätzte Abfahrtszeit. Wesentlich für Planung und Kundenkommunikation. Regelmäßige Updates bei Änderungen.",
      en: "ETA: estimated arrival time. ETD: estimated departure time. Essential for planning and client communication. Regular updates if changed."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este un 'Bill of Lading' (B/L)?",
      de: "Was ist ein 'Bill of Lading' (B/L)?",
      en: "What is a Bill of Lading (B/L)?"
    },
    options: {
      ro: ["Factură transport", "Document de transport maritim care servește ca primire marfă, contract și titlu de proprietate", "Licență transport", "Asigurare"],
      de: ["Transportrechnung", "Seefrachtdokument das als Warenempfang, Vertrag und Eigentumstitel dient", "Transportlizenz", "Versicherung"],
      en: ["Transport invoice", "Maritime transport document serving as receipt, contract and title of ownership", "Transport license", "Insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bill of Lading: document cheie în transport maritim. Triple funcție: confirmare primire marfă, dovada contractului, titlu de proprietate (negociabil). Esențial pentru comerț internațional.",
      de: "Bill of Lading: Schlüsseldokument im Seetransport. Dreifache Funktion: Warenempfangsbestätigung, Vertragsnachweis, Eigentumstitel (verhandelbar). Wesentlich für internationalen Handel.",
      en: "Bill of Lading: key document in maritime transport. Triple function: receipt confirmation, contract proof, title of ownership (negotiable). Essential for international trade."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Ce este 'droits de tirage spéciaux' (SDR/DST) și de ce contează în transport?",
      de: "Was sind 'Sonderziehungsrechte' (SZR) und warum sind sie im Transport wichtig?",
      en: "What are 'Special Drawing Rights' (SDR) and why do they matter in transport?"
    },
    options: {
      ro: ["Drepturi de parcare", "Unitate monetară internațională FMI; baza pentru limitele de răspundere CMR (8,33 SDR/kg)", "Taxe drumuri", "Licențe speciale"],
      de: ["Parkrechte", "Internationale Währungseinheit des IWF; Basis für CMR-Haftungsgrenzen (8,33 SZR/kg)", "Straßengebühren", "Sonderlizenzen"],
      en: ["Parking rights", "IMF international currency unit; basis for CMR liability limits (8.33 SDR/kg)", "Road fees", "Special licenses"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SDR (Special Drawing Rights): unitate monetară a FMI, coș de valute. Limita răspundere CMR = 8,33 SDR/kg marfă (≈10€/kg). Important pentru calcul despăgubiri în claims.",
      de: "SZR (Sonderziehungsrechte): IWF-Währungseinheit, Währungskorb. CMR-Haftungsgrenze = 8,33 SZR/kg Ware (≈10€/kg). Wichtig für Entschädigungsberechnung bei Claims.",
      en: "SDR (Special Drawing Rights): IMF currency unit, currency basket. CMR liability limit = 8.33 SDR/kg goods (≈€10/kg). Important for compensation calculation in claims."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'slot' în transport?",
      de: "Was bedeutet 'Slot' im Transport?",
      en: "What does 'slot' mean in transport?"
    },
    options: {
      ro: ["Gaură în camion", "Fereastră de timp alocată pentru încărcare/descărcare la un depozit", "Tip de remorcă", "Taxă fixă"],
      de: ["Loch im LKW", "Zugewiesenes Zeitfenster für Be-/Entladung an einem Lager", "Anhängertyp", "Fixgebühr"],
      en: ["Hole in truck", "Allocated time window for loading/unloading at a warehouse", "Trailer type", "Fixed fee"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Slot: interval de timp rezervat pentru încărcare/descărcare (ex: 10:00-11:00). Respectarea slot-ului = eficiență, evitare așteptare. Unele depozite au penalități pentru întârziere.",
      de: "Slot: reserviertes Zeitfenster für Be-/Entladung (z.B. 10:00-11:00). Slot-Einhaltung = Effizienz, Wartevermeidung. Manche Lager haben Strafen für Verspätung.",
      en: "Slot: reserved time window for loading/unloading (e.g., 10:00-11:00). Respecting slot = efficiency, avoiding waiting. Some warehouses have penalties for tardiness."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este un 'freight forwarder' vs. 'carrier'?",
      de: "Was ist ein 'Freight Forwarder' vs. 'Carrier'?",
      en: "What is a 'freight forwarder' vs. 'carrier'?"
    },
    options: {
      ro: ["Același lucru", "Forwarder: intermediar care organizează; Carrier: cel care efectuează fizic transportul", "Forwarder = mai mare", "Carrier = mai scump"],
      de: ["Gleiche Sache", "Forwarder: Vermittler der organisiert; Carrier: der den Transport physisch durchführt", "Forwarder = größer", "Carrier = teurer"],
      en: ["Same thing", "Forwarder: intermediary who organizes; Carrier: one who physically performs transport", "Forwarder = bigger", "Carrier = more expensive"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Freight forwarder: organizează și coordonează transportul, nu are neapărat vehicule proprii. Carrier: efectuează fizic transportul cu vehicule proprii sau închiriate. Putem fi ambele.",
      de: "Freight Forwarder: organisiert und koordiniert Transport, hat nicht unbedingt eigene Fahrzeuge. Carrier: führt Transport physisch mit eigenen oder gemieteten Fahrzeugen durch. Wir können beides sein.",
      en: "Freight forwarder: organizes and coordinates transport, doesn't necessarily have own vehicles. Carrier: physically performs transport with own or rented vehicles. We can be both."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Ce este 'triangulare' sau 'tranzit' în comerț internațional?",
      de: "Was ist 'Triangulation' oder 'Durchfuhr' im internationalen Handel?",
      en: "What is 'triangulation' or 'transit trade' in international commerce?"
    },
    options: {
      ro: ["Formă de camion", "Operațiune unde marfa merge direct de la A la C, dar factura trece prin B intermediar", "Tip de vamă", "Rută cu 3 opriri"],
      de: ["LKW-Form", "Vorgang wo Ware direkt von A nach C geht, aber Rechnung über Vermittler B läuft", "Zollart", "Route mit 3 Stopps"],
      en: ["Truck shape", "Operation where goods go directly from A to C, but invoice goes through intermediary B", "Customs type", "Route with 3 stops"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Triangulare: furnizor A livrează direct la client C, dar factura comercială merge A→B (trader)→C. Implicații fiscale complexe, documente de transport trebuie să reflecte realitatea fizică.",
      de: "Triangulation: Lieferant A liefert direkt an Kunde C, aber Handelsrechnung geht A→B (Händler)→C. Komplexe steuerliche Implikationen, Transportdokumente müssen physische Realität widerspiegeln.",
      en: "Triangulation: supplier A delivers directly to client C, but commercial invoice goes A→B (trader)→C. Complex tax implications, transport documents must reflect physical reality."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'tare weight' vs. 'gross weight'?",
      de: "Was bedeutet 'Tara' vs. 'Bruttogewicht'?",
      en: "What does 'tare weight' vs. 'gross weight' mean?"
    },
    options: {
      ro: ["Același lucru", "Tare: greutatea vehiculului/containerului gol; Gross: greutatea totală (vehicul + marfă)", "Tare = maxim", "Gross = minim"],
      de: ["Gleiche Sache", "Tara: Gewicht des leeren Fahrzeugs/Containers; Brutto: Gesamtgewicht (Fahrzeug + Ware)", "Tara = Maximum", "Brutto = Minimum"],
      en: ["Same thing", "Tare: weight of empty vehicle/container; Gross: total weight (vehicle + goods)", "Tare = maximum", "Gross = minimum"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tare: greutatea vehiculului/containerului gol. Net: greutatea mărfii. Gross = Tare + Net. Exemplu: camion 15t (tare) + marfă 10t (net) = 25t gross. Important pentru limita de tonaj.",
      de: "Tara: Gewicht des leeren Fahrzeugs/Containers. Netto: Warengewicht. Brutto = Tara + Netto. Beispiel: LKW 15t (Tara) + Ware 10t (Netto) = 25t Brutto. Wichtig für Tonnagegrenze.",
      en: "Tare: empty vehicle/container weight. Net: goods weight. Gross = Tare + Net. Example: truck 15t (tare) + goods 10t (net) = 25t gross. Important for tonnage limit."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este un 'consolidator' în freight?",
      de: "Was ist ein 'Konsolidierer' im Frachtgeschäft?",
      en: "What is a 'consolidator' in freight?"
    },
    options: {
      ro: ["Cine repară camioane", "Operator care combină expedieri mici de la mai mulți expeditori într-un singur transport mare", "Tip de asigurare", "Agent vamal"],
      de: ["Wer LKW repariert", "Betreiber der kleine Sendungen von mehreren Versendern zu einem großen Transport kombiniert", "Versicherungsart", "Zollagent"],
      en: ["Who repairs trucks", "Operator who combines small shipments from multiple shippers into one large transport", "Insurance type", "Customs agent"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Consolidator: strânge mai multe expedieri mici (LTL) și le combină într-un camion complet (FTL). Oferă tarife mai mici pentru expedieri mici, creează volum pentru carriers.",
      de: "Konsolidierer: sammelt mehrere kleine Sendungen (LTL) und kombiniert sie zu einer Komplettladung (FTL). Bietet günstigere Tarife für kleine Sendungen, schafft Volumen für Carrier.",
      en: "Consolidator: gathers multiple small shipments (LTL) and combines into a full truck (FTL). Offers lower rates for small shipments, creates volume for carriers."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Ce înseamnă 'intermodal' vs. 'multimodal'?",
      de: "Was bedeutet 'intermodal' vs. 'multimodal'?",
      en: "What does 'intermodal' vs. 'multimodal' mean?"
    },
    options: {
      ro: ["Același lucru", "Intermodal: aceeași unitate de încărcare, moduri diferite. Multimodal: un singur contract, moduri diferite, poate transfera marfa", "Intermodal = mai scump", "Multimodal = doar maritime"],
      de: ["Gleiche Sache", "Intermodal: gleiche Ladeeinheit, verschiedene Modi. Multimodal: ein Vertrag, verschiedene Modi, kann Ware umladen", "Intermodal = teurer", "Multimodal = nur See"],
      en: ["Same thing", "Intermodal: same loading unit, different modes. Multimodal: one contract, different modes, may transfer goods", "Intermodal = more expensive", "Multimodal = only maritime"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Intermodal: container/trailer rămâne intact, schimbă modul de transport (camion→tren→camion). Multimodal: un singur contract acoperă tot lanțul, marfa poate fi transbordată între moduri.",
      de: "Intermodal: Container/Trailer bleibt intakt, wechselt Transportmodus (LKW→Zug→LKW). Multimodal: ein Vertrag deckt ganze Kette ab, Ware kann zwischen Modi umgeladen werden.",
      en: "Intermodal: container/trailer stays intact, changes transport mode (truck→train→truck). Multimodal: one contract covers entire chain, goods may be transferred between modes."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'ADR'?",
      de: "Was bedeutet 'ADR'?",
      en: "What does 'ADR' mean?"
    },
    options: {
      ro: ["Autorizație de Drum Rapid", "Accord européen relatif au transport international des marchandises Dangereuses par Route", "Atenție Drum Riscant", "Alt Document Rutier"],
      de: ["Autobahnschnellberechtigung", "Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße", "Achtung Riskante Route", "Anderes Straßendokument"],
      en: ["Authorization Dangerous Road", "European Agreement concerning the International Carriage of Dangerous Goods by Road", "Attention Dangerous Route", "Another Driver Registration"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ADR: Acordul European pentru Transportul Rutier al Mărfurilor Periculoase. Clasifică mărfurile periculoase în clase, stabilește reguli de ambalare, etichetare, echipamente și certificări șofer.",
      de: "ADR: Europäisches Übereinkommen über die Beförderung gefährlicher Güter auf der Straße. Klassifiziert Gefahrgüter, legt Verpackungs-, Kennzeichnungs-, Ausrüstungs- und Fahrerzertifizierungsregeln fest.",
      en: "ADR: European Agreement for Road Transport of Dangerous Goods. Classifies dangerous goods into classes, establishes packaging, labeling, equipment and driver certification rules."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce înseamnă 'OTIF' în logistică?",
      de: "Was bedeutet 'OTIF' in der Logistik?",
      en: "What does 'OTIF' mean in logistics?"
    },
    options: {
      ro: ["Organizație Transport", "On Time In Full - livrat la timp și complet", "Oficiu Taxe", "Operațiuni Transport"],
      de: ["Transportorganisation", "On Time In Full - pünktlich und vollständig geliefert", "Steueramt", "Transportbetrieb"],
      en: ["Transport Organization", "On Time In Full - delivered on time and complete", "Tax Office", "Transport Operations"]
    },
    correctIndex: 1,
    explanation: {
      ro: "OTIF: indicator cheie de performanță. Livrarea trebuie să fie ȘI la timp, ȘI completă. Target tipic: >95%. Separat se poate măsura OT (on time) și IF (in full).",
      de: "OTIF: wichtigster Leistungsindikator. Lieferung muss pünktlich UND vollständig sein. Typisches Ziel: >95%. Separat kann man OT (pünktlich) und IF (vollständig) messen.",
      en: "OTIF: key performance indicator. Delivery must be both on time AND complete. Typical target: >95%. Separately can measure OT (on time) and IF (in full)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Ce este 'freight factoring' și cum funcționează?",
      de: "Was ist 'Fracht-Factoring' und wie funktioniert es?",
      en: "What is 'freight factoring' and how does it work?"
    },
    options: {
      ro: ["Calcul cost", "Vânzarea facturilor de transport către o companie financiară pentru lichiditate imediată, la un discount", "Tip de asigurare", "Metodă de rutare"],
      de: ["Kostenberechnung", "Verkauf von Transportrechnungen an Finanzunternehmen für sofortige Liquidität, mit Abschlag", "Versicherungsart", "Routing-Methode"],
      en: ["Cost calculation", "Selling transport invoices to finance company for immediate liquidity, at a discount", "Insurance type", "Routing method"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Freight factoring: vinzi facturile către un factor (primești 90-95% imediat), factorul încasează de la clientul tău. Cost: 2-5% din valoare. Util pentru cash flow, dar reduce marja.",
      de: "Fracht-Factoring: Rechnungen an Factor verkaufen (90-95% sofort erhalten), Factor zieht von deinem Kunden ein. Kosten: 2-5% vom Wert. Nützlich für Cashflow, reduziert aber Marge.",
      en: "Freight factoring: sell invoices to factor (receive 90-95% immediately), factor collects from your client. Cost: 2-5% of value. Useful for cash flow but reduces margin."
    }
  }
];
