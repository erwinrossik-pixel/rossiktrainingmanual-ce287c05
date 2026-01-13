import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const europeZonesQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce reprezintă Spațiul Schengen pentru transport?",
      de: "Was bedeutet der Schengen-Raum für den Transport?",
      en: "What does the Schengen Area represent for transport?"
    },
    options: {
      ro: ["Taxe uniforme", "Zonă fără controale la frontieră pentru persoane", "Monedă unică", "Sistem de plată"],
      de: ["Einheitliche Steuern", "Zone ohne Grenzkontrollen für Personen", "Einheitswährung", "Zahlungssystem"],
      en: ["Uniform taxes", "Area without border controls for people", "Single currency", "Payment system"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Schengen facilitează trecerea frontierelor, dar controlul vamal pentru mărfuri rămâne.",
      de: "Schengen erleichtert Grenzübertritte, aber Zollkontrolle für Waren bleibt.",
      en: "Schengen facilitates border crossing, but customs control for goods remains."
    }
  },
  {
    question: {
      ro: "Ce țări fac parte din UE dar nu din Schengen?",
      de: "Welche Länder gehören zur EU aber nicht zu Schengen?",
      en: "Which countries are part of EU but not Schengen?"
    },
    options: {
      ro: ["Germania, Franța", "Irlanda, Cipru, Bulgaria, România (parțial)", "Italia, Spania", "Toate sunt în Schengen"],
      de: ["Deutschland, Frankreich", "Irland, Zypern, Bulgarien, Rumänien (teilweise)", "Italien, Spanien", "Alle sind in Schengen"],
      en: ["Germany, France", "Ireland, Cyprus, Bulgaria, Romania (partially)", "Italy, Spain", "All are in Schengen"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Aceste țări au controale la frontieră pentru persoane, afectând timpii de tranzit.",
      de: "Diese Länder haben Grenzkontrollen für Personen, was Transitzeiten beeinflusst.",
      en: "These countries have border controls for people, affecting transit times."
    }
  },
  {
    question: {
      ro: "Ce este zona DACH?",
      de: "Was ist die DACH-Zone?",
      en: "What is the DACH zone?"
    },
    options: {
      ro: ["Zona nordică", "Germania (D), Austria (A), Elveția (CH)", "Zona baltică", "Zona mediteraneană"],
      de: ["Nordische Zone", "Deutschland (D), Österreich (A), Schweiz (CH)", "Baltische Zone", "Mediterrane Zone"],
      en: ["Nordic zone", "Germany (D), Austria (A), Switzerland (CH)", "Baltic zone", "Mediterranean zone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "DACH este o zonă economică importantă cu cerințe similare pentru transport.",
      de: "DACH ist eine wichtige Wirtschaftszone mit ähnlichen Transportanforderungen.",
      en: "DACH is an important economic zone with similar transport requirements."
    }
  },
  {
    question: {
      ro: "Ce restricții speciale are Elveția pentru transport?",
      de: "Welche besonderen Beschränkungen hat die Schweiz für den Transport?",
      en: "What special restrictions does Switzerland have for transport?"
    },
    options: {
      ro: ["Nicio restricție", "Taxă LSVA, interdicție nocturnă camioane, limite greutate", "Doar taxe vamale", "Fără restricții"],
      de: ["Keine Beschränkung", "LSVA-Gebühr, Nachtfahrverbot für LKW, Gewichtsbeschränkungen", "Nur Zölle", "Keine Beschränkungen"],
      en: ["No restriction", "LSVA fee, night truck ban, weight limits", "Only customs duties", "No restrictions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Elveția are reguli stricte pentru protecția mediului și a infrastructurii.",
      de: "Die Schweiz hat strenge Regeln zum Umwelt- und Infrastrukturschutz.",
      en: "Switzerland has strict rules for environmental and infrastructure protection."
    }
  },
  {
    question: {
      ro: "Care sunt principalele coridoare de transport în Europa?",
      de: "Was sind die wichtigsten Transportkorridore in Europa?",
      en: "What are the main transport corridors in Europe?"
    },
    options: {
      ro: ["Doar autostrăzi", "Coridoare TEN-T: Baltic-Adriatic, Rhine-Danube, Mediterranean, etc.", "Doar căi ferate", "Doar porturi"],
      de: ["Nur Autobahnen", "TEN-T-Korridore: Baltisch-Adriatisch, Rhein-Donau, Mittelmeer, etc.", "Nur Schienen", "Nur Häfen"],
      en: ["Only highways", "TEN-T corridors: Baltic-Adriatic, Rhine-Danube, Mediterranean, etc.", "Only railways", "Only ports"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rețeaua TEN-T conectează principalele hub-uri economice europene.",
      de: "Das TEN-T-Netz verbindet die wichtigsten europäischen Wirtschaftszentren.",
      en: "TEN-T network connects major European economic hubs."
    }
  },
  {
    question: {
      ro: "Ce taxă de drum se plătește în Germania?",
      de: "Welche Straßengebühr wird in Deutschland gezahlt?",
      en: "What road toll is paid in Germany?"
    },
    options: {
      ro: ["Nicio taxă", "Maut (taxă de drum bazată pe km și clase de emisii)", "Doar vignetă", "Taxă fixă"],
      de: ["Keine Gebühr", "Maut (kilometerbasierte Straßengebühr nach Emissionsklassen)", "Nur Vignette", "Fixgebühr"],
      en: ["No fee", "Maut (km-based road toll by emission classes)", "Only vignette", "Fixed fee"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Maut german se calculează pe km și depinde de greutate și clasa de emisii.",
      de: "Die deutsche Maut wird pro km berechnet und hängt von Gewicht und Emissionsklasse ab.",
      en: "German Maut is calculated per km and depends on weight and emission class."
    }
  },
  {
    question: {
      ro: "Ce sisteme de taxare rutieră există în Europa?",
      de: "Welche Straßenmautsysteme gibt es in Europa?",
      en: "What road toll systems exist in Europe?"
    },
    options: {
      ro: ["Doar viniete", "Viniete, taxe pe km, taxe de trecere punctuale", "Doar gratuit", "Sistem unic"],
      de: ["Nur Vignetten", "Vignetten, km-basierte Gebühren, punktuelle Mautgebühren", "Nur kostenlos", "Einheitliches System"],
      en: ["Only vignettes", "Vignettes, km-based tolls, point tolls", "Only free", "Single system"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Europa are diverse sisteme de taxare care trebuie gestionate pentru calculul costurilor.",
      de: "Europa hat verschiedene Mautsysteme die für die Kostenberechnung verwaltet werden müssen.",
      en: "Europe has various toll systems that must be managed for cost calculation."
    }
  },
  {
    question: {
      ro: "Ce este zona cu emisii scăzute (LEZ)?",
      de: "Was ist eine Umweltzone (LEZ)?",
      en: "What is a Low Emission Zone (LEZ)?"
    },
    options: {
      ro: ["Parcare gratuită", "Zonă urbană cu restricții pentru vehicule poluante", "Zonă industrială", "Zonă comercială"],
      de: ["Kostenloser Parkplatz", "Stadtgebiet mit Beschränkungen für umweltverschmutzende Fahrzeuge", "Industriegebiet", "Gewerbegebiet"],
      en: ["Free parking", "Urban area with restrictions for polluting vehicles", "Industrial zone", "Commercial zone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "LEZ-urile restricționează accesul vehiculelor cu emisii ridicate în centrele urbane.",
      de: "LEZ beschränken den Zugang von Fahrzeugen mit hohen Emissionen in Stadtzentren.",
      en: "LEZs restrict access of high-emission vehicles to urban centers."
    }
  },
  {
    question: {
      ro: "Ce țări au restricții de weekend pentru camioane?",
      de: "Welche Länder haben Wochenend-Fahrverbote für LKW?",
      en: "Which countries have weekend truck bans?"
    },
    options: {
      ro: ["Niciuna", "Germania, Austria, Franța, Italia și altele", "Doar Germania", "Doar Italia"],
      de: ["Keine", "Deutschland, Österreich, Frankreich, Italien und andere", "Nur Deutschland", "Nur Italien"],
      en: ["None", "Germany, Austria, France, Italy and others", "Only Germany", "Only Italy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Restricțiile de weekend afectează planificarea transporturilor și livrărilor.",
      de: "Wochenendverbote beeinflussen die Transport- und Lieferplanung.",
      en: "Weekend bans affect transport and delivery planning."
    }
  },
  {
    question: {
      ro: "Ce documente sunt necesare pentru UK post-Brexit?",
      de: "Welche Dokumente sind für UK nach dem Brexit erforderlich?",
      en: "What documents are required for UK post-Brexit?"
    },
    options: {
      ro: ["Doar CMR", "Declarații vamale, EORI UK, certificat de origine, licențe specifice", "Doar pașaport", "Nicio schimbare"],
      de: ["Nur CMR", "Zollanmeldungen, UK EORI, Ursprungszeugnis, spezifische Lizenzen", "Nur Reisepass", "Keine Änderung"],
      en: ["Only CMR", "Customs declarations, UK EORI, certificate of origin, specific licenses", "Only passport", "No change"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Brexit a adăugat cerințe vamale pentru transportul UE-UK.",
      de: "Brexit hat Zollanforderungen für EU-UK-Transport hinzugefügt.",
      en: "Brexit added customs requirements for EU-UK transport."
    }
  },
  {
    question: {
      ro: "Ce este Brenner Pass și de ce e important?",
      de: "Was ist der Brenner-Pass und warum ist er wichtig?",
      en: "What is Brenner Pass and why is it important?"
    },
    options: {
      ro: ["Port maritim", "Trecere alpină principală între Austria și Italia", "Aeroport", "Tunel sub mare"],
      de: ["Seehafen", "Wichtigste Alpenüberquerung zwischen Österreich und Italien", "Flughafen", "Unterseetunnel"],
      en: ["Seaport", "Main Alpine crossing between Austria and Italy", "Airport", "Undersea tunnel"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Brenner este vital pentru comerțul Nord-Sud european, dar are restricții.",
      de: "Der Brenner ist vital für den Nord-Süd-Handel Europas, hat aber Beschränkungen.",
      en: "Brenner is vital for European North-South trade, but has restrictions."
    }
  },
  {
    question: {
      ro: "Ce restricții speciale au țările nordice pentru transport?",
      de: "Welche besonderen Beschränkungen haben nordische Länder für den Transport?",
      en: "What special restrictions do Nordic countries have for transport?"
    },
    options: {
      ro: ["Nicio restricție", "Echipament de iarnă obligatoriu, restricții sezoniere", "Doar taxe mari", "Fără drumuri"],
      de: ["Keine Beschränkung", "Obligatorische Winterausrüstung, saisonale Beschränkungen", "Nur hohe Steuern", "Keine Straßen"],
      en: ["No restriction", "Mandatory winter equipment, seasonal restrictions", "Only high taxes", "No roads"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Condițiile de iarnă în Scandinavia necesită pregătire specială.",
      de: "Winterbedingungen in Skandinavien erfordern spezielle Vorbereitung.",
      en: "Winter conditions in Scandinavia require special preparation."
    }
  },
  {
    question: {
      ro: "Ce este Eurovinietă și unde se aplică?",
      de: "Was ist Eurovignette und wo gilt sie?",
      en: "What is Eurovignette and where does it apply?"
    },
    options: {
      ro: ["Taxă UE universală", "Sistem comun de vignietă în Benelux, Danemarca, Suedia", "Doar în Germania", "Doar în Franța"],
      de: ["Universelle EU-Steuer", "Gemeinsames Vignettensystem in Benelux, Dänemark, Schweden", "Nur in Deutschland", "Nur in Frankreich"],
      en: ["Universal EU tax", "Common vignette system in Benelux, Denmark, Sweden", "Only in Germany", "Only in France"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Eurovinietă permite plata unică pentru acces în mai multe țări partenere.",
      de: "Eurovignette ermöglicht einmalige Zahlung für Zugang zu mehreren Partnerländern.",
      en: "Eurovignette allows single payment for access to multiple partner countries."
    }
  },
  {
    question: {
      ro: "Ce sunt punctele de trecere TIR la frontieră?",
      de: "Was sind TIR-Grenzübergangsstellen?",
      en: "What are TIR border crossing points?"
    },
    options: {
      ro: ["Orice trecere", "Puncte autorizate pentru transporturi sub carnet TIR", "Doar porturi", "Doar aeroporturi"],
      de: ["Jeder Übergang", "Zugelassene Punkte für Transporte unter TIR-Carnet", "Nur Häfen", "Nur Flughäfen"],
      en: ["Any crossing", "Authorized points for transports under TIR carnet", "Only ports", "Only airports"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Carnetul TIR permite tranzit sigilat prin țări non-UE cu formalități reduse.",
      de: "Das TIR-Carnet ermöglicht versiegelten Transit durch Nicht-EU-Länder mit reduzierten Formalitäten.",
      en: "TIR carnet allows sealed transit through non-EU countries with reduced formalities."
    }
  },
  {
    question: {
      ro: "Ce zone economice speciale există în Europa de Est?",
      de: "Welche besonderen Wirtschaftszonen gibt es in Osteuropa?",
      en: "What special economic zones exist in Eastern Europe?"
    },
    options: {
      ro: ["Niciuna", "Zone libere, zone industriale cu facilități fiscale", "Doar în Vest", "Doar în Nord"],
      de: ["Keine", "Freizonen, Industriezonen mit Steuervergünstigungen", "Nur im Westen", "Nur im Norden"],
      en: ["None", "Free zones, industrial zones with tax benefits", "Only in West", "Only in North"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Zonele speciale oferă avantaje fiscale și vamale pentru activități logistice.",
      de: "Sonderzonen bieten Steuer- und Zollvorteile für Logistikaktivitäten.",
      en: "Special zones offer tax and customs advantages for logistics activities."
    }
  },
  {
    question: {
      ro: "Ce este coridorul Marea Neagră - Marea Baltică?",
      de: "Was ist der Schwarzes Meer - Ostsee-Korridor?",
      en: "What is the Black Sea - Baltic Sea corridor?"
    },
    options: {
      ro: ["Traseu turistic", "Coridor strategic de transport conectând sudul și nordul Europei de Est", "Traseu feroviar", "Cale navigabilă"],
      de: ["Touristische Route", "Strategischer Transportkorridor der Süd- und Nordosteuropa verbindet", "Schienenstrecke", "Wasserstraße"],
      en: ["Tourist route", "Strategic transport corridor connecting southern and northern Eastern Europe", "Railway route", "Waterway"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Acest coridor e esențial pentru comerțul între Europa de Est și piețele globale.",
      de: "Dieser Korridor ist wesentlich für den Handel zwischen Osteuropa und globalen Märkten.",
      en: "This corridor is essential for trade between Eastern Europe and global markets."
    }
  },
  {
    question: {
      ro: "Ce caracteristici au porturile Benelux?",
      de: "Was charakterisiert die Benelux-Häfen?",
      en: "What characterizes Benelux ports?"
    },
    options: {
      ro: ["Sunt mici", "Rotterdam, Antwerp - hub-uri majore cu conexiuni multimodale", "Sunt închise", "Sunt doar pentru pasageri"],
      de: ["Sind klein", "Rotterdam, Antwerpen - große Hubs mit multimodalen Verbindungen", "Sind geschlossen", "Nur für Passagiere"],
      en: ["Are small", "Rotterdam, Antwerp - major hubs with multimodal connections", "Are closed", "Only for passengers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rotterdam și Antwerp sunt dintre cele mai mari porturi europene pentru mărfuri.",
      de: "Rotterdam und Antwerpen gehören zu den größten europäischen Güterhäfen.",
      en: "Rotterdam and Antwerp are among the largest European cargo ports."
    }
  },
  {
    question: {
      ro: "Ce restricții au tunelurile alpine?",
      de: "Welche Beschränkungen haben Alpentunnel?",
      en: "What restrictions do Alpine tunnels have?"
    },
    options: {
      ro: ["Niciuna", "Limite de greutate, dimensiuni, mărfuri periculoase, rezervări obligatorii", "Doar viteză", "Doar orar"],
      de: ["Keine", "Gewichts-, Größen-, Gefahrgutbeschränkungen, obligatorische Reservierungen", "Nur Geschwindigkeit", "Nur Zeitplan"],
      en: ["None", "Weight, dimension, dangerous goods limits, mandatory reservations", "Only speed", "Only schedule"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tunelurile alpine au reguli stricte pentru siguranță și fluidizarea traficului.",
      de: "Alpentunnel haben strenge Regeln für Sicherheit und Verkehrsfluss.",
      en: "Alpine tunnels have strict rules for safety and traffic flow."
    }
  },
  {
    question: {
      ro: "Ce este autostrada digitală a transporturilor?",
      de: "Was ist die digitale Transportautobahn?",
      en: "What is the digital transport highway?"
    },
    options: {
      ro: ["Drum virtual", "Conceptul de informatizare completă a coridoarelor de transport", "Drum pentru mașini electrice", "Drum autonom"],
      de: ["Virtuelle Straße", "Konzept der vollständigen Informatisierung von Transportkorridoren", "Straße für Elektroautos", "Autonome Straße"],
      en: ["Virtual road", "Concept of complete informatization of transport corridors", "Road for electric cars", "Autonomous road"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Digitalizarea coridoarelor îmbunătățește eficiența și trasabilitatea transporturilor.",
      de: "Digitalisierung der Korridore verbessert Effizienz und Rückverfolgbarkeit von Transporten.",
      en: "Digitalization of corridors improves efficiency and traceability of transports."
    }
  },
  {
    question: {
      ro: "Ce specifică transportul pentru Balcani?",
      de: "Was ist spezifisch für den Balkantransport?",
      en: "What is specific for Balkan transport?"
    },
    options: {
      ro: ["Doar autostrăzi", "Infrastructură variabilă, proceduri vamale complexe, necesitate de experiență locală", "Foarte simplu", "Fără vămi"],
      de: ["Nur Autobahnen", "Variable Infrastruktur, komplexe Zollverfahren, Notwendigkeit lokaler Erfahrung", "Sehr einfach", "Keine Zölle"],
      en: ["Only highways", "Variable infrastructure, complex customs procedures, need for local experience", "Very simple", "No customs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Balcanii necesită planificare atentă și parteneri locali de încredere.",
      de: "Der Balkan erfordert sorgfältige Planung und zuverlässige lokale Partner.",
      en: "Balkans require careful planning and reliable local partners."
    }
  },
  {
    question: {
      ro: "Ce este zona franco-germană?",
      de: "Was ist die deutsch-französische Zone?",
      en: "What is the Franco-German zone?"
    },
    options: {
      ro: ["Zonă de conflict", "Spațiu economic integrat cu volume mari de transport între cele două țări", "Zonă turistică", "Zonă agricolă"],
      de: ["Konfliktzone", "Integrierter Wirtschaftsraum mit hohem Transportvolumen zwischen beiden Ländern", "Touristenzone", "Agrarzone"],
      en: ["Conflict zone", "Integrated economic space with high transport volumes between both countries", "Tourist zone", "Agricultural zone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Axa Franco-Germană este una dintre cele mai active pentru transport în Europa.",
      de: "Die deutsch-französische Achse ist eine der aktivsten für Transport in Europa.",
      en: "Franco-German axis is one of the most active for transport in Europe."
    }
  },
  {
    question: {
      ro: "Ce treceri sunt disponibile pentru Turcia?",
      de: "Welche Übergänge sind für die Türkei verfügbar?",
      en: "What crossings are available for Turkey?"
    },
    options: {
      ro: ["Doar aeriene", "Kapikule (Bulgaria-Turcia), ferry-uri Ro-Ro, tranzit prin Georgia", "Doar maritime", "Niciuna"],
      de: ["Nur Luft", "Kapikule (Bulgarien-Türkei), Ro-Ro-Fähren, Transit durch Georgien", "Nur See", "Keine"],
      en: ["Only air", "Kapikule (Bulgaria-Turkey), Ro-Ro ferries, transit through Georgia", "Only sea", "None"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Accesul în Turcia se face prin mai multe rute, fiecare cu avantaje și dezavantaje.",
      de: "Der Zugang zur Türkei erfolgt über mehrere Routen, jede mit Vor- und Nachteilen.",
      en: "Access to Turkey is through multiple routes, each with advantages and disadvantages."
    }
  },
  {
    question: {
      ro: "Ce sunt acordurile bilaterale de transport?",
      de: "Was sind bilaterale Transportabkommen?",
      en: "What are bilateral transport agreements?"
    },
    options: {
      ro: ["Acorduri turistice", "Înțelegeri între țări pentru reglementarea transportului rutier reciproc", "Acorduri comerciale", "Acorduri culturale"],
      de: ["Tourismusabkommen", "Vereinbarungen zwischen Ländern zur Regelung des gegenseitigen Straßentransports", "Handelsabkommen", "Kulturabkommen"],
      en: ["Tourism agreements", "Agreements between countries regulating mutual road transport", "Trade agreements", "Cultural agreements"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Acordurile bilaterale stabilesc cotele de autorizații și condițiile de operare.",
      de: "Bilaterale Abkommen legen Genehmigungskontingente und Betriebsbedingungen fest.",
      en: "Bilateral agreements establish authorization quotas and operating conditions."
    }
  },
  {
    question: {
      ro: "Ce este zona adriatică pentru transport?",
      de: "Was ist die adriatische Zone für den Transport?",
      en: "What is the Adriatic zone for transport?"
    },
    options: {
      ro: ["Doar plaje", "Coridor alternativ pentru acces în Grecia și Turcia prin ferry", "Zonă închisă", "Doar pescuit"],
      de: ["Nur Strände", "Alternativer Korridor für Zugang nach Griechenland und Türkei per Fähre", "Geschlossene Zone", "Nur Fischerei"],
      en: ["Only beaches", "Alternative corridor for access to Greece and Turkey by ferry", "Closed zone", "Only fishing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ferry-urile adriatice oferă alternative la tranzitul rutier prin Balcani.",
      de: "Adriatische Fähren bieten Alternativen zum Straßentransit durch den Balkan.",
      en: "Adriatic ferries offer alternatives to road transit through Balkans."
    }
  },
  {
    question: {
      ro: "Ce monitorizezi pentru actualizări în transportul european?",
      de: "Was überwachen Sie für Aktualisierungen im europäischen Transport?",
      en: "What do you monitor for updates in European transport?"
    },
    options: {
      ro: ["Nimic", "Reglementări UE, taxe de drum, restricții trafic, condiții meteo", "Doar știrile", "Doar prețurile"],
      de: ["Nichts", "EU-Vorschriften, Straßengebühren, Verkehrsbeschränkungen, Wetterbedingungen", "Nur Nachrichten", "Nur Preise"],
      en: ["Nothing", "EU regulations, road tolls, traffic restrictions, weather conditions", "Only news", "Only prices"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Monitorizarea continuă previne surprizele și permite adaptarea operațiunilor.",
      de: "Kontinuierliche Überwachung verhindert Überraschungen und ermöglicht Betriebsanpassungen.",
      en: "Continuous monitoring prevents surprises and enables operations adaptation."
    }
  },
  {
    question: {
      ro: "Ce este Green Deal european și cum afectează transportul?",
      de: "Was ist der European Green Deal und wie beeinflusst er den Transport?",
      en: "What is the European Green Deal and how does it affect transport?"
    },
    options: {
      ro: ["Program turistic", "Strategie de reducere emisii cu impact asupra vehiculelor și combustibililor", "Program agricol", "Program educațional"],
      de: ["Tourismusprogramm", "Strategie zur Emissionsreduzierung mit Auswirkungen auf Fahrzeuge und Kraftstoffe", "Agrarprogramm", "Bildungsprogramm"],
      en: ["Tourism program", "Emission reduction strategy with impact on vehicles and fuels", "Agricultural program", "Educational program"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Green Deal va transforma cerințele pentru flota de transport în următorii ani.",
      de: "Der Green Deal wird die Anforderungen an die Transportflotte in den kommenden Jahren transformieren.",
      en: "Green Deal will transform fleet requirements in the coming years."
    }
  },
  {
    question: {
      ro: "Ce hub-uri logistice sunt importante în Europa Centrală?",
      de: "Welche Logistik-Hubs sind in Mitteleuropa wichtig?",
      en: "What logistics hubs are important in Central Europe?"
    },
    options: {
      ro: ["Niciuna", "Viena, Budapesta, Praga, Varșovia - puncte strategice de distribuție", "Doar Paris", "Doar Londra"],
      de: ["Keine", "Wien, Budapest, Prag, Warschau - strategische Verteilpunkte", "Nur Paris", "Nur London"],
      en: ["None", "Vienna, Budapest, Prague, Warsaw - strategic distribution points", "Only Paris", "Only London"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Europa Centrală oferă poziție strategică pentru distribuția Est-Vest.",
      de: "Mitteleuropa bietet strategische Position für Ost-West-Verteilung.",
      en: "Central Europe offers strategic position for East-West distribution."
    }
  },
  {
    question: {
      ro: "Ce caracteristici are transportul în Peninsula Iberică?",
      de: "Was charakterisiert den Transport auf der Iberischen Halbinsel?",
      en: "What characterizes transport in the Iberian Peninsula?"
    },
    options: {
      ro: ["Foarte simplu", "Poziție periferică, traversare Pirinei, conexiuni maritime importante", "Fără autostrăzi", "Fără porturi"],
      de: ["Sehr einfach", "Periphere Lage, Pyrenäenüberquerung, wichtige Seeverbindungen", "Keine Autobahnen", "Keine Häfen"],
      en: ["Very simple", "Peripheral position, Pyrenees crossing, important maritime connections", "No highways", "No ports"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Spania și Portugalia necesită planificare pentru traversarea munților și distanțele mari.",
      de: "Spanien und Portugal erfordern Planung für Gebirgsüberquerung und große Entfernungen.",
      en: "Spain and Portugal require planning for mountain crossing and long distances."
    }
  }
];
