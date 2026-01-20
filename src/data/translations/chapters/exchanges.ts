export const exchangesTranslations: Record<string, Record<string, string>> = {
  en: {
    chapterNumber: "Chapter 23",
    chapterTitle: "Freight Exchanges",
    heroDescription: "The main platforms for finding loads and trucks across Europe. Master TIMOCOM, Trans.eu, Teleroute, and Transporeon.",
    title: "Freight Exchanges Overview",
    subtitle: "The main platforms for finding loads and trucks across Europe.",
    
    // Introduction
    intro: "Freight exchanges are the heartbeat of European spot transport. Every day, millions of transport orders are posted and matched on these platforms. For a freight forwarder, mastering these tools is not optional - it's essential for finding capacity when you need it most. This chapter provides in-depth knowledge of the four major platforms and best practices for effective use.",
    
    // Section 1: What is a Freight Exchange
    whatIsExchangeTitle: "What is a Freight Exchange?",
    whatIsExchangeContent: "A freight exchange is a digital marketplace where shippers post transport orders (loads) and carriers post available capacity (trucks). The platform facilitates matching, communication, and often payment security. Unlike direct contracts, exchanges are used primarily for spot market - single transports at current market rates.",
    whatIsExchangeDetail1: "Advantages: Quick access to capacity/loads, price transparency, broad network without individual contracts, rating systems for partner verification.",
    whatIsExchangeDetail2: "Disadvantages: Rates often lower than direct contracts, high competition, quality variation, time investment in partner verification.",
    
    // Section 2: TIMOCOM
    timocomTitle: "TIMOCOM",
    timocomBadge: "Most Used in EU",
    timocomDesc: "Leading European freight exchange with extensive partner verification.",
    timocomIntro: "Founded in 1997 in Germany, TIMOCOM is the largest freight exchange in Europe with over 54,000 verified companies and 140,000+ daily offers. Strong in Western and Central Europe, particularly Germany, Austria, Benelux, and increasingly Eastern Europe.",
    timocomFeatures: "Key Features: Smart Logistics System (SLS) for integrated transport management, partner verification including credit checks and insurance validation, integrated Translogica TMS connection, real-time tracking interface, payment timeline monitoring.",
    timocomPricing: "Pricing: Monthly subscription model, typically €300-500/month depending on modules. No per-transaction fees. Free trial available.",
    timocomStrengths: "Strengths: Highest trust level due to rigorous verification, excellent coverage in DACH region, strong TMS integrations, comprehensive business intelligence tools.",
    timocomWeaknesses: "Weaknesses: Higher subscription cost than competitors, interface can feel dated, less strong in Southern Europe.",
    findPostLoads: "Find & post loads/trucks",
    partnerVerification: "Partner verification & rating",
    integratedTms: "Integrated in Translogica TMS",
    
    // Section 3: Trans.eu
    transeuTitle: "Trans.eu",
    transeuBadge: "Strong in CEE",
    transeuDesc: "Verified network with strong presence in Central/Eastern Europe.",
    transeuIntro: "Polish-origin platform that dominates CEE markets. Over 40,000 companies and 400,000 loads daily. Particularly strong for transport involving Poland, Czechia, Slovakia, Hungary, Romania, and the Baltics.",
    transeuFeatures: "Key Features: TransRisk scoring system for partner risk assessment, private tenders for regular routes, in-app messaging and document exchange, TransRisk scoring with payment behavior analysis, mobile app for on-the-go management.",
    transeuPricing: "Pricing: Tiered pricing based on company size and features. Basic from €150/month, full package €300+/month. Per-offer pricing available for low-volume users.",
    transeuStrengths: "Strengths: Best CEE coverage, competitive pricing, excellent mobile app, strong community features, TransRisk behavioral scoring.",
    transeuWeaknesses: "Weaknesses: Less established in Western Europe, variable verification standards in some regions.",
    ceeNetwork: "CEE/EU verified network",
    privateTenders: "Private tenders, in-app chat",
    transRisk: "TransRisk scoring system",
    
    // Section 4: Teleroute
    telerouteTitle: "Teleroute",
    telerouteBadge: "Payment Protection",
    telerouteDesc: "EU-wide platform with Coface-backed Payment Guarantee.",
    telerouteIntro: "Part of the Alpega Group (along with 123cargo and Wtransnet), Teleroute has been operating since 1985. Strong presence in France, Benelux, and Spain. Known for its Payment Guarantee program backed by Coface insurance.",
    telerouteFeatures: "Key Features: Payment Guarantee program (insures unpaid invoices for qualifying partners), Coface credit assessment integration, multi-platform access (web, mobile, desktop), integration with other Alpega platforms, route optimization tools.",
    teleroutePricing: "Pricing: Subscription-based, €200-400/month. Payment Guarantee is additional (percentage of insured value). Bundle discounts with other Alpega services.",
    telerouteStrengths: "Strengths: Industry-leading Payment Guarantee, long track record, strong in France/Benelux/Spain, part of larger ecosystem.",
    telerouteWeaknesses: "Weaknesses: Lower volume than TIMOCOM/Trans.eu, payment guarantee costs add up, interface less modern.",
    paymentGuarantee: "Payment Guarantee (Coface)",
    euWideCoverage: "EU-wide coverage",
    alpegaGroup: "Part of Alpega Group",
    
    // Section 5: Transporeon
    transporeonTitle: "Transporeon",
    transporeonBadge: "Enterprise Focus",
    transporeonDesc: "Shipper-carrier network with advanced visibility features.",
    transporeonIntro: "More than a freight exchange - Transporeon is a complete shipper-carrier platform focused on enterprise logistics. 1,400+ shippers and 145,000+ carriers. Used for tendering, execution, and visibility rather than spot loads.",
    transporeonFeatures: "Key Features: eTendering for structured RFQ processes, Real-time visibility and ETA tracking, Time Slot Management for appointment scheduling, Dock & Yard Management for loading optimization, No-Touch Order (fully automated booking).",
    transporeonPricing: "Pricing: Enterprise pricing model, typically €500+/month for full access. Transaction fees may apply. Carrier registration often free for shipper-specific access.",
    transporeonStrengths: "Strengths: Best for enterprise customers, excellent visibility tools, professional tender management, strong automations.",
    transporeonWeaknesses: "Weaknesses: Not ideal for pure spot market, complex implementation, higher cost, requires shipper adoption.",
    eTendering: "eTendering platform",
    realTimeVisibility: "Real-time visibility",
    telematicsIntegration: "Telematics integration",
    
    // Section 6: Other Platforms
    otherPlatformsTitle: "Other Notable Platforms",
    otherPlatformsContent: "The market includes several other valuable exchanges: Wtransnet (strong in Iberia), 123cargo (part of Alpega, good in South Europe), Freightos (focused on freight rate benchmarking), Coyote (US-based but expanding in EU), and emerging digital brokers like Sennder and Uber Freight. Each has specific regional strengths or technological innovations.",
    wtransnetDesc: "Wtransnet: Spanish origin, 12,000+ companies, strong Iberia-Morocco coverage, real-time GPS tracking integration.",
    freightosDesc: "Freightos: Rate benchmarking and instant quotes, particularly for international/intercontinental freight.",
    sennderDesc: "Sennder: Digital freight forwarder with own capacity network, strong Germany focus, technology-first approach.",
    
    // Section 7: Comparison
    quickComparison: "Quick Comparison",
    platform: "Platform",
    useCase: "Use Case",
    keyFeature: "Key Feature",
    dailySpotLoads: "Daily spot loads",
    ceeNetworkUse: "CEE network",
    paymentSecurity: "Payment security",
    enterpriseTenders: "Enterprise tenders",
    
    // Section 8: How to Use Effectively
    howToUseTitle: "How to Use Freight Exchanges Effectively",
    howToUseContent: "Success on freight exchanges requires strategy, not just access. The best dispatchers develop systematic approaches to posting, searching, and partner selection.",
    howToUsePosting: "Posting Tips: Post complete information (exact loading/unloading addresses, times, weight, vehicle requirements). Be specific about special requirements (ADR, frigo, tail-lift). Update availability status in real-time. Remove filled orders immediately.",
    howToUseSearching: "Searching Tips: Set up saved searches and alerts for regular routes. Check new offers every 30-60 minutes during peak times. Contact multiple partners simultaneously - first to confirm wins. Use filters effectively (vehicle type, weight, region).",
    howToUseNegotiation: "Negotiation: Know current market rates for the route (use historical data). Start negotiations with realistic prices. Be prepared to move quickly - good offers disappear fast. Build relationships for future priority.",
    
    // Section 9: Partner Verification
    verificationTitle: "Partner Verification Best Practices",
    verificationContent: "Never book with an unverified partner. The 10 minutes spent on verification can save weeks of recovery from fraud or non-payment.",
    verificationChecklist: "Verification Checklist: 1) Check platform rating and review history, 2) Verify insurance certificate dates and coverage, 3) Confirm operating license validity, 4) Check credit rating if available, 5) Look for red flags (new account, no history, unusual pricing), 6) Verify contact details match company registration, 7) For high-value cargo, call to verify driver details before loading.",
    verificationRedFlags: "Red Flags: New accounts with aggressive pricing, requests to pay outside platform, no or negative ratings, pressure to skip verification steps, untraceable contact details.",
    
    // Section 10: Payment Security
    paymentSecurityTitle: "Payment Security on Exchanges",
    paymentSecurityContent: "Payment delays and defaults are common in spot transport. Protect yourself with systematic approaches.",
    paymentSecurityTips: "Payment Protection Tips: Use platform payment guarantee when available (Teleroute Coface guarantee is industry standard). Set credit limits for new partners (max €2,000-5,000 initial exposure). Request advance payment from unknown carriers. Document everything - CMR, delivery confirmation, rate confirmation. Invoice immediately after delivery. Follow up on overdue payments within 3 days.",
    
    // Section 11: TMS Integration
    tmsIntegrationTitle: "Integration with Translogica TMS",
    tmsIntegrationContent: "Modern TMS systems like Translogica integrate directly with major exchanges, enabling seamless workflow from search to execution.",
    tmsIntegrationFeatures: "Translogica + Exchanges: Direct search within TMS interface, automatic data transfer (no manual re-entry), integrated partner rating sync, document management linked to transport, invoice reconciliation with exchange confirmations.",
    tmsIntegrationWorkflow: "Workflow: 1) Create order in Dispoplan, 2) Search capacity via integrated exchange, 3) Select partner and transfer details, 4) Confirm booking via exchange messaging, 5) Track execution with integrated updates, 6) Invoice with automatic rate verification.",
    
    // Section 12: Market Dynamics
    marketDynamicsTitle: "Understanding Market Dynamics",
    marketDynamicsContent: "Exchange rates fluctuate based on supply and demand. Understanding these patterns helps you time postings and negotiations.",
    marketDynamicsPatterns: "Rate Patterns: Monday-Wednesday: Higher rates (week starts, capacity needed). Thursday-Friday: Rates drop (trucks heading home). End of month: Rate pressure from carriers needing volume. Q4 retail season: Rate premiums of 20-40%. Summer: Reduced capacity (vacations), variable rates.",
    marketDynamicsStrategy: "Strategic Timing: Post loads early in the week for best coverage. Search for backhaul opportunities on Thursday-Friday. Build regular partnerships to avoid peak-time scrambles. Lock in capacity for predictable peaks in advance.",
    
    // Case Study
    caseStudyTitle: "Case Study: Finding Capacity in Peak Season",
    caseStudyContent: "December 15th, 14:00: Customer needs urgent delivery from Stuttgart to Lyon for December 17th. All regular carriers fully booked due to pre-Christmas rush. Exchange strategy: Posted on TIMOCOM and Trans.eu simultaneously. Searched actively while waiting for responses. Within 2 hours: 3 responses on TIMOCOM, 5 on Trans.eu.",
    caseStudyActions: "Actions taken: Verified top 3 candidates (rating, insurance, credit). Called preferred carrier to confirm details. Negotiated €150 above normal rate (acceptable for urgency). Confirmed via platform messaging with full documentation.",
    caseStudyLesson: "Lesson: Multi-platform posting, active searching, and quick verification enable capacity finding even in tight markets. The €150 premium was client-approved given the urgency.",
    
    // Checklist
    checklistTitle: "Exchange Usage Daily Checklist",
    checklistItems: "1. Morning: Check all open orders for responses | 2. Update vehicle availability for the day | 3. Post new loads with complete details | 4. Verify insurance on any new partner before booking | 5. Respond to inquiries within 1 hour | 6. Confirm bookings in writing via platform | 7. Update/remove filled orders immediately | 8. Document any issues for partner ratings | 9. Evening: Review next-day orders and capacity | 10. Weekly: Analyze which platforms performed best",
    
    // Best Practices
    bestPracticesTitle: "Exchange Best Practices",
    checkRatings: "Always check partner ratings before booking",
    verifyInsurance: "Verify insurance and licenses",
    usePlatformMessaging: "Use platform messaging for audit trail",
    savePartners: "Save reliable partners to your TMS",
    usePaymentGuarantee: "Use Payment Guarantee for new partners",
    checkDrivingBans: "Check for driving ban countries",
    confirmDetails: "Confirm all details in writing",
    ratePartners: "Rate partners after each job",
    
    // Common Mistakes
    commonMistakesTitle: "Common Mistakes to Avoid",
    commonMistake1: "Booking without checking partner ratings and history",
    commonMistake2: "Communicating outside the platform (losing audit trail)",
    commonMistake3: "Posting incomplete information (missing weight, times, requirements)",
    commonMistake4: "Not following up on quote requests within 1 hour",
    commonMistake5: "Accepting suspiciously low rates without verification",
    
    // Glossary
    glossaryTitle: "Glossary Freight Exchanges",
    glossaryTerm1: "Spot Market",
    glossaryDef1: "One-time transport bookings at current market rates, as opposed to contracted lanes with fixed pricing",
    glossaryTerm2: "Backhaul",
    glossaryDef2: "Return load for a truck that would otherwise travel empty. Often available at lower rates.",
    glossaryTerm3: "Payment Guarantee",
    glossaryDef3: "Insurance-backed program that pays shipper/forwarder if carrier defaults on payment. Teleroute/Coface is the standard.",
    glossaryTerm4: "Credit Check",
    glossaryDef4: "Assessment of a company's financial stability and payment history. Available on most platforms for members.",
    glossaryTerm5: "TransRisk Score",
    glossaryDef5: "Trans.eu's proprietary scoring system combining payment behavior, insurance validity, and platform activity.",
    glossaryTerm6: "eTendering",
    glossaryDef6: "Electronic tender process for collecting quotes from multiple carriers on defined routes/volumes.",
    glossaryTerm7: "No-Touch Order",
    glossaryDef7: "Fully automated booking where matching, confirmation, and execution happen without manual intervention.",
    glossaryTerm8: "SLS (Smart Logistics System)",
    glossaryDef8: "TIMOCOM's integrated platform combining exchange, tracking, and partner management.",
    glossaryTerm9: "Time Slot Management",
    glossaryDef9: "Digital scheduling of loading/unloading appointments to reduce wait times at facilities.",
    glossaryTerm10: "Rate Benchmarking",
    glossaryDef10: "Comparison of offered rates against market averages to ensure competitive pricing.",
    
    knowledgeCheck: "Knowledge Check: Freight Exchanges",
  },
  ro: {
    chapterNumber: "Capitolul 23",
    chapterTitle: "Burse de Marfă",
    heroDescription: "Principalele platforme pentru găsirea încărcăturilor și camioanelor în Europa. TIMOCOM, Trans.eu, Teleroute și Transporeon.",
    title: "Prezentare Generală a Burselor de Marfă",
    subtitle: "Principalele platforme pentru găsirea încărcăturilor și camioanelor în Europa.",
    
    // Introduction
    intro: "Bursele de marfă sunt pulsul transportului spot european. În fiecare zi, milioane de comenzi de transport sunt postate și potrivite pe aceste platforme. Pentru un freight forwarder, stăpânirea acestor instrumente nu este opțională - este esențială pentru găsirea capacității când ai nevoie cel mai mult. Acest capitol oferă cunoștințe aprofundate despre cele patru platforme majore și bune practici pentru utilizare eficientă.",
    
    // Section 1: What is a Freight Exchange
    whatIsExchangeTitle: "Ce este o Bursă de Marfă?",
    whatIsExchangeContent: "O bursă de marfă este o piață digitală unde expeditorii postează comenzi de transport (încărcături) iar transportatorii postează capacitate disponibilă (camioane). Platforma facilitează potrivirea, comunicarea și adesea securitatea plăților. Spre deosebire de contractele directe, bursele sunt folosite în principal pentru piața spot - transporturi unice la ratele curente ale pieței.",
    whatIsExchangeDetail1: "Avantaje: Acces rapid la capacitate/încărcături, transparența prețurilor, rețea largă fără contracte individuale, sisteme de rating pentru verificarea partenerilor.",
    whatIsExchangeDetail2: "Dezavantaje: Ratele adesea mai mici decât contractele directe, competiție ridicată, variație de calitate, investiție de timp în verificarea partenerilor.",
    
    // Section 2: TIMOCOM
    timocomTitle: "TIMOCOM",
    timocomBadge: "Cel Mai Folosit în UE",
    timocomDesc: "Bursă de transport europeană lider cu verificare extensivă a partenerilor.",
    timocomIntro: "Fondată în 1997 în Germania, TIMOCOM este cea mai mare bursă de marfă din Europa cu peste 54.000 companii verificate și 140.000+ oferte zilnice. Puternică în Europa de Vest și Centrală, în special Germania, Austria, Benelux și din ce în ce mai mult Europa de Est.",
    timocomFeatures: "Caracteristici Cheie: Smart Logistics System (SLS) pentru managementul integrat al transportului, verificarea partenerilor inclusiv verificări de credit și validare asigurări, conexiune integrată TMS Translogica, interfață de tracking în timp real, monitorizarea cronologiei plăților.",
    timocomPricing: "Prețuri: Model de abonament lunar, de obicei €300-500/lună în funcție de module. Fără taxe per tranzacție. Perioadă de probă gratuită disponibilă.",
    timocomStrengths: "Puncte forte: Cel mai înalt nivel de încredere datorită verificării riguroase, acoperire excelentă în regiunea DACH, integrări TMS puternice, instrumente complete de business intelligence.",
    timocomWeaknesses: "Puncte slabe: Cost de abonament mai mare decât competitorii, interfața poate părea învechită, mai puțin puternică în Europa de Sud.",
    findPostLoads: "Găsește și postează încărcături/camioane",
    partnerVerification: "Verificare și rating partener",
    integratedTms: "Integrat în Translogica TMS",
    
    // Section 3: Trans.eu
    transeuTitle: "Trans.eu",
    transeuBadge: "Puternic în CEE",
    transeuDesc: "Rețea verificată cu prezență puternică în Europa Centrală/Est.",
    transeuIntro: "Platformă de origine poloneză care domină piețele CEE. Peste 40.000 companii și 400.000 încărcături zilnic. Deosebit de puternică pentru transport implicând Polonia, Cehia, Slovacia, Ungaria, România și țările Baltice.",
    transeuFeatures: "Caracteristici Cheie: Sistem de scoring TransRisk pentru evaluarea riscului partenerului, licitații private pentru rute regulate, mesagerie în aplicație și schimb de documente, scoring TransRisk cu analiză comportament de plată, aplicație mobilă pentru management din mers.",
    transeuPricing: "Prețuri: Prețuri pe niveluri bazate pe dimensiunea companiei și funcții. De la €150/lună pentru bază, pachet complet €300+/lună. Prețuri per ofertă disponibile pentru utilizatori cu volum redus.",
    transeuStrengths: "Puncte forte: Cea mai bună acoperire CEE, prețuri competitive, aplicație mobilă excelentă, funcții puternice de comunitate, scoring comportamental TransRisk.",
    transeuWeaknesses: "Puncte slabe: Mai puțin stabilită în Europa de Vest, standarde de verificare variabile în unele regiuni.",
    ceeNetwork: "Rețea verificată CEE/UE",
    privateTenders: "Licitații private, chat în aplicație",
    transRisk: "Sistem de scoring TransRisk",
    
    // Section 4: Teleroute
    telerouteTitle: "Teleroute",
    telerouteBadge: "Protecție Plată",
    telerouteDesc: "Platformă la nivel UE cu Garanție de Plată susținută de Coface.",
    telerouteIntro: "Parte din Grupul Alpega (împreună cu 123cargo și Wtransnet), Teleroute operează din 1985. Prezență puternică în Franța, Benelux și Spania. Cunoscută pentru programul de Garanție de Plată susținut de asigurarea Coface.",
    telerouteFeatures: "Caracteristici Cheie: Program Garanție de Plată (asigură facturile neplătite pentru partenerii eligibili), integrare evaluare credit Coface, acces multi-platformă (web, mobil, desktop), integrare cu alte platforme Alpega, instrumente de optimizare rute.",
    teleroutePricing: "Prețuri: Pe bază de abonament, €200-400/lună. Garanția de Plată este suplimentară (procent din valoarea asigurată). Reduceri de pachet cu alte servicii Alpega.",
    telerouteStrengths: "Puncte forte: Garanție de Plată lider în industrie, istoric îndelungat, puternică în Franța/Benelux/Spania, parte din ecosistem mai larg.",
    telerouteWeaknesses: "Puncte slabe: Volum mai mic decât TIMOCOM/Trans.eu, costurile garanției de plată se acumulează, interfață mai puțin modernă.",
    paymentGuarantee: "Garanție de Plată (Coface)",
    euWideCoverage: "Acoperire la nivel UE",
    alpegaGroup: "Parte din Alpega Group",
    
    // Section 5: Transporeon
    transporeonTitle: "Transporeon",
    transporeonBadge: "Focus Enterprise",
    transporeonDesc: "Rețea expeditor-transportator cu funcții avansate de vizibilitate.",
    transporeonIntro: "Mai mult decât o bursă de marfă - Transporeon este o platformă completă expeditor-transportator focalizată pe logistica enterprise. 1.400+ expeditori și 145.000+ transportatori. Folosită pentru licitații, execuție și vizibilitate mai degrabă decât încărcături spot.",
    transporeonFeatures: "Caracteristici Cheie: eTendering pentru procese structurate RFQ, vizibilitate în timp real și tracking ETA, Managementul Sloturilor de Timp pentru programarea întâlnirilor, Management Doc & Curte pentru optimizarea încărcării, Comandă Fără Atingere (booking complet automatizat).",
    transporeonPricing: "Prețuri: Model de prețuri enterprise, de obicei €500+/lună pentru acces complet. Se pot aplica taxe de tranzacție. Înregistrarea transportatorului adesea gratuită pentru acces specific expeditorului.",
    transporeonStrengths: "Puncte forte: Cel mai bun pentru clienți enterprise, instrumente excelente de vizibilitate, management profesional de licitații, automatizări puternice.",
    transporeonWeaknesses: "Puncte slabe: Nu e ideal pentru piața spot pură, implementare complexă, cost mai mare, necesită adopția expeditorului.",
    eTendering: "Platformă eTendering",
    realTimeVisibility: "Vizibilitate în timp real",
    telematicsIntegration: "Integrare telematică",
    
    // Section 6: Other Platforms
    otherPlatformsTitle: "Alte Platforme Notabile",
    otherPlatformsContent: "Piața include mai multe alte burse valoroase: Wtransnet (puternică în Iberia), 123cargo (parte din Alpega, bună în Europa de Sud), Freightos (focalizată pe benchmarking rate de transport), Coyote (din SUA dar în expansiune în UE), și brokeri digitali emergenți precum Sennder și Uber Freight. Fiecare are puncte forte regionale specifice sau inovații tehnologice.",
    wtransnetDesc: "Wtransnet: Origine spaniolă, 12.000+ companii, acoperire puternică Iberia-Maroc, integrare tracking GPS în timp real.",
    freightosDesc: "Freightos: Benchmarking rate și oferte instantanee, în special pentru transport internațional/intercontinental.",
    sennderDesc: "Sennder: Freight forwarder digital cu propria rețea de capacitate, focus puternic pe Germania, abordare prioritar-tehnologică.",
    
    // Section 7: Comparison
    quickComparison: "Comparație Rapidă",
    platform: "Platformă",
    useCase: "Caz de Utilizare",
    keyFeature: "Caracteristică Cheie",
    dailySpotLoads: "Încărcături spot zilnice",
    ceeNetworkUse: "Rețea CEE",
    paymentSecurity: "Securitate plată",
    enterpriseTenders: "Licitații enterprise",
    
    // Section 8: How to Use Effectively
    howToUseTitle: "Cum să Folosești Bursele de Marfă Eficient",
    howToUseContent: "Succesul pe bursele de marfă necesită strategie, nu doar acces. Cei mai buni dispeceri dezvoltă abordări sistematice pentru postare, căutare și selecția partenerilor.",
    howToUsePosting: "Sfaturi Postare: Postează informații complete (adrese exacte încărcare/descărcare, ore, greutate, cerințe vehicul). Fii specific despre cerințele speciale (ADR, frigo, lift haion). Actualizează statusul disponibilității în timp real. Șterge comenzile ocupate imediat.",
    howToUseSearching: "Sfaturi Căutare: Configurează căutări salvate și alerte pentru rute regulate. Verifică ofertele noi la fiecare 30-60 minute în perioadele de vârf. Contactează mai mulți parteneri simultan - primul care confirmă câștigă. Folosește filtrele eficient (tip vehicul, greutate, regiune).",
    howToUseNegotiation: "Negociere: Cunoaște ratele curente de piață pentru rută (folosește date istorice). Începe negocierile cu prețuri realiste. Fii pregătit să te miști rapid - ofertele bune dispar repede. Construiește relații pentru prioritate viitoare.",
    
    // Section 9: Partner Verification
    verificationTitle: "Bune Practici Verificare Parteneri",
    verificationContent: "Nu rezerva niciodată cu un partener neverificat. Cele 10 minute petrecute pe verificare pot salva săptămâni de recuperare din fraudă sau neplată.",
    verificationChecklist: "Checklist Verificare: 1) Verifică ratingul platformei și istoricul recenziilor, 2) Verifică datele și acoperirea certificatului de asigurare, 3) Confirmă validitatea licenței de operare, 4) Verifică ratingul de credit dacă e disponibil, 5) Caută semnale de alarmă (cont nou, fără istoric, prețuri neobișnuite), 6) Verifică că datele de contact corespund înregistrării companiei, 7) Pentru marfă de mare valoare, sună pentru a verifica detaliile șoferului înainte de încărcare.",
    verificationRedFlags: "Semnale de Alarmă: Conturi noi cu prețuri agresive, cereri de plată în afara platformei, fără rating sau rating negativ, presiune pentru a sări peste pașii de verificare, detalii de contact netrasabile.",
    
    // Section 10: Payment Security
    paymentSecurityTitle: "Securitatea Plăților pe Burse",
    paymentSecurityContent: "Întârzierile și neplățile sunt comune în transportul spot. Protejează-te cu abordări sistematice.",
    paymentSecurityTips: "Sfaturi Protecție Plată: Folosește garanția de plată a platformei când e disponibilă (garanția Teleroute Coface este standard industrial). Setează limite de credit pentru parteneri noi (max €2.000-5.000 expunere inițială). Solicită plată în avans de la transportatori necunoscuți. Documentează totul - CMR, confirmare livrare, confirmare rată. Facturează imediat după livrare. Urmărește plățile restante în 3 zile.",
    
    // Section 11: TMS Integration
    tmsIntegrationTitle: "Integrarea cu Translogica TMS",
    tmsIntegrationContent: "Sistemele TMS moderne precum Translogica se integrează direct cu bursele majore, permițând flux de lucru continuu de la căutare la execuție.",
    tmsIntegrationFeatures: "Translogica + Burse: Căutare directă în interfața TMS, transfer automat de date (fără reintroducere manuală), sincronizare integrată rating parteneri, management documente legat de transport, reconciliere facturi cu confirmările bursei.",
    tmsIntegrationWorkflow: "Flux de lucru: 1) Creează comanda în Dispoplan, 2) Caută capacitate prin bursa integrată, 3) Selectează partenerul și transferă detaliile, 4) Confirmă rezervarea prin mesageria platformei, 5) Urmărește execuția cu actualizări integrate, 6) Facturează cu verificare automată a ratei.",
    
    // Section 12: Market Dynamics
    marketDynamicsTitle: "Înțelegerea Dinamicii Pieței",
    marketDynamicsContent: "Ratele burselor fluctuează bazat pe cerere și ofertă. Înțelegerea acestor tipare te ajută să planifici postările și negocierile.",
    marketDynamicsPatterns: "Tipare Rate: Luni-Miercuri: Rate mai mari (săptămâna începe, capacitate necesară). Joi-Vineri: Ratele scad (camioanele merg spre casă). Sfârșitul lunii: Presiune pe rate de la transportatori care au nevoie de volum. Sezon retail Q4: Prime de rate de 20-40%. Vara: Capacitate redusă (concedii), rate variabile.",
    marketDynamicsStrategy: "Sincronizare Strategică: Postează încărcături devreme în săptămână pentru cea mai bună acoperire. Caută oportunități de backhaul joi-vineri. Construiește parteneriate regulate pentru a evita agitația în perioadele de vârf. Blochează capacitatea pentru vârfuri previzibile în avans.",
    
    // Case Study
    caseStudyTitle: "Studiu de Caz: Găsirea Capacității în Sezon de Vârf",
    caseStudyContent: "15 Decembrie, 14:00: Clientul are nevoie de livrare urgentă de la Stuttgart la Lyon pentru 17 Decembrie. Toți transportatorii regulați complet ocupați din cauza aglomerării pre-Crăciun. Strategie bursă: Postat simultan pe TIMOCOM și Trans.eu. Căutat activ în timp ce așteptam răspunsuri. În 2 ore: 3 răspunsuri pe TIMOCOM, 5 pe Trans.eu.",
    caseStudyActions: "Acțiuni întreprinse: Verificat primii 3 candidați (rating, asigurare, credit). Sunat transportatorul preferat pentru confirmare detalii. Negociat €150 peste rata normală (acceptabil pentru urgență). Confirmat prin mesageria platformei cu documentație completă.",
    caseStudyLesson: "Lecție: Postarea pe mai multe platforme, căutarea activă și verificarea rapidă permit găsirea capacității chiar și pe piețe strânse. Prima de €150 a fost aprobată de client având în vedere urgența.",
    
    // Checklist
    checklistTitle: "Checklist Zilnic Utilizare Bursă",
    checklistItems: "1. Dimineața: Verifică toate comenzile deschise pentru răspunsuri | 2. Actualizează disponibilitatea vehiculelor pentru zi | 3. Postează încărcături noi cu detalii complete | 4. Verifică asigurarea oricărui partener nou înainte de rezervare | 5. Răspunde la întrebări în mai puțin de 1 oră | 6. Confirmă rezervările în scris prin platformă | 7. Actualizează/șterge comenzile ocupate imediat | 8. Documentează orice probleme pentru ratingul partenerilor | 9. Seara: Revizuiește comenzile și capacitatea pentru ziua următoare | 10. Săptămânal: Analizează care platforme au performat cel mai bine",
    
    // Best Practices
    bestPracticesTitle: "Bune Practici pentru Burse",
    checkRatings: "Verifică întotdeauna ratingul partenerului înainte de rezervare",
    verifyInsurance: "Verifică asigurarea și licențele",
    usePlatformMessaging: "Folosește mesageria platformei pentru audit trail",
    savePartners: "Salvează partenerii de încredere în TMS",
    usePaymentGuarantee: "Folosește Garanția de Plată pentru parteneri noi",
    checkDrivingBans: "Verifică țările cu interdicții de circulație",
    confirmDetails: "Confirmă toate detaliile în scris",
    ratePartners: "Evaluează partenerii după fiecare cursă",
    
    // Common Mistakes
    commonMistakesTitle: "Greșeli Frecvente de Evitat",
    commonMistake1: "Rezervare fără verificarea ratingului și istoricului partenerului",
    commonMistake2: "Comunicare în afara platformei (pierzi audit trail-ul)",
    commonMistake3: "Postare informații incomplete (greutate lipsă, ore, cerințe)",
    commonMistake4: "Neurmărirea cererilor de ofertă în mai puțin de 1 oră",
    commonMistake5: "Acceptarea ratelor suspicatos de mici fără verificare",
    
    // Glossary
    glossaryTitle: "Glosar Burse de Marfă",
    glossaryTerm1: "Piață Spot",
    glossaryDef1: "Rezervări de transport unice la ratele curente ale pieței, spre deosebire de rutele contractate cu prețuri fixe",
    glossaryTerm2: "Backhaul",
    glossaryDef2: "Încărcătură de retur pentru un camion care altfel ar călători gol. Adesea disponibilă la rate mai mici.",
    glossaryTerm3: "Garanție de Plată",
    glossaryDef3: "Program susținut de asigurare care plătește expeditorul/freight forwarderul dacă transportatorul nu plătește. Teleroute/Coface este standardul.",
    glossaryTerm4: "Verificare Credit",
    glossaryDef4: "Evaluarea stabilității financiare și istoricului de plăți al unei companii. Disponibilă pe majoritatea platformelor pentru membri.",
    glossaryTerm5: "Scor TransRisk",
    glossaryDef5: "Sistemul proprietar de scoring al Trans.eu combinând comportamentul de plată, validitatea asigurării și activitatea pe platformă.",
    glossaryTerm6: "eTendering",
    glossaryDef6: "Proces electronic de licitație pentru colectarea ofertelor de la mai mulți transportatori pe rute/volume definite.",
    glossaryTerm7: "Comandă Fără Atingere",
    glossaryDef7: "Rezervare complet automatizată unde potrivirea, confirmarea și execuția au loc fără intervenție manuală.",
    glossaryTerm8: "SLS (Smart Logistics System)",
    glossaryDef8: "Platforma integrată TIMOCOM combinând bursă, tracking și managementul partenerilor.",
    glossaryTerm9: "Managementul Sloturilor de Timp",
    glossaryDef9: "Programare digitală a întâlnirilor de încărcare/descărcare pentru reducerea timpilor de așteptare la facilități.",
    glossaryTerm10: "Benchmarking Rate",
    glossaryDef10: "Compararea ratelor oferite cu mediile pieței pentru a asigura prețuri competitive.",
    
    knowledgeCheck: "Verificare Cunoștințe: Burse de Marfă",
  },
  de: {
    chapterNumber: "Kapitel 23",
    chapterTitle: "Frachtenbörsen",
    heroDescription: "Die wichtigsten Plattformen zur Suche von Ladungen und LKWs in Europa. TIMOCOM, Trans.eu, Teleroute und Transporeon.",
    title: "Frachtenbörsen Überblick",
    subtitle: "Die wichtigsten Plattformen zur Suche von Ladungen und LKWs in Europa.",
    
    // Introduction
    intro: "Frachtenbörsen sind der Herzschlag des europäischen Spotverkehrs. Jeden Tag werden Millionen von Transportaufträgen auf diesen Plattformen eingestellt und gematcht. Für einen Spediteur ist die Beherrschung dieser Tools keine Option - sie ist essentiell für die Kapazitätsfindung, wenn man sie am dringendsten braucht. Dieses Kapitel vermittelt vertiefte Kenntnisse über die vier großen Plattformen und Best Practices für effektive Nutzung.",
    
    // Section 1: What is a Freight Exchange
    whatIsExchangeTitle: "Was ist eine Frachtenbörse?",
    whatIsExchangeContent: "Eine Frachtenbörse ist ein digitaler Marktplatz, wo Versender Transportaufträge (Ladungen) einstellen und Frachtführer verfügbare Kapazität (LKWs) anbieten. Die Plattform ermöglicht Matching, Kommunikation und oft Zahlungssicherheit. Anders als Direktverträge werden Börsen hauptsächlich für den Spotmarkt genutzt - Einzeltransporte zu aktuellen Marktpreisen.",
    whatIsExchangeDetail1: "Vorteile: Schneller Zugang zu Kapazität/Ladungen, Preistransparenz, breites Netzwerk ohne Einzelverträge, Bewertungssysteme zur Partnerverifizierung.",
    whatIsExchangeDetail2: "Nachteile: Raten oft niedriger als Direktverträge, hoher Wettbewerb, Qualitätsvariation, Zeitaufwand für Partnerverifizierung.",
    
    // Section 2: TIMOCOM
    timocomTitle: "TIMOCOM",
    timocomBadge: "Meistgenutzt in EU",
    timocomDesc: "Führende europäische Frachtenbörse mit umfassender Partnerverifizierung.",
    timocomIntro: "1997 in Deutschland gegründet, ist TIMOCOM die größte Frachtenbörse in Europa mit über 54.000 verifizierten Unternehmen und 140.000+ täglichen Angeboten. Stark in West- und Mitteleuropa, besonders Deutschland, Österreich, Benelux und zunehmend Osteuropa.",
    timocomFeatures: "Hauptmerkmale: Smart Logistics System (SLS) für integriertes Transportmanagement, Partnerverifizierung mit Bonitätsprüfungen und Versicherungsvalidierung, integrierte Translogica TMS-Anbindung, Echtzeit-Tracking-Schnittstelle, Zahlungszeitlinien-Monitoring.",
    timocomPricing: "Preise: Monatliches Abomodell, typischerweise €300-500/Monat je nach Modulen. Keine Transaktionsgebühren. Kostenlose Testversion verfügbar.",
    timocomStrengths: "Stärken: Höchstes Vertrauensniveau durch rigorose Verifizierung, exzellente Abdeckung in DACH-Region, starke TMS-Integrationen, umfassende Business Intelligence Tools.",
    timocomWeaknesses: "Schwächen: Höhere Abokosten als Wettbewerber, Oberfläche kann veraltet wirken, weniger stark in Südeuropa.",
    findPostLoads: "Ladungen/LKWs finden und einstellen",
    partnerVerification: "Partnerverifizierung & Bewertung",
    integratedTms: "In Translogica TMS integriert",
    
    // Section 3: Trans.eu
    transeuTitle: "Trans.eu",
    transeuBadge: "Stark in CEE",
    transeuDesc: "Verifiziertes Netzwerk mit starker Präsenz in Zentral-/Osteuropa.",
    transeuIntro: "Plattform polnischen Ursprungs, die CEE-Märkte dominiert. Über 40.000 Unternehmen und 400.000 Ladungen täglich. Besonders stark für Transport mit Polen, Tschechien, Slowakei, Ungarn, Rumänien und dem Baltikum.",
    transeuFeatures: "Hauptmerkmale: TransRisk-Scoring-System zur Partner-Risikobewertung, private Ausschreibungen für regelmäßige Routen, In-App-Messaging und Dokumentenaustausch, TransRisk-Scoring mit Zahlungsverhaltensanalyse, Mobile App für unterwegs.",
    transeuPricing: "Preise: Gestaffelte Preise nach Unternehmensgröße und Funktionen. Basis ab €150/Monat, Vollpaket €300+/Monat. Einzelangebotspreise für Nutzer mit geringem Volumen verfügbar.",
    transeuStrengths: "Stärken: Beste CEE-Abdeckung, wettbewerbsfähige Preise, exzellente Mobile App, starke Community-Features, TransRisk-Verhaltensscoring.",
    transeuWeaknesses: "Schwächen: Weniger etabliert in Westeuropa, variable Verifizierungsstandards in einigen Regionen.",
    ceeNetwork: "CEE/EU verifiziertes Netzwerk",
    privateTenders: "Private Ausschreibungen, In-App-Chat",
    transRisk: "TransRisk-Bewertungssystem",
    
    // Section 4: Teleroute
    telerouteTitle: "Teleroute",
    telerouteBadge: "Zahlungsschutz",
    telerouteDesc: "EU-weite Plattform mit Coface-gestützter Zahlungsgarantie.",
    telerouteIntro: "Teil der Alpega Group (zusammen mit 123cargo und Wtransnet), Teleroute operiert seit 1985. Starke Präsenz in Frankreich, Benelux und Spanien. Bekannt für das Zahlungsgarantie-Programm mit Coface-Versicherung.",
    telerouteFeatures: "Hauptmerkmale: Zahlungsgarantie-Programm (versichert unbezahlte Rechnungen für qualifizierte Partner), Coface-Bonitätsbewertungs-Integration, Multiplattform-Zugang (Web, Mobil, Desktop), Integration mit anderen Alpega-Plattformen, Routenoptimierungs-Tools.",
    teleroutePricing: "Preise: Abobasiert, €200-400/Monat. Zahlungsgarantie ist zusätzlich (Prozentsatz des versicherten Wertes). Paketrabatte mit anderen Alpega-Diensten.",
    telerouteStrengths: "Stärken: Branchenführende Zahlungsgarantie, lange Erfolgsgeschichte, stark in Frankreich/Benelux/Spanien, Teil eines größeren Ökosystems.",
    telerouteWeaknesses: "Schwächen: Geringeres Volumen als TIMOCOM/Trans.eu, Zahlungsgarantie-Kosten summieren sich, weniger moderne Oberfläche.",
    paymentGuarantee: "Zahlungsgarantie (Coface)",
    euWideCoverage: "EU-weite Abdeckung",
    alpegaGroup: "Teil der Alpega Group",
    
    // Section 5: Transporeon
    transporeonTitle: "Transporeon",
    transporeonBadge: "Enterprise-Fokus",
    transporeonDesc: "Versender-Frachtführer-Netzwerk mit erweiterten Sichtbarkeitsfunktionen.",
    transporeonIntro: "Mehr als eine Frachtenbörse - Transporeon ist eine komplette Versender-Frachtführer-Plattform mit Fokus auf Enterprise-Logistik. 1.400+ Versender und 145.000+ Frachtführer. Genutzt für Ausschreibungen, Ausführung und Sichtbarkeit statt Spotladungen.",
    transporeonFeatures: "Hauptmerkmale: eTendering für strukturierte RFQ-Prozesse, Echtzeit-Sichtbarkeit und ETA-Tracking, Zeitfenster-Management für Terminplanung, Dock- & Yard-Management für Beladungsoptimierung, No-Touch Order (vollautomatische Buchung).",
    transporeonPricing: "Preise: Enterprise-Preismodell, typischerweise €500+/Monat für Vollzugang. Transaktionsgebühren können anfallen. Frachtführer-Registrierung oft kostenlos für versenderspezifischen Zugang.",
    transporeonStrengths: "Stärken: Am besten für Enterprise-Kunden, exzellente Sichtbarkeits-Tools, professionelles Ausschreibungsmanagement, starke Automatisierungen.",
    transporeonWeaknesses: "Schwächen: Nicht ideal für reinen Spotmarkt, komplexe Implementierung, höhere Kosten, erfordert Versender-Adoption.",
    eTendering: "eTendering-Plattform",
    realTimeVisibility: "Echtzeit-Sichtbarkeit",
    telematicsIntegration: "Telematik-Integration",
    
    // Section 6: Other Platforms
    otherPlatformsTitle: "Weitere nennenswerte Plattformen",
    otherPlatformsContent: "Der Markt umfasst mehrere weitere wertvolle Börsen: Wtransnet (stark in Iberien), 123cargo (Teil von Alpega, gut in Südeuropa), Freightos (fokussiert auf Frachtraten-Benchmarking), Coyote (US-basiert aber expandiert in EU), und aufstrebende digitale Broker wie Sennder und Uber Freight. Jede hat spezifische regionale Stärken oder technologische Innovationen.",
    wtransnetDesc: "Wtransnet: Spanischer Ursprung, 12.000+ Unternehmen, starke Iberien-Marokko-Abdeckung, Echtzeit-GPS-Tracking-Integration.",
    freightosDesc: "Freightos: Raten-Benchmarking und Sofortangebote, besonders für internationalen/interkontinentalen Frachtverkehr.",
    sennderDesc: "Sennder: Digitaler Spediteur mit eigenem Kapazitätsnetzwerk, starker Deutschland-Fokus, Technologie-first-Ansatz.",
    
    // Section 7: Comparison
    quickComparison: "Schnellvergleich",
    platform: "Plattform",
    useCase: "Anwendungsfall",
    keyFeature: "Hauptmerkmal",
    dailySpotLoads: "Tägliche Spotladungen",
    ceeNetworkUse: "CEE-Netzwerk",
    paymentSecurity: "Zahlungssicherheit",
    enterpriseTenders: "Enterprise-Ausschreibungen",
    
    // Section 8: How to Use Effectively
    howToUseTitle: "Wie man Frachtenbörsen effektiv nutzt",
    howToUseContent: "Erfolg auf Frachtenbörsen erfordert Strategie, nicht nur Zugang. Die besten Disponenten entwickeln systematische Ansätze für Einstellen, Suchen und Partnerauswahl.",
    howToUsePosting: "Einstellungstipps: Vollständige Informationen einstellen (exakte Be-/Entladeadressen, Zeiten, Gewicht, Fahrzeuganforderungen). Spezifisch bei besonderen Anforderungen sein (ADR, Frigo, Ladebordwand). Verfügbarkeitsstatus in Echtzeit aktualisieren. Besetzte Aufträge sofort entfernen.",
    howToUseSearching: "Suchtipps: Gespeicherte Suchen und Alerts für regelmäßige Routen einrichten. Neue Angebote alle 30-60 Minuten zu Spitzenzeiten prüfen. Mehrere Partner gleichzeitig kontaktieren - wer zuerst bestätigt, gewinnt. Filter effektiv nutzen (Fahrzeugtyp, Gewicht, Region).",
    howToUseNegotiation: "Verhandlung: Aktuelle Marktpreise für die Route kennen (historische Daten nutzen). Verhandlungen mit realistischen Preisen beginnen. Bereit sein, schnell zu handeln - gute Angebote verschwinden schnell. Beziehungen für zukünftige Priorität aufbauen.",
    
    // Section 9: Partner Verification
    verificationTitle: "Best Practices Partnerverifizierung",
    verificationContent: "Niemals mit einem nicht verifizierten Partner buchen. Die 10 Minuten für Verifizierung können Wochen Erholung von Betrug oder Zahlungsausfall sparen.",
    verificationChecklist: "Verifizierungs-Checkliste: 1) Plattform-Bewertung und Rezensionshistorie prüfen, 2) Versicherungszertifikat-Daten und Deckung verifizieren, 3) Gültigkeit der Betriebslizenz bestätigen, 4) Bonitätsbewertung prüfen wenn verfügbar, 5) Nach Warnsignalen suchen (neues Konto, keine Historie, ungewöhnliche Preise), 6) Kontaktdaten mit Firmenregistrierung abgleichen, 7) Bei hochwertiger Ladung anrufen, um Fahrerdaten vor Beladung zu verifizieren.",
    verificationRedFlags: "Warnsignale: Neue Konten mit aggressiven Preisen, Zahlungsaufforderungen außerhalb der Plattform, keine oder negative Bewertungen, Druck, Verifizierungsschritte zu überspringen, nicht nachverfolgbare Kontaktdaten.",
    
    // Section 10: Payment Security
    paymentSecurityTitle: "Zahlungssicherheit auf Börsen",
    paymentSecurityContent: "Zahlungsverzögerungen und -ausfälle sind im Spotverkehr häufig. Schützen Sie sich mit systematischen Ansätzen.",
    paymentSecurityTips: "Zahlungsschutz-Tipps: Plattform-Zahlungsgarantie nutzen wenn verfügbar (Teleroute Coface-Garantie ist Industriestandard). Kreditlimits für neue Partner setzen (max €2.000-5.000 anfängliches Risiko). Vorauszahlung von unbekannten Frachtführern verlangen. Alles dokumentieren - CMR, Lieferbestätigung, Ratenbestätigung. Sofort nach Lieferung fakturieren. Überfällige Zahlungen innerhalb von 3 Tagen nachverfolgen.",
    
    // Section 11: TMS Integration
    tmsIntegrationTitle: "Integration mit Translogica TMS",
    tmsIntegrationContent: "Moderne TMS-Systeme wie Translogica integrieren sich direkt mit großen Börsen und ermöglichen nahtlosen Workflow von Suche bis Ausführung.",
    tmsIntegrationFeatures: "Translogica + Börsen: Direktsuche innerhalb der TMS-Oberfläche, automatischer Datentransfer (keine manuelle Neueingabe), integrierte Partnerbewertungs-Synchronisation, Dokumentenmanagement verknüpft mit Transport, Rechnungsabgleich mit Börsenbestätigungen.",
    tmsIntegrationWorkflow: "Workflow: 1) Auftrag in Dispoplan erstellen, 2) Kapazität über integrierte Börse suchen, 3) Partner auswählen und Details übertragen, 4) Buchung über Plattform-Messaging bestätigen, 5) Ausführung mit integrierten Updates verfolgen, 6) Mit automatischer Ratenverifizierung fakturieren.",
    
    // Section 12: Market Dynamics
    marketDynamicsTitle: "Marktdynamiken verstehen",
    marketDynamicsContent: "Börsenraten schwanken basierend auf Angebot und Nachfrage. Das Verständnis dieser Muster hilft bei Timing von Einstellungen und Verhandlungen.",
    marketDynamicsPatterns: "Ratenmuster: Montag-Mittwoch: Höhere Raten (Wochenstart, Kapazität benötigt). Donnerstag-Freitag: Raten sinken (LKWs fahren nach Hause). Monatsende: Ratendruck von Frachtführern die Volumen brauchen. Q4 Retail-Saison: Ratenprämien von 20-40%. Sommer: Reduzierte Kapazität (Urlaub), variable Raten.",
    marketDynamicsStrategy: "Strategisches Timing: Ladungen früh in der Woche einstellen für beste Abdeckung. Backhaul-Möglichkeiten Donnerstag-Freitag suchen. Regelmäßige Partnerschaften aufbauen um Spitzenzeit-Hektik zu vermeiden. Kapazität für vorhersehbare Spitzen im Voraus sichern.",
    
    // Case Study
    caseStudyTitle: "Fallstudie: Kapazitätsfindung in der Hochsaison",
    caseStudyContent: "15. Dezember, 14:00: Kunde braucht dringende Lieferung von Stuttgart nach Lyon für 17. Dezember. Alle Stammfrachtführer komplett ausgebucht wegen Vorweihnachtsrush. Börsenstrategie: Gleichzeitig auf TIMOCOM und Trans.eu eingestellt. Aktiv gesucht während auf Antworten gewartet wurde. Innerhalb 2 Stunden: 3 Antworten auf TIMOCOM, 5 auf Trans.eu.",
    caseStudyActions: "Ergriffene Maßnahmen: Top 3 Kandidaten verifiziert (Bewertung, Versicherung, Bonität). Bevorzugten Frachtführer angerufen zur Detailbestätigung. €150 über Normalrate verhandelt (akzeptabel für Dringlichkeit). Über Plattform-Messaging mit vollständiger Dokumentation bestätigt.",
    caseStudyLesson: "Lektion: Multi-Plattform-Einstellung, aktive Suche und schnelle Verifizierung ermöglichen Kapazitätsfindung selbst in engen Märkten. Die €150 Prämie war vom Kunden angesichts der Dringlichkeit genehmigt.",
    
    // Checklist
    checklistTitle: "Tägliche Börsennutzungs-Checkliste",
    checklistItems: "1. Morgens: Alle offenen Aufträge auf Antworten prüfen | 2. Fahrzeugverfügbarkeit für den Tag aktualisieren | 3. Neue Ladungen mit vollständigen Details einstellen | 4. Versicherung bei jedem neuen Partner vor Buchung verifizieren | 5. Auf Anfragen innerhalb 1 Stunde antworten | 6. Buchungen schriftlich über Plattform bestätigen | 7. Besetzte Aufträge sofort aktualisieren/entfernen | 8. Alle Probleme für Partnerbewertungen dokumentieren | 9. Abends: Aufträge und Kapazität für nächsten Tag prüfen | 10. Wöchentlich: Analysieren welche Plattformen am besten performten",
    
    // Best Practices
    bestPracticesTitle: "Best Practices für Börsen",
    checkRatings: "Partner-Bewertungen vor Buchung immer prüfen",
    verifyInsurance: "Versicherung und Lizenzen überprüfen",
    usePlatformMessaging: "Plattform-Nachrichten für Audit-Trail nutzen",
    savePartners: "Zuverlässige Partner im TMS speichern",
    usePaymentGuarantee: "Zahlungsgarantie für neue Partner nutzen",
    checkDrivingBans: "Fahrverbots-Länder prüfen",
    confirmDetails: "Alle Details schriftlich bestätigen",
    ratePartners: "Partner nach jedem Auftrag bewerten",
    
    // Common Mistakes
    commonMistakesTitle: "Häufige Fehler vermeiden",
    commonMistake1: "Buchen ohne Partnerbewertung und -historie zu prüfen",
    commonMistake2: "Kommunikation außerhalb der Plattform (Audit-Trail verlieren)",
    commonMistake3: "Unvollständige Informationen einstellen (fehlendes Gewicht, Zeiten, Anforderungen)",
    commonMistake4: "Angebotsanfragen nicht innerhalb 1 Stunde nachverfolgen",
    commonMistake5: "Verdächtig niedrige Raten ohne Verifizierung akzeptieren",
    
    // Glossary
    glossaryTitle: "Glossar Frachtenbörsen",
    glossaryTerm1: "Spotmarkt",
    glossaryDef1: "Einmalige Transportbuchungen zu aktuellen Marktpreisen, im Gegensatz zu vertraglich vereinbarten Routen mit Festpreisen",
    glossaryTerm2: "Backhaul",
    glossaryDef2: "Rückfracht für einen LKW, der sonst leer fahren würde. Oft zu günstigeren Raten verfügbar.",
    glossaryTerm3: "Zahlungsgarantie",
    glossaryDef3: "Versicherungsgestütztes Programm, das Versender/Spediteur bezahlt wenn Frachtführer nicht zahlt. Teleroute/Coface ist der Standard.",
    glossaryTerm4: "Bonitätsprüfung",
    glossaryDef4: "Bewertung der finanziellen Stabilität und Zahlungshistorie eines Unternehmens. Auf den meisten Plattformen für Mitglieder verfügbar.",
    glossaryTerm5: "TransRisk-Score",
    glossaryDef5: "Das proprietäre Scoring-System von Trans.eu, das Zahlungsverhalten, Versicherungsgültigkeit und Plattformaktivität kombiniert.",
    glossaryTerm6: "eTendering",
    glossaryDef6: "Elektronischer Ausschreibungsprozess zum Sammeln von Angeboten mehrerer Frachtführer auf definierten Routen/Volumen.",
    glossaryTerm7: "No-Touch Order",
    glossaryDef7: "Vollautomatische Buchung, bei der Matching, Bestätigung und Ausführung ohne manuelle Intervention erfolgen.",
    glossaryTerm8: "SLS (Smart Logistics System)",
    glossaryDef8: "TIMOCOMs integrierte Plattform, die Börse, Tracking und Partnermanagement kombiniert.",
    glossaryTerm9: "Zeitfenster-Management",
    glossaryDef9: "Digitale Terminplanung für Be-/Entladungen zur Reduzierung von Wartezeiten an Standorten.",
    glossaryTerm10: "Raten-Benchmarking",
    glossaryDef10: "Vergleich angebotener Raten mit Marktdurchschnitten zur Sicherstellung wettbewerbsfähiger Preise.",
    
    knowledgeCheck: "Wissenstest: Frachtenbörsen",
  },
};
