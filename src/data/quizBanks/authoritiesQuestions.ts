import { QuizQuestion } from '../quizData';

export const authoritiesQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Care este primul lucru pe care trebuie să-l faci când ești oprit pentru control?",
    options: ["Să cobori imediat din cabină", "Să oprești în siguranță și să pregătești documentele", "Să suni la dispoziție", "Să pornești camera video"],
    correctIndex: 1,
    explanation: "Oprirea în siguranță și pregătirea documentelor arată profesionalism și cooperare."
  },
  {
    question: "Ce documente sunt obligatorii la control rutier internațional?",
    options: ["Doar CMR", "CMR, licență transport, certificat înmatriculare, tahograf", "Doar licența de transport", "Factura și CMR"],
    correctIndex: 1,
    explanation: "Transportul internațional necesită un set complet de documente: CMR, licență, certificat și date tahograf."
  },
  {
    question: "Care este autoritatea responsabilă pentru controale rutiere în Germania?",
    options: ["Poliția locală", "BAG (Bundesamt für Güterverkehr)", "Vama", "Ministerul Transporturilor"],
    correctIndex: 1,
    explanation: "BAG este autoritatea federală germană responsabilă pentru controlul transportului de marfă."
  },
  {
    question: "Ce drept ai în timpul unui control?",
    options: ["Să refuzi să arăți documente", "Să ceri legitimația inspectorului", "Să pleci oricând", "Să nu răspunzi la întrebări"],
    correctIndex: 1,
    explanation: "Ai dreptul să ceri legitimația inspectorului pentru a verifica autoritatea acestuia."
  },
  {
    question: "Cât timp are voie autoritatea să rețină vehiculul pentru control?",
    options: ["Maximum 1 oră", "Timpul necesar finalizării controlului", "Maximum 30 minute", "Doar 15 minute"],
    correctIndex: 1,
    explanation: "Autoritatea poate reține vehiculul cât este necesar pentru efectuarea controlului complet."
  },
  {
    question: "Ce trebuie să faci dacă inspectorul găsește o neregulă?",
    options: ["Să negi totul", "Să semnezi procesul verbal fără a citi", "Să citești procesul verbal și să semnezi cu rezerve dacă nu ești de acord", "Să refuzi să semnezi"],
    correctIndex: 2,
    explanation: "Citirea și semnarea cu rezerve protejează dreptul de contestație ulterioară."
  },
  {
    question: "Care este amenda maximă pentru lipsa licenței de transport în UE?",
    options: ["€500", "€1.000", "€5.000 sau mai mult", "€100"],
    correctIndex: 2,
    explanation: "Lipsa licenței de transport poate atrage amenzi de peste €5.000 și imobilizarea vehiculului."
  },
  {
    question: "Ce faci dacă nu înțelegi limba inspectorului?",
    options: ["Semnezi oricum", "Ceri traducător sau asistență consulară", "Refuzi cooperarea", "Pleci de la control"],
    correctIndex: 1,
    explanation: "Ai dreptul la traducător sau asistență consulară pentru a înțelege procedura."
  },
  {
    question: "Unde poți contesta o amendă primită în Germania?",
    options: ["La poliția locală", "La BAG sau instanța competentă", "Doar la ambasadă", "Nu se poate contesta"],
    correctIndex: 1,
    explanation: "Amenzile BAG pot fi contestate la BAG sau la instanțele administrative competente."
  },
  {
    question: "Care este termenul de contestare a unei amenzi în majoritatea țărilor UE?",
    options: ["7 zile", "14-30 zile", "60 zile", "1 an"],
    correctIndex: 1,
    explanation: "Termenul de contestare variază între 14-30 zile în majoritatea țărilor UE."
  },
  // German Questions (11-20)
  {
    question: "Was ist die AETR-Vereinbarung?",
    options: ["Ein Handelsabkommen", "Ein Abkommen über Arbeitszeiten im internationalen Straßenverkehr", "Ein Zollabkommen", "Ein Versicherungsabkommen"],
    correctIndex: 1,
    explanation: "AETR ist das europäische Abkommen über die Arbeitszeit von Besatzungen im internationalen Straßenverkehr."
  },
  {
    question: "Welche Behörde kontrolliert die Kabotage in Frankreich?",
    options: ["Die Polizei", "DREAL (Direction régionale de l'environnement)", "Die Zollbehörde", "Das Transportministerium"],
    correctIndex: 1,
    explanation: "DREAL ist die französische Regionalbehörde, die für Kabotagekontrollen zuständig ist."
  },
  {
    question: "Was solltest du tun, wenn du eine Geldstrafe im Ausland erhältst?",
    options: ["Ignorieren", "Sofort bezahlen ohne Fragen", "Dokumentieren, Kopie anfordern und Firma informieren", "Das Land verlassen"],
    correctIndex: 2,
    explanation: "Dokumentieren, Kopie anfordern und Firma informieren gewährleistet die korrekte Nachverfolgung."
  },
  {
    question: "Wie lange müssen Tachographenaufzeichnungen aufbewahrt werden?",
    options: ["6 Monate", "1 Jahr", "2 Jahre", "5 Jahre"],
    correctIndex: 1,
    explanation: "Tachographenaufzeichnungen müssen gemäß EU-Gesetzgebung mindestens 1 Jahr aufbewahrt werden."
  },
  {
    question: "Was ist der Unterschied zwischen Ordnungswidrigkeit und Straftat im Transportrecht?",
    options: ["Kein Unterschied", "Ordnungswidrigkeit = Geldbuße, Straftat = strafrechtliche Verfolgung", "Straftat ist günstiger", "Beides wird gleich behandelt"],
    correctIndex: 1,
    explanation: "Ordnungswidrigkeiten führen zu Bußgeldern, während Straftaten zu strafrechtlicher Verfolgung führen können."
  },
  {
    question: "Welche Dokumente muss ein ADR-Transport zusätzlich mitführen?",
    options: ["Nur CMR", "ADR-Schein, Transportdokument für gefährliche Güter, Notfallanweisungen", "Nur den ADR-Schein", "Keine zusätzlichen Dokumente"],
    correctIndex: 1,
    explanation: "ADR-Transport erfordert ADR-Schein, Gefahrguttransportdokument und Notfallanweisungen."
  },
  {
    question: "Was passiert bei einer Überladung von mehr als 20%?",
    options: ["Nur Verwarnung", "Hohe Geldstrafe und mögliche Fahrzeugstilllegung", "Keine Konsequenzen", "Nur der Fahrer wird bestraft"],
    correctIndex: 1,
    explanation: "Überladung von über 20% führt zu hohen Geldstrafen und möglicher Fahrzeugstilllegung."
  },
  {
    question: "Wie verhältst du dich bei einer Kontrolle an der Grenze?",
    options: ["Schnell durchfahren", "Dokumente vorbereiten, Motor abstellen, im Fahrzeug bleiben bis angesprochen", "Sofort aussteigen", "Ignorieren"],
    correctIndex: 1,
    explanation: "Dokumente vorbereiten und im Fahrzeug warten zeigt Kooperation und Professionalität."
  },
  {
    question: "Welche Behörde ist in Österreich für Transportkontrollen zuständig?",
    options: ["Die Polizei", "ASFINAG", "Die Zollbehörde", "Das Verkehrsministerium"],
    correctIndex: 0,
    explanation: "In Österreich führt die Polizei Straßenkontrollen durch, einschließlich für den Güterverkehr."
  },
  {
    question: "Was ist bei einer Kontrolle der Posting-Meldung zu beachten?",
    options: ["Nicht relevant", "IMI-Registrierung und A1-Bescheinigung müssen vorliegen", "Nur für Kabotage relevant", "Nur bei langen Aufenthalten"],
    correctIndex: 1,
    explanation: "Posting erfordert IMI-Registrierung und A1-Bescheinigung zum Nachweis der Konformität."
  },
  // English Questions (21-30)
  {
    question: "What is the DVSA responsible for in the UK?",
    options: ["Customs control", "Vehicle and operator licensing, roadside enforcement", "Tax collection", "Insurance verification"],
    correctIndex: 1,
    explanation: "DVSA is the UK agency responsible for vehicle and operator licensing and roadside enforcement."
  },
  {
    question: "What document proves a driver's posting status in the EU?",
    options: ["Passport", "A1 certificate and IMI declaration", "Driver's license", "CMR only"],
    correctIndex: 1,
    explanation: "A1 certificate and IMI declaration prove legal posting status in the EU."
  },
  {
    question: "What is the maximum fine for tachograph manipulation in the EU?",
    options: ["€500", "€1,000", "€30,000 or criminal prosecution", "No specific limit"],
    correctIndex: 2,
    explanation: "Tachograph manipulation can result in fines up to €30,000 and criminal prosecution."
  },
  {
    question: "Which countries require pre-notification for transport of certain goods?",
    options: ["None in the EU", "Most EU countries for waste, dangerous goods, oversized loads", "Only non-EU countries", "Only for food transport"],
    correctIndex: 1,
    explanation: "Most EU countries require pre-notification for waste, dangerous goods and oversized loads."
  },
  {
    question: "What should you do if an inspector asks for a bribe?",
    options: ["Pay to avoid trouble", "Refuse, document everything, report to company and authorities", "Ignore the request", "Negotiate a lower amount"],
    correctIndex: 1,
    explanation: "Refusing, documenting and reporting protects against corruption and legal consequences."
  },
  {
    question: "What is the Euro Contrôle Route?",
    options: ["A toll system", "An international cooperation network for road transport control", "A customs union", "A transport insurance"],
    correctIndex: 1,
    explanation: "Euro Contrôle Route is an international cooperation network for road transport control."
  },
  {
    question: "How can you verify if a fine from abroad is legitimate?",
    options: ["Ignore it", "Check with the official authority website or embassy", "Pay immediately", "Delete the notification"],
    correctIndex: 1,
    explanation: "Checking on the official authority website or through the embassy confirms the fine's legitimacy."
  },
  {
    question: "What happens if you don't pay a foreign fine?",
    options: ["Nothing", "Cross-border enforcement directive allows collection in home country", "Only banned from that country", "Fine is cancelled after 1 year"],
    correctIndex: 1,
    explanation: "EU cross-border enforcement directive allows collection of fines in the home country."
  },
  {
    question: "What should be recorded during every control?",
    options: ["Nothing", "Date, time, location, inspector ID, documents checked, outcome", "Only the fine amount", "Just the location"],
    correctIndex: 1,
    explanation: "Complete recording of the control helps with follow-up and possible appeals."
  },
  {
    question: "Which authority enforces cabotage rules in Spain?",
    options: ["Local police", "DGT (Dirección General de Tráfico)", "Customs", "Private companies"],
    correctIndex: 1,
    explanation: "DGT is the Spanish authority responsible for enforcing cabotage rules."
  }
];
