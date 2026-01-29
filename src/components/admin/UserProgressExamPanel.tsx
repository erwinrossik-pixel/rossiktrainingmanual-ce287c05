import { useState, useEffect, memo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { format } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';
import { GraduationCap, User as UserIcon, BookOpen, Check, X, RotateCcw, Timer, Target, Trophy, Award, Search } from 'lucide-react';

interface ExamAttempt {
  id: string;
  score: number;
  total_questions: number;
  percentage: number;
  passed: boolean;
  time_spent_seconds: number;
  completed_at: string;
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
  exam_attempts: ExamAttempt[];
  best_exam?: ExamAttempt | null;
  certificate?: {
    certificate_code: string;
    issued_at: string;
    expires_at: string;
    total_training_hours: number | null;
  } | null;
}

export const UserProgressExamPanel = memo(function UserProgressExamPanel() {
  const { company, isSuperAdmin, isCompanyAdmin } = useCompany();
  const { language } = useLanguage();
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const dateLocale = language === 'de' ? de : language === 'en' ? enUS : ro;

  const translations = {
    ro: {
      title: 'Progres Utilizatori & Examen Final',
      subtitle: 'Vizualizați progresul fiecărui utilizator, rezultatele quiz-urilor și ale examenului final',
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
    },
    de: {
      title: 'Benutzerfortschritt & Abschlussprüfung',
      subtitle: 'Sehen Sie den Fortschritt jedes Benutzers, Quiz- und Prüfungsergebnisse',
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
    },
    en: {
      title: 'User Progress & Final Exam',
      subtitle: 'View each user\'s progress, quiz and exam results',
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
    }
  };

  const t = translations[language] || translations.en;

  useEffect(() => {
    if (isCompanyAdmin || isSuperAdmin) {
      fetchUserProgress();
    }
  }, [company, isCompanyAdmin, isSuperAdmin]);

  const fetchUserProgress = async () => {
    setLoading(true);
    try {
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, email, first_name, last_name');

      const { data: chapterProgress } = await supabase
        .from('chapter_progress')
        .select('user_id, chapter_id, status, best_score, attempts_count');

      const { data: quizAttempts } = await supabase
        .from('quiz_attempts')
        .select('user_id, passed');

      const { data: trainingSessions } = await supabase
        .from('training_sessions')
        .select('user_id, duration_minutes');

      const { data: examAttempts } = await supabase
        .from('final_exam_attempts')
        .select('id, user_id, score, total_questions, percentage, passed, time_spent_seconds, completed_at')
        .order('completed_at', { ascending: false });

      const { data: certificates } = await supabase
        .from('certificates')
        .select('user_id, certificate_code, issued_at, expires_at, is_revoked, total_training_hours')
        .eq('is_revoked', false);

      const { data: companyUsers } = await supabase
        .from('company_users')
        .select('user_id, company_id, status');

      const TOTAL_CHAPTERS = 50;

      const progressData: UserProgress[] = (profiles || []).map(profile => {
        const userChapters = chapterProgress?.filter(cp => cp.user_id === profile.id) || [];
        const completedChapters = userChapters.filter(cp => cp.status === 'completed').length;
        const passedQuizzes = userChapters.filter(cp => cp.status === 'completed' && (cp.best_score || 0) >= 9).length;
        const avgScore = userChapters.length > 0 
          ? userChapters.reduce((sum, cp) => sum + (cp.best_score || 0), 0) / userChapters.length 
          : 0;

        const userQuizAttempts = quizAttempts?.filter(qa => qa.user_id === profile.id) || [];
        const totalQuizAttempts = userQuizAttempts.length;

        const userTrainingSessions = trainingSessions?.filter(ts => ts.user_id === profile.id) || [];
        const totalTrainingSeconds = userTrainingSessions.reduce((sum, ts) => sum + ((ts.duration_minutes || 0) * 60), 0);

        const userExams = (examAttempts?.filter(ea => ea.user_id === profile.id) || []).map(ea => ({
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

        const userCert = certificates?.find(c => c.user_id === profile.id);

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
          exam_attempts: userExams,
          best_exam: bestExam,
          certificate: userCert ? {
            certificate_code: userCert.certificate_code,
            issued_at: userCert.issued_at,
            expires_at: userCert.expires_at,
            total_training_hours: userCert.total_training_hours
          } : null
        };
      });

      if (!isSuperAdmin && company) {
        const companyUserIds = companyUsers
          ?.filter(cu => cu.company_id === company.id && cu.status === 'approved')
          .map(cu => cu.user_id) || [];
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

  const filteredProgress = userProgress.filter(up => {
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

  return (
    <Card className="border-2 border-green-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
        <CardTitle className="flex items-center gap-2 text-green-800">
          <GraduationCap className="h-6 w-6 text-green-600" />
          {t.title}
        </CardTitle>
        <CardDescription className="text-green-700">{t.subtitle}</CardDescription>
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
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-green-50/50">
                  <TableHead className="font-bold text-green-800">{t.user}</TableHead>
                  <TableHead className="font-bold text-green-800">{t.chapterProgress}</TableHead>
                  <TableHead className="font-bold text-green-800">{t.avgQuizScore}</TableHead>
                  <TableHead className="font-bold text-green-800">{t.finalExam}</TableHead>
                  <TableHead className="font-bold text-green-800">{t.certificate}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProgress.map((up) => (
                  <TableRow key={up.user_id} className="hover:bg-green-50/30">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <UserIcon className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {up.first_name} {up.last_name}
                          </p>
                          <p className="text-xs text-muted-foreground">{up.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1 min-w-[160px]">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-1 text-foreground">
                            <BookOpen className="h-3 w-3 text-muted-foreground" />
                            {up.chapters_completed}/{up.total_chapters}
                          </span>
                          <span className="font-medium text-foreground">{up.progress_percentage}%</span>
                        </div>
                        <Progress value={up.progress_percentage} className="h-2" />
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1" title={t.passedQuizzes}>
                            <Check className="h-3 w-3 text-green-500" />
                            {up.passed_quizzes}/{up.total_chapters}
                          </span>
                          <span className="flex items-center gap-1" title={t.totalQuizAttempts}>
                            <RotateCcw className="h-3 w-3" />
                            {up.total_quiz_attempts}
                          </span>
                        </div>
                        {up.total_training_seconds > 0 && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Timer className="h-3 w-3" />
                            {Math.floor(up.total_training_seconds / 3600)}h {Math.floor((up.total_training_seconds % 3600) / 60)}m
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className={up.avg_quiz_score >= 9 ? 'text-green-600 font-semibold' : up.avg_quiz_score >= 7 ? 'text-amber-600 font-medium' : 'text-foreground'}>
                          {up.avg_quiz_score > 0 ? `${up.avg_quiz_score}/10` : '-'}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {up.exam_attempts.length > 0 ? (
                        <div className="space-y-2 min-w-[200px]">
                          {up.best_exam && (
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                {up.best_exam.passed ? (
                                  <Badge className="bg-green-500 hover:bg-green-600">
                                    <Trophy className="h-3 w-3 mr-1" />
                                    {t.passed}
                                  </Badge>
                                ) : (
                                  <Badge variant="destructive">
                                    <X className="h-3 w-3 mr-1" />
                                    {t.failed}
                                  </Badge>
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {up.exam_attempts.length} {t.attempts}
                                </Badge>
                              </div>
                              <div className="text-xs text-muted-foreground space-y-0.5">
                                <p className="font-medium text-foreground">
                                  {up.best_exam.score}/{up.best_exam.total_questions} ({up.best_exam.percentage}%)
                                </p>
                                <p className="flex items-center gap-1">
                                  <Timer className="h-3 w-3" />
                                  {Math.floor(up.best_exam.time_spent_seconds / 60)}:{(up.best_exam.time_spent_seconds % 60).toString().padStart(2, '0')} min
                                </p>
                                <p>{format(new Date(up.best_exam.completed_at), 'dd MMM yyyy HH:mm', { locale: dateLocale })}</p>
                              </div>
                            </div>
                          )}
                          
                          {up.exam_attempts.length > 1 && (
                            <details className="text-xs">
                              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                                {t.viewAllAttempts}
                              </summary>
                              <div className="mt-2 space-y-1 pl-2 border-l-2 border-muted">
                                {up.exam_attempts.map((attempt) => (
                                  <div key={attempt.id} className="flex items-center justify-between gap-2 py-1">
                                    <span className="flex items-center gap-1 text-foreground">
                                      {attempt.passed ? (
                                        <Check className="h-3 w-3 text-green-500" />
                                      ) : (
                                        <X className="h-3 w-3 text-red-500" />
                                      )}
                                      {attempt.score}/{attempt.total_questions} ({attempt.percentage}%)
                                    </span>
                                    <span className="text-muted-foreground">
                                      {format(new Date(attempt.completed_at), 'dd/MM/yy', { locale: dateLocale })}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </details>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">
                          {up.progress_percentage >= 100 ? (
                            <Badge variant="outline" className="text-amber-600 border-amber-600">
                              {t.eligible}
                            </Badge>
                          ) : (
                            '-'
                          )}
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {up.certificate ? (
                        <div className="space-y-1">
                          <Badge className="bg-purple-500 hover:bg-purple-600">
                            <Award className="h-3 w-3 mr-1" />
                            {up.certificate.certificate_code}
                          </Badge>
                          <div className="text-xs text-muted-foreground space-y-0.5">
                            <p>
                              {t.issued} {format(new Date(up.certificate.issued_at), 'dd MMM yyyy', { locale: dateLocale })}
                            </p>
                            <p>
                              {t.expires} {format(new Date(up.certificate.expires_at), 'dd MMM yyyy', { locale: dateLocale })}
                            </p>
                            {up.certificate.total_training_hours !== null && up.certificate.total_training_hours > 0 && (
                              <p className="flex items-center gap-1">
                                <Timer className="h-3 w-3" />
                                {up.certificate.total_training_hours.toFixed(1)}h {t.training}
                              </p>
                            )}
                          </div>
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">-</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
});
