import { TranslatedQuizQuestion } from '../../quizTranslations';

export const drivingTimeComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este timpul maxim de conducere zilnic conform Regulamentului (CE) 561/2006?",
      de: "Was ist die maximale tägliche Lenkzeit gemäß Verordnung (EG) 561/2006?",
      en: "What is the maximum daily driving time according to Regulation (EC) 561/2006?"
    },
    options: {
      ro: ["12 ore", "9 ore (extensibil la 10 ore de 2 ori pe săptămână)", "8 ore", "11 ore"],
      de: ["12 Stunden", "9 Stunden (2x pro Woche auf 10 Stunden verlängerbar)", "8 Stunden", "11 Stunden"],
      en: ["12 hours", "9 hours (extendable to 10 hours twice per week)", "8 hours", "11 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Timpul zilnic de conducere: 9 ore standard, poate fi extins la 10 ore de maximum 2 ori într-o săptămână.",
      de: "Tägliche Lenkzeit: 9 Stunden Standard, kann maximal 2x pro Woche auf 10 Stunden verlängert werden.",
      en: "Daily driving time: 9 hours standard, can be extended to 10 hours maximum twice per week."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este timpul maxim de conducere săptămânal?",
      de: "Was ist die maximale wöchentliche Lenkzeit?",
      en: "What is the maximum weekly driving time?"
    },
    options: {
      ro: ["60 ore", "56 ore", "48 ore", "70 ore"],
      de: ["60 Stunden", "56 Stunden", "48 Stunden", "70 Stunden"],
      en: ["60 hours", "56 hours", "48 hours", "70 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Maxim 56 ore pe săptămână, dar atenție: în 2 săptămâni consecutive nu poți depăși 90 ore.",
      de: "Maximal 56 Stunden pro Woche, aber Achtung: in 2 aufeinanderfolgenden Wochen darfst du 90 Stunden nicht überschreiten.",
      en: "Maximum 56 hours per week, but attention: in 2 consecutive weeks you cannot exceed 90 hours."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum se calculează perioada de odihnă zilnică regulată?",
      de: "Wie wird die reguläre tägliche Ruhezeit berechnet?",
      en: "How is regular daily rest period calculated?"
    },
    options: {
      ro: ["8 ore continue", "11 ore continue sau 3+9 ore (împărțită)", "10 ore", "12 ore"],
      de: ["8 Stunden ununterbrochen", "11 Stunden ununterbrochen oder 3+9 Stunden (geteilt)", "10 Stunden", "12 Stunden"],
      en: ["8 continuous hours", "11 continuous hours or 3+9 hours (split)", "10 hours", "12 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Odihnă zilnică regulată: 11 ore continue SAU împărțită în 3 ore + 9 ore (în total 12 ore, dar în 2 perioade).",
      de: "Reguläre Tagesruhe: 11 Stunden ununterbrochen ODER geteilt in 3 Stunden + 9 Stunden (insgesamt 12 Stunden, aber in 2 Perioden).",
      en: "Regular daily rest: 11 continuous hours OR split into 3 hours + 9 hours (total 12 hours, but in 2 periods)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Șofer pleacă luni 6:00, conduce cu pauze până vineri 18:00. Calculează conformitatea.",
      de: "Fahrer fährt Montag 6:00 ab, fährt mit Pausen bis Freitag 18:00. Berechne die Konformität.",
      en: "Driver departs Monday 6:00, drives with breaks until Friday 18:00. Calculate compliance."
    },
    options: {
      ro: ["Verifici doar orele zilnice", "Verifici zilnic, săptămânal, pauze 45 min la 4.5h, odihnă săptămânală înainte de 6 zile", "Doar totalul de ore", "Nu e nevoie de calcul"],
      de: ["Nur tägliche Stunden prüfen", "Täglich, wöchentlich prüfen, 45 Min Pause nach 4,5h, Wochenruhe vor 6 Tagen", "Nur Gesamtstunden", "Keine Berechnung nötig"],
      en: ["Only check daily hours", "Check daily, weekly, 45 min breaks after 4.5h, weekly rest before 6 days", "Only total hours", "No calculation needed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Conformitate completă: max 9-10h/zi, pauză 45 min după 4.5h condus, odihnă 11h/noapte, max 56h/săptămână, odihnă săptămânală după 6 perioade de 24h.",
      de: "Vollständige Konformität: max 9-10h/Tag, 45 Min Pause nach 4,5h Fahrt, 11h Ruhe/Nacht, max 56h/Woche, Wochenruhe nach 6 24h-Perioden.",
      en: "Complete compliance: max 9-10h/day, 45 min break after 4.5h driving, 11h rest/night, max 56h/week, weekly rest after 6 24h periods."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce pauză obligatorie trebuie luată după 4.5 ore de conducere?",
      de: "Welche Pflichpause muss nach 4,5 Stunden Lenkzeit genommen werden?",
      en: "What mandatory break must be taken after 4.5 hours of driving?"
    },
    options: {
      ro: ["30 minute", "45 minute (sau 15+30 împărțit)", "60 minute", "20 minute"],
      de: ["30 Minuten", "45 Minuten (oder 15+30 geteilt)", "60 Minuten", "20 Minuten"],
      en: ["30 minutes", "45 minutes (or 15+30 split)", "60 minutes", "20 minutes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "După 4.5 ore de condus: pauză de 45 minute SAU împărțită în 15 minute apoi 30 minute (în această ordine).",
      de: "Nach 4,5 Stunden Fahrt: 45 Minuten Pause ODER geteilt in 15 Minuten dann 30 Minuten (in dieser Reihenfolge).",
      en: "After 4.5 hours driving: 45 minute break OR split into 15 minutes then 30 minutes (in this order)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este odihna săptămânală redusă și când poate fi folosită?",
      de: "Was ist reduzierte Wochenruhe und wann kann sie genutzt werden?",
      en: "What is reduced weekly rest and when can it be used?"
    },
    options: {
      ro: ["Orice odihnă mai scurtă", "Minim 24 ore (vs. 45 regulată), o dată la 2 săptămâni, compensată în următoarele 3 săptămâni", "12 ore", "Nu există așa ceva"],
      de: ["Jede kürzere Ruhe", "Mindestens 24 Stunden (vs. 45 regulär), einmal in 2 Wochen, in den nächsten 3 Wochen kompensiert", "12 Stunden", "Gibt es nicht"],
      en: ["Any shorter rest", "Minimum 24 hours (vs. 45 regular), once every 2 weeks, compensated in next 3 weeks", "12 hours", "No such thing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Odihnă săptămânală redusă: minim 24h (vs 45h normală), max o dată la 2 săptămâni, orele 'datorate' se compensează atașat la altă odihnă în 3 săptămâni.",
      de: "Reduzierte Wochenruhe: mind. 24h (vs. 45h normal), max einmal in 2 Wochen, 'geschuldete' Stunden werden an andere Ruhe in 3 Wochen angehängt kompensiert.",
      en: "Reduced weekly rest: min 24h (vs 45h normal), max once every 2 weeks, 'owed' hours compensated attached to another rest within 3 weeks."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Echipaj de 2 șoferi: cum se modifică regulile de timp de conducere și odihnă?",
      de: "2-Fahrer-Team: wie ändern sich die Lenk- und Ruhezeit-Regeln?",
      en: "2-driver crew: how do driving and rest time rules change?"
    },
    options: {
      ro: ["Identice cu 1 șofer", "21 ore de condus în 30 ore, pauza poate fi luată în mișcare, odihnă zilnică 9h în primele 30h", "30 ore non-stop", "Fără reguli"],
      de: ["Identisch mit 1 Fahrer", "21 Stunden Fahrt in 30 Stunden, Pause kann fahrend genommen werden, Tagesruhe 9h in ersten 30h", "30 Stunden non-stop", "Keine Regeln"],
      en: ["Identical to 1 driver", "21 hours driving in 30 hours, break can be taken while moving, daily rest 9h in first 30h", "30 hours non-stop", "No rules"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multi-manning: 30h între odihnele zilnice, fiecare șofer min 9h odihnă în aceste 30h, pauza de 45 min poate fi luată pe scaunul pasagerului în mișcare.",
      de: "Mehrfahrer: 30h zwischen Tagesruhen, jeder Fahrer mind. 9h Ruhe in diesen 30h, 45 Min Pause kann auf Beifahrersitz fahrend genommen werden.",
      en: "Multi-manning: 30h between daily rests, each driver min 9h rest in these 30h, 45 min break can be taken in moving passenger seat."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este tahograful și ce înregistrează?",
      de: "Was ist ein Tachograph und was zeichnet er auf?",
      en: "What is a tachograph and what does it record?"
    },
    options: {
      ro: ["Doar viteza", "Timp conducere, alte activități, odihnă, viteză, distanță - obligatoriu pentru >3.5t", "Doar distanța", "Doar combustibilul"],
      de: ["Nur Geschwindigkeit", "Lenkzeit, andere Tätigkeiten, Ruhe, Geschwindigkeit, Entfernung - obligatorisch für >3,5t", "Nur Entfernung", "Nur Kraftstoff"],
      en: ["Only speed", "Driving time, other work, rest, speed, distance - mandatory for >3.5t", "Only distance", "Only fuel"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tahograf: înregistrează automat conducere, manual setezi alte activități. Digital obligatoriu. Date păstrate 28 zile în aparat, 1 an pe card.",
      de: "Tachograph: zeichnet automatisch Fahrt auf, manuell andere Tätigkeiten einstellen. Digital obligatorisch. Daten 28 Tage im Gerät, 1 Jahr auf Karte gespeichert.",
      en: "Tachograph: automatically records driving, manually set other activities. Digital mandatory. Data kept 28 days in device, 1 year on card."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt sancțiunile pentru încălcări grave ale timpului de conducere în UE?",
      de: "Was sind die Sanktionen für schwere Lenkzeitverstöße in der EU?",
      en: "What are sanctions for serious driving time violations in EU?"
    },
    options: {
      ro: ["Doar avertisment", "Amenzi 500-5000€+, imobilizare vehicul, suspendare licență transport, puncte penalizare", "Doar 100€", "Nicio sancțiune"],
      de: ["Nur Warnung", "Bußgelder 500-5000€+, Fahrzeugimmobilisierung, Transportlizenzentzug, Strafpunkte", "Nur 100€", "Keine Sanktion"],
      en: ["Only warning", "Fines €500-5000+, vehicle immobilization, transport license suspension, penalty points", "Only €100", "No sanction"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sancțiuni: amenzi mari (variază pe țară), imobilizare până la corectare, puncte operator/șofer, impact pe reputație și licență operare.",
      de: "Sanktionen: hohe Bußgelder (variiert nach Land), Immobilisierung bis zur Korrektur, Punkte für Betreiber/Fahrer, Auswirkung auf Reputation und Betriebslizenz.",
      en: "Sanctions: large fines (vary by country), immobilization until corrected, points for operator/driver, impact on reputation and operating license."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Sistem de management al complianței timpului de conducere pentru flotă de 50 camioane. Componente?",
      de: "Compliance-Management-System für Lenkzeiten für Flotte mit 50 LKW. Komponenten?",
      en: "Driving time compliance management system for 50-truck fleet. Components?"
    },
    options: {
      ro: ["Doar tahograf", "Download automat date, analiză în timp real, alerte infracțiuni, training șoferi, raportare management", "Doar Excel", "Doar șoferul răspunde"],
      de: ["Nur Tachograph", "Automatischer Datendownload, Echtzeitanalyse, Verstoßalarme, Fahrer-Training, Management-Reporting", "Nur Excel", "Nur Fahrer verantwortlich"],
      en: ["Only tachograph", "Automatic data download, real-time analysis, violation alerts, driver training, management reporting", "Only Excel", "Only driver responsible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sistem compliant: remote download tahograf, software analiză (Webfleet, Transics), alerte proactive, training regulat, rapoarte pentru audit.",
      de: "Compliance-System: Remote-Tachograph-Download, Analysesoftware (Webfleet, Transics), proaktive Alarme, regelmäßiges Training, Berichte für Audit.",
      en: "Compliance system: remote tachograph download, analysis software (Webfleet, Transics), proactive alerts, regular training, reports for audit."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este odihna zilnică redusă?",
      de: "Was ist reduzierte tägliche Ruhezeit?",
      en: "What is reduced daily rest?"
    },
    options: {
      ro: ["8 ore", "Minimum 9 ore continue, permis de max 3 ori între odihnele săptămânale", "6 ore", "12 ore"],
      de: ["8 Stunden", "Mindestens 9 Stunden ununterbrochen, maximal 3x zwischen Wochenruhen erlaubt", "6 Stunden", "12 Stunden"],
      en: ["8 hours", "Minimum 9 continuous hours, allowed max 3 times between weekly rests", "6 hours", "12 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Odihnă zilnică redusă: minim 9 ore (vs 11 normale), maximum 3 ori în perioada dintre 2 odihnuri săptămânale.",
      de: "Reduzierte Tagesruhe: mindestens 9 Stunden (vs. 11 normal), maximal 3x in der Zeit zwischen 2 Wochenruhen.",
      en: "Reduced daily rest: minimum 9 hours (vs 11 normal), maximum 3 times in period between 2 weekly rests."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum funcționează feribotul/trenul în regulile de odihnă?",
      de: "Wie funktioniert Fähre/Zug bei Ruhezeit-Regeln?",
      en: "How does ferry/train work with rest time rules?"
    },
    options: {
      ro: ["Nu afectează regulile", "Odihna poate fi întreruptă max 2 ori, total max 1 oră, acces la cabină, odihnă continuă min 11h sau split", "Condusul pe feribot nu contează", "Trebuie să rămâi treaz"],
      de: ["Beeinflusst Regeln nicht", "Ruhe kann max 2x unterbrochen werden, gesamt max 1 Stunde, Zugang zur Kabine, ununterbrochene Ruhe mind. 11h oder geteilt", "Fahren auf Fähre zählt nicht", "Muss wach bleiben"],
      en: ["Doesn't affect rules", "Rest can be interrupted max 2 times, total max 1 hour, access to cabin, continuous rest min 11h or split", "Driving on ferry doesn't count", "Must stay awake"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Feribot/tren: odihna regulată pe vas dacă ai acces la cabină. Poate fi întreruptă max 2 ori pentru max 1 oră total (îmbarcare/debarcare).",
      de: "Fähre/Zug: reguläre Ruhe an Bord wenn Zugang zur Kabine. Kann max 2x unterbrochen werden für max 1 Stunde gesamt (Ein-/Ausschiffen).",
      en: "Ferry/train: regular rest on board if cabin access. Can be interrupted max 2 times for max 1 hour total (boarding/disembarking)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Planificare cursă internațională RO-ES: 2500 km, un șofer. Calculează ziua sosire optimă.",
      de: "Planung internationale Fahrt RO-ES: 2500 km, ein Fahrer. Berechne optimalen Ankunftstag.",
      en: "Planning international route RO-ES: 2500 km, one driver. Calculate optimal arrival day."
    },
    options: {
      ro: ["2 zile", "3-4 zile: ~800km/zi × 9h conducere, cu pauze și odihnă conform regulilor", "1 zi", "5 zile minim"],
      de: ["2 Tage", "3-4 Tage: ~800km/Tag × 9h Fahrt, mit Pausen und Ruhe gemäß Regeln", "1 Tag", "Mindestens 5 Tage"],
      en: ["2 days", "3-4 days: ~800km/day × 9h driving, with breaks and rest per rules", "1 day", "Minimum 5 days"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Calcul: ~80-90 km/h efectiv → ~700-800 km/zi la 9h conducere. 2500km = 3-4 zile. Include marje pentru trafic, încărcare/descărcare.",
      de: "Berechnung: ~80-90 km/h effektiv → ~700-800 km/Tag bei 9h Fahrt. 2500km = 3-4 Tage. Puffer für Verkehr, Be-/Entladung einbeziehen.",
      en: "Calculation: ~80-90 km/h effective → ~700-800 km/day at 9h driving. 2500km = 3-4 days. Include buffers for traffic, loading/unloading."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care vehicule sunt exceptate de la regulile CE 561/2006?",
      de: "Welche Fahrzeuge sind von den Regeln der VO (EG) 561/2006 ausgenommen?",
      en: "Which vehicles are exempt from EC 561/2006 rules?"
    },
    options: {
      ro: ["Niciun vehicul", "Vehicule <3.5t, urgențe, armată, transport public urban <50km", "Toate camioanele mici", "Doar ambulanțe"],
      de: ["Kein Fahrzeug", "Fahrzeuge <3,5t, Notfall, Militär, ÖPNV <50km", "Alle kleinen LKW", "Nur Krankenwagen"],
      en: ["No vehicle", "Vehicles <3.5t, emergency, military, urban public transport <50km", "All small trucks", "Only ambulances"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Excepții: sub 3.5t, servicii de urgență, forțe armate, transport public în rază 50km, vehicule speciale (lapte fermă, etc.). Lista completă în Regulament.",
      de: "Ausnahmen: unter 3,5t, Rettungsdienste, Streitkräfte, ÖPNV im 50km-Radius, Spezialfahrzeuge (Bauernhof-Milch, etc.). Vollständige Liste in der Verordnung.",
      en: "Exceptions: under 3.5t, emergency services, armed forces, public transport within 50km, special vehicles (farm milk, etc.). Full list in Regulation."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce responsabilități are operatorul de transport pentru timpul de conducere?",
      de: "Welche Verantwortlichkeiten hat der Verkehrsunternehmer für die Lenkzeit?",
      en: "What responsibilities does the transport operator have for driving time?"
    },
    options: {
      ro: ["Doar șoferul e responsabil", "Organizare care permite respectarea, instruire, verificare, descărcare date, păstrare evidențe", "Doar verificare", "Nicio responsabilitate"],
      de: ["Nur Fahrer verantwortlich", "Organisation die Einhaltung ermöglicht, Schulung, Kontrolle, Datendownload, Aufbewahrung", "Nur Kontrolle", "Keine Verantwortung"],
      en: ["Only driver responsible", "Organization allowing compliance, training, verification, data download, record keeping", "Only verification", "No responsibility"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Operator răspunde: planifică cursele să permită conformitatea, instruiește șoferii, descarcă și analizează datele, păstrează evidențe 2 ani.",
      de: "Betreiber verantwortlich: plant Fahrten die Konformität ermöglichen, schult Fahrer, lädt Daten herunter und analysiert, bewahrt Aufzeichnungen 2 Jahre auf.",
      en: "Operator responsible: plan trips allowing compliance, train drivers, download and analyze data, keep records for 2 years."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Audit autorități: cum demonstrezi conformitatea pentru ultimele 12 luni?",
      de: "Behördenaudit: wie weist du Konformität der letzten 12 Monate nach?",
      en: "Authority audit: how do you demonstrate compliance for last 12 months?"
    },
    options: {
      ro: ["Doar explicații verbale", "Date tahograf descărcate, analiza încălcărilor, acțiuni corective, training documentation, registre complete", "Doar tahograful", "Nu există audituri"],
      de: ["Nur mündliche Erklärungen", "Heruntergeladene Tachograph-Daten, Verstoßanalyse, Korrekturmaßnahmen, Schulungsdokumentation, vollständige Register", "Nur Tachograph", "Keine Audits"],
      en: ["Only verbal explanations", "Downloaded tachograph data, violation analysis, corrective actions, training documentation, complete registers", "Only tachograph", "No audits exist"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Audit ready: date tahograf descărcate în termen, rapoarte analiză, dovezi acțiuni corective, evidență training, registre vehicule și șoferi complete.",
      de: "Audit-bereit: fristgerecht heruntergeladene Tachograph-Daten, Analyseberichte, Nachweise Korrekturmaßnahmen, Schulungsnachweise, vollständige Fahrzeug- und Fahrerregister.",
      en: "Audit ready: tachograph data downloaded on time, analysis reports, corrective action evidence, training records, complete vehicle and driver registers."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'other work' pe tahograf?",
      de: "Was ist 'andere Arbeit' am Tachograph?",
      en: "What is 'other work' on tachograph?"
    },
    options: {
      ro: ["Odihnă", "Orice muncă în afara conducerii: încărcare, documente, întreținere vehicul", "Condus lent", "Pauză"],
      de: ["Ruhe", "Jede Arbeit außer Fahren: Beladung, Dokumente, Fahrzeugwartung", "Langsam fahren", "Pause"],
      en: ["Rest", "Any work other than driving: loading, documents, vehicle maintenance", "Slow driving", "Break"]
    },
    correctIndex: 1,
    explanation: {
      ro: "'Other work': încărcare/descărcare, verificare documente, curățare vehicul, așteptare activă. Contează în timpul de lucru total (max 13-15h/zi).",
      de: "'Andere Arbeit': Be-/Entladung, Dokumentenprüfung, Fahrzeugreinigung, aktives Warten. Zählt zur Gesamtarbeitszeit (max 13-15h/Tag).",
      en: "'Other work': loading/unloading, document checking, vehicle cleaning, active waiting. Counts toward total working time (max 13-15h/day)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Diferența între regulile UE și regulile AETR pentru țări non-UE.",
      de: "Unterschied zwischen EU-Regeln und AETR-Regeln für Nicht-EU-Länder.",
      en: "Difference between EU rules and AETR rules for non-EU countries."
    },
    options: {
      ro: ["Complet diferite", "În mare parte similare, AETR aplicabil pentru rute care trec prin/către țări non-UE semnataré (ex: Turcia, Rusia)", "Nu există AETR", "Doar UE are reguli"],
      de: ["Komplett verschieden", "Größtenteils ähnlich, AETR anwendbar für Routen durch/nach Nicht-EU-Unterzeichnerländer (z.B. Türkei, Russland)", "AETR existiert nicht", "Nur EU hat Regeln"],
      en: ["Completely different", "Mostly similar, AETR applicable for routes through/to non-EU signatory countries (e.g., Turkey, Russia)", "AETR doesn't exist", "Only EU has rules"]
    },
    correctIndex: 1,
    explanation: {
      ro: "AETR: acord internațional, reguli similare cu UE. Se aplică când treci prin țări non-UE semnatare. Unele diferențe minore la excepții.",
      de: "AETR: internationales Abkommen, ähnliche Regeln wie EU. Gilt wenn man durch Nicht-EU-Unterzeichnerländer fährt. Einige kleine Unterschiede bei Ausnahmen.",
      en: "AETR: international agreement, rules similar to EU. Applies when passing through non-EU signatory countries. Some minor differences in exceptions."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Mobility Package: schimbări majore din 2020-2022 pentru timpii de conducere și odihnă.",
      de: "Mobility Package: wichtige Änderungen 2020-2022 für Lenk- und Ruhezeiten.",
      en: "Mobility Package: major changes 2020-2022 for driving and rest times."
    },
    options: {
      ro: ["Nicio schimbare", "Întoarcere la bază la 4 săpt, odihnă săptămânală nu în cabină, reguli noi pentru transport internațional", "Doar cabotaj", "Doar tahograf"],
      de: ["Keine Änderung", "Rückkehr zur Basis alle 4 Wochen, Wochenruhe nicht in Kabine, neue Regeln für internationalen Transport", "Nur Kabotage", "Nur Tachograph"],
      en: ["No changes", "Return to base every 4 weeks, weekly rest not in cabin, new rules for international transport", "Only cabotage", "Only tachograph"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mobility Package: șofer întoarcere la bază/acasă la 4 săptămâni, odihnă săptămânală normală interzisă în cabină, tahograf inteligent obligatoriu 2023.",
      de: "Mobility Package: Fahrer-Rückkehr zu Basis/Zuhause alle 4 Wochen, normale Wochenruhe in Kabine verboten, intelligenter Tachograph Pflicht 2023.",
      en: "Mobility Package: driver return to base/home every 4 weeks, normal weekly rest forbidden in cabin, smart tachograph mandatory 2023."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este cardul de șofer pentru tahograf?",
      de: "Was ist die Fahrerkarte für den Tachograph?",
      en: "What is the driver card for tachograph?"
    },
    options: {
      ro: ["Permis de conducere", "Card personal care identifică șoferul și stochează activitatea ultimelor 28 zile", "Card de credit", "Card de parcare"],
      de: ["Führerschein", "Persönliche Karte die Fahrer identifiziert und Aktivität der letzten 28 Tage speichert", "Kreditkarte", "Parkkarte"],
      en: ["Driving license", "Personal card identifying driver and storing activity of last 28 days", "Credit card", "Parking card"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Card șofer: emis de autoritate, personal și netransferabil, stochează date 28 zile. Trebuie descărcat cel puțin la 28 zile. Valabil 5 ani.",
      de: "Fahrerkarte: von Behörde ausgestellt, persönlich und nicht übertragbar, speichert 28 Tage Daten. Muss mindestens alle 28 Tage heruntergeladen werden. 5 Jahre gültig.",
      en: "Driver card: issued by authority, personal and non-transferable, stores 28 days of data. Must be downloaded at least every 28 days. Valid 5 years."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum planifici o cursă pentru a evita încălcări de timp de conducere?",
      de: "Wie planst du eine Fahrt um Lenkzeitverstöße zu vermeiden?",
      en: "How do you plan a trip to avoid driving time violations?"
    },
    options: {
      ro: ["Nu planifici", "Estimare realistă km/timp, locații pauze/parkinguri securizate, marje pentru trafic, comunicare cu șofer", "Doar GPS", "Doar hărți"],
      de: ["Nicht planen", "Realistische km/Zeit-Schätzung, Pausen-/sichere Parkplätze, Puffer für Verkehr, Kommunikation mit Fahrer", "Nur GPS", "Nur Karten"],
      en: ["Don't plan", "Realistic km/time estimate, break locations/secure parking, traffic buffers, communication with driver", "Only GPS", "Only maps"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Planificare: viteză medie realistă (70-80 km/h incluzând opriri), identifică parkinguri sigure pentru noapte, lasă marje, comunică cu șoferul pe traseu.",
      de: "Planung: realistische Durchschnittsgeschwindigkeit (70-80 km/h inkl. Stopps), sichere Nachtparkplätze identifizieren, Puffer lassen, unterwegs mit Fahrer kommunizieren.",
      en: "Planning: realistic average speed (70-80 km/h including stops), identify safe overnight parking, leave buffers, communicate with driver en route."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Tahograf inteligent (smart tachograph) generația 2. Funcții noi și cerințe.",
      de: "Intelligenter Tachograph Generation 2. Neue Funktionen und Anforderungen.",
      en: "Smart tachograph generation 2. New features and requirements."
    },
    options: {
      ro: ["La fel ca versiunea veche", "GNSS mai precis, comunicare DSRC pentru control la distanță, detectare automată trecere graniță, interface nou", "Doar GPS", "Opțional"],
      de: ["Gleich wie alte Version", "Genaueres GNSS, DSRC-Kommunikation für Fernkontrolle, automatische Grenzübertritts-Erkennung, neue Schnittstelle", "Nur GPS", "Optional"],
      en: ["Same as old version", "More precise GNSS, DSRC communication for remote control, automatic border crossing detection, new interface", "Only GPS", "Optional"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Smart tacho gen 2: GNSS îmbunătățit, DSRC pentru control roadside, înregistrează automat trecerile de graniță și locațiile încărcare/descărcare. Obligatoriu din 2023.",
      de: "Smart Tacho Gen 2: verbessertes GNSS, DSRC für Straßenkontrolle, zeichnet automatisch Grenzübertritte und Be-/Entladeorte auf. Pflicht ab 2023.",
      en: "Smart tacho gen 2: improved GNSS, DSRC for roadside control, automatically records border crossings and loading/unloading locations. Mandatory from 2023."
    }
  }
];
