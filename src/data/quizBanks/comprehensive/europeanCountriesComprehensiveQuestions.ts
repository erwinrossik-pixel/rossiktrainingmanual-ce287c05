import { TranslatedQuizQuestion } from '../../quizTranslations';

export const europeanCountriesComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt cele mai mari piețe de transport rutier de marfă din UE?",
      de: "Was sind die größten Straßengüterverkehrsmärkte in der EU?",
      en: "What are the largest road freight markets in the EU?"
    },
    options: {
      ro: ["România, Bulgaria, Grecia", "Germania, Franța, Polonia, Spania, Italia", "Portugalia, Irlanda, Danemarca", "Luxemburg, Malta, Cipru"],
      de: ["Rumänien, Bulgarien, Griechenland", "Deutschland, Frankreich, Polen, Spanien, Italien", "Portugal, Irland, Dänemark", "Luxemburg, Malta, Zypern"],
      en: ["Romania, Bulgaria, Greece", "Germany, France, Poland, Spain, Italy", "Portugal, Ireland, Denmark", "Luxembourg, Malta, Cyprus"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Germania, Franța, Polonia, Spania și Italia reprezintă cele mai mari piețe de transport rutier din UE.",
      de: "Deutschland, Frankreich, Polen, Spanien und Italien sind die größten Straßentransportmärkte der EU.",
      en: "Germany, France, Poland, Spain and Italy represent the largest road transport markets in the EU."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce monedă folosește Polonia pentru plăți în transport?",
      de: "Welche Währung verwendet Polen für Transportzahlungen?",
      en: "What currency does Poland use for transport payments?"
    },
    options: {
      ro: ["Euro", "Zlot polonez (PLN)", "Dolar", "Coroană"],
      de: ["Euro", "Polnischer Zloty (PLN)", "Dollar", "Krone"],
      en: ["Euro", "Polish Zloty (PLN)", "Dollar", "Crown"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Polonia folosește zlotul polonez (PLN), nu euro. Important pentru facturare și plăți.",
      de: "Polen verwendet den Polnischen Zloty (PLN), nicht Euro. Wichtig für Rechnungsstellung und Zahlungen.",
      en: "Poland uses Polish Zloty (PLN), not Euro. Important for invoicing and payments."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt principalele porturi maritime pentru transport containere în Europa?",
      de: "Was sind die wichtigsten Seehäfen für Containertransport in Europa?",
      en: "What are the main maritime ports for container transport in Europe?"
    },
    options: {
      ro: ["Doar Rotterdam", "Rotterdam, Antwerp, Hamburg, Bremerhaven, Valencia, Piraeus", "Doar Hamburg", "Doar Constanța"],
      de: ["Nur Rotterdam", "Rotterdam, Antwerpen, Hamburg, Bremerhaven, Valencia, Piräus", "Nur Hamburg", "Nur Konstanza"],
      en: ["Only Rotterdam", "Rotterdam, Antwerp, Hamburg, Bremerhaven, Valencia, Piraeus", "Only Hamburg", "Only Constanta"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Principalele porturi: Rotterdam (#1), Antwerp (#2), Hamburg, Bremerhaven, Valencia, Piraeus.",
      de: "Haupthäfen: Rotterdam (#1), Antwerpen (#2), Hamburg, Bremerhaven, Valencia, Piräus.",
      en: "Main ports: Rotterdam (#1), Antwerp (#2), Hamburg, Bremerhaven, Valencia, Piraeus."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce limbă de lucru este cel mai frecvent folosită în transportul internațional european?",
      de: "Welche Arbeitssprache wird im europäischen internationalen Transport am häufigsten verwendet?",
      en: "What working language is most commonly used in European international transport?"
    },
    options: {
      ro: ["Franceză", "Engleză", "Germană", "Spaniolă"],
      de: ["Französisch", "Englisch", "Deutsch", "Spanisch"],
      en: ["French", "English", "German", "Spanish"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Engleza este limba de lucru standard în transportul internațional, urmată de germană în Europa Centrală.",
      de: "Englisch ist die Standard-Arbeitssprache im internationalen Transport, gefolgt von Deutsch in Mitteleuropa.",
      en: "English is the standard working language in international transport, followed by German in Central Europe."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport RO-ES via FR. Șoferul nu vorbește franceză. Ce documente și pregătire sunt esențiale?",
      de: "Transport RO-ES via FR. Fahrer spricht kein Französisch. Welche Dokumente und Vorbereitung sind wesentlich?",
      en: "Transport RO-ES via FR. Driver doesn't speak French. What documents and preparation are essential?"
    },
    options: {
      ro: ["Nimic special", "CMR în EN/FR, Crit'Air, adrese în GPS, numere urgență, fraze de bază FR", "Doar pașaport", "Doar CMR"],
      de: ["Nichts Besonderes", "CMR in EN/FR, Crit'Air, GPS-Adressen, Notfallnummern, FR-Grundphrasen", "Nur Reisepass", "Nur CMR"],
      en: ["Nothing special", "CMR in EN/FR, Crit'Air, GPS addresses, emergency numbers, basic FR phrases", "Only passport", "Only CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pregătire esențială: documente multilingve, ecusoane de mediu, adrese pregătite, contacte urgență, fraze de bază.",
      de: "Wesentliche Vorbereitung: mehrsprachige Dokumente, Umweltplaketten, vorbereitete Adressen, Notfallkontakte, Grundphrasen.",
      en: "Essential preparation: multilingual documents, environmental stickers, prepared addresses, emergency contacts, basic phrases."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care țări UE au taxe de drum bazate pe distanță (nu vignetă)?",
      de: "Welche EU-Länder haben entfernungsbasierte Maut (keine Vignette)?",
      en: "Which EU countries have distance-based road tolls (not vignette)?"
    },
    options: {
      ro: ["Niciuna", "Germania, Austria, Franța, Italia, Spania, Portugalia, Polonia", "Doar Germania", "Toate"],
      de: ["Keine", "Deutschland, Österreich, Frankreich, Italien, Spanien, Portugal, Polen", "Nur Deutschland", "Alle"],
      en: ["None", "Germany, Austria, France, Italy, Spain, Portugal, Poland", "Only Germany", "All"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Taxe pe distanță: DE (Toll Collect), AT (GO-Box), FR/IT/ES/PT (telepass), PL (viaTOLL).",
      de: "Entfernungsbasierte Maut: DE (Toll Collect), AT (GO-Box), FR/IT/ES/PT (Telepass), PL (viaTOLL).",
      en: "Distance-based toll: DE (Toll Collect), AT (GO-Box), FR/IT/ES/PT (telepass), PL (viaTOLL)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce țări scandinave au cele mai înalte limite de greutate pentru camioane?",
      de: "Welche skandinavischen Länder haben die höchsten Gewichtsgrenzen für LKW?",
      en: "Which Scandinavian countries have the highest weight limits for trucks?"
    },
    options: {
      ro: ["Danemarca", "Suedia (60t) și Finlanda (76t)", "Norvegia", "Islanda"],
      de: ["Dänemark", "Schweden (60t) und Finnland (76t)", "Norwegen", "Island"],
      en: ["Denmark", "Sweden (60t) and Finland (76t)", "Norway", "Iceland"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Suedia permite 60t, Finlanda 76t pentru ansambluri modulare (EMS/HCT).",
      de: "Schweden erlaubt 60t, Finnland 76t für modulare Kombinationen (EMS/HCT).",
      en: "Sweden allows 60t, Finland 76t for modular combinations (EMS/HCT)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client solicită transport regulat DE-UK post-Brexit. Ce documente și proceduri noi sunt necesare?",
      de: "Kunde fordert regelmäßigen Transport DE-UK nach Brexit. Welche neuen Dokumente und Verfahren sind erforderlich?",
      en: "Client requests regular transport DE-UK post-Brexit. What new documents and procedures are needed?"
    },
    options: {
      ro: ["Nimic schimbat", "Declarații vamale export/import, GMR, controale sanitare pentru alimente, EORI UK", "Doar CMR", "Doar viză"],
      de: ["Nichts geändert", "Zollexport-/Importerklärungen, GMR, Gesundheitskontrollen für Lebensmittel, EORI UK", "Nur CMR", "Nur Visum"],
      en: ["Nothing changed", "Customs export/import declarations, GMR, health checks for food, EORI UK", "Only CMR", "Only visa"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Post-Brexit: vamă obligatorie, GMR pentru ferry, controale SPS pentru alimente, EORI UK separat.",
      de: "Nach Brexit: Zoll Pflicht, GMR für Fähre, SPS-Kontrollen für Lebensmittel, separater EORI UK.",
      en: "Post-Brexit: customs mandatory, GMR for ferry, SPS checks for food, separate EORI UK."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt principalele coridoare de transport Est-Vest în Europa?",
      de: "Was sind die Haupttransportkorridore Ost-West in Europa?",
      en: "What are the main East-West transport corridors in Europe?"
    },
    options: {
      ro: ["Nu există coridoare definite", "Coridorul Baltic-Adriatic, Orient-Est Med, Rin-Dunăre", "Doar Dunărea", "Doar autostrăzi"],
      de: ["Keine definierten Korridore", "Baltisch-Adriatischer Korridor, Orient-Östliches Mittelmeer, Rhein-Donau", "Nur Donau", "Nur Autobahnen"],
      en: ["No defined corridors", "Baltic-Adriatic Corridor, Orient-East Med, Rhine-Danube", "Only Danube", "Only motorways"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Coridoare TEN-T principale: Baltic-Adriatic, Orient-Est Med (inclusiv RO), Rin-Dunăre.",
      de: "Haupt-TEN-T-Korridore: Baltisch-Adriatisch, Orient-Östliches Mittelmeer (inkl. RO), Rhein-Donau.",
      en: "Main TEN-T corridors: Baltic-Adriatic, Orient-East Med (incl. RO), Rhine-Danube."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este spațiul Schengen și ce avantaj oferă transportului?",
      de: "Was ist der Schengen-Raum und welchen Vorteil bietet er dem Transport?",
      en: "What is the Schengen area and what advantage does it offer transport?"
    },
    options: {
      ro: ["Zonă comercială", "Zonă fără controale la frontieră, tranzit rapid", "Zonă de taxe", "Zonă turistică"],
      de: ["Handelszone", "Zone ohne Grenzkontrollen, schneller Transit", "Steuerzone", "Touristenzone"],
      en: ["Commercial zone", "Zone without border controls, rapid transit", "Tax zone", "Tourist zone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Schengen = 27 țări fără controale la frontieră. Tranzit rapid, economie timp și costuri.",
      de: "Schengen = 27 Länder ohne Grenzkontrollen. Schneller Transit, Zeit- und Kostenersparnis.",
      en: "Schengen = 27 countries without border controls. Rapid transit, time and cost savings."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport marfă din Turcia la Germania. Ce puncte de frontieră și proceduri vamale?",
      de: "Frachttransport von Türkei nach Deutschland. Welche Grenzübergänge und Zollverfahren?",
      en: "Freight transport from Turkey to Germany. What border points and customs procedures?"
    },
    options: {
      ro: ["Fără vamă, UE", "Kapikule-Kapitan Andreevo (BG) sau ferry RO-TR, T1 tranzit, vamă intrare UE", "Doar ferry", "Fără proceduri speciale"],
      de: ["Kein Zoll, EU", "Kapikule-Kapitan Andreevo (BG) oder Fähre RO-TR, T1-Transit, EU-Eingangszoll", "Nur Fähre", "Keine besonderen Verfahren"],
      en: ["No customs, EU", "Kapikule-Kapitan Andreevo (BG) or ferry RO-TR, T1 transit, EU entry customs", "Only ferry", "No special procedures"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TR-UE: vamă la intrare BG sau RO (ferry Constanța), document T1 tranzit, declarații vamale.",
      de: "TR-EU: Zoll bei Einreise BG oder RO (Fähre Konstanza), T1-Transitdokument, Zollerklärungen.",
      en: "TR-EU: customs at entry BG or RO (Constanta ferry), T1 transit document, customs declarations."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt caracteristicile pieței de transport din Germania?",
      de: "Was sind die Merkmale des deutschen Transportmarktes?",
      en: "What are the characteristics of the German transport market?"
    },
    options: {
      ro: ["Piață mică", "Cea mai mare din UE, standarde înalte, Maut, Umweltzonen, hub logistic central", "Fără reglementări", "Doar transport local"],
      de: ["Kleiner Markt", "Größter in EU, hohe Standards, Maut, Umweltzonen, zentrales Logistik-Hub", "Keine Regulierung", "Nur lokaler Transport"],
      en: ["Small market", "Largest in EU, high standards, Maut, Umweltzonen, central logistics hub", "No regulations", "Only local transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Germania: cea mai mare piață UE, Toll Collect, zone de mediu stricte, hub central pentru logistica europeană.",
      de: "Deutschland: größter EU-Markt, Toll Collect, strenge Umweltzonen, zentrales Hub für europäische Logistik.",
      en: "Germany: largest EU market, Toll Collect, strict environmental zones, central hub for European logistics."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce țări UE nu sunt în zona Euro dar sunt în UE?",
      de: "Welche EU-Länder sind nicht in der Eurozone aber in der EU?",
      en: "Which EU countries are not in the Eurozone but are in the EU?"
    },
    options: {
      ro: ["Toate sunt în Euro", "Polonia, Ungaria, Cehia, România, Bulgaria, Suedia, Danemarca", "Doar UK", "Nici o țară"],
      de: ["Alle sind im Euro", "Polen, Ungarn, Tschechien, Rumänien, Bulgarien, Schweden, Dänemark", "Nur UK", "Kein Land"],
      en: ["All are in Euro", "Poland, Hungary, Czechia, Romania, Bulgaria, Sweden, Denmark", "Only UK", "No country"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Țări UE fără Euro: PL (PLN), HU (HUF), CZ (CZK), RO (RON), BG (BGN), SE (SEK), DK (DKK).",
      de: "EU-Länder ohne Euro: PL (PLN), HU (HUF), CZ (CZK), RO (RON), BG (BGN), SE (SEK), DK (DKK).",
      en: "EU countries without Euro: PL (PLN), HU (HUF), CZ (CZK), RO (RON), BG (BGN), SE (SEK), DK (DKK)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client automotive din Bavaria cere livrări JIT în 3 uzine: Ingolstadt, München, Regensburg. Ce strategie logistică?",
      de: "Automotive-Kunde aus Bayern fordert JIT-Lieferungen in 3 Werke: Ingolstadt, München, Regensburg. Welche Logistikstrategie?",
      en: "Automotive client from Bavaria requests JIT deliveries to 3 plants: Ingolstadt, Munich, Regensburg. What logistics strategy?"
    },
    options: {
      ro: ["Livrări separate din RO", "Cross-dock regional în Bayern + milk-run local sau hub în Passau", "Doar camioane mari", "Fără planificare specială"],
      de: ["Separate Lieferungen aus RO", "Regionales Cross-Dock in Bayern + lokaler Milk-Run oder Hub in Passau", "Nur große LKW", "Keine besondere Planung"],
      en: ["Separate deliveries from RO", "Regional cross-dock in Bavaria + local milk-run or hub in Passau", "Only large trucks", "No special planning"]
    },
    correctIndex: 1,
    explanation: {
      ro: "JIT Bavaria: hub regional (Passau/Straubing) + distribuție locală milk-run. Reduce costuri, asigură timing.",
      de: "JIT Bayern: regionales Hub (Passau/Straubing) + lokale Milk-Run-Verteilung. Reduziert Kosten, sichert Timing.",
      en: "JIT Bavaria: regional hub (Passau/Straubing) + local milk-run distribution. Reduces costs, ensures timing."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt diferențele principale între piețele de transport din Europa de Est vs. Vest?",
      de: "Was sind die Hauptunterschiede zwischen Ost- und Westeuropas Transportmärkten?",
      en: "What are the main differences between Eastern vs. Western European transport markets?"
    },
    options: {
      ro: ["Nicio diferență", "Est: costuri mai mici, flotă în creștere; Vest: reglementări stricte, standarde înalte, costuri mari", "Est mai scump", "Vest fără reguli"],
      de: ["Kein Unterschied", "Ost: niedrigere Kosten, wachsende Flotte; West: strenge Regulierung, hohe Standards, hohe Kosten", "Ost teurer", "West ohne Regeln"],
      en: ["No difference", "East: lower costs, growing fleet; West: strict regulations, high standards, high costs", "East more expensive", "West without rules"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Europa de Est: costuri competitive, flotă modernă în creștere. Vest: reglementări stricte, costuri operaționale mari.",
      de: "Osteuropa: wettbewerbsfähige Kosten, wachsende moderne Flotte. West: strenge Regulierung, hohe Betriebskosten.",
      en: "Eastern Europe: competitive costs, growing modern fleet. West: strict regulations, high operating costs."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt principalele țări pentru tranzit Est-Vest în Europa Centrală?",
      de: "Was sind die Haupttransitländer Ost-West in Mitteleuropa?",
      en: "What are the main transit countries East-West in Central Europe?"
    },
    options: {
      ro: ["Doar Germania", "Austria, Ungaria, Cehia, Slovacia", "Doar Polonia", "Doar România"],
      de: ["Nur Deutschland", "Österreich, Ungarn, Tschechien, Slowakei", "Nur Polen", "Nur Rumänien"],
      en: ["Only Germany", "Austria, Hungary, Czechia, Slovakia", "Only Poland", "Only Romania"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tranzit central: AT, HU, CZ, SK sunt coridoare majore pentru fluxurile Est-Vest.",
      de: "Zentraler Transit: AT, HU, CZ, SK sind Hauptkorridore für Ost-West-Ströme.",
      en: "Central transit: AT, HU, CZ, SK are major corridors for East-West flows."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport regulat RO-NL cu descărcare în Rotterdam și Tilburg. Strategie optimă rute și timpi?",
      de: "Regelmäßiger Transport RO-NL mit Entladung in Rotterdam und Tilburg. Optimale Routen- und Zeitstrategie?",
      en: "Regular transport RO-NL with unloading in Rotterdam and Tilburg. Optimal route and time strategy?"
    },
    options: {
      ro: ["Două curse separate", "O cursă: RO→DE→Tilburg→Rotterdam, descărcare în ordinea optimă pentru portul Rotterdam", "Doar Rotterdam", "Ferry obligatoriu"],
      de: ["Zwei separate Fahrten", "Eine Fahrt: RO→DE→Tilburg→Rotterdam, Entladung in optimaler Reihenfolge für Hafen Rotterdam", "Nur Rotterdam", "Fähre Pflicht"],
      en: ["Two separate trips", "One trip: RO→DE→Tilburg→Rotterdam, unloading in optimal order for Rotterdam port", "Only Rotterdam", "Ferry mandatory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ordine optimă: Tilburg primul (interior), Rotterdam ultimul (port, posibil așteptare slot). Economie timp și km.",
      de: "Optimale Reihenfolge: Tilburg zuerst (Inland), Rotterdam zuletzt (Hafen, evtl. Slot-Wartezeit). Zeit- und km-Ersparnis.",
      en: "Optimal order: Tilburg first (inland), Rotterdam last (port, possible slot waiting). Time and km savings."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce specificități are piața de transport din Italia?",
      de: "Welche Besonderheiten hat der italienische Transportmarkt?",
      en: "What specificities does the Italian transport market have?"
    },
    options: {
      ro: ["Fără specificități", "ZTL în orașe, autostrăzi cu taxă, livrări urbane complexe, nord industrial vs. sud", "Doar nord", "Fără autostrăzi"],
      de: ["Keine Besonderheiten", "ZTL in Städten, mautpflichtige Autobahnen, komplexe Stadtlieferungen, industrieller Norden vs. Süden", "Nur Norden", "Keine Autobahnen"],
      en: ["No specificities", "ZTL in cities, toll motorways, complex urban deliveries, industrial north vs. south", "Only north", "No motorways"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Italia: ZTL restrictive, autostrăzi cu taxă (Telepass), nord industrial, sud agricol, livrări urbane complexe.",
      de: "Italien: restriktive ZTL, mautpflichtige Autobahnen (Telepass), industrieller Norden, landwirtschaftlicher Süden, komplexe Stadtlieferungen.",
      en: "Italy: restrictive ZTL, toll motorways (Telepass), industrial north, agricultural south, complex urban deliveries."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care țări au drumuri de calitate mai slabă în UE?",
      de: "Welche Länder haben Straßen mit geringerer Qualität in der EU?",
      en: "Which countries have lower quality roads in the EU?"
    },
    options: {
      ro: ["Germania, Olanda", "România, Bulgaria, unele zone din Polonia și Ungaria", "Franța, Spania", "Austria, Elveția"],
      de: ["Deutschland, Niederlande", "Rumänien, Bulgarien, einige Gebiete in Polen und Ungarn", "Frankreich, Spanien", "Österreich, Schweiz"],
      en: ["Germany, Netherlands", "Romania, Bulgaria, some areas in Poland and Hungary", "France, Spain", "Austria, Switzerland"]
    },
    correctIndex: 1,
    explanation: {
      ro: "RO, BG au infrastructură în dezvoltare. DE, NL, AT au cele mai bune drumuri din UE.",
      de: "RO, BG haben sich entwickelnde Infrastruktur. DE, NL, AT haben die besten Straßen der EU.",
      en: "RO, BG have developing infrastructure. DE, NL, AT have the best roads in EU."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport ADR din RO la Norvegia. Rută via Suedia sau Danemarca? Considerații?",
      de: "ADR-Transport von RO nach Norwegen. Route via Schweden oder Dänemark? Überlegungen?",
      en: "ADR transport from RO to Norway. Route via Sweden or Denmark? Considerations?"
    },
    options: {
      ro: ["Orice rută", "Suedia: ferry Rostock-Trelleborg; Danemarca: Øresund bridge. Ambele necesită reguli ADR nordice", "Doar avion", "Imposibil ADR"],
      de: ["Jede Route", "Schweden: Fähre Rostock-Trelleborg; Dänemark: Øresund-Brücke. Beide erfordern nordische ADR-Regeln", "Nur Flugzeug", "ADR unmöglich"],
      en: ["Any route", "Sweden: ferry Rostock-Trelleborg; Denmark: Øresund bridge. Both require Nordic ADR rules", "Only plane", "ADR impossible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Norvegia: via SE (ferry DE-SE) sau DK (pod Øresund). ADR nordic are reguli specifice pentru tuneluri și ferry.",
      de: "Norwegen: via SE (Fähre DE-SE) oder DK (Øresund-Brücke). Nordisches ADR hat spezifische Tunnel- und Fährregeln.",
      en: "Norway: via SE (ferry DE-SE) or DK (Øresund bridge). Nordic ADR has specific tunnel and ferry rules."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este sistemul viaTOLL în Polonia?",
      de: "Was ist das viaTOLL-System in Polen?",
      en: "What is the viaTOLL system in Poland?"
    },
    options: {
      ro: ["Vignetă", "Sistem electronic de taxare pe distanță pentru autostrăzi și drumuri naționale", "Taxă de parcare", "Asigurare auto"],
      de: ["Vignette", "Elektronisches entfernungsbasiertes Mautsystem für Autobahnen und Nationalstraßen", "Parkgebühr", "Kfz-Versicherung"],
      en: ["Vignette", "Electronic distance-based tolling system for motorways and national roads", "Parking fee", "Car insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "viaTOLL: sistem GPS/DSRC pentru taxare pe distanță pe autostrăzile și drumurile naționale din Polonia.",
      de: "viaTOLL: GPS/DSRC-System für entfernungsbasierte Maut auf polnischen Autobahnen und Nationalstraßen.",
      en: "viaTOLL: GPS/DSRC system for distance-based tolling on Polish motorways and national roads."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt cele mai aglomerate puncte de frontieră în Europa Centrală?",
      de: "Was sind die verkehrsreichsten Grenzübergänge in Mitteleuropa?",
      en: "What are the busiest border points in Central Europe?"
    },
    options: {
      ro: ["Nu există aglomerație", "Nădlac, Borș (RO-HU), Brenner (AT-IT), Dover-Calais", "Doar aeroporturi", "Doar porturi"],
      de: ["Keine Staus", "Nădlac, Borș (RO-HU), Brenner (AT-IT), Dover-Calais", "Nur Flughäfen", "Nur Häfen"],
      en: ["No congestion", "Nădlac, Borș (RO-HU), Brenner (AT-IT), Dover-Calais", "Only airports", "Only ports"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Puncte aglomerate: Nădlac/Borș (RO-HU), Brenner (AT-IT), Dover-Calais (UK-FR), Kapikule (TR-BG).",
      de: "Verkehrsreiche Übergänge: Nădlac/Borș (RO-HU), Brenner (AT-IT), Dover-Calais (UK-FR), Kapikule (TR-BG).",
      en: "Busy crossings: Nădlac/Borș (RO-HU), Brenner (AT-IT), Dover-Calais (UK-FR), Kapikule (TR-BG)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client cere distribuție în 5 țări Benelux + FR nord. Ce hub optimal și de ce?",
      de: "Kunde fordert Verteilung in 5 Benelux-Länder + Nord-FR. Welches optimale Hub und warum?",
      en: "Client requests distribution in 5 Benelux countries + northern FR. What optimal hub and why?"
    },
    options: {
      ro: ["Paris", "Liège (BE) sau Venlo (NL): central, acces autostrăzi, costuri rezonabile, forță de muncă logistică", "Londra", "Berlin"],
      de: ["Paris", "Lüttich (BE) oder Venlo (NL): zentral, Autobahnzugang, angemessene Kosten, Logistik-Arbeitskräfte", "London", "Berlin"],
      en: ["Paris", "Liège (BE) or Venlo (NL): central, motorway access, reasonable costs, logistics workforce", "London", "Berlin"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Liège/Venlo: poziție centrală Benelux, hub logistice mature, acces autostrăzi multiple țări, costuri competitive.",
      de: "Lüttich/Venlo: zentrale Benelux-Lage, reife Logistik-Hubs, Autobahnzugang zu mehreren Ländern, wettbewerbsfähige Kosten.",
      en: "Liège/Venlo: central Benelux position, mature logistics hubs, motorway access to multiple countries, competitive costs."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce restricții speciale are Spania pentru camioane în perioada verii?",
      de: "Welche besonderen Beschränkungen hat Spanien für LKW in der Sommerzeit?",
      en: "What special restrictions does Spain have for trucks in summer period?"
    },
    options: {
      ro: ["Niciuna", "Restricții ore de vârf pe rute principale, interdicții weekend în unele regiuni", "Interzis complet vara", "Doar noaptea"],
      de: ["Keine", "Einschränkungen in Stoßzeiten auf Hauptstrecken, Wochenendverbote in einigen Regionen", "Im Sommer komplett verboten", "Nur nachts"],
      en: ["None", "Peak hour restrictions on main routes, weekend bans in some regions", "Completely banned in summer", "Only at night"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Spania vara: restricții pe N-340, AP-7 în ore de vârf și weekenduri în zonele turistice (Costa Brava, etc.).",
      de: "Spanien im Sommer: Einschränkungen auf N-340, AP-7 in Stoßzeiten und Wochenenden in Touristengebieten (Costa Brava, usw.).",
      en: "Spain in summer: restrictions on N-340, AP-7 during peak hours and weekends in tourist areas (Costa Brava, etc.)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce avantaje oferă portul Constanța pentru transportul de marfă?",
      de: "Welche Vorteile bietet der Hafen Konstanza für den Gütertransport?",
      en: "What advantages does the port of Constanta offer for freight transport?"
    },
    options: {
      ro: ["Niciun avantaj", "Poartă Marea Neagră, conexiune Dunăre, alternativă la Rotterdam pentru Asia", "Doar pentru petrol", "Doar pasageri"],
      de: ["Kein Vorteil", "Schwarzmeer-Tor, Donau-Verbindung, Alternative zu Rotterdam für Asien", "Nur für Öl", "Nur Passagiere"],
      en: ["No advantage", "Black Sea gateway, Danube connection, alternative to Rotterdam for Asia", "Only for oil", "Only passengers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Constanța: cel mai mare port la Marea Neagră, conexiune fluvială Dunăre, rută alternativă China/Asia.",
      de: "Konstanza: größter Schwarzmeerhafen, Donau-Flussverbindung, alternative China/Asien-Route.",
      en: "Constanta: largest Black Sea port, Danube river connection, alternative China/Asia route."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport produse farmaceutice RO-Irlanda. Rută optimă considerând timpul și temperatura controlată?",
      de: "Transport Pharmaprodukte RO-Irland. Optimale Route unter Berücksichtigung von Zeit und Temperaturkontrolle?",
      en: "Transport pharmaceutical products RO-Ireland. Optimal route considering time and temperature control?"
    },
    options: {
      ro: ["Doar rutier", "Rutier până Calais/Dunkirk, ferry scurt Irlanda; sau combinat air+road pentru urgențe", "Doar aerian", "Via Spania"],
      de: ["Nur Straße", "Straße bis Calais/Dünkirchen, kurze Fähre nach Irland; oder kombiniert Luft+Straße für Notfälle", "Nur Luft", "Via Spanien"],
      en: ["Only road", "Road to Calais/Dunkirk, short ferry to Ireland; or combined air+road for emergencies", "Only air", "Via Spain"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pharma RO-IE: rutier refrigerat via DE-FR-ferry (Dublin/Rosslare). Urgențe: avion + last-mile refrigerat.",
      de: "Pharma RO-IE: gekühlte Straße via DE-FR-Fähre (Dublin/Rosslare). Notfälle: Flug + gekühlte Last-Mile.",
      en: "Pharma RO-IE: refrigerated road via DE-FR-ferry (Dublin/Rosslare). Emergencies: flight + refrigerated last-mile."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt caracteristicile transportului rutier în țările baltice (Estonia, Letonia, Lituania)?",
      de: "Was sind die Merkmale des Straßentransports in den baltischen Ländern (Estland, Lettland, Litauen)?",
      en: "What are the characteristics of road transport in Baltic countries (Estonia, Latvia, Lithuania)?"
    },
    options: {
      ro: ["Fără specificități", "Tranzit RU/BY, porturi importante (Klaipeda), costuri competitive, drumuri în dezvoltare", "Doar porturi", "Fără tranzit"],
      de: ["Keine Besonderheiten", "Transit RU/BY, wichtige Häfen (Klaipeda), wettbewerbsfähige Kosten, sich entwickelnde Straßen", "Nur Häfen", "Kein Transit"],
      en: ["No specificities", "RU/BY transit, important ports (Klaipeda), competitive costs, developing roads", "Only ports", "No transit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Țări baltice: tranzit istoric RU, porturi Klaipeda/Riga/Tallinn, costuri muncă competitive, Via Baltica în dezvoltare.",
      de: "Baltische Länder: historischer RU-Transit, Häfen Klaipeda/Riga/Tallinn, wettbewerbsfähige Arbeitskosten, Via Baltica in Entwicklung.",
      en: "Baltic countries: historic RU transit, ports Klaipeda/Riga/Tallinn, competitive labor costs, Via Baltica developing."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este Rail Baltica și ce impact va avea asupra transportului?",
      de: "Was ist Rail Baltica und welche Auswirkungen wird sie auf den Transport haben?",
      en: "What is Rail Baltica and what impact will it have on transport?"
    },
    options: {
      ro: ["Autostradă", "Linie ferată de mare viteză Tallinn-Varșovia, alternativă la rutier", "Tunel", "Ferry"],
      de: ["Autobahn", "Hochgeschwindigkeits-Bahnlinie Tallinn-Warschau, Alternative zur Straße", "Tunnel", "Fähre"],
      en: ["Motorway", "High-speed rail line Tallinn-Warsaw, alternative to road", "Tunnel", "Ferry"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rail Baltica: proiect feroviar TEN-T conectând Estonia-Letonia-Lituania-Polonia, alternativă intermodală.",
      de: "Rail Baltica: TEN-T-Bahnprojekt, das Estland-Lettland-Litauen-Polen verbindet, intermodale Alternative.",
      en: "Rail Baltica: TEN-T rail project connecting Estonia-Latvia-Lithuania-Poland, intermodal alternative."
    }
  }
];
