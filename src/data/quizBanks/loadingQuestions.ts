import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const loadingQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Care este greutatea maximă autorizată pentru un camion standard în UE?",
      de: "Was ist das maximal zulässige Gewicht für einen Standard-LKW in der EU?",
      en: "What is the maximum authorized weight for a standard truck in the EU?"
    },
    options: {
      ro: ["30 tone", "40 tone", "50 tone", "60 tone"],
      de: ["30 Tonnen", "40 Tonnen", "50 Tonnen", "60 Tonnen"],
      en: ["30 tons", "40 tons", "50 tons", "60 tons"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Greutatea maximă autorizată pentru un ansamblu rutier standard în UE este 40 tone (44t în unele țări).",
      de: "Das maximal zulässige Gewicht für einen Standard-Lastzug in der EU beträgt 40 Tonnen (44t in einigen Ländern).",
      en: "Maximum authorized weight for standard road train in EU is 40 tons (44t in some countries)."
    }
  },
  {
    question: {
      ro: "Ce reprezintă sarcina pe osie?",
      de: "Was bedeutet Achslast?",
      en: "What does axle load represent?"
    },
    options: {
      ro: ["Greutatea totală", "Greutatea transmisă la sol de o singură osie", "Capacitatea motorului", "Volumul mărfii"],
      de: ["Gesamtgewicht", "Das auf den Boden von einer einzelnen Achse übertragene Gewicht", "Motorleistung", "Frachtvolumen"],
      en: ["Total weight", "Weight transmitted to ground by a single axle", "Engine capacity", "Cargo volume"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sarcina pe osie reprezintă greutatea suportată de fiecare osie a vehiculului, cu limite legale specifice.",
      de: "Die Achslast ist das von jeder Fahrzeugachse getragene Gewicht mit spezifischen gesetzlichen Grenzen.",
      en: "Axle load is weight borne by each vehicle axle, with specific legal limits."
    }
  },
  {
    question: {
      ro: "Care este înălțimea standard a platformei unei remorci?",
      de: "Was ist die Standardhöhe einer Anhängerplattform?",
      en: "What is the standard platform height of a trailer?"
    },
    options: {
      ro: ["0.5 m", "Aproximativ 1.3-1.4 m de la sol", "2 m", "3 m"],
      de: ["0,5 m", "Ungefähr 1,3-1,4 m vom Boden", "2 m", "3 m"],
      en: ["0.5 m", "Approximately 1.3-1.4 m from ground", "2 m", "3 m"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Platforma standard este la circa 1.3-1.4 m, permițând înălțime utilă de aproximativ 2.7 m pentru încărcare.",
      de: "Die Standardplattform ist ca. 1,3-1,4 m hoch, was eine nutzbare Ladehöhe von ca. 2,7 m ermöglicht.",
      en: "Standard platform is about 1.3-1.4 m, allowing usable loading height of approximately 2.7 m."
    }
  },
  {
    question: {
      ro: "Ce este un europalette (EUR/EPAL)?",
      de: "Was ist eine Europalette (EUR/EPAL)?",
      en: "What is a europallet (EUR/EPAL)?"
    },
    options: {
      ro: ["Palet de plastic", "Palet standardizat 80x120 cm folosit în transportul european", "Palet american", "Container mic"],
      de: ["Kunststoffpalette", "Standardisierte Palette 80x120 cm für europäischen Transport", "Amerikanische Palette", "Kleiner Container"],
      en: ["Plastic pallet", "Standardized 80x120 cm pallet used in European transport", "American pallet", "Small container"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Europalet-ul are dimensiuni standardizate de 80x120 cm și este cel mai utilizat în transportul european.",
      de: "Die Europalette hat Standardmaße von 80x120 cm und ist im europäischen Transport am häufigsten verwendet.",
      en: "Europallet has standardized dimensions of 80x120 cm and is most used in European transport."
    }
  },
  {
    question: {
      ro: "Câte europaleti încap într-o remorcă standard aranjați optim?",
      de: "Wie viele Europaletten passen optimal in einen Standardanhänger?",
      en: "How many europallets fit optimally in a standard trailer?"
    },
    options: {
      ro: ["20 paleti", "33 paleti la un nivel", "50 paleti", "40 paleti"],
      de: ["20 Paletten", "33 Paletten auf einer Ebene", "50 Paletten", "40 Paletten"],
      en: ["20 pallets", "33 pallets on one level", "50 pallets", "40 pallets"]
    },
    correctIndex: 1,
    explanation: {
      ro: "O remorcă standard (13.6m x 2.45m) poate încărca 33 europaleti pe un singur nivel.",
      de: "Ein Standardanhänger (13,6m x 2,45m) kann 33 Europaletten auf einer Ebene laden.",
      en: "Standard trailer (13.6m x 2.45m) can load 33 europallets on single level."
    }
  },
  {
    question: {
      ro: "Ce este securizarea încărcăturii?",
      de: "Was ist Ladungssicherung?",
      en: "What is cargo securing?"
    },
    options: {
      ro: ["Doar acoperirea", "Fixarea mărfii pentru a preveni mișcarea în timpul transportului", "Doar etichetarea", "Doar numărarea"],
      de: ["Nur Abdecken", "Befestigung der Fracht zur Verhinderung von Bewegung während des Transports", "Nur Etikettierung", "Nur Zählen"],
      en: ["Only covering", "Fixing cargo to prevent movement during transport", "Only labeling", "Only counting"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Securizarea previne deplasarea mărfii prin centuri, bare, rețele sau alte sisteme de fixare.",
      de: "Ladungssicherung verhindert Frachtbewegung durch Gurte, Stangen, Netze oder andere Befestigungssysteme.",
      en: "Securing prevents cargo movement through straps, bars, nets or other fixing systems."
    }
  },
  {
    question: {
      ro: "Ce forțe acționează asupra mărfii în timpul transportului?",
      de: "Welche Kräfte wirken während des Transports auf die Ladung?",
      en: "What forces act on cargo during transport?"
    },
    options: {
      ro: ["Doar gravitația", "Inerție (accelerare, frânare), forță centrifugă, vibrații", "Doar vântul", "Nicio forță"],
      de: ["Nur Schwerkraft", "Trägheit (Beschleunigung, Bremsen), Zentrifugalkraft, Vibrationen", "Nur Wind", "Keine Kräfte"],
      en: ["Only gravity", "Inertia (acceleration, braking), centrifugal force, vibrations", "Only wind", "No forces"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marfa este supusă forțelor de inerție la accelerare/frânare, forței centrifuge în viraje și vibrațiilor.",
      de: "Ladung ist Trägheitskräften beim Beschleunigen/Bremsen, Zentrifugalkraft in Kurven und Vibrationen ausgesetzt.",
      en: "Cargo is subjected to inertia forces during acceleration/braking, centrifugal force in turns and vibrations."
    }
  },
  {
    question: {
      ro: "Care este factorul de accelerare înainte (frânare bruscă)?",
      de: "Was ist der Beschleunigungsfaktor nach vorne (scharfes Bremsen)?",
      en: "What is the forward acceleration factor (sharp braking)?"
    },
    options: {
      ro: ["0.3 g", "0.8 g (80% din greutate)", "0.5 g", "1.5 g"],
      de: ["0,3 g", "0,8 g (80% des Gewichts)", "0,5 g", "1,5 g"],
      en: ["0.3 g", "0.8 g (80% of weight)", "0.5 g", "1.5 g"]
    },
    correctIndex: 1,
    explanation: {
      ro: "La frânare bruscă, marfa suportă o forță de până la 0.8g - 80% din greutatea sa împingând înainte.",
      de: "Bei scharfem Bremsen erfährt die Ladung eine Kraft von bis zu 0,8g - 80% ihres Gewichts drückt nach vorne.",
      en: "During sharp braking, cargo experiences force up to 0.8g - 80% of its weight pushing forward."
    }
  },
  {
    question: {
      ro: "Ce sunt centurile de ancorare (ratchet straps)?",
      de: "Was sind Spanngurte (Ratschengurte)?",
      en: "What are ratchet straps?"
    },
    options: {
      ro: ["Curele de siguranță auto", "Benzi cu clichet pentru fixarea și tensionarea încărcăturii", "Curele pentru șofer", "Curele decorative"],
      de: ["Auto-Sicherheitsgurte", "Gurte mit Ratsche zur Befestigung und Spannung der Ladung", "Fahrergurte", "Dekorative Gurte"],
      en: ["Car seat belts", "Straps with ratchet for fixing and tensioning cargo", "Driver belts", "Decorative straps"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Centurile de ancorare cu clichet permit fixarea și tensionarea controlată a mărfii pe platforma vehiculului.",
      de: "Spanngurte mit Ratsche ermöglichen die kontrollierte Befestigung und Spannung der Ladung auf der Fahrzeugplattform.",
      en: "Ratchet straps allow controlled fixing and tensioning of cargo on vehicle platform."
    }
  },
  {
    question: {
      ro: "Ce reprezintă capacitatea de ridicare indicată (SWL)?",
      de: "Was bedeutet die angegebene Tragfähigkeit (SWL)?",
      en: "What does Safe Working Load (SWL) represent?"
    },
    options: {
      ro: ["Greutatea vehiculului", "Sarcina maximă de lucru sigură pentru echipamentul de fixare", "Greutatea șoferului", "Volumul mărfii"],
      de: ["Fahrzeuggewicht", "Maximale sichere Arbeitslast für Befestigungsausrüstung", "Fahrergewicht", "Frachtvolumen"],
      en: ["Vehicle weight", "Maximum safe working load for securing equipment", "Driver weight", "Cargo volume"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SWL indică sarcina maximă pe care un echipament de fixare o poate suporta în condiții de siguranță.",
      de: "SWL gibt die maximale Last an, die eine Befestigungsausrüstung unter sicheren Bedingungen tragen kann.",
      en: "SWL indicates maximum load securing equipment can safely bear under normal conditions."
    }
  },
  {
    question: {
      ro: "Ce este coeficientul de frecare?",
      de: "Was ist der Reibungskoeffizient?",
      en: "What is the friction coefficient?"
    },
    options: {
      ro: ["Viteza vehiculului", "Valoare care indică rezistența la alunecare între suprafețe", "Greutatea mărfii", "Înălțimea mărfii"],
      de: ["Fahrzeuggeschwindigkeit", "Wert, der den Gleitwiderstand zwischen Oberflächen angibt", "Frachtgewicht", "Frachthöhe"],
      en: ["Vehicle speed", "Value indicating sliding resistance between surfaces", "Cargo weight", "Cargo height"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Coeficientul de frecare determină cât de ușor poate aluneca marfa pe platforma vehiculului.",
      de: "Der Reibungskoeffizient bestimmt, wie leicht Ladung auf der Fahrzeugplattform gleiten kann.",
      en: "Friction coefficient determines how easily cargo can slide on vehicle platform."
    }
  },
  {
    question: {
      ro: "Ce rol au covorașele antiderapante în încărcare?",
      de: "Welche Rolle spielen Antirutschmatten bei der Beladung?",
      en: "What role do anti-slip mats play in loading?"
    },
    options: {
      ro: ["Doar estetică", "Măresc frecarea și reduc necesarul de fixare suplimentară", "Reduc greutatea", "Măresc volumul"],
      de: ["Nur Ästhetik", "Erhöhen die Reibung und reduzieren den Bedarf an zusätzlicher Sicherung", "Reduzieren Gewicht", "Erhöhen Volumen"],
      en: ["Only aesthetics", "Increase friction and reduce need for additional securing", "Reduce weight", "Increase volume"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Covorașele antiderapante măresc coeficientul de frecare, reducând forța de fixare necesară.",
      de: "Antirutschmatten erhöhen den Reibungskoeffizienten und reduzieren die erforderliche Sicherungskraft.",
      en: "Anti-slip mats increase friction coefficient, reducing required securing force."
    }
  },
  {
    question: {
      ro: "Ce este blocarea (blocking) încărcăturii?",
      de: "Was ist Ladungsblockierung?",
      en: "What is cargo blocking?"
    },
    options: {
      ro: ["Acoperirea mărfii", "Utilizarea de obstacole fizice pentru a preveni mișcarea", "Etichetarea", "Cântărirea"],
      de: ["Abdecken der Fracht", "Verwendung physischer Hindernisse zur Verhinderung von Bewegung", "Etikettierung", "Wiegen"],
      en: ["Covering cargo", "Using physical obstacles to prevent movement", "Labeling", "Weighing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Blocarea folosește bare, pereți sau alte obstacole pentru a împiedica deplasarea mărfii.",
      de: "Blockierung verwendet Stangen, Wände oder andere Hindernisse, um Ladungsbewegung zu verhindern.",
      en: "Blocking uses bars, walls or other obstacles to prevent cargo movement."
    }
  },
  {
    question: {
      ro: "Cum se distribuie corect greutatea în remorcă?",
      de: "Wie wird das Gewicht im Anhänger richtig verteilt?",
      en: "How is weight correctly distributed in trailer?"
    },
    options: {
      ro: ["Totul în spate", "Uniform, cu centrul de greutate jos și central, respectând sarcinile pe osii", "Totul în față", "Nu contează"],
      de: ["Alles hinten", "Gleichmäßig, mit niedrigem und zentralem Schwerpunkt, unter Beachtung der Achslasten", "Alles vorne", "Spielt keine Rolle"],
      en: ["All in back", "Evenly, with low and central center of gravity, respecting axle loads", "All in front", "Doesn't matter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Greutatea se distribuie uniform, cu marfa grea jos și central, respectând limitele de sarcină pe osii.",
      de: "Das Gewicht wird gleichmäßig verteilt, mit schwerer Ladung unten und zentral, unter Einhaltung der Achslastgrenzen.",
      en: "Weight is distributed evenly, with heavy cargo low and central, respecting axle load limits."
    }
  },
  {
    question: {
      ro: "Ce sunt punctele de ancorare pe remorcă?",
      de: "Was sind Ankerpunkte am Anhänger?",
      en: "What are anchor points on trailer?"
    },
    options: {
      ro: ["Lumini", "Puncte fixe certificate pentru atașarea dispozitivelor de fixare", "Roți de rezervă", "Oglinzi"],
      de: ["Lichter", "Zertifizierte feste Punkte zur Befestigung von Sicherungsgeräten", "Ersatzräder", "Spiegel"],
      en: ["Lights", "Certified fixed points for attaching securing devices", "Spare wheels", "Mirrors"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Punctele de ancorare sunt locații certificate pe remorcă pentru fixarea sigură a centurilor și lanțurilor.",
      de: "Ankerpunkte sind zertifizierte Stellen am Anhänger für die sichere Befestigung von Gurten und Ketten.",
      en: "Anchor points are certified locations on trailer for secure attachment of straps and chains."
    }
  },
  {
    question: {
      ro: "Ce este o marfă stivuibilă?",
      de: "Was ist stapelbare Fracht?",
      en: "What is stackable cargo?"
    },
    options: {
      ro: ["Marfă lichidă", "Marfă care poate fi încărcată în mai multe niveluri una peste alta", "Marfă frigorificată", "Marfă periculoasă"],
      de: ["Flüssige Fracht", "Fracht, die in mehreren Ebenen übereinander geladen werden kann", "Kühlfracht", "Gefahrgut"],
      en: ["Liquid cargo", "Cargo that can be loaded in multiple levels on top of each other", "Refrigerated cargo", "Dangerous cargo"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marfa stivuibilă poate fi suprapusă în siguranță, maximizând utilizarea spațiului vertical.",
      de: "Stapelbare Fracht kann sicher übereinander gestapelt werden, was die vertikale Raumnutzung maximiert.",
      en: "Stackable cargo can be safely stacked on top of each other, maximizing vertical space utilization."
    }
  },
  {
    question: {
      ro: "Ce verificări trebuie făcute înainte de încărcare?",
      de: "Welche Prüfungen müssen vor dem Beladen durchgeführt werden?",
      en: "What checks must be done before loading?"
    },
    options: {
      ro: ["Nicio verificare", "Curățenie, stare podea, funcționare prelată, echipament fixare disponibil", "Doar combustibil", "Doar cauciucuri"],
      de: ["Keine Prüfung", "Sauberkeit, Bodenzustand, Plane funktioniert, Sicherungsausrüstung verfügbar", "Nur Kraftstoff", "Nur Reifen"],
      en: ["No checks", "Cleanliness, floor condition, tarpaulin works, securing equipment available", "Only fuel", "Only tires"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Înainte de încărcare: verifică curățenia, starea podelei, prelata și disponibilitatea echipamentului de fixare.",
      de: "Vor dem Beladen: Sauberkeit, Bodenzustand, Plane und Verfügbarkeit der Sicherungsausrüstung prüfen.",
      en: "Before loading: check cleanliness, floor condition, tarpaulin and securing equipment availability."
    }
  },
  {
    question: {
      ro: "Ce este un walking floor?",
      de: "Was ist ein Schubboden?",
      en: "What is a walking floor?"
    },
    options: {
      ro: ["Podea normală", "Sistem de podea mobilă pentru descărcare automată a mărfurilor în vrac", "Podea încălzită", "Podea din lemn"],
      de: ["Normaler Boden", "Bewegliches Bodensystem für automatische Entladung von Schüttgütern", "Beheizter Boden", "Holzboden"],
      en: ["Normal floor", "Moving floor system for automatic unloading of bulk goods", "Heated floor", "Wooden floor"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Walking floor are lamele mobile care deplasează marfa în vrac către ieșire fără a fi nevoie de basculare.",
      de: "Der Schubboden hat bewegliche Lamellen, die Schüttgut zum Ausgang bewegen, ohne Kippen zu erfordern.",
      en: "Walking floor has moving slats that move bulk cargo towards exit without need for tipping."
    }
  },
  {
    question: {
      ro: "Ce este mega-trailer-ul sau jumbo-trailer-ul?",
      de: "Was ist ein Mega-Trailer oder Jumbo-Trailer?",
      en: "What is a mega-trailer or jumbo-trailer?"
    },
    options: {
      ro: ["Remorcă mică", "Remorcă cu înălțime interioară mai mare (3m+) pentru volum suplimentar", "Remorcă frigorificată", "Remorcă deschisă"],
      de: ["Kleiner Anhänger", "Anhänger mit größerer Innenhöhe (3m+) für zusätzliches Volumen", "Kühlanhänger", "Offener Anhänger"],
      en: ["Small trailer", "Trailer with greater interior height (3m+) for additional volume", "Refrigerated trailer", "Open trailer"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mega/jumbo-trailer-ul are înălțime interioară de circa 3 metri, permiți încărcare pe 3 niveluri de paleti.",
      de: "Der Mega/Jumbo-Trailer hat eine Innenhöhe von ca. 3 Metern und ermöglicht Beladung auf 3 Palettenebenen.",
      en: "Mega/jumbo-trailer has interior height of about 3 meters, allowing loading on 3 pallet levels."
    }
  },
  {
    question: {
      ro: "Ce este double-deck loading?",
      de: "Was ist Doppelstock-Beladung?",
      en: "What is double-deck loading?"
    },
    options: {
      ro: ["Încărcare simplă", "Încărcare pe două niveluri folosind sisteme de etaje mobile", "Încărcare laterală", "Descărcare"],
      de: ["Einfache Beladung", "Beladung auf zwei Ebenen mit beweglichen Etagensystemen", "Seitenbeladung", "Entladung"],
      en: ["Simple loading", "Loading on two levels using movable deck systems", "Side loading", "Unloading"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Double-deck folosește platforme intermediare pentru a încărca pe două niveluri, dublând capacitatea.",
      de: "Doppelstock verwendet Zwischenplattformen für Beladung auf zwei Ebenen, was die Kapazität verdoppelt.",
      en: "Double-deck uses intermediate platforms to load on two levels, doubling capacity."
    }
  },
  {
    question: {
      ro: "Ce precauții se iau pentru mărfuri fragile?",
      de: "Welche Vorsichtsmaßnahmen werden für zerbrechliche Güter getroffen?",
      en: "What precautions are taken for fragile goods?"
    },
    options: {
      ro: ["Nicio precauție", "Ambalaj protector, fixare atentă, evitarea stivuirii grele, manipulare delicată", "Doar etichetare", "Doar asigurare"],
      de: ["Keine Vorsichtsmaßnahmen", "Schutzverpackung, sorgfältige Sicherung, Vermeidung schwerer Stapelung, vorsichtige Handhabung", "Nur Etikettierung", "Nur Versicherung"],
      en: ["No precautions", "Protective packaging, careful securing, avoiding heavy stacking, gentle handling", "Only labeling", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mărfurile fragile necesită ambalaj adecvat, fixare fără presiune excesivă și manipulare cu grijă.",
      de: "Zerbrechliche Güter erfordern angemessene Verpackung, Sicherung ohne übermäßigen Druck und sorgfältige Handhabung.",
      en: "Fragile goods require proper packaging, securing without excessive pressure and careful handling."
    }
  },
  {
    question: {
      ro: "Ce este un tail lift (rampă hidraulică)?",
      de: "Was ist eine Ladebordwand?",
      en: "What is a tail lift?"
    },
    options: {
      ro: ["Frână suplimentară", "Platformă hidraulică pentru încărcare/descărcare la nivelul solului", "Motor auxiliar", "Rezervor suplimentar"],
      de: ["Zusätzliche Bremse", "Hydraulische Plattform zum Be-/Entladen auf Bodenhöhe", "Hilfsmotor", "Zusätzlicher Tank"],
      en: ["Additional brake", "Hydraulic platform for loading/unloading at ground level", "Auxiliary engine", "Additional tank"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tail lift-ul permite încărcarea mărfii de la nivelul solului fără a fi nevoie de rampă sau stivuitor.",
      de: "Die Ladebordwand ermöglicht das Laden von Waren vom Boden ohne Rampe oder Gabelstapler.",
      en: "Tail lift allows loading goods from ground level without need for ramp or forklift."
    }
  },
  {
    question: {
      ro: "Ce este volumul util al remorcii?",
      de: "Was ist das Nutzvolumen des Anhängers?",
      en: "What is the useful volume of trailer?"
    },
    options: {
      ro: ["Volumul motorului", "Spațiul interior disponibil pentru încărcare în metri cubi", "Capacitatea rezervorului", "Greutatea totală"],
      de: ["Motorvolumen", "Für Beladung verfügbarer Innenraum in Kubikmetern", "Tankkapazität", "Gesamtgewicht"],
      en: ["Engine volume", "Interior space available for loading in cubic meters", "Tank capacity", "Total weight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Volumul util este spațiul efectiv pentru marfă, aproximativ 85-100 m³ pentru remorcă standard.",
      de: "Das Nutzvolumen ist der effektive Laderaum, ca. 85-100 m³ für einen Standardanhänger.",
      en: "Useful volume is effective cargo space, approximately 85-100 m³ for standard trailer."
    }
  },
  {
    question: {
      ro: "Ce este factor de stivuire?",
      de: "Was ist der Staufaktor?",
      en: "What is the stowage factor?"
    },
    options: {
      ro: ["Prețul transportului", "Raportul dintre volumul ocupat și greutatea mărfii (m³/tonă)", "Viteza de încărcare", "Timpul de tranzit"],
      de: ["Transportpreis", "Verhältnis zwischen belegtem Volumen und Frachtgewicht (m³/Tonne)", "Ladegeschwindigkeit", "Transitzeit"],
      en: ["Transport price", "Ratio between occupied volume and cargo weight (m³/ton)", "Loading speed", "Transit time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Factorul de stivuire indică câte m³ ocupă o tonă de marfă, util pentru planificarea încărcăturii.",
      de: "Der Staufaktor gibt an, wie viele m³ eine Tonne Ladung belegt, nützlich für die Ladungsplanung.",
      en: "Stowage factor indicates how many m³ one ton of cargo occupies, useful for load planning."
    }
  },
  {
    question: {
      ro: "Ce document confirmă cantitatea încărcată?",
      de: "Welches Dokument bestätigt die geladene Menge?",
      en: "What document confirms the loaded quantity?"
    },
    options: {
      ro: ["Doar factura", "CMR cu detalii despre colete, greutate și observații", "Doar asigurarea", "Doar contractul"],
      de: ["Nur Rechnung", "CMR mit Details zu Packstücken, Gewicht und Bemerkungen", "Nur Versicherung", "Nur Vertrag"],
      en: ["Only invoice", "CMR with details about packages, weight and observations", "Only insurance", "Only contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR-ul documentează oficial cantitatea, numărul de colete și orice observații la încărcare.",
      de: "Der CMR dokumentiert offiziell die Menge, Anzahl der Packstücke und alle Bemerkungen beim Laden.",
      en: "CMR officially documents quantity, number of packages and any observations at loading."
    }
  },
  {
    question: {
      ro: "Care este timpul standard de încărcare/descărcare gratuit?",
      de: "Was ist die Standard-freie Lade-/Entladezeit?",
      en: "What is the standard free loading/unloading time?"
    },
    options: {
      ro: ["30 minute", "De obicei 2-4 ore, conform acordului", "8 ore", "Nelimitat"],
      de: ["30 Minuten", "Normalerweise 2-4 Stunden, laut Vereinbarung", "8 Stunden", "Unbegrenzt"],
      en: ["30 minutes", "Usually 2-4 hours, according to agreement", "8 hours", "Unlimited"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Timpul liber standard este de 2-4 ore; depășirea atrage taxe de staționare (demurrage).",
      de: "Die Standard-Freizeit beträgt 2-4 Stunden; Überschreitung führt zu Standgebühren (Demurrage).",
      en: "Standard free time is 2-4 hours; exceeding attracts waiting charges (demurrage)."
    }
  },
  {
    question: {
      ro: "Ce este un consolidated shipment?",
      de: "Was ist eine konsolidierte Sendung?",
      en: "What is a consolidated shipment?"
    },
    options: {
      ro: ["Transport dedicat", "Mai multe expedieri mici grupate într-un singur transport", "Transport urgent", "Transport gol"],
      de: ["Dedizierter Transport", "Mehrere kleine Sendungen in einem Transport gruppiert", "Eiltransport", "Leerer Transport"],
      en: ["Dedicated transport", "Multiple small shipments grouped into single transport", "Urgent transport", "Empty transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Consolidarea grupează mai multe expedieri mici pentru a umple vehiculul și reduce costurile.",
      de: "Konsolidierung gruppiert mehrere kleine Sendungen, um das Fahrzeug zu füllen und Kosten zu senken.",
      en: "Consolidation groups multiple small shipments to fill vehicle and reduce costs."
    }
  },
  {
    question: {
      ro: "Ce rol au panourile despărțitoare în remorcă?",
      de: "Welche Rolle spielen Trennwände im Anhänger?",
      en: "What role do partition panels play in trailer?"
    },
    options: {
      ro: ["Doar estetică", "Separă încărcături diferite și ajută la securizare", "Reduc greutatea", "Măresc viteza"],
      de: ["Nur Ästhetik", "Trennen verschiedene Ladungen und helfen bei der Sicherung", "Reduzieren Gewicht", "Erhöhen Geschwindigkeit"],
      en: ["Only aesthetics", "Separate different loads and help with securing", "Reduce weight", "Increase speed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Panourile despărțitoare separă mărfuri diferite și oferă suport pentru fixare și blocaj.",
      de: "Trennwände trennen verschiedene Ladungen und bieten Unterstützung für Sicherung und Blockierung.",
      en: "Partition panels separate different cargoes and provide support for securing and blocking."
    }
  }
];

export function getRandomLoadingQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...loadingQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
