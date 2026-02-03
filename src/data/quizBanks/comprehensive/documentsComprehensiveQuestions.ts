import { TranslatedQuizQuestion } from "@/data/quizTranslations";

export const documentsComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este CMR-ul și care este funcția sa principală?",
      de: "Was ist der CMR und was ist seine Hauptfunktion?",
      en: "What is the CMR and what is its main function?"
    },
    options: {
      ro: ["Scrisoare de trăsură internațională pentru transport rutier de mărfuri - dovedește contractul de transport și recepția mărfii", "Factură comercială", "Certificat de origine", "Licență de transport"],
      de: ["Internationaler Frachtbrief für Straßengütertransport - beweist Transportvertrag und Warenempfang", "Handelsrechnung", "Ursprungszertifikat", "Transportlizenz"],
      en: ["International consignment note for road goods transport - proves transport contract and goods reception", "Commercial invoice", "Certificate of origin", "Transport license"]
    },
    correctIndex: 0,
    explanation: {
      ro: "CMR = Convention relative au contrat de transport international de Marchandises par Route. Obligatoriu pentru transport internațional rutier.",
      de: "CMR = Convention relative au contrat de transport international de Marchandises par Route. Obligatorisch für internationalen Straßentransport.",
      en: "CMR = Convention relative au contrat de transport international de Marchandises par Route. Mandatory for international road transport."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Câte exemplare CMR se emit și cine primește fiecare?",
      de: "Wie viele CMR-Exemplare werden ausgestellt und wer erhält welches?",
      en: "How many CMR copies are issued and who receives each?"
    },
    options: {
      ro: ["Minim 3: expeditor (roșu), destinatar (albastru), transportator (verde); poate fi și al 4-lea pentru statistici", "Un singur exemplar", "5 exemplare obligatorii", "Câte vrea expeditorul"],
      de: ["Mindestens 3: Versender (rot), Empfänger (blau), Transporteur (grün); kann auch 4. für Statistik sein", "Ein einziges Exemplar", "5 obligatorische Exemplare", "So viele wie Versender will"],
      en: ["Minimum 3: shipper (red), consignee (blue), carrier (green); can also be 4th for statistics", "Single copy", "5 mandatory copies", "As many as shipper wants"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Culorile pot varia, dar cele 3 exemplare sunt obligatorii. Fiecare parte păstrează dovada contractului și stării mărfii.",
      de: "Farben können variieren, aber 3 Exemplare sind obligatorisch. Jede Partei behält Nachweis des Vertrags und Warenzustands.",
      en: "Colors may vary, but 3 copies are mandatory. Each party keeps proof of contract and goods condition."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce informații obligatorii trebuie să conțină un CMR?",
      de: "Welche obligatorischen Informationen muss ein CMR enthalten?",
      en: "What mandatory information must a CMR contain?"
    },
    options: {
      ro: ["Expeditor, destinatar, transportator, descriere marfă, greutate, loc/data încărcare, loc livrare, instrucțiuni speciale", "Doar numele expeditorului", "Exclusiv prețul transportului", "Nicio informație obligatorie"],
      de: ["Versender, Empfänger, Transporteur, Warenbeschreibung, Gewicht, Lade-Ort/Datum, Lieferort, Sonderanweisungen", "Nur Versendername", "Ausschließlich Transportpreis", "Keine obligatorischen Informationen"],
      en: ["Shipper, consignee, carrier, goods description, weight, loading place/date, delivery place, special instructions", "Only shipper name", "Exclusively transport price", "No mandatory information"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Art. 6 din Convenția CMR listează cele 15+ câmpuri obligatorii. Lipsa lor nu anulează CMR-ul, dar poate crea probleme juridice.",
      de: "Art. 6 der CMR-Konvention listet 15+ obligatorische Felder. Deren Fehlen annulliert CMR nicht, kann aber rechtliche Probleme schaffen.",
      en: "Art. 6 of CMR Convention lists 15+ mandatory fields. Their absence doesn't void CMR, but can create legal issues."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este factura comercială și de ce este necesară?",
      de: "Was ist die Handelsrechnung und warum ist sie erforderlich?",
      en: "What is the commercial invoice and why is it needed?"
    },
    options: {
      ro: ["Document emis de vânzător cu descrierea mărfii, valoarea, condițiile de vânzare - necesar pentru vamă și contabilitate", "Document de transport", "Certificat de calitate", "Licență de export"],
      de: ["Vom Verkäufer ausgestelltes Dokument mit Warenbeschreibung, Wert, Verkaufsbedingungen - nötig für Zoll und Buchhaltung", "Transportdokument", "Qualitätszertifikat", "Exportlizenz"],
      en: ["Document issued by seller with goods description, value, sales conditions - needed for customs and accounting", "Transport document", "Quality certificate", "Export license"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Factura comercială: baza pentru calculul taxelor vamale și TVA. Trebuie să corespundă cu marfa fizică și celelalte documente.",
      de: "Handelsrechnung: Basis für Zoll- und MwSt-Berechnung. Muss mit physischer Ware und anderen Dokumenten übereinstimmen.",
      en: "Commercial invoice: basis for customs duties and VAT calculation. Must match physical goods and other documents."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este packing list-ul și ce rol are?",
      de: "Was ist die Packliste und welche Rolle hat sie?",
      en: "What is the packing list and what role does it have?"
    },
    options: {
      ro: ["Lista detaliată a conținutului fiecărui colet/palet - facilitează verificarea, inventarul și procedurile vamale", "Factură comercială", "Document de transport", "Certificat de origine"],
      de: ["Detaillierte Liste des Inhalts jedes Packstücks/Palette - erleichtert Prüfung, Inventar und Zollverfahren", "Handelsrechnung", "Transportdokument", "Ursprungszertifikat"],
      en: ["Detailed list of contents of each package/pallet - facilitates verification, inventory and customs procedures", "Commercial invoice", "Transport document", "Certificate of origin"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Packing list include: nr colet, dimensiuni, greutate brută/netă, conținut detaliat. Esențial la reclamații pentru identificare.",
      de: "Packliste enthält: Packstücknr., Maße, Brutto-/Nettogewicht, detaillierten Inhalt. Essentiell bei Reklamationen zur Identifizierung.",
      en: "Packing list includes: package no., dimensions, gross/net weight, detailed contents. Essential at claims for identification."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este certificatul de origine și când este necesar?",
      de: "Was ist das Ursprungszertifikat und wann ist es erforderlich?",
      en: "What is the certificate of origin and when is it needed?"
    },
    options: {
      ro: ["Document care atestă țara de fabricație/origine a mărfurilor - necesar pentru acorduri preferențiale, taxe vamale reduse", "Document de transport", "Factură de servicii", "Licență de import"],
      de: ["Dokument das Herstellungs-/Ursprungsland der Waren bestätigt - nötig für Präferenzabkommen, reduzierte Zölle", "Transportdokument", "Dienstleistungsrechnung", "Importlizenz"],
      en: ["Document certifying country of manufacture/origin of goods - needed for preferential agreements, reduced customs duties", "Transport document", "Service invoice", "Import license"]
    },
    correctIndex: 0,
    explanation: {
      ro: "EUR.1, ATR (Turcia), Form A - certificate de origine pentru tratament preferențial. Originea determină tariful vamal aplicat.",
      de: "EUR.1, ATR (Türkei), Form A - Ursprungszertifikate für Präferenzbehandlung. Ursprung bestimmt angewandten Zolltarif.",
      en: "EUR.1, ATR (Turkey), Form A - origin certificates for preferential treatment. Origin determines applied customs tariff."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce documente însoțesc transportul frigorific?",
      de: "Welche Dokumente begleiten den Kühltransport?",
      en: "What documents accompany refrigerated transport?"
    },
    options: {
      ro: ["Certificat ATP vehicul, înregistrări temperatură (termograf), documente sanitare dacă e cazul, CMR cu mențiuni temperatură", "Doar CMR standard", "Niciun document special", "Doar factura"],
      de: ["ATP-Fahrzeugzertifikat, Temperaturaufzeichnungen (Thermograph), Gesundheitsdokumente wenn zutreffend, CMR mit Temperaturvermerken", "Nur Standard-CMR", "Keine speziellen Dokumente", "Nur Rechnung"],
      en: ["Vehicle ATP certificate, temperature records (thermograph), sanitary documents if applicable, CMR with temperature notes", "Only standard CMR", "No special documents", "Only invoice"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Documentația frigorific dovedește menținerea lanțului de frig. La reclamații, termograful e dovada crucială.",
      de: "Kühlkettendokumentation beweist Kühlketteneinhaltung. Bei Reklamationen ist Thermograph entscheidender Beweis.",
      en: "Refrigerated documentation proves cold chain maintenance. At claims, thermograph is crucial evidence."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce sunt 'rezervele' pe CMR și când se fac?",
      de: "Was sind 'Vorbehalte' auf dem CMR und wann werden sie gemacht?",
      en: "What are 'reserves' on CMR and when are they made?"
    },
    options: {
      ro: ["Notări ale transportatorului despre starea mărfii la încărcare sau anomalii - protejează de răspundere pentru daune preexistente", "Prețuri rezervate", "Locuri de parcare", "Timpi de așteptare"],
      de: ["Vermerke des Transporteurs über Warenzustand bei Beladung oder Anomalien - schützt vor Haftung für vorbestehende Schäden", "Reservierte Preise", "Parkplätze", "Wartezeiten"],
      en: ["Carrier's notes about goods condition at loading or anomalies - protects from liability for pre-existing damages", "Reserved prices", "Parking spots", "Waiting times"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Exemple de rezerve: 'Ambalaj deteriorat', 'Sigiliu absent', 'Paletizare instabilă'. Fără rezerve, transportatorul acceptă marfa ca fiind în stare bună.",
      de: "Beispiele für Vorbehalte: 'Beschädigte Verpackung', 'Fehlendes Siegel', 'Instabile Palettierung'. Ohne Vorbehalte akzeptiert Transporteur Ware als in gutem Zustand.",
      en: "Examples of reserves: 'Damaged packaging', 'Missing seal', 'Unstable palletization'. Without reserves, carrier accepts goods as in good condition."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este o 'Delivery Note' (bon de livrare)?",
      de: "Was ist ein 'Lieferschein' (Delivery Note)?",
      en: "What is a 'Delivery Note'?"
    },
    options: {
      ro: ["Document care confirmă livrarea mărfii la destinatar, cu semnătură de primire și eventuale observații", "Factură comercială", "CMR", "Certificat de calitate"],
      de: ["Dokument das Warenlieferung an Empfänger bestätigt, mit Empfangsunterschrift und eventuellen Bemerkungen", "Handelsrechnung", "CMR", "Qualitätszertifikat"],
      en: ["Document confirming goods delivery to consignee, with reception signature and any observations", "Commercial invoice", "CMR", "Quality certificate"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Delivery note: dovada livrării finale. Semnătura destinatarului fără rezerve = acceptare marfă în stare bună.",
      de: "Lieferschein: Nachweis der Endlieferung. Empfängerunterschrift ohne Vorbehalte = Warenakzeptanz in gutem Zustand.",
      en: "Delivery note: proof of final delivery. Consignee's signature without reserves = goods acceptance in good condition."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce documente sunt necesare pentru transport ADR?",
      de: "Welche Dokumente sind für ADR-Transport erforderlich?",
      en: "What documents are needed for ADR transport?"
    },
    options: {
      ro: ["Document de transport ADR (specific), instrucțiuni scrise, certificat șofer ADR, certificat vehicul ADR, documente urgență", "Doar CMR standard", "Niciun document special", "Doar factură"],
      de: ["ADR-Transportdokument (spezifisch), schriftliche Weisungen, ADR-Fahrerausweis, ADR-Fahrzeugzertifikat, Notfalldokumente", "Nur Standard-CMR", "Keine speziellen Dokumente", "Nur Rechnung"],
      en: ["ADR transport document (specific), written instructions, ADR driver certificate, ADR vehicle certificate, emergency documents", "Only standard CMR", "No special documents", "Only invoice"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ADR are cerințe stricte de documentare. Lipsa = amendă mare + imobilizare vehicul.",
      de: "ADR hat strenge Dokumentationsanforderungen. Fehlen = hohes Bußgeld + Fahrzeugstilllegung.",
      en: "ADR has strict documentation requirements. Missing = large fine + vehicle immobilization."
    }
  },

  // Level 4 Questions (10)
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi o situație în care CMR-ul conține erori descoperite la livrare?",
      de: "Wie handhaben Sie eine Situation wo der CMR bei Lieferung entdeckte Fehler enthält?",
      en: "How do you handle a situation where CMR contains errors discovered at delivery?"
    },
    options: {
      ro: ["Corectare pe document cu semnătura tuturor părților, notare clarificări, fotografiere, raportare dispecer, păstrare dovezi pentru eventuale dispute", "Ignori erorile", "Faci CMR nou singur", "Refuzi livrarea"],
      de: ["Korrektur auf Dokument mit Unterschrift aller Parteien, Klarstellungen notieren, fotografieren, Disponenten melden, Beweise für eventuelle Streitigkeiten aufbewahren", "Fehler ignorieren", "Allein neues CMR machen", "Lieferung verweigern"],
      en: ["Correction on document with all parties' signature, note clarifications, photograph, report to dispatcher, keep evidence for potential disputes", "Ignore errors", "Make new CMR alone", "Refuse delivery"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Modificările pe CMR sunt valide doar cu acordul tuturor părților. Alterarea unilaterală = falsificare document.",
      de: "Änderungen am CMR sind nur mit Zustimmung aller Parteien gültig. Einseitige Änderung = Dokumentenfälschung.",
      en: "CMR modifications are valid only with all parties' agreement. Unilateral alteration = document forgery."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce documente suplimentare sunt necesare pentru export extra-UE?",
      de: "Welche zusätzlichen Dokumente sind für Extra-EU-Export erforderlich?",
      en: "What additional documents are needed for extra-EU export?"
    },
    options: {
      ro: ["Declarație vamală export (EX-A), certificat de origine, eventual licențe export, documente specifice țară destinație (fitosanitare, etc.)", "Doar factura și CMR", "Nicio documentație suplimentară", "Doar certificatul de origine"],
      de: ["Zoll-Exporterklärung (EX-A), Ursprungszertifikat, eventuell Exportlizenzen, ziellandspezifische Dokumente (phytosanitär, etc.)", "Nur Rechnung und CMR", "Keine zusätzliche Dokumentation", "Nur Ursprungszertifikat"],
      en: ["Customs export declaration (EX-A), certificate of origin, possibly export licenses, destination country specific documents (phytosanitary, etc.)", "Only invoice and CMR", "No additional documentation", "Only certificate of origin"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Extra-UE = vămuire la ieșire și intrare. MRN-ul export trebuie prezentat la vama de ieșire din UE.",
      de: "Extra-EU = Verzollung bei Ausgang und Eingang. Export-MRN muss beim EU-Ausgangszoll vorgelegt werden.",
      en: "Extra-EU = customs at exit and entry. Export MRN must be presented at EU exit customs."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum verifici autenticitatea și validitatea documentelor primite de la client?",
      de: "Wie prüfen Sie Authentizität und Gültigkeit der vom Kunden erhaltenen Dokumente?",
      en: "How do you verify authenticity and validity of documents received from customer?"
    },
    options: {
      ro: ["Verificare completitudine, date coerente între documente, sigilii/ștampile oficiale valide, conformitate cu marfa fizică, verificări încrucișate", "Încredere fără verificare", "Doar verificare vizuală rapidă", "Clientul garantează totul"],
      de: ["Vollständigkeitsprüfung, kohärente Daten zwischen Dokumenten, gültige offizielle Siegel/Stempel, Übereinstimmung mit physischer Ware, Kreuzprüfungen", "Vertrauen ohne Prüfung", "Nur schnelle Sichtprüfung", "Kunde garantiert alles"],
      en: ["Completeness check, coherent data between documents, valid official seals/stamps, conformity with physical goods, cross-checks", "Trust without verification", "Only quick visual check", "Customer guarantees everything"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Documente false sau eronate pot duce la sancțiuni vamale severe. Due diligence e obligația transportatorului.",
      de: "Falsche oder fehlerhafte Dokumente können zu schweren Zollsanktionen führen. Due Diligence ist Transporteurpflicht.",
      en: "False or erroneous documents can lead to severe customs sanctions. Due diligence is carrier's obligation."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este T1 și T2 în tranzitul vamal?",
      de: "Was sind T1 und T2 im Zolltransit?",
      en: "What are T1 and T2 in customs transit?"
    },
    options: {
      ro: ["T1: mărfuri non-UE sub supraveghere vamală în tranzit prin UE; T2: mărfuri UE în tranzit prin țări non-UE (ex: Elveția)", "Tipuri de camioane", "Clase de permis", "Tarife vamale"],
      de: ["T1: Nicht-EU-Waren unter Zollaufsicht im Transit durch EU; T2: EU-Waren im Transit durch Nicht-EU-Länder (z.B.: Schweiz)", "LKW-Typen", "Führerscheinklassen", "Zolltarife"],
      en: ["T1: non-EU goods under customs supervision in transit through EU; T2: EU goods in transit through non-EU countries (e.g.: Switzerland)", "Truck types", "License classes", "Customs tariffs"]
    },
    correctIndex: 0,
    explanation: {
      ro: "T1 necesită garanție vamală. Marfa trebuie prezentată la vama de destinație în termen. Neconformitatea = datorie vamală.",
      de: "T1 erfordert Zollgarantie. Ware muss fristgerecht beim Bestimmungszoll vorgelegt werden. Nichteinhaltung = Zollschuld.",
      en: "T1 requires customs guarantee. Goods must be presented at destination customs on time. Non-compliance = customs debt."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum documentezi corect o descărcare parțială pe traseu?",
      de: "Wie dokumentieren Sie korrekt eine Teilentladung auf der Strecke?",
      en: "How do you correctly document a partial unloading on route?"
    },
    options: {
      ro: ["Notare pe CMR original: cantitate descărcată, loc, dată, semnătură primitor; copie pentru fiecare descărcare; reconciliere finală", "Un singur CMR pentru tot", "CMR nou la fiecare oprire", "Documentare doar la final"],
      de: ["Vermerk auf Original-CMR: entladene Menge, Ort, Datum, Empfängerunterschrift; Kopie für jede Entladung; Endabgleich", "Ein CMR für alles", "Neues CMR bei jedem Stopp", "Dokumentation nur am Ende"],
      en: ["Note on original CMR: unloaded quantity, place, date, receiver signature; copy for each unloading; final reconciliation", "Single CMR for all", "New CMR at each stop", "Documentation only at end"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Fiecare descărcare trebuie confirmată cu semnătură. CMR-ul final la ultima oprire reflectă toate operațiunile.",
      de: "Jede Entladung muss mit Unterschrift bestätigt werden. End-CMR an letzter Station reflektiert alle Operationen.",
      en: "Each unloading must be confirmed with signature. Final CMR at last stop reflects all operations."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt cerințele documentare pentru transportul de animale vii?",
      de: "Was sind die Dokumentationsanforderungen für Lebendtiertransport?",
      en: "What are documentation requirements for live animal transport?"
    },
    options: {
      ro: ["Certificat veterinar, autorizație transportator tip 2, certificat competență șofer, jurnal de transport (durate, locuri de odihnă), registru vehicul", "Doar CMR standard", "Nicio documentație specială", "Doar certificat veterinar"],
      de: ["Veterinärzertifikat, Typ-2-Transporteursgenehmigung, Fahrerkompetenznachweis, Transportprotokoll (Zeiten, Rastplätze), Fahrzeugregister", "Nur Standard-CMR", "Keine spezielle Dokumentation", "Nur Veterinärzertifikat"],
      en: ["Veterinary certificate, type 2 carrier authorization, driver competence certificate, journey log (times, rest stops), vehicle register", "Only standard CMR", "No special documentation", "Only veterinary certificate"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Bunăstarea animalelor e strict reglementată în UE. Reg. 1/2005 specifică durate maxime, opriri, documentație. Controale frecvente.",
      de: "Tierschutz ist in EU streng reguliert. Verordnung 1/2005 spezifiziert Höchstzeiten, Stopps, Dokumentation. Häufige Kontrollen.",
      en: "Animal welfare is strictly regulated in EU. Reg. 1/2005 specifies maximum times, stops, documentation. Frequent controls."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este e-CMR și care sunt avantajele sale?",
      de: "Was ist e-CMR und was sind seine Vorteile?",
      en: "What is e-CMR and what are its advantages?"
    },
    options: {
      ro: ["CMR electronic cu semnături digitale - elimină hârtia, accelerează procesul, reduce erori, trasabilitate în timp real, acceptat în țările care au ratificat protocolul", "Doar o scanare a CMR-ului fizic", "Email cu detaliile transportului", "Formular online opțional"],
      de: ["Elektronischer CMR mit digitalen Unterschriften - eliminiert Papier, beschleunigt Prozess, reduziert Fehler, Echtzeit-Rückverfolgbarkeit, akzeptiert in Ländern die Protokoll ratifiziert haben", "Nur Scan des physischen CMR", "Email mit Transportdetails", "Optionales Online-Formular"],
      en: ["Electronic CMR with digital signatures - eliminates paper, accelerates process, reduces errors, real-time traceability, accepted in countries that ratified protocol", "Just a scan of physical CMR", "Email with transport details", "Optional online form"]
    },
    correctIndex: 0,
    explanation: {
      ro: "e-CMR: Protocol adițional la Convenția CMR din 2008. Nu toate țările l-au ratificat încă. Verifică înainte de utilizare.",
      de: "e-CMR: Zusatzprotokoll zur CMR-Konvention von 2008. Nicht alle Länder haben ratifiziert. Vor Nutzung prüfen.",
      en: "e-CMR: Additional Protocol to CMR Convention from 2008. Not all countries have ratified yet. Check before using."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi documentele pentru un transport cu reîncărcare (groupage/LTL)?",
      de: "Wie handhaben Sie Dokumente für einen Transport mit Nachladung (Groupage/LTL)?",
      en: "How do you handle documents for a transport with reloading (groupage/LTL)?"
    },
    options: {
      ro: ["CMR separat pentru fiecare expeditor/destinatar, manifest de grupaj, verificare la fiecare încărcare/descărcare, reconciliere centrală", "Un singur CMR pentru tot", "Fără documentație specială", "Doar la final se documentează"],
      de: ["Separater CMR für jeden Versender/Empfänger, Groupage-Manifest, Prüfung bei jeder Be-/Entladung, zentrale Abstimmung", "Ein CMR für alles", "Keine spezielle Dokumentation", "Dokumentation nur am Ende"],
      en: ["Separate CMR for each shipper/consignee, groupage manifest, check at each loading/unloading, central reconciliation", "Single CMR for all", "No special documentation", "Documentation only at end"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Groupage complex = risc de confuzie. Manifestul central urmărește toate loturile. Verificarea la fiecare oprire previne erori.",
      de: "Komplexes Groupage = Verwechslungsrisiko. Zentrales Manifest verfolgt alle Lose. Prüfung bei jeder Station verhindert Fehler.",
      en: "Complex groupage = confusion risk. Central manifest tracks all lots. Check at each stop prevents errors."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este ATA Carnet și când se folosește?",
      de: "Was ist ein ATA-Carnet und wann wird es verwendet?",
      en: "What is an ATA Carnet and when is it used?"
    },
    options: {
      ro: ["Document vamal internațional pentru import/export temporar de mărfuri (mostre, expoziții, echipament profesional) fără plată taxe", "Licență de transport", "Certificat de origine", "Document de asigurare"],
      de: ["Internationales Zolldokument für temporären Import/Export von Waren (Muster, Ausstellungen, Berufsausrüstung) ohne Abgabenzahlung", "Transportlizenz", "Ursprungszertifikat", "Versicherungsdokument"],
      en: ["International customs document for temporary import/export of goods (samples, exhibitions, professional equipment) without duty payment", "Transport license", "Certificate of origin", "Insurance document"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ATA Carnet: valabil 1 an, cover multiple intrări/ieșiri. Marfa trebuie reexportată identică. Neutilizare = taxe vamale datorate.",
      de: "ATA-Carnet: 1 Jahr gültig, deckt mehrere Ein-/Ausgänge. Ware muss identisch reexportiert werden. Nichtverwendung = Zölle fällig.",
      en: "ATA Carnet: valid 1 year, covers multiple entries/exits. Goods must be re-exported identical. Non-use = customs duties due."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum arhivezi și păstrezi documentele de transport conform cerințelor legale?",
      de: "Wie archivieren und bewahren Sie Transportdokumente gemäß gesetzlichen Anforderungen?",
      en: "How do you archive and retain transport documents per legal requirements?"
    },
    options: {
      ro: ["Păstrare minimum 5-10 ani (variază per tip document), format fizic sau digital certificat, acces controlat, backup-uri, organizare pentru recuperare rapidă", "Păstrare doar 1 an", "Distrugere imediat după livrare", "Doar digital fără backup"],
      de: ["Aufbewahrung mindestens 5-10 Jahre (variiert je Dokumenttyp), physisches oder zertifiziertes digitales Format, kontrollierter Zugang, Backups, Organisation für schnellen Abruf", "Aufbewahrung nur 1 Jahr", "Sofortige Vernichtung nach Lieferung", "Nur digital ohne Backup"],
      en: ["Retention minimum 5-10 years (varies by document type), physical or certified digital format, controlled access, backups, organization for quick retrieval", "Retention only 1 year", "Immediate destruction after delivery", "Only digital without backup"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Termenele de prescripție pentru reclamații pot fi de ani de zile. CMR-ul original poate fi necesar în instanță. Arhivarea corectă salvează.",
      de: "Reklamationsverjährungsfristen können Jahre betragen. Original-CMR kann vor Gericht nötig sein. Korrekte Archivierung rettet.",
      en: "Claim limitation periods can be years. Original CMR may be needed in court. Correct archiving saves."
    }
  },

  // Level 5 Questions (10)
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Marfa ajunge deteriorată și atât CMR-ul cât și packing list-ul au discrepanțe. Cum documentezi pentru reclamație?",
      de: "Szenario: Ware kommt beschädigt an und sowohl CMR als auch Packliste haben Diskrepanzen. Wie dokumentieren Sie für Reklamation?",
      en: "Scenario: Goods arrive damaged and both CMR and packing list have discrepancies. How do you document for claim?"
    },
    options: {
      ro: ["Fotografii detaliate, notare rezerve pe CMR cu martor, raport de constatare independentă (surveyor), comparație documente, declarații scrise părți, timeline complet", "Doar notez pe CMR", "Aștept să vadă clientul", "Documentare doar verbală"],
      de: ["Detaillierte Fotos, Vorbehalte auf CMR mit Zeugen notieren, unabhängiger Feststellungsbericht (Surveyor), Dokumentenvergleich, schriftliche Parteierklärungen, vollständige Timeline", "Nur auf CMR notieren", "Warten bis Kunde sieht", "Nur mündliche Dokumentation"],
      en: ["Detailed photos, note reserves on CMR with witness, independent survey report, document comparison, written party statements, complete timeline", "Just note on CMR", "Wait for customer to see", "Only verbal documentation"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Documentația completă de la început determină succesul reclamației. Surveyorii independenți oferă rapoarte obiective acceptate de asigurări.",
      de: "Vollständige Dokumentation von Anfang an bestimmt Reklamationserfolg. Unabhängige Surveyor bieten objektive von Versicherungen akzeptierte Berichte.",
      en: "Complete documentation from start determines claim success. Independent surveyors provide objective reports accepted by insurers."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum gestionezi documentația pentru un transport multimodal (rutier-feroviar-maritim)?",
      de: "Wie handhaben Sie Dokumentation für einen multimodalen Transport (Straße-Schiene-See)?",
      en: "How do you handle documentation for multimodal transport (road-rail-sea)?"
    },
    options: {
      ro: ["FIATA FBL (document multimodal), plus documente per segment (CMR, CIM, B/L), coordonare între operatori, tracking unificat, răspundere clarificată per segment", "Doar un singur document", "CMR pentru toate segmentele", "Fiecare operator decide singur"],
      de: ["FIATA FBL (Multimodaldokument), plus Dokumente pro Segment (CMR, CIM, B/L), Koordination zwischen Operatoren, einheitliches Tracking, geklärte Haftung pro Segment", "Nur ein Dokument", "CMR für alle Segmente", "Jeder Operator entscheidet allein"],
      en: ["FIATA FBL (multimodal document), plus documents per segment (CMR, CIM, B/L), coordination between operators, unified tracking, clarified liability per segment", "Just one single document", "CMR for all segments", "Each operator decides alone"]
    },
    correctIndex: 0,
    explanation: {
      ro: "MTO (Multimodal Transport Operator) poate emite document unic. Responsabilitatea se determină în funcție de unde a apărut problema.",
      de: "MTO (Multimodal Transport Operator) kann einheitliches Dokument ausstellen. Verantwortung wird bestimmt je nachdem wo Problem aufgetreten ist.",
      en: "MTO (Multimodal Transport Operator) can issue unified document. Responsibility is determined based on where problem occurred."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt implicațiile juridice ale semnăturii electronice pe documentele de transport?",
      de: "Was sind die rechtlichen Auswirkungen elektronischer Unterschriften auf Transportdokumenten?",
      en: "What are legal implications of electronic signatures on transport documents?"
    },
    options: {
      ro: ["Valabilitate în funcție de țară și tip semnătură (simplu/avansat/calificat), eIDAS în UE, necesită certificare conformitate, nu toate țările recunosc", "Identice cu cele fizice peste tot", "Nu au valoare juridică", "Doar pentru documente interne"],
      de: ["Gültigkeit je nach Land und Signaturtyp (einfach/fortgeschritten/qualifiziert), eIDAS in EU, erfordert Konformitätszertifizierung, nicht alle Länder erkennen an", "Überall identisch mit physischen", "Keine Rechtsgültigkeit", "Nur für interne Dokumente"],
      en: ["Validity depends on country and signature type (simple/advanced/qualified), eIDAS in EU, requires compliance certification, not all countries recognize", "Identical to physical everywhere", "No legal value", "Only for internal documents"]
    },
    correctIndex: 0,
    explanation: {
      ro: "eIDAS: semnătura calificată = echivalent juridic cu manuscrisa în UE. Pentru extra-UE, verifică acorduri bilaterale.",
      de: "eIDAS: qualifizierte Signatur = rechtliches Äquivalent zu Handschrift in EU. Für Extra-EU bilaterale Abkommen prüfen.",
      en: "eIDAS: qualified signature = legal equivalent to handwritten in EU. For extra-EU, check bilateral agreements."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Autoritatea vamală contestă originea declarată. Ce documente trebuie să prezinți și cum te aperi?",
      de: "Szenario: Zollbehörde bestreitet deklarierten Ursprung. Welche Dokumente müssen Sie vorlegen und wie verteidigen Sie sich?",
      en: "Scenario: Customs authority contests declared origin. What documents must you present and how do you defend?"
    },
    options: {
      ro: ["Certificat de origine original, declarație furnizor, documente producție, istoricul lanțului de aprovizionare, facturi componente, colaborare cu exportator pentru probe suplimentare", "Doar certificatul e suficient", "Refuz să cooperez", "Accept taxele suplimentare"],
      de: ["Original-Ursprungszertifikat, Lieferantenerklärung, Produktionsdokumente, Lieferkettenhistorie, Komponentenrechnungen, Zusammenarbeit mit Exporteur für zusätzliche Nachweise", "Nur Zertifikat ist ausreichend", "Kooperation verweigern", "Zusätzliche Abgaben akzeptieren"],
      en: ["Original certificate of origin, supplier declaration, production documents, supply chain history, component invoices, collaboration with exporter for additional evidence", "Only certificate is enough", "Refuse to cooperate", "Accept additional duties"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Verificările de origine pot duce la taxe retroactive + penalități. Colaborarea și dovezile comprehensive sunt esențiale.",
      de: "Ursprungsprüfungen können zu rückwirkenden Abgaben + Strafen führen. Kooperation und umfassende Nachweise sind essentiell.",
      en: "Origin verifications can lead to retroactive duties + penalties. Cooperation and comprehensive evidence are essential."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum implementezi un sistem de management al documentelor pentru o companie de transport?",
      de: "Wie implementieren Sie ein Dokumentenmanagementsystem für ein Transportunternehmen?",
      en: "How do you implement a document management system for a transport company?"
    },
    options: {
      ro: ["Digitalizare + TMS integrat, workflows de aprobare, șabloane standardizate, OCR pentru scanare, arhivare conformă, training personal, backup redundant", "Fișiere pe computer local", "Doar folder-e pe email", "Hârtie în dosare fizice"],
      de: ["Digitalisierung + integriertes TMS, Genehmigungsworkflows, standardisierte Vorlagen, OCR für Scannen, konforme Archivierung, Personaltraining, redundantes Backup", "Dateien auf lokalem Computer", "Nur Email-Ordner", "Papier in physischen Akten"],
      en: ["Digitization + integrated TMS, approval workflows, standardized templates, OCR for scanning, compliant archiving, staff training, redundant backup", "Files on local computer", "Only email folders", "Paper in physical folders"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Sistemul bun: reduce erori, accelerează procesul, facilitează recuperarea. ROI pozitiv prin eficiență și conformitate.",
      de: "Gutes System: reduziert Fehler, beschleunigt Prozess, erleichtert Abruf. Positiver ROI durch Effizienz und Konformität.",
      en: "Good system: reduces errors, speeds up process, facilitates retrieval. Positive ROI through efficiency and compliance."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt cerințele specifice pentru documente în transportul de artă și antichități?",
      de: "Was sind die spezifischen Dokumentanforderungen für Kunst- und Antiquitätentransport?",
      en: "What are specific document requirements for art and antiquities transport?"
    },
    options: {
      ro: ["Certificat export bunuri culturale, evaluare profesională, asigurare all-risk specifică, condition report pre/post, documentație proveniență, autorizații speciale", "Doar factura valorii", "CMR standard e suficient", "Nu există cerințe speciale"],
      de: ["Kulturgut-Exportzertifikat, professionelle Bewertung, spezifische All-Risk-Versicherung, Zustandsbericht vor/nach, Provenienz-Dokumentation, Sondergenehmigungen", "Nur Wertrechnung", "Standard-CMR ist ausreichend", "Keine besonderen Anforderungen"],
      en: ["Cultural goods export certificate, professional valuation, specific all-risk insurance, condition report pre/post, provenance documentation, special authorizations", "Only value invoice", "Standard CMR is enough", "No special requirements"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Bunurile culturale au protecție specială (UNESCO, legi naționale). Export fără autorizație = infracțiune. Asigurarea necesită evaluări specifice.",
      de: "Kulturgüter haben besonderen Schutz (UNESCO, nationale Gesetze). Export ohne Genehmigung = Straftat. Versicherung erfordert spezifische Bewertungen.",
      en: "Cultural goods have special protection (UNESCO, national laws). Export without authorization = crime. Insurance requires specific valuations."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum gestionezi documentele pentru un transport de produse sub sancțiuni sau restricții?",
      de: "Wie handhaben Sie Dokumente für einen Transport von Produkten unter Sanktionen oder Beschränkungen?",
      en: "How do you handle documents for a transport of products under sanctions or restrictions?"
    },
    options: {
      ro: ["Verificare liste sancțiuni (OFAC, UE), due diligence expeditor/destinatar, licențe speciale dacă permis, documentare completă a verificărilor, consultare juridică", "Transport normal fără verificări", "Refuz orice transport suspect", "Doar dacă clientul insistă verific"],
      de: ["Sanktionslisten prüfen (OFAC, EU), Versender/Empfänger-Due-Diligence, Speziallizenzen wenn erlaubt, vollständige Dokumentation der Prüfungen, Rechtsberatung", "Normaler Transport ohne Prüfungen", "Jeden verdächtigen Transport ablehnen", "Nur wenn Kunde besteht prüfe ich"],
      en: ["Check sanctions lists (OFAC, EU), shipper/consignee due diligence, special licenses if permitted, complete documentation of checks, legal consultation", "Normal transport without checks", "Refuse any suspect transport", "Only if customer insists I check"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Încălcarea sancțiunilor = consecințe penale și financiare severe. Due diligence documentată te protejează. Ignoranța nu e apărare.",
      de: "Sanktionsverletzung = schwere strafrechtliche und finanzielle Konsequenzen. Dokumentierte Due Diligence schützt Sie. Unwissenheit ist keine Verteidigung.",
      en: "Sanctions violation = severe criminal and financial consequences. Documented due diligence protects you. Ignorance is no defense."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu complex: Transport de echipamente medicale donate într-o zonă de conflict. Ce documentație specială trebuie?",
      de: "Komplexes Szenario: Transport gespendeter medizinischer Geräte in Konfliktgebiet. Welche spezielle Dokumentation ist nötig?",
      en: "Complex scenario: Transport of donated medical equipment to conflict zone. What special documentation is needed?"
    },
    options: {
      ro: ["Documente ONG/donație, autorizații export umanitar, certificate dual-use, coordonare cu autorități zonei, asigurare specială zone conflict, tracking permanent", "Doar documentație standard", "ONG-urile nu au nevoie de documente", "Evit astfel de transporturi"],
      de: ["NGO/Spende-Dokumente, humanitäre Exportgenehmigungen, Dual-Use-Zertifikate, Koordination mit Gebietsbehörden, Sonderversicherung Konfliktzone, permanentes Tracking", "Nur Standarddokumentation", "NGOs brauchen keine Dokumente", "Solche Transporte vermeiden"],
      en: ["NGO/donation documents, humanitarian export authorizations, dual-use certificates, coordination with zone authorities, special conflict zone insurance, permanent tracking", "Only standard documentation", "NGOs don't need documents", "Avoid such transports"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Echipamentele medicale pot fi dual-use. Zonele de conflict au reguli speciale. Colaborarea cu organizații umanitare și autorități e cheie.",
      de: "Medizinische Geräte können Dual-Use sein. Konfliktzonen haben Sonderregeln. Zusammenarbeit mit humanitären Organisationen und Behörden ist Schlüssel.",
      en: "Medical equipment can be dual-use. Conflict zones have special rules. Collaboration with humanitarian organizations and authorities is key."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt cerințele de documentare pentru transportul de mostre comerciale vs marfă definitivă?",
      de: "Was sind die Dokumentationsanforderungen für Handelsmuster vs Endware Transport?",
      en: "What are documentation requirements for commercial samples vs final goods transport?"
    },
    options: {
      ro: ["Mostre: declarație 'fără valoare comercială', ATA carnet sau proceduri simplificate, mențiuni pe factură; Marfă: documentație completă comercială și vamală", "Documentație identică", "Mostrele nu necesită documente", "Doar valoarea diferă"],
      de: ["Muster: Erklärung 'ohne Handelswert', ATA-Carnet oder vereinfachte Verfahren, Vermerk auf Rechnung; Ware: vollständige Handels- und Zolldokumentation", "Identische Dokumentation", "Muster brauchen keine Dokumente", "Nur Wert unterscheidet sich"],
      en: ["Samples: declaration 'no commercial value', ATA carnet or simplified procedures, notes on invoice; Goods: complete commercial and customs documentation", "Identical documentation", "Samples don't need documents", "Only value differs"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Mostrele au regim special dar nu scutire totală. Marcarea 'sample - not for sale' e importantă. Abuzurile sunt pedepsite.",
      de: "Muster haben Sonderregelung aber keine vollständige Befreiung. Kennzeichnung 'Muster - nicht zum Verkauf' ist wichtig. Missbrauch wird bestraft.",
      en: "Samples have special regime but not full exemption. Marking 'sample - not for sale' is important. Abuses are punished."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum pregătești documentația pentru un audit de conformitate de la un client multinațional?",
      de: "Wie bereiten Sie Dokumentation für ein Compliance-Audit eines multinationalen Kunden vor?",
      en: "How do you prepare documentation for a compliance audit from a multinational customer?"
    },
    options: {
      ro: ["Organizare cronologică completă, dovezi pentru fiecare cerință contractuală, KPI-uri documentate, proceduri scrise, training records, acțiuni corective pentru nonconformități anterioare", "Prezint doar ce cer", "Documetație minimală", "Refuz auditurile externe"],
      de: ["Vollständige chronologische Organisation, Nachweise für jede Vertragsanforderung, dokumentierte KPIs, schriftliche Verfahren, Schulungsnachweise, Korrekturmaßnahmen für frühere Nonkonformitäten", "Nur vorlegen was gefordert", "Minimale Dokumentation", "Externe Audits ablehnen"],
      en: ["Complete chronological organization, evidence for each contractual requirement, documented KPIs, written procedures, training records, corrective actions for previous non-conformities", "Present only what's asked", "Minimal documentation", "Refuse external audits"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Auditul bine pregătit = relație de încredere consolidată. Transparența și îmbunătățirea continuă impresionează. Ascunderea slăbiciunilor eșuează.",
      de: "Gut vorbereitetes Audit = gestärkte Vertrauensbeziehung. Transparenz und kontinuierliche Verbesserung beeindrucken. Schwächen verstecken scheitert.",
      en: "Well-prepared audit = strengthened trust relationship. Transparency and continuous improvement impress. Hiding weaknesses fails."
    }
  }
];
