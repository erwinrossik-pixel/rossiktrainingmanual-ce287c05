import { TranslatedQuizQuestion } from '../quizTranslations';

// Advanced questions for chapters with 100% pass rate
// These questions have varied correct indices and scenario-based complexity

export const advancedAccountingQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "O companie de transport are venituri de 150.000 EUR și costuri de 127.500 EUR. Care este marja de profit procentuală?",
      de: "Ein Transportunternehmen hat Einnahmen von 150.000 EUR und Kosten von 127.500 EUR. Wie hoch ist die Gewinnmarge in Prozent?",
      en: "A transport company has revenues of €150,000 and costs of €127,500. What is the profit margin percentage?"
    },
    options: {
      ro: ["10%", "12%", "15%", "18%"],
      de: ["10%", "12%", "15%", "18%"],
      en: ["10%", "12%", "15%", "18%"]
    },
    correctIndex: 2, // 15%: (150000-127500)/150000 = 15%
    explanation: {
      ro: "Marja = (150.000 - 127.500) / 150.000 × 100 = 15%. Formula: (Venit - Cost) / Venit × 100.",
      de: "Marge = (150.000 - 127.500) / 150.000 × 100 = 15%. Formel: (Umsatz - Kosten) / Umsatz × 100.",
      en: "Margin = (150,000 - 127,500) / 150,000 × 100 = 15%. Formula: (Revenue - Cost) / Revenue × 100."
    }
  },
  {
    question: {
      ro: "Un camion parcurge 12.000 km/lună cu consum mediu de 32l/100km. La 1.45 EUR/litru, care este costul lunar de combustibil?",
      de: "Ein Lkw fährt 12.000 km/Monat mit einem Durchschnittsverbrauch von 32l/100km. Bei 1,45 EUR/Liter, wie hoch sind die monatlichen Kraftstoffkosten?",
      en: "A truck travels 12,000 km/month with average consumption of 32l/100km. At €1.45/liter, what is the monthly fuel cost?"
    },
    options: {
      ro: ["4.176 EUR", "5.568 EUR", "6.240 EUR", "3.840 EUR"],
      de: ["4.176 EUR", "5.568 EUR", "6.240 EUR", "3.840 EUR"],
      en: ["€4,176", "€5,568", "€6,240", "€3,840"]
    },
    correctIndex: 1, // 12000 × 0.32 × 1.45 = 5,568
    explanation: {
      ro: "12.000 km × 32l/100km × 1.45 EUR = 5.568 EUR. Calculul corect al consumului este esențial pentru bugetare.",
      de: "12.000 km × 32l/100km × 1,45 EUR = 5.568 EUR. Korrekte Verbrauchsberechnung ist essentiell für Budgetierung.",
      en: "12,000 km × 32l/100km × €1.45 = €5,568. Correct consumption calculation is essential for budgeting."
    }
  },
  {
    question: {
      ro: "Care din următoarele NU este considerat cost fix în transportul rutier?",
      de: "Welche der folgenden ist KEINE Fixkosten im Straßentransport?",
      en: "Which of the following is NOT considered a fixed cost in road transport?"
    },
    options: {
      ro: ["Asigurarea vehiculului", "Rata de leasing", "Combustibilul", "Licența de transport"],
      de: ["Fahrzeugversicherung", "Leasingrate", "Kraftstoff", "Transportlizenz"],
      en: ["Vehicle insurance", "Leasing rate", "Fuel", "Transport license"]
    },
    correctIndex: 2, // Fuel is variable
    explanation: {
      ro: "Combustibilul este cost variabil - crește direct proporțional cu kilometrii parcurși. Celelalte sunt fixe.",
      de: "Kraftstoff ist ein variabler Kosten - steigt direkt proportional zu den gefahrenen Kilometern. Die anderen sind fix.",
      en: "Fuel is a variable cost - it increases directly proportional to kilometers driven. The others are fixed."
    }
  },
  {
    question: {
      ro: "O flotă de 10 camioane are costuri fixe lunare de 45.000 EUR și costuri variabile de 0.85 EUR/km. Câți km trebuie parcurși pentru break-even dacă tariful mediu este 1.25 EUR/km?",
      de: "Eine Flotte von 10 Lkw hat monatliche Fixkosten von 45.000 EUR und variable Kosten von 0,85 EUR/km. Wie viele km müssen für Break-even gefahren werden bei durchschnittlichem Tarif von 1,25 EUR/km?",
      en: "A fleet of 10 trucks has monthly fixed costs of €45,000 and variable costs of €0.85/km. How many km must be driven for break-even at average rate of €1.25/km?"
    },
    options: {
      ro: ["90.000 km", "112.500 km", "135.000 km", "150.000 km"],
      de: ["90.000 km", "112.500 km", "135.000 km", "150.000 km"],
      en: ["90,000 km", "112,500 km", "135,000 km", "150,000 km"]
    },
    correctIndex: 1, // 45000 / (1.25 - 0.85) = 112,500 km
    explanation: {
      ro: "Break-even = Costuri fixe / (Tarif - Cost variabil) = 45.000 / (1.25 - 0.85) = 112.500 km.",
      de: "Break-even = Fixkosten / (Tarif - Variable Kosten) = 45.000 / (1,25 - 0,85) = 112.500 km.",
      en: "Break-even = Fixed costs / (Rate - Variable cost) = 45,000 / (1.25 - 0.85) = 112,500 km."
    }
  },
  {
    question: {
      ro: "Un camion achiziționat cu 95.000 EUR are valoare reziduală de 15.000 EUR după 8 ani. Care este amortizarea anuală liniară?",
      de: "Ein für 95.000 EUR gekaufter Lkw hat einen Restwert von 15.000 EUR nach 8 Jahren. Wie hoch ist die jährliche lineare Abschreibung?",
      en: "A truck purchased for €95,000 has residual value of €15,000 after 8 years. What is the annual straight-line depreciation?"
    },
    options: {
      ro: ["10.000 EUR", "11.875 EUR", "12.500 EUR", "9.500 EUR"],
      de: ["10.000 EUR", "11.875 EUR", "12.500 EUR", "9.500 EUR"],
      en: ["€10,000", "€11,875", "€12,500", "€9,500"]
    },
    correctIndex: 0, // (95000 - 15000) / 8 = 10,000
    explanation: {
      ro: "Amortizare = (Cost - Valoare reziduală) / Ani = (95.000 - 15.000) / 8 = 10.000 EUR/an.",
      de: "Abschreibung = (Anschaffungskosten - Restwert) / Jahre = (95.000 - 15.000) / 8 = 10.000 EUR/Jahr.",
      en: "Depreciation = (Cost - Residual value) / Years = (95,000 - 15,000) / 8 = €10,000/year."
    }
  }
];

export const advancedEmergencyQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Șoferul raportează un accident minor fără victime pe A1 în Italia. Care este PRIMA acțiune pe care trebuie să o întreprinzi ca dispecer?",
      de: "Der Fahrer meldet einen kleinen Unfall ohne Verletzte auf der A1 in Italien. Was ist die ERSTE Aktion, die Sie als Disponent unternehmen müssen?",
      en: "Driver reports a minor accident with no injuries on the A1 in Italy. What is the FIRST action you must take as dispatcher?"
    },
    options: {
      ro: ["Contactezi clientul", "Verifici starea șoferului și ceri detalii despre locație și situație", "Trimiți un alt camion", "Contactezi asiguratorul"],
      de: ["Kontaktieren Sie den Kunden", "Überprüfen Sie den Zustand des Fahrers und fordern Sie Details zu Ort und Situation an", "Schicken Sie einen anderen Lkw", "Kontaktieren Sie den Versicherer"],
      en: ["Contact the client", "Verify driver's condition and request details about location and situation", "Send another truck", "Contact the insurer"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prima prioritate este verificarea stării șoferului și obținerea informațiilor complete pentru a gestiona corect situația.",
      de: "Erste Priorität ist die Überprüfung des Fahrerzustands und die Beschaffung vollständiger Informationen für das richtige Krisenmanagement.",
      en: "First priority is verifying driver condition and obtaining complete information for proper crisis management."
    }
  },
  {
    question: {
      ro: "Un camion cu marfă frigorifică (-18°C) are o defecțiune a unității frigorifice pe DN1 la 50km de Brașov. Marfa valorează 85.000 EUR. Care este ordinea corectă a acțiunilor?",
      de: "Ein Lkw mit Kühlgut (-18°C) hat einen Kühlausfall auf der DN1, 50km von Brașov entfernt. Die Fracht ist 85.000 EUR wert. Was ist die richtige Reihenfolge der Maßnahmen?",
      en: "A truck with refrigerated cargo (-18°C) has a cooling unit failure on DN1, 50km from Brașov. Cargo is worth €85,000. What is the correct order of actions?"
    },
    options: {
      ro: ["Transbordare → Notificare asigurator → Informare client", "Reparație → Transbordare → Raport", "Notificare client → Asistență tehnică → Transbordare sau reparație", "Așteptare → Analiză → Decizie"],
      de: ["Umladen → Versicherer benachrichtigen → Kunden informieren", "Reparatur → Umladen → Bericht", "Kunde informieren → Technische Hilfe → Umladen oder Reparatur", "Warten → Analysieren → Entscheiden"],
      en: ["Transshipment → Notify insurer → Inform client", "Repair → Transshipment → Report", "Notify client → Technical assistance → Transshipment or repair", "Wait → Analyze → Decide"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Clientul trebuie informat imediat, apoi se organizează asistență tehnică și se decide soluția optimă (reparație sau transbordare).",
      de: "Der Kunde muss sofort informiert werden, dann wird technische Hilfe organisiert und die optimale Lösung entschieden (Reparatur oder Umladen).",
      en: "Client must be informed immediately, then technical assistance is organized and optimal solution decided (repair or transshipment)."
    }
  },
  {
    question: {
      ro: "Care dintre următoarele NU este o informație esențială pentru raportul de incident?",
      de: "Welche der folgenden ist KEINE wesentliche Information für den Unfallbericht?",
      en: "Which of the following is NOT essential information for the incident report?"
    },
    options: {
      ro: ["Locația exactă GPS", "Fotografii ale daunelor", "Istoricul rutelor anterioare ale șoferului", "Datele martorilor"],
      de: ["Genaue GPS-Position", "Fotos der Schäden", "Frühere Routenhistorie des Fahrers", "Zeugendaten"],
      en: ["Exact GPS location", "Photos of damages", "Driver's previous route history", "Witness data"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Istoricul rutelor anterioare nu este relevant pentru incidentul curent. Celelalte sunt esențiale pentru documentare.",
      de: "Die frühere Routenhistorie ist für den aktuellen Vorfall nicht relevant. Die anderen sind wesentlich für die Dokumentation.",
      en: "Previous route history is not relevant to the current incident. The others are essential for documentation."
    }
  },
  {
    question: {
      ro: "În timpul nopții, șoferul descoperă că sigiliul remorcii este rupt în parcarea din Franța. Ce trebuie să facă IMEDIAT?",
      de: "Nachts entdeckt der Fahrer, dass die Anhängerplombe auf einem Parkplatz in Frankreich gebrochen ist. Was muss er SOFORT tun?",
      en: "At night, the driver discovers the trailer seal is broken at a parking lot in France. What must they do IMMEDIATELY?"
    },
    options: {
      ro: ["Continuă drumul și raportează la destinație", "Nu deschide remorca, fotografiază sigiliul, apelează poliția și dispeceratul", "Verifică marfa și reaplică sigiliul", "Așteaptă până dimineața"],
      de: ["Weiterfahren und am Ziel melden", "Anhänger nicht öffnen, Plombe fotografieren, Polizei und Disposition anrufen", "Ware überprüfen und neu versiegeln", "Bis morgen warten"],
      en: ["Continue and report at destination", "Don't open trailer, photograph seal, call police and dispatch", "Check cargo and reseal", "Wait until morning"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Nu deschide remorca (păstrezi starea inițială), documentezi vizual, alertezi imediat poliția și dispeceratul.",
      de: "Anhänger nicht öffnen (Originalzustand erhalten), visuell dokumentieren, sofort Polizei und Disposition alarmieren.",
      en: "Don't open trailer (preserve original state), document visually, immediately alert police and dispatch."
    }
  },
  {
    question: {
      ro: "Care este termenul maxim legal pentru notificarea asiguratorului după un incident major în majoritatea țărilor UE?",
      de: "Was ist die maximale gesetzliche Frist für die Benachrichtigung des Versicherers nach einem Großschaden in den meisten EU-Ländern?",
      en: "What is the maximum legal deadline for notifying the insurer after a major incident in most EU countries?"
    },
    options: {
      ro: ["6 ore", "24-48 ore", "7 zile", "30 zile"],
      de: ["6 Stunden", "24-48 Stunden", "7 Tage", "30 Tage"],
      en: ["6 hours", "24-48 hours", "7 days", "30 days"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Majoritatea polițelor de asigurare și legislațiile naționale cer notificarea în 24-48 ore pentru incidente majore.",
      de: "Die meisten Versicherungspolicen und nationalen Gesetze verlangen eine Benachrichtigung innerhalb von 24-48 Stunden bei Großschäden.",
      en: "Most insurance policies and national laws require notification within 24-48 hours for major incidents."
    }
  }
];

export const advancedSustainabilityQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Un camion Euro VI consumă 28l/100km și emite 2.64 kg CO2/litru diesel. Câte kg CO2 emite pe 1000 km?",
      de: "Ein Euro VI Lkw verbraucht 28l/100km und emittiert 2,64 kg CO2/Liter Diesel. Wie viele kg CO2 emittiert er auf 1000 km?",
      en: "A Euro VI truck consumes 28l/100km and emits 2.64 kg CO2/liter diesel. How many kg CO2 does it emit per 1000 km?"
    },
    options: {
      ro: ["528 kg CO2", "739.2 kg CO2", "892.4 kg CO2", "660 kg CO2"],
      de: ["528 kg CO2", "739,2 kg CO2", "892,4 kg CO2", "660 kg CO2"],
      en: ["528 kg CO2", "739.2 kg CO2", "892.4 kg CO2", "660 kg CO2"]
    },
    correctIndex: 1, // 1000 × 0.28 × 2.64 = 739.2
    explanation: {
      ro: "1000 km × 28l/100km × 2.64 kg = 739.2 kg CO2. Calculul amprentei de carbon este esențial pentru raportări.",
      de: "1000 km × 28l/100km × 2,64 kg = 739,2 kg CO2. Die CO2-Fußabdruck-Berechnung ist essentiell für Berichte.",
      en: "1000 km × 28l/100km × 2.64 kg = 739.2 kg CO2. Carbon footprint calculation is essential for reporting."
    }
  },
  {
    question: {
      ro: "Care combustibil alternativ poate reduce emisiile CO2 cu până la 90% comparativ cu dieselul?",
      de: "Welcher alternative Kraftstoff kann CO2-Emissionen um bis zu 90% gegenüber Diesel reduzieren?",
      en: "Which alternative fuel can reduce CO2 emissions by up to 90% compared to diesel?"
    },
    options: {
      ro: ["LNG (Gaz Natural Lichefiat)", "Biodiesel B7", "HVO (Ulei Vegetal Hidrotratat)", "CNG (Gaz Natural Comprimat)"],
      de: ["LNG (Flüssigerdgas)", "Biodiesel B7", "HVO (Hydriertes Pflanzenöl)", "CNG (Komprimiertes Erdgas)"],
      en: ["LNG (Liquefied Natural Gas)", "Biodiesel B7", "HVO (Hydrotreated Vegetable Oil)", "CNG (Compressed Natural Gas)"]
    },
    correctIndex: 2,
    explanation: {
      ro: "HVO din deșeuri poate reduce emisiile CO2 cu până la 90% pe baza Well-to-Wheel. LNG reduce cu ~20-25%, B7 cu ~7%.",
      de: "HVO aus Abfällen kann CO2-Emissionen um bis zu 90% auf Well-to-Wheel-Basis reduzieren. LNG reduziert um ~20-25%, B7 um ~7%.",
      en: "HVO from waste can reduce CO2 emissions by up to 90% on a Well-to-Wheel basis. LNG reduces by ~20-25%, B7 by ~7%."
    }
  },
  {
    question: {
      ro: "Ce reprezintă Scope 3 în raportarea emisiilor de carbon?",
      de: "Was bedeutet Scope 3 in der CO2-Emissionsberichterstattung?",
      en: "What does Scope 3 represent in carbon emissions reporting?"
    },
    options: {
      ro: ["Emisiile directe din combustia flotei proprii", "Emisiile din energia electrică consumată", "Emisiile indirecte din lanțul de aprovizionare (inclusiv transport contractat)", "Emisiile din producția vehiculelor"],
      de: ["Direkte Emissionen aus dem eigenen Fuhrpark", "Emissionen aus verbrauchtem Strom", "Indirekte Emissionen aus der Lieferkette (inkl. beauftragter Transport)", "Emissionen aus der Fahrzeugproduktion"],
      en: ["Direct emissions from own fleet combustion", "Emissions from consumed electricity", "Indirect emissions from supply chain (including contracted transport)", "Emissions from vehicle production"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Scope 3 include toate emisiile indirecte din lanțul de aprovizionare - transport subcontractat, călătorii de afaceri, etc.",
      de: "Scope 3 umfasst alle indirekten Emissionen aus der Lieferkette - Subunternehmer-Transport, Geschäftsreisen, usw.",
      en: "Scope 3 includes all indirect emissions from the supply chain - subcontracted transport, business travel, etc."
    }
  },
  {
    question: {
      ro: "Un transport de 800 km cu camion (80g CO2/tkm) vs. feroviar (20g CO2/tkm) pentru 20 tone. Câte kg CO2 economisești prin modal shift?",
      de: "Ein Transport von 800 km mit Lkw (80g CO2/tkm) vs. Schiene (20g CO2/tkm) für 20 Tonnen. Wie viel kg CO2 sparst du durch Modal Shift?",
      en: "A 800 km transport by truck (80g CO2/tkm) vs. rail (20g CO2/tkm) for 20 tonnes. How many kg CO2 do you save through modal shift?"
    },
    options: {
      ro: ["640 kg", "960 kg", "1.280 kg", "1.600 kg"],
      de: ["640 kg", "960 kg", "1.280 kg", "1.600 kg"],
      en: ["640 kg", "960 kg", "1,280 kg", "1,600 kg"]
    },
    correctIndex: 1, // Truck: 800 × 20 × 80g = 1,280 kg. Rail: 800 × 20 × 20g = 320 kg. Savings: 960 kg
    explanation: {
      ro: "Camion: 800km × 20t × 80g = 1.280 kg. Tren: 800km × 20t × 20g = 320 kg. Economie: 960 kg CO2.",
      de: "Lkw: 800km × 20t × 80g = 1.280 kg. Bahn: 800km × 20t × 20g = 320 kg. Einsparung: 960 kg CO2.",
      en: "Truck: 800km × 20t × 80g = 1,280 kg. Rail: 800km × 20t × 20g = 320 kg. Savings: 960 kg CO2."
    }
  },
  {
    question: {
      ro: "Care dintre următoarele NU este un beneficiu direct al certificării Lean & Green?",
      de: "Welches der folgenden ist KEIN direkter Vorteil der Lean & Green Zertifizierung?",
      en: "Which of the following is NOT a direct benefit of Lean & Green certification?"
    },
    options: {
      ro: ["Recunoaștere internațională", "Reducerea taxelor de drum", "Atragerea clienților cu politici ESG", "Îmbunătățirea eficienței operaționale"],
      de: ["Internationale Anerkennung", "Reduzierte Mautgebühren", "Gewinnung von Kunden mit ESG-Richtlinien", "Verbesserte Betriebseffizienz"],
      en: ["International recognition", "Reduced road tolls", "Attracting clients with ESG policies", "Improved operational efficiency"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lean & Green nu oferă reduceri directe la taxe de drum. Beneficiile sunt reputaționale și de eficiență.",
      de: "Lean & Green bietet keine direkten Mautreduzierungen. Die Vorteile sind reputationsbezogen und effizienzsteigernd.",
      en: "Lean & Green doesn't provide direct road toll reductions. Benefits are reputational and efficiency-based."
    }
  }
];

export const advancedMindsetQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Un client sună nervos că marfa nu a ajuns, deși camionul este blocat în trafic din motive obiective. Care este reacția profesională corectă?",
      de: "Ein Kunde ruft verärgert an, weil die Ware nicht angekommen ist, obwohl der Lkw objektiv im Stau steht. Was ist die richtige professionelle Reaktion?",
      en: "A client calls upset that cargo hasn't arrived, though the truck is objectively stuck in traffic. What is the correct professional reaction?"
    },
    options: {
      ro: ["Explici că nu e vina ta și că traficul e imprevizibil", "Îți asumi răspunderea, ceri scuze, comunici ETA actualizat și oferi soluții", "Transferi apelul la manager", "Spui că verifici și revii, dar nu mai suni"],
      de: ["Erklären, dass es nicht deine Schuld ist und Verkehr unvorhersehbar ist", "Verantwortung übernehmen, entschuldigen, aktuelle ETA mitteilen und Lösungen anbieten", "Anruf an Manager weiterleiten", "Sagen, dass du prüfst und zurückrufst, aber nicht mehr anrufen"],
      en: ["Explain it's not your fault and traffic is unpredictable", "Take responsibility, apologize, communicate updated ETA and offer solutions", "Transfer call to manager", "Say you'll check and call back, but don't call"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Profesionalismul înseamnă asumarea situației, comunicare proactivă și oferirea de soluții, nu transferul de vină.",
      de: "Professionalität bedeutet Verantwortung übernehmen, proaktive Kommunikation und Lösungen anbieten, nicht Schuldzuweisung.",
      en: "Professionalism means taking ownership, proactive communication and offering solutions, not blame-shifting."
    }
  },
  {
    question: {
      ro: "Care este cel mai important factor pentru succesul pe termen lung în freight forwarding?",
      de: "Was ist der wichtigste Faktor für langfristigen Erfolg in der Spedition?",
      en: "What is the most important factor for long-term success in freight forwarding?"
    },
    options: {
      ro: ["Prețurile cele mai mici din piață", "Construirea relațiilor de încredere cu clienți și transportatori", "Cea mai mare flotă proprie", "Cele mai multe birouri"],
      de: ["Die niedrigsten Preise auf dem Markt", "Aufbau von Vertrauensbeziehungen mit Kunden und Spediteuren", "Die größte eigene Flotte", "Die meisten Büros"],
      en: ["Lowest prices in the market", "Building trust relationships with clients and carriers", "Largest own fleet", "Most offices"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Relațiile de încredere generează loialitate, recomandări și stabilitate pe termen lung - mai valoroase decât competiția pe preț.",
      de: "Vertrauensbeziehungen generieren Loyalität, Empfehlungen und langfristige Stabilität - wertvoller als Preiswettbewerb.",
      en: "Trust relationships generate loyalty, referrals and long-term stability - more valuable than price competition."
    }
  },
  {
    question: {
      ro: "În situația unui conflict între cerințele urgente ale doi clienți importanți, care este abordarea corectă?",
      de: "Bei einem Konflikt zwischen dringenden Anforderungen zweier wichtiger Kunden, was ist der richtige Ansatz?",
      en: "In a situation of conflict between urgent requirements of two important clients, what is the correct approach?"
    },
    options: {
      ro: ["Prioritizezi clientul mai mare", "Analizezi impactul real, comunici transparent cu ambii și găsești soluții creative", "Le spui că e imposibil și aștepți să decidă ei", "Ignori pe cel mai puțin vocal"],
      de: ["Den größeren Kunden priorisieren", "Reale Auswirkungen analysieren, transparent mit beiden kommunizieren und kreative Lösungen finden", "Sagen, es ist unmöglich und warten, dass sie entscheiden", "Den weniger lautstarken ignorieren"],
      en: ["Prioritize the bigger client", "Analyze real impact, communicate transparently with both and find creative solutions", "Tell them it's impossible and wait for them to decide", "Ignore the less vocal one"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Gestionarea conflictelor necesită analiză obiectivă, comunicare transparentă și creativitate în găsirea soluțiilor.",
      de: "Konfliktmanagement erfordert objektive Analyse, transparente Kommunikation und Kreativität bei der Lösungsfindung.",
      en: "Conflict management requires objective analysis, transparent communication and creativity in finding solutions."
    }
  }
];

export const advancedInsuranceQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "O marfă de 50.000 EUR este deteriorată în proporție de 40% din cauza unei manevre greșite la încărcare. Asigurarea CMR cu limită de 8.33 SDR/kg pentru 5 tone. Cât va plăti asiguratorul?",
      de: "Eine Fracht von 50.000 EUR ist zu 40% durch falsches Verladen beschädigt. CMR-Versicherung mit Limit 8,33 SZR/kg für 5 Tonnen. Wie viel zahlt die Versicherung?",
      en: "A €50,000 cargo is 40% damaged due to improper loading. CMR insurance with limit of 8.33 SDR/kg for 5 tonnes. How much will the insurer pay?"
    },
    options: {
      ro: ["20.000 EUR (40% din valoare)", "50.000 EUR (valoarea totală)", "Maximum ~55.000 EUR (8.33 SDR × 5000 kg × ~1.33 EUR)", "16.650 EUR (8.33 SDR × 2000 kg)"],
      de: ["20.000 EUR (40% vom Wert)", "50.000 EUR (Gesamtwert)", "Maximum ~55.000 EUR (8,33 SZR × 5000 kg × ~1,33 EUR)", "16.650 EUR (8,33 SZR × 2000 kg)"],
      en: ["€20,000 (40% of value)", "€50,000 (total value)", "Maximum ~€55,000 (8.33 SDR × 5000 kg × ~€1.33)", "€16,650 (8.33 SDR × 2000 kg)"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Dauna reală este 40% × 50.000 = 20.000 EUR. Limita CMR de ~55.500 EUR acoperă integral această sumă.",
      de: "Der tatsächliche Schaden beträgt 40% × 50.000 = 20.000 EUR. Das CMR-Limit von ~55.500 EUR deckt diesen Betrag vollständig.",
      en: "Actual damage is 40% × €50,000 = €20,000. CMR limit of ~€55,500 fully covers this amount."
    }
  },
  {
    question: {
      ro: "Care tip de asigurare NU este obligatorie legal pentru transportatorii rutieri în UE?",
      de: "Welche Versicherungsart ist für Straßentransporteure in der EU NICHT gesetzlich vorgeschrieben?",
      en: "Which type of insurance is NOT legally mandatory for road carriers in the EU?"
    },
    options: {
      ro: ["RCA (Răspundere civilă auto)", "Asigurarea CMR pentru marfă", "Asigurarea de răspundere profesională", "Asigurarea CASCO"],
      de: ["Kfz-Haftpflichtversicherung", "CMR-Frachtversicherung", "Berufshaftpflichtversicherung", "Kaskoversicherung"],
      en: ["Motor third-party liability", "CMR cargo insurance", "Professional liability insurance", "Comprehensive vehicle insurance"]
    },
    correctIndex: 3,
    explanation: {
      ro: "CASCO este opțională. RCA și CMR sunt obligatorii prin lege, iar asigurarea profesională este cerută pentru licențiere.",
      de: "Kasko ist optional. Kfz-Haftpflicht und CMR sind gesetzlich vorgeschrieben, Berufshaftpflicht für die Lizenzierung.",
      en: "Comprehensive is optional. Motor liability and CMR are legally required, professional liability for licensing."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'subrogation' în contextul asigurărilor de transport?",
      de: "Was bedeutet 'Subrogation' im Kontext der Transportversicherung?",
      en: "What does 'subrogation' mean in transport insurance context?"
    },
    options: {
      ro: ["Anularea poliței", "Dreptul asiguratorului de a recupera de la vinovatul real după ce a plătit despăgubirea", "Transferul poliței la alt beneficiar", "Creșterea primei de asigurare"],
      de: ["Kündigung der Police", "Recht des Versicherers, nach Zahlung vom Verursacher zu fordern", "Übertragung der Police auf einen anderen Begünstigten", "Erhöhung der Versicherungsprämie"],
      en: ["Policy cancellation", "Insurer's right to recover from the responsible party after paying claim", "Transfer of policy to another beneficiary", "Insurance premium increase"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Subrogația permite asiguratorului să preia drepturile asiguratului și să recupereze sumele plătite de la partea vinovată.",
      de: "Subrogation ermöglicht dem Versicherer, die Rechte des Versicherten zu übernehmen und vom Verursacher zurückzufordern.",
      en: "Subrogation allows the insurer to step into the insured's rights and recover paid amounts from the responsible party."
    }
  }
];

export const advancedChecklistsQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "La verificarea pre-plecare a unui camion frigorific, care element este cel mai CRITIC pentru siguranța mărfii?",
      de: "Bei der Abfahrtskontrolle eines Kühllastwagens, welches Element ist am KRITISCHSTEN für die Frachtsicherheit?",
      en: "During pre-departure check of a refrigerated truck, which element is MOST CRITICAL for cargo safety?"
    },
    options: {
      ro: ["Nivelul uleiului motor", "Temperatura agregatului frigorific și setarea corectă", "Presiunea în pneuri", "Nivelul AdBlue"],
      de: ["Motorölstand", "Kühleinheittemperatur und richtige Einstellung", "Reifendruck", "AdBlue-Stand"],
      en: ["Engine oil level", "Cooling unit temperature and correct setting", "Tire pressure", "AdBlue level"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pentru marfă frigorifică, funcționarea corectă a agregatului și setarea temperaturii sunt critice - pot cauza pierderi de zeci de mii EUR.",
      de: "Bei Kühlgut sind Funktion und Temperatureinstellung der Kühleinheit kritisch - können Schäden von zehntausenden EUR verursachen.",
      en: "For refrigerated cargo, cooling unit function and temperature setting are critical - can cause losses of tens of thousands EUR."
    }
  },
  {
    question: {
      ro: "Care document NU este necesar pentru un transport internațional standard EU (non-ADR, non-perisabil)?",
      de: "Welches Dokument ist für einen internationalen Standard-EU-Transport (nicht-ADR, nicht-verderblich) NICHT erforderlich?",
      en: "Which document is NOT required for a standard international EU transport (non-ADR, non-perishable)?"
    },
    options: {
      ro: ["CMR completat", "Licența comunitară sau copie certificată", "Certificat ATP", "Documentul de însoțire al mărfii/factură"],
      de: ["Ausgefüllter CMR", "Gemeinschaftslizenz oder beglaubigte Kopie", "ATP-Zertifikat", "Frachtbegleitdokument/Rechnung"],
      en: ["Completed CMR", "Community license or certified copy", "ATP certificate", "Cargo accompanying document/invoice"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Certificatul ATP este necesar doar pentru transporturi de mărfuri perisabile care necesită temperatură controlată.",
      de: "Das ATP-Zertifikat ist nur für Transporte verderblicher Waren erforderlich, die Temperaturkontrolle benötigen.",
      en: "ATP certificate is only required for transports of perishable goods requiring temperature control."
    }
  }
];
