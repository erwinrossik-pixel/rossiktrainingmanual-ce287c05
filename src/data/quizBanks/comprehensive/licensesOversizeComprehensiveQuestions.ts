import { TranslatedQuizQuestion } from '../../quizTranslations';

export const licensesOversizeComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este lățimea maximă standard permisă pentru un camion în UE?",
      de: "Was ist die maximal zulässige Standardbreite für einen LKW in der EU?",
      en: "What is the maximum standard width allowed for a truck in the EU?"
    },
    options: {
      ro: ["2.40 m", "2.55 m", "2.75 m", "3.00 m"],
      de: ["2,40 m", "2,55 m", "2,75 m", "3,00 m"],
      en: ["2.40 m", "2.55 m", "2.75 m", "3.00 m"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lățimea maximă standard în UE este 2.55 m pentru toate vehiculele, 2.60 m pentru frigorifice.",
      de: "Die maximale Standardbreite in der EU beträgt 2,55 m für alle Fahrzeuge, 2,60 m für Kühlfahrzeuge.",
      en: "Maximum standard width in EU is 2.55 m for all vehicles, 2.60 m for refrigerated."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este înălțimea maximă permisă pentru un camion pe drumurile publice?",
      de: "Was ist die maximal zulässige Höhe für einen LKW auf öffentlichen Straßen?",
      en: "What is the maximum permitted height for a truck on public roads?"
    },
    options: {
      ro: ["3.50 m", "4.00 m", "4.50 m", "5.00 m"],
      de: ["3,50 m", "4,00 m", "4,50 m", "5,00 m"],
      en: ["3.50 m", "4.00 m", "4.50 m", "5.00 m"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Înălțimea maximă în majoritatea țărilor UE este 4.00 m, dar unele țări au limite de 4.20 m sau 4.50 m.",
      de: "Die maximale Höhe in den meisten EU-Ländern beträgt 4,00 m, einige Länder haben 4,20 m oder 4,50 m.",
      en: "Maximum height in most EU countries is 4.00 m, some countries have 4.20 m or 4.50 m limits."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce definește un transport agabaritic (oversize)?",
      de: "Was definiert einen Schwertransport (Übermaß)?",
      en: "What defines an oversized transport?"
    },
    options: {
      ro: ["Orice transport internațional", "Transport care depășește dimensiunile/greutățile standard", "Transport doar noaptea", "Transport cu escortă obligatorie"],
      de: ["Jeder internationale Transport", "Transport, der Standardabmessungen/Gewichte überschreitet", "Nur Nachttransport", "Transport mit Pflichtbegleitung"],
      en: ["Any international transport", "Transport exceeding standard dimensions/weights", "Night transport only", "Transport with mandatory escort"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transport agabaritic = marfă sau vehicul care depășește limitele standard de dimensiune sau greutate.",
      de: "Schwertransport = Ladung oder Fahrzeug, das Standardabmessungen oder -gewichte überschreitet.",
      en: "Oversized transport = cargo or vehicle exceeding standard size or weight limits."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tip de autorizație este necesară pentru transport agabaritic?",
      de: "Welche Genehmigungsart ist für Schwertransporte erforderlich?",
      en: "What type of permit is required for oversized transport?"
    },
    options: {
      ro: ["Nicio autorizație", "Autorizație specială de transport excedentar", "Doar licență standard", "Doar asigurare"],
      de: ["Keine Genehmigung", "Sondergenehmigung für Ausnahmetransport", "Nur Standardlizenz", "Nur Versicherung"],
      en: ["No permit", "Special exceptional transport permit", "Only standard license", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transporturile agabaritice necesită autorizații speciale emise de autoritățile rutiere pentru fiecare țară.",
      de: "Schwertransporte erfordern Sondergenehmigungen, die von Straßenbehörden für jedes Land ausgestellt werden.",
      en: "Oversized transports require special permits issued by road authorities for each country."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport turbină eoliană 75m lungime din DK la ES. Ce autorizații și planificare sunt necesare?",
      de: "Windturbinentransport 75m Länge von DK nach ES. Welche Genehmigungen und Planung erforderlich?",
      en: "Wind turbine transport 75m length from DK to ES. What permits and planning required?"
    },
    options: {
      ro: ["Doar CMR", "Autorizații fiecare țară (DK, DE, NL/BE, FR, ES) + studiu traseu + escorte + restricții temporale", "Doar licență EU", "Nici o autorizație specială"],
      de: ["Nur CMR", "Genehmigungen jedes Land (DK, DE, NL/BE, FR, ES) + Streckenstudie + Begleitung + Zeitbeschränkungen", "Nur EU-Lizenz", "Keine Sondergenehmigung"],
      en: ["Only CMR", "Permits each country (DK, DE, NL/BE, FR, ES) + route study + escorts + time restrictions", "Only EU license", "No special permit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transport 75m necesită: autorizație fiecare țară, studiu de traseu, escorte, program noapte/weekend, costuri mari.",
      de: "75m-Transport erfordert: Genehmigung jedes Land, Streckenstudie, Begleitung, Nacht-/Wochenendplan, hohe Kosten.",
      en: "75m transport requires: permit each country, route study, escorts, night/weekend schedule, high costs."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este autorizația CEMT și pentru ce se folosește?",
      de: "Was ist die CEMT-Genehmigung und wofür wird sie verwendet?",
      en: "What is the CEMT permit and what is it used for?"
    },
    options: {
      ro: ["Autorizație pentru turism", "Autorizație pentru transport internațional în țări membre CEMT (inclusiv non-UE)", "Permis de conducere", "Licență cabotaj"],
      de: ["Tourismusgenehmigung", "Genehmigung für internationalen Transport in CEMT-Mitgliedsländern (inkl. Nicht-EU)", "Führerschein", "Kabotagelizenz"],
      en: ["Tourism permit", "Permit for international transport in CEMT member countries (incl. non-EU)", "Driving license", "Cabotage license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CEMT permite transport internațional între cele 43+ țări membre, inclusiv Rusia, Turcia, Ucraina etc.",
      de: "CEMT ermöglicht internationalen Transport zwischen 43+ Mitgliedsländern, inkl. Russland, Türkei, Ukraine usw.",
      en: "CEMT allows international transport between 43+ member countries, incl. Russia, Turkey, Ukraine etc."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este greutatea maximă pentru un ansamblu de 5 osii în UE?",
      de: "Was ist das Höchstgewicht für eine 5-Achser-Kombination in der EU?",
      en: "What is the maximum weight for a 5-axle combination in EU?"
    },
    options: {
      ro: ["38 tone", "40 tone", "44 tone", "50 tone"],
      de: ["38 Tonnen", "40 Tonnen", "44 Tonnen", "50 Tonnen"],
      en: ["38 tonnes", "40 tonnes", "44 tonnes", "50 tonnes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ansamblul standard de 5 osii are greutate maximă de 40 tone în UE (6 osii = 44t cu container ISO).",
      de: "Die Standard-5-Achser-Kombination hat in der EU ein Höchstgewicht von 40 Tonnen (6 Achsen = 44t mit ISO-Container).",
      en: "Standard 5-axle combination has maximum weight of 40 tonnes in EU (6 axles = 44t with ISO container)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Marfă indivizibilă 85t trebuie transportată din PL la IT. Ce vehicul și ce procedură?",
      de: "Unteilbare Ladung 85t muss von PL nach IT transportiert werden. Welches Fahrzeug und Verfahren?",
      en: "Indivisible cargo 85t needs to be transported from PL to IT. What vehicle and procedure?"
    },
    options: {
      ro: ["Camion standard 40t", "Trailer multi-osie (8-12 osii) + autorizații speciale PL, CZ/AT, IT + escorte", "Două curse standard", "Transport maritim obligatoriu"],
      de: ["Standard-LKW 40t", "Mehrachsauflieger (8-12 Achsen) + Sondergenehmigungen PL, CZ/AT, IT + Begleitung", "Zwei Standardfahrten", "Obligatorischer Seetransport"],
      en: ["Standard 40t truck", "Multi-axle trailer (8-12 axles) + special permits PL, CZ/AT, IT + escorts", "Two standard trips", "Mandatory sea transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "85t necesită trailer special multi-osie pentru distribuție greutate + autorizații fiecare țară + escorte.",
      de: "85t erfordert speziellen Mehrachsauflieger für Gewichtsverteilung + Genehmigungen jedes Land + Begleitung.",
      en: "85t requires special multi-axle trailer for weight distribution + permits each country + escorts."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este o autorizație bilaterală de transport și când este necesară?",
      de: "Was ist eine bilaterale Transportgenehmigung und wann ist sie erforderlich?",
      en: "What is a bilateral transport permit and when is it required?"
    },
    options: {
      ro: ["Pentru transport UE", "Pentru transport între două țări non-UE sau între UE și țară non-UE fără acord liberalizat", "Pentru cabotaj", "Pentru transport local"],
      de: ["Für EU-Transport", "Für Transport zwischen zwei Nicht-EU-Ländern oder EU und Nicht-EU ohne liberalisiertes Abkommen", "Für Kabotage", "Für lokalen Transport"],
      en: ["For EU transport", "For transport between two non-EU countries or EU and non-EU without liberalized agreement", "For cabotage", "For local transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Autorizații bilaterale sunt necesare pentru transport cu țări non-UE care nu au acorduri de liberalizare.",
      de: "Bilaterale Genehmigungen sind für Transport mit Nicht-EU-Ländern erforderlich, die keine Liberalisierungsabkommen haben.",
      en: "Bilateral permits are needed for transport with non-EU countries without liberalization agreements."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este lungimea maximă standard pentru un ansamblu articulat în UE?",
      de: "Was ist die maximale Standardlänge für einen Sattelzug in der EU?",
      en: "What is the maximum standard length for an articulated vehicle in EU?"
    },
    options: {
      ro: ["15.50 m", "16.50 m", "18.75 m", "20.00 m"],
      de: ["15,50 m", "16,50 m", "18,75 m", "20,00 m"],
      en: ["15.50 m", "16.50 m", "18.75 m", "20.00 m"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lungimea maximă pentru tractor + semiremorcă este 16.50 m în UE.",
      de: "Die maximale Länge für Zugmaschine + Auflieger beträgt 16,50 m in der EU.",
      en: "Maximum length for tractor + semi-trailer is 16.50 m in EU."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport casă prefabricată 4.5m lățime × 5.0m înălțime × 25m lungime din DE la RO. Provocări și soluții?",
      de: "Transport Fertighaus 4,5m Breite × 5,0m Höhe × 25m Länge von DE nach RO. Herausforderungen und Lösungen?",
      en: "Prefab house transport 4.5m width × 5.0m height × 25m length from DE to RO. Challenges and solutions?"
    },
    options: {
      ro: ["Transport standard", "Traseu special: poduri, tuneluri, sensuri giratorii; escorte; noapte; autorizații DE, AT, HU, RO", "Imposibil de transportat", "Doar transport aerian"],
      de: ["Standardtransport", "Spezialroute: Brücken, Tunnel, Kreisverkehr; Begleitung; Nacht; Genehmigungen DE, AT, HU, RO", "Unmöglich zu transportieren", "Nur Lufttransport"],
      en: ["Standard transport", "Special route: bridges, tunnels, roundabouts; escorts; night; permits DE, AT, HU, RO", "Impossible to transport", "Only air transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dimensiuni extreme necesită: studiu traseu detaliat, evitare obstacole, escorte, transport nocturn, autorizații multiple.",
      de: "Extreme Abmessungen erfordern: detaillierte Streckenstudie, Hindernisvermeidung, Begleitung, Nachttransport, mehrere Genehmigungen.",
      en: "Extreme dimensions require: detailed route study, obstacle avoidance, escorts, night transport, multiple permits."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce sunt autorizațiile ECMT verzi și ce avantaje oferă?",
      de: "Was sind grüne ECMT-Genehmigungen und welche Vorteile bieten sie?",
      en: "What are green ECMT permits and what advantages do they offer?"
    },
    options: {
      ro: ["Doar pentru parcuri", "Pentru vehicule Euro 5/6, acces fără restricții în zonele cu cerințe de emisii", "Pentru transport agricol", "Pentru biciclete"],
      de: ["Nur für Parks", "Für Euro 5/6-Fahrzeuge, uneingeschränkter Zugang zu Emissionszonen", "Für landwirtschaftlichen Transport", "Für Fahrräder"],
      en: ["Only for parks", "For Euro 5/6 vehicles, unrestricted access in emission requirement zones", "For agricultural transport", "For bicycles"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ECMT verde = vehicule Euro 5/6 cu acces în țări cu restricții de emisii (Austria, Elveția etc.).",
      de: "Grüne ECMT = Euro 5/6-Fahrzeuge mit Zugang zu Ländern mit Emissionsbeschränkungen (Österreich, Schweiz usw.).",
      en: "Green ECMT = Euro 5/6 vehicles with access to countries with emission restrictions (Austria, Switzerland etc.)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Cine eliberează autorizațiile de transport agabaritic în România?",
      de: "Wer stellt die Schwertransportgenehmigungen in Rumänien aus?",
      en: "Who issues oversized transport permits in Romania?"
    },
    options: {
      ro: ["Poliția", "CNAIR pentru drumuri naționale, Consilii Județene pentru drumuri locale", "Primăria", "Tribunalul"],
      de: ["Polizei", "CNAIR für Nationalstraßen, Kreisräte für Lokalstraßen", "Rathaus", "Gericht"],
      en: ["Police", "CNAIR for national roads, County Councils for local roads", "City hall", "Court"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CNAIR autorizează transporturi agabaritice pe drumuri naționale; consiliile județene pe drumuri locale.",
      de: "CNAIR genehmigt Schwertransporte auf Nationalstraßen; Kreisräte auf Lokalstraßen.",
      en: "CNAIR authorizes oversized transports on national roads; county councils on local roads."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client cere transport urgent reactor industrial 120t + 6m lățime din Hamburg la Constanța. Timp estimat și complexitate?",
      de: "Kunde fordert dringenden Transport Industriereaktor 120t + 6m Breite von Hamburg nach Konstanza. Geschätzte Zeit und Komplexität?",
      en: "Client requests urgent transport industrial reactor 120t + 6m width from Hamburg to Constanta. Estimated time and complexity?"
    },
    options: {
      ro: ["2-3 zile, simplu", "4-8 săptămâni planificare + 2 săptămâni transport; autorizații DE, PL/CZ, HU, RO; escorte; poduri verificate", "1 săptămână total", "Imposibil"],
      de: ["2-3 Tage, einfach", "4-8 Wochen Planung + 2 Wochen Transport; Genehmigungen DE, PL/CZ, HU, RO; Begleitung; Brückenprüfung", "1 Woche gesamt", "Unmöglich"],
      en: ["2-3 days, simple", "4-8 weeks planning + 2 weeks transport; permits DE, PL/CZ, HU, RO; escorts; bridge verification", "1 week total", "Impossible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "120t + 6m necesită luni de planificare: autorizații multiple, verificare poduri, escorte, convoaie speciale.",
      de: "120t + 6m erfordert Monate Planung: mehrere Genehmigungen, Brückenprüfung, Begleitung, Sonderkonvois.",
      en: "120t + 6m requires months of planning: multiple permits, bridge verification, escorts, special convoys."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este escorta pentru transport agabaritic și când este obligatorie?",
      de: "Was ist die Begleitung für Schwertransport und wann ist sie Pflicht?",
      en: "What is escort for oversized transport and when is it mandatory?"
    },
    options: {
      ro: ["Nu este niciodată necesară", "Vehicule de însoțire cu semnalizare, obligatorii la anumite dimensiuni/greutăți", "Doar pentru VIP", "Doar în orașe"],
      de: ["Nie erforderlich", "Begleitfahrzeuge mit Signalisierung, bei bestimmten Abmessungen/Gewichten Pflicht", "Nur für VIP", "Nur in Städten"],
      en: ["Never needed", "Escort vehicles with signaling, mandatory at certain dimensions/weights", "Only for VIP", "Only in cities"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Escorta (vehicule de însoțire) devine obligatorie la depășiri majore: >3m lățime, >4.5m înălțime, >30m lungime.",
      de: "Begleitung (Begleitfahrzeuge) wird bei großen Überschreitungen Pflicht: >3m Breite, >4,5m Höhe, >30m Länge.",
      en: "Escort (escort vehicles) becomes mandatory at major exceedances: >3m width, >4.5m height, >30m length."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este diferența între transport divisibil și indivizibil?",
      de: "Was ist der Unterschied zwischen teilbarer und unteilbarer Ladung?",
      en: "What is the difference between divisible and indivisible cargo?"
    },
    options: {
      ro: ["Nu există diferență", "Indivizibil nu poate fi împărțit fără daune; autorizare doar pentru indivizibil", "Doar dimensiunea contează", "Doar greutatea contează"],
      de: ["Kein Unterschied", "Unteilbar kann nicht ohne Schäden geteilt werden; Genehmigung nur für unteilbar", "Nur Abmessungen zählen", "Nur Gewicht zählt"],
      en: ["No difference", "Indivisible cannot be split without damage; permit only for indivisible", "Only dimensions matter", "Only weight matters"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marfa indivizibilă (reactor, turbină) primește autorizație agabaritică. Marfa divisibilă trebuie împărțită.",
      de: "Unteilbare Ladung (Reaktor, Turbine) erhält Schwertransportgenehmigung. Teilbare Ladung muss geteilt werden.",
      en: "Indivisible cargo (reactor, turbine) gets oversized permit. Divisible cargo must be split."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport macara 200t pe șenile din Rotterdam la Brașov. Considerații speciale pentru traversarea Alpilor?",
      de: "Transport Raupenkran 200t von Rotterdam nach Brașov. Besondere Überlegungen für Alpenüberquerung?",
      en: "Transport 200t crawler crane from Rotterdam to Brașov. Special considerations for crossing Alps?"
    },
    options: {
      ro: ["Nici o considerație specială", "Pasuri de munte: capacitate poduri, unghiuri viraje, restricții iarnă, posibil traseu Brenner sau Tauern", "Doar Germania contează", "Imposibil prin Alpi"],
      de: ["Keine besonderen Überlegungen", "Bergpässe: Brückenkapazität, Kurvenwinkel, Winterbeschränkungen, evtl. Brenner- oder Tauernroute", "Nur Deutschland zählt", "Unmöglich durch Alpen"],
      en: ["No special considerations", "Mountain passes: bridge capacity, turn angles, winter restrictions, possibly Brenner or Tauern route", "Only Germany matters", "Impossible through Alps"]
    },
    correctIndex: 1,
    explanation: {
      ro: "200t prin Alpi necesită: verificare poduri/viaducte, analiză viraje strânse, evitare iarnă, alegere pas optim.",
      de: "200t durch Alpen erfordert: Brücken-/Viaduktprüfung, Analyse enger Kurven, Wintervermeidung, optimale Passwahl.",
      en: "200t through Alps requires: bridge/viaduct verification, tight turn analysis, winter avoidance, optimal pass choice."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce taxe suplimentare se aplică pentru transport agabaritic?",
      de: "Welche zusätzlichen Gebühren gelten für Schwertransporte?",
      en: "What additional fees apply for oversized transport?"
    },
    options: {
      ro: ["Niciuna", "Taxe autorizare + taxe drumuri + taxe escortă poliție + asigurare suplimentară", "Doar rovinietă", "Doar combustibil"],
      de: ["Keine", "Genehmigungsgebühren + Straßengebühren + Polizeibegleitgebühren + Zusatzversicherung", "Nur Maut", "Nur Kraftstoff"],
      en: ["None", "Permit fees + road fees + police escort fees + additional insurance", "Only toll", "Only fuel"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Costuri agabaritic: taxe autorizare fiecare țară, taxe speciale drumuri, escortă poliție, asigurare majorată.",
      de: "Schwertransportkosten: Genehmigungsgebühren je Land, Sonderstraßengebühren, Polizeibegleitung, erhöhte Versicherung.",
      en: "Oversized costs: permit fees per country, special road fees, police escort, increased insurance."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce document trebuie să aibă la bord un transport agabaritic?",
      de: "Welches Dokument muss ein Schwertransport an Bord haben?",
      en: "What document must an oversized transport have on board?"
    },
    options: {
      ro: ["Doar CMR", "Autorizația specială de transport + CMR + plan de traseu + documente vehicul", "Doar factură", "Nici un document special"],
      de: ["Nur CMR", "Sondertransportgenehmigung + CMR + Routenplan + Fahrzeugdokumente", "Nur Rechnung", "Kein besonderes Dokument"],
      en: ["Only CMR", "Special transport permit + CMR + route plan + vehicle documents", "Only invoice", "No special document"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transport agabaritic necesită la bord: autorizație, CMR, plan traseu aprobat, documente vehicul special.",
      de: "Schwertransport erfordert an Bord: Genehmigung, CMR, genehmigten Routenplan, Spezialfahrzeugdokumente.",
      en: "Oversized transport requires on board: permit, CMR, approved route plan, special vehicle documents."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport pală eoliană 80m din Esbjerg (DK) la Constanța (RO). Provocări maritime vs. rutiere?",
      de: "Transport Windturbinenblatt 80m von Esbjerg (DK) nach Konstanza (RO). Herausforderungen See vs. Straße?",
      en: "Transport wind turbine blade 80m from Esbjerg (DK) to Constanta (RO). Maritime vs. road challenges?"
    },
    options: {
      ro: ["Rutier mai simplu", "Maritim: navă specială dar mai puține autorizații; rutier: 6+ țări, escorte, noapte, luni de planificare", "Identice", "Doar maritim posibil"],
      de: ["Straße einfacher", "See: Spezialschiff aber weniger Genehmigungen; Straße: 6+ Länder, Begleitung, Nacht, Monate Planung", "Identisch", "Nur See möglich"],
      en: ["Road simpler", "Maritime: special vessel but fewer permits; road: 6+ countries, escorts, night, months of planning", "Identical", "Only maritime possible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "80m rutier = autorizații DK, DE, PL, CZ, AT, HU, RO; escorte; transport nocturn. Maritim = navă specială, mai puține obstacole.",
      de: "80m Straße = Genehmigungen DK, DE, PL, CZ, AT, HU, RO; Begleitung; Nachttransport. See = Spezialschiff, weniger Hindernisse.",
      en: "80m road = permits DK, DE, PL, CZ, AT, HU, RO; escorts; night transport. Maritime = special vessel, fewer obstacles."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce restricții temporale se aplică de obicei transporturilor agabaritice?",
      de: "Welche zeitlichen Beschränkungen gelten üblicherweise für Schwertransporte?",
      en: "What time restrictions typically apply to oversized transports?"
    },
    options: {
      ro: ["Niciuna", "Interdicție ore de vârf, weekend-uri, sărbători; preferință noapte", "Doar dimineața", "Doar după-amiaza"],
      de: ["Keine", "Verbot Stoßzeiten, Wochenenden, Feiertage; Nacht bevorzugt", "Nur morgens", "Nur nachmittags"],
      en: ["None", "Ban peak hours, weekends, holidays; night preferred", "Only morning", "Only afternoon"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Agabaritice: interzise în trafic intens, weekend-uri, sărbători. Majoritatea se fac noaptea când traficul e minim.",
      de: "Schwertransporte: verboten bei starkem Verkehr, Wochenenden, Feiertagen. Die meisten erfolgen nachts bei minimalem Verkehr.",
      en: "Oversized: banned during heavy traffic, weekends, holidays. Most done at night when traffic is minimal."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce culoare au luminile de semnalizare pentru transport agabaritic?",
      de: "Welche Farbe haben die Signalleuchten für Schwertransporte?",
      en: "What color are warning lights for oversized transport?"
    },
    options: {
      ro: ["Roșu", "Galben/portocaliu", "Verde", "Albastru"],
      de: ["Rot", "Gelb/Orange", "Grün", "Blau"],
      en: ["Red", "Yellow/amber", "Green", "Blue"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transporturile agabaritice folosesc lumini galbene/portocalii intermitente pentru avertizare.",
      de: "Schwertransporte verwenden gelbe/orangefarbene Blinklichter zur Warnung.",
      en: "Oversized transports use yellow/amber flashing lights for warning."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Calcul: Transport transformator 150t + trailer 30t = 180t total. Câte osii necesare pentru 10t/osie maxim?",
      de: "Berechnung: Transport Transformator 150t + Auflieger 30t = 180t gesamt. Wie viele Achsen bei max. 10t/Achse?",
      en: "Calculation: Transport transformer 150t + trailer 30t = 180t total. How many axles needed for 10t/axle max?"
    },
    options: {
      ro: ["10 osii", "12 osii", "18 osii", "24 osii"],
      de: ["10 Achsen", "12 Achsen", "18 Achsen", "24 Achsen"],
      en: ["10 axles", "12 axles", "18 axles", "24 axles"]
    },
    correctIndex: 2,
    explanation: {
      ro: "180t ÷ 10t/osie = 18 osii minime. În practică, se folosesc mai multe pentru siguranță și distribuție uniformă.",
      de: "180t ÷ 10t/Achse = 18 Achsen Minimum. In der Praxis werden mehr für Sicherheit und gleichmäßige Verteilung verwendet.",
      en: "180t ÷ 10t/axle = 18 axles minimum. In practice, more are used for safety and even distribution."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este un Self-Propelled Modular Transporter (SPMT)?",
      de: "Was ist ein Self-Propelled Modular Transporter (SPMT)?",
      en: "What is a Self-Propelled Modular Transporter (SPMT)?"
    },
    options: {
      ro: ["Bicicletă electrică", "Platformă modulară autopropulsată pentru sarcini extrem de grele", "Camion standard", "Remorcă normală"],
      de: ["Elektrisches Fahrrad", "Selbstfahrende modulare Plattform für extrem schwere Lasten", "Standard-LKW", "Normale Anhänger"],
      en: ["Electric bicycle", "Self-propelled modular platform for extremely heavy loads", "Standard truck", "Normal trailer"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SPMT = platforme modulare cu sute de roți, se pot combina, pentru sarcini de sute/mii de tone.",
      de: "SPMT = modulare Plattformen mit Hunderten von Rädern, kombinierbar, für Lasten von Hunderten/Tausenden Tonnen.",
      en: "SPMT = modular platforms with hundreds of wheels, can be combined, for loads of hundreds/thousands of tonnes."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care țări UE au limite de greutate mai mari de 40t pentru camioane standard?",
      de: "Welche EU-Länder haben Gewichtsgrenzen über 40t für Standard-LKW?",
      en: "Which EU countries have weight limits above 40t for standard trucks?"
    },
    options: {
      ro: ["Niciuna", "Suedia (60t), Finlanda (76t), țări nordice cu derogări", "Toate", "Doar Germania"],
      de: ["Keine", "Schweden (60t), Finnland (76t), nordische Länder mit Ausnahmen", "Alle", "Nur Deutschland"],
      en: ["None", "Sweden (60t), Finland (76t), Nordic countries with derogations", "All", "Only Germany"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Țările nordice au limite mai mari: Suedia 60t, Finlanda 76t pentru ansambluri lungi speciale.",
      de: "Nordische Länder haben höhere Grenzen: Schweden 60t, Finnland 76t für spezielle lange Kombinationen.",
      en: "Nordic countries have higher limits: Sweden 60t, Finland 76t for special long combinations."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client întreabă despre EMS (European Modular System). Ce este și unde este permis?",
      de: "Kunde fragt nach EMS (European Modular System). Was ist das und wo ist es erlaubt?",
      en: "Client asks about EMS (European Modular System). What is it and where is it allowed?"
    },
    options: {
      ro: ["Sistem de taxare", "Sistem de ansambluri lungi (25.25m, 60t) permis în SE, FI, NL, parțial DE, DK", "Asigurare europeană", "Sistem bancar"],
      de: ["Mautsystem", "System langer Kombinationen (25,25m, 60t) erlaubt in SE, FI, NL, teilweise DE, DK", "Europäische Versicherung", "Banksystem"],
      en: ["Toll system", "Long combination system (25.25m, 60t) allowed in SE, FI, NL, partly DE, DK", "European insurance", "Banking system"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EMS = Eurocombi/Gigaliner (25.25m, 60t), permis în țări nordice și parțial în Germania, Olanda, Danemarca.",
      de: "EMS = Eurocombi/Gigaliner (25,25m, 60t), erlaubt in nordischen Ländern und teilweise in Deutschland, Niederlanden, Dänemark.",
      en: "EMS = Eurocombi/Gigaliner (25.25m, 60t), allowed in Nordic countries and partly in Germany, Netherlands, Denmark."
    }
  }
];
