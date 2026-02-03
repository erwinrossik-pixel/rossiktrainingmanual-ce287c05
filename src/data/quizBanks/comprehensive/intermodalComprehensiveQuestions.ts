import { TranslatedQuizQuestion } from "@/data/quizTranslations";

export const intermodalComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este transportul intermodal și care sunt principalele sale caracteristici?",
      de: "Was ist intermodaler Transport und was sind seine Hauptmerkmale?",
      en: "What is intermodal transport and what are its main characteristics?"
    },
    options: {
      ro: ["Transport folosind 2+ moduri (rutier, feroviar, maritim) cu aceeași unitate de încărcare (container, semiremorcă) fără manipulare marfă", "Doar transport maritim", "Transport cu un singur mod", "Schimbarea mărfii între vehicule"],
      de: ["Transport mit 2+ Modi (Straße, Schiene, See) mit derselben Ladeeinheit (Container, Auflieger) ohne Frachthandling", "Nur Seetransport", "Transport mit einem Modus", "Frachtwechsel zwischen Fahrzeugen"],
      en: ["Transport using 2+ modes (road, rail, sea) with same loading unit (container, semi-trailer) without cargo handling", "Only sea transport", "Transport with single mode", "Changing cargo between vehicles"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cheia e unitatea de încărcare care nu se deschide între moduri. Marfa rămâne sigilată de la origine la destinație.",
      de: "Schlüssel ist Ladeeinheit die zwischen Modi nicht geöffnet wird. Fracht bleibt von Ursprung bis Ziel versiegelt.",
      en: "Key is loading unit that doesn't open between modes. Cargo stays sealed from origin to destination."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt principalele unități de încărcare utilizate în transportul intermodal?",
      de: "Was sind die Hauptladeeinheiten im intermodalen Transport?",
      en: "What are the main loading units used in intermodal transport?"
    },
    options: {
      ro: ["Containere maritime (20'/40'/45'), semiremorci cranabile, swap bodies, caisoane mobile", "Doar paleți EUR", "Exclusiv cutii de carton", "Numai cisterne"],
      de: ["Seecontainer (20'/40'/45'), kranbare Auflieger, Wechselbrücken, Wechselbehälter", "Nur EUR-Paletten", "Ausschließlich Kartons", "Nur Tanks"],
      en: ["Sea containers (20'/40'/45'), cranable semi-trailers, swap bodies, mobile boxes", "Only EUR pallets", "Exclusively cardboard boxes", "Only tanks"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Containerul de 40' e cel mai comun. Swap body: caroserie demontabilă pentru eficiență. Semiremorca cranabilă: flexibilitate maximă.",
      de: "40'-Container ist am häufigsten. Wechselbrücke: abnehmbare Karosserie für Effizienz. Kranbarer Auflieger: maximale Flexibilität.",
      en: "40' container is most common. Swap body: detachable body for efficiency. Cranable semi-trailer: maximum flexibility."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un 'swap body' (caroserie interschimbabilă)?",
      de: "Was ist eine 'Wechselbrücke' (Wechselaufbau)?",
      en: "What is a 'swap body' (interchangeable body)?"
    },
    options: {
      ro: ["Caroserie standardizată care poate fi transferată între camion și vagon feroviar, cu picioare de susținere", "Container maritim standard", "Remorcă fixă", "Palet special"],
      de: ["Standardisierte Karosserie die zwischen LKW und Waggon transferiert werden kann, mit Stützbeinen", "Standard-Seecontainer", "Fester Anhänger", "Spezialpalette"],
      en: ["Standardized body that can be transferred between truck and rail wagon, with support legs", "Standard sea container", "Fixed trailer", "Special pallet"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Swap body: mai ușor decât containerul maritim, optimizat pentru Europa. Picioarele permit depunerea fără macara.",
      de: "Wechselbrücke: leichter als Seecontainer, für Europa optimiert. Beine ermöglichen Abstellen ohne Kran.",
      en: "Swap body: lighter than sea container, optimized for Europe. Legs allow dropping without crane."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt avantajele principale ale transportului intermodal față de rutierul pur?",
      de: "Was sind die Hauptvorteile von intermodalem Transport gegenüber reinem Straßentransport?",
      en: "What are the main advantages of intermodal transport over pure road?"
    },
    options: {
      ro: ["Cost mai mic pe distanțe lungi, amprentă de carbon redusă, evitare restricții rutiere, capacitate mare", "Întotdeauna mai rapid", "Mai simplu operațional", "Cost mai mic pe orice distanță"],
      de: ["Niedrigere Kosten auf langen Strecken, reduzierter CO2-Fußabdruck, Umgehung von Straßenbeschränkungen, hohe Kapazität", "Immer schneller", "Operativ einfacher", "Niedrigere Kosten auf jeder Distanz"],
      en: ["Lower cost on long distances, reduced carbon footprint, avoiding road restrictions, high capacity", "Always faster", "Operationally simpler", "Lower cost on any distance"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Break-even: ~500-700 km. Sub această distanță, rutierul e mai eficient. Peste, intermodalul câștigă.",
      de: "Break-Even: ~500-700 km. Unter dieser Distanz ist Straße effizienter. Darüber gewinnt Intermodal.",
      en: "Break-even: ~500-700 km. Below this distance, road is more efficient. Above, intermodal wins."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'Autostrada Feroviară' (Ro-La)?",
      de: "Was ist die 'Rollende Landstraße' (Ro-La)?",
      en: "What is the 'Rolling Highway' (Ro-La)?"
    },
    options: {
      ro: ["Transport al întregului camion (tractor + semiremorcă) pe vagoane speciale, șoferul călătorește în vagon de pasageri", "Autostradă cu benzi pentru camioane", "Tren de mare viteză", "Tunel pentru camioane"],
      de: ["Transport des gesamten LKW (Zugmaschine + Auflieger) auf Spezialwaggons, Fahrer reist im Passagierwaggon", "Autobahn mit LKW-Spuren", "Hochgeschwindigkeitszug", "LKW-Tunnel"],
      en: ["Transport of entire truck (tractor + semi-trailer) on special wagons, driver travels in passenger car", "Highway with truck lanes", "High-speed train", "Truck tunnel"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Ro-La: soluție pentru traversare Alpi (Austria, Elveția). Obligatoriu pe anumite rute. Șoferul se odihnește în timpul transportului.",
      de: "Ro-La: Lösung für Alpenquerung (Österreich, Schweiz). Auf bestimmten Strecken obligatorisch. Fahrer ruht während Transport.",
      en: "Ro-La: solution for Alps crossing (Austria, Switzerland). Mandatory on certain routes. Driver rests during transport."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un terminal intermodal și ce facilități oferă?",
      de: "Was ist ein intermodales Terminal und welche Einrichtungen bietet es?",
      en: "What is an intermodal terminal and what facilities does it offer?"
    },
    options: {
      ro: ["Punct de transfer între moduri: macarale, spații depozitare containere, conexiuni rutiere/feroviare, servicii vamale", "Doar parcare camioane", "Stație de benzină", "Depozit simplu"],
      de: ["Transferpunkt zwischen Modi: Kräne, Containerlagerflächen, Straßen-/Schienenanbindung, Zolldienste", "Nur LKW-Parkplatz", "Tankstelle", "Einfaches Lager"],
      en: ["Transfer point between modes: cranes, container storage areas, road/rail connections, customs services", "Only truck parking", "Gas station", "Simple warehouse"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Terminalele mari operează 24/7. Eficiența terminalului afectează direct timpul total de tranzit intermodal.",
      de: "Große Terminals arbeiten 24/7. Terminaleffizienz beeinflusst direkt die gesamte intermodale Transitzeit.",
      en: "Large terminals operate 24/7. Terminal efficiency directly affects total intermodal transit time."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce documente sunt necesare pentru un transport intermodal internațional?",
      de: "Welche Dokumente sind für einen internationalen intermodalen Transport erforderlich?",
      en: "What documents are needed for an international intermodal transport?"
    },
    options: {
      ro: ["CIM (feroviar) sau B/L (maritim), CMR (rutier), factura comercială, documente vamale, packing list", "Doar CMR", "Niciun document special", "Exclusiv factura"],
      de: ["CIM (Schiene) oder B/L (See), CMR (Straße), Handelsrechnung, Zolldokumente, Packliste", "Nur CMR", "Keine speziellen Dokumente", "Ausschließlich Rechnung"],
      en: ["CIM (rail) or B/L (sea), CMR (road), commercial invoice, customs documents, packing list", "Only CMR", "No special documents", "Exclusively invoice"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Fiecare mod are convenția sa: CMR (rutier), CIM (feroviar), Hague-Visby (maritim). Răspunderea diferă per segment.",
      de: "Jeder Modus hat seine Konvention: CMR (Straße), CIM (Schiene), Haager-Visby (See). Haftung unterscheidet sich pro Segment.",
      en: "Each mode has its convention: CMR (road), CIM (rail), Hague-Visby (sea). Liability differs per segment."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'first mile' și 'last mile' în transportul intermodal?",
      de: "Was bedeuten 'First Mile' und 'Last Mile' im intermodalen Transport?",
      en: "What do 'first mile' and 'last mile' mean in intermodal transport?"
    },
    options: {
      ro: ["First mile: transport rutier de la expeditor la terminal; Last mile: de la terminal la destinatar", "Prima și ultima stație de tren", "Distanța maritimă", "Termeni pentru viteză"],
      de: ["First Mile: Straßentransport vom Versender zum Terminal; Last Mile: vom Terminal zum Empfänger", "Erste und letzte Zugstation", "Seestrecke", "Geschwindigkeitsbegriffe"],
      en: ["First mile: road transport from shipper to terminal; Last mile: from terminal to consignee", "First and last train station", "Sea distance", "Speed terms"]
    },
    correctIndex: 0,
    explanation: {
      ro: "First/last mile sunt de obicei rutiere. Costul și timpul acestor segmente sunt critice pentru competitivitatea intermodalului.",
      de: "First/Last Mile sind normalerweise Straße. Kosten und Zeit dieser Segmente sind kritisch für Intermodal-Wettbewerbsfähigkeit.",
      en: "First/last mile are usually road. Cost and time of these segments are critical for intermodal competitiveness."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt standardele de dimensiuni pentru containere maritime?",
      de: "Was sind die Größenstandards für Seecontainer?",
      en: "What are the size standards for sea containers?"
    },
    options: {
      ro: ["20' (TEU ~33m³), 40' (~67m³), 40' HC (High Cube ~76m³), 45' pentru Europa", "Doar 20'", "10' și 30'", "Dimensiuni variabile fără standard"],
      de: ["20' (TEU ~33m³), 40' (~67m³), 40' HC (High Cube ~76m³), 45' für Europa", "Nur 20'", "10' und 30'", "Variable Maße ohne Standard"],
      en: ["20' (TEU ~33m³), 40' (~67m³), 40' HC (High Cube ~76m³), 45' for Europe", "Only 20'", "10' and 30'", "Variable sizes without standard"]
    },
    correctIndex: 0,
    explanation: {
      ro: "TEU = Twenty-foot Equivalent Unit (unitate de măsură). 40' = 2 TEU. High Cube: +1 foot înălțime pentru volum extra.",
      de: "TEU = Twenty-foot Equivalent Unit (Maßeinheit). 40' = 2 TEU. High Cube: +1 Fuß Höhe für Extravolumen.",
      en: "TEU = Twenty-foot Equivalent Unit (measurement). 40' = 2 TEU. High Cube: +1 foot height for extra volume."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'short sea shipping' și când se folosește?",
      de: "Was ist 'Short Sea Shipping' und wann wird es verwendet?",
      en: "What is 'short sea shipping' and when is it used?"
    },
    options: {
      ro: ["Transport maritim pe distanțe scurte/medii (ex: Marea Baltică, Mediterana), alternativă la rutier pentru evitare congestie/restricții", "Doar traversări de râu", "Transport cu bărci mici", "Numai pentru pasageri"],
      de: ["Seetransport auf kurzen/mittleren Distanzen (z.B.: Ostsee, Mittelmeer), Alternative zu Straße zur Stau-/Beschränkungsvermeidung", "Nur Flussüberquerungen", "Transport mit kleinen Booten", "Nur für Passagiere"],
      en: ["Sea transport on short/medium distances (e.g.: Baltic, Mediterranean), alternative to road for avoiding congestion/restrictions", "Only river crossings", "Transport with small boats", "Only for passengers"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Short sea: Rotterdam-UK, Italia-Grecia, Scandinavia-Continent. Combină avantajele maritime cu flexibilitate.",
      de: "Short Sea: Rotterdam-UK, Italien-Griechenland, Skandinavien-Kontinent. Kombiniert Seevorteile mit Flexibilität.",
      en: "Short sea: Rotterdam-UK, Italy-Greece, Scandinavia-Continent. Combines sea advantages with flexibility."
    }
  },

  // Level 4 Questions (10)
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi dacă intermodalul e mai eficient decât rutierul pentru o rută specifică?",
      de: "Wie berechnen Sie ob Intermodal für eine spezifische Route effizienter ist als Straße?",
      en: "How do you calculate if intermodal is more efficient than road for a specific route?"
    },
    options: {
      ro: ["Compari cost total (first mile + feroviar/maritim + last mile + handling) vs rutier direct + factori: timp, fiabilitate, emisii", "Doar comparație cost/km", "Intermodalul e mereu mai ieftin", "Nu se poate calcula"],
      de: ["Gesamtkosten vergleichen (First Mile + Schiene/See + Last Mile + Handling) vs direkter Straßentransport + Faktoren: Zeit, Zuverlässigkeit, Emissionen", "Nur Kostenvergleich/km", "Intermodal ist immer billiger", "Nicht berechenbar"],
      en: ["Compare total cost (first mile + rail/sea + last mile + handling) vs direct road + factors: time, reliability, emissions", "Only cost/km comparison", "Intermodal is always cheaper", "Cannot be calculated"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Break-even tipic: 500-700 km. Cu distanțe first/last mile lungi, pragul crește. Calculatoarele online ajută.",
      de: "Typischer Break-Even: 500-700 km. Mit langen First/Last Mile-Distanzen steigt Schwelle. Online-Rechner helfen.",
      en: "Typical break-even: 500-700 km. With long first/last mile distances, threshold increases. Online calculators help."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt provocările operaționale ale transportului intermodal comparativ cu rutierul?",
      de: "Was sind die operativen Herausforderungen von intermodalem Transport im Vergleich zu Straße?",
      en: "What are the operational challenges of intermodal transport compared to road?"
    },
    options: {
      ro: ["Coordonare mai complexă, dependență de orare fixe, handling suplimentar, risc întârzieri conexiuni, inflexibilitate modificări", "Nu există provocări", "Mai simplu decât rutierul", "Doar costul e provocare"],
      de: ["Komplexere Koordination, Abhängigkeit von festen Fahrplänen, zusätzliches Handling, Anschlussverzögerungsrisiko, Änderungsunflexibilität", "Keine Herausforderungen", "Einfacher als Straße", "Nur Kosten sind Herausforderung"],
      en: ["More complex coordination, dependence on fixed schedules, additional handling, connection delay risk, modification inflexibility", "No challenges", "Simpler than road", "Only cost is challenge"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Intermodalul necesită planificare în avans. Odată containerul pe tren, redirecționarea e dificilă. Tracking end-to-end e esențial.",
      de: "Intermodal erfordert Vorausplanung. Sobald Container auf Zug, ist Umleitung schwierig. End-to-End-Tracking ist essentiell.",
      en: "Intermodal requires advance planning. Once container on train, rerouting is difficult. End-to-end tracking is essential."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum afectează greutatea containerului alegerea modului de transport și rutei?",
      de: "Wie beeinflusst das Containergewicht die Wahl des Transportmodus und der Route?",
      en: "How does container weight affect transport mode and route choice?"
    },
    options: {
      ro: ["Container greu: limitări osii pentru first/last mile, restricții poduri, costuri handling mai mari; container ușor: limitare volum nu greutate", "Greutatea nu afectează alegerea", "Doar volumul contează", "Feroviarul nu are limite de greutate"],
      de: ["Schwerer Container: Achsbegrenzungen für First/Last Mile, Brückenbeschränkungen, höhere Handlingkosten; leichter Container: Volumenbegrenzung nicht Gewicht", "Gewicht beeinflusst Wahl nicht", "Nur Volumen zählt", "Schiene hat keine Gewichtsgrenzen"],
      en: ["Heavy container: axle limitations for first/last mile, bridge restrictions, higher handling costs; light container: volume limitation not weight", "Weight doesn't affect choice", "Only volume matters", "Rail has no weight limits"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Container 40' la 30t = probleme pe rutier. Poate necesita traseu special sau descărcare parțială pentru first/last mile.",
      de: "40'-Container bei 30t = Straßenprobleme. Kann Spezialroute oder Teilentladung für First/Last Mile erfordern.",
      en: "40' container at 30t = road problems. May need special route or partial unloading for first/last mile."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce sunt 'ferestrele de timp' (time windows) în intermodal și cum le gestionezi?",
      de: "Was sind 'Zeitfenster' (Time Windows) im Intermodal und wie handhaben Sie sie?",
      en: "What are 'time windows' in intermodal and how do you manage them?"
    },
    options: {
      ro: ["Intervale fixe pentru livrare containere la terminal (cut-off), colectare după sosire, sincronizare moduri - necesită planificare precisă", "Ore de vizită la birouri", "Perioade de mentenanță", "Nu există ferestre de timp"],
      de: ["Feste Intervalle für Containerlieferung am Terminal (Cut-Off), Abholung nach Ankunft, Modi-Synchronisierung - erfordert präzise Planung", "Bürobesuchszeiten", "Wartungsperioden", "Keine Zeitfenster"],
      en: ["Fixed intervals for container delivery at terminal (cut-off), collection after arrival, mode synchronization - requires precise planning", "Office visiting hours", "Maintenance periods", "No time windows"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Ratarea cut-off-ului = marfa pe următorul tren (poate fi peste zile). Bufferul de timp e esențial, dar costă bani (demurrage).",
      de: "Verpasstes Cut-Off = Fracht auf nächsten Zug (kann Tage dauern). Zeitpuffer ist essentiell, kostet aber Geld (Standgeld).",
      en: "Missing cut-off = cargo on next train (can be days). Time buffer is essential, but costs money (demurrage)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum funcționează răspunderea în transportul intermodal cu mai mulți operatori?",
      de: "Wie funktioniert die Haftung im intermodalen Transport mit mehreren Operatoren?",
      en: "How does liability work in intermodal transport with multiple operators?"
    },
    options: {
      ro: ["Fiecare segment are regimul său (CMR/CIM/Hague-Visby); MTO poate oferi răspundere unificată prin documentul FIATA", "Un singur operator răspunde pentru tot", "Nimeni nu răspunde între moduri", "Clientul suportă toate riscurile"],
      de: ["Jedes Segment hat sein Regime (CMR/CIM/Haager-Visby); MTO kann einheitliche Haftung durch FIATA-Dokument bieten", "Ein Operator haftet für alles", "Niemand haftet zwischen Modi", "Kunde trägt alle Risiken"],
      en: ["Each segment has its regime (CMR/CIM/Hague-Visby); MTO can offer unified liability through FIATA document", "One operator liable for everything", "Nobody liable between modes", "Customer bears all risks"]
    },
    correctIndex: 0,
    explanation: {
      ro: "MTO (Multimodal Transport Operator) simplifică pentru client. FIATA FBL: document unic de transport multimodal cu răspundere continuă.",
      de: "MTO (Multimodal Transport Operator) vereinfacht für Kunden. FIATA FBL: einziges multimodales Transportdokument mit durchgehender Haftung.",
      en: "MTO (Multimodal Transport Operator) simplifies for customer. FIATA FBL: single multimodal transport document with continuous liability."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt diferențele între transport 'accompanied' și 'unaccompanied' în intermodal?",
      de: "Was sind die Unterschiede zwischen 'begleitetem' und 'unbegleitetem' Transport im Intermodal?",
      en: "What are the differences between 'accompanied' and 'unaccompanied' transport in intermodal?"
    },
    options: {
      ro: ["Accompanied: șoferul călătorește cu vehiculul (Ro-La, ferry); Unaccompanied: doar unitatea de încărcare merge, șofer local la destinație", "Nu există diferență", "Accompanied e pentru pasageri", "Unaccompanied e ilegal"],
      de: ["Begleitet: Fahrer reist mit Fahrzeug (Ro-La, Fähre); Unbegleitet: nur Ladeeinheit fährt, lokaler Fahrer am Ziel", "Kein Unterschied", "Begleitet ist für Passagiere", "Unbegleitet ist illegal"],
      en: ["Accompanied: driver travels with vehicle (Ro-La, ferry); Unaccompanied: only loading unit goes, local driver at destination", "No difference", "Accompanied is for passengers", "Unaccompanied is illegal"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Unaccompanied: mai eficient, șoferul face curse locale. Accompanied: necesar când distanța first/last mile e semnificativă.",
      de: "Unbegleitet: effizienter, Fahrer macht lokale Fahrten. Begleitet: nötig wenn First/Last Mile-Distanz signifikant ist.",
      en: "Unaccompanied: more efficient, driver does local runs. Accompanied: needed when first/last mile distance is significant."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi containerele frigorifice (reefer) în transport intermodal?",
      de: "Wie handhaben Sie Kühlcontainer (Reefer) im intermodalen Transport?",
      en: "How do you handle refrigerated containers (reefer) in intermodal transport?"
    },
    options: {
      ro: ["Verificare alimentare electrică la fiecare transfer, pre-booking slot-uri cu priză, monitoring temperatură continuu, proceduri de urgență", "Frigoriferele nu merg intermodal", "Doar transport rutier pentru reefer", "Temperatura se menține singură"],
      de: ["Stromversorgungsprüfung bei jedem Transfer, Vorbuchung von Steckplätzen, kontinuierliche Temperaturüberwachung, Notfallverfahren", "Kühlcontainer fahren nicht intermodal", "Nur Straßentransport für Reefer", "Temperatur hält sich selbst"],
      en: ["Check power supply at each transfer, pre-booking slots with power, continuous temperature monitoring, emergency procedures", "Reefers don't go intermodal", "Only road transport for reefer", "Temperature maintains itself"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Reefer intermodal: terminale cu priză, vagoane cu alimentare. Timpul fără alimentare trebuie minimizat la transbordare.",
      de: "Reefer-Intermodal: Terminals mit Steckdose, Waggons mit Stromversorgung. Zeit ohne Strom muss beim Umschlag minimiert werden.",
      en: "Reefer intermodal: terminals with power, wagons with power supply. Time without power must be minimized at transshipment."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce sunt coroarele de transport european (TEN-T) și cum afectează intermodalul?",
      de: "Was sind europäische Transportkorridore (TEN-T) und wie beeinflussen sie Intermodal?",
      en: "What are European transport corridors (TEN-T) and how do they affect intermodal?"
    },
    options: {
      ro: ["Rețea europeană prioritară de infrastructură: finanțare UE, standarde uniforme, eliminare blocaje - favorizează dezvoltarea intermodal", "Doar autostrăzi", "Coridoare pentru biciclete", "Nu afectează transportul"],
      de: ["Europäisches prioritäres Infrastrukturnetz: EU-Finanzierung, einheitliche Standards, Engpassbeseitigung - fördert Intermodal-Entwicklung", "Nur Autobahnen", "Fahrradkorridore", "Beeinflusst Transport nicht"],
      en: ["European priority infrastructure network: EU funding, uniform standards, bottleneck elimination - favors intermodal development", "Only highways", "Bicycle corridors", "Doesn't affect transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Coridoare principale: Rhine-Alpine, North Sea-Baltic, Mediterranean. Investiții în terminale intermodale pe aceste axe.",
      de: "Hauptkorridore: Rhein-Alpen, Nordsee-Baltikum, Mittelmeer. Investitionen in Intermodalterminals auf diesen Achsen.",
      en: "Main corridors: Rhine-Alpine, North Sea-Baltic, Mediterranean. Investments in intermodal terminals on these axes."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum afectează demurrage și detention costurile în transportul intermodal cu containere?",
      de: "Wie beeinflussen Demurrage und Detention die Kosten im Containerintermodal?",
      en: "How do demurrage and detention affect costs in container intermodal?"
    },
    options: {
      ro: ["Demurrage: taxă pentru container în port/terminal peste free time; Detention: taxă pentru container în afara terminalului - ambele pot crește semnificativ costul", "Nu există astfel de taxe", "Doar pentru maritime", "Sunt incluse în preț"],
      de: ["Demurrage: Gebühr für Container im Hafen/Terminal über Free Time; Detention: Gebühr für Container außerhalb Terminals - beide können Kosten signifikant erhöhen", "Keine solchen Gebühren", "Nur für See", "Im Preis enthalten"],
      en: ["Demurrage: fee for container in port/terminal beyond free time; Detention: fee for container outside terminal - both can significantly increase cost", "No such fees", "Only for maritime", "Included in price"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Free time tipic: 5-7 zile port, 3-5 zile terminal feroviar. După: 30-100€/container/zi. Planificarea precisă le evită.",
      de: "Typische Free Time: 5-7 Tage Hafen, 3-5 Tage Schienenterminal. Danach: 30-100€/Container/Tag. Präzise Planung vermeidet sie.",
      en: "Typical free time: 5-7 days port, 3-5 days rail terminal. After: €30-100/container/day. Precise planning avoids them."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt cerințele de siguranță specifice pentru containere în transport intermodal?",
      de: "Was sind die spezifischen Sicherheitsanforderungen für Container im intermodalen Transport?",
      en: "What are the specific safety requirements for containers in intermodal transport?"
    },
    options: {
      ro: ["Container în stare bună (CSC valid), încărcare corectă (distribuție greutate), sigiliu intact, declarație greutate verificată (VGM pentru maritim)", "Nu există cerințe speciale", "Doar vizual", "Containerele sunt mereu sigure"],
      de: ["Container in gutem Zustand (gültiges CSC), korrekte Beladung (Gewichtsverteilung), intaktes Siegel, verifizierte Gewichtsangabe (VGM für See)", "Keine besonderen Anforderungen", "Nur visuell", "Container sind immer sicher"],
      en: ["Container in good condition (valid CSC), correct loading (weight distribution), intact seal, verified weight declaration (VGM for maritime)", "No special requirements", "Only visual", "Containers are always safe"]
    },
    correctIndex: 0,
    explanation: {
      ro: "VGM (Verified Gross Mass): obligatoriu pentru export maritim din 2016. Greșelile de încărcare = containere refuzate sau accidente.",
      de: "VGM (Verified Gross Mass): obligatorisch für Seeexport seit 2016. Ladefehler = abgelehnte Container oder Unfälle.",
      en: "VGM (Verified Gross Mass): mandatory for maritime export since 2016. Loading errors = rejected containers or accidents."
    }
  },

  // Level 5 Questions (10)
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Client cu 200 containere/lună Rotterdam-București. Cum structurezi soluția intermodală optimă?",
      de: "Szenario: Kunde mit 200 Containern/Monat Rotterdam-Bukarest. Wie strukturieren Sie die optimale intermodale Lösung?",
      en: "Scenario: Customer with 200 containers/month Rotterdam-Bucharest. How do you structure the optimal intermodal solution?"
    },
    options: {
      ro: ["Analiză rute alternative (via Duisburg, via Viena), contracte cu operatori feroviari, slot booking regulat, buffer stock pentru variabilitate, first/last mile optimizat", "Rutier direct pentru toate", "O singură rută fără alternative", "Fără contracte pe termen lung"],
      de: ["Analyse alternativer Routen (über Duisburg, über Wien), Verträge mit Bahnbetreibern, regelmäßige Slot-Buchung, Pufferbestand für Variabilität, optimierte First/Last Mile", "Direkter Straßentransport für alle", "Eine Route ohne Alternativen", "Keine Langzeitverträge"],
      en: ["Analysis of alternative routes (via Duisburg, via Vienna), contracts with rail operators, regular slot booking, buffer stock for variability, optimized first/last mile", "Direct road for all", "Single route without alternatives", "No long-term contracts"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Volumul mare permite negociere rate bune. Diversificarea rutelor asigură reziliență. Control tower pentru visibility end-to-end.",
      de: "Großes Volumen ermöglicht gute Ratenverhandlung. Routendiversifizierung sichert Resilienz. Control Tower für End-to-End-Visibility.",
      en: "Large volume allows good rate negotiation. Route diversification ensures resilience. Control tower for end-to-end visibility."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum gestionezi o perturbare majoră în rețeaua intermodală (grevă feroviară, blocare tunel)?",
      de: "Wie handhaben Sie eine größere Störung im intermodalen Netzwerk (Bahnstreik, Tunnelblockade)?",
      en: "How do you handle a major disruption in intermodal network (rail strike, tunnel blockage)?"
    },
    options: {
      ro: ["Activare rute alternative imediat, comunicare proactivă clienți, switch parțial la rutier, renegociere termeni livrare, lessons learned post-criză", "Aștepți rezolvarea", "Anulezi toate transporturile", "Blamezi operatorul feroviar"],
      de: ["Sofortige Aktivierung alternativer Routen, proaktive Kundenkommunikation, teilweiser Straßenswitch, Neuverhandlung Lieferbedingungen, Lessons Learned nach Krise", "Auf Lösung warten", "Alle Transporte stornieren", "Bahnbetreiber beschuldigen"],
      en: ["Immediate activation of alternative routes, proactive customer communication, partial switch to road, renegotiation of delivery terms, lessons learned post-crisis", "Wait for resolution", "Cancel all transports", "Blame rail operator"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Planurile de contingență trebuie pregătite în avans. Rețeaua de parteneri rutieri de backup e esențială pentru intermodal.",
      de: "Notfallpläne müssen im Voraus vorbereitet werden. Backup-Straßenpartnernetzwerk ist essentiell für Intermodal.",
      en: "Contingency plans must be prepared in advance. Backup road partner network is essential for intermodal."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt considerentele pentru optimizarea amprentei de carbon în transportul intermodal?",
      de: "Was sind die Überlegungen zur CO2-Fußabdruck-Optimierung im intermodalen Transport?",
      en: "What are considerations for carbon footprint optimization in intermodal transport?"
    },
    options: {
      ro: ["Maximizare segment feroviar/maritim, eficiență first/last mile (vehicule electrice), calculare și raportare emisii, certificate green, optimizare încărcare", "Intermodalul e automat green", "Emisiile nu se pot reduce", "Doar rutierul electric contează"],
      de: ["Maximierung Schienen-/Seeanteil, First/Last Mile-Effizienz (E-Fahrzeuge), Emissionsberechnung und -berichterstattung, Green-Zertifikate, Beladungsoptimierung", "Intermodal ist automatisch grün", "Emissionen nicht reduzierbar", "Nur elektrische Straße zählt"],
      en: ["Maximize rail/sea segment, first/last mile efficiency (electric vehicles), emissions calculation and reporting, green certificates, loading optimization", "Intermodal is automatically green", "Emissions cannot be reduced", "Only electric road matters"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Trenul emite ~20-25g CO2/tkm vs rutier ~60-70g. Optimizarea include și ocuparea containerelor - gol = ineficient și poluant.",
      de: "Bahn emittiert ~20-25g CO2/tkm vs Straße ~60-70g. Optimierung umfasst auch Containerfüllung - leer = ineffizient und umweltverschmutzend.",
      en: "Rail emits ~20-25g CO2/tkm vs road ~60-70g. Optimization includes container fill rate - empty = inefficient and polluting."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu complex: Transport de părți auto JIT din Turcia în Germania cu cerință de livrare zilnică. Soluție intermodală posibilă?",
      de: "Komplexes Szenario: JIT-Autoteiletransport aus Türkei nach Deutschland mit täglicher Lieferanforderung. Intermodale Lösung möglich?",
      en: "Complex scenario: JIT auto parts transport from Turkey to Germany with daily delivery requirement. Intermodal solution possible?"
    },
    options: {
      ro: ["Da, cu: short sea regulat (Ro-Ro), hub intermediar cu stock buffer, conexiune feroviară sincronizată, last mile JIT; necesită investiție în planificare și buffer", "Nu, doar rutierul poate face JIT", "Intermodalul e prea lent", "Ferry-ul nu e suficient de frecvent"],
      de: ["Ja, mit: regelmäßiger Short Sea (Ro-Ro), Zwischenhub mit Pufferlager, synchronisierte Schienenverbindung, Last Mile JIT; erfordert Planungs- und Pufferinvestition", "Nein, nur Straße kann JIT", "Intermodal ist zu langsam", "Fähre nicht häufig genug"],
      en: ["Yes, with: regular short sea (Ro-Ro), intermediate hub with buffer stock, synchronized rail connection, last mile JIT; requires planning and buffer investment", "No, only road can do JIT", "Intermodal is too slow", "Ferry not frequent enough"]
    },
    correctIndex: 0,
    explanation: {
      ro: "JIT intermodal necesită buffer strategic. Cost buffer < cost transport rutier pur. Mulți OEM-uri automotive folosesc deja acest model.",
      de: "JIT-Intermodal erfordert strategischen Puffer. Pufferkosten < reine Straßentransportkosten. Viele Auto-OEMs nutzen bereits dieses Modell.",
      en: "JIT intermodal requires strategic buffer. Buffer cost < pure road transport cost. Many automotive OEMs already use this model."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum evaluezi și selectezi un operator intermodal pentru un contract pe termen lung?",
      de: "Wie bewerten und wählen Sie einen Intermodal-Operator für einen Langzeitvertrag?",
      en: "How do you evaluate and select an intermodal operator for a long-term contract?"
    },
    options: {
      ro: ["Due diligence: stabilitate financiară, KPI istorici (OTD, claims), rețea și parteneri, capacitate IT, flexibilitate, referințe, plan de contingență", "Doar cel mai ieftin", "Prima ofertă primită", "Nu e nevoie de evaluare"],
      de: ["Due Diligence: finanzielle Stabilität, historische KPIs (OTD, Claims), Netzwerk und Partner, IT-Kapazität, Flexibilität, Referenzen, Notfallplan", "Nur der billigste", "Erstes erhaltenes Angebot", "Keine Bewertung nötig"],
      en: ["Due diligence: financial stability, historical KPIs (OTD, claims), network and partners, IT capacity, flexibility, references, contingency plan", "Only cheapest", "First offer received", "No evaluation needed"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Partenerul intermodal devine critic pentru supply chain. Eșecul său = eșecul tău. Selecția riguroasă previne probleme majore.",
      de: "Intermodal-Partner wird kritisch für Supply Chain. Sein Scheitern = Ihr Scheitern. Rigorose Auswahl verhindert große Probleme.",
      en: "Intermodal partner becomes critical for supply chain. Their failure = your failure. Rigorous selection prevents major problems."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt tendințele tehnologice care transformă transportul intermodal?",
      de: "Was sind die technologischen Trends die intermodalen Transport transformieren?",
      en: "What are technological trends transforming intermodal transport?"
    },
    options: {
      ro: ["Digitalizare (blockchain pentru documente, IoT tracking), automatizare terminale, trenuri mai lungi, hiper-loop studii, AI pentru optimizare rețea", "Tehnologia nu afectează intermodalul", "Doar trenuri mai rapide", "Nicio inovație în acest sector"],
      de: ["Digitalisierung (Blockchain für Dokumente, IoT-Tracking), Terminalautomatisierung, längere Züge, Hyperloop-Studien, KI für Netzwerkoptimierung", "Technologie beeinflusst Intermodal nicht", "Nur schnellere Züge", "Keine Innovation in diesem Sektor"],
      en: ["Digitalization (blockchain for documents, IoT tracking), terminal automation, longer trains, hyperloop studies, AI for network optimization", "Technology doesn't affect intermodal", "Only faster trains", "No innovation in this sector"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Trenuri de 740m (vs 500m actual) în UE = +30% capacitate. Terminal-uri automate reduc costul handling. Digitalizarea elimină hârtia.",
      de: "740m-Züge (vs 500m aktuell) in EU = +30% Kapazität. Automatische Terminals reduzieren Handlingkosten. Digitalisierung eliminiert Papier.",
      en: "740m trains (vs 500m current) in EU = +30% capacity. Automated terminals reduce handling cost. Digitalization eliminates paper."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum integrezi transportul intermodal în strategia generală de supply chain a unui client industrial?",
      de: "Wie integrieren Sie intermodalen Transport in die allgemeine Supply-Chain-Strategie eines Industriekunden?",
      en: "How do you integrate intermodal transport into industrial customer's overall supply chain strategy?"
    },
    options: {
      ro: ["Mapare fluxuri, identificare lane-uri potrivite, calculare TCO vs rutier, integrare sisteme (ERP, TMS), KPIs aliniate cu obiective business și ESG", "Intermodalul se adaugă fără strategie", "Doar transportatorul decide", "Supply chain nu include transport"],
      de: ["Flussabbildung, geeignete Lanes identifizieren, TCO vs Straße berechnen, Systemintegration (ERP, TMS), KPIs abgestimmt auf Business- und ESG-Ziele", "Intermodal wird ohne Strategie hinzugefügt", "Nur Transporteur entscheidet", "Supply Chain umfasst keinen Transport"],
      en: ["Flow mapping, identify suitable lanes, calculate TCO vs road, system integration (ERP, TMS), KPIs aligned with business and ESG objectives", "Intermodal added without strategy", "Only carrier decides", "Supply chain doesn't include transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Intermodalul nu e doar despre transport - e parte din strategia de cost, sustenabilitate și reziliență. Necesită commitment top management.",
      de: "Intermodal ist nicht nur Transport - ist Teil von Kosten-, Nachhaltigkeits- und Resilienzstrategie. Erfordert Top-Management-Commitment.",
      en: "Intermodal isn't just about transport - it's part of cost, sustainability and resilience strategy. Requires top management commitment."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Tranziție de la rutier 100% la mix 60% intermodal pentru un client retail cu 500 livrări/săptămână. Plan de implementare?",
      de: "Szenario: Übergang von 100% Straße zu 60% Intermodal-Mix für Retail-Kunden mit 500 Lieferungen/Woche. Implementierungsplan?",
      en: "Scenario: Transition from 100% road to 60% intermodal mix for retail customer with 500 deliveries/week. Implementation plan?"
    },
    options: {
      ro: ["Faze: pilot pe lane-uri selectate, scalare graduală, training echipă, ajustare procese, măsurare continuă KPI, optimizare iterativă pe 12-18 luni", "Switch complet imediat", "Fără pilot, direct implementare", "Doar transportatorul se adaptează"],
      de: ["Phasen: Pilot auf ausgewählten Lanes, graduelle Skalierung, Teamtraining, Prozessanpassung, kontinuierliche KPI-Messung, iterative Optimierung über 12-18 Monate", "Sofortiger kompletter Switch", "Ohne Pilot, direkte Implementierung", "Nur Transporteur passt sich an"],
      en: ["Phases: pilot on selected lanes, gradual scaling, team training, process adjustment, continuous KPI measurement, iterative optimization over 12-18 months", "Complete immediate switch", "No pilot, direct implementation", "Only carrier adapts"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Transformarea graduală reduce riscul. Pilotul validează asumțiile. Retailul are toleranță zero la întârzieri - testarea e obligatorie.",
      de: "Graduelle Transformation reduziert Risiko. Pilot validiert Annahmen. Retail hat Nulltoleranz für Verzögerungen - Testen ist obligatorisch.",
      en: "Gradual transformation reduces risk. Pilot validates assumptions. Retail has zero tolerance for delays - testing is mandatory."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt diferențele de competitivitate intermodală între coridoarele europene principale?",
      de: "Was sind die Unterschiede in der intermodalen Wettbewerbsfähigkeit zwischen europäischen Hauptkorridoren?",
      en: "What are intermodal competitiveness differences between main European corridors?"
    },
    options: {
      ro: ["Rhine-Alpine: matur, competitiv; Est-Vest: în dezvoltare, infrastructură limitate; Scandinavia: distanțe mari, favorizează feroviarul; Sud: short sea dominant", "Toate coridoarele sunt identice", "Doar Nord-Sud funcționează", "Intermodalul nu variază geografic"],
      de: ["Rhein-Alpen: reif, wettbewerbsfähig; Ost-West: in Entwicklung, begrenzte Infrastruktur; Skandinavien: große Distanzen, bevorzugt Schiene; Süd: Short Sea dominant", "Alle Korridore sind identisch", "Nur Nord-Süd funktioniert", "Intermodal variiert nicht geografisch"],
      en: ["Rhine-Alpine: mature, competitive; East-West: developing, limited infrastructure; Scandinavia: large distances, favors rail; South: short sea dominant", "All corridors are identical", "Only North-South works", "Intermodal doesn't vary geographically"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cunoașterea specificului fiecărui coridor e esențială. Rotterdam-Milano: foarte dezvoltat. România: potențial mare, dar terminale limitate.",
      de: "Wissen um Spezifik jedes Korridors ist essentiell. Rotterdam-Mailand: sehr entwickelt. Rumänien: großes Potenzial, aber begrenzte Terminals.",
      en: "Knowing specifics of each corridor is essential. Rotterdam-Milan: highly developed. Romania: large potential, but limited terminals."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum negociezi și structurezi un contract intermodal multi-anual cu volume variabile?",
      de: "Wie verhandeln und strukturieren Sie einen mehrjährigen Intermodal-Vertrag mit variablen Volumina?",
      en: "How do you negotiate and structure a multi-year intermodal contract with variable volumes?"
    },
    options: {
      ro: ["Commitment minim garantat, rate pe trepte de volum, clauze de ajustare (combustibil, inflație), SLA cu penalități/bonusuri, exit clauses, review anual", "Preț fix fără flexibilitate", "Doar per transport spot", "Contractele pe termen lung nu există"],
      de: ["Garantiertes Mindest-Commitment, Stufentarife nach Volumen, Anpassungsklauseln (Kraftstoff, Inflation), SLA mit Strafen/Boni, Exit-Klauseln, jährliche Überprüfung", "Festpreis ohne Flexibilität", "Nur Spot-Transport", "Langzeitverträge existieren nicht"],
      en: ["Guaranteed minimum commitment, tiered volume rates, adjustment clauses (fuel, inflation), SLA with penalties/bonuses, exit clauses, annual review", "Fixed price without flexibility", "Only spot transport", "Long-term contracts don't exist"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Contractul echilibrat protejează ambele părți. Commitment-ul garantat îți asigură capacitate, tiered pricing oferă economii pe volum.",
      de: "Ausgewogener Vertrag schützt beide Seiten. Garantiertes Commitment sichert Kapazität, Staffelpreise bieten Volumenersparnisse.",
      en: "Balanced contract protects both sides. Guaranteed commitment secures capacity, tiered pricing offers volume savings."
    }
  }
];
