import { TranslatedQuizQuestion } from '../../quizTranslations';

export const europeZonesComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este o zonă cu emisii scăzute (LEZ)?",
      de: "Was ist eine Niedrigemissionszone (LEZ)?",
      en: "What is a Low Emission Zone (LEZ)?"
    },
    options: {
      ro: ["Zonă de parcare", "Zonă urbană cu restricții pentru vehicule poluante", "Zonă industrială", "Zonă de odihnă"],
      de: ["Parkzone", "Städtisches Gebiet mit Beschränkungen für verschmutzende Fahrzeuge", "Industriegebiet", "Ruhebereich"],
      en: ["Parking zone", "Urban area with restrictions for polluting vehicles", "Industrial area", "Rest area"]
    },
    correctIndex: 1,
    explanation: {
      ro: "LEZ = zone urbane unde vehiculele vechi/poluante au acces restricționat sau interzis.",
      de: "LEZ = städtische Gebiete, in denen alte/verschmutzende Fahrzeuge eingeschränkten oder keinen Zugang haben.",
      en: "LEZ = urban areas where old/polluting vehicles have restricted or no access."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce ecuson este necesar pentru a circula în zonele de mediu din Germania (Umweltzone)?",
      de: "Welche Plakette ist für das Fahren in deutschen Umweltzonen erforderlich?",
      en: "What sticker is needed to drive in German environmental zones (Umweltzone)?"
    },
    options: {
      ro: ["Ecuson roșu", "Ecuson verde (Grüne Plakette)", "Ecuson albastru", "Nici un ecuson"],
      de: ["Rote Plakette", "Grüne Plakette", "Blaue Plakette", "Keine Plakette"],
      en: ["Red sticker", "Green sticker (Grüne Plakette)", "Blue sticker", "No sticker"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În Germania, doar vehiculele cu ecuson verde (Euro 4+) pot intra în Umweltzonen.",
      de: "In Deutschland dürfen nur Fahrzeuge mit grüner Plakette (Euro 4+) in Umweltzonen fahren.",
      en: "In Germany, only vehicles with green sticker (Euro 4+) can enter Umweltzonen."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este certificatul Crit'Air în Franța și pentru ce este folosit?",
      de: "Was ist das Crit'Air-Zertifikat in Frankreich und wofür wird es verwendet?",
      en: "What is the Crit'Air certificate in France and what is it used for?"
    },
    options: {
      ro: ["Certificat turism", "Certificat de clasificare a emisiilor pentru acces în ZFE", "Certificat de proprietate", "Asigurare auto"],
      de: ["Tourismuszertifikat", "Emissionsklassifizierungszertifikat für Zugang zu ZFE", "Eigentumszertifikat", "Kfz-Versicherung"],
      en: ["Tourism certificate", "Emission classification certificate for ZFE access", "Property certificate", "Car insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Crit'Air clasifică vehiculele în 6 categorii (0-5) după emisii, necesar pentru Zone à Faibles Émissions.",
      de: "Crit'Air klassifiziert Fahrzeuge in 6 Kategorien (0-5) nach Emissionen, erforderlich für Zone à Faibles Émissions.",
      en: "Crit'Air classifies vehicles in 6 categories (0-5) by emissions, required for Zone à Faibles Émissions."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt principalele orașe germane cu zone de mediu?",
      de: "Was sind die Hauptstädte in Deutschland mit Umweltzonen?",
      en: "What are the main German cities with environmental zones?"
    },
    options: {
      ro: ["Doar Berlin", "Berlin, München, Köln, Hamburg, Stuttgart, Frankfurt și alte 50+", "Nici un oraș", "Doar München"],
      de: ["Nur Berlin", "Berlin, München, Köln, Hamburg, Stuttgart, Frankfurt und 50+ andere", "Keine Stadt", "Nur München"],
      en: ["Only Berlin", "Berlin, Munich, Cologne, Hamburg, Stuttgart, Frankfurt and 50+ others", "No city", "Only Munich"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Peste 50 de orașe germane au Umweltzonen, inclusiv toate marile metropole.",
      de: "Über 50 deutsche Städte haben Umweltzonen, einschließlich aller großen Metropolen.",
      en: "Over 50 German cities have Umweltzonen, including all major metropolitan areas."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport RO cu camion Euro 5 din București la Paris via DE. Poate intra în zona de mediu Paris?",
      de: "RO-Transport mit Euro 5-LKW von Bukarest nach Paris über DE. Kann in die Pariser Umweltzone einfahren?",
      en: "RO transport with Euro 5 truck from Bucharest to Paris via DE. Can enter Paris environmental zone?"
    },
    options: {
      ro: ["Da, fără restricții", "Da, cu Crit'Air 2 (Euro 5), dar restricții în zilele de vârf poluare", "Nu, interzis complet", "Doar noaptea"],
      de: ["Ja, ohne Beschränkungen", "Ja, mit Crit'Air 2 (Euro 5), aber Einschränkungen bei Spitzenverschmutzungstagen", "Nein, komplett verboten", "Nur nachts"],
      en: ["Yes, without restrictions", "Yes, with Crit'Air 2 (Euro 5), but restrictions on peak pollution days", "No, completely banned", "Only at night"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Euro 5 = Crit'Air 2 în Franța. Acces normal dar poate fi restricționat în zilele cu alertă poluare.",
      de: "Euro 5 = Crit'Air 2 in Frankreich. Normaler Zugang, kann aber an Tagen mit Verschmutzungsalarm eingeschränkt sein.",
      en: "Euro 5 = Crit'Air 2 in France. Normal access but may be restricted on pollution alert days."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este ULEZ în Londra și ce vehicule sunt afectate?",
      de: "Was ist ULEZ in London und welche Fahrzeuge sind betroffen?",
      en: "What is ULEZ in London and which vehicles are affected?"
    },
    options: {
      ro: ["Zonă turistică", "Ultra Low Emission Zone - taxă pentru vehicule sub Euro 6", "Parcare gratuită", "Zonă pietonală"],
      de: ["Touristenzone", "Ultra Low Emission Zone - Gebühr für Fahrzeuge unter Euro 6", "Kostenloser Parkplatz", "Fußgängerzone"],
      en: ["Tourist zone", "Ultra Low Emission Zone - charge for vehicles below Euro 6", "Free parking", "Pedestrian zone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ULEZ taxează vehiculele sub Euro 6 (diesel) sau Euro 4 (benzină) cu £100/zi pentru camioane.",
      de: "ULEZ berechnet Fahrzeugen unter Euro 6 (Diesel) oder Euro 4 (Benzin) £100/Tag für LKW.",
      en: "ULEZ charges vehicles below Euro 6 (diesel) or Euro 4 (petrol) £100/day for trucks."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este ZTL în Italia și unde se aplică?",
      de: "Was ist ZTL in Italien und wo gilt sie?",
      en: "What is ZTL in Italy and where does it apply?"
    },
    options: {
      ro: ["Asigurare", "Zona Traffico Limitato - zone cu trafic restricționat în centre istorice", "Zonă industrială", "Autostradă"],
      de: ["Versicherung", "Zona Traffico Limitato - verkehrsbeschränkte Zonen in historischen Zentren", "Industriegebiet", "Autobahn"],
      en: ["Insurance", "Zona Traffico Limitato - restricted traffic zones in historic centers", "Industrial area", "Motorway"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ZTL = zone cu acces restricționat în centrele istorice italiene, monitorizate cu camere.",
      de: "ZTL = Zonen mit beschränktem Zugang in italienischen historischen Zentren, kameraüberwacht.",
      en: "ZTL = zones with restricted access in Italian historic centers, monitored by cameras."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Livrare urgentă în centrul Milano (Area C + Area B). Camion Euro 5 diesel. Ce restricții și costuri?",
      de: "Dringende Lieferung im Zentrum von Mailand (Area C + Area B). Euro 5-Diesel-LKW. Welche Einschränkungen und Kosten?",
      en: "Urgent delivery to Milan center (Area C + Area B). Euro 5 diesel truck. What restrictions and costs?"
    },
    options: {
      ro: ["Acces gratuit", "Area C: taxă + ore restricționate; Area B: posibil acces restricționat pt Euro 5", "Interzis complet", "Doar weekend"],
      de: ["Kostenloser Zugang", "Area C: Gebühr + eingeschränkte Stunden; Area B: evtl. eingeschränkter Zugang für Euro 5", "Komplett verboten", "Nur Wochenende"],
      en: ["Free access", "Area C: charge + restricted hours; Area B: possibly restricted access for Euro 5", "Completely banned", "Only weekend"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Milano: Area C (centru) = taxă congestie; Area B = LEZ cu restricții Euro 5 diesel în curs de implementare.",
      de: "Mailand: Area C (Zentrum) = Staugebühr; Area B = LEZ mit Euro 5-Dieselbeschränkungen in Umsetzung.",
      en: "Milan: Area C (center) = congestion charge; Area B = LEZ with Euro 5 diesel restrictions being implemented."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce țări au interdicții de circulație pentru camioane în weekend?",
      de: "Welche Länder haben Wochenend-Fahrverbote für LKW?",
      en: "Which countries have weekend driving bans for trucks?"
    },
    options: {
      ro: ["Niciuna", "Austria, Germania, Franța, Italia, Elveția și altele", "Doar România", "Doar UK"],
      de: ["Keine", "Österreich, Deutschland, Frankreich, Italien, Schweiz und andere", "Nur Rumänien", "Nur UK"],
      en: ["None", "Austria, Germany, France, Italy, Switzerland and others", "Only Romania", "Only UK"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multiple țări UE au interdicții weekend: AT, DE, FR, IT, CH - de obicei duminica și sărbători.",
      de: "Mehrere EU-Länder haben Wochenendverbote: AT, DE, FR, IT, CH - meist sonntags und an Feiertagen.",
      en: "Multiple EU countries have weekend bans: AT, DE, FR, IT, CH - usually Sundays and holidays."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce orare are interdicția de noapte pentru camioane în Austria?",
      de: "Welche Zeiten hat das Nachtfahrverbot für LKW in Österreich?",
      en: "What hours does the night driving ban for trucks have in Austria?"
    },
    options: {
      ro: ["Nu există", "22:00 - 05:00 pe anumite rute", "Non-stop", "12:00 - 18:00"],
      de: ["Gibt es nicht", "22:00 - 05:00 auf bestimmten Strecken", "Rund um die Uhr", "12:00 - 18:00"],
      en: ["Doesn't exist", "22:00 - 05:00 on certain routes", "24/7", "12:00 - 18:00"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Austria: interdicție nocturnă 22:00-05:00 pe rute majore precum Brenner, Inn Valley.",
      de: "Österreich: Nachtfahrverbot 22:00-05:00 auf Hauptstrecken wie Brenner, Inntal.",
      en: "Austria: night ban 22:00-05:00 on major routes like Brenner, Inn Valley."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport frigorific perisabile RO-IT via Brenner. Vehicul Euro 6. Poate circula noaptea sâmbătă spre duminică?",
      de: "Kühlguttransport verderbliche Waren RO-IT über Brenner. Euro 6-Fahrzeug. Kann Nacht Samstag auf Sonntag fahren?",
      en: "Refrigerated perishable transport RO-IT via Brenner. Euro 6 vehicle. Can drive Saturday night to Sunday?"
    },
    options: {
      ro: ["Da, fără restricții", "Da, perisabilele au derogare de la interdicția nocturnă/weekend pe Brenner", "Nu, interzis absolut", "Doar cu escortă"],
      de: ["Ja, ohne Beschränkungen", "Ja, verderbliche Waren haben Ausnahme vom Nacht-/Wochenendverbot am Brenner", "Nein, absolut verboten", "Nur mit Begleitung"],
      en: ["Yes, no restrictions", "Yes, perishables have exemption from night/weekend ban on Brenner", "No, absolutely banned", "Only with escort"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Perisabilele (ATP) au derogare de la interdicțiile de noapte și weekend pe Brenner/Austria.",
      de: "Verderbliche Waren (ATP) haben Ausnahme von Nacht- und Wochenendverboten am Brenner/Österreich.",
      en: "Perishables (ATP) have exemption from night and weekend bans on Brenner/Austria."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este coridorul TEN-T și ce avantaje oferă transportatorilor?",
      de: "Was ist der TEN-T-Korridor und welche Vorteile bietet er Transportunternehmen?",
      en: "What is the TEN-T corridor and what advantages does it offer carriers?"
    },
    options: {
      ro: ["Rețea de turism", "Rețea transeuropeană de transport cu infrastructură armonizată și prioritizată", "Aplicație mobilă", "Asigurare specială"],
      de: ["Tourismusnetz", "Transeuropäisches Verkehrsnetz mit harmonisierter, priorisierter Infrastruktur", "Mobile App", "Spezialversicherung"],
      en: ["Tourism network", "Trans-European Transport Network with harmonized, prioritized infrastructure", "Mobile app", "Special insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TEN-T = rețea UE cu infrastructură standardizată, finanțare prioritară, reguli armonizate.",
      de: "TEN-T = EU-Netz mit standardisierter Infrastruktur, priorisierter Finanzierung, harmonisierten Regeln.",
      en: "TEN-T = EU network with standardized infrastructure, priority funding, harmonized rules."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce restricții speciale are Elveția pentru camioane?",
      de: "Welche besonderen Beschränkungen hat die Schweiz für LKW?",
      en: "What special restrictions does Switzerland have for trucks?"
    },
    options: {
      ro: ["Niciuna", "Limită 40t, taxă LSVA, interdicții noapte/weekend, preferință combinat", "Acces nelimitat", "Doar pentru UE"],
      de: ["Keine", "40t-Limit, LSVA-Gebühr, Nacht-/Wochenendverbote, Präferenz kombinierter Verkehr", "Unbegrenzter Zugang", "Nur für EU"],
      en: ["None", "40t limit, LSVA charge, night/weekend bans, combined transport preference", "Unlimited access", "Only for EU"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Elveția: maxim 40t, taxă kilometrică LSVA, promovează transportul combinat (rail + road).",
      de: "Schweiz: maximal 40t, kilometerabhängige LSVA-Gebühr, fördert kombinierten Verkehr (Schiene + Straße).",
      en: "Switzerland: maximum 40t, kilometer-based LSVA charge, promotes combined transport (rail + road)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport 44t din Rotterdam la Milano. Traseul optim considerând restricțiile de greutate?",
      de: "Transport 44t von Rotterdam nach Mailand. Optimale Route unter Berücksichtigung der Gewichtsbeschränkungen?",
      en: "Transport 44t from Rotterdam to Milan. Optimal route considering weight restrictions?"
    },
    options: {
      ro: ["Direct prin Elveția", "Via Franța (Mont Blanc/Fréjus) sau Austria (Brenner) - evitare CH care are limită 40t", "Orice traseu", "Via UK"],
      de: ["Direkt durch die Schweiz", "Via Frankreich (Mont Blanc/Fréjus) oder Österreich (Brenner) - CH mit 40t-Limit vermeiden", "Jede Route", "Via UK"],
      en: ["Direct through Switzerland", "Via France (Mont Blanc/Fréjus) or Austria (Brenner) - avoid CH with 40t limit", "Any route", "Via UK"]
    },
    correctIndex: 1,
    explanation: {
      ro: "44t depășește limita CH de 40t. Trebuie traseu via FR (tuneluri Mont Blanc/Fréjus) sau AT (Brenner).",
      de: "44t überschreitet CH-Limit von 40t. Route via FR (Tunnel Mont Blanc/Fréjus) oder AT (Brenner) erforderlich.",
      en: "44t exceeds CH limit of 40t. Route via FR (tunnels Mont Blanc/Fréjus) or AT (Brenner) required."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este sistemul Eurovignette și unde se aplică?",
      de: "Was ist das Eurovignetten-System und wo gilt es?",
      en: "What is the Eurovignette system and where does it apply?"
    },
    options: {
      ro: ["Asigurare europeană", "Sistem comun de taxare rutieră în BE, NL, LU, SE, DK", "Viză turistică", "Permis de muncă"],
      de: ["Europäische Versicherung", "Gemeinsames Mautsystem in BE, NL, LU, SE, DK", "Touristenvisum", "Arbeitserlaubnis"],
      en: ["European insurance", "Common road charging system in BE, NL, LU, SE, DK", "Tourist visa", "Work permit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Eurovignette = vignetă comună pentru camioane în Belgia, Olanda, Luxemburg, Suedia, Danemarca.",
      de: "Eurovignette = gemeinsame LKW-Vignette in Belgien, Niederlanden, Luxemburg, Schweden, Dänemark.",
      en: "Eurovignette = common truck vignette in Belgium, Netherlands, Luxembourg, Sweden, Denmark."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce zone din Europa au cele mai stricte restricții de emisii?",
      de: "Welche Regionen in Europa haben die strengsten Emissionsbeschränkungen?",
      en: "Which areas in Europe have the strictest emission restrictions?"
    },
    options: {
      ro: ["Europa de Est", "Europa de Vest: Benelux, Germania, UK, Franța, Italia de Nord", "Europa de Nord", "Balcani"],
      de: ["Osteuropa", "Westeuropa: Benelux, Deutschland, UK, Frankreich, Norditalien", "Nordeuropa", "Balkan"],
      en: ["Eastern Europe", "Western Europe: Benelux, Germany, UK, France, Northern Italy", "Northern Europe", "Balkans"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cele mai stricte LEZ sunt în Europa de Vest: Germania, Olanda, Belgia, UK, Franța, nordul Italiei.",
      de: "Die strengsten LEZ sind in Westeuropa: Deutschland, Niederlande, Belgien, UK, Frankreich, Norditalien.",
      en: "Strictest LEZ are in Western Europe: Germany, Netherlands, Belgium, UK, France, Northern Italy."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client cere livrări regulate în 5 orașe: Paris, Amsterdam, Bruxelles, Londra, Milano. Ce strategie de conformitate?",
      de: "Kunde fordert regelmäßige Lieferungen in 5 Städte: Paris, Amsterdam, Brüssel, London, Mailand. Welche Compliance-Strategie?",
      en: "Client requests regular deliveries to 5 cities: Paris, Amsterdam, Brussels, London, Milan. What compliance strategy?"
    },
    options: {
      ro: ["Nu există strategie", "Flotă Euro 6 + toate ecusoanele (Crit'Air, Grüne Plakette, ULEZ înregistrat) + monitorizare schimbări", "Doar asigurare", "Doar GPS"],
      de: ["Keine Strategie", "Euro 6-Flotte + alle Plaketten (Crit'Air, Grüne Plakette, ULEZ registriert) + Änderungsüberwachung", "Nur Versicherung", "Nur GPS"],
      en: ["No strategy", "Euro 6 fleet + all stickers (Crit'Air, Grüne Plakette, ULEZ registered) + change monitoring", "Only insurance", "Only GPS"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Livrări multi-țară necesită: flotă curată (Euro 6), toate ecusoanele relevante, monitorizare regulamente noi.",
      de: "Multi-Länder-Lieferungen erfordern: saubere Flotte (Euro 6), alle relevanten Plaketten, Überwachung neuer Vorschriften.",
      en: "Multi-country deliveries require: clean fleet (Euro 6), all relevant stickers, monitoring of new regulations."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce sunt zonele 'zero emisii' și care orașe le implementează?",
      de: "Was sind 'Null-Emissions-Zonen' und welche Städte setzen sie um?",
      en: "What are 'zero emission zones' and which cities are implementing them?"
    },
    options: {
      ro: ["Nu există", "Zone doar pentru vehicule electrice: Oslo, Amsterdam, Londra (planificat), Paris (planificat)", "Zone industriale", "Aeroporturi"],
      de: ["Gibt es nicht", "Zonen nur für Elektrofahrzeuge: Oslo, Amsterdam, London (geplant), Paris (geplant)", "Industriegebiete", "Flughäfen"],
      en: ["Don't exist", "Zones only for electric vehicles: Oslo, Amsterdam, London (planned), Paris (planned)", "Industrial areas", "Airports"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Zero emission = doar EV. Pionieri: Oslo, Amsterdam. În curs: Londra, Paris, Rotterdam până 2025-2030.",
      de: "Zero Emission = nur EV. Pioniere: Oslo, Amsterdam. In Entwicklung: London, Paris, Rotterdam bis 2025-2030.",
      en: "Zero emission = only EV. Pioneers: Oslo, Amsterdam. In progress: London, Paris, Rotterdam by 2025-2030."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este taxa medie pentru intrarea în zonele de mediu din orașele germane?",
      de: "Was ist die durchschnittliche Gebühr für die Einfahrt in Umweltzonen in deutschen Städten?",
      en: "What is the average fee for entering environmental zones in German cities?"
    },
    options: {
      ro: ["50€/zi", "Nu există taxă, doar ecuson obligatoriu (one-time cost ~10-15€)", "100€/zi", "Gratuit complet"],
      de: ["50€/Tag", "Keine Gebühr, nur Pflichtplakette (einmalige Kosten ~10-15€)", "100€/Tag", "Komplett kostenlos"],
      en: ["50€/day", "No fee, only mandatory sticker (one-time cost ~10-15€)", "100€/day", "Completely free"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Germania: fără taxă zilnică, doar ecuson verde necesar (cost unic ~10-15€). Amendă mare fără ecuson.",
      de: "Deutschland: keine Tagesgebühr, nur grüne Plakette erforderlich (einmalige Kosten ~10-15€). Hohe Strafe ohne Plakette.",
      en: "Germany: no daily fee, only green sticker needed (one-time cost ~10-15€). High fine without sticker."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport frigorific din RO la supermarket în centrul Berlin. Vehicul Euro 4. Opțiuni și costuri?",
      de: "Kühltransport von RO zu Supermarkt in Berliner Innenstadt. Euro 4-Fahrzeug. Optionen und Kosten?",
      en: "Refrigerated transport from RO to supermarket in Berlin center. Euro 4 vehicle. Options and costs?"
    },
    options: {
      ro: ["Acces normal", "Euro 4 = fără acces Umweltzone (roșu/galben). Opțiuni: transbordare la Euro 6 sau upgrade vehicul", "Doar noaptea", "Elicopter"],
      de: ["Normaler Zugang", "Euro 4 = kein Umweltzonen-Zugang (rot/gelb). Optionen: Umladung auf Euro 6 oder Fahrzeug-Upgrade", "Nur nachts", "Hubschrauber"],
      en: ["Normal access", "Euro 4 = no Umweltzone access (red/yellow). Options: transshipment to Euro 6 or vehicle upgrade", "Only at night", "Helicopter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Euro 4 primește ecuson roșu/galben = interzis în Umweltzone Berlin. Necesară transbordare sau vehicul Euro 6.",
      de: "Euro 4 erhält rote/gelbe Plakette = verboten in Umweltzone Berlin. Umladung oder Euro 6-Fahrzeug erforderlich.",
      en: "Euro 4 gets red/yellow sticker = banned in Umweltzone Berlin. Transshipment or Euro 6 vehicle required."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este congestion charge și în ce orașe europene există?",
      de: "Was ist Congestion Charge und in welchen europäischen Städten gibt es sie?",
      en: "What is congestion charge and in which European cities does it exist?"
    },
    options: {
      ro: ["Taxă de parcare", "Taxă pentru intrarea în zona centrală aglomerată: Londra, Stockholm, Milano, Gothenburg", "Taxă de autostradă", "Taxă de pod"],
      de: ["Parkgebühr", "Gebühr für Einfahrt in überlastete Innenstadt: London, Stockholm, Mailand, Göteborg", "Autobahngebühr", "Brückengebühr"],
      en: ["Parking fee", "Fee for entering congested central zone: London, Stockholm, Milan, Gothenburg", "Motorway toll", "Bridge toll"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Congestion charge = taxă anti-aglomerare: Londra (£15/zi), Stockholm, Milano (Area C), Gothenburg.",
      de: "Congestion Charge = Anti-Stau-Gebühr: London (£15/Tag), Stockholm, Mailand (Area C), Göteborg.",
      en: "Congestion charge = anti-congestion fee: London (£15/day), Stockholm, Milan (Area C), Gothenburg."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce restricții speciale are Tirolul (Austria) pentru camioane pe Autostrada A12/A13?",
      de: "Welche besonderen Beschränkungen hat Tirol (Österreich) für LKW auf der Autobahn A12/A13?",
      en: "What special restrictions does Tyrol (Austria) have for trucks on the A12/A13 motorway?"
    },
    options: {
      ro: ["Niciuna", "Sistem de dozare (blocage), interdicții noapte și weekend, restricții sector", "Acces liber", "Doar pentru UE"],
      de: ["Keine", "Dosierungssystem (Blockabfertigung), Nacht- und Wochenendverbote, Sektorverbote", "Freier Zugang", "Nur für EU"],
      en: ["None", "Dosing system (block handling), night and weekend bans, sector restrictions", "Free access", "Only for EU"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tirol: blocage la granită, interdicții sectorale (nu poți intra doar pt tranzit scurt), restricții noapte/weekend.",
      de: "Tirol: Blockabfertigung an der Grenze, Sektorverbote (kein kurzer Transit), Nacht-/Wochenendverbote.",
      en: "Tyrol: block handling at border, sector bans (no short transit), night/weekend restrictions."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport de tranzit DE-IT via Brenner (Austria). Ce taxe și restricții concrete trebuie considerate?",
      de: "Transittransport DE-IT via Brenner (Österreich). Welche konkreten Gebühren und Beschränkungen sind zu berücksichtigen?",
      en: "Transit transport DE-IT via Brenner (Austria). What concrete fees and restrictions must be considered?"
    },
    options: {
      ro: ["Gratuit și fără restricții", "GO-Box taxare, ecopuncte Tirol, interdicție noapte 22-05, weekend, restricții sector pentru anumite mărfuri", "Doar vinetă", "Doar combustibil"],
      de: ["Kostenlos und ohne Beschränkungen", "GO-Box-Maut, Tirol-Ökopunkte, Nachtfahrverbot 22-05, Wochenende, Sektorverbote für bestimmte Waren", "Nur Vignette", "Nur Kraftstoff"],
      en: ["Free and without restrictions", "GO-Box toll, Tyrol eco-points, night ban 22-05, weekend, sector bans for certain goods", "Only vignette", "Only fuel"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Brenner: GO-Box obligatorie, sistem ecopuncte, interdicții noapte și weekend, restricții pentru mărfuri specifice.",
      de: "Brenner: GO-Box Pflicht, Ökopunkte-System, Nacht- und Wochenendverbote, Beschränkungen für bestimmte Waren.",
      en: "Brenner: GO-Box mandatory, eco-points system, night and weekend bans, restrictions for specific goods."
    }
  }
];
