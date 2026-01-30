import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterHero } from "../ChapterHero";
import { ChapterImage } from "../ChapterImage";
import {
  GraduationCap, TrendingUp, Award, BookOpen, Globe,
  Laptop, Users, Heart, Star, Target, CheckCircle, AlertTriangle, Book,
  Compass, Briefcase, Calendar, MessageSquare, ArrowRight, Lightbulb,
  FileText, Languages, Brain, Clock, Zap, BadgeCheck
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import careerDevelopmentImg from "@/assets/chapters/career-development.jpg";

// Career stages data structure
const careerStages = [
  { level: 1, years: "0-1", color: "from-blue-500 to-blue-600" },
  { level: 2, years: "1-3", color: "from-cyan-500 to-cyan-600" },
  { level: 3, years: "3-5", color: "from-teal-500 to-teal-600" },
  { level: 4, years: "5-7", color: "from-green-500 to-green-600" },
  { level: 5, years: "7-10", color: "from-yellow-500 to-yellow-600" },
  { level: 6, years: "10+", color: "from-orange-500 to-orange-600" },
];

export function ProfessionalDevelopmentChapter() {
  const { ct } = useChapterTranslation('professional-development');
  const { language } = useLanguage();
  
  // Translations for this chapter
  const t = {
    en: {
      introTitle: "Introduction",
      learningObjectives: "Learning Objectives",
      careerPathsTitle: "Career Paths in Freight Forwarding",
      operationalTrack: "Operational Track",
      yearsExp: "years experience",
      alternativePathsTitle: "Alternative Specialized Tracks",
      salesPath: "Sales / Key Account",
      pricingPath: "Pricing Analyst",
      customsPath: "Customs Specialist",
      itPath: "IT / TMS Specialist",
      projectPath: "Project Logistics",
      essentialSkillsTitle: "Essential Skills for Success",
      technicalSkills: "Technical Skills",
      softSkills: "Soft Skills",
      languageSkills: "Language Skills",
      certificationsTitle: "Certifications & Qualifications",
      majorCerts: "Major International Certifications",
      specializedCerts: "Specialized Certifications",
      continuousLearningTitle: "Continuous Learning",
      learningSources: "Learning Sources",
      publications: "Industry Publications",
      conferences: "Conferences & Trade Shows",
      onlineCourses: "Online Courses",
      communities: "Online Communities",
      mentoring: "Mentoring",
      learningPlanTitle: "Recommended Learning Plan",
      weekly: "Weekly",
      monthly: "Monthly",
      yearly: "Yearly",
      networkingTitle: "Building Your Network",
      careerPlanningTitle: "Strategic Career Planning",
      shortTerm: "Short-term (1-2 years)",
      mediumTerm: "Medium-term (3-5 years)",
      longTerm: "Long-term (5-10 years)",
      caseStudyTitle: "Case Study",
      checklistTitle: "Annual Development Checklist",
      bestPracticesTitle: "Best Practices",
      commonMistakesTitle: "Common Mistakes",
      glossaryTitle: "Glossary",
      hours: "hours",
      salaryRange: "Salary Range",
      required: "Required",
      recommended: "Recommended",
      valuable: "Valuable",
      investment: "Investment",
      duration: "Duration",
      recognition: "Recognition",
    },
    ro: {
      introTitle: "Introducere",
      learningObjectives: "Obiective de Învățare",
      careerPathsTitle: "Trasee de Carieră în Freight Forwarding",
      operationalTrack: "Traseul Operațional",
      yearsExp: "ani experiență",
      alternativePathsTitle: "Trasee Alternative Specializate",
      salesPath: "Sales / Key Account",
      pricingPath: "Pricing Analyst",
      customsPath: "Specialist Vamă",
      itPath: "IT / Specialist TMS",
      projectPath: "Project Logistics",
      essentialSkillsTitle: "Competențe Esențiale pentru Succes",
      technicalSkills: "Competențe Tehnice",
      softSkills: "Soft Skills",
      languageSkills: "Competențe Lingvistice",
      certificationsTitle: "Certificări și Calificări",
      majorCerts: "Certificări Internaționale Majore",
      specializedCerts: "Certificări Specializate",
      continuousLearningTitle: "Învățare Continuă",
      learningSources: "Surse de Învățare",
      publications: "Publicații de Industrie",
      conferences: "Conferințe și Târguri",
      onlineCourses: "Cursuri Online",
      communities: "Comunități Online",
      mentoring: "Mentorat",
      learningPlanTitle: "Plan de Învățare Recomandat",
      weekly: "Săptămânal",
      monthly: "Lunar",
      yearly: "Anual",
      networkingTitle: "Construirea Rețelei Profesionale",
      careerPlanningTitle: "Planificare Strategică a Carierei",
      shortTerm: "Termen scurt (1-2 ani)",
      mediumTerm: "Termen mediu (3-5 ani)",
      longTerm: "Termen lung (5-10 ani)",
      caseStudyTitle: "Studiu de Caz",
      checklistTitle: "Checklist Anual de Dezvoltare",
      bestPracticesTitle: "Bune Practici",
      commonMistakesTitle: "Greșeli Comune",
      glossaryTitle: "Glosar",
      hours: "ore",
      salaryRange: "Salariu Orientativ",
      required: "Obligatoriu",
      recommended: "Recomandat",
      valuable: "Valoros",
      investment: "Investiție",
      duration: "Durată",
      recognition: "Recunoaștere",
    },
    de: {
      introTitle: "Einführung",
      learningObjectives: "Lernziele",
      careerPathsTitle: "Karrierewege im Freight Forwarding",
      operationalTrack: "Operativer Pfad",
      yearsExp: "Jahre Erfahrung",
      alternativePathsTitle: "Alternative Spezialisierungspfade",
      salesPath: "Vertrieb / Key Account",
      pricingPath: "Pricing Analyst",
      customsPath: "Zollspezialist",
      itPath: "IT / TMS Spezialist",
      projectPath: "Projektlogistik",
      essentialSkillsTitle: "Wesentliche Fähigkeiten für den Erfolg",
      technicalSkills: "Technische Fähigkeiten",
      softSkills: "Soft Skills",
      languageSkills: "Sprachkenntnisse",
      certificationsTitle: "Zertifizierungen & Qualifikationen",
      majorCerts: "Wichtige Internationale Zertifizierungen",
      specializedCerts: "Spezialisierte Zertifizierungen",
      continuousLearningTitle: "Kontinuierliches Lernen",
      learningSources: "Lernquellen",
      publications: "Branchenpublikationen",
      conferences: "Konferenzen & Messen",
      onlineCourses: "Online-Kurse",
      communities: "Online-Communities",
      mentoring: "Mentoring",
      learningPlanTitle: "Empfohlener Lernplan",
      weekly: "Wöchentlich",
      monthly: "Monatlich",
      yearly: "Jährlich",
      networkingTitle: "Netzwerk Aufbauen",
      careerPlanningTitle: "Strategische Karriereplanung",
      shortTerm: "Kurzfristig (1-2 Jahre)",
      mediumTerm: "Mittelfristig (3-5 Jahre)",
      longTerm: "Langfristig (5-10 Jahre)",
      caseStudyTitle: "Fallstudie",
      checklistTitle: "Jährliche Entwicklungs-Checkliste",
      bestPracticesTitle: "Best Practices",
      commonMistakesTitle: "Häufige Fehler",
      glossaryTitle: "Glossar",
      hours: "Stunden",
      salaryRange: "Gehaltsbereich",
      required: "Erforderlich",
      recommended: "Empfohlen",
      valuable: "Wertvoll",
      investment: "Investition",
      duration: "Dauer",
      recognition: "Anerkennung",
    }
  };

  const tr = t[language as keyof typeof t] || t.ro;

  // Career stages names
  const careerNames = {
    en: ["Junior Dispatcher", "Dispatcher", "Senior Dispatcher", "Team Lead", "Operations Manager", "Director"],
    ro: ["Dispozitor Junior", "Dispozitor", "Dispozitor Senior", "Team Lead", "Manager Operațiuni", "Director"],
    de: ["Junior Disponent", "Disponent", "Senior Disponent", "Teamleiter", "Operations Manager", "Direktor"]
  };

  const names = careerNames[language as keyof typeof careerNames] || careerNames.ro;

  // Alternative paths
  const altPaths = [
    { icon: TrendingUp, title: tr.salesPath, color: "bg-blue-500" },
    { icon: Target, title: tr.pricingPath, color: "bg-purple-500" },
    { icon: Globe, title: tr.customsPath, color: "bg-green-500" },
    { icon: Laptop, title: tr.itPath, color: "bg-orange-500" },
    { icon: Briefcase, title: tr.projectPath, color: "bg-pink-500" },
  ];

  // Technical skills
  const technicalSkills = [
    { name: "TMS", desc: "Translogica, CargoWise, SAP TM", level: 90 },
    { name: "Excel", desc: "Pivot, VLOOKUP, Macros", level: 85 },
    { name: "CMR/Incoterms", desc: language === 'ro' ? "Reglementări" : language === 'de' ? "Vorschriften" : "Regulations", level: 95 },
    { name: language === 'ro' ? "Geografie Transport" : language === 'de' ? "Transportgeografie" : "Transport Geography", desc: language === 'ro' ? "Rute, Timpi, Hub-uri" : language === 'de' ? "Routen, Zeiten, Hubs" : "Routes, Times, Hubs", level: 80 },
  ];

  // Soft skills
  const softSkills = [
    { icon: Zap, name: language === 'ro' ? "Rezistență la Stres" : language === 'de' ? "Stressresistenz" : "Stress Resistance" },
    { icon: MessageSquare, name: language === 'ro' ? "Comunicare Clară" : language === 'de' ? "Klare Kommunikation" : "Clear Communication" },
    { icon: Clock, name: language === 'ro' ? "Organizare" : language === 'de' ? "Organisation" : "Organization" },
    { icon: Brain, name: language === 'ro' ? "Rezolvare Probleme" : language === 'de' ? "Problemlösung" : "Problem Solving" },
    { icon: Users, name: language === 'ro' ? "Negociere" : language === 'de' ? "Verhandlung" : "Negotiation" },
  ];

  // Languages
  const languageSkillsList = [
    { lang: language === 'ro' ? "Engleză" : language === 'de' ? "Englisch" : "English", level: tr.required, color: "bg-red-500" },
    { lang: language === 'ro' ? "Germană" : language === 'de' ? "Deutsch" : "German", level: tr.recommended, color: "bg-yellow-500" },
    { lang: language === 'ro' ? "Franceză" : language === 'de' ? "Französisch" : "French", level: tr.valuable, color: "bg-blue-500" },
    { lang: language === 'ro' ? "Poloneză" : language === 'de' ? "Polnisch" : "Polish", level: tr.valuable, color: "bg-blue-500" },
  ];

  const yearsLabel = language === 'ro' ? 'ani' : language === 'de' ? 'Jahre' : 'years';
  const monthsLabel = language === 'ro' ? 'luni' : language === 'de' ? 'Monate' : 'months';

  // Major certifications
  const majorCerts = [
    { name: "FIATA Diploma", org: "FIATA", duration: "1-2 " + yearsLabel, investment: "3.000-5.000 EUR", global: true },
    { name: "CILT Certification", org: "CILT", duration: "6-12 " + monthsLabel, investment: "1.000-4.000 EUR", global: true },
    { name: "APICS CSCP", org: "APICS", duration: "3-6 " + monthsLabel, investment: "2.000-4.000 EUR", global: true },
  ];

  // Specialized certifications
  const specCerts = [
    { name: "ADR", desc: language === 'ro' ? "Mărfuri Periculoase Rutier" : language === 'de' ? "Gefahrgut Straße" : "Dangerous Goods Road" },
    { name: "IATA DGR", desc: language === 'ro' ? "Mărfuri Periculoase Aerian" : language === 'de' ? "Gefahrgut Luft" : "Dangerous Goods Air" },
    { name: "TMS Certs", desc: "CargoWise, SAP TM, Translogica" },
    { name: language === 'ro' ? "Certificări Vamale" : language === 'de' ? "Zollzertifizierungen" : "Customs Certifications", desc: "AEO, Broker" },
  ];
  
  return (
    <div className="space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={GraduationCap}
        variant="professional-development"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="section-title mb-2">{tr.introTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'ro' 
                ? "Freight forwarding-ul oferă multiple trasee de carieră cu potențial excelent de dezvoltare. De la poziții operaționale la management și specializări, industria recompensează competența, dedicarea și învățarea continuă."
                : language === 'de'
                ? "Freight Forwarding bietet vielfältige Karrierewege mit ausgezeichnetem Entwicklungspotenzial. Von operativen Positionen bis hin zu Management und Spezialisierungen belohnt die Branche Kompetenz, Engagement und kontinuierliches Lernen."
                : "Freight forwarding offers multiple career paths with excellent development potential. From operational positions to management and specializations, the industry rewards competence, dedication, and continuous learning."
              }
            </p>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
        <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-primary" />
          {tr.learningObjectives}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{ct(`objective${num}`)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Career Development Image - contextual before career paths */}
      <ChapterImage
        src={careerDevelopmentImg}
        alt="Professional development and career growth in logistics"
        variant="float-right"
        className="mb-4"
      />

      {/* Career Paths - Visual Timeline */}
      <section>
        <h2 className="section-title flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-primary" />
          {tr.careerPathsTitle}
        </h2>
        
        <div className="info-card mb-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            {tr.operationalTrack}
          </h3>
          
          {/* Career Ladder Visual */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-orange-500" />
            
            <div className="space-y-4">
              {careerStages.map((stage, idx) => (
                <div key={idx} className="flex items-center gap-4 relative">
                  {/* Stage number circle */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-white font-bold shadow-lg z-10`}>
                    {stage.level}
                  </div>
                  
                  {/* Stage content */}
                  <div className="flex-1 bg-muted/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{names[idx]}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {stage.years} {tr.yearsExp}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {ct(`career${stage.level}Desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alternative Paths */}
        <div className="info-card">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-primary" />
            {tr.alternativePathsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {altPaths.map((path, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className={`w-10 h-10 rounded-full ${path.color} flex items-center justify-center mb-2`}>
                  <path.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">{path.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Skills */}
      <section>
        <h2 className="section-title flex items-center gap-3 mb-6">
          <Compass className="w-6 h-6 text-primary" />
          {tr.essentialSkillsTitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Technical Skills */}
          <div className="info-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Laptop className="w-5 h-5 text-blue-500" />
              {tr.technicalSkills}
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.desc}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="info-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500" />
              {tr.softSkills}
            </h3>
            <div className="space-y-3">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Language Skills */}
          <div className="info-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Languages className="w-5 h-5 text-green-500" />
              {tr.languageSkills}
            </h3>
            <div className="space-y-3">
              {languageSkillsList.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">{lang.lang}</span>
                  <span className={`text-xs px-2 py-1 rounded-full text-white ${lang.color}`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="section-title flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-primary" />
          {tr.certificationsTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Major Certifications */}
          <div className="info-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-yellow-500" />
              {tr.majorCerts}
            </h3>
            <div className="space-y-3">
              {majorCerts.map((cert, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.org}</p>
                    </div>
                    <Globe className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 bg-muted rounded">{cert.duration}</span>
                    <span className="px-2 py-1 bg-muted rounded">{cert.investment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Certifications */}
          <div className="info-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-500" />
              {tr.specializedCerts}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {specCerts.map((cert, idx) => (
                <div key={idx} className="p-3 bg-muted/50 rounded-lg border border-border">
                  <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section>
        <h2 className="section-title flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6 text-primary" />
          {tr.continuousLearningTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard title={tr.publications} icon={FileText}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• DVZ (Deutsche Verkehrs-Zeitung)</li>
              <li>• Lloyd's Loading List</li>
              <li>• Transport Topics</li>
              <li>• VerkehrsRundschau</li>
            </ul>
          </InfoCard>

          <InfoCard title={tr.conferences} icon={Users}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Transport Logistic München</li>
              <li>• LogiMAT Stuttgart</li>
              <li>• FIATA World Congress</li>
              <li>• IRU Events</li>
            </ul>
          </InfoCard>

          <InfoCard title={tr.onlineCourses} icon={Laptop}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Coursera - Supply Chain</li>
              <li>• edX - MIT Logistics</li>
              <li>• LinkedIn Learning</li>
              <li>• CILT e-Learning</li>
            </ul>
          </InfoCard>
        </div>

        {/* Learning Plan */}
        <div className="info-card mt-4">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            {tr.learningPlanTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
              <h4 className="font-semibold text-blue-600 mb-2">{tr.weekly} (2-4 {tr.hours})</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 2-3 {language === 'ro' ? 'articole industrie' : language === 'de' ? 'Branchenartikel' : 'industry articles'}</li>
                <li>• 30-60 min {language === 'ro' ? 'curs online' : language === 'de' ? 'Online-Kurs' : 'online course'}</li>
                <li>• 1 webinar</li>
              </ul>
            </div>
            <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
              <h4 className="font-semibold text-green-600 mb-2">{tr.monthly}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {language === 'ro' ? 'Review reglementări' : language === 'de' ? 'Vorschriften-Review' : 'Regulations review'}</li>
                <li>• 1 {language === 'ro' ? 'discuție networking' : language === 'de' ? 'Networking-Gespräch' : 'networking chat'}</li>
                <li>• {language === 'ro' ? 'Actualizare notițe' : language === 'de' ? 'Notizen aktualisieren' : 'Update notes'}</li>
              </ul>
            </div>
            <div className="p-4 bg-orange-500/5 rounded-lg border border-orange-500/20">
              <h4 className="font-semibold text-orange-600 mb-2">{tr.yearly}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 1 {language === 'ro' ? 'eveniment major' : language === 'de' ? 'Großveranstaltung' : 'major event'}</li>
                <li>• {language === 'ro' ? 'Evaluare competențe' : language === 'de' ? 'Kompetenz-Bewertung' : 'Skills assessment'}</li>
                <li>• {language === 'ro' ? 'Plan dezvoltare nou' : language === 'de' ? 'Neuer Entwicklungsplan' : 'New development plan'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Planning */}
      <section>
        <h2 className="section-title flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-primary" />
          {tr.careerPlanningTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="info-card border-l-4 border-l-blue-500">
            <h3 className="font-semibold mb-3 text-blue-600">{tr.shortTerm}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{ct('shortTermGoal1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{ct('shortTermGoal2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{ct('shortTermGoal3')}</span>
              </li>
            </ul>
          </div>

          <div className="info-card border-l-4 border-l-green-500">
            <h3 className="font-semibold mb-3 text-green-600">{tr.mediumTerm}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{ct('mediumTermGoal1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{ct('mediumTermGoal2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{ct('mediumTermGoal3')}</span>
              </li>
            </ul>
          </div>

          <div className="info-card border-l-4 border-l-orange-500">
            <h3 className="font-semibold mb-3 text-orange-600">{tr.longTerm}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>{ct('longTermGoal1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>{ct('longTermGoal2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>{ct('longTermGoal3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section>
        <h2 className="section-title flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-primary" />
          {tr.caseStudyTitle}
        </h2>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6">
          <h3 className="font-semibold mb-3">{ct('caseStudyTitle')}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{ct('caseStudyContent')}</p>
          <div className="bg-background/80 rounded-lg p-4 border border-primary/10">
            <p className="text-sm text-primary font-medium flex items-start gap-2">
              <Star className="w-4 h-4 mt-0.5 flex-shrink-0" />
              {ct('caseStudyLesson')}
            </p>
          </div>
        </div>
      </section>

      {/* Annual Checklist */}
      <section>
        <h2 className="section-title flex items-center gap-3 mb-4">
          <Calendar className="w-6 h-6 text-primary" />
          {tr.checklistTitle}
        </h2>
        <div className="info-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ct('checklistItems').split(' | ').map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices & Common Mistakes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            {tr.bestPracticesTitle}
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                {ct(`bestPractice${num}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            {tr.commonMistakesTitle}
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                {ct(`commonMistake${num}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-3 mb-4">
          <Book className="w-6 h-6 text-primary" />
          {tr.glossaryTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
              <dt className="font-semibold text-primary mb-1">
                {ct(`glossaryTerm${num}`)}
              </dt>
              <dd className="text-sm text-muted-foreground leading-relaxed">
                {ct(`glossaryDef${num}`)}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="professional-development" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="professional-development" />
    </div>
  );
}
