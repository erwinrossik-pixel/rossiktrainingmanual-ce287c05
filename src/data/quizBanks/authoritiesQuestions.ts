import { QuizQuestion } from '../quizData';

export const authoritiesQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Care este primul lucru pe care trebuie să-l faci când ești oprit pentru control?",
    options: ["Să cobori imediat din cabină", "Să oprești în siguranță și să pregătești documentele", "Să suni la dispoziție", "Să pornești camera video"],
    correctIndex: 1,
    explanation: {
      ro: "Oprirea în siguranță și pregătirea documentelor arată profesionalism și cooperare.",
      de: "Sicheres Anhalten und Vorbereitung der Dokumente zeigt Professionalität und Kooperation.",
      en: "Stopping safely and preparing documents shows professionalism and cooperation."
    }
  },
  {
    question: "Ce documente sunt obligatorii la control rutier internațional?",
    options: ["Doar CMR", "CMR, licență transport, certificat înmatriculare, tahograf", "Doar licența de transport", "Factura și CMR"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul internațional necesită un set complet de documente: CMR, licență, certificat și date tahograf.",
      de: "Internationaler Transport erfordert einen vollständigen Dokumentensatz: CMR, Lizenz, Zulassung und Tachographendaten.",
      en: "International transport requires a complete document set: CMR, license, registration and tachograph data."
    }
  },
  {
    question: "Care este autoritatea responsabilă pentru controale rutiere în Germania?",
    options: ["Poliția locală", "BAG (Bundesamt für Güterverkehr)", "Vama", "Ministerul Transporturilor"],
    correctIndex: 1,
    explanation: {
      ro: "BAG este autoritatea federală germană responsabilă pentru controlul transportului de marfă.",
      de: "Das BAG ist die deutsche Bundesbehörde für die Kontrolle des Güterverkehrs.",
      en: "BAG is the German federal authority responsible for freight transport control."
    }
  },
  {
    question: "Ce drept ai în timpul unui control?",
    options: ["Să refuzi să arăți documente", "Să ceri legitimația inspectorului", "Să pleci oricând", "Să nu răspunzi la întrebări"],
    correctIndex: 1,
    explanation: {
      ro: "Ai dreptul să ceri legitimația inspectorului pentru a verifica autoritatea acestuia.",
      de: "Sie haben das Recht, den Dienstausweis des Inspektors zu verlangen, um seine Befugnis zu überprüfen.",
      en: "You have the right to request the inspector's ID to verify their authority."
    }
  },
  {
    question: "Cât timp are voie autoritatea să rețină vehiculul pentru control?",
    options: ["Maximum 1 oră", "Timpul necesar finalizării controlului", "Maximum 30 minute", "Doar 15 minute"],
    correctIndex: 1,
    explanation: {
      ro: "Autoritatea poate reține vehiculul cât este necesar pentru efectuarea controlului complet.",
      de: "Die Behörde kann das Fahrzeug so lange zurückhalten, wie für eine vollständige Kontrolle erforderlich.",
      en: "The authority can detain the vehicle as long as necessary to complete the inspection."
    }
  },
  {
    question: "Ce trebuie să faci dacă inspectorul găsește o neregulă?",
    options: ["Să negi totul", "Să semnezi procesul verbal fără a citi", "Să citești procesul verbal și să semnezi cu rezerve dacă nu ești de acord", "Să refuzi să semnezi"],
    correctIndex: 2,
    explanation: {
      ro: "Citirea și semnarea cu rezerve protejează dreptul de contestație ulterioară.",
      de: "Das Lesen und Unterschreiben mit Vorbehalten schützt das Recht auf spätere Anfechtung.",
      en: "Reading and signing with reservations protects the right to later appeal."
    }
  },
  {
    question: "Care este amenda maximă pentru lipsa licenței de transport în UE?",
    options: ["€500", "€1.000", "€5.000 sau mai mult", "€100"],
    correctIndex: 2,
    explanation: {
      ro: "Lipsa licenței de transport poate atrage amenzi de peste €5.000 și imobilizarea vehiculului.",
      de: "Das Fehlen einer Transportlizenz kann zu Bußgeldern von über €5.000 und Fahrzeugstilllegung führen.",
      en: "Lack of transport license can result in fines over €5,000 and vehicle immobilization."
    }
  },
  {
    question: "Ce faci dacă nu înțelegi limba inspectorului?",
    options: ["Semnezi oricum", "Ceri traducător sau asistență consulară", "Refuzi cooperarea", "Pleci de la control"],
    correctIndex: 1,
    explanation: {
      ro: "Ai dreptul la traducător sau asistență consulară pentru a înțelege procedura.",
      de: "Sie haben Anspruch auf einen Dolmetscher oder konsularische Unterstützung, um das Verfahren zu verstehen.",
      en: "You have the right to a translator or consular assistance to understand the procedure."
    }
  },
  {
    question: "Unde poți contesta o amendă primită în Germania?",
    options: ["La poliția locală", "La BAG sau instanța competentă", "Doar la ambasadă", "Nu se poate contesta"],
    correctIndex: 1,
    explanation: {
      ro: "Amenzile BAG pot fi contestate la BAG sau la instanțele administrative competente.",
      de: "BAG-Bußgelder können beim BAG oder bei zuständigen Verwaltungsgerichten angefochten werden.",
      en: "BAG fines can be appealed to BAG or competent administrative courts."
    }
  },
  {
    question: "Care este termenul de contestare a unei amenzi în majoritatea țărilor UE?",
    options: ["7 zile", "14-30 zile", "60 zile", "1 an"],
    correctIndex: 1,
    explanation: {
      ro: "Termenul de contestare variază între 14-30 zile în majoritatea țărilor UE.",
      de: "Die Einspruchsfrist liegt in den meisten EU-Ländern bei 14-30 Tagen.",
      en: "The appeal deadline varies between 14-30 days in most EU countries."
    }
  },
  // German Questions (11-20)
  {
    question: "Was ist die AETR-Vereinbarung?",
    options: ["Ein Handelsabkommen", "Ein Abkommen über Arbeitszeiten im internationalen Straßenverkehr", "Ein Zollabkommen", "Ein Versicherungsabkommen"],
    correctIndex: 1,
    explanation: {
      ro: "AETR este acordul european privind timpul de lucru al echipajelor de transport rutier internațional.",
      de: "AETR ist das europäische Abkommen über die Arbeitszeit von Besatzungen im internationalen Straßenverkehr.",
      en: "AETR is the European agreement on working hours of crews in international road transport."
    }
  },
  {
    question: "Welche Behörde kontrolliert die Kabotage in Frankreich?",
    options: ["Die Polizei", "DREAL (Direction régionale de l'environnement)", "Die Zollbehörde", "Das Transportministerium"],
    correctIndex: 1,
    explanation: {
      ro: "DREAL este autoritatea regională franceză responsabilă pentru controalele de cabotaj.",
      de: "DREAL ist die französische Regionalbehörde, die für Kabotagekontrollen zuständig ist.",
      en: "DREAL is the French regional authority responsible for cabotage controls."
    }
  },
  {
    question: "Was solltest du tun, wenn du eine Geldstrafe im Ausland erhältst?",
    options: ["Ignorieren", "Sofort bezahlen ohne Fragen", "Dokumentieren, Kopie anfordern und Firma informieren", "Das Land verlassen"],
    correctIndex: 2,
    explanation: {
      ro: "Documentarea, solicitarea copiei și informarea firmei asigură urmărirea corectă a situației.",
      de: "Dokumentieren, Kopie anfordern und Firma informieren gewährleistet die korrekte Nachverfolgung.",
      en: "Documenting, requesting a copy and informing the company ensures proper follow-up."
    }
  },
  {
    question: "Wie lange müssen Tachographenaufzeichnungen aufbewahrt werden?",
    options: ["6 Monate", "1 Jahr", "2 Jahre", "5 Jahre"],
    correctIndex: 1,
    explanation: {
      ro: "Înregistrările tahografului trebuie păstrate minimum 1 an conform legislației UE.",
      de: "Tachographenaufzeichnungen müssen gemäß EU-Gesetzgebung mindestens 1 Jahr aufbewahrt werden.",
      en: "Tachograph records must be kept for minimum 1 year according to EU legislation."
    }
  },
  {
    question: "Was ist der Unterschied zwischen Ordnungswidrigkeit und Straftat im Transportrecht?",
    options: ["Kein Unterschied", "Ordnungswidrigkeit = Geldbuße, Straftat = strafrechtliche Verfolgung", "Straftat ist günstiger", "Beides wird gleich behandelt"],
    correctIndex: 1,
    explanation: {
      ro: "Contravențiile atrag amenzi, în timp ce infracțiunile pot duce la urmărire penală.",
      de: "Ordnungswidrigkeiten führen zu Bußgeldern, während Straftaten zu strafrechtlicher Verfolgung führen können.",
      en: "Infractions result in fines, while crimes can lead to criminal prosecution."
    }
  },
  {
    question: "Welche Dokumente muss ein ADR-Transport zusätzlich mitführen?",
    options: ["Nur CMR", "ADR-Schein, Transportdokument für gefährliche Güter, Notfallanweisungen", "Nur den ADR-Schein", "Keine zusätzlichen Dokumente"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul ADR necesită certificat ADR, document de transport mărfuri periculoase și instrucțiuni de urgență.",
      de: "ADR-Transport erfordert ADR-Schein, Gefahrguttransportdokument und Notfallanweisungen.",
      en: "ADR transport requires ADR certificate, dangerous goods transport document and emergency instructions."
    }
  },
  {
    question: "Was passiert bei einer Überladung von mehr als 20%?",
    options: ["Nur Verwarnung", "Hohe Geldstrafe und mögliche Fahrzeugstilllegung", "Keine Konsequenzen", "Nur der Fahrer wird bestraft"],
    correctIndex: 1,
    explanation: {
      ro: "Supraîncărcarea de peste 20% atrage amenzi mari și posibilă imobilizare a vehiculului.",
      de: "Überladung von über 20% führt zu hohen Geldstrafen und möglicher Fahrzeugstilllegung.",
      en: "Overloading of over 20% results in high fines and possible vehicle immobilization."
    }
  },
  {
    question: "Wie verhältst du dich bei einer Kontrolle an der Grenze?",
    options: ["Schnell durchfahren", "Dokumente vorbereiten, Motor abstellen, im Fahrzeug bleiben bis angesprochen", "Sofort aussteigen", "Ignorieren"],
    correctIndex: 1,
    explanation: {
      ro: "Pregătirea documentelor și așteptarea în vehicul arată cooperare și profesionalism.",
      de: "Dokumente vorbereiten und im Fahrzeug warten zeigt Kooperation und Professionalität.",
      en: "Preparing documents and waiting in the vehicle shows cooperation and professionalism."
    }
  },
  {
    question: "Welche Behörde ist in Österreich für Transportkontrollen zuständig?",
    options: ["Die Polizei", "ASFINAG", "Die Zollbehörde", "Das Verkehrsministerium"],
    correctIndex: 0,
    explanation: {
      ro: "În Austria, poliția efectuează controale rutiere, inclusiv pentru transport de marfă.",
      de: "In Österreich führt die Polizei Straßenkontrollen durch, einschließlich für den Güterverkehr.",
      en: "In Austria, police conduct road controls, including for freight transport."
    }
  },
  {
    question: "Was ist bei einer Kontrolle der Posting-Meldung zu beachten?",
    options: ["Nicht relevant", "IMI-Registrierung und A1-Bescheinigung müssen vorliegen", "Nur für Kabotage relevant", "Nur bei langen Aufenthalten"],
    correctIndex: 1,
    explanation: {
      ro: "Detașarea necesită înregistrare IMI și certificat A1 pentru a dovedi conformitatea.",
      de: "Posting erfordert IMI-Registrierung und A1-Bescheinigung zum Nachweis der Konformität.",
      en: "Posting requires IMI registration and A1 certificate to prove compliance."
    }
  },
  // English Questions (21-30)
  {
    question: "What is the DVSA responsible for in the UK?",
    options: ["Customs control", "Vehicle and operator licensing, roadside enforcement", "Tax collection", "Insurance verification"],
    correctIndex: 1,
    explanation: {
      ro: "DVSA este agenția britanică responsabilă pentru licențierea vehiculelor și operatorilor și aplicarea legii rutiere.",
      de: "DVSA ist die britische Behörde für Fahrzeug- und Betreiberlizenzierung und Straßendurchsetzung.",
      en: "DVSA is the UK agency responsible for vehicle and operator licensing and roadside enforcement."
    }
  },
  {
    question: "What document proves a driver's posting status in the EU?",
    options: ["Passport", "A1 certificate and IMI declaration", "Driver's license", "CMR only"],
    correctIndex: 1,
    explanation: {
      ro: "Certificatul A1 și declarația IMI dovedesc statutul legal de detașare în UE.",
      de: "A1-Bescheinigung und IMI-Erklärung belegen den legalen Posting-Status in der EU.",
      en: "A1 certificate and IMI declaration prove legal posting status in the EU."
    }
  },
  {
    question: "What is the maximum fine for tachograph manipulation in the EU?",
    options: ["€500", "€1,000", "€30,000 or criminal prosecution", "No specific limit"],
    correctIndex: 2,
    explanation: {
      ro: "Manipularea tahografului poate atrage amenzi de până la €30.000 și urmărire penală.",
      de: "Tachographenmanipulation kann zu Bußgeldern bis €30.000 und strafrechtlicher Verfolgung führen.",
      en: "Tachograph manipulation can result in fines up to €30,000 and criminal prosecution."
    }
  },
  {
    question: "Which countries require pre-notification for transport of certain goods?",
    options: ["None in the EU", "Most EU countries for waste, dangerous goods, oversized loads", "Only non-EU countries", "Only for food transport"],
    correctIndex: 1,
    explanation: {
      ro: "Majoritatea țărilor UE cer pre-notificare pentru deșeuri, mărfuri periculoase și transporturi agabaritice.",
      de: "Die meisten EU-Länder verlangen Voranmeldung für Abfälle, Gefahrgut und Sondertransporte.",
      en: "Most EU countries require pre-notification for waste, dangerous goods and oversized loads."
    }
  },
  {
    question: "What should you do if an inspector asks for a bribe?",
    options: ["Pay to avoid trouble", "Refuse, document everything, report to company and authorities", "Ignore the request", "Negotiate a lower amount"],
    correctIndex: 1,
    explanation: {
      ro: "Refuzul, documentarea și raportarea protejează împotriva corupției și consecințelor legale.",
      de: "Ablehnung, Dokumentation und Meldung schützen vor Korruption und rechtlichen Konsequenzen.",
      en: "Refusing, documenting and reporting protects against corruption and legal consequences."
    }
  },
  {
    question: "What is the Euro Contrôle Route?",
    options: ["A toll system", "An international cooperation network for road transport control", "A customs union", "A transport insurance"],
    correctIndex: 1,
    explanation: {
      ro: "Euro Contrôle Route este o rețea de cooperare internațională pentru controlul transportului rutier.",
      de: "Euro Contrôle Route ist ein internationales Kooperationsnetzwerk für die Straßenverkehrskontrolle.",
      en: "Euro Contrôle Route is an international cooperation network for road transport control."
    }
  },
  {
    question: "How can you verify if a fine from abroad is legitimate?",
    options: ["Ignore it", "Check with the official authority website or embassy", "Pay immediately", "Delete the notification"],
    correctIndex: 1,
    explanation: {
      ro: "Verificarea pe site-ul oficial al autorității sau prin ambasadă confirmă legitimitatea amenzii.",
      de: "Die Überprüfung auf der offiziellen Behördenwebsite oder über die Botschaft bestätigt die Legitimität.",
      en: "Checking on the official authority website or through the embassy confirms the fine's legitimacy."
    }
  },
  {
    question: "What happens if you don't pay a foreign fine?",
    options: ["Nothing", "Cross-border enforcement directive allows collection in home country", "Only banned from that country", "Fine is cancelled after 1 year"],
    correctIndex: 1,
    explanation: {
      ro: "Directiva UE privind aplicarea transfrontalieră permite colectarea amenzilor în țara de origine.",
      de: "Die EU-Richtlinie zur grenzüberschreitenden Durchsetzung ermöglicht die Einziehung im Heimatland.",
      en: "EU cross-border enforcement directive allows collection of fines in the home country."
    }
  },
  {
    question: "What should be recorded during every control?",
    options: ["Nothing", "Date, time, location, inspector ID, documents checked, outcome", "Only the fine amount", "Just the location"],
    correctIndex: 1,
    explanation: {
      ro: "Înregistrarea completă a controlului ajută la urmărire și eventuale contestații.",
      de: "Die vollständige Aufzeichnung der Kontrolle hilft bei der Nachverfolgung und möglichen Einsprüchen.",
      en: "Complete recording of the control helps with follow-up and possible appeals."
    }
  },
  {
    question: "Which authority enforces cabotage rules in Spain?",
    options: ["Local police", "DGT (Dirección General de Tráfico)", "Customs", "Private companies"],
    correctIndex: 1,
    explanation: {
      ro: "DGT este autoritatea spaniolă responsabilă pentru aplicarea regulilor de cabotaj.",
      de: "DGT ist die spanische Behörde, die für die Durchsetzung der Kabotageregeln zuständig ist.",
      en: "DGT is the Spanish authority responsible for enforcing cabotage rules."
    }
  }
];
