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
        ro: "De ce este documentația considerată 'protecție' în expediția de mărfuri?",
        en: "Why is documentation considered 'protection' in freight forwarding?",
        de: "Warum gilt Dokumentation als 'Schutz' in der Spedition?"
      },
      options: {
        ro: ["Protejează marfa de daune", "Oferă trasabilitate și dovezi legale", "Protejează șoferul de vreme", "Nu este importantă"],
        en: ["It protects the cargo from damage", "It provides audit trail and legal evidence", "It protects the driver from weather", "It's not important"],
        de: ["Sie schützt die Fracht vor Schäden", "Sie bietet Audit-Trail und rechtliche Beweise", "Sie schützt den Fahrer vor Wetter", "Sie ist nicht wichtig"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Documentația creează o înregistrare auditabilă a tuturor activităților. Dacă nu este documentat, nu s-a întâmplat - mai ales important pentru dispute și daune.",
        en: "Documentation creates an auditable record of all activities. If it's not documented, it didn't happen – especially important for disputes and insurance claims.",
        de: "Dokumentation erstellt eine prüfbare Aufzeichnung aller Aktivitäten. Wenn es nicht dokumentiert ist, ist es nicht passiert – besonders wichtig für Streitigkeiten und Versicherungsansprüche."
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
        ro: "Ce este 'comunicarea proactivă' în expediția de mărfuri?",
        en: "What is 'proactive communication' in freight forwarding?",
        de: "Was ist 'proaktive Kommunikation' in der Spedition?"
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
        ro: ["Piața spot → Transportatori preferați → Flotă proprie", "Flotă proprie → Transportatori preferați → Piața spot", "Transportatori preferați → Flotă proprie → Piața spot", "Selecție aleatorie"],
        en: ["Spot market → Preferred carriers → Own fleet", "Own fleet → Preferred carriers → Spot market", "Preferred carriers → Own fleet → Spot market", "Random selection"],
        de: ["Spotmarkt → Bevorzugte Frachtführer → Eigene Flotte", "Eigene Flotte → Bevorzugte Frachtführer → Spotmarkt", "Bevorzugte Frachtführer → Eigene Flotte → Spotmarkt", "Zufällige Auswahl"]
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
        ro: ["€0.80/km", "€1.10/km", "€1.50/km", "€2.00/km"],
        en: ["€0.80/km", "€1.10/km", "€1.50/km", "€2.00/km"],
        de: ["€0.80/km", "€1.10/km", "€1.50/km", "€2.00/km"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Tariful de bază standard pentru transportul rutier UE este aproximativ €1.10/km, înainte de adăugarea taxelor și accesoriilor.",
        en: "The standard base rate for EU road freight is approximately €1.10/km, before adding tolls and accessorials.",
        de: "Der Standard-Basistarif für EU-Straßengüterverkehr beträgt ca. €1,10/km, vor Maut und Nebenkosten."
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
        ro: ["Doar când întreabă clientul", "La etapele cheie: ridicare, în tranzit, sosire, livrare", "O dată pe săptămână", "Niciodată - se ocupă transportatorul"],
        en: ["Only when client asks", "At key milestones: pickup, in transit, arrival, delivery", "Once per week", "Never - carrier handles it"],
        de: ["Nur auf Kundenanfrage", "An Schlüsseletappen: Abholung, unterwegs, Ankunft, Lieferung", "Einmal pro Woche", "Nie - Frachtführer kümmert sich"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Actualizări proactive de tracking la etapele cheie țin clienții informați și construiesc încredere. Nu așteptați să fiți întrebați.",
        en: "Proactive tracking updates at milestones keep clients informed and build trust. Don't wait to be asked.",
        de: "Proaktive Tracking-Updates an Meilensteinen halten Kunden informiert und bauen Vertrauen auf. Warten Sie nicht, bis Sie gefragt werden."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să faceți imediat când este identificată o întârziere?",
        en: "What should you do immediately when a delay is identified?",
        de: "Was sollten Sie sofort tun, wenn eine Verzögerung festgestellt wird?"
      },
      options: {
        ro: ["Așteptați și sperați că se rezolvă", "Informați clientul proactiv cu noul ETA și motivul", "Dați vina pe șofer", "Nu faceți nimic până nu sunteți întrebat"],
        en: ["Wait and hope it resolves", "Inform the client proactively with new ETA and reason", "Blame the driver", "Do nothing until asked"],
        de: ["Warten und hoffen, dass es sich löst", "Kunden proaktiv mit neuer ETA und Grund informieren", "Dem Fahrer die Schuld geben", "Nichts tun bis gefragt"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Notificați imediat clientul cu ETA actualizat, motivul întârzierii și acțiunile de atenuare întreprinse.",
        en: "Immediately notify the client with updated ETA, reason for delay, and any mitigation actions being taken.",
        de: "Informieren Sie den Kunden sofort mit aktualisierter ETA, Verzögerungsgrund und ergriffenen Gegenmaßnahmen."
      }
    }
  ],
  vehicle: [
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
    }
  ],
  loading: [
    {
      question: {
        ro: "Care standard acoperă cerințele de fixare a mărfii?",
        en: "What standard covers cargo securing requirements?",
        de: "Welcher Standard deckt die Anforderungen zur Ladungssicherung ab?"
      },
      options: {
        ro: ["ISO 9001", "EN 12195-1", "GDPR", "Euro 6"],
        en: ["ISO 9001", "EN 12195-1", "GDPR", "Euro 6"],
        de: ["ISO 9001", "EN 12195-1", "DSGVO", "Euro 6"]
      },
      correctIndex: 1,
      explanation: {
        ro: "EN 12195-1 este standardul european pentru echipamente și calcule de fixare a mărfii.",
        en: "EN 12195-1 is the European standard for cargo securing equipment and calculations.",
        de: "EN 12195-1 ist der europäische Standard für Ladungssicherungsausrüstung und -berechnungen."
      }
    },
    {
      question: {
        ro: "Care este reținerea înainte necesară conform standardelor EN?",
        en: "What is the required forward restraint according to EN standards?",
        de: "Was ist die erforderliche Vorwärtssicherung gemäß EN-Standards?"
      },
      options: {
        ro: ["50% (0.5g)", "60% (0.6g)", "80% (0.8g)", "100% (1.0g)"],
        en: ["50% (0.5g)", "60% (0.6g)", "80% (0.8g)", "100% (1.0g)"],
        de: ["50% (0,5g)", "60% (0,6g)", "80% (0,8g)", "100% (1,0g)"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Reținerea înainte trebuie să fie 80% din greutatea mărfii (0.8g) din cauza forțelor de decelerare la frânare.",
        en: "Forward restraint must be 80% of cargo weight (0.8g) due to deceleration forces during braking.",
        de: "Die Vorwärtssicherung muss 80% des Frachtgewichts (0,8g) betragen wegen der Verzögerungskräfte beim Bremsen."
      }
    },
    {
      question: {
        ro: "De ce ar trebui să faceți fotografii în timpul încărcării?",
        en: "Why should you take photos during loading?",
        de: "Warum sollten Sie während der Beladung Fotos machen?"
      },
      options: {
        ro: ["Pentru rețele sociale", "Pentru asigurare/audit", "Doar de distracție", "Nu este necesar"],
        en: ["For social media", "For insurance/audit purposes", "Just for fun", "It's not necessary"],
        de: ["Für soziale Medien", "Für Versicherungs-/Auditzwecke", "Nur zum Spaß", "Es ist nicht notwendig"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Fotografiile cu timestamp servesc ca dovadă pentru daunele de asigurare și audituri. Fără fotografii = fără dovadă.",
        en: "Timestamped photos serve as evidence for insurance claims and audits. No photos = no proof.",
        de: "Zeitgestempelte Fotos dienen als Beweis für Versicherungsansprüche und Audits. Keine Fotos = kein Beweis."
      }
    },
    {
      question: {
        ro: "Care este cerința de reținere laterală (în lateral)?",
        en: "What is the lateral (sideways) restraint requirement?",
        de: "Was ist die Anforderung für die Seitensicherung?"
      },
      options: {
        ro: ["30% (0.3g)", "50% (0.5g)", "80% (0.8g)", "100% (1.0g)"],
        en: ["30% (0.3g)", "50% (0.5g)", "80% (0.8g)", "100% (1.0g)"],
        de: ["30% (0,3g)", "50% (0,5g)", "80% (0,8g)", "100% (1,0g)"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Reținerea laterală trebuie să fie 50% din greutatea mărfii (0.5g) pentru forțele din viraje și schimbări de bandă.",
        en: "Lateral restraint must be 50% of cargo weight (0.5g) for forces during turns and lane changes.",
        de: "Die Seitensicherung muss 50% des Frachtgewichts (0,5g) betragen für Kräfte bei Kurven und Spurwechseln."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să verifice un șofer înainte de a accepta marfa pentru încărcare?",
        en: "What should a driver check before accepting cargo for loading?",
        de: "Was sollte ein Fahrer vor der Annahme von Fracht zur Beladung prüfen?"
      },
      options: {
        ro: ["Nimic - doar încarcă", "Starea ambalajului, cantitatea corespunde documentelor, daune vizibile", "Doar greutatea", "Semnează și pleacă"],
        en: ["Nothing - just load it", "Packaging condition, quantity matches documents, any visible damage", "Only the weight", "Just sign and go"],
        de: ["Nichts - einfach laden", "Verpackungszustand, Menge stimmt mit Dokumenten, sichtbare Schäden", "Nur das Gewicht", "Unterschreiben und los"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Șoferii ar trebui să verifice integritatea ambalajului, cantitățile și să noteze orice daună preexistentă înainte de încărcare.",
        en: "Drivers should verify packaging integrity, quantities, and note any pre-existing damage before loading.",
        de: "Fahrer sollten die Verpackungsintegrität, Mengen überprüfen und vorhandene Schäden vor dem Beladen notieren."
      }
    },
    {
      question: {
        ro: "Ce este 'blocarea și contraventuirea' în fixarea mărfii?",
        en: "What is 'blocking and bracing' in cargo securing?",
        de: "Was ist 'Blockieren und Verspannen' bei der Ladungssicherung?"
      },
      options: {
        ro: ["Oprirea camionului", "Folosirea materialelor de umplere pentru a preveni mișcarea mărfii", "Închiderea ușilor remorcii", "Parcarea vehiculului"],
        en: ["Stopping the truck", "Using void fillers and dunnage to prevent cargo movement", "Closing the trailer doors", "Parking the vehicle"],
        de: ["Den LKW anhalten", "Verwendung von Füllmaterialien um Frachtbewegung zu verhindern", "Die Auflieger-Türen schließen", "Das Fahrzeug parken"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Blocarea și contraventuirea folosesc materiale pentru a umple golurile și a preveni deplasarea mărfii în timpul transportului.",
        en: "Blocking and bracing uses materials to fill gaps and prevent cargo shifting during transport.",
        de: "Blockieren und Verspannen verwendet Materialien, um Lücken zu füllen und Frachtverschiebung während des Transports zu verhindern."
      }
    }
  ],
  checklists: [
    {
      question: {
        ro: "Care este primul pas în verificarea unei comenzi noi de transport?",
        en: "What is the first step in verifying a new transport order?",
        de: "Was ist der erste Schritt bei der Überprüfung eines neuen Transportauftrags?"
      },
      options: {
        ro: ["Facturarea", "Validarea tuturor detaliilor (adrese, date, marfă)", "Plecarea camionului", "Contactarea asigurătorului"],
        en: ["Invoicing", "Validating all details (addresses, dates, cargo)", "Truck departure", "Contacting the insurer"],
        de: ["Rechnungsstellung", "Validierung aller Details (Adressen, Termine, Fracht)", "LKW-Abfahrt", "Kontaktieren des Versicherers"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Întotdeauna verificați complet detaliile comenzii înainte de a proceda - adrese, date, specificații marfă.",
        en: "Always completely verify order details before proceeding - addresses, dates, cargo specifications.",
        de: "Überprüfen Sie immer vollständig die Auftragsdetails, bevor Sie fortfahren - Adressen, Termine, Frachtspezifikationen."
      }
    },
    {
      question: {
        ro: "Ce trebuie verificat obligatoriu la fiecare transportator înainte de atribuirea unei curse?",
        en: "What must be verified for each carrier before assigning a trip?",
        de: "Was muss bei jedem Frachtführer vor der Zuweisung einer Fahrt überprüft werden?"
      },
      options: {
        ro: ["Culoarea camionului", "Asigurare CMR validă, licență transport, rating pe platforme", "Vârsta șoferului", "Marca camionului"],
        en: ["Truck color", "Valid CMR insurance, transport license, platform ratings", "Driver age", "Truck brand"],
        de: ["LKW-Farbe", "Gültige CMR-Versicherung, Transportlizenz, Plattform-Bewertungen", "Fahreralter", "LKW-Marke"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Verificați asigurarea CMR, licența de transport și ratingurile pe platformele de bursă înainte de a atribui curse.",
        en: "Verify CMR insurance, transport license and ratings on exchange platforms before assigning trips.",
        de: "Überprüfen Sie CMR-Versicherung, Transportlizenz und Bewertungen auf Frachtbörsen vor der Zuweisung von Fahrten."
      }
    },
    {
      question: {
        ro: "Ce documente trebuie să aibă șoferul la încărcare?",
        en: "What documents should the driver have at loading?",
        de: "Welche Dokumente sollte der Fahrer bei der Beladung haben?"
      },
      options: {
        ro: ["Doar CMR gol", "CMR completat, instrucțiuni de livrare, contact de urgență", "Doar permisul de conducere", "Nimic specific"],
        en: ["Only blank CMR", "Completed CMR, delivery instructions, emergency contact", "Only driving license", "Nothing specific"],
        de: ["Nur leerer CMR", "Ausgefüllter CMR, Lieferanweisungen, Notfallkontakt", "Nur Führerschein", "Nichts Bestimmtes"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Șoferul trebuie să aibă CMR-ul completat corect, instrucțiuni clare și date de contact pentru urgențe.",
        en: "The driver must have correctly completed CMR, clear instructions and emergency contact details.",
        de: "Der Fahrer muss korrekt ausgefüllten CMR, klare Anweisungen und Notfallkontaktdaten haben."
      }
    },
    {
      question: {
        ro: "Ce se verifică obligatoriu după livrare?",
        en: "What must be verified after delivery?",
        de: "Was muss nach der Lieferung überprüft werden?"
      },
      options: {
        ro: ["Nimic", "CMR semnat și ștampilat (POD), starea mărfii la livrare", "Doar factura", "Doar ora sosirii"],
        en: ["Nothing", "Signed and stamped CMR (POD), cargo condition at delivery", "Only the invoice", "Only arrival time"],
        de: ["Nichts", "Unterschriebener und gestempelter CMR (POD), Frachtzustand bei Lieferung", "Nur die Rechnung", "Nur Ankunftszeit"]
      },
      correctIndex: 1,
      explanation: {
        ro: "După livrare, colectați POD-ul semnat și verificați dacă sunt rezerve sau daune notate pe CMR.",
        en: "After delivery, collect the signed POD and check if there are reservations or damages noted on the CMR.",
        de: "Nach der Lieferung sammeln Sie den unterschriebenen POD und prüfen, ob Vorbehalte oder Schäden auf dem CMR notiert sind."
      }
    },
    {
      question: {
        ro: "Care este ordinea corectă a pașilor pentru procesarea unei comenzi?",
        en: "What is the correct order of steps for processing an order?",
        de: "Was ist die richtige Reihenfolge der Schritte für die Auftragsbearbeitung?"
      },
      options: {
        ro: ["Facturare → Livrare → Încărcare", "Validare → Atribuire transportator → Monitorizare → Livrare → Facturare", "Livrare → Validare → Facturare", "Nu există ordine specifică"],
        en: ["Invoicing → Delivery → Loading", "Validation → Carrier assignment → Monitoring → Delivery → Invoicing", "Delivery → Validation → Invoicing", "No specific order"],
        de: ["Rechnungsstellung → Lieferung → Beladung", "Validierung → Frachtführer-Zuweisung → Überwachung → Lieferung → Rechnungsstellung", "Lieferung → Validierung → Rechnungsstellung", "Keine bestimmte Reihenfolge"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Fluxul corect: Validare comandă → Atribuire transportator → Monitorizare → Livrare → Colectare POD → Facturare.",
        en: "Correct flow: Order validation → Carrier assignment → Monitoring → Delivery → POD collection → Invoicing.",
        de: "Korrekter Ablauf: Auftragsvalidierung → Frachtführer-Zuweisung → Überwachung → Lieferung → POD-Sammlung → Rechnungsstellung."
      }
    },
    {
      question: {
        ro: "Ce verificare trebuie făcută la sfârșitul fiecărei zile de lucru?",
        en: "What check should be done at the end of each working day?",
        de: "Welche Überprüfung sollte am Ende jedes Arbeitstages durchgeführt werden?"
      },
      options: {
        ro: ["Doar email-urile", "Status toate transporturile active, actualizări clienți, probleme nerezolvate", "Doar facturile", "Nimic specific"],
        en: ["Only emails", "Status of all active transports, client updates, unresolved issues", "Only invoices", "Nothing specific"],
        de: ["Nur E-Mails", "Status aller aktiven Transporte, Kunden-Updates, ungelöste Probleme", "Nur Rechnungen", "Nichts Bestimmtes"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Verificați zilnic statusul tuturor curselor active, comunicați proactiv cu clienții și rezolvați problemele restante.",
        en: "Check daily the status of all active trips, communicate proactively with clients and resolve outstanding issues.",
        de: "Überprüfen Sie täglich den Status aller aktiven Fahrten, kommunizieren Sie proaktiv mit Kunden und lösen Sie offene Probleme."
      }
    }
  ],
  glossary: [
    {
      question: {
        ro: "Ce înseamnă CMR în transportul rutier?",
        en: "What does CMR mean in road transport?",
        de: "Was bedeutet CMR im Straßentransport?"
      },
      options: {
        ro: ["Container Management Report", "Convention relative au contrat de transport international de Marchandises par Route", "Carrier Movement Record", "Cargo Movement Registration"],
        en: ["Container Management Report", "Convention on the Contract for International Carriage of Goods by Road", "Carrier Movement Record", "Cargo Movement Registration"],
        de: ["Container Management Report", "Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr", "Carrier Movement Record", "Cargo Movement Registration"]
      },
      correctIndex: 1,
      explanation: {
        ro: "CMR este Convenția privind contractul de transport internațional de mărfuri pe șosele - documentul standard de transport.",
        en: "CMR is the Convention on the Contract for International Carriage of Goods by Road - the standard transport document.",
        de: "CMR ist das Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr - das Standard-Transportdokument."
      }
    },
    {
      question: {
        ro: "Ce reprezintă termenul 'FTL'?",
        en: "What does the term 'FTL' represent?",
        de: "Was bedeutet der Begriff 'FTL'?"
      },
      options: {
        ro: ["Fast Transport Line", "Full Truck Load (încărcătură completă)", "Freight Transfer Label", "Final Transport Logistics"],
        en: ["Fast Transport Line", "Full Truck Load", "Freight Transfer Label", "Final Transport Logistics"],
        de: ["Fast Transport Line", "Full Truck Load (Komplettladung)", "Freight Transfer Label", "Final Transport Logistics"]
      },
      correctIndex: 1,
      explanation: {
        ro: "FTL (Full Truck Load) înseamnă încărcătură completă - întregul camion este alocat unui singur client/transport.",
        en: "FTL (Full Truck Load) means full load - the entire truck is allocated to a single client/transport.",
        de: "FTL (Full Truck Load) bedeutet Komplettladung - der gesamte LKW wird einem einzelnen Kunden/Transport zugewiesen."
      }
    },
    {
      question: {
        ro: "Ce înseamnă 'LTL' în logistică?",
        en: "What does 'LTL' mean in logistics?",
        de: "Was bedeutet 'LTL' in der Logistik?"
      },
      options: {
        ro: ["Long Term Lease", "Less Than Truckload (încărcătură parțială)", "Local Transport License", "Load Transfer Limit"],
        en: ["Long Term Lease", "Less Than Truckload (partial load)", "Local Transport License", "Load Transfer Limit"],
        de: ["Long Term Lease", "Less Than Truckload (Teilladung)", "Local Transport License", "Load Transfer Limit"]
      },
      correctIndex: 1,
      explanation: {
        ro: "LTL (Less Than Truckload) reprezintă transportul de încărcături parțiale, mai mici decât capacitatea completă a camionului.",
        en: "LTL (Less Than Truckload) represents partial load transport, smaller than the full truck capacity.",
        de: "LTL (Less Than Truckload) bezeichnet Teilladungstransport, kleiner als die volle LKW-Kapazität."
      }
    },
    {
      question: {
        ro: "Ce este un 'POD' în transportul de mărfuri?",
        en: "What is a 'POD' in freight transport?",
        de: "Was ist ein 'POD' im Güterverkehr?"
      },
      options: {
        ro: ["Point of Departure", "Proof of Delivery (dovada livrării)", "Payment on Demand", "Priority Order Document"],
        en: ["Point of Departure", "Proof of Delivery", "Payment on Demand", "Priority Order Document"],
        de: ["Point of Departure", "Proof of Delivery (Liefernachweis)", "Payment on Demand", "Priority Order Document"]
      },
      correctIndex: 1,
      explanation: {
        ro: "POD (Proof of Delivery) este dovada livrării - CMR-ul semnat de destinatar confirmând primirea mărfii.",
        en: "POD (Proof of Delivery) is the delivery proof - CMR signed by the consignee confirming receipt of goods.",
        de: "POD (Proof of Delivery) ist der Liefernachweis - vom Empfänger unterschriebener CMR, der den Warenempfang bestätigt."
      }
    },
    {
      question: {
        ro: "Ce reprezintă 'ETA' în logistică?",
        en: "What does 'ETA' represent in logistics?",
        de: "Was bedeutet 'ETA' in der Logistik?"
      },
      options: {
        ro: ["European Transport Agreement", "Estimated Time of Arrival (ora estimată de sosire)", "Export Tax Assessment", "Equipment Transfer Authorization"],
        en: ["European Transport Agreement", "Estimated Time of Arrival", "Export Tax Assessment", "Equipment Transfer Authorization"],
        de: ["European Transport Agreement", "Estimated Time of Arrival (voraussichtliche Ankunftszeit)", "Export Tax Assessment", "Equipment Transfer Authorization"]
      },
      correctIndex: 1,
      explanation: {
        ro: "ETA (Estimated Time of Arrival) este ora estimată de sosire la destinație.",
        en: "ETA (Estimated Time of Arrival) is the estimated arrival time at destination.",
        de: "ETA (Estimated Time of Arrival) ist die voraussichtliche Ankunftszeit am Ziel."
      }
    },
    {
      question: {
        ro: "Ce înseamnă termenul 'demurrage'?",
        en: "What does the term 'demurrage' mean?",
        de: "Was bedeutet der Begriff 'Demurrage'?"
      },
      options: {
        ro: ["Tip de asigurare", "Taxa pentru depășirea timpului de încărcare/descărcare", "Document de transport", "Tip de marfă"],
        en: ["Type of insurance", "Fee for exceeding loading/unloading time", "Transport document", "Type of cargo"],
        de: ["Art der Versicherung", "Gebühr für Überschreitung der Be-/Entladezeit", "Transportdokument", "Art der Fracht"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Demurrage reprezintă penalitatea pentru depășirea timpului alocat de încărcare/descărcare (de obicei €35-50/oră).",
        en: "Demurrage is the penalty for exceeding the allocated loading/unloading time (usually €35-50/hour).",
        de: "Demurrage ist die Strafe für die Überschreitung der zugewiesenen Be-/Entladezeit (normalerweise €35-50/Stunde)."
      }
    },
    {
      question: {
        ro: "Ce reprezintă 'ADR' în transportul de mărfuri?",
        en: "What does 'ADR' represent in freight transport?",
        de: "Was bedeutet 'ADR' im Güterverkehr?"
      },
      options: {
        ro: ["Automatic Delivery Route", "Acordul european pentru transportul mărfurilor periculoase pe șosele", "Advanced Driver Recognition", "Annual Dispatch Report"],
        en: ["Automatic Delivery Route", "European Agreement on the Transport of Dangerous Goods by Road", "Advanced Driver Recognition", "Annual Dispatch Report"],
        de: ["Automatic Delivery Route", "Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße", "Advanced Driver Recognition", "Annual Dispatch Report"]
      },
      correctIndex: 1,
      explanation: {
        ro: "ADR este acordul european privind transportul internațional al mărfurilor periculoase pe șosele.",
        en: "ADR is the European agreement on the international transport of dangerous goods by road.",
        de: "ADR ist das Europäische Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße."
      }
    },
    {
      question: {
        ro: "Ce este 'cabotajul' în transport?",
        en: "What is 'cabotage' in transport?",
        de: "Was ist 'Kabotage' im Transport?"
      },
      options: {
        ro: ["Transport între țări", "Transport național efectuat de un operator străin", "Transport de containere", "Transport maritim"],
        en: ["Transport between countries", "Domestic transport by a foreign operator", "Container transport", "Sea transport"],
        de: ["Transport zwischen Ländern", "Inlandstransport durch einen ausländischen Betreiber", "Containertransport", "Seetransport"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Cabotajul este transportul intern de mărfuri efectuat de un operator de transport străin pe teritoriul altui stat.",
        en: "Cabotage is domestic freight transport by a foreign transport operator on the territory of another state.",
        de: "Kabotage ist der Inlandsgüterverkehr durch einen ausländischen Transportunternehmer auf dem Gebiet eines anderen Staates."
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