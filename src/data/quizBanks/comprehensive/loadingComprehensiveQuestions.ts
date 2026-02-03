import { TranslatedQuizQuestion } from '../../quizTranslations';

export const loadingComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este forța de legare minimă necesară pentru asigurarea mărfii conform EN 12195-1?",
      de: "Welche minimale Sicherungskraft ist für die Ladungssicherung gemäß EN 12195-1 erforderlich?",
      en: "What is the minimum securing force required for cargo securing according to EN 12195-1?"
    },
    options: {
      ro: ["50% din greutatea mărfii", "80% din greutatea mărfii în direcția de mers", "100% din greutatea mărfii", "120% din greutatea mărfii"],
      de: ["50% des Ladungsgewichts", "80% des Ladungsgewichts in Fahrtrichtung", "100% des Ladungsgewichts", "120% des Ladungsgewichts"],
      en: ["50% of cargo weight", "80% of cargo weight in driving direction", "100% of cargo weight", "120% of cargo weight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EN 12195-1 specifică 80% din greutate pentru direcția de mers, 50% lateral și 50% spate.",
      de: "EN 12195-1 gibt 80% des Gewichts für die Fahrtrichtung, 50% seitlich und 50% nach hinten an.",
      en: "EN 12195-1 specifies 80% of weight for driving direction, 50% lateral and 50% rearward."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce coeficient de frecare (μ) se folosește pentru lemn pe lemn uscat?",
      de: "Welcher Reibungskoeffizient (μ) wird für Holz auf trockenem Holz verwendet?",
      en: "What friction coefficient (μ) is used for wood on dry wood?"
    },
    options: {
      ro: ["0.2", "0.3", "0.4", "0.5"],
      de: ["0,2", "0,3", "0,4", "0,5"],
      en: ["0.2", "0.3", "0.4", "0.5"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Coeficientul de frecare lemn pe lemn uscat este μ = 0.4 conform standardelor de asigurare marfă.",
      de: "Der Reibungskoeffizient Holz auf trockenem Holz beträgt μ = 0,4 gemäß Ladungssicherungsstandards.",
      en: "The friction coefficient for wood on dry wood is μ = 0.4 according to cargo securing standards."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Marfă 10t pe podea lemn. Câte chingi 2500 daN sunt necesare pentru asigurare prin legare directă înainte?",
      de: "10t Ladung auf Holzboden. Wie viele 2500 daN Gurte sind für direkte Vorwärtssicherung erforderlich?",
      en: "10t cargo on wooden floor. How many 2500 daN straps are needed for direct forward securing?"
    },
    options: {
      ro: ["2 chingi", "3 chingi", "4 chingi", "5 chingi"],
      de: ["2 Gurte", "3 Gurte", "4 Gurte", "5 Gurte"],
      en: ["2 straps", "3 straps", "4 straps", "5 straps"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Calcul: 10t × 0.8 = 8000 daN necesar. 8000/2500 = 3.2 → 4 chingi (rotunjire în sus).",
      de: "Berechnung: 10t × 0,8 = 8000 daN erforderlich. 8000/2500 = 3,2 → 4 Gurte (aufgerundet).",
      en: "Calculation: 10t × 0.8 = 8000 daN required. 8000/2500 = 3.2 → 4 straps (rounded up)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este poziția corectă a centrului de greutate pentru marfă paletizată?",
      de: "Was ist die korrekte Position des Schwerpunkts für palettierte Ladung?",
      en: "What is the correct position of the center of gravity for palletized cargo?"
    },
    options: {
      ro: ["Cât mai în spate", "Cât mai în față, centrat lateral", "Nu contează poziția", "Doar lateral centrat"],
      de: ["So weit hinten wie möglich", "So weit vorne wie möglich, seitlich zentriert", "Position spielt keine Rolle", "Nur seitlich zentriert"],
      en: ["As far back as possible", "As far forward as possible, laterally centered", "Position doesn't matter", "Only laterally centered"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marfa grea se poziționează în față pentru stabilitate optimă și distribuție corectă pe osii.",
      de: "Schwere Ladung wird vorne positioniert für optimale Stabilität und korrekte Achslastverteilung.",
      en: "Heavy cargo is positioned forward for optimal stability and correct axle load distribution."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce reprezintă STF (Standard Tension Force) pentru o chingă de legare?",
      de: "Was bedeutet STF (Standard Tension Force) bei einem Zurrgurt?",
      en: "What does STF (Standard Tension Force) represent for a lashing strap?"
    },
    options: {
      ro: ["Forța maximă de rupere", "Forța de pretensionare standard manuală", "Forța de lucru", "Forța de încărcare"],
      de: ["Maximale Bruchkraft", "Standard-Handspannkraft", "Arbeitskraft", "Ladekraft"],
      en: ["Maximum breaking force", "Standard hand tensioning force", "Working force", "Loading force"]
    },
    correctIndex: 1,
    explanation: {
      ro: "STF = forța de pretensionare obținută manual cu clichet, de obicei 250-500 daN pentru chingi standard.",
      de: "STF = manuell mit Ratsche erzielte Vorspannkraft, meist 250-500 daN bei Standard-Gurten.",
      en: "STF = tensioning force achieved manually with ratchet, usually 250-500 daN for standard straps."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Bobină oțel 8t, diametru 1.5m, pe semiremorcă. μ=0.3 (metal-metal). Forță legare necesară cu chingi peste bobină?",
      de: "Stahlcoil 8t, Durchmesser 1,5m, auf Auflieger. μ=0,3 (Metall-Metall). Erforderliche Sicherungskraft mit Gurten über Coil?",
      en: "Steel coil 8t, diameter 1.5m, on semi-trailer. μ=0.3 (metal-metal). Required securing force with straps over coil?"
    },
    options: {
      ro: ["4000 daN", "5333 daN", "6400 daN", "8000 daN"],
      de: ["4000 daN", "5333 daN", "6400 daN", "8000 daN"],
      en: ["4000 daN", "5333 daN", "6400 daN", "8000 daN"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Calcul: (0.8 × 8000) / 0.3 × sin(α) ≈ 6400 daN necesar pentru compensare frecare scăzută metal.",
      de: "Berechnung: (0,8 × 8000) / 0,3 × sin(α) ≈ 6400 daN erforderlich zur Kompensation niedriger Metallreibung.",
      en: "Calculation: (0.8 × 8000) / 0.3 × sin(α) ≈ 6400 daN required to compensate low metal friction."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este metoda corectă de stivuire pentru cutii de carton?",
      de: "Was ist die korrekte Stapelmethode für Kartons?",
      en: "What is the correct stacking method for cardboard boxes?"
    },
    options: {
      ro: ["Coloană dreaptă, cutii aliniate", "Stivuire încrucișată (cross-stacking)", "Orice metodă este acceptabilă", "Numai pe un singur nivel"],
      de: ["Gerade Säule, ausgerichtete Kartons", "Kreuzstapelung (Cross-Stacking)", "Jede Methode ist akzeptabel", "Nur auf einer Ebene"],
      en: ["Straight column, aligned boxes", "Cross-stacking", "Any method is acceptable", "Only on one level"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cross-stacking (încrucișat) asigură stabilitate superioară prin distribuirea punctelor de presiune.",
      de: "Cross-Stacking (Kreuzstapelung) bietet überlegene Stabilität durch Verteilung der Druckpunkte.",
      en: "Cross-stacking provides superior stability by distributing pressure points."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce echipament anti-alunecare crește μ de la 0.3 la 0.6?",
      de: "Welche Antirutsch-Ausrüstung erhöht μ von 0,3 auf 0,6?",
      en: "What anti-slip equipment increases μ from 0.3 to 0.6?"
    },
    options: {
      ro: ["Folie plastic", "Covorașe anti-alunecare (RH mats)", "Carton ondulat", "Bandă adezivă"],
      de: ["Plastikfolie", "Antirutschmatten (RH-Matten)", "Wellpappe", "Klebeband"],
      en: ["Plastic film", "Anti-slip mats (RH mats)", "Corrugated cardboard", "Adhesive tape"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Covorașele RH (anti-slip mats) dublează coeficientul de frecare, reducând necesarul de chingi.",
      de: "RH-Matten (Antirutschmatten) verdoppeln den Reibungskoeffizienten und reduzieren den Gurtbedarf.",
      en: "RH mats (anti-slip mats) double the friction coefficient, reducing strap requirements."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este accelerația de frânare standard folosită în calculele de asigurare marfă?",
      de: "Welche Standard-Bremsverzögerung wird in Ladungssicherungsberechnungen verwendet?",
      en: "What is the standard braking deceleration used in cargo securing calculations?"
    },
    options: {
      ro: ["0.5 g", "0.8 g", "1.0 g", "1.2 g"],
      de: ["0,5 g", "0,8 g", "1,0 g", "1,2 g"],
      en: ["0.5 g", "0.8 g", "1.0 g", "1.2 g"]
    },
    correctIndex: 1,
    explanation: {
      ro: "0.8g este accelerația standard de frânare în față, echivalentă cu 80% din greutatea mărfii.",
      de: "0,8g ist die Standard-Bremsverzögerung nach vorne, entspricht 80% des Ladungsgewichts.",
      en: "0.8g is the standard forward braking deceleration, equivalent to 80% of cargo weight."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Mașină 2t pe platformă, μ=0.25 (anvelope pe metal). Calcul chingi legare directă față pentru transport?",
      de: "Auto 2t auf Plattform, μ=0,25 (Reifen auf Metall). Berechnung Direktzurrgurte vorne für Transport?",
      en: "Car 2t on platform, μ=0.25 (tyres on metal). Calculate direct lashing straps front for transport?"
    },
    options: {
      ro: ["Forță necesară: 1100 daN", "Forță necesară: 1600 daN", "Forță necesară: 2000 daN", "Forță necesară: 2400 daN"],
      de: ["Erforderliche Kraft: 1100 daN", "Erforderliche Kraft: 1600 daN", "Erforderliche Kraft: 2000 daN", "Erforderliche Kraft: 2400 daN"],
      en: ["Required force: 1100 daN", "Required force: 1600 daN", "Required force: 2000 daN", "Required force: 2400 daN"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Calcul: (0.8 - 0.25) × 2000 = 1100 daN forță de legare necesară după compensare frecare.",
      de: "Berechnung: (0,8 - 0,25) × 2000 = 1100 daN erforderliche Sicherungskraft nach Reibungskompensation.",
      en: "Calculation: (0.8 - 0.25) × 2000 = 1100 daN securing force required after friction compensation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce reprezintă marcajul LC pe o chingă de ancorare?",
      de: "Was bedeutet die LC-Kennzeichnung auf einem Zurrgurt?",
      en: "What does the LC marking on a lashing strap represent?"
    },
    options: {
      ro: ["Lashing Capacity - capacitatea de legare", "Length of Chain - lungimea lanțului", "Load Center - centrul de încărcare", "Loading Class - clasa de încărcare"],
      de: ["Lashing Capacity - Zurrkraft", "Length of Chain - Kettenlänge", "Load Center - Lastschwerpunkt", "Loading Class - Ladeklasse"],
      en: ["Lashing Capacity - securing capacity", "Length of Chain - chain length", "Load Center - load center", "Loading Class - loading class"]
    },
    correctIndex: 0,
    explanation: {
      ro: "LC (Lashing Capacity) indică capacitatea maximă de legare în legare directă, exprimată în daN.",
      de: "LC (Lashing Capacity) gibt die maximale Zurrkraft bei Direktzurrung an, ausgedrückt in daN.",
      en: "LC (Lashing Capacity) indicates maximum lashing capacity in direct lashing, expressed in daN."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum se calculează numărul de chingi pentru top-over lashing (legare peste marfă)?",
      de: "Wie berechnet man die Anzahl der Gurte für Top-Over-Lashing (Niederzurren)?",
      en: "How do you calculate the number of straps for top-over lashing?"
    },
    options: {
      ro: ["Forța necesară / LC", "Forța necesară / (STF × 1.5 × μ)", "Forța necesară / STF", "Forța necesară × μ"],
      de: ["Erforderliche Kraft / LC", "Erforderliche Kraft / (STF × 1,5 × μ)", "Erforderliche Kraft / STF", "Erforderliche Kraft × μ"],
      en: ["Required force / LC", "Required force / (STF × 1.5 × μ)", "Required force / STF", "Required force × μ"]
    },
    correctIndex: 1,
    explanation: {
      ro: "La top-over lashing: n = F / (STF × 1.5 × μ), unde 1.5 este factorul pentru 2 ramuri ale chingii.",
      de: "Bei Top-Over-Lashing: n = F / (STF × 1,5 × μ), wobei 1,5 der Faktor für 2 Gurttrume ist.",
      en: "For top-over lashing: n = F / (STF × 1.5 × μ), where 1.5 is the factor for 2 strap branches."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Palet 1200kg pe podea din plastic (μ=0.2). Câte chingi STF 400 daN sunt necesare pentru asigurare laterală?",
      de: "Palette 1200kg auf Kunststoffboden (μ=0,2). Wie viele Gurte STF 400 daN für seitliche Sicherung?",
      en: "Pallet 1200kg on plastic floor (μ=0.2). How many straps STF 400 daN needed for lateral securing?"
    },
    options: {
      ro: ["2 chingi", "3 chingi", "4 chingi", "5 chingi"],
      de: ["2 Gurte", "3 Gurte", "4 Gurte", "5 Gurte"],
      en: ["2 straps", "3 straps", "4 straps", "5 straps"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Calcul: F = 0.5 × 1200 = 600 daN. n = 600 / (400 × 1.5 × 0.2) = 5 → minim 4 chingi practic.",
      de: "Berechnung: F = 0,5 × 1200 = 600 daN. n = 600 / (400 × 1,5 × 0,2) = 5 → mindestens 4 Gurte praktisch.",
      en: "Calculation: F = 0.5 × 1200 = 600 daN. n = 600 / (400 × 1.5 × 0.2) = 5 → minimum 4 straps practically."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este înălțimea maximă recomandată pentru stivuirea paleților EUR?",
      de: "Was ist die maximal empfohlene Stapelhöhe für EUR-Paletten?",
      en: "What is the maximum recommended stacking height for EUR pallets?"
    },
    options: {
      ro: ["1.5m inclusiv palet", "2.0m inclusiv palet", "2.4m inclusiv palet", "3.0m inclusiv palet"],
      de: ["1,5m inkl. Palette", "2,0m inkl. Palette", "2,4m inkl. Palette", "3,0m inkl. Palette"],
      en: ["1.5m including pallet", "2.0m including pallet", "2.4m including pallet", "3.0m including pallet"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Înălțimea standard de stivuire este 2.4m (inclusiv palet) pentru stabilitate și eficiență transport.",
      de: "Die Standard-Stapelhöhe beträgt 2,4m (inkl. Palette) für Stabilität und Transporteffizienz.",
      en: "Standard stacking height is 2.4m (including pallet) for stability and transport efficiency."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce se întâmplă dacă chingi sunt prea tensionate pe marfă fragilă?",
      de: "Was passiert, wenn Gurte zu stark auf empfindliche Ladung gespannt werden?",
      en: "What happens if straps are overtensioned on fragile cargo?"
    },
    options: {
      ro: ["Nimic, e mai sigur", "Deteriorare marfă prin presiune excesivă", "Chingile devin mai eficiente", "Se reduce frecarea"],
      de: ["Nichts, es ist sicherer", "Ladungsschäden durch übermäßigen Druck", "Gurte werden effizienter", "Reibung wird reduziert"],
      en: ["Nothing, it's safer", "Cargo damage from excessive pressure", "Straps become more efficient", "Friction is reduced"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Supratensionarea poate deteriora marfa fragilă. Tensiunea optimă: STF corect, nu maxim posibil.",
      de: "Überspannung kann empfindliche Ladung beschädigen. Optimale Spannung: korrekter STF, nicht maximal möglich.",
      en: "Over-tensioning can damage fragile cargo. Optimal tension: correct STF, not maximum possible."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este rolul barelor de blocare (blocking bars) în semiremorcă?",
      de: "Was ist die Rolle von Sperrstangen (Blocking Bars) im Auflieger?",
      en: "What is the role of blocking bars in a semi-trailer?"
    },
    options: {
      ro: ["Doar decorativ", "Blochează deplasarea longitudinală a mărfii", "Reduc capacitatea de încărcare", "Înlocuiesc complet chingile"],
      de: ["Nur dekorativ", "Verhindern Längsbewegung der Ladung", "Reduzieren Ladekapazität", "Ersetzen Gurte vollständig"],
      en: ["Only decorative", "Block longitudinal movement of cargo", "Reduce loading capacity", "Completely replace straps"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Barele de blocare previn deplasarea în față/spate, completând (nu înlocuind) asigurarea cu chingi.",
      de: "Sperrstangen verhindern Vorwärts-/Rückwärtsbewegung und ergänzen (ersetzen nicht) die Gurtsicherung.",
      en: "Blocking bars prevent forward/backward movement, complementing (not replacing) strap securing."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Marfă 15t pe semiremorcă, μ=0.4. Forța de frânare 0.8g. Folosind doar frecare, cât este deficitul de asigurare față?",
      de: "15t Ladung auf Auflieger, μ=0,4. Bremskraft 0,8g. Nur Reibung verwendend, wie groß ist das Sicherungsdefizit vorne?",
      en: "15t cargo on semi-trailer, μ=0.4. Braking force 0.8g. Using only friction, what is the front securing deficit?"
    },
    options: {
      ro: ["3000 daN", "6000 daN", "9000 daN", "12000 daN"],
      de: ["3000 daN", "6000 daN", "9000 daN", "12000 daN"],
      en: ["3000 daN", "6000 daN", "9000 daN", "12000 daN"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Calcul: (0.8 - 0.4) × 15000 = 6000 daN deficit care trebuie compensat prin chingi/blocare.",
      de: "Berechnung: (0,8 - 0,4) × 15000 = 6000 daN Defizit, das durch Gurte/Blockierung kompensiert werden muss.",
      en: "Calculation: (0.8 - 0.4) × 15000 = 6000 daN deficit that must be compensated by straps/blocking."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tip de ambalaj oferă cea mai bună protecție pentru transport mărfuri electronice?",
      de: "Welche Verpackungsart bietet den besten Schutz für den Transport von Elektronik?",
      en: "What type of packaging provides the best protection for electronic goods transport?"
    },
    options: {
      ro: ["Carton simplu", "Ambalaj cu spumă antișoc + folie antistatică", "Folie stretch", "Cutie de lemn"],
      de: ["Einfacher Karton", "Schaumstoffverpackung + antistatische Folie", "Stretchfolie", "Holzkiste"],
      en: ["Simple cardboard", "Shock-absorbing foam + anti-static film", "Stretch film", "Wooden box"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Electronicele necesită protecție dublă: spumă pentru șocuri mecanice + folie antistatică pentru ESD.",
      de: "Elektronik benötigt doppelten Schutz: Schaumstoff gegen mechanische Stöße + antistatische Folie gegen ESD.",
      en: "Electronics need dual protection: foam for mechanical shocks + anti-static film for ESD."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "La încărcarea containerului maritim 40ft, care este greutatea maximă pe osie?",
      de: "Beim Beladen eines 40ft Seecontainers, was ist die maximale Achslast?",
      en: "When loading a 40ft maritime container, what is the maximum axle load?"
    },
    options: {
      ro: ["Nu există limită specifică", "Fiecare treime: max 60% din total", "Partea din față: max 40%", "Uniform distribuit obligatoriu"],
      de: ["Keine spezifische Grenze", "Jedes Drittel: max 60% der Gesamtmenge", "Vorderteil: max 40%", "Gleichmäßig verteilt Pflicht"],
      en: ["No specific limit", "Each third: max 60% of total", "Front part: max 40%", "Evenly distributed mandatory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Regula 60/40: nici o treime a containerului nu trebuie să depășească 60% din greutatea totală încărcată.",
      de: "60/40-Regel: Kein Drittel des Containers darf 60% des Gesamtladegewichts überschreiten.",
      en: "60/40 rule: no third of the container should exceed 60% of total loaded weight."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport marfă 22t, centru de greutate la 2.1m înălțime. Forța laterală la viraje standard?",
      de: "22t Ladung transportieren, Schwerpunkt auf 2,1m Höhe. Seitliche Kraft bei Standardkurven?",
      en: "Transport 22t cargo, center of gravity at 2.1m height. Lateral force in standard turns?"
    },
    options: {
      ro: ["5500 daN", "8800 daN", "11000 daN", "13200 daN"],
      de: ["5500 daN", "8800 daN", "11000 daN", "13200 daN"],
      en: ["5500 daN", "8800 daN", "11000 daN", "13200 daN"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Calcul: 0.5g × 22000 = 11000 daN. Centrul înalt de greutate mărește riscul de răsturnare.",
      de: "Berechnung: 0,5g × 22000 = 11000 daN. Hoher Schwerpunkt erhöht das Kipprisiko.",
      en: "Calculation: 0.5g × 22000 = 11000 daN. High center of gravity increases tipping risk."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este scopul principal al folosirii airbag-urilor de umplere (dunnage bags)?",
      de: "Was ist der Hauptzweck von Staupolstern (Dunnage Bags)?",
      en: "What is the main purpose of using dunnage bags?"
    },
    options: {
      ro: ["Protecție la umiditate", "Umplerea spațiilor goale pentru prevenirea deplasării", "Reducerea greutății", "Marcarea mărfii"],
      de: ["Feuchtigkeitsschutz", "Füllen von Leerräumen zur Bewegungsverhinderung", "Gewichtsreduzierung", "Ladungsmarkierung"],
      en: ["Moisture protection", "Filling empty spaces to prevent movement", "Weight reduction", "Cargo marking"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dunnage bags umplu spațiile goale între marfă, prevenind deplasarea în timpul transportului.",
      de: "Staupolster füllen Leerräume zwischen Ladung und verhindern Bewegung während des Transports.",
      en: "Dunnage bags fill empty spaces between cargo, preventing movement during transport."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce verificare este obligatorie la preluarea mărfii paletizate de la expeditor?",
      de: "Welche Prüfung ist bei der Übernahme palettierter Ladung vom Versender Pflicht?",
      en: "What check is mandatory when taking over palletized cargo from the shipper?"
    },
    options: {
      ro: ["Doar numărul de paleți", "Stare paleți, stivuire, folie, greutate, stabilitate", "Doar greutatea totală", "Doar aspectul exterior"],
      de: ["Nur Palettenanzahl", "Palettenzustand, Stapelung, Folie, Gewicht, Stabilität", "Nur Gesamtgewicht", "Nur äußeres Erscheinungsbild"],
      en: ["Only number of pallets", "Pallet condition, stacking, film, weight, stability", "Only total weight", "Only external appearance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Șoferul verifică: starea paleților, stabilitatea stivuirii, integritatea foliei, greutatea conformă cu documente.",
      de: "Fahrer prüft: Palettenzustand, Stapelstabilität, Folienintegrität, dokumentenkonformes Gewicht.",
      en: "Driver checks: pallet condition, stacking stability, film integrity, document-compliant weight."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este primul pas la încărcarea unei semiremorci prelată?",
      de: "Was ist der erste Schritt beim Beladen eines Planenaufliegers?",
      en: "What is the first step when loading a tilt semi-trailer?"
    },
    options: {
      ro: ["Deschiderea laterală completă", "Verificarea și curățarea podelei", "Pornirea motorului", "Chemarea șoferului"],
      de: ["Vollständige Seitenöffnung", "Bodenprüfung und -reinigung", "Motor starten", "Fahrer rufen"],
      en: ["Complete side opening", "Floor verification and cleaning", "Start the engine", "Call the driver"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prima verificare: podeaua să fie curată, uscată și fără resturi care pot afecta stabilitatea mărfii.",
      de: "Erste Prüfung: Boden muss sauber, trocken und frei von Resten sein, die die Ladungsstabilität beeinträchtigen.",
      en: "First check: floor must be clean, dry and free from debris that can affect cargo stability."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "IBC 1000L plin (1000kg) pe palet. μ=0.35 (plastic-lemn). Câte chingi 400 daN STF pentru asigurare completă?",
      de: "IBC 1000L voll (1000kg) auf Palette. μ=0,35 (Kunststoff-Holz). Wie viele 400 daN STF Gurte für vollständige Sicherung?",
      en: "IBC 1000L full (1000kg) on pallet. μ=0.35 (plastic-wood). How many 400 daN STF straps for complete securing?"
    },
    options: {
      ro: ["4 chingi (2 față + 2 spate)", "6 chingi (3 + 3)", "8 chingi (4 + 4)", "2 chingi sunt suficiente"],
      de: ["4 Gurte (2 vorne + 2 hinten)", "6 Gurte (3 + 3)", "8 Gurte (4 + 4)", "2 Gurte sind ausreichend"],
      en: ["4 straps (2 front + 2 rear)", "6 straps (3 + 3)", "8 straps (4 + 4)", "2 straps are sufficient"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Calcul: față (0.8-0.35)×1000=450daN, lateral (0.5-0.35)×1000=150daN. 4 chingi acoperă ambele direcții.",
      de: "Berechnung: vorne (0,8-0,35)×1000=450daN, seitlich (0,5-0,35)×1000=150daN. 4 Gurte decken beide Richtungen ab.",
      en: "Calculation: front (0.8-0.35)×1000=450daN, lateral (0.5-0.35)×1000=150daN. 4 straps cover both directions."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce indicator pe ambalaj arată că marfa nu trebuie expusă la umiditate?",
      de: "Welches Zeichen auf der Verpackung zeigt an, dass die Ladung nicht Feuchtigkeit ausgesetzt werden darf?",
      en: "What indicator on packaging shows that cargo must not be exposed to moisture?"
    },
    options: {
      ro: ["Săgeți în sus", "Umbrelă cu picături", "Pahar fragil", "Lanțuri încrucișate"],
      de: ["Pfeile nach oben", "Regenschirm mit Tropfen", "Zerbrechliches Glas", "Gekreuzte Ketten"],
      en: ["Arrows up", "Umbrella with drops", "Fragile glass", "Crossed chains"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Simbolul umbrelă cu picături (ISO 780) indică: a se feri de umiditate - keep dry.",
      de: "Das Regenschirm-Symbol mit Tropfen (ISO 780) bedeutet: Vor Feuchtigkeit schützen - trocken halten.",
      en: "The umbrella with drops symbol (ISO 780) indicates: protect from moisture - keep dry."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este forța de accelerare laterală standard folosită în calcule?",
      de: "Welche seitliche Standard-Beschleunigungskraft wird in Berechnungen verwendet?",
      en: "What is the standard lateral acceleration force used in calculations?"
    },
    options: {
      ro: ["0.3 g", "0.5 g", "0.8 g", "1.0 g"],
      de: ["0,3 g", "0,5 g", "0,8 g", "1,0 g"],
      en: ["0.3 g", "0.5 g", "0.8 g", "1.0 g"]
    },
    correctIndex: 1,
    explanation: {
      ro: "0.5g este accelerarea laterală standard pentru viraje, echivalentă cu 50% din greutatea mărfii.",
      de: "0,5g ist die seitliche Standardbeschleunigung für Kurven, entspricht 50% des Ladungsgewichts.",
      en: "0.5g is the standard lateral acceleration for turns, equivalent to 50% of cargo weight."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum se poziționează corect sarcina grea în raport cu osiile semiremorcii?",
      de: "Wie wird schwere Last richtig in Bezug auf die Aufliegerachsen positioniert?",
      en: "How is heavy load correctly positioned in relation to semi-trailer axles?"
    },
    options: {
      ro: ["Deasupra sau în fața osiilor", "Cât mai în spate posibil", "Nu contează poziția", "Între osii și peretele din spate"],
      de: ["Über oder vor den Achsen", "So weit hinten wie möglich", "Position spielt keine Rolle", "Zwischen Achsen und Rückwand"],
      en: ["Above or in front of axles", "As far back as possible", "Position doesn't matter", "Between axles and rear wall"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Sarcina grea se poziționează deasupra sau în fața osiilor pentru distribuție corectă și stabilitate.",
      de: "Schwere Last wird über oder vor den Achsen positioniert für korrekte Verteilung und Stabilität.",
      en: "Heavy load is positioned above or in front of axles for correct distribution and stability."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Mașină de construcții 12t, centru de greutate la 1.8m. Transport pe platformă. Risc principal?",
      de: "Baumaschine 12t, Schwerpunkt bei 1,8m. Transport auf Plattform. Hauptrisiko?",
      en: "Construction machine 12t, center of gravity at 1.8m. Transport on platform. Main risk?"
    },
    options: {
      ro: ["Depășire greutate", "Răsturnare laterală la viraje/frânări bruște", "Deteriorare anvelope", "Nici un risc special"],
      de: ["Gewichtsüberschreitung", "Seitliches Kippen bei Kurven/plötzlichem Bremsen", "Reifenschäden", "Kein besonderes Risiko"],
      en: ["Weight excess", "Lateral tipping at turns/sudden braking", "Tyre damage", "No special risk"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Centru de greutate înalt (1.8m) + greutate mare (12t) = risc major de răsturnare. Viteză redusă în viraje.",
      de: "Hoher Schwerpunkt (1,8m) + hohes Gewicht (12t) = erhebliches Kipprisiko. Reduzierte Geschwindigkeit in Kurven.",
      en: "High center of gravity (1.8m) + heavy weight (12t) = major tipping risk. Reduced speed in turns."
    }
  }
];
