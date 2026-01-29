import { useState, useEffect, memo, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { format } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';
import { 
  GraduationCap, User as UserIcon, BookOpen, Check, X, RotateCcw, Timer, 
  Target, Trophy, Award, Search, ChevronDown, ChevronRight, Eye, Clock,
  AlertTriangle, TrendingUp
} from 'lucide-react';

interface ExamAttempt {
  id: string;
  score: number;
  total_questions: number;
  percentage: number;
  passed: boolean;
  time_spent_seconds: number;
  completed_at: string;
}

interface ChapterDetail {
  chapter_id: string;
  status: string;
  best_score: number;
  attempts_count: number;
  reset_count: number;
  difficulty_level: number;
  visit_count: number;
  total_time_seconds: number;
  quiz_history: Array<{
    score: number;
    passed: boolean;
    created_at: string;
  }>;
}

interface UserProgress {
  user_id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  chapters_completed: number;
  total_chapters: number;
  progress_percentage: number;
  avg_quiz_score: number;
  total_quiz_attempts: number;
  passed_quizzes: number;
  total_training_seconds: number;
  total_app_time_seconds: number;
  recommended_time_seconds: number;
  exam_attempts: ExamAttempt[];
  best_exam?: ExamAttempt | null;
  certificate?: {
    certificate_code: string;
    issued_at: string;
    expires_at: string;
    total_training_hours: number | null;
  } | null;
  chapter_details: ChapterDetail[];
}

// 50 chapters × 48 min average = 40 hours recommended
const RECOMMENDED_TIME_PER_CHAPTER = 48 * 60; // 48 minutes in seconds
const TOTAL_CHAPTERS = 50;
const TOTAL_RECOMMENDED_SECONDS = RECOMMENDED_TIME_PER_CHAPTER * TOTAL_CHAPTERS;

export const UserProgressExamPanel = memo(function UserProgressExamPanel() {
  const { company, isSuperAdmin, isCompanyAdmin } = useCompany();
  const { language } = useLanguage();
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedUsers, setExpandedUsers] = useState<Set<string>>(new Set());

  const dateLocale = language === 'de' ? de : language === 'en' ? enUS : ro;

  const translations = {
    ro: {
      title: 'Progres Utilizatori & Examen Final',
      subtitle: 'Vizualizați progresul detaliat al fiecărui utilizator pe capitole, quiz-uri și examen',
      noData: 'Nu există date de progres.',
      user: 'Utilizator',
      chapterProgress: 'Progres Capitole',
      avgQuizScore: 'Scor Mediu Quiz',
      finalExam: 'Examen Final',
      certificate: 'Certificat',
      passed: 'Promovat',
      failed: 'Nepromovat',
      attempts: 'încercări',
      eligible: 'Eligibil',
      viewAllAttempts: 'Vezi toate încercările',
      issued: 'Emis:',
      expires: 'Expiră:',
      training: 'training',
      search: 'Caută utilizator...',
      passedQuizzes: 'Quiz-uri promovate',
      totalQuizAttempts: 'Total încercări quiz',
      showDetails: 'Vezi detalii pe capitole',
      hideDetails: 'Ascunde detalii',
      chapter: 'Capitol',
      visits: 'Vizite',
      timeSpent: 'Timp Petrecut',
      quizResult: 'Rezultat Quiz',
      quizAttempts: 'Încercări Quiz',
      resets: 'Resetări',
      difficulty: 'Dificultate',
      quizHistory: 'Istoric Quiz',
      totalAppTime: 'Timp Total Aplicație',
      recommendedTime: 'Timp Recomandat',
      timeStatus: 'Status Timp',
      belowRecommended: 'Sub recomandat',
      onTrack: 'Pe drumul bun',
      exceeds: 'Depășește',
      noQuizYet: 'Fără quiz',
      locked: 'Blocat',
      unlocked: 'Deblocat',
      inProgress: 'În progres',
      completed: 'Completat',
      minutes: 'min',
      hours: 'ore',
      notVisited: 'Nevizitat',
    },
    de: {
      title: 'Benutzerfortschritt & Abschlussprüfung',
      subtitle: 'Sehen Sie detaillierten Fortschritt jedes Benutzers in Kapiteln, Quizzen und Prüfung',
      noData: 'Keine Fortschrittsdaten vorhanden.',
      user: 'Benutzer',
      chapterProgress: 'Kapitelfortschritt',
      avgQuizScore: 'Durchschnittliche Quiz-Punktzahl',
      finalExam: 'Abschlussprüfung',
      certificate: 'Zertifikat',
      passed: 'Bestanden',
      failed: 'Nicht bestanden',
      attempts: 'Versuche',
      eligible: 'Berechtigt',
      viewAllAttempts: 'Alle Versuche anzeigen',
      issued: 'Ausgestellt:',
      expires: 'Läuft ab:',
      training: 'Training',
      search: 'Benutzer suchen...',
      passedQuizzes: 'Bestandene Quizze',
      totalQuizAttempts: 'Gesamte Quiz-Versuche',
      showDetails: 'Kapiteldetails anzeigen',
      hideDetails: 'Details ausblenden',
      chapter: 'Kapitel',
      visits: 'Besuche',
      timeSpent: 'Verbrachte Zeit',
      quizResult: 'Quiz-Ergebnis',
      quizAttempts: 'Quiz-Versuche',
      resets: 'Zurücksetzungen',
      difficulty: 'Schwierigkeit',
      quizHistory: 'Quiz-Verlauf',
      totalAppTime: 'Gesamte App-Zeit',
      recommendedTime: 'Empfohlene Zeit',
      timeStatus: 'Zeit-Status',
      belowRecommended: 'Unter empfohlen',
      onTrack: 'Auf Kurs',
      exceeds: 'Übertrifft',
      noQuizYet: 'Noch kein Quiz',
      locked: 'Gesperrt',
      unlocked: 'Entsperrt',
      inProgress: 'In Bearbeitung',
      completed: 'Abgeschlossen',
      minutes: 'Min',
      hours: 'Std',
      notVisited: 'Nicht besucht',
    },
    en: {
      title: 'User Progress & Final Exam',
      subtitle: 'View detailed progress of each user on chapters, quizzes, and exam',
      noData: 'No progress data available.',
      user: 'User',
      chapterProgress: 'Chapter Progress',
      avgQuizScore: 'Avg Quiz Score',
      finalExam: 'Final Exam',
      certificate: 'Certificate',
      passed: 'Passed',
      failed: 'Failed',
      attempts: 'attempts',
      eligible: 'Eligible',
      viewAllAttempts: 'View all attempts',
      issued: 'Issued:',
      expires: 'Expires:',
      training: 'training',
      search: 'Search user...',
      passedQuizzes: 'Passed Quizzes',
      totalQuizAttempts: 'Total Quiz Attempts',
      showDetails: 'View chapter details',
      hideDetails: 'Hide details',
      chapter: 'Chapter',
      visits: 'Visits',
      timeSpent: 'Time Spent',
      quizResult: 'Quiz Result',
      quizAttempts: 'Quiz Attempts',
      resets: 'Resets',
      difficulty: 'Difficulty',
      quizHistory: 'Quiz History',
      totalAppTime: 'Total App Time',
      recommendedTime: 'Recommended Time',
      timeStatus: 'Time Status',
      belowRecommended: 'Below recommended',
      onTrack: 'On track',
      exceeds: 'Exceeds',
      noQuizYet: 'No quiz yet',
      locked: 'Locked',
      unlocked: 'Unlocked',
      inProgress: 'In Progress',
      completed: 'Completed',
      minutes: 'min',
      hours: 'hrs',
      notVisited: 'Not visited',
    }
  };

  const t = translations[language] || translations.en;

  // Chapter names mapping
  const chapterNames: Record<string, Record<string, string>> = {
    'intro': { ro: 'Introducere', de: 'Einführung', en: 'Introduction' },
    'mindset': { ro: 'Mindset', de: 'Denkweise', en: 'Mindset' },
    'soft-skills': { ro: 'Soft Skills', de: 'Soft Skills', en: 'Soft Skills' },
    'stress-management': { ro: 'Gestionarea Stresului', de: 'Stressmanagement', en: 'Stress Management' },
    'workflow': { ro: 'Flux de Lucru', de: 'Arbeitsablauf', en: 'Workflow' },
    'vehicle': { ro: 'Vehicule', de: 'Fahrzeuge', en: 'Vehicles' },
    'loading': { ro: 'Încărcare', de: 'Beladung', en: 'Loading' },
    'reefer': { ro: 'Frigorific', de: 'Kühlfahrzeuge', en: 'Reefer' },
    'express-transport': { ro: 'Transport Express', de: 'Expresstransport', en: 'Express Transport' },
    'intermodal': { ro: 'Intermodal', de: 'Intermodal', en: 'Intermodal' },
    'warehouse': { ro: 'Depozitare', de: 'Lagerung', en: 'Warehouse' },
    'adr': { ro: 'ADR', de: 'ADR', en: 'ADR' },
    'documents': { ro: 'Documente', de: 'Dokumente', en: 'Documents' },
    'incoterms': { ro: 'Incoterms', de: 'Incoterms', en: 'Incoterms' },
    'customs': { ro: 'Vamă', de: 'Zoll', en: 'Customs' },
    'authorities': { ro: 'Autorități', de: 'Behörden', en: 'Authorities' },
    'compliance': { ro: 'Conformitate', de: 'Konformität', en: 'Compliance' },
    'driving-time': { ro: 'Timp de Condus', de: 'Lenkzeiten', en: 'Driving Time' },
    'licenses-oversize': { ro: 'Licențe Agabaritice', de: 'Übergrößengenehmigungen', en: 'Oversize Licenses' },
    'europe-zones': { ro: 'Zone Europene', de: 'Europäische Zonen', en: 'Europe Zones' },
    'european-countries': { ro: 'Țări Europene', de: 'Europäische Länder', en: 'European Countries' },
    'environment': { ro: 'Mediu', de: 'Umwelt', en: 'Environment' },
    'sustainability': { ro: 'Sustenabilitate', de: 'Nachhaltigkeit', en: 'Sustainability' },
    'supply-chain': { ro: 'Lanț de Aprovizionare', de: 'Lieferkette', en: 'Supply Chain' },
    'pricing': { ro: 'Prețuri', de: 'Preisgestaltung', en: 'Pricing' },
    'commercial': { ro: 'Comercial', de: 'Kommerziell', en: 'Commercial' },
    'negotiation': { ro: 'Negociere', de: 'Verhandlung', en: 'Negotiation' },
    'clients': { ro: 'Clienți', de: 'Kunden', en: 'Clients' },
    'carrier-management': { ro: 'Managementul Transportatorilor', de: 'Spediteursmanagement', en: 'Carrier Management' },
    'exchanges': { ro: 'Burse', de: 'Börsen', en: 'Exchanges' },
    'communication': { ro: 'Comunicare', de: 'Kommunikation', en: 'Communication' },
    'networking': { ro: 'Networking', de: 'Networking', en: 'Networking' },
    'kpi': { ro: 'KPI', de: 'KPI', en: 'KPI' },
    'translogica': { ro: 'Translogica', de: 'Translogica', en: 'Translogica' },
    'fleet': { ro: 'Flotă', de: 'Flotte', en: 'Fleet' },
    'technology': { ro: 'Tehnologie', de: 'Technologie', en: 'Technology' },
    'digitalization': { ro: 'Digitalizare', de: 'Digitalisierung', en: 'Digitalization' },
    'risk-management': { ro: 'Managementul Riscului', de: 'Risikomanagement', en: 'Risk Management' },
    'insurance': { ro: 'Asigurări', de: 'Versicherung', en: 'Insurance' },
    'high-value-goods': { ro: 'Mărfuri de Valoare', de: 'Hochwertige Güter', en: 'High Value Goods' },
    'claims': { ro: 'Reclamații', de: 'Reklamationen', en: 'Claims' },
    'payment': { ro: 'Plăți', de: 'Zahlungen', en: 'Payment' },
    'accounting': { ro: 'Contabilitate', de: 'Buchhaltung', en: 'Accounting' },
    'training': { ro: 'Training', de: 'Schulung', en: 'Training' },
    'professional-development': { ro: 'Dezvoltare Profesională', de: 'Berufliche Entwicklung', en: 'Professional Development' },
    'case-studies': { ro: 'Studii de Caz', de: 'Fallstudien', en: 'Case Studies' },
    'emergency': { ro: 'Urgențe', de: 'Notfälle', en: 'Emergency' },
    'red-flags': { ro: 'Semnale de Alarmă', de: 'Warnzeichen', en: 'Red Flags' },
    'checklists': { ro: 'Checklist-uri', de: 'Checklisten', en: 'Checklists' },
    'glossary': { ro: 'Glosar', de: 'Glossar', en: 'Glossary' },
  };

  const getChapterName = (chapterId: string) => {
    return chapterNames[chapterId]?.[language] || chapterId;
  };

  useEffect(() => {
    if (isCompanyAdmin || isSuperAdmin) {
      fetchUserProgress();
    }
  }, [company, isCompanyAdmin, isSuperAdmin]);

  const fetchUserProgress = async () => {
    setLoading(true);
    try {
      // Fetch all required data in parallel
      const [
        profilesRes,
        chapterProgressRes,
        quizAttemptsRes,
        trainingTimeRes,
        examAttemptsRes,
        certificatesRes,
        companyUsersRes,
        pageViewsRes,
        resetHistoryRes,
        chaptersRes
      ] = await Promise.all([
        supabase.from('profiles').select('id, email, first_name, last_name'),
        supabase.from('chapter_progress').select('user_id, chapter_id, status, best_score, attempts_count, reset_count, difficulty_level'),
        supabase.from('quiz_attempts').select('user_id, chapter_id, score, passed, created_at').order('created_at', { ascending: true }),
        supabase.from('training_time').select('user_id, total_seconds'),
        supabase.from('final_exam_attempts').select('id, user_id, score, total_questions, percentage, passed, time_spent_seconds, completed_at').order('completed_at', { ascending: false }),
        supabase.from('certificates').select('user_id, certificate_code, issued_at, expires_at, is_revoked, total_training_hours').eq('is_revoked', false),
        supabase.from('company_users').select('user_id, company_id, status'),
        supabase.from('page_views').select('user_id, chapter_id, duration_seconds'),
        supabase.from('quiz_reset_history').select('user_id, chapter_id, reset_at'),
        supabase.from('chapters').select('id, order_index').order('order_index')
      ]);

      const profiles = profilesRes.data || [];
      const chapterProgress = chapterProgressRes.data || [];
      const quizAttempts = quizAttemptsRes.data || [];
      const trainingTime = trainingTimeRes.data || [];
      const examAttempts = examAttemptsRes.data || [];
      const certificates = certificatesRes.data || [];
      const companyUsers = companyUsersRes.data || [];
      const pageViews = pageViewsRes.data || [];
      const resetHistory = resetHistoryRes.data || [];
      const chapters = chaptersRes.data || [];

      const chapterOrder = chapters.map(c => c.id);

      const progressData: UserProgress[] = profiles.map(profile => {
        // Chapter details
        const userChapterProgress = chapterProgress.filter(cp => cp.user_id === profile.id);
        const userQuizAttempts = quizAttempts.filter(qa => qa.user_id === profile.id);
        const userPageViews = pageViews.filter(pv => pv.user_id === profile.id);
        const userResets = resetHistory.filter(rh => rh.user_id === profile.id);

        // Build chapter details
        const chapterDetails: ChapterDetail[] = chapterOrder.map(chapterId => {
          const progress = userChapterProgress.find(cp => cp.chapter_id === chapterId);
          const chapterViews = userPageViews.filter(pv => pv.chapter_id === chapterId);
          const chapterQuizzes = userQuizAttempts.filter(qa => qa.chapter_id === chapterId);
          const chapterResets = userResets.filter(rh => rh.chapter_id === chapterId);

          return {
            chapter_id: chapterId,
            status: progress?.status || 'locked',
            best_score: progress?.best_score || 0,
            attempts_count: progress?.attempts_count || 0,
            reset_count: progress?.reset_count || chapterResets.length || 0,
            difficulty_level: progress?.difficulty_level || 1,
            visit_count: chapterViews.length,
            total_time_seconds: chapterViews.reduce((sum, v) => sum + (v.duration_seconds || 0), 0),
            quiz_history: chapterQuizzes.map(q => ({
              score: q.score,
              passed: q.passed,
              created_at: q.created_at
            }))
          };
        });

        // Summary stats
        const completedChapters = userChapterProgress.filter(cp => cp.status === 'completed').length;
        const passedQuizzes = userChapterProgress.filter(cp => cp.status === 'completed' && (cp.best_score || 0) >= 9).length;
        const avgScore = userChapterProgress.length > 0 
          ? userChapterProgress.reduce((sum, cp) => sum + (cp.best_score || 0), 0) / userChapterProgress.length 
          : 0;

        const totalQuizAttempts = userQuizAttempts.length;
        
        // Total app time from training_time table
        const userTrainingTime = trainingTime.filter(tt => tt.user_id === profile.id);
        const totalAppTimeSeconds = userTrainingTime.reduce((sum, tt) => sum + (tt.total_seconds || 0), 0);
        
        // Also sum time from page views as backup
        const totalPageViewTime = chapterDetails.reduce((sum, cd) => sum + cd.total_time_seconds, 0);
        const totalTrainingSeconds = Math.max(totalAppTimeSeconds, totalPageViewTime);

        // Final exam
        const userExams = examAttempts
          .filter(ea => ea.user_id === profile.id)
          .map(ea => ({
            id: ea.id,
            score: ea.score,
            total_questions: ea.total_questions,
            percentage: Number(ea.percentage),
            passed: ea.passed,
            time_spent_seconds: ea.time_spent_seconds || 0,
            completed_at: ea.completed_at
          }));

        const passedExams = userExams.filter(e => e.passed);
        const bestExam = passedExams.length > 0 
          ? passedExams.reduce((best, current) => current.percentage > best.percentage ? current : best)
          : userExams.length > 0 
            ? userExams.reduce((best, current) => current.percentage > best.percentage ? current : best)
            : null;

        const userCert = certificates.find(c => c.user_id === profile.id);

        return {
          user_id: profile.id,
          email: profile.email,
          first_name: profile.first_name,
          last_name: profile.last_name,
          chapters_completed: completedChapters,
          total_chapters: TOTAL_CHAPTERS,
          progress_percentage: Math.round((completedChapters / TOTAL_CHAPTERS) * 100),
          avg_quiz_score: Math.round(avgScore * 10) / 10,
          total_quiz_attempts: totalQuizAttempts,
          passed_quizzes: passedQuizzes,
          total_training_seconds: totalTrainingSeconds,
          total_app_time_seconds: totalAppTimeSeconds,
          recommended_time_seconds: TOTAL_RECOMMENDED_SECONDS,
          exam_attempts: userExams,
          best_exam: bestExam,
          certificate: userCert ? {
            certificate_code: userCert.certificate_code,
            issued_at: userCert.issued_at,
            expires_at: userCert.expires_at,
            total_training_hours: userCert.total_training_hours
          } : null,
          chapter_details: chapterDetails
        };
      });

      // Filter by company if not super admin
      if (!isSuperAdmin && company) {
        const companyUserIds = companyUsers
          .filter(cu => cu.company_id === company.id && cu.status === 'approved')
          .map(cu => cu.user_id);
        setUserProgress(progressData.filter(p => companyUserIds.includes(p.user_id)));
      } else {
        setUserProgress(progressData);
      }
    } catch (error) {
      console.error('Error fetching user progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleUserExpanded = (userId: string) => {
    setExpandedUsers(prev => {
      const next = new Set(prev);
      if (next.has(userId)) {
        next.delete(userId);
      } else {
        next.add(userId);
      }
      return next;
    });
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}${t.hours} ${minutes}${t.minutes}`;
    }
    return `${minutes}${t.minutes}`;
  };

  const getTimeStatusBadge = (actual: number, recommended: number) => {
    const ratio = actual / recommended;
    if (ratio < 0.5) {
      return <Badge variant="destructive" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />{t.belowRecommended}</Badge>;
    } else if (ratio < 1) {
      return <Badge className="bg-amber-500 hover:bg-amber-600 text-xs"><TrendingUp className="h-3 w-3 mr-1" />{t.onTrack}</Badge>;
    }
    return <Badge className="bg-green-500 hover:bg-green-600 text-xs"><Check className="h-3 w-3 mr-1" />{t.exceeds}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500 text-white text-xs">{t.completed}</Badge>;
      case 'in_progress':
        return <Badge className="bg-blue-500 text-white text-xs">{t.inProgress}</Badge>;
      case 'unlocked':
        return <Badge variant="outline" className="text-xs">{t.unlocked}</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">{t.locked}</Badge>;
    }
  };

  const getDifficultyBadge = (level: number) => {
    const colors: Record<number, string> = {
      1: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      2: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      3: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      4: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      5: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    };
    return <Badge className={`${colors[level] || colors[1]} text-xs`}>Lv.{level}</Badge>;
  };

  const filteredProgress = useMemo(() => {
    return userProgress.filter(up => {
      const searchLower = searchTerm.toLowerCase();
      return (
        up.email?.toLowerCase().includes(searchLower) ||
        up.first_name?.toLowerCase().includes(searchLower) ||
        up.last_name?.toLowerCase().includes(searchLower)
      );
    }).sort((a, b) => {
      if (b.progress_percentage !== a.progress_percentage) {
        return b.progress_percentage - a.progress_percentage;
      }
      return (b.best_exam?.percentage || 0) - (a.best_exam?.percentage || 0);
    });
  }, [userProgress, searchTerm]);

  return (
    <Card className="border-2 border-green-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-b border-green-100">
        <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
          <GraduationCap className="h-6 w-6 text-green-600" />
          {t.title}
        </CardTitle>
        <CardDescription className="text-green-700 dark:text-green-300">{t.subtitle}</CardDescription>
        
        {/* Time recommendation info */}
        <div className="mt-2 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-green-200">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-green-800 dark:text-green-200 font-medium">{t.recommendedTime}:</span>
              <span className="text-green-600 font-bold">{Math.round(TOTAL_RECOMMENDED_SECONDS / 3600)} {t.hours}</span>
              <span className="text-muted-foreground text-xs">(~48 {t.minutes}/{t.chapter})</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filteredProgress.length === 0 ? (
          <p className="text-center py-8 text-muted-foreground">{t.noData}</p>
        ) : (
          <div className="space-y-4">
            {filteredProgress.map((up) => (
              <Collapsible 
                key={up.user_id} 
                open={expandedUsers.has(up.user_id)}
                onOpenChange={() => toggleUserExpanded(up.user_id)}
              >
                <div className="border rounded-lg overflow-hidden">
                  {/* User summary row */}
                  <CollapsibleTrigger className="w-full">
                    <div className="p-4 bg-card hover:bg-muted/50 transition-colors">
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                        {/* User */}
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                            <UserIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-foreground">
                              {up.first_name} {up.last_name}
                            </p>
                            <p className="text-xs text-muted-foreground">{up.email}</p>
                          </div>
                        </div>

                        {/* Chapter Progress */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-1 text-foreground">
                              <BookOpen className="h-3 w-3" />
                              {up.chapters_completed}/{up.total_chapters}
                            </span>
                            <span className="font-medium">{up.progress_percentage}%</span>
                          </div>
                          <Progress value={up.progress_percentage} className="h-2" />
                        </div>

                        {/* Quiz Score */}
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-muted-foreground" />
                          <span className={up.avg_quiz_score >= 9 ? 'text-green-600 font-semibold' : up.avg_quiz_score >= 7 ? 'text-amber-600' : 'text-foreground'}>
                            {up.avg_quiz_score > 0 ? `${up.avg_quiz_score}/10` : '-'}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({up.total_quiz_attempts} {t.attempts})
                          </span>
                        </div>

                        {/* Time Status */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Timer className="h-4 w-4 text-muted-foreground" />
                            <span className="text-foreground font-medium">
                              {formatTime(up.total_training_seconds)}
                            </span>
                          </div>
                          {getTimeStatusBadge(up.total_training_seconds, up.recommended_time_seconds)}
                        </div>

                        {/* Final Exam */}
                        <div>
                          {up.best_exam ? (
                            <div className="flex items-center gap-2">
                              {up.best_exam.passed ? (
                                <Badge className="bg-green-500">
                                  <Trophy className="h-3 w-3 mr-1" />
                                  {up.best_exam.percentage}%
                                </Badge>
                              ) : (
                                <Badge variant="destructive">
                                  <X className="h-3 w-3 mr-1" />
                                  {up.best_exam.percentage}%
                                </Badge>
                              )}
                            </div>
                          ) : (
                            <span className="text-muted-foreground text-sm">-</span>
                          )}
                        </div>

                        {/* Expand indicator */}
                        <div className="flex items-center justify-end gap-2">
                          {up.certificate && (
                            <Award className="h-5 w-5 text-amber-500" />
                          )}
                          {expandedUsers.has(up.user_id) ? (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>

                  {/* Expanded chapter details */}
                  <CollapsibleContent>
                    <div className="border-t bg-muted/30 p-4">
                      {/* Summary stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 p-3 bg-card rounded-lg">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">{formatTime(up.total_training_seconds)}</p>
                          <p className="text-xs text-muted-foreground">{t.totalAppTime}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">{formatTime(up.recommended_time_seconds)}</p>
                          <p className="text-xs text-muted-foreground">{t.recommendedTime}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-amber-600">{up.total_quiz_attempts}</p>
                          <p className="text-xs text-muted-foreground">{t.totalQuizAttempts}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-purple-600">{up.passed_quizzes}</p>
                          <p className="text-xs text-muted-foreground">{t.passedQuizzes}</p>
                        </div>
                      </div>

                      {/* Chapter details table */}
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-bold text-foreground">{t.chapter}</TableHead>
                              <TableHead className="font-bold text-foreground text-center">{t.visits}</TableHead>
                              <TableHead className="font-bold text-foreground">{t.timeSpent}</TableHead>
                              <TableHead className="font-bold text-foreground">{t.quizResult}</TableHead>
                              <TableHead className="font-bold text-foreground text-center">{t.quizAttempts}</TableHead>
                              <TableHead className="font-bold text-foreground text-center">{t.resets}</TableHead>
                              <TableHead className="font-bold text-foreground">{t.difficulty}</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {up.chapter_details.map((cd, index) => (
                              <TableRow key={cd.chapter_id} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/20'}>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground w-6">{index + 1}.</span>
                                    <span className="font-medium text-foreground">{getChapterName(cd.chapter_id)}</span>
                                    {getStatusBadge(cd.status)}
                                  </div>
                                </TableCell>
                                <TableCell className="text-center">
                                  <div className="flex items-center justify-center gap-1">
                                    <Eye className="h-3 w-3 text-muted-foreground" />
                                    <span className={cd.visit_count > 0 ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                                      {cd.visit_count > 0 ? cd.visit_count : '-'}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  {cd.total_time_seconds > 0 ? (
                                    <span className="text-foreground">{formatTime(cd.total_time_seconds)}</span>
                                  ) : (
                                    <span className="text-muted-foreground text-xs">{t.notVisited}</span>
                                  )}
                                </TableCell>
                                <TableCell>
                                  {cd.best_score > 0 ? (
                                    <span className={cd.best_score >= 9 ? 'text-green-600 font-semibold' : cd.best_score >= 7 ? 'text-amber-600' : 'text-red-600'}>
                                      {cd.best_score}/10
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground text-xs">{t.noQuizYet}</span>
                                  )}
                                </TableCell>
                                <TableCell className="text-center">
                                  <span className={cd.attempts_count > 0 ? 'text-foreground' : 'text-muted-foreground'}>
                                    {cd.attempts_count || '-'}
                                  </span>
                                </TableCell>
                                <TableCell className="text-center">
                                  {cd.reset_count > 0 ? (
                                    <Badge variant="destructive" className="text-xs">
                                      <RotateCcw className="h-3 w-3 mr-1" />
                                      {cd.reset_count}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                <TableCell>
                                  {getDifficultyBadge(cd.difficulty_level)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      {/* Certificate info */}
                      {up.certificate && (
                        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-amber-500" />
                            <span className="font-medium text-amber-800 dark:text-amber-200">{t.certificate}: {up.certificate.certificate_code}</span>
                          </div>
                          <div className="mt-1 text-sm text-amber-700 dark:text-amber-300 flex gap-4">
                            <span>{t.issued} {format(new Date(up.certificate.issued_at), 'dd MMM yyyy', { locale: dateLocale })}</span>
                            <span>{t.expires} {format(new Date(up.certificate.expires_at), 'dd MMM yyyy', { locale: dateLocale })}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
});
