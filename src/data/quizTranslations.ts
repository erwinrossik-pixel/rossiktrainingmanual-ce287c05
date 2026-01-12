import { Language } from "@/contexts/LanguageContext";

export interface TranslatedQuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const quizTranslations: Record<string, TranslatedQuizQuestion[]> = {
  intro: [
    {
      question: {
        ro: "Ce reprezintă manualul ROSSIK TRANSPORT & LOGISTIC?",
        en: "What does the ROSSIK TRANSPORT & LOGISTIC manual represent?",
        de: "Was stellt das ROSSIK TRANSPORT & LOGISTIC Handbuch dar?"
      },
      options: {
        ro: ["Un catalog de prețuri", "O resursă educațională completă pentru expediția de mărfuri", "Un raport financiar", "O listă de clienți"],
        en: ["A price catalog", "A comprehensive educational resource for freight forwarding", "A financial report", "A customer list"],
        de: ["Ein Preiskatalog", "Eine umfassende Bildungsressource für Spedition", "Ein Finanzbericht", "Eine Kundenliste"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Manualul ROSSIK este o resursă educațională completă care acoperă toate aspectele expediției de mărfuri rutiere.",
        en: "The ROSSIK manual is a comprehensive educational resource covering all aspects of road freight forwarding.",
        de: "Das ROSSIK-Handbuch ist eine umfassende Bildungsressource, die alle Aspekte der Straßenspedition abdeckt."
      }
    },
    {
      question: {
        ro: "Care este scopul principal al expediției de mărfuri (freight forwarding)?",
        en: "What is the main purpose of freight forwarding?",
        de: "Was ist der Hauptzweck der Spedition?"
      },
      options: {
        ro: ["Doar încărcarea camioanelor", "Coordonarea și organizarea transportului de mărfuri între expeditor și destinatar", "Vânzarea de vehicule", "Închirierea de depozite"],
        en: ["Only loading trucks", "Coordinating and organizing cargo transport between shipper and consignee", "Selling vehicles", "Renting warehouses"],
        de: ["Nur LKW beladen", "Koordinierung und Organisation des Gütertransports zwischen Versender und Empfänger", "Fahrzeuge verkaufen", "Lagerhäuser vermieten"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Expediția de mărfuri implică coordonarea întregului lanț logistic - de la ridicare până la livrare.",
        en: "Freight forwarding involves coordinating the entire logistics chain - from pickup to delivery.",
        de: "Spedition umfasst die Koordination der gesamten Logistikkette - von der Abholung bis zur Lieferung."
      }
    },
    {
      question: {
        ro: "Ce rol joacă expeditorul de mărfuri în lanțul logistic?",
        en: "What role does the freight forwarder play in the supply chain?",
        de: "Welche Rolle spielt der Spediteur in der Lieferkette?"
      },
      options: {
        ro: ["Doar șofer", "Intermediar și coordonator între client și transportator", "Doar contabil", "Doar agent de vânzări"],
        en: ["Only driver", "Intermediary and coordinator between client and carrier", "Only accountant", "Only sales agent"],
        de: ["Nur Fahrer", "Vermittler und Koordinator zwischen Kunde und Frachtführer", "Nur Buchhalter", "Nur Verkaufsvertreter"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Expeditorul acționează ca intermediar, coordonând toate aspectele transportului și comunicând cu toate părțile implicate.",
        en: "The forwarder acts as an intermediary, coordinating all aspects of transport and communicating with all parties involved.",
        de: "Der Spediteur fungiert als Vermittler, koordiniert alle Aspekte des Transports und kommuniziert mit allen Beteiligten."
      }
    },
    {
      question: {
        ro: "Care sunt principalele tipuri de transport rutier de mărfuri în Europa?",
        en: "What are the main types of road freight transport in Europe?",
        de: "Welche sind die wichtigsten Arten des Straßengüterverkehrs in Europa?"
      },
      options: {
        ro: ["Doar local", "FTL (încărcătură completă), LTL (încărcătură parțială), grupaj", "Doar aerian", "Doar maritim"],
        en: ["Only local", "FTL (Full Truck Load), LTL (Less Than Truckload), groupage", "Only air", "Only sea"],
        de: ["Nur lokal", "FTL (Komplettladung), LTL (Teilladung), Sammelgut", "Nur Luft", "Nur See"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Transportul rutier european include FTL, LTL și grupaj, fiecare cu caracteristici și aplicații specifice.",
        en: "European road transport includes FTL, LTL and groupage, each with specific characteristics and applications.",
        de: "Der europäische Straßentransport umfasst FTL, LTL und Sammelgut, jeweils mit spezifischen Eigenschaften und Anwendungen."
      }
    },
    {
      question: {
        ro: "De ce este importantă industria expediției de mărfuri?",
        en: "Why is the freight forwarding industry important?",
        de: "Warum ist die Speditionsbranche wichtig?"
      },
      options: {
        ro: ["Nu este importantă", "Facilitează comerțul internațional și aprovizionarea lanțurilor de producție", "Doar pentru taxe", "Doar pentru statistici"],
        en: ["It's not important", "Facilitates international trade and supply chain provisioning", "Only for taxes", "Only for statistics"],
        de: ["Sie ist nicht wichtig", "Erleichtert den internationalen Handel und die Lieferkettenversorgung", "Nur für Steuern", "Nur für Statistiken"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Expediția de mărfuri este esențială pentru economia globală, permițând schimbul de bunuri între țări și continente.",
        en: "Freight forwarding is essential for the global economy, enabling the exchange of goods between countries and continents.",
        de: "Spedition ist für die Weltwirtschaft unerlässlich und ermöglicht den Warenaustausch zwischen Ländern und Kontinenten."
      }
    }
  ],
  mindset: [
    {
      question: {
        ro: "Care este modelul 4W utilizat în comunicarea expediției de mărfuri?",
        en: "What is the 4W model used for in freight forwarding communication?",
        de: "Wofür wird das 4W-Modell in der Speditionskommunikation verwendet?"
      },
      options: {
        ro: ["Vreme, Greutate, Lățime, Garanție", "Cine, Ce, Când, Unde", "Muncă, Așteptare, Observare, Scriere", "Depozit, Scrisoare, Greutate, Garanție"],
        en: ["Weather, Weight, Width, Warranty", "Who, What, When, Where", "Work, Wait, Watch, Write", "Warehouse, Waybill, Weight, Warranty"],
        de: ["Wetter, Gewicht, Breite, Garantie", "Wer, Was, Wann, Wo", "Arbeit, Warten, Beobachten, Schreiben", "Lager, Frachtbrief, Gewicht, Garantie"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Modelul 4W (Cine, Ce, Când, Unde) asigură comunicare clară și completă în fiecare interacțiune.",
        en: "The 4W model (Who, What, When, Where) ensures clear, complete communication in every interaction.",
        de: "Das 4W-Modell (Wer, Was, Wann, Wo) gewährleistet klare, vollständige Kommunikation bei jeder Interaktion."
      }
    },
    {
      question: {
        ro: "De ce este documentația considerată protecție în expediția de mărfuri?",
        en: "Why is documentation considered protection in freight forwarding?",
        de: "Warum gilt Dokumentation als Schutz in der Spedition?"
      },
      options: {
        ro: ["Protejează marfa de daune", "Oferă trasabilitate și dovezi legale", "Protejează șoferul de vreme", "Nu este importantă"],
        en: ["It protects the cargo from damage", "It provides audit trail and legal evidence", "It protects the driver from weather", "It is not important"],
        de: ["Sie schützt die Fracht vor Schäden", "Sie bietet Audit-Trail und rechtliche Beweise", "Sie schützt den Fahrer vor Wetter", "Sie ist nicht wichtig"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Documentația creează o înregistrare auditabilă a tuturor activităților. Dacă nu este documentat, nu s-a întâmplat - mai ales important pentru dispute și daune.",
        en: "Documentation creates an auditable record of all activities. If it is not documented, it did not happen - especially important for disputes and insurance claims.",
        de: "Dokumentation erstellt eine prüfbare Aufzeichnung aller Aktivitäten. Wenn es nicht dokumentiert ist, ist es nicht passiert - besonders wichtig für Streitigkeiten und Versicherungsansprüche."
      }
    },
    {
      question: {
        ro: "Cum ar trebui să tratați șoferii conform celor mai bune practici?",
        en: "How should you treat drivers according to best practices?",
        de: "Wie sollten Sie Fahrer gemäß den Best Practices behandeln?"
      },
      options: {
        ro: ["Doar ca angajați", "Ca parteneri cu respect", "Păstrați contact minim", "Dați ordine fără explicații"],
        en: ["As employees only", "As partners with respect", "Keep minimal contact", "Give orders without explanation"],
        de: ["Nur als Angestellte", "Als Partner mit Respekt", "Minimalen Kontakt halten", "Befehle ohne Erklärung geben"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Tratarea șoferilor ca parteneri cu respect îmbunătățește direct punctualitatea și cooperarea.",
        en: "Treating drivers as partners with respect directly improves punctuality and cooperation.",
        de: "Die respektvolle Behandlung von Fahrern als Partner verbessert direkt Pünktlichkeit und Zusammenarbeit."
      }
    },
    {
      question: {
        ro: "Care este cea mai importantă calitate a unui expeditor de mărfuri?",
        en: "What is the most important quality of a freight forwarder?",
        de: "Was ist die wichtigste Eigenschaft eines Spediteurs?"
      },
      options: {
        ro: ["Găsirea celor mai ieftine tarife", "Fiabilitate și capacitate de rezolvare a problemelor", "Vorbirea multor limbi", "Cel mai mare număr de transportatori"],
        en: ["Finding the cheapest rates", "Reliability and problem-solving ability", "Speaking many languages", "Having the most carriers"],
        de: ["Die günstigsten Preise finden", "Zuverlässigkeit und Problemlösungsfähigkeit", "Viele Sprachen sprechen", "Die meisten Frachtführer haben"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Fiabilitatea și rezolvarea problemelor sunt esențiale - clienții depind de tine pentru livrări consecvente și gestionarea profesională a problemelor.",
        en: "Reliability and problem-solving are core - clients depend on you to deliver consistently and handle issues professionally.",
        de: "Zuverlässigkeit und Problemlösung sind zentral - Kunden verlassen sich auf konsistente Lieferungen und professionelle Problembehandlung."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să faci când greșești?",
        en: "What should you do when you make a mistake?",
        de: "Was sollten Sie tun, wenn Sie einen Fehler machen?"
      },
      options: {
        ro: ["Ascunde-o de client", "Asumă-ți-o imediat și concentrează-te pe soluții", "Dă vina pe transportator", "Așteaptă să vezi dacă observă cineva"],
        en: ["Hide it from the client", "Own it immediately and focus on solutions", "Blame the carrier", "Wait to see if anyone notices"],
        de: ["Vor dem Kunden verbergen", "Sofort eingestehen und auf Lösungen konzentrieren", "Dem Frachtführer die Schuld geben", "Abwarten, ob es jemand bemerkt"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Asumă-ți greșelile rapid și transparent. Clienții respectă onestitatea și focusul pe soluții mai mult decât scuzele.",
        en: "Own mistakes quickly and transparently. Clients respect honesty and solution-focus more than excuses.",
        de: "Fehler schnell und transparent eingestehen. Kunden respektieren Ehrlichkeit und Lösungsorientierung mehr als Ausreden."
      }
    },
    {
      question: {
        ro: "Ce este comunicarea proactivă în expediția de mărfuri?",
        en: "What is proactive communication in freight forwarding?",
        de: "Was ist proaktive Kommunikation in der Spedition?"
      },
      options: {
        ro: ["Răspunsul doar când ești întrebat", "Informarea părților interesate înainte să trebuiască să te caute", "Trimiterea multor emailuri de marketing", "Apeluri zilnice de vânzări"],
        en: ["Only responding when asked", "Informing stakeholders before they need to chase you", "Sending many marketing emails", "Daily sales calls"],
        de: ["Nur auf Anfrage antworten", "Stakeholder informieren, bevor sie nachfragen müssen", "Viele Marketing-E-Mails senden", "Tägliche Verkaufsanrufe"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Comunicarea proactivă înseamnă furnizarea de actualizări înainte ca clienții să trebuiască să întrebe - construiește încredere și reduce stresul lor.",
        en: "Proactive communication means providing updates before clients need to ask - it builds trust and reduces their stress.",
        de: "Proaktive Kommunikation bedeutet, Updates zu liefern, bevor Kunden fragen müssen - es baut Vertrauen auf und reduziert deren Stress."
      }
    }
  ],
  workflow: [
    {
      question: {
        ro: "Care este ordinea corectă de prioritate pentru găsirea capacității de transport?",
        en: "What is the correct priority order for capacity sourcing?",
        de: "Was ist die richtige Prioritätsreihenfolge für die Kapazitätsbeschaffung?"
      },
      options: {
        ro: ["Piața spot - Transportatori preferați - Flotă proprie", "Flotă proprie - Transportatori preferați - Piața spot", "Transportatori preferați - Flotă proprie - Piața spot", "Selecție aleatorie"],
        en: ["Spot market - Preferred carriers - Own fleet", "Own fleet - Preferred carriers - Spot market", "Preferred carriers - Own fleet - Spot market", "Random selection"],
        de: ["Spotmarkt - Bevorzugte Frachtführer - Eigene Flotte", "Eigene Flotte - Bevorzugte Frachtführer - Spotmarkt", "Bevorzugte Frachtführer - Eigene Flotte - Spotmarkt", "Zufällige Auswahl"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Prioritizați întotdeauna: 1) Flotă proprie, 2) Transportatori preferați, 3) Piața spot (TIMOCOM/Trans.eu/Teleroute).",
        en: "Always prioritize: 1) Own fleet, 2) Preferred carriers, 3) Spot market (TIMOCOM/Trans.eu/Teleroute).",
        de: "Immer priorisieren: 1) Eigene Flotte, 2) Bevorzugte Frachtführer, 3) Spotmarkt (TIMOCOM/Trans.eu/Teleroute)."
      }
    },
    {
      question: {
        ro: "Care este tariful de bază tipic utilizat pentru calculul costurilor?",
        en: "What is the base rate typically used for cost calculation?",
        de: "Was ist der typische Basistarif für die Kostenberechnung?"
      },
      options: {
        ro: ["0.80 EUR/km", "1.10 EUR/km", "1.50 EUR/km", "2.00 EUR/km"],
        en: ["0.80 EUR/km", "1.10 EUR/km", "1.50 EUR/km", "2.00 EUR/km"],
        de: ["0.80 EUR/km", "1.10 EUR/km", "1.50 EUR/km", "2.00 EUR/km"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Tariful de bază standard pentru transportul rutier UE este aproximativ 1.10 EUR/km, înainte de adăugarea taxelor și accesoriilor.",
        en: "The standard base rate for EU road freight is approximately 1.10 EUR/km, before adding tolls and accessorials.",
        de: "Der Standard-Basistarif für EU-Straßengüterverkehr beträgt ca. 1.10 EUR/km, vor Maut und Nebenkosten."
      }
    },
    {
      question: {
        ro: "Ce trebuie să colectați după finalizarea livrării?",
        en: "What should you collect after delivery completion?",
        de: "Was sollten Sie nach Lieferabschluss sammeln?"
      },
      options: {
        ro: ["Doar factura", "CMR/POD semnat", "Doar un email de mulțumire", "Nimic nu este necesar"],
        en: ["Only the invoice", "Signed CMR/POD", "Just a thank you email", "Nothing is required"],
        de: ["Nur die Rechnung", "Unterschriebener CMR/POD", "Nur eine Dankes-E-Mail", "Nichts erforderlich"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Colectați întotdeauna CMR/POD (Dovada Livrării) semnat, scanați sau încărcați prin TMS pentru documentare.",
        en: "Always collect a signed CMR/POD (Proof of Delivery), scan or upload via TMS for documentation.",
        de: "Sammeln Sie immer einen unterschriebenen CMR/POD (Liefernachweis), scannen oder laden Sie ihn via TMS zur Dokumentation hoch."
      }
    },
    {
      question: {
        ro: "Care este primul pas când primiți o nouă comandă de transport?",
        en: "What is the first step when receiving a new transport order?",
        de: "Was ist der erste Schritt bei Erhalt eines neuen Transportauftrags?"
      },
      options: {
        ro: ["Rezervați cel mai ieftin transportator imediat", "Validați toate detaliile comenzii (adrese, date, marfă, cerințe)", "Trimiteți factura", "Începeți încărcarea"],
        en: ["Book the cheapest carrier immediately", "Validate all order details (addresses, dates, cargo, requirements)", "Send invoice", "Start loading"],
        de: ["Sofort den günstigsten Frachtführer buchen", "Alle Auftragsdetails validieren (Adressen, Termine, Fracht, Anforderungen)", "Rechnung senden", "Beladung beginnen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Validați întotdeauna mai întâi detaliile comenzii - adrese de ridicare/livrare, date, specificații marfă și cerințe speciale.",
        en: "Always validate order details first - pickup/delivery addresses, dates, cargo specifics, and special requirements.",
        de: "Validieren Sie immer zuerst die Auftragsdetails - Abhol-/Lieferadressen, Termine, Frachtspezifikationen und Sonderanforderungen."
      }
    },
    {
      question: {
        ro: "Cât de des ar trebui să actualizați trackingul în timpul transportului?",
        en: "How often should you update tracking during transport?",
        de: "Wie oft sollten Sie das Tracking während des Transports aktualisieren?"
      },
      options: {
        ro: ["Doar la final", "La fiecare etapă cheie (ridicare, tranzit, livrare)", "O dată pe săptămână", "Doar când clientul întreabă"],
        en: ["Only at the end", "At each key milestone (pickup, transit, delivery)", "Once a week", "Only when client asks"],
        de: ["Nur am Ende", "Bei jedem wichtigen Meilenstein (Abholung, Transit, Lieferung)", "Einmal pro Woche", "Nur wenn der Kunde fragt"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Actualizați statusul la fiecare etapă: confirmare ridicare, în tranzit, la destinație, livrat.",
        en: "Update status at each milestone: pickup confirmed, in transit, at destination, delivered.",
        de: "Aktualisieren Sie den Status bei jedem Meilenstein: Abholung bestätigt, im Transit, am Zielort, geliefert."
      }
    }
  ],
  vehicle: [
    {
      question: {
        ro: "Care este capacitatea de încărcare tipică a unui camion standard (megatrailer)?",
        en: "What is the typical loading capacity of a standard truck (megatrailer)?",
        de: "Was ist die typische Ladekapazität eines Standard-LKW (Megatrailer)?"
      },
      options: {
        ro: ["15-18 tone", "24-25 tone", "30-35 tone", "40-45 tone"],
        en: ["15-18 tons", "24-25 tons", "30-35 tons", "40-45 tons"],
        de: ["15-18 Tonnen", "24-25 Tonnen", "30-35 Tonnen", "40-45 Tonnen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Un megatrailer standard poate transporta 24-25 tone de marfă, cu o greutate totală maximă de 40 tone pentru ansamblul camion-remorcă.",
        en: "A standard megatrailer can carry 24-25 tons of cargo, with a maximum total weight of 40 tons for the truck-trailer combination.",
        de: "Ein Standard-Megatrailer kann 24-25 Tonnen Fracht transportieren, mit einem maximalen Gesamtgewicht von 40 Tonnen für die LKW-Anhänger-Kombination."
      }
    },
    {
      question: {
        ro: "Ce înseamnă dimensiunea 13.6m LDM?",
        en: "What does the dimension 13.6m LDM mean?",
        de: "Was bedeutet die Dimension 13.6m LDM?"
      },
      options: {
        ro: ["Înălțimea trailerului", "Metri de încărcare liniari disponibili", "Lungimea tractorului", "Capacitatea maximă de greutate"],
        en: ["Trailer height", "Linear loading meters available", "Tractor length", "Maximum weight capacity"],
        de: ["Anhängerhöhe", "Verfügbare Lademeter", "Zugmaschinenlänge", "Maximale Gewichtskapazität"]
      },
      correctIndex: 1,
      explanation: {
        ro: "LDM înseamnă metri de încărcare liniari - spațiul disponibil pe podea în lungime pentru încărcarea mărfurilor.",
        en: "LDM means Linear Loading Meters - the available floor space in length for loading cargo.",
        de: "LDM bedeutet Lademeter - der verfügbare Bodenraum in Länge für die Beladung von Fracht."
      }
    },
    {
      question: {
        ro: "Care este înălțimea interioară tipică a unui megatrailer?",
        en: "What is the typical interior height of a megatrailer?",
        de: "Was ist die typische Innenhöhe eines Megatrailers?"
      },
      options: {
        ro: ["2.50m", "2.70m", "3.00m", "3.20m"],
        en: ["2.50m", "2.70m", "3.00m", "3.20m"],
        de: ["2.50m", "2.70m", "3.00m", "3.20m"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Megatrailerele au o înălțime interioară de aproximativ 3.00m datorită podelei joase, permițând stivuirea mai multor paleți.",
        en: "Megatrailers have an interior height of approximately 3.00m due to the lowered floor, allowing stacking of more pallets.",
        de: "Megatrailer haben eine Innenhöhe von ca. 3.00m dank des abgesenkten Bodens, was das Stapeln von mehr Paletten ermöglicht."
      }
    },
    {
      question: {
        ro: "Ce tip de vehicul este necesar pentru mărfuri care necesită temperatură controlată?",
        en: "What type of vehicle is required for temperature-controlled goods?",
        de: "Welcher Fahrzeugtyp ist für temperaturgeführte Güter erforderlich?"
      },
      options: {
        ro: ["Prelată standard", "Frigorific (reefer)", "Platformă", "Cisternă"],
        en: ["Standard tarpaulin", "Refrigerated (reefer)", "Flatbed", "Tanker"],
        de: ["Standard-Plane", "Kühlfahrzeug (Reefer)", "Pritsche", "Tankwagen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Vehiculele frigorifice (reefer) sunt echipate cu sisteme de răcire/încălzire pentru a menține temperatura necesară pe toată durata transportului.",
        en: "Refrigerated vehicles (reefers) are equipped with cooling/heating systems to maintain the required temperature throughout transport.",
        de: "Kühlfahrzeuge (Reefer) sind mit Kühl-/Heizsystemen ausgestattet, um die erforderliche Temperatur während des gesamten Transports zu halten."
      }
    },
    {
      question: {
        ro: "Ce certificare trebuie să aibă vehiculele frigorifice pentru transport internațional?",
        en: "What certification must refrigerated vehicles have for international transport?",
        de: "Welche Zertifizierung müssen Kühlfahrzeuge für den internationalen Transport haben?"
      },
      options: {
        ro: ["ISO 9001", "ATP", "ADR", "HACCP"],
        en: ["ISO 9001", "ATP", "ADR", "HACCP"],
        de: ["ISO 9001", "ATP", "ADR", "HACCP"]
      },
      correctIndex: 1,
      explanation: {
        ro: "ATP (Acordul privind Transportul Internațional al Mărfurilor Perisabile) este certificarea obligatorie pentru vehiculele frigorifice în transport internațional.",
        en: "ATP (Agreement on the International Carriage of Perishable Foodstuffs) is the mandatory certification for refrigerated vehicles in international transport.",
        de: "ATP (Übereinkommen über die internationale Beförderung leicht verderblicher Lebensmittel) ist die obligatorische Zertifizierung für Kühlfahrzeuge im internationalen Transport."
      }
    }
  ],
  loading: [
    {
      question: {
        ro: "Câți europaleti standard încap într-un megatrailer?",
        en: "How many standard europallets fit in a megatrailer?",
        de: "Wie viele Standard-Europaletten passen in einen Megatrailer?"
      },
      options: {
        ro: ["22 paleți", "33 paleți", "44 paleți", "55 paleți"],
        en: ["22 pallets", "33 pallets", "44 pallets", "55 pallets"],
        de: ["22 Paletten", "33 Paletten", "44 Paletten", "55 Paletten"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Un megatrailer standard poate încărca 33 europaleti (120x80cm) pe un singur nivel.",
        en: "A standard megatrailer can load 33 europallets (120x80cm) on a single level.",
        de: "Ein Standard-Megatrailer kann 33 Europaletten (120x80cm) auf einer Ebene laden."
      }
    },
    {
      question: {
        ro: "Care sunt dimensiunile unui europalet standard?",
        en: "What are the dimensions of a standard europallet?",
        de: "Was sind die Abmessungen einer Standard-Europalette?"
      },
      options: {
        ro: ["100 x 100 cm", "120 x 80 cm", "120 x 100 cm", "140 x 100 cm"],
        en: ["100 x 100 cm", "120 x 80 cm", "120 x 100 cm", "140 x 100 cm"],
        de: ["100 x 100 cm", "120 x 80 cm", "120 x 100 cm", "140 x 100 cm"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Europaletul standard (EPAL/EUR) are dimensiunile de 120 x 80 cm.",
        en: "The standard europallet (EPAL/EUR) has dimensions of 120 x 80 cm.",
        de: "Die Standard-Europalette (EPAL/EUR) hat die Maße 120 x 80 cm."
      }
    },
    {
      question: {
        ro: "Ce trebuie verificat înainte de încărcare?",
        en: "What should be checked before loading?",
        de: "Was sollte vor dem Beladen geprüft werden?"
      },
      options: {
        ro: ["Doar greutatea", "Curățenia și starea trailerului, echipamente de fixare, lipsa mirosurilor", "Doar disponibilitatea șoferului", "Nimic special"],
        en: ["Only weight", "Cleanliness and condition of trailer, securing equipment, absence of odors", "Only driver availability", "Nothing special"],
        de: ["Nur das Gewicht", "Sauberkeit und Zustand des Trailers, Sicherungsausrüstung, keine Gerüche", "Nur Fahrerverfügbarkeit", "Nichts Besonderes"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Înainte de încărcare verificați: curățenia interioară, absența deteriorărilor, echipamentele de fixare disponibile și absența mirosurilor străine.",
        en: "Before loading check: interior cleanliness, no damage, available securing equipment, and absence of foreign odors.",
        de: "Vor dem Beladen prüfen: Innere Sauberkeit, keine Schäden, verfügbare Sicherungsausrüstung und keine Fremdgerüche."
      }
    },
    {
      question: {
        ro: "Ce este greutatea axei și de ce este importantă?",
        en: "What is axle weight and why is it important?",
        de: "Was ist das Achsgewicht und warum ist es wichtig?"
      },
      options: {
        ro: ["Greutatea totală a camionului", "Distribuția greutății pe fiecare axă, crucială pentru legalitate și siguranță", "Greutatea motorului", "Greutatea mărfii"],
        en: ["Total weight of truck", "Weight distribution on each axle, crucial for legality and safety", "Engine weight", "Cargo weight"],
        de: ["Gesamtgewicht des LKW", "Gewichtsverteilung auf jeder Achse, entscheidend für Legalität und Sicherheit", "Motorgewicht", "Frachtgewicht"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Greutatea axei este distribuția încărcăturii pe fiecare axă. Depășirea limitelor legale duce la amenzi și probleme de siguranță.",
        en: "Axle weight is the load distribution on each axle. Exceeding legal limits leads to fines and safety issues.",
        de: "Das Achsgewicht ist die Lastverteilung auf jeder Achse. Überschreitung der gesetzlichen Grenzen führt zu Bußgeldern und Sicherheitsproblemen."
      }
    },
    {
      question: {
        ro: "Ce reprezintă factorul de stivuire?",
        en: "What does the stacking factor represent?",
        de: "Was stellt der Stapelfaktor dar?"
      },
      options: {
        ro: ["Numărul de șoferi", "Câte straturi de marfă pot fi stivuite fără deteriorare", "Viteza de încărcare", "Costul depozitării"],
        en: ["Number of drivers", "How many layers of goods can be stacked without damage", "Loading speed", "Storage cost"],
        de: ["Anzahl der Fahrer", "Wie viele Schichten Waren ohne Beschädigung gestapelt werden können", "Ladegeschwindigkeit", "Lagerkosten"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Factorul de stivuire indică câte straturi de paleți pot fi stivuiți fără a deteriora marfa de dedesubt.",
        en: "The stacking factor indicates how many layers of pallets can be stacked without damaging the goods below.",
        de: "Der Stapelfaktor gibt an, wie viele Palettenschichten gestapelt werden können, ohne die darunter liegenden Waren zu beschädigen."
      }
    }
  ],
  checklists: [
    {
      question: {
        ro: "Ce trebuie verificat la primirea unei noi comenzi de transport?",
        en: "What should be verified when receiving a new transport order?",
        de: "Was sollte bei Erhalt eines neuen Transportauftrags geprüft werden?"
      },
      options: {
        ro: ["Doar prețul", "Adrese complete, date, specificații marfă, cerințe speciale, contact", "Doar numele clientului", "Doar distanța"],
        en: ["Only price", "Complete addresses, dates, cargo specs, special requirements, contact", "Only customer name", "Only distance"],
        de: ["Nur der Preis", "Vollständige Adressen, Termine, Frachtspezifikationen, Sonderanforderungen, Kontakt", "Nur Kundenname", "Nur die Entfernung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "O verificare completă a comenzii include: adrese de ridicare/livrare, date și ore, specificații marfă, cerințe speciale și date de contact.",
        en: "A complete order check includes: pickup/delivery addresses, dates and times, cargo specifications, special requirements, and contact details.",
        de: "Eine vollständige Auftragsprüfung umfasst: Abhol-/Lieferadressen, Termine und Zeiten, Frachtspezifikationen, Sonderanforderungen und Kontaktdaten."
      }
    },
    {
      question: {
        ro: "Ce documente trebuie să aibă șoferul înainte de plecare?",
        en: "What documents must the driver have before departure?",
        de: "Welche Dokumente muss der Fahrer vor der Abfahrt haben?"
      },
      options: {
        ro: ["Doar permisul de conducere", "CMR, comandă transport, instrucțiuni speciale, contacte de urgență", "Doar cartea de identitate", "Nimic nu e necesar"],
        en: ["Only driving license", "CMR, transport order, special instructions, emergency contacts", "Only ID card", "Nothing is necessary"],
        de: ["Nur Führerschein", "CMR, Transportauftrag, Sonderanweisungen, Notfallkontakte", "Nur Personalausweis", "Nichts ist notwendig"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Șoferul trebuie să aibă: CMR completat, comanda de transport, instrucțiuni speciale pentru încărcare/descărcare și contacte de urgență.",
        en: "The driver must have: completed CMR, transport order, special loading/unloading instructions, and emergency contacts.",
        de: "Der Fahrer muss haben: ausgefüllten CMR, Transportauftrag, spezielle Lade-/Entladeanweisungen und Notfallkontakte."
      }
    },
    {
      question: {
        ro: "Ce trebuie verificat la vehicul înainte de transport?",
        en: "What should be checked on the vehicle before transport?",
        de: "Was sollte am Fahrzeug vor dem Transport geprüft werden?"
      },
      options: {
        ro: ["Doar culoarea", "Stare tehnică, curățenie, echipamente de fixare, documente valabile", "Doar marca", "Nimic"],
        en: ["Only color", "Technical condition, cleanliness, securing equipment, valid documents", "Only brand", "Nothing"],
        de: ["Nur die Farbe", "Technischer Zustand, Sauberkeit, Sicherungsausrüstung, gültige Dokumente", "Nur die Marke", "Nichts"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Verificarea vehiculului include: stare tehnică generală, curățenia interioară/exterioară, echipamente de fixare și valabilitatea documentelor.",
        en: "Vehicle check includes: general technical condition, interior/exterior cleanliness, securing equipment, and document validity.",
        de: "Fahrzeugprüfung umfasst: allgemeinen technischen Zustand, Innen-/Außensauberkeit, Sicherungsausrüstung und Dokumentengültigkeit."
      }
    },
    {
      question: {
        ro: "Ce informații trebuie documentate la încărcare?",
        en: "What information should be documented at loading?",
        de: "Welche Informationen sollten beim Beladen dokumentiert werden?"
      },
      options: {
        ro: ["Doar ora", "Ora exactă, număr paleți, stare marfă, sigilii aplicate, semnături", "Doar numele șoferului", "Nimic"],
        en: ["Only time", "Exact time, number of pallets, cargo condition, applied seals, signatures", "Only driver name", "Nothing"],
        de: ["Nur die Zeit", "Genaue Uhrzeit, Palettenanzahl, Frachtzustand, angebrachte Siegel, Unterschriften", "Nur Fahrername", "Nichts"]
      },
      correctIndex: 1,
      explanation: {
        ro: "La încărcare documentați: ora exactă, numărul și tipul paleților, starea vizuală a mărfii, sigiliile aplicate și obțineți semnături.",
        en: "At loading document: exact time, number and type of pallets, visual condition of goods, applied seals, and obtain signatures.",
        de: "Beim Beladen dokumentieren: genaue Uhrzeit, Anzahl und Art der Paletten, Sichtzustand der Waren, angebrachte Siegel und Unterschriften einholen."
      }
    },
    {
      question: {
        ro: "Ce acțiuni sunt necesare după livrare?",
        en: "What actions are required after delivery?",
        de: "Welche Maßnahmen sind nach der Lieferung erforderlich?"
      },
      options: {
        ro: ["Nimic", "Colectare POD/CMR semnat, raportare status, facturare promptă", "Doar plecare", "Doar odihnă"],
        en: ["Nothing", "Collect signed POD/CMR, report status, prompt invoicing", "Just leave", "Just rest"],
        de: ["Nichts", "Unterschriebenen POD/CMR sammeln, Status melden, prompte Rechnungsstellung", "Nur wegfahren", "Nur ausruhen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "După livrare: colectați CMR/POD semnat și ștampilat, raportați statusul în sistem și inițiați facturarea.",
        en: "After delivery: collect signed and stamped CMR/POD, report status in system, and initiate invoicing.",
        de: "Nach der Lieferung: unterschriebenen und gestempelten CMR/POD sammeln, Status im System melden und Rechnungsstellung einleiten."
      }
    }
  ],
  glossary: [
    {
      question: {
        ro: "Ce înseamnă FTL?",
        en: "What does FTL mean?",
        de: "Was bedeutet FTL?"
      },
      options: {
        ro: ["Free Transport License", "Full Truck Load", "Fast Transport Line", "Freight Transport Limit"],
        en: ["Free Transport License", "Full Truck Load", "Fast Transport Line", "Freight Transport Limit"],
        de: ["Free Transport License", "Full Truck Load", "Fast Transport Line", "Freight Transport Limit"]
      },
      correctIndex: 1,
      explanation: {
        ro: "FTL (Full Truck Load) înseamnă încărcătură completă - când întregul camion este dedicat unei singure comenzi.",
        en: "FTL (Full Truck Load) means complete load - when the entire truck is dedicated to a single order.",
        de: "FTL (Full Truck Load) bedeutet Komplettladung - wenn der gesamte LKW einer einzelnen Bestellung gewidmet ist."
      }
    },
    {
      question: {
        ro: "Ce înseamnă CMR?",
        en: "What does CMR mean?",
        de: "Was bedeutet CMR?"
      },
      options: {
        ro: ["Central Motor Registry", "Convention relative au contrat de transport international de Marchandises par Route", "Cargo Movement Report", "Carrier Management Record"],
        en: ["Central Motor Registry", "Convention on the Contract for the International Carriage of Goods by Road", "Cargo Movement Report", "Carrier Management Record"],
        de: ["Central Motor Registry", "Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr", "Cargo Movement Report", "Carrier Management Record"]
      },
      correctIndex: 1,
      explanation: {
        ro: "CMR este Convenția privind Contractul de Transport Internațional de Mărfuri pe Șosele, care reglementează transportul rutier internațional.",
        en: "CMR is the Convention on the Contract for the International Carriage of Goods by Road, regulating international road transport.",
        de: "CMR ist das Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr."
      }
    },
    {
      question: {
        ro: "Ce înseamnă POD?",
        en: "What does POD mean?",
        de: "Was bedeutet POD?"
      },
      options: {
        ro: ["Point of Dispatch", "Proof of Delivery", "Payment on Demand", "Priority Order Dispatch"],
        en: ["Point of Dispatch", "Proof of Delivery", "Payment on Demand", "Priority Order Dispatch"],
        de: ["Point of Dispatch", "Proof of Delivery", "Payment on Demand", "Priority Order Dispatch"]
      },
      correctIndex: 1,
      explanation: {
        ro: "POD (Proof of Delivery) este dovada livrării - documentul semnat care confirmă că marfa a fost livrată destinatarului.",
        en: "POD (Proof of Delivery) is the signed document confirming that goods were delivered to the recipient.",
        de: "POD (Proof of Delivery) ist der unterschriebene Nachweis, dass die Waren an den Empfänger geliefert wurden."
      }
    },
    {
      question: {
        ro: "Ce înseamnă LDM?",
        en: "What does LDM mean?",
        de: "Was bedeutet LDM?"
      },
      options: {
        ro: ["Loading Distance Measure", "Linear Loading Meters", "Long Distance Movement", "Logistics Data Management"],
        en: ["Loading Distance Measure", "Linear Loading Meters", "Long Distance Movement", "Logistics Data Management"],
        de: ["Loading Distance Measure", "Lademeter", "Long Distance Movement", "Logistics Data Management"]
      },
      correctIndex: 1,
      explanation: {
        ro: "LDM (Metri de Încărcare Liniari) măsoară spațiul de încărcare disponibil în lungime pe podeaua trailerului.",
        en: "LDM (Linear Loading Meters) measures the available loading space in length on the trailer floor.",
        de: "LDM (Lademeter) misst den verfügbaren Laderaum in Länge auf dem Trailerboden."
      }
    },
    {
      question: {
        ro: "Ce înseamnă ADR?",
        en: "What does ADR mean?",
        de: "Was bedeutet ADR?"
      },
      options: {
        ro: ["Automatic Delivery Route", "Agreement concerning Dangerous goods by Road", "Advanced Driver Requirements", "Annual Delivery Report"],
        en: ["Automatic Delivery Route", "Agreement concerning Dangerous goods by Road", "Advanced Driver Requirements", "Annual Delivery Report"],
        de: ["Automatic Delivery Route", "Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße", "Advanced Driver Requirements", "Annual Delivery Report"]
      },
      correctIndex: 1,
      explanation: {
        ro: "ADR este Acordul European privind Transportul Internațional al Mărfurilor Periculoase pe Șosele.",
        en: "ADR is the European Agreement concerning the International Carriage of Dangerous Goods by Road.",
        de: "ADR ist das Europäische Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße."
      }
    }
  ],
  compliance: [
    {
      question: {
        ro: "Care este timpul maxim de condus continuu permis conform regulamentului UE?",
        en: "What is the maximum continuous driving time allowed under EU regulation?",
        de: "Was ist die maximal zulässige ununterbrochene Lenkzeit gemäß EU-Verordnung?"
      },
      options: {
        ro: ["3 ore", "4.5 ore", "6 ore", "8 ore"],
        en: ["3 hours", "4.5 hours", "6 hours", "8 hours"],
        de: ["3 Stunden", "4.5 Stunden", "6 Stunden", "8 Stunden"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Conform Regulamentului UE 561/2006, timpul maxim de condus continuu este de 4.5 ore, după care este obligatorie o pauză de minimum 45 minute.",
        en: "According to EU Regulation 561/2006, maximum continuous driving time is 4.5 hours, after which a break of at least 45 minutes is mandatory.",
        de: "Gemäß EU-Verordnung 561/2006 beträgt die maximale ununterbrochene Lenkzeit 4,5 Stunden, danach ist eine Pause von mindestens 45 Minuten vorgeschrieben."
      }
    },
    {
      question: {
        ro: "Care este perioada minimă de odihnă zilnică pentru un șofer?",
        en: "What is the minimum daily rest period for a driver?",
        de: "Was ist die Mindestruhezeit pro Tag für einen Fahrer?"
      },
      options: {
        ro: ["8 ore", "9 ore", "11 ore", "12 ore"],
        en: ["8 hours", "9 hours", "11 hours", "12 hours"],
        de: ["8 Stunden", "9 Stunden", "11 Stunden", "12 Stunden"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Odihna zilnică normală este de minimum 11 ore consecutive. Poate fi redusă la 9 ore de maximum 3 ori pe săptămână.",
        en: "Normal daily rest is a minimum of 11 consecutive hours. It can be reduced to 9 hours a maximum of 3 times per week.",
        de: "Die normale tägliche Ruhezeit beträgt mindestens 11 aufeinanderfolgende Stunden. Sie kann maximal 3 Mal pro Woche auf 9 Stunden reduziert werden."
      }
    },
    {
      question: {
        ro: "Ce este tahograful și pentru ce este folosit?",
        en: "What is a tachograph and what is it used for?",
        de: "Was ist ein Fahrtenschreiber und wofür wird er verwendet?"
      },
      options: {
        ro: ["Sistem de navigație", "Dispozitiv pentru înregistrarea timpilor de condus, muncă și odihnă", "Sistem de comunicare", "Contor de combustibil"],
        en: ["Navigation system", "Device for recording driving, working and rest times", "Communication system", "Fuel counter"],
        de: ["Navigationssystem", "Gerät zur Aufzeichnung von Lenk-, Arbeits- und Ruhezeiten", "Kommunikationssystem", "Kraftstoffzähler"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Tahograful este un dispozitiv obligatoriu care înregistrează automat timpii de condus, muncă, disponibilitate și odihnă ai șoferului.",
        en: "The tachograph is a mandatory device that automatically records the driver's driving, working, availability and rest times.",
        de: "Der Fahrtenschreiber ist ein Pflichtgerät, das automatisch die Lenk-, Arbeits-, Bereitschafts- und Ruhezeiten des Fahrers aufzeichnet."
      }
    },
    {
      question: {
        ro: "Cine este responsabil pentru respectarea regulilor privind orele de condus?",
        en: "Who is responsible for compliance with driving hours rules?",
        de: "Wer ist für die Einhaltung der Lenkzeitregeln verantwortlich?"
      },
      options: {
        ro: ["Doar șoferul", "Doar operatorul de transport", "Atât șoferul cât și operatorul împart responsabilitatea", "Doar clientul"],
        en: ["Only the driver", "Only the transport operator", "Both driver and operator share responsibility", "Only the customer"],
        de: ["Nur der Fahrer", "Nur der Transportunternehmer", "Sowohl Fahrer als auch Unternehmer teilen die Verantwortung", "Nur der Kunde"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Atât șoferul cât și operatorul sunt responsabili legal pentru conformitatea cu reglementările privind orele de condus.",
        en: "Both driver and operator are legally responsible for compliance with driving hours regulations.",
        de: "Sowohl Fahrer als auch Unternehmer sind rechtlich für die Einhaltung der Lenkzeitvorschriften verantwortlich."
      }
    }
  ],
  "driving-time": [
    {
      question: {
        ro: "Este timpul petrecut în ambuteiaj considerat timp de condus?",
        en: "Is time spent in a traffic jam counted as driving time?",
        de: "Wird die im Stau verbrachte Zeit als Lenkzeit gezählt?"
      },
      options: {
        ro: ["Nu, doar mișcarea reală contează", "Da, 100% considerat timp de condus", "Doar 50% este considerat", "Depinde de țară"],
        en: ["No, only actual movement counts", "Yes, 100% counted as driving time", "Only 50% is counted", "Depends on the country"],
        de: ["Nein, nur tatsächliche Bewegung zählt", "Ja, 100% als Lenkzeit gezählt", "Nur 50% wird gezählt", "Abhängig vom Land"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Timpul în ambuteiaj este 100% considerat timp de condus. Doar când parcați și comutați tahograful pe ODIHNĂ nu mai contează.",
        en: "Traffic jam time is 100% counted as driving time. Only when you park and switch tacho to REST does it stop counting.",
        de: "Stauzeit wird zu 100% als Lenkzeit gezählt. Erst wenn Sie parken und den Tacho auf RUHE schalten, wird nicht mehr gezählt."
      }
    },
    {
      question: {
        ro: "Care este timpul maxim de tură pentru un singur șofer?",
        en: "What is the maximum shift time for a single driver?",
        de: "Was ist die maximale Schichtzeit für einen Einzelfahrer?"
      },
      options: {
        ro: ["9 ore", "11 ore", "13-15 ore", "21 ore"],
        en: ["9 hours", "11 hours", "13-15 hours", "21 hours"],
        de: ["9 Stunden", "11 Stunden", "13-15 Stunden", "21 Stunden"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Timpul maxim de tură pentru un singur șofer este 13-15 ore (în funcție de regulile naționale privind timpul de lucru).",
        en: "Single driver maximum shift time is 13-15 hours (depending on national working time rules).",
        de: "Die maximale Schichtzeit für Einzelfahrer beträgt 13-15 Stunden (abhängig von nationalen Arbeitszeitregeln)."
      }
    },
    {
      question: {
        ro: "Ce distanță poate acoperi un echipaj cu doi șoferi în 24 ore?",
        en: "What distance can a double-manned crew cover in 24 hours?",
        de: "Welche Strecke kann eine Doppelbesatzung in 24 Stunden zurücklegen?"
      },
      options: {
        ro: ["500-700 km", "800-1000 km", "1200-1600 km", "2000+ km"],
        en: ["500-700 km", "800-1000 km", "1200-1600 km", "2000+ km"],
        de: ["500-700 km", "800-1000 km", "1200-1600 km", "2000+ km"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Un echipaj cu doi șoferi poate acoperi 1200-1600 km în 24 ore datorită condusului în schimburi și regulilor extinse de odihnă.",
        en: "A double-manned crew can cover 1200-1600 km in 24 hours due to shift driving and extended rest rules.",
        de: "Eine Doppelbesatzung kann dank Schichtfahren und erweiterten Ruheregeln 1200-1600 km in 24 Stunden zurücklegen."
      }
    },
    {
      question: {
        ro: "Când se termină interdicția de circulație duminicală în Germania?",
        en: "When does the Sunday driving ban end in Germany?",
        de: "Wann endet das Sonntagsfahrverbot in Deutschland?"
      },
      options: {
        ro: ["18:00", "20:00", "22:00", "00:00"],
        en: ["18:00", "20:00", "22:00", "00:00"],
        de: ["18:00", "20:00", "22:00", "00:00"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Interdicția de duminică pentru camioane peste 3.5t în Germania se termină la ora 22:00.",
        en: "Germany's Sunday driving ban for trucks over 3.5t ends at 22:00.",
        de: "Das Sonntagsfahrverbot für LKW über 3,5t in Deutschland endet um 22:00 Uhr."
      }
    }
  ],
  pricing: [
    {
      question: {
        ro: "Care este intervalul tipic al marjei de profit în expediția de mărfuri?",
        en: "What is the typical profit margin range in freight forwarding?",
        de: "Was ist die typische Gewinnspanne in der Spedition?"
      },
      options: {
        ro: ["2-5%", "8-18%", "25-30%", "40-50%"],
        en: ["2-5%", "8-18%", "25-30%", "40-50%"],
        de: ["2-5%", "8-18%", "25-30%", "40-50%"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Marjele tipice variază între 8-18%, în funcție de nivelul serviciului și competiție.",
        en: "Typical margins range from 8-18%, depending on the service level and competition.",
        de: "Typische Margen liegen zwischen 8-18%, abhängig vom Servicelevel und Wettbewerb."
      }
    },
    {
      question: {
        ro: "Care sunt tarifele pieței spot în comparație cu tarifele contractuale?",
        en: "How do spot market rates compare to contract rates?",
        de: "Wie verhalten sich Spotmarkt-Tarife zu Vertragstarifen?"
      },
      options: {
        ro: ["Întotdeauna mai mici", "Mai volatile, pot fi mai mari sau mai mici în funcție de cerere/ofertă", "Întotdeauna egale", "Nu există diferență"],
        en: ["Always lower", "More volatile, can be higher or lower depending on demand/supply", "Always equal", "No difference"],
        de: ["Immer niedriger", "Volatiler, können je nach Angebot/Nachfrage höher oder niedriger sein", "Immer gleich", "Kein Unterschied"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Tarifele spot fluctuează cu cererea și oferta, putând fi mai mari în perioadele de vârf și mai mici când există excedent de capacitate.",
        en: "Spot rates fluctuate with demand and supply, being higher in peak periods and lower when there is excess capacity.",
        de: "Spotraten schwanken mit Angebot und Nachfrage, sind in Spitzenzeiten höher und niedriger bei Kapazitätsüberschuss."
      }
    },
    {
      question: {
        ro: "Ce elemente suplimentare trebuie adăugate la tariful de bază per km?",
        en: "What additional elements should be added to the base rate per km?",
        de: "Welche zusätzlichen Elemente sollten zum km-Grundtarif hinzugefügt werden?"
      },
      options: {
        ro: ["Doar bonusul șoferului", "Taxe rutiere, feriboturi, accesorii, timp de așteptare, taxe de frontieră", "Doar marja", "Nimic altceva nu e necesar"],
        en: ["Only driver bonus", "Tolls, ferries, accessorials, waiting time, border fees", "Only the margin", "Nothing else needed"],
        de: ["Nur Fahrerbonus", "Maut, Fähren, Nebenkosten, Wartezeit, Grenzgebühren", "Nur die Marge", "Nichts anderes nötig"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Calculul complet al costurilor trebuie să includă taxe rutiere, feriboturi, accesorii, timp de așteptare și taxe de frontieră peste tariful de bază per km.",
        en: "Complete costing must include tolls, ferries, accessorials, waiting time, and border fees on top of the base km rate.",
        de: "Die vollständige Kalkulation muss Maut, Fähren, Nebenkosten, Wartezeit und Grenzgebühren zusätzlich zum km-Grundtarif enthalten."
      }
    }
  ],
  claims: [
    {
      question: {
        ro: "Care este limita de timp CMR pentru reclamații de daune vizibile?",
        en: "What is the CMR time limit for visible damage claims?",
        de: "Was ist die CMR-Frist für Ansprüche bei sichtbaren Schäden?"
      },
      options: {
        ro: ["24 ore", "7 zile", "21 zile", "1 an"],
        en: ["24 hours", "7 days", "21 days", "1 year"],
        de: ["24 Stunden", "7 Tage", "21 Tage", "1 Jahr"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Daunele vizibile trebuie notate pe CMR la livrare. Reclamațiile trebuie depuse în 7 zile pentru daune vizibile.",
        en: "Visible damage must be noted on the CMR at delivery. Claims should be filed within 7 days for visible damage.",
        de: "Sichtbare Schäden müssen bei Lieferung auf dem CMR vermerkt werden. Ansprüche sollten innerhalb von 7 Tagen geltend gemacht werden."
      }
    },
    {
      question: {
        ro: "Care este limita de răspundere CMR pentru mărfuri deteriorate?",
        en: "What is the CMR liability limit for damaged goods?",
        de: "Was ist die CMR-Haftungsgrenze für beschädigte Waren?"
      },
      options: {
        ro: ["5 EUR/kg", "8.33 SDR/kg (aproximativ 10 EUR/kg)", "20 EUR/kg", "Valoarea totală a mărfii"],
        en: ["5 EUR/kg", "8.33 SDR/kg (approximately 10 EUR/kg)", "20 EUR/kg", "Full value of goods"],
        de: ["5 EUR/kg", "8.33 SZR/kg (ca. 10 EUR/kg)", "20 EUR/kg", "Voller Warenwert"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Conform Convenției CMR, limita de răspundere este de 8.33 SDR per kg de greutate brută (aproximativ 10 EUR/kg).",
        en: "Under the CMR Convention, the liability limit is 8.33 SDR per kg of gross weight (approximately 10 EUR/kg).",
        de: "Gemäß CMR-Konvention beträgt die Haftungsgrenze 8.33 SZR pro kg Bruttogewicht (ca. 10 EUR/kg)."
      }
    },
    {
      question: {
        ro: "Ce trebuie făcut imediat când se descoperă daune la livrare?",
        en: "What should be done immediately when damage is discovered at delivery?",
        de: "Was sollte sofort getan werden, wenn bei der Lieferung Schäden entdeckt werden?"
      },
      options: {
        ro: ["Ignorați și livrați", "Fotografiați, notați pe CMR, anunțați toate părțile", "Returnați marfa fără explicații", "Așteptați instrucțiuni"],
        en: ["Ignore and deliver", "Photograph, note on CMR, notify all parties", "Return goods without explanation", "Wait for instructions"],
        de: ["Ignorieren und liefern", "Fotografieren, auf CMR vermerken, alle Parteien benachrichtigen", "Waren ohne Erklärung zurücksenden", "Auf Anweisungen warten"]
      },
      correctIndex: 1,
      explanation: {
        ro: "La descoperirea daunelor: fotografiați imediat, notați pe CMR în Căsuța 18, anunțați expeditorul și destinatarul.",
        en: "When damage is discovered: photograph immediately, note on CMR in Box 18, notify shipper and consignee.",
        de: "Bei Entdeckung von Schäden: sofort fotografieren, in CMR Feld 18 vermerken, Versender und Empfänger benachrichtigen."
      }
    },
    {
      question: {
        ro: "Care este termenul pentru reclamații de daune ascunse conform CMR?",
        en: "What is the deadline for hidden damage claims under CMR?",
        de: "Was ist die Frist für Ansprüche bei versteckten Schäden gemäß CMR?"
      },
      options: {
        ro: ["24 ore", "7 zile de la livrare", "30 zile de la livrare", "1 an de la livrare"],
        en: ["24 hours", "7 days from delivery", "30 days from delivery", "1 year from delivery"],
        de: ["24 Stunden", "7 Tage ab Lieferung", "30 Tage ab Lieferung", "1 Jahr ab Lieferung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Daunele ascunse care nu erau vizibile la livrare trebuie reclamate în 7 zile de la livrare.",
        en: "Hidden damage that was not visible at delivery must be claimed within 7 days of delivery.",
        de: "Versteckte Schäden, die bei Lieferung nicht sichtbar waren, müssen innerhalb von 7 Tagen nach Lieferung geltend gemacht werden."
      }
    }
  ],
  insurance: [
    {
      question: {
        ro: "Ce tip de asigurare acoperă răspunderea transportatorului pentru daunele la marfă?",
        en: "What type of insurance covers carrier liability for cargo damage?",
        de: "Welche Versicherungsart deckt die Haftung des Frachtführers für Frachtschäden?"
      },
      options: {
        ro: ["Asigurare auto", "Asigurare de răspundere CMR", "Asigurare de sănătate", "Asigurare de proprietate"],
        en: ["Vehicle insurance", "CMR liability insurance", "Health insurance", "Property insurance"],
        de: ["Fahrzeugversicherung", "CMR-Haftpflichtversicherung", "Krankenversicherung", "Sachversicherung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Asigurarea de răspundere CMR acoperă răspunderea legală a transportatorului pentru daunele la marfă în timpul transportului.",
        en: "CMR liability insurance covers the carrier legal liability for cargo damage during transport.",
        de: "Die CMR-Haftpflichtversicherung deckt die gesetzliche Haftung des Frachtführers für Frachtschäden während des Transports."
      }
    },
    {
      question: {
        ro: "Ce este asigurarea all-risk pentru marfă?",
        en: "What is all-risk cargo insurance?",
        de: "Was ist eine Allgefahren-Frachtversicherung?"
      },
      options: {
        ro: ["Acoperire minimă", "Acoperire completă pentru pierdere sau daune din orice cauză, cu excepții specifice", "Doar pentru furt", "Doar pentru incendiu"],
        en: ["Minimum coverage", "Full coverage for loss or damage from any cause, with specific exclusions", "Theft only", "Fire only"],
        de: ["Mindestdeckung", "Vollständige Deckung für Verlust oder Schaden aus beliebiger Ursache, mit bestimmten Ausschlüssen", "Nur Diebstahl", "Nur Feuer"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Asigurarea all-risk oferă cea mai largă acoperire, protejând împotriva majorității riscurilor cu excepții specifice listate în poliță.",
        en: "All-risk insurance provides the broadest coverage, protecting against most risks with specific exclusions listed in the policy.",
        de: "Die Allgefahrenversicherung bietet die breiteste Deckung und schützt vor den meisten Risiken mit bestimmten in der Police aufgeführten Ausschlüssen."
      }
    },
    {
      question: {
        ro: "De ce este important să verificați asigurarea transportatorului?",
        en: "Why is it important to verify carrier insurance?",
        de: "Warum ist es wichtig, die Versicherung des Frachtführers zu überprüfen?"
      },
      options: {
        ro: ["Nu este important", "Pentru a vă asigura că există acoperire suficientă în caz de daune sau pierderi", "Doar pentru audit", "Doar pentru statistici"],
        en: ["It is not important", "To ensure sufficient coverage in case of damage or loss", "Only for audit", "Only for statistics"],
        de: ["Es ist nicht wichtig", "Um ausreichende Deckung bei Schaden oder Verlust sicherzustellen", "Nur für Audit", "Nur für Statistiken"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Verificarea asigurării transportatorului protejează împotriva situațiilor în care daunele depășesc capacitatea de plată a transportatorului.",
        en: "Verifying carrier insurance protects against situations where damages exceed the carrier ability to pay.",
        de: "Die Überprüfung der Frachtführerversicherung schützt vor Situationen, in denen Schäden die Zahlungsfähigkeit des Frachtführers übersteigen."
      }
    },
    {
      question: {
        ro: "Când este recomandată asigurarea suplimentară a mărfii?",
        en: "When is additional cargo insurance recommended?",
        de: "Wann wird eine zusätzliche Frachtversicherung empfohlen?"
      },
      options: {
        ro: ["Niciodată", "Pentru marfă de mare valoare unde limitele CMR sunt insuficiente", "Doar pentru mărfuri ieftine", "Doar în weekend"],
        en: ["Never", "For high-value cargo where CMR limits are insufficient", "Only for cheap goods", "Only on weekends"],
        de: ["Nie", "Für hochwertige Fracht, wenn CMR-Grenzen unzureichend sind", "Nur für billige Waren", "Nur am Wochenende"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Limitele de răspundere CMR (aproximativ 10 EUR/kg) pot fi insuficiente pentru marfă de mare valoare, necesitând acoperire suplimentară.",
        en: "CMR liability limits (approximately 10 EUR/kg) may be insufficient for high-value cargo, requiring additional coverage.",
        de: "CMR-Haftungsgrenzen (ca. 10 EUR/kg) können für hochwertige Fracht unzureichend sein und erfordern zusätzliche Deckung."
      }
    }
  ],
  adr: [
    {
      question: {
        ro: "Ce înseamnă ADR?",
        en: "What does ADR stand for?",
        de: "Wofür steht ADR?"
      },
      options: {
        ro: ["Reglementări Avansate de Condus", "Acordul privind Mărfurile Periculoase pe Șosele", "Rută Automată de Livrare", "Cerințe de Distribuție pe Zonă"],
        en: ["Advanced Driving Regulations", "Agreement on Dangerous goods by Road", "Automated Delivery Route", "Area Distribution Requirements"],
        de: ["Erweiterte Fahrvorschriften", "Europäisches Übereinkommen über die Beförderung gefährlicher Güter auf der Straße", "Automatische Lieferroute", "Gebietsverteilungsanforderungen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "ADR este Acordul European privind Transportul Internațional al Mărfurilor Periculoase pe Șosele.",
        en: "ADR is the European Agreement concerning the International Carriage of Dangerous Goods by Road.",
        de: "ADR ist das Europäische Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße."
      }
    },
    {
      question: {
        ro: "Câte clase de mărfuri periculoase există conform ADR?",
        en: "How many dangerous goods classes are there under ADR?",
        de: "Wie viele Gefahrgutklassen gibt es gemäß ADR?"
      },
      options: {
        ro: ["5 clase", "7 clase", "9 clase", "12 clase"],
        en: ["5 classes", "7 classes", "9 classes", "12 classes"],
        de: ["5 Klassen", "7 Klassen", "9 Klassen", "12 Klassen"]
      },
      correctIndex: 2,
      explanation: {
        ro: "ADR clasifică mărfurile periculoase în 9 clase principale, de la explozivi (Clasa 1) la diverse mărfuri periculoase (Clasa 9).",
        en: "ADR classifies dangerous goods into 9 main classes, from explosives (Class 1) to miscellaneous dangerous goods (Class 9).",
        de: "ADR klassifiziert gefährliche Güter in 9 Hauptklassen, von Explosivstoffen (Klasse 1) bis zu verschiedenen gefährlichen Gütern (Klasse 9)."
      }
    },
    {
      question: {
        ro: "Ce certificare specială trebuie să aibă șoferul pentru transportul ADR?",
        en: "What special certification must a driver have for ADR transport?",
        de: "Welche spezielle Zertifizierung muss ein Fahrer für ADR-Transport haben?"
      },
      options: {
        ro: ["Doar permis de conducere standard", "Certificat ADR valid pentru clasele transportate", "Doar experiență", "Nicio certificare specială"],
        en: ["Only standard driving license", "Valid ADR certificate for transported classes", "Only experience", "No special certification"],
        de: ["Nur Standardführerschein", "Gültiges ADR-Zertifikat für transportierte Klassen", "Nur Erfahrung", "Keine spezielle Zertifizierung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Șoferii care transportă mărfuri periculoase trebuie să aibă certificare validă de instruire ADR pentru clasele pe care le transportă.",
        en: "Drivers transporting dangerous goods must have valid ADR training certification for the classes they transport.",
        de: "Fahrer, die Gefahrgut transportieren, müssen eine gültige ADR-Schulungsbescheinigung für die von ihnen transportierten Klassen haben."
      }
    }
  ],
  documents: [
    {
      question: {
        ro: "Pentru ce este folosită scrisoarea de trăsură CMR?",
        en: "What is the CMR consignment note used for?",
        de: "Wofür wird der CMR-Frachtbrief verwendet?"
      },
      options: {
        ro: ["Doar vamă", "Dovadă a contractului de transport rutier internațional", "Identificarea șoferului", "Înmatricularea vehiculului"],
        en: ["Customs only", "International road freight contract evidence", "Driver identification", "Vehicle registration"],
        de: ["Nur Zoll", "Nachweis des internationalen Straßengüterverkehrsvertrags", "Fahreridentifikation", "Fahrzeugregistrierung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "CMR este dovada legală a contractului de transport și include detalii despre expeditor, destinatar, marfă și condiții.",
        en: "CMR is legal evidence of the transport contract and includes details about shipper, consignee, cargo, and conditions.",
        de: "Der CMR ist der rechtliche Nachweis des Beförderungsvertrags und enthält Details zu Versender, Empfänger, Fracht und Bedingungen."
      }
    },
    {
      question: {
        ro: "Câte exemplare originale ale CMR sunt necesare de obicei?",
        en: "How many original copies of CMR are typically required?",
        de: "Wie viele Originalexemplare des CMR sind typischerweise erforderlich?"
      },
      options: {
        ro: ["1 exemplar", "2 exemplare", "3 exemplare", "4 exemplare"],
        en: ["1 copy", "2 copies", "3 copies", "4 copies"],
        de: ["1 Exemplar", "2 Exemplare", "3 Exemplare", "4 Exemplare"]
      },
      correctIndex: 2,
      explanation: {
        ro: "CMR se emite în minim 3 exemplare originale: pentru expeditor, pentru destinatar și pentru transportator.",
        en: "CMR is issued in at least 3 original copies: for the shipper, consignee, and carrier.",
        de: "Der CMR wird in mindestens 3 Originalexemplaren ausgestellt: für Versender, Empfänger und Frachtführer."
      }
    },
    {
      question: {
        ro: "Ce trebuie făcut dacă există discrepanțe la încărcare?",
        en: "What should be done if there are discrepancies at loading?",
        de: "Was sollte getan werden, wenn es beim Beladen Unstimmigkeiten gibt?"
      },
      options: {
        ro: ["Ignorați", "Notați rezervele în CMR Căsuța 18", "Refuzați încărcătura complet", "Sunați poliția"],
        en: ["Ignore it", "Note reservations on CMR Box 18", "Refuse the load entirely", "Call the police"],
        de: ["Ignorieren", "Vorbehalte in CMR Feld 18 notieren", "Die Ladung vollständig ablehnen", "Die Polizei rufen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Orice discrepanțe (ambalaj deteriorat, diferențe de cantitate) trebuie notate ca rezerve în CMR Căsuța 18.",
        en: "Any discrepancies (damaged packaging, quantity differences) should be noted as reservations in CMR Box 18.",
        de: "Alle Unstimmigkeiten (beschädigte Verpackung, Mengenunterschiede) sollten als Vorbehalte in CMR Feld 18 notiert werden."
      }
    }
  ],
  reefer: [
    {
      question: {
        ro: "La ce se referă certificarea ATP?",
        en: "What does ATP certification relate to?",
        de: "Worauf bezieht sich die ATP-Zertifizierung?"
      },
      options: {
        ro: ["Instruirea șoferului", "Standarde pentru vehicule cu temperatură controlată", "Eficiența combustibilului", "Planificarea rutelor"],
        en: ["Driver training", "Temperature-controlled vehicle standards", "Fuel efficiency", "Route planning"],
        de: ["Fahrerschulung", "Standards für temperaturgeführte Fahrzeuge", "Kraftstoffeffizienz", "Routenplanung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "ATP (Acordul privind Transportul Perisabilelor) stabilește standarde pentru vehiculele cu temperatură controlată utilizate în transportul internațional.",
        en: "ATP (Agreement on Transport of Perishables) sets standards for temperature-controlled vehicles used in international transport.",
        de: "ATP (Übereinkommen über den Transport verderblicher Lebensmittel) legt Standards für temperaturgeführte Fahrzeuge im internationalen Transport fest."
      }
    },
    {
      question: {
        ro: "Care este intervalul tipic de temperatură pentru transportul produselor congelate?",
        en: "What is the typical temperature range for frozen product transport?",
        de: "Was ist der typische Temperaturbereich für den Transport von Tiefkühlprodukten?"
      },
      options: {
        ro: ["0 până la +4 grade C", "-18 până la -25 grade C", "+10 până la +15 grade C", "-5 până la -10 grade C"],
        en: ["0 to +4 degrees C", "-18 to -25 degrees C", "+10 to +15 degrees C", "-5 to -10 degrees C"],
        de: ["0 bis +4 Grad C", "-18 bis -25 Grad C", "+10 bis +15 Grad C", "-5 bis -10 Grad C"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Produsele congelate necesită temperaturi între -18 și -25 grade C pentru a menține calitatea și siguranța alimentară.",
        en: "Frozen products require temperatures between -18 and -25 degrees C to maintain quality and food safety.",
        de: "Tiefkühlprodukte erfordern Temperaturen zwischen -18 und -25 Grad C, um Qualität und Lebensmittelsicherheit zu gewährleisten."
      }
    },
    {
      question: {
        ro: "Ce toleranță de temperatură este permisă pentru produsele farmaceutice GDP?",
        en: "What temperature tolerance is allowed for GDP pharmaceutical products?",
        de: "Welche Temperaturtoleranz ist für GDP-Pharmaprodukte zulässig?"
      },
      options: {
        ro: ["+/- 5 grade C", "+/- 2 grade C", "ZERO toleranță", "+/- 10 grade C"],
        en: ["+/- 5 degrees C", "+/- 2 degrees C", "ZERO tolerance", "+/- 10 degrees C"],
        de: ["+/- 5 Grad C", "+/- 2 Grad C", "KEINE Toleranz", "+/- 10 Grad C"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Produsele farmaceutice conform GDP au toleranță zero pentru abateri de temperatură - respingeți transportul dacă limitele sunt depășite.",
        en: "Pharmaceutical products under GDP have zero tolerance for temperature deviations - reject shipment if limits exceeded.",
        de: "Pharmazeutische Produkte unter GDP haben keine Toleranz für Temperaturabweichungen - Sendung ablehnen, wenn Grenzen überschritten werden."
      }
    }
  ],
  customs: [
    {
      question: {
        ro: "Pentru ce este folosit documentul T1?",
        en: "What is the T1 document used for?",
        de: "Wofür wird das T1-Dokument verwendet?"
      },
      options: {
        ro: ["Transport intern UE", "Mărfuri non-UE în tranzit prin UE", "Identificarea șoferului", "Înmatricularea vehiculului"],
        en: ["EU internal transport", "Non-EU goods transiting through EU", "Driver identification", "Vehicle registration"],
        de: ["EU-Inlandstransport", "Nicht-EU-Waren im Transit durch die EU", "Fahreridentifikation", "Fahrzeugregistrierung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "T1 (Tranzit Extern) este folosit pentru mărfurile non-UE care se deplasează prin teritoriul UE sub supraveghere vamală.",
        en: "T1 (External Transit) is used for non-EU goods moving through EU territory under customs supervision.",
        de: "T1 (Externes Versandverfahren) wird für Nicht-EU-Waren verwendet, die unter Zollaufsicht durch EU-Gebiet bewegt werden."
      }
    },
    {
      question: {
        ro: "Ce este numărul EORI?",
        en: "What is an EORI number?",
        de: "Was ist eine EORI-Nummer?"
      },
      options: {
        ro: ["Număr de telefon de urgență", "Număr unic de identificare pentru operatorii economici în vamă", "Număr de înmatriculare vehicul", "Cod de țară"],
        en: ["Emergency phone number", "Unique identification number for economic operators in customs", "Vehicle registration number", "Country code"],
        de: ["Notfalltelefonnummer", "Eindeutige Identifikationsnummer für Wirtschaftsbeteiligte beim Zoll", "Fahrzeugregistrierungsnummer", "Ländercode"]
      },
      correctIndex: 1,
      explanation: {
        ro: "EORI (Economic Operators Registration and Identification) este numărul unic necesar pentru toate operațiunile vamale în UE.",
        en: "EORI (Economic Operators Registration and Identification) is the unique number required for all customs operations in the EU.",
        de: "EORI (Economic Operators Registration and Identification) ist die eindeutige Nummer, die für alle Zollvorgänge in der EU erforderlich ist."
      }
    },
    {
      question: {
        ro: "Ce cerințe speciale se aplică transportului UK post-Brexit?",
        en: "What special requirements apply to UK transport post-Brexit?",
        de: "Welche besonderen Anforderungen gelten für UK-Transport nach dem Brexit?"
      },
      options: {
        ro: ["Nimic nu s-a schimbat", "GVMS/GMR necesar, declarații vamale obligatorii", "Nu sunt permise camioane", "Doar feriboturi"],
        en: ["Nothing changed", "GVMS/GMR required, customs declarations mandatory", "No trucks allowed", "Ferries only"],
        de: ["Nichts geändert", "GVMS/GMR erforderlich, Zollerklärungen obligatorisch", "Keine LKW erlaubt", "Nur Fähren"]
      },
      correctIndex: 1,
      explanation: {
        ro: "GVMS (Serviciul de Mișcare a Vehiculelor de Mărfuri) și GMR (Referința de Mișcare a Mărfurilor) sunt necesare pentru trecerile de frontieră UK post-Brexit.",
        en: "GVMS (Goods Vehicle Movement Service) and GMR (Goods Movement Reference) are required for UK border crossings post-Brexit.",
        de: "GVMS (Goods Vehicle Movement Service) und GMR (Goods Movement Reference) sind für UK-Grenzübertritte nach dem Brexit erforderlich."
      }
    }
  ],
  payment: [
    {
      question: {
        ro: "Ce termen de plată înseamnă plată în 30 de zile de la factură?",
        en: "What payment term means payment within 30 days of invoice?",
        de: "Welche Zahlungsbedingung bedeutet Zahlung innerhalb von 30 Tagen nach Rechnung?"
      },
      options: {
        ro: ["Ramburs", "Plată în avans", "Net 30", "Sfârșit de lună"],
        en: ["COD", "Prepayment", "Net 30", "EOM"],
        de: ["Nachnahme", "Vorauszahlung", "Netto 30", "Monatsende"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Net 30 înseamnă că plata este scadentă în 30 de zile de la data facturii.",
        en: "Net 30 means payment is due within 30 days from the invoice date.",
        de: "Netto 30 bedeutet, dass die Zahlung innerhalb von 30 Tagen ab Rechnungsdatum fällig ist."
      }
    },
    {
      question: {
        ro: "Ce înseamnă COD în termeni de plată?",
        en: "What does COD mean in payment terms?",
        de: "Was bedeutet COD bei Zahlungsbedingungen?"
      },
      options: {
        ro: ["Cost of Delivery", "Cash on Delivery", "Collect on Demand", "Carrier Ordered Dispatch"],
        en: ["Cost of Delivery", "Cash on Delivery", "Collect on Demand", "Carrier Ordered Dispatch"],
        de: ["Cost of Delivery", "Cash on Delivery (Nachnahme)", "Collect on Demand", "Carrier Ordered Dispatch"]
      },
      correctIndex: 1,
      explanation: {
        ro: "COD (Cash on Delivery) înseamnă plata la livrare - destinatarul plătește când primește marfa.",
        en: "COD (Cash on Delivery) means payment at delivery - the consignee pays when receiving the goods.",
        de: "COD (Cash on Delivery/Nachnahme) bedeutet Zahlung bei Lieferung - der Empfänger zahlt beim Erhalt der Waren."
      }
    },
    {
      question: {
        ro: "Care este cea mai bună practică pentru termenul de facturare?",
        en: "What is the best practice for invoicing timing?",
        de: "Was ist die Best Practice für den Rechnungsstellungszeitpunkt?"
      },
      options: {
        ro: ["La sfârșitul lunii", "În 48 de ore de la livrare", "După 2 săptămâni", "Când ne amintim"],
        en: ["End of month", "Within 48 hours of delivery", "After 2 weeks", "When we remember"],
        de: ["Monatsende", "Innerhalb von 48 Stunden nach Lieferung", "Nach 2 Wochen", "Wenn wir daran denken"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Cea mai bună practică este să facturați în 48 de ore de la livrare, atașând POD/CMR semnat pentru plată mai rapidă.",
        en: "Best practice is to invoice within 48 hours of delivery, attaching signed POD/CMR for faster payment.",
        de: "Best Practice ist die Rechnungsstellung innerhalb von 48 Stunden nach Lieferung mit unterschriebenem POD/CMR für schnellere Zahlung."
      }
    }
  ],
  "carrier-management": [
    {
      question: {
        ro: "Care este acoperirea minimă de asigurare CMR pe care ar trebui să o solicitați de la transportatori?",
        en: "What is the minimum CMR insurance coverage you should require from carriers?",
        de: "Was ist die Mindest-CMR-Versicherungsdeckung, die Sie von Frachtführern verlangen sollten?"
      },
      options: {
        ro: ["50.000 EUR", "100.000 EUR", "300.000+ EUR", "Nu este necesar un minim"],
        en: ["50,000 EUR", "100,000 EUR", "300,000+ EUR", "No minimum needed"],
        de: ["50.000 EUR", "100.000 EUR", "300.000+ EUR", "Kein Minimum erforderlich"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Solicitați asigurare CMR minimă de 300.000 EUR pentru marfă standard. Marfa de mare valoare poate necesita 500.000+ EUR.",
        en: "Require minimum 300,000 EUR CMR insurance for standard freight. High-value cargo may need 500,000+ EUR.",
        de: "Fordern Sie mindestens 300.000 EUR CMR-Versicherung für Standardfracht. Hochwertige Fracht kann 500.000+ EUR erfordern."
      }
    },
    {
      question: {
        ro: "Ce documente ar trebui să verificați la înregistrarea unui nou transportator?",
        en: "What documents should you verify when onboarding a new carrier?",
        de: "Welche Dokumente sollten Sie beim Onboarding eines neuen Frachtführers prüfen?"
      },
      options: {
        ro: ["Doar numele companiei", "Licență de transport, asigurare CMR, certificări, istoric", "Doar numărul de telefon", "Nimic nu e necesar"],
        en: ["Only company name", "Transport license, CMR insurance, certifications, track record", "Only phone number", "Nothing required"],
        de: ["Nur Firmenname", "Transportlizenz, CMR-Versicherung, Zertifizierungen, Erfolgsbilanz", "Nur Telefonnummer", "Nichts erforderlich"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Verificați: licența de transport validă, polița de asigurare CMR, certificări relevante și referințe/istoric.",
        en: "Verify: valid transport license, CMR insurance policy, relevant certifications, and references/track record.",
        de: "Überprüfen Sie: gültige Transportlizenz, CMR-Versicherungspolice, relevante Zertifizierungen und Referenzen/Erfolgsbilanz."
      }
    },
    {
      question: {
        ro: "Ce este dubla intermediere (double brokering)?",
        en: "What is double brokering?",
        de: "Was ist Doppelvermittlung?"
      },
      options: {
        ro: ["Rezervarea a două curse simultan", "Transportatorul subcontractează fără permisiune", "Folosirea a două burse de marfă", "Două contacte la un transportator"],
        en: ["Booking two loads at once", "Carrier subcontracts without permission", "Using two freight exchanges", "Having two contacts at one carrier"],
        de: ["Zwei Ladungen gleichzeitig buchen", "Frachtführer untervergibt ohne Erlaubnis", "Zwei Frachtbörsen nutzen", "Zwei Kontakte bei einem Frachtführer"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Dubla brokeraj este când un transportator subcontractează secret încărcătura dumneavoastră. Creează lacune de răspundere și pierderea controlului.",
        en: "Double brokering is when a carrier secretly subcontracts your load. It creates liability gaps and loss of control.",
        de: "Doppelvermittlung ist, wenn ein Frachtführer Ihre Ladung heimlich untervergibt. Es schafft Haftungslücken und Kontrollverlust."
      }
    }
  ],
  commercial: [
    {
      question: {
        ro: "Cu ce ar trebui să începeți când prezentați o ofertă unui client?",
        en: "What should you lead with when presenting a quote to a client?",
        de: "Womit sollten Sie bei der Präsentation eines Angebots an einen Kunden beginnen?"
      },
      options: {
        ro: ["Cel mai mic preț posibil", "Istoria companiei dumneavoastră", "Propunerea de valoare și calitatea serviciului", "Comparație cu concurenții"],
        en: ["The lowest price possible", "Your company history", "Value proposition and service quality", "Competitor comparison"],
        de: ["Der niedrigstmögliche Preis", "Ihre Firmengeschichte", "Wertversprechen und Servicequalität", "Wettbewerbervergleich"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Începeți cu valoarea - fiabilitate, tracking, suport - înainte de a discuta prețul. Clienții își amintesc calitatea serviciului.",
        en: "Lead with value - reliability, tracking, support - before discussing price. Clients remember service quality.",
        de: "Beginnen Sie mit dem Wert - Zuverlässigkeit, Tracking, Support - bevor Sie den Preis diskutieren. Kunden erinnern sich an die Servicequalität."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să includeți într-o ofertă comercială profesională?",
        en: "What should you include in a professional commercial quote?",
        de: "Was sollten Sie in ein professionelles Handelsangebot aufnehmen?"
      },
      options: {
        ro: ["Doar prețul", "Preț, valabilitate, scop serviciu, timp tranzit, termeni plată, excluderi", "Doar timpul de livrare", "Doar numele clientului"],
        en: ["Only price", "Price, validity, service scope, transit time, payment terms, exclusions", "Only delivery time", "Only customer name"],
        de: ["Nur Preis", "Preis, Gültigkeit, Leistungsumfang, Transitzeit, Zahlungsbedingungen, Ausschlüsse", "Nur Lieferzeit", "Nur Kundenname"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Ofertele complete includ preț, valabilitate, scop serviciu, timp de tranzit, termeni de plată și ce este exclus.",
        en: "Complete quotes include price, validity, service scope, transit time, payment terms, and what is excluded.",
        de: "Vollständige Angebote enthalten Preis, Gültigkeit, Leistungsumfang, Transitzeit, Zahlungsbedingungen und Ausschlüsse."
      }
    }
  ],
  kpi: [
    {
      question: {
        ro: "Care este o țintă bună de livrare la timp pentru transportul rutier?",
        en: "What is a good on-time delivery target for road freight?",
        de: "Was ist ein gutes Ziel für pünktliche Lieferung im Straßengüterverkehr?"
      },
      options: {
        ro: ["80%", "90%", "95%+", "100%"],
        en: ["80%", "90%", "95%+", "100%"],
        de: ["80%", "90%", "95%+", "100%"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Țintă 95%+ livrare la timp. Acest lucru este realizabil cu o planificare bună și demonstrează serviciu fiabil.",
        en: "Target 95%+ on-time delivery. This is achievable with good planning and demonstrates reliable service.",
        de: "Ziel 95%+ pünktliche Lieferung. Dies ist mit guter Planung erreichbar und zeigt zuverlässigen Service."
      }
    },
    {
      question: {
        ro: "Ce măsoară DSO în expediția de mărfuri?",
        en: "What does DSO measure in freight forwarding?",
        de: "Was misst DSO in der Spedition?"
      },
      options: {
        ro: ["Optimizarea Vitezei de Livrare", "Zile de Vânzări Restante", "Operațiuni de Siguranță a Șoferilor", "Ieșire Sistem de Dispecerat"],
        en: ["Delivery Speed Optimization", "Days Sales Outstanding", "Driver Safety Operations", "Dispatch System Output"],
        de: ["Liefergeschwindigkeitsoptimierung", "Außenstandstage", "Fahrersicherheitsoperationen", "Dispositionssystemausgabe"]
      },
      correctIndex: 1,
      explanation: {
        ro: "DSO (Zile de Vânzări Restante) măsoară zilele medii pentru încasarea plății. Țintă: sub 45 zile.",
        en: "DSO (Days Sales Outstanding) measures average days to collect payment. Target: under 45 days.",
        de: "DSO (Außenstandstage) misst die durchschnittlichen Tage bis zur Zahlungseinziehung. Ziel: unter 45 Tage."
      }
    },
    {
      question: {
        ro: "Ce este Rata de Rezoluție la Primul Contact?",
        en: "What is First Contact Resolution Rate?",
        de: "Was ist die Erstlösungsquote?"
      },
      options: {
        ro: ["Viteza primei livrări", "Procentajul problemelor rezolvate în prima interacțiune", "Timpul de răspuns la primul apel", "Timpul de răspuns al primului transportator"],
        en: ["Speed of first delivery", "Percentage of issues solved in first interaction", "Time to answer first call", "First carrier response time"],
        de: ["Geschwindigkeit der ersten Lieferung", "Prozentsatz der beim ersten Kontakt gelösten Probleme", "Zeit bis zur Beantwortung des ersten Anrufs", "Erste Frachtführer-Antwortzeit"]
      },
      correctIndex: 1,
      explanation: {
        ro: "FCR măsoară ce procentaj din problemele clienților sunt rezolvate în prima interacțiune. Țintă: peste 80%.",
        en: "FCR measures what percentage of customer issues are resolved in the first interaction. Target: over 80%.",
        de: "FCR misst, welcher Prozentsatz der Kundenprobleme bei der ersten Interaktion gelöst wird. Ziel: über 80%."
      }
    },
    {
      question: {
        ro: "Care este o țintă sănătoasă de marjă brută pentru expediția de mărfuri?",
        en: "What is a healthy gross margin target for freight forwarding?",
        de: "Was ist ein gesundes Bruttomargen-Ziel für die Spedition?"
      },
      options: {
        ro: ["2-5%", "8-15%", "25-30%", "50%+"],
        en: ["2-5%", "8-15%", "25-30%", "50%+"],
        de: ["2-5%", "8-15%", "25-30%", "50%+"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Ținta marja brută de 8-15% pentru marfă standard. Mai mare pentru servicii specializate, mai mică pentru contracte de volum mare.",
        en: "Target gross margin of 8-15% on standard freight. Higher for specialized services, lower for high-volume contracts.",
        de: "Ziel-Bruttomarge von 8-15% bei Standardfracht. Höher für spezialisierte Dienste, niedriger für Großvolumenverträge."
      }
    }
  ],
  "soft-skills": [
    {
      question: {
        ro: "Care este cea mai importantă abilitate când ai de-a face cu un client supărat?",
        en: "What is the most important skill when dealing with an angry client?",
        de: "Was ist die wichtigste Fähigkeit im Umgang mit einem verärgerten Kunden?"
      },
      options: {
        ro: ["Apărarea imediată", "Ascultare activă și empatie", "Transfer la manager", "Ignorarea preocupărilor lor"],
        en: ["Defending yourself immediately", "Active listening and empathy", "Transferring to manager", "Ignoring their concerns"],
        de: ["Sofortige Verteidigung", "Aktives Zuhören und Empathie", "Weiterleitung an Manager", "Ignorieren ihrer Bedenken"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Ascultarea activă arată respect și ajută la înțelegerea problemei reale. Lăsați-i să-și exprime frustrarea înainte de a răspunde.",
        en: "Active listening shows respect and helps understand the real issue. Let them express frustration before responding.",
        de: "Aktives Zuhören zeigt Respekt und hilft, das eigentliche Problem zu verstehen. Lassen Sie sie ihre Frustration ausdrücken, bevor Sie antworten."
      }
    },
    {
      question: {
        ro: "Cum ar trebui să prioritizați sarcinile când totul pare urgent?",
        en: "How should you prioritize tasks when everything seems urgent?",
        de: "Wie sollten Sie Aufgaben priorisieren, wenn alles dringend erscheint?"
      },
      options: {
        ro: ["Primul venit, primul servit", "Urgent ȘI important mai întâi, apoi doar important", "Doar ce cere șeful", "Selecție aleatorie"],
        en: ["First come, first served", "Urgent AND important first, then important only", "Only do what boss asks", "Random selection"],
        de: ["Wer zuerst kommt, mahlt zuerst", "Dringend UND wichtig zuerst, dann nur wichtig", "Nur tun, was der Chef fragt", "Zufällige Auswahl"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Folosiți Matricea Eisenhower: urgent+important mai întâi, apoi important-nu urgent, delegați sau eliminați restul.",
        en: "Use the Eisenhower Matrix: urgent+important first, then important-not-urgent, delegate or eliminate the rest.",
        de: "Verwenden Sie die Eisenhower-Matrix: dringend+wichtig zuerst, dann wichtig-nicht-dringend, delegieren oder eliminieren Sie den Rest."
      }
    },
    {
      question: {
        ro: "Care este cel mai bun mod de a transmite vești proaste unui client?",
        en: "What is the best way to deliver bad news to a client?",
        de: "Was ist der beste Weg, einem Kunden schlechte Nachrichten zu überbringen?"
      },
      options: {
        ro: ["Evitați să le spuneți", "Fiți onest, proactiv, oferiți soluții", "Dați vina pe transportator", "Așteptați până descoperă"],
        en: ["Avoid telling them", "Be honest, proactive, offer solutions", "Blame the carrier", "Wait until they discover it"],
        de: ["Vermeiden, es ihnen zu sagen", "Ehrlich sein, proaktiv, Lösungen anbieten", "Dem Frachtführer die Schuld geben", "Warten, bis sie es entdecken"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Comunicarea proactivă, onestă, cu opțiuni de soluții construiește încredere chiar și când transmiteți vești proaste.",
        en: "Proactive, honest communication with solution options builds trust even when delivering bad news.",
        de: "Proaktive, ehrliche Kommunikation mit Lösungsoptionen baut Vertrauen auf, auch bei schlechten Nachrichten."
      }
    }
  ],
  "europe-zones": [
    {
      question: {
        ro: "Care regiune are cele mai mari costuri MAUT (taxe rutiere) în Europa?",
        en: "Which region has the highest MAUT (toll) costs in Europe?",
        de: "Welche Region hat die höchsten MAUT-Kosten in Europa?"
      },
      options: {
        ro: ["Benelux", "ECE", "DACH (în special Germania/Austria)", "Scandinavia"],
        en: ["Benelux", "CEE", "DACH (especially Germany/Austria)", "Scandinavia"],
        de: ["Benelux", "MOE", "DACH (besonders Deutschland/Österreich)", "Skandinavien"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Regiunea DACH, în special Germania și Austria, are cele mai mari costuri de taxe rutiere per km în Europa.",
        en: "DACH region, particularly Germany and Austria, has the highest toll costs per km in Europe.",
        de: "Die DACH-Region, insbesondere Deutschland und Österreich, hat die höchsten Mautkosten pro km in Europa."
      }
    },
    {
      question: {
        ro: "Ce caracterizează piața de transport BENELUX?",
        en: "What characterizes the BENELUX transport market?",
        de: "Was charakterisiert den BENELUX-Transportmarkt?"
      },
      options: {
        ro: ["Acces dificil", "Infrastructură excelentă, porturi majore, densitate mare de centre de distribuție", "Volume limitate de marfă", "Fără drumuri cu taxă"],
        en: ["Difficult access", "Excellent infrastructure, major ports, high distribution center density", "Limited freight volumes", "No toll roads"],
        de: ["Schwieriger Zugang", "Hervorragende Infrastruktur, große Häfen, hohe Logistikzentrendichte", "Begrenzte Frachtvolumen", "Keine Mautstraßen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Benelux are infrastructură excelentă, porturile Rotterdam/Antwerp și densitate foarte mare de depozite/centre de distribuție.",
        en: "Benelux has excellent infrastructure, Rotterdam/Antwerp ports, and very high warehouse/DC density.",
        de: "Benelux hat hervorragende Infrastruktur, die Häfen Rotterdam/Antwerpen und sehr hohe Lager-/Logistikzentrendichte."
      }
    },
    {
      question: {
        ro: "Ce considerație specială se aplică transportului UK post-Brexit?",
        en: "What special consideration applies to UK transport post-Brexit?",
        de: "Welche besondere Berücksichtigung gilt für UK-Transport nach dem Brexit?"
      },
      options: {
        ro: ["Nimic nu s-a schimbat", "GVMS/GMR necesar, declarații vamale necesare", "Nu sunt permise camioane", "Doar feriboturi disponibile"],
        en: ["Nothing changed", "GVMS/GMR required, customs clearance needed", "No trucks allowed", "Only ferries available"],
        de: ["Nichts geändert", "GVMS/GMR erforderlich, Zollabfertigung nötig", "Keine LKW erlaubt", "Nur Fähren verfügbar"]
      },
      correctIndex: 1,
      explanation: {
        ro: "UK post-Brexit necesită înregistrare GVMS, coduri GMR și declarații vamale pentru toate mișcările de mărfuri.",
        en: "Post-Brexit UK requires GVMS registration, GMR codes, and customs declarations for all goods movements.",
        de: "UK nach dem Brexit erfordert GVMS-Registrierung, GMR-Codes und Zollerklärungen für alle Warenbewegungen."
      }
    }
  ],
  incoterms: [
    {
      question: {
        ro: "Conform FCA Incoterms 2020, când se transferă riscul cumpărătorului?",
        en: "Under FCA Incoterms 2020, when does risk transfer to the buyer?",
        de: "Wann geht das Risiko gemäß FCA Incoterms 2020 auf den Käufer über?"
      },
      options: {
        ro: ["La ușa vânzătorului", "Când mărfurile sunt predate transportatorului", "La destinație", "După vămuire"],
        en: ["At seller door", "When goods are handed to the carrier", "At destination", "After customs clearance"],
        de: ["An der Tür des Verkäufers", "Wenn Waren dem Frachtführer übergeben werden", "Am Bestimmungsort", "Nach Zollabfertigung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Conform FCA, riscul se transferă când mărfurile sunt livrate transportatorului sau persoanei nominalizate la locul specificat.",
        en: "Under FCA, risk transfers when goods are delivered to the carrier or nominated person at the named place.",
        de: "Unter FCA geht das Risiko über, wenn Waren dem Frachtführer oder der benannten Person am genannten Ort übergeben werden."
      }
    },
    {
      question: {
        ro: "Care Incoterm pune obligația maximă pe vânzător?",
        en: "Which Incoterm places maximum obligation on the seller?",
        de: "Welcher Incoterm legt die maximale Verpflichtung auf den Verkäufer?"
      },
      options: {
        ro: ["EXW", "FCA", "DAP", "DDP"],
        en: ["EXW", "FCA", "DAP", "DDP"],
        de: ["EXW", "FCA", "DAP", "DDP"]
      },
      correctIndex: 3,
      explanation: {
        ro: "DDP (Livrat cu Taxe Plătite) pune obligația maximă pe vânzător, inclusiv tot transportul, asigurarea și taxele de import.",
        en: "DDP (Delivered Duty Paid) places maximum obligation on seller including all transport, insurance, and import duties.",
        de: "DDP (Geliefert verzollt) legt die maximale Verpflichtung auf den Verkäufer, einschließlich aller Transport-, Versicherungs- und Einfuhrabgaben."
      }
    },
    {
      question: {
        ro: "Pot fi folosite FOB și CIF pentru transportul rutier?",
        en: "Can FOB and CIF be used for road freight?",
        de: "Können FOB und CIF für Straßenfracht verwendet werden?"
      },
      options: {
        ro: ["Da, orice mod de transport", "Nu, sunt doar pentru transport maritim/fluvial", "Doar cu permisiune specială", "Da, dar doar în UE"],
        en: ["Yes, any transport mode", "No, they are for sea/inland waterway only", "Only with special permission", "Yes, but only in EU"],
        de: ["Ja, jede Transportart", "Nein, sie sind nur für See-/Binnenschifffahrt", "Nur mit Sondergenehmigung", "Ja, aber nur in der EU"]
      },
      correctIndex: 1,
      explanation: {
        ro: "FOB, FAS, CFR și CIF sunt exclusiv pentru transport maritim și pe căi navigabile interioare. Folosiți FCA/DAP pentru transport rutier.",
        en: "FOB, FAS, CFR, and CIF are exclusively for sea and inland waterway transport. Use FCA/DAP for road freight.",
        de: "FOB, FAS, CFR und CIF sind ausschließlich für See- und Binnenschifffahrt. Verwenden Sie FCA/DAP für Straßenfracht."
      }
    }
  ],
  technology: [
    {
      question: {
        ro: "Care este scopul principal al unui TMS (Sistem de Management al Transportului)?",
        en: "What is the main purpose of a TMS (Transport Management System)?",
        de: "Was ist der Hauptzweck eines TMS (Transport Management System)?"
      },
      options: {
        ro: ["Doar urmărirea vehiculelor", "Managementul centralizat al comenzilor, transportatorilor, tracking și facturare", "Doar pentru facturare", "Doar comunicare cu șoferii"],
        en: ["Only tracking vehicles", "Centralized management of orders, carriers, tracking, and invoicing", "Just for invoicing", "Driver communication only"],
        de: ["Nur Fahrzeugverfolgung", "Zentralisiertes Management von Aufträgen, Frachtführern, Tracking und Rechnungsstellung", "Nur für Rechnungsstellung", "Nur Fahrerkommunikation"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Un TMS integrează toate operațiunile de transport: managementul comenzilor, rezervarea transportatorilor, tracking, documentație și facturare.",
        en: "A TMS integrates all transport operations: order management, carrier booking, tracking, documentation, and billing.",
        de: "Ein TMS integriert alle Transportoperationen: Auftragsverwaltung, Frachtführerbuchung, Tracking, Dokumentation und Abrechnung."
      }
    },
    {
      question: {
        ro: "Ce oferă telematica GPS pe lângă locația de bază?",
        en: "What does GPS telematics provide beyond basic location?",
        de: "Was bietet GPS-Telematik über den Basisstandort hinaus?"
      },
      options: {
        ro: ["Nimic extra", "Date despre vehicul cum ar fi viteza, combustibilul, comportamentul șoferului și diagnosticare", "Doar istoric locație", "Informații meteo"],
        en: ["Nothing extra", "Vehicle data like speed, fuel, driver behavior, and diagnostics", "Only location history", "Weather information"],
        de: ["Nichts Extra", "Fahrzeugdaten wie Geschwindigkeit, Kraftstoff, Fahrerverhalten und Diagnose", "Nur Standortverlauf", "Wetterinformationen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Telematica combină GPS cu senzori ai vehiculului pentru a furniza viteza, consumul de combustibil, stilul de condus și diagnosticare.",
        en: "Telematics combines GPS with vehicle sensors to provide speed, fuel consumption, driving style, and diagnostics.",
        de: "Telematik kombiniert GPS mit Fahrzeugsensoren, um Geschwindigkeit, Kraftstoffverbrauch, Fahrstil und Diagnose bereitzustellen."
      }
    },
    {
      question: {
        ro: "Care este rolul AI în expediția modernă de mărfuri?",
        en: "What is the role of AI in modern freight forwarding?",
        de: "Was ist die Rolle von KI in der modernen Spedition?"
      },
      options: {
        ro: ["Înlocuirea tuturor expeditorilor", "Augmentarea deciziilor cu predicția ratelor, prognoza ETA, detectarea anomaliilor", "Nicio utilizare practică încă", "Doar pentru companii mari"],
        en: ["Replacing all forwarders", "Augmenting decisions with rate prediction, ETA forecasting, anomaly detection", "No practical use yet", "Only for large companies"],
        de: ["Alle Spediteure ersetzen", "Entscheidungen mit Ratenvorhersage, ETA-Prognose, Anomalieerkennung unterstützen", "Noch keine praktische Anwendung", "Nur für große Unternehmen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "AI ajută la optimizarea ratelor, ETA-uri precise, prognoza cererii și identificarea riscurilor - îmbunătățind deciziile umane.",
        en: "AI assists with rate optimization, accurate ETAs, demand forecasting, and identifying risks - enhancing human decisions.",
        de: "KI unterstützt bei Ratenoptimierung, präzisen ETAs, Bedarfsprognosen und Risikoerkennung - menschliche Entscheidungen verbessernd."
      }
    }
  ],
  "supply-chain": [
    {
      question: {
        ro: "Ce este logistica JIT (Just-in-Time)?",
        en: "What is JIT (Just-in-Time) logistics?",
        de: "Was ist JIT (Just-in-Time) Logistik?"
      },
      options: {
        ro: ["Livrare cât mai rapidă posibil", "Materialele ajung exact când sunt necesare pentru a minimiza stocurile", "Stoc suplimentar mereu", "Doar livrare în aceeași zi"],
        en: ["Delivering as fast as possible", "Materials arriving exactly when needed to minimize inventory", "Having extra stock always", "Same-day delivery only"],
        de: ["So schnell wie möglich liefern", "Materialien treffen genau dann ein, wenn sie benötigt werden, um Lagerbestände zu minimieren", "Immer Extrabestand haben", "Nur Lieferung am selben Tag"]
      },
      correctIndex: 1,
      explanation: {
        ro: "JIT înseamnă că componentele ajung exact când sunt necesare pentru producție, minimizând costurile de stoc dar necesitând transport fiabil.",
        en: "JIT means components arrive precisely when needed for production, minimizing inventory costs but requiring reliable transport.",
        de: "JIT bedeutet, dass Komponenten genau dann ankommen, wenn sie für die Produktion benötigt werden, was Lagerkosten minimiert, aber zuverlässigen Transport erfordert."
      }
    },
    {
      question: {
        ro: "Ce performanță de punctualitate este de obicei necesară pentru operațiunile JIT?",
        en: "What on-time performance is typically required for JIT operations?",
        de: "Welche Pünktlichkeitsleistung ist typischerweise für JIT-Operationen erforderlich?"
      },
      options: {
        ro: ["80%", "90%", "99%+", "Orice este acceptabil"],
        en: ["80%", "90%", "99%+", "Any is acceptable"],
        de: ["80%", "90%", "99%+", "Alles ist akzeptabel"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Operațiunile JIT necesită 99%+ livrare la timp deoarece întârzierile opresc direct liniile de producție.",
        en: "JIT operations require 99%+ on-time delivery as delays directly stop production lines.",
        de: "JIT-Operationen erfordern 99%+ pünktliche Lieferung, da Verzögerungen die Produktionslinien direkt stoppen."
      }
    },
    {
      question: {
        ro: "Ce este cross-docking-ul?",
        en: "What is cross-docking?",
        de: "Was ist Cross-Docking?"
      },
      options: {
        ro: ["Depozitare pe termen lung", "Transfer direct între transporturi de intrare și ieșire cu stocare minimă", "Producție", "Doar procesarea retururilor"],
        en: ["Long-term storage", "Direct transfer between inbound and outbound vehicles with minimal storage", "Manufacturing", "Returns processing only"],
        de: ["Langzeitlagerung", "Direkter Transfer zwischen eingehenden und ausgehenden Fahrzeugen mit minimaler Lagerung", "Fertigung", "Nur Retourenbearbeitung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Cross-docking-ul transferă mărfurile direct între vehicule de transport, minimizând timpul de stocare și manipulare.",
        en: "Cross-docking transfers goods directly between transport vehicles, minimizing storage time and handling.",
        de: "Cross-Docking transferiert Waren direkt zwischen Transportfahrzeugen und minimiert Lagerzeit und Handhabung."
      }
    }
  ],
  negotiation: [
    {
      question: {
        ro: "Care este cel mai bun rezultat în negocierea de afaceri?",
        en: "What is the best outcome in business negotiation?",
        de: "Was ist das beste Ergebnis bei Geschäftsverhandlungen?"
      },
      options: {
        ro: ["Câștigarea tuturor", "Win-win unde ambele părți beneficiază", "Cealaltă parte pierde", "Orice rezultat"],
        en: ["Winning everything", "Win-win where both parties benefit", "Other party loses", "Any outcome"],
        de: ["Alles gewinnen", "Win-win, bei dem beide Parteien profitieren", "Die andere Partei verliert", "Jedes Ergebnis"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Win-win creează relații sustenabile. Dacă o parte pierde grav, nu vor dori să lucreze cu tine din nou.",
        en: "Win-win creates sustainable relationships. If one party loses badly, they will not want to work with you again.",
        de: "Win-win schafft nachhaltige Beziehungen. Wenn eine Partei schlecht verliert, wird sie nicht wieder mit Ihnen arbeiten wollen."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să oferiți transportatorilor în schimbul unor tarife mai bune?",
        en: "What should you offer carriers in exchange for better rates?",
        de: "Was sollten Sie Frachtführern im Austausch für bessere Preise anbieten?"
      },
      options: {
        ro: ["Nimic, doar cereți prețuri mai mici", "Volum, plată fiabilă, încărcături de retur, flexibilitate", "Amenințări cu utilizarea concurenților", "Promisiuni goale"],
        en: ["Nothing, just demand lower prices", "Volume, reliable payment, backloads, flexibility", "Threats to use competitors", "Empty promises"],
        de: ["Nichts, einfach niedrigere Preise fordern", "Volumen, zuverlässige Zahlung, Rückfrachten, Flexibilität", "Drohungen, Wettbewerber zu nutzen", "Leere Versprechungen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Oferiți valoare: volum consistent, plată rapidă, ajutor cu încărcături de retur, timpi de încărcare rezonabili.",
        en: "Offer value: consistent volume, quick payment, help with return loads, reasonable loading times.",
        de: "Bieten Sie Wert: konsistentes Volumen, schnelle Zahlung, Hilfe bei Rückfrachten, angemessene Ladezeiten."
      }
    },
    {
      question: {
        ro: "Când ar trebui să vă retrageți dintr-o negociere?",
        en: "When should you walk away from a negotiation?",
        de: "Wann sollten Sie von einer Verhandlung weggehen?"
      },
      options: {
        ro: ["Niciodată - faceți întotdeauna o afacere", "Când termenii sunt mai proști decât BATNA sau sub marjele acceptabile", "La primul dezacord", "Doar dacă sunt nepoliticoși"],
        en: ["Never - always make a deal", "When terms are worse than your BATNA or below acceptable margins", "At first disagreement", "Only if they are rude"],
        de: ["Nie - immer einen Deal machen", "Wenn die Bedingungen schlechter als Ihr BATNA oder unter akzeptablen Margen sind", "Bei erster Meinungsverschiedenheit", "Nur wenn sie unhöflich sind"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Retrageți-vă când termenii sunt inacceptabili sau mai proști decât alternativele. Disponibilitatea de a vă retrage vă întărește poziția.",
        en: "Walk away when terms are unacceptable or worse than alternatives. Willingness to walk strengthens your position.",
        de: "Gehen Sie weg, wenn die Bedingungen inakzeptabel oder schlechter als Alternativen sind. Die Bereitschaft zu gehen stärkt Ihre Position."
      }
    }
  ],
  exchanges: [
    {
      question: {
        ro: "Care platformă oferă o Garanție de Plată susținută de Coface?",
        en: "Which platform offers a Coface-backed Payment Guarantee?",
        de: "Welche Plattform bietet eine Coface-gestützte Zahlungsgarantie?"
      },
      options: {
        ro: ["TIMOCOM", "Trans.eu", "Teleroute", "Transporeon"],
        en: ["TIMOCOM", "Trans.eu", "Teleroute", "Transporeon"],
        de: ["TIMOCOM", "Trans.eu", "Teleroute", "Transporeon"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Teleroute oferă o Garanție de Plată susținută de asigurarea Coface pentru securitate suplimentară a plății.",
        en: "Teleroute offers a Payment Guarantee backed by Coface insurance for added payment security.",
        de: "Teleroute bietet eine Zahlungsgarantie, die durch Coface-Versicherung für zusätzliche Zahlungssicherheit gestützt wird."
      }
    },
    {
      question: {
        ro: "Care bursă de mărfuri este cea mai puternică în Europa Centrală/Est?",
        en: "Which freight exchange is strongest in Central/Eastern Europe?",
        de: "Welche Frachtbörse ist am stärksten in Mittel-/Osteuropa?"
      },
      options: {
        ro: ["TIMOCOM", "Trans.eu", "Teleroute", "Transporeon"],
        en: ["TIMOCOM", "Trans.eu", "Teleroute", "Transporeon"],
        de: ["TIMOCOM", "Trans.eu", "Teleroute", "Transporeon"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Trans.eu are o rețea verificată puternică în țările ECE/UE cu funcții precum scorul TransRisk.",
        en: "Trans.eu has a strong verified network in CEE/EU countries with features like TransRisk scoring.",
        de: "Trans.eu hat ein starkes verifiziertes Netzwerk in MOE/EU-Ländern mit Funktionen wie TransRisk-Scoring."
      }
    },
    {
      question: {
        ro: "Care este puterea principală de piață a TIMOCOM?",
        en: "What is TIMOCOM primary market strength?",
        de: "Was ist TIMOCOMs primäre Marktstärke?"
      },
      options: {
        ro: ["Europa de Sud", "Regiunea DACH și Europa de Vest", "Doar UK", "Scandinavia"],
        en: ["Southern Europe", "DACH region and Western Europe", "UK only", "Scandinavia"],
        de: ["Südeuropa", "DACH-Region und Westeuropa", "Nur UK", "Skandinavien"]
      },
      correctIndex: 1,
      explanation: {
        ro: "TIMOCOM este cel mai puternic în DACH (Germania, Austria, Elveția) și piețele din Europa de Vest.",
        en: "TIMOCOM is strongest in DACH (Germany, Austria, Switzerland) and Western European markets.",
        de: "TIMOCOM ist am stärksten in DACH (Deutschland, Österreich, Schweiz) und westeuropäischen Märkten."
      }
    }
  ],
  clients: [
    {
      question: {
        ro: "Care este cel mai important factor când abordați un nou client potențial?",
        en: "What is the most important factor when approaching a new potential client?",
        de: "Was ist der wichtigste Faktor bei der Ansprache eines neuen potenziellen Kunden?"
      },
      options: {
        ro: ["Cel mai mic preț", "Propunerea de valoare și fiabilitate", "Cea mai mare flotă", "Cel mai lung istoric al companiei"],
        en: ["Lowest price", "Value proposition and reliability", "Largest fleet size", "Longest company history"],
        de: ["Niedrigster Preis", "Wertversprechen und Zuverlässigkeit", "Größte Flotte", "Längste Firmengeschichte"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Începeți cu valoarea (calitatea serviciului, fiabilitatea, tracking) înainte de a discuta prețul. Clienții își amintesc serviciul, nu doar costul.",
        en: "Lead with value (service quality, reliability, tracking) before discussing price. Clients remember service, not just cost.",
        de: "Führen Sie mit Wert (Servicequalität, Zuverlässigkeit, Tracking) bevor Sie den Preis diskutieren. Kunden erinnern sich an den Service, nicht nur an die Kosten."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să faceți întotdeauna înainte de a acorda credit unui client nou?",
        en: "What should you always do before extending credit to a new customer?",
        de: "Was sollten Sie immer tun, bevor Sie einem neuen Kunden Kredit gewähren?"
      },
      options: {
        ro: ["Nimic nu e necesar", "Verificați rating-ul de credit și referințele comerciale", "Cereți doar plată în avans", "Aveți încredere în cuvântul lor"],
        en: ["Nothing needed", "Check credit rating and trade references", "Only ask for prepayment", "Trust their word"],
        de: ["Nichts nötig", "Kreditbewertung und Handelsreferenzen prüfen", "Nur Vorauszahlung verlangen", "Ihrem Wort vertrauen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Verificați întotdeauna bonitatea prin agenții de rating (Creditsafe, D&B) și solicitați referințe comerciale înainte de a oferi termeni de plată.",
        en: "Always verify creditworthiness through rating agencies (Creditsafe, D&B) and request trade references before offering payment terms.",
        de: "Überprüfen Sie immer die Kreditwürdigkeit über Ratingagenturen (Creditsafe, D&B) und fordern Sie Handelsreferenzen an, bevor Sie Zahlungsbedingungen anbieten."
      }
    },
    {
      question: {
        ro: "Care clienți ar trebui să primească cea mai mare atenție pentru dezvoltarea afacerii?",
        en: "Which clients should receive most of your business development attention?",
        de: "Welche Kunden sollten die meiste Aufmerksamkeit für die Geschäftsentwicklung erhalten?"
      },
      options: {
        ro: ["Toți clienții în mod egal", "Segmentele Strategice (A) și În Creștere (B)", "Doar cei mai mari clienți", "Doar prospecții noi"],
        en: ["All clients equally", "Strategic (A) and Growing (B) segments", "Only the largest clients", "Only new prospects"],
        de: ["Alle Kunden gleich", "Strategische (A) und wachsende (B) Segmente", "Nur die größten Kunden", "Nur neue Interessenten"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Concentrați 80% din timpul de dezvoltare pe clienții A (strategici) și B (în creștere). Ei oferă cel mai bun randament al investiției în relații.",
        en: "Focus 80% of BD time on A (strategic) and B (growing) clients. They offer the best return on relationship investment.",
        de: "Konzentrieren Sie 80% der BD-Zeit auf A (strategische) und B (wachsende) Kunden. Sie bieten die beste Rendite für Beziehungsinvestitionen."
      }
    },
    {
      question: {
        ro: "Când ar trebui să notificați un client despre o întârziere la livrare?",
        en: "When should you notify a client about a delivery delay?",
        de: "Wann sollten Sie einen Kunden über eine Lieferverzögerung informieren?"
      },
      options: {
        ro: ["După livrare", "Când întreabă", "Imediat ce știți (ASAP)", "Niciodată - sperați că se rezolvă"],
        en: ["After delivery", "When they ask", "As soon as you know (ASAP)", "Never - hope it works out"],
        de: ["Nach der Lieferung", "Wenn sie fragen", "Sobald Sie es wissen (ASAP)", "Nie - hoffen, dass es klappt"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Comunicarea proactivă este esențială. Notificați clienții imediat despre întârzieri - veștile proaste vin mai bine de la dumneavoastră decât descoperite de ei.",
        en: "Proactive communication is essential. Notify clients about delays immediately - bad news travels better from you than discovered by them.",
        de: "Proaktive Kommunikation ist unerlässlich. Informieren Sie Kunden sofort über Verzögerungen - schlechte Nachrichten kommen besser von Ihnen als wenn sie sie selbst entdecken."
      }
    }
  ],
  translogica: [
    {
      question: {
        ro: "Unde înregistrați un client nou în Translogica?",
        en: "Where do you register a new client in Translogica?",
        de: "Wo registrieren Sie einen neuen Kunden in Translogica?"
      },
      options: {
        ro: ["Comenzi - Client Nou", "Date de Bază - Adrese - Nou", "Setări - Clienți", "Panou - Adaugă"],
        en: ["Orders - New Client", "Master Data - Addresses - New", "Settings - Clients", "Dashboard - Add"],
        de: ["Aufträge - Neuer Kunde", "Stammdaten - Adressen - Neu", "Einstellungen - Kunden", "Dashboard - Hinzufügen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Clienții noi sunt înregistrați prin Date de Bază - Adrese - Nou, apoi bifați căsuța Client.",
        en: "New clients are registered via Master Data - Addresses - New, then tick the Customer checkbox.",
        de: "Neue Kunden werden über Stammdaten - Adressen - Neu registriert, dann das Kunden-Kontrollkästchen ankreuzen."
      }
    },
    {
      question: {
        ro: "Pentru ce este folosit Dispoplan în Translogica?",
        en: "What is the Dispoplan used for in Translogica?",
        de: "Wofür wird der Dispoplan in Translogica verwendet?"
      },
      options: {
        ro: ["Doar facturare", "Planificarea dispeceratului cu drag/drop", "Gestionarea emailurilor", "Generarea rapoartelor"],
        en: ["Invoicing only", "Dispatch planning with drag/drop", "Email management", "Report generation"],
        de: ["Nur Rechnungsstellung", "Dispositionsplanung mit Drag/Drop", "E-Mail-Verwaltung", "Berichtserstellung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Dispoplan este modulul de planificare a dispeceratului pentru atribuirea comenzilor la camioane prin drag/drop și monitorizarea vehiculelor.",
        en: "Dispoplan is the dispatch planning module for drag/drop order assignment to trucks and monitoring vehicles.",
        de: "Dispoplan ist das Dispositionsplanungsmodul für Drag/Drop-Auftragszuweisung an LKWs und Fahrzeugüberwachung."
      }
    },
    {
      question: {
        ro: "Unde creați o nouă comandă de transport în Translogica?",
        en: "Where do you create a new transport order in Translogica?",
        de: "Wo erstellen Sie einen neuen Transportauftrag in Translogica?"
      },
      options: {
        ro: ["Date de Bază - Comenzi", "Comenzi - Comandă Nouă (scurtătură F3)", "Setări - Transport", "Panou - Creează"],
        en: ["Master Data - Orders", "Orders - New Order (F3 shortcut)", "Settings - Transport", "Dashboard - Create"],
        de: ["Stammdaten - Aufträge", "Aufträge - Neuer Auftrag (F3-Tastenkürzel)", "Einstellungen - Transport", "Dashboard - Erstellen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Comenzile noi sunt create prin Comenzi - Comandă Nouă. Scurtătura F3 oferă acces rapid.",
        en: "New orders are created via Orders - New Order. The F3 keyboard shortcut provides quick access.",
        de: "Neue Aufträge werden über Aufträge - Neuer Auftrag erstellt. Die F3-Tastenkombination bietet schnellen Zugriff."
      }
    }
  ],
  "red-flags": [
    {
      question: {
        ro: "De ce ar trebui să fiți atent cu rutele franceze ieftine?",
        en: "Why should you be careful with cheap French lanes?",
        de: "Warum sollten Sie bei günstigen französischen Strecken vorsichtig sein?"
      },
      options: {
        ro: ["Șoferii francezi sunt nesiguri", "Franța are drumuri cu taxe scumpe", "Timpii de încărcare sunt lungi", "Niciun motiv"],
        en: ["French drivers are unreliable", "France has expensive toll roads", "Loading times are long", "No reason"],
        de: ["Französische Fahrer sind unzuverlässig", "Frankreich hat teure Mautstraßen", "Ladezeiten sind lang", "Kein Grund"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Franța are drumuri cu taxe scumpe. Calculați întotdeauna costurile complete de taxe înainte de a accepta tarife aparent atractive.",
        en: "France has expensive toll roads. Always calculate full toll costs before accepting seemingly attractive rates.",
        de: "Frankreich hat teure Mautstraßen. Berechnen Sie immer die vollen Mautkosten, bevor Sie scheinbar attraktive Preise akzeptieren."
      }
    },
    {
      question: {
        ro: "Care este regula de aur pentru documentație?",
        en: "What is the golden rule for documentation?",
        de: "Was ist die goldene Regel für Dokumentation?"
      },
      options: {
        ro: ["Documentați doar problemele", "Fotografie + Timestamp = Protecție", "Păstrați doar CMR-urile", "Documentația minimă este cea mai bună"],
        en: ["Document only problems", "Photo + Timestamp = Protection", "Only keep CMRs", "Minimal paperwork is best"],
        de: ["Nur Probleme dokumentieren", "Foto + Zeitstempel = Schutz", "Nur CMRs aufbewahren", "Minimaler Papierkram ist am besten"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Documentați întotdeauna cu fotografii cu timestamp. Fără documentație, nu aveți nicio apărare în dispute.",
        en: "Always document with timestamped photos. Without documentation, you have no defense in disputes.",
        de: "Dokumentieren Sie immer mit Zeitstempel-Fotos. Ohne Dokumentation haben Sie keine Verteidigung bei Streitigkeiten."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să vă alerteze despre o potențială fraudă a transportatorului?",
        en: "What should alert you to potential carrier fraud?",
        de: "Was sollte Sie auf potenziellen Frachtführerbetrug aufmerksam machen?"
      },
      options: {
        ro: ["Website profesional", "Companie foarte nouă care oferă tarife semnificativ sub piață", "Certificate de asigurare valide", "Rating-uri bune pe bursă"],
        en: ["Professional website", "Very new company offering significantly below-market rates", "Valid insurance certificates", "Good exchange ratings"],
        de: ["Professionelle Website", "Sehr neues Unternehmen mit deutlich unter dem Markt liegenden Preisen", "Gültige Versicherungszertifikate", "Gute Börsenbewertungen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Companiile noi fără istoric care oferă tarife neobișnuit de mici prezintă risc ridicat de fraudă sau servicii slabe.",
        en: "New companies with no track record offering unusually low rates are high-risk for fraud or poor service.",
        de: "Neue Unternehmen ohne Erfolgsbilanz, die ungewöhnlich niedrige Preise anbieten, haben ein hohes Betrugs- oder Schlechtleistungsrisiko."
      }
    }
  ],
  emergency: [
    {
      question: {
        ro: "Care este numărul european de urgență care funcționează în toate țările UE?",
        en: "What is the European emergency number that works in all EU countries?",
        de: "Was ist die europäische Notrufnummer, die in allen EU-Ländern funktioniert?"
      },
      options: {
        ro: ["911", "999", "112", "100"],
        en: ["911", "999", "112", "100"],
        de: ["911", "999", "112", "100"]
      },
      correctIndex: 2,
      explanation: {
        ro: "112 este numărul european universal de urgență pentru poliție, ambulanță și pompieri în toate țările UE.",
        en: "112 is the universal European emergency number for police, ambulance, and fire services in all EU countries.",
        de: "112 ist die universelle europäische Notrufnummer für Polizei, Krankenwagen und Feuerwehr in allen EU-Ländern."
      }
    },
    {
      question: {
        ro: "La ce distanță în spatele vehiculului ar trebui să plasați triunghiul de avertizare pe autostradă?",
        en: "How far behind the vehicle should you place a warning triangle on a highway?",
        de: "Wie weit hinter dem Fahrzeug sollten Sie ein Warndreieck auf einer Autobahn aufstellen?"
      },
      options: {
        ro: ["50m", "100-200m", "300m", "500m"],
        en: ["50m", "100-200m", "300m", "500m"],
        de: ["50m", "100-200m", "300m", "500m"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Triunghiurile de avertizare trebuie plasate la 100-200m în spatele vehiculului pe autostrăzi pentru a da traficului suficient timp de avertizare.",
        en: "Warning triangles should be placed 100-200m behind the vehicle on highways to give approaching traffic adequate warning.",
        de: "Warndreiecke sollten auf Autobahnen 100-200m hinter dem Fahrzeug aufgestellt werden, um dem herannahenden Verkehr ausreichend Warnung zu geben."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să faceți mai întâi când descoperiți daune la marfă?",
        en: "What should you do first when discovering cargo damage?",
        de: "Was sollten Sie zuerst tun, wenn Sie Frachtschäden entdecken?"
      },
      options: {
        ro: ["Continuați livrarea normal", "Faceți fotografii detaliate cu timestamp", "Sunați imediat poliția", "Aruncați mărfurile deteriorate"],
        en: ["Continue delivery normally", "Take detailed photos with timestamps", "Call the police immediately", "Throw away damaged goods"],
        de: ["Lieferung normal fortsetzen", "Detaillierte Fotos mit Zeitstempel machen", "Sofort die Polizei rufen", "Beschädigte Waren wegwerfen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Documentați întotdeauna daunele cu fotografii cu timestamp mai întâi. NU semnați un POD curat dacă marfa este deteriorată.",
        en: "Always document damage with timestamped photos first. Do NOT sign a clean POD if cargo is damaged.",
        de: "Dokumentieren Sie Schäden immer zuerst mit Zeitstempel-Fotos. Unterschreiben Sie KEINEN sauberen POD, wenn die Fracht beschädigt ist."
      }
    }
  ],
  fleet: [
    {
      question: {
        ro: "Care este un beneficiu cheie al urmăririi GPS a flotei?",
        en: "What is a key benefit of GPS fleet tracking?",
        de: "Was ist ein wichtiger Vorteil der GPS-Flottenverfolgung?"
      },
      options: {
        ro: ["Util doar pentru furt", "Vizibilitate în timp real și ETA-uri precise", "Crește consumul de combustibil", "Încetinește operațiunile"],
        en: ["Only useful for theft", "Real-time visibility and accurate ETAs", "Increases fuel consumption", "Slows down operations"],
        de: ["Nur nützlich bei Diebstahl", "Echtzeit-Sichtbarkeit und genaue ETAs", "Erhöht den Kraftstoffverbrauch", "Verlangsamt den Betrieb"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Urmărirea GPS oferă locația vehiculului în timp real, calcule ETA precise și vizibilitate operațională.",
        en: "GPS tracking provides real-time vehicle location, accurate ETA calculations, and operational visibility.",
        de: "GPS-Tracking bietet Echtzeit-Fahrzeugstandort, genaue ETA-Berechnungen und operative Sichtbarkeit."
      }
    },
    {
      question: {
        ro: "Care este rata țintă tipică pentru utilizarea vehiculelor?",
        en: "What is a typical target for vehicle utilization rate?",
        de: "Was ist ein typisches Ziel für die Fahrzeugauslastung?"
      },
      options: {
        ro: ["50-60%", "65-75%", "85-95%", "100%"],
        en: ["50-60%", "65-75%", "85-95%", "100%"],
        de: ["50-60%", "65-75%", "85-95%", "100%"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Rata țintă de utilizare a vehiculelor este de obicei 85-95%. 100% este nerealist din cauza întreținerii, weekendurilor și repoziționării.",
        en: "Target vehicle utilization is typically 85-95%. 100% is unrealistic due to maintenance, weekends, and repositioning.",
        de: "Die Zielfahrzeugauslastung liegt typischerweise bei 85-95%. 100% ist unrealistisch aufgrund von Wartung, Wochenenden und Repositionierung."
      }
    },
    {
      question: {
        ro: "Care este consumul tipic de combustibil pentru camioane pe distanțe lungi?",
        en: "What fuel consumption is typical for long-haul trucks?",
        de: "Welcher Kraftstoffverbrauch ist für Fernverkehrs-LKW typisch?"
      },
      options: {
        ro: ["15-20 l/100km", "28-32 l/100km", "45-55 l/100km", "60-70 l/100km"],
        en: ["15-20 l/100km", "28-32 l/100km", "45-55 l/100km", "60-70 l/100km"],
        de: ["15-20 l/100km", "28-32 l/100km", "45-55 l/100km", "60-70 l/100km"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Camioanele pe distanțe lungi consumă de obicei 28-32 litri la 100km. Rutele regionale și de distribuție consumă mai mult.",
        en: "Long-haul trucks typically consume 28-32 liters per 100km. Regional and distribution routes consume more.",
        de: "Fernverkehrs-LKW verbrauchen typischerweise 28-32 Liter pro 100km. Regionale und Verteilerstrecken verbrauchen mehr."
      }
    }
  ],
  environment: [
    {
      question: {
        ro: "Care este standardul actual pentru emisiile camioanelor noi în UE?",
        en: "What is the current standard for new truck emissions in the EU?",
        de: "Was ist der aktuelle Standard für Emissionen neuer LKW in der EU?"
      },
      options: {
        ro: ["Euro 4", "Euro 5", "Euro 6", "Euro 7"],
        en: ["Euro 4", "Euro 5", "Euro 6", "Euro 7"],
        de: ["Euro 4", "Euro 5", "Euro 6", "Euro 7"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Euro 6 este standardul actual de emisii pentru camioane noi. Euro 7 este așteptat în jurul anului 2027.",
        en: "Euro 6 is the current emission standard for new trucks. Euro 7 is expected around 2027.",
        de: "Euro 6 ist der aktuelle Emissionsstandard für neue LKW. Euro 7 wird etwa 2027 erwartet."
      }
    },
    {
      question: {
        ro: "Cât CO2 este produs per litru de motorină arsă?",
        en: "How much CO2 is produced per liter of diesel burned?",
        de: "Wie viel CO2 wird pro Liter verbranntem Diesel produziert?"
      },
      options: {
        ro: ["~1.0 kg", "~2.64 kg", "~5.0 kg", "~10 kg"],
        en: ["~1.0 kg", "~2.64 kg", "~5.0 kg", "~10 kg"],
        de: ["~1.0 kg", "~2.64 kg", "~5.0 kg", "~10 kg"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Arderea unui litru de motorină produce aproximativ 2.64 kg de CO2.",
        en: "Burning one liter of diesel produces approximately 2.64 kg of CO2.",
        de: "Das Verbrennen eines Liters Diesel produziert ungefähr 2.64 kg CO2."
      }
    },
    {
      question: {
        ro: "Ce poate realiza de obicei instruirea eco-driving?",
        en: "What can eco-driving training typically achieve?",
        de: "Was kann Eco-Driving-Training typischerweise erreichen?"
      },
      options: {
        ro: ["Niciun impact măsurabil", "5-15% reducere a combustibilului", "50% reducere a combustibilului", "Consum crescut de combustibil"],
        en: ["No measurable impact", "5-15% fuel reduction", "50% fuel reduction", "Increased fuel use"],
        de: ["Keine messbare Auswirkung", "5-15% Kraftstoffreduktion", "50% Kraftstoffreduktion", "Erhöhter Kraftstoffverbrauch"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Instruirea eco-driving realizează de obicei 5-15% reducere a combustibilului prin tehnici de condus mai bune.",
        en: "Eco-driving training typically achieves 5-15% fuel reduction through better driving techniques.",
        de: "Eco-Driving-Training erreicht typischerweise 5-15% Kraftstoffreduktion durch bessere Fahrtechniken."
      }
    }
  ],
  warehouse: [
    {
      question: {
        ro: "Care este timpul liber tipic pentru încărcare/descărcare la depozite?",
        en: "What is typical free time for loading/unloading at warehouses?",
        de: "Was ist die typische Freizeit für Be-/Entladung bei Lagern?"
      },
      options: {
        ro: ["15 minute", "1-2 ore", "6 ore", "24 ore"],
        en: ["15 minutes", "1-2 hours", "6 hours", "24 hours"],
        de: ["15 Minuten", "1-2 Stunden", "6 Stunden", "24 Stunden"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Timpul liber standard este 1-2 ore. Timpul peste aceasta atrage taxe demurrage (de obicei 35-50 EUR/oră).",
        en: "Standard free time is 1-2 hours. Time beyond this incurs demurrage charges (typically 35-50 EUR/hour).",
        de: "Die Standard-Freizeit beträgt 1-2 Stunden. Zeit darüber hinaus führt zu Standgebühren (typischerweise 35-50 EUR/Stunde)."
      }
    },
    {
      question: {
        ro: "Ce este consolidarea în termeni de transport?",
        en: "What is consolidation in freight terms?",
        de: "Was ist Konsolidierung in Frachtbegriffen?"
      },
      options: {
        ro: ["Închiderea depozitelor", "Combinarea mai multor transporturi mici într-o încărcătură completă", "Împărțirea livrărilor", "Inventarierea stocurilor"],
        en: ["Closing warehouses", "Combining multiple small shipments into one full load", "Splitting deliveries", "Inventory counting"],
        de: ["Schließen von Lagern", "Zusammenfassen mehrerer kleiner Sendungen zu einer Komplettladung", "Aufteilen von Lieferungen", "Bestandszählung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Consolidarea combină mai multe transporturi LTL într-un singur FTL pentru eficiența costurilor pe rute lungi.",
        en: "Consolidation combines multiple LTL shipments into one FTL for cost efficiency on long-haul routes.",
        de: "Konsolidierung fasst mehrere LTL-Sendungen zu einer FTL zusammen für Kosteneffizienz auf Fernstrecken."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să faceți dacă un șofer ratează slotul de timp rezervat?",
        en: "What should you do if a driver misses their booked time slot?",
        de: "Was sollten Sie tun, wenn ein Fahrer seinen gebuchten Zeitslot verpasst?"
      },
      options: {
        ro: ["Nimic, livrați oricum", "Contactați imediat depozitul pentru reprogramare, informați clientul", "Trimiteți alt camion", "Anulați livrarea"],
        en: ["Nothing, just deliver anyway", "Contact warehouse immediately to reschedule, inform client", "Send another truck", "Cancel the delivery"],
        de: ["Nichts, einfach trotzdem liefern", "Sofort Lager kontaktieren zum Umbuchen, Kunden informieren", "Einen anderen LKW schicken", "Lieferung stornieren"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Contactați imediat depozitul pentru a găsi un nou slot. Informați clientul despre noul orar.",
        en: "Contact the warehouse immediately to find a new slot. Inform the client about revised timing.",
        de: "Kontaktieren Sie sofort das Lager, um einen neuen Slot zu finden. Informieren Sie den Kunden über die geänderte Zeit."
      }
    }
  ],
  "licenses-oversize": [
    {
      question: {
        ro: "Care este valabilitatea standard a unei licențe comunitare de transport?",
        en: "What is the standard validity of a Community transport license?",
        de: "Was ist die Standardgültigkeit einer Gemeinschaftstransportlizenz?"
      },
      options: {
        ro: ["3 ani", "5 ani", "10 ani", "Nelimitat"],
        en: ["3 years", "5 years", "10 years", "Unlimited"],
        de: ["3 Jahre", "5 Jahre", "10 Jahre", "Unbegrenzt"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Licența comunitară de transport are o valabilitate standard de 5 ani și trebuie reînnoită înainte de expirare.",
        en: "The Community transport license has a standard validity of 5 years and must be renewed before expiration.",
        de: "Die Gemeinschaftstransportlizenz hat eine Standardgültigkeit von 5 Jahren und muss vor Ablauf erneuert werden."
      }
    },
    {
      question: {
        ro: "Ce reprezintă cabotajul în transportul rutier?",
        en: "What does cabotage represent in road transport?",
        de: "Was bedeutet Kabotage im Straßentransport?"
      },
      options: {
        ro: ["Transport între două țări UE", "Transport național efectuat de un operator străin", "Transport internațional de mărfuri periculoase", "Transport cu vehicule sub 3.5t"],
        en: ["Transport between two EU countries", "Domestic transport by a foreign operator", "International transport of dangerous goods", "Transport with vehicles under 3.5t"],
        de: ["Transport zwischen zwei EU-Ländern", "Inlandsbeförderung durch einen ausländischen Betreiber", "Internationaler Transport gefährlicher Güter", "Transport mit Fahrzeugen unter 3,5t"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Cabotajul reprezintă operațiunile de transport național de mărfuri efectuate de un operator de transport dintr-un alt stat membru pe teritoriul unui stat gazdă.",
        en: "Cabotage represents domestic freight transport operations carried out by a transport operator from another member state on the territory of a host state.",
        de: "Kabotage bezeichnet inländische Gütertransporte, die von einem Transportunternehmer aus einem anderen Mitgliedstaat auf dem Gebiet eines Gaststaates durchgeführt werden."
      }
    },
    {
      question: {
        ro: "Câte operațiuni de cabotaj sunt permise în termen de 7 zile conform regulamentelor actuale?",
        en: "How many cabotage operations are allowed within 7 days under current regulations?",
        de: "Wie viele Kabotageoperationen sind innerhalb von 7 Tagen nach aktuellen Vorschriften erlaubt?"
      },
      options: {
        ro: ["1 operațiune", "3 operațiuni", "5 operațiuni", "Nelimitat"],
        en: ["1 operation", "3 operations", "5 operations", "Unlimited"],
        de: ["1 Operation", "3 Operationen", "5 Operationen", "Unbegrenzt"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Conform Pachetului de Mobilitate, sunt permise maximum 3 operațiuni de cabotaj în termen de 7 zile de la ultima descărcare internațională.",
        en: "Under the Mobility Package, a maximum of 3 cabotage operations are allowed within 7 days from the last international unloading.",
        de: "Gemäß dem Mobilitätspaket sind maximal 3 Kabotageoperationen innerhalb von 7 Tagen nach der letzten internationalen Entladung erlaubt."
      }
    }
  ],
  training: [
    {
      question: {
        ro: "Cât durează programul complet de instruire?",
        en: "How long is the comprehensive training program?",
        de: "Wie lang ist das umfassende Schulungsprogramm?"
      },
      options: {
        ro: ["4 săptămâni", "6 săptămâni", "8 săptămâni", "12 săptămâni"],
        en: ["4 weeks", "6 weeks", "8 weeks", "12 weeks"],
        de: ["4 Wochen", "6 Wochen", "8 Wochen", "12 Wochen"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Programul complet de instruire durează 8 săptămâni, combinând 40% instruire teoretică cu 60% exerciții practice.",
        en: "The comprehensive training program spans 8 weeks, combining 40% theoretical instruction with 60% practical exercises.",
        de: "Das umfassende Schulungsprogramm erstreckt sich über 8 Wochen und kombiniert 40% theoretische Schulung mit 60% praktischen Übungen."
      }
    },
    {
      question: {
        ro: "Ce procent din programul de instruire este dedicat exercițiilor practice?",
        en: "What percentage of the training program is dedicated to practical exercises?",
        de: "Welcher Prozentsatz des Schulungsprogramms ist praktischen Übungen gewidmet?"
      },
      options: {
        ro: ["40%", "50%", "60%", "70%"],
        en: ["40%", "50%", "60%", "70%"],
        de: ["40%", "50%", "60%", "70%"]
      },
      correctIndex: 2,
      explanation: {
        ro: "60% din programul de instruire este dedicat exercițiilor practice, în timp ce 40% acoperă instrucțiuni teoretice.",
        en: "60% of the training program is dedicated to practical exercises, while 40% covers theoretical instruction.",
        de: "60% des Schulungsprogramms sind praktischen Übungen gewidmet, während 40% theoretische Schulungen abdecken."
      }
    },
    {
      question: {
        ro: "Ce scor este necesar la examenul scris pentru certificare?",
        en: "What score is required on the written exam for certification?",
        de: "Welche Punktzahl ist bei der schriftlichen Prüfung für die Zertifizierung erforderlich?"
      },
      options: {
        ro: ["60%", "65%", "70%", "75%"],
        en: ["60%", "65%", "70%", "75%"],
        de: ["60%", "65%", "70%", "75%"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Un scor minim de 70% la examenul scris este necesar pentru a primi certificarea.",
        en: "A minimum score of 70% on the written exam is required to receive certification.",
        de: "Eine Mindestpunktzahl von 70% bei der schriftlichen Prüfung ist für die Zertifizierung erforderlich."
      }
    }
  ],
  "case-studies": [
    {
      question: {
        ro: "În Studiul de caz 1 (Dezastrul rezervării), care a fost greșeala principală făcută de dispecer?",
        en: "In Case Study 1 (The Booking Disaster), what was the primary mistake made by the dispatcher?",
        de: "In Fallstudie 1 (Das Buchungsdesaster), was war der Hauptfehler des Disponenten?"
      },
      options: {
        ro: ["A folosit tipul greșit de camion", "Nu a confirmat adresa cu clientul", "A uitat să rezerve un transportator", "Nu a calculat corect prețul"],
        en: ["Used wrong truck type", "Did not confirm address with client", "Forgot to book a carrier", "Did not calculate the price correctly"],
        de: ["Falschen LKW-Typ verwendet", "Adresse nicht mit Kunden bestätigt", "Vergessen, einen Frachtführer zu buchen", "Preis nicht korrekt berechnet"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Dispecerul a presupus că adresa era corectă fără a verifica cu clientul, ducând la un ocol de 120km și pierderi majore.",
        en: "The dispatcher assumed the address was correct without verifying with the client, leading to a 120km detour and major losses.",
        de: "Der Disponent nahm an, dass die Adresse korrekt war, ohne sie mit dem Kunden zu verifizieren, was zu einem 120km-Umweg und großen Verlusten führte."
      }
    },
    {
      question: {
        ro: "Care este cea mai importantă concluzie din toate studiile de caz?",
        en: "What is the most important takeaway from all case studies?",
        de: "Was ist die wichtigste Erkenntnis aus allen Fallstudien?"
      },
      options: {
        ro: ["Alegeți întotdeauna opțiunea cea mai ieftină", "Documentația și comunicarea proactivă previn dezastrele", "Aveți încredere în acordurile verbale", "Nu recunoașteți niciodată greșelile clienților"],
        en: ["Always choose the cheapest option", "Documentation and proactive communication prevent disasters", "Trust verbal agreements", "Never admit mistakes to clients"],
        de: ["Immer die günstigste Option wählen", "Dokumentation und proaktive Kommunikation verhindern Katastrophen", "Mündlichen Vereinbarungen vertrauen", "Fehler nie gegenüber Kunden zugeben"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Documentația corectă și comunicarea proactivă sunt demonstrate constant că previn sau minimizează dezastrele în toate studiile de caz.",
        en: "Proper documentation and proactive communication are consistently shown to prevent or minimize disasters across all case studies.",
        de: "Ordnungsgemäße Dokumentation und proaktive Kommunikation werden durchgehend gezeigt, um Katastrophen in allen Fallstudien zu verhindern oder zu minimieren."
      }
    },
    {
      question: {
        ro: "Cât timp a durat să primească compensație completă în cazul Recuperării reușite a daunei?",
        en: "How long did it take to receive full compensation in the Successful Claim Recovery?",
        de: "Wie lange dauerte es, eine vollständige Entschädigung bei der erfolgreichen Schadensregulierung zu erhalten?"
      },
      options: {
        ro: ["3 săptămâni", "45 zile", "2 luni", "90 zile"],
        en: ["3 weeks", "45 days", "2 months", "90 days"],
        de: ["3 Wochen", "45 Tage", "2 Monate", "90 Tage"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Datorită gestionării profesionale a daunei și documentației corecte, compensația completă a fost primită în 45 de zile.",
        en: "Thanks to professional claim handling and proper documentation, full compensation was received in 45 days.",
        de: "Dank professioneller Schadensbearbeitung und ordnungsgemäßer Dokumentation wurde die vollständige Entschädigung in 45 Tagen erhalten."
      }
    }
  ],
  communication: [
    {
      question: {
        ro: "Care este cel mai bun canal pentru probleme urgente care necesită răspuns imediat?",
        en: "What is the best channel for urgent issues requiring immediate response?",
        de: "Was ist der beste Kanal für dringende Probleme, die sofortige Reaktion erfordern?"
      },
      options: {
        ro: ["Email", "Notificare TMS", "Apel telefonic", "Scrisoare"],
        en: ["Email", "TMS notification", "Phone call", "Letter"],
        de: ["E-Mail", "TMS-Benachrichtigung", "Telefonanruf", "Brief"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Apelurile telefonice sunt cele mai bune pentru probleme urgente deoarece permit comunicare bidirecțională imediată și rezolvare rapidă.",
        en: "Phone calls are best for urgent issues as they allow immediate two-way communication and quick resolution.",
        de: "Telefonanrufe sind am besten für dringende Probleme, da sie sofortige bidirektionale Kommunikation und schnelle Lösung ermöglichen."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să faceți întotdeauna după un apel telefonic important?",
        en: "What should you always do after an important phone call?",
        de: "Was sollten Sie immer nach einem wichtigen Telefonat tun?"
      },
      options: {
        ro: ["Nimic nu e necesar", "Trimiteți confirmare scrisă", "Sunați din nou pentru verificare", "Așteptați confirmarea clientului"],
        en: ["Nothing needed", "Send written confirmation", "Call again to verify", "Wait for client to confirm"],
        de: ["Nichts nötig", "Schriftliche Bestätigung senden", "Erneut anrufen zur Überprüfung", "Auf Kundenbestätigung warten"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Urmăriți întotdeauna apelurile telefonice importante cu confirmare scrisă prin email pentru a crea documentație.",
        en: "Always follow up important phone calls with written confirmation via email to create documentation.",
        de: "Folgen Sie wichtigen Telefongesprächen immer mit schriftlicher Bestätigung per E-Mail, um Dokumentation zu erstellen."
      }
    },
    {
      question: {
        ro: "Care este primul pas când aveți de-a face cu un client supărat?",
        en: "What is the first step when dealing with an angry client?",
        de: "Was ist der erste Schritt im Umgang mit einem verärgerten Kunden?"
      },
      options: {
        ro: ["Apărați-vă imediat", "Ascultați și lăsați-i să-și exprime frustrarea", "Transferați la manager", "Închideți"],
        en: ["Defend yourself immediately", "Listen and let them express frustration", "Transfer to manager", "Hang up"],
        de: ["Sofort verteidigen", "Zuhören und Frustration ausdrücken lassen", "An Manager weiterleiten", "Auflegen"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Metoda LASAP începe cu Ascultare - lăsați clientul să-și exprime frustrarea înainte de a răspunde.",
        en: "The LASAP method starts with Listen - let the client express their frustration before responding.",
        de: "Die LASAP-Methode beginnt mit Zuhören - lassen Sie den Kunden seine Frustration ausdrücken, bevor Sie antworten."
      }
    }
  ]
};

// Helper function to get translated quiz questions for a chapter
export function getTranslatedQuiz(chapterId: string, language: Language): { question: string; options: string[]; correctIndex: number; explanation: string; }[] | null {
  const chapter = quizTranslations[chapterId];
  if (!chapter) return null;
  
  return chapter.map(q => ({
    question: q.question[language],
    options: q.options[language],
    correctIndex: q.correctIndex,
    explanation: q.explanation[language]
  }));
}
