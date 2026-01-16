export interface SimulationChoice {
  id: string;
  text: {
    ro: string;
    de: string;
    en: string;
  };
  points: number;
  feedback: {
    ro: string;
    de: string;
    en: string;
  };
  nextScenarioId?: string; // For branching
  isEndpoint?: boolean;
}

export interface SimulationScenario {
  id: string;
  title: {
    ro: string;
    de: string;
    en: string;
  };
  description: {
    ro: string;
    de: string;
    en: string;
  };
  context: {
    ro: string;
    de: string;
    en: string;
  };
  choices: SimulationChoice[];
  timeLimit?: number; // seconds
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface Simulation {
  id: string;
  title: {
    ro: string;
    de: string;
    en: string;
  };
  description: {
    ro: string;
    de: string;
    en: string;
  };
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number; // minutes
  maxScore: number;
  scenarios: SimulationScenario[];
  icon: string;
}

export const simulations: Simulation[] = [
  {
    id: 'urgent-delivery',
    title: {
      ro: 'Livrare Urgentă BMW',
      de: 'Dringende BMW-Lieferung',
      en: 'Urgent BMW Delivery'
    },
    description: {
      ro: 'Gestionează o livrare critică pentru linia de producție BMW cu deadline strict.',
      de: 'Verwalten Sie eine kritische Lieferung für die BMW-Produktionslinie mit strenger Frist.',
      en: 'Manage a critical delivery for the BMW production line with a strict deadline.'
    },
    category: 'operations',
    difficulty: 'hard',
    estimatedTime: 15,
    maxScore: 100,
    icon: '🚛',
    scenarios: [
      {
        id: 'start',
        title: {
          ro: 'Situația Inițială',
          de: 'Ausgangssituation',
          en: 'Initial Situation'
        },
        description: {
          ro: 'Este ora 14:00. Primești un apel urgent de la BMW München.',
          de: 'Es ist 14:00 Uhr. Sie erhalten einen dringenden Anruf von BMW München.',
          en: 'It\'s 2:00 PM. You receive an urgent call from BMW Munich.'
        },
        context: {
          ro: 'Clientul BMW are nevoie de 2 paleți cu piese auto (componente motor) livrate din depozitul Sibiu până mâine la ora 06:00 pentru linia de producție. Distanța: 850 km. Marfa: 1.200 kg, ADR clasa 9.',
          de: 'Der Kunde BMW benötigt 2 Paletten mit Autoteilen (Motorkomponenten), die aus dem Lager Sibiu bis morgen 06:00 Uhr für die Produktionslinie geliefert werden müssen. Entfernung: 850 km. Fracht: 1.200 kg, ADR Klasse 9.',
          en: 'The BMW customer needs 2 pallets of auto parts (engine components) delivered from the Sibiu warehouse by tomorrow 6:00 AM for the production line. Distance: 850 km. Cargo: 1,200 kg, ADR class 9.'
        },
        difficulty: 'hard',
        category: 'operations',
        timeLimit: 60,
        choices: [
          {
            id: 'check-fleet',
            text: {
              ro: 'Verifică disponibilitatea flotei și șoferilor cu certificat ADR',
              de: 'Überprüfen Sie die Verfügbarkeit der Flotte und der ADR-zertifizierten Fahrer',
              en: 'Check fleet availability and ADR-certified drivers'
            },
            points: 20,
            feedback: {
              ro: '✅ Excelent! Prima acțiune corectă este să verifici resursele disponibile. Marfa ADR necesită șofer certificat și vehicul autorizat.',
              de: '✅ Ausgezeichnet! Die erste richtige Aktion ist die Überprüfung der verfügbaren Ressourcen. ADR-Fracht erfordert zertifizierte Fahrer und autorisierte Fahrzeuge.',
              en: '✅ Excellent! The first correct action is to check available resources. ADR cargo requires certified driver and authorized vehicle.'
            },
            nextScenarioId: 'fleet-check'
          },
          {
            id: 'accept-immediately',
            text: {
              ro: 'Acceptă imediat comanda și promite livrarea',
              de: 'Akzeptieren Sie den Auftrag sofort und versprechen Sie die Lieferung',
              en: 'Accept the order immediately and promise delivery'
            },
            points: -10,
            feedback: {
              ro: '⚠️ Risc major! Nu poți promite fără să verifici disponibilitatea. Dacă nu ai resurse, vei pierde clientul și vei plăti penalități.',
              de: '⚠️ Großes Risiko! Sie können nicht versprechen, ohne die Verfügbarkeit zu prüfen. Ohne Ressourcen verlieren Sie den Kunden und zahlen Strafen.',
              en: '⚠️ Major risk! You cannot promise without checking availability. Without resources, you\'ll lose the customer and pay penalties.'
            },
            nextScenarioId: 'crisis-no-check'
          },
          {
            id: 'quote-price',
            text: {
              ro: 'Oferă un preț și așteaptă confirmarea clientului',
              de: 'Bieten Sie einen Preis an und warten Sie auf die Kundenbestätigung',
              en: 'Offer a price and wait for customer confirmation'
            },
            points: 5,
            feedback: {
              ro: '⚠️ Timp pierdut! La livrări urgente, verificarea resurselor e prioritară. Prețul vine după confirmarea capacității.',
              de: '⚠️ Verlorene Zeit! Bei dringenden Lieferungen hat die Ressourcenprüfung Priorität. Der Preis kommt nach der Kapazitätsbestätigung.',
              en: '⚠️ Time wasted! For urgent deliveries, resource check is priority. Price comes after capacity confirmation.'
            },
            nextScenarioId: 'fleet-check'
          }
        ]
      },
      {
        id: 'fleet-check',
        title: {
          ro: 'Verificare Flotă',
          de: 'Flottenprüfung',
          en: 'Fleet Check'
        },
        description: {
          ro: 'Ai verificat sistemul și ai găsit opțiuni.',
          de: 'Sie haben das System überprüft und Optionen gefunden.',
          en: 'You checked the system and found options.'
        },
        context: {
          ro: 'Șoferul Ion (ADR certificat) este disponibil cu camionul RO-15-ABC (Euro 6, ADR autorizat). Are 7 ore de condus rămase azi conform tacho. Alternativ, poți contacta un subcontractor din rețea.',
          de: 'Fahrer Ion (ADR-zertifiziert) ist mit LKW RO-15-ABC (Euro 6, ADR autorisiert) verfügbar. Er hat heute laut Tacho noch 7 Fahrstunden. Alternativ können Sie einen Subunternehmer aus dem Netzwerk kontaktieren.',
          en: 'Driver Ion (ADR certified) is available with truck RO-15-ABC (Euro 6, ADR authorized). He has 7 driving hours left today per tacho. Alternatively, you can contact a subcontractor from the network.'
        },
        difficulty: 'hard',
        category: 'operations',
        choices: [
          {
            id: 'use-own-driver',
            text: {
              ro: 'Folosește șoferul propriu Ion cu planificare pauză obligatorie',
              de: 'Verwenden Sie den eigenen Fahrer Ion mit obligatorischer Pausenplanung',
              en: 'Use own driver Ion with mandatory break planning'
            },
            points: 25,
            feedback: {
              ro: '✅ Decizie optimă! 850 km = ~9-10 ore. Cu pauza de 45 min după 4.5h și timpul de încărcare, ajunge la timp respectând legislația.',
              de: '✅ Optimale Entscheidung! 850 km = ~9-10 Stunden. Mit 45 Min. Pause nach 4,5h und Ladezeit erreicht er das Ziel rechtzeitig und gesetzeskonform.',
              en: '✅ Optimal decision! 850 km = ~9-10 hours. With 45 min break after 4.5h and loading time, he arrives on time while respecting regulations.'
            },
            nextScenarioId: 'route-planning'
          },
          {
            id: 'use-subcontractor',
            text: {
              ro: 'Contactează subcontractorul pentru mai multă siguranță',
              de: 'Kontaktieren Sie den Subunternehmer für mehr Sicherheit',
              en: 'Contact subcontractor for more safety'
            },
            points: 10,
            feedback: {
              ro: '⚠️ Opțiune validă dar costisitoare. Marja de profit scade cu 30-40%. Pentru clienți premium ca BMW, flota proprie e preferată pentru control maxim.',
              de: '⚠️ Gültige aber teure Option. Die Gewinnmarge sinkt um 30-40%. Für Premium-Kunden wie BMW ist die eigene Flotte für maximale Kontrolle vorzuziehen.',
              en: '⚠️ Valid but expensive option. Profit margin drops by 30-40%. For premium clients like BMW, own fleet is preferred for maximum control.'
            },
            nextScenarioId: 'route-planning'
          },
          {
            id: 'team-driving',
            text: {
              ro: 'Organizează echipaj dublu pentru viteză maximă',
              de: 'Organisieren Sie ein Doppelteam für maximale Geschwindigkeit',
              en: 'Organize double crew for maximum speed'
            },
            points: 15,
            feedback: {
              ro: '⚠️ Bună idee dar costisitoare și nu e necesară. Un șofer cu planificare corectă poate face ruta. Team driving e pentru distanțe >1200km sau livrări <12h.',
              de: '⚠️ Gute Idee aber teuer und nicht notwendig. Ein Fahrer mit richtiger Planung kann die Strecke schaffen. Teamfahren ist für Entfernungen >1200km oder Lieferungen <12h.',
              en: '⚠️ Good idea but expensive and not necessary. One driver with correct planning can do the route. Team driving is for distances >1200km or deliveries <12h.'
            },
            nextScenarioId: 'route-planning'
          }
        ]
      },
      {
        id: 'crisis-no-check',
        title: {
          ro: 'Criză - Fără Verificare',
          de: 'Krise - Ohne Prüfung',
          en: 'Crisis - No Check'
        },
        description: {
          ro: 'Ai promis livrarea fără să verifici. Acum afli că...',
          de: 'Sie haben die Lieferung versprochen, ohne zu prüfen. Jetzt erfahren Sie...',
          en: 'You promised delivery without checking. Now you find out...'
        },
        context: {
          ro: 'Singurul șofer ADR disponibil are doar 3 ore de condus rămase azi și camionul are revizia expirată! Trebuie să gestionezi situația de criză.',
          de: 'Der einzige verfügbare ADR-Fahrer hat heute nur noch 3 Fahrstunden und der LKW hat eine abgelaufene Inspektion! Sie müssen die Krisensituation bewältigen.',
          en: 'The only available ADR driver has only 3 driving hours left today and the truck has expired inspection! You must manage the crisis situation.'
        },
        difficulty: 'hard',
        category: 'operations',
        choices: [
          {
            id: 'call-client-honest',
            text: {
              ro: 'Sună clientul, explică situația și propune soluție alternativă',
              de: 'Rufen Sie den Kunden an, erklären Sie die Situation und schlagen Sie eine Alternative vor',
              en: 'Call client, explain situation and propose alternative solution'
            },
            points: 10,
            feedback: {
              ro: '✅ Onestitatea salvează relația! Clientul apreciază transparența. Propune livrare cu întârziere de 4h sau subcontractor verificat.',
              de: '✅ Ehrlichkeit rettet die Beziehung! Der Kunde schätzt Transparenz. Schlagen Sie eine Lieferung mit 4h Verspätung oder geprüften Subunternehmer vor.',
              en: '✅ Honesty saves the relationship! Client appreciates transparency. Propose delivery with 4h delay or verified subcontractor.'
            },
            nextScenarioId: 'recovery'
          },
          {
            id: 'find-any-solution',
            text: {
              ro: 'Caută orice soluție, chiar și cu riscuri',
              de: 'Suchen Sie jede Lösung, auch mit Risiken',
              en: 'Find any solution, even with risks'
            },
            points: -15,
            feedback: {
              ro: '❌ Periculos! Încălcarea regulilor ADR sau tacho poate duce la amenzi de 5000-15000€, suspendarea licenței și răspundere penală.',
              de: '❌ Gefährlich! Verstöße gegen ADR- oder Tacho-Regeln können zu Bußgeldern von 5000-15000€, Lizenzentzug und strafrechtlicher Haftung führen.',
              en: '❌ Dangerous! Violating ADR or tacho rules can lead to fines of 5000-15000€, license suspension and criminal liability.'
            },
            nextScenarioId: 'recovery'
          }
        ]
      },
      {
        id: 'route-planning',
        title: {
          ro: 'Planificarea Rutei',
          de: 'Routenplanung',
          en: 'Route Planning'
        },
        description: {
          ro: 'Trebuie să alegi ruta optimă pentru livrare.',
          de: 'Sie müssen die optimale Route für die Lieferung wählen.',
          en: 'You need to choose the optimal route for delivery.'
        },
        context: {
          ro: 'Opțiuni: A) Sibiu → Nădlac → A1 Austria → München (850km, autostrăzi 80%, taxe: 45€). B) Sibiu → Oradea → Budapesta → Viena → München (920km, taxe: 35€). C) Sibiu → Arad → A1 → München (830km, dar lucrări pe A1 Austria cu întârzieri 2h).',
          de: 'Optionen: A) Sibiu → Nădlac → A1 Österreich → München (850km, Autobahnen 80%, Maut: 45€). B) Sibiu → Oradea → Budapest → Wien → München (920km, Maut: 35€). C) Sibiu → Arad → A1 → München (830km, aber Baustelle auf A1 Österreich mit 2h Verzögerung).',
          en: 'Options: A) Sibiu → Nădlac → A1 Austria → Munich (850km, highways 80%, tolls: 45€). B) Sibiu → Oradea → Budapest → Vienna → Munich (920km, tolls: 35€). C) Sibiu → Arad → A1 → Munich (830km, but roadworks on A1 Austria with 2h delays).'
        },
        difficulty: 'medium',
        category: 'operations',
        choices: [
          {
            id: 'route-a',
            text: {
              ro: 'Alege Ruta A - Standard, cea mai echilibrată',
              de: 'Wählen Sie Route A - Standard, am ausgewogensten',
              en: 'Choose Route A - Standard, most balanced'
            },
            points: 20,
            feedback: {
              ro: '✅ Alegere optimă! Ruta A oferă cel mai bun echilibru între distanță, timp și costuri. 80% autostrăzi = mai puțină uzură și predictibilitate.',
              de: '✅ Optimale Wahl! Route A bietet das beste Gleichgewicht zwischen Entfernung, Zeit und Kosten. 80% Autobahnen = weniger Verschleiß und Vorhersagbarkeit.',
              en: '✅ Optimal choice! Route A offers the best balance between distance, time and costs. 80% highways = less wear and predictability.'
            },
            nextScenarioId: 'documentation'
          },
          {
            id: 'route-b',
            text: {
              ro: 'Alege Ruta B - Mai lungă dar taxe mai mici',
              de: 'Wählen Sie Route B - Länger aber niedrigere Maut',
              en: 'Choose Route B - Longer but lower tolls'
            },
            points: 5,
            feedback: {
              ro: '⚠️ Nu e optim pentru urgențe! Salvezi 10€ la taxe dar pierzi 1.5h+ și consumi mai mult carburant. La urgențe, timpul > economii minore.',
              de: '⚠️ Nicht optimal für Eillieferungen! Sie sparen 10€ Maut, verlieren aber 1,5h+ und verbrauchen mehr Kraftstoff. Bei Eillieferungen Zeit > kleine Einsparungen.',
              en: '⚠️ Not optimal for urgent deliveries! You save 10€ on tolls but lose 1.5h+ and consume more fuel. For urgent deliveries, time > minor savings.'
            },
            nextScenarioId: 'documentation'
          },
          {
            id: 'route-c',
            text: {
              ro: 'Alege Ruta C - Cea mai scurtă',
              de: 'Wählen Sie Route C - Die kürzeste',
              en: 'Choose Route C - The shortest'
            },
            points: -5,
            feedback: {
              ro: '❌ Greșeală! Deși e cea mai scurtă, lucrările pe A1 Austria adaugă 2h de întârziere. Verifică mereu alertele de trafic!',
              de: '❌ Fehler! Obwohl sie die kürzeste ist, fügen die Bauarbeiten auf der A1 Österreich 2h Verzögerung hinzu. Prüfen Sie immer die Verkehrsmeldungen!',
              en: '❌ Mistake! Although shortest, roadworks on A1 Austria add 2h delay. Always check traffic alerts!'
            },
            nextScenarioId: 'documentation'
          }
        ]
      },
      {
        id: 'documentation',
        title: {
          ro: 'Documentația',
          de: 'Dokumentation',
          en: 'Documentation'
        },
        description: {
          ro: 'Șoferul e gata să plece. Ce documente verifici?',
          de: 'Der Fahrer ist bereit abzufahren. Welche Dokumente prüfen Sie?',
          en: 'Driver is ready to depart. What documents do you check?'
        },
        context: {
          ro: 'Transport ADR clasa 9 din România în Germania. Marfă: componente motor (baterii litiu). Valoare: 85.000€.',
          de: 'ADR-Transport Klasse 9 von Rumänien nach Deutschland. Fracht: Motorkomponenten (Lithiumbatterien). Wert: 85.000€.',
          en: 'ADR class 9 transport from Romania to Germany. Cargo: engine components (lithium batteries). Value: 85,000€.'
        },
        difficulty: 'hard',
        category: 'operations',
        choices: [
          {
            id: 'full-check',
            text: {
              ro: 'CMR + ADR docs + Certificat ADR șofer + Asigurare CMR + Instrucțiuni scrise ADR',
              de: 'CMR + ADR-Docs + ADR-Fahrerbescheinigung + CMR-Versicherung + ADR-Schriftliche Anweisungen',
              en: 'CMR + ADR docs + Driver ADR certificate + CMR insurance + ADR written instructions'
            },
            points: 25,
            feedback: {
              ro: '✅ Perfect! Toate documentele necesare pentru transport ADR internațional. Verifică și că asigurarea CMR acoperă valoarea de 85.000€!',
              de: '✅ Perfekt! Alle erforderlichen Dokumente für internationalen ADR-Transport. Prüfen Sie auch, ob die CMR-Versicherung den Wert von 85.000€ abdeckt!',
              en: '✅ Perfect! All required documents for international ADR transport. Also verify that CMR insurance covers the 85,000€ value!'
            },
            nextScenarioId: 'final'
          },
          {
            id: 'basic-check',
            text: {
              ro: 'CMR + Licență transport + Factură',
              de: 'CMR + Transportlizenz + Rechnung',
              en: 'CMR + Transport license + Invoice'
            },
            points: -10,
            feedback: {
              ro: '❌ Incomplet! Lipsesc documentele ADR obligatorii! Control în Austria = amendă 2000€+ și blocare transport. Marfa ADR necesită documentație specifică!',
              de: '❌ Unvollständig! Es fehlen die obligatorischen ADR-Dokumente! Kontrolle in Österreich = 2000€+ Strafe und Transportsperre. ADR-Fracht erfordert spezifische Dokumentation!',
              en: '❌ Incomplete! Missing mandatory ADR documents! Control in Austria = 2000€+ fine and transport block. ADR cargo requires specific documentation!'
            },
            nextScenarioId: 'final'
          },
          {
            id: 'delegate-check',
            text: {
              ro: 'Lasă șoferul să verifice, el știe ce trebuie',
              de: 'Lassen Sie den Fahrer prüfen, er weiß, was benötigt wird',
              en: 'Let driver check, he knows what\'s needed'
            },
            points: 0,
            feedback: {
              ro: '⚠️ Risc! Dispatcherul e responsabil pentru completitudinea documentației. Șoferul poate omite ceva. Dubla verificare e standard industrial.',
              de: '⚠️ Risiko! Der Dispatcher ist für die Vollständigkeit der Dokumentation verantwortlich. Der Fahrer kann etwas übersehen. Doppelte Prüfung ist Industriestandard.',
              en: '⚠️ Risk! Dispatcher is responsible for documentation completeness. Driver may miss something. Double-check is industry standard.'
            },
            nextScenarioId: 'final'
          }
        ]
      },
      {
        id: 'recovery',
        title: {
          ro: 'Recuperare Situație',
          de: 'Situationswiederherstellung',
          en: 'Situation Recovery'
        },
        description: {
          ro: 'Ai comunicat cu clientul. Ce faci acum?',
          de: 'Sie haben mit dem Kunden kommuniziert. Was tun Sie jetzt?',
          en: 'You communicated with the client. What do you do now?'
        },
        context: {
          ro: 'Clientul e nemulțumit dar apreciază onestitatea. Ai 30 minute să găsești o soluție.',
          de: 'Der Kunde ist unzufrieden, schätzt aber die Ehrlichkeit. Sie haben 30 Minuten, um eine Lösung zu finden.',
          en: 'Client is unhappy but appreciates honesty. You have 30 minutes to find a solution.'
        },
        difficulty: 'hard',
        category: 'operations',
        choices: [
          {
            id: 'network-solution',
            text: {
              ro: 'Activează rețeaua de parteneri și găsește transport alternativ verificat',
              de: 'Aktivieren Sie das Partnernetzwerk und finden Sie einen verifizierten Alternativtransport',
              en: 'Activate partner network and find verified alternative transport'
            },
            points: 15,
            feedback: {
              ro: '✅ Profesionist! Rețeaua de parteneri e pentru situații de acest gen. Verifică ADR certificări și asigurare înainte de a confirma.',
              de: '✅ Professionell! Das Partnernetzwerk ist für solche Situationen. Prüfen Sie ADR-Zertifizierungen und Versicherung, bevor Sie bestätigen.',
              en: '✅ Professional! Partner network is for situations like this. Verify ADR certifications and insurance before confirming.'
            },
            nextScenarioId: 'final'
          },
          {
            id: 'discount-offer',
            text: {
              ro: 'Oferă discount 20% pentru inconvenient',
              de: 'Bieten Sie 20% Rabatt für die Unannehmlichkeiten',
              en: 'Offer 20% discount for inconvenience'
            },
            points: 5,
            feedback: {
              ro: '⚠️ Bine pentru relație, dar nu rezolvă problema! Discount-ul e complementar soluției, nu înlocuiește transportul.',
              de: '⚠️ Gut für die Beziehung, löst aber das Problem nicht! Der Rabatt ergänzt die Lösung, ersetzt aber nicht den Transport.',
              en: '⚠️ Good for relationship but doesn\'t solve the problem! Discount is complementary to solution, doesn\'t replace transport.'
            },
            nextScenarioId: 'final'
          }
        ]
      },
      {
        id: 'final',
        title: {
          ro: 'Finalizare',
          de: 'Abschluss',
          en: 'Completion'
        },
        description: {
          ro: 'Transportul a fost organizat. Rezultat final.',
          de: 'Der Transport wurde organisiert. Endergebnis.',
          en: 'Transport has been organized. Final result.'
        },
        context: {
          ro: 'Evaluează deciziile tale și vezi scorul final.',
          de: 'Bewerten Sie Ihre Entscheidungen und sehen Sie das Endergebnis.',
          en: 'Evaluate your decisions and see the final score.'
        },
        difficulty: 'easy',
        category: 'operations',
        choices: [
          {
            id: 'complete',
            text: {
              ro: 'Vezi rezultatul final',
              de: 'Endergebnis anzeigen',
              en: 'View final result'
            },
            points: 0,
            feedback: {
              ro: '🎯 Simulare completă! Vezi scorul și feedback-ul detaliat mai jos.',
              de: '🎯 Simulation abgeschlossen! Siehe Punktzahl und detailliertes Feedback unten.',
              en: '🎯 Simulation complete! See score and detailed feedback below.'
            },
            isEndpoint: true
          }
        ]
      }
    ]
  },
  {
    id: 'customs-delay',
    title: {
      ro: 'Întârziere la Vamă',
      de: 'Zollverzögerung',
      en: 'Customs Delay'
    },
    description: {
      ro: 'Gestionează o situație de blocare la vama turcă cu marfă perisabilă.',
      de: 'Verwalten Sie eine Blockadesituation am türkischen Zoll mit verderblicher Ware.',
      en: 'Handle a blocking situation at Turkish customs with perishable goods.'
    },
    category: 'customs',
    difficulty: 'medium',
    estimatedTime: 10,
    maxScore: 80,
    icon: '🛃',
    scenarios: [
      {
        id: 'start',
        title: {
          ro: 'Alertă Vamă',
          de: 'Zollalarm',
          en: 'Customs Alert'
        },
        description: {
          ro: 'Șoferul te sună de la vama Kapikule (TR-BG).',
          de: 'Der Fahrer ruft Sie vom Zoll Kapikule (TR-BG) an.',
          en: 'Driver calls you from Kapikule customs (TR-BG).'
        },
        context: {
          ro: 'Transport fructe proaspete din Turcia spre Germania. Temperatura camion: OK. Vama turcă cere documente suplimentare pentru fitosanitar. Șoferul nu le are. Marfa se strică în 48h.',
          de: 'Transport frisches Obst aus der Türkei nach Deutschland. LKW-Temperatur: OK. Türkischer Zoll fordert zusätzliche Dokumente für Pflanzengesundheit. Fahrer hat sie nicht. Ware verdirbt in 48h.',
          en: 'Fresh fruit transport from Turkey to Germany. Truck temperature: OK. Turkish customs requests additional phytosanitary documents. Driver doesn\'t have them. Cargo spoils in 48h.'
        },
        difficulty: 'medium',
        category: 'customs',
        choices: [
          {
            id: 'contact-exporter',
            text: {
              ro: 'Contactează imediat exportatorul pentru documente',
              de: 'Kontaktieren Sie sofort den Exporteur für Dokumente',
              en: 'Immediately contact exporter for documents'
            },
            points: 25,
            feedback: {
              ro: '✅ Corect! Exportatorul e responsabil pentru documentele fitosanitare. Cere trimitere urgentă prin email + curier.',
              de: '✅ Richtig! Der Exporteur ist für phytosanitäre Dokumente verantwortlich. Fordern Sie dringende Zusendung per E-Mail + Kurier.',
              en: '✅ Correct! Exporter is responsible for phytosanitary documents. Request urgent sending via email + courier.'
            },
            nextScenarioId: 'waiting'
          },
          {
            id: 'bribe-attempt',
            text: {
              ro: 'Sugerează șoferului să "rezolve" situația',
              de: 'Schlagen Sie dem Fahrer vor, die Situation zu "lösen"',
              en: 'Suggest driver to "resolve" the situation'
            },
            points: -30,
            feedback: {
              ro: '❌ ILEGAL! Corupția la vamă = infracțiune penală, pierderea licenței, blacklist permanent. Zero toleranță!',
              de: '❌ ILLEGAL! Zollkorruption = Straftat, Lizenzverlust, permanente Schwarze Liste. Null Toleranz!',
              en: '❌ ILLEGAL! Customs bribery = criminal offense, license loss, permanent blacklist. Zero tolerance!'
            },
            nextScenarioId: 'crisis-customs'
          },
          {
            id: 'wait-monday',
            text: {
              ro: 'Așteaptă până luni când se deschide biroul exportatorului',
              de: 'Warten Sie bis Montag, wenn das Büro des Exporteurs öffnet',
              en: 'Wait until Monday when exporter office opens'
            },
            points: -15,
            feedback: {
              ro: '❌ Marfa se strică! 48h = deadline. La perisabile, fiecare oră contează. Găsește contact de urgență!',
              de: '❌ Ware verdirbt! 48h = Frist. Bei Verderblichem zählt jede Stunde. Finden Sie Notfallkontakt!',
              en: '❌ Cargo spoils! 48h = deadline. For perishables, every hour counts. Find emergency contact!'
            },
            nextScenarioId: 'waiting'
          }
        ]
      },
      {
        id: 'waiting',
        title: {
          ro: 'În Așteptare',
          de: 'Warten',
          en: 'Waiting'
        },
        description: {
          ro: 'Exportatorul trimite documentele în 4 ore. Ce faci între timp?',
          de: 'Exporteur sendet Dokumente in 4 Stunden. Was tun Sie in der Zwischenzeit?',
          en: 'Exporter sends documents in 4 hours. What do you do meanwhile?'
        },
        context: {
          ro: 'Timpul trece. Trebuie să gestionezi situația eficient.',
          de: 'Die Zeit vergeht. Sie müssen die Situation effizient managen.',
          en: 'Time is passing. You need to manage the situation efficiently.'
        },
        difficulty: 'medium',
        category: 'customs',
        choices: [
          {
            id: 'proactive-management',
            text: {
              ro: 'Informează clientul, monitorizează temperatura, pregătește restul documentelor',
              de: 'Informieren Sie den Kunden, überwachen Sie die Temperatur, bereiten Sie die restlichen Dokumente vor',
              en: 'Inform client, monitor temperature, prepare remaining documents'
            },
            points: 20,
            feedback: {
              ro: '✅ Management proactiv excelent! Clientul apreciază transparența, monitorizarea previne deteriorarea, pregătirea accelerează vămuirea.',
              de: '✅ Ausgezeichnetes proaktives Management! Kunde schätzt Transparenz, Überwachung verhindert Verderb, Vorbereitung beschleunigt Verzollung.',
              en: '✅ Excellent proactive management! Client appreciates transparency, monitoring prevents spoilage, preparation speeds up customs clearance.'
            },
            nextScenarioId: 'customs-final'
          },
          {
            id: 'just-wait',
            text: {
              ro: 'Așteptă documentele, nu e nevoie de alte acțiuni',
              de: 'Warten Sie auf die Dokumente, keine weiteren Maßnahmen erforderlich',
              en: 'Wait for documents, no other actions needed'
            },
            points: 0,
            feedback: {
              ro: '⚠️ Pasiv! Fără monitorizare, probleme pot apărea. Fără informare, clientul pierde încrederea.',
              de: '⚠️ Passiv! Ohne Überwachung können Probleme auftreten. Ohne Information verliert der Kunde das Vertrauen.',
              en: '⚠️ Passive! Without monitoring, problems can arise. Without informing, client loses trust.'
            },
            nextScenarioId: 'customs-final'
          }
        ]
      },
      {
        id: 'crisis-customs',
        title: {
          ro: 'Criză Vamală',
          de: 'Zollkrise',
          en: 'Customs Crisis'
        },
        description: {
          ro: 'Situația s-a agravat. Vama a reținut marfa.',
          de: 'Die Situation hat sich verschlechtert. Der Zoll hat die Ware beschlagnahmt.',
          en: 'Situation has worsened. Customs has detained cargo.'
        },
        context: {
          ro: 'Marfa e blocată pentru inspecție extinsă. Trebuie să acționezi rapid.',
          de: 'Fracht ist für erweiterte Inspektion gesperrt. Sie müssen schnell handeln.',
          en: 'Cargo is blocked for extended inspection. You must act quickly.'
        },
        difficulty: 'hard',
        category: 'customs',
        choices: [
          {
            id: 'legal-escalation',
            text: {
              ro: 'Escaladează legal: avocat specializat + ambasada română',
              de: 'Rechtliche Eskalation: spezialisierter Anwalt + rumänische Botschaft',
              en: 'Legal escalation: specialized lawyer + Romanian embassy'
            },
            points: 15,
            feedback: {
              ro: '✅ Escaladare corectă! În situații grave, suportul legal și diplomatic e esențial. Costisitor dar protejează interesele.',
              de: '✅ Richtige Eskalation! In ernsten Situationen ist rechtliche und diplomatische Unterstützung wesentlich. Teuer aber schützt Interessen.',
              en: '✅ Correct escalation! In serious situations, legal and diplomatic support is essential. Expensive but protects interests.'
            },
            nextScenarioId: 'customs-final'
          },
          {
            id: 'abandon-cargo',
            text: {
              ro: 'Abandonează marfa și minimizează pierderile',
              de: 'Geben Sie die Fracht auf und minimieren Sie die Verluste',
              en: 'Abandon cargo and minimize losses'
            },
            points: -5,
            feedback: {
              ro: '⚠️ Ultima opțiune! Doar dacă costurile de recuperare > valoarea mărfii. Încearcă toate căile legale mai întâi.',
              de: '⚠️ Letzte Option! Nur wenn Wiederherstellungskosten > Warenwert. Versuchen Sie zuerst alle legalen Wege.',
              en: '⚠️ Last resort! Only if recovery costs > cargo value. Try all legal paths first.'
            },
            nextScenarioId: 'customs-final'
          }
        ]
      },
      {
        id: 'customs-final',
        title: {
          ro: 'Rezultat Vamă',
          de: 'Zollergebnis',
          en: 'Customs Result'
        },
        description: {
          ro: 'Situația vamală a fost gestionată.',
          de: 'Die Zollsituation wurde bearbeitet.',
          en: 'Customs situation has been handled.'
        },
        context: {
          ro: 'Evaluează performanța ta în gestionarea crizei vamale.',
          de: 'Bewerten Sie Ihre Leistung bei der Bewältigung der Zollkrise.',
          en: 'Evaluate your performance in handling the customs crisis.'
        },
        difficulty: 'easy',
        category: 'customs',
        choices: [
          {
            id: 'complete',
            text: {
              ro: 'Finalizează simularea',
              de: 'Simulation abschließen',
              en: 'Complete simulation'
            },
            points: 0,
            feedback: {
              ro: '🎯 Simulare completă! Lecții învățate: documentația e cheie, comunicarea proactivă salvează relații.',
              de: '🎯 Simulation abgeschlossen! Gelernte Lektionen: Dokumentation ist der Schlüssel, proaktive Kommunikation rettet Beziehungen.',
              en: '🎯 Simulation complete! Lessons learned: documentation is key, proactive communication saves relationships.'
            },
            isEndpoint: true
          }
        ]
      }
    ]
  },
  {
    id: 'carrier-default',
    title: {
      ro: 'Subcontractor Problematic',
      de: 'Problematischer Subunternehmer',
      en: 'Problematic Subcontractor'
    },
    description: {
      ro: 'Gestionează o situație cu un carrier care nu își respectă angajamentele.',
      de: 'Verwalten Sie eine Situation mit einem Carrier, der seine Verpflichtungen nicht einhält.',
      en: 'Handle a situation with a carrier not meeting commitments.'
    },
    category: 'carrier-management',
    difficulty: 'medium',
    estimatedTime: 8,
    maxScore: 60,
    icon: '⚠️',
    scenarios: [
      {
        id: 'start',
        title: {
          ro: 'Alertă Încărcare',
          de: 'Ladungsalarm',
          en: 'Loading Alert'
        },
        description: {
          ro: 'Subcontractorul nu s-a prezentat la încărcare.',
          de: 'Subunternehmer ist nicht zur Beladung erschienen.',
          en: 'Subcontractor didn\'t show up for loading.'
        },
        context: {
          ro: 'Ora: 08:30. Încărcarea programată: 08:00. Carrier-ul nu răspunde la telefon. Clientul sună nervos că depozitul așteaptă. Transport: 20 paleți mobilă, valoare 45.000€, livrare în 48h.',
          de: 'Uhrzeit: 08:30. Geplante Beladung: 08:00. Carrier antwortet nicht. Kunde ruft nervös an, dass das Lager wartet. Transport: 20 Paletten Möbel, Wert 45.000€, Lieferung in 48h.',
          en: 'Time: 08:30. Scheduled loading: 08:00. Carrier not answering. Client calls nervously that warehouse is waiting. Transport: 20 pallets furniture, value 45,000€, delivery in 48h.'
        },
        difficulty: 'medium',
        category: 'carrier-management',
        choices: [
          {
            id: 'immediate-backup',
            text: {
              ro: 'Activează imediat planul de backup: caută transport alternativ',
              de: 'Aktivieren Sie sofort den Backup-Plan: suchen Sie alternativen Transport',
              en: 'Immediately activate backup plan: find alternative transport'
            },
            points: 20,
            feedback: {
              ro: '✅ Reacție rapidă! 30 minute întârziere = încă recuperabil. Contactează 2-3 carriers din lista de backup simultan.',
              de: '✅ Schnelle Reaktion! 30 Minuten Verspätung = noch aufholbar. Kontaktieren Sie 2-3 Carriers aus der Backup-Liste gleichzeitig.',
              en: '✅ Fast reaction! 30 minutes delay = still recoverable. Contact 2-3 carriers from backup list simultaneously.'
            },
            nextScenarioId: 'backup-search'
          },
          {
            id: 'keep-trying',
            text: {
              ro: 'Continuă să suni carrier-ul, poate răspunde',
              de: 'Rufen Sie weiter den Carrier an, vielleicht antwortet er',
              en: 'Keep calling carrier, maybe they\'ll answer'
            },
            points: -5,
            feedback: {
              ro: '⚠️ Timp pierdut! După 30 min fără răspuns, probabilitatea de răspuns e <10%. Activează backup!',
              de: '⚠️ Verlorene Zeit! Nach 30 Min ohne Antwort ist die Antwortwahrscheinlichkeit <10%. Aktivieren Sie Backup!',
              en: '⚠️ Time wasted! After 30 min without answer, response probability is <10%. Activate backup!'
            },
            nextScenarioId: 'backup-search'
          },
          {
            id: 'blame-carrier',
            text: {
              ro: 'Sună clientul și dă vina pe carrier',
              de: 'Rufen Sie den Kunden an und geben Sie dem Carrier die Schuld',
              en: 'Call client and blame carrier'
            },
            points: -15,
            feedback: {
              ro: '❌ Neprofesionist! Clientul nu e interesat de problemele tale interne. El vrea soluții, nu scuze!',
              de: '❌ Unprofessionell! Der Kunde interessiert sich nicht für Ihre internen Probleme. Er will Lösungen, keine Ausreden!',
              en: '❌ Unprofessional! Client is not interested in your internal problems. They want solutions, not excuses!'
            },
            nextScenarioId: 'backup-search'
          }
        ]
      },
      {
        id: 'backup-search',
        title: {
          ro: 'Căutare Backup',
          de: 'Backup-Suche',
          en: 'Backup Search'
        },
        description: {
          ro: 'Ai găsit un carrier disponibil dar cere preț mai mare.',
          de: 'Sie haben einen verfügbaren Carrier gefunden, aber er verlangt einen höheren Preis.',
          en: 'You found an available carrier but they want higher price.'
        },
        context: {
          ro: 'Carrier-ul de backup cere 1.400€ (vs 1.100€ preț inițial). Poate ajunge în 2 ore. Alternativ, poți aștepta încă 1 oră pentru altă ofertă.',
          de: 'Backup-Carrier verlangt 1.400€ (vs 1.100€ ursprünglicher Preis). Kann in 2 Stunden da sein. Alternativ können Sie noch 1 Stunde auf ein anderes Angebot warten.',
          en: 'Backup carrier asks 1,400€ (vs 1,100€ initial price). Can arrive in 2 hours. Alternatively, you can wait 1 more hour for another offer.'
        },
        difficulty: 'medium',
        category: 'carrier-management',
        choices: [
          {
            id: 'accept-higher',
            text: {
              ro: 'Acceptă prețul mai mare - prioritate = livrarea la timp',
              de: 'Akzeptieren Sie den höheren Preis - Priorität = pünktliche Lieferung',
              en: 'Accept higher price - priority = on-time delivery'
            },
            points: 15,
            feedback: {
              ro: '✅ Decizie corectă pentru urgențe! 300€ în plus << costul penalității sau pierderea clientului. Recuperezi de la carrier-ul care a lipsit.',
              de: '✅ Richtige Entscheidung für Eilfälle! 300€ mehr << Strafkosten oder Kundenverlust. Sie fordern es vom fehlenden Carrier zurück.',
              en: '✅ Correct decision for urgencies! 300€ extra << penalty cost or losing client. You recover from the no-show carrier.'
            },
            nextScenarioId: 'carrier-final'
          },
          {
            id: 'negotiate',
            text: {
              ro: 'Negociază prețul - cere 1.250€ ca compromis',
              de: 'Verhandeln Sie den Preis - fordern Sie 1.250€ als Kompromiss',
              en: 'Negotiate price - ask for 1,250€ as compromise'
            },
            points: 10,
            feedback: {
              ro: '⚠️ OK dar riscant! Negocierea poate dura și pierzi timpul. La urgențe, acceptarea rapidă e mai sigură.',
              de: '⚠️ OK aber riskant! Verhandlungen können dauern und Sie verlieren Zeit. Bei Eilfällen ist schnelle Akzeptanz sicherer.',
              en: '⚠️ OK but risky! Negotiation can take time and you lose time. For urgencies, quick acceptance is safer.'
            },
            nextScenarioId: 'carrier-final'
          },
          {
            id: 'wait-better',
            text: {
              ro: 'Așteaptă ofertă mai bună',
              de: 'Warten Sie auf ein besseres Angebot',
              en: 'Wait for better offer'
            },
            points: -10,
            feedback: {
              ro: '❌ Risc major! Fiecare oră crește presiunea. Backup-ul disponibil poate dispărea. "Mai bine pasărea în mână..."',
              de: '❌ Großes Risiko! Jede Stunde erhöht den Druck. Der verfügbare Backup kann verschwinden. "Lieber den Spatz in der Hand..."',
              en: '❌ Major risk! Each hour increases pressure. Available backup may disappear. "A bird in hand..."'
            },
            nextScenarioId: 'carrier-final'
          }
        ]
      },
      {
        id: 'carrier-final',
        title: {
          ro: 'Rezolvare Carrier',
          de: 'Carrier-Lösung',
          en: 'Carrier Resolution'
        },
        description: {
          ro: 'Transportul a fost rezolvat. Ce faci cu carrier-ul problematic?',
          de: 'Transport wurde gelöst. Was machen Sie mit dem problematischen Carrier?',
          en: 'Transport was resolved. What do you do with problematic carrier?'
        },
        context: {
          ro: 'Carrier-ul inițial sună la ora 14:00 și spune că a avut probleme tehnice. Cere scuze.',
          de: 'Ursprünglicher Carrier ruft um 14:00 an und sagt, er hatte technische Probleme. Er entschuldigt sich.',
          en: 'Original carrier calls at 2:00 PM and says they had technical problems. Apologizes.'
        },
        difficulty: 'easy',
        category: 'carrier-management',
        choices: [
          {
            id: 'document-incident',
            text: {
              ro: 'Documentează incidentul, facturează diferența, pune pe watch list',
              de: 'Dokumentieren Sie den Vorfall, berechnen Sie die Differenz, setzen Sie auf Watch-Liste',
              en: 'Document incident, invoice difference, put on watch list'
            },
            points: 15,
            feedback: {
              ro: '✅ Profesionist! Documentarea protejează legal, facturarea recuperează pierderea, watch list previne repetarea.',
              de: '✅ Professionell! Dokumentation schützt rechtlich, Rechnungsstellung erholt Verlust, Watch-Liste verhindert Wiederholung.',
              en: '✅ Professional! Documentation protects legally, invoicing recovers loss, watch list prevents repetition.'
            },
            isEndpoint: true
          },
          {
            id: 'blacklist-immediately',
            text: {
              ro: 'Blacklist imediat - zero toleranță',
              de: 'Sofortige Blacklist - null Toleranz',
              en: 'Immediate blacklist - zero tolerance'
            },
            points: 5,
            feedback: {
              ro: '⚠️ Poate prea dur pentru prima abatere! Watch list + atenție sporită e mai echilibrat. Blacklist e pentru recidive.',
              de: '⚠️ Vielleicht zu hart für ersten Verstoß! Watch-Liste + erhöhte Aufmerksamkeit ist ausgewogener. Blacklist ist für Wiederholungstäter.',
              en: '⚠️ Maybe too harsh for first offense! Watch list + increased attention is more balanced. Blacklist is for repeat offenders.'
            },
            isEndpoint: true
          },
          {
            id: 'forgive-forget',
            text: {
              ro: 'Acceptă scuzele și continuă normal',
              de: 'Akzeptieren Sie die Entschuldigungen und fahren Sie normal fort',
              en: 'Accept apologies and continue normally'
            },
            points: -5,
            feedback: {
              ro: '❌ Naiv! Fără consecințe = comportamentul se repetă. Documentarea și urmărirea sunt esențiale pentru managementul flotei.',
              de: '❌ Naiv! Ohne Konsequenzen = Verhalten wiederholt sich. Dokumentation und Nachverfolgung sind wesentlich für Flottenmanagement.',
              en: '❌ Naive! Without consequences = behavior repeats. Documentation and tracking are essential for fleet management.'
            },
            isEndpoint: true
          }
        ]
      }
    ]
  }
];

export const getSimulationById = (id: string): Simulation | undefined => {
  return simulations.find(s => s.id === id);
};

export const getScenarioById = (simulation: Simulation, scenarioId: string): SimulationScenario | undefined => {
  return simulation.scenarios.find(s => s.id === scenarioId);
};
