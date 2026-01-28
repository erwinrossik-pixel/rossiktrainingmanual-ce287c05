import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAdminQuizReset } from '@/hooks/useQuizDifficulty';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { RotateCcw, Search, AlertTriangle, History, TrendingUp, User, BookOpen } from 'lucide-react';
import { format } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';

interface UserWithResets {
  user_id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  chapters: Array<{
    chapter_id: string;
    reset_count: number;
    difficulty_level: number;
    best_score: number | null;
    status: string;
  }>;
  total_resets: number;
}

interface ResetHistoryItem {
  id: string;
  user_id: string;
  chapter_id: string;
  reset_by: string;
  reset_at: string;
  previous_score: number | null;
  previous_attempts: number | null;
  difficulty_before: number;
  difficulty_after: number;
  reset_reason: string | null;
}

const translations = {
  ro: {
    title: 'Gestionare Resetări Quiz',
    subtitle: 'Monitorizează și resetează quiz-urile utilizatorilor cu dificultate progresivă',
    searchPlaceholder: 'Caută după email sau nume...',
    user: 'Utilizator',
    chapter: 'Capitol',
    resets: 'Resetări',
    difficulty: 'Dificultate',
    score: 'Scor',
    status: 'Status',
    actions: 'Acțiuni',
    resetQuiz: 'Resetează Quiz',
    resetConfirmTitle: 'Confirmare Resetare Quiz',
    resetConfirmDesc: 'Ești sigur că vrei să resetezi quiz-ul pentru acest capitol? Dificultatea va crește automat.',
    resetReason: 'Motiv resetare (opțional)',
    cancel: 'Anulează',
    confirm: 'Confirmă Resetare',
    success: 'Quiz resetat cu succes',
    newDifficulty: 'Noua dificultate:',
    error: 'Eroare la resetare',
    noResults: 'Nu s-au găsit utilizatori cu resetări',
    history: 'Istoric Resetări',
    viewHistory: 'Vezi Istoric',
    totalResets: 'Total Resetări',
    difficultyLevels: {
      1: 'Normal',
      2: 'Greu',
      3: 'Foarte Greu',
      4: 'Expert',
      5: 'Maxim'
    },
    usersWithResets: 'Utilizatori cu Quiz-uri Resetate',
    allUsers: 'Toți Utilizatorii',
    filterByResets: 'Filtrează după resetări'
  },
  de: {
    title: 'Quiz-Reset-Verwaltung',
    subtitle: 'Überwachen und Zurücksetzen von Benutzer-Quizzen mit progressiver Schwierigkeit',
    searchPlaceholder: 'Suche nach E-Mail oder Name...',
    user: 'Benutzer',
    chapter: 'Kapitel',
    resets: 'Resets',
    difficulty: 'Schwierigkeit',
    score: 'Punktzahl',
    status: 'Status',
    actions: 'Aktionen',
    resetQuiz: 'Quiz Zurücksetzen',
    resetConfirmTitle: 'Quiz-Reset Bestätigen',
    resetConfirmDesc: 'Sind Sie sicher, dass Sie das Quiz für dieses Kapitel zurücksetzen möchten? Die Schwierigkeit wird automatisch erhöht.',
    resetReason: 'Reset-Grund (optional)',
    cancel: 'Abbrechen',
    confirm: 'Reset Bestätigen',
    success: 'Quiz erfolgreich zurückgesetzt',
    newDifficulty: 'Neue Schwierigkeit:',
    error: 'Fehler beim Zurücksetzen',
    noResults: 'Keine Benutzer mit Resets gefunden',
    history: 'Reset-Verlauf',
    viewHistory: 'Verlauf Anzeigen',
    totalResets: 'Gesamt Resets',
    difficultyLevels: {
      1: 'Normal',
      2: 'Schwer',
      3: 'Sehr Schwer',
      4: 'Experte',
      5: 'Maximum'
    },
    usersWithResets: 'Benutzer mit zurückgesetzten Quizzen',
    allUsers: 'Alle Benutzer',
    filterByResets: 'Nach Resets filtern'
  },
  en: {
    title: 'Quiz Reset Manager',
    subtitle: 'Monitor and reset user quizzes with progressive difficulty',
    searchPlaceholder: 'Search by email or name...',
    user: 'User',
    chapter: 'Chapter',
    resets: 'Resets',
    difficulty: 'Difficulty',
    score: 'Score',
    status: 'Status',
    actions: 'Actions',
    resetQuiz: 'Reset Quiz',
    resetConfirmTitle: 'Confirm Quiz Reset',
    resetConfirmDesc: 'Are you sure you want to reset the quiz for this chapter? Difficulty will automatically increase.',
    resetReason: 'Reset reason (optional)',
    cancel: 'Cancel',
    confirm: 'Confirm Reset',
    success: 'Quiz reset successfully',
    newDifficulty: 'New difficulty:',
    error: 'Error resetting quiz',
    noResults: 'No users with resets found',
    history: 'Reset History',
    viewHistory: 'View History',
    totalResets: 'Total Resets',
    difficultyLevels: {
      1: 'Normal',
      2: 'Hard',
      3: 'Very Hard',
      4: 'Expert',
      5: 'Maximum'
    },
    usersWithResets: 'Users with Reset Quizzes',
    allUsers: 'All Users',
    filterByResets: 'Filter by resets'
  }
};

export function QuizResetManager() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const dateLocale = language === 'de' ? de : language === 'ro' ? ro : enUS;
  
  const { resetQuiz, getResetHistory, getAllResetCounts } = useAdminQuizReset();
  
  const [users, setUsers] = useState<UserWithResets[]>([]);
  const [history, setHistory] = useState<ResetHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyWithResets, setShowOnlyWithResets] = useState(false);
  
  // Reset dialog state
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{ userId: string; chapterId: string; userName: string } | null>(null);
  const [resetReason, setResetReason] = useState('');
  const [resetting, setResetting] = useState(false);
  
  // History dialog state
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false);
  const [historyUserId, setHistoryUserId] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch all profiles
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, email, first_name, last_name');

      // Fetch all chapter progress with reset data
      const { data: progress } = await supabase
        .from('chapter_progress')
        .select('user_id, chapter_id, reset_count, difficulty_level, best_score, status');

      // Build user data with chapter reset info
      const usersMap = new Map<string, UserWithResets>();

      profiles?.forEach(profile => {
        const userProgress = progress?.filter(p => p.user_id === profile.id) || [];
        const chaptersWithResets = userProgress.map(p => ({
          chapter_id: p.chapter_id,
          reset_count: p.reset_count || 0,
          difficulty_level: p.difficulty_level || 1,
          best_score: p.best_score,
          status: p.status
        }));

        usersMap.set(profile.id, {
          user_id: profile.id,
          email: profile.email,
          first_name: profile.first_name,
          last_name: profile.last_name,
          chapters: chaptersWithResets,
          total_resets: chaptersWithResets.reduce((sum, c) => sum + c.reset_count, 0)
        });
      });

      setUsers(Array.from(usersMap.values()).sort((a, b) => b.total_resets - a.total_resets));

      // Fetch reset history
      const historyData = await getResetHistory();
      setHistory(historyData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenResetDialog = (userId: string, chapterId: string, userName: string) => {
    setSelectedUser({ userId, chapterId, userName });
    setResetReason('');
    setResetDialogOpen(true);
  };

  const handleConfirmReset = async () => {
    if (!selectedUser) return;

    setResetting(true);
    const result = await resetQuiz(
      selectedUser.userId,
      selectedUser.chapterId,
      resetReason || undefined
    );

    if (result.success) {
      toast.success(`${t.success} - ${t.newDifficulty} ${result.newDifficulty}`);
      setResetDialogOpen(false);
      loadData();
    } else {
      toast.error(`${t.error}: ${result.error}`);
    }
    setResetting(false);
  };

  const handleViewHistory = (userId: string) => {
    setHistoryUserId(userId);
    setHistoryDialogOpen(true);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = !searchTerm || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesResetFilter = !showOnlyWithResets || user.total_resets > 0;
    
    return matchesSearch && matchesResetFilter;
  });

  const userHistory = historyUserId 
    ? history.filter(h => h.user_id === historyUserId)
    : history;

  const getDifficultyBadge = (level: number) => {
    const colors: Record<number, string> = {
      1: 'bg-green-500/20 text-green-600',
      2: 'bg-yellow-500/20 text-yellow-600',
      3: 'bg-orange-500/20 text-orange-600',
      4: 'bg-red-500/20 text-red-600',
      5: 'bg-purple-500/20 text-purple-600'
    };
    return (
      <Badge className={colors[level] || colors[1]}>
        {t.difficultyLevels[level as keyof typeof t.difficultyLevels] || level}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RotateCcw className="h-5 w-5 text-primary" />
            {t.title}
          </CardTitle>
          <CardDescription>{t.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select 
              value={showOnlyWithResets ? 'with-resets' : 'all'}
              onValueChange={(value) => setShowOnlyWithResets(value === 'with-resets')}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.allUsers}</SelectItem>
                <SelectItem value="with-resets">{t.usersWithResets}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Users Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t.user}</TableHead>
                  <TableHead className="text-center">{t.totalResets}</TableHead>
                  <TableHead>{t.chapter}</TableHead>
                  <TableHead className="text-center">{t.resets}</TableHead>
                  <TableHead className="text-center">{t.difficulty}</TableHead>
                  <TableHead className="text-center">{t.score}</TableHead>
                  <TableHead>{t.actions}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      <div className="animate-pulse text-muted-foreground">Loading...</div>
                    </TableCell>
                  </TableRow>
                ) : filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      {t.noResults}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map(user => (
                    user.chapters.length > 0 ? (
                      user.chapters
                        .filter(ch => showOnlyWithResets ? ch.reset_count > 0 : true)
                        .slice(0, showOnlyWithResets ? undefined : 3)
                        .map((chapter, idx) => (
                          <TableRow key={`${user.user_id}-${chapter.chapter_id}`}>
                            {idx === 0 && (
                              <>
                                <TableCell rowSpan={showOnlyWithResets ? user.chapters.filter(c => c.reset_count > 0).length || 1 : Math.min(user.chapters.length, 3)}>
                                  <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                      <p className="font-medium">{user.first_name} {user.last_name}</p>
                                      <p className="text-xs text-muted-foreground">{user.email}</p>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell rowSpan={showOnlyWithResets ? user.chapters.filter(c => c.reset_count > 0).length || 1 : Math.min(user.chapters.length, 3)} className="text-center">
                                  <Badge variant={user.total_resets > 0 ? "destructive" : "secondary"}>
                                    {user.total_resets}
                                  </Badge>
                                  {user.total_resets > 0 && (
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="ml-2"
                                      onClick={() => handleViewHistory(user.user_id)}
                                    >
                                      <History className="h-4 w-4" />
                                    </Button>
                                  )}
                                </TableCell>
                              </>
                            )}
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                {chapter.chapter_id}
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge variant={chapter.reset_count > 0 ? "outline" : "secondary"}>
                                {chapter.reset_count}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center">
                              {getDifficultyBadge(chapter.difficulty_level)}
                            </TableCell>
                            <TableCell className="text-center">
                              {chapter.best_score !== null ? (
                                <span className={chapter.best_score >= 9 ? 'text-green-600' : 'text-orange-600'}>
                                  {chapter.best_score}/10
                                </span>
                              ) : '-'}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleOpenResetDialog(
                                  user.user_id, 
                                  chapter.chapter_id,
                                  `${user.first_name} ${user.last_name}`
                                )}
                              >
                                <RotateCcw className="h-4 w-4 mr-1" />
                                {t.resetQuiz}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                    ) : (
                      <TableRow key={user.user_id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{user.first_name} {user.last_name}</p>
                              <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="secondary">0</Badge>
                        </TableCell>
                        <TableCell colSpan={5} className="text-muted-foreground text-sm">
                          No quiz progress yet
                        </TableCell>
                      </TableRow>
                    )
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Reset Confirmation Dialog */}
      <Dialog open={resetDialogOpen} onOpenChange={setResetDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              {t.resetConfirmTitle}
            </DialogTitle>
            <DialogDescription>
              {t.resetConfirmDesc}
              <br />
              <strong>{selectedUser?.userName}</strong> - <strong>{selectedUser?.chapterId}</strong>
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder={t.resetReason}
              value={resetReason}
              onChange={(e) => setResetReason(e.target.value)}
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setResetDialogOpen(false)}>
              {t.cancel}
            </Button>
            <Button onClick={handleConfirmReset} disabled={resetting}>
              {resetting ? 'Resetting...' : t.confirm}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* History Dialog */}
      <Dialog open={historyDialogOpen} onOpenChange={setHistoryDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-primary" />
              {t.history}
            </DialogTitle>
          </DialogHeader>
          <div className="max-h-96 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t.chapter}</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>{t.difficulty}</TableHead>
                  <TableHead>Previous Score</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userHistory.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.chapter_id}</TableCell>
                    <TableCell>
                      {format(new Date(item.reset_at), 'dd MMM yyyy HH:mm', { locale: dateLocale })}
                    </TableCell>
                    <TableCell>
                      <span className="text-muted-foreground">{item.difficulty_before}</span>
                      {' → '}
                      <span className="font-medium">{item.difficulty_after}</span>
                    </TableCell>
                    <TableCell>{item.previous_score ?? '-'}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {item.reset_reason || '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
