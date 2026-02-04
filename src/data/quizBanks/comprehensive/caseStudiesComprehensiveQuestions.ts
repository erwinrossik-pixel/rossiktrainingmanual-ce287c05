import { TranslatedQuizQuestion } from '../../quizTranslations';

export const caseStudiesComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Cazul BMW Line Stop: Ce înveți din oprirea liniei de producție din cauza întârzierii unei componente?",
      de: "Fall BMW-Bandstillstand: Was lernst du aus dem Produktionsstopp wegen Verzögerung einer Komponente?",
      en: "BMW Line Stop case: What do you learn from production line stoppage due to component delay?"
    },
    options: {
      ro: ["Nu e problema ta", "Impactul financiar imens al întârzierilor în supply chain auto; necesitatea planurilor de backup", "Doar transportatorul e vinovat", "Nu se poate preveni"],
      de: ["Nicht dein Problem", "Enormer finanzieller Impact von Verzögerungen in Automotive-Supply-Chain; Notwendigkeit von Backup-Plänen", "Nur Spediteur ist schuld", "Kann nicht verhindert werden"],
      en: ["Not your problem", "Huge financial impact of delays in automotive supply chain; need for backup plans", "Only carrier is guilty", "Cannot be prevented"]
    },
    correctIndex: 1,
    explanation: {
      ro: "BMW Line Stop: costul opririi = 10.000-50.000€/minut. Lecție: comunicare imediată la orice risc de întârziere, planuri B/C, tracking real-time, relații de încredere cu transportatori.",
      de: "BMW-Bandstillstand: Stillstandskosten = 10.000-50.000€/Minute. Lektion: sofortige Kommunikation bei Verzögerungsrisiko, Plan B/C, Echtzeit-Tracking, Vertrauensbeziehungen mit Spediteuren.",
      en: "BMW Line Stop: stoppage cost = €10,000-50,000/minute. Lesson: immediate communication at any delay risk, B/C plans, real-time tracking, trust relationships with carriers."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Furt pe A7 Franța: Transportul de electronice este jefuit noaptea. Ce măsuri de securitate lipseau?",
      de: "Diebstahl auf A7 Frankreich: Elektroniktransport wird nachts beraubt. Welche Sicherheitsmaßnahmen fehlten?",
      en: "A7 France theft: Electronics transport is robbed at night. What security measures were missing?"
    },
    options: {
      ro: ["Doar noroc", "Parcare securizată, GPS tracking, protocol oprire doar în locații sigure, asigurare adecvată", "Nu se poate preveni", "Doar asigurare"],
      de: ["Nur Pech", "Gesicherter Parkplatz, GPS-Tracking, Protokoll nur an sicheren Standorten zu stoppen, angemessene Versicherung", "Kann nicht verhindert werden", "Nur Versicherung"],
      en: ["Just bad luck", "Secured parking, GPS tracking, protocol to stop only at safe locations, adequate insurance", "Cannot be prevented", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Securitate transport: parcări TAPA (Transported Asset Protection Association), GPS cu alertă, reguli de oprire (doar în locații certificate), șofer instruit, asigurare high-value goods.",
      de: "Transportsicherheit: TAPA-Parkplätze, GPS mit Alarm, Stopregeln (nur an zertifizierten Standorten), geschulter Fahrer, High-Value-Goods-Versicherung.",
      en: "Transport security: TAPA parking, GPS with alert, stop rules (only at certified locations), trained driver, high-value goods insurance."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Criză COVID transport: Client cere livrare urgentă echipamente medicale în Italia lockdown. Cum gestionezi?",
      de: "COVID-Transportkrise: Kunde fordert dringende Lieferung medizinischer Ausrüstung nach Italien im Lockdown. Wie managst du?",
      en: "COVID transport crisis: Client requests urgent delivery of medical equipment to Italy in lockdown. How do you manage?"
    },
    options: {
      ro: ["Refuzi transportul", "Verifici excepțiile legale, obții documente necesare, rută alternativă, comunicare constantă", "Aștepți să se termine lockdown", "Doar transport aerian"],
      de: ["Transport ablehnen", "Rechtliche Ausnahmen prüfen, erforderliche Dokumente beschaffen, alternative Route, ständige Kommunikation", "Lockdown-Ende abwarten", "Nur Luftfracht"],
      en: ["Refuse transport", "Check legal exceptions, obtain required documents, alternative route, constant communication", "Wait for lockdown end", "Only air freight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Criză: verifică excepții (medical = prioritar), documente speciale (declarație esențială), rută cu mai puține restricții, șofer cu echipament protecție, update constant client.",
      de: "Krise: Ausnahmen prüfen (medizinisch = prioritär), Sonderdokumente (Wesentlichkeitserklärung), Route mit weniger Einschränkungen, Fahrer mit Schutzausrüstung, ständiges Kunden-Update.",
      en: "Crisis: check exceptions (medical = priority), special documents (essential declaration), route with fewer restrictions, driver with protection equipment, constant client update."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Cazul mărfii deteriorate la descărcare: Clientul reclamă că marfa era intactă la încărcare. Procedură?",
      de: "Fall beschädigter Ware bei Entladung: Kunde behauptet Ware war bei Verladung intakt. Verfahren?",
      en: "Damaged goods at unloading case: Client claims goods were intact at loading. Procedure?"
    },
    options: {
      ro: ["Plătești imediat", "Verifici CMR la încărcare, fotografii, rezerve la descărcare, investigație detaliată", "Refuzi orice responsabilitate", "Ignori reclamația"],
      de: ["Sofort zahlen", "CMR bei Verladung prüfen, Fotos, Vorbehalte bei Entladung, detaillierte Untersuchung", "Jede Verantwortung ablehnen", "Reklamation ignorieren"],
      en: ["Pay immediately", "Check CMR at loading, photos, reserves at unloading, detailed investigation", "Refuse any responsibility", "Ignore claim"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Daune: verifici CMR (rezerve la încărcare?), fotografii loading/unloading, declarații șofer, condițiile de transport. Determini când/unde s-a produs dauna înainte de decizie.",
      de: "Schäden: CMR prüfen (Vorbehalte bei Verladung?), Fotos Be-/Entladung, Fahrererklärungen, Transportbedingungen. Wann/wo Schaden entstand vor Entscheidung bestimmen.",
      en: "Damages: check CMR (reserves at loading?), loading/unloading photos, driver statements, transport conditions. Determine when/where damage occurred before deciding."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Faliment transportator în timpul transportului: Camionul cu marfa clientului e blocat. Ce faci?",
      de: "Spediteursinsolvenz während Transport: LKW mit Kundenware ist blockiert. Was tust du?",
      en: "Carrier bankruptcy during transport: Truck with client's goods is blocked. What do you do?"
    },
    options: {
      ro: ["Aștepți", "Localizezi marfa, contactezi administrator judiciar, organizezi transfer la alt carrier, informezi clientul", "Anunți doar asigurarea", "Renunți la marfă"],
      de: ["Warten", "Ware lokalisieren, Insolvenzverwalter kontaktieren, Transfer zu anderem Carrier organisieren, Kunden informieren", "Nur Versicherung benachrichtigen", "Ware aufgeben"],
      en: ["Wait", "Locate goods, contact administrator, organize transfer to other carrier, inform client", "Only notify insurance", "Give up goods"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Faliment carrier: 1) Localizează marfa imediat, 2) Contactează administratorul judiciar pentru eliberare, 3) Aranjează alt transport, 4) Informează clientul despre situație și soluție.",
      de: "Carrier-Insolvenz: 1) Ware sofort lokalisieren, 2) Insolvenzverwalter für Freigabe kontaktieren, 3) Anderen Transport arrangieren, 4) Kunden über Situation und Lösung informieren.",
      en: "Carrier bankruptcy: 1) Locate goods immediately, 2) Contact administrator for release, 3) Arrange other transport, 4) Inform client about situation and solution."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client major amenință să plece la concurență după o serie de probleme. Strategie de retenție?",
      de: "Großkunde droht nach Problemserie zur Konkurrenz zu wechseln. Bindungsstrategie?",
      en: "Major client threatens to leave for competition after series of problems. Retention strategy?"
    },
    options: {
      ro: ["Lasă-l să plece", "Întâlnire la nivel înalt, recunoaștere probleme, plan de îmbunătățire, compensație, dedicated account manager", "Doar reducere de preț", "Ignori amenințarea"],
      de: ["Gehen lassen", "Treffen auf hoher Ebene, Problemerkennung, Verbesserungsplan, Entschädigung, dedizierter Account Manager", "Nur Preissenkung", "Drohung ignorieren"],
      en: ["Let them go", "High-level meeting, acknowledge problems, improvement plan, compensation, dedicated account manager", "Only price reduction", "Ignore threat"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Retenție: întâlnire CEO/Director, recunoaștere sinceră a problemelor, plan de acțiune cu termene, compensație pentru probleme trecute, account manager dedicat, SLA formalizat.",
      de: "Bindung: CEO/Direktor-Treffen, aufrichtige Problemerkennung, Aktionsplan mit Fristen, Entschädigung für vergangene Probleme, dedizierter Account Manager, formalisiertes SLA.",
      en: "Retention: CEO/Director meeting, sincere problem acknowledgment, action plan with deadlines, compensation for past issues, dedicated account manager, formalized SLA."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Greva vamală la Calais: Toate transporturile sunt blocate. Comunicare cu clienții?",
      de: "Zollstreik in Calais: Alle Transporte sind blockiert. Kommunikation mit Kunden?",
      en: "Customs strike at Calais: All transports are blocked. Communication with clients?"
    },
    options: {
      ro: ["Aștepți să treacă", "Informare proactivă, actualizări regulate, alternative (Eurotunnel, alte porturi), estimări realiste", "Doar când întreabă", "Dai vina pe grevă"],
      de: ["Abwarten", "Proaktive Information, regelmäßige Updates, Alternativen (Eurotunnel, andere Häfen), realistische Schätzungen", "Nur wenn sie fragen", "Streik beschuldigen"],
      en: ["Wait it out", "Proactive information, regular updates, alternatives (Eurotunnel, other ports), realistic estimates", "Only when they ask", "Blame strike"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicare criză: informează proactiv ÎNAINTE ca clientul să întrebe, oferă alternative concrete, estimări realiste (nu optimiste), update-uri regulate chiar fără noutăți.",
      de: "Krisenkommunikation: proaktiv informieren BEVOR Kunde fragt, konkrete Alternativen bieten, realistische (nicht optimistische) Schätzungen, regelmäßige Updates auch ohne Neuigkeiten.",
      en: "Crisis communication: inform proactively BEFORE client asks, offer concrete alternatives, realistic (not optimistic) estimates, regular updates even without news."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Transport ADR incident: Scurgere substanță periculoasă pe autostradă. Protocol de urgență?",
      de: "ADR-Transportvorfall: Gefahrstoffaustritt auf Autobahn. Notfallprotokoll?",
      en: "ADR transport incident: Dangerous substance leak on highway. Emergency protocol?"
    },
    options: {
      ro: ["Șoferul curăță", "Alertă autorități (112), izolare zonă, fișa de siguranță, nu interveni fără echipament, informare lanț complet", "Continui drumul", "Doar anunți clientul"],
      de: ["Fahrer räumt auf", "Behörden alarmieren (112), Bereich isolieren, Sicherheitsdatenblatt, nicht ohne Ausrüstung eingreifen, komplette Kette informieren", "Weiterfahren", "Nur Kunden benachrichtigen"],
      en: ["Driver cleans up", "Alert authorities (112), isolate area, safety data sheet, don't intervene without equipment, inform complete chain", "Continue driving", "Only notify client"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ADR incident: 112 imediat, izolare (distanță conform fișei), nu interveni fără echipament ADR, fișa de siguranță către pompieri, informează expeditor-destinatar-asigurator în paralel.",
      de: "ADR-Vorfall: sofort 112, Isolierung (Abstand laut Datenblatt), nicht ohne ADR-Ausrüstung eingreifen, Sicherheitsdatenblatt an Feuerwehr, Versender-Empfänger-Versicherer parallel informieren.",
      en: "ADR incident: 112 immediately, isolation (distance per data sheet), don't intervene without ADR equipment, safety sheet to firefighters, inform shipper-consignee-insurer in parallel."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Fuziune companii: Integrare două echipe de dispecerat cu culturi diferite. Management schimbare?",
      de: "Unternehmensfusion: Integration zweier Disponententeams mit unterschiedlichen Kulturen. Change Management?",
      en: "Company merger: Integration of two dispatch teams with different cultures. Change management?"
    },
    options: {
      ro: ["Una înghite cealaltă", "Comunicare transparentă, identificare best practices ambele, echipă mixtă de tranziție, respect pentru ambele culturi", "Doar șeful decide totul", "Schimbi toți angajații"],
      de: ["Eine schluckt andere", "Transparente Kommunikation, Best Practices beider identifizieren, gemischtes Übergangsteam, Respekt für beide Kulturen", "Nur Chef entscheidet alles", "Alle Mitarbeiter wechseln"],
      en: ["One swallows other", "Transparent communication, identify best practices from both, mixed transition team, respect for both cultures", "Only boss decides all", "Change all employees"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integrare: comunicare deschisă despre schimbări, workshop-uri comune, preluare cele mai bune practici din fiecare, lideri din ambele echipe în tranziție, răbdare - durează 6-12 luni.",
      de: "Integration: offene Kommunikation über Veränderungen, gemeinsame Workshops, beste Praktiken aus beiden übernehmen, Führungskräfte aus beiden Teams im Übergang, Geduld - dauert 6-12 Monate.",
      en: "Integration: open communication about changes, joint workshops, adopt best practices from each, leaders from both teams in transition, patience - takes 6-12 months."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Eroare de facturare descoperită după 3 luni: 50.000€ subfacturat unui client. Abordare?",
      de: "Fakturierungsfehler nach 3 Monaten entdeckt: 50.000€ unterfakturiert bei einem Kunden. Ansatz?",
      en: "Billing error discovered after 3 months: €50,000 under-billed to a client. Approach?"
    },
    options: {
      ro: ["Ignori", "Documentezi eroarea, discuți onest cu clientul, propui plan de recuperare, previi pe viitor", "Facturezi fără explicație", "Renunți la bani"],
      de: ["Ignorieren", "Fehler dokumentieren, ehrlich mit Kunden besprechen, Rückgewinnungsplan vorschlagen, zukünftig vorbeugen", "Ohne Erklärung fakturieren", "Auf Geld verzichten"],
      en: ["Ignore", "Document error, discuss honestly with client, propose recovery plan, prevent in future", "Invoice without explanation", "Give up money"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Eroare facturare: documentează complet eroarea, întâlnire cu clientul pentru explicație transparentă, propune plan de plată pentru diferență, implementează controale pentru a preveni.",
      de: "Fakturierungsfehler: Fehler vollständig dokumentieren, Kundenmeeting für transparente Erklärung, Zahlungsplan für Differenz vorschlagen, Kontrollen zur Vermeidung implementieren.",
      en: "Billing error: fully document error, client meeting for transparent explanation, propose payment plan for difference, implement controls to prevent."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Șofer implicat în accident cu victime în străinătate. Responsabilități imediate ale disponentului?",
      de: "Fahrer in Unfall mit Verletzten im Ausland verwickelt. Sofortige Verantwortlichkeiten des Disponenten?",
      en: "Driver involved in accident with injuries abroad. Dispatcher's immediate responsibilities?"
    },
    options: {
      ro: ["Doar aștepți informații", "Verifici starea șoferului, contactezi asigurător și asistență, informezi management, organizezi înlocuire", "Doar anunți clientul", "Nu e responsabilitatea ta"],
      de: ["Nur auf Informationen warten", "Fahrerzustand prüfen, Versicherer und Assistance kontaktieren, Management informieren, Ersatz organisieren", "Nur Kunden benachrichtigen", "Nicht deine Verantwortung"],
      en: ["Only wait for info", "Check driver status, contact insurer and assistance, inform management, organize replacement", "Only notify client", "Not your responsibility"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Accident: 1) Verifică starea șoferului (sănătate prioritară), 2) Activează asistența rutieră și asigurătorul, 3) Informează management, 4) Organizează marfa și înlocuire transport.",
      de: "Unfall: 1) Fahrerzustand prüfen (Gesundheit Priorität), 2) Pannenhilfe und Versicherer aktivieren, 3) Management informieren, 4) Ware und Ersatztransport organisieren.",
      en: "Accident: 1) Check driver status (health priority), 2) Activate roadside assistance and insurer, 3) Inform management, 4) Organize goods and replacement transport."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare TMS nou eșuează: echipa refuză să-l folosească, revin la Excel. Cum salvezi proiectul?",
      de: "Neue TMS-Implementierung scheitert: Team weigert sich zu nutzen, kehrt zu Excel zurück. Wie rettest du das Projekt?",
      en: "New TMS implementation fails: team refuses to use it, returns to Excel. How do you save the project?"
    },
    options: {
      ro: ["Obligi prin ordin", "Analizezi rezistența, ajustezi training, identifici champions, implementare graduală, suport intensiv", "Renunți la TMS", "Concediezi rezistenții"],
      de: ["Per Anweisung zwingen", "Widerstand analysieren, Training anpassen, Champions identifizieren, schrittweise Implementierung, intensive Unterstützung", "TMS aufgeben", "Widerstrebende entlassen"],
      en: ["Force by order", "Analyze resistance, adjust training, identify champions, gradual implementation, intensive support", "Give up TMS", "Fire resisters"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Salvare proiect: înțelege DE CE refuză (UI complicat? lipsă training?), ajustează abordarea, găsește 2-3 adoptatori timpurii, arată beneficii concrete, implementare pas cu pas, suport constant.",
      de: "Projekt retten: verstehen WARUM sie ablehnen (UI kompliziert? Trainingmangel?), Ansatz anpassen, 2-3 Early Adopter finden, konkrete Vorteile zeigen, schrittweise Implementierung, konstante Unterstützung.",
      en: "Save project: understand WHY they refuse (complex UI? lack of training?), adjust approach, find 2-3 early adopters, show concrete benefits, step-by-step implementation, constant support."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Client nou solicită termene de plată de 90 zile pentru volume mari. Decizie?",
      de: "Neukunde fordert 90 Tage Zahlungsfrist für große Volumen. Entscheidung?",
      en: "New client requests 90-day payment terms for large volumes. Decision?"
    },
    options: {
      ro: ["Accepți imediat", "Verificare credit, start cu termene mai scurte, construiești încredere gradual, garanții pentru termene lungi", "Refuzi orice client nou", "Doar 30 zile pentru toți"],
      de: ["Sofort akzeptieren", "Kreditprüfung, Start mit kürzeren Fristen, schrittweises Vertrauen aufbauen, Garantien für lange Fristen", "Jeden Neukunden ablehnen", "Nur 30 Tage für alle"],
      en: ["Accept immediately", "Credit check, start with shorter terms, build trust gradually, guarantees for long terms", "Refuse any new client", "Only 30 days for all"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Client nou cu termene lungi: verificare credit obligatorie, propune 30 zile pentru început, crește gradual după comportament bun, eventual 90 zile cu garanție bancară.",
      de: "Neukunde mit langen Fristen: Kreditprüfung obligatorisch, 30 Tage für Anfang vorschlagen, nach gutem Verhalten schrittweise erhöhen, eventuell 90 Tage mit Bankgarantie.",
      en: "New client with long terms: mandatory credit check, propose 30 days for start, increase gradually after good behavior, eventually 90 days with bank guarantee."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Conflict între doi disponenți pentru același client/transportator. Cum mediezi?",
      de: "Konflikt zwischen zwei Disponenten um gleichen Kunden/Spediteur. Wie vermittelst du?",
      en: "Conflict between two dispatchers for same client/carrier. How do you mediate?"
    },
    options: {
      ro: ["Lasă-i să se descurce", "Discuție separată cu fiecare, înțelege perspectivele, stabilește reguli clare de teritoriu/colaborare", "Concediezi pe unul", "Ignori conflictul"],
      de: ["Sich selbst überlassen", "Separate Gespräche mit jedem, Perspektiven verstehen, klare Territoriums-/Kooperationsregeln festlegen", "Einen entlassen", "Konflikt ignorieren"],
      en: ["Let them sort it out", "Separate discussion with each, understand perspectives, establish clear territory/collaboration rules", "Fire one", "Ignore conflict"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mediere: discuție 1:1 cu fiecare pentru perspectiva lor, apoi discuție comună, stabilește reguli clare (cine primește ce), focus pe obiective comune, documentează acordul.",
      de: "Mediation: 1:1-Gespräch mit jedem für ihre Perspektive, dann gemeinsames Gespräch, klare Regeln festlegen (wer bekommt was), Fokus auf gemeinsame Ziele, Vereinbarung dokumentieren.",
      en: "Mediation: 1:1 discussion with each for their perspective, then joint discussion, establish clear rules (who gets what), focus on common goals, document agreement."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Pierdere client major (30% din venituri). Impact și plan de recuperare pe 12 luni?",
      de: "Verlust eines Großkunden (30% vom Umsatz). Auswirkung und 12-Monats-Erholungsplan?",
      en: "Loss of major client (30% of revenue). Impact and 12-month recovery plan?"
    },
    options: {
      ro: ["Panicezi", "Analiză impact, reducere costuri proporțională, intensificare vânzări, diversificare, nu repeți eroarea de dependență", "Doar reduceri personal", "Încerci să-l recuperezi cu orice preț"],
      de: ["Panik", "Wirkungsanalyse, proportionale Kostenreduktion, Verkaufsintensivierung, Diversifizierung, Abhängigkeitsfehler nicht wiederholen", "Nur Personalabbau", "Um jeden Preis zurückgewinnen"],
      en: ["Panic", "Impact analysis, proportional cost reduction, sales intensification, diversification, don't repeat dependency error", "Only staff cuts", "Try to win back at any cost"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pierdere client major: 1) Analiză impact financiar real, 2) Reducere costuri variabile proporțional, 3) Vânzări intensive (pipeline existent), 4) Diversificare clienți, 5) Regulă: niciun client >15%.",
      de: "Großkundenverlust: 1) Reale Finanzwirkungsanalyse, 2) Variable Kosten proportional reduzieren, 3) Intensive Verkäufe (bestehende Pipeline), 4) Kundendiversifizierung, 5) Regel: kein Kunde >15%.",
      en: "Major client loss: 1) Real financial impact analysis, 2) Reduce variable costs proportionally, 3) Intensive sales (existing pipeline), 4) Client diversification, 5) Rule: no client >15%."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Reclamație client pentru lipsa de comunicare în timpul unui transport. Cum răspunzi?",
      de: "Kundenbeschwerde über mangelnde Kommunikation während eines Transports. Wie antwortest du?",
      en: "Client complaint about lack of communication during transport. How do you respond?"
    },
    options: {
      ro: ["Te scuzi și atât", "Recunoști problema, explici cauzele, propui îmbunătățiri concrete, follow-up pentru a verifica satisfacția", "Dai vina pe șofer", "Ignori reclamația"],
      de: ["Nur entschuldigen", "Problem anerkennen, Ursachen erklären, konkrete Verbesserungen vorschlagen, Follow-up zur Zufriedenheitsprüfung", "Fahrer beschuldigen", "Beschwerde ignorieren"],
      en: ["Only apologize", "Acknowledge problem, explain causes, propose concrete improvements, follow-up to verify satisfaction", "Blame driver", "Ignore complaint"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Răspuns reclamație: recunoaște fără scuze, explică ce s-a întâmplat, propune acțiuni concrete (ex: update-uri automate), verifică implementarea, follow-up cu clientul.",
      de: "Beschwerdeantwort: ohne Ausreden anerkennen, erklären was passiert ist, konkrete Aktionen vorschlagen (z.B. automatische Updates), Umsetzung überprüfen, Follow-up mit Kunde.",
      en: "Complaint response: acknowledge without excuses, explain what happened, propose concrete actions (e.g., automatic updates), verify implementation, follow-up with client."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Transport grupaj: Marfa unui client deteriorează marfa altui client. Gestiune și responsabilitate?",
      de: "Sammelladung: Ware eines Kunden beschädigt Ware eines anderen. Management und Haftung?",
      en: "Groupage transport: One client's goods damage another client's goods. Management and liability?"
    },
    options: {
      ro: ["Nu e problema ta", "Documentezi, informezi ambele părți, verifici asigurarea, facilitezi rezolvarea între părți sau prin asigurător", "Dai vina pe primul client", "Plătești din buzunar"],
      de: ["Nicht dein Problem", "Dokumentieren, beide Parteien informieren, Versicherung prüfen, Lösung zwischen Parteien oder über Versicherer ermöglichen", "Ersten Kunden beschuldigen", "Aus eigener Tasche zahlen"],
      en: ["Not your problem", "Document, inform both parties, check insurance, facilitate resolution between parties or through insurer", "Blame first client", "Pay from pocket"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Daune grupaj: documentare completă (fotografii, declarații), informare ambii clienți, verificare polițe asigurare, determinare responsabilitate (ambalaj inadecvat?), facilitare soluție.",
      de: "Sammelladungsschäden: vollständige Dokumentation (Fotos, Erklärungen), beide Kunden informieren, Versicherungspolicen prüfen, Haftungsbestimmung (unzureichende Verpackung?), Lösungsvermittlung.",
      en: "Groupage damages: complete documentation (photos, statements), inform both clients, check insurance policies, determine liability (inadequate packaging?), facilitate solution."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Strategie de expansiune în țară nouă (Polonia). Due diligence și primii pași operaționali?",
      de: "Expansionsstrategie in neues Land (Polen). Due Diligence und erste operative Schritte?",
      en: "Expansion strategy to new country (Poland). Due diligence and first operational steps?"
    },
    options: {
      ro: ["Doar deschizi birou", "Analiză piață, reglementări locale, parteneri locali, pilot cu clienți existenți, angajare locală", "Doar marketing online", "Aștepți să vină clienții"],
      de: ["Nur Büro eröffnen", "Marktanalyse, lokale Vorschriften, lokale Partner, Pilot mit bestehenden Kunden, lokale Einstellung", "Nur Online-Marketing", "Warten auf Kunden"],
      en: ["Just open office", "Market analysis, local regulations, local partners, pilot with existing clients, local hiring", "Only online marketing", "Wait for clients to come"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expansiune: analiză piață și competitori, înțelegere reglementări locale, identificare parteneri (transportatori, agenți), pilot cu clienți existenți care au trafic PL, angajare cel puțin 1 local.",
      de: "Expansion: Markt- und Wettbewerbsanalyse, lokale Vorschriften verstehen, Partner identifizieren (Spediteure, Agenten), Pilot mit bestehenden Kunden die PL-Verkehr haben, mindestens 1 Lokalen einstellen.",
      en: "Expansion: market and competitor analysis, understand local regulations, identify partners (carriers, agents), pilot with existing clients having PL traffic, hire at least 1 local."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Schimbare bruscă de temperatură în camion frigorific. Marfa farmaceutică la risc. Acțiuni?",
      de: "Plötzliche Temperaturänderung im Kühl-LKW. Pharma-Ware gefährdet. Maßnahmen?",
      en: "Sudden temperature change in refrigerated truck. Pharmaceutical goods at risk. Actions?"
    },
    options: {
      ro: ["Continui transportul", "Oprire imediată, verificare sistem, documentare temperaturi, informare client pentru decizie, posibil transbordare", "Doar anunți la destinație", "Ignori"],
      de: ["Transport fortsetzen", "Sofortiger Stopp, Systemprüfung, Temperaturdokumentation, Kundeninformation für Entscheidung, mögliche Umladung", "Nur am Ziel melden", "Ignorieren"],
      en: ["Continue transport", "Immediate stop, system check, temperature documentation, inform client for decision, possible transhipment", "Only report at destination", "Ignore"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reefer criză: oprire pentru verificare agregat, documentare printout temperaturi, informare imediată client cu date, aștepți decizia lor (continuare/transbordare/revenire).",
      de: "Reefer-Krise: Stopp zur Aggregatprüfung, Temperatur-Printout dokumentieren, sofortige Kundeninformation mit Daten, auf ihre Entscheidung warten (Fortsetzung/Umladung/Rückkehr).",
      en: "Reefer crisis: stop to check unit, document temperature printout, immediate client information with data, wait for their decision (continue/tranship/return)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Audit de la client major care verifică procedurile tale de securitate și calitate. Pregătire?",
      de: "Audit von Großkunden der deine Sicherheits- und Qualitätsverfahren prüft. Vorbereitung?",
      en: "Audit from major client checking your security and quality procedures. Preparation?"
    },
    options: {
      ro: ["Improvizezi", "Revizuire documentație, training echipă, simulare audit intern, pregătire evidențe, identificare gaps înainte", "Doar PDF-uri frumoase", "Refuzi auditul"],
      de: ["Improvisieren", "Dokumentationsüberprüfung, Teamschulung, internes Audit-Simulation, Nachweisevorbereitung, Lücken vorher identifizieren", "Nur schöne PDFs", "Audit ablehnen"],
      en: ["Improvise", "Documentation review, team training, internal audit simulation, prepare evidence, identify gaps beforehand", "Only nice PDFs", "Refuse audit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pregătire audit: revizuire toate procedurile documentate, training echipă pe ce să răspundă, audit intern de probă, pregătire dovezi (certificate, loguri), identifică și corectează gaps.",
      de: "Audit-Vorbereitung: alle dokumentierten Verfahren überprüfen, Teamschulung was zu antworten, internes Probeaudit, Nachweise vorbereiten (Zertifikate, Logs), Lücken identifizieren und korrigieren.",
      en: "Audit preparation: review all documented procedures, train team on what to answer, internal test audit, prepare evidence (certificates, logs), identify and correct gaps."
    }
  }
];
