import { QuizQuestion } from '../quizData';

export const europeanCountriesQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Care este limita de greutate maximă pentru camioane în Germania?",
    options: ["40t", "44t", "38t", "42t"],
    correctIndex: 0,
    explanation: {
      ro: "Germania permite maximum 40t pentru majoritatea transporturilor, cu excepții pentru intermodal.",
      de: "Deutschland erlaubt maximal 40t für die meisten Transporte, mit Ausnahmen für intermodal.",
      en: "Germany allows maximum 40t for most transports, with exceptions for intermodal."
    }
  },
  {
    question: "Ce taxă de drum este obligatorie în Germania pentru camioane peste 7.5t?",
    options: ["Vigneta", "Maut (taxa pe km)", "Taxa anuală", "Nu există taxă"],
    correctIndex: 1,
    explanation: {
      ro: "Germania folosește sistemul Maut - taxă pe kilometru calculată electronic prin Toll Collect.",
      de: "Deutschland verwendet das Maut-System - elektronisch berechnete Kilometerabgabe über Toll Collect.",
      en: "Germany uses the Maut system - electronically calculated kilometer fee via Toll Collect."
    }
  },
  {
    question: "Care sunt restricțiile de weekend în Franța pentru camioane?",
    options: ["Nu există restricții", "Sâmbătă 7-22h și duminică toată ziua", "Doar duminică după-amiază", "Doar noaptea"],
    correctIndex: 1,
    explanation: {
      ro: "Franța restricționează circulația camioanelor sâmbăta și duminica, cu variații sezoniere.",
      de: "Frankreich beschränkt den LKW-Verkehr samstags und sonntags, mit saisonalen Variationen.",
      en: "France restricts truck traffic on Saturdays and Sundays, with seasonal variations."
    }
  },
  {
    question: "Ce document special necesită transportul în Elveția?",
    options: ["Doar CMR", "LSVA + 40t permitere specială", "Nimic special", "Doar pașaport"],
    correctIndex: 1,
    explanation: {
      ro: "Elveția necesită taxa LSVA și permis special pentru vehicule peste limitele standard.",
      de: "Die Schweiz verlangt LSVA-Gebühr und Sondergenehmigung für Fahrzeuge über Standardgrenzen.",
      en: "Switzerland requires LSVA fee and special permit for vehicles above standard limits."
    }
  },
  {
    question: "Care țară are cel mai strict control la frontieră post-Brexit?",
    options: ["Franța", "Germania", "Marea Britanie", "Polonia"],
    correctIndex: 2,
    explanation: {
      ro: "Marea Britanie are cele mai stricte controale vamale și de frontieră post-Brexit.",
      de: "Großbritannien hat nach dem Brexit die strengsten Zoll- und Grenzkontrollen.",
      en: "The UK has the strictest customs and border controls post-Brexit."
    }
  },
  {
    question: "Ce înseamnă VECTO în contextul UE?",
    options: ["Un tip de vehicul", "Instrument pentru calculul emisiilor CO2 al vehiculelor", "O taxă de drum", "Un standard de calitate"],
    correctIndex: 1,
    explanation: {
      ro: "VECTO este instrumentul UE pentru calculul emisiilor CO2 ale vehiculelor grele.",
      de: "VECTO ist das EU-Instrument zur Berechnung der CO2-Emissionen schwerer Fahrzeuge.",
      en: "VECTO is the EU tool for calculating CO2 emissions of heavy vehicles."
    }
  },
  {
    question: "Care este coridorul de transport principal între Italia și Germania?",
    options: ["Trafic maritim", "Pasul Brenner", "Tunelul Mont Blanc", "Avion cargo"],
    correctIndex: 1,
    explanation: {
      ro: "Pasul Brenner este coridorul principal de transport rutier între Italia și Germania.",
      de: "Der Brennerpass ist der wichtigste Straßentransportkorridor zwischen Italien und Deutschland.",
      en: "The Brenner Pass is the main road transport corridor between Italy and Germany."
    }
  },
  {
    question: "Ce restricție specială are Austria pentru camioane?",
    options: ["Nu există restricții", "Interdicție de noapte pe autostrada Inntal", "Doar la sfârșit de săptămână", "Taxa foarte mică"],
    correctIndex: 1,
    explanation: {
      ro: "Austria are interdicție de noapte pentru camioane pe autostrada Inntal și restricții sectoriale.",
      de: "Österreich hat ein Nachtfahrverbot für LKW auf der Inntalautobahn und sektorale Beschränkungen.",
      en: "Austria has a night driving ban for trucks on Inntal motorway and sectoral restrictions."
    }
  },
  {
    question: "Ce sistem de taxare folosește Belgia?",
    options: ["Vigneta anuală", "Viapass - taxa pe km", "Fără taxă", "Taxa fixă pe zi"],
    correctIndex: 1,
    explanation: {
      ro: "Belgia folosește Viapass, un sistem de taxare pe kilometru similar cu Germania.",
      de: "Belgien verwendet Viapass, ein kilometerbasiertes Mautsystem ähnlich wie Deutschland.",
      en: "Belgium uses Viapass, a kilometer-based toll system similar to Germany."
    }
  },
  {
    question: "Care țară nordică permite cele mai grele transporturi (până la 76t)?",
    options: ["Norvegia", "Suedia și Finlanda", "Danemarca", "Islanda"],
    correctIndex: 1,
    explanation: {
      ro: "Suedia și Finlanda permit transporturi de până la 76t pe anumite drumuri.",
      de: "Schweden und Finnland erlauben Transporte bis 76t auf bestimmten Straßen.",
      en: "Sweden and Finland allow transports up to 76t on certain roads."
    }
  },
  // German Questions (11-20)
  {
    question: "Welche Besonderheit gilt für den Transit durch die Schweiz?",
    options: ["Keine Besonderheiten", "40t-Limit und LSVA-Gebühr (Schwerverkehrsabgabe)", "Gleiche Regeln wie EU", "Nur Euro 6 erlaubt"],
    correctIndex: 1,
    explanation: {
      ro: "Elveția impune limita de 40t și taxa LSVA pentru vehicule grele în tranzit.",
      de: "Die Schweiz hat ein 40t-Limit und erhebt die LSVA-Gebühr für schwere Fahrzeuge im Transit.",
      en: "Switzerland imposes a 40t limit and LSVA fee for heavy vehicles in transit."
    }
  },
  {
    question: "Wie funktioniert die Maut in Tschechien?",
    options: ["Vignette", "Myto - elektronisches Mautsystem", "Keine Maut", "Bargeld an Mautstellen"],
    correctIndex: 1,
    explanation: {
      ro: "Cehia folosește sistemul electronic Myto pentru taxarea pe km a vehiculelor grele.",
      de: "Tschechien verwendet das elektronische Myto-System für die km-basierte Maut schwerer Fahrzeuge.",
      en: "Czech Republic uses the electronic Myto system for km-based toll of heavy vehicles."
    }
  },
  {
    question: "Welche Länder bilden die Benelux-Region?",
    options: ["Belgien, Niederlande, Luxemburg", "Belgien, Frankreich, Deutschland", "Niederlande, Deutschland, Dänemark", "Luxemburg, Frankreich, Schweiz"],
    correctIndex: 0,
    explanation: {
      ro: "Benelux include Belgia, Țările de Jos și Luxemburg - o regiune cu reguli armonizate.",
      de: "Benelux umfasst Belgien, Niederlande und Luxemburg - eine Region mit harmonisierten Regeln.",
      en: "Benelux includes Belgium, Netherlands and Luxembourg - a region with harmonized rules."
    }
  },
  {
    question: "Was sind die Hauptverkehrsprobleme in den Alpenländern?",
    options: ["Zu viel Sonne", "Bergpässe, Tunnel, Wetterbedingungen, sektorale Fahrverbote", "Zu wenig Verkehr", "Keine Probleme"],
    correctIndex: 1,
    explanation: {
      ro: "Țările alpine au provocări legate de pase, tuneluri, condiții meteo și restricții sectoriale.",
      de: "Alpenländer haben Herausforderungen durch Pässe, Tunnel, Wetter und sektorale Fahrverbote.",
      en: "Alpine countries face challenges from passes, tunnels, weather and sectoral driving bans."
    }
  },
  {
    question: "Welche Besonderheit gilt für Spanien bei Sommertransporten?",
    options: ["Keine Besonderheit", "Hitzebedingte Einschränkungen für bestimmte Güter", "Mehr Verkehr erlaubt", "Niedrigere Maut"],
    correctIndex: 1,
    explanation: {
      ro: "Spania impune restricții estivale pentru transportul anumitor mărfuri din cauza căldurii.",
      de: "Spanien hat sommerliche Einschränkungen für den Transport bestimmter Güter wegen der Hitze.",
      en: "Spain imposes summer restrictions for transporting certain goods due to heat."
    }
  },
  {
    question: "Was ist das E-Road-Netzwerk?",
    options: ["Elektrostraßen", "Europäische Hauptverkehrsrouten mit E-Nummern", "Eisenbahnstrecken", "Elektronische Mautstraßen"],
    correctIndex: 1,
    explanation: {
      ro: "Rețeaua E-Road este sistemul european de drumuri principale identificate prin numere E.",
      de: "Das E-Road-Netzwerk ist das europäische System von Hauptstraßen mit E-Nummern.",
      en: "The E-Road network is the European system of main roads identified by E numbers."
    }
  },
  {
    question: "Welche Dokumente sind für Italien-Transporte besonders wichtig?",
    options: ["Nur CMR", "CMR, Arbeitsnachweis, ggf. Scheda di Trasporto", "Nur Führerschein", "Keine besonderen Dokumente"],
    correctIndex: 1,
    explanation: {
      ro: "Italia poate cere documente suplimentare precum Scheda di Trasporto pentru anumite transporturi.",
      de: "Italien kann zusätzliche Dokumente wie Scheda di Trasporto für bestimmte Transporte verlangen.",
      en: "Italy may require additional documents like Scheda di Trasporto for certain transports."
    }
  },
  {
    question: "Was ist beim Transport nach Polen zu beachten?",
    options: ["Keine Besonderheiten", "e-TOLL-System, Kabotage-Regeln, Winterausrüstung", "Gleiche Regeln wie Deutschland", "Keine Maut"],
    correctIndex: 1,
    explanation: {
      ro: "Polonia are sistemul e-TOLL, reguli stricte de cabotaj și cerințe de echipament de iarnă.",
      de: "Polen hat das e-TOLL-System, strenge Kabotageregeln und Winterausrüstungsanforderungen.",
      en: "Poland has the e-TOLL system, strict cabotage rules and winter equipment requirements."
    }
  },
  {
    question: "Welche Länder haben strenge ADR-Tunnel-Kategorien?",
    options: ["Keine", "Frankreich, Italien, Schweiz, Österreich", "Nur Deutschland", "Nur Skandinavien"],
    correctIndex: 1,
    explanation: {
      ro: "Țările alpine au categorii stricte de tuneluri ADR care restricționează mărfurile periculoase.",
      de: "Alpenländer haben strenge ADR-Tunnelkategorien, die gefährliche Güter einschränken.",
      en: "Alpine countries have strict ADR tunnel categories restricting dangerous goods."
    }
  },
  {
    question: "Was sind die Kabotage-Regeln in der EU?",
    options: ["Unbegrenzte Transporte erlaubt", "Max. 3 Transporte in 7 Tagen nach internationalem Transport", "Keine Kabotage erlaubt", "Nur für EU-Spediteure"],
    correctIndex: 1,
    explanation: {
      ro: "UE permite maximum 3 operațiuni de cabotaj în 7 zile după un transport internațional.",
      de: "Die EU erlaubt maximal 3 Kabotagefahrten in 7 Tagen nach einem internationalen Transport.",
      en: "The EU allows maximum 3 cabotage operations in 7 days after an international transport."
    }
  },
  // English Questions (21-30)
  {
    question: "What is the HGV levy in the UK?",
    options: ["A road tax for heavy goods vehicles operating in the UK", "A parking fee", "A customs duty", "An environmental tax only"],
    correctIndex: 0,
    explanation: {
      ro: "HGV levy este o taxă rutieră pentru vehiculele grele care operează în Marea Britanie.",
      de: "Die HGV-Abgabe ist eine Straßengebühr für schwere Fahrzeuge, die in Großbritannien fahren.",
      en: "HGV levy is a road tax for heavy goods vehicles operating in the UK."
    }
  },
  {
    question: "Which country has the most complex posting requirements?",
    options: ["Germany", "France with mandatory declarations via SIPSI", "UK", "Poland"],
    correctIndex: 1,
    explanation: {
      ro: "Franța are cele mai complexe cerințe de detașare, necesitând declarații prin sistemul SIPSI.",
      de: "Frankreich hat die komplexesten Posting-Anforderungen mit Pflichtmeldungen über SIPSI.",
      en: "France has the most complex posting requirements, requiring declarations via SIPSI system."
    }
  },
  {
    question: "What is the Eurovignette?",
    options: ["A European visa", "A joint road user charge for certain countries", "A currency", "A driving license"],
    correctIndex: 1,
    explanation: {
      ro: "Eurovigneta este o taxă de utilizare a drumurilor comună pentru anumite țări europene.",
      de: "Die Eurovignette ist eine gemeinsame Straßenbenutzungsgebühr für bestimmte europäische Länder.",
      en: "The Eurovignette is a joint road user charge for certain European countries."
    }
  },
  {
    question: "What challenges exist for UK-EU transport post-Brexit?",
    options: ["No challenges", "Customs declarations, health certificates, driving permits", "Only visa requirements", "Just longer routes"],
    correctIndex: 1,
    explanation: {
      ro: "Post-Brexit, transportul UK-UE necesită declarații vamale, certificate sanitare și permise.",
      de: "Nach dem Brexit erfordert UK-EU-Transport Zollerklärungen, Gesundheitszeugnisse und Genehmigungen.",
      en: "Post-Brexit, UK-EU transport requires customs declarations, health certificates and permits."
    }
  },
  {
    question: "What is the Green Card system?",
    options: ["An environmental permit", "International motor insurance proof recognized across borders", "A visa for drivers", "A toll card"],
    correctIndex: 1,
    explanation: {
      ro: "Cartea Verde este dovada asigurării auto internaționale recunoscută la frontiere.",
      de: "Die Grüne Karte ist der Nachweis einer internationalen Kfz-Versicherung, die an Grenzen anerkannt wird.",
      en: "The Green Card is proof of international motor insurance recognized at borders."
    }
  },
  {
    question: "Which Scandinavian countries allow the longest combinations?",
    options: ["Only Norway", "Sweden and Finland up to 25.25m", "Denmark only", "All equally"],
    correctIndex: 1,
    explanation: {
      ro: "Suedia și Finlanda permit combinații de vehicule de până la 25.25m lungime.",
      de: "Schweden und Finnland erlauben Fahrzeugkombinationen bis zu 25,25m Länge.",
      en: "Sweden and Finland allow vehicle combinations up to 25.25m in length."
    }
  },
  {
    question: "What is required for transport through the Mont Blanc tunnel?",
    options: ["Nothing special", "Pre-registration, safety equipment, ADR restrictions", "Only payment", "Just a valid license"],
    correctIndex: 1,
    explanation: {
      ro: "Tunelul Mont Blanc necesită preînregistrare, echipament de siguranță și respectă restricții ADR.",
      de: "Der Mont-Blanc-Tunnel erfordert Voranmeldung, Sicherheitsausrüstung und ADR-Beschränkungen.",
      en: "Mont Blanc tunnel requires pre-registration, safety equipment and ADR restrictions."
    }
  },
  {
    question: "What is the ECMT permit?",
    options: ["A European currency", "A permit for road transport between ECMT member countries", "An environmental certificate", "A driver training permit"],
    correctIndex: 1,
    explanation: {
      ro: "Permisul ECMT permite transportul rutier între țările membre ale Conferinței Europene a Miniștrilor Transporturilor.",
      de: "Die ECMT-Genehmigung erlaubt Straßentransport zwischen ECMT-Mitgliedsländern.",
      en: "The ECMT permit allows road transport between ECMT member countries."
    }
  },
  {
    question: "Which countries share the Via Carpatia corridor?",
    options: ["Western European countries", "Lithuania, Poland, Slovakia, Hungary, Romania, Bulgaria, Greece", "Only Scandinavian countries", "UK and Ireland"],
    correctIndex: 1,
    explanation: {
      ro: "Via Carpatia conectează Lituania, Polonia, Slovacia, Ungaria, România, Bulgaria și Grecia.",
      de: "Via Carpatia verbindet Litauen, Polen, Slowakei, Ungarn, Rumänien, Bulgarien und Griechenland.",
      en: "Via Carpatia connects Lithuania, Poland, Slovakia, Hungary, Romania, Bulgaria and Greece."
    }
  },
  {
    question: "What is the main difference in transport regulations between Southern and Northern Europe?",
    options: ["No difference", "Southern Europe: more heat restrictions, Northern: more winter equipment requirements", "Northern Europe is stricter overall", "Southern Europe has no regulations"],
    correctIndex: 1,
    explanation: {
      ro: "Europa de Sud are restricții de căldură, cea de Nord are cerințe de echipament de iarnă.",
      de: "Südeuropa hat Hitzebeschränkungen, Nordeuropa hat Winterausrüstungsanforderungen.",
      en: "Southern Europe has heat restrictions, Northern Europe has winter equipment requirements."
    }
  }
];
