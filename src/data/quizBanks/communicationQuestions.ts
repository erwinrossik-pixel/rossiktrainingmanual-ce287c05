import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const communicationQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Care este principiul de bază al comunicării profesionale?",
      de: "Was ist das Grundprinzip der professionellen Kommunikation?",
      en: "What is the basic principle of professional communication?"
    },
    options: {
      ro: ["Să vorbești mult", "Claritate, concizie și orientare spre soluții", "Să folosești jargon tehnic", "Să răspunzi când ai timp"],
      de: ["Viel reden", "Klarheit, Prägnanz und Lösungsorientierung", "Technischen Jargon verwenden", "Antworten wenn Zeit ist"],
      en: ["Talk a lot", "Clarity, conciseness and solution orientation", "Use technical jargon", "Reply when you have time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea profesională trebuie să fie clară, concisă și orientată spre rezolvarea problemelor.",
      de: "Professionelle Kommunikation muss klar, prägnant und auf Problemlösung ausgerichtet sein.",
      en: "Professional communication must be clear, concise and oriented towards problem solving."
    }
  },
  {
    question: {
      ro: "În cât timp trebuie să răspunzi la o solicitare urgentă a clientului?",
      de: "In welcher Zeit sollten Sie auf eine dringende Kundenanfrage antworten?",
      en: "How quickly should you respond to an urgent client request?"
    },
    options: {
      ro: ["24 ore", "15-30 minute", "O săptămână", "Când ai timp"],
      de: ["24 Stunden", "15-30 Minuten", "Eine Woche", "Wenn Sie Zeit haben"],
      en: ["24 hours", "15-30 minutes", "One week", "When you have time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cererile urgente necesită răspuns rapid în 15-30 minute pentru a menține încrederea clientului.",
      de: "Dringende Anfragen erfordern eine schnelle Antwort innerhalb von 15-30 Minuten, um das Vertrauen des Kunden zu erhalten.",
      en: "Urgent requests require quick response within 15-30 minutes to maintain client trust."
    }
  },
  {
    question: {
      ro: "Ce trebuie să conțină un email profesional de confirmare a transportului?",
      de: "Was muss eine professionelle E-Mail zur Transportbestätigung enthalten?",
      en: "What must a professional transport confirmation email contain?"
    },
    options: {
      ro: ["Doar prețul", "Detalii complete: încărcare, descărcare, vehicul, preț, condiții", "Doar data", "Doar adresa"],
      de: ["Nur den Preis", "Vollständige Details: Beladung, Entladung, Fahrzeug, Preis, Bedingungen", "Nur das Datum", "Nur die Adresse"],
      en: ["Only price", "Complete details: loading, unloading, vehicle, price, conditions", "Only date", "Only address"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Confirmarea trebuie să includă toate detaliile pentru a evita neînțelegeri: date, locații, vehicul, preț și condiții.",
      de: "Die Bestätigung muss alle Details enthalten, um Missverständnisse zu vermeiden: Daten, Orte, Fahrzeug, Preis und Bedingungen.",
      en: "Confirmation must include all details to avoid misunderstandings: dates, locations, vehicle, price and conditions."
    }
  },
  {
    question: {
      ro: "Cum comunici o întârziere către client?",
      de: "Wie kommunizieren Sie eine Verspätung an den Kunden?",
      en: "How do you communicate a delay to the client?"
    },
    options: {
      ro: ["Nu comunici deloc", "Proactiv, cu motive, noua ETA și soluții propuse", "Aștepți să întrebe", "Trimiți un mesaj scurt"],
      de: ["Gar nicht kommunizieren", "Proaktiv, mit Gründen, neuer ETA und vorgeschlagenen Lösungen", "Warten bis gefragt wird", "Eine kurze Nachricht senden"],
      en: ["Don't communicate at all", "Proactively, with reasons, new ETA and proposed solutions", "Wait to be asked", "Send a short message"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Întârzierile trebuie comunicate proactiv, cu explicații, noul termen și opțiuni de soluționare.",
      de: "Verspätungen müssen proaktiv mit Erklärungen, neuem Termin und Lösungsoptionen kommuniziert werden.",
      en: "Delays must be communicated proactively, with explanations, new timeline and solution options."
    }
  },
  {
    question: {
      ro: "Ce ton trebuie să folosești în comunicarea cu un client nemulțumit?",
      de: "Welchen Ton sollten Sie in der Kommunikation mit einem unzufriedenen Kunden verwenden?",
      en: "What tone should you use when communicating with a dissatisfied client?"
    },
    options: {
      ro: ["Defensiv", "Calm, empatic și orientat spre soluții", "Agresiv", "Indiferent"],
      de: ["Defensiv", "Ruhig, empathisch und lösungsorientiert", "Aggressiv", "Gleichgültig"],
      en: ["Defensive", "Calm, empathetic and solution-oriented", "Aggressive", "Indifferent"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cu clienții nemulțumiți, menține un ton calm, arată empatie și concentrează-te pe găsirea unei soluții.",
      de: "Bei unzufriedenen Kunden bewahren Sie einen ruhigen Ton, zeigen Empathie und konzentrieren sich auf die Lösungsfindung.",
      en: "With dissatisfied clients, maintain a calm tone, show empathy and focus on finding a solution."
    }
  },
  {
    question: {
      ro: "Ce informații trebuie să conțină un status update standard?",
      de: "Welche Informationen muss ein Standard-Statusupdate enthalten?",
      en: "What information must a standard status update contain?"
    },
    options: {
      ro: ["Doar locația", "Locație curentă, status, ETA, eventuale probleme", "Doar ora", "Nimic specific"],
      de: ["Nur den Standort", "Aktueller Standort, Status, ETA, eventuelle Probleme", "Nur die Zeit", "Nichts Bestimmtes"],
      en: ["Only location", "Current location, status, ETA, any issues", "Only time", "Nothing specific"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Update-ul complet include locația, statusul încărcăturii, ora estimată de sosire și orice probleme întâmpinate.",
      de: "Das vollständige Update umfasst Standort, Ladungsstatus, geschätzte Ankunftszeit und alle aufgetretenen Probleme.",
      en: "Complete update includes location, cargo status, estimated arrival time and any issues encountered."
    }
  },
  {
    question: {
      ro: "De câte ori pe zi trebuie să comunici cu șoferul pe traseu?",
      de: "Wie oft am Tag sollten Sie mit dem Fahrer unterwegs kommunizieren?",
      en: "How many times a day should you communicate with the driver en route?"
    },
    options: {
      ro: ["O dată pe săptămână", "Minimum de 2 ori pe zi și la fiecare punct cheie", "Doar la probleme", "Niciodată"],
      de: ["Einmal pro Woche", "Mindestens 2 Mal täglich und an jedem Schlüsselpunkt", "Nur bei Problemen", "Niemals"],
      en: ["Once a week", "Minimum 2 times per day and at each key point", "Only for problems", "Never"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea regulată asigură controlul și permite reacție rapidă la situații neprevăzute.",
      de: "Regelmäßige Kommunikation gewährleistet Kontrolle und ermöglicht schnelle Reaktion auf unvorhergesehene Situationen.",
      en: "Regular communication ensures control and allows quick reaction to unforeseen situations."
    }
  },
  {
    question: {
      ro: "Cum documentezi o conversație telefonică importantă?",
      de: "Wie dokumentieren Sie ein wichtiges Telefongespräch?",
      en: "How do you document an important phone conversation?"
    },
    options: {
      ro: ["Nu documentezi", "Email de confirmare cu punctele discutate și acordurile", "Notă mentală", "Mesaj text informal"],
      de: ["Nicht dokumentieren", "Bestätigungs-E-Mail mit besprochenen Punkten und Vereinbarungen", "Mentale Notiz", "Informelle SMS"],
      en: ["Don't document", "Confirmation email with discussed points and agreements", "Mental note", "Informal text message"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Conversațiile importante trebuie confirmate în scris pentru a avea o pistă de audit și a evita neînțelegeri.",
      de: "Wichtige Gespräche müssen schriftlich bestätigt werden, um einen Audit-Trail zu haben und Missverständnisse zu vermeiden.",
      en: "Important conversations must be confirmed in writing to have an audit trail and avoid misunderstandings."
    }
  },
  {
    question: {
      ro: "Ce faci când primești informații contradictorii de la client?",
      de: "Was tun Sie, wenn Sie widersprüchliche Informationen vom Kunden erhalten?",
      en: "What do you do when you receive contradictory information from the client?"
    },
    options: {
      ro: ["Alegi varianta care îți convine", "Clarifici imediat și confirmi versiunea corectă în scris", "Ignori contradicția", "Aștepți clarificări"],
      de: ["Die passende Variante wählen", "Sofort klären und die richtige Version schriftlich bestätigen", "Den Widerspruch ignorieren", "Auf Klärung warten"],
      en: ["Choose the convenient version", "Clarify immediately and confirm correct version in writing", "Ignore the contradiction", "Wait for clarification"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contradicțiile trebuie clarificate proactiv și versiunea corectă confirmată în scris pentru a evita erori.",
      de: "Widersprüche müssen proaktiv geklärt und die richtige Version schriftlich bestätigt werden, um Fehler zu vermeiden.",
      en: "Contradictions must be proactively clarified and correct version confirmed in writing to avoid errors."
    }
  },
  {
    question: {
      ro: "Care este cea mai bună metodă de a comunica o problemă complexă?",
      de: "Was ist der beste Weg, ein komplexes Problem zu kommunizieren?",
      en: "What is the best way to communicate a complex issue?"
    },
    options: {
      ro: ["Email lung și detaliat", "Apel telefonic urmat de confirmare scrisă cu rezumat", "Mesaj text", "Așteptare până se rezolvă singur"],
      de: ["Lange und detaillierte E-Mail", "Telefonat gefolgt von schriftlicher Bestätigung mit Zusammenfassung", "SMS", "Warten bis es sich von selbst löst"],
      en: ["Long detailed email", "Phone call followed by written confirmation with summary", "Text message", "Wait until it resolves itself"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Problemele complexe se discută telefonic pentru clarificare, apoi se confirmă în scris pentru documentare.",
      de: "Komplexe Probleme werden telefonisch zur Klärung besprochen, dann schriftlich zur Dokumentation bestätigt.",
      en: "Complex issues are discussed by phone for clarification, then confirmed in writing for documentation."
    }
  },
  {
    question: {
      ro: "Ce limbaj trebuie evitat în comunicarea profesională?",
      de: "Welche Sprache sollte in der professionellen Kommunikation vermieden werden?",
      en: "What language should be avoided in professional communication?"
    },
    options: {
      ro: ["Limbaj tehnic", "Jargon excesiv, limbaj informal, expresii ambigue", "Limbaj formal", "Limbaj clar"],
      de: ["Technische Sprache", "Übermäßiger Jargon, informelle Sprache, mehrdeutige Ausdrücke", "Formelle Sprache", "Klare Sprache"],
      en: ["Technical language", "Excessive jargon, informal language, ambiguous expressions", "Formal language", "Clear language"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Evită jargonul excesiv, limbajul informal și expresiile ambigue care pot crea confuzie.",
      de: "Vermeiden Sie übermäßigen Jargon, informelle Sprache und mehrdeutige Ausdrücke, die Verwirrung stiften können.",
      en: "Avoid excessive jargon, informal language and ambiguous expressions that can create confusion."
    }
  },
  {
    question: {
      ro: "Cum răspunzi la o reclamație în scris?",
      de: "Wie antworten Sie schriftlich auf eine Beschwerde?",
      en: "How do you respond to a complaint in writing?"
    },
    options: {
      ro: ["Ignori", "Confirmi primirea, mulțumești, investighezi și propui soluție cu termen", "Respingi imediat", "Aștepți să se calmeze"],
      de: ["Ignorieren", "Empfang bestätigen, danken, untersuchen und Lösung mit Frist vorschlagen", "Sofort ablehnen", "Warten bis sich beruhigt"],
      en: ["Ignore", "Confirm receipt, thank, investigate and propose solution with deadline", "Reject immediately", "Wait until they calm down"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Răspunsul profesional la reclamații include confirmare, mulțumire, investigare și propunere de soluție.",
      de: "Die professionelle Antwort auf Beschwerden umfasst Bestätigung, Dank, Untersuchung und Lösungsvorschlag.",
      en: "Professional response to complaints includes confirmation, thanks, investigation and solution proposal."
    }
  },
  {
    question: {
      ro: "Ce canal de comunicare folosești pentru urgențe?",
      de: "Welchen Kommunikationskanal verwenden Sie für Notfälle?",
      en: "What communication channel do you use for emergencies?"
    },
    options: {
      ro: ["Email", "Telefon (apel direct)", "Poștă", "Fax"],
      de: ["E-Mail", "Telefon (direkter Anruf)", "Post", "Fax"],
      en: ["Email", "Phone (direct call)", "Mail", "Fax"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Urgențele necesită contact telefonic direct pentru reacție imediată, urmat de confirmare scrisă.",
      de: "Notfälle erfordern direkten telefonischen Kontakt für sofortige Reaktion, gefolgt von schriftlicher Bestätigung.",
      en: "Emergencies require direct phone contact for immediate reaction, followed by written confirmation."
    }
  },
  {
    question: {
      ro: "Cum comunici modificări de ultimă oră?",
      de: "Wie kommunizieren Sie kurzfristige Änderungen?",
      en: "How do you communicate last-minute changes?"
    },
    options: {
      ro: ["Trimiți un email și aștepți", "Suni imediat, explici, ceri confirmare și documentezi în scris", "Trimiți SMS", "Nu comunici"],
      de: ["E-Mail senden und warten", "Sofort anrufen, erklären, Bestätigung einholen und schriftlich dokumentieren", "SMS senden", "Nicht kommunizieren"],
      en: ["Send email and wait", "Call immediately, explain, request confirmation and document in writing", "Send SMS", "Don't communicate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Modificările urgente necesită contact telefonic imediat, confirmare și documentare scrisă.",
      de: "Dringende Änderungen erfordern sofortigen telefonischen Kontakt, Bestätigung und schriftliche Dokumentation.",
      en: "Urgent changes require immediate phone contact, confirmation and written documentation."
    }
  },
  {
    question: {
      ro: "Ce este ascultarea activă în comunicare?",
      de: "Was ist aktives Zuhören in der Kommunikation?",
      en: "What is active listening in communication?"
    },
    options: {
      ro: ["Să asculți în timp ce faci altceva", "Să te concentrezi complet, să confirmi înțelegerea și să pui întrebări", "Să întrerupi frecvent", "Să aștepți să termini de vorbit"],
      de: ["Zuhören während Sie etwas anderes tun", "Sich voll konzentrieren, Verständnis bestätigen und Fragen stellen", "Häufig unterbrechen", "Warten bis Sie fertig sind"],
      en: ["Listen while doing something else", "Focus completely, confirm understanding and ask questions", "Interrupt frequently", "Wait for them to finish"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ascultarea activă înseamnă atenție deplină, confirmare că ai înțeles și întrebări clarificatoare.",
      de: "Aktives Zuhören bedeutet volle Aufmerksamkeit, Bestätigung des Verständnisses und klärende Fragen.",
      en: "Active listening means full attention, confirming understanding and clarifying questions."
    }
  },
  {
    question: {
      ro: "Cum gestionezi o situație în care nu ai informațiile solicitate?",
      de: "Wie gehen Sie mit einer Situation um, in der Sie die angeforderten Informationen nicht haben?",
      en: "How do you handle a situation where you don't have the requested information?"
    },
    options: {
      ro: ["Inventezi un răspuns", "Recunoști, promiți termen de răspuns și revii cu informația", "Ignori cererea", "Transferi altcuiva"],
      de: ["Eine Antwort erfinden", "Anerkennen, Antwortfrist versprechen und mit der Information zurückkommen", "Die Anfrage ignorieren", "An jemand anderen weiterleiten"],
      en: ["Invent an answer", "Acknowledge, promise response deadline and come back with information", "Ignore the request", "Transfer to someone else"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Este profesional să recunoști lipsa informației, să stabilești un termen și să revii cu răspunsul.",
      de: "Es ist professionell, das Fehlen von Informationen anzuerkennen, eine Frist festzulegen und mit der Antwort zurückzukommen.",
      en: "It's professional to acknowledge lack of information, set a deadline and come back with the answer."
    }
  },
  {
    question: {
      ro: "Ce reprezintă comunicarea non-verbală în context profesional?",
      de: "Was bedeutet nonverbale Kommunikation im professionellen Kontext?",
      en: "What does non-verbal communication represent in professional context?"
    },
    options: {
      ro: ["Nu contează", "Tonul vocii, limbajul corporal, promptitudinea răspunsurilor", "Doar gesturile", "Doar expresia feței"],
      de: ["Spielt keine Rolle", "Tonfall, Körpersprache, Schnelligkeit der Antworten", "Nur Gesten", "Nur Gesichtsausdruck"],
      en: ["Doesn't matter", "Tone of voice, body language, promptness of responses", "Only gestures", "Only facial expression"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea non-verbală include tonul, limbajul corporal și promptitudinea, influențând percepția profesionalismului.",
      de: "Nonverbale Kommunikation umfasst Ton, Körpersprache und Schnelligkeit und beeinflusst die Wahrnehmung von Professionalität.",
      en: "Non-verbal communication includes tone, body language and promptness, influencing perception of professionalism."
    }
  },
  {
    question: {
      ro: "Cum comunici vești proaste către client?",
      de: "Wie übermitteln Sie schlechte Nachrichten an den Kunden?",
      en: "How do you communicate bad news to the client?"
    },
    options: {
      ro: ["Le ascunzi cât mai mult", "Direct, onest, cu context și soluții alternative", "Le minimizezi", "Le amâni până la final"],
      de: ["So lange wie möglich verbergen", "Direkt, ehrlich, mit Kontext und alternativen Lösungen", "Herunterspielen", "Bis zum Ende aufschieben"],
      en: ["Hide as long as possible", "Directly, honestly, with context and alternative solutions", "Minimize them", "Postpone until the end"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Veștile proaste se comunică direct și onest, oferind context și propunând alternative sau soluții.",
      de: "Schlechte Nachrichten werden direkt und ehrlich kommuniziert, mit Kontext und Vorschlägen für Alternativen oder Lösungen.",
      en: "Bad news is communicated directly and honestly, providing context and proposing alternatives or solutions."
    }
  },
  {
    question: {
      ro: "Ce faci când există o barieră de limbă cu un partener?",
      de: "Was tun Sie bei einer Sprachbarriere mit einem Partner?",
      en: "What do you do when there's a language barrier with a partner?"
    },
    options: {
      ro: ["Renunți la comunicare", "Folosești limbaj simplu, confirmi înțelegerea, apelezi la traducere", "Vorbești mai tare", "Trimiți doar mesaje scrise"],
      de: ["Kommunikation aufgeben", "Einfache Sprache verwenden, Verständnis bestätigen, Übersetzung nutzen", "Lauter sprechen", "Nur schriftliche Nachrichten senden"],
      en: ["Give up communication", "Use simple language, confirm understanding, use translation", "Speak louder", "Send only written messages"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cu bariere de limbă, folosești propoziții simple, confirmi înțelegerea și apelezi la instrumente de traducere.",
      de: "Bei Sprachbarrieren verwenden Sie einfache Sätze, bestätigen das Verständnis und nutzen Übersetzungswerkzeuge.",
      en: "With language barriers, use simple sentences, confirm understanding and use translation tools."
    }
  },
  {
    question: {
      ro: "Care este regula pentru a pune pe CC în email-uri?",
      de: "Was ist die Regel für CC in E-Mails?",
      en: "What is the rule for CC in emails?"
    },
    options: {
      ro: ["Adaugi pe toți", "Doar persoanele care trebuie informate, nu cele care trebuie să acționeze", "Nu pui pe nimeni", "Adaugi managerii întotdeauna"],
      de: ["Alle hinzufügen", "Nur Personen, die informiert werden müssen, nicht die, die handeln müssen", "Niemanden hinzufügen", "Immer Manager hinzufügen"],
      en: ["Add everyone", "Only people who need to be informed, not those who need to act", "Add no one", "Always add managers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CC se folosește pentru persoanele care trebuie informate; destinatarii principali sunt cei care trebuie să acționeze.",
      de: "CC wird für Personen verwendet, die informiert werden müssen; Hauptempfänger sind diejenigen, die handeln müssen.",
      en: "CC is used for people who need to be informed; main recipients are those who need to act."
    }
  },
  {
    question: {
      ro: "Cum începi un email formal către un client nou?",
      de: "Wie beginnen Sie eine formelle E-Mail an einen neuen Kunden?",
      en: "How do you start a formal email to a new client?"
    },
    options: {
      ro: ["Hei!", "Bună ziua domnule/doamnă [Nume], cu formule de politețe", "Salut!", "Direct cu problema"],
      de: ["Hey!", "Guten Tag Herr/Frau [Name], mit Höflichkeitsformeln", "Hi!", "Direkt mit dem Problem"],
      en: ["Hey!", "Good day Mr./Mrs. [Name], with courtesy formulas", "Hi!", "Directly with the problem"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Email-urile formale încep cu salutare respectuoasă și numele destinatarului, urmate de formule de politețe.",
      de: "Formelle E-Mails beginnen mit respektvoller Begrüßung und dem Namen des Empfängers, gefolgt von Höflichkeitsformeln.",
      en: "Formal emails start with respectful greeting and recipient's name, followed by courtesy formulas."
    }
  },
  {
    question: {
      ro: "Ce faci când un coleg nu răspunde la mesaje importante?",
      de: "Was tun Sie, wenn ein Kollege auf wichtige Nachrichten nicht antwortet?",
      en: "What do you do when a colleague doesn't respond to important messages?"
    },
    options: {
      ro: ["Aștepți", "Escaladezi problema, suni direct sau folosești alt canal", "Ignori", "Te plângi altora"],
      de: ["Warten", "Das Problem eskalieren, direkt anrufen oder anderen Kanal verwenden", "Ignorieren", "Sich bei anderen beschweren"],
      en: ["Wait", "Escalate the issue, call directly or use another channel", "Ignore", "Complain to others"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pentru mesaje urgente fără răspuns, folosești canale alternative sau escaladezi conform procedurilor.",
      de: "Bei dringenden Nachrichten ohne Antwort verwenden Sie alternative Kanäle oder eskalieren gemäß Verfahren.",
      en: "For urgent messages without response, use alternative channels or escalate according to procedures."
    }
  },
  {
    question: {
      ro: "Cum structurezi un email complex?",
      de: "Wie strukturieren Sie eine komplexe E-Mail?",
      en: "How do you structure a complex email?"
    },
    options: {
      ro: ["Text continuu lung", "Introducere, puncte cheie cu bullet points, concluzie și acțiune cerută", "Doar întrebări", "Fără structură"],
      de: ["Langer fortlaufender Text", "Einleitung, Schlüsselpunkte mit Aufzählungszeichen, Fazit und erforderliche Aktion", "Nur Fragen", "Keine Struktur"],
      en: ["Long continuous text", "Introduction, key points with bullet points, conclusion and required action", "Only questions", "No structure"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Email-urile complexe se structurează cu introducere, puncte cheie, concluzie și call-to-action clar.",
      de: "Komplexe E-Mails werden mit Einleitung, Schlüsselpunkten, Fazit und klarem Call-to-Action strukturiert.",
      en: "Complex emails are structured with introduction, key points, conclusion and clear call-to-action."
    }
  },
  {
    question: {
      ro: "Ce reprezintă feedback-ul constructiv?",
      de: "Was bedeutet konstruktives Feedback?",
      en: "What does constructive feedback represent?"
    },
    options: {
      ro: ["Critică negativă", "Observații specifice, orientate spre îmbunătățire, cu sugestii", "Laudă generală", "Ignorarea problemelor"],
      de: ["Negative Kritik", "Spezifische Beobachtungen, auf Verbesserung ausgerichtet, mit Vorschlägen", "Allgemeines Lob", "Ignorieren von Problemen"],
      en: ["Negative criticism", "Specific observations, improvement-oriented, with suggestions", "General praise", "Ignoring problems"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Feedback-ul constructiv este specific, orientat spre soluții și oferă sugestii concrete de îmbunătățire.",
      de: "Konstruktives Feedback ist spezifisch, lösungsorientiert und bietet konkrete Verbesserungsvorschläge.",
      en: "Constructive feedback is specific, solution-oriented and offers concrete improvement suggestions."
    }
  },
  {
    question: {
      ro: "Când folosești reply-all vs. reply?",
      de: "Wann verwenden Sie Allen antworten vs. Antworten?",
      en: "When do you use reply-all vs. reply?"
    },
    options: {
      ro: ["Întotdeauna reply-all", "Reply-all doar când toți trebuie să vadă răspunsul, altfel reply", "Întotdeauna reply", "Niciodată reply-all"],
      de: ["Immer Allen antworten", "Allen antworten nur wenn alle die Antwort sehen müssen, sonst Antworten", "Immer Antworten", "Niemals Allen antworten"],
      en: ["Always reply-all", "Reply-all only when everyone needs to see the response, otherwise reply", "Always reply", "Never reply-all"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reply-all se folosește doar când informația este relevantă pentru toți; altfel, reply simplu evită spam-ul.",
      de: "Allen antworten wird nur verwendet, wenn die Information für alle relevant ist; sonst vermeidet einfaches Antworten Spam.",
      en: "Reply-all is used only when information is relevant to everyone; otherwise, simple reply avoids spam."
    }
  },
  {
    question: {
      ro: "Ce faci dacă trimiți un email cu informații greșite?",
      de: "Was tun Sie, wenn Sie eine E-Mail mit falschen Informationen senden?",
      en: "What do you do if you send an email with wrong information?"
    },
    options: {
      ro: ["Ignori", "Trimiți imediat corecție clară, scuzându-te pentru eroare", "Aștepți să observe cineva", "Ștergi emailul"],
      de: ["Ignorieren", "Sofort klare Korrektur senden und sich für den Fehler entschuldigen", "Warten bis jemand bemerkt", "E-Mail löschen"],
      en: ["Ignore", "Immediately send clear correction, apologizing for error", "Wait for someone to notice", "Delete the email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Corectează imediat cu un nou email clar marcat ca rectificare, cu scuze pentru eroare.",
      de: "Korrigieren Sie sofort mit einer neuen, klar als Berichtigung gekennzeichneten E-Mail mit Entschuldigung für den Fehler.",
      en: "Correct immediately with a new email clearly marked as rectification, with apology for the error."
    }
  },
  {
    question: {
      ro: "Ce este eticheta telefonică profesională?",
      de: "Was ist professionelle Telefonetikette?",
      en: "What is professional phone etiquette?"
    },
    options: {
      ro: ["Să vorbești rapid", "Identificare, ton politicos, ascultare, notare, încheiere profesională", "Să întrerupi", "Să mănânci în timp ce vorbești"],
      de: ["Schnell sprechen", "Identifizierung, höflicher Ton, Zuhören, Notieren, professioneller Abschluss", "Unterbrechen", "Essen während des Gesprächs"],
      en: ["Speak fast", "Identification, polite tone, listening, note-taking, professional closing", "Interrupt", "Eat while talking"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Eticheta telefonică include identificarea clară, ton respectuos, ascultare activă și încheiere profesională.",
      de: "Telefonetikette umfasst klare Identifizierung, respektvollen Ton, aktives Zuhören und professionellen Abschluss.",
      en: "Phone etiquette includes clear identification, respectful tone, active listening and professional closing."
    }
  },
  {
    question: {
      ro: "Cum gestionezi un conflict prin email?",
      de: "Wie handhaben Sie einen Konflikt per E-Mail?",
      en: "How do you handle a conflict via email?"
    },
    options: {
      ro: ["Escaladezi imediat", "Te muți pe telefon sau meeting pentru discuție directă", "Trimiți emailuri furioase", "Ignori"],
      de: ["Sofort eskalieren", "Auf Telefon oder Meeting für direkte Diskussion wechseln", "Wütende E-Mails senden", "Ignorieren"],
      en: ["Escalate immediately", "Move to phone or meeting for direct discussion", "Send angry emails", "Ignore"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Conflictele se rezolvă mai bine prin comunicare directă (telefon/meeting) pentru a evita neînțelegeri.",
      de: "Konflikte werden besser durch direkte Kommunikation (Telefon/Meeting) gelöst, um Missverständnisse zu vermeiden.",
      en: "Conflicts are better resolved through direct communication (phone/meeting) to avoid misunderstandings."
    }
  },
  {
    question: {
      ro: "Ce este un subject line eficient în email?",
      de: "Was ist eine effektive Betreffzeile in einer E-Mail?",
      en: "What is an effective subject line in email?"
    },
    options: {
      ro: ["Cât mai lung posibil", "Scurt, specific și care indică acțiunea necesară", "Gol", "Doar 'Urgent'"],
      de: ["So lang wie möglich", "Kurz, spezifisch und die erforderliche Aktion anzeigend", "Leer", "Nur 'Dringend'"],
      en: ["As long as possible", "Short, specific and indicating the required action", "Empty", "Only 'Urgent'"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Subject-ul eficient este scurt, specifică tema și, dacă e cazul, acțiunea necesară sau urgența.",
      de: "Eine effektive Betreffzeile ist kurz, gibt das Thema an und ggf. die erforderliche Aktion oder Dringlichkeit.",
      en: "Effective subject is short, specifies the topic and, if applicable, the required action or urgency."
    }
  },
  {
    question: {
      ro: "Cum închei un email profesional?",
      de: "Wie schließen Sie eine professionelle E-Mail ab?",
      en: "How do you end a professional email?"
    },
    options: {
      ro: ["Pa!", "Cu formule de încheiere, nume complet, funcție și date de contact", "Fără încheiere", "Doar numele"],
      de: ["Tschüss!", "Mit Abschlussformeln, vollständigem Namen, Position und Kontaktdaten", "Ohne Abschluss", "Nur der Name"],
      en: ["Bye!", "With closing formulas, full name, position and contact details", "No closing", "Only name"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Email-urile profesionale se încheie cu salut formal, nume complet, funcție și informații de contact.",
      de: "Professionelle E-Mails enden mit formeller Grußformel, vollständigem Namen, Position und Kontaktinformationen.",
      en: "Professional emails end with formal closing, full name, position and contact information."
    }
  }
];

export function getRandomCommunicationQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...communicationQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
