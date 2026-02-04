import { TranslatedQuizQuestion } from '../../quizTranslations';

export const trainingComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt competențele cheie pentru un disponent de transport?",
      de: "Was sind die Schlüsselkompetenzen für einen Disponenten?",
      en: "What are the key competencies for a freight dispatcher?"
    },
    options: {
      ro: ["Doar limba engleză", "Cunoștințe tehnice, comunicare, negociere, rezolvare probleme, geografie, reglementări", "Doar Excel", "Doar permis de conducere"],
      de: ["Nur Englisch", "Technisches Wissen, Kommunikation, Verhandlung, Problemlösung, Geografie, Vorschriften", "Nur Excel", "Nur Führerschein"],
      en: ["Only English", "Technical knowledge, communication, negotiation, problem-solving, geography, regulations", "Only Excel", "Only driving license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Competențe disponent: tehnic (vehicule, CMR, Incoterms), comunicare (clienți, șoferi), negociere, gândire rapidă, cunoștințe geografie UE, reglementări (ADR, ore condus).",
      de: "Disponenten-Kompetenzen: technisch (Fahrzeuge, CMR, Incoterms), Kommunikation (Kunden, Fahrer), Verhandlung, schnelles Denken, EU-Geografie-Kenntnisse, Vorschriften (ADR, Lenkzeiten).",
      en: "Dispatcher competencies: technical (vehicles, CMR, Incoterms), communication (clients, drivers), negotiation, quick thinking, EU geography knowledge, regulations (ADR, driving hours)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este structura tipică a unui program de onboarding pentru noi angajați?",
      de: "Was ist die typische Struktur eines Onboarding-Programms für neue Mitarbeiter?",
      en: "What is the typical structure of an onboarding program for new employees?"
    },
    options: {
      ro: ["Doar o zi", "Săptămâna 1: orientare. Săptămânile 2-4: shadowing. Luna 2-3: responsabilități graduale", "Fără onboarding", "Doar documente HR"],
      de: ["Nur ein Tag", "Woche 1: Orientierung. Wochen 2-4: Shadowing. Monate 2-3: schrittweise Verantwortung", "Kein Onboarding", "Nur HR-Dokumente"],
      en: ["Only one day", "Week 1: orientation. Weeks 2-4: shadowing. Months 2-3: gradual responsibilities", "No onboarding", "Only HR documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Onboarding: Săpt. 1 = orientare companie, sisteme, echipă. Săpt. 2-4 = shadowing colegi experimentați. Luna 2-3 = cazuri proprii cu supervizare, feedback regulat.",
      de: "Onboarding: Woche 1 = Unternehmensorientierung, Systeme, Team. Wochen 2-4 = Shadowing erfahrener Kollegen. Monate 2-3 = eigene Fälle mit Supervision, regelmäßiges Feedback.",
      en: "Onboarding: Week 1 = company orientation, systems, team. Weeks 2-4 = shadowing experienced colleagues. Months 2-3 = own cases with supervision, regular feedback."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum evaluezi eficacitatea unui program de training?",
      de: "Wie bewertest du die Effektivität eines Trainingsprogramms?",
      en: "How do you evaluate the effectiveness of a training program?"
    },
    options: {
      ro: ["Doar prezență", "Model Kirkpatrick: reacție, învățare, comportament, rezultate", "Doar feedback verbal", "Nu evaluezi"],
      de: ["Nur Anwesenheit", "Kirkpatrick-Modell: Reaktion, Lernen, Verhalten, Ergebnisse", "Nur mündliches Feedback", "Nicht bewerten"],
      en: ["Only attendance", "Kirkpatrick model: reaction, learning, behavior, results", "Only verbal feedback", "Don't evaluate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Kirkpatrick: 1) Reacție (satisfacție), 2) Învățare (test cunoștințe), 3) Comportament (aplicare la job), 4) Rezultate (impact pe KPIs). Măsoară la toate nivelurile.",
      de: "Kirkpatrick: 1) Reaktion (Zufriedenheit), 2) Lernen (Wissenstest), 3) Verhalten (Job-Anwendung), 4) Ergebnisse (KPI-Auswirkung). Auf allen Ebenen messen.",
      en: "Kirkpatrick: 1) Reaction (satisfaction), 2) Learning (knowledge test), 3) Behavior (job application), 4) Results (KPI impact). Measure at all levels."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare academie internă de training pentru companie de transport cu 100 angajați. Structură și curriculum?",
      de: "Entwicklung interner Trainings-Akademie für Transportunternehmen mit 100 Mitarbeitern. Struktur und Curriculum?",
      en: "Developing internal training academy for transport company with 100 employees. Structure and curriculum?"
    },
    options: {
      ro: ["Doar un curs", "Nivele (junior/senior), module obligatorii + opționale, mix teorie/practică, certificări, mentoring", "Doar extern", "Fără academie"],
      de: ["Nur ein Kurs", "Stufen (Junior/Senior), Pflicht- + Wahlmodule, Mix Theorie/Praxis, Zertifizierungen, Mentoring", "Nur extern", "Keine Akademie"],
      en: ["Only one course", "Levels (junior/senior), mandatory + optional modules, theory/practice mix, certifications, mentoring", "Only external", "No academy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Academie internă: nivele (trainee→junior→senior→expert), module pe competențe, mix e-learning + workshop, certificare internă, program mentoring, buget dezvoltare per angajat.",
      de: "Interne Akademie: Stufen (Trainee→Junior→Senior→Expert), Module nach Kompetenzen, Mix E-Learning + Workshop, interne Zertifizierung, Mentoring-Programm, Entwicklungsbudget pro Mitarbeiter.",
      en: "Internal academy: levels (trainee→junior→senior→expert), modules by competencies, e-learning + workshop mix, internal certification, mentoring program, development budget per employee."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce metode de training sunt cele mai eficiente pentru disponenți?",
      de: "Welche Trainingsmethoden sind für Disponenten am effektivsten?",
      en: "What training methods are most effective for dispatchers?"
    },
    options: {
      ro: ["Doar lectură", "Learning by doing, shadowing, simulări, role-play, studii de caz reale", "Doar examene", "Doar video-uri"],
      de: ["Nur Lesen", "Learning by Doing, Shadowing, Simulationen, Rollenspiel, echte Fallstudien", "Nur Prüfungen", "Nur Videos"],
      en: ["Only reading", "Learning by doing, shadowing, simulations, role-play, real case studies", "Only exams", "Only videos"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Metode eficiente: practică pe cazuri reale, shadowing colegi experimentați, simulări de criză, role-play negocieri, analiză cazuri din istoricul companiei.",
      de: "Effektive Methoden: Praxis mit echten Fällen, Shadowing erfahrener Kollegen, Krisensimulationen, Verhandlungs-Rollenspiele, Analyse von Unternehmensfällen.",
      en: "Effective methods: practice with real cases, shadowing experienced colleagues, crisis simulations, negotiation role-plays, analysis of company case history."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum creezi un plan de dezvoltare personală pentru un angajat?",
      de: "Wie erstellst du einen persönlichen Entwicklungsplan für einen Mitarbeiter?",
      en: "How do you create a personal development plan for an employee?"
    },
    options: {
      ro: ["Doar liste de cursuri", "Evaluare curentă, obiective de carieră, gap analysis, acțiuni specifice, timeline, măsurare progres", "Nu creezi planuri", "Doar manager decide"],
      de: ["Nur Kurslisten", "Aktuelle Bewertung, Karriereziele, Gap-Analyse, spezifische Aktionen, Zeitplan, Fortschrittsmessung", "Keine Pläne erstellen", "Nur Manager entscheidet"],
      en: ["Only course lists", "Current assessment, career goals, gap analysis, specific actions, timeline, progress measurement", "Don't create plans", "Only manager decides"]
    },
    correctIndex: 1,
    explanation: {
      ro: "PDP: evaluare competențe curente, discuție aspirații, identificare gap-uri, plan acțiuni (training, proiecte, mentoring), milestones, review trimestrial.",
      de: "PDP: aktuelle Kompetenzbewertung, Aspirationsgespräch, Lückenidentifikation, Aktionsplan (Training, Projekte, Mentoring), Meilensteine, quartalsweises Review.",
      en: "PDP: current competency assessment, aspirations discussion, gap identification, action plan (training, projects, mentoring), milestones, quarterly review."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Criză de talente: dificultate în recrutarea și retenția disponenților. Strategie HR completă?",
      de: "Talentekrise: Schwierigkeit bei Rekrutierung und Bindung von Disponenten. Vollständige HR-Strategie?",
      en: "Talent crisis: difficulty recruiting and retaining dispatchers. Complete HR strategy?"
    },
    options: {
      ro: ["Doar măriri salariale", "Employer branding, program trainee, dezvoltare carieră clară, beneficii diferențiate, cultură echipă", "Doar agenții recrutare", "Renunți la recrutare"],
      de: ["Nur Gehaltserhöhungen", "Employer Branding, Trainee-Programm, klare Karriereentwicklung, differenzierte Benefits, Teamkultur", "Nur Personalagenturen", "Rekrutierung aufgeben"],
      en: ["Only salary increases", "Employer branding, trainee program, clear career development, differentiated benefits, team culture", "Only recruitment agencies", "Give up recruiting"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Strategie talente: employer branding (LinkedIn, facultăți), program trainee plătit, carieră trasabilă, beneficii flexibile, cultura muncă-viață, mentoring, recunoaștere.",
      de: "Talentestrategie: Employer Branding (LinkedIn, Hochschulen), bezahltes Trainee-Programm, nachvollziehbare Karriere, flexible Benefits, Work-Life-Kultur, Mentoring, Anerkennung.",
      en: "Talent strategy: employer branding (LinkedIn, universities), paid trainee program, traceable career, flexible benefits, work-life culture, mentoring, recognition."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce rol are mentoring-ul în dezvoltarea profesională?",
      de: "Welche Rolle spielt Mentoring in der beruflichen Entwicklung?",
      en: "What role does mentoring play in professional development?"
    },
    options: {
      ro: ["Niciun rol", "Transfer de cunoștințe tacite, ghidaj carieră, support în situații dificile, networking intern", "Doar training formal", "Doar pentru manageri"],
      de: ["Keine Rolle", "Transfer von implizitem Wissen, Karriereberatung, Unterstützung in schwierigen Situationen, internes Netzwerk", "Nur formales Training", "Nur für Manager"],
      en: ["No role", "Transfer of tacit knowledge, career guidance, support in difficult situations, internal networking", "Only formal training", "Only for managers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mentoring: transmite experiență și 'trucuri' neformale, oferă perspectivă de carieră, ajută la integrare, creează relații durabile în organizație.",
      de: "Mentoring: vermittelt Erfahrung und informelle 'Tricks', bietet Karriereperspektive, hilft bei Integration, schafft dauerhafte Beziehungen in der Organisation.",
      en: "Mentoring: transmits experience and informal 'tricks', offers career perspective, helps with integration, creates lasting relationships in the organization."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum integrezi e-learning-ul cu training-ul practic?",
      de: "Wie integrierst du E-Learning mit praktischem Training?",
      en: "How do you integrate e-learning with practical training?"
    },
    options: {
      ro: ["Doar e-learning", "Blended learning: teorie online înainte, workshop practic, aplicare pe job, follow-up online", "Doar practic", "Separat complet"],
      de: ["Nur E-Learning", "Blended Learning: Online-Theorie vorher, praktischer Workshop, Job-Anwendung, Online-Follow-up", "Nur praktisch", "Komplett getrennt"],
      en: ["Only e-learning", "Blended learning: online theory before, practical workshop, job application, online follow-up", "Only practical", "Completely separate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Blended: 1) Pre-work online (teorie), 2) Workshop hands-on, 3) Aplicare supervizată pe job, 4) Quiz/refresher online, 5) Comunitate de practică online.",
      de: "Blended: 1) Online Pre-Work (Theorie), 2) Hands-on Workshop, 3) Supervidierte Job-Anwendung, 4) Online Quiz/Auffrischung, 5) Online-Praxisgemeinschaft.",
      en: "Blended: 1) Online pre-work (theory), 2) Hands-on workshop, 3) Supervised job application, 4) Online quiz/refresher, 5) Online community of practice."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Măsurare ROI al investiției în training. Metodologie și metrici?",
      de: "Messung ROI der Trainingsinvestition. Methodik und Metriken?",
      en: "Measuring ROI of training investment. Methodology and metrics?"
    },
    options: {
      ro: ["Nu se poate măsura", "Cost training vs. îmbunătățire productivitate, reducere erori, retenție, satisfacție clienți", "Doar feedback pozitiv", "Doar număr cursuri"],
      de: ["Kann nicht gemessen werden", "Trainingskosten vs. Produktivitätsverbesserung, Fehlerreduktion, Bindung, Kundenzufriedenheit", "Nur positives Feedback", "Nur Anzahl Kurse"],
      en: ["Cannot be measured", "Training cost vs. productivity improvement, error reduction, retention, customer satisfaction", "Only positive feedback", "Only number of courses"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ROI training: cost total (dezvoltare + livrare + timp) vs. beneficii (productivitate +X%, erori -Y%, turnover -Z%, satisfacție clienți +W%). Formula Phillips.",
      de: "Training-ROI: Gesamtkosten (Entwicklung + Durchführung + Zeit) vs. Nutzen (Produktivität +X%, Fehler -Y%, Fluktuation -Z%, Kundenzufriedenheit +W%). Phillips-Formel.",
      en: "Training ROI: total cost (development + delivery + time) vs. benefits (productivity +X%, errors -Y%, turnover -Z%, customer satisfaction +W%). Phillips formula."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce certificări externe sunt valoroase pentru un disponent?",
      de: "Welche externen Zertifizierungen sind für einen Disponenten wertvoll?",
      en: "What external certifications are valuable for a dispatcher?"
    },
    options: {
      ro: ["Niciuna", "Certificări limbă (B2+), DGG/ADR pentru periculoase, certificat expeditor, specializări IT (TMS)", "Doar permis auto", "Doar diploma de bază"],
      de: ["Keine", "Sprachzertifikate (B2+), DGG/ADR für Gefahrgut, Spediteurszertifikat, IT-Spezialisierungen (TMS)", "Nur Führerschein", "Nur Grunddiplom"],
      en: ["None", "Language certifications (B2+), DGG/ADR for dangerous goods, forwarder certificate, IT specializations (TMS)", "Only driving license", "Only basic diploma"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Certificări valoroase: limbi străine (germană B2, engleză B2+), ADR/DGG periculoase, certificat competență profesională expeditor, certificate TMS/ERP.",
      de: "Wertvolle Zertifikate: Fremdsprachen (Englisch B2+), ADR/DGG Gefahrgut, Berufseignungszertifikat Spediteur, TMS/ERP-Zertifikate.",
      en: "Valuable certifications: foreign languages (German B2, English B2+), ADR/DGG dangerous goods, forwarder professional competence certificate, TMS/ERP certificates."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi training-ul continuu pentru o echipă de 20 disponenți?",
      de: "Wie managst du kontinuierliche Weiterbildung für ein 20-köpfiges Disponenten-Team?",
      en: "How do you manage continuous training for a team of 20 dispatchers?"
    },
    options: {
      ro: ["Doar când apare problemă", "Calendar anual, mix teme (soft/hard skills), rotație participare, tracking competențe, microlearning", "Doar annual", "Fără plan"],
      de: ["Nur bei Problemen", "Jahreskalender, Themenmix (Soft/Hard Skills), Teilnahmerotation, Kompetenz-Tracking, Microlearning", "Nur jährlich", "Kein Plan"],
      en: ["Only when problem appears", "Annual calendar, topic mix (soft/hard skills), participation rotation, competency tracking, microlearning", "Only annually", "No plan"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Training continuu: calendar lunar (1 sesiune/lună), mix teme (reglementări, sisteme, soft skills), rotație cine participă, matrice competențe actualizată, microlearning zilnic.",
      de: "Kontinuierliche Weiterbildung: Monatskalender (1 Session/Monat), Themenmix (Vorschriften, Systeme, Soft Skills), Teilnahmerotation, aktualisierte Kompetenzmatrix, tägliches Microlearning.",
      en: "Continuous training: monthly calendar (1 session/month), topic mix (regulations, systems, soft skills), participation rotation, updated competency matrix, daily microlearning."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transformare digitală: upskilling echipă pentru noi tehnologii (AI, automatizări, analytics). Plan și execuție?",
      de: "Digitale Transformation: Upskilling Team für neue Technologien (KI, Automatisierung, Analytics). Plan und Umsetzung?",
      en: "Digital transformation: upskilling team for new technologies (AI, automation, analytics). Plan and execution?"
    },
    options: {
      ro: ["Doar angajare IT", "Assessment skill gap, learning paths diferențiate, pilot cu early adopters, rollout gradual, support continuu", "Doar cursuri externe", "Ignori transformarea"],
      de: ["Nur IT einstellen", "Skill-Gap-Assessment, differenzierte Lernpfade, Pilot mit Early Adopters, schrittweises Rollout, kontinuierliche Unterstützung", "Nur externe Kurse", "Transformation ignorieren"],
      en: ["Only hire IT", "Skill gap assessment, differentiated learning paths, pilot with early adopters, gradual rollout, continuous support", "Only external courses", "Ignore transformation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Digital upskilling: evaluare gap-uri digitale, grupuri de învățare (basic/advanced), pilot cu 'champions' digitali, training hands-on pe noi tool-uri, support post-training.",
      de: "Digitales Upskilling: Bewertung digitaler Lücken, Lerngruppen (Basic/Advanced), Pilot mit digitalen 'Champions', Hands-on-Training mit neuen Tools, Post-Training-Support.",
      en: "Digital upskilling: assess digital gaps, learning groups (basic/advanced), pilot with digital 'champions', hands-on training on new tools, post-training support."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un plan de succesiune și de ce e important?",
      de: "Was ist ein Nachfolgeplan und warum ist er wichtig?",
      en: "What is a succession plan and why is it important?"
    },
    options: {
      ro: ["Plan de pensionare", "Identificarea și pregătirea angajaților pentru roluri cheie în caz de plecare/promovare", "Plan de concediere", "Plan financiar"],
      de: ["Rentenplan", "Identifizierung und Vorbereitung von Mitarbeitern für Schlüsselrollen bei Abgang/Beförderung", "Kündigungsplan", "Finanzplan"],
      en: ["Retirement plan", "Identifying and preparing employees for key roles in case of departure/promotion", "Layoff plan", "Financial plan"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Succesiune: identifici roluri critice (team lead, expert X), identifici potențiali succesori, pregătești prin training/experiență, reduci riscul de dependență de o persoană.",
      de: "Nachfolge: kritische Rollen identifizieren (Teamleiter, Experte X), potenzielle Nachfolger identifizieren, durch Training/Erfahrung vorbereiten, Personenabhängigkeitsrisiko reduzieren.",
      en: "Succession: identify critical roles (team lead, expert X), identify potential successors, prepare through training/experience, reduce dependency risk on one person."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum creezi cultură de învățare continuă în organizație?",
      de: "Wie schaffst du eine Kultur des kontinuierlichen Lernens in der Organisation?",
      en: "How do you create a culture of continuous learning in the organization?"
    },
    options: {
      ro: ["Doar obligație", "Leadership exemplu, timp dedicat, recunoaștere, platformă accesibilă, comunități de practică", "Doar cursuri obligatorii", "Nu se poate crea"],
      de: ["Nur Verpflichtung", "Führungsvorbild, dedizierte Zeit, Anerkennung, zugängliche Plattform, Praxisgemeinschaften", "Nur Pflichtkurse", "Kann nicht geschaffen werden"],
      en: ["Only obligation", "Leadership example, dedicated time, recognition, accessible platform, communities of practice", "Only mandatory courses", "Cannot be created"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cultură learning: manageri învață și modelează, ore dedicate (ex: 2h/săptămână), premii pentru dezvoltare, platformă ușor accesibilă, share-uri de cunoștințe în echipă.",
      de: "Lernkultur: Manager lernen und modellieren, dedizierte Stunden (z.B. 2h/Woche), Entwicklungspreise, leicht zugängliche Plattform, Wissensaustausch im Team.",
      en: "Learning culture: managers learn and model, dedicated hours (e.g., 2h/week), development awards, easily accessible platform, knowledge sharing in team."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Evaluare performanță 360° pentru disponenți. Design și implementare?",
      de: "360°-Leistungsbewertung für Disponenten. Design und Implementierung?",
      en: "360° performance evaluation for dispatchers. Design and implementation?"
    },
    options: {
      ro: ["Doar evaluare manager", "Feedback de la manager, colegi, clienți interni, auto-evaluare; competențe specifice; dezvoltare nu doar notă", "Doar auto-evaluare", "Fără evaluare"],
      de: ["Nur Manager-Bewertung", "Feedback von Manager, Kollegen, internen Kunden, Selbstbewertung; spezifische Kompetenzen; Entwicklung nicht nur Note", "Nur Selbstbewertung", "Keine Bewertung"],
      en: ["Only manager evaluation", "Feedback from manager, peers, internal clients, self-assessment; specific competencies; development not just grade", "Only self-assessment", "No evaluation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "360°: chestionar competențe specifice rol, feedback de la 4-6 persoane (manager, peers, clienți interni), self-assessment, conversație de dezvoltare nu doar rating.",
      de: "360°: rollenspezifischer Kompetenzfragebogen, Feedback von 4-6 Personen (Manager, Kollegen, interne Kunden), Selbstbewertung, Entwicklungsgespräch nicht nur Rating.",
      en: "360°: role-specific competency questionnaire, feedback from 4-6 people (manager, peers, internal clients), self-assessment, development conversation not just rating."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce sunt soft skills și care sunt cele mai importante în transport?",
      de: "Was sind Soft Skills und welche sind im Transport am wichtigsten?",
      en: "What are soft skills and which are most important in transport?"
    },
    options: {
      ro: ["Abilități tehnice", "Comunicare, rezolvare probleme, negociere, management stres, lucru în echipă, adaptabilitate", "Doar limbi străine", "Nu contează"],
      de: ["Technische Fähigkeiten", "Kommunikation, Problemlösung, Verhandlung, Stressmanagement, Teamarbeit, Anpassungsfähigkeit", "Nur Fremdsprachen", "Nicht wichtig"],
      en: ["Technical skills", "Communication, problem-solving, negotiation, stress management, teamwork, adaptability", "Only foreign languages", "Doesn't matter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Soft skills transport: comunicare (claritate, calm), rezolvare rapidă probleme, negociere (prețuri, termene), management stres, colaborare echipă, flexibilitate în criză.",
      de: "Transport Soft Skills: Kommunikation (Klarheit, Ruhe), schnelle Problemlösung, Verhandlung (Preise, Fristen), Stressmanagement, Teamzusammenarbeit, Flexibilität in Krisen.",
      en: "Transport soft skills: communication (clarity, calm), quick problem-solving, negotiation (prices, deadlines), stress management, team collaboration, flexibility in crisis."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum identifici potențialul de leadership în echipă?",
      de: "Wie identifizierst du Führungspotenzial im Team?",
      en: "How do you identify leadership potential in a team?"
    },
    options: {
      ro: ["Doar vechime", "Inițiativă, influență pozitivă, rezolvare conflicte, mentorat informal, asumarea responsabilității", "Doar rezultate individuale", "Nu poți identifica"],
      de: ["Nur Dienstalter", "Initiative, positiver Einfluss, Konfliktlösung, informelles Mentoring, Verantwortungsübernahme", "Nur individuelle Ergebnisse", "Kann nicht identifizieren"],
      en: ["Only seniority", "Initiative, positive influence, conflict resolution, informal mentoring, taking responsibility", "Only individual results", "Cannot identify"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Potențial leadership: ia inițiativă voluntar, colegii îl ascultă, rezolvă conflicte constructiv, ajută noii veniți, își asumă responsabilitate în criză, gândește la echipă nu doar la sine.",
      de: "Führungspotenzial: ergreift freiwillig Initiative, Kollegen hören zu, löst Konflikte konstruktiv, hilft Neuen, übernimmt Verantwortung in Krisen, denkt ans Team nicht nur an sich.",
      en: "Leadership potential: takes initiative voluntarily, colleagues listen to them, resolves conflicts constructively, helps newcomers, takes responsibility in crisis, thinks about team not just self."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Program de dezvoltare pentru viitori team leaderi. Module și durata?",
      de: "Entwicklungsprogramm für zukünftige Teamleiter. Module und Dauer?",
      en: "Development program for future team leaders. Modules and duration?"
    },
    options: {
      ro: ["Doar promovare directă", "6-12 luni: leadership basics, comunicare, coaching, project management, shadowing leader actual", "Doar un curs", "Fără program"],
      de: ["Nur direkte Beförderung", "6-12 Monate: Leadership-Grundlagen, Kommunikation, Coaching, Projektmanagement, Shadowing aktueller Leader", "Nur ein Kurs", "Kein Programm"],
      en: ["Only direct promotion", "6-12 months: leadership basics, communication, coaching, project management, shadowing current leader", "Only one course", "No program"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Program future leaders (6-12 luni): module leadership, comunicare/feedback, coaching skills, project management, rotații în alte departamente, shadowing team lead, proiect practic.",
      de: "Future Leaders Programm (6-12 Monate): Leadership-Module, Kommunikation/Feedback, Coaching-Skills, Projektmanagement, Rotationen in anderen Abteilungen, Teamleiter-Shadowing, Praxisprojekt.",
      en: "Future leaders program (6-12 months): leadership modules, communication/feedback, coaching skills, project management, rotations in other departments, team lead shadowing, practical project."
    }
  }
];
