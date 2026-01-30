import React, { useState, useEffect } from 'react';
import { logger } from '@/utils/logger';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  GraduationCap, Search, RefreshCw, Trophy, XCircle, Clock, 
  Target, Eye, Download, Calendar, User, CheckCircle2 
} from 'lucide-react';
import { format } from 'date-fns';

interface FinalExamAttempt {
  id: string;
  user_id: string;
  score: number;
  total_questions: number;
  percentage: number;
  passed: boolean;
  time_spent_seconds: number | null;
  wrong_answers: unknown;
  started_at: string;
  completed_at: string;
  created_at: string;
  profile?: {
    first_name: string | null;
    last_name: string | null;
    email: string | null;
  };
}

export function FinalExamResults() {
  const { t, language } = useLanguage();
  const [attempts, setAttempts] = useState<FinalExamAttempt[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAttempt, setSelectedAttempt] = useState<FinalExamAttempt | null>(null);

  const labels = {
    title: language === 'ro' ? 'Rezultate Examen Final' : language === 'de' ? 'Abschlussprüfung Ergebnisse' : 'Final Exam Results',
    subtitle: language === 'ro' ? 'Vizualizează toate încercările de examen final' : language === 'de' ? 'Alle Abschlussprüfungsversuche anzeigen' : 'View all final exam attempts',
    search: language === 'ro' ? 'Caută după nume sau email...' : language === 'de' ? 'Nach Name oder E-Mail suchen...' : 'Search by name or email...',
    refresh: language === 'ro' ? 'Actualizează' : language === 'de' ? 'Aktualisieren' : 'Refresh',
    noAttempts: language === 'ro' ? 'Nu există încercări de examen' : language === 'de' ? 'Keine Prüfungsversuche' : 'No exam attempts',
    trainee: language === 'ro' ? 'Cursant' : language === 'de' ? 'Auszubildender' : 'Trainee',
    score: language === 'ro' ? 'Scor' : language === 'de' ? 'Punktzahl' : 'Score',
    status: language === 'ro' ? 'Status' : language === 'de' ? 'Status' : 'Status',
    duration: language === 'ro' ? 'Durată' : language === 'de' ? 'Dauer' : 'Duration',
    date: language === 'ro' ? 'Data' : language === 'de' ? 'Datum' : 'Date',
    actions: language === 'ro' ? 'Acțiuni' : language === 'de' ? 'Aktionen' : 'Actions',
    passed: language === 'ro' ? 'Promovat' : language === 'de' ? 'Bestanden' : 'Passed',
    failed: language === 'ro' ? 'Nepromovat' : language === 'de' ? 'Nicht bestanden' : 'Failed',
    details: language === 'ro' ? 'Detalii' : language === 'de' ? 'Details' : 'Details',
    wrongAnswers: language === 'ro' ? 'Răspunsuri Greșite' : language === 'de' ? 'Falsche Antworten' : 'Wrong Answers',
    question: language === 'ro' ? 'Întrebare' : language === 'de' ? 'Frage' : 'Question',
    userAnswer: language === 'ro' ? 'Răspuns Utilizator' : language === 'de' ? 'Benutzerantwort' : 'User Answer',
    correctAnswer: language === 'ro' ? 'Răspuns Corect' : language === 'de' ? 'Richtige Antwort' : 'Correct Answer',
    chapter: language === 'ro' ? 'Capitol' : language === 'de' ? 'Kapitel' : 'Chapter',
    totalAttempts: language === 'ro' ? 'Total Încercări' : language === 'de' ? 'Gesamtversuche' : 'Total Attempts',
    passRate: language === 'ro' ? 'Rată Promovare' : language === 'de' ? 'Erfolgsquote' : 'Pass Rate',
    avgScore: language === 'ro' ? 'Scor Mediu' : language === 'de' ? 'Durchschnittspunktzahl' : 'Average Score',
    avgDuration: language === 'ro' ? 'Durată Medie' : language === 'de' ? 'Durchschnittliche Dauer' : 'Average Duration',
  };

  const fetchAttempts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('final_exam_attempts')
        .select('*')
        .order('completed_at', { ascending: false });

      if (error) throw error;

      // Fetch profiles for each attempt
      if (data && data.length > 0) {
        const userIds = [...new Set(data.map(a => a.user_id))];
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id, first_name, last_name, email')
          .in('id', userIds);

        const profileMap = new Map(profiles?.map(p => [p.id, p]) || []);
        
        const attemptsWithProfiles = data.map(attempt => ({
          ...attempt,
          profile: profileMap.get(attempt.user_id) || null
        }));
        
        setAttempts(attemptsWithProfiles);
      } else {
        setAttempts([]);
      }
    } catch (error) {
      logger.error('Error fetching attempts:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAttempts();
  }, []);

  const formatDuration = (seconds: number | null): string => {
    if (!seconds) return '-';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}h ${mins}m ${secs}s`;
    }
    return `${mins}m ${secs}s`;
  };

  const filteredAttempts = attempts.filter(attempt => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    const name = `${attempt.profile?.first_name || ''} ${attempt.profile?.last_name || ''}`.toLowerCase();
    const email = (attempt.profile?.email || '').toLowerCase();
    return name.includes(search) || email.includes(search);
  });

  // Stats
  const stats = {
    total: attempts.length,
    passed: attempts.filter(a => a.passed).length,
    passRate: attempts.length > 0 ? Math.round((attempts.filter(a => a.passed).length / attempts.length) * 100) : 0,
    avgScore: attempts.length > 0 ? Math.round(attempts.reduce((sum, a) => sum + a.percentage, 0) / attempts.length) : 0,
    avgDuration: attempts.length > 0 
      ? Math.round(attempts.filter(a => a.time_spent_seconds).reduce((sum, a) => sum + (a.time_spent_seconds || 0), 0) / attempts.filter(a => a.time_spent_seconds).length)
      : 0
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Score', 'Percentage', 'Status', 'Duration', 'Date'];
    const rows = filteredAttempts.map(a => [
      `${a.profile?.first_name || ''} ${a.profile?.last_name || ''}`,
      a.profile?.email || '',
      `${a.score}/${a.total_questions}`,
      `${a.percentage}%`,
      a.passed ? 'Passed' : 'Failed',
      formatDuration(a.time_spent_seconds),
      format(new Date(a.completed_at), 'dd.MM.yyyy HH:mm')
    ]);
    
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `final-exam-results-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            {labels.title}
          </h2>
          <p className="text-muted-foreground">{labels.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportToCSV} disabled={filteredAttempts.length === 0}>
            <Download className="h-4 w-4 mr-2" />
            CSV
          </Button>
          <Button onClick={fetchAttempts} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            {labels.refresh}
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">{labels.totalAttempts}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card className={stats.passRate >= 80 ? 'bg-success/5 dark:bg-success/10' : 'bg-warning/5 dark:bg-warning/10'}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">{labels.passRate}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-3xl font-bold ${stats.passRate >= 80 ? 'text-success' : 'text-warning'}`}>
              {stats.passRate}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">{labels.avgScore}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.avgScore}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">{labels.avgDuration}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{formatDuration(stats.avgDuration)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={labels.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{labels.trainee}</TableHead>
                <TableHead className="text-center">{labels.score}</TableHead>
                <TableHead className="text-center">{labels.status}</TableHead>
                <TableHead className="text-center">{labels.duration}</TableHead>
                <TableHead className="text-center">{labels.date}</TableHead>
                <TableHead className="text-center">{labels.actions}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <RefreshCw className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                  </TableCell>
                </TableRow>
              ) : filteredAttempts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    {labels.noAttempts}
                  </TableCell>
                </TableRow>
              ) : (
                filteredAttempts.map((attempt) => (
                  <TableRow key={attempt.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {attempt.profile?.first_name} {attempt.profile?.last_name}
                        </p>
                        <p className="text-sm text-muted-foreground">{attempt.profile?.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-mono font-semibold">
                        {attempt.score}/{attempt.total_questions}
                      </span>
                      <span className="text-muted-foreground ml-1">({attempt.percentage}%)</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge 
                        variant={attempt.passed ? 'default' : 'destructive'} 
                        className={`gap-1 ${attempt.passed ? 'bg-info text-info-foreground hover:bg-info/90' : ''}`}
                      >
                        {attempt.passed ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                        {attempt.passed ? labels.passed : labels.failed}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center font-mono text-sm">
                      {formatDuration(attempt.time_spent_seconds)}
                    </TableCell>
                    <TableCell className="text-center text-sm">
                      {format(new Date(attempt.completed_at), 'dd.MM.yyyy HH:mm')}
                    </TableCell>
                    <TableCell className="text-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setSelectedAttempt(attempt)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh]">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <User className="h-5 w-5" />
                              {attempt.profile?.first_name} {attempt.profile?.last_name} - {labels.details}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            {/* Summary */}
                            <div className="grid grid-cols-3 gap-4">
                              <div className="text-center p-4 bg-muted rounded-lg">
                                <Target className="h-5 w-5 mx-auto mb-1 text-primary" />
                                <p className="text-2xl font-bold">{attempt.percentage}%</p>
                                <p className="text-xs text-muted-foreground">{labels.score}</p>
                              </div>
                              <div className="text-center p-4 bg-muted rounded-lg">
                                <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
                                <p className="text-2xl font-bold">{formatDuration(attempt.time_spent_seconds)}</p>
                                <p className="text-xs text-muted-foreground">{labels.duration}</p>
                              </div>
                              <div className="text-center p-4 bg-muted rounded-lg">
                                <Calendar className="h-5 w-5 mx-auto mb-1 text-primary" />
                                <p className="text-lg font-bold">{format(new Date(attempt.completed_at), 'dd.MM.yyyy')}</p>
                                <p className="text-xs text-muted-foreground">{format(new Date(attempt.completed_at), 'HH:mm')}</p>
                              </div>
                            </div>

                            {/* Wrong Answers */}
                            {Array.isArray(attempt.wrong_answers) && attempt.wrong_answers.length > 0 && (
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                  <XCircle className="h-4 w-4 text-destructive" />
                                  {labels.wrongAnswers} ({attempt.wrong_answers.length})
                                </h4>
                                <ScrollArea className="h-[300px] border rounded-lg">
                                  <div className="p-4 space-y-4">
                                    {(attempt.wrong_answers as any[]).map((wrong: any, idx: number) => (
                                      <div key={idx} className="p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                                        <div className="flex justify-between items-start mb-2">
                                          <Badge variant="outline" className="text-xs">
                                            #{wrong.questionIndex || idx + 1}
                                          </Badge>
                                          <Badge variant="secondary" className="text-xs">
                                            {wrong.chapterName}
                                          </Badge>
                                        </div>
                                        <p className="font-medium text-sm mb-2">{wrong.question}</p>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                          <div className="p-2 bg-destructive/10 rounded">
                                            <p className="text-xs text-muted-foreground mb-1">{labels.userAnswer}:</p>
                                            <p className="text-destructive">{wrong.userAnswer}</p>
                                          </div>
                                          <div className="p-2 bg-success/10 rounded">
                                            <p className="text-xs text-muted-foreground mb-1">{labels.correctAnswer}:</p>
                                            <p className="text-success">{wrong.correctAnswer}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </ScrollArea>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
