import { QuizQuestion } from '../quizData';

export const caseStudiesQuestions: QuizQuestion[] = [
  // Romanian Questions
  {
    question: "În cazul unei deviații de temperatură la transport frigorific, care este prima acțiune?",
    options: [
      "Documentarea imediată cu fotografii și notificare client/asigurător",
      "Continuarea transportului fără acțiune",
      "Aruncarea mărfii",
      "Ignorarea problemei"
    ],
    correctIndex: 0,
    explanation: "Documentarea și notificarea imediată sunt esențiale pentru claims și decizii informate.",
    language: "ro"
  },
  {
    question: "Când un transportator confirmă dar nu se prezintă, care este procedura corectă?",
    options: [
      "Activare backup carrier imediat și documentare pentru penalități",
      "Anularea comenzii",
      "Așteptare 24 ore",
      "Contactarea poliției"
    ],
    correctIndex: 0,
    explanation: "Backup-ul imediat previne întârzierea și documentarea permite recuperarea costurilor.",
    language: "ro"
  },
  {
    question: "În caz de întârziere vamală majoră, ce comunicare este prioritară?",
    options: [
      "Informare proactivă client cu ETA actualizat și opțiuni alternative",
      "Așteptarea rezolvării fără comunicare",
      "Trimiterea unui email peste 3 zile",
      "Ignorarea situației"
    ],
    correctIndex: 0,
    explanation: "Comunicarea proactivă menține încrederea și permite clientului să planifice alternativ.",
    language: "ro"
  },
  {
    question: "Pentru un transport agabaritic, ce verificare este critică înainte de plecare?",
    options: [
      "Toate autorizațiile valide pentru fiecare țară de tranzit",
      "Doar combustibilul",
      "Radio funcțional",
      "Culoarea vehiculului"
    ],
    correctIndex: 0,
    explanation: "Autorizațiile lipsă pot duce la blocarea transportului la frontieră.",
    language: "ro"
  },
  {
    question: "Când marfa ajunge deteriorată parțial, ce trebuie notat pe CMR?",
    options: [
      "Descriere detaliată a daunelor cu fotografii înainte de acceptare",
      "Nimic, se rezolvă ulterior",
      "Doar semnătura",
      "Mulțumiri pentru livrare"
    ],
    correctIndex: 0,
    explanation: "Rezervele pe CMR sunt esențiale pentru claims - fără ele, drepturile se pierd.",
    language: "ro"
  },
  {
    question: "În scenariul de furt la parcare, ce nu trebuie făcut?",
    options: [
      "Mutarea vehiculului înainte de sosirea poliției",
      "Fotografierea locului",
      "Apelarea imediată a poliției",
      "Notificarea dispeceratului"
    ],
    correctIndex: 0,
    explanation: "Mutarea vehiculului poate compromite dovezile și investigația poliției.",
    language: "ro"
  },
  {
    question: "Pentru un client care solicită constant tarife sub costul pieței, ce strategie aplicați?",
    options: [
      "Prezentarea structurii de cost și valoarea serviciilor oferite",
      "Acceptarea oricărui preț",
      "Întreruperea imediată a relației",
      "Ignorarea solicitărilor"
    ],
    correctIndex: 0,
    explanation: "Educarea clientului despre cost-valoare construiește parteneriate durabile.",
    language: "ro"
  },
  {
    question: "În caz de defecțiune vehicul cu marfă perisabilă, prioritatea este:",
    options: [
      "Organizarea transbordare rapidă pentru păstrarea lanțului de frig",
      "Așteptarea reparației complete",
      "Abandonarea mărfii",
      "Contactarea clientului peste 2 zile"
    ],
    correctIndex: 0,
    explanation: "Marfa perisabilă necesită intervenție imediată pentru prevenirea pierderilor totale.",
    language: "ro"
  },
  {
    question: "Când șoferul depășește orele de conducere legal permise, cine este responsabil?",
    options: [
      "Atât operatorul cât și șoferul pot fi sancționați",
      "Doar clientul",
      "Nimeni",
      "Doar producătorul vehiculului"
    ],
    correctIndex: 0,
    explanation: "Regulamentele UE prevăd responsabilitate duală pentru operator și șofer.",
    language: "ro"
  },
  {
    question: "În negocierea cu un client strategic, când oferiți discount?",
    options: [
      "În schimbul angajamentelor ferme de volum sau termene de plată mai bune",
      "Întotdeauna la prima cerere",
      "Niciodată",
      "Doar pentru transporturi mici"
    ],
    correctIndex: 0,
    explanation: "Discounturile trebuie condiționate de beneficii reciproce concrete.",
    language: "ro"
  },

  // German Questions
  {
    question: "Bei einer Temperaturabweichung im Kühltransport, was ist die erste Maßnahme?",
    options: [
      "Sofortige Dokumentation mit Fotos und Benachrichtigung von Kunde/Versicherer",
      "Transport ohne Maßnahme fortsetzen",
      "Ware wegwerfen",
      "Problem ignorieren"
    ],
    correctIndex: 0,
    explanation: "Dokumentation und sofortige Benachrichtigung sind für Schadensmeldungen und fundierte Entscheidungen unerlässlich.",
    language: "de"
  },
  {
    question: "Wenn ein Spediteur bestätigt aber nicht erscheint, was ist das richtige Verfahren?",
    options: [
      "Sofortige Aktivierung eines Backup-Carriers und Dokumentation für Strafen",
      "Auftrag stornieren",
      "24 Stunden warten",
      "Polizei kontaktieren"
    ],
    correctIndex: 0,
    explanation: "Sofortiges Backup verhindert Verzögerungen und Dokumentation ermöglicht Kostenrückerstattung.",
    language: "de"
  },
  {
    question: "Bei großer Zollverzögerung, welche Kommunikation hat Priorität?",
    options: [
      "Proaktive Kundeninformation mit aktualisierter ETA und Alternativen",
      "Auf Lösung warten ohne Kommunikation",
      "E-Mail nach 3 Tagen senden",
      "Situation ignorieren"
    ],
    correctIndex: 0,
    explanation: "Proaktive Kommunikation erhält das Vertrauen und ermöglicht dem Kunden alternative Planung.",
    language: "de"
  },
  {
    question: "Für einen Schwertransport, welche Prüfung ist vor Abfahrt kritisch?",
    options: [
      "Alle gültigen Genehmigungen für jedes Transitland",
      "Nur Kraftstoff",
      "Funktionierendes Radio",
      "Fahrzeugfarbe"
    ],
    correctIndex: 0,
    explanation: "Fehlende Genehmigungen können zur Blockade des Transports an der Grenze führen.",
    language: "de"
  },
  {
    question: "Wenn Ware teilweise beschädigt ankommt, was muss auf dem CMR vermerkt werden?",
    options: [
      "Detaillierte Schadensbeschreibung mit Fotos vor Annahme",
      "Nichts, wird später geklärt",
      "Nur Unterschrift",
      "Danke für die Lieferung"
    ],
    correctIndex: 0,
    explanation: "Vorbehalte auf CMR sind für Ansprüche unerlässlich - ohne sie gehen Rechte verloren.",
    language: "de"
  },
  {
    question: "Im Diebstahl-Szenario auf dem Parkplatz, was darf nicht getan werden?",
    options: [
      "Fahrzeug vor Ankunft der Polizei bewegen",
      "Ort fotografieren",
      "Sofort Polizei rufen",
      "Disposition benachrichtigen"
    ],
    correctIndex: 0,
    explanation: "Das Bewegen des Fahrzeugs kann Beweise und die Polizeiermittlung gefährden.",
    language: "de"
  },
  {
    question: "Für einen Kunden der ständig Tarife unter Marktkosten fordert, welche Strategie wenden Sie an?",
    options: [
      "Kostenstruktur präsentieren und Wert der angebotenen Dienste",
      "Jeden Preis akzeptieren",
      "Beziehung sofort beenden",
      "Anfragen ignorieren"
    ],
    correctIndex: 0,
    explanation: "Kundenaufklärung über Kosten-Wert baut dauerhafte Partnerschaften auf.",
    language: "de"
  },
  {
    question: "Bei Fahrzeugpanne mit verderblicher Ware hat Priorität:",
    options: [
      "Schnelle Umladung zur Erhaltung der Kühlkette organisieren",
      "Auf vollständige Reparatur warten",
      "Ware aufgeben",
      "Kunden in 2 Tagen kontaktieren"
    ],
    correctIndex: 0,
    explanation: "Verderbliche Ware erfordert sofortiges Handeln zur Verhinderung von Totalverlusten.",
    language: "de"
  },
  {
    question: "Wenn der Fahrer die gesetzlich erlaubten Lenkzeiten überschreitet, wer ist verantwortlich?",
    options: [
      "Sowohl Betreiber als auch Fahrer können bestraft werden",
      "Nur der Kunde",
      "Niemand",
      "Nur der Fahrzeughersteller"
    ],
    correctIndex: 0,
    explanation: "EU-Vorschriften sehen duale Verantwortung für Betreiber und Fahrer vor.",
    language: "de"
  },
  {
    question: "In Verhandlungen mit einem strategischen Kunden, wann bieten Sie Rabatt an?",
    options: [
      "Im Austausch gegen feste Volumenversprechen oder bessere Zahlungsbedingungen",
      "Immer bei erster Anfrage",
      "Niemals",
      "Nur für kleine Transporte"
    ],
    correctIndex: 0,
    explanation: "Rabatte sollten an konkrete gegenseitige Vorteile geknüpft sein.",
    language: "de"
  },

  // English Questions
  {
    question: "In case of temperature deviation in refrigerated transport, what is the first action?",
    options: [
      "Immediate documentation with photos and client/insurer notification",
      "Continue transport without action",
      "Discard the cargo",
      "Ignore the problem"
    ],
    correctIndex: 0,
    explanation: "Documentation and immediate notification are essential for claims and informed decisions.",
    language: "en"
  },
  {
    question: "When a carrier confirms but fails to show, what is the correct procedure?",
    options: [
      "Immediate backup carrier activation and documentation for penalties",
      "Cancel the order",
      "Wait 24 hours",
      "Contact police"
    ],
    correctIndex: 0,
    explanation: "Immediate backup prevents delay and documentation allows cost recovery.",
    language: "en"
  },
  {
    question: "In case of major customs delay, what communication is priority?",
    options: [
      "Proactive client information with updated ETA and alternative options",
      "Wait for resolution without communication",
      "Send email after 3 days",
      "Ignore the situation"
    ],
    correctIndex: 0,
    explanation: "Proactive communication maintains trust and allows client to plan alternatives.",
    language: "en"
  },
  {
    question: "For an abnormal load transport, what verification is critical before departure?",
    options: [
      "All valid permits for each transit country",
      "Only fuel",
      "Working radio",
      "Vehicle color"
    ],
    correctIndex: 0,
    explanation: "Missing permits can lead to transport blockage at the border.",
    language: "en"
  },
  {
    question: "When cargo arrives partially damaged, what must be noted on CMR?",
    options: [
      "Detailed damage description with photos before acceptance",
      "Nothing, will be resolved later",
      "Only signature",
      "Thanks for delivery"
    ],
    correctIndex: 0,
    explanation: "Reservations on CMR are essential for claims - without them, rights are lost.",
    language: "en"
  },
  {
    question: "In the parking lot theft scenario, what must NOT be done?",
    options: [
      "Moving the vehicle before police arrival",
      "Photographing the scene",
      "Immediately calling police",
      "Notifying dispatch"
    ],
    correctIndex: 0,
    explanation: "Moving the vehicle can compromise evidence and police investigation.",
    language: "en"
  },
  {
    question: "For a client constantly requesting rates below market cost, what strategy do you apply?",
    options: [
      "Present cost structure and value of services offered",
      "Accept any price",
      "Immediately end relationship",
      "Ignore requests"
    ],
    correctIndex: 0,
    explanation: "Educating client about cost-value builds lasting partnerships.",
    language: "en"
  },
  {
    question: "In case of vehicle breakdown with perishable cargo, priority is:",
    options: [
      "Organize quick transshipment to maintain cold chain",
      "Wait for complete repair",
      "Abandon cargo",
      "Contact client in 2 days"
    ],
    correctIndex: 0,
    explanation: "Perishable cargo requires immediate intervention to prevent total loss.",
    language: "en"
  },
  {
    question: "When the driver exceeds legally permitted driving hours, who is responsible?",
    options: [
      "Both operator and driver can be sanctioned",
      "Only the client",
      "No one",
      "Only vehicle manufacturer"
    ],
    correctIndex: 0,
    explanation: "EU regulations provide dual responsibility for operator and driver.",
    language: "en"
  },
  {
    question: "In negotiation with a strategic client, when do you offer discount?",
    options: [
      "In exchange for firm volume commitments or better payment terms",
      "Always at first request",
      "Never",
      "Only for small transports"
    ],
    correctIndex: 0,
    explanation: "Discounts should be conditioned on concrete mutual benefits.",
    language: "en"
  }
];
