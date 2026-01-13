import { QuizQuestion } from '../quizData';

export const riskManagementQuestions: Record<string, QuizQuestion[]> = {
  ro: [
    {
      question: "Care sunt cele 4 etape principale ale managementului riscurilor?",
      options: ["Plan, Do, Check, Act", "Identificare, Evaluare, Mitigare, Monitorizare", "Prevent, Detect, Respond, Recover", "Analyze, Design, Implement, Review"],
      correctIndex: 1,
      explanation: "Ciclul de management al riscurilor: Identificare, Evaluare, Mitigare, Monitorizare."
    },
    {
      question: "Ce reprezintă riscul operațional în transport?",
      options: ["Doar riscul financiar", "Riscuri legate de operațiunile zilnice", "Doar riscul de reputație", "Riscul de piață"],
      correctIndex: 1,
      explanation: "Riscul operațional include întârzieri, avarii, erori în documentație, probleme tehnice."
    },
    {
      question: "Care este prima acțiune la identificarea unui risc major?",
      options: ["Ignorarea", "Documentarea și raportarea imediată", "Așteptarea să se rezolve singur", "Transferarea responsabilității"],
      correctIndex: 1,
      explanation: "Documentarea și raportarea permite acțiune rapidă și coordonată."
    },
    {
      question: "Ce este matricea de risc?",
      options: ["Lista clienților", "Instrument de evaluare probabilitate x impact", "Raport financiar", "Plan de transport"],
      correctIndex: 1,
      explanation: "Matricea evaluează riscurile pe axele probabilitate și impact pentru prioritizare."
    },
    {
      question: "Care risc are prioritate maximă în matrice?",
      options: ["Probabilitate mică, impact mic", "Probabilitate mare, impact mare", "Orice risc nou", "Cel mai vechi risc"],
      correctIndex: 1,
      explanation: "Riscurile cu probabilitate și impact mare necesită acțiune imediată."
    },
    {
      question: "Ce strategie de mitigare transferă riscul către terți?",
      options: ["Evitare", "Asigurare", "Acceptare", "Reducere"],
      correctIndex: 1,
      explanation: "Asigurarea transferă consecințele financiare ale riscului către asigurator."
    },
    {
      question: "Care este un exemplu de risc de conformitate?",
      options: ["Întârziere livrare", "Încălcarea timpilor de conducere", "Defecțiune vehicul", "Client nemulțumit"],
      correctIndex: 1,
      explanation: "Încălcarea regulamentelor (timpi conducere, ADR, cabotaj) este risc de conformitate."
    },
    {
      question: "Ce verificare reduce riscul de fraudă cu transportatori?",
      options: ["Doar verificarea prețului", "Due diligence complet", "Verificarea culorii vehiculului", "Nicio verificare"],
      correctIndex: 1,
      explanation: "Due diligence include verificarea licențelor, asigurărilor, referințelor, istoricului."
    },
    {
      question: "Care indicator arată un transportator cu risc ridicat?",
      options: ["Prețuri competitive", "Lipsă asigurare CMR validă", "Flotă mare", "Experiență lungă"],
      correctIndex: 1,
      explanation: "Lipsa asigurării CMR valide este un semnal major de alarmă."
    },
    {
      question: "Ce este un plan de continuitate a afacerii (BCP)?",
      options: ["Plan de marketing", "Plan pentru menținerea operațiunilor în criză", "Plan de expansiune", "Plan de concediere"],
      correctIndex: 1,
      explanation: "BCP asigură că afacerea poate continua în situații de criză majoră."
    },
    {
      question: "Care risc financiar este specific transportului internațional?",
      options: ["Salariile angajaților", "Fluctuația cursului valutar", "Prețul birourilor", "Costul IT"],
      correctIndex: 1,
      explanation: "Cursul valutar afectează semnificativ profitabilitatea transporturilor internaționale."
    },
    {
      question: "Cum se mitigă riscul de neplată a clienților?",
      options: ["Acordarea creditului nelimitat", "Credit check și limite de credit", "Ignorarea istoricului", "Acceptarea oricărui client"],
      correctIndex: 1,
      explanation: "Verificarea creditului și stabilirea limitelor protejează împotriva neplăților."
    },
    {
      question: "Ce reprezintă riscul de reputație?",
      options: ["Risc financiar", "Daune aduse imaginii companiei", "Risc tehnic", "Risc legal"],
      correctIndex: 1,
      explanation: "Riscul de reputație afectează percepția clienților și partenerilor despre companie."
    },
    {
      question: "Care document protejează juridic în cazul disputelor?",
      options: ["Email informal", "Contract clar cu termeni și condiții", "Conversație telefonică", "Acordul verbal"],
      correctIndex: 1,
      explanation: "Contractele scrise cu termeni clari oferă protecție juridică."
    },
    {
      question: "Ce acțiune se ia pentru un risc cu probabilitate mică dar impact mare?",
      options: ["Ignorare", "Pregătirea unui plan de contingență", "Acceptare totală", "Transfer imediat"],
      correctIndex: 1,
      explanation: "Riscurile rare dar severe necesită planuri de contingență pregătite."
    },
    {
      question: "Care este riscul principal al dependenței de un singur client mare?",
      options: ["Profituri mari", "Vulnerabilitate la pierderea clientului", "Operațiuni simplificate", "Costuri reduse"],
      correctIndex: 1,
      explanation: "Dependența de un client pune afacerea în pericol dacă acesta pleacă."
    },
    {
      question: "Cum se reduce riscul de furt al mărfurilor?",
      options: ["Transport mai lent", "GPS tracking și proceduri de securitate", "Prețuri mai mici", "Mai puțină comunicare"],
      correctIndex: 1,
      explanation: "Tracking-ul GPS și procedurile stricte de securitate reduc riscul de furt."
    },
    {
      question: "Ce este due diligence pentru un transportator nou?",
      options: ["Doar negocierea prețului", "Verificarea completă a credențialelor", "Acceptarea imediată", "Verificarea doar a vehiculului"],
      correctIndex: 1,
      explanation: "Due diligence include licențe, asigurări, referințe, capacitate, istoric."
    },
    {
      question: "Care risc este specific transportului ADR?",
      options: ["Întârzieri normale", "Incidente cu substanțe periculoase", "Probleme administrative", "Costuri de parcare"],
      correctIndex: 1,
      explanation: "Transportul ADR implică riscuri de accidente cu substanțe periculoase."
    },
    {
      question: "Ce măsură previne riscul de supraîncărcare?",
      options: ["Încărcare fără cântărire", "Verificarea greutății la cântare", "Estimare vizuală", "Încredere în expeditor"],
      correctIndex: 1,
      explanation: "Cântărirea verifică respectarea limitelor legale de greutate."
    },
    {
      question: "Care este riscul principal al lipsei backup-ului de date?",
      options: ["Costuri IT mai mici", "Pierderea permanentă a informațiilor critice", "Sisteme mai rapide", "Mai puțină complexitate"],
      correctIndex: 1,
      explanation: "Fără backup, datele critice pot fi pierdute permanent în caz de defecțiune."
    },
    {
      question: "Ce strategie reduce riscul de dependență de un singur transportator?",
      options: ["Exclusivitate", "Diversificarea bazei de transportatori", "Contracte pe viață", "Prețuri foarte mici"],
      correctIndex: 1,
      explanation: "O bază diversificată de transportatori asigură alternative în caz de probleme."
    },
    {
      question: "Care document trebuie verificat pentru transportatorii UE?",
      options: ["Doar permisul șoferului", "Licența comunitară și asigurarea CMR", "Doar numărul de înmatriculare", "Doar culoarea vehiculului"],
      correctIndex: 1,
      explanation: "Licența comunitară și asigurarea CMR sunt obligatorii pentru transport internațional."
    },
    {
      question: "Ce risc implică timpii de așteptare prelungiți?",
      options: ["Profituri mai mari", "Costuri suplimentare și întârzieri în lanț", "Relații mai bune", "Mai mult timp de odihnă"],
      correctIndex: 1,
      explanation: "Așteptările prelungite generează costuri și pot cauza întârzieri în cascadă."
    },
    {
      question: "Care este prima linie de apărare împotriva riscurilor?",
      options: ["Asigurarea", "Prevenția și procedurile", "Procesele juridice", "Ignorarea"],
      correctIndex: 1,
      explanation: "Prevenția prin proceduri clare este mai eficientă decât reacția post-eveniment."
    },
    {
      question: "Ce reprezintă toleranța la risc a companiei?",
      options: ["Acceptarea oricărui risc", "Nivelul de risc acceptabil pentru organizație", "Evitarea totală a riscurilor", "Riscul maxim posibil"],
      correctIndex: 1,
      explanation: "Toleranța la risc definește ce nivel de risc este acceptabil pentru companie."
    },
    {
      question: "Care indicator sugerează probleme financiare la un client?",
      options: ["Comenzi frecvente", "Întârzieri repetate la plată", "Comunicare bună", "Volum mare"],
      correctIndex: 1,
      explanation: "Întârzierile repetate la plată pot indica probleme de cash flow."
    },
    {
      question: "Ce este escaladarea în managementul riscurilor?",
      options: ["Ignorarea problemei", "Raportarea către nivel superior când se depășesc limite", "Rezolvarea singur", "Amânarea deciziei"],
      correctIndex: 1,
      explanation: "Escaladarea asigură că riscurile majore ajung la decidenții potriviți."
    },
    {
      question: "Care risc este specific sezonului de iarnă?",
      options: ["Căldură excesivă", "Condiții meteo adverse și drumuri blocate", "Trafic redus", "Cerere scăzută"],
      correctIndex: 1,
      explanation: "Iarna aduce riscuri de drumuri înzăpezite, blocaje și întârzieri."
    },
    {
      question: "Ce este risk appetite diferit de risk tolerance?",
      options: ["Sunt identice", "Appetite = dorință de risc, tolerance = limită acceptată", "Appetite = evitare, tolerance = acceptare", "Nu există diferență"],
      correctIndex: 1,
      explanation: "Risk appetite este cât risc vrei să-ți asumi; tolerance este cât poți suporta."
    }
  ],
  de: [
    {
      question: "Was sind die 4 Hauptphasen des Risikomanagements?",
      options: ["Plan, Do, Check, Act", "Identifizierung, Bewertung, Minderung, Überwachung", "Prevent, Detect, Respond, Recover", "Analyze, Design, Implement, Review"],
      correctIndex: 1,
      explanation: "Risikomanagement-Zyklus: Identifizierung, Bewertung, Minderung, Überwachung."
    },
    {
      question: "Was bedeutet operationelles Risiko im Transport?",
      options: ["Nur finanzielles Risiko", "Risiken im täglichen Betrieb", "Nur Reputationsrisiko", "Marktrisiko"],
      correctIndex: 1,
      explanation: "Operationelles Risiko umfasst Verspätungen, Schäden, Dokumentationsfehler, technische Probleme."
    },
    {
      question: "Was ist die erste Maßnahme bei Identifizierung eines großen Risikos?",
      options: ["Ignorieren", "Sofortige Dokumentation und Meldung", "Warten dass es sich löst", "Verantwortung übertragen"],
      correctIndex: 1,
      explanation: "Dokumentation und Meldung ermöglichen schnelles, koordiniertes Handeln."
    },
    {
      question: "Was ist eine Risikomatrix?",
      options: ["Kundenliste", "Bewertungsinstrument Wahrscheinlichkeit x Auswirkung", "Finanzbericht", "Transportplan"],
      correctIndex: 1,
      explanation: "Die Matrix bewertet Risiken nach Wahrscheinlichkeit und Auswirkung zur Priorisierung."
    },
    {
      question: "Welches Risiko hat höchste Priorität in der Matrix?",
      options: ["Geringe Wahrscheinlichkeit, geringe Auswirkung", "Hohe Wahrscheinlichkeit, hohe Auswirkung", "Jedes neue Risiko", "Das älteste Risiko"],
      correctIndex: 1,
      explanation: "Risiken mit hoher Wahrscheinlichkeit und Auswirkung erfordern sofortiges Handeln."
    },
    {
      question: "Welche Minderungsstrategie überträgt Risiko an Dritte?",
      options: ["Vermeidung", "Versicherung", "Akzeptanz", "Reduzierung"],
      correctIndex: 1,
      explanation: "Versicherung überträgt die finanziellen Folgen des Risikos an den Versicherer."
    },
    {
      question: "Was ist ein Beispiel für Compliance-Risiko?",
      options: ["Lieferverzögerung", "Verstoß gegen Lenkzeiten", "Fahrzeugpanne", "Unzufriedener Kunde"],
      correctIndex: 1,
      explanation: "Verstöße gegen Vorschriften (Lenkzeiten, ADR, Kabotage) sind Compliance-Risiken."
    },
    {
      question: "Welche Prüfung reduziert das Betrugsrisiko bei Spediteuren?",
      options: ["Nur Preisprüfung", "Vollständige Due Diligence", "Fahrzeugfarbprüfung", "Keine Prüfung"],
      correctIndex: 1,
      explanation: "Due Diligence umfasst Prüfung von Lizenzen, Versicherungen, Referenzen, Historie."
    },
    {
      question: "Welcher Indikator zeigt einen Hochrisiko-Spediteur?",
      options: ["Wettbewerbsfähige Preise", "Fehlende gültige CMR-Versicherung", "Große Flotte", "Lange Erfahrung"],
      correctIndex: 1,
      explanation: "Fehlende gültige CMR-Versicherung ist ein wichtiges Warnsignal."
    },
    {
      question: "Was ist ein Business Continuity Plan (BCP)?",
      options: ["Marketingplan", "Plan zur Aufrechterhaltung des Betriebs in Krisen", "Expansionsplan", "Entlassungsplan"],
      correctIndex: 1,
      explanation: "BCP stellt sicher, dass das Unternehmen in größeren Krisensituationen weiterlaufen kann."
    },
    {
      question: "Welches finanzielle Risiko ist spezifisch für internationalen Transport?",
      options: ["Mitarbeitergehälter", "Wechselkursschwankungen", "Bürokosten", "IT-Kosten"],
      correctIndex: 1,
      explanation: "Wechselkurse beeinflussen die Rentabilität internationaler Transporte erheblich."
    },
    {
      question: "Wie wird das Zahlungsausfallrisiko bei Kunden gemindert?",
      options: ["Unbegrenzter Kredit", "Bonitätsprüfung und Kreditlimits", "Historie ignorieren", "Jeden Kunden akzeptieren"],
      correctIndex: 1,
      explanation: "Bonitätsprüfung und Kreditlimits schützen vor Zahlungsausfällen."
    },
    {
      question: "Was bedeutet Reputationsrisiko?",
      options: ["Finanzielles Risiko", "Schaden am Unternehmensimage", "Technisches Risiko", "Rechtliches Risiko"],
      correctIndex: 1,
      explanation: "Reputationsrisiko beeinflusst, wie Kunden und Partner das Unternehmen wahrnehmen."
    },
    {
      question: "Welches Dokument bietet rechtlichen Schutz bei Streitigkeiten?",
      options: ["Informelle E-Mail", "Klarer Vertrag mit Geschäftsbedingungen", "Telefonat", "Mündliche Vereinbarung"],
      correctIndex: 1,
      explanation: "Schriftliche Verträge mit klaren Bedingungen bieten rechtlichen Schutz."
    },
    {
      question: "Welche Maßnahme wird bei geringer Wahrscheinlichkeit aber hoher Auswirkung ergriffen?",
      options: ["Ignorieren", "Notfallplan vorbereiten", "Vollständige Akzeptanz", "Sofortiger Transfer"],
      correctIndex: 1,
      explanation: "Seltene aber schwere Risiken erfordern vorbereitete Notfallpläne."
    },
    {
      question: "Was ist das Hauptrisiko der Abhängigkeit von einem großen Kunden?",
      options: ["Hohe Gewinne", "Verwundbarkeit bei Kundenverlust", "Vereinfachte Abläufe", "Reduzierte Kosten"],
      correctIndex: 1,
      explanation: "Abhängigkeit von einem Kunden gefährdet das Geschäft bei dessen Abgang."
    },
    {
      question: "Wie wird das Diebstahlrisiko bei Waren reduziert?",
      options: ["Langsamerer Transport", "GPS-Tracking und Sicherheitsverfahren", "Niedrigere Preise", "Weniger Kommunikation"],
      correctIndex: 1,
      explanation: "GPS-Tracking und strenge Sicherheitsverfahren reduzieren das Diebstahlrisiko."
    },
    {
      question: "Was ist Due Diligence für einen neuen Spediteur?",
      options: ["Nur Preisverhandlung", "Vollständige Überprüfung der Referenzen", "Sofortige Annahme", "Nur Fahrzeugprüfung"],
      correctIndex: 1,
      explanation: "Due Diligence umfasst Lizenzen, Versicherungen, Referenzen, Kapazität, Historie."
    },
    {
      question: "Welches Risiko ist spezifisch für ADR-Transport?",
      options: ["Normale Verzögerungen", "Unfälle mit Gefahrstoffen", "Administrative Probleme", "Parkkosten"],
      correctIndex: 1,
      explanation: "ADR-Transport birgt Risiken von Unfällen mit Gefahrstoffen."
    },
    {
      question: "Welche Maßnahme verhindert Überladungsrisiko?",
      options: ["Laden ohne Wiegen", "Gewichtskontrolle an der Waage", "Visuelle Schätzung", "Vertrauen auf Versender"],
      correctIndex: 1,
      explanation: "Wiegen prüft die Einhaltung der gesetzlichen Gewichtsgrenzen."
    },
    {
      question: "Was ist das Hauptrisiko bei fehlendem Daten-Backup?",
      options: ["Niedrigere IT-Kosten", "Permanenter Verlust kritischer Informationen", "Schnellere Systeme", "Weniger Komplexität"],
      correctIndex: 1,
      explanation: "Ohne Backup können kritische Daten bei Ausfall dauerhaft verloren gehen."
    },
    {
      question: "Welche Strategie reduziert die Abhängigkeit von einem Spediteur?",
      options: ["Exklusivität", "Diversifizierung der Spediteursbasis", "Lebenslange Verträge", "Sehr niedrige Preise"],
      correctIndex: 1,
      explanation: "Eine diversifizierte Spediteursbasis bietet Alternativen bei Problemen."
    },
    {
      question: "Welches Dokument muss bei EU-Spediteuren geprüft werden?",
      options: ["Nur Führerschein", "Gemeinschaftslizenz und CMR-Versicherung", "Nur Kennzeichen", "Nur Fahrzeugfarbe"],
      correctIndex: 1,
      explanation: "Gemeinschaftslizenz und CMR-Versicherung sind für internationalen Transport obligatorisch."
    },
    {
      question: "Welches Risiko bergen verlängerte Wartezeiten?",
      options: ["Höhere Gewinne", "Zusätzliche Kosten und Kettenverzögerungen", "Bessere Beziehungen", "Mehr Ruhezeit"],
      correctIndex: 1,
      explanation: "Längeres Warten verursacht Kosten und kann Kettenverzögerungen auslösen."
    },
    {
      question: "Was ist die erste Verteidigungslinie gegen Risiken?",
      options: ["Versicherung", "Prävention und Verfahren", "Rechtliche Schritte", "Ignorieren"],
      correctIndex: 1,
      explanation: "Prävention durch klare Verfahren ist effektiver als Reaktion nach dem Ereignis."
    },
    {
      question: "Was bedeutet Risikotoleranz des Unternehmens?",
      options: ["Akzeptanz jedes Risikos", "Akzeptables Risikoniveau für die Organisation", "Vollständige Risikovermeidung", "Maximal mögliches Risiko"],
      correctIndex: 1,
      explanation: "Risikotoleranz definiert, welches Risikoniveau für das Unternehmen akzeptabel ist."
    },
    {
      question: "Welcher Indikator deutet auf finanzielle Probleme bei einem Kunden hin?",
      options: ["Häufige Bestellungen", "Wiederholte Zahlungsverzögerungen", "Gute Kommunikation", "Hohes Volumen"],
      correctIndex: 1,
      explanation: "Wiederholte Zahlungsverzögerungen können auf Cashflow-Probleme hindeuten."
    },
    {
      question: "Was ist Eskalation im Risikomanagement?",
      options: ["Problem ignorieren", "Meldung an höhere Ebene bei Grenzüberschreitung", "Allein lösen", "Entscheidung aufschieben"],
      correctIndex: 1,
      explanation: "Eskalation stellt sicher, dass große Risiken die richtigen Entscheider erreichen."
    },
    {
      question: "Welches Risiko ist spezifisch für die Wintersaison?",
      options: ["Übermäßige Hitze", "Widrige Wetterbedingungen und blockierte Straßen", "Reduzierter Verkehr", "Geringe Nachfrage"],
      correctIndex: 1,
      explanation: "Der Winter bringt Risiken durch verschneite Straßen, Blockaden und Verzögerungen."
    },
    {
      question: "Was unterscheidet Risk Appetite von Risk Tolerance?",
      options: ["Sie sind identisch", "Appetite = Risikowille, Tolerance = akzeptierte Grenze", "Appetite = Vermeidung, Tolerance = Akzeptanz", "Kein Unterschied"],
      correctIndex: 1,
      explanation: "Risk Appetite ist wie viel Risiko man eingehen will; Tolerance ist wie viel man ertragen kann."
    }
  ],
  en: [
    {
      question: "What are the 4 main stages of risk management?",
      options: ["Plan, Do, Check, Act", "Identify, Assess, Mitigate, Monitor", "Prevent, Detect, Respond, Recover", "Analyze, Design, Implement, Review"],
      correctIndex: 1,
      explanation: "Risk management cycle: Identify, Assess, Mitigate, Monitor."
    },
    {
      question: "What does operational risk mean in transport?",
      options: ["Only financial risk", "Risks related to daily operations", "Only reputation risk", "Market risk"],
      correctIndex: 1,
      explanation: "Operational risk includes delays, damages, documentation errors, technical issues."
    },
    {
      question: "What is the first action when identifying a major risk?",
      options: ["Ignore it", "Immediate documentation and reporting", "Wait for it to resolve itself", "Transfer responsibility"],
      correctIndex: 1,
      explanation: "Documentation and reporting enables quick, coordinated action."
    },
    {
      question: "What is a risk matrix?",
      options: ["Customer list", "Assessment tool for probability x impact", "Financial report", "Transport plan"],
      correctIndex: 1,
      explanation: "The matrix evaluates risks on probability and impact axes for prioritization."
    },
    {
      question: "Which risk has maximum priority in the matrix?",
      options: ["Low probability, low impact", "High probability, high impact", "Any new risk", "The oldest risk"],
      correctIndex: 1,
      explanation: "Risks with high probability and impact require immediate action."
    },
    {
      question: "Which mitigation strategy transfers risk to third parties?",
      options: ["Avoidance", "Insurance", "Acceptance", "Reduction"],
      correctIndex: 1,
      explanation: "Insurance transfers the financial consequences of risk to the insurer."
    },
    {
      question: "What is an example of compliance risk?",
      options: ["Delivery delay", "Violation of driving times", "Vehicle breakdown", "Unhappy customer"],
      correctIndex: 1,
      explanation: "Violations of regulations (driving times, ADR, cabotage) are compliance risks."
    },
    {
      question: "What check reduces fraud risk with carriers?",
      options: ["Only price check", "Complete due diligence", "Vehicle color check", "No check"],
      correctIndex: 1,
      explanation: "Due diligence includes verifying licenses, insurance, references, history."
    },
    {
      question: "Which indicator shows a high-risk carrier?",
      options: ["Competitive prices", "Missing valid CMR insurance", "Large fleet", "Long experience"],
      correctIndex: 1,
      explanation: "Missing valid CMR insurance is a major warning sign."
    },
    {
      question: "What is a Business Continuity Plan (BCP)?",
      options: ["Marketing plan", "Plan for maintaining operations in crisis", "Expansion plan", "Layoff plan"],
      correctIndex: 1,
      explanation: "BCP ensures the business can continue during major crisis situations."
    },
    {
      question: "Which financial risk is specific to international transport?",
      options: ["Employee salaries", "Currency exchange fluctuation", "Office prices", "IT costs"],
      correctIndex: 1,
      explanation: "Exchange rates significantly affect the profitability of international transports."
    },
    {
      question: "How is customer non-payment risk mitigated?",
      options: ["Granting unlimited credit", "Credit check and credit limits", "Ignoring history", "Accepting any customer"],
      correctIndex: 1,
      explanation: "Credit verification and limits protect against non-payments."
    },
    {
      question: "What does reputation risk represent?",
      options: ["Financial risk", "Damage to company image", "Technical risk", "Legal risk"],
      correctIndex: 1,
      explanation: "Reputation risk affects how customers and partners perceive the company."
    },
    {
      question: "Which document provides legal protection in disputes?",
      options: ["Informal email", "Clear contract with terms and conditions", "Phone conversation", "Verbal agreement"],
      correctIndex: 1,
      explanation: "Written contracts with clear terms provide legal protection."
    },
    {
      question: "What action is taken for low probability but high impact risk?",
      options: ["Ignore", "Prepare a contingency plan", "Total acceptance", "Immediate transfer"],
      correctIndex: 1,
      explanation: "Rare but severe risks require prepared contingency plans."
    },
    {
      question: "What is the main risk of depending on a single large client?",
      options: ["High profits", "Vulnerability to losing the client", "Simplified operations", "Reduced costs"],
      correctIndex: 1,
      explanation: "Dependence on one client puts the business at risk if they leave."
    },
    {
      question: "How is cargo theft risk reduced?",
      options: ["Slower transport", "GPS tracking and security procedures", "Lower prices", "Less communication"],
      correctIndex: 1,
      explanation: "GPS tracking and strict security procedures reduce theft risk."
    },
    {
      question: "What is due diligence for a new carrier?",
      options: ["Only price negotiation", "Complete credential verification", "Immediate acceptance", "Only vehicle check"],
      correctIndex: 1,
      explanation: "Due diligence includes licenses, insurance, references, capacity, history."
    },
    {
      question: "Which risk is specific to ADR transport?",
      options: ["Normal delays", "Incidents with dangerous substances", "Administrative problems", "Parking costs"],
      correctIndex: 1,
      explanation: "ADR transport involves risks of accidents with dangerous substances."
    },
    {
      question: "What measure prevents overloading risk?",
      options: ["Loading without weighing", "Weight verification at scales", "Visual estimation", "Trust in shipper"],
      correctIndex: 1,
      explanation: "Weighing verifies compliance with legal weight limits."
    },
    {
      question: "What is the main risk of lacking data backup?",
      options: ["Lower IT costs", "Permanent loss of critical information", "Faster systems", "Less complexity"],
      correctIndex: 1,
      explanation: "Without backup, critical data can be permanently lost in case of failure."
    },
    {
      question: "What strategy reduces dependence on a single carrier?",
      options: ["Exclusivity", "Diversifying the carrier base", "Lifetime contracts", "Very low prices"],
      correctIndex: 1,
      explanation: "A diversified carrier base ensures alternatives in case of problems."
    },
    {
      question: "Which document must be verified for EU carriers?",
      options: ["Only driver's license", "Community license and CMR insurance", "Only registration number", "Only vehicle color"],
      correctIndex: 1,
      explanation: "Community license and CMR insurance are mandatory for international transport."
    },
    {
      question: "What risk do extended waiting times involve?",
      options: ["Higher profits", "Additional costs and chain delays", "Better relationships", "More rest time"],
      correctIndex: 1,
      explanation: "Extended waiting generates costs and can cause cascading delays."
    },
    {
      question: "What is the first line of defense against risks?",
      options: ["Insurance", "Prevention and procedures", "Legal processes", "Ignoring"],
      correctIndex: 1,
      explanation: "Prevention through clear procedures is more effective than post-event reaction."
    },
    {
      question: "What does company risk tolerance represent?",
      options: ["Accepting any risk", "Acceptable level of risk for the organization", "Total risk avoidance", "Maximum possible risk"],
      correctIndex: 1,
      explanation: "Risk tolerance defines what level of risk is acceptable for the company."
    },
    {
      question: "Which indicator suggests financial problems with a customer?",
      options: ["Frequent orders", "Repeated payment delays", "Good communication", "High volume"],
      correctIndex: 1,
      explanation: "Repeated payment delays may indicate cash flow problems."
    },
    {
      question: "What is escalation in risk management?",
      options: ["Ignoring the problem", "Reporting to higher level when limits exceeded", "Solving alone", "Postponing decision"],
      correctIndex: 1,
      explanation: "Escalation ensures major risks reach the right decision-makers."
    },
    {
      question: "Which risk is specific to the winter season?",
      options: ["Excessive heat", "Adverse weather conditions and blocked roads", "Reduced traffic", "Low demand"],
      correctIndex: 1,
      explanation: "Winter brings risks of snowed roads, blockages, and delays."
    },
    {
      question: "What differentiates risk appetite from risk tolerance?",
      options: ["They are identical", "Appetite = willingness for risk, tolerance = accepted limit", "Appetite = avoidance, tolerance = acceptance", "No difference"],
      correctIndex: 1,
      explanation: "Risk appetite is how much risk you want to take; tolerance is how much you can bear."
    }
  ]
};
