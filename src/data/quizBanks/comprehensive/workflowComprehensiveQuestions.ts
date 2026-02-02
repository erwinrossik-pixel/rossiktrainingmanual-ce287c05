// Comprehensive question bank for Chapter 5: Workflow
// 30 advanced questions with difficulty levels 3-4-5

import { TranslatedQuizQuestion } from '../../quizTranslations';

export const workflowComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    question: {
      ro: "Care sunt etapele standard ale unui workflow de transport FTL?",
      de: "Was sind die Standardphasen eines FTL-Transport-Workflows?",
      en: "What are the standard stages of an FTL transport workflow?"
    },
    options: {
      ro: ["Doar încărcare și descărcare", "Ofertare → Comandă → Planificare → Execuție → Monitorizare → POD → Facturare", "Comandă → Transport → Plată", "Încărcare → Drum → Livrare"],
      de: ["Nur Be- und Entladung", "Angebot → Auftrag → Planung → Ausführung → Überwachung → POD → Rechnungsstellung", "Auftrag → Transport → Zahlung", "Beladung → Fahrt → Lieferung"],
      en: ["Only loading and unloading", "Quote → Order → Planning → Execution → Monitoring → POD → Invoicing", "Order → Transport → Payment", "Loading → Drive → Delivery"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Workflow-ul complet asigură trasabilitate și control la fiecare etapă.",
      de: "Der vollständige Workflow gewährleistet Rückverfolgbarkeit und Kontrolle in jeder Phase.",
      en: "Complete workflow ensures traceability and control at each stage."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce informații trebuie să conțină obligatoriu o comandă de transport?",
      de: "Welche Informationen muss ein Transportauftrag zwingend enthalten?",
      en: "What information must a transport order mandatorily contain?"
    },
    options: {
      ro: ["Doar adresa de livrare", "Adrese încărcare/descărcare, date/ore, tip marfă, greutate, dimensiuni, instrucțiuni speciale", "Doar prețul", "Doar numele clientului"],
      de: ["Nur Lieferadresse", "Be-/Entladeadressen, Datum/Uhrzeit, Frachtart, Gewicht, Maße, spezielle Anweisungen", "Nur Preis", "Nur Kundenname"],
      en: ["Only delivery address", "Loading/unloading addresses, dates/times, cargo type, weight, dimensions, special instructions", "Only price", "Only client name"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comanda completă previne neînțelegeri și asigură execuția corectă.",
      de: "Der vollständige Auftrag verhindert Missverständnisse und gewährleistet korrekte Ausführung.",
      en: "Complete order prevents misunderstandings and ensures correct execution."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce este POD (Proof of Delivery) și de ce este important?",
      de: "Was ist POD (Proof of Delivery) und warum ist es wichtig?",
      en: "What is POD (Proof of Delivery) and why is it important?"
    },
    options: {
      ro: ["O aplicație de podcast", "Dovada livrării mărfii, necesară pentru facturare și în caz de dispute", "Planul de descărcare", "Polița de asigurare"],
      de: ["Eine Podcast-App", "Nachweis der Warenlieferung, notwendig für Rechnungsstellung und bei Streitigkeiten", "Entladeplan", "Versicherungspolice"],
      en: ["A podcast app", "Proof of cargo delivery, necessary for invoicing and in case of disputes", "Unloading plan", "Insurance policy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "POD-ul confirmat este esențial pentru procesarea plății și protecție legală.",
      de: "Bestätigter POD ist wesentlich für Zahlungsabwicklung und rechtlichen Schutz.",
      en: "Confirmed POD is essential for payment processing and legal protection."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Care este primul pas când primești o cerere de ofertă de la un client nou?",
      de: "Was ist der erste Schritt wenn Sie eine Angebotsanfrage von einem neuen Kunden erhalten?",
      en: "What is the first step when receiving a quote request from a new client?"
    },
    options: {
      ro: ["Trimiți prețul imediat", "Verifici credibilitatea clientului și clarifici toate detaliile transportului", "Refuzi automat", "Transferi la alt coleg"],
      de: ["Preis sofort senden", "Kundenglaubwürdigkeit prüfen und alle Transportdetails klären", "Automatisch ablehnen", "An anderen Kollegen weiterleiten"],
      en: ["Send price immediately", "Verify client credibility and clarify all transport details", "Automatically refuse", "Transfer to another colleague"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Due diligence la clienți noi previne riscuri de neplată și transporturi problematice.",
      de: "Due Diligence bei neuen Kunden verhindert Zahlungsausfall- und Problemtransportrisiken.",
      en: "Due diligence for new clients prevents non-payment risks and problematic transports."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce verifici înainte de a confirma un transport unui transportator?",
      de: "Was prüfen Sie bevor Sie einen Transport einem Spediteur bestätigen?",
      en: "What do you check before confirming a transport to a carrier?"
    },
    options: {
      ro: ["Doar disponibilitatea", "Licențe valide, asigurări, capacitate, experiență pe rută, rating", "Doar prețul", "Doar anul camionului"],
      de: ["Nur Verfügbarkeit", "Gültige Lizenzen, Versicherungen, Kapazität, Routenerfahrung, Rating", "Nur Preis", "Nur Baujahr des LKW"],
      en: ["Only availability", "Valid licenses, insurance, capacity, route experience, rating", "Only price", "Only truck year"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificarea completă reduce riscurile operaționale și asigură servicii de calitate.",
      de: "Vollständige Prüfung reduziert operationale Risiken und gewährleistet Qualitätsservice.",
      en: "Complete verification reduces operational risks and ensures quality service."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Când și cum confirmi detaliile transportului cu șoferul?",
      de: "Wann und wie bestätigen Sie Transportdetails mit dem Fahrer?",
      en: "When and how do you confirm transport details with the driver?"
    },
    options: {
      ro: ["Nu e nevoie, transportatorul se ocupă", "Cu 24h înainte de încărcare + înainte de plecare, cu toate detaliile scris", "Doar în ziua încărcării", "Doar dacă șoferul întreabă"],
      de: ["Nicht nötig, Spediteur kümmert sich", "24h vor Beladung + vor Abfahrt, alle Details schriftlich", "Nur am Ladetag", "Nur wenn Fahrer fragt"],
      en: ["Not needed, carrier handles it", "24h before loading + before departure, all details in writing", "Only on loading day", "Only if driver asks"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Confirmarea scrisă previne erori și stabilește așteptări clare pentru ambele părți.",
      de: "Schriftliche Bestätigung verhindert Fehler und setzt klare Erwartungen für beide Seiten.",
      en: "Written confirmation prevents errors and sets clear expectations for both parties."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce faci când șoferul raportează o întârziere la încărcare?",
      de: "Was tun Sie wenn der Fahrer eine Verspätung bei der Beladung meldet?",
      en: "What do you do when the driver reports a delay at loading?"
    },
    options: {
      ro: ["Aștepți să se rezolve singur", "Evaluezi impactul, informezi clientul proactiv și ajustezi planul", "Anulezi transportul", "Dai vina pe șofer"],
      de: ["Warten dass es sich von selbst löst", "Impact bewerten, Kunden proaktiv informieren und Plan anpassen", "Transport stornieren", "Fahrer beschuldigen"],
      en: ["Wait for it to solve itself", "Assess impact, proactively inform client and adjust plan", "Cancel transport", "Blame driver"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea proactivă menține încrederea clientului chiar în situații problematice.",
      de: "Proaktive Kommunikation erhält Kundenvertrauen auch in problematischen Situationen.",
      en: "Proactive communication maintains client trust even in problematic situations."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce documente trebuie să aibă șoferul la încărcare?",
      de: "Welche Dokumente muss der Fahrer bei der Beladung haben?",
      en: "What documents must the driver have at loading?"
    },
    options: {
      ro: ["Doar carnetul de conducere", "CMR gol, confirmare comandă, instrucțiuni, documente vehicul, licențe", "Doar CMR-ul", "Doar pașaportul"],
      de: ["Nur Führerschein", "Leerer CMR, Auftragsbestätigung, Anweisungen, Fahrzeugdokumente, Lizenzen", "Nur CMR", "Nur Reisepass"],
      en: ["Only driving license", "Blank CMR, order confirmation, instructions, vehicle documents, licenses", "Only CMR", "Only passport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentația completă asigură conformitatea și rezolvarea rapidă a problemelor.",
      de: "Vollständige Dokumentation gewährleistet Compliance und schnelle Problemlösung.",
      en: "Complete documentation ensures compliance and quick problem resolution."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce verifici pe CMR-ul completat la încărcare?",
      de: "Was prüfen Sie auf dem ausgefüllten CMR bei der Beladung?",
      en: "What do you check on the CMR completed at loading?"
    },
    options: {
      ro: ["Doar semnătura", "Toate câmpurile: expeditor, destinatar, marfă, greutate, rezerve, semnături", "Doar data", "Doar adresa"],
      de: ["Nur Unterschrift", "Alle Felder: Absender, Empfänger, Fracht, Gewicht, Vorbehalte, Unterschriften", "Nur Datum", "Nur Adresse"],
      en: ["Only signature", "All fields: shipper, consignee, cargo, weight, reservations, signatures", "Only date", "Only address"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR-ul corect completat protejează în cazul daunelor sau disputelor.",
      de: "Korrekt ausgefüllter CMR schützt bei Schäden oder Streitigkeiten.",
      en: "Correctly completed CMR protects in case of damages or disputes."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Care este frecvența recomandată pentru update-uri de poziție în timpul transportului?",
      de: "Was ist die empfohlene Häufigkeit für Positionsupdates während des Transports?",
      en: "What is the recommended frequency for position updates during transport?"
    },
    options: {
      ro: ["O dată pe zi", "La evenimente cheie: plecare, pauze, frontieră, sosire + la cerere", "Doar la sosire", "Doar dacă e problemă"],
      de: ["Einmal täglich", "Bei Schlüsselereignissen: Abfahrt, Pausen, Grenze, Ankunft + auf Anfrage", "Nur bei Ankunft", "Nur bei Problemen"],
      en: ["Once daily", "At key events: departure, breaks, border, arrival + on request", "Only at arrival", "Only if there's a problem"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tracking-ul la evenimente permite vizibilitate fără a supraîncărca șoferul.",
      de: "Event-Tracking ermöglicht Sichtbarkeit ohne den Fahrer zu überlasten.",
      en: "Event tracking enables visibility without overloading the driver."
    },
    difficultyLevel: 3
  },

  // Level 4 Questions (10)
  {
    question: {
      ro: "Cum prioritizezi când ai 5 transporturi simultane cu potențiale probleme?",
      de: "Wie priorisieren Sie wenn Sie 5 gleichzeitige Transporte mit potenziellen Problemen haben?",
      en: "How do you prioritize when you have 5 simultaneous transports with potential problems?"
    },
    options: {
      ro: ["Le tratezi în ordinea în care au apărut", "Clasifici după impact: valoare marfă, deadline critic, risc de penalități", "Le faci pe toate simultan", "Le deleghezi toate"],
      de: ["In der Reihenfolge behandeln wie sie aufgetreten sind", "Nach Impact klassifizieren: Warenwert, kritische Deadline, Strafrisiko", "Alle gleichzeitig machen", "Alle delegieren"],
      en: ["Handle them in order they appeared", "Classify by impact: cargo value, critical deadline, penalty risk", "Do all simultaneously", "Delegate all"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prioritizarea pe baza impactului business asigură minimizarea pierderilor totale.",
      de: "Priorisierung nach Business-Impact gewährleistet Minimierung der Gesamtverluste.",
      en: "Prioritizing based on business impact ensures minimization of total losses."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce proces folosești pentru handover-ul dintre ture/colegi?",
      de: "Welchen Prozess verwenden Sie für die Übergabe zwischen Schichten/Kollegen?",
      en: "What process do you use for handover between shifts/colleagues?"
    },
    options: {
      ro: ["Email general la final de zi", "Briefing structurat: status transporturi active, probleme în curs, acțiuni pendinte, contacte cheie", "Niciun handover formal", "Doar note în TMS"],
      de: ["Allgemeine E-Mail am Tagesende", "Strukturiertes Briefing: Status aktiver Transporte, laufende Probleme, anstehende Aktionen, wichtige Kontakte", "Kein formelles Handover", "Nur Notizen im TMS"],
      en: ["General email at end of day", "Structured briefing: active transport status, ongoing issues, pending actions, key contacts", "No formal handover", "Only notes in TMS"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Handover-ul structurat previne pierderea de informații critice și asigură continuitate.",
      de: "Strukturierte Übergabe verhindert Verlust kritischer Informationen und gewährleistet Kontinuität.",
      en: "Structured handover prevents loss of critical information and ensures continuity."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Cum documentezi și escaladezi o problemă majoră care depășește nivelul tău de decizie?",
      de: "Wie dokumentieren und eskalieren Sie ein großes Problem das Ihre Entscheidungsebene übersteigt?",
      en: "How do you document and escalate a major problem that exceeds your decision level?"
    },
    options: {
      ro: ["Email lung cu toate detaliile", "Raport succint: situație, impact, opțiuni, recomandare + documentație suport", "Suni imediat fără pregătire", "Aștepți să se rezolve singur"],
      de: ["Lange E-Mail mit allen Details", "Kurzer Bericht: Situation, Impact, Optionen, Empfehlung + Dokumentation", "Sofort anrufen ohne Vorbereitung", "Warten dass es sich von selbst löst"],
      en: ["Long email with all details", "Concise report: situation, impact, options, recommendation + supporting documentation", "Call immediately without preparation", "Wait for it to resolve itself"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Escaladarea eficientă respectă timpul decision-maker-ului și oferă informații acționabile.",
      de: "Effektive Eskalation respektiert die Zeit des Entscheidungsträgers und liefert handlungsfähige Informationen.",
      en: "Effective escalation respects decision-maker's time and provides actionable information."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce faci când observi un pattern de probleme repetitive pe o anumită rută?",
      de: "Was tun Sie wenn Sie ein Muster von sich wiederholenden Problemen auf einer bestimmten Route bemerken?",
      en: "What do you do when you notice a pattern of repetitive problems on a certain route?"
    },
    options: {
      ro: ["Continui să rezolvi de fiecare dată", "Documentezi, analizezi cauza rădăcină și propui schimbări sistematice", "Eviți ruta", "Dai vina pe transportatori"],
      de: ["Jedes Mal weiter lösen", "Dokumentieren, Ursache analysieren und systematische Änderungen vorschlagen", "Route vermeiden", "Spediteure beschuldigen"],
      en: ["Continue solving each time", "Document, analyze root cause and propose systematic changes", "Avoid the route", "Blame carriers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Analiza root cause transformă probleme reactive în îmbunătățiri proactive.",
      de: "Ursachenanalyse verwandelt reaktive Probleme in proaktive Verbesserungen.",
      en: "Root cause analysis transforms reactive problems into proactive improvements."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Cum gestionezi o situație în care clientul și transportatorul au versiuni diferite ale evenimentelor?",
      de: "Wie handhaben Sie eine Situation in der Kunde und Spediteur unterschiedliche Versionen der Ereignisse haben?",
      en: "How do you handle a situation where client and carrier have different versions of events?"
    },
    options: {
      ro: ["Crezi automat clientul", "Colectezi dovezi obiective: GPS, fotografii, confirmări scrise, martori", "Crezi automat transportatorul", "Ignori conflictul"],
      de: ["Automatisch dem Kunden glauben", "Objektive Beweise sammeln: GPS, Fotos, schriftliche Bestätigungen, Zeugen", "Automatisch dem Spediteur glauben", "Konflikt ignorieren"],
      en: ["Automatically believe client", "Collect objective evidence: GPS, photos, written confirmations, witnesses", "Automatically believe carrier", "Ignore conflict"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dovezile obiective protejează relațiile și permit decizii echitabile.",
      de: "Objektive Beweise schützen Beziehungen und ermöglichen faire Entscheidungen.",
      en: "Objective evidence protects relationships and enables fair decisions."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce verificări faci înainte de a accepta un transport de last-minute?",
      de: "Welche Prüfungen machen Sie bevor Sie einen Last-Minute-Transport annehmen?",
      en: "What checks do you do before accepting a last-minute transport?"
    },
    options: {
      ro: ["Accepti orice pentru a nu pierde clientul", "Verifici capacitate reală, timp legal disponibil, prețul corect pentru urgență", "Refuzi automat last-minute", "Accepți și apoi vezi"],
      de: ["Alles akzeptieren um Kunden nicht zu verlieren", "Reale Kapazität prüfen, verfügbare legale Zeit, korrekter Preis für Dringlichkeit", "Last-Minute automatisch ablehnen", "Akzeptieren und dann sehen"],
      en: ["Accept anything to not lose client", "Check real capacity, available legal time, correct price for urgency", "Automatically refuse last-minute", "Accept and then see"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Acceptarea nepregătită a urgențelor duce la eșecuri mai costisitoare decât refuzul.",
      de: "Unvorbereitete Annahme von Dringlichkeiten führt zu kostspieligeren Ausfällen als Ablehnung.",
      en: "Unprepared acceptance of urgencies leads to more costly failures than refusal."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Cum optimizezi utilizarea timpului în zilele cu volum mare de comenzi?",
      de: "Wie optimieren Sie die Zeitnutzung an Tagen mit hohem Auftragsvolumen?",
      en: "How do you optimize time usage on days with high order volume?"
    },
    options: {
      ro: ["Lucrezi mai multe ore", "Batch-uri de sarcini similare, automatizare unde posibil, delegare, prioritizare strictă", "Amâni sarcinile non-urgente", "Faci overtime non-stop"],
      de: ["Mehr Stunden arbeiten", "Batches ähnlicher Aufgaben, Automatisierung wo möglich, Delegation, strikte Priorisierung", "Nicht-dringende Aufgaben aufschieben", "Non-stop Überstunden"],
      en: ["Work more hours", "Batch similar tasks, automation where possible, delegation, strict prioritization", "Postpone non-urgent tasks", "Non-stop overtime"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Batch processing și automatizarea reduc timpul pierdut pe context switching.",
      de: "Batch-Verarbeitung und Automatisierung reduzieren Zeitverlust durch Context-Switching.",
      en: "Batch processing and automation reduce time lost on context switching."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce faci când un transport programat este anulat de client cu 2 ore înainte de încărcare?",
      de: "Was tun Sie wenn ein geplanter Transport vom Kunden 2 Stunden vor Beladung storniert wird?",
      en: "What do you do when a scheduled transport is cancelled by client 2 hours before loading?"
    },
    options: {
      ro: ["Accepți fără discuții", "Verifici termenii contractuali, aplici penalități unde e cazul, încerci să găsești alternativă pentru camion", "Rupi relația cu clientul", "Ignori anularea"],
      de: ["Ohne Diskussion akzeptieren", "Vertragsbedingungen prüfen, Strafen wo angebracht anwenden, Alternative für LKW suchen", "Kundenbeziehung beenden", "Stornierung ignorieren"],
      en: ["Accept without discussion", "Check contract terms, apply penalties where appropriate, try to find alternative for truck", "End client relationship", "Ignore cancellation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Termenii contractuali protejează ambele părți. Găsirea de alternative minimizează pierderea.",
      de: "Vertragsbedingungen schützen beide Seiten. Alternativen finden minimiert Verlust.",
      en: "Contract terms protect both parties. Finding alternatives minimizes loss."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Cum integrezi feedback-ul post-transport în îmbunătățirea proceselor?",
      de: "Wie integrieren Sie Post-Transport-Feedback in Prozessverbesserungen?",
      en: "How do you integrate post-transport feedback into process improvements?"
    },
    options: {
      ro: ["Feedback-ul nu e important", "Colectezi sistematic, analizezi trending-uri, implementezi quick wins și planifici schimbări mari", "Doar pentru transporturi cu probleme", "Doar la cererea managementului"],
      de: ["Feedback ist nicht wichtig", "Systematisch sammeln, Trends analysieren, Quick Wins umsetzen und große Änderungen planen", "Nur für Transporte mit Problemen", "Nur auf Managementanfrage"],
      en: ["Feedback is not important", "Collect systematically, analyze trends, implement quick wins and plan major changes", "Only for transports with problems", "Only on management request"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Îmbunătățirea continuă necesită ciclu feedback → analiză → acțiune → măsurare.",
      de: "Kontinuierliche Verbesserung erfordert Zyklus Feedback → Analyse → Aktion → Messung.",
      en: "Continuous improvement requires cycle feedback → analysis → action → measurement."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce procedură urmezi când primești o reclamație oficială de la un client?",
      de: "Welches Verfahren befolgen Sie wenn Sie eine offizielle Kundenbeschwerde erhalten?",
      en: "What procedure do you follow when receiving an official complaint from a client?"
    },
    options: {
      ro: ["O rezolvi informal pentru viteză", "Înregistrezi formal, investighezi obiectiv, răspunzi în termen, documentezi rezoluția", "O transferi la altcineva", "O ignori dacă e minoră"],
      de: ["Informell für Schnelligkeit lösen", "Formal registrieren, objektiv untersuchen, fristgerecht antworten, Lösung dokumentieren", "An jemand anderen weiterleiten", "Ignorieren wenn geringfügig"],
      en: ["Resolve informally for speed", "Register formally, investigate objectively, respond within deadline, document resolution", "Transfer to someone else", "Ignore if minor"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Procesul formal de reclamații protejează și demonstrează profesionalism.",
      de: "Formeller Beschwerdeprozess schützt und demonstriert Professionalität.",
      en: "Formal complaint process protects and demonstrates professionalism."
    },
    difficultyLevel: 4
  },

  // Level 5 Questions (10)
  {
    question: {
      ro: "Trebuie să gestionezi simultan: camion în pană pe A1, client VIP nemulțumit la telefon, deadline de facturare în 30 min. Ce ordine de prioritate folosești?",
      de: "Sie müssen gleichzeitig managen: LKW-Panne auf A1, unzufriedener VIP-Kunde am Telefon, Rechnungsfrist in 30 Min. Welche Prioritätsreihenfolge verwenden Sie?",
      en: "You must manage simultaneously: truck breakdown on A1, unhappy VIP client on phone, invoicing deadline in 30 min. What priority order do you use?"
    },
    options: {
      ro: ["Primul care a apărut", "Clientul VIP → Avaria (siguranța mărfii) → Facturarea (poate fi amânată)", "Facturarea prima (deadline)", "Le faci pe toate simultan"],
      de: ["Zuerst aufgetreten", "VIP-Kunde → Panne (Warensicherheit) → Rechnungsstellung (kann verschoben werden)", "Rechnungsstellung zuerst (Deadline)", "Alle gleichzeitig"],
      en: ["First one that appeared", "VIP client → Breakdown (cargo safety) → Invoicing (can be delayed)", "Invoicing first (deadline)", "All simultaneously"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prioritizare: relație client (reputație) > siguranța mărfii > deadline administrativ (negociabil).",
      de: "Priorisierung: Kundenbeziehung (Reputation) > Warensicherheit > administrativer Termin (verhandelbar).",
      en: "Prioritization: client relationship (reputation) > cargo safety > administrative deadline (negotiable)."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Cum proiectezi un workflow pentru un client nou cu 50 de transporturi/săptămână și cerințe specifice?",
      de: "Wie entwerfen Sie einen Workflow für einen neuen Kunden mit 50 Transporten/Woche und spezifischen Anforderungen?",
      en: "How do you design a workflow for a new client with 50 transports/week and specific requirements?"
    },
    options: {
      ro: ["Folosești procesul standard", "Mapezi cerințele, identifici punctele de integrare, automatizezi repetițiile, definești KPIs și SOP-uri dedicate", "Trimiți template-ul general", "Începi fără plan și ajustezi"],
      de: ["Standardprozess verwenden", "Anforderungen mappen, Integrationspunkte identifizieren, Wiederholungen automatisieren, dedizierte KPIs und SOPs definieren", "Allgemeines Template senden", "Ohne Plan starten und anpassen"],
      en: ["Use standard process", "Map requirements, identify integration points, automate repetitions, define dedicated KPIs and SOPs", "Send general template", "Start without plan and adjust"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clienții mari necesită workflow dedicat pentru eficiență și scalabilitate.",
      de: "Große Kunden erfordern dedizierten Workflow für Effizienz und Skalierbarkeit.",
      en: "Large clients require dedicated workflow for efficiency and scalability."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Cum implementezi un sistem de alertare automată pentru detectarea timpurie a problemelor?",
      de: "Wie implementieren Sie ein automatisches Warnsystem zur Früherkennung von Problemen?",
      en: "How do you implement an automatic alerting system for early problem detection?"
    },
    options: {
      ro: ["Verificare manuală periodică", "Definești triggeri bazați pe deviații de la plan: întârziere ETA, temperatură, lipsă confirmare", "Aștepți ca șoferii să raporteze", "Doar alerte de la GPS"],
      de: ["Regelmäßige manuelle Prüfung", "Trigger basierend auf Plan-Abweichungen definieren: ETA-Verzögerung, Temperatur, fehlende Bestätigung", "Warten dass Fahrer berichten", "Nur GPS-Warnungen"],
      en: ["Periodic manual check", "Define triggers based on plan deviations: ETA delay, temperature, missing confirmation", "Wait for drivers to report", "Only GPS alerts"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Alertele automate pe deviații permit intervenție înainte ca problemele să devină crize.",
      de: "Automatische Warnungen bei Abweichungen ermöglichen Intervention bevor Probleme zu Krisen werden.",
      en: "Automatic alerts on deviations enable intervention before problems become crises."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Ce metrici folosești pentru a măsura eficiența personală și a identifica arii de îmbunătățire?",
      de: "Welche Metriken verwenden Sie um persönliche Effizienz zu messen und Verbesserungsbereiche zu identifizieren?",
      en: "What metrics do you use to measure personal efficiency and identify improvement areas?"
    },
    options: {
      ro: ["Doar numărul de transporturi", "Transporturi/zi, timp mediu rezolvare probleme, rata de escalări, satisfacție clienți, marja medie", "Doar ore lucrate", "Feedback de la șefi"],
      de: ["Nur Anzahl Transporte", "Transporte/Tag, durchschnittliche Problemlösungszeit, Eskalationsrate, Kundenzufriedenheit, durchschnittliche Marge", "Nur Arbeitsstunden", "Feedback von Vorgesetzten"],
      en: ["Only number of transports", "Transports/day, average problem resolution time, escalation rate, client satisfaction, average margin", "Only hours worked", "Feedback from bosses"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Metricile multiple oferă imagine completă a performanței și a potențialului de creștere.",
      de: "Mehrere Metriken bieten ein vollständiges Bild der Leistung und des Wachstumspotenzials.",
      en: "Multiple metrics provide complete picture of performance and growth potential."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Cum gestionezi un caz în care un transportator partener fidel a făcut o eroare majoră care a costat clientul 50.000 EUR?",
      de: "Wie handhaben Sie einen Fall in dem ein treuer Partner-Spediteur einen großen Fehler gemacht hat der den Kunden 50.000 EUR gekostet hat?",
      en: "How do you handle a case where a loyal partner carrier made a major error that cost the client €50,000?"
    },
    options: {
      ro: ["Acoperi eroarea pentru relație", "Documentezi, negociezi acoperirea parțială din asigurare/transportator, comunici transparent cu clientul, stabiliți plan de prevenție", "Rupi relația imediat", "Dai vina pe client"],
      de: ["Fehler für Beziehung vertuschen", "Dokumentieren, teilweise Deckung aus Versicherung/Spediteur verhandeln, transparent mit Kunde kommunizieren, Präventionsplan erstellen", "Beziehung sofort beenden", "Kunden beschuldigen"],
      en: ["Cover error for relationship", "Document, negotiate partial coverage from insurance/carrier, communicate transparently with client, establish prevention plan", "End relationship immediately", "Blame client"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Balansarea relațiilor cu transportatorii, clienții și interesele companiei necesită diplomație și transparență.",
      de: "Balance zwischen Spediteur-, Kunden- und Unternehmensinteressen erfordert Diplomatie und Transparenz.",
      en: "Balancing carrier, client and company interests requires diplomacy and transparency."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Ce proces folosești pentru a transfera cunoștințele tale când un coleg nou se alătură echipei?",
      de: "Welchen Prozess verwenden Sie um Ihr Wissen zu transferieren wenn ein neuer Kollege ins Team kommt?",
      en: "What process do you use to transfer your knowledge when a new colleague joins the team?"
    },
    options: {
      ro: ["Doar răspunzi la întrebări", "Documentație structurată + shadowing + task-uri progresive + feedback regular + disponibilitate pentru suport", "Trimiți manualul și procedurile", "Îl lași să învețe singur"],
      de: ["Nur Fragen beantworten", "Strukturierte Dokumentation + Shadowing + progressive Aufgaben + regelmäßiges Feedback + Unterstützungsverfügbarkeit", "Handbuch und Verfahren senden", "Selbst lernen lassen"],
      en: ["Only answer questions", "Structured documentation + shadowing + progressive tasks + regular feedback + availability for support", "Send manual and procedures", "Let them learn alone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Onboarding-ul eficient reduce timpul până la productivitate și previne erorile de început.",
      de: "Effektives Onboarding reduziert Time-to-Productivity und verhindert Anfängerfehler.",
      en: "Effective onboarding reduces time to productivity and prevents beginner errors."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Cum reacționezi când sistemul TMS se blochează în mijlocul unei zile cu volum mare?",
      de: "Wie reagieren Sie wenn das TMS-System mitten an einem Tag mit hohem Volumen abstürzt?",
      en: "How do you react when the TMS system crashes in the middle of a high-volume day?"
    },
    options: {
      ro: ["Aștepți să fie reparat", "Activezi planul B (Excel/manual), prioritizezi critic, comunici statusul intern/extern, documenetezi pentru catch-up", "Trimiți pe toți acasă", "Te plângi IT-ului"],
      de: ["Warten auf Reparatur", "Plan B aktivieren (Excel/manuell), kritische priorisieren, Status intern/extern kommunizieren, für Nacharbeit dokumentieren", "Alle nach Hause schicken", "Sich bei IT beschweren"],
      en: ["Wait for repair", "Activate plan B (Excel/manual), prioritize critical, communicate status internally/externally, document for catch-up", "Send everyone home", "Complain to IT"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Business continuity înseamnă să ai întotdeauna un plan B pentru scenariile de sistem down.",
      de: "Business Continuity bedeutet immer einen Plan B für System-Down-Szenarien zu haben.",
      en: "Business continuity means always having a plan B for system-down scenarios."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Ce strategie folosești pentru a reduce timpul de procesare a unei comenzi de la 15 minute la 5 minute?",
      de: "Welche Strategie verwenden Sie um die Auftragsbearbeitungszeit von 15 auf 5 Minuten zu reduzieren?",
      en: "What strategy do you use to reduce order processing time from 15 minutes to 5 minutes?"
    },
    options: {
      ro: ["Lucrezi mai repede", "Analizezi pașii, elimini redundanțe, automatizezi input-uri, precompletezi date recurente", "Angajezi mai mulți oameni", "Accepți mai puține comenzi"],
      de: ["Schneller arbeiten", "Schritte analysieren, Redundanzen eliminieren, Inputs automatisieren, wiederkehrende Daten vorab ausfüllen", "Mehr Leute einstellen", "Weniger Aufträge annehmen"],
      en: ["Work faster", "Analyze steps, eliminate redundancies, automate inputs, pre-fill recurring data", "Hire more people", "Accept fewer orders"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lean thinking: elimini waste (pași inutili) și standardizezi repetițiile.",
      de: "Lean Thinking: Waste (unnötige Schritte) eliminieren und Wiederholungen standardisieren.",
      en: "Lean thinking: eliminate waste (unnecessary steps) and standardize repetitions."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Cum gestionezi situația când regulile procedurale ale companiei sunt în conflict cu cerințele speciale ale unui client mare?",
      de: "Wie handhaben Sie die Situation wenn Unternehmensverfahrensregeln mit speziellen Anforderungen eines Großkunden in Konflikt stehen?",
      en: "How do you handle the situation when company procedural rules conflict with special requirements of a large client?"
    },
    options: {
      ro: ["Ignori regulile pentru client", "Escaladezi cu propunere de excepție documentată, evaluezi riscul, stabilești protocol special aprobat", "Refuzi cerințele clientului", "Faci în secret ce cere clientul"],
      de: ["Regeln für Kunden ignorieren", "Mit dokumentiertem Ausnahmevorschlag eskalieren, Risiko bewerten, genehmigtes Spezialprotokoll erstellen", "Kundenanforderungen ablehnen", "Heimlich tun was Kunde will"],
      en: ["Ignore rules for client", "Escalate with documented exception proposal, assess risk, establish approved special protocol", "Refuse client requirements", "Secretly do what client wants"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Excepțiile documentate și aprobate protejează și compania și relația cu clientul.",
      de: "Dokumentierte und genehmigte Ausnahmen schützen sowohl Unternehmen als auch Kundenbeziehung.",
      en: "Documented and approved exceptions protect both company and client relationship."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Cum măsori ROI-ul implementării unui nou workflow sau proces?",
      de: "Wie messen Sie den ROI der Implementierung eines neuen Workflows oder Prozesses?",
      en: "How do you measure ROI of implementing a new workflow or process?"
    },
    options: {
      ro: ["Feedback subiectiv", "Compari baseline vs. post-implementare: timp economisit × cost orar + erori reduse × cost medie eroare + beneficii calitative", "Doar dacă e cerut de management", "Nu e măsurabil"],
      de: ["Subjektives Feedback", "Baseline vs. Post-Implementierung vergleichen: gesparte Zeit × Stundensatz + reduzierte Fehler × durchschnittliche Fehlerkosten + qualitative Vorteile", "Nur wenn vom Management gefordert", "Nicht messbar"],
      en: ["Subjective feedback", "Compare baseline vs. post-implementation: time saved × hourly rate + reduced errors × average error cost + qualitative benefits", "Only if requested by management", "Not measurable"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ROI cuantificat justifică investiția în îmbunătățiri și facilitează aprobarea inițiativelor viitoare.",
      de: "Quantifizierter ROI rechtfertigt Investitionen in Verbesserungen und erleichtert Genehmigung künftiger Initiativen.",
      en: "Quantified ROI justifies investment in improvements and facilitates approval of future initiatives."
    },
    difficultyLevel: 5
  }
];
