import { memo } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RotateCcw, TimerReset, Unlock } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChapterProgress {
  chapter_id: string;
  status: string;
  best_score: number;
  attempts_count: number;
  completed_at: string | null;
  last_attempt_at: string | null;
}

interface QuizAttempt {
  id: string;
  chapter_id: string;
  score: number;
  total_questions: number;
  passed: boolean;
  created_at: string;
  language: string;
}

interface UserWithProgress {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
}

interface AdminUserDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedUser: UserWithProgress | null;
  userProgress: ChapterProgress[];
  userAttempts: QuizAttempt[];
  onResetBestScore: (chapterId: string, userId: string) => void;
  onResetAllScores: (userId: string) => void;
  onUnlockChapter: (chapterId: string, userId: string) => void;
  onResetTrainingTime: (userId: string) => void;
}

export const AdminUserDetailsDialog = memo(function AdminUserDetailsDialog({
  open,
  onOpenChange,
  selectedUser,
  userProgress,
  userAttempts,
  onResetBestScore,
  onResetAllScores,
  onUnlockChapter,
  onResetTrainingTime,
}: AdminUserDetailsDialogProps) {
  const { t } = useLanguage();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500">{t('admin.status.completed')}</Badge>;
      case 'in_progress':
        return <Badge className="bg-yellow-500">{t('admin.status.inProgress')}</Badge>;
      case 'unlocked':
        return <Badge className="bg-blue-500">{t('admin.status.unlocked')}</Badge>;
      default:
        return <Badge variant="secondary">{t('admin.status.locked')}</Badge>;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>
            {t('admin.profiles.userDetails')}: {selectedUser?.first_name} {selectedUser?.last_name}
          </DialogTitle>
          <DialogDescription>{selectedUser?.email}</DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh]">
          <div className="space-y-6 pr-4">
            {/* Chapter Progress */}
            <div>
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-lg font-semibold">{t('admin.profiles.chapterProgress')}</h3>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => selectedUser && onResetTrainingTime(selectedUser.id)}
                    className="text-amber-600 hover:text-amber-800 border-amber-300"
                  >
                    <TimerReset className="h-4 w-4 mr-2" />
                    {t('admin.profiles.resetTimer')}
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => selectedUser && onResetAllScores(selectedUser.id)}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    {t('admin.profiles.resetAll')}
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('admin.table.chapter')}</TableHead>
                    <TableHead>{t('admin.table.status')}</TableHead>
                    <TableHead>{t('admin.table.bestScore')}</TableHead>
                    <TableHead>{t('admin.table.attempts')}</TableHead>
                    <TableHead>{t('admin.table.completedAt')}</TableHead>
                    <TableHead>{t('admin.table.actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userProgress.map((progress) => (
                    <TableRow key={progress.chapter_id}>
                      <TableCell className="font-medium">{progress.chapter_id}</TableCell>
                      <TableCell>{getStatusBadge(progress.status)}</TableCell>
                      <TableCell>{progress.best_score}/10</TableCell>
                      <TableCell>{progress.attempts_count}</TableCell>
                      <TableCell>
                        {progress.completed_at 
                          ? format(new Date(progress.completed_at), 'dd.MM.yyyy HH:mm')
                          : '-'}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {progress.status === 'locked' && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => selectedUser && onUnlockChapter(progress.chapter_id, selectedUser.id)}
                              title={t('admin.profiles.unlockChapter')}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Unlock className="h-4 w-4" />
                            </Button>
                          )}
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => selectedUser && onResetBestScore(progress.chapter_id, selectedUser.id)}
                            title={t('admin.profiles.resetScore')}
                            className="text-destructive hover:text-destructive"
                          >
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Quiz Attempts */}
            <div>
              <h3 className="text-lg font-semibold mb-3">{t('admin.profiles.quizHistory')}</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('admin.table.chapter')}</TableHead>
                    <TableHead>{t('admin.table.score')}</TableHead>
                    <TableHead>{t('admin.table.passed')}</TableHead>
                    <TableHead>{t('admin.table.language')}</TableHead>
                    <TableHead>{t('admin.table.date')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userAttempts.map((attempt) => (
                    <TableRow key={attempt.id}>
                      <TableCell className="font-medium">{attempt.chapter_id}</TableCell>
                      <TableCell>{attempt.score}/{attempt.total_questions}</TableCell>
                      <TableCell>
                        {attempt.passed 
                          ? <Badge className="bg-green-500">{t('admin.table.yes')}</Badge>
                          : <Badge variant="destructive">{t('admin.table.no')}</Badge>}
                      </TableCell>
                      <TableCell>{attempt.language.toUpperCase()}</TableCell>
                      <TableCell>
                        {format(new Date(attempt.created_at), 'dd.MM.yyyy HH:mm')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
});
