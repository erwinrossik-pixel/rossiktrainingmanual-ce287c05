import { useState } from 'react';
import { useBookmarks, BookmarkedQuestion } from '@/hooks/useBookmarks';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Bookmark, 
  BookmarkX, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Trash2,
  Edit3,
  Save,
  X,
  BookOpen,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CURRICULUM_SECTIONS } from '@/data/chaptersConfig';

interface BookmarkedQuestionsProps {
  onNavigateToChapter?: (chapterId: string) => void;
}

export function BookmarkedQuestions({ onNavigateToChapter }: BookmarkedQuestionsProps) {
  const { bookmarks, loading, removeBookmark, updateNotes } = useBookmarks();
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState('');

  const labels = {
    title: language === 'ro' ? 'Întrebări Salvate' : language === 'de' ? 'Gespeicherte Fragen' : 'Saved Questions',
    subtitle: language === 'ro' ? 'Revizuiește întrebările pe care le-ai marcat pentru studiu' : language === 'de' ? 'Überprüfen Sie die Fragen, die Sie zum Lernen markiert haben' : 'Review questions you marked for study',
    noBookmarks: language === 'ro' ? 'Nu ai întrebări salvate' : language === 'de' ? 'Keine gespeicherten Fragen' : 'No saved questions',
    noBookmarksDesc: language === 'ro' ? 'Marchează întrebările dificile din quiz-uri pentru a le revizui mai târziu.' : language === 'de' ? 'Markieren Sie schwierige Fragen aus Quiz, um sie später zu überprüfen.' : 'Bookmark difficult questions from quizzes to review them later.',
    correctAnswer: language === 'ro' ? 'Răspuns corect:' : language === 'de' ? 'Richtige Antwort:' : 'Correct answer:',
    explanation: language === 'ro' ? 'Explicație:' : language === 'de' ? 'Erklärung:' : 'Explanation:',
    notes: language === 'ro' ? 'Notițele tale:' : language === 'de' ? 'Deine Notizen:' : 'Your notes:',
    addNotes: language === 'ro' ? 'Adaugă notițe...' : language === 'de' ? 'Notizen hinzufügen...' : 'Add notes...',
    remove: language === 'ro' ? 'Șterge' : language === 'de' ? 'Entfernen' : 'Remove',
    goToChapter: language === 'ro' ? 'Mergi la Capitol' : language === 'de' ? 'Zum Kapitel' : 'Go to Chapter',
    loading: language === 'ro' ? 'Se încarcă...' : language === 'de' ? 'Wird geladen...' : 'Loading...',
    total: language === 'ro' ? 'Total:' : language === 'de' ? 'Gesamt:' : 'Total:',
    questions: language === 'ro' ? 'întrebări' : language === 'de' ? 'Fragen' : 'questions',
  };

  const getChapterName = (chapterId: string): string => {
    for (const section of CURRICULUM_SECTIONS) {
      const chapter = section.chapters.find(c => c.id === chapterId);
      if (chapter) {
        return chapter.labelKey.replace('chapter.', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      }
    }
    return chapterId;
  };

  const handleStartEdit = (bookmark: BookmarkedQuestion) => {
    setEditingId(bookmark.id);
    setEditNotes(bookmark.notes || '');
  };

  const handleSaveNotes = async (bookmarkId: string) => {
    await updateNotes(bookmarkId, editNotes);
    setEditingId(null);
    setEditNotes('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditNotes('');
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">{labels.loading}</p>
      </div>
    );
  }

  if (bookmarks.length === 0) {
    return (
      <div className="p-8 text-center bg-card rounded-2xl border border-border">
        <Bookmark className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">{labels.noBookmarks}</h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          {labels.noBookmarksDesc}
        </p>
      </div>
    );
  }

  // Group bookmarks by chapter
  const groupedBookmarks = bookmarks.reduce((acc, bookmark) => {
    if (!acc[bookmark.chapter_id]) {
      acc[bookmark.chapter_id] = [];
    }
    acc[bookmark.chapter_id].push(bookmark);
    return acc;
  }, {} as Record<string, BookmarkedQuestion[]>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-serif flex items-center gap-3">
            <Bookmark className="w-6 h-6 text-primary" />
            {labels.title}
          </h2>
          <p className="text-muted-foreground text-sm mt-1">{labels.subtitle}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          {labels.total} <span className="font-bold text-primary">{bookmarks.length}</span> {labels.questions}
        </div>
      </div>

      {/* Grouped by chapter */}
      {Object.entries(groupedBookmarks).map(([chapterId, chapterBookmarks]) => (
        <div key={chapterId} className="bg-card rounded-2xl border border-border overflow-hidden">
          {/* Chapter header */}
          <div className="p-4 bg-muted/30 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-semibold">{getChapterName(chapterId)}</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {chapterBookmarks.length} {labels.questions}
              </span>
            </div>
            {onNavigateToChapter && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigateToChapter(chapterId)}
              >
                {labels.goToChapter}
              </Button>
            )}
          </div>

          {/* Questions */}
          <div className="divide-y divide-border">
            {chapterBookmarks.map((bookmark) => (
              <div key={bookmark.id} className="p-4">
                {/* Question header */}
                <div 
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => setExpandedId(expandedId === bookmark.id ? null : bookmark.id)}
                >
                  <p className="font-medium text-sm flex-1 pr-4">{bookmark.question_text}</p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeBookmark(bookmark.chapter_id, bookmark.question_text);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    {expandedId === bookmark.id ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {/* Expanded content */}
                {expandedId === bookmark.id && (
                  <div className="mt-4 space-y-4 animate-fade-in">
                    {/* Options */}
                    <div className="space-y-2">
                      {bookmark.options.map((option, idx) => (
                        <div
                          key={idx}
                          className={cn(
                            "p-3 rounded-lg text-sm flex items-center gap-2",
                            idx === bookmark.correct_index
                              ? "bg-success/10 border border-success/30"
                              : "bg-muted/50"
                          )}
                        >
                          {idx === bookmark.correct_index && (
                            <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          )}
                          <span className={cn(
                            "font-medium mr-2",
                            idx === bookmark.correct_index ? "text-success" : "text-muted-foreground"
                          )}>
                            {String.fromCharCode(65 + idx)}.
                          </span>
                          <span className={idx === bookmark.correct_index ? "text-success" : ""}>
                            {option}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Explanation */}
                    <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                      <p className="text-xs font-medium text-primary mb-1">{labels.explanation}</p>
                      <p className="text-sm text-muted-foreground">{bookmark.explanation}</p>
                    </div>

                    {/* Notes section */}
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-medium text-muted-foreground">{labels.notes}</p>
                        {editingId !== bookmark.id && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 text-xs"
                            onClick={() => handleStartEdit(bookmark)}
                          >
                            <Edit3 className="w-3 h-3 mr-1" />
                            {bookmark.notes ? 'Edit' : 'Add'}
                          </Button>
                        )}
                      </div>
                      
                      {editingId === bookmark.id ? (
                        <div className="space-y-2">
                          <Textarea
                            value={editNotes}
                            onChange={(e) => setEditNotes(e.target.value)}
                            placeholder={labels.addNotes}
                            className="min-h-[80px] text-sm"
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleSaveNotes(bookmark.id)}
                            >
                              <Save className="w-3 h-3 mr-1" />
                              Save
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={handleCancelEdit}
                            >
                              <X className="w-3 h-3 mr-1" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground italic">
                          {bookmark.notes || labels.addNotes}
                        </p>
                      )}
                    </div>

                    {/* Timestamp */}
                    <p className="text-xs text-muted-foreground">
                      {new Date(bookmark.bookmarked_at).toLocaleDateString(
                        language === 'ro' ? 'ro-RO' : language === 'de' ? 'de-DE' : 'en-US',
                        { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
