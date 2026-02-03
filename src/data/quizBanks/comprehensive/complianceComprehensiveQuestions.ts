import { TranslatedQuizQuestion } from '../../quizTranslations';

export const complianceComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este Regulamentul (CE) 561/2006 și ce reglementează?",
      de: "Was ist die Verordnung (EG) 561/2006 und was regelt sie?",
      en: "What is Regulation (EC) 561/2006 and what does it regulate?"
    },
    options: {
      ro: ["Taxe vamale", "Timpul de conducere și odihnă pentru șoferi profesioniști", "Norme de emisii", "Asigurări auto"],
      de: ["Zölle", "Lenk- und Ruhezeiten für Berufskraftfahrer", "Emissionsnormen", "Kfz-Versicherungen"],
      en: ["Customs duties", "Driving and rest times for professional drivers", "Emission standards", "Car insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Regulamentul 561/2006 stabilește regulile europene pentru timpul de conducere și odihnă al șoferilor.",
      de: "Die Verordnung 561/2006 legt die europäischen Regeln für Lenk- und Ruhezeiten der Fahrer fest.",
      en: "Regulation 561/2006 establishes European rules for driver driving and rest times."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este timpul maxim de conducere zilnică conform Regulamentului 561/2006?",
      de: "Was ist die maximale tägliche Lenkzeit gemäß Verordnung 561/2006?",
      en: "What is the maximum daily driving time according to Regulation 561/2006?"
    },
    options: {
      ro: ["8 ore", "9 ore (10 ore de 2x/săptămână)", "12 ore", "15 ore"],
      de: ["8 Stunden", "9 Stunden (10 Stunden 2x/Woche)", "12 Stunden", "15 Stunden"],
      en: ["8 hours", "9 hours (10 hours 2x/week)", "12 hours", "15 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Timpul zilnic de conducere: max 9 ore, extensibil la 10 ore de maximum 2 ori pe săptămână.",
      de: "Tägliche Lenkzeit: max. 9 Stunden, verlängerbar auf 10 Stunden maximal 2x pro Woche.",
      en: "Daily driving time: max 9 hours, extendable to 10 hours maximum 2 times per week."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este pauza obligatorie după 4.5 ore de conducere?",
      de: "Was ist die Pflichtpause nach 4,5 Stunden Lenkzeit?",
      en: "What is the mandatory break after 4.5 hours of driving?"
    },
    options: {
      ro: ["15 minute", "45 minute (sau 15+30 minute)", "1 oră", "30 minute"],
      de: ["15 Minuten", "45 Minuten (oder 15+30 Minuten)", "1 Stunde", "30 Minuten"],
      en: ["15 minutes", "45 minutes (or 15+30 minutes)", "1 hour", "30 minutes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "După 4.5h conducere: pauză 45 min obligatorie, poate fi împărțită în 15 min + 30 min.",
      de: "Nach 4,5h Lenkzeit: 45 Min. Pause Pflicht, kann in 15 Min. + 30 Min. aufgeteilt werden.",
      en: "After 4.5h driving: 45 min break mandatory, can be split into 15 min + 30 min."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Șofer a condus: Lu 9h, Ma 10h, Mi 9h, Jo 10h. Cât poate conduce Vi conform regulilor săptămânale?",
      de: "Fahrer fuhr: Mo 9h, Di 10h, Mi 9h, Do 10h. Wie viel kann er Fr gemäß Wochenregeln fahren?",
      en: "Driver drove: Mon 9h, Tue 10h, Wed 9h, Thu 10h. How much can he drive Fri according to weekly rules?"
    },
    options: {
      ro: ["10 ore", "9 ore", "18 ore", "Nu poate conduce"],
      de: ["10 Stunden", "9 Stunden", "18 Stunden", "Kann nicht fahren"],
      en: ["10 hours", "9 hours", "18 hours", "Cannot drive"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Total până acum: 38h. Max săptămânal: 56h. Rămas: 18h, dar max zilnic 9h (10h deja folosit 2x).",
      de: "Summe bisher: 38h. Max. wöchentlich: 56h. Übrig: 18h, aber max. täglich 9h (10h bereits 2x genutzt).",
      en: "Total so far: 38h. Weekly max: 56h. Remaining: 18h, but daily max 9h (10h already used 2x)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este odihna zilnică regulată obligatorie?",
      de: "Was ist die reguläre Pflicht-Tagesruhezeit?",
      en: "What is the regular mandatory daily rest?"
    },
    options: {
      ro: ["8 ore", "11 ore consecutive", "6 ore", "4 ore"],
      de: ["8 Stunden", "11 aufeinanderfolgende Stunden", "6 Stunden", "4 Stunden"],
      en: ["8 hours", "11 consecutive hours", "6 hours", "4 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Odihna zilnică regulată: minimum 11 ore consecutive într-o perioadă de 24 ore.",
      de: "Reguläre Tagesruhezeit: mindestens 11 aufeinanderfolgende Stunden in 24 Stunden.",
      en: "Regular daily rest: minimum 11 consecutive hours within 24 hours."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este odihna zilnică redusă și de câte ori poate fi folosită?",
      de: "Was ist reduzierte Tagesruhezeit und wie oft kann sie genutzt werden?",
      en: "What is reduced daily rest and how often can it be used?"
    },
    options: {
      ro: ["8 ore, nelimitat", "9 ore, max 3x între două odihne săptămânale", "6 ore, o dată/săptămână", "10 ore, 2x/săptămână"],
      de: ["8 Stunden, unbegrenzt", "9 Stunden, max 3x zwischen zwei Wochenruhezeiten", "6 Stunden, 1x/Woche", "10 Stunden, 2x/Woche"],
      en: ["8 hours, unlimited", "9 hours, max 3x between two weekly rests", "6 hours, once/week", "10 hours, 2x/week"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Odihna redusă: 9 ore (în loc de 11), permisă max 3 ori între două odihne săptămânale.",
      de: "Reduzierte Ruhezeit: 9 Stunden (statt 11), max. 3x zwischen zwei Wochenruhezeiten erlaubt.",
      en: "Reduced rest: 9 hours (instead of 11), allowed max 3 times between two weekly rests."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Șofer internațional UE pleacă Lu 06:00. Când trebuie să înceapă cel târziu odihna săptămânală regulată?",
      de: "EU-Fernfahrer startet Mo 06:00. Wann muss spätestens die reguläre Wochenruhezeit beginnen?",
      en: "EU international driver departs Mon 06:00. When must regular weekly rest begin at the latest?"
    },
    options: {
      ro: ["Duminică 06:00", "Duminică 06:00 (după 6 perioade de 24h)", "Luni 06:00 următoare", "Sâmbătă 00:00"],
      de: ["Sonntag 06:00", "Sonntag 06:00 (nach 6 Perioden von 24h)", "Montag 06:00 nächste Woche", "Samstag 00:00"],
      en: ["Sunday 06:00", "Sunday 06:00 (after 6 periods of 24h)", "Next Monday 06:00", "Saturday 00:00"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Odihna săptămânală trebuie să înceapă în max 6×24h=144h de la ultimul repaus săptămânal. Lu 06:00 + 144h = Du 06:00.",
      de: "Wochenruhe muss in max. 6×24h=144h nach letzter Wochenruhe beginnen. Mo 06:00 + 144h = So 06:00.",
      en: "Weekly rest must begin within max 6×24h=144h from last weekly rest. Mon 06:00 + 144h = Sun 06:00."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este durata odihnei săptămânale regulate?",
      de: "Wie lang ist die reguläre Wochenruhezeit?",
      en: "What is the duration of regular weekly rest?"
    },
    options: {
      ro: ["24 ore", "45 ore consecutive", "36 ore", "48 ore"],
      de: ["24 Stunden", "45 aufeinanderfolgende Stunden", "36 Stunden", "48 Stunden"],
      en: ["24 hours", "45 consecutive hours", "36 hours", "48 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Odihna săptămânală regulată: minimum 45 ore consecutive.",
      de: "Reguläre Wochenruhezeit: mindestens 45 aufeinanderfolgende Stunden.",
      en: "Regular weekly rest: minimum 45 consecutive hours."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este regula celor două săptămâni consecutive pentru odihna săptămânală?",
      de: "Was ist die Regel der zwei aufeinanderfolgenden Wochen für Wochenruhezeiten?",
      en: "What is the two consecutive weeks rule for weekly rest?"
    },
    options: {
      ro: ["Orice combinație permisă", "2 regulatee sau 1 regulatee + 1 redusă (cu compensare)", "Numai regulate", "Numai reduse"],
      de: ["Jede Kombination erlaubt", "2 reguläre oder 1 reguläre + 1 reduzierte (mit Kompensation)", "Nur reguläre", "Nur reduzierte"],
      en: ["Any combination allowed", "2 regular or 1 regular + 1 reduced (with compensation)", "Only regular", "Only reduced"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În 2 săptămâni consecutive: cel puțin o odihnă regulată (45h); cealaltă poate fi redusă (24h) cu compensare.",
      de: "In 2 aufeinanderfolgenden Wochen: mindestens eine reguläre (45h); die andere kann reduziert (24h) mit Kompensation sein.",
      en: "In 2 consecutive weeks: at least one regular (45h); the other can be reduced (24h) with compensation."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Șofer a luat odihnă redusă 24h săptămâna 1. Cum și când trebuie compensată?",
      de: "Fahrer nahm reduzierte Ruhe 24h in Woche 1. Wie und wann muss kompensiert werden?",
      en: "Driver took reduced rest 24h in week 1. How and when must it be compensated?"
    },
    options: {
      ro: ["Nu necesită compensare", "21h în bloc, atașat la o odihnă de min 9h, înainte de sfârșitul săptămânii 3", "Bani în loc de timp", "Peste 6 luni"],
      de: ["Keine Kompensation nötig", "21h am Stück, angehängt an Ruhe von min. 9h, vor Ende Woche 3", "Geld statt Zeit", "Nach 6 Monaten"],
      en: ["No compensation needed", "21h in block, attached to rest of min 9h, before end of week 3", "Money instead of time", "After 6 months"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diferența (45h-24h=21h) trebuie compensată în bloc, legat de o odihnă ≥9h, înainte de sfârșitul săptămânii 3.",
      de: "Die Differenz (45h-24h=21h) muss am Stück, an eine Ruhe ≥9h angehängt, vor Ende Woche 3 kompensiert werden.",
      en: "Difference (45h-24h=21h) must be compensated in block, attached to rest ≥9h, before end of week 3."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tip de tahograf este obligatoriu pentru vehicule noi de transport marfă >3.5t?",
      de: "Welcher Fahrtenschreibertyp ist für neue Güterfahrzeuge >3,5t Pflicht?",
      en: "What type of tachograph is mandatory for new freight vehicles >3.5t?"
    },
    options: {
      ro: ["Analogic", "Digital inteligent (Smart Tachograph)", "Nici unul", "Opțional"],
      de: ["Analog", "Digitaler intelligenter (Smart Tachograph)", "Keiner", "Optional"],
      en: ["Analog", "Digital smart (Smart Tachograph)", "None", "Optional"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Din 2019, vehiculele noi >3.5t trebuie echipate cu tahograf digital inteligent (smart) de generația 2.",
      de: "Seit 2019 müssen neue Fahrzeuge >3,5t mit digitalem intelligentem Fahrtenschreiber (Smart) der 2. Generation ausgestattet sein.",
      en: "Since 2019, new vehicles >3.5t must be equipped with 2nd generation smart digital tachograph."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt codurile manuale pe tahograf pentru activități?",
      de: "Was sind die manuellen Codes am Fahrtenschreiber für Aktivitäten?",
      en: "What are the manual codes on tachograph for activities?"
    },
    options: {
      ro: ["1-5", "Conducere (auto), Altă muncă (ciocan), Disponibilitate (pătrat), Pauză (pat)", "A-D", "Doar conducere și pauză"],
      de: ["1-5", "Lenkzeit (Auto), Andere Arbeit (Hammer), Bereitschaft (Quadrat), Pause (Bett)", "A-D", "Nur Lenken und Pause"],
      en: ["1-5", "Driving (car), Other work (hammer), Availability (square), Break (bed)", "A-D", "Only driving and break"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Simboluri tahograf: conducere (volan), altă muncă (ciocan), disponibilitate (pătrat), pauză/odihnă (pat).",
      de: "Fahrtenschreibersymbole: Lenken (Lenkrad), andere Arbeit (Hammer), Bereitschaft (Quadrat), Pause/Ruhe (Bett).",
      en: "Tachograph symbols: driving (steering wheel), other work (hammer), availability (square), break/rest (bed)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Șofer în echipaj (2 șoferi). Regulile pentru pauze și odihne diferă cum?",
      de: "Fahrer im Team (2 Fahrer). Wie unterscheiden sich Pausen- und Ruheregeln?",
      en: "Driver in crew (2 drivers). How do break and rest rules differ?"
    },
    options: {
      ro: ["Identice cu șofer singur", "Pauză 45min după 4.5h, dar odihna 9h poate fi luată în vehicul în mișcare", "Nu există reguli", "Conducere nelimitată"],
      de: ["Identisch mit Einzelfahrer", "45min Pause nach 4,5h, aber 9h Ruhe kann im fahrenden Fahrzeug genommen werden", "Keine Regeln", "Unbegrenzte Lenkzeit"],
      en: ["Identical to single driver", "45min break after 4.5h, but 9h rest can be taken in moving vehicle", "No rules", "Unlimited driving"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În echipaj: regula 4.5h/pauză rămâne, dar odihna zilnică 9h poate fi luată în vehicul în mișcare (cușetă).",
      de: "Im Team: 4,5h/Pause-Regel bleibt, aber 9h Tagesruhe kann im fahrenden Fahrzeug (Liege) genommen werden.",
      en: "In crew: 4.5h/break rule remains, but 9h daily rest can be taken in moving vehicle (bunk)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce document trebuie să aibă șoferul pentru a justifica absențele din tahograf?",
      de: "Welches Dokument muss der Fahrer für Fahrtenschreiber-Abwesenheiten haben?",
      en: "What document must the driver have to justify tachograph absences?"
    },
    options: {
      ro: ["Nimic", "Atestat de activități (formularul de atestare)", "Pașaport", "Contract de muncă"],
      de: ["Nichts", "Tätigkeitsbescheinigung (Attestformular)", "Reisepass", "Arbeitsvertrag"],
      en: ["Nothing", "Activities attestation (attestation form)", "Passport", "Employment contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Atestatul de activități justifică perioadele când șoferul nu a fost la volan (concediu, boală, altă muncă).",
      de: "Die Tätigkeitsbescheinigung begründet Zeiten, in denen der Fahrer nicht gefahren ist (Urlaub, Krankheit, andere Arbeit).",
      en: "Activities attestation justifies periods when driver was not driving (leave, illness, other work)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cât timp trebuie păstrate datele tahografului la firma de transport?",
      de: "Wie lange müssen Fahrtenschreiberdaten beim Transportunternehmen aufbewahrt werden?",
      en: "How long must tachograph data be kept at the transport company?"
    },
    options: {
      ro: ["6 luni", "Minimum 12 luni (1 an)", "30 zile", "5 ani"],
      de: ["6 Monate", "Mindestens 12 Monate (1 Jahr)", "30 Tage", "5 Jahre"],
      en: ["6 months", "Minimum 12 months (1 year)", "30 days", "5 years"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Datele tahografului trebuie descărcate și păstrate minimum 12 luni conform legislației UE.",
      de: "Fahrtenschreiberdaten müssen mindestens 12 Monate gemäß EU-Gesetzgebung heruntergeladen und aufbewahrt werden.",
      en: "Tachograph data must be downloaded and kept minimum 12 months per EU legislation."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "La control se descoperă manipulare tahograf (magnet). Consecințe juridice pentru șofer și operator?",
      de: "Bei Kontrolle wird Fahrtenschreibermanipulation (Magnet) entdeckt. Rechtliche Folgen für Fahrer und Betreiber?",
      en: "Control discovers tachograph manipulation (magnet). Legal consequences for driver and operator?"
    },
    options: {
      ro: ["Doar avertisment", "Amendă majoră + confiscare permis + posibil dosar penal + pierdere reputație operator", "Amendă mică", "Nimic, prima încălcare"],
      de: ["Nur Verwarnung", "Hohe Geldstrafe + Führerscheinentzug + mögliches Strafverfahren + Reputationsverlust Betreiber", "Kleine Geldstrafe", "Nichts, erster Verstoß"],
      en: ["Only warning", "Major fine + license confiscation + possible criminal case + operator reputation loss", "Small fine", "Nothing, first offense"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Manipularea tahografului este infracțiune gravă: amenzi mari, suspendare permis, dosar penal, pierdere licență transport.",
      de: "Fahrtenschreibermanipulation ist schwere Straftat: hohe Geldstrafen, Führerscheinentzug, Strafverfahren, Lizenzverlust.",
      en: "Tachograph manipulation is serious offense: major fines, license suspension, criminal case, transport license loss."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este codul 95 (CPC) și cine trebuie să îl aibă?",
      de: "Was ist Code 95 (BKF) und wer muss ihn haben?",
      en: "What is code 95 (CPC) and who must have it?"
    },
    options: {
      ro: ["Cod opțional", "Calificare profesională obligatorie pentru șoferi profesioniști", "Cod de discount", "Doar pentru autobuze"],
      de: ["Optionaler Code", "Obligatorische Berufskraftfahrer-Qualifikation", "Rabattcode", "Nur für Busse"],
      en: ["Optional code", "Mandatory professional driver qualification", "Discount code", "Only for buses"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Codul 95 atestă calificarea profesională continuă a șoferilor de camioane și autobuze (35h training/5 ani).",
      de: "Code 95 bescheinigt die kontinuierliche Berufsqualifikation von LKW- und Busfahrern (35h Training/5 Jahre).",
      en: "Code 95 certifies continuous professional qualification of truck and bus drivers (35h training/5 years)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt cerințele pentru licența comunitară de transport?",
      de: "Was sind die Anforderungen für die Gemeinschaftslizenz für Transport?",
      en: "What are the requirements for community transport license?"
    },
    options: {
      ro: ["Doar vehicul", "Stabilire efectivă + bună reputație + capacitate financiară + competență profesională", "Doar permis", "Doar bani"],
      de: ["Nur Fahrzeug", "Effektive Niederlassung + guter Ruf + finanzielle Leistungsfähigkeit + fachliche Eignung", "Nur Führerschein", "Nur Geld"],
      en: ["Only vehicle", "Effective establishment + good repute + financial standing + professional competence", "Only license", "Only money"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Licența comunitară necesită: sediu real, bună reputație, capacitate financiară (9.000€ prim vehicul + 5.000€/următoarele), competență.",
      de: "Gemeinschaftslizenz erfordert: echte Niederlassung, guten Ruf, finanzielle Leistungsfähigkeit (9.000€ erstes + 5.000€/weitere), Fachkompetenz.",
      en: "Community license requires: real establishment, good repute, financial standing (€9,000 first + €5,000/additional), competence."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Operator transport pierde managerul de transport (demisie). Cât timp are pentru înlocuire și ce face între timp?",
      de: "Transportunternehmer verliert Verkehrsleiter (Kündigung). Wie viel Zeit für Ersatz und was in der Zwischenzeit?",
      en: "Transport operator loses transport manager (resignation). How much time for replacement and what meanwhile?"
    },
    options: {
      ro: ["Timp nelimitat", "6 luni pentru înlocuire; între timp poate funcționa dar fără transport internațional nou", "Închide imediat", "1 an fără consecințe"],
      de: ["Unbegrenzte Zeit", "6 Monate für Ersatz; in der Zwischenzeit kann arbeiten aber kein neuer internationaler Transport", "Sofort schließen", "1 Jahr ohne Folgen"],
      en: ["Unlimited time", "6 months for replacement; meanwhile can operate but no new international transport", "Close immediately", "1 year without consequences"]
    },
    correctIndex: 1,
    explanation: {
      ro: "La pierderea managerului: 6 luni pentru înlocuire. Obligatoriu notificarea ARR și limitarea activităților noi.",
      de: "Bei Verlust des Verkehrsleiters: 6 Monate für Ersatz. ARR-Meldung und Einschränkung neuer Aktivitäten obligatorisch.",
      en: "Upon losing transport manager: 6 months for replacement. Mandatory ARR notification and limitation of new activities."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce reprezintă copiile conforme și câte sunt necesare?",
      de: "Was sind beglaubigte Kopien und wie viele werden benötigt?",
      en: "What are certified copies and how many are needed?"
    },
    options: {
      ro: ["Copii neoficiale", "Copii autentificate ale licenței, câte una pentru fiecare vehicul", "Doar pentru internațional", "Opționale"],
      de: ["Inoffizielle Kopien", "Beglaubigte Lizenzkopien, eine pro Fahrzeug", "Nur für international", "Optional"],
      en: ["Unofficial copies", "Authenticated license copies, one for each vehicle", "Only for international", "Optional"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Copiile conforme sunt copii autentificate ale licenței comunitare, una obligatorie la bordul fiecărui vehicul.",
      de: "Beglaubigte Kopien sind authentifizierte Gemeinschaftslizenzkopien, eine je Fahrzeug obligatorisch an Bord.",
      en: "Certified copies are authenticated community license copies, one mandatory on board each vehicle."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt regulile de cabotaj în UE pentru transportatori din state membre?",
      de: "Was sind die Kabotageregeln in der EU für Transportunternehmer aus Mitgliedstaaten?",
      en: "What are the cabotage rules in EU for carriers from member states?"
    },
    options: {
      ro: ["Nelimitat", "Max 3 operațiuni în 7 zile după o cursă internațională", "Interzis complet", "5 operațiuni în 3 zile"],
      de: ["Unbegrenzt", "Max. 3 Beförderungen in 7 Tagen nach internationaler Fahrt", "Komplett verboten", "5 Beförderungen in 3 Tagen"],
      en: ["Unlimited", "Max 3 operations in 7 days after an international journey", "Completely forbidden", "5 operations in 3 days"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cabotaj UE: max 3 curse în 7 zile după descărcarea unei curse internaționale, în țara gazdă.",
      de: "EU-Kabotage: max. 3 Fahrten in 7 Tagen nach Entladung einer internationalen Fahrt im Aufnahmeland.",
      en: "EU cabotage: max 3 trips in 7 days after unloading an international journey, in host country."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Camion RO efectuează transport DE-FR, descarcă în Paris Luni 08:00. Poate face cabotaj în FR? Când și câte curse?",
      de: "RO-LKW führt DE-FR Transport durch, entlädt in Paris Montag 08:00. Kann in FR Kabotage machen? Wann und wie viele Fahrten?",
      en: "RO truck performs DE-FR transport, unloads in Paris Monday 08:00. Can do cabotage in FR? When and how many trips?"
    },
    options: {
      ro: ["Nu, niciodată", "Da, max 3 curse în FR, până duminică 08:00 (7 zile)", "Da, nelimitat", "Da, doar 1 cursă"],
      de: ["Nein, niemals", "Ja, max. 3 Fahrten in FR, bis Sonntag 08:00 (7 Tage)", "Ja, unbegrenzt", "Ja, nur 1 Fahrt"],
      en: ["No, never", "Yes, max 3 trips in FR, until Sunday 08:00 (7 days)", "Yes, unlimited", "Yes, only 1 trip"]
    },
    correctIndex: 1,
    explanation: {
      ro: "După descărcare internațională Lu 08:00: 7 zile = până Du 08:00, max 3 curse cabotaj în Franța.",
      de: "Nach internationaler Entladung Mo 08:00: 7 Tage = bis So 08:00, max. 3 Kabotagefahrten in Frankreich.",
      en: "After international unload Mon 08:00: 7 days = until Sun 08:00, max 3 cabotage trips in France."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este perioada de cooling-off pentru cabotaj?",
      de: "Was ist die Abkühlperiode für Kabotage?",
      en: "What is the cooling-off period for cabotage?"
    },
    options: {
      ro: ["Nu există", "4 zile fără cabotaj în aceeași țară după terminarea celor 7 zile", "1 zi", "10 zile"],
      de: ["Gibt es nicht", "4 Tage ohne Kabotage im selben Land nach Ende der 7 Tage", "1 Tag", "10 Tage"],
      en: ["Doesn't exist", "4 days without cabotage in same country after the 7 days end", "1 day", "10 days"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cooling-off: după 7 zile de cabotaj posibil, vehiculul nu poate face cabotaj în aceeași țară 4 zile.",
      de: "Abkühlung: Nach 7 Tagen möglicher Kabotage darf das Fahrzeug 4 Tage keine Kabotage im selben Land machen.",
      en: "Cooling-off: after 7 days of possible cabotage, vehicle cannot do cabotage in same country for 4 days."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce sancțiuni se aplică pentru depășirea timpului de conducere cu 20%?",
      de: "Welche Sanktionen gelten bei Überschreitung der Lenkzeit um 20%?",
      en: "What sanctions apply for exceeding driving time by 20%?"
    },
    options: {
      ro: ["Doar avertisment", "Amendă (variază pe țară: 500-3000€), posibil imobilizare pentru odihnă obligatorie", "Nimic", "Confiscare vehicul"],
      de: ["Nur Verwarnung", "Bußgeld (variiert je Land: 500-3000€), evtl. Stilllegung für Pflichtruhe", "Nichts", "Fahrzeugbeschlagnahme"],
      en: ["Only warning", "Fine (varies by country: 500-3000€), possible immobilization for mandatory rest", "Nothing", "Vehicle confiscation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Depășire 20% = încălcare gravă: amenzi semnificative + posibil oprire vehicul până se efectuează odihna.",
      de: "20% Überschreitung = schwerer Verstoß: erhebliche Bußgelder + evtl. Fahrzeugstilllegung bis Ruhe genommen.",
      en: "20% exceedance = serious violation: significant fines + possible vehicle stop until rest taken."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Operator RO primește notificare ERRU pentru acumulare încălcări (3 grave în 12 luni). Ce procedură urmează?",
      de: "RO-Unternehmer erhält ERRU-Benachrichtigung über Verstoßanhäufung (3 schwere in 12 Monaten). Welches Verfahren folgt?",
      en: "RO operator receives ERRU notification for violation accumulation (3 serious in 12 months). What procedure follows?"
    },
    options: {
      ro: ["Nimic, doar informare", "Procedură ARR: audiere, plan corecție, posibil suspendare/retragere licență", "Avertisment verbal", "Doar amendă suplimentară"],
      de: ["Nichts, nur Information", "ARR-Verfahren: Anhörung, Korrekturplan, mögliche Lizenzaussetzung/entzug", "Mündliche Verwarnung", "Nur zusätzliches Bußgeld"],
      en: ["Nothing, just information", "ARR procedure: hearing, correction plan, possible license suspension/withdrawal", "Verbal warning", "Only additional fine"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Acumulare încălcări ERRU declanșează procedură administrativă: audiere, cerință plan corecție, risc pierdere licență.",
      de: "ERRU-Verstoßanhäufung löst Verwaltungsverfahren aus: Anhörung, Korrekturplan-Anforderung, Risiko Lizenzverlust.",
      en: "ERRU violation accumulation triggers administrative procedure: hearing, correction plan requirement, license loss risk."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce document justifică plata salariului minim în țara de detașare?",
      de: "Welches Dokument rechtfertigt die Mindestlohnzahlung im Entsendeland?",
      en: "What document justifies minimum wage payment in posting country?"
    },
    options: {
      ro: ["Nimic", "Fișele de salariu cu detalii ore și plată conform tarifului local", "Doar contractul", "Doar CMR"],
      de: ["Nichts", "Gehaltsabrechnungen mit Stunden und Zahlung gemäß lokalem Tarif", "Nur Vertrag", "Nur CMR"],
      en: ["Nothing", "Payslips with hours and payment details per local rate", "Only contract", "Only CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Fișele de salariu trebuie să demonstreze că șoferul primește cel puțin salariul minim din țara unde prestează.",
      de: "Gehaltsabrechnungen müssen nachweisen, dass der Fahrer mindestens den Mindestlohn des Landes erhält, in dem er arbeitet.",
      en: "Payslips must demonstrate that driver receives at least minimum wage of country where working."
    }
  }
];
