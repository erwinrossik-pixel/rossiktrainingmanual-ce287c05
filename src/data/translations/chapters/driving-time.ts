export const drivingTimeTranslations: Record<string, Record<string, string>> = {
  en: {
    chapterNumber: "Chapter 6",
    chapterTitle: "Driving Time",
    heroDescription: "Understanding the critical difference between shift time and actual driving time for EU compliance.",
    title: "Shift Time vs Driving Time",
    subtitle: "Understanding the critical difference between shift time and actual driving time.",
    
    // Introduction
    intro: "Driving time regulations are the backbone of EU road transport safety. Violations can result in fines of €500-5,000, vehicle impoundment, and even criminal charges for repeated offenses. Understanding the difference between driving time and shift time is not optional - it's essential for every freight forwarder, dispatcher, and driver. This chapter covers EU Regulation 561/2006 and the practical knowledge needed to plan compliant transports.",
    
    // Section 1: Driving Time Definition
    drivingTimeTitle: "Driving Time",
    drivingTimeDesc: "Time when the driver is actively controlling the truck on the road. Does not include time when the truck is stopped.",
    drivingTimeDetail1: "Driving time is recorded automatically by the digital tachograph when the vehicle is moving. Even movement at 1 km/h counts as driving time.",
    drivingTimeDetail2: "The counter continues during traffic jams, stop-and-go traffic, and any time the wheels are turning with the driver in control.",
    dailyLimit: "Daily limit:",
    weeklyLimit: "Weekly limit:",
    
    // Section 2: Shift Time Definition
    shiftTimeTitle: "Shift Time",
    shiftTimeDesc: "Total working time including all activities: waiting, loading/unloading, customs documents, etc.",
    shiftTimeDetail1: "Shift time (Arbeitszeit/timp de tură) includes: driving, loading/unloading, securing cargo, completing documents, vehicle checks, waiting at ramps, customs procedures, and any other work-related activity.",
    shiftTimeDetail2: "Rest and breaks are NOT part of shift time. A 15-hour shift includes work + driving + waiting, but excludes the 9-hour rest period.",
    singleMannedMax: "Single-manned max:",
    doubleMannedMax: "Double-manned max:",
    
    // Section 3: Traffic Jam Warning
    trafficJamWarning: "Traffic Jam = Driving Time!",
    trafficJamDesc: "Time stuck in traffic is 100% counted as driving time. Only when you park safely and switch the tachograph mode to BREAK/REST does the time stop counting.",
    trafficJamDetail1: "This is one of the most common violations. Drivers stuck in traffic for hours often exceed their daily limit without realizing it. The tachograph doesn't care about the reason - it counts every second of vehicle operation.",
    trafficJamDetail2: "Solution: Use real-time traffic apps (Google Maps, Waze, TomTom Traffic) to anticipate delays. If traffic is unavoidable and will cause a limit breach, exit and park safely BEFORE the limit is reached.",
    whatToDoIfTraffic: "What to do if traffic will exceed your limit:",
    trafficTip1: "Exit immediately if possible, find safe parking",
    trafficTip2: "Apply handbrake, switch tacho to BREAK/REST",
    trafficTip3: "Take your 45-minute break",
    trafficTip4: "If unavoidable, use Art.12 exception and document the reason",
    
    // Section 4: Daily and Weekly Limits Detail
    limitsTitle: "Daily and Weekly Limits Explained",
    limitsContent: "Standard daily driving: 9 hours maximum. Extended daily driving: 10 hours maximum, allowed only twice per week. Weekly driving: 56 hours maximum. Bi-weekly driving: 90 hours maximum over any two consecutive weeks. These limits are cumulative - if you drive 60 hours in week 1, you can only drive 30 hours in week 2.",
    limitsDetail1: "Example: Monday 9h + Tuesday 10h + Wednesday 9h + Thursday 10h + Friday 9h + Saturday 9h = 56h (exactly at weekly limit). No Sunday driving possible.",
    limitsDetail2: "The 90-hour bi-weekly limit catches many drivers. If week 1 = 56h, week 2 can only be 34h maximum. Planning ahead is essential.",
    
    // Section 5: Breaks
    breaksTitle: "Mandatory Breaks",
    breaksContent: "After 4.5 hours of driving, a 45-minute break is mandatory. This break can be split into 15 + 30 minutes (in that order only). The break must be uninterrupted - no work, no driving, no signing documents. The driver must be free from all duties.",
    breaksDetail1: "Split break rule: 15 minutes first, then 30 minutes. NOT 20+25, NOT 30+15, NOT 45 continuous. Only 15 then 30 is valid for split breaks.",
    breaksDetail2: "A break resets the 4.5-hour driving clock. After a 45-minute break, the driver can drive another 4.5 hours.",
    breaksSplit: "Break splitting:",
    breaksSplitDesc: "15 min + 30 min (only in this order)",
    
    // Section 6: Rest Periods
    restTitle: "Daily Rest Periods",
    restContent: "Regular daily rest: 11 consecutive hours within each 24-hour period. Reduced daily rest: 9 consecutive hours, allowed maximum 3 times between weekly rests. Split daily rest: 3 hours + 9 hours = 12 hours total (increases the daily rest requirement by 1 hour).",
    restDetail1: "The 24-hour clock starts at the END of the previous rest period. If rest ends at 06:00 Monday, the next rest must start by 06:00 Tuesday at the latest.",
    restDetail2: "Ferry/train exception: Daily rest can be interrupted up to twice for boarding/disembarking, maximum 1 hour total interruption, if driver has access to a bunk/cabin.",
    regularRest: "Regular rest:",
    reducedRest: "Reduced rest:",
    splitRest: "Split rest:",
    
    // Section 7: Weekly Rest
    weeklyRestTitle: "Weekly Rest Periods",
    weeklyRestContent: "Regular weekly rest: 45 consecutive hours. Reduced weekly rest: 24 consecutive hours (must be compensated before the end of the third week). Maximum 6 driving periods between weekly rests. After 6 daily driving periods, a weekly rest is mandatory.",
    weeklyRestDetail1: "Reduced weekly rest compensation: The 21-hour difference (45-24=21) must be attached en bloc to another rest of at least 9 hours before the end of the third week following the reduced rest.",
    weeklyRestDetail2: "In any 4 consecutive weeks, a driver must have at least 2 regular weekly rests (45h) or 1 regular + 1 reduced (with compensation).",
    weeklyRestLocation: "Location rule: Reduced weekly rest can be taken in the vehicle if the vehicle has appropriate sleeping facilities. Regular weekly rest (45h) should NOT be taken in the vehicle in some countries (France, Belgium, Germany - with fines).",
    
    // Section 8: Single-Manned Operations
    singleMannedTitle: "Single-Manned (1 Driver)",
    singleMannedContent: "Standard single-driver operation for long-haul transport. The driver is alone and must respect all individual driving and rest limits.",
    parameter: "Parameter",
    value: "Value",
    maxDailyDriving: "Max daily driving",
    maxShiftTime: "Max shift time",
    dailyRest: "Daily rest",
    weeklyDriving: "Weekly driving",
    distancePerDay: "Distance/day",
    exampleSchedule: "Example Schedule:",
    singleMannedSchedule: "06:00 start driving → 10:30 break 45min → 11:15 continue → 15:15 end (9h driving). Available for next day: after 11h rest = 02:15 next day.",
    
    // Section 9: Double-Manned Operations
    doubleMannedTitle: "Double-Manned (2 Drivers)",
    doubleMannedContent: "Two drivers share one vehicle. While one drives, the other can rest in the bunk. This dramatically increases daily distance capability.",
    doubleMannedAdvantage: "Big Advantage:",
    doubleMannedAdvantageDesc: "Two drivers = almost non-stop truck. Each driver respects their own 9/10h limit while the truck keeps moving.",
    doubleMannedDetail1: "Within the first hour of the shift, both drivers must be present. After that, one can rest while the other drives. The 'resting' driver's time in the bunk counts as a break/rest, not as driving.",
    doubleMannedDetail2: "Double-manned allows 21-hour shifts (2 x 9h driving + 2 x 45min breaks + coordination). Practical maximum distance: ~1,500 km per 24 hours.",
    doubleMannedSchedule: "Double crew schedule: Driver A: 06:00-10:30 (4.5h), break in bunk. Driver B: 06:00-10:30 resting, 10:30-15:00 driving. Driver A: 15:00-19:30 driving. Both rest overnight.",
    
    // Section 10: Speed and Distance Calculations
    avgSpeedTitle: "Average Speed Calculation",
    avgSpeedDesc: "While trucks can run at 80+ km/h, we calculate with 70-75 km/h to include traffic, loading times, and breaks. This gives realistic ETAs.",
    avgSpeedDetail1: "Speed limit for trucks >3.5t: DE 80 km/h, FR 80-90 km/h, IT 70-90 km/h, PL 70-80 km/h, ES 80-90 km/h. Most highways limit trucks to 80 km/h.",
    avgSpeedDetail2: "Realistic calculation: 9h driving × 70 km/h average = 630 km/day single-manned. Double-manned: 18h × 70 km/h = 1,260 km/day theoretical, ~1,100 km practical.",
    distanceTable: "Distance Reference",
    distanceTableDesc: "Typical distances per driving configuration",
    
    // Section 11: Driving Bans
    drivingBansTitle: "Weekend & Holiday Driving Bans",
    drivingBansDesc: "Trucks >3.5t have driving restrictions in many European countries:",
    drivingBansDetail1: "Germany: Sundays and public holidays 00:00-22:00. Exceptions for perishables, live animals, and specific permits.",
    drivingBansDetail2: "Austria: Saturdays 15:00-24:00, Sundays and holidays 00:00-22:00. Tirol has additional night bans (22:00-05:00).",
    drivingBansDetail3: "France: Saturdays 22:00-22:00 Sunday (certain roads), major holiday weekends have extended bans.",
    drivingBansDetail4: "Italy: Sundays and holidays, varying hours by season (summer more restrictive).",
    country: "Country",
    banHours: "Ban Hours",
    
    // Section 12: Tirol Special
    tirolTitle: "Austria/Tirol Special Restrictions",
    tirolNote: "Night driving bans, sectoral driving bans, and double toll between 22:00-05:00 on Brenner. Plan alternative corridors if needed.",
    tirolDetail1: "Brenner corridor (A12/A13): Night ban 20:00-05:00 for Euro 0-V trucks with >7.5t. Sectoral ban prohibits certain goods entirely (tiles, marble, cars, waste, etc.).",
    tirolDetail2: "Block handling (Blockabfertigung): Austria limits the number of trucks crossing Brenner per hour to reduce congestion. This can cause 5-10 hour delays. Check oeamtc.at for current wait times.",
    tirolAlternatives: "Alternatives to Brenner: Felbertauern Tunnel (A10→Lienz→B100), Reschenpass (Vinschgau), Tarvisio (A23 through Slovenia). Each has its own restrictions and tolls.",
    
    // Section 13: Tachograph
    tachographTitle: "Digital Tachograph Operation",
    tachographContent: "Modern trucks use digital tachographs that automatically record driving data. The driver card stores 28 days of data and must be downloaded every 28 days. Vehicle unit data must be downloaded every 90 days.",
    tachographDetail1: "Driver card: Personal, non-transferable. Insert before starting. Remove only during breaks >9h or when leaving the vehicle for extended periods.",
    tachographDetail2: "Manual entries: Required for periods where no card was inserted (ferry, rest at home, other work). Must be done BEFORE starting to drive.",
    tachographModes: "Tachograph modes: Work (loading/unloading/documents), Drive (automatic when moving), Break/Rest (crossed hammers), Available (waiting time for second driver).",
    
    // Section 14: Violations and Penalties
    violationsTitle: "Violations and Penalties",
    violationsContent: "EU Regulation 561/2006 is enforced through roadside checks and company audits. Violations are categorized as minor, serious, or very serious, with corresponding penalties.",
    violationDetail1: "Minor violations: Exceeding daily driving by <1 hour, reducing rest by <1 hour. Fine: €100-300.",
    violationDetail2: "Serious violations: Exceeding daily driving by 1-2 hours, no weekly rest. Fine: €300-1,000.",
    violationDetail3: "Very serious violations: Exceeding daily driving by >2 hours, manipulating tachograph, driving without valid card. Fine: €1,000-5,000+, possible criminal charges.",
    violationLiability: "Liability: Both driver AND company can be fined. Companies must organize work to allow legal compliance. 'Customer pressure' is not a defense.",
    
    // Section 15: Article 12 Exception
    article12Title: "Article 12 Exception",
    article12Content: "In exceptional circumstances, a driver may depart from driving and rest rules to reach a safe stopping place. This applies to unforeseen events like accidents, severe weather, or road closures.",
    article12Detail1: "The exception is NOT a blank check. It covers reaching safety, not completing the journey. Once safe, normal rules resume.",
    article12Detail2: "Documentation is essential: Write the reason, nature, and extent of departure on the tachograph printout or on the back of the manual record. Keep this for 28 days minimum.",
    article12Examples: "Valid examples: Unexpected road closure forcing long detour, severe accident blocking highway, sudden severe weather (blizzard, flooding). NOT valid: Traffic, customer pressure, schedule delays.",
    
    // Case Study
    caseStudyTitle: "Case Study: The Stuttgart Traffic Disaster",
    caseStudyContent: "A driver with 8.5 hours driving logged was 30 minutes from destination near Stuttgart. A major accident closed the A8 completely. Traffic was stopped for 3 hours. The driver's 9-hour limit was breached by 2.5 hours before he could exit.",
    caseStudyActions: "Correct actions: 1) After 30 min in static traffic, exit at next possibility. 2) Find parking (industrial area, gas station). 3) Switch tacho to rest. 4) Write Art.12 explanation on printout. 5) Call dispatcher to arrange relief or revised schedule.",
    caseStudyLesson: "Lesson: Never drive 'to the limit' when destination is not guaranteed. Always keep 1-2 hour buffer for unexpected events.",
    
    // Checklist
    checklistTitle: "Driving Time Compliance Checklist",
    checklistItems: "1. Driver card inserted and functioning? | 2. Manual entries for previous days completed? | 3. Driving time so far today logged correctly? | 4. Weekly limit status checked? | 5. Weekly rest compensation up to date? | 6. Break schedule planned for next 4.5h? | 7. Driving ban countries on route checked? | 8. Traffic and weather conditions verified? | 9. Buffer time included for delays? | 10. Article 12 procedure understood?",
    
    // Best Practices
    bestPractice1: "Always keep 1-2 hours buffer before daily limit - unexpected delays happen",
    bestPractice2: "Download driver card data weekly, not just at 28-day deadline",
    bestPractice3: "Use real-time traffic apps to anticipate delays and adjust breaks",
    bestPractice4: "Plan weekly rest locations in advance - parking is limited on weekends",
    bestPractice5: "Train on Art.12 usage - know when and how to apply exceptions correctly",
    
    // Common Mistakes
    commonMistake1: "Treating traffic jam time as 'break' - it's still driving time",
    commonMistake2: "Split break in wrong order (30+15 instead of 15+30)",
    commonMistake3: "Forgetting to compensate reduced weekly rest within 3 weeks",
    commonMistake4: "Taking 45h rest in vehicle in countries where it's prohibited",
    commonMistake5: "No written documentation when using Article 12 exception",
    
    // Glossary
    glossaryTitle: "Glossary Driving Time",
    glossaryTerm1: "Digital Tachograph",
    glossaryDef1: "Electronic device that automatically records driving time, rest periods, and vehicle speed. Mandatory in EU trucks since 2006.",
    glossaryTerm2: "Driver Card",
    glossaryDef2: "Personal smart card that stores 28 days of driving data. Must be downloaded regularly and is valid for 5 years.",
    glossaryTerm3: "Driving Time",
    glossaryDef3: "Time spent actively operating the vehicle on the road. Recorded automatically when wheels are turning.",
    glossaryTerm4: "Shift Time (Working Time)",
    glossaryDef4: "Total time of all work activities: driving, loading, documents, waiting. Excludes breaks and rest periods.",
    glossaryTerm5: "Daily Rest",
    glossaryDef5: "Mandatory rest period of 11 hours (or 9 hours reduced) within each 24-hour period after the end of previous rest.",
    glossaryTerm6: "Weekly Rest",
    glossaryDef6: "45-hour (regular) or 24-hour (reduced) rest period required after maximum 6 consecutive driving days.",
    glossaryTerm7: "Article 12 Exception",
    glossaryDef7: "EU Regulation provision allowing departure from rules in emergencies to reach a safe stopping place. Requires documentation.",
    glossaryTerm8: "Block Handling (Blockabfertigung)",
    glossaryDef8: "Austrian traffic management limiting trucks per hour on Brenner corridor. Can cause multi-hour delays.",
    glossaryTerm9: "Sectoral Driving Ban",
    glossaryDef9: "Restriction prohibiting transport of specific goods (e.g., tiles, waste) on certain corridors like Brenner/Tirol.",
    glossaryTerm10: "CMR Convention",
    glossaryDef10: "International agreement governing road freight contracts, including liability, documentation, and driver obligations.",
    
    knowledgeCheck: "Knowledge Check: Driving Time",
  },
  ro: {
    chapterNumber: "Capitolul 6",
    chapterTitle: "Timp de Conducere",
    heroDescription: "Înțelegerea diferenței critice între timpul de tură și timpul efectiv de conducere pentru conformitatea UE.",
    title: "Timp de Tură vs Timp de Conducere",
    subtitle: "Înțelegerea diferenței critice între timpul de tură și timpul efectiv de conducere.",
    
    // Introduction
    intro: "Reglementările privind timpul de conducere sunt fundamentul siguranței transportului rutier în UE. Încălcările pot rezulta în amenzi de €500-5.000, confiscarea vehiculului și chiar acuzații penale pentru încălcări repetate. Înțelegerea diferenței dintre timpul de conducere și timpul de tură nu este opțională - este esențială pentru fiecare freight forwarder, dispecer și șofer. Acest capitol acoperă Regulamentul UE 561/2006 și cunoștințele practice necesare pentru planificarea transporturilor conforme.",
    
    // Section 1: Driving Time Definition
    drivingTimeTitle: "Timp de Conducere",
    drivingTimeDesc: "Timp în care șoferul controlează activ camionul pe drum. Nu include timpul când camionul este oprit.",
    drivingTimeDetail1: "Timpul de conducere este înregistrat automat de tahograful digital când vehiculul se mișcă. Chiar și deplasarea la 1 km/h contează ca timp de conducere.",
    drivingTimeDetail2: "Contorul continuă în ambuteiaje, trafic stop-and-go și orice moment când roțile se rotesc cu șoferul la volan.",
    dailyLimit: "Limită zilnică:",
    weeklyLimit: "Limită săptămânală:",
    
    // Section 2: Shift Time Definition
    shiftTimeTitle: "Timp de Tură",
    shiftTimeDesc: "Timp total de lucru incluzând toate activitățile: așteptare, încărcare/descărcare, documente vamale, etc.",
    shiftTimeDetail1: "Timpul de tură include: conducere, încărcare/descărcare, asigurarea mărfii, completarea documentelor, verificări vehicul, așteptare la rampe, proceduri vamale și orice altă activitate legată de muncă.",
    shiftTimeDetail2: "Odihna și pauzele NU fac parte din timpul de tură. O tură de 15 ore include muncă + conducere + așteptare, dar exclude perioada de odihnă de 9 ore.",
    singleMannedMax: "Max șofer singur:",
    doubleMannedMax: "Max echipaj dublu:",
    
    // Section 3: Traffic Jam Warning
    trafficJamWarning: "Ambuteiaj = Timp de Conducere!",
    trafficJamDesc: "Timpul petrecut în trafic este 100% contorizat ca timp de conducere. Doar când parcați în siguranță și comutați tahograful pe PAUZĂ/ODIHNĂ se oprește contorizarea.",
    trafficJamDetail1: "Aceasta este una dintre cele mai frecvente încălcări. Șoferii blocați în trafic ore întregi depășesc adesea limita zilnică fără să realizeze. Tahograful nu îi pasă de motiv - contorizează fiecare secundă de operare a vehiculului.",
    trafficJamDetail2: "Soluție: Folosește aplicații de trafic în timp real (Google Maps, Waze, TomTom Traffic) pentru a anticipa întârzierile. Dacă traficul este inevitabil și va cauza depășirea limitei, ieși și parchează în siguranță ÎNAINTE de atingerea limitei.",
    whatToDoIfTraffic: "Ce să faceți dacă traficul va depăși limita:",
    trafficTip1: "Ieșiți imediat dacă e posibil, găsiți parcare sigură",
    trafficTip2: "Aplicați frâna de mână, comutați tahograful pe PAUZĂ/ODIHNĂ",
    trafficTip3: "Luați pauza de 45 de minute",
    trafficTip4: "Dacă e inevitabil, folosiți excepția Art.12 și documentați motivul",
    
    // Section 4: Daily and Weekly Limits Detail
    limitsTitle: "Limite Zilnice și Săptămânale Explicate",
    limitsContent: "Conducere zilnică standard: maxim 9 ore. Conducere zilnică extinsă: maxim 10 ore, permisă doar de două ori pe săptămână. Conducere săptămânală: maxim 56 ore. Conducere bi-săptămânală: maxim 90 ore pe orice două săptămâni consecutive. Aceste limite sunt cumulative - dacă conduci 60 ore în săptămâna 1, poți conduce doar 30 ore în săptămâna 2.",
    limitsDetail1: "Exemplu: Luni 9h + Marți 10h + Miercuri 9h + Joi 10h + Vineri 9h + Sâmbătă 9h = 56h (exact la limita săptămânală). Nu e posibilă conducerea duminică.",
    limitsDetail2: "Limita bi-săptămânală de 90 ore prinde mulți șoferi. Dacă săptămâna 1 = 56h, săptămâna 2 poate fi maxim 34h. Planificarea în avans este esențială.",
    
    // Section 5: Breaks
    breaksTitle: "Pauze Obligatorii",
    breaksContent: "După 4,5 ore de conducere, o pauză de 45 minute este obligatorie. Această pauză poate fi împărțită în 15 + 30 minute (doar în această ordine). Pauza trebuie să fie neîntreruptă - fără muncă, fără conducere, fără semnarea documentelor. Șoferul trebuie să fie liber de toate obligațiile.",
    breaksDetail1: "Regula pauzei împărțite: 15 minute întâi, apoi 30 minute. NU 20+25, NU 30+15, NU 45 continuu. Doar 15 apoi 30 este valid pentru pauze împărțite.",
    breaksDetail2: "O pauză resetează ceasul de conducere de 4,5 ore. După o pauză de 45 minute, șoferul poate conduce încă 4,5 ore.",
    breaksSplit: "Împărțire pauză:",
    breaksSplitDesc: "15 min + 30 min (doar în această ordine)",
    
    // Section 6: Rest Periods
    restTitle: "Perioade de Odihnă Zilnică",
    restContent: "Odihnă zilnică regulată: 11 ore consecutive în fiecare perioadă de 24 ore. Odihnă zilnică redusă: 9 ore consecutive, permisă maxim de 3 ori între odihne săptămânale. Odihnă zilnică împărțită: 3 ore + 9 ore = 12 ore total (crește cerința de odihnă zilnică cu 1 oră).",
    restDetail1: "Ceasul de 24 ore începe la SFÂRȘITUL perioadei de odihnă anterioare. Dacă odihna se termină la 06:00 luni, următoarea odihnă trebuie să înceapă cel târziu la 06:00 marți.",
    restDetail2: "Excepție ferry/tren: Odihna zilnică poate fi întreruptă de maxim două ori pentru îmbarcare/debarcare, maxim 1 oră întrerupere totală, dacă șoferul are acces la cușetă/cabină.",
    regularRest: "Odihnă regulată:",
    reducedRest: "Odihnă redusă:",
    splitRest: "Odihnă împărțită:",
    
    // Section 7: Weekly Rest
    weeklyRestTitle: "Perioade de Odihnă Săptămânală",
    weeklyRestContent: "Odihnă săptămânală regulată: 45 ore consecutive. Odihnă săptămânală redusă: 24 ore consecutive (trebuie compensată înainte de sfârșitul celei de-a treia săptămâni). Maxim 6 perioade de conducere între odihne săptămânale.",
    weeklyRestDetail1: "Compensarea odihnei săptămânale reduse: Diferența de 21 ore (45-24=21) trebuie atașată en bloc la o altă odihnă de cel puțin 9 ore înainte de sfârșitul celei de-a treia săptămâni după odihna redusă.",
    weeklyRestDetail2: "În oricare 4 săptămâni consecutive, un șofer trebuie să aibă cel puțin 2 odihne săptămânale regulate (45h) sau 1 regulată + 1 redusă (cu compensare).",
    weeklyRestLocation: "Regulă locație: Odihna săptămânală redusă poate fi luată în vehicul dacă vehiculul are facilități de dormit adecvate. Odihna săptămânală regulată (45h) NU ar trebui luată în vehicul în unele țări (Franța, Belgia, Germania - cu amenzi).",
    
    // Section 8: Single-Manned Operations
    singleMannedTitle: "Șofer Singur (1 Șofer)",
    singleMannedContent: "Operare standard cu un singur șofer pentru transport pe distanțe lungi. Șoferul este singur și trebuie să respecte toate limitele individuale de conducere și odihnă.",
    parameter: "Parametru",
    value: "Valoare",
    maxDailyDriving: "Max conducere zilnică",
    maxShiftTime: "Max timp de tură",
    dailyRest: "Odihnă zilnică",
    weeklyDriving: "Conducere săptămânală",
    distancePerDay: "Distanță/zi",
    exampleSchedule: "Exemplu de Program:",
    singleMannedSchedule: "06:00 start conducere → 10:30 pauză 45min → 11:15 continuare → 15:15 final (9h conducere). Disponibil ziua următoare: după 11h odihnă = 02:15 ziua următoare.",
    
    // Section 9: Double-Manned Operations
    doubleMannedTitle: "Echipaj Dublu (2 Șoferi)",
    doubleMannedContent: "Doi șoferi împart un vehicul. În timp ce unul conduce, celălalt se poate odihni în cușetă. Aceasta crește dramatic capacitatea de distanță zilnică.",
    doubleMannedAdvantage: "Mare Avantaj:",
    doubleMannedAdvantageDesc: "Doi șoferi = camion aproape non-stop. Fiecare șofer respectă propria limită de 9/10h în timp ce camionul continuă să se deplaseze.",
    doubleMannedDetail1: "În prima oră a turei, ambii șoferi trebuie să fie prezenți. După aceea, unul se poate odihni în timp ce celălalt conduce. Timpul 'de odihnă' al șoferului în cușetă contează ca pauză/odihnă, nu ca conducere.",
    doubleMannedDetail2: "Echipajul dublu permite ture de 21 ore (2 x 9h conducere + 2 x 45min pauze + coordonare). Distanță practică maximă: ~1.500 km pe 24 ore.",
    doubleMannedSchedule: "Program echipaj dublu: Șofer A: 06:00-10:30 (4,5h), pauză în cușetă. Șofer B: 06:00-10:30 odihnă, 10:30-15:00 conducere. Șofer A: 15:00-19:30 conducere. Amândoi odihnă peste noapte.",
    
    // Section 10: Speed and Distance Calculations
    avgSpeedTitle: "Calculul Vitezei Medii",
    avgSpeedDesc: "Deși camioanele pot rula la 80+ km/h, calculăm cu 70-75 km/h pentru a include traficul, timpii de încărcare și pauzele. Aceasta dă ETA-uri realiste.",
    avgSpeedDetail1: "Limită viteză camioane >3,5t: DE 80 km/h, FR 80-90 km/h, IT 70-90 km/h, PL 70-80 km/h, ES 80-90 km/h. Majoritatea autostrăzilor limitează camioanele la 80 km/h.",
    avgSpeedDetail2: "Calcul realist: 9h conducere × 70 km/h medie = 630 km/zi șofer singur. Echipaj dublu: 18h × 70 km/h = 1.260 km/zi teoretic, ~1.100 km practic.",
    distanceTable: "Referință Distanțe",
    distanceTableDesc: "Distanțe tipice per configurație de conducere",
    
    // Section 11: Driving Bans
    drivingBansTitle: "Interdicții de Circulație Weekend și Sărbători",
    drivingBansDesc: "Camioanele >3.5t au restricții de circulație în multe țări europene:",
    drivingBansDetail1: "Germania: Duminici și sărbători 00:00-22:00. Excepții pentru perisabile, animale vii și permise specifice.",
    drivingBansDetail2: "Austria: Sâmbăta 15:00-24:00, Duminici și sărbători 00:00-22:00. Tirol are interdicții suplimentare de noapte (22:00-05:00).",
    drivingBansDetail3: "Franța: Sâmbăta 22:00-22:00 Duminică (anumite drumuri), weekend-urile de sărbători majore au interdicții extinse.",
    drivingBansDetail4: "Italia: Duminici și sărbători, ore variabile în funcție de sezon (vara mai restrictiv).",
    country: "Țară",
    banHours: "Ore Interdicție",
    
    // Section 12: Tirol Special
    tirolTitle: "Restricții Speciale Austria/Tirol",
    tirolNote: "Interdicții de noapte, interdicții sectoriale și taxă dublă între 22:00-05:00 pe Brenner. Planificați coridoare alternative dacă e nevoie.",
    tirolDetail1: "Coridorul Brenner (A12/A13): Interdicție nocturnă 20:00-05:00 pentru camioane Euro 0-V cu >7,5t. Interdicția sectorială interzice total anumite mărfuri (gresie, marmură, mașini, deșeuri etc.).",
    tirolDetail2: "Block handling (Blockabfertigung): Austria limitează numărul de camioane care trec Brenner pe oră pentru a reduce congestionarea. Aceasta poate cauza întârzieri de 5-10 ore. Verifică oeamtc.at pentru timpii de așteptare actuali.",
    tirolAlternatives: "Alternative la Brenner: Tunelul Felbertauern (A10→Lienz→B100), Pasul Resia (Vinschgau), Tarvisio (A23 prin Slovenia). Fiecare are propriile restricții și taxe.",
    
    // Section 13: Tachograph
    tachographTitle: "Operarea Tahografului Digital",
    tachographContent: "Camioanele moderne folosesc tahografe digitale care înregistrează automat datele de conducere. Cardul de șofer stochează 28 zile de date și trebuie descărcat la fiecare 28 zile. Datele unității vehiculului trebuie descărcate la fiecare 90 zile.",
    tachographDetail1: "Cardul de șofer: Personal, netransferabil. Introduceți înainte de a porni. Scoateți doar în pauze >9h sau când părăsiți vehiculul pentru perioade extinse.",
    tachographDetail2: "Înregistrări manuale: Necesare pentru perioadele în care nu a fost introdus niciun card (ferry, odihnă acasă, altă muncă). Trebuie făcute ÎNAINTE de a începe să conduci.",
    tachographModes: "Moduri tahograf: Muncă (încărcare/descărcare/documente), Conducere (automat când se mișcă), Pauză/Odihnă (ciocane încrucișate), Disponibil (timp de așteptare pentru al doilea șofer).",
    
    // Section 14: Violations and Penalties
    violationsTitle: "Încălcări și Sancțiuni",
    violationsContent: "Regulamentul UE 561/2006 este aplicat prin controale rutiere și audituri la companii. Încălcările sunt clasificate ca minore, grave sau foarte grave, cu sancțiuni corespunzătoare.",
    violationDetail1: "Încălcări minore: Depășirea conducerii zilnice cu <1 oră, reducerea odihnei cu <1 oră. Amendă: €100-300.",
    violationDetail2: "Încălcări grave: Depășirea conducerii zilnice cu 1-2 ore, fără odihnă săptămânală. Amendă: €300-1.000.",
    violationDetail3: "Încălcări foarte grave: Depășirea conducerii zilnice cu >2 ore, manipularea tahografului, conducere fără card valid. Amendă: €1.000-5.000+, posibile acuzații penale.",
    violationLiability: "Răspundere: Atât șoferul CÂT ȘI compania pot fi amendați. Companiile trebuie să organizeze munca pentru a permite conformitatea legală. 'Presiunea clientului' nu este o apărare.",
    
    // Section 15: Article 12 Exception
    article12Title: "Excepția Articolului 12",
    article12Content: "În circumstanțe excepționale, un șofer poate devia de la regulile de conducere și odihnă pentru a ajunge la un loc sigur de oprire. Aceasta se aplică evenimentelor neprevăzute precum accidente, vreme severă sau închideri de drumuri.",
    article12Detail1: "Excepția NU este un cec în alb. Acoperă atingerea siguranței, nu finalizarea călătoriei. Odată în siguranță, regulile normale revin.",
    article12Detail2: "Documentarea este esențială: Scrieți motivul, natura și amploarea abaterii pe printout-ul tahografului sau pe spatele înregistrării manuale. Păstrați aceasta minimum 28 zile.",
    article12Examples: "Exemple valide: Închidere neașteptată de drum forțând deviere lungă, accident sever blocând autostrada, vreme severă bruscă (viscol, inundații). NU valide: Trafic, presiunea clientului, întârzieri de program.",
    
    // Case Study
    caseStudyTitle: "Studiu de Caz: Dezastrul din Traficul Stuttgart",
    caseStudyContent: "Un șofer cu 8,5 ore de conducere înregistrate era la 30 minute de destinație lângă Stuttgart. Un accident major a închis complet A8. Traficul a fost oprit 3 ore. Limita de 9 ore a șoferului a fost depășită cu 2,5 ore înainte să poată ieși.",
    caseStudyActions: "Acțiuni corecte: 1) După 30 min în trafic static, ieșiți la următoarea posibilitate. 2) Găsiți parcare (zonă industrială, benzinărie). 3) Comutați tahograful pe odihnă. 4) Scrieți explicația Art.12 pe printout. 5) Sunați dispecerul pentru a aranja înlocuire sau program revizuit.",
    caseStudyLesson: "Lecție: Nu conduceți niciodată 'la limită' când destinația nu este garantată. Păstrați întotdeauna un buffer de 1-2 ore pentru evenimente neașteptate.",
    
    // Checklist
    checklistTitle: "Checklist Conformitate Timp de Conducere",
    checklistItems: "1. Cardul de șofer introdus și funcțional? | 2. Înregistrările manuale pentru zilele anterioare completate? | 3. Timpul de conducere de azi înregistrat corect? | 4. Statusul limitei săptămânale verificat? | 5. Compensarea odihnei săptămânale la zi? | 6. Programul de pauze planificat pentru următoarele 4,5h? | 7. Țările cu interdicții de conducere pe rută verificate? | 8. Condițiile de trafic și vreme verificate? | 9. Timp buffer inclus pentru întârzieri? | 10. Procedura Art.12 înțeleasă?",
    
    // Best Practices
    bestPractice1: "Păstrează întotdeauna 1-2 ore buffer înainte de limita zilnică - întârzierile neașteptate se întâmplă",
    bestPractice2: "Descarcă datele cardului de șofer săptămânal, nu doar la termenul de 28 zile",
    bestPractice3: "Folosește aplicații de trafic în timp real pentru a anticipa întârzierile și ajusta pauzele",
    bestPractice4: "Planifică locațiile de odihnă săptămânală în avans - parcarea este limitată în weekend",
    bestPractice5: "Instruiește-te pe utilizarea Art.12 - știe când și cum să aplici excepțiile corect",
    
    // Common Mistakes
    commonMistake1: "Tratarea timpului de ambuteiaj ca 'pauză' - e încă timp de conducere",
    commonMistake2: "Pauză împărțită în ordinea greșită (30+15 în loc de 15+30)",
    commonMistake3: "Uitarea de a compensa odihna săptămânală redusă în 3 săptămâni",
    commonMistake4: "Luarea odihnei de 45h în vehicul în țările unde e interzis",
    commonMistake5: "Fără documentație scrisă când folosești excepția Art.12",
    
    // Glossary
    glossaryTitle: "Glosar Timp de Conducere",
    glossaryTerm1: "Tahograf Digital",
    glossaryDef1: "Dispozitiv electronic care înregistrează automat timpul de conducere, perioadele de odihnă și viteza vehiculului. Obligatoriu în camioanele UE din 2006.",
    glossaryTerm2: "Card de Șofer",
    glossaryDef2: "Card inteligent personal care stochează 28 zile de date de conducere. Trebuie descărcat regulat și este valid 5 ani.",
    glossaryTerm3: "Timp de Conducere",
    glossaryDef3: "Timpul petrecut operând activ vehiculul pe drum. Înregistrat automat când roțile se rotesc.",
    glossaryTerm4: "Timp de Tură (Timp de Lucru)",
    glossaryDef4: "Timpul total al tuturor activităților de lucru: conducere, încărcare, documente, așteptare. Exclude pauzele și perioadele de odihnă.",
    glossaryTerm5: "Odihnă Zilnică",
    glossaryDef5: "Perioadă obligatorie de odihnă de 11 ore (sau 9 ore redusă) în fiecare perioadă de 24 ore după sfârșitul odihnei anterioare.",
    glossaryTerm6: "Odihnă Săptămânală",
    glossaryDef6: "Perioadă de odihnă de 45 ore (regulată) sau 24 ore (redusă) necesară după maxim 6 zile consecutive de conducere.",
    glossaryTerm7: "Excepția Articolului 12",
    glossaryDef7: "Prevedere în Regulamentul UE care permite abaterea de la reguli în urgențe pentru a ajunge la un loc sigur de oprire. Necesită documentare.",
    glossaryTerm8: "Block Handling (Blockabfertigung)",
    glossaryDef8: "Managementul traficului austriac care limitează camioanele pe oră pe coridorul Brenner. Poate cauza întârzieri de mai multe ore.",
    glossaryTerm9: "Interdicție Sectorială de Conducere",
    glossaryDef9: "Restricție care interzice transportul anumitor mărfuri (ex: gresie, deșeuri) pe anumite coridoare precum Brenner/Tirol.",
    glossaryTerm10: "Convenția CMR",
    glossaryDef10: "Acord internațional care reglementează contractele de transport rutier de marfă, inclusiv răspunderea, documentația și obligațiile șoferului.",
    
    knowledgeCheck: "Verificare Cunoștințe: Timp de Conducere",
  },
  de: {
    chapterNumber: "Kapitel 6",
    chapterTitle: "Lenkzeit",
    heroDescription: "Den kritischen Unterschied zwischen Schichtzeit und tatsächlicher Lenkzeit für EU-Konformität verstehen.",
    title: "Schichtzeit vs Lenkzeit",
    subtitle: "Den kritischen Unterschied zwischen Schichtzeit und tatsächlicher Lenkzeit verstehen.",
    
    // Introduction
    intro: "Lenkzeitvorschriften sind das Rückgrat der EU-Straßenverkehrssicherheit. Verstöße können Bußgelder von €500-5.000, Fahrzeugbeschlagnahme und sogar strafrechtliche Anklagen bei wiederholten Verstößen zur Folge haben. Den Unterschied zwischen Lenkzeit und Schichtzeit zu verstehen ist keine Option - es ist essentiell für jeden Spediteur, Disponenten und Fahrer. Dieses Kapitel behandelt EU-Verordnung 561/2006 und das praktische Wissen für die Planung konformer Transporte.",
    
    // Section 1: Driving Time Definition
    drivingTimeTitle: "Lenkzeit",
    drivingTimeDesc: "Zeit, in der der Fahrer den LKW aktiv auf der Straße steuert. Beinhaltet nicht die Zeit, wenn der LKW steht.",
    drivingTimeDetail1: "Die Lenkzeit wird automatisch vom digitalen Tachographen aufgezeichnet, wenn sich das Fahrzeug bewegt. Selbst Bewegung mit 1 km/h zählt als Lenkzeit.",
    drivingTimeDetail2: "Der Zähler läuft bei Staus, Stop-and-Go-Verkehr und jeder Zeit weiter, in der sich die Räder unter Kontrolle des Fahrers drehen.",
    dailyLimit: "Tägliches Limit:",
    weeklyLimit: "Wöchentliches Limit:",
    
    // Section 2: Shift Time Definition
    shiftTimeTitle: "Schichtzeit",
    shiftTimeDesc: "Gesamte Arbeitszeit einschließlich aller Aktivitäten: Warten, Be-/Entladung, Zolldokumente, etc.",
    shiftTimeDetail1: "Die Schichtzeit umfasst: Fahren, Be-/Entladung, Ladungssicherung, Dokumentenausfüllung, Fahrzeugprüfungen, Warten an Rampen, Zollverfahren und jede andere arbeitsbezogene Aktivität.",
    shiftTimeDetail2: "Ruhe und Pausen sind NICHT Teil der Schichtzeit. Eine 15-Stunden-Schicht beinhaltet Arbeit + Fahren + Warten, schließt aber die 9-Stunden-Ruhezeit aus.",
    singleMannedMax: "Max Einzelfahrer:",
    doubleMannedMax: "Max Doppelbesatzung:",
    
    // Section 3: Traffic Jam Warning
    trafficJamWarning: "Stau = Lenkzeit!",
    trafficJamDesc: "Im Stau verbrachte Zeit wird zu 100% als Lenkzeit gezählt. Erst wenn Sie sicher parken und den Tachographen auf PAUSE/RUHE umschalten, stoppt die Zählung.",
    trafficJamDetail1: "Dies ist einer der häufigsten Verstöße. Fahrer, die stundenlang im Stau stehen, überschreiten oft ihre Tageslimits, ohne es zu merken. Dem Tachographen ist der Grund egal - er zählt jede Sekunde des Fahrzeugbetriebs.",
    trafficJamDetail2: "Lösung: Nutzen Sie Echtzeit-Verkehrs-Apps (Google Maps, Waze, TomTom Traffic), um Verzögerungen vorherzusehen. Wenn Stau unvermeidlich ist und zu einer Limitüberschreitung führt, ausfahren und sicher parken BEVOR das Limit erreicht ist.",
    whatToDoIfTraffic: "Was tun, wenn der Verkehr Ihr Limit überschreiten wird:",
    trafficTip1: "Sofort abfahren wenn möglich, sicheren Parkplatz finden",
    trafficTip2: "Handbremse anziehen, Tacho auf PAUSE/RUHE umschalten",
    trafficTip3: "45-Minuten-Pause machen",
    trafficTip4: "Wenn unvermeidbar, Art.12 Ausnahme nutzen und Grund dokumentieren",
    
    // Section 4: Daily and Weekly Limits Detail
    limitsTitle: "Tägliche und wöchentliche Limits erklärt",
    limitsContent: "Standard-Tageslenkzeit: maximal 9 Stunden. Verlängerte Tageslenkzeit: maximal 10 Stunden, nur zweimal pro Woche erlaubt. Wochenlenkzeit: maximal 56 Stunden. Zwei-Wochen-Lenkzeit: maximal 90 Stunden über zwei aufeinanderfolgende Wochen. Diese Limits sind kumulativ - wenn Sie in Woche 1 60 Stunden fahren, können Sie in Woche 2 nur noch 30 Stunden fahren.",
    limitsDetail1: "Beispiel: Mo 9h + Di 10h + Mi 9h + Do 10h + Fr 9h + Sa 9h = 56h (genau am Wochenlimit). Keine Sonntagsfahrt möglich.",
    limitsDetail2: "Das 90-Stunden-Zwei-Wochen-Limit erwischt viele Fahrer. Wenn Woche 1 = 56h, kann Woche 2 nur maximal 34h sein. Vorausplanung ist essentiell.",
    
    // Section 5: Breaks
    breaksTitle: "Pflichtpausen",
    breaksContent: "Nach 4,5 Stunden Fahren ist eine 45-minütige Pause Pflicht. Diese Pause kann in 15 + 30 Minuten aufgeteilt werden (nur in dieser Reihenfolge). Die Pause muss ununterbrochen sein - keine Arbeit, kein Fahren, keine Dokumente unterschreiben. Der Fahrer muss von allen Pflichten befreit sein.",
    breaksDetail1: "Regel für geteilte Pause: erst 15 Minuten, dann 30 Minuten. NICHT 20+25, NICHT 30+15, NICHT 45 durchgehend. Nur 15 dann 30 ist gültig für geteilte Pausen.",
    breaksDetail2: "Eine Pause setzt die 4,5-Stunden-Lenkuhr zurück. Nach einer 45-minütigen Pause kann der Fahrer weitere 4,5 Stunden fahren.",
    breaksSplit: "Pausenteilung:",
    breaksSplitDesc: "15 min + 30 min (nur in dieser Reihenfolge)",
    
    // Section 6: Rest Periods
    restTitle: "Tägliche Ruhezeiten",
    restContent: "Reguläre tägliche Ruhezeit: 11 zusammenhängende Stunden innerhalb jeder 24-Stunden-Periode. Reduzierte tägliche Ruhezeit: 9 zusammenhängende Stunden, maximal 3x zwischen wöchentlichen Ruhezeiten erlaubt. Geteilte tägliche Ruhezeit: 3 Stunden + 9 Stunden = 12 Stunden gesamt (erhöht die tägliche Ruheanforderung um 1 Stunde).",
    restDetail1: "Die 24-Stunden-Uhr beginnt am ENDE der vorherigen Ruhezeit. Wenn die Ruhezeit um 06:00 Montag endet, muss die nächste Ruhezeit spätestens um 06:00 Dienstag beginnen.",
    restDetail2: "Fähre/Zug-Ausnahme: Die tägliche Ruhezeit kann bis zu zweimal für Ein-/Ausschiffen unterbrochen werden, maximal 1 Stunde Gesamtunterbrechung, wenn der Fahrer Zugang zu einer Koje/Kabine hat.",
    regularRest: "Reguläre Ruhezeit:",
    reducedRest: "Reduzierte Ruhezeit:",
    splitRest: "Geteilte Ruhezeit:",
    
    // Section 7: Weekly Rest
    weeklyRestTitle: "Wöchentliche Ruhezeiten",
    weeklyRestContent: "Reguläre wöchentliche Ruhezeit: 45 zusammenhängende Stunden. Reduzierte wöchentliche Ruhezeit: 24 zusammenhängende Stunden (muss vor Ende der dritten Woche kompensiert werden). Maximal 6 Fahrzeiträume zwischen wöchentlichen Ruhezeiten.",
    weeklyRestDetail1: "Kompensation der reduzierten wöchentlichen Ruhezeit: Die 21-Stunden-Differenz (45-24=21) muss en bloc an eine andere Ruhezeit von mindestens 9 Stunden vor Ende der dritten Woche nach der reduzierten Ruhe angehängt werden.",
    weeklyRestDetail2: "In 4 aufeinanderfolgenden Wochen muss ein Fahrer mindestens 2 reguläre wöchentliche Ruhezeiten (45h) haben oder 1 reguläre + 1 reduzierte (mit Kompensation).",
    weeklyRestLocation: "Standortregel: Reduzierte wöchentliche Ruhezeit kann im Fahrzeug verbracht werden, wenn das Fahrzeug über geeignete Schlafmöglichkeiten verfügt. Reguläre wöchentliche Ruhezeit (45h) sollte in einigen Ländern NICHT im Fahrzeug verbracht werden (Frankreich, Belgien, Deutschland - mit Bußgeldern).",
    
    // Section 8: Single-Manned Operations
    singleMannedTitle: "Einzelbesatzung (1 Fahrer)",
    singleMannedContent: "Standard-Einzelfahrerbetrieb für Fernverkehr. Der Fahrer ist allein und muss alle individuellen Fahr- und Ruhelimits einhalten.",
    parameter: "Parameter",
    value: "Wert",
    maxDailyDriving: "Max tägliche Lenkzeit",
    maxShiftTime: "Max Schichtzeit",
    dailyRest: "Tägliche Ruhezeit",
    weeklyDriving: "Wöchentliche Lenkzeit",
    distancePerDay: "Entfernung/Tag",
    exampleSchedule: "Beispiel-Zeitplan:",
    singleMannedSchedule: "06:00 Fahrtbeginn → 10:30 Pause 45min → 11:15 Weiterfahrt → 15:15 Ende (9h Fahrt). Verfügbar nächster Tag: nach 11h Ruhe = 02:15 nächster Tag.",
    
    // Section 9: Double-Manned Operations
    doubleMannedTitle: "Doppelbesatzung (2 Fahrer)",
    doubleMannedContent: "Zwei Fahrer teilen sich ein Fahrzeug. Während einer fährt, kann der andere in der Koje ruhen. Dies erhöht die tägliche Distanzkapazität dramatisch.",
    doubleMannedAdvantage: "Großer Vorteil:",
    doubleMannedAdvantageDesc: "Zwei Fahrer = fast Non-Stop-LKW. Jeder Fahrer hält sein eigenes 9/10h-Limit ein, während der LKW weiterfährt.",
    doubleMannedDetail1: "In der ersten Stunde der Schicht müssen beide Fahrer anwesend sein. Danach kann einer ruhen, während der andere fährt. Die 'Ruhezeit' des Fahrers in der Koje zählt als Pause/Ruhe, nicht als Fahren.",
    doubleMannedDetail2: "Doppelbesatzung ermöglicht 21-Stunden-Schichten (2 x 9h Fahren + 2 x 45min Pausen + Koordination). Praktische Maximalentfernung: ~1.500 km pro 24 Stunden.",
    doubleMannedSchedule: "Doppelbesatzung-Zeitplan: Fahrer A: 06:00-10:30 (4,5h), Pause in Koje. Fahrer B: 06:00-10:30 Ruhe, 10:30-15:00 Fahren. Fahrer A: 15:00-19:30 Fahren. Beide Nachtruhe.",
    
    // Section 10: Speed and Distance Calculations
    avgSpeedTitle: "Durchschnittsgeschwindigkeits-Berechnung",
    avgSpeedDesc: "Obwohl LKWs 80+ km/h fahren können, rechnen wir mit 70-75 km/h, um Verkehr, Ladezeiten und Pausen einzubeziehen. Das ergibt realistische ETAs.",
    avgSpeedDetail1: "Tempolimit für LKWs >3,5t: DE 80 km/h, FR 80-90 km/h, IT 70-90 km/h, PL 70-80 km/h, ES 80-90 km/h. Die meisten Autobahnen begrenzen LKWs auf 80 km/h.",
    avgSpeedDetail2: "Realistische Berechnung: 9h Fahren × 70 km/h Durchschnitt = 630 km/Tag Einzelbesatzung. Doppelbesatzung: 18h × 70 km/h = 1.260 km/Tag theoretisch, ~1.100 km praktisch.",
    distanceTable: "Entfernungsreferenz",
    distanceTableDesc: "Typische Entfernungen pro Fahrkonfiguration",
    
    // Section 11: Driving Bans
    drivingBansTitle: "Wochenend- und Feiertagsfahrverbote",
    drivingBansDesc: "LKWs >3.5t haben Fahrverbote in vielen europäischen Ländern:",
    drivingBansDetail1: "Deutschland: Sonn- und Feiertage 00:00-22:00. Ausnahmen für verderbliche Waren, lebende Tiere und spezielle Genehmigungen.",
    drivingBansDetail2: "Österreich: Samstag 15:00-24:00, Sonn- und Feiertage 00:00-22:00. Tirol hat zusätzliche Nachtfahrverbote (22:00-05:00).",
    drivingBansDetail3: "Frankreich: Samstag 22:00-22:00 Sonntag (bestimmte Straßen), große Feiertags-Wochenenden haben erweiterte Verbote.",
    drivingBansDetail4: "Italien: Sonn- und Feiertage, je nach Saison unterschiedliche Zeiten (Sommer restriktiver).",
    country: "Land",
    banHours: "Verbotszeiten",
    
    // Section 12: Tirol Special
    tirolTitle: "Österreich/Tirol Sonderrestriktionen",
    tirolNote: "Nachtfahrverbote, sektorale Fahrverbote und doppelte Maut zwischen 22:00-05:00 am Brenner. Planen Sie alternative Korridore wenn nötig.",
    tirolDetail1: "Brenner-Korridor (A12/A13): Nachtfahrverbot 20:00-05:00 für Euro 0-V LKWs mit >7,5t. Sektorales Fahrverbot verbietet bestimmte Güter komplett (Fliesen, Marmor, Autos, Abfall usw.).",
    tirolDetail2: "Blockabfertigung: Österreich begrenzt die Anzahl der LKWs, die pro Stunde den Brenner überqueren, um Staus zu reduzieren. Dies kann zu 5-10 Stunden Verzögerungen führen. Aktuelle Wartezeiten auf oeamtc.at prüfen.",
    tirolAlternatives: "Alternativen zum Brenner: Felbertauern-Tunnel (A10→Lienz→B100), Reschenpass (Vinschgau), Tarvisio (A23 durch Slowenien). Jede hat eigene Einschränkungen und Mautgebühren.",
    
    // Section 13: Tachograph
    tachographTitle: "Digitaler Tachograph-Betrieb",
    tachographContent: "Moderne LKWs verwenden digitale Tachographen, die automatisch Fahrdaten aufzeichnen. Die Fahrerkarte speichert 28 Tage Daten und muss alle 28 Tage heruntergeladen werden. Fahrzeugeinheit-Daten müssen alle 90 Tage heruntergeladen werden.",
    tachographDetail1: "Fahrerkarte: Persönlich, nicht übertragbar. Vor dem Start einstecken. Nur bei Pausen >9h oder wenn das Fahrzeug für längere Zeit verlassen wird, entfernen.",
    tachographDetail2: "Manuelle Einträge: Erforderlich für Zeiträume, in denen keine Karte eingesteckt war (Fähre, Ruhe zu Hause, andere Arbeit). Müssen VOR Fahrtbeginn erfolgen.",
    tachographModes: "Tachograph-Modi: Arbeit (Laden/Entladen/Dokumente), Fahren (automatisch bei Bewegung), Pause/Ruhe (gekreuzte Hämmer), Bereitschaft (Wartezeit für zweiten Fahrer).",
    
    // Section 14: Violations and Penalties
    violationsTitle: "Verstöße und Strafen",
    violationsContent: "EU-Verordnung 561/2006 wird durch Straßenkontrollen und Unternehmensaudits durchgesetzt. Verstöße werden als geringfügig, schwerwiegend oder sehr schwerwiegend kategorisiert, mit entsprechenden Strafen.",
    violationDetail1: "Geringfügige Verstöße: Tageslenkzeit um <1 Stunde überschritten, Ruhezeit um <1 Stunde verkürzt. Bußgeld: €100-300.",
    violationDetail2: "Schwerwiegende Verstöße: Tageslenkzeit um 1-2 Stunden überschritten, keine wöchentliche Ruhezeit. Bußgeld: €300-1.000.",
    violationDetail3: "Sehr schwerwiegende Verstöße: Tageslenkzeit um >2 Stunden überschritten, Tachograph-Manipulation, Fahren ohne gültige Karte. Bußgeld: €1.000-5.000+, mögliche strafrechtliche Anklagen.",
    violationLiability: "Haftung: Sowohl Fahrer ALS AUCH Unternehmen können mit Bußgeldern belegt werden. Unternehmen müssen die Arbeit so organisieren, dass legale Einhaltung möglich ist. 'Kundendruck' ist keine Verteidigung.",
    
    // Section 15: Article 12 Exception
    article12Title: "Artikel 12 Ausnahme",
    article12Content: "Unter außergewöhnlichen Umständen darf ein Fahrer von den Lenk- und Ruheregeln abweichen, um einen sicheren Halteplatz zu erreichen. Dies gilt für unvorhergesehene Ereignisse wie Unfälle, schweres Wetter oder Straßensperrungen.",
    article12Detail1: "Die Ausnahme ist KEIN Blanko-Scheck. Sie deckt das Erreichen von Sicherheit ab, nicht die Vervollständigung der Fahrt. Einmal in Sicherheit, gelten normale Regeln wieder.",
    article12Detail2: "Dokumentation ist essentiell: Notieren Sie Grund, Art und Umfang der Abweichung auf dem Tachograph-Ausdruck oder auf der Rückseite der manuellen Aufzeichnung. Mindestens 28 Tage aufbewahren.",
    article12Examples: "Gültige Beispiele: Unerwartete Straßensperrung erzwingt langen Umweg, schwerer Unfall blockiert Autobahn, plötzliches schweres Wetter (Schneesturm, Überflutung). NICHT gültig: Verkehr, Kundendruck, Terminverzögerungen.",
    
    // Case Study
    caseStudyTitle: "Fallstudie: Das Stuttgarter Stau-Desaster",
    caseStudyContent: "Ein Fahrer mit 8,5 Stunden protokollierter Lenkzeit war 30 Minuten vom Ziel bei Stuttgart entfernt. Ein schwerer Unfall sperrte die A8 vollständig. Der Verkehr stand 3 Stunden still. Die 9-Stunden-Grenze des Fahrers wurde um 2,5 Stunden überschritten, bevor er abfahren konnte.",
    caseStudyActions: "Korrekte Maßnahmen: 1) Nach 30 Min im stehenden Verkehr bei nächster Möglichkeit abfahren. 2) Parkplatz finden (Industriegebiet, Tankstelle). 3) Tacho auf Ruhe umschalten. 4) Art.12 Erklärung auf Ausdruck schreiben. 5) Disponenten anrufen für Ablösung oder überarbeiteten Zeitplan.",
    caseStudyLesson: "Lektion: Fahren Sie nie 'bis zum Limit', wenn das Ziel nicht garantiert ist. Halten Sie immer 1-2 Stunden Puffer für unerwartete Ereignisse bereit.",
    
    // Checklist
    checklistTitle: "Checkliste Lenkzeit-Compliance",
    checklistItems: "1. Fahrerkarte eingesteckt und funktionsfähig? | 2. Manuelle Einträge für vorherige Tage vollständig? | 3. Bisherige Lenkzeit heute korrekt protokolliert? | 4. Status des Wochenlimits geprüft? | 5. Kompensation der wöchentlichen Ruhezeit aktuell? | 6. Pausenplan für nächste 4,5h geplant? | 7. Fahrverbotsländer auf Route geprüft? | 8. Verkehrs- und Wetterbedingungen überprüft? | 9. Pufferzeit für Verzögerungen eingeplant? | 10. Artikel 12 Verfahren verstanden?",
    
    // Best Practices
    bestPractice1: "Immer 1-2 Stunden Puffer vor dem Tageslimit halten - unerwartete Verzögerungen passieren",
    bestPractice2: "Fahrerkartendaten wöchentlich herunterladen, nicht erst bei der 28-Tage-Frist",
    bestPractice3: "Echtzeit-Verkehrs-Apps nutzen, um Verzögerungen vorherzusehen und Pausen anzupassen",
    bestPractice4: "Wöchentliche Ruheorte im Voraus planen - Parkplätze sind am Wochenende begrenzt",
    bestPractice5: "Auf Art.12 Nutzung schulen - wissen, wann und wie Ausnahmen korrekt anzuwenden sind",
    
    // Common Mistakes
    commonMistake1: "Stauzeit als 'Pause' behandeln - es ist immer noch Lenkzeit",
    commonMistake2: "Geteilte Pause in falscher Reihenfolge (30+15 statt 15+30)",
    commonMistake3: "Vergessen, reduzierte wöchentliche Ruhezeit innerhalb von 3 Wochen zu kompensieren",
    commonMistake4: "45h Ruhe im Fahrzeug in Ländern verbringen, wo es verboten ist",
    commonMistake5: "Keine schriftliche Dokumentation bei Nutzung der Artikel 12 Ausnahme",
    
    // Glossary
    glossaryTitle: "Glossar Lenkzeit",
    glossaryTerm1: "Digitaler Tachograph",
    glossaryDef1: "Elektronisches Gerät, das automatisch Lenkzeit, Ruhezeiten und Fahrzeuggeschwindigkeit aufzeichnet. In EU-LKWs seit 2006 Pflicht.",
    glossaryTerm2: "Fahrerkarte",
    glossaryDef2: "Persönliche Smartcard, die 28 Tage Fahrdaten speichert. Muss regelmäßig heruntergeladen werden und ist 5 Jahre gültig.",
    glossaryTerm3: "Lenkzeit",
    glossaryDef3: "Zeit, die mit aktivem Betrieb des Fahrzeugs auf der Straße verbracht wird. Automatisch aufgezeichnet, wenn sich die Räder drehen.",
    glossaryTerm4: "Schichtzeit (Arbeitszeit)",
    glossaryDef4: "Gesamtzeit aller Arbeitsaktivitäten: Fahren, Laden, Dokumente, Warten. Schließt Pausen und Ruhezeiten aus.",
    glossaryTerm5: "Tägliche Ruhezeit",
    glossaryDef5: "Obligatorische Ruhezeit von 11 Stunden (oder 9 Stunden reduziert) innerhalb jeder 24-Stunden-Periode nach Ende der vorherigen Ruhe.",
    glossaryTerm6: "Wöchentliche Ruhezeit",
    glossaryDef6: "45-Stunden (regulär) oder 24-Stunden (reduziert) Ruhezeit, erforderlich nach maximal 6 aufeinanderfolgenden Fahrtagen.",
    glossaryTerm7: "Artikel 12 Ausnahme",
    glossaryDef7: "EU-Verordnungsbestimmung, die Abweichung von Regeln in Notfällen erlaubt, um einen sicheren Halteplatz zu erreichen. Erfordert Dokumentation.",
    glossaryTerm8: "Blockabfertigung",
    glossaryDef8: "Österreichisches Verkehrsmanagement, das LKWs pro Stunde am Brenner-Korridor begrenzt. Kann zu mehrstündigen Verzögerungen führen.",
    glossaryTerm9: "Sektorales Fahrverbot",
    glossaryDef9: "Einschränkung, die den Transport bestimmter Güter (z.B. Fliesen, Abfall) auf bestimmten Korridoren wie Brenner/Tirol verbietet.",
    glossaryTerm10: "CMR-Übereinkommen",
    glossaryDef10: "Internationales Abkommen über Straßengüterfrachtverträge, einschließlich Haftung, Dokumentation und Fahrerpflichten.",
    
    knowledgeCheck: "Wissenstest: Lenkzeit",
  },
};
