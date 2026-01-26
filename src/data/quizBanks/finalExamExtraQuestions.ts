import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

// 100 NEW questions for Final Exam - 2 per each of the 50 chapters
// These questions test advanced knowledge and practical application

export const finalExamExtraQuestions: Record<string, QuizQuestion[]> = {
  // MINDSET - 2 questions
  'mindset': [
    {
      question: {
        ro: "Ce strategie de gândire diferențiază un disponent excelent de unul mediocru?",
        de: "Welche Denkstrategie unterscheidet einen exzellenten Disponenten von einem durchschnittlichen?",
        en: "What thinking strategy differentiates an excellent dispatcher from an average one?"
      },
      options: {
        ro: ["Reacție la probleme când apar", "Anticiparea scenariilor și pregătirea soluțiilor înainte de criză", "Delegarea tuturor deciziilor", "Evitarea riscurilor complet"],
        de: ["Reaktion auf Probleme wenn sie auftreten", "Szenarien antizipieren und Lösungen vor der Krise vorbereiten", "Alle Entscheidungen delegieren", "Risiken komplett vermeiden"],
        en: ["Reacting to problems when they occur", "Anticipating scenarios and preparing solutions before crisis", "Delegating all decisions", "Avoiding risks completely"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Disponentul excelent gândește proactiv, anticipând probleme și având planuri de rezervă pregătite.",
        de: "Der exzellente Disponent denkt proaktiv, antizipiert Probleme und hat Backup-Pläne vorbereitet.",
        en: "The excellent dispatcher thinks proactively, anticipating problems and having backup plans ready."
      }
    },
    {
      question: {
        ro: "Cum construiești reziliența profesională în transport?",
        de: "Wie baut man berufliche Resilienz im Transport auf?",
        en: "How do you build professional resilience in transport?"
      },
      options: {
        ro: ["Evitând complet situațiile stresante", "Prin experiență diversificată, analiză post-incident și dezvoltare continuă", "Lucrând doar cu clienți ușori", "Ignorând eșecurile"],
        de: ["Stresssituationen komplett vermeiden", "Durch vielfältige Erfahrung, Post-Incident-Analyse und kontinuierliche Entwicklung", "Nur mit einfachen Kunden arbeiten", "Misserfolge ignorieren"],
        en: ["Avoiding stressful situations completely", "Through diverse experience, post-incident analysis and continuous development", "Working only with easy clients", "Ignoring failures"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Reziliența se construiește prin expunere controlată la provocări și învățare din fiecare situație.",
        de: "Resilienz wird durch kontrollierte Exposition gegenüber Herausforderungen und Lernen aus jeder Situation aufgebaut.",
        en: "Resilience is built through controlled exposure to challenges and learning from each situation."
      }
    }
  ],

  // SOFT-SKILLS - 2 questions
  'soft-skills': [
    {
      question: {
        ro: "Care este cea mai eficientă tehnică de dezescaladare a unui conflict cu un șofer furios?",
        de: "Was ist die effektivste Deeskalationstechnik bei einem wütenden Fahrer?",
        en: "What is the most effective de-escalation technique with an angry driver?"
      },
      options: {
        ro: ["Ridici tonul pentru a te impune", "Asculți activ, validezi emoțiile și propui soluții concrete", "Închizi telefonul", "Ameninți cu penalități"],
        de: ["Lautstärke erhöhen um sich durchzusetzen", "Aktiv zuhören, Emotionen validieren und konkrete Lösungen vorschlagen", "Auflegen", "Mit Strafen drohen"],
        en: ["Raise your voice to assert yourself", "Listen actively, validate emotions and propose concrete solutions", "Hang up the phone", "Threaten with penalties"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Dezescaladarea necesită empatie, recunoașterea frustrării și focus pe soluționare, nu pe conflict.",
        de: "Deeskalation erfordert Empathie, Anerkennung der Frustration und Fokus auf Lösungen, nicht auf Konflikt.",
        en: "De-escalation requires empathy, acknowledging frustration and focusing on solutions, not conflict."
      }
    },
    {
      question: {
        ro: "Cum adaptezi stilul de comunicare pentru parteneri din culturi diferite?",
        de: "Wie passen Sie Ihren Kommunikationsstil an Partner aus verschiedenen Kulturen an?",
        en: "How do you adapt your communication style for partners from different cultures?"
      },
      options: {
        ro: ["Folosești același stil pentru toți", "Studiezi normele culturale și adaptezi formalitatea, directitatea și ritmul", "Comunici doar în scris", "Eviți comunicarea directă"],
        de: ["Gleichen Stil für alle verwenden", "Kulturelle Normen studieren und Formalität, Direktheit und Tempo anpassen", "Nur schriftlich kommunizieren", "Direkte Kommunikation vermeiden"],
        en: ["Use the same style for everyone", "Study cultural norms and adapt formality, directness and pace", "Communicate only in writing", "Avoid direct communication"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Inteligența culturală presupune adaptarea stilului de comunicare la contextul cultural al interlocutorului.",
        de: "Kulturelle Intelligenz bedeutet, den Kommunikationsstil an den kulturellen Kontext des Gesprächspartners anzupassen.",
        en: "Cultural intelligence means adapting communication style to the cultural context of the interlocutor."
      }
    }
  ],

  // STRESS-MANAGEMENT - 2 questions
  'stress-management': [
    {
      question: {
        ro: "Care este cel mai eficient mod de a preveni burnout-ul în logistică?",
        de: "Was ist der effektivste Weg, Burnout in der Logistik zu verhindern?",
        en: "What is the most effective way to prevent burnout in logistics?"
      },
      options: {
        ro: ["Lucrezi și mai mult pentru a termina mai repede", "Stabilești limite clare, deleghi și practici recuperare activă", "Eviți sarcinile dificile", "Schimbi locul de muncă frecvent"],
        de: ["Noch mehr arbeiten um schneller fertig zu werden", "Klare Grenzen setzen, delegieren und aktive Erholung praktizieren", "Schwierige Aufgaben vermeiden", "Häufig den Arbeitsplatz wechseln"],
        en: ["Work even more to finish faster", "Set clear boundaries, delegate and practice active recovery", "Avoid difficult tasks", "Change jobs frequently"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Prevenirea burnout-ului necesită echilibru, limite sănătoase și strategii active de recuperare.",
        de: "Burnout-Prävention erfordert Balance, gesunde Grenzen und aktive Erholungsstrategien.",
        en: "Burnout prevention requires balance, healthy boundaries and active recovery strategies."
      }
    },
    {
      question: {
        ro: "Cum gestionezi multiple urgențe simultane fără să pierzi controlul?",
        de: "Wie managen Sie mehrere gleichzeitige Notfälle ohne die Kontrolle zu verlieren?",
        en: "How do you manage multiple simultaneous emergencies without losing control?"
      },
      options: {
        ro: ["Te ocupi de toate în același timp", "Triezi după impact și urgență, deleghi ce se poate, comunici proactiv", "Ignori pe cele mai puțin importante", "Amâni totul până se calmează situația"],
        de: ["Alles gleichzeitig bearbeiten", "Nach Auswirkung und Dringlichkeit sortieren, delegieren wo möglich, proaktiv kommunizieren", "Weniger wichtige ignorieren", "Alles verschieben bis sich die Lage beruhigt"],
        en: ["Handle everything at the same time", "Triage by impact and urgency, delegate what's possible, communicate proactively", "Ignore the less important ones", "Postpone everything until the situation calms"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Triajul eficient, delegarea și comunicarea proactivă sunt esențiale în gestionarea crizelor multiple.",
        de: "Effektive Triage, Delegation und proaktive Kommunikation sind bei der Bewältigung mehrerer Krisen unerlässlich.",
        en: "Effective triage, delegation and proactive communication are essential in managing multiple crises."
      }
    }
  ],

  // WORKFLOW - 2 questions
  'workflow': [
    {
      question: {
        ro: "Care este ordinea corectă a pașilor pentru o comandă de transport internațional?",
        de: "Was ist die richtige Reihenfolge der Schritte für einen internationalen Transportauftrag?",
        en: "What is the correct order of steps for an international transport order?"
      },
      options: {
        ro: ["Confirmare preț → Verificare disponibilitate → Rezervare → Documente", "Verificare cerințe → Cotație → Confirmare → Planificare → Execuție → Facturare", "Facturare → Execuție → Planificare", "Rezervare → Cotație → Documente"],
        de: ["Preisbestätigung → Verfügbarkeit prüfen → Buchung → Dokumente", "Anforderungen prüfen → Angebot → Bestätigung → Planung → Ausführung → Rechnungsstellung", "Rechnungsstellung → Ausführung → Planung", "Buchung → Angebot → Dokumente"],
        en: ["Price confirmation → Check availability → Booking → Documents", "Check requirements → Quote → Confirmation → Planning → Execution → Invoicing", "Invoicing → Execution → Planning", "Booking → Quote → Documents"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Fluxul corect asigură că toate cerințele sunt verificate înainte de angajare și că fiecare etapă este documentată.",
        de: "Der korrekte Ablauf stellt sicher, dass alle Anforderungen vor der Verpflichtung geprüft und jede Phase dokumentiert wird.",
        en: "The correct flow ensures all requirements are verified before commitment and each stage is documented."
      }
    },
    {
      question: {
        ro: "Ce verifici în primele 5 minute după primirea unei comenzi urgente?",
        de: "Was überprüfen Sie in den ersten 5 Minuten nach Erhalt eines dringenden Auftrags?",
        en: "What do you check in the first 5 minutes after receiving an urgent order?"
      },
      options: {
        ro: ["Doar prețul", "Fezabilitate (rută, timp, tip vehicul), disponibilitate resurse, cerințe speciale", "Nimic, accept imediat", "Doar disponibilitatea șoferului"],
        de: ["Nur den Preis", "Machbarkeit (Route, Zeit, Fahrzeugtyp), Ressourcenverfügbarkeit, besondere Anforderungen", "Nichts, sofort annehmen", "Nur Fahrerverfügbarkeit"],
        en: ["Only the price", "Feasibility (route, time, vehicle type), resource availability, special requirements", "Nothing, accept immediately", "Only driver availability"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Validarea rapidă a fezabilității previne angajamente imposibile și protejează reputația companiei.",
        de: "Schnelle Machbarkeitsprüfung verhindert unmögliche Verpflichtungen und schützt den Ruf des Unternehmens.",
        en: "Quick feasibility validation prevents impossible commitments and protects company reputation."
      }
    }
  ],

  // VEHICLE - 2 questions
  'vehicle': [
    {
      question: {
        ro: "Care este diferența principală între un Mega Trailer și un Standard Trailer?",
        de: "Was ist der Hauptunterschied zwischen einem Mega Trailer und einem Standard Trailer?",
        en: "What is the main difference between a Mega Trailer and a Standard Trailer?"
      },
      options: {
        ro: ["Mega are motoare mai puternice", "Mega are înălțime interioară mai mare (3m vs 2.7m) datorită roților mici", "Mega transportă doar lichide", "Nu există diferențe semnificative"],
        de: ["Mega hat stärkere Motoren", "Mega hat größere Innenhöhe (3m vs 2,7m) durch kleine Räder", "Mega transportiert nur Flüssigkeiten", "Keine wesentlichen Unterschiede"],
        en: ["Mega has more powerful engines", "Mega has greater interior height (3m vs 2.7m) due to small wheels", "Mega transports only liquids", "No significant differences"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Mega Trailer-ul folosește roți mai mici pentru a câștiga înălțime interioară, ideal pentru paleți înalți.",
        de: "Der Mega-Trailer verwendet kleinere Räder für mehr Innenhöhe, ideal für hohe Paletten.",
        en: "The Mega Trailer uses smaller wheels to gain interior height, ideal for tall pallets."
      }
    },
    {
      question: {
        ro: "Ce verifici obligatoriu la un vehicul înainte de încărcare ADR?",
        de: "Was müssen Sie bei einem Fahrzeug vor einer ADR-Beladung unbedingt prüfen?",
        en: "What must you check on a vehicle before ADR loading?"
      },
      options: {
        ro: ["Doar culoarea vehiculului", "Certificat ADR valid, echipament de siguranță complet, panouri și etichete corespunzătoare", "Doar kilometrajul", "Doar asigurarea"],
        de: ["Nur die Fahrzeugfarbe", "Gültiges ADR-Zertifikat, vollständige Sicherheitsausrüstung, entsprechende Tafeln und Etiketten", "Nur den Kilometerstand", "Nur die Versicherung"],
        en: ["Only vehicle color", "Valid ADR certificate, complete safety equipment, appropriate placards and labels", "Only mileage", "Only insurance"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Transportul ADR necesită certificări specifice, echipament de urgență și marcare corectă a vehiculului.",
        de: "ADR-Transport erfordert spezifische Zertifizierungen, Notfallausrüstung und korrekte Fahrzeugkennzeichnung.",
        en: "ADR transport requires specific certifications, emergency equipment and correct vehicle marking."
      }
    }
  ],

  // LOADING - 2 questions
  'loading': [
    {
      question: {
        ro: "Care este regula de aur pentru distribuția greutății în remorcă?",
        de: "Was ist die goldene Regel für die Gewichtsverteilung im Anhänger?",
        en: "What is the golden rule for weight distribution in the trailer?"
      },
      options: {
        ro: ["Toată greutatea în spate", "Greutatea cea mai mare în față și centru, distribuită uniform pe axe", "Greutatea în mijloc exclusiv", "Nu contează distribuția"],
        de: ["Gesamtes Gewicht hinten", "Größtes Gewicht vorne und in der Mitte, gleichmäßig auf Achsen verteilt", "Gewicht nur in der Mitte", "Verteilung spielt keine Rolle"],
        en: ["All weight at the back", "Heaviest weight at front and center, evenly distributed across axles", "Weight only in the middle", "Distribution doesn't matter"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Distribuția corectă asigură stabilitate, respectă limitele pe axe și previne accidentele.",
        de: "Korrekte Verteilung gewährleistet Stabilität, respektiert Achslimits und verhindert Unfälle.",
        en: "Correct distribution ensures stability, respects axle limits and prevents accidents."
      }
    },
    {
      question: {
        ro: "Câte rânduri de paleți EUR poți încărca într-un trailer standard de 13.6m?",
        de: "Wie viele Reihen EUR-Paletten können Sie in einem 13,6m Standard-Trailer laden?",
        en: "How many rows of EUR pallets can you load in a 13.6m standard trailer?"
      },
      options: {
        ro: ["15 rânduri", "17 rânduri (33 paleți pe un nivel)", "20 rânduri", "12 rânduri"],
        de: ["15 Reihen", "17 Reihen (33 Paletten auf einer Ebene)", "20 Reihen", "12 Reihen"],
        en: ["15 rows", "17 rows (33 pallets on one level)", "20 rows", "12 rows"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Trailer-ul standard de 13.6m permite 17 rânduri × 2 paleți = 33 EUR paleți pe nivel, sau 66 cu stivuire.",
        de: "Der 13,6m Standard-Trailer ermöglicht 17 Reihen × 2 Paletten = 33 EUR-Paletten pro Ebene, oder 66 gestapelt.",
        en: "The 13.6m standard trailer allows 17 rows × 2 pallets = 33 EUR pallets per level, or 66 when stacked."
      }
    }
  ],

  // REEFER - 2 questions
  'reefer': [
    {
      question: {
        ro: "Care este temperatura corectă pentru transportul cărnii proaspete de vită?",
        de: "Was ist die richtige Temperatur für den Transport von frischem Rindfleisch?",
        en: "What is the correct temperature for transporting fresh beef?"
      },
      options: {
        ro: ["+10°C", "0°C până la +2°C", "-18°C", "+20°C"],
        de: ["+10°C", "0°C bis +2°C", "-18°C", "+20°C"],
        en: ["+10°C", "0°C to +2°C", "-18°C", "+20°C"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Carnea proaspătă necesită refrigerare la 0-2°C pentru a preveni dezvoltarea bacteriilor fără a o congela.",
        de: "Frischfleisch erfordert Kühlung bei 0-2°C, um Bakterienwachstum zu verhindern ohne einzufrieren.",
        en: "Fresh meat requires refrigeration at 0-2°C to prevent bacterial growth without freezing."
      }
    },
    {
      question: {
        ro: "Ce înseamnă 'cold chain break' și de ce este critic?",
        de: "Was bedeutet 'Unterbrechung der Kühlkette' und warum ist es kritisch?",
        en: "What does 'cold chain break' mean and why is it critical?"
      },
      options: {
        ro: ["Defecțiune la sistemul de frânare", "Întreruperea temperaturii controlate, provocând degradarea mărfii", "Schimbarea șoferului", "Oprirea pentru pauză"],
        de: ["Bremsanlagendefekt", "Unterbrechung der kontrollierten Temperatur, die zum Verderb der Ware führt", "Fahrerwechsel", "Pausenstopp"],
        en: ["Brake system failure", "Interruption of controlled temperature causing cargo degradation", "Driver change", "Break stop"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Întreruperea lanțului frigorific poate duce la pierderea întregii încărcături și reclamații majore.",
        de: "Die Unterbrechung der Kühlkette kann zum Verlust der gesamten Ladung und zu großen Reklamationen führen.",
        en: "Cold chain break can lead to loss of entire cargo and major claims."
      }
    }
  ],

  // EXPRESS-TRANSPORT - 2 questions
  'express-transport': [
    {
      question: {
        ro: "Care este timpul maxim tipic de livrare pentru un transport express în Europa?",
        de: "Was ist die typische maximale Lieferzeit für einen Expresstransport in Europa?",
        en: "What is the typical maximum delivery time for express transport in Europe?"
      },
      options: {
        ro: ["7 zile", "24-48 ore", "2 săptămâni", "5 zile"],
        de: ["7 Tage", "24-48 Stunden", "2 Wochen", "5 Tage"],
        en: ["7 days", "24-48 hours", "2 weeks", "5 days"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Transportul express garantează livrări rapide, de obicei în 24-48 ore, cu costuri premium.",
        de: "Expresstransport garantiert schnelle Lieferungen, normalerweise in 24-48 Stunden, zu Premiumkosten.",
        en: "Express transport guarantees fast deliveries, typically in 24-48 hours, at premium costs."
      }
    },
    {
      question: {
        ro: "Ce factori justifică prețul mai mare al transportului express?",
        de: "Welche Faktoren rechtfertigen den höheren Preis des Expresstransports?",
        en: "What factors justify the higher price of express transport?"
      },
      options: {
        ro: ["Doar culoarea vehiculului", "Dedicare exclusivă, prioritate, traseu direct, flexibilitate program", "Doar dimensiunea vehiculului", "Doar experiența șoferului"],
        de: ["Nur die Fahrzeugfarbe", "Exklusive Widmung, Priorität, direkte Route, Zeitplanflexibilität", "Nur die Fahrzeuggröße", "Nur Fahrererfahrung"],
        en: ["Only vehicle color", "Exclusive dedication, priority, direct route, schedule flexibility", "Only vehicle size", "Only driver experience"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Prețul express reflectă lipsa consolidării, urgența și angajamentul resurselor dedicate.",
        de: "Der Expresspreis spiegelt fehlende Konsolidierung, Dringlichkeit und Einsatz dedizierter Ressourcen wider.",
        en: "Express price reflects lack of consolidation, urgency and commitment of dedicated resources."
      }
    }
  ],

  // INTERMODAL - 2 questions
  'intermodal': [
    {
      question: {
        ro: "Care este avantajul principal al transportului intermodal feroviar pentru distanțe lungi?",
        de: "Was ist der Hauptvorteil des intermodalen Bahntransports für lange Strecken?",
        en: "What is the main advantage of intermodal rail transport for long distances?"
      },
      options: {
        ro: ["Este mai rapid decât rutier", "Costuri reduse, amprentă de carbon mai mică, evită restricții rutiere", "Nu necesită documente", "Este disponibil 24/7 fără programare"],
        de: ["Schneller als Straße", "Geringere Kosten, kleinerer CO2-Fußabdruck, umgeht Straßenbeschränkungen", "Keine Dokumente nötig", "24/7 verfügbar ohne Buchung"],
        en: ["Faster than road", "Lower costs, smaller carbon footprint, avoids road restrictions", "No documents needed", "Available 24/7 without booking"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Intermodalul feroviar este economic pentru distanțe >500km, reduce CO2 și evită restricții de weekend/noapte.",
        de: "Intermodaler Bahntransport ist für Strecken >500km wirtschaftlich, reduziert CO2 und umgeht Wochenend-/Nachtbeschränkungen.",
        en: "Intermodal rail is economical for distances >500km, reduces CO2 and avoids weekend/night restrictions."
      }
    },
    {
      question: {
        ro: "Ce este un 'swap body' în transportul intermodal?",
        de: "Was ist ein 'Wechselaufbau' im intermodalen Transport?",
        en: "What is a 'swap body' in intermodal transport?"
      },
      options: {
        ro: ["Un tip de container maritim", "Un container demontabil care se poate transfera între camion și tren fără macara specială", "Un vehicul de rezervă", "Un container refrigerat"],
        de: ["Ein Seecontainertyp", "Ein abnehmbarer Container, der ohne Spezialkran zwischen LKW und Zug transferiert werden kann", "Ein Reservefahrzeug", "Ein Kühlcontainer"],
        en: ["A type of maritime container", "A detachable container that can transfer between truck and train without special crane", "A backup vehicle", "A refrigerated container"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Swap body-urile sunt containere cu picioare retractabile, optimizate pentru transfer rapid rutier-feroviar.",
        de: "Wechselaufbauten sind Container mit einziehbaren Beinen, optimiert für schnellen Straßen-Schienen-Transfer.",
        en: "Swap bodies are containers with retractable legs, optimized for quick road-rail transfer."
      }
    }
  ],

  // WAREHOUSE - 2 questions
  'warehouse': [
    {
      question: {
        ro: "Ce înseamnă 'cross-docking' și când este eficient?",
        de: "Was bedeutet 'Cross-Docking' und wann ist es effizient?",
        en: "What does 'cross-docking' mean and when is it efficient?"
      },
      options: {
        ro: ["Depozitare pe termen lung", "Transfer direct din vehiculul de intrare în cel de ieșire, fără stocare", "Încrucișarea rutelor de transport", "Schimbarea documentelor între șoferi"],
        de: ["Langzeitlagerung", "Direkter Transfer vom eingehenden zum ausgehenden Fahrzeug ohne Lagerung", "Kreuzung von Transportrouten", "Dokumentenaustausch zwischen Fahrern"],
        en: ["Long-term storage", "Direct transfer from incoming to outgoing vehicle without storage", "Crossing transport routes", "Exchanging documents between drivers"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Cross-docking-ul minimizează timpul de depozitare și costurile, ideal pentru mărfuri cu rotație rapidă.",
        de: "Cross-Docking minimiert Lagerzeit und Kosten, ideal für schnell drehende Waren.",
        en: "Cross-docking minimizes storage time and costs, ideal for fast-moving goods."
      }
    },
    {
      question: {
        ro: "Care este funcția principală a unui WMS (Warehouse Management System)?",
        de: "Was ist die Hauptfunktion eines WMS (Warehouse Management System)?",
        en: "What is the main function of a WMS (Warehouse Management System)?"
      },
      options: {
        ro: ["Gestionarea resurselor umane", "Optimizarea stocurilor, locațiilor, picking-ului și expedierii în depozit", "Doar facturare", "Gestionarea flotei de vehicule"],
        de: ["Personalmanagement", "Optimierung von Beständen, Standorten, Kommissionierung und Versand im Lager", "Nur Rechnungsstellung", "Fuhrparkmanagement"],
        en: ["Human resources management", "Optimizing inventory, locations, picking and shipping in warehouse", "Invoicing only", "Fleet management"]
      },
      correctIndex: 1,
      explanation: {
        ro: "WMS controlează toate operațiunile de depozit: recepție, stocare, picking, ambalare și expediere.",
        de: "WMS steuert alle Lagervorgänge: Wareneingang, Lagerung, Kommissionierung, Verpackung und Versand.",
        en: "WMS controls all warehouse operations: receiving, storage, picking, packing and shipping."
      }
    }
  ],

  // ADR - 2 questions
  'adr': [
    {
      question: {
        ro: "Ce clasă ADR include gazele inflamabile precum propanul?",
        de: "Welche ADR-Klasse umfasst brennbare Gase wie Propan?",
        en: "What ADR class includes flammable gases like propane?"
      },
      options: {
        ro: ["Clasa 1", "Clasa 2.1", "Clasa 3", "Clasa 9"],
        de: ["Klasse 1", "Klasse 2.1", "Klasse 3", "Klasse 9"],
        en: ["Class 1", "Class 2.1", "Class 3", "Class 9"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Clasa 2.1 ADR cuprinde gazele inflamabile precum propan, butan și acetilen.",
        de: "ADR-Klasse 2.1 umfasst brennbare Gase wie Propan, Butan und Acetylen.",
        en: "ADR Class 2.1 includes flammable gases such as propane, butane and acetylene."
      }
    },
    {
      question: {
        ro: "Ce document este obligatoriu pentru transportul mărfurilor periculoase ADR?",
        de: "Welches Dokument ist für den Transport gefährlicher ADR-Güter obligatorisch?",
        en: "What document is mandatory for transporting ADR dangerous goods?"
      },
      options: {
        ro: ["Doar CMR", "Document de transport care include UN number, denumire, clasă, grup de ambalare", "Doar factura", "Doar certificatul vehiculului"],
        de: ["Nur CMR", "Beförderungspapier mit UN-Nummer, Bezeichnung, Klasse, Verpackungsgruppe", "Nur Rechnung", "Nur Fahrzeugzertifikat"],
        en: ["Only CMR", "Transport document including UN number, name, class, packing group", "Only invoice", "Only vehicle certificate"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Documentul de transport ADR trebuie să conțină informații complete despre substanța periculoasă transportată.",
        de: "Das ADR-Beförderungspapier muss vollständige Informationen über die transportierte gefährliche Substanz enthalten.",
        en: "The ADR transport document must contain complete information about the dangerous substance transported."
      }
    }
  ],

  // DOCUMENTS - 2 questions
  'documents': [
    {
      question: {
        ro: "Ce secțiune din CMR documentează starea mărfii la încărcare?",
        de: "Welcher CMR-Abschnitt dokumentiert den Zustand der Ware bei der Beladung?",
        en: "What CMR section documents the condition of goods at loading?"
      },
      options: {
        ro: ["Secțiunea 1-5", "Caseta 18 - Rezerve și observații", "Secțiunea de plată", "Semnătura destinatarului"],
        de: ["Abschnitt 1-5", "Feld 18 - Vorbehalte und Bemerkungen", "Zahlungsabschnitt", "Empfängerunterschrift"],
        en: ["Section 1-5", "Box 18 - Reservations and observations", "Payment section", "Consignee signature"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Caseta 18 din CMR este crucială pentru documentarea oricăror rezerve privind starea mărfii.",
        de: "Feld 18 im CMR ist entscheidend für die Dokumentation von Vorbehalten zum Warenzustand.",
        en: "Box 18 in CMR is crucial for documenting any reservations about the goods' condition."
      }
    },
    {
      question: {
        ro: "Câte exemplare originale trebuie să existe pentru un CMR valid?",
        de: "Wie viele Originalexemplare muss es für einen gültigen CMR geben?",
        en: "How many original copies must exist for a valid CMR?"
      },
      options: {
        ro: ["1 exemplar", "3 exemplare (expeditor, transportator, destinatar)", "5 exemplare", "2 exemplare"],
        de: ["1 Exemplar", "3 Exemplare (Absender, Frachtführer, Empfänger)", "5 Exemplare", "2 Exemplare"],
        en: ["1 copy", "3 copies (sender, carrier, consignee)", "5 copies", "2 copies"]
      },
      correctIndex: 1,
      explanation: {
        ro: "CMR-ul se emite în 3 exemplare originale: unul pentru expeditor, unul pentru transportator și unul pentru destinatar.",
        de: "Der CMR wird in 3 Originalexemplaren ausgestellt: eines für Absender, Frachtführer und Empfänger.",
        en: "CMR is issued in 3 original copies: one for sender, carrier and consignee."
      }
    }
  ],

  // INCOTERMS - 2 questions
  'incoterms': [
    {
      question: {
        ro: "La ce Incoterm riscul trece la cumpărător când marfa este livrată transportatorului?",
        de: "Bei welchem Incoterm geht das Risiko auf den Käufer über, wenn die Ware an den Frachtführer übergeben wird?",
        en: "At which Incoterm does risk transfer to buyer when goods are delivered to carrier?"
      },
      options: {
        ro: ["DDP", "FCA (Free Carrier)", "DAP", "EXW"],
        de: ["DDP", "FCA (Frei Frachtführer)", "DAP", "EXW"],
        en: ["DDP", "FCA (Free Carrier)", "DAP", "EXW"]
      },
      correctIndex: 1,
      explanation: {
        ro: "FCA - riscul trece la cumpărător când marfa este predată primului transportator la locul convenit.",
        de: "FCA - das Risiko geht auf den Käufer über, wenn die Ware am vereinbarten Ort an den ersten Frachtführer übergeben wird.",
        en: "FCA - risk transfers to buyer when goods are handed over to the first carrier at the named place."
      }
    },
    {
      question: {
        ro: "Care Incoterm implică cea mai mare responsabilitate pentru vânzător?",
        de: "Welcher Incoterm beinhaltet die größte Verantwortung für den Verkäufer?",
        en: "Which Incoterm involves the greatest responsibility for the seller?"
      },
      options: {
        ro: ["EXW", "FCA", "DDP (Delivered Duty Paid)", "FOB"],
        de: ["EXW", "FCA", "DDP (Geliefert verzollt)", "FOB"],
        en: ["EXW", "FCA", "DDP (Delivered Duty Paid)", "FOB"]
      },
      correctIndex: 2,
      explanation: {
        ro: "DDP - vânzătorul suportă toate costurile și riscurile până la destinație, inclusiv taxe vamale.",
        de: "DDP - der Verkäufer trägt alle Kosten und Risiken bis zum Bestimmungsort, einschließlich Zollabgaben.",
        en: "DDP - seller bears all costs and risks to destination, including customs duties."
      }
    }
  ],

  // CUSTOMS - 2 questions
  'customs': [
    {
      question: {
        ro: "Ce document este necesar pentru import/export cu țări non-UE?",
        de: "Welches Dokument ist für den Import/Export mit Nicht-EU-Ländern erforderlich?",
        en: "What document is needed for import/export with non-EU countries?"
      },
      options: {
        ro: ["Doar CMR", "Declarație vamală (SAD/DAU) și documente comerciale", "Doar factura", "Doar packing list"],
        de: ["Nur CMR", "Zollanmeldung (SAD/DAU) und Handelsdokumente", "Nur Rechnung", "Nur Packliste"],
        en: ["Only CMR", "Customs declaration (SAD/DAU) and commercial documents", "Only invoice", "Only packing list"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Operațiunile cu țări terțe necesită declarații vamale formale și documente comerciale complete.",
        de: "Operationen mit Drittländern erfordern formelle Zollanmeldungen und vollständige Handelsdokumente.",
        en: "Operations with third countries require formal customs declarations and complete commercial documents."
      }
    },
    {
      question: {
        ro: "Ce înseamnă regimul de tranzit T1?",
        de: "Was bedeutet das Versandverfahren T1?",
        en: "What does the T1 transit procedure mean?"
      },
      options: {
        ro: ["Marfă UE în tranzit intern", "Marfă non-UE în tranzit prin UE sub supraveghere vamală", "Transport intern fără taxe", "Transfer între depozite"],
        de: ["EU-Ware im internen Transit", "Nicht-EU-Ware im Transit durch EU unter Zollaufsicht", "Interner Transport ohne Steuern", "Transfer zwischen Lagern"],
        en: ["EU goods in internal transit", "Non-EU goods in transit through EU under customs supervision", "Internal transport without taxes", "Transfer between warehouses"]
      },
      correctIndex: 1,
      explanation: {
        ro: "T1 permite tranzitul mărfurilor non-UE prin teritoriul vamal UE fără plata taxelor vamale.",
        de: "T1 ermöglicht den Transit von Nicht-EU-Waren durch das EU-Zollgebiet ohne Zahlung von Zöllen.",
        en: "T1 allows transit of non-EU goods through EU customs territory without paying duties."
      }
    }
  ],

  // AUTHORITIES - 2 questions
  'authorities': [
    {
      question: {
        ro: "Care este autoritatea responsabilă pentru licențele de transport în România?",
        de: "Welche Behörde ist für Transportlizenzen in Rumänien zuständig?",
        en: "Which authority is responsible for transport licenses in Romania?"
      },
      options: {
        ro: ["Primăria locală", "Autoritatea Rutieră Română (ARR)", "Ministerul de Finanțe", "Inspectoratul de Poliție"],
        de: ["Lokale Stadtverwaltung", "Rumänische Straßenbehörde (ARR)", "Finanzministerium", "Polizeiinspektion"],
        en: ["Local city hall", "Romanian Road Authority (ARR)", "Ministry of Finance", "Police Inspectorate"]
      },
      correctIndex: 1,
      explanation: {
        ro: "ARR emite și gestionează licențele de transport, autorizațiile și certificatele de competență profesională.",
        de: "Die ARR stellt Transportlizenzen, Genehmigungen und Berufsbefähigungszeugnisse aus und verwaltet sie.",
        en: "ARR issues and manages transport licenses, authorizations and professional competence certificates."
      }
    },
    {
      question: {
        ro: "Ce verifică ISCTR (Inspectoratul de Stat pentru Control în Transportul Rutier)?",
        de: "Was kontrolliert das ISCTR (Staatliche Inspektorat für die Kontrolle des Straßenverkehrs)?",
        en: "What does ISCTR (State Inspectorate for Road Transport Control) check?"
      },
      options: {
        ro: ["Doar calitatea drumurilor", "Conformitatea vehiculelor, timpii de conducere, greutățile, documentele de transport", "Doar taxele rutiere", "Doar starea tehnică a vehiculelor"],
        de: ["Nur Straßenqualität", "Fahrzeugkonformität, Lenkzeiten, Gewichte, Transportdokumente", "Nur Straßengebühren", "Nur technischer Zustand der Fahrzeuge"],
        en: ["Only road quality", "Vehicle compliance, driving times, weights, transport documents", "Only road taxes", "Only vehicle technical condition"]
      },
      correctIndex: 1,
      explanation: {
        ro: "ISCTR efectuează controale complete: tahograf, greutăți, documente, stare tehnică și conformitate ADR.",
        de: "ISCTR führt umfassende Kontrollen durch: Tachograph, Gewichte, Dokumente, technischer Zustand und ADR-Konformität.",
        en: "ISCTR performs complete checks: tachograph, weights, documents, technical condition and ADR compliance."
      }
    }
  ],

  // COMPLIANCE - 2 questions
  'compliance': [
    {
      question: {
        ro: "Ce este CPC (Certificatul de Competență Profesională) pentru manageri de transport?",
        de: "Was ist der CPC (Berufsfähigkeitsnachweis) für Verkehrsleiter?",
        en: "What is CPC (Certificate of Professional Competence) for transport managers?"
      },
      options: {
        ro: ["Un permis de conducere special", "O certificare obligatorie pentru persoanele responsabile de operațiunile de transport", "O asigurare suplimentară", "Un document medical"],
        de: ["Ein spezieller Führerschein", "Eine obligatorische Zertifizierung für Personen, die für Transportoperationen verantwortlich sind", "Eine zusätzliche Versicherung", "Ein medizinisches Dokument"],
        en: ["A special driving license", "A mandatory certification for persons responsible for transport operations", "Additional insurance", "A medical document"]
      },
      correctIndex: 1,
      explanation: {
        ro: "CPC-ul managerului de transport este obligatoriu pentru operatorii de transport și validează competența profesională.",
        de: "Der CPC des Verkehrsleiters ist für Transportunternehmer obligatorisch und bestätigt die berufliche Kompetenz.",
        en: "Transport manager CPC is mandatory for transport operators and validates professional competence."
      }
    },
    {
      question: {
        ro: "Care este perioada de valabilitate a licenței comunitare pentru transportul de marfă?",
        de: "Wie lange ist die Gemeinschaftslizenz für den Güterverkehr gültig?",
        en: "What is the validity period of the community license for freight transport?"
      },
      options: {
        ro: ["1 an", "5 ani (cu posibilitate de reînnoire)", "10 ani", "Nelimitată"],
        de: ["1 Jahr", "5 Jahre (mit Verlängerungsmöglichkeit)", "10 Jahre", "Unbegrenzt"],
        en: ["1 year", "5 years (with renewal option)", "10 years", "Unlimited"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Licența comunitară este valabilă 5 ani și necesită reînnoire cu verificarea condițiilor de conformitate.",
        de: "Die Gemeinschaftslizenz ist 5 Jahre gültig und erfordert eine Erneuerung mit Überprüfung der Compliance-Bedingungen.",
        en: "Community license is valid for 5 years and requires renewal with verification of compliance conditions."
      }
    }
  ],

  // DRIVING-TIME - 2 questions
  'driving-time': [
    {
      question: {
        ro: "Care este timpul maxim de conducere zilnic conform regulamentului UE 561/2006?",
        de: "Was ist die maximale tägliche Lenkzeit gemäß EU-Verordnung 561/2006?",
        en: "What is the maximum daily driving time according to EU regulation 561/2006?"
      },
      options: {
        ro: ["12 ore", "9 ore (extinibil la 10 ore de 2 ori pe săptămână)", "8 ore", "11 ore"],
        de: ["12 Stunden", "9 Stunden (2 mal wöchentlich auf 10 Stunden erweiterbar)", "8 Stunden", "11 Stunden"],
        en: ["12 hours", "9 hours (extendable to 10 hours twice weekly)", "8 hours", "11 hours"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Conducerea zilnică este limitată la 9 ore, cu posibilitatea de extindere la 10 ore de maximum 2 ori pe săptămână.",
        de: "Die tägliche Lenkzeit ist auf 9 Stunden begrenzt, mit der Möglichkeit, sie maximal 2 mal pro Woche auf 10 Stunden zu verlängern.",
        en: "Daily driving is limited to 9 hours, with the option to extend to 10 hours maximum twice per week."
      }
    },
    {
      question: {
        ro: "Ce este o 'pauză split' și cum se aplică?",
        de: "Was ist eine 'geteilte Pause' und wie wird sie angewendet?",
        en: "What is a 'split break' and how is it applied?"
      },
      options: {
        ro: ["O pauză luată în mișcare", "Împărțirea pauzei de 45min în 15min + 30min consecutive", "O pauză luată noaptea", "O pauză de 1 oră"],
        de: ["Eine Pause während der Fahrt", "Aufteilung der 45-Minuten-Pause in 15 Min + 30 Min aufeinanderfolgend", "Eine Pause in der Nacht", "Eine 1-Stunden-Pause"],
        en: ["A break taken while driving", "Splitting the 45min break into 15min + 30min consecutive", "A break taken at night", "A 1-hour break"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Pauza obligatorie de 45 minute poate fi împărțită în 15 minute urmată obligatoriu de cel puțin 30 minute.",
        de: "Die obligatorische 45-Minuten-Pause kann in 15 Minuten aufgeteilt werden, gefolgt von mindestens 30 Minuten.",
        en: "The mandatory 45-minute break can be split into 15 minutes mandatorily followed by at least 30 minutes."
      }
    }
  ],

  // LICENSES-OVERSIZE - 2 questions
  'licenses-oversize': [
    {
      question: {
        ro: "Ce autorizație este necesară pentru transportul supradimensionat în România?",
        de: "Welche Genehmigung ist für den übergroßen Transport in Rumänien erforderlich?",
        en: "What authorization is needed for oversize transport in Romania?"
      },
      options: {
        ro: ["Doar licența de transport", "Autorizație Specială de Transport (AST) de la CNAIR", "Doar asigurare suplimentară", "Permis internațional"],
        de: ["Nur Transportlizenz", "Sondertransportgenehmigung (AST) von CNAIR", "Nur Zusatzversicherung", "Internationale Genehmigung"],
        en: ["Only transport license", "Special Transport Authorization (AST) from CNAIR", "Only additional insurance", "International permit"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Transporturile care depășesc dimensiunile/greutățile standard necesită autorizație specială de la CNAIR.",
        de: "Transporte, die Standardmaße/-gewichte überschreiten, erfordern eine Sondergenehmigung von CNAIR.",
        en: "Transports exceeding standard dimensions/weights require special authorization from CNAIR."
      }
    },
    {
      question: {
        ro: "De la ce lățime a încărcăturii devine obligatorie escorta?",
        de: "Ab welcher Ladungsbreite ist eine Eskorte obligatorisch?",
        en: "From what cargo width does escort become mandatory?"
      },
      options: {
        ro: ["2.55m", "3.5m (sau conform autorizației specifice țării)", "4m", "2m"],
        de: ["2,55m", "3,5m (oder gemäß länderspezifischer Genehmigung)", "4m", "2m"],
        en: ["2.55m", "3.5m (or according to country-specific authorization)", "4m", "2m"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Escorta devine obligatorie pentru lățimi >3.5m în majoritatea țărilor, cu variații în funcție de legislația locală.",
        de: "Eskorte wird für Breiten >3,5m in den meisten Ländern obligatorisch, mit Variationen je nach lokaler Gesetzgebung.",
        en: "Escort becomes mandatory for widths >3.5m in most countries, with variations according to local legislation."
      }
    }
  ],

  // EUROPE-ZONES - 2 questions
  'europe-zones': [
    {
      question: {
        ro: "Care țări fac parte din Spațiul Economic European dar nu din UE?",
        de: "Welche Länder gehören zum Europäischen Wirtschaftsraum, aber nicht zur EU?",
        en: "Which countries are part of the European Economic Area but not the EU?"
      },
      options: {
        ro: ["Elveția și Turcia", "Norvegia, Islanda și Liechtenstein", "Ucraina și Moldova", "Marea Britanie și Serbia"],
        de: ["Schweiz und Türkei", "Norwegen, Island und Liechtenstein", "Ukraine und Moldawien", "Großbritannien und Serbien"],
        en: ["Switzerland and Turkey", "Norway, Iceland and Liechtenstein", "Ukraine and Moldova", "Great Britain and Serbia"]
      },
      correctIndex: 1,
      explanation: {
        ro: "EEA include UE plus Norvegia, Islanda și Liechtenstein, care au acces la piața unică fără a fi membri UE.",
        de: "Der EWR umfasst die EU plus Norwegen, Island und Liechtenstein, die Zugang zum Binnenmarkt haben, ohne EU-Mitglieder zu sein.",
        en: "EEA includes EU plus Norway, Iceland and Liechtenstein, which have single market access without being EU members."
      }
    },
    {
      question: {
        ro: "Ce restricții speciale se aplică în zona alpină pentru camioane?",
        de: "Welche besonderen Beschränkungen gelten für LKWs im Alpenraum?",
        en: "What special restrictions apply to trucks in the Alpine zone?"
      },
      options: {
        ro: ["Doar taxe mai mari", "Restricții de noapte/weekend, limite de emisii, permise de tranzit limitate (Brenner, Gotthard)", "Doar limite de viteză", "Fără restricții speciale"],
        de: ["Nur höhere Gebühren", "Nacht-/Wochenendbeschränkungen, Emissionslimits, begrenzte Transitgenehmigungen (Brenner, Gotthard)", "Nur Geschwindigkeitsbegrenzungen", "Keine besonderen Beschränkungen"],
        en: ["Only higher fees", "Night/weekend restrictions, emission limits, limited transit permits (Brenner, Gotthard)", "Only speed limits", "No special restrictions"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Coridoarele alpine au reglementări stricte pentru a proteja mediul și a gestiona traficul intens.",
        de: "Alpine Korridore haben strenge Vorschriften zum Umweltschutz und zur Bewältigung des starken Verkehrs.",
        en: "Alpine corridors have strict regulations to protect the environment and manage heavy traffic."
      }
    }
  ],

  // EUROPEAN-COUNTRIES - 2 questions
  'european-countries': [
    {
      question: {
        ro: "Care țară europeană are cel mai extins sistem de taxe pentru drumuri (Maut)?",
        de: "Welches europäische Land hat das umfangreichste Straßenmautsystem?",
        en: "Which European country has the most extensive road toll system?"
      },
      options: {
        ro: ["România", "Germania (Toll Collect pe autostrăzi)", "Franța", "Polonia"],
        de: ["Rumänien", "Deutschland (Toll Collect auf Autobahnen)", "Frankreich", "Polen"],
        en: ["Romania", "Germany (Toll Collect on highways)", "France", "Poland"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Germania are sistemul Toll Collect obligatoriu pentru vehicule >7.5t pe toate autostrăzile și unele drumuri federale.",
        de: "Deutschland hat das Toll Collect System, das für Fahrzeuge >7,5t auf allen Autobahnen und einigen Bundesstraßen obligatorisch ist.",
        en: "Germany has the Toll Collect system mandatory for vehicles >7.5t on all highways and some federal roads."
      }
    },
    {
      question: {
        ro: "Ce particularitate are Marea Britanie pentru transportul rutier post-Brexit?",
        de: "Welche Besonderheit hat Großbritannien für den Straßentransport nach dem Brexit?",
        en: "What particularity does Great Britain have for road transport post-Brexit?"
      },
      options: {
        ro: ["Nimic nu s-a schimbat", "Necesită documente vamale, permise de cabotaj limitate, controale la frontieră", "Doar moneda diferită", "Doar condusul pe stânga"],
        de: ["Nichts hat sich geändert", "Erfordert Zolldokumente, begrenzte Kabotagegenehmigungen, Grenzkontrollen", "Nur andere Währung", "Nur Linksverkehr"],
        en: ["Nothing has changed", "Requires customs documents, limited cabotage permits, border controls", "Only different currency", "Only left-hand driving"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Post-Brexit, UK este țară terță, necesitând declarații vamale complete și având cabotaj restricționat.",
        de: "Nach dem Brexit ist UK ein Drittland, das vollständige Zollanmeldungen erfordert und eingeschränkte Kabotage hat.",
        en: "Post-Brexit, UK is a third country, requiring full customs declarations and having restricted cabotage."
      }
    }
  ],

  // ENVIRONMENT - 2 questions
  'environment': [
    {
      question: {
        ro: "Ce standard de emisii este cerut pentru noile vehicule grele în UE din 2024?",
        de: "Welche Emissionsnorm ist für neue schwere Fahrzeuge in der EU ab 2024 erforderlich?",
        en: "What emission standard is required for new heavy vehicles in the EU from 2024?"
      },
      options: {
        ro: ["Euro 4", "Euro 6e (cel mai recent standard Euro 6)", "Euro 5", "Euro 3"],
        de: ["Euro 4", "Euro 6e (neuester Euro 6 Standard)", "Euro 5", "Euro 3"],
        en: ["Euro 4", "Euro 6e (latest Euro 6 standard)", "Euro 5", "Euro 3"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Euro 6e este cel mai avansat standard de emisii, cu limite mai stricte pentru NOx și particule.",
        de: "Euro 6e ist der fortschrittlichste Emissionsstandard mit strengeren Grenzwerten für NOx und Partikel.",
        en: "Euro 6e is the most advanced emission standard with stricter limits for NOx and particulates."
      }
    },
    {
      question: {
        ro: "Ce sunt zonele cu emisii reduse (LEZ) și cum afectează transportul?",
        de: "Was sind Umweltzonen (LEZ) und wie beeinflussen sie den Transport?",
        en: "What are Low Emission Zones (LEZ) and how do they affect transport?"
      },
      options: {
        ro: ["Zone cu viteză redusă", "Arii urbane cu restricții pentru vehicule poluante, necesitând viniete sau vehicule conforme", "Zone fără trafic greu", "Parcuri industriale"],
        de: ["Zonen mit reduzierter Geschwindigkeit", "Städtische Gebiete mit Beschränkungen für umweltbelastende Fahrzeuge, die Vignetten oder konforme Fahrzeuge erfordern", "Zonen ohne Schwerlastverkehr", "Industrieparks"],
        en: ["Reduced speed zones", "Urban areas with restrictions for polluting vehicles, requiring stickers or compliant vehicles", "No heavy traffic zones", "Industrial parks"]
      },
      correctIndex: 1,
      explanation: {
        ro: "LEZ-urile restricționează accesul vehiculelor poluante în orașe, impunând standarde minime de emisii sau taxe.",
        de: "LEZs beschränken den Zugang umweltbelastender Fahrzeuge in Städte und erfordern Mindestemissionsstandards oder Gebühren.",
        en: "LEZs restrict access of polluting vehicles to cities, imposing minimum emission standards or fees."
      }
    }
  ],

  // SUSTAINABILITY - 2 questions
  'sustainability': [
    {
      question: {
        ro: "Care este principalul beneficiu al transportului combinat pentru sustenabilitate?",
        de: "Was ist der Hauptvorteil des kombinierten Verkehrs für die Nachhaltigkeit?",
        en: "What is the main benefit of combined transport for sustainability?"
      },
      options: {
        ro: ["Cost mai mic", "Reducerea emisiilor de CO2 prin utilizarea trenului pentru distanțe lungi", "Livrare mai rapidă", "Documente mai simple"],
        de: ["Niedrigere Kosten", "Reduzierung der CO2-Emissionen durch Nutzung der Bahn für lange Strecken", "Schnellere Lieferung", "Einfachere Dokumente"],
        en: ["Lower cost", "Reduction of CO2 emissions by using rail for long distances", "Faster delivery", "Simpler documents"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Trenul produce de 4-5 ori mai puține emisii CO2 per tonă-km decât transportul rutier.",
        de: "Die Bahn produziert 4-5 mal weniger CO2-Emissionen pro Tonnenkilometer als der Straßentransport.",
        en: "Rail produces 4-5 times fewer CO2 emissions per tonne-km than road transport."
      }
    },
    {
      question: {
        ro: "Ce instrumente pot folosi companiile pentru a-și măsura amprenta de carbon?",
        de: "Welche Instrumente können Unternehmen nutzen, um ihren CO2-Fußabdruck zu messen?",
        en: "What tools can companies use to measure their carbon footprint?"
      },
      options: {
        ro: ["Doar estimări aproximative", "Calculatoare de emisii certificate (GLEC Framework), raportare ESG, ISO 14064", "Doar facturile de combustibil", "Nu există instrumente disponibile"],
        de: ["Nur grobe Schätzungen", "Zertifizierte Emissionsrechner (GLEC Framework), ESG-Berichterstattung, ISO 14064", "Nur Kraftstoffrechnungen", "Keine Instrumente verfügbar"],
        en: ["Only rough estimates", "Certified emission calculators (GLEC Framework), ESG reporting, ISO 14064", "Only fuel invoices", "No tools available"]
      },
      correctIndex: 1,
      explanation: {
        ro: "GLEC Framework și standardele ISO oferă metodologii recunoscute pentru calculul și raportarea emisiilor.",
        de: "Das GLEC Framework und ISO-Standards bieten anerkannte Methoden zur Berechnung und Berichterstattung von Emissionen.",
        en: "GLEC Framework and ISO standards provide recognized methodologies for emission calculation and reporting."
      }
    }
  ],

  // SUPPLY-CHAIN - 2 questions
  'supply-chain': [
    {
      question: {
        ro: "Ce este Just-in-Time (JIT) și care sunt riscurile asociate?",
        de: "Was ist Just-in-Time (JIT) und welche Risiken sind damit verbunden?",
        en: "What is Just-in-Time (JIT) and what are the associated risks?"
      },
      options: {
        ro: ["Livrare oricând convenabil", "Livrări sincronizate fără stocuri, risc mare la perturbări în lanțul de aprovizionare", "Doar pentru produse alimentare", "Transport de noapte"],
        de: ["Lieferung wann immer bequem", "Synchronisierte Lieferungen ohne Lager, hohes Risiko bei Lieferkettenunterbrechungen", "Nur für Lebensmittel", "Nachttransport"],
        en: ["Delivery whenever convenient", "Synchronized deliveries without stock, high risk during supply chain disruptions", "Only for food products", "Night transport"]
      },
      correctIndex: 1,
      explanation: {
        ro: "JIT minimizează costurile de stocare dar creează vulnerabilitate la întârzieri sau perturbări.",
        de: "JIT minimiert Lagerkosten, schafft aber Anfälligkeit für Verzögerungen oder Störungen.",
        en: "JIT minimizes storage costs but creates vulnerability to delays or disruptions."
      }
    },
    {
      question: {
        ro: "Ce rol joacă un 4PL (Fourth Party Logistics) în supply chain?",
        de: "Welche Rolle spielt ein 4PL (Fourth Party Logistics) in der Lieferkette?",
        en: "What role does a 4PL (Fourth Party Logistics) play in supply chain?"
      },
      options: {
        ro: ["Transportator direct", "Orchestrator strategic care coordonează mai mulți 3PL și optimizează întreaga rețea", "Depozit simplu", "Broker de marfă"],
        de: ["Direkter Spediteur", "Strategischer Orchestrator, der mehrere 3PLs koordiniert und das gesamte Netzwerk optimiert", "Einfaches Lager", "Frachtmakler"],
        en: ["Direct carrier", "Strategic orchestrator coordinating multiple 3PLs and optimizing the entire network", "Simple warehouse", "Freight broker"]
      },
      correctIndex: 1,
      explanation: {
        ro: "4PL-ul gestionează strategic întreaga logistică, selectând și coordonând furnizorii de servicii 3PL.",
        de: "4PL verwaltet strategisch die gesamte Logistik und wählt und koordiniert 3PL-Dienstleister.",
        en: "4PL strategically manages entire logistics, selecting and coordinating 3PL service providers."
      }
    }
  ],

  // PRICING - 2 questions
  'pricing': [
    {
      question: {
        ro: "Ce componente formează costul total per km al unui transport?",
        de: "Welche Komponenten bilden die Gesamtkosten pro km eines Transports?",
        en: "What components form the total cost per km of transport?"
      },
      options: {
        ro: ["Doar combustibilul", "Combustibil, taxe rutiere, amortizare, personal, asigurări, administrație, profit", "Doar salariul șoferului", "Doar taxele de drum"],
        de: ["Nur Kraftstoff", "Kraftstoff, Mautgebühren, Abschreibung, Personal, Versicherung, Verwaltung, Gewinn", "Nur Fahrergehalt", "Nur Straßengebühren"],
        en: ["Only fuel", "Fuel, road tolls, depreciation, personnel, insurance, administration, profit", "Only driver salary", "Only road fees"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Calculul corect al costurilor include toate cheltuielile fixe și variabile plus marja de profit.",
        de: "Die korrekte Kostenberechnung umfasst alle fixen und variablen Ausgaben plus Gewinnmarge.",
        en: "Correct cost calculation includes all fixed and variable expenses plus profit margin."
      }
    },
    {
      question: {
        ro: "Cum calculezi indicele fuel surcharge pentru un contract?",
        de: "Wie berechnet man den Kraftstoffzuschlagsindex für einen Vertrag?",
        en: "How do you calculate the fuel surcharge index for a contract?"
      },
      options: {
        ro: ["Estimare arbitrară", "(Preț actual combustibil - Preț bază) / Preț bază × Pondere combustibil în cost", "Doar diferența de preț", "Nu se calculează"],
        de: ["Willkürliche Schätzung", "(Aktueller Kraftstoffpreis - Basispreis) / Basispreis × Kraftstoffanteil an Kosten", "Nur Preisdifferenz", "Wird nicht berechnet"],
        en: ["Arbitrary estimate", "(Current fuel price - Base price) / Base price × Fuel weight in cost", "Only price difference", "Not calculated"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Fuel surcharge protejează marja transportatorului când prețul combustibilului fluctuează semnificativ.",
        de: "Der Kraftstoffzuschlag schützt die Marge des Spediteurs bei erheblichen Kraftstoffpreisschwankungen.",
        en: "Fuel surcharge protects carrier's margin when fuel price fluctuates significantly."
      }
    }
  ],

  // COMMERCIAL - 2 questions
  'commercial': [
    {
      question: {
        ro: "Ce este un SLA (Service Level Agreement) în transportul de marfă?",
        de: "Was ist ein SLA (Service Level Agreement) im Güterverkehr?",
        en: "What is an SLA (Service Level Agreement) in freight transport?"
      },
      options: {
        ro: ["Doar un contract standard", "Acordul care definește KPI-urile, timpii de livrare, penalitățile și bonusurile", "O listă de prețuri", "Un document vamal"],
        de: ["Nur ein Standardvertrag", "Vereinbarung, die KPIs, Lieferzeiten, Strafen und Boni definiert", "Eine Preisliste", "Ein Zolldokument"],
        en: ["Just a standard contract", "Agreement defining KPIs, delivery times, penalties and bonuses", "A price list", "A customs document"]
      },
      correctIndex: 1,
      explanation: {
        ro: "SLA-ul definește clar așteptările, măsurătorile și consecințele performanței în relația comercială.",
        de: "Das SLA definiert klar Erwartungen, Messungen und Leistungskonsequenzen in der Geschäftsbeziehung.",
        en: "SLA clearly defines expectations, measurements and performance consequences in commercial relationship."
      }
    },
    {
      question: {
        ro: "Cum identifici oportunitățile de upselling la clienții existenți?",
        de: "Wie identifizieren Sie Upselling-Möglichkeiten bei bestehenden Kunden?",
        en: "How do you identify upselling opportunities with existing clients?"
      },
      options: {
        ro: ["Aștepți să ceară ei", "Analizezi tiparele de transport, identifici nevoi neacoperite, propui servicii complementare", "Crești prețurile automat", "Eviți să oferi mai mult"],
        de: ["Warten bis sie fragen", "Transportmuster analysieren, ungedeckte Bedürfnisse identifizieren, ergänzende Dienste vorschlagen", "Preise automatisch erhöhen", "Vermeiden mehr anzubieten"],
        en: ["Wait for them to ask", "Analyze transport patterns, identify unmet needs, propose complementary services", "Increase prices automatically", "Avoid offering more"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Upselling-ul eficient vine din înțelegerea profundă a nevoilor clientului și propuneri proactive.",
        de: "Effektives Upselling kommt aus tiefem Verständnis der Kundenbedürfnisse und proaktiven Vorschlägen.",
        en: "Effective upselling comes from deep understanding of client needs and proactive proposals."
      }
    }
  ],

  // NEGOTIATION - 2 questions
  'negotiation': [
    {
      question: {
        ro: "Care este principiul 'walk-away point' în negociere?",
        de: "Was ist das Prinzip des 'Walk-away Point' in der Verhandlung?",
        en: "What is the 'walk-away point' principle in negotiation?"
      },
      options: {
        ro: ["Momentul pauzei de cafea", "Limita minimă sub care nu ești dispus să închei afacerea", "Când pleci fizic din cameră", "Ora de încheiere a întâlnirii"],
        de: ["Kaffeepause-Moment", "Mindestgrenze, unter der Sie nicht bereit sind, das Geschäft abzuschließen", "Wenn Sie den Raum physisch verlassen", "Abschlusszeit des Treffens"],
        en: ["Coffee break moment", "Minimum limit below which you are not willing to close the deal", "When you physically leave the room", "Meeting end time"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Cunoașterea walk-away point-ului îți dă încredere și previne acorduri neprofitabile.",
        de: "Das Wissen um den Walk-away Point gibt Vertrauen und verhindert unrentable Vereinbarungen.",
        en: "Knowing your walk-away point gives confidence and prevents unprofitable agreements."
      }
    },
    {
      question: {
        ro: "Cum gestionezi o cerere de reducere de preț de la un client strategic?",
        de: "Wie gehen Sie mit einer Preissenkungsanfrage von einem strategischen Kunden um?",
        en: "How do you handle a price reduction request from a strategic client?"
      },
      options: {
        ro: ["Refuzi categoric", "Analizezi valoarea totală, propui alternative (volum, termen, servicii modificate)", "Accepți imediat", "Ignori cererea"],
        de: ["Kategorisch ablehnen", "Gesamtwert analysieren, Alternativen vorschlagen (Volumen, Laufzeit, geänderte Dienste)", "Sofort akzeptieren", "Anfrage ignorieren"],
        en: ["Refuse categorically", "Analyze total value, propose alternatives (volume, term, modified services)", "Accept immediately", "Ignore request"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Negocierea eficientă găsește soluții creative care păstrează marja dar adaugă valoare clientului.",
        de: "Effektive Verhandlung findet kreative Lösungen, die die Marge erhalten, aber dem Kunden Wert hinzufügen.",
        en: "Effective negotiation finds creative solutions that preserve margin but add value to the client."
      }
    }
  ],

  // CLIENTS - 2 questions
  'clients': [
    {
      question: {
        ro: "Care sunt semnele că un client ar putea deveni problematic (risc)?",
        de: "Was sind Anzeichen dafür, dass ein Kunde problematisch (Risiko) werden könnte?",
        en: "What are signs that a client could become problematic (risk)?"
      },
      options: {
        ro: ["Comenzi mari frecvente", "Plăți întârziate repetate, comunicare evazivă, cereri neobișnuite, presiune excesivă pe preț", "Feedback pozitiv constant", "Solicitări de documentație detaliată"],
        de: ["Häufige große Bestellungen", "Wiederholte verspätete Zahlungen, ausweichende Kommunikation, ungewöhnliche Anfragen, übermäßiger Preisdruck", "Konstant positives Feedback", "Detaillierte Dokumentationsanfragen"],
        en: ["Frequent large orders", "Repeated late payments, evasive communication, unusual requests, excessive price pressure", "Constant positive feedback", "Detailed documentation requests"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Detectarea timpurie a semnelor de risc permite acțiuni preventive înainte de pierderi semnificative.",
        de: "Die frühzeitige Erkennung von Risikozeichen ermöglicht präventive Maßnahmen vor erheblichen Verlusten.",
        en: "Early detection of risk signs allows preventive actions before significant losses."
      }
    },
    {
      question: {
        ro: "Cum construiești o relație de parteneriat pe termen lung cu un client cheie?",
        de: "Wie baut man eine langfristige Partnerschaft mit einem Schlüsselkunden auf?",
        en: "How do you build a long-term partnership with a key client?"
      },
      options: {
        ro: ["Doar oferi prețuri mici", "Comunici proactiv, anticipezi nevoi, oferi soluții inovatoare, recunoști greșelile", "Eviți contactul frecvent", "Te concentrezi doar pe tranzacții"],
        de: ["Nur niedrige Preise anbieten", "Proaktiv kommunizieren, Bedürfnisse antizipieren, innovative Lösungen anbieten, Fehler anerkennen", "Häufigen Kontakt vermeiden", "Sich nur auf Transaktionen konzentrieren"],
        en: ["Only offer low prices", "Communicate proactively, anticipate needs, offer innovative solutions, acknowledge mistakes", "Avoid frequent contact", "Focus only on transactions"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Parteneriatele durabile se construiesc pe încredere, transparență și valoare adăugată continuă.",
        de: "Dauerhafte Partnerschaften werden auf Vertrauen, Transparenz und kontinuierlichem Mehrwert aufgebaut.",
        en: "Lasting partnerships are built on trust, transparency and continuous added value."
      }
    }
  ],

  // CARRIER-MANAGEMENT - 2 questions
  'carrier-management': [
    {
      question: {
        ro: "Ce criterii folosești pentru calificarea unui nou transportator?",
        de: "Welche Kriterien verwenden Sie zur Qualifizierung eines neuen Spediteurs?",
        en: "What criteria do you use to qualify a new carrier?"
      },
      options: {
        ro: ["Doar prețul cel mai mic", "Licențe valide, asigurări, flotă, referințe, stabilitate financiară, rating GSAT", "Doar locația sediului", "Doar vechimea firmei"],
        de: ["Nur niedrigster Preis", "Gültige Lizenzen, Versicherungen, Flotte, Referenzen, finanzielle Stabilität, GSAT-Rating", "Nur Standort der Zentrale", "Nur Firmenalter"],
        en: ["Only lowest price", "Valid licenses, insurance, fleet, references, financial stability, GSAT rating", "Only headquarters location", "Only company age"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Calificarea completă previne probleme operaționale și protejează marfa și reputația.",
        de: "Vollständige Qualifizierung verhindert betriebliche Probleme und schützt Fracht und Reputation.",
        en: "Complete qualification prevents operational problems and protects cargo and reputation."
      }
    },
    {
      question: {
        ro: "Cum gestionezi un transportator care a întârziat livrarea?",
        de: "Wie gehen Sie mit einem Spediteur um, der die Lieferung verzögert hat?",
        en: "How do you manage a carrier who delayed the delivery?"
      },
      options: {
        ro: ["Întrerupi colaborarea imediat", "Documentezi, analizezi cauza, comunici cu clientul, aplici consecințe contractuale, monitorizezi viitor", "Ignori incidentul", "Ceri doar scuze verbale"],
        de: ["Zusammenarbeit sofort beenden", "Dokumentieren, Ursache analysieren, mit Kunden kommunizieren, vertragliche Konsequenzen anwenden, Zukunft überwachen", "Vorfall ignorieren", "Nur verbale Entschuldigung verlangen"],
        en: ["Terminate collaboration immediately", "Document, analyze cause, communicate with client, apply contractual consequences, monitor future", "Ignore the incident", "Ask for verbal apologies only"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Gestionarea profesională a incidentelor menține relații valoroase și îmbunătățește performanța viitoare.",
        de: "Professionelles Incident-Management erhält wertvolle Beziehungen und verbessert die zukünftige Leistung.",
        en: "Professional incident management maintains valuable relationships and improves future performance."
      }
    }
  ],

  // EXCHANGES - 2 questions
  'exchanges': [
    {
      question: {
        ro: "Ce platformă este cea mai utilizată pentru bursele de marfă în Europa?",
        de: "Welche Plattform wird am häufigsten für Frachtbörsen in Europa genutzt?",
        en: "What platform is most commonly used for freight exchanges in Europe?"
      },
      options: {
        ro: ["eBay", "TimoCom sau Trans.eu (în funcție de regiune)", "Amazon Logistics", "Facebook Marketplace"],
        de: ["eBay", "TimoCom oder Trans.eu (je nach Region)", "Amazon Logistics", "Facebook Marketplace"],
        en: ["eBay", "TimoCom or Trans.eu (depending on region)", "Amazon Logistics", "Facebook Marketplace"]
      },
      correctIndex: 1,
      explanation: {
        ro: "TimoCom domină în Europa de Vest, Trans.eu în Europa Centrală și de Est, oferind matching între ofertă și cerere.",
        de: "TimoCom dominiert in Westeuropa, Trans.eu in Mittel- und Osteuropa und bietet Matching zwischen Angebot und Nachfrage.",
        en: "TimoCom dominates in Western Europe, Trans.eu in Central and Eastern Europe, offering supply-demand matching."
      }
    },
    {
      question: {
        ro: "Ce verifici înainte de a accepta o ofertă de pe o bursă de marfă?",
        de: "Was prüfen Sie, bevor Sie ein Angebot von einer Frachtbörse annehmen?",
        en: "What do you check before accepting an offer from a freight exchange?"
      },
      options: {
        ro: ["Doar prețul", "Rating-ul companiei, solvabilitatea, recenziile, detaliile complete ale transportului", "Doar distanța", "Doar tipul de marfă"],
        de: ["Nur den Preis", "Firmenrating, Zahlungsfähigkeit, Bewertungen, vollständige Transportdetails", "Nur die Entfernung", "Nur den Frachttyp"],
        en: ["Only price", "Company rating, solvency, reviews, complete transport details", "Only distance", "Only cargo type"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Due diligence pe burse previne fraude, neplăți și probleme operaționale.",
        de: "Due Diligence auf Börsen verhindert Betrug, Zahlungsausfälle und betriebliche Probleme.",
        en: "Due diligence on exchanges prevents fraud, non-payment and operational problems."
      }
    }
  ],

  // COMMUNICATION - 2 questions
  'communication': [
    {
      question: {
        ro: "Care este regula de aur în comunicarea unei probleme către client?",
        de: "Was ist die goldene Regel bei der Kommunikation eines Problems an den Kunden?",
        en: "What is the golden rule in communicating a problem to the client?"
      },
      options: {
        ro: ["Ascunzi problema cât mai mult", "Informezi proactiv, prezinți faptele, propui soluții, dai un timeline", "Dai vina pe transportator", "Aștepți să afle singur"],
        de: ["Problem so lange wie möglich verbergen", "Proaktiv informieren, Fakten präsentieren, Lösungen vorschlagen, Timeline geben", "Spediteur beschuldigen", "Warten bis er es selbst herausfindet"],
        en: ["Hide the problem as long as possible", "Inform proactively, present facts, propose solutions, give a timeline", "Blame the carrier", "Wait for them to find out"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Comunicarea proactivă a problemelor construiește încredere și dă clientului timp să-și ajusteze planurile.",
        de: "Proaktive Problemkommunikation baut Vertrauen auf und gibt dem Kunden Zeit, seine Pläne anzupassen.",
        en: "Proactive problem communication builds trust and gives the client time to adjust their plans."
      }
    },
    {
      question: {
        ro: "Cum structurezi un email de confirmare transport?",
        de: "Wie strukturieren Sie eine Transportbestätigungs-E-Mail?",
        en: "How do you structure a transport confirmation email?"
      },
      options: {
        ro: ["Doar 'OK, merge'", "Referință, detalii încărcare/descărcare, vehicul, preț, condiții speciale, contact", "Doar prețul", "Doar data de livrare"],
        de: ["Nur 'OK, geht klar'", "Referenz, Lade-/Entladedetails, Fahrzeug, Preis, Sonderbedingungen, Kontakt", "Nur den Preis", "Nur das Lieferdatum"],
        en: ["Just 'OK, done'", "Reference, loading/unloading details, vehicle, price, special conditions, contact", "Only price", "Only delivery date"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Confirmarea completă previne neînțelegeri și servește ca probă în caz de dispute.",
        de: "Vollständige Bestätigung verhindert Missverständnisse und dient als Beweis bei Streitigkeiten.",
        en: "Complete confirmation prevents misunderstandings and serves as evidence in case of disputes."
      }
    }
  ],

  // NETWORKING - 2 questions
  'networking': [
    {
      question: {
        ro: "Care sunt cele mai eficiente evenimente pentru networking în transport?",
        de: "Was sind die effektivsten Networking-Events im Transport?",
        en: "What are the most effective networking events in transport?"
      },
      options: {
        ro: ["Doar petreceri sociale", "Târguri specializate (Transport Logistic), conferințe, asociații profesionale", "Doar întâlniri online", "Doar email-uri de prezentare"],
        de: ["Nur gesellschaftliche Veranstaltungen", "Spezialisierte Messen (Transport Logistic), Konferenzen, Berufsverbände", "Nur Online-Meetings", "Nur Präsentations-E-Mails"],
        en: ["Only social parties", "Specialized fairs (Transport Logistic), conferences, professional associations", "Only online meetings", "Only presentation emails"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Târgurile și conferințele oferă acces direct la decidenți și oportunități de parteneriate valoroase.",
        de: "Messen und Konferenzen bieten direkten Zugang zu Entscheidungsträgern und wertvolle Partnerschaftsmöglichkeiten.",
        en: "Fairs and conferences provide direct access to decision-makers and valuable partnership opportunities."
      }
    },
    {
      question: {
        ro: "Cum menții relațiile profesionale active în timp?",
        de: "Wie pflegt man professionelle Beziehungen langfristig aktiv?",
        en: "How do you maintain professional relationships active over time?"
      },
      options: {
        ro: ["Contactezi doar când ai nevoie", "Contact periodic (chiar fără oportunitate imediată), sharing de informații utile, felicitări la ocazii", "Trimiți spam constant", "Eviți contactul prea frecvent"],
        de: ["Nur bei Bedarf kontaktieren", "Regelmäßiger Kontakt (auch ohne unmittelbare Gelegenheit), nützliche Informationen teilen, Glückwünsche bei Anlässen", "Ständig Spam senden", "Zu häufigen Kontakt vermeiden"],
        en: ["Contact only when you need something", "Periodic contact (even without immediate opportunity), sharing useful information, congratulations on occasions", "Send spam constantly", "Avoid too frequent contact"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Networking-ul eficient înseamnă să oferi valoare constant, nu doar să ceri când ai nevoie.",
        de: "Effektives Networking bedeutet, ständig Wert zu bieten, nicht nur zu fragen, wenn man etwas braucht.",
        en: "Effective networking means constantly providing value, not just asking when you need something."
      }
    }
  ],

  // KPI - 2 questions
  'kpi': [
    {
      question: {
        ro: "Care este cel mai important KPI pentru măsurarea eficienței unui disponent?",
        de: "Was ist der wichtigste KPI zur Messung der Effizienz eines Disponenten?",
        en: "What is the most important KPI for measuring a dispatcher's efficiency?"
      },
      options: {
        ro: ["Numărul de email-uri trimise", "Marja brută per transport și rata de utilizare a vehiculelor", "Orele lucrate", "Numărul de apeluri telefonice"],
        de: ["Anzahl gesendeter E-Mails", "Bruttomarge pro Transport und Fahrzeugauslastungsrate", "Arbeitsstunden", "Anzahl der Telefonate"],
        en: ["Number of emails sent", "Gross margin per transport and vehicle utilization rate", "Hours worked", "Number of phone calls"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Marja și utilizarea reflectă direct contribuția economică și eficiența operațională a disponentului.",
        de: "Marge und Auslastung spiegeln direkt den wirtschaftlichen Beitrag und die operative Effizienz des Disponenten wider.",
        en: "Margin and utilization directly reflect the dispatcher's economic contribution and operational efficiency."
      }
    },
    {
      question: {
        ro: "Ce KPI măsoară satisfacția clientului în transport?",
        de: "Welcher KPI misst die Kundenzufriedenheit im Transport?",
        en: "What KPI measures customer satisfaction in transport?"
      },
      options: {
        ro: ["Doar prețul mediu", "OTIF (On-Time In-Full), rata de reclamații, NPS (Net Promoter Score)", "Numărul de transporturi", "Doar distanța parcursă"],
        de: ["Nur Durchschnittspreis", "OTIF (On-Time In-Full), Reklamationsrate, NPS (Net Promoter Score)", "Anzahl der Transporte", "Nur zurückgelegte Strecke"],
        en: ["Only average price", "OTIF (On-Time In-Full), claims rate, NPS (Net Promoter Score)", "Number of transports", "Only distance covered"]
      },
      correctIndex: 1,
      explanation: {
        ro: "OTIF măsoară livrările complete și la timp, iar NPS indică probabilitatea recomandării serviciilor.",
        de: "OTIF misst vollständige und pünktliche Lieferungen, und NPS zeigt die Wahrscheinlichkeit der Serviceempfehlung an.",
        en: "OTIF measures complete and on-time deliveries, and NPS indicates likelihood of service recommendation."
      }
    }
  ],

  // TRANSLOGICA - 2 questions
  'translogica': [
    {
      question: {
        ro: "Ce module are un TMS (Transport Management System) complet?",
        de: "Welche Module hat ein vollständiges TMS (Transport Management System)?",
        en: "What modules does a complete TMS (Transport Management System) have?"
      },
      options: {
        ro: ["Doar facturare", "Planificare, execuție, tracking, documentație, raportare, integrări", "Doar GPS tracking", "Doar managementul șoferilor"],
        de: ["Nur Rechnungsstellung", "Planung, Ausführung, Tracking, Dokumentation, Berichterstattung, Integrationen", "Nur GPS-Tracking", "Nur Fahrermanagement"],
        en: ["Only invoicing", "Planning, execution, tracking, documentation, reporting, integrations", "Only GPS tracking", "Only driver management"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Un TMS complet acoperă întregul ciclu de viață al transportului, de la comandă la facturare.",
        de: "Ein vollständiges TMS deckt den gesamten Transportlebenszyklus ab, von der Bestellung bis zur Rechnungsstellung.",
        en: "A complete TMS covers the entire transport lifecycle, from order to invoicing."
      }
    },
    {
      question: {
        ro: "Care este beneficiul principal al integrării TMS cu ERP-ul clientului?",
        de: "Was ist der Hauptvorteil der Integration von TMS mit dem ERP des Kunden?",
        en: "What is the main benefit of integrating TMS with client's ERP?"
      },
      options: {
        ro: ["Doar rapoarte frumoase", "Automatizare comenzi, reducerea erorilor manuale, vizibilitate în timp real", "Doar reducerea costurilor IT", "Nu are beneficii semnificative"],
        de: ["Nur schöne Berichte", "Auftragsautomatisierung, Reduzierung manueller Fehler, Echtzeit-Sichtbarkeit", "Nur IT-Kostenreduzierung", "Keine wesentlichen Vorteile"],
        en: ["Only nice reports", "Order automation, reduction of manual errors, real-time visibility", "Only IT cost reduction", "No significant benefits"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Integrarea elimină introducerea duplicată de date și oferă actualizări în timp real tuturor părților.",
        de: "Die Integration eliminiert doppelte Dateneingabe und bietet allen Parteien Echtzeit-Updates.",
        en: "Integration eliminates duplicate data entry and provides real-time updates to all parties."
      }
    }
  ],

  // FLEET - 2 questions
  'fleet': [
    {
      question: {
        ro: "Care sunt indicatorii cheie pentru managementul flotei eficient?",
        de: "Was sind die Schlüsselindikatoren für effizientes Flottenmanagement?",
        en: "What are the key indicators for efficient fleet management?"
      },
      options: {
        ro: ["Doar culoarea vehiculelor", "Rata de utilizare, consum mediu, cost per km, downtime, conformitate legală", "Doar vechimea flotei", "Doar numărul de vehicule"],
        de: ["Nur Fahrzeugfarbe", "Auslastungsrate, Durchschnittsverbrauch, Kosten pro km, Ausfallzeit, rechtliche Konformität", "Nur Flottenalter", "Nur Fahrzeuganzahl"],
        en: ["Only vehicle color", "Utilization rate, average consumption, cost per km, downtime, legal compliance", "Only fleet age", "Only number of vehicles"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Monitorizarea acestor indicatori permite optimizarea costurilor și maximizarea productivității flotei.",
        de: "Die Überwachung dieser Indikatoren ermöglicht Kostenoptimierung und Maximierung der Flottenproduktivität.",
        en: "Monitoring these indicators enables cost optimization and maximizing fleet productivity."
      }
    },
    {
      question: {
        ro: "Ce include un program de mentenanță preventivă eficient?",
        de: "Was beinhaltet ein effektives Präventiv-Wartungsprogramm?",
        en: "What does an effective preventive maintenance program include?"
      },
      options: {
        ro: ["Doar schimburi de ulei", "Inspecții programate, înlocuiri bazate pe km/ore, monitorizare telemetrică, istoric complet", "Doar reparații când se strică", "Doar spălare regulată"],
        de: ["Nur Ölwechsel", "Geplante Inspektionen, Austausch basierend auf km/Stunden, telemetrische Überwachung, vollständige Historie", "Nur Reparaturen bei Ausfall", "Nur regelmäßige Wäsche"],
        en: ["Only oil changes", "Scheduled inspections, replacements based on km/hours, telemetric monitoring, complete history", "Only repairs when broken", "Only regular washing"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Mentenanța preventivă reduce costurile de reparații și previne imobilizări neplanificate.",
        de: "Präventive Wartung reduziert Reparaturkosten und verhindert ungeplante Stillstände.",
        en: "Preventive maintenance reduces repair costs and prevents unplanned downtime."
      }
    }
  ],

  // TECHNOLOGY - 2 questions
  'technology': [
    {
      question: {
        ro: "Ce tehnologii sunt esențiale pentru vizibilitatea în timp real a transporturilor?",
        de: "Welche Technologien sind für die Echtzeit-Sichtbarkeit von Transporten unerlässlich?",
        en: "What technologies are essential for real-time transport visibility?"
      },
      options: {
        ro: ["Doar telefon și email", "GPS/Telematics, API integrations, visibility platforms (FourKites, project44)", "Doar fax", "Doar radio"],
        de: ["Nur Telefon und E-Mail", "GPS/Telematik, API-Integrationen, Sichtbarkeitsplattformen (FourKites, project44)", "Nur Fax", "Nur Radio"],
        en: ["Only phone and email", "GPS/Telematics, API integrations, visibility platforms (FourKites, project44)", "Only fax", "Only radio"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Platormele de vizibilitate oferă tracking în timp real, predicții ETA și alerte automate.",
        de: "Sichtbarkeitsplattformen bieten Echtzeit-Tracking, ETA-Vorhersagen und automatische Warnungen.",
        en: "Visibility platforms provide real-time tracking, ETA predictions and automatic alerts."
      }
    },
    {
      question: {
        ro: "Ce este un e-CMR și care sunt avantajele față de CMR pe hârtie?",
        de: "Was ist ein e-CMR und welche Vorteile hat er gegenüber dem Papier-CMR?",
        en: "What is an e-CMR and what are the advantages over paper CMR?"
      },
      options: {
        ro: ["O scanare a CMR-ului pe hârtie", "Document digital legal cu semnătură electronică, acces instant, audit trail complet", "Doar o copie de backup", "Nu are valoare legală"],
        de: ["Ein Scan des Papier-CMR", "Rechtsgültiges digitales Dokument mit elektronischer Unterschrift, Sofortzugang, vollständiger Audit-Trail", "Nur eine Backup-Kopie", "Hat keinen rechtlichen Wert"],
        en: ["A scan of the paper CMR", "Legal digital document with electronic signature, instant access, complete audit trail", "Just a backup copy", "Has no legal value"]
      },
      correctIndex: 1,
      explanation: {
        ro: "e-CMR are aceeași valoare legală ca hârtia, dar oferă acces instant și urmărire completă a modificărilor.",
        de: "e-CMR hat den gleichen rechtlichen Wert wie Papier, bietet aber Sofortzugang und vollständige Änderungsverfolgung.",
        en: "e-CMR has the same legal value as paper but offers instant access and complete change tracking."
      }
    }
  ],

  // DIGITALIZATION - 2 questions
  'digitalization': [
    {
      question: {
        ro: "Care sunt pașii pentru digitalizarea unei companii de transport?",
        de: "Was sind die Schritte zur Digitalisierung eines Transportunternehmens?",
        en: "What are the steps for digitalizing a transport company?"
      },
      options: {
        ro: ["Cumperi doar un software scump", "Audit procese → Identificare priorități → Selecție soluții → Implementare graduală → Training → Optimizare", "Aștepți să fie gratis", "Copiezi competitorii"],
        de: ["Nur teure Software kaufen", "Prozessaudit → Prioritäten identifizieren → Lösungsauswahl → Schrittweise Implementierung → Schulung → Optimierung", "Warten bis es kostenlos ist", "Wettbewerber kopieren"],
        en: ["Just buy expensive software", "Process audit → Identify priorities → Solution selection → Gradual implementation → Training → Optimization", "Wait until it's free", "Copy competitors"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Digitalizarea de succes necesită o abordare structurată, nu doar achiziție de tehnologie.",
        de: "Erfolgreiche Digitalisierung erfordert einen strukturierten Ansatz, nicht nur Technologiekauf.",
        en: "Successful digitalization requires a structured approach, not just technology purchase."
      }
    },
    {
      question: {
        ro: "Ce bariere întâmpină companiile în adoptarea tehnologiilor digitale?",
        de: "Welche Barrieren stoßen Unternehmen bei der Einführung digitaler Technologien?",
        en: "What barriers do companies face in adopting digital technologies?"
      },
      options: {
        ro: ["Tehnologia este prea simplă", "Rezistență la schimbare, costuri inițiale, lipsă competențe IT, integrare cu sisteme vechi", "Prea multă asistență de la furnizori", "Nicio barieră semnificativă"],
        de: ["Technologie ist zu einfach", "Widerstand gegen Veränderung, Anfangskosten, fehlende IT-Kompetenzen, Integration mit Altsystemen", "Zu viel Anbieterunterstützung", "Keine signifikanten Barrieren"],
        en: ["Technology is too simple", "Resistance to change, initial costs, lack of IT skills, integration with legacy systems", "Too much vendor support", "No significant barriers"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Înțelegerea barierelor permite planificarea adecvată a strategiei de digitalizare.",
        de: "Das Verständnis der Barrieren ermöglicht eine angemessene Planung der Digitalisierungsstrategie.",
        en: "Understanding barriers enables proper planning of the digitalization strategy."
      }
    }
  ],

  // RISK-MANAGEMENT - 2 questions
  'risk-management': [
    {
      question: {
        ro: "Care sunt cele 4 strategii principale de răspuns la risc?",
        de: "Was sind die 4 Hauptstrategien zur Risikobewältigung?",
        en: "What are the 4 main risk response strategies?"
      },
      options: {
        ro: ["Ignorare, speranță, amânare, panică", "Evitare, Transfer, Mitigare, Acceptare", "Doar asigurare pentru toate", "Doar evitare totală"],
        de: ["Ignorieren, Hoffnung, Aufschieben, Panik", "Vermeidung, Transfer, Minderung, Akzeptanz", "Nur Versicherung für alles", "Nur vollständige Vermeidung"],
        en: ["Ignore, hope, postpone, panic", "Avoidance, Transfer, Mitigation, Acceptance", "Insurance only for everything", "Only complete avoidance"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Fiecare risc trebuie evaluat și gestionat cu strategia cea mai potrivită în funcție de impact și probabilitate.",
        de: "Jedes Risiko muss bewertet und mit der am besten geeigneten Strategie basierend auf Auswirkung und Wahrscheinlichkeit verwaltet werden.",
        en: "Each risk must be evaluated and managed with the most suitable strategy based on impact and probability."
      }
    },
    {
      question: {
        ro: "Ce include o analiză de risc pentru o rută nouă?",
        de: "Was beinhaltet eine Risikoanalyse für eine neue Route?",
        en: "What does a risk analysis for a new route include?"
      },
      options: {
        ro: ["Doar verificarea prețului", "Infrastructură, securitate, aspecte legale, timp de tranzit, parteneri locali, contingency plans", "Doar distanța", "Doar condițiile meteo"],
        de: ["Nur Preisüberprüfung", "Infrastruktur, Sicherheit, rechtliche Aspekte, Transitzeit, lokale Partner, Notfallpläne", "Nur Entfernung", "Nur Wetterbedingungen"],
        en: ["Only price check", "Infrastructure, security, legal aspects, transit time, local partners, contingency plans", "Only distance", "Only weather conditions"]
      },
      correctIndex: 1,
      explanation: {
        ro: "O analiză completă acoperă toate aspectele care pot afecta succesul și siguranța transportului.",
        de: "Eine vollständige Analyse deckt alle Aspekte ab, die den Erfolg und die Sicherheit des Transports beeinflussen können.",
        en: "A complete analysis covers all aspects that can affect transport success and safety."
      }
    }
  ],

  // INSURANCE - 2 questions
  'insurance': [
    {
      question: {
        ro: "Ce este asigurarea CMR și ce acoperă?",
        de: "Was ist die CMR-Versicherung und was deckt sie ab?",
        en: "What is CMR insurance and what does it cover?"
      },
      options: {
        ro: ["Asigurare auto standard", "Răspunderea transportatorului conform Convenției CMR (max 8.33 SDR/kg)", "Asigurare de viață pentru șoferi", "Asigurare pentru clădiri"],
        de: ["Standard-Kfz-Versicherung", "Haftung des Frachtführers gemäß CMR-Übereinkommen (max 8,33 SZR/kg)", "Lebensversicherung für Fahrer", "Gebäudeversicherung"],
        en: ["Standard car insurance", "Carrier liability under CMR Convention (max 8.33 SDR/kg)", "Life insurance for drivers", "Building insurance"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Asigurarea CMR acoperă răspunderea transportatorului pentru pierderea sau avarierea mărfii în timpul transportului.",
        de: "Die CMR-Versicherung deckt die Haftung des Frachtführers für Verlust oder Beschädigung der Ware während des Transports.",
        en: "CMR insurance covers carrier liability for loss or damage to goods during transport."
      }
    },
    {
      question: {
        ro: "Când este recomandată o asigurare de marfă (cargo insurance) separată?",
        de: "Wann ist eine separate Transportversicherung (Cargo-Versicherung) empfehlenswert?",
        en: "When is separate cargo insurance recommended?"
      },
      options: {
        ro: ["Niciodată", "Pentru mărfuri de valoare mare, unde limita CMR nu acoperă valoarea totală", "Doar pentru transport maritim", "Doar pentru transport aerian"],
        de: ["Niemals", "Für hochwertige Güter, bei denen die CMR-Grenze den Gesamtwert nicht abdeckt", "Nur für Seetransport", "Nur für Lufttransport"],
        en: ["Never", "For high-value goods where the CMR limit doesn't cover total value", "Only for maritime transport", "Only for air transport"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Cargo insurance oferă acoperire all-risk până la valoarea completă, esențială pentru mărfuri valoroase.",
        de: "Cargo-Versicherung bietet All-Risk-Deckung bis zum vollständigen Wert, unerlässlich für wertvolle Güter.",
        en: "Cargo insurance provides all-risk coverage up to full value, essential for valuable goods."
      }
    }
  ],

  // HIGH-VALUE-GOODS - 2 questions
  'high-value-goods': [
    {
      question: {
        ro: "Ce măsuri de securitate sunt necesare pentru transportul mărfurilor de mare valoare?",
        de: "Welche Sicherheitsmaßnahmen sind für den Transport hochwertiger Güter erforderlich?",
        en: "What security measures are needed for high-value goods transport?"
      },
      options: {
        ro: ["Doar încuietori standard", "GPS tracking, verificare șoferi, rute securizate, escortă, parking TIR securizat", "Doar asigurare suplimentară", "Nicio măsură specială"],
        de: ["Nur Standardschlösser", "GPS-Tracking, Fahrerüberprüfung, gesicherte Routen, Eskorte, gesicherter TIR-Parkplatz", "Nur Zusatzversicherung", "Keine besonderen Maßnahmen"],
        en: ["Only standard locks", "GPS tracking, driver vetting, secured routes, escort, secured TIR parking", "Only additional insurance", "No special measures"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Mărfurile de valoare necesită un protocol de securitate complet pentru a minimiza riscul de furt.",
        de: "Wertvolle Güter erfordern ein vollständiges Sicherheitsprotokoll, um das Diebstahlrisiko zu minimieren.",
        en: "Valuable goods require a complete security protocol to minimize theft risk."
      }
    },
    {
      question: {
        ro: "Ce sunt certificările TAPA și de ce sunt importante?",
        de: "Was sind TAPA-Zertifizierungen und warum sind sie wichtig?",
        en: "What are TAPA certifications and why are they important?"
      },
      options: {
        ro: ["Un brand de încuietori", "Standarde de securitate pentru lanțul de aprovizionare, cerute de industrii high-tech și pharma", "O companie de transport", "Un tip de asigurare"],
        de: ["Eine Schlossmarke", "Sicherheitsstandards für die Lieferkette, von High-Tech- und Pharmaindustrie gefordert", "Ein Transportunternehmen", "Eine Versicherungsart"],
        en: ["A lock brand", "Supply chain security standards required by high-tech and pharma industries", "A transport company", "A type of insurance"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Certificările TAPA (FSR/TSR) sunt standarde recunoscute global pentru securitatea transportului.",
        de: "TAPA-Zertifizierungen (FSR/TSR) sind weltweit anerkannte Standards für Transportsicherheit.",
        en: "TAPA certifications (FSR/TSR) are globally recognized standards for transport security."
      }
    }
  ],

  // CLAIMS - 2 questions
  'claims': [
    {
      question: {
        ro: "Care sunt pașii imediați când primești o reclamație de marfă avariată?",
        de: "Was sind die sofortigen Schritte, wenn Sie eine Reklamation wegen beschädigter Ware erhalten?",
        en: "What are the immediate steps when you receive a damaged cargo claim?"
      },
      options: {
        ro: ["Ignori și speri să se rezolve", "Documentezi, notifici asigurătorul în 24-48h, colectezi dovezi, comunici cu toate părțile", "Admiți imediat vinovăția", "Dai vina pe client"],
        de: ["Ignorieren und hoffen, dass es sich löst", "Dokumentieren, Versicherer in 24-48h benachrichtigen, Beweise sammeln, mit allen Parteien kommunizieren", "Sofort Schuld eingestehen", "Kunden beschuldigen"],
        en: ["Ignore and hope it resolves", "Document, notify insurer within 24-48h, collect evidence, communicate with all parties", "Immediately admit guilt", "Blame the client"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Procedura corectă protejează dreptul la despăgubire și menține transparența cu toate părțile.",
        de: "Das korrekte Verfahren schützt den Entschädigungsanspruch und erhält die Transparenz gegenüber allen Parteien.",
        en: "Correct procedure protects the right to compensation and maintains transparency with all parties."
      }
    },
    {
      question: {
        ro: "Ce termen legal ai pentru a notifica o reclamație conform CMR?",
        de: "Welche Frist haben Sie für die Meldung einer Reklamation gemäß CMR?",
        en: "What legal deadline do you have to notify a claim according to CMR?"
      },
      options: {
        ro: ["1 an", "7 zile pentru avarii vizibile, 7 zile de la livrare pentru avarii ascunse", "30 zile", "Fără limită de timp"],
        de: ["1 Jahr", "7 Tage für sichtbare Schäden, 7 Tage nach Lieferung für versteckte Schäden", "30 Tage", "Keine Frist"],
        en: ["1 year", "7 days for visible damage, 7 days from delivery for hidden damage", "30 days", "No time limit"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Respectarea termenelor CMR este esențială pentru menținerea dreptului de despăgubire.",
        de: "Die Einhaltung der CMR-Fristen ist für die Aufrechterhaltung des Entschädigungsanspruchs unerlässlich.",
        en: "Respecting CMR deadlines is essential for maintaining the right to compensation."
      }
    }
  ],

  // PAYMENT - 2 questions
  'payment': [
    {
      question: {
        ro: "Care sunt instrumentele de protecție împotriva neplății în transport?",
        de: "Welche Instrumente zum Schutz vor Zahlungsausfall gibt es im Transport?",
        en: "What are the protection instruments against non-payment in transport?"
      },
      options: {
        ro: ["Doar încredere", "Verificare credit, avans, scrisori de credit, garanții bancare, asigurare de credit", "Doar factoring", "Doar plata în avans"],
        de: ["Nur Vertrauen", "Kreditprüfung, Anzahlung, Akkreditive, Bankgarantien, Kreditversicherung", "Nur Factoring", "Nur Vorauszahlung"],
        en: ["Only trust", "Credit check, advance, letters of credit, bank guarantees, credit insurance", "Only factoring", "Only advance payment"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Un mix de instrumente adaptate la riscul clientului oferă cea mai bună protecție.",
        de: "Eine Mischung von Instrumenten, angepasst an das Kundenrisiko, bietet den besten Schutz.",
        en: "A mix of instruments adapted to client risk provides the best protection."
      }
    },
    {
      question: {
        ro: "Ce este factoring-ul și când este util în transport?",
        de: "Was ist Factoring und wann ist es im Transport nützlich?",
        en: "What is factoring and when is it useful in transport?"
      },
      options: {
        ro: ["Un tip de asigurare", "Vânzarea facturilor către o instituție financiară pentru lichiditate imediată", "O metodă de negociere", "Un tip de contract"],
        de: ["Eine Versicherungsart", "Verkauf von Rechnungen an ein Finanzinstitut für sofortige Liquidität", "Eine Verhandlungsmethode", "Ein Vertragstyp"],
        en: ["A type of insurance", "Selling invoices to a financial institution for immediate liquidity", "A negotiation method", "A contract type"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Factoring-ul îmbunătățește cash-flow-ul, permițând plata transportatorilor înainte de încasarea de la client.",
        de: "Factoring verbessert den Cashflow und ermöglicht die Bezahlung von Spediteuren vor dem Inkasso vom Kunden.",
        en: "Factoring improves cash flow, allowing payment of carriers before collection from client."
      }
    }
  ],

  // ACCOUNTING - 2 questions
  'accounting': [
    {
      question: {
        ro: "Ce documente sunt necesare pentru reconcilierea lunară a transporturilor?",
        de: "Welche Dokumente sind für den monatlichen Transportabgleich erforderlich?",
        en: "What documents are needed for monthly transport reconciliation?"
      },
      options: {
        ro: ["Doar facturile", "Facturi, CMR-uri semnate, confirmări de livrare, deconturi de cheltuieli", "Doar contractele", "Doar extrasele bancare"],
        de: ["Nur Rechnungen", "Rechnungen, unterschriebene CMRs, Lieferbestätigungen, Spesenabrechnungen", "Nur Verträge", "Nur Kontoauszüge"],
        en: ["Only invoices", "Invoices, signed CMRs, delivery confirmations, expense reports", "Only contracts", "Only bank statements"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Reconcilierea completă asigură că toate veniturile sunt facturate și toate costurile sunt înregistrate corect.",
        de: "Vollständiger Abgleich stellt sicher, dass alle Einnahmen fakturiert und alle Kosten korrekt erfasst werden.",
        en: "Complete reconciliation ensures all revenues are invoiced and all costs are correctly recorded."
      }
    },
    {
      question: {
        ro: "Cum calculezi profitabilitatea per transport?",
        de: "Wie berechnet man die Rentabilität pro Transport?",
        en: "How do you calculate profitability per transport?"
      },
      options: {
        ro: ["Doar venit minus combustibil", "Venit total - Toate costurile directe (carrier, taxe, handling) - Cotă costuri indirecte", "Doar venitul împărțit la km", "Nu se poate calcula"],
        de: ["Nur Umsatz minus Kraftstoff", "Gesamtumsatz - Alle direkten Kosten (Spediteur, Gebühren, Handling) - Anteil indirekter Kosten", "Nur Umsatz geteilt durch km", "Kann nicht berechnet werden"],
        en: ["Only revenue minus fuel", "Total revenue - All direct costs (carrier, tolls, handling) - Share of indirect costs", "Only revenue divided by km", "Cannot be calculated"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Calculul complet al profitabilității include toate costurile pentru a înțelege performanța reală.",
        de: "Die vollständige Rentabilitätsberechnung umfasst alle Kosten, um die tatsächliche Leistung zu verstehen.",
        en: "Complete profitability calculation includes all costs to understand real performance."
      }
    }
  ],

  // TRAINING - 2 questions
  'training': [
    {
      question: {
        ro: "Care sunt competențele esențiale pentru un nou disponent?",
        de: "Was sind die wesentlichen Kompetenzen für einen neuen Disponenten?",
        en: "What are the essential competencies for a new dispatcher?"
      },
      options: {
        ro: ["Doar permis de conducere", "Geografie europeană, reglementări transport, comunicare, software TMS, rezolvare probleme", "Doar utilizare computer", "Doar cunoașterea unei limbi străine"],
        de: ["Nur Führerschein", "Europäische Geographie, Transportvorschriften, Kommunikation, TMS-Software, Problemlösung", "Nur Computernutzung", "Nur Fremdsprachenkenntnisse"],
        en: ["Only driving license", "European geography, transport regulations, communication, TMS software, problem solving", "Only computer use", "Only foreign language knowledge"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Un disponent competent combină cunoștințe tehnice cu abilități soft și rezolvare de probleme.",
        de: "Ein kompetenter Disponent kombiniert technisches Wissen mit Soft Skills und Problemlösung.",
        en: "A competent dispatcher combines technical knowledge with soft skills and problem solving."
      }
    },
    {
      question: {
        ro: "Cât durează în medie formarea completă a unui disponent junior?",
        de: "Wie lange dauert im Durchschnitt die vollständige Ausbildung eines Junior-Disponenten?",
        en: "How long does it take on average to fully train a junior dispatcher?"
      },
      options: {
        ro: ["1 săptămână", "6-12 luni până la autonomie deplină", "1 lună", "2 săptămâni"],
        de: ["1 Woche", "6-12 Monate bis zur vollen Autonomie", "1 Monat", "2 Wochen"],
        en: ["1 week", "6-12 months to full autonomy", "1 month", "2 weeks"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Formarea completă necesită experiență practică în diverse situații și sezon complet de operare.",
        de: "Die vollständige Ausbildung erfordert praktische Erfahrung in verschiedenen Situationen und eine komplette Betriebssaison.",
        en: "Complete training requires practical experience in various situations and a full operating season."
      }
    }
  ],

  // PROFESSIONAL-DEVELOPMENT - 2 questions
  'professional-development': [
    {
      question: {
        ro: "Care sunt traseele de carieră tipice pentru un disponent?",
        de: "Was sind die typischen Karrierewege für einen Disponenten?",
        en: "What are the typical career paths for a dispatcher?"
      },
      options: {
        ro: ["Doar același rol pentru totdeauna", "Senior Dispatcher → Team Leader → Operations Manager → Director de Operațiuni", "Doar schimbarea companiei", "Doar specializare pe o rută"],
        de: ["Nur dieselbe Rolle für immer", "Senior Disponent → Teamleiter → Operations Manager → Betriebsleiter", "Nur Firmenwechsel", "Nur Spezialisierung auf eine Route"],
        en: ["Only same role forever", "Senior Dispatcher → Team Leader → Operations Manager → Operations Director", "Only changing company", "Only route specialization"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Dezvoltarea sistematică a competențelor deschide oportunități de management și strategie.",
        de: "Systematische Kompetenzentwicklung eröffnet Management- und Strategiemöglichkeiten.",
        en: "Systematic competency development opens management and strategy opportunities."
      }
    },
    {
      question: {
        ro: "Ce certificări sunt valoroase pentru avansarea în carieră în logistică?",
        de: "Welche Zertifizierungen sind für den Karrierefortschritt in der Logistik wertvoll?",
        en: "What certifications are valuable for career advancement in logistics?"
      },
      options: {
        ro: ["Nicio certificare nu contează", "CILT, SCPro, Six Sigma, certificări TMS specifice", "Doar MBA", "Doar certificări IT"],
        de: ["Keine Zertifizierung zählt", "CILT, SCPro, Six Sigma, spezifische TMS-Zertifizierungen", "Nur MBA", "Nur IT-Zertifizierungen"],
        en: ["No certification matters", "CILT, SCPro, Six Sigma, specific TMS certifications", "Only MBA", "Only IT certifications"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Certificările profesionale validează competențele și cresc vizibilitatea pe piața muncii.",
        de: "Berufszertifizierungen validieren Kompetenzen und erhöhen die Sichtbarkeit auf dem Arbeitsmarkt.",
        en: "Professional certifications validate competencies and increase visibility in the job market."
      }
    }
  ],

  // CASE-STUDIES - 2 questions
  'case-studies': [
    {
      question: {
        ro: "Ce învățăm din scenariul 'BMW Line Stop' prezentat în manual?",
        de: "Was lernen wir aus dem 'BMW-Produktionsstopp'-Szenario im Handbuch?",
        en: "What do we learn from the 'BMW Line Stop' scenario presented in the manual?"
      },
      options: {
        ro: ["Să evităm clienții auto", "Urgența extremă a livrărilor JIT, costul de 15.000-50.000€/minut de oprire, soluții creative de transport", "Să facem doar transport standard", "Că producătorii auto sunt dificili"],
        de: ["Autokunden zu vermeiden", "Extreme Dringlichkeit von JIT-Lieferungen, Kosten von 15.000-50.000€/Minute Stillstand, kreative Transportlösungen", "Nur Standardtransport zu machen", "Dass Autohersteller schwierig sind"],
        en: ["To avoid automotive clients", "Extreme urgency of JIT deliveries, 15,000-50,000€/minute stoppage cost, creative transport solutions", "To do only standard transport", "That automotive manufacturers are difficult"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Studiul de caz demonstrează cum gândirea rapidă și soluțiile creative pot salva situații critice.",
        de: "Die Fallstudie zeigt, wie schnelles Denken und kreative Lösungen kritische Situationen retten können.",
        en: "The case study demonstrates how quick thinking and creative solutions can save critical situations."
      }
    },
    {
      question: {
        ro: "Ce demonstrează cazul 'Furt pe A7 Franța'?",
        de: "Was zeigt der Fall 'Diebstahl auf der A7 Frankreich'?",
        en: "What does the 'Theft on A7 France' case demonstrate?"
      },
      options: {
        ro: ["Să evităm Franța", "Importanța procedurilor de securitate, parking-urilor securizate și verificării transportatorilor", "Că furturile sunt inevitabile", "Să folosim doar transport aerian"],
        de: ["Frankreich zu vermeiden", "Die Bedeutung von Sicherheitsverfahren, gesicherten Parkplätzen und Spediteurüberprüfung", "Dass Diebstähle unvermeidlich sind", "Nur Lufttransport zu nutzen"],
        en: ["To avoid France", "Importance of security procedures, secured parking and carrier verification", "That thefts are inevitable", "To use only air transport"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Prevenirea furturilor necesită protocoale de securitate complete și diligență în selecția partenerilor.",
        de: "Diebstahlprävention erfordert vollständige Sicherheitsprotokolle und Sorgfalt bei der Partnerwahl.",
        en: "Theft prevention requires complete security protocols and diligence in partner selection."
      }
    }
  ],

  // EMERGENCY - 2 questions
  'emergency': [
    {
      question: {
        ro: "Care sunt primii pași în cazul unui accident rutier cu marfă?",
        de: "Was sind die ersten Schritte bei einem Verkehrsunfall mit Fracht?",
        en: "What are the first steps in case of a road accident with cargo?"
      },
      options: {
        ro: ["Continui drumul dacă poți", "Siguranța persoanelor, alertarea autorităților, documentare, notificarea clientului și asigurătorului", "Aștepți să te sune cineva", "Ignori dacă nu e grav"],
        de: ["Weiterfahren wenn möglich", "Personensicherheit, Behörden alarmieren, dokumentieren, Kunden und Versicherer benachrichtigen", "Warten bis jemand anruft", "Ignorieren wenn nicht schwerwiegend"],
        en: ["Continue if you can", "People's safety, alert authorities, document, notify client and insurer", "Wait for someone to call", "Ignore if not serious"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Procedura corectă protejează vieți, respectă obligațiile legale și facilitează procesarea reclamațiilor.",
        de: "Das korrekte Verfahren schützt Leben, erfüllt rechtliche Verpflichtungen und erleichtert die Schadensabwicklung.",
        en: "Correct procedure protects lives, meets legal obligations and facilitates claim processing."
      }
    },
    {
      question: {
        ro: "Ce conține un kit de urgență obligatoriu pentru șoferul ADR?",
        de: "Was enthält ein obligatorisches Notfall-Kit für den ADR-Fahrer?",
        en: "What does a mandatory emergency kit for ADR driver contain?"
      },
      options: {
        ro: ["Doar triunghi reflectorizant", "Echipament de protecție, pană pentru scurgeri, stingător, lopată, vestă, lanternă", "Doar trusa medicală", "Doar telefon mobil"],
        de: ["Nur Warndreieck", "Schutzausrüstung, Auffangwanne für Leckagen, Feuerlöscher, Schaufel, Weste, Taschenlampe", "Nur Erste-Hilfe-Set", "Nur Mobiltelefon"],
        en: ["Only warning triangle", "Protective equipment, spill containment, fire extinguisher, shovel, vest, flashlight", "Only first aid kit", "Only mobile phone"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Echipamentul ADR este specificat în instrucțiunile scrise și trebuie verificat înainte de fiecare transport.",
        de: "Die ADR-Ausrüstung ist in den schriftlichen Weisungen angegeben und muss vor jedem Transport überprüft werden.",
        en: "ADR equipment is specified in written instructions and must be checked before each transport."
      }
    }
  ],

  // RED-FLAGS - 2 questions
  'red-flags': [
    {
      question: {
        ro: "Care sunt semnele unei potențiale fraude de marfă?",
        de: "Was sind die Anzeichen eines potenziellen Frachtbetrugs?",
        en: "What are the signs of potential cargo fraud?"
      },
      options: {
        ro: ["Prețuri standard de piață", "Prețuri sub piață, urgență extremă, documente incomplete, adrese vagi, plată neobișnuită", "Clienți noi", "Comunicare frecventă"],
        de: ["Marktübliche Preise", "Unter dem Markt liegende Preise, extreme Dringlichkeit, unvollständige Dokumente, vage Adressen, ungewöhnliche Zahlung", "Neue Kunden", "Häufige Kommunikation"],
        en: ["Standard market prices", "Below-market prices, extreme urgency, incomplete documents, vague addresses, unusual payment", "New clients", "Frequent communication"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Combinația mai multor red flags trebuie să declanșeze verificări suplimentare sau refuzul comenzii.",
        de: "Die Kombination mehrerer Red Flags sollte zusätzliche Überprüfungen oder Auftragsablehnung auslösen.",
        en: "The combination of multiple red flags should trigger additional checks or order refusal."
      }
    },
    {
      question: {
        ro: "Cum verifici legitimitatea unei firme de transport necunoscute?",
        de: "Wie überprüft man die Legitimität eines unbekannten Transportunternehmens?",
        en: "How do you verify the legitimacy of an unknown transport company?"
      },
      options: {
        ro: ["Ai încredere în primul contact", "Verifici licența, asigurarea, referințele, rating-ul GSAT, sediul fizic", "Doar verifici website-ul", "Trimiți doar comenzi mici inițial"],
        de: ["Dem ersten Kontakt vertrauen", "Lizenz, Versicherung, Referenzen, GSAT-Rating, physische Niederlassung überprüfen", "Nur die Website überprüfen", "Nur kleine Aufträge initial senden"],
        en: ["Trust the first contact", "Check license, insurance, references, GSAT rating, physical premises", "Only check the website", "Send only small orders initially"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Due diligence complet previne pierderi și asigură că lucrezi cu parteneri legitimi.",
        de: "Vollständige Due Diligence verhindert Verluste und stellt sicher, dass Sie mit legitimen Partnern arbeiten.",
        en: "Complete due diligence prevents losses and ensures you work with legitimate partners."
      }
    }
  ],

  // CHECKLISTS - 2 questions
  'checklists': [
    {
      question: {
        ro: "Ce ar trebui să includă un checklist de pre-încărcare?",
        de: "Was sollte eine Checkliste vor der Beladung enthalten?",
        en: "What should a pre-loading checklist include?"
      },
      options: {
        ro: ["Doar verificarea destinației", "Starea vehiculului, documente, cerințe speciale marfă, echipamente necesare, confirmări", "Doar verificarea prețului", "Doar verificarea timpului de livrare"],
        de: ["Nur Zielüberprüfung", "Fahrzeugzustand, Dokumente, besondere Frachtanforderungen, notwendige Ausrüstung, Bestätigungen", "Nur Preisüberprüfung", "Nur Lieferzeitüberprüfung"],
        en: ["Only destination check", "Vehicle condition, documents, special cargo requirements, necessary equipment, confirmations", "Only price check", "Only delivery time check"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Checklist-ul complet previne omisiuni care ar putea duce la întârzieri sau probleme la încărcare.",
        de: "Die vollständige Checkliste verhindert Auslassungen, die zu Verzögerungen oder Problemen bei der Beladung führen könnten.",
        en: "Complete checklist prevents omissions that could lead to delays or problems at loading."
      }
    },
    {
      question: {
        ro: "De ce sunt importante checklist-urile standardizate în operațiuni?",
        de: "Warum sind standardisierte Checklisten im Betrieb wichtig?",
        en: "Why are standardized checklists important in operations?"
      },
      options: {
        ro: ["Doar pentru audit", "Asigură consistența, previn erorile, facilitează training-ul, oferă audit trail", "Sunt opționale", "Încetinesc operațiunile"],
        de: ["Nur für Audits", "Gewährleisten Konsistenz, verhindern Fehler, erleichtern Schulung, bieten Audit-Trail", "Sind optional", "Verlangsamen Operationen"],
        en: ["Only for audits", "Ensure consistency, prevent errors, facilitate training, provide audit trail", "Are optional", "Slow down operations"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Checklist-urile transformă experiența în proceduri repetabile și reduc dependența de memorie.",
        de: "Checklisten wandeln Erfahrung in wiederholbare Verfahren um und reduzieren die Abhängigkeit vom Gedächtnis.",
        en: "Checklists transform experience into repeatable procedures and reduce reliance on memory."
      }
    }
  ],

  // GLOSSARY - 2 questions
  'glossary': [
    {
      question: {
        ro: "Ce înseamnă termenul 'cabotaj' în transportul rutier?",
        de: "Was bedeutet der Begriff 'Kabotage' im Straßentransport?",
        en: "What does the term 'cabotage' mean in road transport?"
      },
      options: {
        ro: ["Transport internațional", "Transport național efectuat de un transportator străin în altă țară decât cea de origine", "Transport de cabină", "Transport de pasageri"],
        de: ["Internationaler Transport", "Inlandstransport durch einen ausländischen Frachtführer in einem anderen Land als seinem Heimatland", "Kabinentransport", "Personentransport"],
        en: ["International transport", "Domestic transport performed by a foreign carrier in a country other than its home country", "Cabin transport", "Passenger transport"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Cabotajul este strict reglementat în UE, cu limite privind numărul și durata operațiunilor permise.",
        de: "Kabotage ist in der EU streng reguliert, mit Grenzen für Anzahl und Dauer der erlaubten Operationen.",
        en: "Cabotage is strictly regulated in the EU, with limits on the number and duration of allowed operations."
      }
    },
    {
      question: {
        ro: "Ce reprezintă SDR în contextul răspunderii transportatorului?",
        de: "Was bedeutet SZR im Zusammenhang mit der Haftung des Frachtführers?",
        en: "What does SDR represent in the context of carrier liability?"
      },
      options: {
        ro: ["O monedă europeană", "Special Drawing Rights - unitatea de calcul FMI pentru limitarea răspunderii CMR", "Un tip de asigurare", "O clasificare de vehicule"],
        de: ["Eine europäische Währung", "Sonderziehungsrechte - IWF-Recheneinheit zur CMR-Haftungsbegrenzung", "Eine Versicherungsart", "Eine Fahrzeugklassifizierung"],
        en: ["A European currency", "Special Drawing Rights - IMF unit of account for CMR liability limitation", "A type of insurance", "A vehicle classification"]
      },
      correctIndex: 1,
      explanation: {
        ro: "SDR este coșul de valute FMI folosit pentru a calcula limita de răspundere de 8.33 SDR/kg conform CMR.",
        de: "SZR ist der IWF-Währungskorb, der zur Berechnung der Haftungsgrenze von 8,33 SZR/kg gemäß CMR verwendet wird.",
        en: "SDR is the IMF currency basket used to calculate the 8.33 SDR/kg liability limit under CMR."
      }
    }
  ]
};

// Export a flat array for easy merging with existing question bank
export function getFinalExamExtraQuestionsFlat(): Array<QuizQuestion & { chapterId: string }> {
  const questions: Array<QuizQuestion & { chapterId: string }> = [];
  
  for (const [chapterId, chapterQuestions] of Object.entries(finalExamExtraQuestions)) {
    for (const question of chapterQuestions) {
      questions.push({
        ...question,
        chapterId
      });
    }
  }
  
  return questions;
}
