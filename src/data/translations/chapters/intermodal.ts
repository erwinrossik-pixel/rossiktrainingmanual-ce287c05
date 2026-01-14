export const intermodalTranslations = {
  ro: {
    chapterTitle: "Transport Intermodal",
    heroDescription: "Combinații rutier-feroviar-maritim pentru eficiență maximă și reducerea amprentei de carbon în transportul european.",
    intro: "Transportul intermodal reprezintă viitorul logisticii sustenabile în Europa. Prin combinarea inteligentă a transportului rutier, feroviar și maritim, companiile pot reduce costurile pe distanțe lungi cu 15-30%, emisiile de CO2 cu până la 80%, și pot accesa capacități suplimentare în perioadele de vârf. Acest capitol oferă cunoștințele necesare pentru a planifica, executa și optimiza transporturile intermodale.",

    section1Title: "Ce este Transportul Intermodal?",
    section1Content: "Transportul intermodal înseamnă deplasarea mărfii folosind cel puțin două moduri de transport diferite, păstrând aceeași unitate de încărcare (container, swap body sau semiremorcă) fără manipularea fizică a mărfii. Diferența față de transportul multimodal: în intermodal, unitatea de încărcare rămâne intactă, fiind transferată ca un tot de pe camion pe tren și înapoi. Aceasta elimină riscul de avarie la manipulare și reduce dramatic timpii de transbordare.",

    section2Title: "Tipuri de Transport Intermodal",
    section2Content: "Rail-Road (rutier-feroviar): cea mai comună formă în Europa continentală. Camionul preia/livrează pe ultima milă (50-150km), trenul transportă pe distanța principală (400-2000km). Short Sea Shipping (rutier-maritim): folosit pentru traversări maritime scurte - Baltica, Marea Nordului, Mediterana. Ro-Ro ferries permit încărcarea semiremorcilor direct. Deep Sea Intermodal: combinația container maritim oceanic + feroviar/rutier pentru import/export intercontinental. Rolling Highway (Ro-La): semiremorca completă (cu tractor) încărcată pe vagon special - folosit în tuneluri alpine și coridoare restrictive.",

    section3Title: "Avantaje Economice și Ecologice",
    section3Content: "Economii de cost pe distanțe >500km: trenul costă 0.02-0.04€/tonă-km vs. camion 0.08-0.12€/tonă-km. Emisii CO2 reduse cu 60-80%: un tren înlocuiește 35-50 camioane, cu amprenta de carbon per tonă-km de 10x mai mică. Independență de lipsa șoferilor: sectorul rutier are deficit de 400.000 șoferi în UE - feroviarul nu depinde de acest factor. Capacitate suplimentară în peak season: când camioanele lipsesc, trenurile pot prelua volumele. Acces în zone cu restricții: camioanele Euro 4/5 sunt interzise în multe orașe, trenurile nu au această problemă.",

    section4Title: "Infrastructura Intermodală Europeană",
    section4Content: "Terminale majore: Duisburg (cel mai mare hub intermodal din lume, 4M TEU/an), Rotterdam, Hamburg, Anvers, Milano Segrate, Budapest BILK, și Curtici (RO). Echipament de transbordare: Reach stackers pentru containere, Gantry cranes pentru volum mare, și Horizontal transshipment pentru semiremorci necranabile. Rețele feroviare: coridoarele TEN-T conectează principalele centre economice. Coridorul Orient/Est-Med traversează România. Gauge (ecartament): standard UIC de 1435mm în UE; atenție la frontiera cu Ucraina/Moldova (1520mm) care necesită transbordare sau boghiuri variabile.",

    section5Title: "Documentația Intermodală",
    section5Content: "Booking Note: rezervarea spațiului pe tren, include detalii despre unitatea de încărcare, greutate, și cerințe speciale. CIM Consignment Note: scrisoarea de trăsură feroviară, echivalentul CMR pentru feroviar, obligatorie pentru transportul pe căi ferate. Combined Transport Bill of Lading: pentru transporturi maritime + terestre combinate. Container Weight Certificate: obligatoriu pentru containere maritime, greutatea verificată VGM. Documentație vamală: T1 pentru mărfuri non-UE în tranzit, cu sigilii aplicate pe unitatea intermodală.",

    section6Title: "Operatorii Intermodali în Europa",
    section6Content: "Hupac: lider elvețian cu rețea densă în coridorul Alpin (CH-IT-DE), operează trenuri shuttle de înaltă frecvență. Kombiverkehr: operator german, puternic pe rutele DE-IT, DE-ES, oferă și servicii door-to-door. TX Logistik: parte din Mercitalia, operează coridorul Nord-Sud Italian. Rail Cargo Group (RCG): subsidiara ÖBB, puternică în Europa Centrală și de Est, inclusiv România. LKW Walter: combinație rutier-feroviar cu flotă proprie de semiremorci. DB Cargo/Schenker: rețeaua DB pentru intermodal la nivel pan-european. METRANS: operator ceh specializat pe containere maritime în CEE.",

    section7Title: "Planificarea Transportului Intermodal",
    section7Content: "Lead time extins: calculează 48-96h pentru intermodal vs. 24-48h rutier. Plecare pe orar fix: trenurile au schedule rigid - dacă ratezi cut-off-ul, aștepți următoarea plecare. Cut-off times: de obicei 4-6 ore înainte de plecare pentru livrarea containerului la terminal. Coordonare multiplă: implică transportator rutier pre-carriage, operator terminal, operator feroviar, și transportator rutier on-carriage. Tracking multi-segment: fiecare operator are propriul sistem - integrarea în TMS este esențială. Sezonalitate: cererea crește în Q4 (retail), vara (băuturi), și scade în perioada sărbătorilor (trenuri reduse).",

    section8Title: "Provocări și Soluții Operaționale",
    section8Content: "Flexibilitate redusă: nu poți devia un tren ca pe un camion. Soluție: planifică buffer time și menține capacitate rutieră de backup. Întârzieri în cascadă: un tren întârziat poate afecta conexiuni multiple. Soluție: tracking în timp real și comunicare proactivă cu clientul. Capacitate limitată în peak: trenurile se rezervă săptămâni în avans. Soluție: contracte anuale cu operatori pentru slot-uri garantate. Restricții de greutate/dimensiune: nu toate semiremorcile sunt cranabile sau respectă profilul feroviar. Soluție: folosește echipament compatibil sau alege Ro-La. Avarii la transbordare: risc de deteriorare la încărcare/descărcare. Soluție: verifică asigurarea operatorului și documentează starea la predare.",

    section9Title: "Integrarea în Translogica TMS",
    section9Content: "Modulul intermodal în Translogica permite: booking-uri directe către operatori (Hupac, Kombiverkehr via EDI), tracking unificat al segmentelor rutier+feroviar, calculare automată a costului total door-to-door, și gestionarea documentației multi-modale. Workflow tipic: creezi comanda în Dispoplan, selectezi ruta intermodală predefinită, sistemul generează automat segmentele (pre-carriage, main haul, on-carriage), și trimite booking-uri către toți operatorii. Alertele de tracking agregate arată poziția containerului indiferent de modul curent de transport.",

    section10Title: "Viitorul Transportului Intermodal",
    section10Content: "Trenuri de 740m: UE standardizează lungimea la 740m (vs. 600m actual), crescând capacitatea cu 25% fără infrastructură nouă. Digital Automatic Coupling (DAC): eliminarea cuplării manuale reduce timpul de formare trenuri. Coridoarele TEN-T: investiții de €30 miliarde până 2030 în infrastructura feroviară de marfă. ETS pentru transport rutier (2027): va face feroviarul și mai competitiv prin taxarea emisiilor rutiere. Trenuri autonome: teste în desfășurare pentru operare fără mecanic pe anumite segmente. Hydrogen locomotives: DB Cargo și alții testează locomotive cu hidrogen pentru linii neelectrificate. Obiectiv UE: 30% din marfa rutieră >300km să treacă pe feroviar/maritim până 2030.",

    tableTitle: "Comparație Moduri de Transport",
    tableHeaders: "Criteriu | Rutier | Feroviar | Maritim Short Sea",
    tableRows: "Cost/tonă-km | 0.08-0.12€ | 0.02-0.04€ | 0.01-0.03€ | Timp tranzit 1000km | 18-24h | 24-36h | 36-72h | Emisii CO2 | 62g/tkm | 18g/tkm | 16g/tkm | Flexibilitate | Foarte mare | Redusă | Redusă | Frecvență | La cerere | Zilnic/săptămânal | Zilnic/săptămânal | Capacitate unitate | 25t | 25t | 25t",

    caseStudyTitle: "Studiu de Caz: Migrare Rutier → Intermodal",
    caseStudyContent: "Un client din industria auto transporta săptămânal 40 FTL de la Sibiu la Stuttgart (1.300km), exclusiv rutier, la €1.800/transport = €72.000/săptămână. Am propus soluție intermodală: pre-carriage Sibiu→Curtici (200km rutier), tren Curtici→Ludwigshafen (naveta Rail Cargo), on-carriage Ludwigshafen→Stuttgart (100km rutier). Cost nou: €1.350/transport = €54.000/săptămână, economie de 25%. Timp de tranzit similar (48h vs 46h rutier), dar cu emisii CO2 reduse cu 65%. Implementare în 3 luni cu training pentru echipa operațională.",

    checklistTitle: "Checklist Pre-Booking Intermodal",
    checklistItems: "1. Unitatea de încărcare este compatibilă cu terminalul și trenul? | 2. Greutatea totală respectă limita (max 34t pentru container, 44t pentru swap body)? | 3. Am verificat schedule-ul și cut-off time pentru terminal? | 4. Există capacitate confirmată pe tren? | 5. Pre-carriage și on-carriage sunt aranjate? | 6. Documentația (booking note, CIM) este completă? | 7. Am informat clientul despre specificul intermodal (timing fix)? | 8. Plan B rutier identificat în caz de anulare tren?",

    operatorTableTitle: "Principalii Operatori Intermodali",
    operatorTableHeaders: "Operator | Specializare | Rute Principale | Contact TMS",
    operatorTableRows: "Hupac | Container/Swap Body | CH-IT-DE-NL-BE | EDI direct | Kombiverkehr | Semiremorci | DE-IT, DE-ES, DE-PL | Online booking | Rail Cargo Group | Full service CEE | AT-HU-RO-CZ-SK | EDI/API | TX Logistik | Corridor Nord-Sud | IT-DE-Scandinavia | Via agent | METRANS | Containere maritime | Hamburg-CEE | Online portal",

    bestPractice1: "Planifică cu minim 72h în avans - trenurile nu pot fi improvizate",
    bestPractice2: "Confirmă întotdeauna disponibilitatea slot-urilor la terminale înainte de a promite clientului",
    bestPractice3: "Menține relații cu transportatori rutieri de încredere pentru pre/on-carriage",
    bestPractice4: "Investește timp în înțelegerea schedule-urilor regulate - majoritatea operatorilor au trenuri fixe",
    bestPractice5: "Comunică proactiv despre specificul intermodal - clienții trebuie să înțeleagă diferențele",

    commonMistake1: "Subestimarea timpului de tranzit total (incluzi și transbordările, nu doar timpul pe tren)",
    commonMistake2: "Neglijarea cut-off times la terminale - ratezi trenul, aștepți încă 24-48h",
    commonMistake3: "Lipsa planului B rutier - dacă trenul e anulat, trebuie să ai alternativă",
    commonMistake4: "Neînțelegerea restricțiilor de greutate și profil pentru diferite tipuri de vagoane",
    commonMistake5: "Booking tardiv în peak season - capacitatea se epuizează cu săptămâni în avans",
  },
  de: {
    chapterTitle: "Intermodaler Transport",
    heroDescription: "Kombinationen aus Straße, Schiene und See für maximale Effizienz und CO2-Reduktion im europäischen Güterverkehr.",
    intro: "Intermodaler Transport ist die Zukunft nachhaltiger Logistik in Europa. Durch intelligente Kombination von Straßen-, Schienen- und Seetransport können Unternehmen die Kosten auf Langstrecken um 15-30% senken, CO2-Emissionen um bis zu 80% reduzieren und zusätzliche Kapazitäten in Spitzenzeiten erschließen. Dieses Kapitel vermittelt das notwendige Wissen für Planung, Durchführung und Optimierung intermodaler Transporte.",

    section1Title: "Was ist intermodaler Transport?",
    section1Content: "Intermodaler Transport bedeutet die Beförderung von Gütern mit mindestens zwei verschiedenen Verkehrsträgern, wobei dieselbe Ladeeinheit (Container, Wechselbrücke oder Sattelauflieger) beibehalten wird, ohne die Ware selbst umzuschlagen. Der Unterschied zum multimodalen Transport: Im intermodalen bleibt die Ladeeinheit intakt und wird als Ganzes vom Lkw auf den Zug und zurück transferiert. Dies eliminiert Beschädigungsrisiken beim Umschlag und reduziert die Umschlagszeiten dramatisch.",

    section2Title: "Arten des intermodalen Transports",
    section2Content: "Rail-Road (Straße-Schiene): Die häufigste Form in Kontinentaleuropa. Der Lkw übernimmt Vor-/Nachlauf (50-150km), der Zug den Hauptlauf (400-2000km). Short Sea Shipping (Straße-See): für kurze Seeüberquerungen - Ostsee, Nordsee, Mittelmeer. Ro-Ro-Fähren ermöglichen direktes Verladen von Sattelaufliegern. Deep Sea Intermodal: Kombination Hochsee-Container + Schiene/Straße für interkontinentalen Import/Export. Rollende Landstraße (Ro-La): kompletter Sattelzug (mit Zugmaschine) auf Spezialwagen - verwendet in Alpentunneln und restriktiven Korridoren.",

    section3Title: "Wirtschaftliche und ökologische Vorteile",
    section3Content: "Kosteneinsparungen bei Strecken >500km: Bahn kostet 0,02-0,04€/Tonnen-km vs. Lkw 0,08-0,12€/Tonnen-km. CO2-Emissionen 60-80% reduziert: Ein Zug ersetzt 35-50 Lkw mit 10x geringerem CO2-Fußabdruck pro Tonnen-km. Unabhängigkeit vom Fahrermangel: Der Straßensektor hat ein EU-weites Defizit von 400.000 Fahrern - die Schiene ist davon unabhängig. Zusatzkapazität in der Hochsaison: Wenn Lkw fehlen, können Züge die Volumen übernehmen. Zugang zu Zonen mit Beschränkungen: Euro 4/5-Lkw sind in vielen Städten verboten, Züge nicht.",

    section4Title: "Europäische intermodale Infrastruktur",
    section4Content: "Große Terminals: Duisburg (weltweit größter intermodaler Hub, 4M TEU/Jahr), Rotterdam, Hamburg, Antwerpen, Milano Segrate, Budapest BILK und Curtici (RO). Umschlagsausrüstung: Reach Stacker für Container, Portalkräne für großes Volumen, und Horizontalumschlag für nicht kranbare Auflieger. Schienennetzwerke: TEN-T-Korridore verbinden die wichtigsten Wirtschaftszentren. Der Orient/Östliches Mittelmeer-Korridor durchquert Rumänien. Spurweite: Standard UIC 1435mm in der EU; Achtung an der Grenze zur Ukraine/Moldau (1520mm), die Umschlag oder variable Drehgestelle erfordert.",

    section5Title: "Intermodale Dokumentation",
    section5Content: "Booking Note: Platzreservierung auf dem Zug mit Details zur Ladeeinheit, Gewicht und besonderen Anforderungen. CIM-Frachtbrief: der Eisenbahn-Frachtbrief, das Äquivalent zum CMR für die Bahn, obligatorisch für den Bahntransport. Kombiniertes Transportkonnossement: für kombinierte See- + Landtransporte. Container-Gewichtszertifikat: obligatorisch für Seecontainer, VGM-verifiziertes Gewicht. Zolldokumentation: T1 für Nicht-EU-Waren im Transit, mit Siegeln an der intermodalen Einheit.",

    section6Title: "Intermodale Operateure in Europa",
    section6Content: "Hupac: Schweizer Marktführer mit dichtem Netzwerk im Alpenkorridor (CH-IT-DE), betreibt hochfrequente Shuttle-Züge. Kombiverkehr: deutscher Betreiber, stark auf Routen DE-IT, DE-ES, bietet auch Door-to-Door-Services. TX Logistik: Teil von Mercitalia, betreibt den italienischen Nord-Süd-Korridor. Rail Cargo Group (RCG): ÖBB-Tochter, stark in Mittel- und Osteuropa, einschließlich Rumänien. LKW Walter: Straßen-Schiene-Kombination mit eigener Aufliegerflotte. DB Cargo/Schenker: das DB-Netzwerk für paneuropäischen Intermodal. METRANS: tschechischer Betreiber spezialisiert auf Seecontainer in CEE.",

    section7Title: "Planung des intermodalen Transports",
    section7Content: "Erweiterte Vorlaufzeit: Berechnen Sie 48-96h für intermodal vs. 24-48h Straße. Abfahrt nach festem Fahrplan: Züge haben starre Fahrpläne - wenn Sie den Cut-off verpassen, warten Sie auf die nächste Abfahrt. Cut-off-Zeiten: üblicherweise 4-6 Stunden vor Abfahrt für Containerlieferung zum Terminal. Mehrfache Koordination: umfasst Straßenspediteur Vorlauf, Terminalbetreiber, Bahnbetreiber und Straßenspediteur Nachlauf. Multi-Segment-Tracking: jeder Betreiber hat sein eigenes System - TMS-Integration ist essentiell. Saisonalität: Nachfrage steigt in Q4 (Einzelhandel), Sommer (Getränke) und sinkt in Ferienzeiten (weniger Züge).",

    section8Title: "Herausforderungen und operative Lösungen",
    section8Content: "Reduzierte Flexibilität: Sie können einen Zug nicht wie einen Lkw umleiten. Lösung: Pufferzeit einplanen und Straßen-Backup-Kapazität vorhalten. Kaskadenverzögerungen: ein verspäteter Zug kann mehrere Anschlüsse beeinträchtigen. Lösung: Echtzeit-Tracking und proaktive Kundenkommunikation. Begrenzte Kapazität in der Hochsaison: Züge werden Wochen im Voraus gebucht. Lösung: Jahresverträge mit Betreibern für garantierte Slots. Gewichts-/Größenbeschränkungen: nicht alle Auflieger sind kranbar oder entsprechen dem Bahnprofil. Lösung: kompatible Ausrüstung verwenden oder Ro-La wählen. Schäden beim Umschlag: Beschädigungsrisiko beim Laden/Entladen. Lösung: Versicherung des Betreibers prüfen und Zustand bei Übergabe dokumentieren.",

    section9Title: "Integration in Translogica TMS",
    section9Content: "Das Intermodalmodul in Translogica ermöglicht: Direktbuchungen bei Operateuren (Hupac, Kombiverkehr via EDI), einheitliches Tracking von Straßen- + Schienensegmenten, automatische Door-to-Door-Gesamtkostenberechnung und Multi-Modal-Dokumentenmanagement. Typischer Workflow: Sie erstellen den Auftrag in Dispoplan, wählen die vordefinierte intermodale Route, das System generiert automatisch die Segmente (Vorlauf, Hauptlauf, Nachlauf) und sendet Buchungen an alle Betreiber. Aggregierte Tracking-Alerts zeigen die Containerposition unabhängig vom aktuellen Transportmodus.",

    section10Title: "Zukunft des intermodalen Transports",
    section10Content: "740m-Züge: Die EU standardisiert die Länge auf 740m (vs. aktuell 600m) und erhöht die Kapazität um 25% ohne neue Infrastruktur. Digital Automatic Coupling (DAC): Eliminierung der manuellen Kupplung reduziert die Zugbildungszeit. TEN-T-Korridore: 30 Milliarden € Investitionen bis 2030 in die Schienengüterverkehrsinfrastruktur. ETS für Straßentransport (2027): macht die Schiene durch Bepreisung von Straßenemissionen noch wettbewerbsfähiger. Autonome Züge: Tests laufen für Betrieb ohne Lokführer auf bestimmten Strecken. Wasserstofflokomotiven: DB Cargo und andere testen Wasserstoffloks für nicht elektrifizierte Strecken. EU-Ziel: 30% des Straßengüterverkehrs >300km soll bis 2030 auf Schiene/See verlagert werden.",

    tableTitle: "Verkehrsträgervergleich",
    tableHeaders: "Kriterium | Straße | Schiene | Short Sea",
    tableRows: "Kosten/Tonnen-km | 0,08-0,12€ | 0,02-0,04€ | 0,01-0,03€ | Transitzeit 1000km | 18-24h | 24-36h | 36-72h | CO2-Emissionen | 62g/tkm | 18g/tkm | 16g/tkm | Flexibilität | Sehr hoch | Gering | Gering | Frequenz | Auf Abruf | Täglich/wöchentlich | Täglich/wöchentlich | Kapazität Einheit | 25t | 25t | 25t",

    caseStudyTitle: "Fallstudie: Migration Straße → Intermodal",
    caseStudyContent: "Ein Automobilkunde transportierte wöchentlich 40 FTL von Sibiu nach Stuttgart (1.300km), ausschließlich per Straße, zu €1.800/Transport = €72.000/Woche. Wir schlugen eine intermodale Lösung vor: Vorlauf Sibiu→Curtici (200km Straße), Zug Curtici→Ludwigshafen (Rail Cargo Shuttle), Nachlauf Ludwigshafen→Stuttgart (100km Straße). Neue Kosten: €1.350/Transport = €54.000/Woche, 25% Einsparung. Ähnliche Transitzeit (48h vs 46h Straße), aber mit 65% reduzierten CO2-Emissionen. Implementierung in 3 Monaten mit Training für das operative Team.",

    checklistTitle: "Intermodal Pre-Booking Checkliste",
    checklistItems: "1. Ist die Ladeeinheit mit Terminal und Zug kompatibel? | 2. Entspricht das Gesamtgewicht dem Limit (max 34t für Container, 44t für Wechselbrücke)? | 3. Habe ich Fahrplan und Cut-off-Zeit für Terminal geprüft? | 4. Ist Kapazität auf dem Zug bestätigt? | 5. Sind Vor- und Nachlauf arrangiert? | 6. Ist die Dokumentation (Booking Note, CIM) vollständig? | 7. Habe ich den Kunden über intermodale Besonderheiten (festes Timing) informiert? | 8. Straßen-Plan B identifiziert bei Zugausfall?",

    operatorTableTitle: "Wichtigste intermodale Operateure",
    operatorTableHeaders: "Operateur | Spezialisierung | Hauptrouten | TMS-Kontakt",
    operatorTableRows: "Hupac | Container/Wechselbrücke | CH-IT-DE-NL-BE | EDI direkt | Kombiverkehr | Auflieger | DE-IT, DE-ES, DE-PL | Online-Buchung | Rail Cargo Group | Full Service CEE | AT-HU-RO-CZ-SK | EDI/API | TX Logistik | Korridor Nord-Süd | IT-DE-Skandinavien | Via Agent | METRANS | Seecontainer | Hamburg-CEE | Online-Portal",

    bestPractice1: "Mindestens 72h im Voraus planen - Züge können nicht improvisiert werden",
    bestPractice2: "Terminal-Slot-Verfügbarkeit immer bestätigen bevor Sie dem Kunden zusagen",
    bestPractice3: "Beziehungen zu zuverlässigen Straßenspeditionen für Vor-/Nachlauf pflegen",
    bestPractice4: "Zeit in das Verständnis regelmäßiger Fahrpläne investieren - die meisten Betreiber haben feste Züge",
    bestPractice5: "Proaktiv über intermodale Besonderheiten kommunizieren - Kunden müssen die Unterschiede verstehen",

    commonMistake1: "Unterschätzung der Gesamttransitzeit (Umschläge einbeziehen, nicht nur Zugzeit)",
    commonMistake2: "Vernachlässigung der Cut-off-Zeiten an Terminals - Zug verpasst, weitere 24-48h warten",
    commonMistake3: "Fehlender Straßen-Plan B - wenn der Zug ausfällt, brauchen Sie eine Alternative",
    commonMistake4: "Unverständnis der Gewichts- und Profilbeschränkungen für verschiedene Wagentypen",
    commonMistake5: "Späte Buchung in der Hochsaison - Kapazität ist Wochen im Voraus erschöpft",
  },
  en: {
    chapterTitle: "Intermodal Transport",
    heroDescription: "Road-rail-sea combinations for maximum efficiency and carbon footprint reduction in European freight transport.",
    intro: "Intermodal transport represents the future of sustainable logistics in Europe. Through intelligent combination of road, rail, and sea transport, companies can reduce costs on long distances by 15-30%, CO2 emissions by up to 80%, and access additional capacity during peak periods. This chapter provides the knowledge needed to plan, execute, and optimize intermodal transports.",

    section1Title: "What is Intermodal Transport?",
    section1Content: "Intermodal transport means moving freight using at least two different transport modes while keeping the same loading unit (container, swap body, or semi-trailer) without physically handling the goods. The difference from multimodal transport: in intermodal, the loading unit remains intact, being transferred as a whole from truck to train and back. This eliminates damage risk during handling and dramatically reduces transshipment times.",

    section2Title: "Types of Intermodal Transport",
    section2Content: "Rail-Road: The most common form in continental Europe. The truck handles first/last mile (50-150km), the train carries the main haul (400-2000km). Short Sea Shipping (road-sea): used for short sea crossings - Baltic, North Sea, Mediterranean. Ro-Ro ferries allow direct loading of semi-trailers. Deep Sea Intermodal: combination of oceanic container + rail/road for intercontinental import/export. Rolling Highway (Ro-La): complete semi-trailer (with tractor) loaded on special wagon - used in Alpine tunnels and restrictive corridors.",

    section3Title: "Economic and Environmental Benefits",
    section3Content: "Cost savings on distances >500km: rail costs €0.02-0.04/tonne-km vs. truck €0.08-0.12/tonne-km. CO2 emissions reduced by 60-80%: one train replaces 35-50 trucks, with 10x smaller carbon footprint per tonne-km. Independence from driver shortage: the road sector has a 400,000 driver deficit in the EU - rail doesn't depend on this factor. Additional capacity in peak season: when trucks are scarce, trains can take over volumes. Access to restricted zones: Euro 4/5 trucks are banned in many cities, trains are not.",

    section4Title: "European Intermodal Infrastructure",
    section4Content: "Major terminals: Duisburg (world's largest intermodal hub, 4M TEU/year), Rotterdam, Hamburg, Antwerp, Milano Segrate, Budapest BILK, and Curtici (RO). Transshipment equipment: Reach stackers for containers, Gantry cranes for high volume, and Horizontal transshipment for non-cranable semi-trailers. Rail networks: TEN-T corridors connect main economic centers. The Orient/East-Med corridor crosses Romania. Gauge: standard UIC 1435mm in EU; attention at Ukraine/Moldova border (1520mm) which requires transshipment or variable bogies.",

    section5Title: "Intermodal Documentation",
    section5Content: "Booking Note: space reservation on train with details about loading unit, weight, and special requirements. CIM Consignment Note: the rail consignment note, the CMR equivalent for rail, mandatory for rail transport. Combined Transport Bill of Lading: for combined sea + land transports. Container Weight Certificate: mandatory for sea containers, VGM verified weight. Customs documentation: T1 for non-EU goods in transit, with seals applied on the intermodal unit.",

    section6Title: "Intermodal Operators in Europe",
    section6Content: "Hupac: Swiss leader with dense network in the Alpine corridor (CH-IT-DE), operates high-frequency shuttle trains. Kombiverkehr: German operator, strong on DE-IT, DE-ES routes, also offers door-to-door services. TX Logistik: part of Mercitalia, operates the Italian North-South corridor. Rail Cargo Group (RCG): ÖBB subsidiary, strong in Central and Eastern Europe, including Romania. LKW Walter: road-rail combination with own semi-trailer fleet. DB Cargo/Schenker: the DB network for pan-European intermodal. METRANS: Czech operator specialized in sea containers in CEE.",

    section7Title: "Planning Intermodal Transport",
    section7Content: "Extended lead time: calculate 48-96h for intermodal vs. 24-48h road. Fixed schedule departure: trains have rigid schedules - if you miss the cut-off, you wait for the next departure. Cut-off times: usually 4-6 hours before departure for container delivery to terminal. Multiple coordination: involves pre-carriage road carrier, terminal operator, rail operator, and on-carriage road carrier. Multi-segment tracking: each operator has their own system - TMS integration is essential. Seasonality: demand rises in Q4 (retail), summer (beverages), and falls during holidays (reduced trains).",

    section8Title: "Challenges and Operational Solutions",
    section8Content: "Reduced flexibility: you can't divert a train like a truck. Solution: plan buffer time and maintain road backup capacity. Cascade delays: one delayed train can affect multiple connections. Solution: real-time tracking and proactive customer communication. Limited peak capacity: trains are booked weeks in advance. Solution: annual contracts with operators for guaranteed slots. Weight/size restrictions: not all semi-trailers are cranable or respect the rail profile. Solution: use compatible equipment or choose Ro-La. Transshipment damage: risk of damage during loading/unloading. Solution: verify operator insurance and document condition at handover.",

    section9Title: "Integration in Translogica TMS",
    section9Content: "The intermodal module in Translogica enables: direct bookings with operators (Hupac, Kombiverkehr via EDI), unified tracking of road + rail segments, automatic door-to-door total cost calculation, and multi-modal documentation management. Typical workflow: you create the order in Dispoplan, select the predefined intermodal route, the system automatically generates segments (pre-carriage, main haul, on-carriage), and sends bookings to all operators. Aggregated tracking alerts show container position regardless of current transport mode.",

    section10Title: "Future of Intermodal Transport",
    section10Content: "740m trains: The EU is standardizing length to 740m (vs. current 600m), increasing capacity by 25% without new infrastructure. Digital Automatic Coupling (DAC): eliminating manual coupling reduces train formation time. TEN-T corridors: €30 billion investment by 2030 in rail freight infrastructure. ETS for road transport (2027): will make rail even more competitive by pricing road emissions. Autonomous trains: tests ongoing for operation without driver on certain segments. Hydrogen locomotives: DB Cargo and others testing hydrogen locomotives for non-electrified lines. EU target: 30% of road freight >300km to shift to rail/sea by 2030.",

    tableTitle: "Transport Mode Comparison",
    tableHeaders: "Criterion | Road | Rail | Short Sea",
    tableRows: "Cost/tonne-km | €0.08-0.12 | €0.02-0.04 | €0.01-0.03 | Transit time 1000km | 18-24h | 24-36h | 36-72h | CO2 emissions | 62g/tkm | 18g/tkm | 16g/tkm | Flexibility | Very high | Low | Low | Frequency | On demand | Daily/weekly | Daily/weekly | Unit capacity | 25t | 25t | 25t",

    caseStudyTitle: "Case Study: Road → Intermodal Migration",
    caseStudyContent: "An automotive client transported 40 FTL weekly from Sibiu to Stuttgart (1,300km), exclusively by road, at €1,800/transport = €72,000/week. We proposed an intermodal solution: pre-carriage Sibiu→Curtici (200km road), train Curtici→Ludwigshafen (Rail Cargo shuttle), on-carriage Ludwigshafen→Stuttgart (100km road). New cost: €1,350/transport = €54,000/week, 25% savings. Similar transit time (48h vs 46h road), but with 65% reduced CO2 emissions. Implementation in 3 months with training for the operational team.",

    checklistTitle: "Intermodal Pre-Booking Checklist",
    checklistItems: "1. Is the loading unit compatible with terminal and train? | 2. Does total weight respect limit (max 34t for container, 44t for swap body)? | 3. Have I verified schedule and cut-off time for terminal? | 4. Is capacity confirmed on train? | 5. Are pre-carriage and on-carriage arranged? | 6. Is documentation (booking note, CIM) complete? | 7. Have I informed customer about intermodal specifics (fixed timing)? | 8. Road plan B identified in case of train cancellation?",

    operatorTableTitle: "Main Intermodal Operators",
    operatorTableHeaders: "Operator | Specialization | Main Routes | TMS Contact",
    operatorTableRows: "Hupac | Container/Swap Body | CH-IT-DE-NL-BE | EDI direct | Kombiverkehr | Semi-trailers | DE-IT, DE-ES, DE-PL | Online booking | Rail Cargo Group | Full service CEE | AT-HU-RO-CZ-SK | EDI/API | TX Logistik | Corridor North-South | IT-DE-Scandinavia | Via agent | METRANS | Sea containers | Hamburg-CEE | Online portal",

    bestPractice1: "Plan at least 72h in advance - trains cannot be improvised",
    bestPractice2: "Always confirm terminal slot availability before promising the customer",
    bestPractice3: "Maintain relationships with reliable road carriers for pre/on-carriage",
    bestPractice4: "Invest time in understanding regular schedules - most operators have fixed trains",
    bestPractice5: "Proactively communicate about intermodal specifics - customers need to understand the differences",

    commonMistake1: "Underestimating total transit time (include transshipments, not just train time)",
    commonMistake2: "Neglecting cut-off times at terminals - miss the train, wait another 24-48h",
    commonMistake3: "Lack of road plan B - if the train is cancelled, you need an alternative",
    commonMistake4: "Not understanding weight and profile restrictions for different wagon types",
    commonMistake5: "Late booking in peak season - capacity is exhausted weeks in advance",
  },
};
