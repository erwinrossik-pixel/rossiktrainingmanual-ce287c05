import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ro' | 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'rossik-manual-language';

// UI Translations
const translations: Record<Language, Record<string, string>> = {
  ro: {
    // Sidebar
    'sidebar.title': 'Manual Freight Forwarding',
    'sidebar.progress': 'Progres General',
    'sidebar.chapters': 'capitole',
    'sidebar.details': 'Detalii',
    'sidebar.version': 'Versiunea 2025',
    'sidebar.edition': 'Ediție Completă',
    'sidebar.quizzesAvailable': 'quiz-uri disponibile',
    
    // Sections
    'section.foundation': 'Fundament',
    'section.equipment': 'Echipamente',
    'section.documents': 'Documente & Reglementări',
    'section.geography': 'Geografie & Rute',
    'section.commercial': 'Abilități Comerciale',
    'section.technology': 'Sisteme & Tehnologie',
    'section.finance': 'Risc & Finanțe',
    'section.practical': 'Aplicare Practică',
    
    // Chapters
    'chapter.intro': 'Introducere',
    'chapter.mindset': 'Rol & Mentalitate',
    'chapter.soft-skills': 'Soft Skills',
    'chapter.workflow': 'Flux Operațional',
    'chapter.vehicle': 'Referință Vehicule',
    'chapter.loading': 'Încărcare & Fixare',
    'chapter.reefer': 'Transport Frigorific',
    'chapter.warehouse': 'Depozit & Cross-Dock',
    'chapter.adr': 'ADR Mărfuri Periculoase',
    'chapter.documents': 'Documente Transport',
    'chapter.incoterms': 'Incoterms & Comerț',
    'chapter.compliance': 'Ore de Condus',
    'chapter.driving-time': 'Schimb vs Condus',
    'chapter.customs': 'Vamă & Frontiere',
    'chapter.europe-zones': 'Zone Europene',
    'chapter.environment': 'Mediu',
    'chapter.supply-chain': 'Lanț Aprovizionare',
    'chapter.pricing': 'Prețuri & Taxe',
    'chapter.commercial': 'Abilități Comerciale',
    'chapter.negotiation': 'Negociere',
    'chapter.clients': 'Găsirea Clienților',
    'chapter.carrier-management': 'Gestiune Transportatori',
    'chapter.exchanges': 'Burse de Marfă',
    'chapter.communication': 'Comunicare',
    'chapter.kpi': 'KPI & Performanță',
    'chapter.translogica': 'Translogica TMS',
    'chapter.fleet': 'Flotă & GPS',
    'chapter.technology': 'Tehnologie & Digital',
    'chapter.risk-management': 'Managementul Riscului',
    'chapter.insurance': 'Asigurări Transport',
    'chapter.claims': 'Daune & Dispute',
    'chapter.payment': 'Plăți & Facturare',
    'chapter.accounting': 'Contabilitate',
    'chapter.emergency': 'Proceduri Urgență',
    'chapter.case-studies': 'Studii de Caz',
    'chapter.training': 'Exerciții Training',
    'chapter.red-flags': 'Red Flags & Sfaturi',
    'chapter.glossary': 'Glosar',
    'chapter.checklists': 'Checklists',
    'chapter.licenses-oversize': 'Licențe & Agabaritic',
    
    // Dashboard
    'dashboard.title': 'Dashboard Progres',
    'dashboard.subtitle': 'Urmărește progresul tău de învățare',
    'dashboard.back': 'Înapoi',
    'dashboard.overall': 'Progres General',
    'dashboard.completed': 'Capitole Completate',
    'dashboard.total': 'din total',
    'dashboard.quizzes': 'Teste Completate',
    'dashboard.passed': 'promovate',
    'dashboard.average': 'Scor Mediu',
    'dashboard.passRate': 'rată promovare',
    'dashboard.recent': 'Activitate Recentă',
    'dashboard.noActivity': 'Nicio activitate încă. Începe să citești capitolele!',
    'dashboard.quizPerformance': 'Performanță Teste',
    'dashboard.passRateLabel': 'Rată Promovare',
    'dashboard.totalScore': 'Scor Total',
    'dashboard.passedLabel': 'Promovate',
    'dashboard.needImprovement': 'De Îmbunătățit',
    'dashboard.remaining': 'Quiz-uri rămase',
    'dashboard.allChapters': 'Toate Capitolele',
    'dashboard.congratulations': 'Felicitări!',
    'dashboard.completedAll': 'Ai completat toate capitolele și testele',
    'dashboard.reset': 'Resetează Progresul',
    'dashboard.confirmReset': 'Ești sigur că vrei să resetezi tot progresul?',
    
    // Quiz
    'quiz.complete': 'Test Finalizat!',
    'quiz.excellent': 'Excelent! Ai stăpânit acest capitol.',
    'quiz.good': 'Bine! Revizuiește întrebările greșite.',
    'quiz.keepStudying': 'Continuă să studiezi! Revizuiește capitolul și încearcă din nou.',
    'quiz.chapterComplete': 'Capitol marcat ca finalizat!',
    'quiz.questionPool': 'Pool întrebări',
    'quiz.showing': 'Afișează',
    'quiz.perRound': 'per rundă',
    'quiz.tryAgain': 'Încearcă Din Nou',
    'quiz.newQuestions': 'Întrebări Noi',
    'quiz.question': 'Întrebarea',
    'quiz.of': 'din',
    'quiz.previousBest': 'Cel mai bun anterior',
    'quiz.correct': 'Corect!',
    'quiz.incorrect': 'Incorect',
    'quiz.next': 'Următoarea Întrebare',
    'quiz.seeResults': 'Vezi Rezultatele',
    
    // Navigation
    'nav.previous': 'Anterior',
    'nav.next': 'Următorul',
    'nav.search': 'Caută în manual...',
    'nav.noResults': 'Niciun rezultat găsit',
    
    // Language
    'language.select': 'Selectează limba',
    'language.ro': 'Română',
    'language.de': 'Deutsch',
    'language.en': 'English',
  },
  de: {
    // Sidebar
    'sidebar.title': 'Speditionshandbuch',
    'sidebar.progress': 'Gesamtfortschritt',
    'sidebar.chapters': 'Kapitel',
    'sidebar.details': 'Details',
    'sidebar.version': 'Version 2025',
    'sidebar.edition': 'Vollständige Ausgabe',
    'sidebar.quizzesAvailable': 'verfügbare Tests',
    
    // Sections
    'section.foundation': 'Grundlagen',
    'section.equipment': 'Ausrüstung',
    'section.documents': 'Dokumente & Vorschriften',
    'section.geography': 'Geographie & Routen',
    'section.commercial': 'Kaufmännische Fähigkeiten',
    'section.technology': 'Systeme & Technologie',
    'section.finance': 'Risiko & Finanzen',
    'section.practical': 'Praktische Anwendung',
    
    // Chapters
    'chapter.intro': 'Einführung',
    'chapter.mindset': 'Rolle & Denkweise',
    'chapter.soft-skills': 'Soft Skills',
    'chapter.workflow': 'Betriebsablauf',
    'chapter.vehicle': 'Fahrzeugreferenz',
    'chapter.loading': 'Laden & Sichern',
    'chapter.reefer': 'Kühltransport',
    'chapter.warehouse': 'Lager & Cross-Dock',
    'chapter.adr': 'ADR Gefahrgut',
    'chapter.documents': 'Transportdokumente',
    'chapter.incoterms': 'Incoterms & Handel',
    'chapter.compliance': 'Lenkzeiten',
    'chapter.driving-time': 'Schicht vs Fahren',
    'chapter.customs': 'Zoll & Grenzen',
    'chapter.europe-zones': 'Europäische Zonen',
    'chapter.environment': 'Umwelt',
    'chapter.supply-chain': 'Lieferkette',
    'chapter.pricing': 'Preise & Gebühren',
    'chapter.commercial': 'Kaufmännische Fähigkeiten',
    'chapter.negotiation': 'Verhandlung',
    'chapter.clients': 'Kundenakquise',
    'chapter.carrier-management': 'Frachtführerverwaltung',
    'chapter.exchanges': 'Frachtbörsen',
    'chapter.communication': 'Kommunikation',
    'chapter.kpi': 'KPI & Leistung',
    'chapter.translogica': 'Translogica TMS',
    'chapter.fleet': 'Flotte & GPS',
    'chapter.technology': 'Technologie & Digital',
    'chapter.risk-management': 'Risikomanagement',
    'chapter.insurance': 'Transportversicherung',
    'chapter.claims': 'Schäden & Streitigkeiten',
    'chapter.payment': 'Zahlung & Rechnungsstellung',
    'chapter.accounting': 'Buchhaltung',
    'chapter.emergency': 'Notfallverfahren',
    'chapter.case-studies': 'Fallstudien',
    'chapter.training': 'Trainingsübungen',
    'chapter.red-flags': 'Warnzeichen & Tipps',
    'chapter.glossary': 'Glossar',
    'chapter.checklists': 'Checklisten',
    'chapter.licenses-oversize': 'Lizenzen & Schwertransport',
    
    // Dashboard
    'dashboard.title': 'Fortschritts-Dashboard',
    'dashboard.subtitle': 'Verfolgen Sie Ihren Lernfortschritt',
    'dashboard.back': 'Zurück',
    'dashboard.overall': 'Gesamtfortschritt',
    'dashboard.completed': 'Abgeschlossene Kapitel',
    'dashboard.total': 'von insgesamt',
    'dashboard.quizzes': 'Abgeschlossene Tests',
    'dashboard.passed': 'bestanden',
    'dashboard.average': 'Durchschnittsnote',
    'dashboard.passRate': 'Erfolgsquote',
    'dashboard.recent': 'Letzte Aktivität',
    'dashboard.noActivity': 'Noch keine Aktivität. Beginnen Sie mit dem Lesen!',
    'dashboard.quizPerformance': 'Testleistung',
    'dashboard.passRateLabel': 'Erfolgsquote',
    'dashboard.totalScore': 'Gesamtpunktzahl',
    'dashboard.passedLabel': 'Bestanden',
    'dashboard.needImprovement': 'Verbesserungsbedarf',
    'dashboard.remaining': 'Verbleibende Tests',
    'dashboard.allChapters': 'Alle Kapitel',
    'dashboard.congratulations': 'Herzlichen Glückwunsch!',
    'dashboard.completedAll': 'Sie haben alle Kapitel und Tests abgeschlossen',
    'dashboard.reset': 'Fortschritt zurücksetzen',
    'dashboard.confirmReset': 'Sind Sie sicher, dass Sie den gesamten Fortschritt zurücksetzen möchten?',
    
    // Quiz
    'quiz.complete': 'Test Abgeschlossen!',
    'quiz.excellent': 'Ausgezeichnet! Sie beherrschen dieses Kapitel.',
    'quiz.good': 'Gut! Überprüfen Sie die falschen Fragen.',
    'quiz.keepStudying': 'Weiter lernen! Kapitel erneut lesen und noch einmal versuchen.',
    'quiz.chapterComplete': 'Kapitel als abgeschlossen markiert!',
    'quiz.questionPool': 'Fragenpool',
    'quiz.showing': 'Anzeigen',
    'quiz.perRound': 'pro Runde',
    'quiz.tryAgain': 'Erneut Versuchen',
    'quiz.newQuestions': 'Neue Fragen',
    'quiz.question': 'Frage',
    'quiz.of': 'von',
    'quiz.previousBest': 'Bisherige Bestleistung',
    'quiz.correct': 'Richtig!',
    'quiz.incorrect': 'Falsch',
    'quiz.next': 'Nächste Frage',
    'quiz.seeResults': 'Ergebnisse Anzeigen',
    
    // Navigation
    'nav.previous': 'Vorherige',
    'nav.next': 'Nächste',
    'nav.search': 'Im Handbuch suchen...',
    'nav.noResults': 'Keine Ergebnisse gefunden',
    
    // Language
    'language.select': 'Sprache wählen',
    'language.ro': 'Română',
    'language.de': 'Deutsch',
    'language.en': 'English',
  },
  en: {
    // Sidebar
    'sidebar.title': 'Freight Forwarding Manual',
    'sidebar.progress': 'Overall Progress',
    'sidebar.chapters': 'chapters',
    'sidebar.details': 'Details',
    'sidebar.version': 'Version 2025',
    'sidebar.edition': 'Complete Edition',
    'sidebar.quizzesAvailable': 'quizzes available',
    
    // Sections
    'section.foundation': 'Foundation',
    'section.equipment': 'Equipment & Handling',
    'section.documents': 'Documents & Regulations',
    'section.geography': 'Geography & Routes',
    'section.commercial': 'Commercial Skills',
    'section.technology': 'Systems & Technology',
    'section.finance': 'Risk & Finance',
    'section.practical': 'Practical Application',
    
    // Chapters
    'chapter.intro': 'Introduction',
    'chapter.mindset': 'Role & Mindset',
    'chapter.soft-skills': 'Soft Skills',
    'chapter.workflow': 'Operational Workflow',
    'chapter.vehicle': 'Vehicle Reference',
    'chapter.loading': 'Loading & Securing',
    'chapter.reefer': 'Temperature Transport',
    'chapter.warehouse': 'Warehouse & Cross-Dock',
    'chapter.adr': 'ADR Dangerous Goods',
    'chapter.documents': 'Transport Documents',
    'chapter.incoterms': 'Incoterms & Trade',
    'chapter.compliance': 'Driving Hours',
    'chapter.driving-time': 'Shift vs Driving',
    'chapter.customs': 'Customs & Borders',
    'chapter.europe-zones': 'European Zones',
    'chapter.environment': 'Environmental',
    'chapter.supply-chain': 'Supply Chain',
    'chapter.pricing': 'Pricing & Tolls',
    'chapter.commercial': 'Commercial Skills',
    'chapter.negotiation': 'Negotiation',
    'chapter.clients': 'Finding Clients',
    'chapter.carrier-management': 'Carrier Management',
    'chapter.exchanges': 'Freight Exchanges',
    'chapter.communication': 'Communication',
    'chapter.kpi': 'KPIs & Performance',
    'chapter.translogica': 'Translogica TMS',
    'chapter.fleet': 'Fleet & GPS',
    'chapter.technology': 'Technology & Digital',
    'chapter.risk-management': 'Risk Management',
    'chapter.insurance': 'Transport Insurance',
    'chapter.claims': 'Claims & Disputes',
    'chapter.payment': 'Payment & Invoicing',
    'chapter.accounting': 'Accounting & Finance',
    'chapter.emergency': 'Emergency Procedures',
    'chapter.case-studies': 'Case Studies',
    'chapter.training': 'Training Exercises',
    'chapter.red-flags': 'Red Flags & Tips',
    'chapter.glossary': 'Glossary',
    'chapter.checklists': 'Checklists',
    'chapter.licenses-oversize': 'Licenses & Oversize',
    
    // Dashboard
    'dashboard.title': 'Progress Dashboard',
    'dashboard.subtitle': 'Track your learning journey',
    'dashboard.back': 'Back',
    'dashboard.overall': 'Overall Progress',
    'dashboard.completed': 'Chapters Completed',
    'dashboard.total': 'of total',
    'dashboard.quizzes': 'Quizzes Completed',
    'dashboard.passed': 'passed',
    'dashboard.average': 'Average Score',
    'dashboard.passRate': 'pass rate',
    'dashboard.recent': 'Recent Activity',
    'dashboard.noActivity': 'No activity yet. Start reading chapters!',
    'dashboard.quizPerformance': 'Quiz Performance',
    'dashboard.passRateLabel': 'Pass Rate',
    'dashboard.totalScore': 'Total Score',
    'dashboard.passedLabel': 'Passed',
    'dashboard.needImprovement': 'Need Improvement',
    'dashboard.remaining': 'Quizzes remaining',
    'dashboard.allChapters': 'All Chapters',
    'dashboard.congratulations': 'Congratulations!',
    'dashboard.completedAll': 'You have completed all chapters and quizzes',
    'dashboard.reset': 'Reset Progress',
    'dashboard.confirmReset': 'Are you sure you want to reset all progress?',
    
    // Quiz
    'quiz.complete': 'Quiz Complete!',
    'quiz.excellent': 'Excellent work! You\'ve mastered this chapter.',
    'quiz.good': 'Good job! Review the missed questions.',
    'quiz.keepStudying': 'Keep studying! Review the chapter and try again.',
    'quiz.chapterComplete': 'Chapter marked as complete!',
    'quiz.questionPool': 'Question pool',
    'quiz.showing': 'Showing',
    'quiz.perRound': 'per round',
    'quiz.tryAgain': 'Try Again',
    'quiz.newQuestions': 'New Questions',
    'quiz.question': 'Question',
    'quiz.of': 'of',
    'quiz.previousBest': 'Previous best',
    'quiz.correct': 'Correct!',
    'quiz.incorrect': 'Incorrect',
    'quiz.next': 'Next Question',
    'quiz.seeResults': 'See Results',
    
    // Navigation
    'nav.previous': 'Previous',
    'nav.next': 'Next',
    'nav.search': 'Search manual...',
    'nav.noResults': 'No results found',
    
    // Language
    'language.select': 'Select language',
    'language.ro': 'Română',
    'language.de': 'Deutsch',
    'language.en': 'English',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ro');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && ['ro', 'de', 'en'].includes(stored)) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { translations };
