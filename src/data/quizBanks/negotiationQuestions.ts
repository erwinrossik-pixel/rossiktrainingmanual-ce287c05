import { Language } from "@/contexts/LanguageContext";

export interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const negotiationQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Care este primul pas în pregătirea unei negocieri de transport?",
      de: "Was ist der erste Schritt bei der Vorbereitung einer Transportverhandlung?",
      en: "What is the first step in preparing for a transport negotiation?"
    },
    options: {
      ro: ["Stabilirea prețului minim acceptabil", "Cercetarea pieței și a clientului", "Pregătirea contractului", "Contactarea concurenței"],
      de: ["Festlegung des akzeptablen Mindestpreises", "Markt- und Kundenrecherche", "Vertragsvorbereitung", "Kontaktaufnahme mit der Konkurrenz"],
      en: ["Setting the minimum acceptable price", "Researching the market and client", "Preparing the contract", "Contacting competitors"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cercetarea pieței și a clientului oferă informații esențiale pentru o negociere eficientă.",
      de: "Markt- und Kundenrecherche liefert wesentliche Informationen für eine effektive Verhandlung.",
      en: "Researching the market and client provides essential information for effective negotiation."
    }
  },
  {
    question: {
      ro: "Ce reprezintă BATNA în negociere?",
      de: "Was bedeutet BATNA in Verhandlungen?",
      en: "What does BATNA represent in negotiation?"
    },
    options: {
      ro: ["Prețul de bază al transportului", "Cea mai bună alternativă la un acord negociat", "Bugetul alocat negocierii", "Bonusul pentru angajați"],
      de: ["Basistransportpreis", "Beste Alternative zu einer Verhandlungslösung", "Verhandlungsbudget", "Mitarbeiterbonus"],
      en: ["Base transport price", "Best Alternative To a Negotiated Agreement", "Budget allocated for negotiation", "Employee bonus"]
    },
    correctIndex: 1,
    explanation: {
      ro: "BATNA (Best Alternative To a Negotiated Agreement) reprezintă cea mai bună opțiune disponibilă dacă negocierea eșuează.",
      de: "BATNA (Best Alternative To a Negotiated Agreement) ist die beste verfügbare Option, wenn die Verhandlung scheitert.",
      en: "BATNA (Best Alternative To a Negotiated Agreement) represents the best available option if the negotiation fails."
    }
  },
  {
    question: {
      ro: "Care tehnică de negociere implică oferirea mai multor opțiuni clientului?",
      de: "Welche Verhandlungstechnik beinhaltet das Anbieten mehrerer Optionen für den Kunden?",
      en: "Which negotiation technique involves offering multiple options to the client?"
    },
    options: {
      ro: ["Anchoring", "Bundling", "Bracketing", "Multiple Equivalent Simultaneous Offers (MESO)"],
      de: ["Ankerung", "Bündelung", "Klammerung", "Multiple Equivalent Simultaneous Offers (MESO)"],
      en: ["Anchoring", "Bundling", "Bracketing", "Multiple Equivalent Simultaneous Offers (MESO)"]
    },
    correctIndex: 3,
    explanation: {
      ro: "MESO implică prezentarea mai multor oferte echivalente simultan, permițând clientului să aleagă.",
      de: "MESO beinhaltet die gleichzeitige Präsentation mehrerer gleichwertiger Angebote, damit der Kunde wählen kann.",
      en: "MESO involves presenting multiple equivalent offers simultaneously, allowing the client to choose."
    }
  },
  {
    question: {
      ro: "Ce este 'anchoring' în negociere?",
      de: "Was ist 'Anchoring' in Verhandlungen?",
      en: "What is 'anchoring' in negotiation?"
    },
    options: {
      ro: ["Legarea contractelor pe termen lung", "Stabilirea primei oferte pentru a influența negocierea", "Fixarea rutelor de transport", "Asigurarea mărfii"],
      de: ["Bindung langfristiger Verträge", "Festlegen des ersten Angebots zur Beeinflussung der Verhandlung", "Fixierung von Transportrouten", "Versicherung der Fracht"],
      en: ["Binding long-term contracts", "Setting the first offer to influence the negotiation", "Fixing transport routes", "Insuring the cargo"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Anchoring presupune stabilirea primei oferte care servește ca punct de referință pentru întreaga negociere.",
      de: "Anchoring bedeutet, das erste Angebot festzulegen, das als Bezugspunkt für die gesamte Verhandlung dient.",
      en: "Anchoring involves setting the first offer which serves as a reference point for the entire negotiation."
    }
  },
  {
    question: {
      ro: "Care este regula de aur în negocierea prețurilor de transport?",
      de: "Was ist die goldene Regel bei der Verhandlung von Transportpreisen?",
      en: "What is the golden rule in negotiating transport prices?"
    },
    options: {
      ro: ["Niciodată nu accepta prima ofertă", "Întotdeauna acceptă prima ofertă", "Negociază doar prin email", "Evită contactul direct"],
      de: ["Akzeptiere niemals das erste Angebot", "Akzeptiere immer das erste Angebot", "Verhandle nur per E-Mail", "Vermeide direkten Kontakt"],
      en: ["Never accept the first offer", "Always accept the first offer", "Negotiate only via email", "Avoid direct contact"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Prima ofertă este de obicei un punct de plecare, nu poziția finală a celeilalte părți.",
      de: "Das erste Angebot ist normalerweise ein Ausgangspunkt, nicht die endgültige Position der anderen Partei.",
      en: "The first offer is usually a starting point, not the other party's final position."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'win-win' în negociere?",
      de: "Was bedeutet 'Win-Win' in Verhandlungen?",
      en: "What does 'win-win' mean in negotiation?"
    },
    options: {
      ro: ["Câștigătorul ia totul", "Ambele părți obțin beneficii", "Negocierea rapidă", "Evitarea conflictelor"],
      de: ["Der Gewinner bekommt alles", "Beide Parteien profitieren", "Schnelle Verhandlung", "Konfliktvermeidung"],
      en: ["Winner takes all", "Both parties gain benefits", "Quick negotiation", "Conflict avoidance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "O negociere win-win rezultă în beneficii pentru ambele părți, creând relații de afaceri durabile.",
      de: "Eine Win-Win-Verhandlung führt zu Vorteilen für beide Parteien und schafft dauerhafte Geschäftsbeziehungen.",
      en: "A win-win negotiation results in benefits for both parties, creating lasting business relationships."
    }
  },
  {
    question: {
      ro: "Care este cel mai bun moment pentru a negocia tarifele de transport?",
      de: "Wann ist der beste Zeitpunkt, um Transporttarife zu verhandeln?",
      en: "When is the best time to negotiate transport rates?"
    },
    options: {
      ro: ["În sezonul de vârf", "În perioada de extrasezon", "În weekend", "La sfârșitul anului fiscal"],
      de: ["In der Hochsaison", "In der Nebensaison", "Am Wochenende", "Am Ende des Geschäftsjahres"],
      en: ["During peak season", "During off-peak season", "On weekends", "At the end of fiscal year"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În perioada de extrasezon, transportatorii au mai multă capacitate disponibilă și sunt mai deschiși la negocieri.",
      de: "In der Nebensaison haben Spediteure mehr verfügbare Kapazitäten und sind offener für Verhandlungen.",
      en: "During off-peak season, carriers have more available capacity and are more open to negotiations."
    }
  },
  {
    question: {
      ro: "Ce este 'zona de acord posibil' (ZOPA)?",
      de: "Was ist die 'Zone möglicher Vereinbarung' (ZOPA)?",
      en: "What is the 'Zone of Possible Agreement' (ZOPA)?"
    },
    options: {
      ro: ["Zona geografică de livrare", "Intervalul în care ambele părți pot ajunge la un acord", "Zona de parcare pentru camioane", "Aria de depozitare"],
      de: ["Geografisches Liefergebiet", "Der Bereich, in dem beide Parteien eine Einigung erzielen können", "LKW-Parkzone", "Lagerbereich"],
      en: ["Geographical delivery zone", "The range where both parties can reach an agreement", "Truck parking zone", "Storage area"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ZOPA reprezintă intervalul de negociere în care atât cumpărătorul cât și vânzătorul pot găsi termeni acceptabili.",
      de: "ZOPA ist der Verhandlungsbereich, in dem sowohl Käufer als auch Verkäufer akzeptable Bedingungen finden können.",
      en: "ZOPA represents the negotiation range where both buyer and seller can find acceptable terms."
    }
  },
  {
    question: {
      ro: "Care tactică este recomandată când clientul cere reduceri semnificative?",
      de: "Welche Taktik wird empfohlen, wenn der Kunde erhebliche Rabatte verlangt?",
      en: "Which tactic is recommended when the client asks for significant discounts?"
    },
    options: {
      ro: ["Acceptarea imediată", "Cererea de concesii în schimb", "Refuzul total", "Amânarea răspunsului indefinit"],
      de: ["Sofortige Annahme", "Gegenleistungen verlangen", "Totale Ablehnung", "Unbegrenzte Verzögerung der Antwort"],
      en: ["Immediate acceptance", "Asking for concessions in return", "Total refusal", "Indefinitely delaying the response"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Când oferi o reducere, solicită întotdeauna ceva în schimb pentru a menține echilibrul negocierii.",
      de: "Wenn Sie einen Rabatt gewähren, fordern Sie immer etwas im Gegenzug, um das Verhandlungsgleichgewicht zu wahren.",
      en: "When offering a discount, always ask for something in return to maintain the negotiation balance."
    }
  },
  {
    question: {
      ro: "Ce trebuie evitat în negocierile de transport?",
      de: "Was sollte bei Transportverhandlungen vermieden werden?",
      en: "What should be avoided in transport negotiations?"
    },
    options: {
      ro: ["Ascultarea activă", "Atacurile personale și criticile", "Documentarea acordurilor", "Clarificarea termenilor"],
      de: ["Aktives Zuhören", "Persönliche Angriffe und Kritik", "Dokumentation der Vereinbarungen", "Klärung der Bedingungen"],
      en: ["Active listening", "Personal attacks and criticism", "Documenting agreements", "Clarifying terms"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Atacurile personale distrug relațiile și fac imposibilă ajungerea la un acord benefic.",
      de: "Persönliche Angriffe zerstören Beziehungen und machen es unmöglich, eine vorteilhafte Einigung zu erzielen.",
      en: "Personal attacks destroy relationships and make it impossible to reach a beneficial agreement."
    }
  },
  {
    question: {
      ro: "Care este avantajul negocierii față în față comparativ cu cea prin email?",
      de: "Was ist der Vorteil von persönlichen Verhandlungen im Vergleich zu E-Mail?",
      en: "What is the advantage of face-to-face negotiation compared to email?"
    },
    options: {
      ro: ["Este mai rapidă", "Permite citirea limbajului corporal", "Este mai ieftină", "Nu necesită pregătire"],
      de: ["Es ist schneller", "Ermöglicht das Lesen der Körpersprache", "Es ist billiger", "Erfordert keine Vorbereitung"],
      en: ["It's faster", "Allows reading body language", "It's cheaper", "Doesn't require preparation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Negocierea față în față permite observarea limbajului corporal, oferind informații valoroase despre poziția reală a interlocutorului.",
      de: "Persönliche Verhandlungen ermöglichen die Beobachtung der Körpersprache und liefern wertvolle Informationen über die tatsächliche Position des Gesprächspartners.",
      en: "Face-to-face negotiation allows observing body language, providing valuable information about the counterpart's real position."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'nibbling' în negociere?",
      de: "Was bedeutet 'Nibbling' in Verhandlungen?",
      en: "What does 'nibbling' mean in negotiation?"
    },
    options: {
      ro: ["Negocierea în echipă", "Solicitarea de mici concesii după acordul principal", "Refuzul oricărei oferte", "Negocierea rapidă"],
      de: ["Teamverhandlung", "Kleine Zugeständnisse nach der Hauptvereinbarung fordern", "Jedes Angebot ablehnen", "Schnelle Verhandlung"],
      en: ["Team negotiation", "Asking for small concessions after the main agreement", "Refusing any offer", "Quick negotiation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Nibbling implică solicitarea de mici avantaje suplimentare după ce acordul principal a fost stabilit.",
      de: "Nibbling bedeutet, kleine zusätzliche Vorteile zu fordern, nachdem die Hauptvereinbarung getroffen wurde.",
      en: "Nibbling involves asking for small additional advantages after the main agreement has been reached."
    }
  },
  {
    question: {
      ro: "Care este rolul 'deadline-ului' în negociere?",
      de: "Welche Rolle spielt die 'Deadline' in Verhandlungen?",
      en: "What is the role of 'deadline' in negotiation?"
    },
    options: {
      ro: ["Nu are niciun efect", "Creează presiune pentru a ajunge la un acord", "Întotdeauna trebuie ignorat", "Reduce calitatea acordului"],
      de: ["Hat keine Wirkung", "Erzeugt Druck, eine Einigung zu erzielen", "Sollte immer ignoriert werden", "Reduziert die Qualität der Vereinbarung"],
      en: ["Has no effect", "Creates pressure to reach an agreement", "Should always be ignored", "Reduces the quality of agreement"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Deadline-urile creează urgență și pot accelera procesul decizional al ambelor părți.",
      de: "Deadlines schaffen Dringlichkeit und können den Entscheidungsprozess beider Parteien beschleunigen.",
      en: "Deadlines create urgency and can accelerate the decision-making process of both parties."
    }
  },
  {
    question: {
      ro: "Ce strategie este eficientă pentru clienții cu volume mari?",
      de: "Welche Strategie ist für Kunden mit hohem Volumen effektiv?",
      en: "What strategy is effective for high-volume clients?"
    },
    options: {
      ro: ["Prețuri fixe fără negociere", "Discount pe volum progresiv", "Refuzul contractelor pe termen lung", "Facturare zilnică"],
      de: ["Feste Preise ohne Verhandlung", "Progressiver Mengenrabatt", "Ablehnung langfristiger Verträge", "Tägliche Rechnungsstellung"],
      en: ["Fixed prices without negotiation", "Progressive volume discount", "Refusing long-term contracts", "Daily invoicing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Discounturile progresive pe volum încurajează clienții să crească volumele și asigură loialitatea.",
      de: "Progressive Mengenrabatte ermutigen Kunden, das Volumen zu erhöhen und sichern die Kundenbindung.",
      en: "Progressive volume discounts encourage clients to increase volumes and ensure loyalty."
    }
  },
  {
    question: {
      ro: "Ce reprezintă 'silence' (tăcerea) în negociere?",
      de: "Was bedeutet 'Schweigen' in Verhandlungen?",
      en: "What does 'silence' represent in negotiation?"
    },
    options: {
      ro: ["Dezacord total", "O tactică puternică de negociere", "Încetarea negocierii", "Lipsă de interes"],
      de: ["Totale Meinungsverschiedenheit", "Eine starke Verhandlungstaktik", "Beendigung der Verhandlung", "Mangel an Interesse"],
      en: ["Total disagreement", "A powerful negotiation tactic", "End of negotiation", "Lack of interest"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tăcerea strategică poate pune presiune pe cealaltă parte să facă concesii sau să ofere informații suplimentare.",
      de: "Strategisches Schweigen kann die andere Partei unter Druck setzen, Zugeständnisse zu machen oder zusätzliche Informationen zu liefern.",
      en: "Strategic silence can pressure the other party to make concessions or provide additional information."
    }
  },
  {
    question: {
      ro: "Cum trebuie abordată o negociere cu un client nemulțumit?",
      de: "Wie sollte eine Verhandlung mit einem unzufriedenen Kunden angegangen werden?",
      en: "How should a negotiation with an unhappy client be approached?"
    },
    options: {
      ro: ["Ignorarea plângerilor", "Ascultarea activă și empatia", "Oferirea imediată de reduceri", "Transferul către alt departament"],
      de: ["Ignorieren der Beschwerden", "Aktives Zuhören und Empathie", "Sofortige Rabattgewährung", "Übertragung an eine andere Abteilung"],
      en: ["Ignoring complaints", "Active listening and empathy", "Immediately offering discounts", "Transferring to another department"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ascultarea activă și empatia ajută la înțelegerea problemelor reale și la găsirea soluțiilor potrivite.",
      de: "Aktives Zuhören und Empathie helfen, die tatsächlichen Probleme zu verstehen und geeignete Lösungen zu finden.",
      en: "Active listening and empathy help understand the real issues and find appropriate solutions."
    }
  },
  {
    question: {
      ro: "Ce este 'logrolling' în negociere?",
      de: "Was ist 'Logrolling' in Verhandlungen?",
      en: "What is 'logrolling' in negotiation?"
    },
    options: {
      ro: ["Transportul de bușteni", "Schimbul de concesii pe probleme diferite", "Negocierea în echipă", "Amânarea deciziilor"],
      de: ["Holztransport", "Austausch von Zugeständnissen zu verschiedenen Themen", "Teamverhandlung", "Aufschieben von Entscheidungen"],
      en: ["Transporting logs", "Trading concessions on different issues", "Team negotiation", "Delaying decisions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Logrolling implică cedarea în puncte mai puțin importante pentru a câștiga în cele prioritare.",
      de: "Logrolling bedeutet, bei weniger wichtigen Punkten nachzugeben, um bei den Prioritäten zu gewinnen.",
      en: "Logrolling involves giving in on less important points to gain on priority ones."
    }
  },
  {
    question: {
      ro: "Care este importanța documentării în negocieri?",
      de: "Welche Bedeutung hat die Dokumentation bei Verhandlungen?",
      en: "What is the importance of documentation in negotiations?"
    },
    options: {
      ro: ["Nu este necesară", "Previne neînțelegerile și asigură claritate", "Încetinește procesul", "Este utilă doar pentru contracte mari"],
      de: ["Ist nicht notwendig", "Verhindert Missverständnisse und sorgt für Klarheit", "Verlangsamt den Prozess", "Nur für große Verträge nützlich"],
      en: ["Not necessary", "Prevents misunderstandings and ensures clarity", "Slows down the process", "Only useful for large contracts"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentarea acordurilor previne disputele ulterioare și oferă referințe clare pentru ambele părți.",
      de: "Die Dokumentation von Vereinbarungen verhindert spätere Streitigkeiten und bietet klare Referenzen für beide Parteien.",
      en: "Documenting agreements prevents later disputes and provides clear references for both parties."
    }
  },
  {
    question: {
      ro: "Ce trebuie făcut când negocierea ajunge într-un impas?",
      de: "Was sollte getan werden, wenn die Verhandlung in eine Sackgasse gerät?",
      en: "What should be done when negotiation reaches a deadlock?"
    },
    options: {
      ro: ["Abandonarea negocierii", "Introducerea de noi variabile sau opțiuni", "Acceptarea oricărei oferte", "Creșterea presiunii"],
      de: ["Aufgabe der Verhandlung", "Einführung neuer Variablen oder Optionen", "Jedes Angebot akzeptieren", "Druck erhöhen"],
      en: ["Abandoning the negotiation", "Introducing new variables or options", "Accepting any offer", "Increasing pressure"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Introducerea de noi variabile poate debloca negocierea oferind perspective și soluții noi.",
      de: "Die Einführung neuer Variablen kann die Verhandlung entsperren, indem neue Perspektiven und Lösungen geboten werden.",
      en: "Introducing new variables can unlock the negotiation by offering new perspectives and solutions."
    }
  },
  {
    question: {
      ro: "Care este rolul relației pe termen lung în negocierea de transport?",
      de: "Welche Rolle spielt die langfristige Beziehung bei Transportverhandlungen?",
      en: "What is the role of long-term relationships in transport negotiation?"
    },
    options: {
      ro: ["Nu are importanță", "Oferă avantaje reciproce și stabilitate", "Reduce flexibilitatea", "Crește costurile"],
      de: ["Hat keine Bedeutung", "Bietet gegenseitige Vorteile und Stabilität", "Reduziert die Flexibilität", "Erhöht die Kosten"],
      en: ["Has no importance", "Provides mutual benefits and stability", "Reduces flexibility", "Increases costs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Relațiile pe termen lung creează încredere, stabilitate în prețuri și acces prioritar la capacitate.",
      de: "Langfristige Beziehungen schaffen Vertrauen, Preisstabilität und prioritären Zugang zu Kapazitäten.",
      en: "Long-term relationships create trust, price stability, and priority access to capacity."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'good cop, bad cop' în negociere?",
      de: "Was bedeutet 'guter Polizist, schlechter Polizist' in Verhandlungen?",
      en: "What does 'good cop, bad cop' mean in negotiation?"
    },
    options: {
      ro: ["Negocierea cu poliția", "O tactică de echipă cu roluri contrastante", "Evitarea conflictelor", "Negocierea cu autorități"],
      de: ["Verhandlung mit der Polizei", "Eine Teamtaktik mit kontrastierenden Rollen", "Konfliktvermeidung", "Verhandlung mit Behörden"],
      en: ["Negotiating with police", "A team tactic with contrasting roles", "Conflict avoidance", "Negotiating with authorities"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Este o tactică în care doi negociatori joacă roluri opuse pentru a dezechilibra și a convinge cealaltă parte.",
      de: "Es ist eine Taktik, bei der zwei Verhandlungsführer gegensätzliche Rollen spielen, um die andere Partei zu destabilisieren und zu überzeugen.",
      en: "It's a tactic where two negotiators play opposite roles to unbalance and convince the other party."
    }
  },
  {
    question: {
      ro: "Cum influențează puterea de negociere rezultatul?",
      de: "Wie beeinflusst die Verhandlungsmacht das Ergebnis?",
      en: "How does negotiating power influence the outcome?"
    },
    options: {
      ro: ["Nu are efect", "Partea cu mai multă putere obține condiții mai bune", "Puterea reduce comunicarea", "Puterea elimină nevoia de negociere"],
      de: ["Hat keine Wirkung", "Die Partei mit mehr Macht erhält bessere Bedingungen", "Macht reduziert die Kommunikation", "Macht eliminiert die Notwendigkeit zu verhandeln"],
      en: ["Has no effect", "The party with more power gets better terms", "Power reduces communication", "Power eliminates the need to negotiate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Puterea de negociere provine din alternative, informații și resurse, influențând direct termenii acordului.",
      de: "Verhandlungsmacht ergibt sich aus Alternativen, Informationen und Ressourcen und beeinflusst direkt die Vertragsbedingungen.",
      en: "Negotiating power comes from alternatives, information, and resources, directly influencing agreement terms."
    }
  },
  {
    question: {
      ro: "Ce este o 'concesie' în negociere?",
      de: "Was ist ein 'Zugeständnis' in Verhandlungen?",
      en: "What is a 'concession' in negotiation?"
    },
    options: {
      ro: ["Un contract exclusiv", "O cedare sau modificare a poziției inițiale", "O cerere suplimentară", "O tehnică de manipulare"],
      de: ["Ein exklusiver Vertrag", "Ein Nachgeben oder Ändern der ursprünglichen Position", "Eine zusätzliche Anforderung", "Eine Manipulationstechnik"],
      en: ["An exclusive contract", "A yielding or modification of the initial position", "An additional request", "A manipulation technique"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Concesiile sunt ajustări ale poziției inițiale făcute pentru a progresa spre un acord.",
      de: "Zugeständnisse sind Anpassungen der ursprünglichen Position, um eine Einigung zu erzielen.",
      en: "Concessions are adjustments to the initial position made to progress toward an agreement."
    }
  },
  {
    question: {
      ro: "Care este diferența dintre poziție și interes în negociere?",
      de: "Was ist der Unterschied zwischen Position und Interesse in Verhandlungen?",
      en: "What is the difference between position and interest in negotiation?"
    },
    options: {
      ro: ["Nu există diferență", "Poziția este ce ceri, interesul este de ce ai nevoie", "Interesul vine înaintea poziției", "Poziția este mai importantă"],
      de: ["Es gibt keinen Unterschied", "Position ist was du forderst, Interesse ist warum du es brauchst", "Interesse kommt vor Position", "Position ist wichtiger"],
      en: ["There is no difference", "Position is what you ask for, interest is why you need it", "Interest comes before position", "Position is more important"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Înțelegerea intereselor din spatele pozițiilor permite găsirea de soluții creative care satisfac ambele părți.",
      de: "Das Verstehen der Interessen hinter den Positionen ermöglicht kreative Lösungen, die beide Parteien zufriedenstellen.",
      en: "Understanding interests behind positions allows finding creative solutions that satisfy both parties."
    }
  },
  {
    question: {
      ro: "Ce tactică este 'flinch' în negociere?",
      de: "Was ist die 'Flinch'-Taktik in Verhandlungen?",
      en: "What is the 'flinch' tactic in negotiation?"
    },
    options: {
      ro: ["A reacționa vizibil la ofertă pentru a semnala dezacord", "A accepta rapid", "A pleca din negociere", "A cere timp de gândire"],
      de: ["Sichtbar auf ein Angebot reagieren, um Ablehnung zu signalisieren", "Schnell akzeptieren", "Die Verhandlung verlassen", "Bedenkzeit verlangen"],
      en: ["Reacting visibly to an offer to signal disagreement", "Accepting quickly", "Leaving the negotiation", "Asking for time to think"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Flinch este o reacție vizibilă (surpriză, șoc) la o ofertă pentru a semnala că este prea mare diferența.",
      de: "Flinch ist eine sichtbare Reaktion (Überraschung, Schock) auf ein Angebot, um zu signalisieren, dass die Differenz zu groß ist.",
      en: "Flinch is a visible reaction (surprise, shock) to an offer to signal that the gap is too large."
    }
  },
  {
    question: {
      ro: "De ce este important să cunoști competitorii în negociere?",
      de: "Warum ist es wichtig, die Wettbewerber bei Verhandlungen zu kennen?",
      en: "Why is it important to know competitors in negotiation?"
    },
    options: {
      ro: ["Nu este important", "Oferă puncte de referință pentru prețuri și servicii", "Pentru a-i sabota", "Pentru a evita colaborarea"],
      de: ["Ist nicht wichtig", "Bietet Referenzpunkte für Preise und Dienstleistungen", "Um sie zu sabotieren", "Um Zusammenarbeit zu vermeiden"],
      en: ["Not important", "Provides reference points for prices and services", "To sabotage them", "To avoid collaboration"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cunoașterea competitorilor oferă referințe pentru poziționarea ofertei și argumentarea valorii.",
      de: "Die Kenntnis der Wettbewerber bietet Referenzen für die Positionierung des Angebots und die Argumentation des Wertes.",
      en: "Knowing competitors provides references for positioning your offer and arguing value."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'bracketing' în stabilirea prețului?",
      de: "Was bedeutet 'Bracketing' bei der Preisfestlegung?",
      en: "What does 'bracketing' mean in pricing?"
    },
    options: {
      ro: ["Stabilirea unor limite de preț", "Încadrarea ofertei între prețul dorit și anticipat", "Eliminarea taxelor", "Fixarea cursului valutar"],
      de: ["Festlegung von Preisgrenzen", "Einrahmung des Angebots zwischen Wunsch- und erwartetem Preis", "Eliminierung von Gebühren", "Festlegung des Wechselkurses"],
      en: ["Setting price limits", "Framing the offer between desired and anticipated price", "Eliminating fees", "Fixing exchange rate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bracketing implică stabilirea ofertei inițiale astfel încât prețul final negociat să fie cel dorit.",
      de: "Bracketing bedeutet, das anfängliche Angebot so festzulegen, dass der endgültige Verhandlungspreis der gewünschte ist.",
      en: "Bracketing involves setting the initial offer so that the final negotiated price is the desired one."
    }
  },
  {
    question: {
      ro: "Care este impactul emoțiilor în negociere?",
      de: "Welchen Einfluss haben Emotionen in Verhandlungen?",
      en: "What is the impact of emotions in negotiation?"
    },
    options: {
      ro: ["Emoțiile nu contează", "Pot influența deciziile și rezultatele", "Trebuie ignorate complet", "Accelerează negocierea"],
      de: ["Emotionen spielen keine Rolle", "Können Entscheidungen und Ergebnisse beeinflussen", "Sollten komplett ignoriert werden", "Beschleunigen die Verhandlung"],
      en: ["Emotions don't matter", "Can influence decisions and outcomes", "Should be completely ignored", "Speed up negotiation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Emoțiile influențează judecata și deciziile; gestionarea lor eficientă este esențială pentru succes.",
      de: "Emotionen beeinflussen Urteil und Entscheidungen; ihr effektives Management ist entscheidend für den Erfolg.",
      en: "Emotions influence judgment and decisions; effective management of them is essential for success."
    }
  },
  {
    question: {
      ro: "Ce este 'splitting the difference' în negociere?",
      de: "Was ist 'die Differenz teilen' in Verhandlungen?",
      en: "What is 'splitting the difference' in negotiation?"
    },
    options: {
      ro: ["Împărțirea profitului", "Ajungerea la un compromis la mijloc între două poziții", "Separarea contractelor", "Divizarea rutelor"],
      de: ["Gewinnaufteilung", "Einen Kompromiss in der Mitte zwischen zwei Positionen finden", "Trennung der Verträge", "Aufteilung der Routen"],
      en: ["Profit sharing", "Reaching a compromise midway between two positions", "Separating contracts", "Dividing routes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Splitting the difference implică ajungerea la un preț sau termen la jumătatea distanței dintre cele două poziții.",
      de: "Die Differenz teilen bedeutet, einen Preis oder eine Bedingung auf halbem Weg zwischen den beiden Positionen zu erreichen.",
      en: "Splitting the difference involves reaching a price or term halfway between the two positions."
    }
  },
  {
    question: {
      ro: "De ce este important follow-up-ul după negociere?",
      de: "Warum ist das Follow-up nach der Verhandlung wichtig?",
      en: "Why is follow-up after negotiation important?"
    },
    options: {
      ro: ["Nu este necesar", "Confirmă acordurile și construiește relația", "Doar pentru contracte mari", "Este opțional"],
      de: ["Ist nicht notwendig", "Bestätigt Vereinbarungen und baut die Beziehung auf", "Nur für große Verträge", "Ist optional"],
      en: ["Not necessary", "Confirms agreements and builds the relationship", "Only for large contracts", "Is optional"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Follow-up-ul confirmă înțelegerile, previne neînțelegerile și consolidează relația profesională.",
      de: "Das Follow-up bestätigt Vereinbarungen, verhindert Missverständnisse und stärkt die Geschäftsbeziehung.",
      en: "Follow-up confirms understandings, prevents misunderstandings, and strengthens the professional relationship."
    }
  }
];

export function getRandomNegotiationQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...negotiationQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
