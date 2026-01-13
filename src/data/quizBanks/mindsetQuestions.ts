import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const mindsetQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Care este mentalitatea corectă pentru un disponent de succes?",
      de: "Was ist die richtige Einstellung für einen erfolgreichen Disponenten?",
      en: "What is the right mindset for a successful dispatcher?"
    },
    options: {
      ro: ["Să evite responsabilitatea", "Proactivitate, orientare spre soluții și învățare continuă", "Să aștepte instrucțiuni", "Să facă doar minimul necesar"],
      de: ["Verantwortung vermeiden", "Proaktivität, Lösungsorientierung und kontinuierliches Lernen", "Auf Anweisungen warten", "Nur das Minimum tun"],
      en: ["Avoid responsibility", "Proactivity, solution orientation and continuous learning", "Wait for instructions", "Do only the minimum"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Disponentul de succes anticipează probleme, propune soluții și se dezvoltă continuu profesional.",
      de: "Der erfolgreiche Disponent antizipiert Probleme, schlägt Lösungen vor und entwickelt sich kontinuierlich beruflich weiter.",
      en: "The successful dispatcher anticipates problems, proposes solutions and continuously develops professionally."
    }
  },
  {
    question: {
      ro: "Cum gestionezi stresul în situații de urgență?",
      de: "Wie bewältigen Sie Stress in Notfallsituationen?",
      en: "How do you manage stress in emergency situations?"
    },
    options: {
      ro: ["Panichez și acționez impulsiv", "Rămân calm, analizez situația și acționez metodic", "Amân decizia", "Transfer problema altcuiva"],
      de: ["Panik und impulsives Handeln", "Ruhig bleiben, Situation analysieren und methodisch handeln", "Entscheidung aufschieben", "Problem an andere weitergeben"],
      en: ["Panic and act impulsively", "Stay calm, analyze situation and act methodically", "Postpone decision", "Transfer problem to someone else"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Gestionarea stresului presupune menținerea calmului, analiza rapidă și acțiune structurată.",
      de: "Stressmanagement bedeutet Ruhe bewahren, schnelle Analyse und strukturiertes Handeln.",
      en: "Stress management involves staying calm, quick analysis and structured action."
    }
  },
  {
    question: {
      ro: "Ce înseamnă ownership (asumarea responsabilității) în rol?",
      de: "Was bedeutet Ownership (Verantwortungsübernahme) in der Rolle?",
      en: "What does ownership mean in the role?"
    },
    options: {
      ro: ["Să fii proprietarul firmei", "Să tratezi sarcinile ca și cum ar fi ale tale, cu responsabilitate deplină", "Să refuzi ajutorul", "Să lucrezi singur"],
      de: ["Firmeneigentümer sein", "Aufgaben behandeln als wären sie eigene, mit voller Verantwortung", "Hilfe ablehnen", "Alleine arbeiten"],
      en: ["Being the company owner", "Treat tasks as your own with full responsibility", "Refuse help", "Work alone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ownership înseamnă a-ți asuma complet responsabilitatea pentru rezultate, nu doar pentru sarcini.",
      de: "Ownership bedeutet, die volle Verantwortung für Ergebnisse zu übernehmen, nicht nur für Aufgaben.",
      en: "Ownership means taking full responsibility for outcomes, not just tasks."
    }
  },
  {
    question: {
      ro: "Cum abordezi o greșeală profesională?",
      de: "Wie gehen Sie mit einem beruflichen Fehler um?",
      en: "How do you approach a professional mistake?"
    },
    options: {
      ro: ["O ascund", "O recunosc, analizez cauza și implementez măsuri preventive", "Dau vina pe alții", "O ignor"],
      de: ["Verstecken", "Anerkennen, Ursache analysieren und Präventivmaßnahmen umsetzen", "Anderen die Schuld geben", "Ignorieren"],
      en: ["Hide it", "Acknowledge it, analyze cause and implement preventive measures", "Blame others", "Ignore it"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Greșelile sunt oportunități de învățare - recunoașterea și corectarea lor construiesc încredere.",
      de: "Fehler sind Lernmöglichkeiten - Anerkennung und Korrektur bauen Vertrauen auf.",
      en: "Mistakes are learning opportunities - acknowledging and correcting them builds trust."
    }
  },
  {
    question: {
      ro: "Ce atitudine ai față de feedback negativ?",
      de: "Welche Einstellung haben Sie zu negativem Feedback?",
      en: "What attitude do you have towards negative feedback?"
    },
    options: {
      ro: ["Îl resping defensiv", "Îl primesc deschis ca oportunitate de îmbunătățire", "Mă supăr", "Îl ignor complet"],
      de: ["Defensiv ablehnen", "Offen als Verbesserungsmöglichkeit annehmen", "Sich ärgern", "Komplett ignorieren"],
      en: ["Reject it defensively", "Accept it openly as improvement opportunity", "Get upset", "Ignore it completely"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Feedback-ul negativ constructiv este valoros pentru dezvoltarea profesională.",
      de: "Konstruktives negatives Feedback ist wertvoll für die berufliche Entwicklung.",
      en: "Constructive negative feedback is valuable for professional development."
    }
  },
  {
    question: {
      ro: "Cum prioritizezi când ai multiple urgențe simultane?",
      de: "Wie priorisieren Sie bei mehreren gleichzeitigen Dringlichkeiten?",
      en: "How do you prioritize when you have multiple simultaneous urgencies?"
    },
    options: {
      ro: ["Le fac pe toate simultan", "Evaluez impactul, urgența și acționez pe cele critice primele", "Aleg aleatoriu", "Cer ajutor pentru toate"],
      de: ["Alle gleichzeitig erledigen", "Auswirkung, Dringlichkeit bewerten und kritische zuerst bearbeiten", "Zufällig auswählen", "Für alle Hilfe bitten"],
      en: ["Do all simultaneously", "Evaluate impact, urgency and address critical ones first", "Choose randomly", "Ask for help on all"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prioritizarea eficientă se bazează pe evaluarea impactului și a urgenței pentru a aloca resursele corect.",
      de: "Effektive Priorisierung basiert auf der Bewertung von Auswirkung und Dringlichkeit für korrekte Ressourcenzuweisung.",
      en: "Effective prioritization is based on evaluating impact and urgency to allocate resources correctly."
    }
  },
  {
    question: {
      ro: "Ce înseamnă adaptabilitate în logistică?",
      de: "Was bedeutet Anpassungsfähigkeit in der Logistik?",
      en: "What does adaptability mean in logistics?"
    },
    options: {
      ro: ["Să refuzi schimbările", "Să te adaptezi rapid la situații noi și să găsești soluții creative", "Să faci mereu același lucru", "Să aștepți instrucțiuni noi"],
      de: ["Änderungen ablehnen", "Sich schnell an neue Situationen anpassen und kreative Lösungen finden", "Immer das Gleiche tun", "Auf neue Anweisungen warten"],
      en: ["Refuse changes", "Quickly adapt to new situations and find creative solutions", "Always do the same thing", "Wait for new instructions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Logistica necesită flexibilitate constantă pentru a răspunde la schimbări neprevăzute.",
      de: "Logistik erfordert ständige Flexibilität, um auf unvorhergesehene Änderungen zu reagieren.",
      en: "Logistics requires constant flexibility to respond to unforeseen changes."
    }
  },
  {
    question: {
      ro: "Cum îți dezvolți cunoștințele profesionale?",
      de: "Wie entwickeln Sie Ihre beruflichen Kenntnisse?",
      en: "How do you develop your professional knowledge?"
    },
    options: {
      ro: ["Aștept să mi se spună", "Învăț proactiv din experiență, colegi și resurse externe", "Nu e necesar", "Doar din greșeli"],
      de: ["Warten bis gesagt wird", "Proaktiv aus Erfahrung, Kollegen und externen Ressourcen lernen", "Nicht nötig", "Nur aus Fehlern"],
      en: ["Wait to be told", "Learn proactively from experience, colleagues and external resources", "Not necessary", "Only from mistakes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dezvoltarea continuă presupune învățare activă din multiple surse și aplicarea cunoștințelor.",
      de: "Kontinuierliche Entwicklung bedeutet aktives Lernen aus mehreren Quellen und Anwendung des Wissens.",
      en: "Continuous development involves active learning from multiple sources and applying knowledge."
    }
  },
  {
    question: {
      ro: "Ce este gândirea orientată spre client?",
      de: "Was ist kundenorientiertes Denken?",
      en: "What is customer-oriented thinking?"
    },
    options: {
      ro: ["Să faci doar ce cere clientul", "Să anticipezi nevoile și să oferi soluții care adaugă valoare", "Să accepți orice cerere", "Să minimizezi contactul"],
      de: ["Nur tun was der Kunde verlangt", "Bedürfnisse antizipieren und wertsteigernde Lösungen bieten", "Jede Anfrage akzeptieren", "Kontakt minimieren"],
      en: ["Only do what client asks", "Anticipate needs and offer value-adding solutions", "Accept any request", "Minimize contact"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Orientarea către client înseamnă înțelegerea profundă a nevoilor și depășirea așteptărilor.",
      de: "Kundenorientierung bedeutet tiefes Verständnis der Bedürfnisse und Übertreffen der Erwartungen.",
      en: "Customer orientation means deep understanding of needs and exceeding expectations."
    }
  },
  {
    question: {
      ro: "Cum menții motivația în perioade dificile?",
      de: "Wie halten Sie die Motivation in schwierigen Zeiten aufrecht?",
      en: "How do you maintain motivation during difficult periods?"
    },
    options: {
      ro: ["Mă plâng constant", "Mă concentrez pe obiective, celebrez victoriile mici și cer suport", "Aștept să treacă", "Ignor problemele"],
      de: ["Ständig beschweren", "Auf Ziele konzentrieren, kleine Siege feiern und Unterstützung suchen", "Abwarten", "Probleme ignorieren"],
      en: ["Complain constantly", "Focus on goals, celebrate small wins and seek support", "Wait for it to pass", "Ignore problems"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reziliența se construiește prin focusare pe progres, recunoașterea realizărilor și suport colegial.",
      de: "Resilienz wird durch Fokus auf Fortschritt, Anerkennung von Leistungen und kollegiale Unterstützung aufgebaut.",
      en: "Resilience is built through focus on progress, acknowledging achievements and collegial support."
    }
  },
  {
    question: {
      ro: "Ce înseamnă profesionalism în relația cu partenerii?",
      de: "Was bedeutet Professionalität in der Beziehung zu Partnern?",
      en: "What does professionalism mean in partner relationships?"
    },
    options: {
      ro: ["Distanță și formalitate extremă", "Respect reciproc, comunicare clară și onorarea angajamentelor", "Prietenie personală", "Doar relații contractuale"],
      de: ["Extreme Distanz und Formalität", "Gegenseitiger Respekt, klare Kommunikation und Einhaltung von Verpflichtungen", "Persönliche Freundschaft", "Nur vertragliche Beziehungen"],
      en: ["Extreme distance and formality", "Mutual respect, clear communication and honoring commitments", "Personal friendship", "Only contractual relationships"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Profesionalismul combină respectul, transparența și îndeplinirea promisiunilor.",
      de: "Professionalität kombiniert Respekt, Transparenz und Erfüllung von Versprechen.",
      en: "Professionalism combines respect, transparency and fulfilling promises."
    }
  },
  {
    question: {
      ro: "Cum gestionezi conflictele de interese?",
      de: "Wie gehen Sie mit Interessenkonflikten um?",
      en: "How do you manage conflicts of interest?"
    },
    options: {
      ro: ["Favorizez propria poziție", "Identific interesele comune și caut soluții echilibrate", "Le ignor", "Le escaladez imediat"],
      de: ["Eigene Position bevorzugen", "Gemeinsame Interessen identifizieren und ausgewogene Lösungen suchen", "Ignorieren", "Sofort eskalieren"],
      en: ["Favor own position", "Identify common interests and seek balanced solutions", "Ignore them", "Escalate immediately"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Gestionarea conflictelor presupune identificarea punctelor comune și negocierea soluțiilor win-win.",
      de: "Konfliktmanagement beinhaltet die Identifizierung gemeinsamer Punkte und Verhandlung von Win-Win-Lösungen.",
      en: "Conflict management involves identifying common ground and negotiating win-win solutions."
    }
  },
  {
    question: {
      ro: "Ce atitudine ai față de regulile și procedurile interne?",
      de: "Welche Einstellung haben Sie zu internen Regeln und Verfahren?",
      en: "What attitude do you have towards internal rules and procedures?"
    },
    options: {
      ro: ["Le ignor când nu-mi convin", "Le respect și propun îmbunătățiri când văd oportunități", "Le urmez orb", "Le consider inutile"],
      de: ["Ignorieren wenn unbequem", "Respektieren und Verbesserungen vorschlagen bei Chancen", "Blind befolgen", "Als nutzlos betrachten"],
      en: ["Ignore when inconvenient", "Respect them and propose improvements when seeing opportunities", "Follow blindly", "Consider them useless"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Procedurile asigură consistență - respectarea lor cu spirit critic constructiv aduce valoare.",
      de: "Verfahren gewährleisten Konsistenz - Befolgung mit konstruktivem kritischem Geist bringt Mehrwert.",
      en: "Procedures ensure consistency - following them with constructive critical spirit adds value."
    }
  },
  {
    question: {
      ro: "Cum abordezi o sarcină pe care nu ai mai făcut-o?",
      de: "Wie gehen Sie an eine Aufgabe heran, die Sie noch nie gemacht haben?",
      en: "How do you approach a task you've never done before?"
    },
    options: {
      ro: ["Refuz să o fac", "Studiez, întreb, încerc și învăț din proces", "O amân indefinit", "O deleghezi fără să înveți"],
      de: ["Ablehnen", "Studieren, fragen, versuchen und aus dem Prozess lernen", "Unbegrenzt aufschieben", "Delegieren ohne zu lernen"],
      en: ["Refuse to do it", "Study, ask, try and learn from the process", "Postpone indefinitely", "Delegate without learning"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sarcinile noi sunt oportunități de creștere - abordarea proactivă accelerează dezvoltarea.",
      de: "Neue Aufgaben sind Wachstumschancen - proaktiver Ansatz beschleunigt die Entwicklung.",
      en: "New tasks are growth opportunities - proactive approach accelerates development."
    }
  },
  {
    question: {
      ro: "Ce înseamnă integritate profesională?",
      de: "Was bedeutet berufliche Integrität?",
      en: "What does professional integrity mean?"
    },
    options: {
      ro: ["Să faci ce e popular", "Să acționezi corect chiar când nimeni nu vede", "Să eviți conflictele", "Să fii de acord cu toți"],
      de: ["Das Beliebte tun", "Richtig handeln auch wenn niemand zusieht", "Konflikte vermeiden", "Allen zustimmen"],
      en: ["Do what's popular", "Act correctly even when no one is watching", "Avoid conflicts", "Agree with everyone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integritatea înseamnă consistență între valori, vorbe și acțiuni în orice circumstanță.",
      de: "Integrität bedeutet Konsistenz zwischen Werten, Worten und Handlungen unter allen Umständen.",
      en: "Integrity means consistency between values, words and actions in all circumstances."
    }
  },
  {
    question: {
      ro: "Cum reacționezi când un coleg are nevoie de ajutor?",
      de: "Wie reagieren Sie, wenn ein Kollege Hilfe braucht?",
      en: "How do you react when a colleague needs help?"
    },
    options: {
      ro: ["Nu e treaba mea", "Ofer suport în limita posibilităților, echipa are prioritate", "Ajut doar dacă beneficiez", "Îl ignor"],
      de: ["Nicht meine Sache", "Unterstützung im Rahmen der Möglichkeiten bieten, Team hat Priorität", "Nur helfen wenn Vorteil", "Ignorieren"],
      en: ["Not my business", "Offer support within possibilities, team has priority", "Help only if I benefit", "Ignore"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Spiritul de echipă înseamnă suport reciproc pentru atingerea obiectivelor comune.",
      de: "Teamgeist bedeutet gegenseitige Unterstützung zur Erreichung gemeinsamer Ziele.",
      en: "Team spirit means mutual support to achieve common goals."
    }
  },
  {
    question: {
      ro: "Ce faci când identifici o problemă potențială?",
      de: "Was tun Sie, wenn Sie ein potenzielles Problem identifizieren?",
      en: "What do you do when you identify a potential problem?"
    },
    options: {
      ro: ["Aștept să devină reală", "Semnalizez, propun soluții preventive și monitorizez", "Sper să dispară", "Nu e responsabilitatea mea"],
      de: ["Warten bis real wird", "Signalisieren, Präventivlösungen vorschlagen und überwachen", "Hoffen dass verschwindet", "Nicht meine Verantwortung"],
      en: ["Wait for it to become real", "Signal, propose preventive solutions and monitor", "Hope it disappears", "Not my responsibility"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Proactivitatea în identificarea și prevenirea problemelor economisește timp și resurse.",
      de: "Proaktivität bei der Identifizierung und Prävention von Problemen spart Zeit und Ressourcen.",
      en: "Proactivity in identifying and preventing problems saves time and resources."
    }
  },
  {
    question: {
      ro: "Cum îți organizezi ziua de muncă?",
      de: "Wie organisieren Sie Ihren Arbeitstag?",
      en: "How do you organize your work day?"
    },
    options: {
      ro: ["Reacționez la ce apare", "Planific prioritățile, las timp pentru urgențe, evaluez la final", "Nu am nevoie de plan", "Fac ce vreau"],
      de: ["Auf das reagieren was auftaucht", "Prioritäten planen, Zeit für Dringlichkeiten lassen, am Ende bewerten", "Brauche keinen Plan", "Machen was ich will"],
      en: ["React to what comes up", "Plan priorities, leave time for urgencies, evaluate at the end", "Don't need a plan", "Do what I want"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Organizarea eficientă combină planificarea cu flexibilitatea pentru situații neprevăzute.",
      de: "Effiziente Organisation kombiniert Planung mit Flexibilität für unvorhergesehene Situationen.",
      en: "Efficient organization combines planning with flexibility for unforeseen situations."
    }
  },
  {
    question: {
      ro: "Ce înseamnă comunicare asertivă?",
      de: "Was bedeutet assertive Kommunikation?",
      en: "What does assertive communication mean?"
    },
    options: {
      ro: ["Să fii agresiv", "Să-ți exprimi clar nevoile respectând și drepturile celorlalți", "Să fii pasiv", "Să eviți discuțiile"],
      de: ["Aggressiv sein", "Eigene Bedürfnisse klar ausdrücken und Rechte anderer respektieren", "Passiv sein", "Diskussionen vermeiden"],
      en: ["Being aggressive", "Clearly express your needs while respecting others' rights", "Being passive", "Avoid discussions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Asertivitatea echilibrează exprimarea propriilor nevoi cu respectul pentru ceilalți.",
      de: "Assertivität balanciert den Ausdruck eigener Bedürfnisse mit Respekt für andere.",
      en: "Assertiveness balances expressing your own needs with respect for others."
    }
  },
  {
    question: {
      ro: "Cum tratezi informațiile confidențiale?",
      de: "Wie behandeln Sie vertrauliche Informationen?",
      en: "How do you treat confidential information?"
    },
    options: {
      ro: ["Le împărtășesc informal", "Le protejez strict și le folosesc doar pentru scopul destinat", "Le stochez neglijent", "Nu le consider importante"],
      de: ["Informell teilen", "Streng schützen und nur für bestimmten Zweck verwenden", "Nachlässig speichern", "Nicht als wichtig betrachten"],
      en: ["Share informally", "Strictly protect and use only for intended purpose", "Store carelessly", "Don't consider important"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Confidențialitatea este esențială pentru încrederea clienților și partenilor.",
      de: "Vertraulichkeit ist wesentlich für das Vertrauen von Kunden und Partnern.",
      en: "Confidentiality is essential for client and partner trust."
    }
  },
  {
    question: {
      ro: "Ce atitudine ai față de schimbări în proceduri?",
      de: "Welche Einstellung haben Sie zu Verfahrensänderungen?",
      en: "What attitude do you have towards procedure changes?"
    },
    options: {
      ro: ["Rezist oricărei schimbări", "Le evaluez obiectiv și le adoptez când aduc valoare", "Le accept fără întrebări", "Le sabotez subtil"],
      de: ["Jeder Änderung widerstehen", "Objektiv bewerten und übernehmen wenn Mehrwert", "Ohne Fragen akzeptieren", "Subtil sabotieren"],
      en: ["Resist any change", "Evaluate objectively and adopt when they add value", "Accept without questions", "Subtly sabotage"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Deschiderea la schimbare cu evaluare critică asigură îmbunătățire continuă.",
      de: "Offenheit für Veränderung mit kritischer Bewertung gewährleistet kontinuierliche Verbesserung.",
      en: "Openness to change with critical evaluation ensures continuous improvement."
    }
  },
  {
    question: {
      ro: "Cum definești succesul profesional?",
      de: "Wie definieren Sie beruflichen Erfolg?",
      en: "How do you define professional success?"
    },
    options: {
      ro: ["Doar salariu mare", "Rezultate, dezvoltare continuă și satisfacție în muncă", "Titlu impresionant", "Să muncești puțin"],
      de: ["Nur hohes Gehalt", "Ergebnisse, kontinuierliche Entwicklung und Arbeitszufriedenheit", "Beeindruckender Titel", "Wenig arbeiten"],
      en: ["Only high salary", "Results, continuous development and job satisfaction", "Impressive title", "Work less"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Succesul adevărat combină performanța, creșterea personală și împlinirea profesională.",
      de: "Wahrer Erfolg kombiniert Leistung, persönliches Wachstum und berufliche Erfüllung.",
      en: "True success combines performance, personal growth and professional fulfillment."
    }
  },
  {
    question: {
      ro: "Ce faci când te simți copleșit de volum de muncă?",
      de: "Was tun Sie, wenn Sie sich von der Arbeitsmenge überwältigt fühlen?",
      en: "What do you do when you feel overwhelmed by workload?"
    },
    options: {
      ro: ["Lucrez neîncetat până la epuizare", "Prioritizez, comunic cu superiorii și cer suport dacă e necesar", "Mă plâng", "Ignor sarcinile"],
      de: ["Bis zur Erschöpfung ununterbrochen arbeiten", "Priorisieren, mit Vorgesetzten kommunizieren und Unterstützung bitten wenn nötig", "Beschweren", "Aufgaben ignorieren"],
      en: ["Work non-stop until exhaustion", "Prioritize, communicate with superiors and ask for support if needed", "Complain", "Ignore tasks"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Gestionarea volumului presupune prioritizare, comunicare transparentă și solicitarea ajutorului.",
      de: "Arbeitspensum-Management erfordert Priorisierung, transparente Kommunikation und Bitten um Hilfe.",
      en: "Workload management requires prioritization, transparent communication and asking for help."
    }
  },
  {
    question: {
      ro: "Cum abordezi un client dificil?",
      de: "Wie gehen Sie mit einem schwierigen Kunden um?",
      en: "How do you approach a difficult client?"
    },
    options: {
      ro: ["Îl evit", "Rămân profesionist, ascult activ și caut soluții", "Reacționez emoțional", "Îl transfer altcuiva"],
      de: ["Vermeiden", "Professionell bleiben, aktiv zuhören und Lösungen suchen", "Emotional reagieren", "An andere weitergeben"],
      en: ["Avoid them", "Stay professional, actively listen and seek solutions", "React emotionally", "Transfer to someone else"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clienții dificili necesită răbdare, empatie și focusare pe rezolvarea problemei.",
      de: "Schwierige Kunden erfordern Geduld, Empathie und Fokus auf Problemlösung.",
      en: "Difficult clients require patience, empathy and focus on problem resolution."
    }
  },
  {
    question: {
      ro: "Ce înseamnă mentalitate de creștere (growth mindset)?",
      de: "Was bedeutet Wachstumsmentalität (Growth Mindset)?",
      en: "What does growth mindset mean?"
    },
    options: {
      ro: ["Abilitățile sunt fixe", "Credința că abilitățile pot fi dezvoltate prin efort și învățare", "Doar talentul contează", "Evitarea provocărilor"],
      de: ["Fähigkeiten sind fix", "Glaube dass Fähigkeiten durch Anstrengung und Lernen entwickelt werden können", "Nur Talent zählt", "Herausforderungen vermeiden"],
      en: ["Abilities are fixed", "Belief that abilities can be developed through effort and learning", "Only talent matters", "Avoiding challenges"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Growth mindset înseamnă că prin efort și perseverență poți dezvolta orice competență.",
      de: "Growth Mindset bedeutet, dass durch Anstrengung und Ausdauer jede Kompetenz entwickelt werden kann.",
      en: "Growth mindset means that through effort and perseverance you can develop any competency."
    }
  },
  {
    question: {
      ro: "Cum îți menții energia pe parcursul zilei?",
      de: "Wie halten Sie Ihre Energie während des Tages aufrecht?",
      en: "How do you maintain your energy throughout the day?"
    },
    options: {
      ro: ["Beau cafea constant", "Pauze regulate, alimentație echilibrată, prioritizare inteligentă", "Lucrez fără pauze", "Nu e important"],
      de: ["Ständig Kaffee trinken", "Regelmäßige Pausen, ausgewogene Ernährung, intelligente Priorisierung", "Ohne Pausen arbeiten", "Nicht wichtig"],
      en: ["Drink coffee constantly", "Regular breaks, balanced nutrition, smart prioritization", "Work without breaks", "Not important"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Energia durabilă vine din echilibrul muncă-pauze, nutriție și gestionarea sarcinilor.",
      de: "Nachhaltige Energie kommt aus dem Gleichgewicht Arbeit-Pausen, Ernährung und Aufgabenmanagement.",
      en: "Sustainable energy comes from work-break balance, nutrition and task management."
    }
  },
  {
    question: {
      ro: "Ce atitudine ai față de automatizare și tehnologie?",
      de: "Welche Einstellung haben Sie zu Automatisierung und Technologie?",
      en: "What attitude do you have towards automation and technology?"
    },
    options: {
      ro: ["Le resping", "Le văd ca instrumente care îmi măresc eficiența", "Sunt amenințări", "Nu mă interesează"],
      de: ["Ablehnen", "Als Werkzeuge sehen die meine Effizienz steigern", "Sind Bedrohungen", "Interessiert mich nicht"],
      en: ["Reject them", "See them as tools that increase my efficiency", "They are threats", "Don't interest me"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tehnologia este un aliat care automatizează rutina, lăsând timp pentru sarcini cu valoare adăugată.",
      de: "Technologie ist ein Verbündeter, der Routine automatisiert und Zeit für wertschöpfende Aufgaben lässt.",
      en: "Technology is an ally that automates routine, leaving time for value-adding tasks."
    }
  },
  {
    question: {
      ro: "Cum construiești relații profesionale durabile?",
      de: "Wie bauen Sie dauerhafte berufliche Beziehungen auf?",
      en: "How do you build lasting professional relationships?"
    },
    options: {
      ro: ["Doar când am nevoie", "Prin consistență, încredere și valoare adăugată în timp", "Prin favoruri", "Prin întâlniri sociale"],
      de: ["Nur wenn nötig", "Durch Konsistenz, Vertrauen und Mehrwert über Zeit", "Durch Gefälligkeiten", "Durch gesellschaftliche Treffen"],
      en: ["Only when needed", "Through consistency, trust and added value over time", "Through favors", "Through social meetings"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Relațiile durabile se construiesc prin fiabilitate constantă și oferirea de valoare reciprocă.",
      de: "Dauerhafte Beziehungen werden durch konstante Zuverlässigkeit und gegenseitigen Mehrwert aufgebaut.",
      en: "Lasting relationships are built through constant reliability and mutual value offering."
    }
  },
  {
    question: {
      ro: "Ce faci la finalul unei zile dificile?",
      de: "Was tun Sie am Ende eines schwierigen Tages?",
      en: "What do you do at the end of a difficult day?"
    },
    options: {
      ro: ["Continui să rumenez problemele", "Reflectez, notez lecțiile învățate și mă detașez", "Mă plâng", "Ignor ce s-a întâmplat"],
      de: ["Weiter über Probleme grübeln", "Reflektieren, Lektionen notieren und sich distanzieren", "Beschweren", "Ignorieren was passiert ist"],
      en: ["Keep ruminating on problems", "Reflect, note lessons learned and detach", "Complain", "Ignore what happened"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Încheierea constructivă a zilei include reflecție, extragerea lecțiilor și recuperare mentală.",
      de: "Konstruktiver Tagesabschluss beinhaltet Reflexion, Lektionsextraktion und mentale Erholung.",
      en: "Constructive day closure includes reflection, extracting lessons and mental recovery."
    }
  }
];
