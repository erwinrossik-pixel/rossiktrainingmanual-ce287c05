import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const drivingTimeQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Care este timpul maxim de conducere zilnic conform Regulamentului CE 561/2006?",
      de: "Was ist die maximale tägliche Lenkzeit gemäß Verordnung EG 561/2006?",
      en: "What is the maximum daily driving time according to Regulation EC 561/2006?"
    },
    options: {
      ro: ["12 ore", "9 ore (10 ore de maximum 2 ori pe săptămână)", "8 ore", "11 ore"],
      de: ["12 Stunden", "9 Stunden (10 Stunden maximal 2x pro Woche)", "8 Stunden", "11 Stunden"],
      en: ["12 hours", "9 hours (10 hours maximum twice a week)", "8 hours", "11 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Conducerea zilnică este limitată la 9 ore, cu extensie la 10 ore de maxim 2 ori săptămânal.",
      de: "Tägliche Lenkzeit ist auf 9 Stunden begrenzt, mit Verlängerung auf 10 Stunden maximal 2x wöchentlich.",
      en: "Daily driving is limited to 9 hours, with extension to 10 hours maximum twice weekly."
    }
  },
  {
    question: {
      ro: "Care este timpul maxim de conducere săptămânal?",
      de: "Was ist die maximale wöchentliche Lenkzeit?",
      en: "What is the maximum weekly driving time?"
    },
    options: {
      ro: ["60 ore", "56 ore", "50 ore", "48 ore"],
      de: ["60 Stunden", "56 Stunden", "50 Stunden", "48 Stunden"],
      en: ["60 hours", "56 hours", "50 hours", "48 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Limita săptămânală este de 56 ore, dar bisăptămânal nu poate depăși 90 ore.",
      de: "Die wöchentliche Grenze beträgt 56 Stunden, aber zweiwöchentlich darf 90 Stunden nicht überschreiten.",
      en: "Weekly limit is 56 hours, but bi-weekly cannot exceed 90 hours."
    }
  },
  {
    question: {
      ro: "Care este timpul maxim de conducere în două săptămâni consecutive?",
      de: "Was ist die maximale Lenkzeit in zwei aufeinanderfolgenden Wochen?",
      en: "What is the maximum driving time in two consecutive weeks?"
    },
    options: {
      ro: ["112 ore", "90 ore", "100 ore", "80 ore"],
      de: ["112 Stunden", "90 Stunden", "100 Stunden", "80 Stunden"],
      en: ["112 hours", "90 hours", "100 hours", "80 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Limita bisăptămânală de 90 ore previne suprasolicitarea pe termen mediu.",
      de: "Die zweiwöchentliche Grenze von 90 Stunden verhindert mittelfristige Überlastung.",
      en: "Bi-weekly limit of 90 hours prevents medium-term overload."
    }
  },
  {
    question: {
      ro: "După cât timp de conducere continuă trebuie făcută o pauză?",
      de: "Nach wie viel kontinuierlicher Fahrzeit muss eine Pause gemacht werden?",
      en: "After how much continuous driving time must a break be taken?"
    },
    options: {
      ro: ["5 ore", "4,5 ore", "6 ore", "3 ore"],
      de: ["5 Stunden", "4,5 Stunden", "6 Stunden", "3 Stunden"],
      en: ["5 hours", "4.5 hours", "6 hours", "3 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "După 4,5 ore de conducere, o pauză de minimum 45 minute este obligatorie.",
      de: "Nach 4,5 Stunden Fahrt ist eine Pause von mindestens 45 Minuten obligatorisch.",
      en: "After 4.5 hours of driving, a break of minimum 45 minutes is mandatory."
    }
  },
  {
    question: {
      ro: "Cum poate fi împărțită pauza de 45 minute?",
      de: "Wie kann die 45-Minuten-Pause aufgeteilt werden?",
      en: "How can the 45-minute break be split?"
    },
    options: {
      ro: ["3 x 15 minute", "15 minute + 30 minute (în această ordine)", "Orice combinație", "Nu poate fi împărțită"],
      de: ["3 x 15 Minuten", "15 Minuten + 30 Minuten (in dieser Reihenfolge)", "Jede Kombination", "Kann nicht aufgeteilt werden"],
      en: ["3 x 15 minutes", "15 minutes + 30 minutes (in this order)", "Any combination", "Cannot be split"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pauza poate fi împărțită în 15 min + 30 min, prima parte fiind de minimum 15 minute.",
      de: "Die Pause kann in 15 Min + 30 Min aufgeteilt werden, der erste Teil mindestens 15 Minuten.",
      en: "Break can be split into 15 min + 30 min, first part being minimum 15 minutes."
    }
  },
  {
    question: {
      ro: "Care este durata minimă a repausului zilnic normal?",
      de: "Wie lang ist die normale tägliche Mindestruhezeit?",
      en: "What is the minimum duration of normal daily rest?"
    },
    options: {
      ro: ["8 ore", "11 ore consecutive", "9 ore", "10 ore"],
      de: ["8 Stunden", "11 aufeinanderfolgende Stunden", "9 Stunden", "10 Stunden"],
      en: ["8 hours", "11 consecutive hours", "9 hours", "10 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Repausul zilnic normal este de 11 ore consecutive neîntrerupte.",
      de: "Die normale tägliche Ruhezeit beträgt 11 aufeinanderfolgende ununterbrochene Stunden.",
      en: "Normal daily rest is 11 consecutive uninterrupted hours."
    }
  },
  {
    question: {
      ro: "Ce este repausul zilnic redus?",
      de: "Was ist die reduzierte tägliche Ruhezeit?",
      en: "What is reduced daily rest?"
    },
    options: {
      ro: ["6 ore", "Minimum 9 ore (maximum 3 ori între două repausuri săptămânale)", "8 ore", "7 ore"],
      de: ["6 Stunden", "Mindestens 9 Stunden (maximal 3x zwischen zwei Wochenruhezeiten)", "8 Stunden", "7 Stunden"],
      en: ["6 hours", "Minimum 9 hours (maximum 3 times between two weekly rests)", "8 hours", "7 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Repausul redus de minim 9 ore poate fi folosit de cel mult 3 ori între repausuri săptămânale.",
      de: "Reduzierte Ruhezeit von mindestens 9 Stunden kann maximal 3x zwischen Wochenruhezeiten genutzt werden.",
      en: "Reduced rest of minimum 9 hours can be used maximum 3 times between weekly rests."
    }
  },
  {
    question: {
      ro: "Cum poate fi împărțit repausul zilnic normal?",
      de: "Wie kann die normale tägliche Ruhezeit aufgeteilt werden?",
      en: "How can normal daily rest be split?"
    },
    options: {
      ro: ["Orice combinație", "3 ore + 9 ore (în această ordine)", "5 ore + 6 ore", "Nu poate fi împărțit"],
      de: ["Jede Kombination", "3 Stunden + 9 Stunden (in dieser Reihenfolge)", "5 Stunden + 6 Stunden", "Kann nicht aufgeteilt werden"],
      en: ["Any combination", "3 hours + 9 hours (in this order)", "5 hours + 6 hours", "Cannot be split"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Repausul poate fi împărțit în 3h + 9h, rezultând un total de 12 ore.",
      de: "Die Ruhezeit kann in 3h + 9h aufgeteilt werden, insgesamt 12 Stunden.",
      en: "Rest can be split into 3h + 9h, resulting in a total of 12 hours."
    }
  },
  {
    question: {
      ro: "Care este durata repausului săptămânal normal?",
      de: "Wie lang ist die normale wöchentliche Ruhezeit?",
      en: "What is the duration of normal weekly rest?"
    },
    options: {
      ro: ["36 ore", "45 ore consecutive", "48 ore", "24 ore"],
      de: ["36 Stunden", "45 aufeinanderfolgende Stunden", "48 Stunden", "24 Stunden"],
      en: ["36 hours", "45 consecutive hours", "48 hours", "24 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Repausul săptămânal normal este de minimum 45 ore consecutive.",
      de: "Die normale wöchentliche Ruhezeit beträgt mindestens 45 aufeinanderfolgende Stunden.",
      en: "Normal weekly rest is minimum 45 consecutive hours."
    }
  },
  {
    question: {
      ro: "Ce este repausul săptămânal redus?",
      de: "Was ist die reduzierte wöchentliche Ruhezeit?",
      en: "What is reduced weekly rest?"
    },
    options: {
      ro: ["20 ore", "Minimum 24 ore (o dată la 2 săptămâni, cu compensare)", "30 ore", "36 ore"],
      de: ["20 Stunden", "Mindestens 24 Stunden (einmal alle 2 Wochen, mit Ausgleich)", "30 Stunden", "36 Stunden"],
      en: ["20 hours", "Minimum 24 hours (once every 2 weeks, with compensation)", "30 hours", "36 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Repausul redus de 24h trebuie compensat cu perioadă echivalentă în următoarele 3 săptămâni.",
      de: "Die reduzierte 24h-Ruhezeit muss mit gleichwertiger Periode in den nächsten 3 Wochen ausgeglichen werden.",
      en: "Reduced 24h rest must be compensated with equivalent period within next 3 weeks."
    }
  },
  {
    question: {
      ro: "Ce este tahograful digital și ce înregistrează?",
      de: "Was ist der digitale Fahrtenschreiber und was zeichnet er auf?",
      en: "What is the digital tachograph and what does it record?"
    },
    options: {
      ro: ["Doar viteza", "Timp conducere, pauze, repausuri, viteză, distanță", "Doar distanța", "Doar combustibilul"],
      de: ["Nur Geschwindigkeit", "Lenkzeit, Pausen, Ruhezeiten, Geschwindigkeit, Entfernung", "Nur Entfernung", "Nur Kraftstoff"],
      en: ["Only speed", "Driving time, breaks, rest, speed, distance", "Only distance", "Only fuel"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tahograful înregistrează toate activitățile șoferului și datele vehiculului.",
      de: "Der Fahrtenschreiber zeichnet alle Fahreraktivitäten und Fahrzeugdaten auf.",
      en: "Tachograph records all driver activities and vehicle data."
    }
  },
  {
    question: {
      ro: "Cât timp trebuie păstrate datele tahografului?",
      de: "Wie lange müssen Fahrtenschreiberdaten aufbewahrt werden?",
      en: "How long must tachograph data be kept?"
    },
    options: {
      ro: ["6 luni", "Minimum 1 an", "3 luni", "5 ani"],
      de: ["6 Monate", "Mindestens 1 Jahr", "3 Monate", "5 Jahre"],
      en: ["6 months", "Minimum 1 year", "3 months", "5 years"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Datele trebuie descărcate și arhivate pentru minimum 1 an pentru controale.",
      de: "Daten müssen für mindestens 1 Jahr für Kontrollen heruntergeladen und archiviert werden.",
      en: "Data must be downloaded and archived for minimum 1 year for inspections."
    }
  },
  {
    question: {
      ro: "La ce interval trebuie descărcate datele de pe cartela șoferului?",
      de: "In welchen Abständen müssen Daten von der Fahrerkarte heruntergeladen werden?",
      en: "At what intervals must data be downloaded from the driver card?"
    },
    options: {
      ro: ["La fiecare lună", "Cel puțin la 28 de zile", "La fiecare 3 luni", "Anual"],
      de: ["Jeden Monat", "Mindestens alle 28 Tage", "Alle 3 Monate", "Jährlich"],
      en: ["Every month", "At least every 28 days", "Every 3 months", "Annually"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Descărcarea la 28 zile previne pierderea datelor din memoria cartelei.",
      de: "Herunterladen alle 28 Tage verhindert Datenverlust aus dem Kartenspeicher.",
      en: "Downloading every 28 days prevents data loss from card memory."
    }
  },
  {
    question: {
      ro: "La ce interval se descarcă datele din tahograful vehiculului?",
      de: "In welchen Abständen werden Daten aus dem Fahrzeug-Fahrtenschreiber heruntergeladen?",
      en: "At what intervals is data downloaded from the vehicle tachograph?"
    },
    options: {
      ro: ["La fiecare săptămână", "Cel puțin la 90 de zile", "La fiecare 6 luni", "Anual"],
      de: ["Jede Woche", "Mindestens alle 90 Tage", "Alle 6 Monate", "Jährlich"],
      en: ["Every week", "At least every 90 days", "Every 6 months", "Annually"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Datele vehiculului trebuie descărcate la maximum 90 zile.",
      de: "Fahrzeugdaten müssen maximal alle 90 Tage heruntergeladen werden.",
      en: "Vehicle data must be downloaded maximum every 90 days."
    }
  },
  {
    question: {
      ro: "Ce reprezintă simbolul '🛏️' pe tahograf?",
      de: "Was bedeutet das Symbol '🛏️' am Fahrtenschreiber?",
      en: "What does the '🛏️' symbol on the tachograph represent?"
    },
    options: {
      ro: ["Pauză", "Repaus (în afara vehiculului sau în cușetă)", "Conducere", "Altă muncă"],
      de: ["Pause", "Ruhezeit (außerhalb des Fahrzeugs oder in der Schlafkabine)", "Fahrt", "Andere Arbeit"],
      en: ["Break", "Rest (outside vehicle or in sleeper cab)", "Driving", "Other work"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Simbolul de pat reprezintă perioada de repaus a șoferului.",
      de: "Das Bettsymbol repräsentiert die Ruhezeit des Fahrers.",
      en: "The bed symbol represents the driver's rest period."
    }
  },
  {
    question: {
      ro: "Ce sancțiuni există pentru încălcarea normelor privind timpii de conducere?",
      de: "Welche Strafen gibt es für Verstöße gegen Lenkzeitvorschriften?",
      en: "What penalties exist for violating driving time regulations?"
    },
    options: {
      ro: ["Doar avertisment", "Amenzi, puncte penalizare, imobilizare vehicul, suspendare licență", "Nicio sancțiune", "Doar notificare"],
      de: ["Nur Warnung", "Bußgelder, Strafpunkte, Fahrzeugstilllegung, Lizenzentzug", "Keine Strafe", "Nur Benachrichtigung"],
      en: ["Only warning", "Fines, penalty points, vehicle immobilization, license suspension", "No penalty", "Only notification"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Încălcările pot duce la sancțiuni severe, inclusiv oprirea vehiculului.",
      de: "Verstöße können zu schweren Strafen führen, einschließlich Fahrzeugstilllegung.",
      en: "Violations can lead to severe penalties, including vehicle immobilization."
    }
  },
  {
    question: {
      ro: "Ce este regula ferry/tren pentru repausul zilnic?",
      de: "Was ist die Fähre/Zug-Regel für die tägliche Ruhezeit?",
      en: "What is the ferry/train rule for daily rest?"
    },
    options: {
      ro: ["Nu există regulă specială", "Repausul poate fi întrerupt de 2 ori max 1 oră pentru îmbarcare/debarcare", "Repausul se anulează", "Timp dublu necesar"],
      de: ["Keine besondere Regel", "Ruhezeit kann 2x max 1 Stunde für Ein-/Ausschiffung unterbrochen werden", "Ruhezeit wird annulliert", "Doppelte Zeit erforderlich"],
      en: ["No special rule", "Rest can be interrupted twice max 1 hour for boarding/disembarking", "Rest is cancelled", "Double time required"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pe ferry/tren, repausul poate fi întrerupt pentru maxim 1 oră, de maxim 2 ori.",
      de: "Auf Fähre/Zug kann die Ruhezeit für maximal 1 Stunde, maximal 2x unterbrochen werden.",
      en: "On ferry/train, rest can be interrupted for max 1 hour, max 2 times."
    }
  },
  {
    question: {
      ro: "Ce trebuie să facă șoferul când pleacă într-o cursă nouă?",
      de: "Was muss der Fahrer tun, wenn er eine neue Fahrt beginnt?",
      en: "What must the driver do when starting a new trip?"
    },
    options: {
      ro: ["Nimic special", "Să introducă manual țara de start și activitățile anterioare", "Să oprească tahograful", "Să schimbe cartela"],
      de: ["Nichts Besonderes", "Land des Starts und vorherige Aktivitäten manuell eingeben", "Fahrtenschreiber stoppen", "Karte wechseln"],
      en: ["Nothing special", "Manually enter start country and previous activities", "Stop tachograph", "Change card"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Introducerea manuală a țării și activităților asigură continuitatea înregistrărilor.",
      de: "Manuelle Eingabe von Land und Aktivitäten gewährleistet Kontinuität der Aufzeichnungen.",
      en: "Manual entry of country and activities ensures continuity of records."
    }
  },
  {
    question: {
      ro: "Ce este o atestare de activități?",
      de: "Was ist eine Tätigkeitsbescheinigung?",
      en: "What is an attestation of activities?"
    },
    options: {
      ro: ["Certificat medical", "Formular care justifică absența înregistrărilor pe tahograf", "Factură de transport", "Contract de muncă"],
      de: ["Ärztliches Attest", "Formular zur Begründung fehlender Fahrtenschreiberaufzeichnungen", "Transportrechnung", "Arbeitsvertrag"],
      en: ["Medical certificate", "Form justifying absence of tachograph records", "Transport invoice", "Employment contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Atestarea acoperă perioade de concediu, boală sau alte activități fără tahograf.",
      de: "Die Bescheinigung deckt Urlaubs-, Krankheits- oder andere Zeiten ohne Fahrtenschreiber ab.",
      en: "Attestation covers periods of leave, illness or other activities without tachograph."
    }
  },
  {
    question: {
      ro: "Când trebuie utilizat modul 'OUT' pe tahograf?",
      de: "Wann muss der 'OUT'-Modus am Fahrtenschreiber verwendet werden?",
      en: "When must the 'OUT' mode be used on the tachograph?"
    },
    options: {
      ro: ["Niciodată", "La conducere în afara domeniului de aplicare a Regulamentului 561", "În fiecare zi", "La pauze"],
      de: ["Niemals", "Bei Fahrt außerhalb des Anwendungsbereichs der Verordnung 561", "Jeden Tag", "Bei Pausen"],
      en: ["Never", "When driving outside the scope of Regulation 561", "Every day", "During breaks"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Modul OUT se folosește pentru vehicule excluse din regulament (ex: sub 3.5t).",
      de: "OUT-Modus wird für von der Verordnung ausgenommene Fahrzeuge verwendet (z.B. unter 3,5t).",
      en: "OUT mode is used for vehicles excluded from regulation (e.g. under 3.5t)."
    }
  },
  {
    question: {
      ro: "Ce se întâmplă dacă cartela tahograf este defectă?",
      de: "Was passiert, wenn die Fahrtenschreiberkarte defekt ist?",
      en: "What happens if the tachograph card is defective?"
    },
    options: {
      ro: ["Conduci fără", "Înregistrări manuale pe verso-ul discului sau printout, raportare în 7 zile", "Oprești transportul", "Cumperi cartelă nouă imediat"],
      de: ["Ohne fahren", "Manuelle Aufzeichnungen auf Rückseite des Scheibe oder Ausdruck, Meldung in 7 Tagen", "Transport stoppen", "Sofort neue Karte kaufen"],
      en: ["Drive without", "Manual records on disc reverse or printout, report within 7 days", "Stop transport", "Buy new card immediately"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Defecțiunea trebuie documentată manual și raportată pentru înlocuirea cartelei.",
      de: "Der Defekt muss manuell dokumentiert und für Kartenersatz gemeldet werden.",
      en: "Defect must be documented manually and reported for card replacement."
    }
  },
  {
    question: {
      ro: "Ce este timpul de lucru și cum diferă de timpul de conducere?",
      de: "Was ist Arbeitszeit und wie unterscheidet sie sich von der Lenkzeit?",
      en: "What is working time and how does it differ from driving time?"
    },
    options: {
      ro: ["Sunt identice", "Timpul de lucru include conducere + altă muncă (încărcare, descărcare, etc.)", "Nu există diferență", "Timpul de lucru e mai mic"],
      de: ["Sind identisch", "Arbeitszeit umfasst Fahrt + andere Arbeit (Laden, Entladen, etc.)", "Kein Unterschied", "Arbeitszeit ist kürzer"],
      en: ["They are identical", "Working time includes driving + other work (loading, unloading, etc.)", "No difference", "Working time is less"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Timpul de lucru total include toate activitățile profesionale, nu doar conducerea.",
      de: "Die Gesamtarbeitszeit umfasst alle beruflichen Tätigkeiten, nicht nur das Fahren.",
      en: "Total working time includes all professional activities, not just driving."
    }
  },
  {
    question: {
      ro: "Care este limita săptămânală de timp de lucru pentru șoferi?",
      de: "Was ist die wöchentliche Arbeitszeitgrenze für Fahrer?",
      en: "What is the weekly working time limit for drivers?"
    },
    options: {
      ro: ["40 ore", "48 ore (media), maxim 60 ore într-o săptămână", "56 ore fix", "Nu există limită"],
      de: ["40 Stunden", "48 Stunden (Durchschnitt), maximal 60 Stunden in einer Woche", "56 Stunden fix", "Keine Grenze"],
      en: ["40 hours", "48 hours (average), maximum 60 hours in one week", "56 hours fixed", "No limit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Media săptămânală nu poate depăși 48 ore, cu maximum absolut de 60 ore.",
      de: "Der wöchentliche Durchschnitt darf 48 Stunden nicht überschreiten, mit absolutem Maximum von 60 Stunden.",
      en: "Weekly average cannot exceed 48 hours, with absolute maximum of 60 hours."
    }
  },
  {
    question: {
      ro: "Ce este conducea în echipaj (multi-manning)?",
      de: "Was ist Fahren in Mehrbesatzung (Multi-Manning)?",
      en: "What is multi-manning driving?"
    },
    options: {
      ro: ["Conducere singur", "Doi sau mai mulți șoferi în același vehicul, cu reguli speciale", "Conducere cu pasageri", "Conducere în convoi"],
      de: ["Alleinfahren", "Zwei oder mehr Fahrer im selben Fahrzeug, mit Sonderregeln", "Fahren mit Passagieren", "Konvoifahren"],
      en: ["Driving alone", "Two or more drivers in the same vehicle, with special rules", "Driving with passengers", "Convoy driving"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În echipaj, regulile de repaus zilnic permit mai multă flexibilitate.",
      de: "In Mehrbesatzung erlauben die täglichen Ruheregeln mehr Flexibilität.",
      en: "In multi-manning, daily rest rules allow more flexibility."
    }
  },
  {
    question: {
      ro: "Care este repausul zilnic în echipaj?",
      de: "Was ist die tägliche Ruhezeit in Mehrbesatzung?",
      en: "What is the daily rest in multi-manning?"
    },
    options: {
      ro: ["12 ore", "9 ore consecutive în 30 de ore de la începutul turei", "11 ore", "6 ore"],
      de: ["12 Stunden", "9 aufeinanderfolgende Stunden innerhalb von 30 Stunden nach Schichtbeginn", "11 Stunden", "6 Stunden"],
      en: ["12 hours", "9 consecutive hours within 30 hours from shift start", "11 hours", "6 hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În echipaj, perioada de 24 ore se extinde la 30 ore pentru repausul zilnic.",
      de: "In Mehrbesatzung verlängert sich der 24-Stunden-Zeitraum auf 30 Stunden für die tägliche Ruhe.",
      en: "In multi-manning, the 24-hour period extends to 30 hours for daily rest."
    }
  },
  {
    question: {
      ro: "Ce trebuie făcut când tahograful se defectează în cursă?",
      de: "Was muss getan werden, wenn der Fahrtenschreiber während der Fahrt ausfällt?",
      en: "What must be done when the tachograph breaks down during a trip?"
    },
    options: {
      ro: ["Continuăm fără înregistrare", "Înregistrări manuale și reparație în maxim 7 zile", "Oprim imediat", "Ignorăm"],
      de: ["Ohne Aufzeichnung weiterfahren", "Manuelle Aufzeichnungen und Reparatur innerhalb von maximal 7 Tagen", "Sofort stoppen", "Ignorieren"],
      en: ["Continue without recording", "Manual records and repair within maximum 7 days", "Stop immediately", "Ignore"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Defecțiunea trebuie reparată în 7 zile dacă vehiculul nu poate reveni la bază mai devreme.",
      de: "Der Defekt muss innerhalb von 7 Tagen repariert werden, wenn das Fahrzeug nicht früher zur Basis zurückkehren kann.",
      en: "Defect must be repaired within 7 days if vehicle cannot return to base sooner."
    }
  },
  {
    question: {
      ro: "Ce este tahograful inteligent de generația a doua?",
      de: "Was ist der intelligente Fahrtenschreiber der zweiten Generation?",
      en: "What is the second generation smart tachograph?"
    },
    options: {
      ro: ["Tahograf analog", "Tahograf cu GNSS și comunicație DSRC pentru control de la distanță", "Tahograf simplu", "GPS normal"],
      de: ["Analoger Fahrtenschreiber", "Fahrtenschreiber mit GNSS und DSRC-Kommunikation für Fernkontrolle", "Einfacher Fahrtenschreiber", "Normales GPS"],
      en: ["Analog tachograph", "Tachograph with GNSS and DSRC communication for remote control", "Simple tachograph", "Normal GPS"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tahograful inteligent V2 permite controale de la distanță și înregistrează locația automat.",
      de: "Der intelligente V2-Fahrtenschreiber ermöglicht Fernkontrollen und zeichnet den Standort automatisch auf.",
      en: "Smart V2 tachograph allows remote controls and records location automatically."
    }
  },
  {
    question: {
      ro: "Când a devenit obligatoriu tahograful inteligent V2?",
      de: "Wann wurde der intelligente V2-Fahrtenschreiber obligatorisch?",
      en: "When did the smart V2 tachograph become mandatory?"
    },
    options: {
      ro: ["2019", "21 august 2023 pentru vehicule noi", "2025", "Nu e obligatoriu"],
      de: ["2019", "21. August 2023 für Neufahrzeuge", "2025", "Nicht obligatorisch"],
      en: ["2019", "21 August 2023 for new vehicles", "2025", "Not mandatory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Din august 2023, toate vehiculele noi trebuie echipate cu tahograf inteligent V2.",
      de: "Seit August 2023 müssen alle Neufahrzeuge mit intelligentem V2-Fahrtenschreiber ausgestattet sein.",
      en: "Since August 2023, all new vehicles must be equipped with smart V2 tachograph."
    }
  },
  {
    question: {
      ro: "Ce documente trebuie să aibă șoferul la control privind timpii de conducere?",
      de: "Welche Dokumente muss der Fahrer bei Kontrollen bezüglich Lenkzeiten haben?",
      en: "What documents must the driver have at inspection regarding driving times?"
    },
    options: {
      ro: ["Doar permisul", "Cartela tahograf, printouts sau înregistrări pentru ultimele 28 zile + ziua curentă", "Doar CMR", "Doar contractul"],
      de: ["Nur Führerschein", "Fahrtenschreiberkarte, Ausdrucke oder Aufzeichnungen für die letzten 28 Tage + aktueller Tag", "Nur CMR", "Nur Vertrag"],
      en: ["Only license", "Tachograph card, printouts or records for last 28 days + current day", "Only CMR", "Only contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Șoferul trebuie să poată prezenta înregistrările pentru ziua curentă și ultimele 28 de zile.",
      de: "Der Fahrer muss Aufzeichnungen für den aktuellen Tag und die letzten 28 Tage vorlegen können.",
      en: "Driver must be able to present records for current day and last 28 days."
    }
  }
];
