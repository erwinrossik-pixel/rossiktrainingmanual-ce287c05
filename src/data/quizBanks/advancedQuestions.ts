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

// Advanced Training Questions
export const advancedTrainingQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care metodă de evaluare a învățării oferă cea mai bună predicție a performanței reale la locul de muncă?",
      de: "Welche Methode zur Lernbewertung bietet die beste Vorhersage der tatsächlichen Arbeitsleistung?",
      en: "Which learning assessment method provides the best prediction of actual job performance?"
    },
    options: {
      ro: ["Teste scrise multiple choice", "Simulări practice și studii de caz", "Evaluare orală teoretică", "Prezență la cursuri"],
      de: ["Schriftliche Multiple-Choice-Tests", "Praktische Simulationen und Fallstudien", "Mündliche theoretische Prüfung", "Kurspräsenz"],
      en: ["Written multiple choice tests", "Practical simulations and case studies", "Oral theoretical assessment", "Course attendance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Simulările și studiile de caz replică situații reale, oferind o evaluare mai precisă a competențelor practice.",
      de: "Simulationen und Fallstudien replizieren reale Situationen und bieten eine genauere Bewertung praktischer Kompetenzen.",
      en: "Simulations and case studies replicate real situations, providing more accurate assessment of practical competencies."
    }
  },
  {
    question: {
      ro: "În modelul de învățare 70-20-10, ce procent din cunoștințe provine din experiența practică la locul de muncă?",
      de: "Im 70-20-10-Lernmodell, welcher Prozentsatz des Wissens stammt aus praktischer Erfahrung am Arbeitsplatz?",
      en: "In the 70-20-10 learning model, what percentage of knowledge comes from practical on-the-job experience?"
    },
    options: {
      ro: ["50%", "60%", "70%", "80%"],
      de: ["50%", "60%", "70%", "80%"],
      en: ["50%", "60%", "70%", "80%"]
    },
    correctIndex: 2,
    explanation: {
      ro: "70% din învățare vine din experiență practică, 20% din mentorat/feedback, 10% din cursuri formale.",
      de: "70% des Lernens kommt aus praktischer Erfahrung, 20% aus Mentoring/Feedback, 10% aus formellen Kursen.",
      en: "70% of learning comes from practical experience, 20% from mentoring/feedback, 10% from formal courses."
    }
  }
];

// Advanced Pricing Questions
export const advancedPricingQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Un transport de 850 km are costuri totale de 1.275 EUR. Clientul acceptă max 1.50 EUR/km. Care este marja reală?",
      de: "Ein Transport von 850 km hat Gesamtkosten von 1.275 EUR. Der Kunde akzeptiert max 1,50 EUR/km. Wie hoch ist die tatsächliche Marge?",
      en: "An 850 km transport has total costs of €1,275. Client accepts max €1.50/km. What is the actual margin?"
    },
    options: {
      ro: ["0% (break-even)", "5%", "10%", "-5% (pierdere)"],
      de: ["0% (Break-even)", "5%", "10%", "-5% (Verlust)"],
      en: ["0% (break-even)", "5%", "10%", "-5% (loss)"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Venit: 850 × 1.50 = 1.275 EUR = Costuri. Marja este 0%. Transportul nu generează profit.",
      de: "Umsatz: 850 × 1,50 = 1.275 EUR = Kosten. Die Marge ist 0%. Der Transport generiert keinen Gewinn.",
      en: "Revenue: 850 × 1.50 = €1,275 = Costs. Margin is 0%. The transport generates no profit."
    }
  },
  {
    question: {
      ro: "Care factor are cel mai mare impact asupra costului per km pentru transportul pe distanțe lungi (>1000km)?",
      de: "Welcher Faktor hat den größten Einfluss auf die Kosten pro km für Langstreckentransporte (>1000km)?",
      en: "Which factor has the greatest impact on cost per km for long-distance transport (>1000km)?"
    },
    options: {
      ro: ["Taxele de drum", "Consumul de combustibil", "Costul șoferului", "Amortizarea vehiculului"],
      de: ["Mautgebühren", "Kraftstoffverbrauch", "Fahrerkosten", "Fahrzeugabschreibung"],
      en: ["Road tolls", "Fuel consumption", "Driver cost", "Vehicle depreciation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Combustibilul reprezintă 30-40% din costul total pe distanțe lungi, fiind cel mai mare factor variabil.",
      de: "Kraftstoff macht 30-40% der Gesamtkosten auf Langstrecken aus und ist der größte variable Faktor.",
      en: "Fuel represents 30-40% of total cost on long distances, being the largest variable factor."
    }
  }
];

// Advanced Incoterms Questions
export const advancedIncotermsQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "În EXW (Ex Works), cine este responsabil pentru încărcarea mărfii în vehiculul cumpărătorului?",
      de: "Bei EXW (Ab Werk), wer ist für das Verladen der Ware in das Fahrzeug des Käufers verantwortlich?",
      en: "In EXW (Ex Works), who is responsible for loading the goods into the buyer's vehicle?"
    },
    options: {
      ro: ["Vânzătorul", "Cumpărătorul", "Ambii în mod egal", "Transportatorul"],
      de: ["Verkäufer", "Käufer", "Beide gleichermaßen", "Spediteur"],
      en: ["Seller", "Buyer", "Both equally", "Carrier"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EXW = obligația minimă a vânzătorului. Cumpărătorul preia marfa de la sediu și este responsabil de încărcare.",
      de: "EXW = minimale Verpflichtung des Verkäufers. Käufer übernimmt Ware am Werk und ist für Verladung verantwortlich.",
      en: "EXW = minimal seller obligation. Buyer takes over goods at premises and is responsible for loading."
    }
  },
  {
    question: {
      ro: "Care Incoterm este recomandat pentru transport container multimodal?",
      de: "Welcher Incoterm wird für multimodalen Containertransport empfohlen?",
      en: "Which Incoterm is recommended for multimodal container transport?"
    },
    options: {
      ro: ["FOB", "CIF", "FCA sau CPT", "DDP"],
      de: ["FOB", "CIF", "FCA oder CPT", "DDP"],
      en: ["FOB", "CIF", "FCA or CPT", "DDP"]
    },
    correctIndex: 2,
    explanation: {
      ro: "FCA și CPT sunt potrivite pentru orice mod de transport, inclusiv multimodal. FOB/CIF sunt doar pentru transport maritim.",
      de: "FCA und CPT sind für jeden Transportmodus geeignet, inkl. multimodal. FOB/CIF sind nur für Seetransport.",
      en: "FCA and CPT are suitable for any mode of transport, including multimodal. FOB/CIF are only for sea transport."
    }
  }
];

// Advanced Claims Questions
export const advancedClaimsQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care este termenul maxim pentru depunerea unei reclamații pentru daune vizibile conform CMR?",
      de: "Was ist die maximale Frist für die Einreichung eines Anspruchs wegen sichtbarer Schäden gemäß CMR?",
      en: "What is the maximum deadline for filing a claim for visible damages under CMR?"
    },
    options: {
      ro: ["Imediat la livrare (pe CMR)", "7 zile de la livrare", "14 zile de la livrare", "30 zile de la livrare"],
      de: ["Sofort bei Lieferung (auf CMR)", "7 Tage nach Lieferung", "14 Tage nach Lieferung", "30 Tage nach Lieferung"],
      en: ["Immediately at delivery (on CMR)", "7 days from delivery", "14 days from delivery", "30 days from delivery"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Daunele vizibile trebuie notate pe CMR la livrare. Altfel, marfa este considerată primită în stare bună.",
      de: "Sichtbare Schäden müssen bei Lieferung auf dem CMR vermerkt werden. Sonst gilt die Ware als in gutem Zustand empfangen.",
      en: "Visible damages must be noted on CMR at delivery. Otherwise, goods are considered received in good condition."
    }
  },
  {
    question: {
      ro: "Care situație NU exonerează transportatorul de răspundere conform CMR?",
      de: "Welche Situation befreit den Frachtführer gemäß CMR NICHT von der Haftung?",
      en: "Which situation does NOT exonerate the carrier from liability under CMR?"
    },
    options: {
      ro: ["Instrucțiuni greșite ale expeditorului", "Defect ascuns al ambalajului", "Furtul mărfii din parcare nesupravegheată", "Forță majoră"],
      de: ["Falsche Anweisungen des Absenders", "Versteckter Verpackungsmangel", "Diebstahl von unbewachtem Parkplatz", "Höhere Gewalt"],
      en: ["Sender's wrong instructions", "Hidden packaging defect", "Cargo theft from unsupervised parking", "Force majeure"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Transportatorul trebuie să asigure securitatea mărfii. Parcarea nesupravegheată nu este forță majoră.",
      de: "Der Frachtführer muss die Sicherheit der Fracht gewährleisten. Unbewachtes Parken ist keine höhere Gewalt.",
      en: "Carrier must ensure cargo security. Unsupervised parking is not force majeure."
    }
  }
];

// Advanced ADR Questions
export const advancedADRQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care categorie de tunel este cea mai restrictivă pentru mărfuri periculoase?",
      de: "Welche Tunnelkategorie ist am restriktivsten für Gefahrgüter?",
      en: "Which tunnel category is most restrictive for dangerous goods?"
    },
    options: {
      ro: ["Categoria A", "Categoria B", "Categoria C", "Categoria E"],
      de: ["Kategorie A", "Kategorie B", "Kategorie C", "Kategorie E"],
      en: ["Category A", "Category B", "Category C", "Category E"]
    },
    correctIndex: 3,
    explanation: {
      ro: "Categoria E interzice practic toate mărfurile periculoase. A = fără restricții, E = restricție maximă.",
      de: "Kategorie E verbietet praktisch alle Gefahrgüter. A = keine Einschränkungen, E = maximale Einschränkung.",
      en: "Category E prohibits practically all dangerous goods. A = no restrictions, E = maximum restriction."
    }
  }
];

// Advanced Driving Time Questions  
export const advancedDrivingTimeQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care este durata minimă a pauzei de 45 min dacă este împărțită în două părți?",
      de: "Was ist die Mindestdauer der 45-Min-Pause, wenn sie in zwei Teile aufgeteilt wird?",
      en: "What is the minimum duration of the 45-min break if split into two parts?"
    },
    options: {
      ro: ["15 + 30 minute", "20 + 25 minute", "10 + 35 minute", "22.5 + 22.5 minute"],
      de: ["15 + 30 Minuten", "20 + 25 Minuten", "10 + 35 Minuten", "22,5 + 22,5 Minuten"],
      en: ["15 + 30 minutes", "20 + 25 minutes", "10 + 35 minutes", "22.5 + 22.5 minutes"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Pauza poate fi împărțită: prima parte min 15 min, a doua parte min 30 min (în această ordine).",
      de: "Pause kann geteilt werden: erster Teil min 15 Min, zweiter Teil min 30 Min (in dieser Reihenfolge).",
      en: "Break can be split: first part min 15 min, second part min 30 min (in this order)."
    }
  }
];

// Advanced Fleet Questions
export const advancedFleetQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care indicator KPI reflectă cel mai bine eficiența utilizării flotei?",
      de: "Welcher KPI spiegelt die Flottennutzungseffizienz am besten wider?",
      en: "Which KPI indicator best reflects fleet utilization efficiency?"
    },
    options: {
      ro: ["Numărul de vehicule", "Rata de utilizare a capacității (km încărcați / km totali)", "Vârsta medie a flotei", "Numărul de șoferi"],
      de: ["Anzahl der Fahrzeuge", "Kapazitätsnutzungsrate (beladene km / Gesamt-km)", "Durchschnittsalter der Flotte", "Anzahl der Fahrer"],
      en: ["Number of vehicles", "Capacity utilization rate (loaded km / total km)", "Average fleet age", "Number of drivers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rata de utilizare a capacității arată cât de eficient sunt folosite vehiculele. Sub 80% indică ineficiență.",
      de: "Kapazitätsnutzungsrate zeigt, wie effizient die Fahrzeuge genutzt werden. Unter 80% deutet auf Ineffizienz hin.",
      en: "Capacity utilization rate shows how efficiently vehicles are used. Below 80% indicates inefficiency."
    }
  }
];

// Advanced Reefer Questions
export const advancedReeferQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care este toleranța maximă acceptabilă pentru fluctuația temperaturii în transportul de produse farmaceutice (2-8°C)?",
      de: "Was ist die maximal akzeptable Toleranz für Temperaturschwankungen beim Transport von Pharmazeutika (2-8°C)?",
      en: "What is the maximum acceptable tolerance for temperature fluctuation in pharmaceutical transport (2-8°C)?"
    },
    options: {
      ro: ["±0.5°C", "±1°C", "±2°C", "±3°C"],
      de: ["±0,5°C", "±1°C", "±2°C", "±3°C"],
      en: ["±0.5°C", "±1°C", "±2°C", "±3°C"]
    },
    correctIndex: 0,
    explanation: {
      ro: "GDP (Good Distribution Practice) pentru farmaceutice cere toleranță de ±0.5°C în intervalul 2-8°C.",
      de: "GDP (Gute Vertriebspraxis) für Pharmazeutika erfordert eine Toleranz von ±0,5°C im Bereich 2-8°C.",
      en: "GDP (Good Distribution Practice) for pharmaceuticals requires ±0.5°C tolerance in the 2-8°C range."
    }
  }
];

// Advanced Loading Questions
export const advancedLoadingQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Pentru o marfă de 8 tone plasată în jumătatea din față a remorcii de 13.6m, unde se deplasează centrul de greutate față de centrul geometric?",
      de: "Für eine 8-Tonnen-Last im vorderen Teil eines 13,6m-Anhängers, wohin verschiebt sich der Schwerpunkt gegenüber dem geometrischen Zentrum?",
      en: "For an 8-ton cargo placed in the front half of a 13.6m trailer, where does the center of gravity shift compared to geometric center?"
    },
    options: {
      ro: ["Spre față (supra-sarcină pe osie față)", "Spre spate", "Rămâne centrat", "Depinde de înălțimea mărfii"],
      de: ["Nach vorne (Überlastung Vorderachse)", "Nach hinten", "Bleibt zentriert", "Hängt von der Ladehöhe ab"],
      en: ["Toward front (front axle overload)", "Toward rear", "Stays centered", "Depends on cargo height"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Marfa plasată în față deplasează centrul de greutate spre față, putând supraîncărca osia tractorului.",
      de: "Vorne platzierte Last verschiebt den Schwerpunkt nach vorne, kann zur Überlastung der Zugmaschinenachse führen.",
      en: "Cargo placed at front shifts center of gravity forward, potentially overloading tractor axle."
    }
  }
];

// Advanced Negotiation Questions
export const advancedNegotiationQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "În negocierea tarifelor, care strategie este cea mai eficientă când clientul compară prețul tău cu cel mai mic de pe piață?",
      de: "In Tarifverhandlungen, welche Strategie ist am effektivsten, wenn der Kunde deinen Preis mit dem niedrigsten am Markt vergleicht?",
      en: "In rate negotiations, which strategy is most effective when the client compares your price to the lowest on the market?"
    },
    options: {
      ro: ["Reduc imediat la nivelul concurenței", "Evidențiez valoarea adăugată și diferențiatorii", "Refuz să negociez", "Ofer un discount secret"],
      de: ["Sofort auf Konkurrenzniveau reduzieren", "Mehrwert und Unterscheidungsmerkmale hervorheben", "Verhandlung ablehnen", "Geheimen Rabatt anbieten"],
      en: ["Immediately reduce to competitor level", "Highlight added value and differentiators", "Refuse to negotiate", "Offer a secret discount"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Evidențierea valorii (fiabilitate, tracking, asigurare) justifică prețul premium și construiește relații pe termen lung.",
      de: "Hervorhebung von Wert (Zuverlässigkeit, Tracking, Versicherung) rechtfertigt Premiumpreise und baut langfristige Beziehungen auf.",
      en: "Highlighting value (reliability, tracking, insurance) justifies premium pricing and builds long-term relationships."
    }
  }
];

// Advanced Carrier Management Questions
export const advancedCarrierManagementQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care indicator este cel mai important în evaluarea performanței unui transportator subcontractat?",
      de: "Welcher Indikator ist am wichtigsten bei der Leistungsbewertung eines Subunternehmers?",
      en: "Which indicator is most important in evaluating a subcontracted carrier's performance?"
    },
    options: {
      ro: ["Prețul pe km", "Rata de livrare la timp (OTD - On Time Delivery)", "Numărul de vehicule disponibile", "Vârsta flotei"],
      de: ["Preis pro km", "Pünktlichkeitsrate (OTD - On Time Delivery)", "Anzahl verfügbarer Fahrzeuge", "Flottenalter"],
      en: ["Price per km", "On Time Delivery rate (OTD)", "Number of available vehicles", "Fleet age"]
    },
    correctIndex: 1,
    explanation: {
      ro: "OTD (>95% target) este esențial pentru satisfacția clienților. Prețul ieftin cu livrări întârziate costă mai mult.",
      de: "OTD (>95% Ziel) ist entscheidend für Kundenzufriedenheit. Günstige Preise mit Verspätungen kosten mehr.",
      en: "OTD (>95% target) is crucial for customer satisfaction. Cheap price with delayed deliveries costs more."
    }
  }
];

// Advanced Red Flags Questions
export const advancedRedFlagsQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care combinație de factori indică cel mai puternic o potențială fraudă de transport?",
      de: "Welche Faktorenkombination deutet am stärksten auf einen möglichen Transportbetrug hin?",
      en: "Which combination of factors most strongly indicates potential transport fraud?"
    },
    options: {
      ro: ["Client nou + Plată în avans + Transport pe rută cunoscută", "Client nou + Cerință de urgență + Plată prin companie terță", "Client vechi + Transport urgent + Sumă mare", "Client recomandat + Marfă standard + Rută internă"],
      de: ["Neuer Kunde + Vorauszahlung + Bekannte Route", "Neuer Kunde + Dringlichkeit + Zahlung über Drittfirma", "Alter Kunde + Eilauftrag + Großer Betrag", "Empfohlener Kunde + Standardfracht + Inlandsroute"],
      en: ["New client + Advance payment + Known route", "New client + Urgency requirement + Third-party payment", "Old client + Urgent transport + Large amount", "Referred client + Standard cargo + Domestic route"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Client nou + urgență + plată prin terți = triada clasică a fraudei. Urgența împiedică verificările.",
      de: "Neuer Kunde + Dringlichkeit + Zahlung über Dritte = klassische Betrugsdreieck. Dringlichkeit verhindert Prüfungen.",
      en: "New client + urgency + third-party payment = classic fraud triangle. Urgency prevents verification checks."
    }
  }
];

// Advanced Glossary Questions
export const advancedGlossaryQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care termen descrie transportul mărfii cu multiple moduri de transport sub un singur contract?",
      de: "Welcher Begriff beschreibt den Gütertransport mit mehreren Verkehrsträgern unter einem einzigen Vertrag?",
      en: "Which term describes cargo transport using multiple modes under a single contract?"
    },
    options: {
      ro: ["Transport combinat", "Transport multimodal", "Transport intermodal", "Transport co-modal"],
      de: ["Kombinierter Verkehr", "Multimodaler Transport", "Intermodaler Transport", "Co-modaler Transport"],
      en: ["Combined transport", "Multimodal transport", "Intermodal transport", "Co-modal transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multimodal = un contract, un operator, multiple moduri. Intermodal = aceeași unitate de încărcare, dar contracte separate posibile.",
      de: "Multimodal = ein Vertrag, ein Betreiber, mehrere Modi. Intermodal = gleiche Ladeeinheit, aber separate Verträge möglich.",
      en: "Multimodal = one contract, one operator, multiple modes. Intermodal = same loading unit, but separate contracts possible."
    }
  }
];

// Advanced Case Studies Questions
export const advancedCaseStudiesQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Un client refuză marfa la destinație din cauza unei întârzieri de 2 zile. Ce trebuie să faci prima dată conform CMR?",
      de: "Ein Kunde lehnt die Ware am Zielort wegen einer 2-tägigen Verspätung ab. Was musst du zuerst gemäß CMR tun?",
      en: "A client refuses cargo at destination due to a 2-day delay. What must you do first according to CMR?"
    },
    options: {
      ro: ["Returnez marfa la expeditor", "Solicit instrucțiuni scrise de la persoana cu drept de dispoziție asupra mărfii", "Depozitez marfa pe cheltuiala mea", "Vând marfa pentru a recupera costurile"],
      de: ["Ware an Absender zurückschicken", "Schriftliche Anweisungen vom Verfügungsberechtigten anfordern", "Ware auf eigene Kosten lagern", "Ware verkaufen um Kosten zu decken"],
      en: ["Return cargo to sender", "Request written instructions from the party entitled to dispose of goods", "Store cargo at my expense", "Sell cargo to recover costs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR Art. 14-15: la refuz sau impediment, transportatorul cere instrucțiuni. Nu poate decide singur soarta mărfii.",
      de: "CMR Art. 14-15: Bei Verweigerung oder Hindernis fordert der Frachtführer Anweisungen an. Kann nicht selbst über die Ware entscheiden.",
      en: "CMR Art. 14-15: upon refusal or hindrance, carrier requests instructions. Cannot decide cargo's fate alone."
    }
  }
];

// Advanced Professional Development Questions
export const advancedProfessionalDevelopmentQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Care competență este cea mai valoroasă pentru avansarea în management în industria de freight forwarding?",
      de: "Welche Kompetenz ist am wertvollsten für den Aufstieg ins Management in der Speditionsbranche?",
      en: "Which competency is most valuable for advancement to management in the freight forwarding industry?"
    },
    options: {
      ro: ["Cunoștințe tehnice de rutare", "Abilități de leadership și management al echipei", "Fluență într-o singură limbă străină", "Memorizarea tuturor codurilor vamale"],
      de: ["Technische Routenkenntnisse", "Führungs- und Teammanagement-Fähigkeiten", "Fließend in einer Fremdsprache", "Auswendiglernen aller Zollcodes"],
      en: ["Technical routing knowledge", "Leadership and team management skills", "Fluency in one foreign language", "Memorizing all customs codes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Leadership-ul și managementul echipei diferențiază specialiștii de manageri. Restul pot fi învățate sau delegate.",
      de: "Führung und Teammanagement unterscheiden Spezialisten von Managern. Der Rest kann gelernt oder delegiert werden.",
      en: "Leadership and team management differentiate specialists from managers. The rest can be learned or delegated."
    }
  }
];
