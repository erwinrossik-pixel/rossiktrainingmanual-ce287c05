import { TranslatedQuizQuestion } from '../../quizTranslations';

export const exchangesComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt principalele burse de transport în Europa?",
      de: "Was sind die wichtigsten Frachtbörsen in Europa?",
      en: "What are the main freight exchanges in Europe?"
    },
    options: {
      ro: ["Doar TimoCom", "Trans.eu, TimoCom, Teleroute, Wtransnet, Loads Today", "Doar burse locale", "Nu există burse"],
      de: ["Nur TimoCom", "Trans.eu, TimoCom, Teleroute, Wtransnet, Loads Today", "Nur lokale Börsen", "Keine Börsen"],
      en: ["Only TimoCom", "Trans.eu, TimoCom, Teleroute, Wtransnet, Loads Today", "Only local exchanges", "No exchanges"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Burse majore: Trans.eu (Est), TimoCom (Vest/Germania), Teleroute (Franța), Wtransnet (Spania), Loads Today (UK). Fiecare cu focus regional.",
      de: "Hauptbörsen: Trans.eu (Ost), TimoCom (West/Deutschland), Teleroute (Frankreich), Wtransnet (Spanien), Loads Today (UK). Jede mit regionalem Fokus.",
      en: "Major exchanges: Trans.eu (East), TimoCom (West/Germany), Teleroute (France), Wtransnet (Spain), Loads Today (UK). Each with regional focus."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tipuri de oferte găsești pe o bursă de transport?",
      de: "Welche Angebotsarten findest du auf einer Frachtbörse?",
      en: "What types of offers do you find on a freight exchange?"
    },
    options: {
      ro: ["Doar camioane", "Oferte de marfă (expeditori) și oferte de transport (transportatori)", "Doar marfă", "Doar contracte lungi"],
      de: ["Nur LKW", "Frachtangebote (Spediteure) und Transportangebote (Transportunternehmer)", "Nur Fracht", "Nur Langzeitverträge"],
      en: ["Only trucks", "Freight offers (forwarders) and transport offers (carriers)", "Only cargo", "Only long contracts"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bursă: oferte marfă (caut transport) și oferte vehicul (am camion liber). Match-ul între cerere și ofertă.",
      de: "Börse: Frachtangebote (suche Transport) und Fahrzeugangebote (habe freien LKW). Match zwischen Nachfrage und Angebot.",
      en: "Exchange: cargo offers (looking for transport) and vehicle offers (have free truck). Match between demand and supply."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum evaluezi fiabilitatea unui partener pe bursă?",
      de: "Wie bewertest du die Zuverlässigkeit eines Partners auf der Börse?",
      en: "How do you evaluate a partner's reliability on the exchange?"
    },
    options: {
      ro: ["Doar după preț", "Rating, istoric tranzacții, verificări documente, referințe, vechime cont", "Nu evaluezi", "Doar după logo"],
      de: ["Nur nach Preis", "Rating, Transaktionshistorie, Dokumentenprüfung, Referenzen, Kontoalter", "Nicht bewerten", "Nur nach Logo"],
      en: ["Only by price", "Rating, transaction history, document checks, references, account age", "Don't evaluate", "Only by logo"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Evaluare: rating platformă, număr tranzacții, comentarii parteneri, documente verificate (licență, CMR), vechime și activitate.",
      de: "Bewertung: Plattform-Rating, Transaktionsanzahl, Partnerkommentare, verifizierte Dokumente (Lizenz, CMR), Alter und Aktivität.",
      en: "Evaluation: platform rating, transaction count, partner comments, verified documents (license, CMR), age and activity."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Strategie de utilizare a burselor: când spot vs. când contract?",
      de: "Strategie zur Börsennutzung: wann Spot vs. wann Vertrag?",
      en: "Exchange usage strategy: when spot vs. when contract?"
    },
    options: {
      ro: ["Doar spot mereu", "Spot pentru peak/urgențe/rute rare; contract pentru volume predictibile și rute frecvente", "Doar contracte", "Nu folosești bursă"],
      de: ["Immer nur Spot", "Spot für Peak/Notfälle/seltene Routen; Vertrag für vorhersehbare Volumina und häufige Routen", "Nur Verträge", "Keine Börse nutzen"],
      en: ["Only spot always", "Spot for peak/urgencies/rare routes; contract for predictable volumes and frequent routes", "Only contracts", "Don't use exchange"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mix optim: 70-80% volum pe contracte (stabilitate, preț), 20-30% spot (flexibilitate, urgențe, rute ocazionale).",
      de: "Optimaler Mix: 70-80% Volumen auf Verträgen (Stabilität, Preis), 20-30% Spot (Flexibilität, Notfälle, gelegentliche Routen).",
      en: "Optimal mix: 70-80% volume on contracts (stability, price), 20-30% spot (flexibility, urgencies, occasional routes)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce informații trebuie să conțină o ofertă de marfă pe bursă?",
      de: "Welche Informationen muss ein Frachtangebot auf der Börse enthalten?",
      en: "What information must a freight offer on the exchange contain?"
    },
    options: {
      ro: ["Doar destinația", "Rută (origine-destinație), date, tip marfă/vehicul, greutate, preț indicativ", "Doar prețul", "Doar telefonul"],
      de: ["Nur Ziel", "Route (Ursprung-Ziel), Daten, Fracht-/Fahrzeugtyp, Gewicht, Richtpreis", "Nur Preis", "Nur Telefon"],
      en: ["Only destination", "Route (origin-destination), dates, cargo/vehicle type, weight, indicative price", "Only price", "Only phone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ofertă completă: rută exactă, date încărcare/descărcare, tip vehicul necesar, greutate/volum, ADR dacă e cazul, preț orientativ.",
      de: "Vollständiges Angebot: exakte Route, Be-/Entladedaten, benötigter Fahrzeugtyp, Gewicht/Volumen, ADR falls relevant, Richtpreis.",
      en: "Complete offer: exact route, loading/unloading dates, required vehicle type, weight/volume, ADR if applicable, indicative price."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum negociezi eficient pe bursă?",
      de: "Wie verhandelst du effektiv auf der Börse?",
      en: "How do you negotiate effectively on the exchange?"
    },
    options: {
      ro: ["Accepți primul preț", "Cunoști piața, ai alternative, negociezi rapid dar ferm, documentezi acordul", "Nu negociezi", "Doar prin email"],
      de: ["Ersten Preis akzeptieren", "Markt kennen, Alternativen haben, schnell aber bestimmt verhandeln, Vereinbarung dokumentieren", "Nicht verhandeln", "Nur per E-Mail"],
      en: ["Accept first price", "Know the market, have alternatives, negotiate quickly but firmly, document agreement", "Don't negotiate", "Only by email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Negociere bursă: cunoaște prețul pieței, fii pregătit să refuzi, răspunde rapid, confirmă în scris toate detaliile agreate.",
      de: "Börsenverhandlung: Marktpreis kennen, bereit sein abzulehnen, schnell antworten, alle vereinbarten Details schriftlich bestätigen.",
      en: "Exchange negotiation: know market price, be prepared to refuse, respond quickly, confirm all agreed details in writing."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Gestionare risc pe bursă: transportator nou dispare cu marfa. Măsuri preventive?",
      de: "Risikomanagement auf der Börse: neuer Transportunternehmer verschwindet mit Fracht. Präventivmaßnahmen?",
      en: "Risk management on exchange: new carrier disappears with cargo. Preventive measures?"
    },
    options: {
      ro: ["Nu poți preveni", "Verificare completă, tracking obligatoriu, plată după POD, asigurare marfă, limite expunere", "Doar încredere", "Doar contract"],
      de: ["Nicht vermeidbar", "Vollständige Prüfung, Pflicht-Tracking, Zahlung nach POD, Frachtversicherung, Expositionsgrenzen", "Nur Vertrauen", "Nur Vertrag"],
      en: ["Cannot prevent", "Complete verification, mandatory tracking, payment after POD, cargo insurance, exposure limits", "Only trust", "Only contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prevenție: verificare licențe/asigurări înainte, GPS tracking obligatoriu, plată doar după POD, asigurare marfă proprie, plafon per transportator nou.",
      de: "Prävention: Lizenz-/Versicherungsprüfung vorab, GPS-Tracking obligatorisch, Zahlung nur nach POD, eigene Frachtversicherung, Obergrenze pro neuem Transportunternehmer.",
      en: "Prevention: license/insurance check beforehand, GPS tracking mandatory, payment only after POD, own cargo insurance, cap per new carrier."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un 'return load' (încărcătură de retur)?",
      de: "Was ist eine 'Rückfracht'?",
      en: "What is a 'return load'?"
    },
    options: {
      ro: ["Marfă refuzată", "Marfă pentru cursa de întoarcere a camionului", "Marfă returnată", "Marfă deteriorată"],
      de: ["Abgelehnte Fracht", "Fracht für die Rückfahrt des LKW", "Rücksendung", "Beschädigte Fracht"],
      en: ["Refused cargo", "Cargo for the truck's return trip", "Returned goods", "Damaged cargo"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Return load: găsești marfă pentru drumul înapoi. Reduce km gol, crește profitabilitatea camionului.",
      de: "Rückfracht: Fracht für den Rückweg finden. Reduziert Leerkilometer, erhöht LKW-Profitabilität.",
      en: "Return load: find cargo for the way back. Reduces empty km, increases truck profitability."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum folosești bursele pentru a găsi retur?",
      de: "Wie nutzt du Börsen um Rückfracht zu finden?",
      en: "How do you use exchanges to find return loads?"
    },
    options: {
      ro: ["Doar aștepți", "Postezi ofertă vehicul pe ruta de întoarcere, cauți activ marfă compatibilă, alertă automată", "Nu cauți retur", "Doar telefonic"],
      de: ["Nur warten", "Fahrzeugangebot auf Rückroute posten, aktiv kompatible Fracht suchen, automatische Alerts", "Nicht suchen", "Nur telefonisch"],
      en: ["Only wait", "Post vehicle offer on return route, actively search compatible cargo, automatic alerts", "Don't search return", "Only by phone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Căutare retur: postează vehicul pe direcția dorită, setează alerte pentru rute, contactează proactiv expeditorii cu marfă potrivită.",
      de: "Rückfracht-Suche: Fahrzeug in gewünschter Richtung posten, Alerts für Routen setzen, Spediteure mit passender Fracht proaktiv kontaktieren.",
      en: "Return search: post vehicle in desired direction, set alerts for routes, proactively contact forwarders with suitable cargo."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Arbitraj pe bursă: marfă RO-DE la 1400€, ai transportator la 1100€. Cum maximizezi profitul legal și etic?",
      de: "Börsenarbitrage: Fracht RO-DE für 1400€, du hast Transportunternehmer für 1100€. Wie maximierst du legal und ethisch den Gewinn?",
      en: "Exchange arbitrage: cargo RO-DE at €1,400, you have carrier at €1,100. How do you maximize profit legally and ethically?"
    },
    options: {
      ro: ["Iei marja 300€ fără serviciu", "Adaugi valoare reală: tracking, comunicare, asigurare, rezolvare probleme - marja justificată", "Refuzi afacerea", "Ascunzi marja"],
      de: ["300€ Marge ohne Service", "Echten Mehrwert hinzufügen: Tracking, Kommunikation, Versicherung, Problemlösung - gerechtfertigte Marge", "Geschäft ablehnen", "Marge verstecken"],
      en: ["Take €300 margin without service", "Add real value: tracking, communication, insurance, problem solving - justified margin", "Refuse the deal", "Hide margin"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Valoare adăugată legitimă: coordonezi, urmărești, comunici, rezolvi probleme, asiguri backup. Marja reflectă serviciul real oferit.",
      de: "Legitimer Mehrwert: koordinieren, verfolgen, kommunizieren, Probleme lösen, Backup sichern. Marge spiegelt tatsächlichen Service wider.",
      en: "Legitimate added value: coordinate, track, communicate, solve problems, ensure backup. Margin reflects actual service provided."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este sistemul de rating pe burse?",
      de: "Was ist das Rating-System auf Börsen?",
      en: "What is the rating system on exchanges?"
    },
    options: {
      ro: ["Nota școlară", "Evaluare bazată pe feedback de la partenerii cu care ai lucrat", "Nota bancară", "Scorul GPS"],
      de: ["Schulnote", "Bewertung basierend auf Feedback von Partnern mit denen du gearbeitet hast", "Banknote", "GPS-Score"],
      en: ["School grade", "Evaluation based on feedback from partners you've worked with", "Bank rating", "GPS score"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rating: partenerii evaluează colaborarea (comunicare, plată, fiabilitate). Scor vizibil, construiește reputație pe platformă.",
      de: "Rating: Partner bewerten Zusammenarbeit (Kommunikation, Zahlung, Zuverlässigkeit). Sichtbarer Score, baut Reputation auf Plattform auf.",
      en: "Rating: partners evaluate collaboration (communication, payment, reliability). Visible score, builds reputation on platform."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi disputele care apar din tranzacții pe bursă?",
      de: "Wie managst du Streitigkeiten aus Börsentransaktionen?",
      en: "How do you manage disputes from exchange transactions?"
    },
    options: {
      ro: ["Ignori", "Documentație completă, comunicare directă, mediere platformă, rating negativ ca ultimă soluție", "Doar instanță", "Doar rating negativ"],
      de: ["Ignorieren", "Vollständige Dokumentation, direkte Kommunikation, Plattform-Mediation, negatives Rating als letzter Ausweg", "Nur Gericht", "Nur negatives Rating"],
      en: ["Ignore", "Complete documentation, direct communication, platform mediation, negative rating as last resort", "Only court", "Only negative rating"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dispute: conversații salvate, acorduri în scris, încercare rezolvare directă, mediere prin platformă, rating negativ doar dacă eșuează toate.",
      de: "Streitigkeiten: gespeicherte Gespräche, schriftliche Vereinbarungen, direkte Lösungsversuche, Plattform-Mediation, negatives Rating nur wenn alles scheitert.",
      en: "Disputes: saved conversations, written agreements, direct resolution attempts, platform mediation, negative rating only if all fails."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare strategie multi-bursă: cum alegi și combini platformele?",
      de: "Entwicklung Multi-Börsen-Strategie: wie wählst und kombinierst du Plattformen?",
      en: "Developing multi-exchange strategy: how do you choose and combine platforms?"
    },
    options: {
      ro: ["O singură platformă", "Analiză piețe țintă, acoperire geografică, costuri, integrare TMS, mix complementar", "Toate platformele", "Niciuna"],
      de: ["Nur eine Plattform", "Zielmärkte analysieren, geografische Abdeckung, Kosten, TMS-Integration, komplementärer Mix", "Alle Plattformen", "Keine"],
      en: ["Only one platform", "Analyze target markets, geographic coverage, costs, TMS integration, complementary mix", "All platforms", "None"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multi-bursă: Trans.eu pentru Est, TimoCom pentru Vest, Teleroute pentru Franța. Evaluează cost vs. oportunități per piață.",
      de: "Multi-Börse: Trans.eu für Osten, TimoCom für Westen, Teleroute für Frankreich. Kosten vs. Chancen pro Markt bewerten.",
      en: "Multi-exchange: Trans.eu for East, TimoCom for West, Teleroute for France. Evaluate cost vs. opportunities per market."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce costuri implică utilizarea burselor de transport?",
      de: "Welche Kosten bringt die Nutzung von Frachtbörsen mit sich?",
      en: "What costs does using freight exchanges involve?"
    },
    options: {
      ro: ["Gratuit", "Abonament lunar/anual, costuri per utilizator, eventual comisioane pe tranzacție", "Doar per km", "Doar la înregistrare"],
      de: ["Kostenlos", "Monats-/Jahresabonnement, Kosten pro Nutzer, eventuell Transaktionsgebühren", "Nur pro km", "Nur bei Registrierung"],
      en: ["Free", "Monthly/annual subscription, costs per user, possibly transaction fees", "Only per km", "Only at registration"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Costuri: abonament (500-2000€/an), licențe per user, unele au comision per tranzacție. ROI dacă găsești volume suficiente.",
      de: "Kosten: Abonnement (500-2000€/Jahr), Lizenzen pro User, manche haben Transaktionsgebühr. ROI wenn genug Volumen gefunden.",
      en: "Costs: subscription (€500-2000/year), licenses per user, some have transaction fee. ROI if enough volume found."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum automatizezi căutarea pe bursă?",
      de: "Wie automatisierst du die Börsensuche?",
      en: "How do you automate exchange searching?"
    },
    options: {
      ro: ["Nu se poate", "Alerte pe rute, filtre salvate, integrare API cu TMS, notificări push", "Doar manual", "Doar email"],
      de: ["Nicht möglich", "Alerts auf Routen, gespeicherte Filter, API-Integration mit TMS, Push-Benachrichtigungen", "Nur manuell", "Nur E-Mail"],
      en: ["Not possible", "Alerts on routes, saved filters, API integration with TMS, push notifications", "Only manual", "Only email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Automatizare: salvează căutări frecvente, setează alerte pe rute cheie, integrare API pentru import automat în TMS.",
      de: "Automatisierung: häufige Suchen speichern, Alerts auf Schlüsselrouten setzen, API-Integration für automatischen TMS-Import.",
      en: "Automation: save frequent searches, set alerts on key routes, API integration for automatic import into TMS."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Analiză ROI bursă: abonament 1500€/an, găsești 50 curse/an cu marjă medie 80€. Merită?",
      de: "Börsen-ROI-Analyse: Abonnement 1500€/Jahr, du findest 50 Fahrten/Jahr mit durchschnittlich 80€ Marge. Lohnt sich?",
      en: "Exchange ROI analysis: subscription €1,500/year, you find 50 trips/year with average €80 margin. Worth it?"
    },
    options: {
      ro: ["Nu, prea scump", "Da: 50 × 80€ = 4000€, minus 1500€ cost = 2500€ profit net + beneficii indirecte", "Break-even", "Nu se calculează"],
      de: ["Nein, zu teuer", "Ja: 50 × 80€ = 4000€, minus 1500€ Kosten = 2500€ Nettogewinn + indirekte Vorteile", "Break-even", "Nicht berechenbar"],
      en: ["No, too expensive", "Yes: 50 × 80€ = €4,000, minus €1,500 cost = €2,500 net profit + indirect benefits", "Break-even", "Cannot calculate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ROI pozitiv: 4000€ venit - 1500€ cost = 2500€ profit direct. Plus: retur pentru propriile curse, backup în urgențe, info piață.",
      de: "Positiver ROI: 4000€ Einnahmen - 1500€ Kosten = 2500€ direkter Gewinn. Plus: Rückfracht für eigene Fahrten, Backup in Notfällen, Marktinfo.",
      en: "Positive ROI: €4,000 revenue - €1,500 cost = €2,500 direct profit. Plus: return for own trips, backup in urgencies, market info."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'spot market' în transport?",
      de: "Was ist der 'Spot-Markt' im Transport?",
      en: "What is the 'spot market' in transport?"
    },
    options: {
      ro: ["Piață de parcare", "Piața pentru transporturi individuale, fără contract pe termen lung", "Piața futures", "Piața de combustibil"],
      de: ["Parkplatzmarkt", "Markt für Einzeltransporte ohne langfristigen Vertrag", "Futures-Markt", "Kraftstoffmarkt"],
      en: ["Parking market", "Market for individual transports without long-term contract", "Futures market", "Fuel market"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Spot market: prețuri negociate per transport, reflectă cererea/oferta imediată. Opus contractelor cu tarife fixe.",
      de: "Spot-Markt: Preise pro Transport verhandelt, spiegelt unmittelbare Nachfrage/Angebot wider. Gegenteil von Festtarifverträgen.",
      en: "Spot market: prices negotiated per transport, reflects immediate demand/supply. Opposite of fixed-rate contracts."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum influențează sezonalitatea prețurile pe bursă?",
      de: "Wie beeinflusst Saisonalität die Börsenpreise?",
      en: "How does seasonality influence exchange prices?"
    },
    options: {
      ro: ["Nu influențează", "Peak season = prețuri mai mari, low season = prețuri mai mici, capacitate variabilă", "Doar pe contracte", "Invers"],
      de: ["Keine Beeinflussung", "Peak Season = höhere Preise, Low Season = niedrigere Preise, variable Kapazität", "Nur bei Verträgen", "Umgekehrt"],
      en: ["No influence", "Peak season = higher prices, low season = lower prices, variable capacity", "Only on contracts", "Inverse"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sezonalitate: nov-dec și pre-sărbători = peak (+20-40% prețuri), ian-feb și aug = low (-10-20%). Planifică în avans.",
      de: "Saisonalität: Nov-Dez und vor Feiertagen = Peak (+20-40% Preise), Jan-Feb und Aug = Low (-10-20%). Im Voraus planen.",
      en: "Seasonality: Nov-Dec and pre-holidays = peak (+20-40% prices), Jan-Feb and Aug = low (-10-20%). Plan ahead."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Construire rețea de parteneri prin bursă: de la tranzacție la relație stabilă. Etape?",
      de: "Partnernetzwerk über Börse aufbauen: von Transaktion zu stabiler Beziehung. Schritte?",
      en: "Building partner network through exchange: from transaction to stable relationship. Steps?"
    },
    options: {
      ro: ["Doar tranzacții", "Identificare parteneri buni, creștere graduală volum, negociere contract, relație pe termen lung", "Contract de la prima cursă", "Nu se poate"],
      de: ["Nur Transaktionen", "Gute Partner identifizieren, schrittweise Volumen steigern, Vertrag verhandeln, langfristige Beziehung", "Vertrag ab erster Fahrt", "Nicht möglich"],
      en: ["Only transactions", "Identify good partners, gradually increase volume, negotiate contract, long-term relationship", "Contract from first trip", "Not possible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Evoluție: 3-5 curse test, evaluare performanță, creștere volum, propunere contract cadru, parteneriat strategic.",
      de: "Entwicklung: 3-5 Testfahrten, Leistungsbewertung, Volumenerhöhung, Rahmenvertragsvorschlag, strategische Partnerschaft.",
      en: "Evolution: 3-5 test trips, performance evaluation, volume increase, framework contract proposal, strategic partnership."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce documente verifici înainte de a lucra cu cineva de pe bursă?",
      de: "Welche Dokumente prüfst du bevor du mit jemandem von der Börse arbeitest?",
      en: "What documents do you check before working with someone from the exchange?"
    },
    options: {
      ro: ["Niciun document", "Licență transport, CMR, asigurare marfă, înregistrare fiscală", "Doar CMR", "Doar licență"],
      de: ["Keine Dokumente", "Transportlizenz, CMR, Frachtversicherung, Steuerregistrierung", "Nur CMR", "Nur Lizenz"],
      en: ["No documents", "Transport license, CMR, cargo insurance, tax registration", "Only CMR", "Only license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificări standard: licență de transport valabilă, poliță CMR în vigoare, asigurare marfă suficientă, CUI/VAT valid.",
      de: "Standard-Prüfungen: gültige Transportlizenz, aktuelle CMR-Police, ausreichende Frachtversicherung, gültige USt-ID.",
      en: "Standard checks: valid transport license, current CMR policy, sufficient cargo insurance, valid VAT number."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum monitorizezi prețurile pieței folosind bursele?",
      de: "Wie überwachst du Marktpreise mithilfe der Börsen?",
      en: "How do you monitor market prices using exchanges?"
    },
    options: {
      ro: ["Nu monitorizezi", "Urmărești ofertele pe rute cheie, note tendințe, comparație cu propriu pricing", "Doar lunar", "Doar la tender"],
      de: ["Nicht überwachen", "Angebote auf Schlüsselrouten verfolgen, Trendsnotizen, Vergleich mit eigenem Pricing", "Nur monatlich", "Nur bei Ausschreibung"],
      en: ["Don't monitor", "Track offers on key routes, note trends, compare with own pricing", "Only monthly", "Only at tender"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Monitorizare: urmărești prețuri pe rute importante, notezi variații sezoniere, compari cu propriile tarife, ajustezi strategia.",
      de: "Monitoring: Preise auf wichtigen Routen verfolgen, saisonale Variationen notieren, mit eigenen Tarifen vergleichen, Strategie anpassen.",
      en: "Monitoring: track prices on important routes, note seasonal variations, compare with own rates, adjust strategy."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Integrare bursă în procesul operațional: API, TMS, automatizare. Beneficii și provocări?",
      de: "Börsenintegration in den operativen Prozess: API, TMS, Automatisierung. Vorteile und Herausforderungen?",
      en: "Exchange integration into operational process: API, TMS, automation. Benefits and challenges?"
    },
    options: {
      ro: ["Nu se integrează", "Automatizare căutare/posting, date în timp real, eficiență; provocare: cost și complexitate setup", "Doar manual", "Doar pentru mari"],
      de: ["Keine Integration", "Automatisierung Suche/Posting, Echtzeit-Daten, Effizienz; Herausforderung: Kosten und Setup-Komplexität", "Nur manuell", "Nur für Große"],
      en: ["No integration", "Automate search/posting, real-time data, efficiency; challenge: cost and setup complexity", "Only manual", "Only for large"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integrare: import automat oferte în TMS, posting direct, sincronizare status. Challenge: cost API, mentenanță, training echipă.",
      de: "Integration: automatischer Angebotsimport in TMS, direktes Posting, Statussynchronisierung. Challenge: API-Kosten, Wartung, Team-Training.",
      en: "Integration: automatic offer import to TMS, direct posting, status sync. Challenge: API cost, maintenance, team training."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce avantaje oferă bursele față de căutarea tradițională de transport?",
      de: "Welche Vorteile bieten Börsen gegenüber traditioneller Transportsuche?",
      en: "What advantages do exchanges offer compared to traditional transport search?"
    },
    options: {
      ro: ["Niciun avantaj", "Acces la mii de parteneri, comparare rapidă, transparență prețuri, verificare integrată", "Doar preț", "Doar viteză"],
      de: ["Kein Vorteil", "Zugang zu Tausenden Partnern, schneller Vergleich, Preistransparenz, integrierte Verifizierung", "Nur Preis", "Nur Geschwindigkeit"],
      en: ["No advantage", "Access to thousands of partners, quick comparison, price transparency, integrated verification", "Only price", "Only speed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Avantaje bursă: pool mare de parteneri, comparație rapidă prețuri, rating-uri, documente verificate, acoperire europeană.",
      de: "Börsenvorteile: großer Partnerpool, schneller Preisvergleich, Ratings, verifizierte Dokumente, europaweite Abdeckung.",
      en: "Exchange advantages: large partner pool, quick price comparison, ratings, verified documents, Europe-wide coverage."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum îți construiești reputația pe o bursă nouă?",
      de: "Wie baust du deinen Ruf auf einer neuen Börse auf?",
      en: "How do you build your reputation on a new exchange?"
    },
    options: {
      ro: ["Imposibil ca nou", "Start cu tranzacții mici, onorare perfectă, răspuns rapid, cere rating, crești gradual", "Doar plătești premium", "Doar aștepți"],
      de: ["Unmöglich als Neuer", "Start mit kleinen Transaktionen, perfekte Erfüllung, schnelle Antwort, um Rating bitten, schrittweise wachsen", "Nur Premium zahlen", "Nur warten"],
      en: ["Impossible as new", "Start with small transactions, perfect fulfillment, quick response, ask for rating, grow gradually", "Only pay premium", "Only wait"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Construire reputație: primele curse impecabile, comunică excelent, plătește/livrează la timp, cere rating după fiecare, profil complet.",
      de: "Reputation aufbauen: erste Fahrten tadellos, exzellent kommunizieren, pünktlich zahlen/liefern, nach jeder um Rating bitten, vollständiges Profil.",
      en: "Build reputation: first trips impeccable, communicate excellently, pay/deliver on time, ask for rating after each, complete profile."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Analiză comparativă platforme: Trans.eu vs TimoCom pentru expeditor cu focus Europa Centrală și de Est. Alegere?",
      de: "Plattformvergleich: Trans.eu vs TimoCom für Spediteur mit Fokus Mittel- und Osteuropa. Wahl?",
      en: "Platform comparison: Trans.eu vs TimoCom for forwarder focusing Central and Eastern Europe. Choice?"
    },
    options: {
      ro: ["TimoCom singur", "Trans.eu ca principal (forță în Est), TimoCom secundar (acces Vest), combinație optimă", "Trans.eu singur", "Niciuna"],
      de: ["Nur TimoCom", "Trans.eu als Haupt (Stärke im Osten), TimoCom sekundär (Westzugang), optimale Kombination", "Nur Trans.eu", "Keine"],
      en: ["TimoCom only", "Trans.eu as primary (strength in East), TimoCom secondary (West access), optimal combination", "Trans.eu only", "None"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Strategie: Trans.eu dominant în PL, RO, CZ, HU. TimoCom puternic în DE, AT, NL. Combinația oferă acoperire completă.",
      de: "Strategie: Trans.eu dominant in PL, RO, CZ, HU. TimoCom stark in DE, AT, NL. Kombination bietet vollständige Abdeckung.",
      en: "Strategy: Trans.eu dominant in PL, RO, CZ, HU. TimoCom strong in DE, AT, NL. Combination offers complete coverage."
    }
  }
];
