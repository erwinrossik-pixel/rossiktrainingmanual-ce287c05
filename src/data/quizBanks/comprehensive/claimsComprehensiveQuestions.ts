import { TranslatedQuizQuestion } from '../../quizTranslations';

export const claimsComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este o reclamație (claim) în transport de marfă?",
      de: "Was ist ein Schadensanspruch (Claim) im Gütertransport?",
      en: "What is a claim in freight transport?"
    },
    options: {
      ro: ["Comandă de transport", "Cerere de despăgubire pentru pierdere, daună sau întârziere a mărfii", "Factură", "Contract"],
      de: ["Transportauftrag", "Entschädigungsforderung für Verlust, Beschädigung oder Verzögerung der Fracht", "Rechnung", "Vertrag"],
      en: ["Transport order", "Compensation request for loss, damage or delay of cargo", "Invoice", "Contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Claim: cerere formală de compensație când marfa e pierdută, deteriorată sau livrată cu întârziere dincolo de termenii agreați.",
      de: "Claim: formelle Entschädigungsforderung wenn Fracht verloren, beschädigt oder über vereinbarte Bedingungen hinaus verspätet geliefert wird.",
      en: "Claim: formal compensation request when cargo is lost, damaged or delivered late beyond agreed terms."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt termenele legale pentru notificarea daunelor conform CMR?",
      de: "Was sind die gesetzlichen Fristen für Schadensmeldungen gemäß CMR?",
      en: "What are the legal deadlines for damage notification according to CMR?"
    },
    options: {
      ro: ["Oricând", "Daună vizibilă: la livrare. Ascunsă: 7 zile. Întârziere: 21 zile. Claim: 1 an", "30 de zile pentru toate", "Nu există termene"],
      de: ["Jederzeit", "Sichtbarer Schaden: bei Lieferung. Versteckt: 7 Tage. Verzögerung: 21 Tage. Claim: 1 Jahr", "30 Tage für alle", "Keine Fristen"],
      en: ["Anytime", "Visible damage: at delivery. Hidden: 7 days. Delay: 21 days. Claim: 1 year", "30 days for all", "No deadlines"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR Art. 30: daună vizibilă = rezerve imediate, ascunsă = 7 zile lucrătoare, întârziere = 21 zile. Claim în instanță = 1 an de la livrare.",
      de: "CMR Art. 30: sichtbarer Schaden = sofortige Vorbehalte, versteckt = 7 Werktage, Verzögerung = 21 Tage. Gerichtlicher Claim = 1 Jahr ab Lieferung.",
      en: "CMR Art. 30: visible damage = immediate reservations, hidden = 7 working days, delay = 21 days. Court claim = 1 year from delivery."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum documentezi corect o daună la livrare?",
      de: "Wie dokumentierst du einen Schaden bei Lieferung korrekt?",
      en: "How do you correctly document damage at delivery?"
    },
    options: {
      ro: ["Doar semnezi CMR-ul", "Rezerve scrise pe CMR (specifice), poze, martor, raport detaliat, notificare scrisă", "Doar telefon", "Doar email mai târziu"],
      de: ["Nur CMR unterschreiben", "Schriftliche Vorbehalte auf CMR (spezifisch), Fotos, Zeuge, detaillierter Bericht, schriftliche Benachrichtigung", "Nur Telefon", "Nur E-Mail später"],
      en: ["Only sign CMR", "Written reservations on CMR (specific), photos, witness, detailed report, written notification", "Only phone", "Only email later"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentare: rezerve clare pe CMR ('3 colete deteriorate vizibil'), fotografii multiple (ambalaj, conținut), martor, raport scris, email de notificare.",
      de: "Dokumentation: klare Vorbehalte auf CMR ('3 Pakete sichtbar beschädigt'), mehrere Fotos (Verpackung, Inhalt), Zeuge, schriftlicher Bericht, Benachrichtigungs-E-Mail.",
      en: "Documentation: clear reservations on CMR ('3 packages visibly damaged'), multiple photos (packaging, content), witness, written report, notification email."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client raportează daună de 50.000€ la 3 zile după livrare. CMR semnat fără rezerve. Opțiuni și strategie?",
      de: "Kunde meldet 50.000€-Schaden 3 Tage nach Lieferung. CMR ohne Vorbehalte unterschrieben. Optionen und Strategie?",
      en: "Client reports €50,000 damage 3 days after delivery. CMR signed without reservations. Options and strategy?"
    },
    options: {
      ro: ["Refuzi automat", "Analizezi: daună ascunsă (7 zile OK), investigație, negociere, verifică asigurări", "Plătești imediat", "Ignori complet"],
      de: ["Automatisch ablehnen", "Analysieren: versteckter Schaden (7 Tage OK), Untersuchung, Verhandlung, Versicherungen prüfen", "Sofort zahlen", "Komplett ignorieren"],
      en: ["Refuse automatically", "Analyze: hidden damage (7 days OK), investigation, negotiation, check insurances", "Pay immediately", "Ignore completely"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Strategie: 3 zile = în termen pentru daună ascunsă (7 zile). Investigează: natura daunei, era detectabilă? Negociază bazat pe evidențe, verifică coverage asigurare.",
      de: "Strategie: 3 Tage = innerhalb Frist für versteckten Schaden (7 Tage). Untersuchen: Schadensart, war erkennbar? Basierend auf Beweisen verhandeln, Versicherungsdeckung prüfen.",
      en: "Strategy: 3 days = within deadline for hidden damage (7 days). Investigate: damage nature, was it detectable? Negotiate based on evidence, check insurance coverage."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'rezerve' pe documentul de transport?",
      de: "Was bedeuten 'Vorbehalte' auf dem Transportdokument?",
      en: "What do 'reservations' on the transport document mean?"
    },
    options: {
      ro: ["Rezervare hotel", "Note scrise care indică probleme observate la încărcare sau livrare", "Plată în avans", "Confirmare primire"],
      de: ["Hotelreservierung", "Schriftliche Hinweise auf Probleme bei Be- oder Entladung", "Vorauszahlung", "Empfangsbestätigung"],
      en: ["Hotel reservation", "Written notes indicating problems observed at loading or delivery", "Advance payment", "Receipt confirmation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rezerve: note scrise pe CMR/POD care semnalează defecte ('ambalaj rupt', '2 paleți lipsă'). Esențiale pentru claims - fără rezerve, prezumție că totul era OK.",
      de: "Vorbehalte: schriftliche Notizen auf CMR/POD die Mängel anzeigen ('Verpackung gerissen', '2 Paletten fehlen'). Wesentlich für Claims - ohne Vorbehalte Annahme dass alles OK war.",
      en: "Reservations: written notes on CMR/POD signaling defects ('packaging torn', '2 pallets missing'). Essential for claims - without reservations, presumption everything was OK."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care este procesul standard de gestionare a unui claim?",
      de: "Was ist der Standard-Prozess für Claim-Management?",
      en: "What is the standard claim management process?"
    },
    options: {
      ro: ["Doar răspunzi când te dau în judecată", "Primire, înregistrare, investigație, evaluare, negociere/decizie, închidere, documentare", "Doar plătești", "Doar refuzi"],
      de: ["Nur antworten wenn verklagt", "Empfang, Registrierung, Untersuchung, Bewertung, Verhandlung/Entscheidung, Abschluss, Dokumentation", "Nur zahlen", "Nur ablehnen"],
      en: ["Only respond when sued", "Receipt, registration, investigation, evaluation, negotiation/decision, closure, documentation", "Only pay", "Only refuse"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Proces claim: 1) Primire și înregistrare, 2) Acknowledge rapid (24-48h), 3) Investigație (documente, interviuri), 4) Evaluare răspundere, 5) Negociere/Decizie, 6) Plată sau refuz motivat.",
      de: "Claim-Prozess: 1) Empfang und Registrierung, 2) Schnelle Bestätigung (24-48h), 3) Untersuchung (Dokumente, Interviews), 4) Haftungsbewertung, 5) Verhandlung/Entscheidung, 6) Zahlung oder begründete Ablehnung.",
      en: "Claim process: 1) Receipt and registration, 2) Quick acknowledgment (24-48h), 3) Investigation (documents, interviews), 4) Liability assessment, 5) Negotiation/Decision, 6) Payment or reasoned refusal."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Claim de 200.000€ pentru marfă perisabilă alterată. Termometru arată excursie temperatură, dar carrier susține că frigiderul a funcționat. Investigație?",
      de: "200.000€-Claim für verdorbene verderbliche Ware. Thermometer zeigt Temperaturabweichung, aber Carrier behauptet Kühlaggregat funktionierte. Untersuchung?",
      en: "€200,000 claim for spoiled perishables. Thermometer shows temperature excursion, but carrier claims refrigerator worked. Investigation?"
    },
    options: {
      ro: ["Accept claim-ul", "Analiză date logger, calibrare termometru, log-uri agregat, expert independent, repartizare răspundere", "Refuz complet", "Doar negociezi 50%"],
      de: ["Claim akzeptieren", "Logger-Datenanalyse, Thermometerkalibrierung, Aggregat-Logs, unabhängiger Experte, Haftungsverteilung", "Komplett ablehnen", "Nur 50% verhandeln"],
      en: ["Accept claim", "Logger data analysis, thermometer calibration, unit logs, independent expert, liability allocation", "Refuse completely", "Only negotiate 50%"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Investigație reefer: comparație date logger client vs. carrier, verificare calibrare senzori, log-uri tehnice agregat, eventual expert independent, stabilire culpă pe bază de fapte.",
      de: "Reefer-Untersuchung: Vergleich Logger-Daten Kunde vs. Carrier, Sensorkalibrierungsprüfung, technische Aggregat-Logs, eventuell unabhängiger Experte, Schuldfeststellung auf Faktenbasis.",
      en: "Reefer investigation: compare logger data client vs. carrier, sensor calibration check, technical unit logs, possibly independent expert, determine fault based on facts."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce documente sunt necesare pentru a susține un claim?",
      de: "Welche Dokumente sind zur Unterstützung eines Claims erforderlich?",
      en: "What documents are needed to support a claim?"
    },
    options: {
      ro: ["Doar email", "CMR cu rezerve, factura comercială, poze, raport daună, corespondență, evaluare pagube", "Doar telefon", "Niciun document"],
      de: ["Nur E-Mail", "CMR mit Vorbehalten, Handelsrechnung, Fotos, Schadensbericht, Korrespondenz, Schadensbewertung", "Nur Telefon", "Keine Dokumente"],
      en: ["Only email", "CMR with reservations, commercial invoice, photos, damage report, correspondence, damage assessment", "Only phone", "No documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dosar claim: CMR original (cu rezerve), factură comercială (valoare), foto daune, raport descărcare, corespondența cu transportatorul, estimare/factură reparații.",
      de: "Claim-Akte: Original-CMR (mit Vorbehalten), Handelsrechnung (Wert), Schadensfotos, Entladebericht, Korrespondenz mit Transportunternehmer, Reparaturkostenvoranschlag/-rechnung.",
      en: "Claim file: original CMR (with reservations), commercial invoice (value), damage photos, unloading report, correspondence with carrier, repair estimate/invoice."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi valoarea unei daune conform CMR?",
      de: "Wie berechnest du den Schadenswert gemäß CMR?",
      en: "How do you calculate damage value according to CMR?"
    },
    options: {
      ro: ["Orice sumă cerută", "Valoarea la locul și momentul preluării + costuri transport, vamă; limită 8,33 SDR/kg", "Doar prețul de piață", "Doar costul de înlocuire"],
      de: ["Jede geforderte Summe", "Wert am Ort und Zeitpunkt der Übernahme + Transport-, Zollkosten; Limit 8,33 SZR/kg", "Nur Marktpreis", "Nur Ersatzkosten"],
      en: ["Any amount requested", "Value at place and time of acceptance + transport, customs costs; limit 8.33 SDR/kg", "Only market price", "Only replacement cost"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR Art. 23: dauna = valoare marfă la expediere (factură) + cheltuieli (transport, vamă). Maximum: 8,33 SDR × greutate brută kg. Nu se plătesc pierderi indirecte.",
      de: "CMR Art. 23: Schaden = Warenwert bei Versand (Rechnung) + Ausgaben (Transport, Zoll). Maximum: 8,33 SZR × Bruttogewicht kg. Keine indirekten Verluste.",
      en: "CMR Art. 23: damage = cargo value at dispatch (invoice) + expenses (transport, customs). Maximum: 8.33 SDR × gross weight kg. No indirect losses paid."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Claim de la 5 destinatari diferiți pentru același transport. Marfa era OK la încărcare. Cum investighezi și aloci răspunderea?",
      de: "Claims von 5 verschiedenen Empfängern für denselben Transport. Ware war bei Beladung OK. Wie untersuchst und verteilst du die Haftung?",
      en: "Claims from 5 different consignees for the same transport. Cargo was OK at loading. How do you investigate and allocate liability?"
    },
    options: {
      ro: ["Refuzi toate", "Analizezi: ordinea livrărilor, ce daune la fiecare, starea la încărcare, manipulare pe parcurs, repartizare pe evidențe", "Plătești toate", "Doar primul claim"],
      de: ["Alle ablehnen", "Analysieren: Lieferreihenfolge, welche Schäden bei jedem, Zustand bei Beladung, Handhabung unterwegs, Verteilung nach Beweisen", "Alle zahlen", "Nur erster Claim"],
      en: ["Refuse all", "Analyze: delivery sequence, what damages at each, condition at loading, handling en route, allocation by evidence", "Pay all", "Only first claim"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Investigație multi-drop: verifică CMR încărcare (curat?), ordinea livrărilor, rezerve la fiecare, cum s-a manipulat, identifică când/unde s-a produs dauna, alocă proporțional.",
      de: "Multi-Drop-Untersuchung: Beladungs-CMR prüfen (sauber?), Lieferreihenfolge, Vorbehalte bei jedem, wie gehandhabt, identifizieren wann/wo Schaden entstand, proportional zuweisen.",
      en: "Multi-drop investigation: check loading CMR (clean?), delivery sequence, reservations at each, how handled, identify when/where damage occurred, allocate proportionally."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă subrogație în contextul claims?",
      de: "Was bedeutet Subrogation im Claims-Kontext?",
      en: "What does subrogation mean in the claims context?"
    },
    options: {
      ro: ["Transmitere claim", "Dreptul asigurătorului de a recupera de la vinovat sumele plătite asiguratului", "Anulare claim", "Plată parțială"],
      de: ["Claim-Übertragung", "Recht des Versicherers vom Schuldigen Beträge zurückzufordern die an Versicherten gezahlt wurden", "Claim-Stornierung", "Teilzahlung"],
      en: ["Claim transfer", "Right of insurer to recover from wrongdoer amounts paid to insured", "Claim cancellation", "Partial payment"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Subrogație: asigurătorul plătește clientului, apoi urmărește transportatorul pentru recuperare. Expeditorul poate primi claim de subrogație de la asigurător.",
      de: "Subrogation: Versicherer zahlt Kunden, verfolgt dann Transportunternehmer zur Rückforderung. Spediteur kann Subrogations-Claim vom Versicherer erhalten.",
      en: "Subrogation: insurer pays client, then pursues carrier for recovery. Forwarder may receive subrogation claim from insurer."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi un claim când transportatorul subcontractor a cauzat dauna?",
      de: "Wie managst du einen Claim wenn der subunternehmerische Carrier den Schaden verursacht hat?",
      en: "How do you manage a claim when the subcontracted carrier caused the damage?"
    },
    options: {
      ro: ["Trimiți clientul la el", "Tu răspunzi față de client, apoi exerciți regres împotriva transportatorului", "Nu ești responsabil", "Doar îl informezi"],
      de: ["Kunden an ihn verweisen", "Du haftest gegenüber Kunde, übst dann Regress gegen Carrier aus", "Du bist nicht verantwortlich", "Nur informieren"],
      en: ["Send client to them", "You're liable to client, then exercise recourse against carrier", "You're not responsible", "Only inform them"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Răspundere: expeditorul răspunde față de client pentru întregul lanț. Gestionezi claim-ul cu clientul, apoi regres contra transportatorului vinovat (back-to-back).",
      de: "Haftung: Spediteur haftet gegenüber Kunde für gesamte Kette. Claim mit Kunde managen, dann Regress gegen schuldigen Carrier (Back-to-Back).",
      en: "Liability: forwarder liable to client for entire chain. Manage claim with client, then recourse against guilty carrier (back-to-back)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Claim de întârziere: linie de producție oprită, client cere 500.000€ daune indirecte. Sunt acoperite de CMR?",
      de: "Verzögerungs-Claim: Produktionslinie gestoppt, Kunde fordert 500.000€ indirekte Schäden. Sind sie durch CMR gedeckt?",
      en: "Delay claim: production line stopped, client claims €500,000 indirect damages. Are they covered by CMR?"
    },
    options: {
      ro: ["Da, integral", "Nu, CMR Art. 23 exclude daunele indirecte; maxim costul transportului", "Doar 50%", "Doar dacă e în contract"],
      de: ["Ja, vollständig", "Nein, CMR Art. 23 schließt indirekte Schäden aus; maximal Transportkosten", "Nur 50%", "Nur wenn im Vertrag"],
      en: ["Yes, fully", "No, CMR Art. 23 excludes indirect damages; maximum transport cost", "Only 50%", "Only if in contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR Art. 23(5): pentru întârziere, despăgubirea maximă = prețul transportului. Daunele indirecte (pierderi producție) nu sunt acoperite decât dacă declarat valoare specială (Art. 26).",
      de: "CMR Art. 23(5): bei Verzögerung maximale Entschädigung = Transportpreis. Indirekte Schäden (Produktionsausfall) nicht gedeckt außer Sonderwertdeklaration (Art. 26).",
      en: "CMR Art. 23(5): for delay, maximum compensation = transport price. Indirect damages (production losses) not covered unless special value declared (Art. 26)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt cauzele de exonerare a transportatorului conform CMR?",
      de: "Was sind Haftungsbefreiungsgründe des Transportunternehmers gemäß CMR?",
      en: "What are the carrier's exemption causes according to CMR?"
    },
    options: {
      ro: ["Niciuna", "Viciu propriu marfă, instrucțiuni expeditor, forță majoră, ambalaj deficitar", "Doar accidentele", "Doar vremea"],
      de: ["Keine", "Inhärenter Warenmangel, Absenderanweisungen, höhere Gewalt, mangelhafte Verpackung", "Nur Unfälle", "Nur Wetter"],
      en: ["None", "Inherent cargo defect, sender instructions, force majeure, deficient packaging", "Only accidents", "Only weather"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR Art. 17(2): transportatorul nu răspunde pentru: defect inerent mărfii, instrucțiuni ale expeditorului, forță majoră, ambalaj necorespunzător de la expeditor.",
      de: "CMR Art. 17(2): Carrier haftet nicht für: inhärenten Warenmangel, Absenderanweisungen, höhere Gewalt, unzureichende Verpackung vom Absender.",
      en: "CMR Art. 17(2): carrier not liable for: inherent cargo defect, sender instructions, force majeure, inadequate packaging from sender."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi un claim respins de asigurător?",
      de: "Wie managst du einen vom Versicherer abgelehnten Claim?",
      en: "How do you handle a claim rejected by insurer?"
    },
    options: {
      ro: ["Renunți", "Analizezi motivul refuzului, contești cu documente, escaladezi, eventual arbitraj/instanță", "Doar accepți", "Plătești din buzunar"],
      de: ["Aufgeben", "Ablehnungsgrund analysieren, mit Dokumenten anfechten, eskalieren, eventuell Schiedsverfahren/Gericht", "Nur akzeptieren", "Aus eigener Tasche zahlen"],
      en: ["Give up", "Analyze rejection reason, contest with documents, escalate, possibly arbitration/court", "Only accept", "Pay from own pocket"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Claim respins: analizează motivul (exclusiune, documentație incompletă?), furnizează probe suplimentare, escaladează la management asigurător, eventual mediator/instanță.",
      de: "Abgelehnter Claim: Grund analysieren (Ausschluss, unvollständige Dokumentation?), zusätzliche Beweise liefern, an Versicherer-Management eskalieren, eventuell Mediator/Gericht.",
      en: "Rejected claim: analyze reason (exclusion, incomplete documentation?), provide additional evidence, escalate to insurer management, possibly mediator/court."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare sistem de claims management pentru companie cu 500 claims/an. Funcționalități și KPIs?",
      de: "Implementierung Claims-Management-System für Unternehmen mit 500 Claims/Jahr. Funktionalitäten und KPIs?",
      en: "Implementing claims management system for company with 500 claims/year. Functionalities and KPIs?"
    },
    options: {
      ro: ["Doar Excel", "Tracking complet, workflow automatizat, document management, raportare, analytics, integrare asigurător", "Doar email", "Doar pe hârtie"],
      de: ["Nur Excel", "Vollständiges Tracking, automatisierter Workflow, Dokumentenmanagement, Berichterstattung, Analytics, Versichererintegration", "Nur E-Mail", "Nur Papier"],
      en: ["Only Excel", "Full tracking, automated workflow, document management, reporting, analytics, insurer integration", "Only email", "Only paper"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Claims system: înregistrare centralizată, workflow (termene, escaladări), document repository, dashboard (claims deschise, valoare, aging), analytics (trend, cauze), API asigurători.",
      de: "Claims-System: zentrale Erfassung, Workflow (Fristen, Eskalationen), Dokumentenrepository, Dashboard (offene Claims, Wert, Aging), Analytics (Trend, Ursachen), Versicherer-API.",
      en: "Claims system: centralized registration, workflow (deadlines, escalations), document repository, dashboard (open claims, value, aging), analytics (trend, causes), insurer API."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un POD (Proof of Delivery) și de ce e important pentru claims?",
      de: "Was ist ein POD (Proof of Delivery) und warum ist er für Claims wichtig?",
      en: "What is a POD (Proof of Delivery) and why is it important for claims?"
    },
    options: {
      ro: ["Document bancar", "Dovada livrării cu semnătura destinatarului, crucială pentru a demonstra starea la livrare", "Factură", "Contract"],
      de: ["Bankdokument", "Liefernachweis mit Empfängerunterschrift, entscheidend um Zustand bei Lieferung zu beweisen", "Rechnung", "Vertrag"],
      en: ["Bank document", "Delivery proof with consignee signature, crucial to demonstrate condition at delivery", "Invoice", "Contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "POD: confirmă livrarea, data/ora, cine a semnat, starea mărfii. POD curat = marfa OK. POD cu rezerve = probleme notate. Esențial pentru orice claim.",
      de: "POD: bestätigt Lieferung, Datum/Uhrzeit, wer unterschrieben hat, Warenzustand. Sauberer POD = Ware OK. POD mit Vorbehalten = notierte Probleme. Wesentlich für jeden Claim.",
      en: "POD: confirms delivery, date/time, who signed, cargo condition. Clean POD = cargo OK. POD with reservations = noted problems. Essential for any claim."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum negociezi settlement-ul unui claim complex?",
      de: "Wie verhandelst du die Beilegung eines komplexen Claims?",
      en: "How do you negotiate the settlement of a complex claim?"
    },
    options: {
      ro: ["Doar instanță", "Analiză juridică, evaluare șanse, propunere settlement rezonabilă, negociere incrementală, documentare acord", "Doar amenințări", "Doar cedezi"],
      de: ["Nur Gericht", "Juristische Analyse, Chancenbewertung, vernünftiger Settlement-Vorschlag, inkrementelle Verhandlung, Vereinbarungsdokumentation", "Nur Drohungen", "Nur nachgeben"],
      en: ["Only court", "Legal analysis, chances assessment, reasonable settlement proposal, incremental negotiation, agreement documentation", "Only threats", "Only give in"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Negociere settlement: analizează tăria cazului, calculează worst/best case, propune settlement în zonă rezonabilă, negociază cu argumente, documentează acordul scris.",
      de: "Settlement-Verhandlung: Fallstärke analysieren, Worst/Best Case berechnen, Settlement in vernünftiger Zone vorschlagen, mit Argumenten verhandeln, Vereinbarung schriftlich dokumentieren.",
      en: "Settlement negotiation: analyze case strength, calculate worst/best case, propose settlement in reasonable zone, negotiate with arguments, document agreement in writing."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Analiză claims history: 200 claims/an, valoare 500.000€, costuri administrare 100.000€. Cum reduci?",
      de: "Claims-Historienanalyse: 200 Claims/Jahr, Wert 500.000€, Verwaltungskosten 100.000€. Wie reduzierst du?",
      en: "Claims history analysis: 200 claims/year, value €500,000, admin costs €100,000. How do you reduce?"
    },
    options: {
      ro: ["Nu se poate reduce", "Root cause analysis, acțiuni preventive, îmbunătățire carrier selection, training, automatizare procesare", "Doar refuzi claims", "Doar schimbi asigurătorul"],
      de: ["Kann nicht reduziert werden", "Root Cause Analysis, Präventivmaßnahmen, Carrier-Auswahl verbessern, Training, Verarbeitungsautomatisierung", "Nur Claims ablehnen", "Nur Versicherer wechseln"],
      en: ["Cannot be reduced", "Root cause analysis, preventive actions, improve carrier selection, training, processing automation", "Only refuse claims", "Only change insurer"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reducere claims: analiză top 10 cauze (handling, reefer, ambalaj), acțiuni targetate, îmbunătățire screening carrier, training echipe, automatizare pentru eficiență.",
      de: "Claims-Reduktion: Analyse Top 10 Ursachen (Handling, Reefer, Verpackung), gezielte Maßnahmen, verbessertes Carrier-Screening, Teamtraining, Automatisierung für Effizienz.",
      en: "Claims reduction: analyze top 10 causes (handling, reefer, packaging), targeted actions, improved carrier screening, team training, automation for efficiency."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este prescripția în claims de transport?",
      de: "Was ist Verjährung bei Transportclaims?",
      en: "What is the statute of limitations in transport claims?"
    },
    options: {
      ro: ["Nu există", "Termenul legal după care nu mai poți formula claim în instanță (1 an CMR, 3 ani altele)", "Doar 30 zile", "Nelimitat"],
      de: ["Gibt es nicht", "Gesetzliche Frist nach der kein Claim mehr vor Gericht gestellt werden kann (1 Jahr CMR, 3 Jahre andere)", "Nur 30 Tage", "Unbegrenzt"],
      en: ["Doesn't exist", "Legal deadline after which you can no longer file claim in court (1 year CMR, 3 years others)", "Only 30 days", "Unlimited"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prescripție CMR: 1 an de la livrare (3 ani pentru dol). După termen, dreptul de a acționa în instanță se pierde. Monitorizează termenele!",
      de: "CMR-Verjährung: 1 Jahr ab Lieferung (3 Jahre bei Vorsatz). Nach Frist geht Recht auf Klage verloren. Fristen überwachen!",
      en: "CMR limitation: 1 year from delivery (3 years for willful misconduct). After deadline, right to sue is lost. Monitor deadlines!"
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum pregătești un dosar de claim pentru potențial litigiu?",
      de: "Wie bereitest du eine Claim-Akte für potenziellen Rechtsstreit vor?",
      en: "How do you prepare a claim file for potential litigation?"
    },
    options: {
      ro: ["Doar email-uri", "Documente originale ordonate cronologic, timeline fapte, probe, corespondență completă, opinie juridică", "Doar factura", "Doar CMR"],
      de: ["Nur E-Mails", "Chronologisch geordnete Originaldokumente, Fakten-Timeline, Beweise, vollständige Korrespondenz, Rechtsgutachten", "Nur Rechnung", "Nur CMR"],
      en: ["Only emails", "Original documents chronologically ordered, facts timeline, evidence, complete correspondence, legal opinion", "Only invoice", "Only CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dosar litigiu: toate documentele originale, cronologie detaliată a evenimentelor, probe fotografice, toată corespondența, evaluări experți, opinie juridică preliminară.",
      de: "Rechtsstreit-Akte: alle Originaldokumente, detaillierte Ereignischronologie, Fotobeweise, gesamte Korrespondenz, Expertenbewertungen, vorläufiges Rechtsgutachten.",
      en: "Litigation file: all original documents, detailed event chronology, photo evidence, all correspondence, expert assessments, preliminary legal opinion."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare politică de claims handling care să reducă litigiile și să mențină relațiile cu clienții. Principii cheie?",
      de: "Entwicklung Claims-Handling-Politik zur Reduzierung von Rechtsstreitigkeiten bei Erhalt der Kundenbeziehungen. Schlüsselprinzipien?",
      en: "Developing claims handling policy that reduces litigation and maintains client relationships. Key principles?"
    },
    options: {
      ro: ["Refuz tot", "Răspuns rapid, investigație obiectivă, comunicare transparentă, settlement fair când e cazul, lessons learned", "Plătește tot", "Ignoră tot"],
      de: ["Alles ablehnen", "Schnelle Reaktion, objektive Untersuchung, transparente Kommunikation, faire Settlement wenn angebracht, Lessons Learned", "Alles zahlen", "Alles ignorieren"],
      en: ["Refuse everything", "Quick response, objective investigation, transparent communication, fair settlement when appropriate, lessons learned", "Pay everything", "Ignore everything"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Politică claims: acknowledge 24h, investigație imparțială, comunicare continuă, settlement rezonabil când răspunzi, refuz motivat când nu, feedback pentru prevenție.",
      de: "Claims-Politik: 24h-Bestätigung, unparteiische Untersuchung, kontinuierliche Kommunikation, vernünftiges Settlement wenn haftbar, begründete Ablehnung wenn nicht, Feedback zur Prävention.",
      en: "Claims policy: 24h acknowledgment, impartial investigation, continuous communication, reasonable settlement when liable, reasoned refusal when not, feedback for prevention."
    }
  }
];
