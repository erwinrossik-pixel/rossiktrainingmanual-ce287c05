import { TranslatedQuizQuestion } from '../quizTranslations';

export const vehicleExtendedQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care este lungimea standard a unei semiremorci cu prelată?",
      en: "What is the standard length of a curtainsider trailer?",
      de: "Was ist die Standardlänge eines Planenauflegers?"
    },
    options: {
      ro: ["10.5m", "12.0m", "13.6m", "15.0m"],
      en: ["10.5m", "12.0m", "13.6m", "15.0m"],
      de: ["10,5m", "12,0m", "13,6m", "15,0m"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Semiremorca europeană standard cu prelată/tautliner are 13.6m lungime.",
      en: "The standard European curtainsider/tautliner trailer is 13.6m long.",
      de: "Der europäische Standard-Planenauflieger/Tautliner ist 13,6m lang."
    }
  },
  {
    question: {
      ro: "Aproximativ câți europalți poate încăpea o semiremorcă de 13.6m?",
      en: "Approximately how many EUR pallets can a 13.6m curtainsider hold?",
      de: "Wie viele EUR-Paletten kann ein 13,6m Planenauflieger aufnehmen?"
    },
    options: {
      ro: ["20 paleți", "25 paleți", "33 paleți", "40 paleți"],
      en: ["20 pallets", "25 pallets", "33 pallets", "40 pallets"],
      de: ["20 Paletten", "25 Paletten", "33 Paletten", "40 Paletten"]
    },
    correctIndex: 2,
    explanation: {
      ro: "O semiremorcă standard de 13.6m poate încăpea aproximativ 33 europalți.",
      en: "A standard 13.6m curtainsider can hold approximately 33 EUR pallets.",
      de: "Ein Standard 13,6m Planenauflieger kann ungefähr 33 EUR-Paletten aufnehmen."
    }
  },
  {
    question: {
      ro: "Care este capacitatea utilă tipică a unei semiremorci de 13.6m?",
      en: "What is the typical payload capacity of a 13.6m trailer?",
      de: "Was ist die typische Nutzlast eines 13,6m Aufliegers?"
    },
    options: {
      ro: ["10-15 tone", "18-22 tone", "24-29 tone", "35-40 tone"],
      en: ["10-15 tonnes", "18-22 tonnes", "24-29 tonnes", "35-40 tonnes"],
      de: ["10-15 Tonnen", "18-22 Tonnen", "24-29 Tonnen", "35-40 Tonnen"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Capacitatea utilă este de obicei 24-29 tone în funcție de specificațiile camionului/remorcii.",
      en: "The payload capacity is typically 24-29 tonnes depending on the truck/trailer specification.",
      de: "Die Nutzlast beträgt typischerweise 24-29 Tonnen je nach LKW-/Auflieger-Spezifikation."
    }
  },
  {
    question: {
      ro: "Pentru ce este folosită o semiremorcă MEGA?",
      en: "What is a MEGA trailer used for?",
      de: "Wofür wird ein MEGA-Auflieger verwendet?"
    },
    options: {
      ro: ["Încărcături foarte grele", "Marfă voluminoasă și ușoară datorită înălțimii interne de 3m", "Doar containere", "Doar distanțe scurte"],
      en: ["Extra heavy loads", "High-volume, light cargo due to 3m internal height", "Only containers", "Short distance only"],
      de: ["Extra schwere Lasten", "Voluminöse, leichte Fracht durch 3m Innenhöhe", "Nur Container", "Nur Kurzstrecke"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Semiremorcile MEGA au 3m înălțime internă vs 2.7m standard, ideale pentru automotive și mărfuri voluminoase ușoare.",
      en: "MEGA trailers have 3m internal height vs 2.7m standard, ideal for automotive and voluminous light goods.",
      de: "MEGA-Auflieger haben 3m Innenhöhe vs. 2,7m Standard, ideal für Automotive und voluminöse leichte Güter."
    }
  },
  {
    question: {
      ro: "Care este MMA (Masa Maximă Autorizată) maximă în majoritatea țărilor UE?",
      en: "What is the maximum GVW (Gross Vehicle Weight) in most EU countries?",
      de: "Was ist das maximale zGG (zulässiges Gesamtgewicht) in den meisten EU-Ländern?"
    },
    options: {
      ro: ["30 tone", "35 tone", "40 tone", "44 tone"],
      en: ["30 tonnes", "35 tonnes", "40 tonnes", "44 tonnes"],
      de: ["30 Tonnen", "35 Tonnen", "40 Tonnen", "44 Tonnen"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Limita standard UE pentru MMA este 40 tone, deși unele țări permit 44 tone pentru rute specifice sau intermodal.",
      en: "Standard EU GVW limit is 40 tonnes, though some countries allow 44 tonnes for specific routes or intermodal.",
      de: "Standard-EU-zGG-Limit ist 40 Tonnen, obwohl einige Länder 44 Tonnen für bestimmte Strecken oder intermodal erlauben."
    }
  },
  {
    question: {
      ro: "Pentru ce este proiectată o semiremorcă frigorifică?",
      en: "What is a reefer trailer designed for?",
      de: "Wofür ist ein Kühlauflieger konzipiert?"
    },
    options: {
      ro: ["Mașini grele", "Transport cu temperatură controlată", "Doar mărfuri periculoase", "Marfă supradimensionată"],
      en: ["Heavy machinery", "Temperature-controlled transport", "Hazardous goods only", "Oversized cargo"],
      de: ["Schwere Maschinen", "Temperaturgeführter Transport", "Nur Gefahrgut", "Übergroße Fracht"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Semiremorcile frigorifice (reefer) mențin temperaturi controlate pentru mărfuri perisabile, farmaceutice, etc.",
      en: "Reefer (refrigerated) trailers maintain controlled temperatures for perishable goods, pharma, etc.",
      de: "Kühlauflieger halten kontrollierte Temperaturen für verderbliche Waren, Pharma, etc."
    }
  },
  // Additional 24 questions for vehicle chapter
  {
    question: {
      ro: "Care este înălțimea internă standard a unei semiremorci standard?",
      en: "What is the standard internal height of a standard trailer?",
      de: "Was ist die Standard-Innenhöhe eines Standard-Aufliegers?"
    },
    options: {
      ro: ["2.4m", "2.7m", "3.0m", "3.3m"],
      en: ["2.4m", "2.7m", "3.0m", "3.3m"],
      de: ["2,4m", "2,7m", "3,0m", "3,3m"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Înălțimea internă standard este 2.7m, suficientă pentru 2 nivele de europalți standard.",
      en: "Standard internal height is 2.7m, sufficient for 2 levels of standard EUR pallets.",
      de: "Die Standard-Innenhöhe beträgt 2,7m, ausreichend für 2 Ebenen Standard-EUR-Paletten."
    }
  },
  {
    question: {
      ro: "Care este lățimea internă tipică a unei semiremorci?",
      en: "What is the typical internal width of a trailer?",
      de: "Was ist die typische Innenbreite eines Aufliegers?"
    },
    options: {
      ro: ["2.0m", "2.45m", "2.7m", "3.0m"],
      en: ["2.0m", "2.45m", "2.7m", "3.0m"],
      de: ["2,0m", "2,45m", "2,7m", "3,0m"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lățimea internă de 2.45m permite încărcarea a 2 europalți (80cm) sau 3 paleți industriali (100cm) pe lățime.",
      en: "Internal width of 2.45m allows loading 2 EUR pallets (80cm) or 3 industrial pallets (100cm) widthwise.",
      de: "Innenbreite von 2,45m ermöglicht das Laden von 2 EUR-Paletten (80cm) oder 3 Industriepaletten (100cm) in der Breite."
    }
  },
  {
    question: {
      ro: "Ce tip de semiremorcă este 'tautliner'?",
      en: "What type of trailer is a 'tautliner'?",
      de: "Was für ein Auflieger ist ein 'Tautliner'?"
    },
    options: {
      ro: ["Frigorific", "Cu prelată laterală și verticală", "Container", "Basculant"],
      en: ["Refrigerated", "With side and vertical curtains", "Container", "Tipper"],
      de: ["Kühlauflieger", "Mit Seiten- und Vertikalplanen", "Container", "Kipper"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tautliner are prelate laterale și superioare, permițând încărcare/descărcare din lateral și de sus.",
      en: "Tautliner has side and top curtains, allowing loading/unloading from sides and top.",
      de: "Tautliner hat Seiten- und Dachplanen, die Be-/Entladung von der Seite und von oben ermöglichen."
    }
  },
  {
    question: {
      ro: "Ce este un 'box trailer' (semiremorcă cu pereți rigizi)?",
      en: "What is a 'box trailer'?",
      de: "Was ist ein 'Box-Auflieger'?"
    },
    options: {
      ro: ["Semiremorcă cu pereți de prelată", "Semiremorcă cu pereți rigizi/metalici, închisă complet", "Semiremorcă deschisă", "Semiremorcă pentru containere"],
      en: ["Curtain-sided trailer", "Trailer with rigid/metal walls, fully enclosed", "Open trailer", "Container trailer"],
      de: ["Planenauflieger", "Auflieger mit starren/Metallwänden, vollständig geschlossen", "Offener Auflieger", "Container-Auflieger"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Box trailer oferă protecție maximă și securitate, cu încărcare doar din spate.",
      en: "Box trailer offers maximum protection and security, with loading only from rear.",
      de: "Box-Auflieger bietet maximalen Schutz und Sicherheit, mit Beladung nur von hinten."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'XL certificate' pentru o semiremorcă?",
      en: "What does 'XL certificate' mean for a trailer?",
      de: "Was bedeutet 'XL-Zertifikat' für einen Auflieger?"
    },
    options: {
      ro: ["Dimensiune extra-large", "Certificat de fixare a mărfii conform EN 12642 XL", "Licență internațională", "Certificat de emisii"],
      en: ["Extra-large size", "Cargo securing certificate according to EN 12642 XL", "International license", "Emissions certificate"],
      de: ["Extra-große Größe", "Ladungssicherungszertifikat gemäß EN 12642 XL", "Internationale Lizenz", "Emissionszertifikat"]
    },
    correctIndex: 1,
    explanation: {
      ro: "XL certificate confirmă că structura remorcii poate reține marfa conform standardului EN 12642 XL.",
      en: "XL certificate confirms the trailer structure can retain cargo according to EN 12642 XL standard.",
      de: "XL-Zertifikat bestätigt, dass die Aufliegerstruktur die Fracht gemäß EN 12642 XL-Standard halten kann."
    }
  },
  {
    question: {
      ro: "Care este diferența între 'coil well' și semiremorca standard?",
      en: "What is the difference between a 'coil well' and standard trailer?",
      de: "Was ist der Unterschied zwischen einem 'Coil-Mulde' und Standard-Auflieger?"
    },
    options: {
      ro: ["Nicio diferență", "Are o adâncitură specială pentru transportul coilurilor de oțel", "Este mai scurtă", "Este frigorifică"],
      en: ["No difference", "Has a special recess for transporting steel coils", "It's shorter", "It's refrigerated"],
      de: ["Kein Unterschied", "Hat eine spezielle Vertiefung für den Transport von Stahlcoils", "Er ist kürzer", "Er ist gekühlt"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Coil well are o adâncitură în podea pentru a asigura și centra coilurile de oțel în siguranță.",
      en: "Coil well has a floor recess to secure and center steel coils safely.",
      de: "Coil-Mulde hat eine Bodenvertiefung, um Stahlcoils sicher zu fixieren und zu zentrieren."
    }
  },
  {
    question: {
      ro: "Ce este o 'semiremorcă lowdeck/low loader'?",
      en: "What is a 'lowdeck/low loader' trailer?",
      de: "Was ist ein 'Tiefbett/Tieflader' Auflieger?"
    },
    options: {
      ro: ["Semiremorcă cu podea joasă pentru mărfuri înalte sau utilaje", "Semiremorcă frigorifică", "Semiremorcă pentru containere", "Semiremorcă basculantă"],
      en: ["Low-floor trailer for tall cargo or machinery", "Refrigerated trailer", "Container trailer", "Tipper trailer"],
      de: ["Tieflader für hohe Fracht oder Maschinen", "Kühlauflieger", "Container-Auflieger", "Kipperauflieger"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Low loader are podea coborâtă pentru a transporta mărfuri înalte sau utilaje sub limita de înălțime de 4m.",
      en: "Low loader has a lowered floor to transport tall cargo or machinery under the 4m height limit.",
      de: "Tieflader hat einen abgesenkten Boden, um hohe Fracht oder Maschinen unter der 4m-Höhengrenze zu transportieren."
    }
  },
  {
    question: {
      ro: "Care este înălțimea totală maximă permisă pentru un vehicul în UE?",
      en: "What is the maximum total height allowed for a vehicle in EU?",
      de: "Was ist die maximal zulässige Gesamthöhe eines Fahrzeugs in der EU?"
    },
    options: {
      ro: ["3.5m", "4.0m", "4.5m", "5.0m"],
      en: ["3.5m", "4.0m", "4.5m", "5.0m"],
      de: ["3,5m", "4,0m", "4,5m", "5,0m"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Limita de înălțime în UE este de 4.0m, deși unele țări au restricții suplimentare pe anumite rute.",
      en: "EU height limit is 4.0m, though some countries have additional restrictions on certain routes.",
      de: "EU-Höhengrenze ist 4,0m, obwohl einige Länder zusätzliche Einschränkungen auf bestimmten Strecken haben."
    }
  },
  {
    question: {
      ro: "Care este lățimea maximă permisă pentru un vehicul standard în UE?",
      en: "What is the maximum width allowed for a standard vehicle in EU?",
      de: "Was ist die maximal zulässige Breite eines Standardfahrzeugs in der EU?"
    },
    options: {
      ro: ["2.35m", "2.55m", "2.75m", "3.00m"],
      en: ["2.35m", "2.55m", "2.75m", "3.00m"],
      de: ["2,35m", "2,55m", "2,75m", "3,00m"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lățimea standard maximă este 2.55m, cu excepții pentru remorcile frigorifice care pot avea 2.6m.",
      en: "Standard maximum width is 2.55m, with exceptions for reefer trailers which can be 2.6m.",
      de: "Standard-Maximalbreite ist 2,55m, mit Ausnahmen für Kühlauflieger, die 2,6m sein können."
    }
  },
  {
    question: {
      ro: "Ce este un 'double deck' trailer?",
      en: "What is a 'double deck' trailer?",
      de: "Was ist ein 'Doppelstock' Auflieger?"
    },
    options: {
      ro: ["Semiremorcă cu doi șoferi", "Semiremorcă cu podea intermediară pentru încărcare pe două nivele", "Două semiremorci cuplate", "Semiremorcă pentru mărfuri lichide"],
      en: ["Trailer with two drivers", "Trailer with intermediate floor for two-level loading", "Two coupled trailers", "Trailer for liquid goods"],
      de: ["Auflieger mit zwei Fahrern", "Auflieger mit Zwischenboden für zweistöckige Beladung", "Zwei gekoppelte Auflieger", "Auflieger für flüssige Güter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Double deck permite încărcarea pe două nivele pentru maximizarea utilizării volumului.",
      en: "Double deck allows loading on two levels to maximize volume utilization.",
      de: "Doppelstock ermöglicht Beladung auf zwei Ebenen zur Maximierung der Volumennutzung."
    }
  },
  {
    question: {
      ro: "Ce caracteristică are o semiremorcă 'joloda'?",
      en: "What feature does a 'joloda' trailer have?",
      de: "Welche Eigenschaft hat ein 'Joloda' Auflieger?"
    },
    options: {
      ro: ["Prelată automată", "Șine în podea pentru încărcare rapidă cu paleți pe role", "Sistem frigorific", "Basculare hidraulică"],
      en: ["Automatic curtain", "Floor rails for quick loading with roller pallets", "Refrigeration system", "Hydraulic tipping"],
      de: ["Automatische Plane", "Bodenschienen für schnelles Beladen mit Rollenpaletten", "Kühlsystem", "Hydraulisches Kippen"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Joloda are șine în podea care permit glisarea rapidă a paleților, reducând timpul de încărcare.",
      en: "Joloda has floor rails that allow quick sliding of pallets, reducing loading time.",
      de: "Joloda hat Bodenschienen, die schnelles Gleiten der Paletten ermöglichen und die Ladezeit reduzieren."
    }
  },
  {
    question: {
      ro: "Care este scopul unui 'hayon' (lift hidraulic)?",
      en: "What is the purpose of a 'tail lift' (hydraulic lift)?",
      de: "Was ist der Zweck einer 'Ladebordwand' (Hydraulik-Hebebühne)?"
    },
    options: {
      ro: ["Ridicarea cabinei", "Încărcarea/descărcarea mărfii de la nivelul solului", "Frânare suplimentară", "Iluminat de noapte"],
      en: ["Lifting the cabin", "Loading/unloading cargo from ground level", "Additional braking", "Night lighting"],
      de: ["Anheben der Kabine", "Be-/Entladen von Fracht vom Bodenniveau", "Zusätzliches Bremsen", "Nachtbeleuchtung"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Hayonul hidraulic permite încărcarea fără rampă, esențial pentru livrări la adrese fără docking.",
      en: "Tail lift allows loading without a ramp, essential for deliveries at addresses without docking.",
      de: "Ladebordwand ermöglicht Beladung ohne Rampe, wichtig für Lieferungen an Adressen ohne Laderampe."
    }
  },
  {
    question: {
      ro: "Ce este sarcina pe osia din spate în terminologia de transport?",
      en: "What is rear axle load in transport terminology?",
      de: "Was ist die Hinterachslast in der Transportterminologie?"
    },
    options: {
      ro: ["Greutatea șoferului", "Greutatea distribuită pe osiile din spate ale remorcii", "Greutatea combustibilului", "Greutatea ambalajelor"],
      en: ["Driver weight", "Weight distributed on the trailer's rear axles", "Fuel weight", "Packaging weight"],
      de: ["Fahrergewicht", "Gewicht verteilt auf die Hinterachsen des Aufliegers", "Kraftstoffgewicht", "Verpackungsgewicht"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sarcina pe axă trebuie distribuită corect pentru a nu depăși limitele legale per axă (de obicei 8-10 tone).",
      en: "Axle load must be correctly distributed not to exceed legal limits per axle (usually 8-10 tonnes).",
      de: "Achslast muss korrekt verteilt sein, um gesetzliche Grenzen pro Achse nicht zu überschreiten (meist 8-10 Tonnen)."
    }
  },
  {
    question: {
      ro: "Ce este un 'walking floor' trailer?",
      en: "What is a 'walking floor' trailer?",
      de: "Was ist ein 'Walking Floor' Auflieger?"
    },
    options: {
      ro: ["Semiremorcă cu șofer care merge", "Semiremorcă cu podea mobilă pentru descărcare automată", "Semiremorcă pentru pietoni", "Semiremorcă cu pereți mobili"],
      en: ["Trailer with walking driver", "Trailer with moving floor for automatic unloading", "Pedestrian trailer", "Trailer with moving walls"],
      de: ["Auflieger mit gehendem Fahrer", "Auflieger mit beweglichem Boden für automatische Entladung", "Fußgängerauflieger", "Auflieger mit beweglichen Wänden"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Walking floor are lamele hidraulice în podea care împing marfa afară automat.",
      en: "Walking floor has hydraulic slats in the floor that push cargo out automatically.",
      de: "Walking Floor hat hydraulische Lamellen im Boden, die die Fracht automatisch herausschieben."
    }
  },
  {
    question: {
      ro: "Ce tip de semiremorcă este necesară pentru transportul ADR?",
      en: "What type of trailer is needed for ADR transport?",
      de: "Welcher Aufliegertyp wird für ADR-Transport benötigt?"
    },
    options: {
      ro: ["Orice semiremorcă standard", "Semiremorcă cu echipamente de siguranță ADR și certificare", "Doar semiremorcă frigorifică", "Doar semiremorcă box"],
      en: ["Any standard trailer", "Trailer with ADR safety equipment and certification", "Only refrigerated trailer", "Only box trailer"],
      de: ["Jeder Standardauflieger", "Auflieger mit ADR-Sicherheitsausrüstung und Zertifizierung", "Nur Kühlauflieger", "Nur Box-Auflieger"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul ADR necesită echipamente specifice de siguranță și certificare a vehiculului.",
      en: "ADR transport requires specific safety equipment and vehicle certification.",
      de: "ADR-Transport erfordert spezifische Sicherheitsausrüstung und Fahrzeugzertifizierung."
    }
  },
  {
    question: {
      ro: "Care este diferența între 'trailer' și 'semitrailer'?",
      en: "What is the difference between 'trailer' and 'semitrailer'?",
      de: "Was ist der Unterschied zwischen 'Anhänger' und 'Sattelauflieger'?"
    },
    options: {
      ro: ["Nicio diferență", "Semitrailer are cuplaj pe șa, trailer are cuplaj de bară", "Semitrailer este mai mic", "Trailer este frigorific"],
      en: ["No difference", "Semitrailer has fifth wheel coupling, trailer has drawbar coupling", "Semitrailer is smaller", "Trailer is refrigerated"],
      de: ["Kein Unterschied", "Sattelauflieger hat Sattelkupplung, Anhänger hat Deichselkupplung", "Sattelauflieger ist kleiner", "Anhänger ist gekühlt"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Semiremorca se sprijină pe tractorul rutier, în timp ce remorca are propriile axe și este trasă.",
      en: "Semitrailer rests on the tractor, while trailer has its own axles and is towed.",
      de: "Sattelauflieger stützt sich auf die Zugmaschine, während Anhänger eigene Achsen hat und gezogen wird."
    }
  },
  {
    question: {
      ro: "Ce este 'kingpin' la o semiremorcă?",
      en: "What is the 'kingpin' on a semitrailer?",
      de: "Was ist der 'Königszapfen' an einem Sattelauflieger?"
    },
    options: {
      ro: ["Roata de rezervă", "Pivotul de cuplare care se fixează în șaua tractorului", "Oglinda laterală", "Rezervorul de combustibil"],
      en: ["Spare wheel", "Coupling pivot that locks into the tractor's fifth wheel", "Side mirror", "Fuel tank"],
      de: ["Ersatzrad", "Kupplungszapfen, der in die Sattelkupplung der Zugmaschine einrastet", "Seitenspiegel", "Kraftstofftank"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Kingpin-ul este punctul de conectare între semiremorcă și tractor.",
      en: "The kingpin is the connection point between semitrailer and tractor.",
      de: "Der Königszapfen ist der Verbindungspunkt zwischen Sattelauflieger und Zugmaschine."
    }
  },
  {
    question: {
      ro: "Care sunt principalele tipuri de sisteme de frânare la semiremorci?",
      en: "What are the main types of braking systems on trailers?",
      de: "Welche sind die Haupttypen von Bremssystemen an Aufliegern?"
    },
    options: {
      ro: ["Doar frâna de mână", "Pneumatice (cu aer) și EBS (electronic)", "Doar frânare electrică", "Frânare manuală"],
      en: ["Only handbrake", "Pneumatic (air) and EBS (electronic)", "Only electric braking", "Manual braking"],
      de: ["Nur Handbremse", "Pneumatisch (Druckluft) und EBS (elektronisch)", "Nur elektrische Bremsung", "Manuelle Bremsung"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Semiremorcile moderne folosesc frâne pneumatice și EBS pentru control și siguranță optimă.",
      en: "Modern trailers use pneumatic brakes and EBS for optimal control and safety.",
      de: "Moderne Auflieger verwenden Druckluftbremsen und EBS für optimale Kontrolle und Sicherheit."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'ADR tank'?",
      en: "What does 'ADR tank' mean?",
      de: "Was bedeutet 'ADR-Tank'?"
    },
    options: {
      ro: ["Rezervor de apă", "Cisternă certificată pentru transportul mărfurilor periculoase", "Tank militar", "Rezervor de combustibil suplimentar"],
      en: ["Water tank", "Certified tank for transporting dangerous goods", "Military tank", "Additional fuel tank"],
      de: ["Wassertank", "Zertifizierter Tank für den Transport gefährlicher Güter", "Militärpanzer", "Zusätzlicher Kraftstofftank"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cisternele ADR sunt certificate special pentru transportul în siguranță a substanțelor periculoase.",
      en: "ADR tanks are specially certified for safe transport of dangerous substances.",
      de: "ADR-Tanks sind speziell zertifiziert für den sicheren Transport gefährlicher Stoffe."
    }
  },
  {
    question: {
      ro: "Ce este un 'swap body'?",
      en: "What is a 'swap body'?",
      de: "Was ist ein 'Wechselaufbau'?"
    },
    options: {
      ro: ["Schimb de șoferi", "Container interschimbabil care poate fi transferat între vehicule", "Schimb de marfă", "Tip de palet"],
      en: ["Driver swap", "Interchangeable container that can be transferred between vehicles", "Cargo swap", "Pallet type"],
      de: ["Fahrertausch", "Austauschbarer Container, der zwischen Fahrzeugen transferiert werden kann", "Frachttausch", "Palettentyp"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Swap body permite flexibilitate prin transfer rapid între camioane și remorci.",
      en: "Swap body allows flexibility through quick transfer between trucks and trailers.",
      de: "Wechselaufbau ermöglicht Flexibilität durch schnellen Transfer zwischen LKW und Auflieger."
    }
  },
  {
    question: {
      ro: "Care este durata de viață medie a unei semiremorci?",
      en: "What is the average lifespan of a trailer?",
      de: "Was ist die durchschnittliche Lebensdauer eines Aufliegers?"
    },
    options: {
      ro: ["2-3 ani", "5-7 ani", "10-15 ani", "25-30 ani"],
      en: ["2-3 years", "5-7 years", "10-15 years", "25-30 years"],
      de: ["2-3 Jahre", "5-7 Jahre", "10-15 Jahre", "25-30 Jahre"]
    },
    correctIndex: 2,
    explanation: {
      ro: "O semiremorcă bine întreținută poate funcționa 10-15 ani sau mai mult.",
      en: "A well-maintained trailer can operate for 10-15 years or more.",
      de: "Ein gut gewarteter Auflieger kann 10-15 Jahre oder länger betrieben werden."
    }
  },
  {
    question: {
      ro: "Ce trebuie verificat zilnic de către șofer la semiremorcă?",
      en: "What should a driver check daily on the trailer?",
      de: "Was sollte ein Fahrer täglich am Auflieger überprüfen?"
    },
    options: {
      ro: ["Nimic, este responsabilitatea service-ului", "Anvelope, lumini, frâne, prelate, etanșeitate", "Doar combustibilul", "Doar kilometrajul"],
      en: ["Nothing, it's the service's responsibility", "Tires, lights, brakes, curtains, sealing", "Only fuel", "Only mileage"],
      de: ["Nichts, das ist Sache der Werkstatt", "Reifen, Lichter, Bremsen, Planen, Abdichtung", "Nur Kraftstoff", "Nur Kilometerstand"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Inspecția zilnică previne defecțiunile pe traseu și asigură conformitatea legală.",
      en: "Daily inspection prevents breakdowns on the road and ensures legal compliance.",
      de: "Tägliche Inspektion verhindert Pannen unterwegs und gewährleistet gesetzliche Konformität."
    }
  },
  {
    question: {
      ro: "Ce este 'telematica' în contextul vehiculelor de transport?",
      en: "What is 'telematics' in the context of transport vehicles?",
      de: "Was ist 'Telematik' im Kontext von Transportfahrzeugen?"
    },
    options: {
      ro: ["Televiziune în cabină", "Sistem de monitorizare și tracking GPS integrat în vehicul", "Sistem audio", "Climatizare automată"],
      en: ["TV in cabin", "GPS monitoring and tracking system integrated in vehicle", "Audio system", "Automatic air conditioning"],
      de: ["TV in der Kabine", "GPS-Überwachungs- und Tracking-System im Fahrzeug integriert", "Audiosystem", "Automatische Klimaanlage"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Telematica oferă monitorizare în timp real a locației, consumului, timpilor de conducere și altor parametri.",
      en: "Telematics provides real-time monitoring of location, consumption, driving times and other parameters.",
      de: "Telematik bietet Echtzeit-Überwachung von Standort, Verbrauch, Fahrzeiten und anderen Parametern."
    }
  },
  {
    question: {
      ro: "Ce tip de semiremorcă este necesară pentru transportul vehiculelor?",
      en: "What type of trailer is needed for vehicle transport?",
      de: "Welcher Aufliegertyp wird für Fahrzeugtransport benötigt?"
    },
    options: {
      ro: ["Semiremorcă frigorifică", "Car transporter / Autotransporter", "Semiremorcă box", "Semiremorcă cisternă"],
      en: ["Refrigerated trailer", "Car transporter / Auto carrier", "Box trailer", "Tank trailer"],
      de: ["Kühlauflieger", "Autotransporter", "Box-Auflieger", "Tankauflieger"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Autotransporterul are platforme și rampe speciale pentru încărcarea sigură a vehiculelor.",
      en: "Car transporter has special platforms and ramps for safe vehicle loading.",
      de: "Autotransporter hat spezielle Plattformen und Rampen für sicheres Fahrzeugbeladen."
    }
  },
  {
    question: {
      ro: "Care este avantajul unei semiremorci cu acoperiș glisant?",
      en: "What is the advantage of a sliding roof trailer?",
      de: "Was ist der Vorteil eines Aufliegers mit Schiebedach?"
    },
    options: {
      ro: ["Este mai ieftină", "Permite încărcare de sus cu macara", "Este mai rapidă", "Consumă mai puțin"],
      en: ["It's cheaper", "Allows loading from above with crane", "It's faster", "Consumes less"],
      de: ["Er ist billiger", "Ermöglicht Beladung von oben mit Kran", "Er ist schneller", "Verbraucht weniger"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Acoperișul glisant permite încărcarea mărfurilor grele sau voluminoase cu macara, de sus.",
      en: "Sliding roof allows loading heavy or bulky goods with crane from above.",
      de: "Schiebedach ermöglicht das Beladen schwerer oder sperriger Güter mit Kran von oben."
    }
  },
  {
    question: {
      ro: "Ce este 'tara' unui vehicul?",
      en: "What is the 'tare weight' of a vehicle?",
      de: "Was ist das 'Eigengewicht' eines Fahrzeugs?"
    },
    options: {
      ro: ["Greutatea maximă", "Greutatea vehiculului gol, fără marfă", "Greutatea mărfii", "Greutatea combustibilului"],
      en: ["Maximum weight", "Weight of empty vehicle without cargo", "Cargo weight", "Fuel weight"],
      de: ["Maximalgewicht", "Gewicht des leeren Fahrzeugs ohne Fracht", "Frachtgewicht", "Kraftstoffgewicht"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tara este greutatea vehiculului gol, folosită pentru a calcula capacitatea utilă.",
      en: "Tare weight is the empty vehicle weight, used to calculate payload capacity.",
      de: "Eigengewicht ist das Leergewicht des Fahrzeugs, verwendet zur Berechnung der Nutzlast."
    }
  },
  {
    question: {
      ro: "Ce este un 'dolly' în transport?",
      en: "What is a 'dolly' in transport?",
      de: "Was ist ein 'Dolly' im Transport?"
    },
    options: {
      ro: ["Un tip de palet", "O axă intermediară pentru conectarea semiremorcilor în tandem", "Un tip de marfă", "Un sistem de frânare"],
      en: ["A type of pallet", "An intermediate axle for connecting semitrailers in tandem", "A type of cargo", "A braking system"],
      de: ["Eine Art Palette", "Eine Zwischenachse zum Verbinden von Sattelaufliegern im Tandem", "Eine Art Fracht", "Ein Bremssystem"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dolly permite cuplarea a două semiremorci în trenuri rutiere (în țările unde este permis).",
      en: "Dolly allows coupling two semitrailers in road trains (in countries where permitted).",
      de: "Dolly ermöglicht das Koppeln von zwei Sattelaufliegern in Straßenzügen (in Ländern, wo es erlaubt ist)."
    }
  },
  {
    question: {
      ro: "Care sunt normele Euro pentru emisiile camioanelor?",
      en: "What are the Euro standards for truck emissions?",
      de: "Was sind die Euro-Normen für LKW-Emissionen?"
    },
    options: {
      ro: ["Euro 1-3", "Euro 0-6 (și Euro 7 în viitor)", "Doar Euro 5", "Nu există norme"],
      en: ["Euro 1-3", "Euro 0-6 (and Euro 7 in future)", "Only Euro 5", "No standards exist"],
      de: ["Euro 1-3", "Euro 0-6 (und Euro 7 in Zukunft)", "Nur Euro 5", "Es gibt keine Normen"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Normele Euro reglementează emisiile poluante, Euro 6 fiind standardul actual, cu Euro 7 în pregătire.",
      en: "Euro standards regulate pollutant emissions, Euro 6 being the current standard, with Euro 7 in preparation.",
      de: "Euro-Normen regeln Schadstoffemissionen, Euro 6 ist der aktuelle Standard, Euro 7 wird vorbereitet."
    }
  },
  // Advanced Scenario-Based Questions
  {
    question: {
      ro: "SCENARIU: Client are 22 paleți EUR (800×1200mm), fiecare 1.2t. Poate merge pe un camion standard 40t?",
      de: "SZENARIO: Kunde hat 22 EUR-Paletten (800×1200mm), jeweils 1,2t. Passt das auf einen Standard-40t-LKW?",
      en: "SCENARIO: Client has 22 EUR pallets (800×1200mm), each 1.2t. Can it fit on a standard 40t truck?"
    },
    options: {
      ro: ["Da, sigur încape", "NU - 22×1.2t=26.4t marfă + ~14t tara = 40.4t, depășește MMA 40t cu 400kg", "Depinde de șofer", "Doar dacă e Mega"],
      de: ["Ja, passt sicher", "NEIN - 22×1,2t=26,4t Fracht + ~14t Eigengewicht = 40,4t, überschreitet 40t zGG um 400kg", "Hängt vom Fahrer ab", "Nur wenn es ein Mega ist"],
      en: ["Yes, definitely fits", "NO - 22×1.2t=26.4t cargo + ~14t tare = 40.4t, exceeds 40t GVW by 400kg", "Depends on driver", "Only if it's a Mega"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Calcul: 22 paleți × 1.2t = 26.4t marfă. Tara camion+trailer ≈ 14t. Total: 40.4t > 40t MMA. Soluție: scoate 1-2 paleți sau folosește remorcă mai ușoară.",
      de: "Berechnung: 22 Paletten × 1,2t = 26,4t Fracht. Eigengewicht LKW+Auflieger ≈ 14t. Gesamt: 40,4t > 40t zGG. Lösung: 1-2 Paletten entfernen oder leichteren Auflieger verwenden.",
      en: "Calculation: 22 pallets × 1.2t = 26.4t cargo. Truck+trailer tare ≈ 14t. Total: 40.4t > 40t GVW. Solution: remove 1-2 pallets or use lighter trailer."
    }
  },
  {
    question: {
      ro: "SCENARIU: Marfă automotive 66 paleți, fiecare 200kg, înălțime 1.5m. Ce trailer recomanzi?",
      de: "SZENARIO: Automotive-Fracht 66 Paletten, jeweils 200kg, Höhe 1,5m. Welchen Auflieger empfehlen Sie?",
      en: "SCENARIO: Automotive cargo 66 pallets, each 200kg, height 1.5m. What trailer do you recommend?"
    },
    options: {
      ro: ["Standard 2.7m", "Double Deck/Mega - paleții sunt stivuibili (200kg ușori), 1.5m × 2 = 3.0m, 66 paleți = 13.2t", "Frigorific", "Platformă"],
      de: ["Standard 2,7m", "Doppelstock/Mega - Paletten sind stapelbar (200kg leicht), 1,5m × 2 = 3,0m, 66 Paletten = 13,2t", "Kühlauflieger", "Plattform"],
      en: ["Standard 2.7m", "Double Deck/Mega - pallets are stackable (200kg light), 1.5m × 2 = 3.0m, 66 pallets = 13.2t", "Reefer", "Flatbed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "66 paleți = dublu față de 33 standard → Double Deck sau Mega. Greutate: 66×200kg=13.2t (sub limita de 24t). Înălțime 1.5m×2=3.0m → necesită Mega cu 3.0m interior.",
      de: "66 Paletten = doppelt so viel wie 33 Standard → Doppelstock oder Mega. Gewicht: 66×200kg=13,2t (unter 24t Limit). Höhe 1,5m×2=3,0m → benötigt Mega mit 3,0m Innenhöhe.",
      en: "66 pallets = double the 33 standard → Double Deck or Mega. Weight: 66×200kg=13.2t (under 24t limit). Height 1.5m×2=3.0m → requires Mega with 3.0m interior."
    }
  },
  {
    question: {
      ro: "SCENARIU: Transport RO→NL, camionul trece prin AT (Austria). Care e MMA maximă pe ruta Brenner?",
      de: "SZENARIO: Transport RO→NL, LKW fährt durch AT (Österreich). Was ist das maximale zGG auf der Brenner-Route?",
      en: "SCENARIO: Transport RO→NL, truck passes through AT (Austria). What's the maximum GVW on Brenner route?"
    },
    options: {
      ro: ["50t ca în NL", "40t standard, cu controale foarte stricte pe Brenner și posibil restricții suplimentare", "44t ca în IT", "Nu contează"],
      de: ["50t wie in NL", "40t Standard, mit sehr strengen Kontrollen am Brenner und möglichen zusätzlichen Einschränkungen", "44t wie in IT", "Spielt keine Rolle"],
      en: ["50t like NL", "40t standard, with very strict controls on Brenner and possible additional restrictions", "44t like IT", "Doesn't matter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Austria: MMA 40t standard. Ruta Brenner are controale foarte stricte pentru greutate și emisii. Camioanele sub Euro 5 pot fi restricționate. Verifică ÎNTOTDEAUNA cerințele Brenner înainte!",
      de: "Österreich: 40t zGG Standard. Brenner-Route hat sehr strenge Kontrollen für Gewicht und Emissionen. LKWs unter Euro 5 können eingeschränkt werden. Prüfen Sie IMMER die Brenner-Anforderungen vorher!",
      en: "Austria: 40t GVW standard. Brenner route has very strict controls for weight and emissions. Trucks below Euro 5 may be restricted. ALWAYS check Brenner requirements beforehand!"
    }
  }
];
