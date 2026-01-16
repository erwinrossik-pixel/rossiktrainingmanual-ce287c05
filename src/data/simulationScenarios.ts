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
  ,
  // ============ NEW SIMULATION: ADR INCIDENT ============
  {
    id: 'adr-incident',
    title: {
      ro: 'Incident ADR pe Autostradă',
      de: 'ADR-Vorfall auf der Autobahn',
      en: 'ADR Incident on Highway'
    },
    description: {
      ro: 'Gestionează un incident cu marfă periculoasă pe autostrada A1.',
      de: 'Bewältigen Sie einen Gefahrgutvorfall auf der Autobahn A1.',
      en: 'Handle a dangerous goods incident on the A1 highway.'
    },
    category: 'safety',
    difficulty: 'hard',
    estimatedTime: 12,
    maxScore: 100,
    icon: '☢️',
    scenarios: [
      {
        id: 'start',
        title: { ro: 'Alertă de Urgență', de: 'Notfallalarm', en: 'Emergency Alert' },
        description: {
          ro: 'Primești un apel de la șofer: "Am o scurgere la un recipient!"',
          de: 'Sie erhalten einen Anruf vom Fahrer: "Ich habe ein Leck an einem Behälter!"',
          en: 'You receive a call from the driver: "I have a leak at a container!"'
        },
        context: {
          ro: 'Transport ADR Clasa 3 (lichide inflamabile - 500L solvent industrial). Locație: A1 km 234, bandă de urgență. Ora: 16:30, trafic intens.',
          de: 'ADR-Transport Klasse 3 (entzündbare Flüssigkeiten - 500L Industrielösungsmittel). Standort: A1 km 234, Standstreifen. Zeit: 16:30, starker Verkehr.',
          en: 'ADR Class 3 transport (flammable liquids - 500L industrial solvent). Location: A1 km 234, emergency lane. Time: 4:30 PM, heavy traffic.'
        },
        difficulty: 'hard',
        category: 'safety',
        timeLimit: 45,
        choices: [
          {
            id: 'emergency-protocol',
            text: { ro: 'Activează protocolul de urgență ADR imediat', de: 'ADR-Notfallprotokoll sofort aktivieren', en: 'Activate ADR emergency protocol immediately' },
            points: 25,
            feedback: {
              ro: '✅ Corect! Protocolul ADR: 1) Oprire motor, 2) Semnalizare 30m, 3) Evacuare zonă, 4) Apel 112, 5) Folosire echipament protecție.',
              de: '✅ Richtig! ADR-Protokoll: 1) Motor aus, 2) Warnschilder 30m, 3) Bereich räumen, 4) 112 anrufen, 5) Schutzausrüstung verwenden.',
              en: '✅ Correct! ADR protocol: 1) Stop engine, 2) Warning signs 30m, 3) Evacuate area, 4) Call 112, 5) Use protection equipment.'
            },
            nextScenarioId: 'containment'
          },
          {
            id: 'check-damage',
            text: { ro: 'Cere șoferului să verifice gravitatea scurgerii', de: 'Fahrer bitten, Schwere des Lecks zu prüfen', en: 'Ask driver to check leak severity' },
            points: 5,
            feedback: {
              ro: '⚠️ Riscant! Fără echipament de protecție, șoferul se expune la vapori toxici. Siguranța personală e prioritară!',
              de: '⚠️ Riskant! Ohne Schutzausrüstung ist der Fahrer giftigen Dämpfen ausgesetzt. Persönliche Sicherheit hat Priorität!',
              en: '⚠️ Risky! Without protection equipment, driver is exposed to toxic fumes. Personal safety is priority!'
            },
            nextScenarioId: 'containment'
          },
          {
            id: 'continue-driving',
            text: { ro: 'Încearcă să continue până la cea mai apropiată parcare', de: 'Versuchen Sie bis zum nächsten Parkplatz weiterzufahren', en: 'Try to continue to nearest parking' },
            points: -20,
            feedback: {
              ro: '❌ INTERZIS! Continuarea cu scurgere activă încalcă ADR și pune în pericol viețile. Amendă: 10.000-50.000€ + răspundere penală.',
              de: '❌ VERBOTEN! Weiterfahren mit aktivem Leck verstößt gegen ADR und gefährdet Leben. Bußgeld: 10.000-50.000€ + strafrechtliche Haftung.',
              en: '❌ FORBIDDEN! Continuing with active leak violates ADR and endangers lives. Fine: 10,000-50,000€ + criminal liability.'
            },
            nextScenarioId: 'crisis-adr'
          }
        ]
      },
      {
        id: 'containment',
        title: { ro: 'Izolare și Containment', de: 'Isolierung und Eindämmung', en: 'Isolation and Containment' },
        description: { ro: 'Autoritățile sunt pe drum. Ce faci acum?', de: 'Behörden sind unterwegs. Was tun Sie jetzt?', en: 'Authorities are on the way. What do you do now?' },
        context: {
          ro: 'Scurgerea continuă la ~2L/min. Vânt slab dinspre nord. Șoferul are kit ADR cu materiale absorbante și echipament protecție.',
          de: 'Das Leck setzt sich mit ~2L/Min fort. Schwacher Wind aus Norden. Fahrer hat ADR-Kit mit Absorptionsmaterial und Schutzausrüstung.',
          en: 'Leak continues at ~2L/min. Light wind from north. Driver has ADR kit with absorbent materials and protection equipment.'
        },
        difficulty: 'hard',
        category: 'safety',
        choices: [
          {
            id: 'use-kit',
            text: { ro: 'Instruiește șoferul să folosească kit-ul ADR pentru containment', de: 'Fahrer anweisen, ADR-Kit zur Eindämmung zu verwenden', en: 'Instruct driver to use ADR kit for containment' },
            points: 25,
            feedback: {
              ro: '✅ Perfect! Cu echipament de protecție: mănuși chimice, ochelari, mască. Plasează materiale absorbante în jurul scurgerii.',
              de: '✅ Perfekt! Mit Schutzausrüstung: Chemikalienhandschuhe, Brille, Maske. Absorptionsmaterial um das Leck platzieren.',
              en: '✅ Perfect! With protection equipment: chemical gloves, goggles, mask. Place absorbent materials around the leak.'
            },
            nextScenarioId: 'notification'
          },
          {
            id: 'wait-authorities',
            text: { ro: 'Așteaptă autoritățile fără intervenție', de: 'Auf Behörden warten ohne Eingriff', en: 'Wait for authorities without intervention' },
            points: 10,
            feedback: {
              ro: '⚠️ Prudent dar pasiv. Scurgerea continuă poate contamina solul și infiltra apa freatică. Containment-ul primar e responsabilitatea transportatorului.',
              de: '⚠️ Vorsichtig aber passiv. Das anhaltende Leck kann Boden kontaminieren und Grundwasser erreichen. Primäreindämmung ist Transporteur-Verantwortung.',
              en: '⚠️ Cautious but passive. Ongoing leak can contaminate soil and reach groundwater. Primary containment is carrier responsibility.'
            },
            nextScenarioId: 'notification'
          }
        ]
      },
      {
        id: 'crisis-adr',
        title: { ro: 'Situație Critică', de: 'Kritische Situation', en: 'Critical Situation' },
        description: { ro: 'Decizia ta a dus la escaladare!', de: 'Ihre Entscheidung führte zur Eskalation!', en: 'Your decision led to escalation!' },
        context: {
          ro: 'Continuând drumul, scurgerea s-a extins. Pompierii și poliția au oprit traficul pe 10km. Media a ajuns la fața locului.',
          de: 'Durch die Weiterfahrt hat sich das Leck ausgebreitet. Feuerwehr und Polizei haben den Verkehr auf 10km gesperrt. Medien sind vor Ort.',
          en: 'By continuing, the leak spread. Fire and police blocked traffic for 10km. Media arrived at the scene.'
        },
        difficulty: 'hard',
        category: 'safety',
        choices: [
          {
            id: 'take-responsibility',
            text: { ro: 'Recunoaște greșeala și cooperează complet', de: 'Fehler eingestehen und voll kooperieren', en: 'Acknowledge mistake and cooperate fully' },
            points: 10,
            feedback: {
              ro: '✅ Cel mai bun răspuns la criză. Cooperarea poate reduce sancțiunile. Documentează totul pentru asigurare.',
              de: '✅ Beste Krisenreaktion. Kooperation kann Sanktionen reduzieren. Alles für die Versicherung dokumentieren.',
              en: '✅ Best crisis response. Cooperation can reduce sanctions. Document everything for insurance.'
            },
            isEndpoint: true
          },
          {
            id: 'blame-driver',
            text: { ro: 'Pune vina pe șofer pentru decizie', de: 'Fahrer für Entscheidung beschuldigen', en: 'Blame driver for the decision' },
            points: -10,
            feedback: {
              ro: '❌ Neprofesionist! Ca dispatcher, tu ai responsabilitatea deciziilor operaționale. Compania răspunde solidar.',
              de: '❌ Unprofessionell! Als Dispatcher haben Sie die Verantwortung für operative Entscheidungen. Unternehmen haftet solidarisch.',
              en: '❌ Unprofessional! As dispatcher, you have responsibility for operational decisions. Company is jointly liable.'
            },
            isEndpoint: true
          }
        ]
      },
      {
        id: 'notification',
        title: { ro: 'Notificări și Raportare', de: 'Benachrichtigungen und Berichterstattung', en: 'Notifications and Reporting' },
        description: { ro: 'Incidentul e sub control. Cine trebuie notificat?', de: 'Vorfall unter Kontrolle. Wer muss benachrichtigt werden?', en: 'Incident is under control. Who needs to be notified?' },
        context: {
          ro: 'Autoritățile au ajuns. Scurgerea totală: ~50L. Nu sunt victime. Trebuie să faci notificările.',
          de: 'Behörden sind eingetroffen. Gesamtleck: ~50L. Keine Opfer. Sie müssen die Benachrichtigungen machen.',
          en: 'Authorities arrived. Total leak: ~50L. No casualties. You need to make the notifications.'
        },
        difficulty: 'medium',
        category: 'safety',
        choices: [
          {
            id: 'full-notification',
            text: { ro: 'Client + Asigurare + Management + Agenția de Mediu', de: 'Kunde + Versicherung + Management + Umweltbehörde', en: 'Client + Insurance + Management + Environment Agency' },
            points: 25,
            feedback: {
              ro: '✅ Complet! Toate părțile relevante: clientul pentru marfa sa, asigurare pentru claim, management pentru decizie, agenția de mediu obligatoriu la scurgeri >10L.',
              de: '✅ Vollständig! Alle relevanten Parteien: Kunde für seine Ware, Versicherung für Schadensfall, Management für Entscheidung, Umweltbehörde obligatorisch bei Lecks >10L.',
              en: '✅ Complete! All relevant parties: client for their cargo, insurance for claim, management for decision, environment agency mandatory for leaks >10L.'
            },
            isEndpoint: true
          },
          {
            id: 'minimal-notification',
            text: { ro: 'Doar client și management', de: 'Nur Kunde und Management', en: 'Only client and management' },
            points: 5,
            feedback: {
              ro: '⚠️ Incomplet! Omiterea asigurării poate invalida polița. Neraportarea la agenția de mediu = amendă separată.',
              de: '⚠️ Unvollständig! Versicherung weglassen kann Police ungültig machen. Keine Meldung an Umweltbehörde = separate Strafe.',
              en: '⚠️ Incomplete! Omitting insurance can invalidate policy. Not reporting to environment agency = separate fine.'
            },
            isEndpoint: true
          }
        ]
      }
    ]
  },
  // ============ NEW SIMULATION: REEFER FAILURE ============
  {
    id: 'reefer-failure',
    title: {
      ro: 'Avarie Reefer în Tranzit',
      de: 'Kühlfahrzeug-Ausfall im Transit',
      en: 'Reefer Breakdown in Transit'
    },
    description: {
      ro: 'Sistemul de refrigerare s-a defectat cu marfă farmaceutică la bord.',
      de: 'Das Kühlsystem ist mit pharmazeutischer Fracht an Bord ausgefallen.',
      en: 'Refrigeration system failed with pharmaceutical cargo on board.'
    },
    category: 'operations',
    difficulty: 'hard',
    estimatedTime: 10,
    maxScore: 100,
    icon: '❄️',
    scenarios: [
      {
        id: 'start',
        title: { ro: 'Alertă Temperatură', de: 'Temperaturalarm', en: 'Temperature Alert' },
        description: { ro: 'Sistemul de monitorizare a trimis alertă!', de: 'Das Überwachungssystem hat einen Alarm gesendet!', en: 'Monitoring system sent an alert!' },
        context: {
          ro: 'Transport vaccin COVID-19 (2-8°C requis). Temperatura actuală: 12°C și crește. Locație: Ungaria, 300km de destinație. Ora: 02:00 noaptea.',
          de: 'COVID-19-Impfstofftransport (2-8°C erforderlich). Aktuelle Temperatur: 12°C und steigend. Standort: Ungarn, 300km vom Ziel. Zeit: 02:00 Uhr nachts.',
          en: 'COVID-19 vaccine transport (2-8°C required). Current temperature: 12°C and rising. Location: Hungary, 300km from destination. Time: 2:00 AM.'
        },
        difficulty: 'hard',
        category: 'operations',
        timeLimit: 30,
        choices: [
          {
            id: 'emergency-cold-chain',
            text: { ro: 'Activează protocolul de urgență cold chain', de: 'Notfall-Kühlketten-Protokoll aktivieren', en: 'Activate emergency cold chain protocol' },
            points: 25,
            feedback: {
              ro: '✅ Esențial! Vaccinurile au strict 2-8°C. Peste 15°C = marfă compromisă definitiv. Fiecare minut contează.',
              de: '✅ Wesentlich! Impfstoffe erfordern strikt 2-8°C. Über 15°C = Ware definitiv kompromittiert. Jede Minute zählt.',
              en: '✅ Essential! Vaccines require strict 2-8°C. Above 15°C = cargo definitely compromised. Every minute counts.'
            },
            nextScenarioId: 'locate-solution'
          },
          {
            id: 'call-driver',
            text: { ro: 'Sună șoferul să verifice agregatul', de: 'Fahrer anrufen, um Aggregat zu prüfen', en: 'Call driver to check the unit' },
            points: 15,
            feedback: {
              ro: '⚠️ OK dar pierde timp. Protocolul de urgență include verificarea tehnică. Acționează paralel, nu secvențial.',
              de: '⚠️ OK aber verliert Zeit. Das Notfallprotokoll umfasst technische Prüfung. Parallel handeln, nicht sequentiell.',
              en: '⚠️ OK but loses time. Emergency protocol includes technical check. Act in parallel, not sequentially.'
            },
            nextScenarioId: 'locate-solution'
          },
          {
            id: 'continue-hope',
            text: { ro: 'Continuă și speră că se stabilizează', de: 'Weitermachen und hoffen, dass es sich stabilisiert', en: 'Continue and hope it stabilizes' },
            points: -15,
            feedback: {
              ro: '❌ CATASTROFAL! Marfă de 500.000€+ pierdută. Vaccinuri pentru 50.000 persoane compromise. Răspundere: milioane €.',
              de: '❌ KATASTROPHAL! Ware über 500.000€ verloren. Impfstoffe für 50.000 Personen kompromittiert. Haftung: Millionen €.',
              en: '❌ CATASTROPHIC! Cargo worth 500,000€+ lost. Vaccines for 50,000 people compromised. Liability: millions €.'
            },
            nextScenarioId: 'crisis-reefer'
          }
        ]
      },
      {
        id: 'locate-solution',
        title: { ro: 'Găsește Soluția', de: 'Lösung finden', en: 'Find Solution' },
        description: { ro: 'Temperatura: 14°C. Timp rămas: ~20 minute.', de: 'Temperatur: 14°C. Verbleibende Zeit: ~20 Minuten.', en: 'Temperature: 14°C. Time remaining: ~20 minutes.' },
        context: {
          ro: 'Opțiuni: A) Depozit frigorific în Győr (25km). B) Service Carrier Transics (40km, 24h). C) Camion de schimb din flota proprie (2h distanță).',
          de: 'Optionen: A) Kühllager in Győr (25km). B) Carrier Transics Service (40km, 24h). C) Ersatzwagen aus eigener Flotte (2h Entfernung).',
          en: 'Options: A) Cold storage in Győr (25km). B) Carrier Transics service (40km, 24h). C) Replacement truck from own fleet (2h away).'
        },
        difficulty: 'hard',
        category: 'operations',
        choices: [
          {
            id: 'cold-storage',
            text: { ro: 'Depozit frigorific Győr - cel mai rapid', de: 'Kühllager Győr - am schnellsten', en: 'Cold storage Győr - fastest' },
            points: 25,
            feedback: {
              ro: '✅ Decizie optimă! 25km = 30 min. Marfa e stabilizată la 4°C, apoi reorganizezi transportul. Prioritate: salvează marfa!',
              de: '✅ Optimale Entscheidung! 25km = 30 Min. Ware wird bei 4°C stabilisiert, dann Transport reorganisieren. Priorität: Ware retten!',
              en: '✅ Optimal decision! 25km = 30 min. Cargo is stabilized at 4°C, then reorganize transport. Priority: save the cargo!'
            },
            nextScenarioId: 'documentation-reefer'
          },
          {
            id: 'repair-service',
            text: { ro: 'Service Transics - repară agregatul', de: 'Transics Service - Aggregat reparieren', en: 'Transics service - repair the unit' },
            points: 10,
            feedback: {
              ro: '⚠️ Risc! 40km + timp reparație = marfa depășește 15°C. Pentru farmaceutice, depozitul sigur e prioritar.',
              de: '⚠️ Risiko! 40km + Reparaturzeit = Ware übersteigt 15°C. Für Pharmazeutika hat sicheres Lager Priorität.',
              en: '⚠️ Risk! 40km + repair time = cargo exceeds 15°C. For pharmaceuticals, safe storage is priority.'
            },
            nextScenarioId: 'documentation-reefer'
          },
          {
            id: 'wait-replacement',
            text: { ro: 'Așteaptă camionul de schimb - 2 ore', de: 'Auf Ersatzwagen warten - 2 Stunden', en: 'Wait for replacement truck - 2 hours' },
            points: -10,
            feedback: {
              ro: '❌ Prea lent! În 2 ore, temperatura ajunge la 20°C+. Marfă pierdută. Întotdeauna alege soluția CEA MAI RAPIDĂ pentru cold chain.',
              de: '❌ Zu langsam! In 2 Stunden erreicht Temperatur 20°C+. Ware verloren. Wählen Sie immer die SCHNELLSTE Lösung für Kühlkette.',
              en: '❌ Too slow! In 2 hours, temperature reaches 20°C+. Cargo lost. Always choose the FASTEST solution for cold chain.'
            },
            nextScenarioId: 'documentation-reefer'
          }
        ]
      },
      {
        id: 'crisis-reefer',
        title: { ro: 'Marfă Compromisă', de: 'Kompromittierte Ware', en: 'Compromised Cargo' },
        description: { ro: 'Temperatura a depășit 15°C. Vaccinurile sunt pierdute.', de: 'Temperatur überstieg 15°C. Impfstoffe sind verloren.', en: 'Temperature exceeded 15°C. Vaccines are lost.' },
        context: { ro: 'Valoare pierdere: 500.000€. Client: Ministerul Sănătății. 50.000 doze compromisă.', de: 'Verlustwert: 500.000€. Kunde: Gesundheitsministerium. 50.000 Dosen kompromittiert.', en: 'Loss value: 500,000€. Client: Ministry of Health. 50,000 doses compromised.' },
        difficulty: 'hard',
        category: 'operations',
        choices: [
          {
            id: 'immediate-disclosure',
            text: { ro: 'Notificare imediată client + asigurare', de: 'Sofortige Benachrichtigung Kunde + Versicherung', en: 'Immediate notification client + insurance' },
            points: 10,
            feedback: {
              ro: '✅ Singura opțiune corectă în criză. Transparența poate salva relația comercială pe termen lung.',
              de: '✅ Einzige richtige Option in der Krise. Transparenz kann langfristige Geschäftsbeziehung retten.',
              en: '✅ Only correct option in crisis. Transparency can save long-term business relationship.'
            },
            isEndpoint: true
          },
          {
            id: 'hide-problem',
            text: { ro: 'Livrează și speră să nu se observe', de: 'Liefern und hoffen, dass es nicht bemerkt wird', en: 'Deliver and hope it goes unnoticed' },
            points: -25,
            feedback: {
              ro: '❌ INFRACȚIUNE! Livrarea de medicamente compromise = răspundere penală. Dacă cineva e vaccinat cu vaccin inactiv = consecințe fatale.',
              de: '❌ STRAFTAT! Lieferung kompromittierter Medikamente = strafrechtliche Haftung. Wenn jemand mit inaktivem Impfstoff geimpft wird = tödliche Folgen.',
              en: '❌ CRIME! Delivering compromised medication = criminal liability. If someone is vaccinated with inactive vaccine = fatal consequences.'
            },
            isEndpoint: true
          }
        ]
      },
      {
        id: 'documentation-reefer',
        title: { ro: 'Documentație și Claim', de: 'Dokumentation und Anspruch', en: 'Documentation and Claim' },
        description: { ro: 'Marfa e salvată. Ce documente pregătești?', de: 'Ware ist gerettet. Welche Dokumente bereiten Sie vor?', en: 'Cargo is saved. What documents do you prepare?' },
        context: { ro: 'Pentru claim la asigurare și raport către client.', de: 'Für Versicherungsanspruch und Kundenbericht.', en: 'For insurance claim and client report.' },
        difficulty: 'medium',
        category: 'operations',
        choices: [
          {
            id: 'full-documentation',
            text: { ro: 'Log temperatură + Raport incident + Facturi depozit + Photos', de: 'Temperaturlog + Vorfallbericht + Lagerrechnungen + Fotos', en: 'Temperature log + Incident report + Storage invoices + Photos' },
            points: 20,
            feedback: {
              ro: '✅ Dosarul complet pentru claim: dovada temperaturii, acțiunile luate, costurile suportate. Asigurarea acoperă cheltuielile suplimentare.',
              de: '✅ Vollständige Akte für Anspruch: Temperaturnachweis, ergriffene Maßnahmen, angefallene Kosten. Versicherung deckt Zusatzkosten.',
              en: '✅ Complete file for claim: temperature proof, actions taken, costs incurred. Insurance covers additional expenses.'
            },
            isEndpoint: true
          },
          {
            id: 'minimal-docs',
            text: { ro: 'Doar raportul de incident', de: 'Nur Vorfallbericht', en: 'Only incident report' },
            points: 5,
            feedback: {
              ro: '⚠️ Insuficient pentru claim! Fără log temperatură și dovezi, asigurarea poate refuza plata.',
              de: '⚠️ Unzureichend für Anspruch! Ohne Temperaturlog und Nachweise kann Versicherung Zahlung verweigern.',
              en: '⚠️ Insufficient for claim! Without temperature log and proof, insurance may refuse payment.'
            },
            isEndpoint: true
          }
        ]
      }
    ]
  },
  // ============ NEW SIMULATION: CUSTOMS REJECTION ============
  {
    id: 'customs-rejection',
    title: {
      ro: 'Refuz Vamal la Frontieră',
      de: 'Zollablehnung an der Grenze',
      en: 'Customs Rejection at Border'
    },
    description: {
      ro: 'Marfa a fost respinsă la vamă. Gestionează situația!',
      de: 'Ware wurde am Zoll abgelehnt. Bewältigen Sie die Situation!',
      en: 'Cargo was rejected at customs. Handle the situation!'
    },
    category: 'documentation',
    difficulty: 'medium',
    estimatedTime: 12,
    maxScore: 100,
    icon: '🛂',
    scenarios: [
      {
        id: 'start',
        title: { ro: 'Blocaj la Nădlac', de: 'Blockade bei Nădlac', en: 'Blockade at Nădlac' },
        description: { ro: 'Șoferul raportează problemă la vamă.', de: 'Fahrer meldet Problem am Zoll.', en: 'Driver reports problem at customs.' },
        context: {
          ro: 'Export textile din România în Germania. Valoare: 45.000€. Problema: certificatul EUR.1 lipsește, iar vama cere dovada originii UE.',
          de: 'Textilexport aus Rumänien nach Deutschland. Wert: 45.000€. Problem: EUR.1-Zertifikat fehlt, Zoll verlangt EU-Ursprungsnachweis.',
          en: 'Textile export from Romania to Germany. Value: 45,000€. Problem: EUR.1 certificate missing, customs requires EU origin proof.'
        },
        difficulty: 'medium',
        category: 'documentation',
        choices: [
          {
            id: 'contact-shipper',
            text: { ro: 'Contactează expeditorul pentru EUR.1 original', de: 'Absender für EUR.1-Original kontaktieren', en: 'Contact shipper for original EUR.1' },
            points: 20,
            feedback: {
              ro: '✅ Prima opțiune corectă! EUR.1 poate fi emis post-factum de vamă în 24h. Cere scan urgent + original prin curier.',
              de: '✅ Erste richtige Option! EUR.1 kann nachträglich vom Zoll in 24h ausgestellt werden. Dringenden Scan + Original per Kurier anfordern.',
              en: '✅ First correct option! EUR.1 can be issued post-factum by customs in 24h. Request urgent scan + original via courier.'
            },
            nextScenarioId: 'waiting-solution'
          },
          {
            id: 'negotiate-customs',
            text: { ro: 'Negociază cu vama pentru eliberare condiționată', de: 'Mit Zoll über bedingte Freigabe verhandeln', en: 'Negotiate with customs for conditional release' },
            points: 15,
            feedback: {
              ro: '⚠️ Posibil dar rar! Vama poate cere garanție bancară egală cu taxele (4-12% din valoare). Costisitor și lent.',
              de: '⚠️ Möglich aber selten! Zoll kann Bankgarantie in Höhe der Abgaben (4-12% vom Wert) verlangen. Teuer und langsam.',
              en: '⚠️ Possible but rare! Customs may require bank guarantee equal to duties (4-12% of value). Expensive and slow.'
            },
            nextScenarioId: 'waiting-solution'
          },
          {
            id: 'return-cargo',
            text: { ro: 'Returnează marfa în România', de: 'Ware nach Rumänien zurücksenden', en: 'Return cargo to Romania' },
            points: -5,
            feedback: {
              ro: '❌ Soluție extremă și costisitoare! Costuri retur + pierdere client + reputație. Încearcă mai întâi să rezolvi documentația.',
              de: '❌ Extreme und teure Lösung! Rücksendekosten + Kundenverlust + Reputation. Versuchen Sie zuerst, die Dokumentation zu lösen.',
              en: '❌ Extreme and expensive solution! Return costs + client loss + reputation. Try to solve documentation first.'
            },
            nextScenarioId: 'waiting-solution'
          }
        ]
      },
      {
        id: 'waiting-solution',
        title: { ro: 'Soluție în Așteptare', de: 'Lösung Ausstehend', en: 'Solution Pending' },
        description: { ro: 'Expeditorul trimite EUR.1 în 24h. Ce faci cu camionul?', de: 'Absender sendet EUR.1 in 24h. Was machen Sie mit dem LKW?', en: 'Shipper sends EUR.1 in 24h. What do you do with the truck?' },
        context: { ro: 'Șoferul are 5h de odihnă rămasă. Costul staționării: 150€/zi. Clientul așteaptă livrarea.', de: 'Fahrer hat noch 5h Ruhezeit. Standkosten: 150€/Tag. Kunde wartet auf Lieferung.', en: 'Driver has 5h rest left. Standby cost: 150€/day. Client is waiting for delivery.' },
        difficulty: 'medium',
        category: 'documentation',
        choices: [
          {
            id: 'driver-rest',
            text: { ro: 'Șoferul face pauza obligatorie, așteptăm EUR.1', de: 'Fahrer macht obligatorische Pause, wir warten auf EUR.1', en: 'Driver takes mandatory break, we wait for EUR.1' },
            points: 20,
            feedback: {
              ro: '✅ Eficient! Pauza obligatorie + așteptare document = zero timp pierdut suplimentar. Informează clientul despre noua ETA.',
              de: '✅ Effizient! Obligatorische Pause + Dokumentwartung = kein zusätzlicher Zeitverlust. Kunden über neue ETA informieren.',
              en: '✅ Efficient! Mandatory break + document wait = zero extra time lost. Inform client about new ETA.'
            },
            nextScenarioId: 'client-communication'
          },
          {
            id: 'park-nearby',
            text: { ro: 'Parcează la parcare TIR și schimbă șoferul', de: 'Auf LKW-Parkplatz parken und Fahrer wechseln', en: 'Park at truck stop and change driver' },
            points: 10,
            feedback: {
              ro: '⚠️ Costuri suplimentare! Schimbul de șofer costă 200-300€+ și e complicat logistic. Pentru 24h întârziere, nu merită.',
              de: '⚠️ Zusätzliche Kosten! Fahrerwechsel kostet 200-300€+ und ist logistisch kompliziert. Für 24h Verzögerung lohnt es sich nicht.',
              en: '⚠️ Extra costs! Driver change costs 200-300€+ and is logistically complicated. For 24h delay, not worth it.'
            },
            nextScenarioId: 'client-communication'
          }
        ]
      },
      {
        id: 'client-communication',
        title: { ro: 'Comunicare cu Clientul', de: 'Kundenkommunikation', en: 'Client Communication' },
        description: { ro: 'Cum informezi clientul despre întârziere?', de: 'Wie informieren Sie den Kunden über die Verzögerung?', en: 'How do you inform the client about the delay?' },
        context: { ro: 'Clientul German e un client important, comenzi regulate de 100.000€/lună.', de: 'Der deutsche Kunde ist ein wichtiger Kunde mit regelmäßigen Bestellungen von 100.000€/Monat.', en: 'The German client is an important customer with regular orders of 100,000€/month.' },
        difficulty: 'medium',
        category: 'documentation',
        choices: [
          {
            id: 'proactive-call',
            text: { ro: 'Apel telefonic imediat + email confirmare cu noua ETA', de: 'Sofortiger Telefonanruf + Bestätigungs-E-Mail mit neuer ETA', en: 'Immediate phone call + confirmation email with new ETA' },
            points: 25,
            feedback: {
              ro: '✅ Profesionist! Apelul arată urgență și respect. Email-ul documentează. Oferă discount 5% ca gest de bună-credință.',
              de: '✅ Professionell! Der Anruf zeigt Dringlichkeit und Respekt. E-Mail dokumentiert. Bieten Sie 5% Rabatt als Geste des guten Willens.',
              en: '✅ Professional! The call shows urgency and respect. Email documents. Offer 5% discount as a gesture of goodwill.'
            },
            isEndpoint: true
          },
          {
            id: 'email-only',
            text: { ro: 'Email formal cu explicație și scuze', de: 'Formelle E-Mail mit Erklärung und Entschuldigung', en: 'Formal email with explanation and apology' },
            points: 10,
            feedback: {
              ro: '⚠️ Acceptabil dar impersonal. Pentru clienți VIP, apelul telefonic e esențial. Email-ul singur poate părea rece.',
              de: '⚠️ Akzeptabel aber unpersönlich. Für VIP-Kunden ist der Telefonanruf wesentlich. Nur E-Mail kann kalt wirken.',
              en: '⚠️ Acceptable but impersonal. For VIP clients, phone call is essential. Email alone may seem cold.'
            },
            isEndpoint: true
          },
          {
            id: 'wait-resolution',
            text: { ro: 'Așteaptă rezolvarea, apoi informează', de: 'Auf Lösung warten, dann informieren', en: 'Wait for resolution, then inform' },
            points: -10,
            feedback: {
              ro: '❌ Greșeală mare! Clientul află de întârziere când marfa nu ajunge. Pierdere încredere = pierdere cont.',
              de: '❌ Großer Fehler! Der Kunde erfährt von der Verzögerung, wenn die Ware nicht ankommt. Vertrauensverlust = Kontoverlust.',
              en: '❌ Big mistake! Client finds out about delay when cargo doesn\'t arrive. Loss of trust = account loss.'
            },
            isEndpoint: true
          }
        ]
      }
    ]
  },
  // ============ NEW SIMULATION: PAYMENT DISPUTE ============
  {
    id: 'payment-dispute',
    title: {
      ro: 'Dispută de Plată cu Clientul',
      de: 'Zahlungsstreit mit dem Kunden',
      en: 'Payment Dispute with Client'
    },
    description: {
      ro: 'Un client refuză să plătească invocând probleme la livrare.',
      de: 'Ein Kunde verweigert die Zahlung unter Berufung auf Lieferprobleme.',
      en: 'A client refuses to pay citing delivery issues.'
    },
    category: 'commercial',
    difficulty: 'medium',
    estimatedTime: 10,
    maxScore: 100,
    icon: '💶',
    scenarios: [
      {
        id: 'start',
        title: { ro: 'Factură Neplătită', de: 'Unbezahlte Rechnung', en: 'Unpaid Invoice' },
        description: { ro: 'Clientul refuză plata facturii de 8.500€.', de: 'Der Kunde verweigert die Zahlung der Rechnung über 8.500€.', en: 'Client refuses to pay the 8,500€ invoice.' },
        context: {
          ro: 'Motivul invocat: "Marfa a ajuns cu 6 ore întârziere și avem penalități de la clientul nostru." POD semnat fără rezerve. Factura e la 45 zile scadență.',
          de: 'Angegebener Grund: "Ware kam 6 Stunden verspätet und wir haben Strafen von unserem Kunden." POD ohne Vorbehalte unterschrieben. Rechnung hat 45 Tage Fälligkeit.',
          en: 'Stated reason: "Cargo arrived 6 hours late and we have penalties from our client." POD signed without reservations. Invoice is at 45 days due.'
        },
        difficulty: 'medium',
        category: 'commercial',
        choices: [
          {
            id: 'review-documentation',
            text: { ro: 'Revizuiește documentația: CMR, tracking, comunicări', de: 'Dokumentation prüfen: CMR, Tracking, Kommunikation', en: 'Review documentation: CMR, tracking, communications' },
            points: 20,
            feedback: {
              ro: '✅ Prima acțiune corectă! Verifică: a fost notificată întârzierea? POD fără rezerve = acceptare condiție. Tracking-ul confirmă ora reală.',
              de: '✅ Erste richtige Aktion! Prüfen: Wurde Verspätung gemeldet? POD ohne Vorbehalte = Zustandsakzeptanz. Tracking bestätigt tatsächliche Zeit.',
              en: '✅ First correct action! Check: was delay notified? POD without reservations = condition acceptance. Tracking confirms actual time.'
            },
            nextScenarioId: 'negotiation'
          },
          {
            id: 'accept-reduction',
            text: { ro: 'Acceptă reducere pentru a păstra clientul', de: 'Rabatt akzeptieren, um Kunden zu behalten', en: 'Accept reduction to keep the client' },
            points: 0,
            feedback: {
              ro: '⚠️ Prematur! Fără analiză, nu știi dacă claim-ul e valid. Acceptarea fără verificare = precedent periculos.',
              de: '⚠️ Voreilig! Ohne Analyse wissen Sie nicht, ob der Anspruch gültig ist. Akzeptanz ohne Prüfung = gefährlicher Präzedenzfall.',
              en: '⚠️ Premature! Without analysis, you don\'t know if claim is valid. Acceptance without verification = dangerous precedent.'
            },
            nextScenarioId: 'negotiation'
          },
          {
            id: 'threaten-legal',
            text: { ro: 'Amenință cu acțiune legală imediat', de: 'Sofort mit rechtlichen Schritten drohen', en: 'Threaten legal action immediately' },
            points: -5,
            feedback: {
              ro: '❌ Agresiv și contraproductiv! Pierzi relația comercială definitiv. Negocierea e întotdeauna primul pas.',
              de: '❌ Aggressiv und kontraproduktiv! Sie verlieren die Geschäftsbeziehung endgültig. Verhandlung ist immer der erste Schritt.',
              en: '❌ Aggressive and counterproductive! You lose the business relationship permanently. Negotiation is always the first step.'
            },
            nextScenarioId: 'negotiation'
          }
        ]
      },
      {
        id: 'negotiation',
        title: { ro: 'Negocierea Soluției', de: 'Lösungsverhandlung', en: 'Solution Negotiation' },
        description: { ro: 'Documentația arată că ai notificat întârzierea cu 2h înainte.', de: 'Dokumentation zeigt, dass Sie die Verspätung 2h vorher gemeldet haben.', en: 'Documentation shows you notified the delay 2h before.' },
        context: { ro: 'Email-ul de notificare există, clientul l-a confirmat. POD semnat la 23:00 în loc de 17:00. Juridic, ai dovada bunei-credințe.', de: 'Benachrichtigungs-E-Mail existiert, Kunde hat sie bestätigt. POD um 23:00 statt 17:00 unterschrieben. Rechtlich haben Sie Nachweis des guten Glaubens.', en: 'Notification email exists, client confirmed it. POD signed at 23:00 instead of 17:00. Legally, you have proof of good faith.' },
        difficulty: 'medium',
        category: 'commercial',
        choices: [
          {
            id: 'propose-compromise',
            text: { ro: 'Propune compromis: 5% reducere + prioritate viitoare', de: 'Kompromiss vorschlagen: 5% Rabatt + zukünftige Priorität', en: 'Propose compromise: 5% discount + future priority' },
            points: 25,
            feedback: {
              ro: '✅ Diplomație comercială! Reducerea de 425€ e mai mică decât costul unui client pierdut. Prioritatea viitoare fidelizează.',
              de: '✅ Geschäftsdiplomatie! Der Rabatt von 425€ ist weniger als die Kosten eines verlorenen Kunden. Zukünftige Priorität bindet.',
              en: '✅ Business diplomacy! The 425€ discount is less than the cost of a lost client. Future priority builds loyalty.'
            },
            nextScenarioId: 'resolution'
          },
          {
            id: 'stand-firm',
            text: { ro: 'Menține poziția: plată integrală sau somație', de: 'Position halten: Vollzahlung oder Mahnung', en: 'Stand firm: full payment or notice' },
            points: 10,
            feedback: {
              ro: '⚠️ Riscant comercial! Ai dreptate juridic, dar pierzi un client de 100.000€/an pentru 8.500€. Calculează costul oportunității.',
              de: '⚠️ Geschäftlich riskant! Sie haben rechtlich Recht, aber verlieren einen Kunden mit 100.000€/Jahr für 8.500€. Berechnen Sie Opportunitätskosten.',
              en: '⚠️ Commercially risky! You\'re legally right, but losing a 100,000€/year client for 8,500€. Calculate opportunity cost.'
            },
            nextScenarioId: 'resolution'
          }
        ]
      },
      {
        id: 'resolution',
        title: { ro: 'Închiderea Disputei', de: 'Streitbeilegung', en: 'Dispute Resolution' },
        description: { ro: 'Clientul a acceptat compromisul. Cum finalizezi?', de: 'Der Kunde hat den Kompromiss akzeptiert. Wie schließen Sie ab?', en: 'Client accepted the compromise. How do you finalize?' },
        context: { ro: 'Plata va veni în 15 zile. Trebuie să documentezi acordul.', de: 'Zahlung kommt in 15 Tagen. Sie müssen die Vereinbarung dokumentieren.', en: 'Payment will come in 15 days. You need to document the agreement.' },
        difficulty: 'easy',
        category: 'commercial',
        choices: [
          {
            id: 'formal-agreement',
            text: { ro: 'Email formal cu termenii + confirmare scrisă de la client', de: 'Formelle E-Mail mit Bedingungen + schriftliche Kundenbestätigung', en: 'Formal email with terms + written confirmation from client' },
            points: 20,
            feedback: {
              ro: '✅ Documentație completă! Email = dovadă juridică. Include: suma finală, data plății, condițiile viitoare.',
              de: '✅ Vollständige Dokumentation! E-Mail = rechtlicher Nachweis. Enthält: Endsumme, Zahlungsdatum, zukünftige Bedingungen.',
              en: '✅ Complete documentation! Email = legal proof. Include: final amount, payment date, future conditions.'
            },
            isEndpoint: true
          },
          {
            id: 'verbal-agreement',
            text: { ro: 'Acord verbal la telefon e suficient', de: 'Mündliche Vereinbarung am Telefon reicht', en: 'Verbal agreement on phone is enough' },
            points: 0,
            feedback: {
              ro: '⚠️ Riscant! Fără dovadă scrisă, clientul poate contesta. "Verba volant, scripta manent."',
              de: '⚠️ Riskant! Ohne schriftlichen Nachweis kann der Kunde anfechten. "Verba volant, scripta manent."',
              en: '⚠️ Risky! Without written proof, client can dispute. "Verba volant, scripta manent."'
            },
            isEndpoint: true
          }
        ]
      }
    ]
  },
  // ============ NEW SIMULATION: DRIVER EMERGENCY ============
  {
    id: 'driver-emergency',
    title: {
      ro: 'Urgență Medicală Șofer',
      de: 'Medizinischer Notfall Fahrer',
      en: 'Driver Medical Emergency'
    },
    description: {
      ro: 'Șoferul are o urgență medicală în timpul transportului.',
      de: 'Der Fahrer hat einen medizinischen Notfall während des Transports.',
      en: 'Driver has a medical emergency during transport.'
    },
    category: 'safety',
    difficulty: 'hard',
    estimatedTime: 8,
    maxScore: 100,
    icon: '🚑',
    scenarios: [
      {
        id: 'start',
        title: { ro: 'Apel de Urgență', de: 'Notruf', en: 'Emergency Call' },
        description: { ro: 'Primești un apel confuz de la șofer.', de: 'Sie erhalten einen verwirrten Anruf vom Fahrer.', en: 'You receive a confused call from the driver.' },
        context: {
          ro: 'Șoferul Mihai, 52 ani, raportează dureri în piept și amețeli. E pe A3 Ungaria, 100km de Budapesta. Marfă: piese auto pentru Audi, valoare 65.000€.',
          de: 'Fahrer Mihai, 52 Jahre, meldet Brustschmerzen und Schwindel. Er ist auf der A3 Ungarn, 100km von Budapest. Fracht: Autoteile für Audi, Wert 65.000€.',
          en: 'Driver Mihai, 52, reports chest pain and dizziness. He\'s on A3 Hungary, 100km from Budapest. Cargo: auto parts for Audi, value 65,000€.'
        },
        difficulty: 'hard',
        category: 'safety',
        timeLimit: 30,
        choices: [
          {
            id: 'call-emergency',
            text: { ro: 'Sună 112 imediat și cere ambulanță', de: 'Sofort 112 anrufen und Krankenwagen anfordern', en: 'Call 112 immediately and request ambulance' },
            points: 30,
            feedback: {
              ro: '✅ CORECT! Viața omului e prioritatea #1. Marfa poate aștepta, Mihai nu. 112 în Ungaria: +36 112.',
              de: '✅ RICHTIG! Das Leben des Menschen hat Priorität #1. Die Fracht kann warten, Mihai nicht. 112 in Ungarn: +36 112.',
              en: '✅ CORRECT! Human life is priority #1. Cargo can wait, Mihai cannot. 112 in Hungary: +36 112.'
            },
            nextScenarioId: 'coordinate-rescue'
          },
          {
            id: 'ask-symptoms',
            text: { ro: 'Întreabă mai multe detalii despre simptome', de: 'Nach mehr Details zu Symptomen fragen', en: 'Ask for more details about symptoms' },
            points: 5,
            feedback: {
              ro: '⚠️ Pierdere timp critic! Dureri în piept + amețeli = posibil infarct. Nu ești medic, lasă profesioniștii să evalueze.',
              de: '⚠️ Kritischer Zeitverlust! Brustschmerzen + Schwindel = möglicher Herzinfarkt. Sie sind kein Arzt, lassen Sie Profis beurteilen.',
              en: '⚠️ Critical time loss! Chest pain + dizziness = possible heart attack. You\'re not a doctor, let professionals evaluate.'
            },
            nextScenarioId: 'coordinate-rescue'
          },
          {
            id: 'continue-driving',
            text: { ro: 'Cere-i să oprească și să se odihnească', de: 'Bitten Sie ihn anzuhalten und sich auszuruhen', en: 'Ask him to stop and rest' },
            points: -15,
            feedback: {
              ro: '❌ PERICULOS! Dacă e infarct, odihna nu ajută. Fără asistență medicală, risc vital. Responsabilitate civilă și penală.',
              de: '❌ GEFÄHRLICH! Bei Herzinfarkt hilft Ruhe nicht. Ohne medizinische Hilfe lebensbedrohlich. Zivil- und strafrechtliche Haftung.',
              en: '❌ DANGEROUS! If it\'s a heart attack, rest won\'t help. Without medical assistance, life-threatening. Civil and criminal liability.'
            },
            nextScenarioId: 'coordinate-rescue'
          }
        ]
      },
      {
        id: 'coordinate-rescue',
        title: { ro: 'Coordonare Salvare', de: 'Rettungskoordination', en: 'Rescue Coordination' },
        description: { ro: 'Ambulanța e pe drum. Ce faci pentru marfă?', de: 'Krankenwagen ist unterwegs. Was machen Sie für die Fracht?', en: 'Ambulance is on the way. What do you do for the cargo?' },
        context: {
          ro: 'Mihai e conștient. Camionul e parcat pe banda de urgență. Cheia e la Mihai. Livrarea era programată mâine 08:00.',
          de: 'Mihai ist bei Bewusstsein. LKW ist auf dem Standstreifen geparkt. Schlüssel ist bei Mihai. Lieferung war morgen 08:00 geplant.',
          en: 'Mihai is conscious. Truck is parked on emergency lane. Key is with Mihai. Delivery was scheduled tomorrow 08:00.'
        },
        difficulty: 'hard',
        category: 'safety',
        choices: [
          {
            id: 'arrange-replacement',
            text: { ro: 'Organizează șofer de schimb din rețea + informează clientul', de: 'Ersatzfahrer aus Netzwerk organisieren + Kunden informieren', en: 'Arrange replacement driver from network + inform client' },
            points: 25,
            feedback: {
              ro: '✅ Gândire completă! Prioritizezi: 1) Sănătatea lui Mihai, 2) Securitatea mărfii, 3) Comunicarea cu clientul.',
              de: '✅ Vollständiges Denken! Priorisieren: 1) Mihais Gesundheit, 2) Frachtsicherheit, 3) Kundenkommunikation.',
              en: '✅ Complete thinking! Prioritize: 1) Mihai\'s health, 2) Cargo security, 3) Client communication.'
            },
            nextScenarioId: 'follow-up'
          },
          {
            id: 'wait-diagnosis',
            text: { ro: 'Așteaptă diagnosticul înainte de orice decizie', de: 'Auf Diagnose warten vor jeder Entscheidung', en: 'Wait for diagnosis before any decision' },
            points: 10,
            feedback: {
              ro: '⚠️ Pasiv! Diagnosticul poate dura ore. Între timp, camionul e nesecurizat pe autostradă și clientul nu știe nimic.',
              de: '⚠️ Passiv! Diagnose kann Stunden dauern. Inzwischen ist der LKW ungesichert auf der Autobahn und der Kunde weiß nichts.',
              en: '⚠️ Passive! Diagnosis can take hours. Meanwhile, truck is unsecured on highway and client knows nothing.'
            },
            nextScenarioId: 'follow-up'
          }
        ]
      },
      {
        id: 'follow-up',
        title: { ro: 'Urmărire și Documentare', de: 'Nachverfolgung und Dokumentation', en: 'Follow-up and Documentation' },
        description: { ro: 'Mihai e stabil. Ce acțiuni post-incident?', de: 'Mihai ist stabil. Welche Maßnahmen nach dem Vorfall?', en: 'Mihai is stable. What post-incident actions?' },
        context: { ro: 'Diagnostic: criză de hipertensiune, nu infarct. Mihai va fi ok dar nu poate conduce 48h.', de: 'Diagnose: Bluthochdruckkrise, kein Herzinfarkt. Mihai wird ok sein, kann aber 48h nicht fahren.', en: 'Diagnosis: hypertension crisis, not heart attack. Mihai will be ok but cannot drive for 48h.' },
        difficulty: 'medium',
        category: 'safety',
        choices: [
          {
            id: 'complete-protocol',
            text: { ro: 'Raport incident + Contact familie + Asigură cazare Mihai + Informare HR', de: 'Vorfallbericht + Familienkontakt + Unterkunft für Mihai sichern + HR informieren', en: 'Incident report + Contact family + Secure accommodation for Mihai + Inform HR' },
            points: 25,
            feedback: {
              ro: '✅ Protocol complet! Grija pentru șofer = loialitate pe termen lung. Documentarea protejează compania legal.',
              de: '✅ Vollständiges Protokoll! Fürsorge für Fahrer = langfristige Loyalität. Dokumentation schützt Unternehmen rechtlich.',
              en: '✅ Complete protocol! Care for driver = long-term loyalty. Documentation protects company legally.'
            },
            isEndpoint: true
          },
          {
            id: 'focus-cargo',
            text: { ro: 'Concentrează-te pe livrarea mărfii', de: 'Konzentrieren Sie sich auf die Warenlieferung', en: 'Focus on cargo delivery' },
            points: 5,
            feedback: {
              ro: '⚠️ Incomplet! Marfa e importantă, dar abandonarea șoferului afectează moralul echipei și reputația companiei.',
              de: '⚠️ Unvollständig! Fracht ist wichtig, aber Fahrer im Stich zu lassen beeinflusst Teammoral und Unternehmensruf.',
              en: '⚠️ Incomplete! Cargo is important, but abandoning driver affects team morale and company reputation.'
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

export const getSimulationCategories = (): string[] => {
  return [...new Set(simulations.map(s => s.category))];
};
