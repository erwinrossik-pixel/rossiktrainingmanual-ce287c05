import { useState, useEffect, memo, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/logger';
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
  AlertTriangle, TrendingUp, Unlock, Lock, Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';

interface ExamAttempt {
  id: string;
  score: number;
  total_questions: number;
  percentage: number;
  passed: boolean;
  time_spent_seconds: number;
  completed_at: string;
}

interface QuizAttemptDetail {
  score: number;
  passed: boolean;
  created_at: string;
  was_restart: boolean; // if attempt happened shortly after another
}

interface ChapterDetail {
  chapter_id: string;
  status: string;
  best_score: number;
  attempts_count: number; // total quiz attempts from quiz_attempts table
  reset_count: number; // admin resets from chapter_progress
  restart_count: number; // times user backed out / restarted (calculated from attempts)
  user_restart_count: number; // official user restarts that increased difficulty
  failed_count: number; // attempts where passed = false
  passed_count: number; // attempts where passed = true
  first_pass_score: number | null; // score when first passed
  difficulty_level: number;
  visit_count: number;
  total_time_seconds: number;
  quiz_history: QuizAttemptDetail[];
  is_locked_out: boolean;
  consecutive_fails: number;
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
  const [unlockingChapter, setUnlockingChapter] = useState<string | null>(null);
  const [resettingUser, setResettingUser] = useState<string | null>(null);

  const handleResetAllTraining = async (userId: string, userName: string) => {
    setResettingUser(userId);
    try {
      const { data, error } = await supabase.rpc('admin_reset_all_user_training', {
        p_user_id: userId
      });
      
      if (error) {
        logger.error('Error resetting training:', error);
        toast.error(language === 'ro' ? 'Eroare la resetarea training-ului' :
                   language === 'de' ? 'Fehler beim Zurücksetzen des Trainings' : 
                   'Error resetting training');
        return;
      }
      
      toast.success(
        language === 'ro' ? `Training-ul pentru ${userName} a fost resetat complet` :
        language === 'de' ? `Training für ${userName} wurde vollständig zurückgesetzt` :
        `Training for ${userName} has been completely reset`
      );
      
      // Refresh data
      fetchUserProgress();
    } catch (err) {
      logger.error('Failed to reset training:', err);
      toast.error(language === 'ro' ? 'Eroare la resetare' :
                 language === 'de' ? 'Fehler beim Zurücksetzen' : 
                 'Reset failed');
    } finally {
      setResettingUser(null);
    }
  };

  const handleUnlockChapter = async (userId: string, chapterId: string) => {
    setUnlockingChapter(`${userId}-${chapterId}`);
    try {
      const { data, error } = await supabase.rpc('admin_unlock_chapter', {
        p_user_id: userId,
        p_chapter_id: chapterId
      });
      
      if (error) {
        logger.error('Error unlocking chapter:', error);
        return;
      }
      
      // Refresh data
      fetchUserProgress();
    } catch (err) {
      logger.error('Failed to unlock chapter:', err);
    } finally {
      setUnlockingChapter(null);
    }
  };

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
      resets: 'Resetări Admin',
      restarts: 'Reînceput',
      failedAttempts: 'Eșecuri',
      passedAttempts: 'Reușite',
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
      totalRestarts: 'Total Reînceput',
      totalFailed: 'Total Eșecuri',
      totalPassed: 'Total Reușite',
      quizStats: 'Statistici Quiz',
      firstPassScore: 'Scor Prima Trecere',
      lockedOut: 'Blocat (3x eșec)',
      unlock: 'Deblochează',
      unlocking: 'Se deblochează...',
      unlockSuccess: 'Capitol deblocat cu succes',
      resetAllTraining: 'Reîncepe Training',
      resetAllConfirmTitle: 'Reîncepe Training de la Zero',
      resetAllConfirmDescription: 'Această acțiune va reseta progresul pe capitole - utilizatorul va reîncepe de la primul capitol. TOATE datele istorice (quiz-uri, timp, examene) vor fi PĂSTRATE pentru audit. Utilizatorul trebuie să treacă din nou fiecare quiz pentru a debloca capitolele următoare.',
      resetAllConfirm: 'Da, Reîncepe Training',
      resetAllCancel: 'Anulează',
      resetting: 'Se resetează...',
      unlockError: 'Eroare la deblocare',
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
      resets: 'Admin-Resets',
      restarts: 'Neustart',
      failedAttempts: 'Fehlversuche',
      passedAttempts: 'Bestanden',
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
      totalRestarts: 'Gesamt Neustart',
      totalFailed: 'Gesamt Fehlversuche',
      totalPassed: 'Gesamt Bestanden',
      quizStats: 'Quiz-Statistiken',
      firstPassScore: 'Erste Bestanden-Punktzahl',
      lockedOut: 'Gesperrt (3x Fehler)',
      unlock: 'Entsperren',
      unlocking: 'Entsperren...',
      unlockSuccess: 'Kapitel erfolgreich entsperrt',
      unlockError: 'Fehler beim Entsperren',
      resetAllTraining: 'Training Neu Starten',
      resetAllConfirmTitle: 'Training von Vorne Beginnen',
      resetAllConfirmDescription: 'Diese Aktion setzt den Kapitelfortschritt zurück - der Benutzer beginnt beim ersten Kapitel. ALLE historischen Daten (Quizze, Zeit, Prüfungen) werden für Auditzwecke BEIBEHALTEN. Der Benutzer muss jedes Quiz erneut bestehen, um weitere Kapitel freizuschalten.',
      resetAllConfirm: 'Ja, Training Neu Starten',
      resetAllCancel: 'Abbrechen',
      resetting: 'Zurücksetzen...',
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
      resets: 'Admin Resets',
      restarts: 'Restarts',
      failedAttempts: 'Failed',
      passedAttempts: 'Passed',
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
      totalRestarts: 'Total Restarts',
      totalFailed: 'Total Failed',
      totalPassed: 'Total Passed',
      quizStats: 'Quiz Stats',
      firstPassScore: 'First Pass Score',
      lockedOut: 'Locked (3x fail)',
      unlock: 'Unlock',
      unlocking: 'Unlocking...',
      unlockSuccess: 'Chapter unlocked successfully',
      unlockError: 'Failed to unlock',
      resetAllTraining: 'Restart Training',
      resetAllConfirmTitle: 'Restart Training from Beginning',
      resetAllConfirmDescription: 'This action will reset chapter progress - the user will restart from the first chapter. ALL historical data (quizzes, time, exams) will be PRESERVED for audit purposes. The user must pass each quiz again to unlock subsequent chapters.',
      resetAllConfirm: 'Yes, Restart Training',
      resetAllCancel: 'Cancel',
      resetting: 'Resetting...',
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
        supabase.from('chapter_progress').select('user_id, chapter_id, status, best_score, attempts_count, reset_count, difficulty_level, user_restart_count, is_locked_out, consecutive_fails'),
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
          const chapterQuizzes = userQuizAttempts
            .filter(qa => qa.chapter_id === chapterId)
            .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
          const chapterResets = userResets.filter(rh => rh.chapter_id === chapterId);

          // Calculate restarts: attempts that happened within 2 minutes of previous attempt
          // or attempts where user didn't finish (score = 0 or very low attempts in sequence)
          let restartCount = 0;
          for (let i = 1; i < chapterQuizzes.length; i++) {
            const prevTime = new Date(chapterQuizzes[i - 1].created_at).getTime();
            const currTime = new Date(chapterQuizzes[i].created_at).getTime();
            const diffMinutes = (currTime - prevTime) / (1000 * 60);
            // If attempts are within 5 minutes, consider it a restart
            if (diffMinutes < 5) {
              restartCount++;
            }
          }

          // Count passed and failed attempts - ensure boolean comparison
          const passedAttempts = chapterQuizzes.filter(q => q.passed === true);
          const failedAttempts = chapterQuizzes.filter(q => q.passed === false || !q.passed);
          
          // Find first pass score (already sorted by created_at ascending)
          const firstPass = passedAttempts.length > 0 ? passedAttempts[0] : null;

          // Use attempts_count from chapter_progress as fallback when no quiz_attempts exist
          const actualAttemptsCount = chapterQuizzes.length > 0 
            ? chapterQuizzes.length 
            : (progress?.attempts_count || 0);

          // For passed/failed, if no quiz records but chapter is completed, treat as 1 passed
          const passedCount = chapterQuizzes.length > 0 
            ? passedAttempts.length 
            : (progress?.status === 'completed' && (progress?.best_score || 0) >= 9 ? 1 : 0);
          
          const failedCount = chapterQuizzes.length > 0 
            ? failedAttempts.length 
            : (actualAttemptsCount > passedCount ? actualAttemptsCount - passedCount : 0);

          // First pass score - use best_score from progress if no quiz records
          const firstPassScore = firstPass 
            ? firstPass.score 
            : (progress?.status === 'completed' ? Math.min(progress?.best_score || 0, 10) : null);

          return {
            chapter_id: chapterId,
            status: (progress as any)?.is_locked_out ? 'locked_out' : (progress?.status || 'locked'),
            best_score: progress?.best_score || 0,
            attempts_count: actualAttemptsCount,
            reset_count: progress?.reset_count || chapterResets.length || 0,
            restart_count: restartCount, // calculated from time intervals
            user_restart_count: (progress as any)?.user_restart_count || 0, // official DB count
            failed_count: failedCount,
            passed_count: passedCount,
            first_pass_score: firstPassScore,
            difficulty_level: progress?.difficulty_level || 1,
            visit_count: chapterViews.length,
            total_time_seconds: chapterViews.reduce((sum, v) => sum + (v.duration_seconds || 0), 0),
            quiz_history: chapterQuizzes.map((q, idx) => {
              const wasRestart = idx > 0 && 
                (new Date(q.created_at).getTime() - new Date(chapterQuizzes[idx - 1].created_at).getTime()) < 5 * 60 * 1000;
              return {
                score: q.score,
                passed: q.passed,
                created_at: q.created_at,
                was_restart: wasRestart
              };
            }),
            is_locked_out: (progress as any)?.is_locked_out || false,
            consecutive_fails: (progress as any)?.consecutive_fails || 0,
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
      logger.error('Error fetching user progress:', error);
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
      return <Badge className="bg-warning hover:bg-warning/90 text-xs"><TrendingUp className="h-3 w-3 mr-1" />{t.onTrack}</Badge>;
    }
    return <Badge className="bg-success hover:bg-success/90 text-xs"><Check className="h-3 w-3 mr-1" />{t.exceeds}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-success text-success-foreground text-xs">{t.completed}</Badge>;
      case 'in_progress':
        return <Badge className="bg-info text-info-foreground text-xs">{t.inProgress}</Badge>;
      case 'unlocked':
        return <Badge variant="outline" className="text-xs">{t.unlocked}</Badge>;
      case 'locked_out':
        return <Badge variant="destructive" className="text-xs animate-pulse">{t.lockedOut}</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">{t.locked}</Badge>;
    }
  };

  const getDifficultyBadge = (level: number) => {
    const colors: Record<number, string> = {
      1: 'bg-success/20 text-success border-success/30',
      2: 'bg-warning/20 text-warning border-warning/30',
      3: 'bg-warning/30 text-warning border-warning/40',
      4: 'bg-destructive/20 text-destructive border-destructive/30',
      5: 'bg-primary/20 text-primary border-primary/30',
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
    <Card className="border-2 border-success/30 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-success/10 to-success/5 dark:from-success/20 dark:to-success/10 border-b border-success/20">
        <CardTitle className="flex items-center gap-2 text-success">
          <GraduationCap className="h-6 w-6 text-success" />
          {t.title}
        </CardTitle>
        <CardDescription className="text-success/80">{t.subtitle}</CardDescription>
        
        {/* Time recommendation info */}
        <div className="mt-2 p-3 bg-background/50 rounded-lg border border-success/20">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-success" />
              <span className="text-success font-medium">{t.recommendedTime}:</span>
              <span className="text-success font-bold">{Math.round(TOTAL_RECOMMENDED_SECONDS / 3600)} {t.hours}</span>
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
                          <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                            <UserIcon className="h-5 w-5 text-success" />
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
                          <span className={up.avg_quiz_score >= 9 ? 'text-success font-semibold' : up.avg_quiz_score >= 7 ? 'text-warning' : 'text-foreground'}>
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
                                <Badge className="bg-success text-success-foreground">
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
                            <Award className="h-5 w-5 text-warning" />
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
                      {/* Summary stats - 2 rows */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2 p-3 bg-card rounded-lg">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-success">{formatTime(up.total_training_seconds)}</p>
                          <p className="text-xs text-muted-foreground">{t.totalAppTime}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-info">{formatTime(up.recommended_time_seconds)}</p>
                          <p className="text-xs text-muted-foreground">{t.recommendedTime}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-warning">{up.total_quiz_attempts}</p>
                          <p className="text-xs text-muted-foreground">{t.totalQuizAttempts}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">{up.passed_quizzes}</p>
                          <p className="text-xs text-muted-foreground">{t.passedQuizzes}</p>
                        </div>
                      </div>
                      
                      {/* Quiz-specific summary stats */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 p-3 bg-card rounded-lg border-l-4 border-l-warning">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-warning">
                            {up.chapter_details.reduce((sum, cd) => sum + cd.restart_count, 0)}
                          </p>
                          <p className="text-xs text-muted-foreground">{t.totalRestarts}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">
                            {up.chapter_details.reduce((sum, cd) => sum + cd.user_restart_count, 0)}
                          </p>
                          <p className="text-xs text-muted-foreground">↑ Dificultate</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-destructive">
                            {up.chapter_details.reduce((sum, cd) => sum + cd.failed_count, 0)}
                          </p>
                          <p className="text-xs text-muted-foreground">{t.totalFailed}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-success">
                            {up.chapter_details.reduce((sum, cd) => sum + cd.passed_count, 0)}
                          </p>
                          <p className="text-xs text-muted-foreground">{t.totalPassed}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-info">
                            {up.chapter_details.filter(cd => cd.reset_count > 0).length}
                          </p>
                          <p className="text-xs text-muted-foreground">{t.resets}</p>
                        </div>
                      </div>

                      {/* Reset All Training Button */}
                      <div className="mb-4 flex justify-end">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              disabled={resettingUser === up.user_id}
                              className="gap-2"
                            >
                              {resettingUser === up.user_id ? (
                                <>
                                  <RotateCcw className="h-4 w-4 animate-spin" />
                                  {t.resetting}
                                </>
                              ) : (
                                <>
                                  <RotateCcw className="h-4 w-4" />
                                  {t.resetAllTraining}
                                </>
                              )}
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="flex items-center gap-2 text-destructive">
                                <AlertTriangle className="h-5 w-5" />
                                {t.resetAllConfirmTitle}
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-left">
                                <span className="font-semibold text-foreground block mb-2">
                                  {up.first_name} {up.last_name} ({up.email})
                                </span>
                                {t.resetAllConfirmDescription}
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>{t.resetAllCancel}</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleResetAllTraining(up.user_id, `${up.first_name} ${up.last_name}`)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                {t.resetAllConfirm}
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>

                      {/* Chapter details table */}
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-bold text-foreground">{t.chapter}</TableHead>
                              <TableHead className="font-bold text-foreground text-center">{t.visits}</TableHead>
                              <TableHead className="font-bold text-foreground">{t.timeSpent}</TableHead>
                              <TableHead className="font-bold text-foreground text-center">{t.quizAttempts}</TableHead>
                              <TableHead className="font-bold text-foreground text-center">{t.restarts}</TableHead>
                              <TableHead className="font-bold text-foreground text-center" title="Restarts cu creștere dificultate">↑D</TableHead>
                              <TableHead className="font-bold text-foreground text-center">{t.failedAttempts}</TableHead>
                              <TableHead className="font-bold text-foreground text-center">{t.passedAttempts}</TableHead>
                              <TableHead className="font-bold text-foreground">{t.quizResult}</TableHead>
                              <TableHead className="font-bold text-foreground text-center">{t.resets}</TableHead>
                              <TableHead className="font-bold text-foreground">{t.difficulty}</TableHead>
                              <TableHead className="font-bold text-foreground text-center">Acțiune</TableHead>
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
                                {/* Quiz Attempts */}
                                <TableCell className="text-center">
                                  <span className={cd.attempts_count > 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'}>
                                    {cd.attempts_count || '-'}
                                  </span>
                                </TableCell>
                                {/* Restarts (calculated) */}
                                <TableCell className="text-center">
                                  {cd.restart_count > 0 ? (
                                    <Badge variant="outline" className="text-xs bg-warning/10 text-warning border-warning/30">
                                      {cd.restart_count}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                {/* User Restarts (with difficulty increase) */}
                                <TableCell className="text-center">
                                  {cd.user_restart_count > 0 ? (
                                    <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                                      <TrendingUp className="h-3 w-3 mr-1" />
                                      {cd.user_restart_count}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                {/* Failed */}
                                <TableCell className="text-center">
                                  {cd.failed_count > 0 ? (
                                    <Badge variant="destructive" className="text-xs">
                                      <X className="h-3 w-3 mr-1" />
                                      {cd.failed_count}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                {/* Passed */}
                                <TableCell className="text-center">
                                  {cd.passed_count > 0 ? (
                                    <Badge className="text-xs bg-success text-success-foreground">
                                      <Check className="h-3 w-3 mr-1" />
                                      {cd.passed_count}
                                      {cd.first_pass_score !== null && (
                                        <span className="ml-1">({cd.first_pass_score}/10)</span>
                                      )}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                {/* Best Score - capped at 10 */}
                                <TableCell>
                                  {cd.best_score > 0 ? (
                                    <span className={Math.min(cd.best_score, 10) >= 9 ? 'text-success font-semibold' : Math.min(cd.best_score, 10) >= 7 ? 'text-warning' : 'text-destructive'}>
                                      {Math.min(cd.best_score, 10)}/10
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground text-xs">{t.noQuizYet}</span>
                                  )}
                                </TableCell>
                                {/* Admin Resets */}
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
                                {/* Difficulty */}
                                <TableCell>
                                  {getDifficultyBadge(cd.difficulty_level)}
                                </TableCell>
                                {/* Action - Unlock button for locked_out chapters */}
                                <TableCell className="text-center">
                                  {cd.is_locked_out ? (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-7 px-2 text-xs border-success text-success hover:bg-success/10 hover:text-success"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleUnlockChapter(up.user_id, cd.chapter_id);
                                      }}
                                      disabled={unlockingChapter === `${up.user_id}-${cd.chapter_id}`}
                                    >
                                      {unlockingChapter === `${up.user_id}-${cd.chapter_id}` ? (
                                        <span className="animate-spin">⏳</span>
                                      ) : (
                                        <>
                                          <Unlock className="h-3 w-3 mr-1" />
                                          {t.unlock}
                                        </>
                                      )}
                                    </Button>
                                  ) : cd.consecutive_fails > 0 && cd.consecutive_fails < 3 ? (
                                    <span className="text-xs text-warning">
                                      {cd.consecutive_fails}/3 eșecuri
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                              </TableRow>
                          ))}
                          {/* Totals Row */}
                          {(() => {
                            const totals = up.chapter_details.reduce((acc, cd) => ({
                              visits: acc.visits + (cd.visit_count || 0),
                              time: acc.time + (cd.total_time_seconds || 0),
                              attempts: acc.attempts + (cd.attempts_count || 0),
                              restarts: acc.restarts + (cd.restart_count || 0),
                              userRestarts: acc.userRestarts + (cd.user_restart_count || 0),
                              failed: acc.failed + (cd.failed_count || 0),
                              passed: acc.passed + (cd.passed_count || 0),
                              totalScore: acc.totalScore + (cd.best_score > 0 ? Math.min(cd.best_score, 10) : 0),
                              scoredChapters: acc.scoredChapters + (cd.best_score > 0 ? 1 : 0),
                              adminResets: acc.adminResets + (cd.reset_count || 0),
                              totalDifficulty: acc.totalDifficulty + (cd.difficulty_level || 1),
                            }), { visits: 0, time: 0, attempts: 0, restarts: 0, userRestarts: 0, failed: 0, passed: 0, totalScore: 0, scoredChapters: 0, adminResets: 0, totalDifficulty: 0 });
                            
                            const avgScore = totals.scoredChapters > 0 ? (totals.totalScore / totals.scoredChapters).toFixed(1) : '-';
                            const avgDifficulty = up.chapter_details.length > 0 ? (totals.totalDifficulty / up.chapter_details.length).toFixed(1) : '-';
                            
                            return (
                              <TableRow className="bg-muted/50 font-semibold border-t-2 border-primary/20">
                                <TableCell className="font-bold text-primary">
                                  TOTAL
                                </TableCell>
                                <TableCell>
                                  <span className="text-primary font-bold">{totals.visits}</span>
                                </TableCell>
                                <TableCell>
                                  <span className="text-primary font-bold">{formatTime(totals.time)}</span>
                                </TableCell>
                                <TableCell className="text-center">
                                  <span className="text-primary font-bold">{totals.attempts}</span>
                                </TableCell>
                                <TableCell className="text-center">
                                  {totals.restarts > 0 ? (
                                    <Badge variant="outline" className="text-xs bg-warning/20 text-warning border-warning/40 font-bold">
                                      {totals.restarts}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                <TableCell className="text-center">
                                  {totals.userRestarts > 0 ? (
                                    <Badge variant="secondary" className="text-xs bg-primary/30 text-primary border-primary/50 font-bold">
                                      <TrendingUp className="h-3 w-3 mr-1" />
                                      {totals.userRestarts}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                <TableCell className="text-center">
                                  {totals.failed > 0 ? (
                                    <Badge variant="destructive" className="text-xs font-bold">
                                      <X className="h-3 w-3 mr-1" />
                                      {totals.failed}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                <TableCell className="text-center">
                                  {totals.passed > 0 ? (
                                    <Badge className="text-xs bg-success text-success-foreground font-bold">
                                      <Check className="h-3 w-3 mr-1" />
                                      {totals.passed}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                <TableCell>
                                  <span className="text-primary font-bold">
                                    Ø {avgScore}/10
                                  </span>
                                </TableCell>
                                <TableCell className="text-center">
                                  {totals.adminResets > 0 ? (
                                    <Badge variant="destructive" className="text-xs font-bold">
                                      <RotateCcw className="h-3 w-3 mr-1" />
                                      {totals.adminResets}
                                    </Badge>
                                  ) : (
                                    <span className="text-muted-foreground">-</span>
                                  )}
                                </TableCell>
                                <TableCell>
                                  <span className="text-primary font-bold">Ø {avgDifficulty}</span>
                                </TableCell>
                                <TableCell className="text-center">
                                  <span className="text-muted-foreground">-</span>
                                </TableCell>
                              </TableRow>
                            );
                          })()}
                          </TableBody>
                        </Table>
                      </div>

                      {/* Certificate info */}
                      {up.certificate && (
                        <div className="mt-4 p-3 bg-warning/10 dark:bg-warning/20 rounded-lg border border-warning/30">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-warning" />
                            <span className="font-medium text-warning">{t.certificate}: {up.certificate.certificate_code}</span>
                          </div>
                          <div className="mt-1 text-sm text-warning/80 flex gap-4">
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
