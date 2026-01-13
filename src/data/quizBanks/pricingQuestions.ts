import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const pricingQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce factori influențează prețul unui transport internațional?",
      de: "Welche Faktoren beeinflussen den Preis eines internationalen Transports?",
      en: "What factors influence the price of an international transport?"
    },
    options: {
      ro: ["Doar distanța", "Distanță, greutate, volum, tip marfă, urgență, sezonalitate", "Doar tipul mărfii", "Doar urgența"],
      de: ["Nur die Entfernung", "Entfernung, Gewicht, Volumen, Warenart, Dringlichkeit, Saisonalität", "Nur die Warenart", "Nur die Dringlichkeit"],
      en: ["Only distance", "Distance, weight, volume, goods type, urgency, seasonality", "Only goods type", "Only urgency"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prețul transportului este influențat de multipli factori: distanță, caracteristici marfă, urgență și condițiile pieței.",
      de: "Der Transportpreis wird von mehreren Faktoren beeinflusst: Entfernung, Wareneigenschaften, Dringlichkeit und Marktbedingungen.",
      en: "Transport price is influenced by multiple factors: distance, goods characteristics, urgency and market conditions."
    }
  },
  {
    question: {
      ro: "Ce reprezintă greutatea tarifabilă (chargeable weight)?",
      de: "Was bedeutet das abrechnungsfähige Gewicht (chargeable weight)?",
      en: "What does chargeable weight represent?"
    },
    options: {
      ro: ["Întotdeauna greutatea reală", "Valoarea mai mare între greutatea reală și cea volumetrică", "Întotdeauna greutatea volumetrică", "Media celor două"],
      de: ["Immer das tatsächliche Gewicht", "Der höhere Wert zwischen tatsächlichem und volumetrischem Gewicht", "Immer das volumetrische Gewicht", "Der Durchschnitt beider"],
      en: ["Always actual weight", "The higher value between actual and volumetric weight", "Always volumetric weight", "Average of both"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Se facturează greutatea mai mare dintre cea reală și cea volumetrică pentru a acoperi utilizarea eficientă a spațiului.",
      de: "Das höhere Gewicht zwischen tatsächlichem und volumetrischem wird berechnet, um die effiziente Raumnutzung abzudecken.",
      en: "The higher weight between actual and volumetric is charged to cover efficient space utilization."
    }
  },
  {
    question: {
      ro: "Cum se calculează greutatea volumetrică pentru transport rutier?",
      de: "Wie wird das volumetrische Gewicht für den Straßentransport berechnet?",
      en: "How is volumetric weight calculated for road transport?"
    },
    options: {
      ro: ["L x l x h / 6000", "L x l x h / 3000 (în cm = kg)", "L + l + h / 100", "Doar volumul în metri cubi"],
      de: ["L x B x H / 6000", "L x B x H / 3000 (in cm = kg)", "L + B + H / 100", "Nur das Volumen in Kubikmetern"],
      en: ["L x W x H / 6000", "L x W x H / 3000 (in cm = kg)", "L + W + H / 100", "Only volume in cubic meters"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pentru transport rutier, factorul standard este 3000: dimensiuni în cm împărțite la 3000 = kg volumetrici.",
      de: "Für den Straßentransport ist der Standardfaktor 3000: Maße in cm geteilt durch 3000 = volumetrisches kg.",
      en: "For road transport, the standard factor is 3000: dimensions in cm divided by 3000 = volumetric kg."
    }
  },
  {
    question: {
      ro: "Ce este LDM (Loading Meter)?",
      de: "Was ist LDM (Lademeter)?",
      en: "What is LDM (Loading Meter)?"
    },
    options: {
      ro: ["Lungimea camionului", "Unitate de măsură pentru spațiul ocupat pe lungimea remorcii", "Greutatea maximă", "Înălțimea de încărcare"],
      de: ["Die Länge des LKW", "Maßeinheit für den belegten Raum auf der Anhängerlänge", "Das Maximalgewicht", "Die Ladehöhe"],
      en: ["Truck length", "Unit of measurement for occupied space on trailer length", "Maximum weight", "Loading height"]
    },
    correctIndex: 1,
    explanation: {
      ro: "LDM măsoară câți metri din lungimea remorcii ocupă marfa, folosit pentru grupaje și mărfuri non-stivuibile.",
      de: "LDM misst, wie viele Meter der Anhängerlänge die Ware belegt, verwendet für Sammelgut und nicht stapelbare Waren.",
      en: "LDM measures how many meters of trailer length the goods occupy, used for groupage and non-stackable goods."
    }
  },
  {
    question: {
      ro: "Ce reprezintă un FTL în transporturi?",
      de: "Was bedeutet FTL im Transport?",
      en: "What does FTL represent in transport?"
    },
    options: {
      ro: ["Freight Transport License", "Full Truck Load - încărcătură completă", "Fast Transit Lane", "Free Trade Limit"],
      de: ["Freight Transport License", "Full Truck Load - Komplettladung", "Fast Transit Lane", "Free Trade Limit"],
      en: ["Freight Transport License", "Full Truck Load - complete shipment", "Fast Transit Lane", "Free Trade Limit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FTL înseamnă Full Truck Load - când un singur client ocupă întregul vehicul.",
      de: "FTL bedeutet Full Truck Load - wenn ein einzelner Kunde das gesamte Fahrzeug belegt.",
      en: "FTL means Full Truck Load - when a single client occupies the entire vehicle."
    }
  },
  {
    question: {
      ro: "Ce este un surcharge de combustibil (fuel surcharge)?",
      de: "Was ist ein Kraftstoffzuschlag (fuel surcharge)?",
      en: "What is a fuel surcharge?"
    },
    options: {
      ro: ["Taxă fixă permanentă", "Taxă variabilă bazată pe fluctuația prețului combustibilului", "Reducere pentru economie", "Taxă de mediu"],
      de: ["Feste dauerhafte Gebühr", "Variable Gebühr basierend auf Kraftstoffpreisschwankungen", "Wirtschaftsrabatt", "Umweltgebühr"],
      en: ["Fixed permanent fee", "Variable fee based on fuel price fluctuation", "Economy discount", "Environmental fee"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Fuel surcharge este o taxă variabilă care ajustează prețul în funcție de variația prețului combustibilului.",
      de: "Der Kraftstoffzuschlag ist eine variable Gebühr, die den Preis entsprechend der Kraftstoffpreisschwankung anpasst.",
      en: "Fuel surcharge is a variable fee that adjusts the price according to fuel price variation."
    }
  },
  {
    question: {
      ro: "Ce reprezintă un deadfreight?",
      de: "Was bedeutet Fautfracht (deadfreight)?",
      en: "What does deadfreight represent?"
    },
    options: {
      ro: ["Marfă deteriorată", "Penalizare pentru spațiul rezervat dar neutilizat", "Transport gratuit", "Marfă urgentă"],
      de: ["Beschädigte Ware", "Strafe für reservierten aber ungenutzten Raum", "Kostenloser Transport", "Dringende Fracht"],
      en: ["Damaged goods", "Penalty for reserved but unused space", "Free transport", "Urgent freight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Deadfreight este taxa pentru spațiul care a fost rezervat dar nu a fost utilizat de client.",
      de: "Fautfracht ist die Gebühr für Raum, der reserviert, aber vom Kunden nicht genutzt wurde.",
      en: "Deadfreight is the fee for space that was reserved but not used by the client."
    }
  },
  {
    question: {
      ro: "Ce sunt demurrage charges?",
      de: "Was sind Standgebühren (demurrage)?",
      en: "What are demurrage charges?"
    },
    options: {
      ro: ["Taxe de transport", "Taxe pentru depășirea timpului liber de încărcare/descărcare", "Taxe vamale", "Taxe de asigurare"],
      de: ["Transportgebühren", "Gebühren für Überschreitung der freien Lade-/Entladezeit", "Zollgebühren", "Versicherungsgebühren"],
      en: ["Transport fees", "Fees for exceeding free loading/unloading time", "Customs fees", "Insurance fees"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Demurrage sunt penalizări pentru depășirea timpului alocat pentru încărcare sau descărcare.",
      de: "Standgebühren sind Strafen für die Überschreitung der zugewiesenen Lade- oder Entladezeit.",
      en: "Demurrage are penalties for exceeding allocated loading or unloading time."
    }
  },
  {
    question: {
      ro: "Ce factori cresc prețul în sezonul de vârf?",
      de: "Welche Faktoren erhöhen den Preis in der Hochsaison?",
      en: "What factors increase the price during peak season?"
    },
    options: {
      ro: ["Cerere mare, capacitate limitată, timp de așteptare", "Timpul frumos", "Mai puțini clienți", "Reduceri de sezon"],
      de: ["Hohe Nachfrage, begrenzte Kapazität, Wartezeit", "Schönes Wetter", "Weniger Kunden", "Saisonale Rabatte"],
      en: ["High demand, limited capacity, waiting time", "Nice weather", "Fewer clients", "Seasonal discounts"]
    },
    correctIndex: 0,
    explanation: {
      ro: "În sezonul de vârf, cererea mare combinată cu capacitate limitată duce la prețuri crescute.",
      de: "In der Hochsaison führt hohe Nachfrage kombiniert mit begrenzter Kapazität zu erhöhten Preisen.",
      en: "During peak season, high demand combined with limited capacity leads to increased prices."
    }
  },
  {
    question: {
      ro: "Ce este un all-in rate?",
      de: "Was ist ein All-in-Tarif?",
      en: "What is an all-in rate?"
    },
    options: {
      ro: ["Doar navlul de bază", "Preț total care include toate taxele și suplimentele", "Preț fără taxe", "Doar costul combustibilului"],
      de: ["Nur die Grundfracht", "Gesamtpreis inklusive aller Gebühren und Zuschläge", "Preis ohne Steuern", "Nur Kraftstoffkosten"],
      en: ["Only basic freight", "Total price including all fees and surcharges", "Price without taxes", "Only fuel cost"]
    },
    correctIndex: 1,
    explanation: {
      ro: "All-in rate este prețul final care include toate componentele: navlu, taxe, suplimente.",
      de: "All-in-Tarif ist der Endpreis, der alle Komponenten enthält: Fracht, Gebühren, Zuschläge.",
      en: "All-in rate is the final price including all components: freight, fees, surcharges."
    }
  },
  {
    question: {
      ro: "Ce reprezintă spotul pe piața transporturilor?",
      de: "Was bedeutet Spot auf dem Transportmarkt?",
      en: "What does spot represent in the transport market?"
    },
    options: {
      ro: ["Contract pe termen lung", "Preț și transport pentru o singură cursă, fără contract", "Reducere permanentă", "Bonus pentru volum"],
      de: ["Langfristiger Vertrag", "Preis und Transport für eine einzelne Fahrt, ohne Vertrag", "Dauerhafter Rabatt", "Volumenbonus"],
      en: ["Long-term contract", "Price and transport for a single trip, without contract", "Permanent discount", "Volume bonus"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Spot-ul reprezintă un transport punctual la prețul curent al pieței, fără angajament pe termen lung.",
      de: "Spot bedeutet einen einzelnen Transport zum aktuellen Marktpreis, ohne langfristige Verpflichtung.",
      en: "Spot represents a single transport at current market price, without long-term commitment."
    }
  },
  {
    question: {
      ro: "Cum influențează direcția traficului prețul?",
      de: "Wie beeinflusst die Verkehrsrichtung den Preis?",
      en: "How does traffic direction influence price?"
    },
    options: {
      ro: ["Nu influențează deloc", "Rutele cu dezechilibru (mai multe mașini goale) au prețuri diferite", "Doar distanța contează", "Doar greutatea contează"],
      de: ["Gar nicht", "Routen mit Ungleichgewicht (mehr leere LKW) haben unterschiedliche Preise", "Nur die Entfernung zählt", "Nur das Gewicht zählt"],
      en: ["Not at all", "Routes with imbalance (more empty trucks) have different prices", "Only distance matters", "Only weight matters"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pe rutele cu dezechilibru, direcția cu puțin trafic poate avea prețuri mai mici datorită ofertei mari de mașini goale.",
      de: "Auf Routen mit Ungleichgewicht kann die Richtung mit wenig Verkehr niedrigere Preise haben, da viele leere LKW verfügbar sind.",
      en: "On routes with imbalance, the direction with little traffic may have lower prices due to many empty trucks available."
    }
  },
  {
    question: {
      ro: "Ce reprezintă minimum billing weight?",
      de: "Was bedeutet Mindestberechnungsgewicht?",
      en: "What does minimum billing weight represent?"
    },
    options: {
      ro: ["Greutatea maximă permisă", "Greutatea minimă pentru care se facturează, indiferent de greutatea reală", "Greutatea medie", "Greutatea totală"],
      de: ["Das maximal zulässige Gewicht", "Das Mindestgewicht, das berechnet wird, unabhängig vom tatsächlichen Gewicht", "Das Durchschnittsgewicht", "Das Gesamtgewicht"],
      en: ["Maximum allowed weight", "Minimum weight charged, regardless of actual weight", "Average weight", "Total weight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Minimum billing weight este greutatea minimă facturată - chiar dacă marfa e mai ușoară, se facturează acest minim.",
      de: "Das Mindestberechnungsgewicht ist das minimal berechnete Gewicht - auch wenn die Ware leichter ist, wird dieses Minimum berechnet.",
      en: "Minimum billing weight is the minimum charged weight - even if goods are lighter, this minimum is charged."
    }
  },
  {
    question: {
      ro: "Ce suplimente pot apărea pentru mărfuri speciale?",
      de: "Welche Zuschläge können für Sondergüter anfallen?",
      en: "What surcharges may apply for special goods?"
    },
    options: {
      ro: ["Niciun supliment", "ADR, temperatură controlată, supradimensionat, handling special", "Doar taxe vamale", "Doar asigurare"],
      de: ["Keine Zuschläge", "ADR, Temperaturkontrolle, Übermaß, Sonderhandling", "Nur Zollgebühren", "Nur Versicherung"],
      en: ["No surcharges", "ADR, temperature controlled, oversized, special handling", "Only customs fees", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mărfurile speciale atrag suplimente pentru: ADR (periculoase), reefer (temperatură), gabarit depășit, manipulare specială.",
      de: "Sondergüter ziehen Zuschläge an für: ADR (Gefahrgut), Reefer (Temperatur), Übermaß, Sonderhandling.",
      en: "Special goods attract surcharges for: ADR (dangerous), reefer (temperature), oversize, special handling."
    }
  },
  {
    question: {
      ro: "Ce este un freight rate?",
      de: "Was ist ein Frachttarif?",
      en: "What is a freight rate?"
    },
    options: {
      ro: ["Viteza transportului", "Prețul stabilit pentru transportul mărfurilor pe o rută specifică", "Timpul de livrare", "Greutatea mărfii"],
      de: ["Die Transportgeschwindigkeit", "Der festgelegte Preis für den Warentransport auf einer bestimmten Route", "Die Lieferzeit", "Das Warengewicht"],
      en: ["Transport speed", "The set price for transporting goods on a specific route", "Delivery time", "Goods weight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Freight rate este tariful de transport stabilit pentru o rută și un tip de marfă specifice.",
      de: "Der Frachttarif ist der festgelegte Transportpreis für eine bestimmte Route und Warenart.",
      en: "Freight rate is the set transport tariff for a specific route and goods type."
    }
  },
  {
    question: {
      ro: "Ce reprezintă break-even în calculul prețului?",
      de: "Was bedeutet Break-even in der Preiskalkulation?",
      en: "What does break-even represent in price calculation?"
    },
    options: {
      ro: ["Profitul maxim", "Punctul în care veniturile acoperă exact costurile", "Cea mai mare pierdere", "Prețul de piață"],
      de: ["Der maximale Gewinn", "Der Punkt, an dem die Einnahmen genau die Kosten decken", "Der größte Verlust", "Der Marktpreis"],
      en: ["Maximum profit", "The point where revenue exactly covers costs", "The biggest loss", "Market price"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Break-even este pragul de rentabilitate unde veniturile egalează costurile - nici profit, nici pierdere.",
      de: "Break-even ist die Gewinnschwelle, wo Einnahmen gleich Kosten sind - weder Gewinn noch Verlust.",
      en: "Break-even is the profitability threshold where revenue equals costs - neither profit nor loss."
    }
  },
  {
    question: {
      ro: "Ce costuri se includ în calculul costului per km?",
      de: "Welche Kosten werden in die Berechnung der Kosten pro km einbezogen?",
      en: "What costs are included in cost per km calculation?"
    },
    options: {
      ro: ["Doar combustibilul", "Combustibil, uzură, șofer, taxe rutiere, asigurări, amortizare", "Doar salariul șoferului", "Doar taxele rutiere"],
      de: ["Nur Kraftstoff", "Kraftstoff, Verschleiß, Fahrer, Mautgebühren, Versicherungen, Abschreibung", "Nur das Fahrergehalt", "Nur Mautgebühren"],
      en: ["Only fuel", "Fuel, wear, driver, road tolls, insurance, depreciation", "Only driver salary", "Only road tolls"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Costul pe km include toate cheltuielile: combustibil, uzură, salariu șofer, taxe, asigurări și amortizare vehicul.",
      de: "Die Kosten pro km umfassen alle Ausgaben: Kraftstoff, Verschleiß, Fahrergehalt, Gebühren, Versicherungen und Fahrzeugabschreibung.",
      en: "Cost per km includes all expenses: fuel, wear, driver salary, fees, insurance and vehicle depreciation."
    }
  },
  {
    question: {
      ro: "Ce este o cotație de transport?",
      de: "Was ist ein Transportangebot?",
      en: "What is a transport quotation?"
    },
    options: {
      ro: ["Contract final", "Ofertă de preț pentru un transport specific, cu condiții", "Factură", "Certificat de livrare"],
      de: ["Endvertrag", "Preisangebot für einen bestimmten Transport mit Bedingungen", "Rechnung", "Liefernachweis"],
      en: ["Final contract", "Price offer for a specific transport, with conditions", "Invoice", "Delivery certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cotația este oferta de preț care detaliază costul și condițiile pentru un transport specific.",
      de: "Das Angebot ist das Preisangebot, das die Kosten und Bedingungen für einen bestimmten Transport detailliert.",
      en: "The quotation is the price offer detailing the cost and conditions for a specific transport."
    }
  },
  {
    question: {
      ro: "Ce reprezintă prețul FOB?",
      de: "Was bedeutet der FOB-Preis?",
      en: "What does FOB price represent?"
    },
    options: {
      ro: ["Free on Board - prețul include costurile până la încărcarea în vehicul", "Freight On Board", "Full Order Billing", "First Order Bonus"],
      de: ["Free on Board - Preis inklusive Kosten bis zur Verladung in das Fahrzeug", "Freight On Board", "Full Order Billing", "First Order Bonus"],
      en: ["Free on Board - price includes costs up to loading onto vehicle", "Freight On Board", "Full Order Billing", "First Order Bonus"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FOB înseamnă că prețul include toate costurile până la încărcarea mărfii în mijlocul de transport.",
      de: "FOB bedeutet, dass der Preis alle Kosten bis zur Verladung der Ware in das Transportmittel enthält.",
      en: "FOB means the price includes all costs up to loading the goods onto the means of transport."
    }
  },
  {
    question: {
      ro: "Cum afectează volumul anual prețurile contractuale?",
      de: "Wie beeinflusst das Jahresvolumen die Vertragspreise?",
      en: "How does annual volume affect contract prices?"
    },
    options: {
      ro: ["Nu afectează", "Volume mari permit negocierea unor prețuri mai mici", "Volume mari cresc prețurile", "Doar calitatea contează"],
      de: ["Gar nicht", "Große Mengen ermöglichen niedrigere Preisverhandlungen", "Große Mengen erhöhen die Preise", "Nur Qualität zählt"],
      en: ["Not at all", "Large volumes allow negotiating lower prices", "Large volumes increase prices", "Only quality matters"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Volumele mari permit negocierea de prețuri preferențiale datorită economiilor de scară și predictabilității.",
      de: "Große Mengen ermöglichen die Verhandlung von Vorzugspreisen aufgrund von Skaleneffekten und Vorhersehbarkeit.",
      en: "Large volumes allow negotiating preferential prices due to economies of scale and predictability."
    }
  },
  {
    question: {
      ro: "Ce taxă suplimentară se aplică pentru weekend delivery?",
      de: "Welche zusätzliche Gebühr gilt für Wochenendlieferung?",
      en: "What additional fee applies for weekend delivery?"
    },
    options: {
      ro: ["Nicio taxă", "Supliment weekend/sărbători (poate fi 20-50% din tarif)", "Reducere", "Aceeași taxă ca în timpul săptămânii"],
      de: ["Keine Gebühr", "Wochenend-/Feiertagszuschlag (kann 20-50% des Tarifs betragen)", "Rabatt", "Gleiche Gebühr wie unter der Woche"],
      en: ["No fee", "Weekend/holiday surcharge (can be 20-50% of rate)", "Discount", "Same fee as weekdays"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Livrările în weekend sau sărbători atrag suplimente semnificative datorită costurilor operaționale mai mari.",
      de: "Wochenend- oder Feiertagslieferungen ziehen erhebliche Zuschläge aufgrund höherer Betriebskosten an.",
      en: "Weekend or holiday deliveries attract significant surcharges due to higher operational costs."
    }
  },
  {
    question: {
      ro: "Ce este currency adjustment factor (CAF)?",
      de: "Was ist der Währungsanpassungsfaktor (CAF)?",
      en: "What is currency adjustment factor (CAF)?"
    },
    options: {
      ro: ["Taxă fixă", "Factor de ajustare pentru fluctuațiile cursului valutar", "Reducere pentru plată rapidă", "Taxă de procesare"],
      de: ["Feste Gebühr", "Anpassungsfaktor für Währungsschwankungen", "Skonto für schnelle Zahlung", "Bearbeitungsgebühr"],
      en: ["Fixed fee", "Adjustment factor for currency fluctuations", "Discount for quick payment", "Processing fee"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CAF ajustează prețul pentru a compensa fluctuațiile cursului de schimb în transportul internațional.",
      de: "CAF passt den Preis an, um Wechselkursschwankungen im internationalen Transport auszugleichen.",
      en: "CAF adjusts the price to compensate for exchange rate fluctuations in international transport."
    }
  },
  {
    question: {
      ro: "Ce costuri adaugă un transport cu escortă?",
      de: "Welche Kosten fügt ein Transport mit Eskortfahrzeug hinzu?",
      en: "What costs does an escorted transport add?"
    },
    options: {
      ro: ["Niciun cost suplimentar", "Costuri vehicul escortă, personal, autorizații, restricții orare", "Doar autorizații", "Doar combustibil extra"],
      de: ["Keine zusätzlichen Kosten", "Kosten für Begleitfahrzeug, Personal, Genehmigungen, Zeitbeschränkungen", "Nur Genehmigungen", "Nur zusätzlicher Kraftstoff"],
      en: ["No additional cost", "Escort vehicle costs, personnel, permits, time restrictions", "Only permits", "Only extra fuel"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transporturile cu escortă adaugă costuri semnificative: vehicul și personal de escortă, autorizații și restricții de program.",
      de: "Transporte mit Eskorte verursachen erhebliche Kosten: Begleitfahrzeug und -personal, Genehmigungen und Zeitbeschränkungen.",
      en: "Escorted transports add significant costs: escort vehicle and personnel, permits and schedule restrictions."
    }
  },
  {
    question: {
      ro: "Ce este un tender de transport?",
      de: "Was ist eine Transportausschreibung?",
      en: "What is a transport tender?"
    },
    options: {
      ro: ["Un tip de vehicul", "Proces competitiv de selecție a transportatorilor pe bază de oferte", "Contract pe termen scurt", "Asigurare specială"],
      de: ["Ein Fahrzeugtyp", "Wettbewerbliches Auswahlverfahren für Frachtführer auf Angebotsbasis", "Kurzfristiger Vertrag", "Spezielle Versicherung"],
      en: ["A type of vehicle", "Competitive carrier selection process based on offers", "Short-term contract", "Special insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tender-ul este un proces de licitație unde transportatorii concurează cu oferte pentru a câștiga contracte.",
      de: "Die Ausschreibung ist ein Bieterverfahren, bei dem Frachtführer mit Angeboten um Aufträge konkurrieren.",
      en: "A tender is a bidding process where carriers compete with offers to win contracts."
    }
  },
  {
    question: {
      ro: "Ce reprezintă rate parity în transporturi?",
      de: "Was bedeutet Tarifparität im Transport?",
      en: "What does rate parity represent in transport?"
    },
    options: {
      ro: ["Prețuri diferite pentru aceeași rută", "Același preț oferit tuturor clienților pentru aceleași servicii", "Prețuri secrete", "Reduceri exclusive"],
      de: ["Unterschiedliche Preise für dieselbe Route", "Derselbe Preis für alle Kunden für dieselben Dienste", "Geheime Preise", "Exklusive Rabatte"],
      en: ["Different prices for same route", "Same price offered to all clients for same services", "Secret prices", "Exclusive discounts"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rate parity înseamnă transparență și consistență în prețuri - aceleași servicii au același preț pentru toți.",
      de: "Tarifparität bedeutet Transparenz und Konsistenz bei den Preisen - gleiche Dienste haben denselben Preis für alle.",
      en: "Rate parity means transparency and consistency in pricing - same services have same price for everyone."
    }
  },
  {
    question: {
      ro: "Ce impact are haul length asupra prețului per km?",
      de: "Welchen Einfluss hat die Transportstrecke auf den Preis pro km?",
      en: "What impact does haul length have on price per km?"
    },
    options: {
      ro: ["Niciun impact", "Distanțele mai lungi au de obicei cost per km mai mic", "Distanțele mai scurte sunt mai ieftine per km", "Prețul e constant"],
      de: ["Keine Auswirkung", "Längere Strecken haben normalerweise niedrigere Kosten pro km", "Kürzere Strecken sind billiger pro km", "Der Preis ist konstant"],
      en: ["No impact", "Longer distances usually have lower cost per km", "Shorter distances are cheaper per km", "Price is constant"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Distanțele mai lungi permit diluarea costurilor fixe, rezultând un preț per km mai mic.",
      de: "Längere Strecken ermöglichen die Verteilung der Fixkosten, was zu niedrigeren Kosten pro km führt.",
      en: "Longer distances allow dilution of fixed costs, resulting in lower cost per km."
    }
  },
  {
    question: {
      ro: "Ce este un accessorial charge?",
      de: "Was ist eine Zusatzleistungsgebühr?",
      en: "What is an accessorial charge?"
    },
    options: {
      ro: ["Taxa principală de transport", "Taxă pentru servicii suplimentare peste transportul standard", "Reducere pentru clienți fideli", "Taxa de mediu"],
      de: ["Die Haupttransportgebühr", "Gebühr für Zusatzleistungen über den Standardtransport hinaus", "Treuerabatt für Kunden", "Umweltgebühr"],
      en: ["Main transport fee", "Fee for additional services beyond standard transport", "Discount for loyal customers", "Environmental fee"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Accessorial charges sunt taxe pentru servicii extra: liftgate, inside delivery, appointment, etc.",
      de: "Zusatzleistungsgebühren sind Gebühren für Extraservices: Ladebordwand, Innenlieferung, Termin, usw.",
      en: "Accessorial charges are fees for extra services: liftgate, inside delivery, appointment, etc."
    }
  },
  {
    question: {
      ro: "Cum se calculează marja de profit într-o cotație?",
      de: "Wie wird die Gewinnmarge in einem Angebot berechnet?",
      en: "How is profit margin calculated in a quotation?"
    },
    options: {
      ro: ["Aleatoriu", "Cost total + procentaj marjă dorită = preț de vânzare", "Se scade din cost", "Nu se calculează"],
      de: ["Zufällig", "Gesamtkosten + gewünschter Margenprozentsatz = Verkaufspreis", "Wird von den Kosten abgezogen", "Wird nicht berechnet"],
      en: ["Randomly", "Total cost + desired margin percentage = selling price", "Subtracted from cost", "Not calculated"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marja se adaugă peste costurile totale pentru a obține prețul de vânzare care asigură profitabilitatea.",
      de: "Die Marge wird zu den Gesamtkosten addiert, um den Verkaufspreis zu erhalten, der die Rentabilität sichert.",
      en: "Margin is added on top of total costs to get the selling price that ensures profitability."
    }
  },
  {
    question: {
      ro: "Ce este un rate card?",
      de: "Was ist eine Tarifkarte?",
      en: "What is a rate card?"
    },
    options: {
      ro: ["Card de credit", "Document cu prețuri standard pentru diferite servicii și rute", "Permis de conducere", "Certificat de asigurare"],
      de: ["Kreditkarte", "Dokument mit Standardpreisen für verschiedene Dienste und Routen", "Führerschein", "Versicherungszertifikat"],
      en: ["Credit card", "Document with standard prices for different services and routes", "Driving license", "Insurance certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rate card este un document cu prețurile standard pentru serviciile și rutele oferite de companie.",
      de: "Die Tarifkarte ist ein Dokument mit Standardpreisen für die vom Unternehmen angebotenen Dienste und Routen.",
      en: "Rate card is a document with standard prices for services and routes offered by the company."
    }
  },
  {
    question: {
      ro: "Ce reprezintă TDC (Total Delivered Cost)?",
      de: "Was bedeutet TDC (Total Delivered Cost)?",
      en: "What does TDC (Total Delivered Cost) represent?"
    },
    options: {
      ro: ["Doar costul transportului", "Costul total al mărfii livrate, inclusiv transport, taxe, asigurare", "Taxele vamale", "Doar asigurarea"],
      de: ["Nur Transportkosten", "Gesamtkosten der gelieferten Ware, einschließlich Transport, Gebühren, Versicherung", "Zollgebühren", "Nur Versicherung"],
      en: ["Only transport cost", "Total cost of delivered goods, including transport, fees, insurance", "Customs fees", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TDC reprezintă costul complet al mărfii ajunse la destinatar, incluzând toate cheltuielile pe lanțul de aprovizionare.",
      de: "TDC stellt die Gesamtkosten der beim Empfänger angekommenen Ware dar, einschließlich aller Kosten in der Lieferkette.",
      en: "TDC represents the complete cost of goods arrived at consignee, including all supply chain expenses."
    }
  }
];

export function getRandomPricingQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...pricingQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
