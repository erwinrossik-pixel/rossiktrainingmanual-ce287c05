import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TutorRequest {
  message: string;
  chapterId: string;
  language: 'ro' | 'de' | 'en';
  conversationHistory?: { role: string; content: string }[];
  userContext?: {
    failedQuestions?: string[];
    chapterProgress?: string;
    quizAttempts?: number;
    bestScore?: number;
  };
}

// Chapter content summaries for context (Romanian, German, English)
const chapterContexts: Record<string, Record<string, string>> = {
  intro: {
    ro: "Capitol 1: Introducere în freight forwarding european. Rol, structură companie, valori de bază, statistici industrie.",
    de: "Kapitel 1: Einführung in europäische Spedition. Rolle, Unternehmensstruktur, Grundwerte, Branchenstatistik.",
    en: "Chapter 1: Introduction to European freight forwarding. Role, company structure, core values, industry statistics."
  },
  mindset: {
    ro: "Capitol 2: Mentalitatea corectă. Profesionalism, adaptabilitate, proactivitate, responsabilitate, reziliență.",
    de: "Kapitel 2: Die richtige Denkweise. Professionalität, Anpassungsfähigkeit, Proaktivität, Verantwortung, Resilienz.",
    en: "Chapter 2: The right mindset. Professionalism, adaptability, proactivity, responsibility, resilience."
  },
  workflow: {
    ro: "Capitol 3: Flux de lucru zilnic. Primire comenzi, planificare, monitorizare, documente, confirmare livrare.",
    de: "Kapitel 3: Täglicher Arbeitsablauf. Auftragseingang, Planung, Überwachung, Dokumente, Lieferbestätigung.",
    en: "Chapter 3: Daily workflow. Order intake, planning, monitoring, documents, delivery confirmation."
  },
  vehicle: {
    ro: "Capitol: Vehicule și echipamente. Prelată 13.6m, dimensiuni, capacități, tipuri de camioane.",
    de: "Kapitel: Fahrzeuge und Ausrüstung. 13,6m Plane, Abmessungen, Kapazitäten, LKW-Typen.",
    en: "Chapter: Vehicles and equipment. 13.6m tautliner, dimensions, capacities, truck types."
  },
  loading: {
    ro: "Capitol: Încărcare și descărcare. Fixare marfă, greutăți axe, stivuire, manipulare marfă.",
    de: "Kapitel: Be- und Entladung. Ladungssicherung, Achslasten, Stapelung, Güterhandhabung.",
    en: "Chapter: Loading and unloading. Cargo securing, axle weights, stacking, goods handling."
  },
  reefer: {
    ro: "Capitol: Transport frigorific. Temperaturi, lanț frig, controlul temperaturii, mărfuri perisabile.",
    de: "Kapitel: Kühltransport. Temperaturen, Kühlkette, Temperaturkontrolle, verderbliche Waren.",
    en: "Chapter: Refrigerated transport. Temperatures, cold chain, temperature control, perishable goods."
  },
  compliance: {
    ro: "Capitol: Conformitate și regulamente. Reguli UE, licențe, autorizații, standarde legale.",
    de: "Kapitel: Compliance und Vorschriften. EU-Regeln, Lizenzen, Genehmigungen, rechtliche Standards.",
    en: "Chapter: Compliance and regulations. EU rules, licenses, permits, legal standards."
  },
  "driving-time": {
    ro: "Capitol: Ore de condus. Regulament 561/2006, pauze, odihnă, tahograf, excepții.",
    de: "Kapitel: Lenkzeiten. Verordnung 561/2006, Pausen, Ruhezeiten, Fahrtenschreiber, Ausnahmen.",
    en: "Chapter: Driving time. Regulation 561/2006, breaks, rest periods, tachograph, exceptions."
  },
  pricing: {
    ro: "Capitol: Prețuri și cotații. Calcul cost/km, taxe drumuri, suprataxe combustibil, marje.",
    de: "Kapitel: Preise und Angebote. Kosten/km-Berechnung, Mautgebühren, Kraftstoffzuschläge, Margen.",
    en: "Chapter: Pricing and quotations. Cost/km calculation, road charges, fuel surcharges, margins."
  },
  payment: {
    ro: "Capitol: Plăți și facturare. Termene plată, credit, factură pro-forma, recuperare creanțe.",
    de: "Kapitel: Zahlungen und Rechnungsstellung. Zahlungsfristen, Kredit, Pro-forma-Rechnung, Forderungseinzug.",
    en: "Chapter: Payments and invoicing. Payment terms, credit, pro-forma invoice, debt recovery."
  },
  clients: {
    ro: "Capitol: Gestionarea clienților. Relații, negociere, serviciu clienți, fidelizare.",
    de: "Kapitel: Kundenmanagement. Beziehungen, Verhandlung, Kundenservice, Kundenbindung.",
    en: "Chapter: Client management. Relationships, negotiation, customer service, retention."
  },
  "carrier-management": {
    ro: "Capitol: Managementul transportatorilor. Selectare, evaluare, contracte, relații parteneriat.",
    de: "Kapitel: Carrier-Management. Auswahl, Bewertung, Verträge, Partnerschaftsbeziehungen.",
    en: "Chapter: Carrier management. Selection, evaluation, contracts, partnership relationships."
  },
  commercial: {
    ro: "Capitol: Activitate comercială. Vânzări, achiziții, contracte, strategii comerciale.",
    de: "Kapitel: Kommerzielle Tätigkeit. Verkauf, Beschaffung, Verträge, kommerzielle Strategien.",
    en: "Chapter: Commercial activity. Sales, procurement, contracts, commercial strategies."
  },
  negotiation: {
    ro: "Capitol: Negociere. Tehnici, strategii, pregătire, tactici, închidere acord.",
    de: "Kapitel: Verhandlung. Techniken, Strategien, Vorbereitung, Taktiken, Abschluss.",
    en: "Chapter: Negotiation. Techniques, strategies, preparation, tactics, deal closing."
  },
  exchanges: {
    ro: "Capitol: Burse de marfă. TIMOCOM, Trans.eu, Teleroute, căutare încărcături și capacități.",
    de: "Kapitel: Frachtbörsen. TIMOCOM, Trans.eu, Teleroute, Suche nach Ladungen und Kapazitäten.",
    en: "Chapter: Freight exchanges. TIMOCOM, Trans.eu, Teleroute, finding loads and capacity."
  },
  translogica: {
    ro: "Capitol: TMS Translogica. Utilizare sistem, comenzi, facturare, rapoarte, fluxuri de lucru.",
    de: "Kapitel: TMS Translogica. Systemnutzung, Aufträge, Rechnungsstellung, Berichte, Workflows.",
    en: "Chapter: TMS Translogica. System usage, orders, invoicing, reports, workflows."
  },
  fleet: {
    ro: "Capitol: Management flotă. Vehicule proprii, întreținere, planificare, costuri operaționale.",
    de: "Kapitel: Flottenmanagement. Eigene Fahrzeuge, Wartung, Planung, Betriebskosten.",
    en: "Chapter: Fleet management. Own vehicles, maintenance, planning, operational costs."
  },
  customs: {
    ro: "Capitol: Vămuire. Proceduri, documente vamale, T1/T2, tarife, reglementări export/import.",
    de: "Kapitel: Zollabfertigung. Verfahren, Zolldokumente, T1/T2, Tarife, Export-/Importvorschriften.",
    en: "Chapter: Customs. Procedures, customs documents, T1/T2, tariffs, export/import regulations."
  },
  incoterms: {
    ro: "Capitol: Incoterms 2020. EXW, FCA, CPT, CIP, DAP, DPU, DDP, responsabilități părți.",
    de: "Kapitel: Incoterms 2020. EXW, FCA, CPT, CIP, DAP, DPU, DDP, Verantwortlichkeiten der Parteien.",
    en: "Chapter: Incoterms 2020. EXW, FCA, CPT, CIP, DAP, DPU, DDP, party responsibilities."
  },
  "europe-zones": {
    ro: "Capitol: Zone europene. Europa de Est/Vest/Nord/Sud, particularități regionale, restricții.",
    de: "Kapitel: Europäische Zonen. Ost-/West-/Nord-/Südeuropa, regionale Besonderheiten, Beschränkungen.",
    en: "Chapter: European zones. East/West/North/South Europe, regional specifics, restrictions."
  },
  warehouse: {
    ro: "Capitol: Depozitare. Cross-docking, grupaj, consolidare, gestionare stocuri.",
    de: "Kapitel: Lagerung. Cross-Docking, Sammelgut, Konsolidierung, Bestandsverwaltung.",
    en: "Chapter: Warehousing. Cross-docking, groupage, consolidation, inventory management."
  },
  "supply-chain": {
    ro: "Capitol: Lanțul de aprovizionare. Flux materiale, Just-in-Time, optimizare, logistică integrată.",
    de: "Kapitel: Lieferkette. Materialfluss, Just-in-Time, Optimierung, integrierte Logistik.",
    en: "Chapter: Supply chain. Material flow, Just-in-Time, optimization, integrated logistics."
  },
  emergency: {
    ro: "Capitol: Proceduri de urgență. Accidente, avarii, întârzieri, escaladare, gestionare crize.",
    de: "Kapitel: Notfallverfahren. Unfälle, Pannen, Verzögerungen, Eskalation, Krisenmanagement.",
    en: "Chapter: Emergency procedures. Accidents, breakdowns, delays, escalation, crisis management."
  },
  communication: {
    ro: "Capitol: Comunicare eficientă. E-mail profesional, telefon, raportare, actualizări proactive.",
    de: "Kapitel: Effektive Kommunikation. Professionelle E-Mail, Telefon, Berichterstattung, proaktive Updates.",
    en: "Chapter: Effective communication. Professional email, phone, reporting, proactive updates."
  },
  claims: {
    ro: "Capitol: Reclamații și daune. Proceduri, documentare, termene, negociere despăgubiri.",
    de: "Kapitel: Reklamationen und Schäden. Verfahren, Dokumentation, Fristen, Schadensverhandlung.",
    en: "Chapter: Claims and damages. Procedures, documentation, deadlines, damage negotiation."
  },
  insurance: {
    ro: "Capitol: Asigurări. CMR, cargo, răspundere civilă, limite, proceduri despăgubire.",
    de: "Kapitel: Versicherungen. CMR, Ladung, Haftpflicht, Grenzen, Entschädigungsverfahren.",
    en: "Chapter: Insurance. CMR, cargo, liability, limits, compensation procedures."
  },
  adr: {
    ro: "Capitol: Transport ADR. Mărfuri periculoase, clase, etichete, documente, restricții.",
    de: "Kapitel: ADR-Transport. Gefahrgut, Klassen, Kennzeichnung, Dokumente, Beschränkungen.",
    en: "Chapter: ADR transport. Dangerous goods, classes, labels, documents, restrictions."
  },
  documents: {
    ro: "Capitol: Documente transport. CMR, factură, packing list, POD, certificate.",
    de: "Kapitel: Transportdokumente. CMR, Rechnung, Packliste, POD, Zertifikate.",
    en: "Chapter: Transport documents. CMR, invoice, packing list, POD, certificates."
  },
  environment: {
    ro: "Capitol: Mediu și sustenabilitate. Emisii CO2, eficiență combustibil, transport verde.",
    de: "Kapitel: Umwelt und Nachhaltigkeit. CO2-Emissionen, Kraftstoffeffizienz, grüner Transport.",
    en: "Chapter: Environment and sustainability. CO2 emissions, fuel efficiency, green transport."
  },
  "risk-management": {
    ro: "Capitol: Managementul riscurilor. Identificare, evaluare, mitigare, planuri contingență.",
    de: "Kapitel: Risikomanagement. Identifizierung, Bewertung, Minderung, Notfallpläne.",
    en: "Chapter: Risk management. Identification, assessment, mitigation, contingency plans."
  },
  accounting: {
    ro: "Capitol: Contabilitate. Costuri, venituri, marje, rapoarte financiare, bugetare.",
    de: "Kapitel: Buchhaltung. Kosten, Einnahmen, Margen, Finanzberichte, Budgetierung.",
    en: "Chapter: Accounting. Costs, revenues, margins, financial reports, budgeting."
  },
  kpi: {
    ro: "Capitol: Indicatori KPI. Performanță, măsurare, raportare, obiective, îmbunătățire.",
    de: "Kapitel: KPI-Indikatoren. Leistung, Messung, Berichterstattung, Ziele, Verbesserung.",
    en: "Chapter: KPI indicators. Performance, measurement, reporting, targets, improvement."
  },
  "soft-skills": {
    ro: "Capitol: Abilități interpersonale. Comunicare, empatie, teamwork, leadership.",
    de: "Kapitel: Soft Skills. Kommunikation, Empathie, Teamarbeit, Führung.",
    en: "Chapter: Soft skills. Communication, empathy, teamwork, leadership."
  },
  technology: {
    ro: "Capitol: Tehnologie în transport. GPS, TMS, automatizare, digitalizare.",
    de: "Kapitel: Technologie im Transport. GPS, TMS, Automatisierung, Digitalisierung.",
    en: "Chapter: Technology in transport. GPS, TMS, automation, digitalization."
  },
  "case-studies": {
    ro: "Capitol: Studii de caz. Situații reale, soluții, lecții învățate, best practices.",
    de: "Kapitel: Fallstudien. Reale Situationen, Lösungen, gelernte Lektionen, Best Practices.",
    en: "Chapter: Case studies. Real situations, solutions, lessons learned, best practices."
  },
  glossary: {
    ro: "Capitol: Glosar de termeni. Definiții, abrevieri, termeni tehnici în transport.",
    de: "Kapitel: Glossar. Definitionen, Abkürzungen, technische Begriffe im Transport.",
    en: "Chapter: Glossary. Definitions, abbreviations, technical terms in transport."
  },
  training: {
    ro: "Capitol: Program de training. Faze învățare, evaluare, certificare, dezvoltare.",
    de: "Kapitel: Trainingsprogramm. Lernphasen, Bewertung, Zertifizierung, Entwicklung.",
    en: "Chapter: Training program. Learning phases, evaluation, certification, development."
  },
  "red-flags": {
    ro: "Capitol: Red flags. Semnale de alarmă, fraude, parteneri neserioși, protecție.",
    de: "Kapitel: Red Flags. Warnsignale, Betrug, unseriöse Partner, Schutz.",
    en: "Chapter: Red flags. Warning signs, fraud, unreliable partners, protection."
  },
  checklists: {
    ro: "Capitol: Liste de verificare. Check-uri pre/post transport, documente, proceduri.",
    de: "Kapitel: Checklisten. Vor-/Nach-Transport-Checks, Dokumente, Verfahren.",
    en: "Chapter: Checklists. Pre/post transport checks, documents, procedures."
  },
  "licenses-oversize": {
    ro: "Capitol: Licențe și transport agabaritic. Autorizații, permise speciale, restricții.",
    de: "Kapitel: Lizenzen und Schwertransport. Genehmigungen, Sondergenehmigungen, Beschränkungen.",
    en: "Chapter: Licenses and oversized transport. Permits, special authorizations, restrictions."
  },
  "stress-management": {
    ro: "Capitol: Managementul stresului. Tehnici relaxare, echilibru, productivitate.",
    de: "Kapitel: Stressmanagement. Entspannungstechniken, Balance, Produktivität.",
    en: "Chapter: Stress management. Relaxation techniques, balance, productivity."
  },
  sustainability: {
    ro: "Capitol: Sustenabilitate. Transport ecologic, reducere emisii, practici verzi.",
    de: "Kapitel: Nachhaltigkeit. Ökologischer Transport, Emissionsreduzierung, grüne Praktiken.",
    en: "Chapter: Sustainability. Eco-friendly transport, emission reduction, green practices."
  },
  authorities: {
    ro: "Capitol: Autorități și instituții. ISCTR, ARR, poliție, vamă, controale.",
    de: "Kapitel: Behörden und Institutionen. Kontrollen, Polizei, Zoll, Inspektionen.",
    en: "Chapter: Authorities and institutions. ISCTR, ARR, police, customs, inspections."
  },
  digitalization: {
    ro: "Capitol: Digitalizare. eCMR, platforme digitale, automatizare procese.",
    de: "Kapitel: Digitalisierung. eCMR, digitale Plattformen, Prozessautomatisierung.",
    en: "Chapter: Digitalization. eCMR, digital platforms, process automation."
  },
  "european-countries": {
    ro: "Capitol: Țări europene. Specificități, restricții, reguli naționale.",
    de: "Kapitel: Europäische Länder. Besonderheiten, Beschränkungen, nationale Regeln.",
    en: "Chapter: European countries. Specifics, restrictions, national rules."
  },
  "express-transport": {
    ro: "Capitol: Transport express. Urgențe, timp de livrare, tarife premium.",
    de: "Kapitel: Expresstransport. Dringlichkeit, Lieferzeit, Premium-Tarife.",
    en: "Chapter: Express transport. Urgency, delivery time, premium rates."
  },
  "high-value-goods": {
    ro: "Capitol: Mărfuri de mare valoare. Securitate, asigurare, proceduri speciale.",
    de: "Kapitel: Hochwertige Güter. Sicherheit, Versicherung, Sonderverfahren.",
    en: "Chapter: High-value goods. Security, insurance, special procedures."
  },
  intermodal: {
    ro: "Capitol: Transport intermodal. Feroviar, maritim, combinat, container.",
    de: "Kapitel: Intermodaler Transport. Schiene, See, kombiniert, Container.",
    en: "Chapter: Intermodal transport. Rail, sea, combined, container."
  },
  networking: {
    ro: "Capitol: Networking profesional. Relații, parteneriate, dezvoltare rețea.",
    de: "Kapitel: Professionelles Networking. Beziehungen, Partnerschaften, Netzwerkentwicklung.",
    en: "Chapter: Professional networking. Relationships, partnerships, network development."
  },
  "professional-development": {
    ro: "Capitol: Dezvoltare profesională. Carieră, certificări, învățare continuă.",
    de: "Kapitel: Berufliche Entwicklung. Karriere, Zertifizierungen, lebenslanges Lernen.",
    en: "Chapter: Professional development. Career, certifications, continuous learning."
  }
};

const systemPrompts: Record<string, string> = {
  ro: `Ești un AI Tutor expert în freight forwarding european, specializat în transportul rutier de mărfuri.

REGULI STRICTE:
1. Răspunzi DOAR la întrebări legate de conținutul manualului de training
2. NU inventezi informații - dacă nu știi, spui că subiectul nu este acoperit în capitol
3. Răspunzi în limba română
4. Ești prietenos, încurajator și răbdător
5. Adaptezi explicațiile la nivelul utilizatorului

FUNCȚIONALITĂȚI:
- Explică concepte din capitol cu exemple practice
- Generează mini-quiz-uri de antrenament (max 3 întrebări)
- Sugerează secțiuni de recitit
- Oferă mnemonici și trucuri de memorare
- Încurajează progresul utilizatorului

FORMAT RĂSPUNS:
- Răspunsuri concise (max 200 cuvinte)
- Folosește bullet points pentru claritate
- Adaugă emoji-uri relevante pentru engagement
- Încheie cu o întrebare sau sugestie de continuare`,

  de: `Du bist ein KI-Tutor, Experte für europäische Spedition, spezialisiert auf Straßengüterverkehr.

STRENGE REGELN:
1. Antworte NUR auf Fragen zum Inhalt des Schulungshandbuchs
2. Erfinde KEINE Informationen - wenn du es nicht weißt, sage, dass das Thema nicht im Kapitel behandelt wird
3. Antworte auf Deutsch
4. Sei freundlich, ermutigend und geduldig
5. Passe Erklärungen an das Niveau des Benutzers an

FUNKTIONEN:
- Erkläre Konzepte aus dem Kapitel mit praktischen Beispielen
- Erstelle Mini-Übungsquizze (max. 3 Fragen)
- Schlage Abschnitte zum Nachlesen vor
- Biete Eselsbrücken und Merkhilfen
- Ermutige den Fortschritt des Benutzers

ANTWORTFORMAT:
- Knappe Antworten (max. 200 Wörter)
- Verwende Aufzählungszeichen für Klarheit
- Füge relevante Emojis für Engagement hinzu
- Beende mit einer Frage oder einem Vorschlag zur Fortsetzung`,

  en: `You are an AI Tutor expert in European freight forwarding, specialized in road transport.

STRICT RULES:
1. Answer ONLY questions related to the training manual content
2. DO NOT invent information - if you don't know, say the topic is not covered in the chapter
3. Answer in English
4. Be friendly, encouraging and patient
5. Adapt explanations to the user's level

CAPABILITIES:
- Explain concepts from the chapter with practical examples
- Generate mini practice quizzes (max 3 questions)
- Suggest sections to re-read
- Offer mnemonics and memory tricks
- Encourage user progress

RESPONSE FORMAT:
- Concise answers (max 200 words)
- Use bullet points for clarity
- Add relevant emojis for engagement
- End with a question or continuation suggestion`
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, chapterId, language, conversationHistory, userContext }: TutorRequest = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build context about the chapter
    const chapterContext = chapterContexts[chapterId]?.[language] || chapterContexts[chapterId]?.['en'] || `Capitol: ${chapterId}`;
    
    // Build user learning context
    let learningContext = "";
    if (userContext) {
      if (userContext.quizAttempts !== undefined) {
        learningContext += language === 'ro' 
          ? `\nUtilizatorul a încercat quiz-ul de ${userContext.quizAttempts} ori.`
          : language === 'de'
          ? `\nDer Benutzer hat das Quiz ${userContext.quizAttempts} mal versucht.`
          : `\nUser has attempted the quiz ${userContext.quizAttempts} times.`;
      }
      if (userContext.bestScore !== undefined) {
        learningContext += language === 'ro'
          ? ` Cel mai bun scor: ${userContext.bestScore}/10.`
          : language === 'de'
          ? ` Beste Punktzahl: ${userContext.bestScore}/10.`
          : ` Best score: ${userContext.bestScore}/10.`;
      }
      if (userContext.failedQuestions && userContext.failedQuestions.length > 0) {
        learningContext += language === 'ro'
          ? `\nÎntrebări greșite frecvent: ${userContext.failedQuestions.join(', ')}`
          : language === 'de'
          ? `\nHäufig falsch beantwortete Fragen: ${userContext.failedQuestions.join(', ')}`
          : `\nFrequently missed questions: ${userContext.failedQuestions.join(', ')}`;
      }
    }

    const systemPrompt = `${systemPrompts[language] || systemPrompts.en}

CONTEXT CAPITOL:
${chapterContext}
${learningContext}`;

    // Build messages array
    const messages = [
      { role: "system", content: systemPrompt },
      ...(conversationHistory || []),
      { role: "user", content: message }
    ];

    console.log(`AI Tutor request for chapter: ${chapterId}, language: ${language}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "";

    console.log(`AI Tutor response generated successfully`);

    return new Response(
      JSON.stringify({ 
        message: assistantMessage,
        chapterId,
        language 
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("AI Tutor error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
