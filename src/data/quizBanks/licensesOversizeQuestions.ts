import { QuizQuestion } from '../quizData';

export const licensesOversizeQuestions: QuizQuestion[] = [
  // Romanian Questions (16)
  {
    question: "Ce este o autorizație de transport agabaritic?",
    options: [
      "Permis pentru transporturi care depășesc dimensiunile/greutățile standard",
      "Licență pentru transport internațional",
      "Autorizație pentru transport ADR",
      "Permis de conducere categoria C+E"
    ],
    correctIndex: 0,
    explanation: "Autorizația de transport agabaritic permite transportul mărfurilor care depășesc limitele legale de dimensiuni sau greutate.",
    language: "ro"
  },
  {
    question: "Care este lățimea maximă standard pentru un transport rutier în UE fără autorizație specială?",
    options: [
      "2,55 metri",
      "2,75 metri",
      "3,00 metri",
      "2,40 metri"
    ],
    correctIndex: 0,
    explanation: "Lățimea maximă standard în UE este de 2,55 metri (2,60m pentru vehicule frigorifice).",
    language: "ro"
  },
  {
    question: "Ce tip de escortă este necesară pentru transporturi cu lățime peste 4,5 metri?",
    options: [
      "Escortă poliție obligatorie",
      "Doar mașină de însoțire",
      "Nu este necesară escortă",
      "Escortă privată opțională"
    ],
    correctIndex: 0,
    explanation: "Transporturile foarte largi (peste 4,5m) necesită escortă de poliție pentru siguranța traficului.",
    language: "ro"
  },
  {
    question: "Care este înălțimea maximă standard pentru transporturi rutiere în Europa?",
    options: [
      "4,00 metri",
      "4,50 metri",
      "3,80 metri",
      "4,20 metri"
    ],
    correctIndex: 0,
    explanation: "Înălțimea maximă standard este de 4,00 metri în majoritatea țărilor europene.",
    language: "ro"
  },
  {
    question: "Ce document este obligatoriu pentru transportul unei utilaje de 45 tone?",
    options: [
      "Autorizație de transport agabaritic",
      "Doar CMR standard",
      "Certificat ADR",
      "Licență de cabotaj"
    ],
    correctIndex: 0,
    explanation: "Transporturile care depășesc 40 tone MMA necesită autorizație specială de transport agabaritic.",
    language: "ro"
  },
  {
    question: "Ce înseamnă 'low-loader' în transportul agabaritic?",
    options: [
      "Platformă cu încărcare joasă pentru mărfuri înalte",
      "Camion frigorific",
      "Remorcă standard",
      "Vehicul pentru transport ADR"
    ],
    correctIndex: 0,
    explanation: "Low-loader-ul este o platformă cu podea joasă, permițând transportul mărfurilor înalte sub limita legală.",
    language: "ro"
  },
  {
    question: "Care este greutatea maximă pe osie simplă în majoritatea țărilor UE?",
    options: [
      "11,5 tone",
      "10 tone",
      "13 tone",
      "8 tone"
    ],
    correctIndex: 0,
    explanation: "Limita standard pentru osie simplă este de 11,5 tone în UE.",
    language: "ro"
  },
  {
    question: "Ce restricție se aplică frecvent transporturilor agabaritice?",
    options: [
      "Interdicție de circulație în weekend și sărbători",
      "Viteză minimă obligatorie",
      "Transport doar noaptea",
      "Fără restricții speciale"
    ],
    correctIndex: 0,
    explanation: "Transporturile agabaritice au adesea restricții de circulație în weekend și sărbători pentru a minimiza impactul asupra traficului.",
    language: "ro"
  },
  {
    question: "Ce este un 'route survey' pentru transport agabaritic?",
    options: [
      "Verificarea traseului pentru obstacole și restricții",
      "Sondaj de opinie despre rută",
      "Măsurarea distanței totale",
      "Evaluarea costurilor de combustibil"
    ],
    correctIndex: 0,
    explanation: "Route survey presupune inspectarea fizică a traseului pentru identificarea podurilor joase, curbe strâmte și alte obstacole.",
    language: "ro"
  },
  {
    question: "Care este termenul pentru un transport care depășește 100 tone?",
    options: [
      "Super-heavy transport",
      "Standard oversize",
      "Light abnormal load",
      "Medium heavy transport"
    ],
    correctIndex: 0,
    explanation: "Transporturile peste 100 tone sunt clasificate ca super-heavy și necesită planificare și autorizații extinse.",
    language: "ro"
  },
  {
    question: "Ce înseamnă 'încărcătură indivizibilă' în contextul transportului agabaritic?",
    options: [
      "Marfă care nu poate fi împărțită fără deteriorare sau costuri excesive",
      "Orice marfă supradimensionată",
      "Doar materiale periculoase",
      "Mărfuri containerizate"
    ],
    correctIndex: 0,
    explanation: "Încărcătura indivizibilă este cea care nu poate fi împărțită în mod rezonabil fără deteriorare sau costuri excesive.",
    language: "ro"
  },
  {
    question: "Ce vehicul specializat este folosit pentru transportul turbinelor eoliene?",
    options: [
      "Blade trailer (remorcă pentru pale)",
      "Camion standard cu prelată",
      "Containership",
      "Vehicul frigorific"
    ],
    correctIndex: 0,
    explanation: "Blade trailer-ele sunt remorci specializate concepute pentru transportul palelor de turbine eoliene.",
    language: "ro"
  },
  {
    question: "Care este lungimea maximă standard pentru un ansamblu rutier în UE?",
    options: [
      "16,50 metri",
      "18,75 metri",
      "20,00 metri",
      "22,00 metri"
    ],
    correctIndex: 1,
    explanation: "Lungimea maximă standard pentru un ansamblu rutier (cap tractor + semiremorcă) în UE este de 18,75 metri.",
    language: "ro"
  },
  {
    question: "Ce tip de autorizație este necesară pentru transportul transfrontalier agabaritic?",
    options: [
      "Autorizații separate pentru fiecare țară tranzitată",
      "Doar autorizația țării de origine",
      "Licența comunitară este suficientă",
      "Nu sunt necesare autorizații"
    ],
    correctIndex: 0,
    explanation: "Transportul agabaritic transfrontalier necesită autorizații separate pentru fiecare țară traversată.",
    language: "ro"
  },
  {
    question: "Ce este un 'pilot car' în transportul agabaritic?",
    options: [
      "Vehicul de escortă care precedă sau urmează transportul",
      "Primul camion din convoy",
      "Vehicul de urgență",
      "Mașina managerului de transport"
    ],
    correctIndex: 0,
    explanation: "Pilot car este vehiculul de escortă care avertizează traficul și verifică obstacolele pentru transportul agabaritic.",
    language: "ro"
  },
  {
    question: "Ce semnalizare specială este obligatorie pentru transporturile agabaritice?",
    options: [
      "Panouri reflectorizante și lumini de avertizare",
      "Doar claxon puternic",
      "Steaguri albastre",
      "Nicio semnalizare specială"
    ],
    correctIndex: 0,
    explanation: "Transporturile agabaritice trebuie să aibă panouri reflectorizante și lumini de avertizare pentru vizibilitate.",
    language: "ro"
  },

  // German Questions (16)
  {
    question: "Was ist eine Schwertransportgenehmigung?",
    options: [
      "Erlaubnis für übergroße/überschwere Transporte",
      "Internationale Transportlizenz",
      "ADR-Genehmigung",
      "LKW-Führerschein"
    ],
    correctIndex: 0,
    explanation: "Die Schwertransportgenehmigung erlaubt den Transport von Gütern, die die gesetzlichen Maß- oder Gewichtsgrenzen überschreiten.",
    language: "de"
  },
  {
    question: "Welche maximale Breite ist in der EU ohne Sondergenehmigung erlaubt?",
    options: [
      "2,55 Meter",
      "2,75 Meter",
      "3,00 Meter",
      "2,40 Meter"
    ],
    correctIndex: 0,
    explanation: "Die maximale Standardbreite in der EU beträgt 2,55 Meter (2,60m für Kühlfahrzeuge).",
    language: "de"
  },
  {
    question: "Welche Begleitung ist für Transporte über 4,5 Meter Breite erforderlich?",
    options: [
      "Polizeibegleitung Pflicht",
      "Nur Begleitfahrzeug",
      "Keine Begleitung erforderlich",
      "Private Begleitung optional"
    ],
    correctIndex: 0,
    explanation: "Sehr breite Transporte (über 4,5m) erfordern Polizeibegleitung für die Verkehrssicherheit.",
    language: "de"
  },
  {
    question: "Was ist die maximale Standardhöhe für Straßentransporte in Europa?",
    options: [
      "4,00 Meter",
      "4,50 Meter",
      "3,80 Meter",
      "4,20 Meter"
    ],
    correctIndex: 0,
    explanation: "Die maximale Standardhöhe beträgt in den meisten europäischen Ländern 4,00 Meter.",
    language: "de"
  },
  {
    question: "Was ist ein 'Tieflader' im Schwertransport?",
    options: [
      "Plattform mit niedriger Ladefläche für hohe Güter",
      "Kühl-LKW",
      "Standardanhänger",
      "ADR-Fahrzeug"
    ],
    correctIndex: 0,
    explanation: "Ein Tieflader hat eine niedrige Ladefläche, die den Transport hoher Güter unter der Höhengrenze ermöglicht.",
    language: "de"
  },
  {
    question: "Welche maximale Achslast gilt für Einzelachsen in der EU?",
    options: [
      "11,5 Tonnen",
      "10 Tonnen",
      "13 Tonnen",
      "8 Tonnen"
    ],
    correctIndex: 0,
    explanation: "Das Standard-Achslastlimit für Einzelachsen beträgt in der EU 11,5 Tonnen.",
    language: "de"
  },
  {
    question: "Welche Einschränkung gilt häufig für Schwertransporte?",
    options: [
      "Fahrverbot an Wochenenden und Feiertagen",
      "Mindestgeschwindigkeit vorgeschrieben",
      "Nur Nachtfahrten",
      "Keine besonderen Einschränkungen"
    ],
    correctIndex: 0,
    explanation: "Schwertransporte haben oft Fahrverbote an Wochenenden und Feiertagen, um die Verkehrsbelastung zu minimieren.",
    language: "de"
  },
  {
    question: "Was ist eine 'Streckenbesichtigung' für Schwertransporte?",
    options: [
      "Überprüfung der Route auf Hindernisse und Einschränkungen",
      "Meinungsumfrage zur Route",
      "Messung der Gesamtstrecke",
      "Kraftstoffkostenbewertung"
    ],
    correctIndex: 0,
    explanation: "Die Streckenbesichtigung beinhaltet die physische Inspektion der Route auf niedrige Brücken, enge Kurven und andere Hindernisse.",
    language: "de"
  },
  {
    question: "Wie nennt man einen Transport über 100 Tonnen?",
    options: [
      "Superschwertransport",
      "Standard-Übermaß",
      "Leichter Sondertransport",
      "Mittelschwerer Transport"
    ],
    correctIndex: 0,
    explanation: "Transporte über 100 Tonnen werden als Superschwertransporte klassifiziert und erfordern umfangreiche Planung.",
    language: "de"
  },
  {
    question: "Was bedeutet 'LÜ' im deutschen Schwertransportwesen?",
    options: [
      "Länge, Überbreite - Kategorisierung nach Maßüberschreitung",
      "Lastenübertragung",
      "Ladeeinheit",
      "Lenkungsunterstützung"
    ],
    correctIndex: 0,
    explanation: "LÜ steht für die Klassifizierung von Sondertransporten nach Art der Maßüberschreitung.",
    language: "de"
  },
  {
    question: "Was ist eine 'unteilbare Ladung' im Schwertransportkontext?",
    options: [
      "Ladung, die nicht ohne Beschädigung oder hohe Kosten zerteilt werden kann",
      "Jede übergroße Ladung",
      "Nur Gefahrgut",
      "Containerware"
    ],
    correctIndex: 0,
    explanation: "Eine unteilbare Ladung ist eine, die nicht vernünftig in kleinere Ladungen ohne Beschädigung oder übermäßige Kosten aufgeteilt werden kann.",
    language: "de"
  },
  {
    question: "Welches spezialisierte Fahrzeug wird für den Transport von Windturbinenblättern verwendet?",
    options: [
      "Rotorblattanhänger",
      "Standard-Planenauflieger",
      "Containerschiff",
      "Kühlfahrzeug"
    ],
    correctIndex: 0,
    explanation: "Rotorblattanhänger sind spezialisierte Anhänger für den Transport von Windturbinenblättern.",
    language: "de"
  },
  {
    question: "Was ist die maximale Standardlänge für einen Sattelzug in der EU?",
    options: [
      "16,50 Meter",
      "18,75 Meter",
      "20,00 Meter",
      "22,00 Meter"
    ],
    correctIndex: 1,
    explanation: "Die maximale Standardlänge für einen Sattelzug (Zugmaschine + Auflieger) in der EU beträgt 18,75 Meter.",
    language: "de"
  },
  {
    question: "Welche Art von Genehmigung ist für grenzüberschreitende Schwertransporte erforderlich?",
    options: [
      "Separate Genehmigungen für jedes durchquerte Land",
      "Nur die Genehmigung des Ursprungslandes",
      "Gemeinschaftslizenz ist ausreichend",
      "Keine Genehmigungen erforderlich"
    ],
    correctIndex: 0,
    explanation: "Grenzüberschreitende Schwertransporte erfordern separate Genehmigungen für jedes durchquerte Land.",
    language: "de"
  },
  {
    question: "Was ist ein 'Begleitfahrzeug' im Schwertransport?",
    options: [
      "Eskortfahrzeug, das dem Transport vorausfährt oder folgt",
      "Der erste LKW im Konvoi",
      "Notfallfahrzeug",
      "Fahrzeug des Transportleiters"
    ],
    correctIndex: 0,
    explanation: "Das Begleitfahrzeug warnt den Verkehr und prüft Hindernisse für den Schwertransport.",
    language: "de"
  },
  {
    question: "Welche spezielle Kennzeichnung ist für Schwertransporte obligatorisch?",
    options: [
      "Reflektierende Tafeln und Warnleuchten",
      "Nur laute Hupe",
      "Blaue Flaggen",
      "Keine besondere Kennzeichnung"
    ],
    correctIndex: 0,
    explanation: "Schwertransporte müssen reflektierende Tafeln und Warnleuchten für bessere Sichtbarkeit haben.",
    language: "de"
  },

  // English Questions (16)
  {
    question: "What is an abnormal load transport permit?",
    options: [
      "Permission for oversized/overweight transports",
      "International transport license",
      "ADR certification",
      "HGV driving license"
    ],
    correctIndex: 0,
    explanation: "An abnormal load permit allows transportation of goods exceeding legal dimension or weight limits.",
    language: "en"
  },
  {
    question: "What is the maximum standard width for road transport in the EU without special permit?",
    options: [
      "2.55 meters",
      "2.75 meters",
      "3.00 meters",
      "2.40 meters"
    ],
    correctIndex: 0,
    explanation: "The maximum standard width in the EU is 2.55 meters (2.60m for refrigerated vehicles).",
    language: "en"
  },
  {
    question: "What type of escort is required for loads over 4.5 meters wide?",
    options: [
      "Police escort mandatory",
      "Only pilot vehicle",
      "No escort required",
      "Private escort optional"
    ],
    correctIndex: 0,
    explanation: "Very wide loads (over 4.5m) require police escort for traffic safety.",
    language: "en"
  },
  {
    question: "What is the maximum standard height for road transport in Europe?",
    options: [
      "4.00 meters",
      "4.50 meters",
      "3.80 meters",
      "4.20 meters"
    ],
    correctIndex: 0,
    explanation: "The maximum standard height is 4.00 meters in most European countries.",
    language: "en"
  },
  {
    question: "What is a 'low-loader' in abnormal load transport?",
    options: [
      "Platform with low deck for tall cargo",
      "Refrigerated truck",
      "Standard trailer",
      "ADR vehicle"
    ],
    correctIndex: 0,
    explanation: "A low-loader has a low deck height, allowing transport of tall cargo within height limits.",
    language: "en"
  },
  {
    question: "What is the maximum single axle weight in most EU countries?",
    options: [
      "11.5 tonnes",
      "10 tonnes",
      "13 tonnes",
      "8 tonnes"
    ],
    correctIndex: 0,
    explanation: "The standard single axle weight limit in the EU is 11.5 tonnes.",
    language: "en"
  },
  {
    question: "What restriction commonly applies to abnormal loads?",
    options: [
      "Weekend and holiday travel bans",
      "Mandatory minimum speed",
      "Night transport only",
      "No special restrictions"
    ],
    correctIndex: 0,
    explanation: "Abnormal loads often have travel restrictions during weekends and holidays to minimize traffic impact.",
    language: "en"
  },
  {
    question: "What is a 'route survey' for abnormal load transport?",
    options: [
      "Checking the route for obstacles and restrictions",
      "Opinion poll about the route",
      "Measuring total distance",
      "Fuel cost evaluation"
    ],
    correctIndex: 0,
    explanation: "A route survey involves physical inspection of the path for low bridges, tight curves, and other obstacles.",
    language: "en"
  },
  {
    question: "What term describes transport exceeding 100 tonnes?",
    options: [
      "Super-heavy transport",
      "Standard oversize",
      "Light abnormal load",
      "Medium heavy transport"
    ],
    correctIndex: 0,
    explanation: "Transports over 100 tonnes are classified as super-heavy and require extensive planning and permits.",
    language: "en"
  },
  {
    question: "What is 'indivisible load' in abnormal transport context?",
    options: [
      "Cargo that cannot be broken down without damage or high cost",
      "Any oversized cargo",
      "Hazardous materials only",
      "Containerized goods"
    ],
    correctIndex: 0,
    explanation: "An indivisible load is one that cannot be reasonably divided into smaller loads without damage or excessive cost.",
    language: "en"
  },
  {
    question: "What specialized vehicle is used for transporting wind turbine blades?",
    options: [
      "Blade trailer",
      "Standard curtainsider truck",
      "Container ship",
      "Refrigerated vehicle"
    ],
    correctIndex: 0,
    explanation: "Blade trailers are specialized trailers designed for transporting wind turbine blades.",
    language: "en"
  },
  {
    question: "What is the maximum standard length for a road train in the EU?",
    options: [
      "16.50 meters",
      "18.75 meters",
      "20.00 meters",
      "22.00 meters"
    ],
    correctIndex: 1,
    explanation: "The maximum standard length for a road train (tractor + semi-trailer) in the EU is 18.75 meters.",
    language: "en"
  },
  {
    question: "What type of permit is required for cross-border abnormal load transport?",
    options: [
      "Separate permits for each country transited",
      "Only origin country permit",
      "Community license is sufficient",
      "No permits required"
    ],
    correctIndex: 0,
    explanation: "Cross-border abnormal load transport requires separate permits for each country traversed.",
    language: "en"
  },
  {
    question: "What is a 'pilot car' in abnormal load transport?",
    options: [
      "Escort vehicle preceding or following the transport",
      "The first truck in the convoy",
      "Emergency vehicle",
      "Transport manager's car"
    ],
    correctIndex: 0,
    explanation: "A pilot car is the escort vehicle that warns traffic and checks for obstacles for the abnormal load.",
    language: "en"
  },
  {
    question: "What special signage is mandatory for abnormal loads?",
    options: [
      "Reflective panels and warning lights",
      "Only loud horn",
      "Blue flags",
      "No special signage"
    ],
    correctIndex: 0,
    explanation: "Abnormal loads must have reflective panels and warning lights for visibility.",
    language: "en"
  },
  {
    question: "What is the purpose of a multi-axle modular trailer?",
    options: [
      "To distribute heavy load weight across multiple axles",
      "To increase speed",
      "To reduce fuel consumption",
      "To carry refrigerated goods"
    ],
    correctIndex: 0,
    explanation: "Multi-axle modular trailers distribute extremely heavy loads across many axles to comply with road weight limits.",
    language: "en"
  }
];
