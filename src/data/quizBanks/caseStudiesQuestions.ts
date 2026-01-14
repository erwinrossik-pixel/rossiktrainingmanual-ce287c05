import { QuizQuestion } from '../quizData';

export const caseStudiesQuestions: QuizQuestion[] = [
  // Romanian Questions (30+)
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
  {
    question: "Un client raportează că a primit mai puține colete decât cele declarate. Ce faci?",
    options: [
      "Verifici CMR, POD și ambalajul original cu fotografii",
      "Respingi cererea imediat",
      "Plătești fără verificare",
      "Ignori reclamația"
    ],
    correctIndex: 0,
    explanation: "Verificarea documentelor și dovezilor este primul pas în rezolvarea discrepanțelor.",
    language: "ro"
  },
  {
    question: "Transport de produse farmaceutice: ce certificare specială este necesară?",
    options: [
      "GDP (Good Distribution Practice) pentru lanțul de frig",
      "Doar licență transport standard",
      "Certificat de vopsitor auto",
      "Diploma de bucătar"
    ],
    correctIndex: 0,
    explanation: "GDP asigură conformitatea cu cerințele stricte pentru produse farmaceutice.",
    language: "ro"
  },
  {
    question: "Când un destinatar refuză marfa fără motiv valid, ce faci?",
    options: [
      "Documentezi refuzul, contactezi expeditorul pentru instrucțiuni",
      "Abandonezi marfa la rampă",
      "O arunci în drum",
      "O vinzi pe cont propriu"
    ],
    correctIndex: 0,
    explanation: "Documentarea și comunicarea cu expeditorul sunt esențiale pentru rezolvare corectă.",
    language: "ro"
  },
  {
    question: "Client solicită livrare sâmbătă, dar șoferul nu are ore suficiente. Soluția?",
    options: [
      "Propui livrare luni sau organizezi schimb de șofer",
      "Îl trimiți oricum",
      "Anulezi comanda",
      "Minți clientul despre program"
    ],
    correctIndex: 0,
    explanation: "Respectarea regulamentelor și comunicarea transparentă sunt prioritare.",
    language: "ro"
  },
  {
    question: "Marfă perisabilă ajunge cu 2 ore întârziere la încărcare din vina clientului. Ce faci?",
    options: [
      "Documentezi întârzierea și recalculezi fereastra de livrare",
      "Refuzi transportul complet",
      "Pleci fără marfă",
      "Ignori întârzierea"
    ],
    correctIndex: 0,
    explanation: "Documentarea protejează împotriva reclamațiilor ulterioare cauzate de întârzierea la origine.",
    language: "ro"
  },
  {
    question: "Un transport urgent necesită plecare în 2 ore, dar nu ai capacitate proprie. Soluția?",
    options: [
      "Activezi rețeaua de subcontractori cu verificare rapidă",
      "Refuzi transportul",
      "Amâni 3 zile",
      "Trimiți un vehicul neadecvat"
    ],
    correctIndex: 0,
    explanation: "Subcontractarea verificată rapid rezolvă urgențele păstrând calitatea.",
    language: "ro"
  },

  // German Questions (30+)
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
  {
    question: "Ein Kunde meldet weniger Pakete als deklariert erhalten. Was tun Sie?",
    options: [
      "CMR, POD und Originalverpackung mit Fotos überprüfen",
      "Anspruch sofort ablehnen",
      "Ohne Prüfung bezahlen",
      "Reklamation ignorieren"
    ],
    correctIndex: 0,
    explanation: "Dokumenten- und Beweisprüfung ist der erste Schritt zur Klärung von Abweichungen.",
    language: "de"
  },
  {
    question: "Pharmatransport: Welche Spezialisierung ist erforderlich?",
    options: [
      "GDP (Good Distribution Practice) für die Kühlkette",
      "Nur Standard-Transportlizenz",
      "Autolackierer-Zertifikat",
      "Kochdiplom"
    ],
    correctIndex: 0,
    explanation: "GDP gewährleistet die Einhaltung strenger Anforderungen für Pharmaprodukte.",
    language: "de"
  },
  {
    question: "Wenn ein Empfänger Ware ohne triftigen Grund ablehnt, was tun Sie?",
    options: [
      "Ablehnung dokumentieren, Absender für Anweisungen kontaktieren",
      "Ware an der Rampe aufgeben",
      "Unterwegs wegwerfen",
      "Auf eigene Rechnung verkaufen"
    ],
    correctIndex: 0,
    explanation: "Dokumentation und Kommunikation mit Absender sind für korrekte Lösung wesentlich.",
    language: "de"
  },
  {
    question: "Kunde wünscht Samstagslieferung, aber Fahrer hat nicht genug Stunden. Lösung?",
    options: [
      "Montagslieferung vorschlagen oder Fahrerwechsel organisieren",
      "Trotzdem schicken",
      "Auftrag stornieren",
      "Kunden über Zeitplan belügen"
    ],
    correctIndex: 0,
    explanation: "Einhaltung der Vorschriften und transparente Kommunikation haben Priorität.",
    language: "de"
  },
  {
    question: "Verderbliche Ware kommt 2 Stunden zu spät zur Beladung durch Kundenverschulden. Was tun?",
    options: [
      "Verspätung dokumentieren und Lieferfenster neu berechnen",
      "Transport komplett ablehnen",
      "Ohne Ware abfahren",
      "Verspätung ignorieren"
    ],
    correctIndex: 0,
    explanation: "Dokumentation schützt vor späteren Reklamationen durch Ursprungsverspätung.",
    language: "de"
  },
  {
    question: "Ein dringender Transport erfordert Abfahrt in 2 Stunden ohne eigene Kapazität. Lösung?",
    options: [
      "Subunternehmer-Netzwerk mit Schnellprüfung aktivieren",
      "Transport ablehnen",
      "3 Tage verschieben",
      "Ungeeignetes Fahrzeug schicken"
    ],
    correctIndex: 0,
    explanation: "Schnell geprüfte Subunternehmer lösen Notfälle unter Qualitätserhalt.",
    language: "de"
  },

  // English Questions (30+)
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
  },
  {
    question: "A client reports receiving fewer packages than declared. What do you do?",
    options: [
      "Verify CMR, POD, and original packaging with photos",
      "Reject the claim immediately",
      "Pay without verification",
      "Ignore the complaint"
    ],
    correctIndex: 0,
    explanation: "Document and evidence verification is the first step in resolving discrepancies.",
    language: "en"
  },
  {
    question: "Pharmaceutical transport: What special certification is required?",
    options: [
      "GDP (Good Distribution Practice) for cold chain",
      "Only standard transport license",
      "Auto painter certificate",
      "Chef diploma"
    ],
    correctIndex: 0,
    explanation: "GDP ensures compliance with strict requirements for pharmaceutical products.",
    language: "en"
  },
  {
    question: "When a consignee refuses cargo without valid reason, what do you do?",
    options: [
      "Document refusal, contact shipper for instructions",
      "Abandon cargo at the ramp",
      "Throw it away on the road",
      "Sell it on your own account"
    ],
    correctIndex: 0,
    explanation: "Documentation and communication with shipper are essential for correct resolution.",
    language: "en"
  },
  {
    question: "Client requests Saturday delivery, but driver doesn't have enough hours. Solution?",
    options: [
      "Propose Monday delivery or organize driver change",
      "Send anyway",
      "Cancel the order",
      "Lie to client about schedule"
    ],
    correctIndex: 0,
    explanation: "Compliance with regulations and transparent communication are priority.",
    language: "en"
  },
  {
    question: "Perishable cargo arrives 2 hours late for loading due to client's fault. What do you do?",
    options: [
      "Document delay and recalculate delivery window",
      "Refuse transport completely",
      "Leave without cargo",
      "Ignore the delay"
    ],
    correctIndex: 0,
    explanation: "Documentation protects against later claims caused by delay at origin.",
    language: "en"
  },
  {
    question: "An urgent transport requires departure in 2 hours with no own capacity. Solution?",
    options: [
      "Activate subcontractor network with quick verification",
      "Refuse the transport",
      "Delay 3 days",
      "Send inadequate vehicle"
    ],
    correctIndex: 0,
    explanation: "Quickly verified subcontracting solves urgencies while maintaining quality.",
    language: "en"
  }
];
