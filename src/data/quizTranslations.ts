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
  compliance: [
    {
      question: {
        ro: "Care este timpul maxim de condus zilnic pentru un singur șofer?",
        en: "What is the maximum daily driving time for a single driver?",
        de: "Was ist die maximale tägliche Lenkzeit für einen Einzelfahrer?"
      },
      options: {
        ro: ["8 ore", "9 ore (10 ore de două ori/săptămână)", "11 ore", "12 ore"],
        en: ["8 hours", "9 hours (10h twice/week)", "11 hours", "12 hours"],
        de: ["8 Stunden", "9 Stunden (10 Std. zweimal/Woche)", "11 Stunden", "12 Stunden"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Timpul maxim de condus zilnic este 9 ore, care poate fi extins la 10 ore de două ori pe săptămână.",
        en: "Maximum daily driving is 9 hours, which can be extended to 10 hours twice per week.",
        de: "Die maximale tägliche Lenkzeit beträgt 9 Stunden, kann aber zweimal pro Woche auf 10 Stunden verlängert werden."
      }
    },
    {
      question: {
        ro: "După câte ore de condus trebuie să ia șoferul o pauză?",
        en: "After how many hours of driving must a driver take a break?",
        de: "Nach wie vielen Stunden Fahren muss ein Fahrer eine Pause einlegen?"
      },
      options: {
        ro: ["3 ore", "4 ore 30 minute", "5 ore", "6 ore"],
        en: ["3 hours", "4 hours 30 minutes", "5 hours", "6 hours"],
        de: ["3 Stunden", "4 Stunden 30 Minuten", "5 Stunden", "6 Stunden"]
      },
      correctIndex: 1,
      explanation: {
        ro: "O pauză de 45 minute este necesară după 4 ore 30 minute de condus (poate fi împărțită 15'+30').",
        en: "A 45-minute break is required after 4 hours 30 minutes of driving (can be split 15'+30').",
        de: "Eine 45-minütige Pause ist nach 4 Stunden 30 Minuten Fahren erforderlich (kann in 15'+30' aufgeteilt werden)."
      }
    },
    {
      question: {
        ro: "Care este limita maximă de timp de condus săptămânal?",
        en: "What is the maximum weekly driving time limit?",
        de: "Was ist die maximale wöchentliche Lenkzeit?"
      },
      options: {
        ro: ["40 ore", "48 ore", "56 ore", "60 ore"],
        en: ["40 hours", "48 hours", "56 hours", "60 hours"],
        de: ["40 Stunden", "48 Stunden", "56 Stunden", "60 Stunden"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Timpul maxim de condus săptămânal este 56 ore, cu un maxim bisăptămânal de 90 ore.",
        en: "Maximum weekly driving time is 56 hours, with a bi-weekly maximum of 90 hours.",
        de: "Die maximale wöchentliche Lenkzeit beträgt 56 Stunden, mit einem zweiwöchigen Maximum von 90 Stunden."
      }
    },
    {
      question: {
        ro: "Care este perioada minimă de odihnă zilnică pentru șoferi?",
        en: "What is the minimum daily rest period for drivers?",
        de: "Was ist die Mindestruhezeit für Fahrer?"
      },
      options: {
        ro: ["8 ore", "9 ore", "11 ore (poate fi redusă la 9 ore de trei ori/săptămână)", "12 ore"],
        en: ["8 hours", "9 hours", "11 hours (can be reduced to 9h three times/week)", "12 hours"],
        de: ["8 Stunden", "9 Stunden", "11 Stunden (kann 3x/Woche auf 9 Std. reduziert werden)", "12 Stunden"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Odihna zilnică regulată este 11 ore, reducibilă la 9 ore maximum de trei ori între odihnele săptămânale.",
        en: "Regular daily rest is 11 hours, reducible to 9 hours maximum three times between weekly rests.",
        de: "Die reguläre tägliche Ruhezeit beträgt 11 Stunden, reduzierbar auf maximal 9 Stunden dreimal zwischen wöchentlichen Ruhezeiten."
      }
    },
    {
      question: {
        ro: "Care este cerința de odihnă săptămânală regulată?",
        en: "What is the regular weekly rest requirement?",
        de: "Was ist die reguläre wöchentliche Ruhezeit?"
      },
      options: {
        ro: ["24 ore", "35 ore", "45 ore", "56 ore"],
        en: ["24 hours", "35 hours", "45 hours", "56 hours"],
        de: ["24 Stunden", "35 Stunden", "45 Stunden", "56 Stunden"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Odihna săptămânală regulată este 45 ore, care poate fi redusă la 24 ore la fiecare două săptămâni (compensare necesară).",
        en: "Regular weekly rest is 45 hours, which can be reduced to 24 hours every other week (compensation required).",
        de: "Die reguläre wöchentliche Ruhezeit beträgt 45 Stunden, kann jede zweite Woche auf 24 Stunden reduziert werden (Kompensation erforderlich)."
      }
    },
    {
      question: {
        ro: "Cine este responsabil pentru conformitatea cu orele de condus?",
        en: "Who is responsible for drivers' hours compliance?",
        de: "Wer ist für die Einhaltung der Lenkzeiten verantwortlich?"
      },
      options: {
        ro: ["Doar șoferul", "Doar operatorul de transport", "Atât șoferul cât și operatorul împărtășesc responsabilitatea", "Doar clientul"],
        en: ["Only the driver", "Only the transport operator", "Both driver and operator share responsibility", "Only the client"],
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
        ro: ["~500 km", "~700 km", "~1.100 km", "~1.500 km"],
        en: ["~500 km", "~700 km", "~1,100 km", "~1,500 km"],
        de: ["~500 km", "~700 km", "~1.100 km", "~1.500 km"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Cu doi șoferi care se rotesc, aproximativ 1.100 km pot fi parcurși în 24 ore.",
        en: "With two drivers rotating, approximately 1,100 km can be covered in 24 hours.",
        de: "Mit zwei wechselnden Fahrern können ungefähr 1.100 km in 24 Stunden zurückgelegt werden."
      }
    },
    {
      question: {
        ro: "Când se termină interdicția de duminică pentru camioane în Germania?",
        en: "When does Germany's Sunday driving ban end?",
        de: "Wann endet das Sonntagsfahrverbot in Deutschland?"
      },
      options: {
        ro: ["18:00", "20:00", "22:00", "Miezul nopții"],
        en: ["18:00", "20:00", "22:00", "Midnight"],
        de: ["18:00", "20:00", "22:00", "Mitternacht"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Interdicția de duminică pentru camioane >3.5t în Germania se termină la ora 22:00.",
        en: "Germany's Sunday driving ban for trucks >3.5t ends at 22:00.",
        de: "Das Sonntagsfahrverbot für LKW >3,5t in Deutschland endet um 22:00 Uhr."
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
        ro: "Care este rata aproximativă de taxă rutieră în Germania per km?",
        en: "What is the approximate toll rate in Germany per km?",
        de: "Was ist der ungefähre Mautsatz in Deutschland pro km?"
      },
      options: {
        ro: ["€0.15/km", "€0.25/km", "€0.45/km", "€0.65/km"],
        en: ["€0.15/km", "€0.25/km", "€0.45/km", "€0.65/km"],
        de: ["€0,15/km", "€0,25/km", "€0,45/km", "€0,65/km"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Taxele rutiere germane sunt aproximativ €0.45/km, variind în funcție de clasa CO₂ și numărul de axe (tarife 2024).",
        en: "German toll rates are approximately €0.45/km, varying by CO₂ class and axle count (2024 tiers).",
        de: "Deutsche Mautsätze betragen ca. €0,45/km, variieren nach CO₂-Klasse und Achszahl (2024-Stufen)."
      }
    },
    {
      question: {
        ro: "Ce componentă ar trebui adăugată întotdeauna la costul de bază?",
        en: "Which component should always be added to the base cost?",
        de: "Welche Komponente sollte immer zu den Grundkosten hinzugefügt werden?"
      },
      options: {
        ro: ["Doar bonusul șoferului", "Taxe rutiere, feriboturi, accesorii, așteptare, taxe de frontieră", "Doar marja", "Nimic altceva nu este necesar"],
        en: ["Driver's bonus only", "Tolls, ferries, accessorials, waiting, border fees", "Only the margin", "Nothing else needed"],
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
        ro: "Care este limita maximă de răspundere per kg conform convenției CMR?",
        en: "What is the maximum liability limit per kg under CMR convention?",
        de: "Was ist die maximale Haftungsgrenze pro kg gemäß CMR-Übereinkommen?"
      },
      options: {
        ro: ["€5/kg", "€8.33/kg (DST)", "€12/kg", "€20/kg"],
        en: ["€5/kg", "€8.33/kg (SDR)", "€12/kg", "€20/kg"],
        de: ["€5/kg", "€8,33/kg (SZR)", "€12/kg", "€20/kg"]
      },
      correctIndex: 1,
      explanation: {
        ro: "CMR limitează răspunderea transportatorului la 8.33 DST (Drepturi Speciale de Tragere) per kg de greutate brută, aproximativ €10/kg.",
        en: "CMR limits carrier liability to 8.33 SDR (Special Drawing Rights) per kg of gross weight, approximately €10/kg.",
        de: "CMR begrenzt die Haftung des Frachtführers auf 8,33 SZR (Sonderziehungsrechte) pro kg Bruttogewicht, ca. €10/kg."
      }
    },
    {
      question: {
        ro: "Ce nu trebuie să semnați NICIODATĂ când primiți marfă deteriorată?",
        en: "What should you NEVER sign when receiving damaged cargo?",
        de: "Was sollten Sie NIEMALS unterschreiben, wenn Sie beschädigte Fracht erhalten?"
      },
      options: {
        ro: ["CMR-ul", "Un POD curat", "Factura", "Jurnalul șoferului"],
        en: ["The CMR", "A clean POD", "The invoice", "The driver's log"],
        de: ["Den CMR", "Einen sauberen POD", "Die Rechnung", "Das Fahrtenbuch"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Nu semnați niciodată un POD (Dovadă de Livrare) curat când marfa este deteriorată. Notați întotdeauna daunele și rezervele.",
        en: "Never sign a clean POD (Proof of Delivery) when cargo is damaged. Always note damages and reservations.",
        de: "Unterschreiben Sie niemals einen sauberen POD (Liefernachweis), wenn die Fracht beschädigt ist. Notieren Sie immer Schäden und Vorbehalte."
      }
    },
    {
      question: {
        ro: "În câte zile trebuie depuse reclamațiile pentru daune ascunse?",
        en: "Within how many days must hidden damage claims be submitted?",
        de: "Innerhalb wie vieler Tage müssen Ansprüche für versteckte Schäden eingereicht werden?"
      },
      options: {
        ro: ["3 zile", "7 zile", "21 zile", "30 zile"],
        en: ["3 days", "7 days", "21 days", "30 days"],
        de: ["3 Tage", "7 Tage", "21 Tage", "30 Tage"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Daunele ascunse care nu erau vizibile la livrare trebuie reclamate în 7 zile de la livrare.",
        en: "Hidden damage that wasn't visible at delivery must be claimed within 7 days of delivery.",
        de: "Versteckte Schäden, die bei Lieferung nicht sichtbar waren, müssen innerhalb von 7 Tagen nach Lieferung geltend gemacht werden."
      }
    }
  ],
  insurance: [
    {
      question: {
        ro: "Ce tip de asigurare acoperă răspunderea transportatorului pentru daunele la marfă?",
        en: "What type of insurance covers carrier's liability for cargo damage?",
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
        en: "CMR liability insurance covers the carrier's legal liability for cargo damage during transport.",
        de: "Die CMR-Haftpflichtversicherung deckt die gesetzliche Haftung des Frachtführers für Frachtschäden während des Transports."
      }
    },
    {
      question: {
        ro: "Care este limita tipică de acoperire pentru asigurarea CMR standard?",
        en: "What is the typical coverage limit for standard CMR insurance?",
        de: "Was ist die typische Deckungsgrenze für die Standard-CMR-Versicherung?"
      },
      options: {
        ro: ["€50.000", "€100.000-500.000", "€1 milion", "Nelimitat"],
        en: ["€50,000", "€100,000-500,000", "€1 million", "Unlimited"],
        de: ["€50.000", "€100.000-500.000", "€1 Million", "Unbegrenzt"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Asigurarea CMR standard oferă de obicei acoperire între €100.000 și €500.000 per eveniment.",
        en: "Standard CMR insurance typically provides coverage between €100,000 and €500,000 per occurrence.",
        de: "Die Standard-CMR-Versicherung bietet typischerweise Deckung zwischen €100.000 und €500.000 pro Schadensfall."
      }
    },
    {
      question: {
        ro: "Cum se mai numește asigurarea 'mărfuri în tranzit'?",
        en: "What is 'goods in transit' insurance also known as?",
        de: "Wie wird die 'Güter im Transit'-Versicherung auch genannt?"
      },
      options: {
        ro: ["Asigurare auto", "Asigurare cargo", "Răspundere publică", "Asigurare flotă"],
        en: ["Vehicle insurance", "Cargo insurance", "Public liability", "Fleet insurance"],
        de: ["Fahrzeugversicherung", "Frachtversicherung", "Öffentliche Haftpflicht", "Flottenversicherung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Asigurarea mărfurilor în tranzit (asigurare cargo) protejează valoarea reală a bunurilor transportate.",
        en: "Goods in transit insurance (cargo insurance) protects the actual value of the goods being transported.",
        de: "Güterversicherung (Frachtversicherung) schützt den tatsächlichen Wert der transportierten Güter."
      }
    },
    {
      question: {
        ro: "De ce ați putea avea nevoie de asigurare suplimentară peste răspunderea CMR?",
        en: "Why might you need additional insurance beyond CMR liability?",
        de: "Warum könnten Sie zusätzliche Versicherung über die CMR-Haftung hinaus benötigen?"
      },
      options: {
        ro: ["CMR este opțional", "Limitele CMR pot fi insuficiente pentru marfă de mare valoare", "CMR acoperă doar camioane", "CMR nu există"],
        en: ["CMR is optional", "CMR limits may be insufficient for high-value cargo", "CMR only covers trucks", "CMR doesn't exist"],
        de: ["CMR ist optional", "CMR-Grenzen können für hochwertige Fracht unzureichend sein", "CMR deckt nur LKW", "CMR existiert nicht"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Limitele de răspundere CMR (~€10/kg) pot fi insuficiente pentru marfă de mare valoare, necesitând acoperire suplimentară.",
        en: "CMR liability limits (~€10/kg) may be insufficient for high-value cargo, requiring additional coverage.",
        de: "CMR-Haftungsgrenzen (~€10/kg) können für hochwertige Fracht unzureichend sein und erfordern zusätzliche Deckung."
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
        ro: "ADR înseamnă 'Accord européen relatif au transport international des marchandises Dangereuses par Route' (Acordul privind Mărfurile Periculoase pe Șosele).",
        en: "ADR stands for 'Accord européen relatif au transport international des marchandises Dangereuses par Route' (Agreement on Dangerous goods by Road).",
        de: "ADR steht für 'Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße'."
      }
    },
    {
      question: {
        ro: "Ce formă au plăcuțele/etichetele de pericol ADR?",
        en: "What shape are ADR hazard placards/labels?",
        de: "Welche Form haben ADR-Gefahrentafeln/Etiketten?"
      },
      options: {
        ro: ["Cerc", "Pătrat înclinat la 45° (romb)", "Triunghi", "Dreptunghi"],
        en: ["Circle", "Square tilted 45° (diamond)", "Triangle", "Rectangle"],
        de: ["Kreis", "45° geneigtes Quadrat (Raute)", "Dreieck", "Rechteck"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Etichetele de pericol ADR au formă de romb (pătrat înclinat la 45°) și afișează clasa de pericol și simbolul.",
        en: "ADR hazard labels are diamond-shaped (square tilted 45°) and display the hazard class and symbol.",
        de: "ADR-Gefahrenetiketten sind rautenförmig (45° geneigtes Quadrat) und zeigen die Gefahrenklasse und das Symbol."
      }
    },
    {
      question: {
        ro: "Ce document trebuie să însoțească transporturile ADR?",
        en: "What document must accompany ADR shipments?",
        de: "Welches Dokument muss ADR-Sendungen begleiten?"
      },
      options: {
        ro: ["Doar CMR", "Document de Transport ADR cu numere UN", "Doar permisul de conducere", "Niciun document special"],
        en: ["Only CMR", "ADR Transport Document with UN numbers", "Driver's license only", "No special document"],
        de: ["Nur CMR", "ADR-Transportdokument mit UN-Nummern", "Nur Führerschein", "Kein spezielles Dokument"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Transporturile ADR necesită un document de transport specific care să arate numerele UN, denumirile corecte de expediere și contactele de urgență.",
        en: "ADR shipments require a specific transport document showing UN numbers, proper shipping names, and emergency contacts.",
        de: "ADR-Sendungen erfordern ein spezifisches Transportdokument mit UN-Nummern, korrekten Versandbezeichnungen und Notfallkontakten."
      }
    },
    {
      question: {
        ro: "Cine are nevoie de certificare de instruire ADR?",
        en: "Who needs ADR training certification?",
        de: "Wer benötigt eine ADR-Schulungsbescheinigung?"
      },
      options: {
        ro: ["Doar expeditorul", "Șoferii care transportă mărfuri periculoase", "Doar personalul de depozit", "Nimeni în mod specific"],
        en: ["Only the shipper", "Drivers transporting dangerous goods", "Only warehouse staff", "No one specifically"],
        de: ["Nur der Versender", "Fahrer, die Gefahrgut transportieren", "Nur Lagerpersonal", "Niemand speziell"]
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
        ro: "CMR (Convenția privind Contractul de Transport Internațional de Mărfuri pe Șosele) este scrisoarea de trăsură standard pentru transportul rutier internațional.",
        en: "The CMR (Convention on the Contract for International Carriage of Goods by Road) is the standard consignment note for international road transport.",
        de: "Der CMR (Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr) ist der Standard-Frachtbrief für den internationalen Straßentransport."
      }
    },
    {
      question: {
        ro: "Câte copii originale ale unui CMR sunt create de obicei?",
        en: "How many original copies of a CMR are typically created?",
        de: "Wie viele Originalkopien eines CMR werden typischerweise erstellt?"
      },
      options: {
        ro: ["1 copie", "2 copii", "3-4 copii", "6 copii"],
        en: ["1 copy", "2 copies", "3-4 copies", "6 copies"],
        de: ["1 Kopie", "2 Kopien", "3-4 Kopien", "6 Kopien"]
      },
      correctIndex: 2,
      explanation: {
        ro: "CMR-urile sunt de obicei emise în 3-4 copii: pentru expeditor, transportator, destinatar și uneori o copie suplimentară.",
        en: "CMRs are typically issued in 3-4 copies: for the sender, carrier, consignee, and sometimes an additional copy.",
        de: "CMRs werden typischerweise in 3-4 Kopien ausgestellt: für Absender, Frachtführer, Empfänger und manchmal eine zusätzliche Kopie."
      }
    },
    {
      question: {
        ro: "Ce document vamal este necesar pentru mărfurile care traversează granițele UE către țări non-UE?",
        en: "What customs document is required for goods crossing EU borders to non-EU countries?",
        de: "Welches Zolldokument ist für Waren erforderlich, die EU-Grenzen in Nicht-EU-Länder überqueren?"
      },
      options: {
        ro: ["Doar CMR", "Document de Tranzit T1", "Doar lista de ambalare", "Doar factura"],
        en: ["CMR only", "T1 Transit Document", "Packing list only", "Invoice only"],
        de: ["Nur CMR", "T1-Versanddokument", "Nur Packliste", "Nur Rechnung"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Documentele T1 (tranzit extern) sunt necesare pentru mărfurile non-UE sau mărfurile care părăsesc teritoriul vamal UE.",
        en: "T1 (external transit) documents are required for non-EU goods or goods leaving the EU customs territory.",
        de: "T1-Dokumente (externes Versandverfahren) sind für Nicht-EU-Waren oder Waren erforderlich, die das EU-Zollgebiet verlassen."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să facă un șofer dacă observă discrepanțe în timpul încărcării?",
        en: "What should a driver do if they notice discrepancies during loading?",
        de: "Was sollte ein Fahrer tun, wenn er Unstimmigkeiten beim Beladen bemerkt?"
      },
      options: {
        ro: ["Ignoră", "Notează rezerve în CMR Căsuța 18", "Refuză complet încărcătura", "Sună poliția"],
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
        en: "ATP (Agreement on Transport of Perishables) establishes standards for temperature-controlled vehicles used in international transport.",
        de: "ATP (Übereinkommen über die internationale Beförderung leicht verderblicher Lebensmittel) legt Standards für temperaturgeführte Fahrzeuge im internationalen Transport fest."
      }
    },
    {
      question: {
        ro: "Care este intervalul tipic de temperatură pentru mărfuri refrigerate?",
        en: "What is the typical temperature range for chilled goods?",
        de: "Was ist der typische Temperaturbereich für gekühlte Waren?"
      },
      options: {
        ro: ["-25°C la -18°C", "-18°C la -12°C", "+2°C la +8°C", "+15°C la +25°C"],
        en: ["-25°C to -18°C", "-18°C to -12°C", "+2°C to +8°C", "+15°C to +25°C"],
        de: ["-25°C bis -18°C", "-18°C bis -12°C", "+2°C bis +8°C", "+15°C bis +25°C"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Mărfurile refrigerate (carne proaspătă, lactate, farmaceutice) sunt de obicei transportate la +2°C până la +8°C.",
        en: "Chilled goods (fresh meat, dairy, pharmaceuticals) are typically transported at +2°C to +8°C.",
        de: "Gekühlte Waren (frisches Fleisch, Milchprodukte, Pharmazeutika) werden typischerweise bei +2°C bis +8°C transportiert."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să faceți ÎNAINTE de încărcarea mărfurilor sensibile la temperatură?",
        en: "What should you do BEFORE loading temperature-sensitive cargo?",
        de: "Was sollten Sie VOR dem Beladen temperaturempfindlicher Fracht tun?"
      },
      options: {
        ro: ["Nimic special necesar", "Pre-răciți remorca la temperatura necesară", "Opriți unitatea frigorifică", "Încărcați cât mai repede posibil"],
        en: ["Nothing special needed", "Pre-cool the trailer to required temperature", "Turn off the reefer unit", "Load as fast as possible"],
        de: ["Nichts Besonderes nötig", "Den Auflieger auf die erforderliche Temperatur vorkühlen", "Das Kühlaggregat ausschalten", "So schnell wie möglich laden"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Pre-răciți întotdeauna remorca la temperatura necesară înainte de încărcare. Nu încărcați niciodată marfă caldă într-o remorcă rece.",
        en: "Always pre-cool the trailer to the required temperature before loading. Never load warm cargo into a cold trailer.",
        de: "Kühlen Sie den Auflieger immer auf die erforderliche Temperatur vor, bevor Sie laden. Laden Sie niemals warme Fracht in einen kalten Auflieger."
      }
    },
    {
      question: {
        ro: "Ce toleranță este acceptabilă pentru lanțul rece farmaceutic?",
        en: "What tolerance is acceptable for pharmaceutical cold chain?",
        de: "Welche Toleranz ist für die pharmazeutische Kühlkette akzeptabel?"
      },
      options: {
        ro: ["+/- 5°C", "+/- 2°C", "ZERO toleranță", "+/- 10°C"],
        en: ["+/- 5°C", "+/- 2°C", "ZERO tolerance", "+/- 10°C"],
        de: ["+/- 5°C", "+/- 2°C", "KEINE Toleranz", "+/- 10°C"]
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
        de: "T1 (Externes Versandverfahren) wird für Nicht-EU-Waren verwendet, die unter Zollaufsicht durch EU-Gebiet transportiert werden."
      }
    },
    {
      question: {
        ro: "Ce trebuie să se întâmple cu sigiliile vamale în timpul tranzitului T1?",
        en: "What must happen to customs seals during T1 transit?",
        de: "Was muss mit Zollsiegeln während des T1-Transits passieren?"
      },
      options: {
        ro: ["Pot fi îndepărtate oricând", "Trebuie să rămână intacte până la vama de destinație", "Expiră după 24 ore", "Sunt opționale"],
        en: ["They can be removed at any time", "They must remain intact until destination customs", "They expire after 24 hours", "They are optional"],
        de: ["Sie können jederzeit entfernt werden", "Sie müssen bis zum Bestimmungszoll intakt bleiben", "Sie verfallen nach 24 Stunden", "Sie sind optional"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Sigiliile vamale trebuie să rămână intacte pe tot parcursul tranzitului. Ruperea sigiliilor duce la încălcări vamale și revendicări de garanție.",
        en: "Customs seals must remain intact throughout transit. Breaking seals results in customs violations and guarantee claims.",
        de: "Zollsiegel müssen während des gesamten Transits intakt bleiben. Das Brechen von Siegeln führt zu Zollverstößen und Garantieansprüchen."
      }
    },
    {
      question: {
        ro: "Ce este un număr EORI?",
        en: "What is an EORI number?",
        de: "Was ist eine EORI-Nummer?"
      },
      options: {
        ro: ["Înmatriculare vehicul", "Înregistrare și Identificare Operator Economic pentru vamă", "Număr permis de conducere", "Certificat de asigurare"],
        en: ["Vehicle registration", "Economic Operator Registration for customs", "Driver license number", "Insurance certificate"],
        de: ["Fahrzeugregistrierung", "Wirtschaftsbeteiligte Registrierung für Zoll", "Führerscheinnummer", "Versicherungszertifikat"]
      },
      correctIndex: 1,
      explanation: {
        ro: "EORI (Înregistrarea și Identificarea Operatorilor Economici) este necesar pentru orice afacere care desfășoară activități vamale în UE.",
        en: "EORI (Economic Operators Registration and Identification) is required for any business conducting customs activities in the EU.",
        de: "EORI (Wirtschaftsbeteiligte-Registrierung und -Identifizierung) ist für jedes Unternehmen erforderlich, das Zollaktivitäten in der EU durchführt."
      }
    },
    {
      question: {
        ro: "Ce sistem este necesar pentru importurile/exporturile din Regatul Unit post-Brexit?",
        en: "What system is required for UK imports/exports post-Brexit?",
        de: "Welches System ist für UK-Importe/Exporte nach dem Brexit erforderlich?"
      },
      options: {
        ro: ["Doar T1", "GVMS și GMR", "Niciun sistem necesar", "Doar TIR Carnet"],
        en: ["T1 only", "GVMS and GMR", "No system needed", "TIR Carnet only"],
        de: ["Nur T1", "GVMS und GMR", "Kein System erforderlich", "Nur TIR-Carnet"]
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
        ro: "Cum funcționează TVA-ul pentru transportul B2B intra-UE?",
        en: "How does VAT work for B2B intra-EU transport?",
        de: "Wie funktioniert die MwSt. für B2B-Transport innerhalb der EU?"
      },
      options: {
        ro: ["Cota standard de TVA", "Taxare inversă (0% TVA)", "Niciodată TVA", "TVA dublu"],
        en: ["Standard VAT rate", "Reverse charge (0% VAT)", "No VAT ever", "Double VAT"],
        de: ["Standard-MwSt.-Satz", "Reverse-Charge (0% MwSt.)", "Nie MwSt.", "Doppelte MwSt."]
      },
      correctIndex: 1,
      explanation: {
        ro: "Transportul B2B intra-UE folosește mecanismul de taxare inversă - 0% TVA, clientul contabilizează TVA-ul în țara sa.",
        en: "B2B intra-EU transport uses reverse charge mechanism - 0% VAT with customer accounting for VAT in their country.",
        de: "B2B-Transport innerhalb der EU verwendet den Reverse-Charge-Mechanismus - 0% MwSt., der Kunde verbucht die MwSt. in seinem Land."
      }
    },
    {
      question: {
        ro: "Ce este DSO în termeni financiari?",
        en: "What is DSO in financial terms?",
        de: "Was ist DSO in finanzieller Hinsicht?"
      },
      options: {
        ro: ["Comandă Zilnică de Vânzări", "Zile de Vânzări Restante", "Operațiune Directă de Vânzări", "Ofertă de Vânzare cu Discount"],
        en: ["Daily Sales Order", "Days Sales Outstanding", "Direct Sales Operation", "Discount Sales Offer"],
        de: ["Täglicher Verkaufsauftrag", "Außenstandstage", "Direkter Verkaufsbetrieb", "Rabattverkaufsangebot"]
      },
      correctIndex: 1,
      explanation: {
        ro: "DSO (Zile de Vânzări Restante) măsoară numărul mediu de zile pentru încasarea plății după facturare. Țintă: <45 zile.",
        en: "DSO (Days Sales Outstanding) measures average number of days to collect payment after invoicing. Target: <45 days.",
        de: "DSO (Außenstandstage) misst die durchschnittliche Anzahl der Tage bis zur Zahlung nach Rechnungsstellung. Ziel: <45 Tage."
      }
    },
    {
      question: {
        ro: "Când ar trebui să facturați pentru transportul finalizat?",
        en: "When should you invoice for completed transport?",
        de: "Wann sollten Sie für abgeschlossenen Transport fakturieren?"
      },
      options: {
        ro: ["În 30 de zile", "În 48 de ore de la livrare", "Doar lot lunar", "Când solicită clientul"],
        en: ["Within 30 days", "Within 48 hours of delivery", "Monthly batch only", "When customer requests"],
        de: ["Innerhalb von 30 Tagen", "Innerhalb von 48 Stunden nach Lieferung", "Nur monatliche Sammelrechnung", "Auf Kundenanfrage"]
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
        ro: ["€50.000", "€100.000", "€300.000+", "Nu este necesar un minim"],
        en: ["€50,000", "€100,000", "€300,000+", "No minimum needed"],
        de: ["€50.000", "€100.000", "€300.000+", "Kein Minimum erforderlich"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Solicitați asigurare CMR minimă de €300.000 pentru marfă standard. Marfa de mare valoare poate necesita €500.000+.",
        en: "Require minimum €300,000 CMR insurance for standard freight. High-value cargo may need €500,000+.",
        de: "Fordern Sie mindestens €300.000 CMR-Versicherung für Standardfracht. Hochwertige Fracht kann €500.000+ erfordern."
      }
    },
    {
      question: {
        ro: "Ce definește un transportator preferențial 'Nivel 1'?",
        en: "What defines a 'Tier 1' preferred carrier?",
        de: "Was definiert einen 'Tier 1'-bevorzugten Frachtführer?"
      },
      options: {
        ro: ["Cele mai ieftine tarife", "Transportator nou în probă", "Fiabilitate dovedită, capacitate bună, valoare strategică", "Orice transportator cu GPS"],
        en: ["Cheapest rates", "New carrier on trial", "Proven reliability, good capacity, strategic value", "Any carrier with GPS"],
        de: ["Günstigste Preise", "Neuer Frachtführer auf Probe", "Bewiesene Zuverlässigkeit, gute Kapazität, strategischer Wert", "Jeder Frachtführer mit GPS"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Transportatorii Nivel 1 au istoric dovedit, capacitate puternică, tarife competitive și sunt parteneri strategici pentru rute cheie.",
        en: "Tier 1 carriers have proven track records, strong capacity, competitive rates, and are strategic partners for key lanes.",
        de: "Tier 1-Frachtführer haben bewährte Erfolgsbilanz, starke Kapazität, wettbewerbsfähige Preise und sind strategische Partner für Schlüsselstrecken."
      }
    },
    {
      question: {
        ro: "Cât de des ar trebui să revizuiți performanța transportatorilor?",
        en: "How often should you review carrier performance?",
        de: "Wie oft sollten Sie die Leistung der Frachtführer überprüfen?"
      },
      options: {
        ro: ["Niciodată", "Doar anual", "Lunar/Trimestrial cu fișe de evaluare", "Doar când apar probleme"],
        en: ["Never", "Annually only", "Monthly/Quarterly with scorecards", "Only when problems occur"],
        de: ["Nie", "Nur jährlich", "Monatlich/Vierteljährlich mit Scorecards", "Nur bei Problemen"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Evaluările regulate de performanță lunare sau trimestriale cu fișe KPI asigură calitate continuă și identifică problemele timpuriu.",
        en: "Regular monthly or quarterly performance reviews with KPI scorecards ensure continuous quality and identify issues early.",
        de: "Regelmäßige monatliche oder vierteljährliche Leistungsüberprüfungen mit KPI-Scorecards gewährleisten kontinuierliche Qualität und identifizieren Probleme frühzeitig."
      }
    },
    {
      question: {
        ro: "Ce este 'dubla brokeraj' și de ce este riscantă?",
        en: "What is 'double brokering' and why is it risky?",
        de: "Was ist 'Doppelvermittlung' und warum ist sie riskant?"
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
        ro: "Cât de repede ar trebui să răspundeți la o cerere urgentă de cotație spot?",
        en: "How quickly should you respond to an urgent spot quote request?",
        de: "Wie schnell sollten Sie auf eine dringende Spot-Angebotsanfrage reagieren?"
      },
      options: {
        ro: ["În aceeași zi", "În 2 ore", "În 15-30 minute", "În 1 săptămână"],
        en: ["Same day", "Within 2 hours", "Within 15-30 minutes", "Within 1 week"],
        de: ["Am selben Tag", "Innerhalb von 2 Stunden", "Innerhalb von 15-30 Minuten", "Innerhalb von 1 Woche"]
      },
      correctIndex: 2,
      explanation: {
        ro: "Cotațiile spot urgente necesită răspuns în 15 minute, maximum 30 minute. Viteza câștigă pe piața spot.",
        en: "Urgent spot quotes require response within 15 minutes, maximum 30 minutes. Speed wins in spot market.",
        de: "Dringende Spot-Angebote erfordern Antwort innerhalb von 15 Minuten, maximal 30 Minuten. Geschwindigkeit gewinnt im Spotmarkt."
      }
    },
    {
      question: {
        ro: "Ce ar trebui să includă fiecare cotație de transport?",
        en: "What should every transport quotation include?",
        de: "Was sollte jedes Transportangebot enthalten?"
      },
      options: {
        ro: ["Doar prețul", "Preț, perioadă de valabilitate, detalii serviciu, termeni de plată, excluderi", "Doar datele de ridicare/livrare", "Doar numele transportatorului"],
        en: ["Just the price", "Price, validity period, service details, payment terms, exclusions", "Only pickup/delivery dates", "Carrier name only"],
        de: ["Nur der Preis", "Preis, Gültigkeitszeitraum, Servicedetails, Zahlungsbedingungen, Ausschlüsse", "Nur Abhol-/Liefertermine", "Nur Frachtführername"]
      },
      correctIndex: 1,
      explanation: {
        ro: "Cotațiile complete includ preț, valabilitate, scop serviciu, timp de tranzit, termeni de plată și ce este exclus.",
        en: "Complete quotes include price, validity, service scope, transit time, payment terms, and what's excluded.",
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
        ro: "Ce măsoară 'DSO' în expediția de mărfuri?",
        en: "What does 'DSO' measure in freight forwarding?",
        de: "Was misst 'DSO' in der Spedition?"
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
        ro: "Ce este 'Rata de Rezoluție la Primul Contact'?",
        en: "What is 'First Contact Resolution Rate'?",
        de: "Was ist die 'Erstlösungsquote'?"
      },
      options: {
        ro: ["Viteza primei livrări", "Procentajul problemelor rezolvate în prima interacțiune", "Timpul de răspuns la primul apel", "Timpul de răspuns al primului transportator"],
        en: ["Speed of first delivery", "Percentage of issues solved in first interaction", "Time to answer first call", "First carrier response time"],
        de: ["Geschwindigkeit der ersten Lieferung", "Prozentsatz der beim ersten Kontakt gelösten Probleme", "Zeit bis zur Beantwortung des ersten Anrufs", "Erste Frachtführer-Antwortzeit"]
      },
      correctIndex: 1,
      explanation: {
        ro: "FCR măsoară ce procentaj din problemele clienților sunt rezolvate în prima interacțiune. Țintă: >80%.",
        en: "FCR measures what percentage of customer issues are resolved in the first interaction. Target: >80%.",
        de: "FCR misst, welcher Prozentsatz der Kundenprobleme bei der ersten Interaktion gelöst wird. Ziel: >80%."
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
        en: ["At seller's door", "When goods are handed to the carrier", "At destination", "After customs clearance"],
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
        en: "Win-win creates sustainable relationships. If one party loses badly, they won't want to work with you again.",
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
        en: ["Never - always make a deal", "When terms are worse than your BATNA or below acceptable margins", "At first disagreement", "Only if they're rude"],
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
        en: "What is TIMOCOM's primary market strength?",
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