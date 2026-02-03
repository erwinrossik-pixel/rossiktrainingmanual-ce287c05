import { TranslatedQuizQuestion } from '../../quizTranslations';

export const vehicleComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este sarcina maximă pe osie pentru un camion de 40t pe autostrăzile din Germania?",
      de: "Was ist die maximale Achslast für einen 40t-LKW auf deutschen Autobahnen?",
      en: "What is the maximum axle load for a 40t truck on German motorways?"
    },
    options: {
      ro: ["10 tone", "11.5 tone", "12 tone", "13 tone"],
      de: ["10 Tonnen", "11,5 Tonnen", "12 Tonnen", "13 Tonnen"],
      en: ["10 tonnes", "11.5 tonnes", "12 tonnes", "13 tonnes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sarcina maximă pe osie motoare în Germania este de 11.5 tone conform legislației europene.",
      de: "Die maximale Antriebsachslast in Deutschland beträgt gemäß europäischer Gesetzgebung 11,5 Tonnen.",
      en: "The maximum drive axle load in Germany is 11.5 tonnes according to European legislation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tip de semiremorcă este optim pentru transport de paleți EUR (120x80cm)?",
      de: "Welcher Aufliegertyp ist optimal für den Transport von EUR-Paletten (120x80cm)?",
      en: "What type of semi-trailer is optimal for EUR pallet transport (120x80cm)?"
    },
    options: {
      ro: ["Standard 13.6m - 33 paleți", "Mega trailer - 33 paleți", "Joloda - 36 paleți", "Double deck - 66 paleți"],
      de: ["Standard 13,6m - 33 Paletten", "Mega-Trailer - 33 Paletten", "Joloda - 36 Paletten", "Doppelstock - 66 Paletten"],
      en: ["Standard 13.6m - 33 pallets", "Mega trailer - 33 pallets", "Joloda - 36 pallets", "Double deck - 66 pallets"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Joloda (cu role) permite încărcare laterală și transport de 36 paleți EUR optimizat.",
      de: "Joloda (mit Rollen) ermöglicht seitliche Beladung und optimierten Transport von 36 EUR-Paletten.",
      en: "Joloda (with rollers) allows side loading and optimized transport of 36 EUR pallets."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este înălțimea interioară minimă pentru un Mega Trailer?",
      de: "Was ist die minimale Innenhöhe eines Mega-Trailers?",
      en: "What is the minimum interior height for a Mega Trailer?"
    },
    options: {
      ro: ["2.70m", "2.85m", "3.00m", "3.10m"],
      de: ["2,70m", "2,85m", "3,00m", "3,10m"],
      en: ["2.70m", "2.85m", "3.00m", "3.10m"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Mega Trailer-ul are înălțime interioară de 3.00m datorită roților mici și podelei coborâte.",
      de: "Der Mega-Trailer hat eine Innenhöhe von 3,00m durch kleine Räder und abgesenkten Boden.",
      en: "The Mega Trailer has 3.00m interior height due to small wheels and lowered floor."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Un transport urgă necesită camion cu prelată. Clientul cere 34 paleți EUR. Ce soluție propui?",
      de: "Ein Eilauftrag benötigt einen Planenauflieger. Der Kunde fordert 34 EUR-Paletten. Welche Lösung schlagen Sie vor?",
      en: "An urgent transport needs a tilt trailer. Client requires 34 EUR pallets. What solution do you propose?"
    },
    options: {
      ro: ["Standard 13.6m - nu încape", "Mega trailer cu stivuire", "Două camioane standard", "Joloda trailer"],
      de: ["Standard 13,6m - passt nicht", "Mega-Trailer mit Stapelung", "Zwei Standard-LKW", "Joloda-Trailer"],
      en: ["Standard 13.6m - won't fit", "Mega trailer with stacking", "Two standard trucks", "Joloda trailer"]
    },
    correctIndex: 3,
    explanation: {
      ro: "Joloda trailer permite 36 paleți într-un singur nivel, soluția optimă pentru 34 paleți.",
      de: "Der Joloda-Trailer ermöglicht 36 Paletten auf einer Ebene, die optimale Lösung für 34 Paletten.",
      en: "Joloda trailer allows 36 pallets on one level, the optimal solution for 34 pallets."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care este diferența de capacitate între un Jumbo și un Mega trailer pentru paleți industriali (120x100cm)?",
      de: "Was ist der Kapazitätsunterschied zwischen einem Jumbo und einem Mega-Trailer für Industriepaletten (120x100cm)?",
      en: "What is the capacity difference between a Jumbo and Mega trailer for industrial pallets (120x100cm)?"
    },
    options: {
      ro: ["Aceeași - 26 paleți", "Jumbo: 26, Mega: 30", "Jumbo: 30, Mega: 26", "Jumbo: 28, Mega: 28"],
      de: ["Gleich - 26 Paletten", "Jumbo: 26, Mega: 30", "Jumbo: 30, Mega: 26", "Jumbo: 28, Mega: 28"],
      en: ["Same - 26 pallets", "Jumbo: 26, Mega: 30", "Jumbo: 30, Mega: 26", "Jumbo: 28, Mega: 28"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Ambele tipuri au capacitate similară pentru paleți industriali: 26 bucăți pe un nivel.",
      de: "Beide Typen haben ähnliche Kapazität für Industriepaletten: 26 Stück auf einer Ebene.",
      en: "Both types have similar capacity for industrial pallets: 26 pieces on one level."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce verificări obligatorii trebuie făcute la preluarea unei semiremorci frigorifice?",
      de: "Welche Pflichtprüfungen müssen bei der Übernahme eines Kühlaufliegers durchgeführt werden?",
      en: "What mandatory checks must be done when taking over a refrigerated semi-trailer?"
    },
    options: {
      ro: ["Doar temperatura interioară", "Temperatura, combustibil agregat, etanșeitate uși", "Doar starea anvelopelor", "Doar documentele vehiculului"],
      de: ["Nur Innentemperatur", "Temperatur, Kraftstoff Aggregat, Türdichtung", "Nur Reifenzustand", "Nur Fahrzeugdokumente"],
      en: ["Only interior temperature", "Temperature, unit fuel, door sealing", "Only tyre condition", "Only vehicle documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificarea completă include: temperatura, nivelul combustibilului agregatui frigorific și etanșeitatea ușilor.",
      de: "Die vollständige Prüfung umfasst: Temperatur, Kraftstoffstand des Kühlaggregats und Türdichtung.",
      en: "Complete check includes: temperature, refrigeration unit fuel level and door sealing."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este greutatea maximă admisă pentru un ansamblu cu 5 osii în UE?",
      de: "Was ist das maximal zulässige Gewicht für eine 5-Achser-Kombination in der EU?",
      en: "What is the maximum permissible weight for a 5-axle combination in the EU?"
    },
    options: {
      ro: ["38 tone", "40 tone", "42 tone", "44 tone"],
      de: ["38 Tonnen", "40 Tonnen", "42 Tonnen", "44 Tonnen"],
      en: ["38 tonnes", "40 tonnes", "42 tonnes", "44 tonnes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ansamblul cu 5 osii (tractor 2 osii + semiremorcă 3 osii) are greutate maximă de 40 tone.",
      de: "Die 5-Achser-Kombination (2-Achser Zugmaschine + 3-Achser Auflieger) hat ein Höchstgewicht von 40 Tonnen.",
      en: "The 5-axle combination (2-axle tractor + 3-axle semi-trailer) has a maximum weight of 40 tonnes."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client solicită transport bobine oțel 25t. Camion disponibil: tractor 7.5t + semiremorcă 6.8t. Este fezabil?",
      de: "Kunde fordert Transport von 25t Stahlcoils. Verfügbarer LKW: Zugmaschine 7,5t + Auflieger 6,8t. Ist das machbar?",
      en: "Client requests transport of 25t steel coils. Available truck: tractor 7.5t + semi-trailer 6.8t. Is it feasible?"
    },
    options: {
      ro: ["Da, rămân 0.7t rezervă", "Nu, depășește cu 0.3t", "Da, exact la limită", "Nu, depășește cu 1.3t"],
      de: ["Ja, 0,7t Reserve übrig", "Nein, 0,3t Überschreitung", "Ja, genau an der Grenze", "Nein, 1,3t Überschreitung"],
      en: ["Yes, 0.7t reserve remaining", "No, exceeds by 0.3t", "Yes, exactly at limit", "No, exceeds by 1.3t"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Calcul: 40t max - 7.5t tractor - 6.8t semiremorcă = 25.7t payload. 25.7t - 25t = 0.7t rezervă.",
      de: "Berechnung: 40t max - 7,5t Zugmaschine - 6,8t Auflieger = 25,7t Nutzlast. 25,7t - 25t = 0,7t Reserve.",
      en: "Calculation: 40t max - 7.5t tractor - 6.8t semi-trailer = 25.7t payload. 25.7t - 25t = 0.7t reserve."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce tip de prelată este necesar pentru transport colete cu dimensiuni 2.8m înălțime?",
      de: "Welcher Planentyp ist für den Transport von Paketen mit 2,8m Höhe erforderlich?",
      en: "What type of tilt is needed for transporting packages with 2.8m height?"
    },
    options: {
      ro: ["Standard (2.70m înălțime)", "Mega (3.00m înălțime)", "Orice tip de prelată", "Double deck"],
      de: ["Standard (2,70m Höhe)", "Mega (3,00m Höhe)", "Jeder Planentyp", "Doppelstock"],
      en: ["Standard (2.70m height)", "Mega (3.00m height)", "Any tilt type", "Double deck"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pentru marfă de 2.8m înălțime este necesar Mega trailer cu 3.00m înălțime interioară.",
      de: "Für Ladung mit 2,8m Höhe ist ein Mega-Trailer mit 3,00m Innenhöhe erforderlich.",
      en: "For cargo of 2.8m height, a Mega trailer with 3.00m interior height is required."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este lungimea maximă permisă pentru o semiremorcă standard în UE?",
      de: "Was ist die maximal zulässige Länge eines Standard-Aufliegers in der EU?",
      en: "What is the maximum permitted length for a standard semi-trailer in the EU?"
    },
    options: {
      ro: ["12.0m", "13.6m", "14.0m", "15.0m"],
      de: ["12,0m", "13,6m", "14,0m", "15,0m"],
      en: ["12.0m", "13.6m", "14.0m", "15.0m"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lungimea maximă standard pentru semiremorcă în UE este 13.6 metri.",
      de: "Die maximale Standardlänge für Auflieger in der EU beträgt 13,6 Meter.",
      en: "The maximum standard length for a semi-trailer in the EU is 13.6 metres."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport internațional DE-RO. Camionul are anvelopele de vară. Este ianuarie. Ce risc major identifici?",
      de: "Internationaler Transport DE-RO. Der LKW hat Sommerreifen. Es ist Januar. Welches Hauptrisiko identifizieren Sie?",
      en: "International transport DE-RO. The truck has summer tyres. It is January. What major risk do you identify?"
    },
    options: {
      ro: ["Nici un risc, traseul e pe autostradă", "Amendă DE + AT + interdicție circulație", "Doar amendă în Austria", "Doar recomandare fără sancțiuni"],
      de: ["Kein Risiko, die Route ist Autobahn", "Bußgeld DE + AT + Fahrverbot", "Nur Bußgeld in Österreich", "Nur Empfehlung ohne Sanktionen"],
      en: ["No risk, route is on motorway", "Fine DE + AT + driving ban", "Only fine in Austria", "Only recommendation without sanctions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Germania și Austria au obligativitate anvelope de iarnă nov-mar. Sancțiuni: amenzi + posibilă interdicție.",
      de: "Deutschland und Österreich haben Winterreifenpflicht Nov-März. Sanktionen: Bußgelder + mögliches Fahrverbot.",
      en: "Germany and Austria have mandatory winter tyres Nov-Mar. Sanctions: fines + possible driving ban."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce echipament suplimentar este obligatoriu pentru transport în Scandinavia iarna?",
      de: "Welche zusätzliche Ausrüstung ist für den Wintertransport in Skandinavien Pflicht?",
      en: "What additional equipment is mandatory for winter transport in Scandinavia?"
    },
    options: {
      ro: ["Doar lanțuri de zăpadă", "Lanțuri + lopată + nisip/sare", "Doar anvelope de iarnă", "Nici un echipament special"],
      de: ["Nur Schneeketten", "Ketten + Schaufel + Sand/Salz", "Nur Winterreifen", "Keine besondere Ausrüstung"],
      en: ["Only snow chains", "Chains + shovel + sand/salt", "Only winter tyres", "No special equipment"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Scandinavia necesită kit complet iarnă: lanțuri, lopată, material antiderapant (nisip/sare).",
      de: "Skandinavien erfordert komplettes Winterset: Ketten, Schaufel, Streumaterial (Sand/Salz).",
      en: "Scandinavia requires complete winter kit: chains, shovel, anti-slip material (sand/salt)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este diferența principală între Coil Mulde și Flatbed pentru transport bobine?",
      de: "Was ist der Hauptunterschied zwischen Coil-Mulde und Flatbed für den Coil-Transport?",
      en: "What is the main difference between Coil Mulde and Flatbed for coil transport?"
    },
    options: {
      ro: ["Doar capacitatea de încărcare", "Coil Mulde are jgheaburi integrate de fixare", "Flatbed e mai sigur", "Nu există diferență"],
      de: ["Nur Ladekapazität", "Coil-Mulde hat integrierte Fixierrinnen", "Flatbed ist sicherer", "Kein Unterschied"],
      en: ["Only loading capacity", "Coil Mulde has integrated fixing troughs", "Flatbed is safer", "No difference"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Coil Mulde are jgheaburi/găuri integrate pentru fixarea sigură a bobinelor fără echipament suplimentar.",
      de: "Coil-Mulde hat integrierte Rinnen/Mulden zur sicheren Befestigung von Coils ohne zusätzliche Ausrüstung.",
      en: "Coil Mulde has integrated troughs/cradles for secure coil fixing without additional equipment."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Camion cu ADR pleacă din Hamburg spre Milano. La granița AT, controlul constată lipsă plăcuțe ADR laterale. Consecințe?",
      de: "ADR-LKW fährt von Hamburg nach Mailand. An der AT-Grenze stellt die Kontrolle fehlende seitliche ADR-Tafeln fest. Konsequenzen?",
      en: "ADR truck departs Hamburg for Milan. At AT border, control finds missing side ADR plates. Consequences?"
    },
    options: {
      ro: ["Avertisment verbal", "Amendă + montare obligatorie înainte de continuare", "Returnare la origine", "Escortă poliție până la destinație"],
      de: ["Mündliche Verwarnung", "Bußgeld + Pflichtmontage vor Weiterfahrt", "Rücksendung zum Ursprung", "Polizeieskorte bis zum Ziel"],
      en: ["Verbal warning", "Fine + mandatory mounting before continuing", "Return to origin", "Police escort to destination"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lipsa plăcuțelor ADR = amendă imediată + obligativitate montare corectă înainte de a continua transportul.",
      de: "Fehlende ADR-Tafeln = sofortiges Bußgeld + Pflicht zur korrekten Montage vor Weiterfahrt.",
      en: "Missing ADR plates = immediate fine + mandatory correct mounting before continuing transport."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce document trebuie să aibă șoferul pentru transport containere maritime 40ft?",
      de: "Welches Dokument muss der Fahrer für den Transport von 40ft Seecontainern haben?",
      en: "What document must the driver have for 40ft maritime container transport?"
    },
    options: {
      ro: ["Doar CMR", "CMR + Container Weight Verification (VGM)", "Doar VGM", "Nici un document special"],
      de: ["Nur CMR", "CMR + Container-Gewichtsverifizierung (VGM)", "Nur VGM", "Kein spezielles Dokument"],
      en: ["Only CMR", "CMR + Container Weight Verification (VGM)", "Only VGM", "No special document"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul containerelor maritime necesită CMR standard plus VGM (Verified Gross Mass) obligatoriu din 2016.",
      de: "Der Transport von Seecontainern erfordert Standard-CMR plus VGM (Verified Gross Mass), seit 2016 Pflicht.",
      en: "Maritime container transport requires standard CMR plus VGM (Verified Gross Mass) mandatory since 2016."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este capacitatea tipică de încărcare a unui camion de 7.5t?",
      de: "Was ist die typische Ladekapazität eines 7,5t-LKW?",
      en: "What is the typical loading capacity of a 7.5t truck?"
    },
    options: {
      ro: ["2-3 tone", "3-4 tone", "5-6 tone", "6-7 tone"],
      de: ["2-3 Tonnen", "3-4 Tonnen", "5-6 Tonnen", "6-7 Tonnen"],
      en: ["2-3 tonnes", "3-4 tonnes", "5-6 tonnes", "6-7 tonnes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Camionul de 7.5t are capacitate utilă de 3-4 tone (greutate totală minus greutate proprie vehicul).",
      de: "Der 7,5t-LKW hat eine Nutzlast von 3-4 Tonnen (Gesamtgewicht minus Fahrzeugleergewicht).",
      en: "The 7.5t truck has a payload of 3-4 tonnes (total weight minus vehicle empty weight)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Un client cere transport marfă 3.2m lățime. Ce tip de transport este necesar?",
      de: "Ein Kunde fordert den Transport von 3,2m breiter Ladung. Welche Transportart ist erforderlich?",
      en: "A client requests transport of 3.2m wide cargo. What type of transport is needed?"
    },
    options: {
      ro: ["Standard - intră în 2.55m lățime", "Transport agabaritic cu autorizații", "Mega trailer", "Double deck"],
      de: ["Standard - passt in 2,55m Breite", "Schwertransport mit Genehmigungen", "Mega-Trailer", "Doppelstock"],
      en: ["Standard - fits in 2.55m width", "Oversized transport with permits", "Mega trailer", "Double deck"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marfa de 3.2m lățime depășește limita standard de 2.55m, necesitând autorizații speciale agabaritice.",
      de: "Ladung mit 3,2m Breite überschreitet das Standardlimit von 2,55m und erfordert Sondergenehmigungen.",
      en: "3.2m wide cargo exceeds the 2.55m standard limit, requiring special oversized permits."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Autotractor MAN TGX 18.510 (Euro 6d) cu semiremorcă 3 osii. Greutate proprie: 15.2t. Ce payload maxim pe ruta DE-FR?",
      de: "MAN TGX 18.510 Sattelzugmaschine (Euro 6d) mit 3-Achs-Auflieger. Leergewicht: 15,2t. Maximale Nutzlast auf Route DE-FR?",
      en: "MAN TGX 18.510 tractor (Euro 6d) with 3-axle semi-trailer. Tare weight: 15.2t. Maximum payload on DE-FR route?"
    },
    options: {
      ro: ["24.8 tone", "25.8 tone", "26.8 tone", "28.8 tone"],
      de: ["24,8 Tonnen", "25,8 Tonnen", "26,8 Tonnen", "28,8 Tonnen"],
      en: ["24.8 tonnes", "25.8 tonnes", "26.8 tonnes", "28.8 tonnes"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Calcul: 40t (max DE/FR) - 15.2t (tara) = 24.8t payload maxim disponibil.",
      de: "Berechnung: 40t (max DE/FR) - 15,2t (Tara) = 24,8t maximal verfügbare Nutzlast.",
      en: "Calculation: 40t (max DE/FR) - 15.2t (tare) = 24.8t maximum available payload."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă certificarea ATP pentru vehicule?",
      de: "Was bedeutet die ATP-Zertifizierung für Fahrzeuge?",
      en: "What does ATP certification mean for vehicles?"
    },
    options: {
      ro: ["Autorizație transport periculos", "Acord transport perisabile la temperaturi controlate", "Autorizație transport persoane", "Acord taxe petrolifere"],
      de: ["Genehmigung für Gefahrguttransport", "Vereinbarung über temperaturgeführten Transport", "Personenbeförderungsgenehmigung", "Mineralölsteuerabkommen"],
      en: ["Dangerous goods transport permit", "Agreement on temperature-controlled transport", "Passenger transport permit", "Petroleum tax agreement"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ATP = Accord relatif aux Transports internationaux de denrées Périssables - certificare vehicule frigorifice.",
      de: "ATP = Übereinkommen über internationale Beförderung verderblicher Lebensmittel - Zertifizierung für Kühlfahrzeuge.",
      en: "ATP = Agreement on Transport of Perishable foodstuffs - certification for refrigerated vehicles."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care este avantajul principal al suspensiei pneumatice față de arc?",
      de: "Was ist der Hauptvorteil der Luftfederung gegenüber Blattfedern?",
      en: "What is the main advantage of air suspension over leaf springs?"
    },
    options: {
      ro: ["Cost mai mic", "Protecție mai bună a mărfii fragile", "Întreținere mai ușoară", "Capacitate mai mare"],
      de: ["Geringere Kosten", "Besserer Schutz für empfindliche Ladung", "Einfachere Wartung", "Höhere Kapazität"],
      en: ["Lower cost", "Better protection for fragile cargo", "Easier maintenance", "Higher capacity"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Suspensia pneumatică reduce vibrațiile și șocurile, protejând mai bine marfa sensibilă/fragilă.",
      de: "Luftfederung reduziert Vibrationen und Stöße und schützt empfindliche/fragile Ladung besser.",
      en: "Air suspension reduces vibrations and shocks, better protecting sensitive/fragile cargo."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tip de camion este potrivit pentru transport vehicule (car carrier)?",
      de: "Welcher LKW-Typ eignet sich für den Fahrzeugtransport (Autotransporter)?",
      en: "What type of truck is suitable for vehicle transport (car carrier)?"
    },
    options: {
      ro: ["Prelată standard", "Autotransporter cu 2-3 nivele", "Cisternă", "Container"],
      de: ["Standard-Plane", "Autotransporter mit 2-3 Ebenen", "Tankwagen", "Container"],
      en: ["Standard tilt", "Car transporter with 2-3 levels", "Tanker", "Container"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Autotransporter-ul specializat are platforme pe multiple nivele pentru transport eficient vehicule.",
      de: "Der spezialisierte Autotransporter hat mehrstöckige Plattformen für effizienten Fahrzeugtransport.",
      en: "The specialized car transporter has multi-level platforms for efficient vehicle transport."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Semiremorcă frigorifică necesită service în timpul transportului DE-ES. Unde se poate efectua reparația agregatuluiThermo King?",
      de: "Kühlauflieger benötigt Service während Transport DE-ES. Wo kann die Reparatur des Thermo King Aggregats durchgeführt werden?",
      en: "Refrigerated semi-trailer needs service during DE-ES transport. Where can Thermo King unit repair be done?"
    },
    options: {
      ro: ["Doar în țara de înmatriculare", "La orice service autorizat Thermo King în traseu", "Doar la destinație", "Nu se poate repara în timpul transportului"],
      de: ["Nur im Zulassungsland", "Bei jedem autorisierten Thermo King Service unterwegs", "Nur am Zielort", "Keine Reparatur während des Transports möglich"],
      en: ["Only in registration country", "At any authorized Thermo King service en route", "Only at destination", "Cannot be repaired during transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Thermo King are rețea europeană de service-uri autorizate, reparația poate fi făcută oriunde pe traseu.",
      de: "Thermo King hat ein europäisches Netzwerk autorisierter Servicestellen, Reparatur kann überall unterwegs erfolgen.",
      en: "Thermo King has a European network of authorized service points, repair can be done anywhere en route."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care este rolul sistemului EBS (Electronic Braking System) la vehiculele grele?",
      de: "Welche Rolle spielt das EBS (Electronic Braking System) bei Schwerlastfahrzeugen?",
      en: "What is the role of EBS (Electronic Braking System) in heavy vehicles?"
    },
    options: {
      ro: ["Doar afișare erori", "Control electronic frânare pentru stabilitate și siguranță", "Navigație GPS", "Control combustibil"],
      de: ["Nur Fehleranzeige", "Elektronische Bremssteuerung für Stabilität und Sicherheit", "GPS-Navigation", "Kraftstoffkontrolle"],
      en: ["Only error display", "Electronic brake control for stability and safety", "GPS navigation", "Fuel control"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EBS controlează electronic frânarea, oferind stabilitate, ABS, distribuție optimă a forței de frânare.",
      de: "EBS steuert das Bremsen elektronisch und bietet Stabilität, ABS, optimale Bremskraftverteilung.",
      en: "EBS electronically controls braking, providing stability, ABS, optimal brake force distribution."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce verificare trebuie făcută la schimbarea între tractor și semiremorcă?",
      de: "Welche Prüfung muss beim Wechsel zwischen Zugmaschine und Auflieger durchgeführt werden?",
      en: "What check must be done when switching between tractor and semi-trailer?"
    },
    options: {
      ro: ["Doar nivel combustibil", "Cuplare corectă, conexiuni electrice și pneumatice", "Doar documente", "Doar verificare vizuală"],
      de: ["Nur Kraftstoffstand", "Korrekte Kupplung, elektrische und pneumatische Verbindungen", "Nur Dokumente", "Nur Sichtprüfung"],
      en: ["Only fuel level", "Correct coupling, electrical and pneumatic connections", "Only documents", "Only visual check"]
    },
    correctIndex: 1,
    explanation: {
      ro: "La schimbarea remorcii: verificare cuplare șa, conexiuni electrice (lumini) și pneumatice (frâne).",
      de: "Beim Aufliegerwechsel: Prüfung der Sattelkupplung, elektrische (Beleuchtung) und pneumatische (Bremsen) Verbindungen.",
      en: "When changing trailer: check fifth wheel coupling, electrical (lights) and pneumatic (brakes) connections."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport marfă 28t cu camion 40t. La cântărire în DE, greutatea totală = 40.8t. Ce opțiuni ai?",
      de: "Transport von 28t Ladung mit 40t-LKW. Bei der Wiegung in DE beträgt das Gesamtgewicht 40,8t. Welche Optionen haben Sie?",
      en: "Transport of 28t cargo with 40t truck. At weighing in DE, total weight = 40.8t. What options do you have?"
    },
    options: {
      ro: ["Continuare, toleranță 5%", "Descărcare parțială obligatorie 0.8t", "Amendă și continuare", "Schimbare vehicul"],
      de: ["Weiterfahrt, 5% Toleranz", "Obligatorische Teilentladung 0,8t", "Bußgeld und Weiterfahrt", "Fahrzeugwechsel"],
      en: ["Continue, 5% tolerance", "Mandatory partial unloading 0.8t", "Fine and continue", "Vehicle change"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Germania nu permite depășire greutate. Obligatoriu: descărcare 0.8t la cel mai apropiat punct sau amendă + descărcare.",
      de: "Deutschland erlaubt keine Gewichtsüberschreitung. Pflicht: 0,8t Entladung am nächsten Punkt oder Bußgeld + Entladung.",
      en: "Germany doesn't allow weight excess. Mandatory: 0.8t unloading at nearest point or fine + unloading."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care este diferența între Walking Floor și Fond Mouvant?",
      de: "Was ist der Unterschied zwischen Walking Floor und Fond Mouvant?",
      en: "What is the difference between Walking Floor and Fond Mouvant?"
    },
    options: {
      ro: ["Sunt identice, doar denumiri diferite", "Walking Floor = hidraulic, Fond Mouvant = mecanic", "Walking Floor = EN, Fond Mouvant = FR", "Capacități diferite"],
      de: ["Identisch, nur andere Bezeichnungen", "Walking Floor = hydraulisch, Fond Mouvant = mechanisch", "Walking Floor = EN, Fond Mouvant = FR", "Unterschiedliche Kapazitäten"],
      en: ["Identical, just different names", "Walking Floor = hydraulic, Fond Mouvant = mechanical", "Walking Floor = EN, Fond Mouvant = FR", "Different capacities"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Walking Floor și Fond Mouvant sunt același sistem - podea mobilă hidraulică, denumiri EN vs FR.",
      de: "Walking Floor und Fond Mouvant sind dasselbe System - hydraulischer beweglicher Boden, EN- vs. FR-Bezeichnung.",
      en: "Walking Floor and Fond Mouvant are the same system - hydraulic moving floor, EN vs FR naming."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este sistemul Hubodometer și ce măsoară?",
      de: "Was ist das Hubodometer-System und was misst es?",
      en: "What is the Hubodometer system and what does it measure?"
    },
    options: {
      ro: ["Temperatură motor", "Kilometri parcurși de roată/osie", "Presiune anvelope", "Consum combustibil"],
      de: ["Motortemperatur", "Von Rad/Achse zurückgelegte Kilometer", "Reifendruck", "Kraftstoffverbrauch"],
      en: ["Engine temperature", "Kilometres travelled by wheel/axle", "Tyre pressure", "Fuel consumption"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Hubodometer-ul măsoară kilometrii parcurși de fiecare osie, util pentru tracking și service programat.",
      de: "Das Hubodometer misst die von jeder Achse zurückgelegten Kilometer, nützlich für Tracking und geplante Wartung.",
      en: "Hubodometer measures kilometres travelled by each axle, useful for tracking and scheduled service."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce echipament special este necesar pentru transport sticlă plană?",
      de: "Welche Spezialausrüstung ist für den Transport von Flachglas erforderlich?",
      en: "What special equipment is needed for flat glass transport?"
    },
    options: {
      ro: ["Prelată standard", "Innenlader (Glass-Rack)", "Cisternă", "Container standard"],
      de: ["Standard-Plane", "Innenlader (Glasgestell)", "Tankwagen", "Standard-Container"],
      en: ["Standard tilt", "Innenlader (Glass-Rack)", "Tanker", "Standard container"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sticla plană necesită Innenlader - semiremorcă cu rack-uri speciale și protecție anti-vibrații.",
      de: "Flachglas erfordert Innenlader - Auflieger mit speziellen Gestellen und Vibrationsdämpfung.",
      en: "Flat glass requires Innenlader - semi-trailer with special racks and anti-vibration protection."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Un client cere transport 60m³ marfă voluminoasă (density 0.2t/m³). Ce tip vehicul și câte curse?",
      de: "Ein Kunde fordert den Transport von 60m³ voluminöser Ladung (Dichte 0,2t/m³). Welcher Fahrzeugtyp und wie viele Fahrten?",
      en: "A client requests transport of 60m³ bulky cargo (density 0.2t/m³). What vehicle type and how many trips?"
    },
    options: {
      ro: ["1x Standard 90m³", "1x Mega 100m³", "2x Standard 45m³", "2x Mega 50m³ fiecare"],
      de: ["1x Standard 90m³", "1x Mega 100m³", "2x Standard 45m³", "2x Mega je 50m³"],
      en: ["1x Standard 90m³", "1x Mega 100m³", "2x Standard 45m³", "2x Mega 50m³ each"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mega trailer: 100m³ volum, greutate marfă: 60m³ × 0.2t = 12t < 24t payload. 1 cursă suficientă.",
      de: "Mega-Trailer: 100m³ Volumen, Ladungsgewicht: 60m³ × 0,2t = 12t < 24t Nutzlast. 1 Fahrt ausreichend.",
      en: "Mega trailer: 100m³ volume, cargo weight: 60m³ × 0.2t = 12t < 24t payload. 1 trip sufficient."
    }
  }
];
