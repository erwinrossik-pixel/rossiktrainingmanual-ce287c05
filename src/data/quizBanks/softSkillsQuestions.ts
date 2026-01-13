import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const softSkillsQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce sunt soft skills în context profesional?",
      de: "Was sind Soft Skills im beruflichen Kontext?",
      en: "What are soft skills in professional context?"
    },
    options: {
      ro: ["Cunoștințe tehnice", "Competențe interpersonale și de comunicare", "Abilități IT", "Cunoștințe de legislație"],
      de: ["Technische Kenntnisse", "Zwischenmenschliche und kommunikative Kompetenzen", "IT-Fähigkeiten", "Gesetzeskenntnisse"],
      en: ["Technical knowledge", "Interpersonal and communication competencies", "IT skills", "Legal knowledge"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Soft skills includ comunicarea, lucrul în echipă, rezolvarea problemelor și inteligența emoțională.",
      de: "Soft Skills umfassen Kommunikation, Teamarbeit, Problemlösung und emotionale Intelligenz.",
      en: "Soft skills include communication, teamwork, problem-solving and emotional intelligence."
    }
  },
  {
    question: {
      ro: "Ce este inteligența emoțională?",
      de: "Was ist emotionale Intelligenz?",
      en: "What is emotional intelligence?"
    },
    options: {
      ro: ["IQ ridicat", "Capacitatea de a recunoaște și gestiona emoțiile proprii și ale altora", "Memorie bună", "Abilități matematice"],
      de: ["Hoher IQ", "Fähigkeit eigene und fremde Emotionen zu erkennen und zu steuern", "Gutes Gedächtnis", "Mathematische Fähigkeiten"],
      en: ["High IQ", "Ability to recognize and manage own and others' emotions", "Good memory", "Mathematical abilities"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EQ presupune autocunoaștere, autocontrol, empatie și abilități sociale.",
      de: "EQ beinhaltet Selbsterkenntnis, Selbstkontrolle, Empathie und soziale Fähigkeiten.",
      en: "EQ involves self-awareness, self-control, empathy and social skills."
    }
  },
  {
    question: {
      ro: "Ce este empatia profesională?",
      de: "Was ist berufliche Empathie?",
      en: "What is professional empathy?"
    },
    options: {
      ro: ["A fi de acord cu toți", "A înțelege perspectiva și sentimentele altora fără a pierde obiectivitatea", "A evita conflictele", "A ceda mereu"],
      de: ["Allen zustimmen", "Perspektive und Gefühle anderer verstehen ohne Objektivität zu verlieren", "Konflikte vermeiden", "Immer nachgeben"],
      en: ["Agreeing with everyone", "Understanding others' perspective and feelings without losing objectivity", "Avoiding conflicts", "Always giving in"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Empatia profesională înseamnă înțelegere și conexiune, menținând în același timp profesionalismul.",
      de: "Berufliche Empathie bedeutet Verständnis und Verbindung bei gleichzeitiger Wahrung der Professionalität.",
      en: "Professional empathy means understanding and connection while maintaining professionalism."
    }
  },
  {
    question: {
      ro: "Cum demonstrezi abilități de lucru în echipă?",
      de: "Wie zeigen Sie Teamfähigkeiten?",
      en: "How do you demonstrate teamwork skills?"
    },
    options: {
      ro: ["Lucrezi singur", "Colaborezi, împărtășești informații și susții obiectivele comune", "Faci doar partea ta", "Competi cu colegii"],
      de: ["Alleine arbeiten", "Zusammenarbeiten, Informationen teilen und gemeinsame Ziele unterstützen", "Nur eigenen Teil machen", "Mit Kollegen konkurrieren"],
      en: ["Work alone", "Collaborate, share information and support common goals", "Only do your part", "Compete with colleagues"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lucrul în echipă presupune comunicare, cooperare și focusare pe rezultatul colectiv.",
      de: "Teamarbeit erfordert Kommunikation, Kooperation und Fokus auf das kollektive Ergebnis.",
      en: "Teamwork requires communication, cooperation and focus on the collective result."
    }
  },
  {
    question: {
      ro: "Ce înseamnă abilitatea de negociere?",
      de: "Was bedeutet Verhandlungsfähigkeit?",
      en: "What does negotiation ability mean?"
    },
    options: {
      ro: ["Să câștigi mereu", "Să găsești soluții acceptabile pentru toate părțile implicate", "Să cedezi rapid", "Să impui condițiile tale"],
      de: ["Immer gewinnen", "Akzeptable Lösungen für alle beteiligten Parteien finden", "Schnell nachgeben", "Eigene Bedingungen durchsetzen"],
      en: ["Always win", "Find acceptable solutions for all parties involved", "Give in quickly", "Impose your conditions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Negocierea eficientă creează valoare pentru ambele părți și construiește relații durabile.",
      de: "Effektive Verhandlung schafft Wert für beide Seiten und baut dauerhafte Beziehungen auf.",
      en: "Effective negotiation creates value for both parties and builds lasting relationships."
    }
  },
  {
    question: {
      ro: "Cum gestionezi o situație de conflict cu un coleg?",
      de: "Wie gehen Sie mit einer Konfliktsituation mit einem Kollegen um?",
      en: "How do you handle a conflict situation with a colleague?"
    },
    options: {
      ro: ["Evit persoana", "Abordez direct, ascult și caut soluții constructive", "Mă plâng superiorului", "Ignor problema"],
      de: ["Person vermeiden", "Direkt ansprechen, zuhören und konstruktive Lösungen suchen", "Beim Vorgesetzten beschweren", "Problem ignorieren"],
      en: ["Avoid the person", "Address directly, listen and seek constructive solutions", "Complain to superior", "Ignore the problem"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rezolvarea conflictelor necesită comunicare deschisă și focusare pe interese, nu pe poziții.",
      de: "Konfliktlösung erfordert offene Kommunikation und Fokus auf Interessen, nicht auf Positionen.",
      en: "Conflict resolution requires open communication and focus on interests, not positions."
    }
  },
  {
    question: {
      ro: "Ce este ascultarea activă?",
      de: "Was ist aktives Zuhören?",
      en: "What is active listening?"
    },
    options: {
      ro: ["Să auzi cuvintele", "Să te concentrezi complet, să confirmi și să întrebi pentru clarificare", "Să aștepți să vorbești", "Să fii de acord cu tot"],
      de: ["Worte hören", "Sich voll konzentrieren, bestätigen und zur Klärung fragen", "Warten bis man spricht", "Allem zustimmen"],
      en: ["Hear the words", "Focus completely, confirm and ask for clarification", "Wait to speak", "Agree with everything"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ascultarea activă demonstrează respect și asigură înțelegerea corectă a mesajului.",
      de: "Aktives Zuhören zeigt Respekt und gewährleistet korrektes Verstehen der Botschaft.",
      en: "Active listening demonstrates respect and ensures correct understanding of the message."
    }
  },
  {
    question: {
      ro: "Cum îți exprimi dezacordul într-un mod profesional?",
      de: "Wie drücken Sie Ihre Meinungsverschiedenheit professionell aus?",
      en: "How do you express your disagreement professionally?"
    },
    options: {
      ro: ["Taci și suporți", "Prezinți argumente obiective, respectând perspectiva celuilalt", "Ridici tonul", "Critici persoana"],
      de: ["Schweigen und ertragen", "Objektive Argumente präsentieren unter Respekt der anderen Perspektive", "Lauter werden", "Die Person kritisieren"],
      en: ["Stay quiet and endure", "Present objective arguments while respecting the other's perspective", "Raise your voice", "Criticize the person"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dezacordul constructiv se exprimă prin fapte și argumente, nu prin atacuri personale.",
      de: "Konstruktive Meinungsverschiedenheit wird durch Fakten und Argumente ausgedrückt, nicht durch persönliche Angriffe.",
      en: "Constructive disagreement is expressed through facts and arguments, not personal attacks."
    }
  },
  {
    question: {
      ro: "Ce este persuasiunea etică?",
      de: "Was ist ethische Überzeugung?",
      en: "What is ethical persuasion?"
    },
    options: {
      ro: ["Manipulare", "Convingerea prin argumente logice și beneficii reale", "Presiune emoțională", "Intimidare"],
      de: ["Manipulation", "Überzeugen durch logische Argumente und echte Vorteile", "Emotionaler Druck", "Einschüchterung"],
      en: ["Manipulation", "Convincing through logical arguments and real benefits", "Emotional pressure", "Intimidation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Persuasiunea etică se bazează pe fapte, beneficii reale și respect pentru decizia celuilalt.",
      de: "Ethische Überzeugung basiert auf Fakten, echten Vorteilen und Respekt für die Entscheidung des anderen.",
      en: "Ethical persuasion is based on facts, real benefits and respect for the other's decision."
    }
  },
  {
    question: {
      ro: "Cum gestionezi critica constructivă primită?",
      de: "Wie gehen Sie mit konstruktiver Kritik um?",
      en: "How do you handle constructive criticism received?"
    },
    options: {
      ro: ["Mă apăr imediat", "Ascult, analizez obiectiv și extrag lecțiile utile", "Mă supăr", "O ignor"],
      de: ["Sofort verteidigen", "Zuhören, objektiv analysieren und nützliche Lektionen ziehen", "Sich ärgern", "Ignorieren"],
      en: ["Defend immediately", "Listen, analyze objectively and extract useful lessons", "Get upset", "Ignore it"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Critica constructivă este o oportunitate de creștere când e primită cu deschidere.",
      de: "Konstruktive Kritik ist eine Wachstumschance wenn sie mit Offenheit angenommen wird.",
      en: "Constructive criticism is a growth opportunity when received with openness."
    }
  },
  {
    question: {
      ro: "Ce înseamnă flexibilitate în comunicare?",
      de: "Was bedeutet Flexibilität in der Kommunikation?",
      en: "What does flexibility in communication mean?"
    },
    options: {
      ro: ["Să schimbi părerea constant", "Să adaptezi stilul și mesajul la interlocutor și context", "Să fii vag", "Să eviți angajamentele"],
      de: ["Ständig Meinung ändern", "Stil und Botschaft an Gesprächspartner und Kontext anpassen", "Vage sein", "Verpflichtungen vermeiden"],
      en: ["Change opinion constantly", "Adapt style and message to interlocutor and context", "Be vague", "Avoid commitments"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Flexibilitatea comunicațională înseamnă adaptare eficientă, nu inconsistență.",
      de: "Kommunikative Flexibilität bedeutet effektive Anpassung, nicht Inkonsistenz.",
      en: "Communication flexibility means effective adaptation, not inconsistency."
    }
  },
  {
    question: {
      ro: "Cum construiești credibilitatea profesională?",
      de: "Wie bauen Sie berufliche Glaubwürdigkeit auf?",
      en: "How do you build professional credibility?"
    },
    options: {
      ro: ["Prin promisiuni mari", "Prin consistență, competență și onorarea angajamentelor", "Prin autopromovare", "Prin relații personale"],
      de: ["Durch große Versprechen", "Durch Konsistenz, Kompetenz und Einhalten von Verpflichtungen", "Durch Selbstpromotion", "Durch persönliche Beziehungen"],
      en: ["Through big promises", "Through consistency, competence and honoring commitments", "Through self-promotion", "Through personal relationships"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Credibilitatea se construiește în timp prin fapte, nu prin vorbe.",
      de: "Glaubwürdigkeit wird über Zeit durch Taten aufgebaut, nicht durch Worte.",
      en: "Credibility is built over time through actions, not words."
    }
  },
  {
    question: {
      ro: "Ce rol are limbajul nonverbal în comunicare?",
      de: "Welche Rolle spielt nonverbale Sprache in der Kommunikation?",
      en: "What role does nonverbal language play in communication?"
    },
    options: {
      ro: ["Niciun rol", "Major - transmite emoții și credibilitate", "Minor", "Doar în prezentări"],
      de: ["Keine Rolle", "Große Rolle - vermittelt Emotionen und Glaubwürdigkeit", "Geringe Rolle", "Nur bei Präsentationen"],
      en: ["No role", "Major role - conveys emotions and credibility", "Minor role", "Only in presentations"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Limbajul nonverbal poate transmite mai mult decât cuvintele și influențează percepția mesajului.",
      de: "Nonverbale Sprache kann mehr vermitteln als Worte und beeinflusst die Wahrnehmung der Botschaft.",
      en: "Nonverbal language can convey more than words and influences message perception."
    }
  },
  {
    question: {
      ro: "Cum gestionezi o conversație dificilă?",
      de: "Wie führen Sie ein schwieriges Gespräch?",
      en: "How do you manage a difficult conversation?"
    },
    options: {
      ro: ["O evit", "Mă pregătesc, ascult activ și mențin calmul", "O amân indefinit", "O expediez rapid"],
      de: ["Vermeiden", "Sich vorbereiten, aktiv zuhören und Ruhe bewahren", "Unbegrenzt aufschieben", "Schnell abhandeln"],
      en: ["Avoid it", "Prepare, listen actively and stay calm", "Postpone indefinitely", "Rush through it"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Conversațiile dificile necesită pregătire, răbdare și focusare pe soluții.",
      de: "Schwierige Gespräche erfordern Vorbereitung, Geduld und Fokus auf Lösungen.",
      en: "Difficult conversations require preparation, patience and focus on solutions."
    }
  },
  {
    question: {
      ro: "Ce este gândirea critică?",
      de: "Was ist kritisches Denken?",
      en: "What is critical thinking?"
    },
    options: {
      ro: ["A critica pe alții", "A analiza obiectiv informațiile și a trage concluzii fundamentate", "A fi negativ", "A pune la îndoială totul"],
      de: ["Andere kritisieren", "Informationen objektiv analysieren und fundierte Schlussfolgerungen ziehen", "Negativ sein", "Alles in Frage stellen"],
      en: ["Criticizing others", "Objectively analyze information and draw substantiated conclusions", "Being negative", "Question everything"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Gândirea critică presupune evaluarea obiectivă a dovezilor pentru decizii informate.",
      de: "Kritisches Denken beinhaltet die objektive Bewertung von Beweisen für informierte Entscheidungen.",
      en: "Critical thinking involves objective evaluation of evidence for informed decisions."
    }
  },
  {
    question: {
      ro: "Cum dai feedback constructiv?",
      de: "Wie geben Sie konstruktives Feedback?",
      en: "How do you give constructive feedback?"
    },
    options: {
      ro: ["Critici direct", "Specific, bazat pe fapte, cu sugestii de îmbunătățire", "Vag și general", "Doar pozitiv"],
      de: ["Direkt kritisieren", "Spezifisch, faktenbasiert, mit Verbesserungsvorschlägen", "Vage und allgemein", "Nur positiv"],
      en: ["Criticize directly", "Specific, fact-based, with improvement suggestions", "Vague and general", "Only positive"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Feedback-ul util este specific, obiectiv și orientat spre acțiuni de îmbunătățire.",
      de: "Nützliches Feedback ist spezifisch, objektiv und auf Verbesserungsmaßnahmen ausgerichtet.",
      en: "Useful feedback is specific, objective and oriented towards improvement actions."
    }
  },
  {
    question: {
      ro: "Ce înseamnă reziliență profesională?",
      de: "Was bedeutet berufliche Resilienz?",
      en: "What does professional resilience mean?"
    },
    options: {
      ro: ["A nu simți stres", "A te recupera rapid după eșecuri și a învăța din ele", "A evita provocările", "A nu avea emoții"],
      de: ["Keinen Stress fühlen", "Sich schnell von Misserfolgen erholen und aus ihnen lernen", "Herausforderungen vermeiden", "Keine Emotionen haben"],
      en: ["Not feeling stress", "Recover quickly from failures and learn from them", "Avoid challenges", "Have no emotions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reziliența înseamnă capacitatea de a face față adversității și de a ieși mai puternic.",
      de: "Resilienz bedeutet die Fähigkeit, mit Widrigkeiten umzugehen und gestärkt hervorzugehen.",
      en: "Resilience means the ability to cope with adversity and emerge stronger."
    }
  },
  {
    question: {
      ro: "Cum creezi un mediu de colaborare?",
      de: "Wie schaffen Sie eine kollaborative Umgebung?",
      en: "How do you create a collaborative environment?"
    },
    options: {
      ro: ["Competiție internă", "Încredere, comunicare deschisă și recunoașterea contribuțiilor", "Lucru individual", "Ierarhie strictă"],
      de: ["Interne Konkurrenz", "Vertrauen, offene Kommunikation und Anerkennung von Beiträgen", "Einzelarbeit", "Strenge Hierarchie"],
      en: ["Internal competition", "Trust, open communication and recognition of contributions", "Individual work", "Strict hierarchy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Colaborarea prosperă în medii bazate pe încredere și aprecierea efortului colectiv.",
      de: "Zusammenarbeit gedeiht in Umgebungen basierend auf Vertrauen und Wertschätzung kollektiver Anstrengungen.",
      en: "Collaboration thrives in environments based on trust and appreciation of collective effort."
    }
  },
  {
    question: {
      ro: "Ce este managementul relațiilor profesionale?",
      de: "Was ist Management beruflicher Beziehungen?",
      en: "What is professional relationship management?"
    },
    options: {
      ro: ["A avea multe contacte", "A dezvolta și menține relații reciproc benefice", "A socializa mult", "A cere favoruri"],
      de: ["Viele Kontakte haben", "Gegenseitig vorteilhafte Beziehungen entwickeln und pflegen", "Viel sozialisieren", "Gefälligkeiten bitten"],
      en: ["Having many contacts", "Developing and maintaining mutually beneficial relationships", "Socializing a lot", "Asking for favors"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Networking profesional înseamnă relații autentice bazate pe valoare reciprocă.",
      de: "Professionelles Networking bedeutet authentische Beziehungen basierend auf gegenseitigem Wert.",
      en: "Professional networking means authentic relationships based on mutual value."
    }
  },
  {
    question: {
      ro: "Cum gestionezi presiunea timpului?",
      de: "Wie gehen Sie mit Zeitdruck um?",
      en: "How do you manage time pressure?"
    },
    options: {
      ro: ["Panichez", "Prioritizez, mă concentrez pe esențial și comunic realist", "Fac totul rapid", "Amân totul"],
      de: ["Panik", "Priorisieren, auf das Wesentliche konzentrieren und realistisch kommunizieren", "Alles schnell machen", "Alles aufschieben"],
      en: ["Panic", "Prioritize, focus on essentials and communicate realistically", "Do everything quickly", "Postpone everything"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sub presiune, eficiența vine din focusare și comunicare transparentă a constrângerilor.",
      de: "Unter Druck kommt Effizienz durch Fokus und transparente Kommunikation von Einschränkungen.",
      en: "Under pressure, efficiency comes from focus and transparent communication of constraints."
    }
  },
  {
    question: {
      ro: "Ce înseamnă diplomație în comunicare?",
      de: "Was bedeutet Diplomatie in der Kommunikation?",
      en: "What does diplomacy in communication mean?"
    },
    options: {
      ro: ["A minți politicos", "A transmite mesaje dificile într-un mod respectuos și constructiv", "A evita adevărul", "A fi vag"],
      de: ["Höflich lügen", "Schwierige Botschaften respektvoll und konstruktiv vermitteln", "Wahrheit vermeiden", "Vage sein"],
      en: ["Lie politely", "Convey difficult messages in a respectful and constructive way", "Avoid truth", "Be vague"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diplomația combină onestitatea cu tactul pentru a menține relații productive.",
      de: "Diplomatie kombiniert Ehrlichkeit mit Takt, um produktive Beziehungen aufrechtzuerhalten.",
      en: "Diplomacy combines honesty with tact to maintain productive relationships."
    }
  },
  {
    question: {
      ro: "Cum îți îmbunătățești abilitățile de prezentare?",
      de: "Wie verbessern Sie Ihre Präsentationsfähigkeiten?",
      en: "How do you improve your presentation skills?"
    },
    options: {
      ro: ["Nu e necesar", "Practică regulată, feedback și studiul tehnicilor", "Talent înnăscut", "Evit prezentările"],
      de: ["Nicht nötig", "Regelmäßige Praxis, Feedback und Studium der Techniken", "Angeborenes Talent", "Präsentationen vermeiden"],
      en: ["Not necessary", "Regular practice, feedback and studying techniques", "Innate talent", "Avoid presentations"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prezentarea eficientă se dezvoltă prin practică deliberată și învățare din feedback.",
      de: "Effektive Präsentation wird durch bewusste Praxis und Lernen aus Feedback entwickelt.",
      en: "Effective presentation is developed through deliberate practice and learning from feedback."
    }
  },
  {
    question: {
      ro: "Ce este inteligența culturală?",
      de: "Was ist kulturelle Intelligenz?",
      en: "What is cultural intelligence?"
    },
    options: {
      ro: ["Cunoașterea mai multor limbi", "Capacitatea de a lucra eficient în contexte culturale diverse", "Cunoștințe de geografie", "Călătorit mult"],
      de: ["Mehrere Sprachen kennen", "Fähigkeit in diversen kulturellen Kontexten effektiv zu arbeiten", "Geografiekenntnisse", "Viel gereist"],
      en: ["Knowing multiple languages", "Ability to work effectively in diverse cultural contexts", "Geography knowledge", "Traveled a lot"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CQ presupune adaptare, respect și înțelegerea normelor culturale diferite.",
      de: "CQ beinhaltet Anpassung, Respekt und Verständnis verschiedener kultureller Normen.",
      en: "CQ involves adaptation, respect and understanding of different cultural norms."
    }
  },
  {
    question: {
      ro: "Cum abordezi o persoană cu stil de comunicare opus?",
      de: "Wie gehen Sie mit einer Person mit entgegengesetztem Kommunikationsstil um?",
      en: "How do you approach a person with opposite communication style?"
    },
    options: {
      ro: ["Evit interacțiunea", "Îmi adaptez stilul pentru a găsi un teren comun", "Îmi impun stilul", "Mă frustreaz"],
      de: ["Interaktion vermeiden", "Stil anpassen um gemeinsame Basis zu finden", "Eigenen Stil durchsetzen", "Frustriert werden"],
      en: ["Avoid interaction", "Adapt my style to find common ground", "Impose my style", "Get frustrated"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicatorii eficienți se adaptează la stilul interlocutorului pentru conexiune mai bună.",
      de: "Effektive Kommunikatoren passen sich dem Stil des Gesprächspartners für bessere Verbindung an.",
      en: "Effective communicators adapt to the interlocutor's style for better connection."
    }
  },
  {
    question: {
      ro: "Ce rol are umorul în mediul profesional?",
      de: "Welche Rolle spielt Humor im beruflichen Umfeld?",
      en: "What role does humor play in the professional environment?"
    },
    options: {
      ro: ["Niciun rol", "Dozat adecvat, reduce tensiunea și creează conexiune", "Trebuie evitat total", "Doar între prieteni"],
      de: ["Keine Rolle", "Angemessen dosiert, reduziert Spannung und schafft Verbindung", "Muss völlig vermieden werden", "Nur unter Freunden"],
      en: ["No role", "Appropriately dosed, reduces tension and creates connection", "Must be totally avoided", "Only among friends"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Umorul adecvat poate îmbunătăți atmosfera și relațiile, dar trebuie folosit cu discernământ.",
      de: "Angemessener Humor kann Atmosphäre und Beziehungen verbessern, muss aber mit Bedacht eingesetzt werden.",
      en: "Appropriate humor can improve atmosphere and relationships, but must be used with discretion."
    }
  },
  {
    question: {
      ro: "Cum gestionezi așteptările nerealiste ale altora?",
      de: "Wie gehen Sie mit unrealistischen Erwartungen anderer um?",
      en: "How do you manage unrealistic expectations of others?"
    },
    options: {
      ro: ["Le accept pentru a evita conflictul", "Comunic clar limitele și propun alternative realiste", "Le ignor", "Le refuz categoric"],
      de: ["Akzeptieren um Konflikt zu vermeiden", "Grenzen klar kommunizieren und realistische Alternativen vorschlagen", "Ignorieren", "Kategorisch ablehnen"],
      en: ["Accept to avoid conflict", "Clearly communicate limits and propose realistic alternatives", "Ignore them", "Refuse categorically"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Gestionarea așteptărilor presupune comunicare transparentă și oferirea de soluții viabile.",
      de: "Erwartungsmanagement erfordert transparente Kommunikation und Angebot tragfähiger Lösungen.",
      en: "Expectation management requires transparent communication and offering viable solutions."
    }
  },
  {
    question: {
      ro: "Ce este auto-reflecția profesională?",
      de: "Was ist berufliche Selbstreflexion?",
      en: "What is professional self-reflection?"
    },
    options: {
      ro: ["Autocritică negativă", "Analiza obiectivă a acțiunilor pentru îmbunătățire continuă", "Ignorarea greșelilor", "Comparație cu alții"],
      de: ["Negative Selbstkritik", "Objektive Analyse der Handlungen für kontinuierliche Verbesserung", "Fehler ignorieren", "Vergleich mit anderen"],
      en: ["Negative self-criticism", "Objective analysis of actions for continuous improvement", "Ignoring mistakes", "Comparison with others"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Auto-reflecția constructivă duce la înțelegere și dezvoltare, nu la autocritică distructivă.",
      de: "Konstruktive Selbstreflexion führt zu Verständnis und Entwicklung, nicht zu destruktiver Selbstkritik.",
      en: "Constructive self-reflection leads to understanding and development, not destructive self-criticism."
    }
  },
  {
    question: {
      ro: "Cum influențezi pozitiv echipa?",
      de: "Wie beeinflussen Sie das Team positiv?",
      en: "How do you positively influence the team?"
    },
    options: {
      ro: ["Prin autoritate", "Prin exemplu personal, atitudine pozitivă și suport", "Prin critică", "Prin competiție"],
      de: ["Durch Autorität", "Durch persönliches Beispiel, positive Einstellung und Unterstützung", "Durch Kritik", "Durch Wettbewerb"],
      en: ["Through authority", "Through personal example, positive attitude and support", "Through criticism", "Through competition"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Influența pozitivă vine din comportament exemplar și contribuție activă la succesul echipei.",
      de: "Positiver Einfluss kommt von vorbildlichem Verhalten und aktivem Beitrag zum Teamerfolg.",
      en: "Positive influence comes from exemplary behavior and active contribution to team success."
    }
  },
  {
    question: {
      ro: "Ce înseamnă proactivitate în comunicare?",
      de: "Was bedeutet Proaktivität in der Kommunikation?",
      en: "What does proactivity in communication mean?"
    },
    options: {
      ro: ["Să vorbești mult", "Să inițiezi conversații și să oferi informații înainte de a fi cerute", "Să răspunzi rapid", "Să întrerupi des"],
      de: ["Viel reden", "Gespräche initiieren und Informationen anbieten bevor sie angefordert werden", "Schnell antworten", "Oft unterbrechen"],
      en: ["Talk a lot", "Initiate conversations and offer information before being asked", "Reply quickly", "Interrupt often"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea proactivă anticipează nevoile și oferă informații relevante la momentul potrivit.",
      de: "Proaktive Kommunikation antizipiert Bedürfnisse und bietet relevante Informationen zum richtigen Zeitpunkt.",
      en: "Proactive communication anticipates needs and offers relevant information at the right time."
    }
  },
  {
    question: {
      ro: "Cum menții relații profesionale la distanță?",
      de: "Wie pflegen Sie berufliche Beziehungen auf Distanz?",
      en: "How do you maintain professional relationships remotely?"
    },
    options: {
      ro: ["Doar email-uri formale", "Comunicare regulată, personalizată și prin multiple canale", "Doar când am nevoie", "Nu e posibil"],
      de: ["Nur formelle E-Mails", "Regelmäßige, personalisierte Kommunikation über mehrere Kanäle", "Nur wenn nötig", "Nicht möglich"],
      en: ["Only formal emails", "Regular, personalized communication through multiple channels", "Only when needed", "Not possible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Relațiile la distanță necesită efort deliberat și comunicare consistentă pe diverse canale.",
      de: "Fernbeziehungen erfordern bewusste Anstrengung und konsistente Kommunikation über verschiedene Kanäle.",
      en: "Remote relationships require deliberate effort and consistent communication across various channels."
    }
  }
];
