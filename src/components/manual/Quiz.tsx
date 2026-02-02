import { useState, useEffect, useMemo, useRef } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, Shuffle, Lock, Unlock, AlertTriangle, ChevronDown, ChevronUp, BookOpen, Bookmark, BookmarkCheck, Zap, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useProgressContext } from "@/contexts/ProgressContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useQuizTracking } from "@/hooks/useQuizTracking";
import { useQuizDifficulty } from "@/hooks/useQuizDifficulty";
import { quizTranslations, TranslatedQuizQuestion } from "@/data/quizTranslations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficultyLevel?: number;
}

interface EnhancedQuizQuestion extends QuizQuestion {
  isMultiCorrect: boolean;
  correctIndices: number[];
  originalOptions: string[];
  difficultyModifier: string | null;
  questionDifficultyLevel: number; // The actual difficulty level of the question
}

interface QuizProps {
  title: string;
  questions?: QuizQuestion[];
  chapterId?: string;
  questionsPerRound?: number;
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Selects questions based on user's difficulty level.
 * At level N, questions alternate between levels N, N+1, and N+2.
 * This creates a progressive, balanced quiz experience.
 * 
 * @param questions - All available questions with difficultyLevel
 * @param userDifficulty - User's current difficulty level (1-5)
 * @param count - Number of questions to select
 */
function selectQuestionsByDifficulty<T extends { difficultyLevel?: number }>(
  questions: T[],
  userDifficulty: number,
  count: number
): T[] {
  // Determine the target difficulty levels: N, N+1, N+2 (capped at 5)
  const targetLevels = [
    userDifficulty,
    Math.min(userDifficulty + 1, 5),
    Math.min(userDifficulty + 2, 5)
  ];

  // Group questions by their difficulty level
  const questionsByLevel: Record<number, T[]> = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  questions.forEach(q => {
    const level = q.difficultyLevel || 1;
    if (questionsByLevel[level]) {
      questionsByLevel[level].push(q);
    }
  });

  // Shuffle each group
  Object.keys(questionsByLevel).forEach(level => {
    questionsByLevel[Number(level)] = shuffleArray(questionsByLevel[Number(level)]);
  });

  // Calculate how many questions to take from each level
  // Distribute evenly with slight preference for lower levels
  const questionsPerLevel = Math.ceil(count / 3);
  const selected: T[] = [];
  
  // Collect questions alternating between levels
  let levelIndex = 0;
  const usedIndices: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  while (selected.length < count) {
    const currentLevel = targetLevels[levelIndex % 3];
    const levelQuestions = questionsByLevel[currentLevel];
    const usedCount = usedIndices[currentLevel];

    if (usedCount < levelQuestions.length) {
      selected.push(levelQuestions[usedCount]);
      usedIndices[currentLevel]++;
    } else {
      // If current level is exhausted, try to find questions from adjacent levels
      const adjacentLevels = [currentLevel - 1, currentLevel + 1].filter(l => l >= 1 && l <= 5);
      let found = false;
      
      for (const adjLevel of adjacentLevels) {
        if (usedIndices[adjLevel] < questionsByLevel[adjLevel].length) {
          selected.push(questionsByLevel[adjLevel][usedIndices[adjLevel]]);
          usedIndices[adjLevel]++;
          found = true;
          break;
        }
      }
      
      // If still not found, take from any available level
      if (!found) {
        for (let l = 1; l <= 5; l++) {
          if (usedIndices[l] < questionsByLevel[l].length) {
            selected.push(questionsByLevel[l][usedIndices[l]]);
            usedIndices[l]++;
            break;
          }
        }
      }
    }
    
    levelIndex++;
    
    // Safety check to prevent infinite loop
    if (levelIndex > count * 5) break;
  }

  // Final shuffle to avoid predictable ordering
  return shuffleArray(selected);
}

const DEFAULT_PASSING_SCORE = 9;
const QUESTIONS_PER_ROUND = 10;

export function Quiz({ title, questions, chapterId, questionsPerRound = QUESTIONS_PER_ROUND }: QuizProps) {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { recordQuizAttempt, getBestScore, getChapterStatus, isChapterLockedOut, getConsecutiveFails, PASSING_SCORE: dbPassingScore, MAX_CONSECUTIVE_FAILS } = useChapterProgress();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { startQuizSession, completeQuizSession, recordQuestionPerformance } = useQuizTracking();
  const { difficulty, resetCount, userRestartCount, config, applyDifficulty, getPassingScore, isLoading: difficultyLoading, recordUserRestart, refreshDifficulty } = useQuizDifficulty(chapterId);
  
  // Track session and answered questions for analytics
  const sessionIdRef = useRef<string | null>(null);
  const questionsAnsweredRef = useRef<Array<{
    questionText: string;
    wasCorrect: boolean;
    userAnswerIndex: number | null;
    correctAnswerIndex: number;
  }>>([]);
  
  // Get translated questions if available, otherwise use passed questions
  // Include difficultyLevel for progressive difficulty selection
  const translatedQuestions = useMemo(() => {
    if (chapterId && quizTranslations[chapterId]) {
      return quizTranslations[chapterId].map((q: TranslatedQuizQuestion) => ({
        question: q.question[language] || q.question.en,
        options: q.options[language] || q.options.en,
        correctIndex: q.correctIndex,
        explanation: q.explanation[language] || q.explanation.en,
        difficultyLevel: q.difficultyLevel || 1
      }));
    }
    return (questions || []).map(q => ({ ...q, difficultyLevel: 1 }));
  }, [chapterId, language, questions]);
  
  // Use 10 questions per round (or less if not enough available)
  const actualQuestionsPerRound = Math.min(questionsPerRound, translatedQuestions.length);
  
  // Calculate dynamic passing score based on difficulty
  const PASSING_SCORE = getPassingScore(actualQuestionsPerRound, config);
  
  // Shuffle questions and apply difficulty
  const [shuffledQuestions, setShuffledQuestions] = useState<EnhancedQuizQuestion[]>([]);
  const [quizRound, setQuizRound] = useState(0);
  
  // Start a quiz session when questions are shuffled
  // Uses progressive difficulty selection: at level N, questions alternate between N, N+1, N+2
  useEffect(() => {
    // Select questions based on user's current difficulty level
    // This creates a balanced, progressive quiz experience
    const selectedQuestions = selectQuestionsByDifficulty(
      translatedQuestions,
      difficulty,
      actualQuestionsPerRound
    );
    
    const enhanced = applyDifficulty(selectedQuestions, config);
    setShuffledQuestions(enhanced);
    
    // Reset tracking for new round
    questionsAnsweredRef.current = [];
    
    // Start session tracking for logged-in users
    if (user && chapterId && selectedQuestions.length > 0) {
      const questionTexts = selectedQuestions.map(q => q.question);
      startQuizSession(chapterId, language, questionTexts).then(id => {
        sessionIdRef.current = id;
      });
    }
  }, [translatedQuestions, actualQuestionsPerRound, quizRound, user, chapterId, language, startQuizSession, config, applyDifficulty, difficulty]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<Array<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
    questionIndex: number;
  }>>([]);
  const [showWrongAnswers, setShowWrongAnswers] = useState(false);
  
  const { saveQuizScore, getChapterProgress } = useProgressContext();

  // Initialize answered questions array when shuffled questions change
  useEffect(() => {
    setAnsweredQuestions(new Array(shuffledQuestions.length).fill(false));
    setSelectedAnswers([]);
  }, [shuffledQuestions.length]);

  const question = shuffledQuestions[currentQuestion];

  // Check if we have a previous score (from localStorage or DB)
  const previousProgress = chapterId ? getChapterProgress(chapterId) : undefined;
  const dbBestScore = chapterId && user ? getBestScore(chapterId) : 0;
  const dbStatus = chapterId && user ? getChapterStatus(chapterId) : null;
  const isChapterCompleted = dbStatus === 'completed';
  const isLockedOut = chapterId && user ? isChapterLockedOut(chapterId) : false;
  const consecutiveFails = chapterId && user ? getConsecutiveFails(chapterId) : 0;

  // If chapter is locked out, show message
  if (isLockedOut) {
    return (
      <Card className="w-full max-w-4xl mx-auto border-destructive bg-destructive/5">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-destructive">
            <X className="h-6 w-6" />
            {language === 'ro' ? 'Capitol Blocat' : language === 'de' ? 'Kapitel Gesperrt' : 'Chapter Locked'}
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            {language === 'ro' 
              ? 'Ai depășit limita de 3 încercări eșuate consecutive. Contactează un administrator pentru a debloca acest capitol.'
              : language === 'de'
              ? 'Du hast die Grenze von 3 aufeinanderfolgenden Fehlversuchen überschritten. Kontaktiere einen Administrator, um dieses Kapitel freizuschalten.'
              : 'You have exceeded the limit of 3 consecutive failed attempts. Contact an administrator to unlock this chapter.'}
          </p>
        </CardHeader>
      </Card>
    );
  }

  const handleAnswer = (index: number) => {
    if (!question || answeredQuestions[currentQuestion]) return;
    
    // Single select mode - submit immediately
    setSelectedAnswers([index]);
    submitAnswer([index]);
  };

  const submitAnswer = (answers: number[]) => {
    if (!question || answeredQuestions[currentQuestion]) return;
    
    setShowResult(true);
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    const isCorrect = answers[0] === question.correctIndex;
    
    // Track answer for analytics
    questionsAnsweredRef.current.push({
      questionText: question.question,
      wasCorrect: isCorrect,
      userAnswerIndex: answers[0] ?? null,
      correctAnswerIndex: question.correctIndex,
    });
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      // Track wrong answer for UI display
      const userAnswerText = question.options[answers[0]];
      const correctAnswerText = question.options[question.correctIndex];
      
      setWrongAnswers(prev => [...prev, {
        question: question.question,
        userAnswer: userAnswerText,
        correctAnswer: correctAnswerText,
        explanation: question.explanation,
        questionIndex: currentQuestion + 1
      }]);
    }
  };

  const handleNext = async () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers([]);
      setShowResult(false);
    } else {
      // Calculate final score
      let finalCorrect = 0;
      questionsAnsweredRef.current.forEach(q => {
        if (q.wasCorrect) finalCorrect++;
      });
      
      setQuizCompleted(true);
      
      // Save to localStorage (for guests)
      if (chapterId) {
        saveQuizScore(chapterId, finalCorrect, shuffledQuestions.length);
      }
      
      // Save to database (for logged in users)
      if (user && chapterId) {
        setIsRecording(true);
        
        // Record the attempt
        await recordQuizAttempt(chapterId, finalCorrect, language);
        
        // Complete the session and record question performance
        await completeQuizSession(sessionIdRef.current || undefined);
        await recordQuestionPerformance(
          chapterId,
          language,
          null,
          questionsAnsweredRef.current
        );
        
        setIsRecording(false);
      }
    }
  };

  const handleRestart = async () => {
    // Record user restart and increase difficulty
    if (user && chapterId) {
      await recordUserRestart();
      refreshDifficulty();
    }
    
    setQuizRound(prev => prev + 1);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setWrongAnswers([]);
    setShowWrongAnswers(false);
  };

  const handleNewQuestions = async () => {
    // Record user restart and increase difficulty
    if (user && chapterId) {
      await recordUserRestart();
      refreshDifficulty();
    }
    
    setQuizRound(prev => prev + 1);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
    setWrongAnswers([]);
    setShowWrongAnswers(false);
  };

  // FALLBACK: Handle empty question bank gracefully
  if (shuffledQuestions.length === 0) {
    return (
      <div className="mt-12 p-8 bg-card rounded-2xl border border-border shadow-card text-center">
        <div className="text-warning mb-4">
          <AlertTriangle className="w-12 h-12 mx-auto" />
        </div>
        <h3 className="text-lg font-bold mb-2">
          {language === 'ro' ? 'Quiz indisponibil' : language === 'de' ? 'Quiz nicht verfügbar' : 'Quiz unavailable'}
        </h3>
        <p className="text-muted-foreground text-sm">
          {language === 'ro' 
            ? 'Nu există suficiente întrebări pentru acest capitol. Contactați administratorul.' 
            : language === 'de'
            ? 'Für dieses Kapitel sind nicht genügend Fragen vorhanden. Kontaktieren Sie den Administrator.'
            : 'Not enough questions available for this chapter. Please contact the administrator.'}
        </p>
      </div>
    );
  }

  if (!question) {
    return null;
  }

  // Calculate final score from tracked answers
  const calculateFinalScore = () => {
    return questionsAnsweredRef.current.filter(q => q.wasCorrect).length;
  };

  const finalScore = quizCompleted ? calculateFinalScore() : score;
  const passed = finalScore >= PASSING_SCORE;
  const percentage = Math.round((finalScore / shuffledQuestions.length) * 100);

  // Difficulty indicator label
  const difficultyLabel = {
    1: { ro: 'Normal', de: 'Normal', en: 'Normal', color: 'bg-success/20 text-success' },
    2: { ro: 'Greu', de: 'Schwer', en: 'Hard', color: 'bg-warning/20 text-warning' },
    3: { ro: 'Foarte Greu', de: 'Sehr Schwer', en: 'Very Hard', color: 'bg-warning/30 text-warning' },
    4: { ro: 'Expert', de: 'Experte', en: 'Expert', color: 'bg-destructive/20 text-destructive' },
    5: { ro: 'Maxim', de: 'Maximum', en: 'Maximum', color: 'bg-primary/20 text-primary' }
  };

  // Labels based on language
  const labels = {
    quizComplete: language === 'ro' ? 'Quiz Finalizat!' : language === 'de' ? 'Quiz Abgeschlossen!' : 'Quiz Complete!',
    chapterUnlocked: language === 'ro' ? 'Capitol deblocat! Poți continua la următorul capitol.' : language === 'de' ? 'Kapitel freigeschaltet! Sie können zum nächsten Kapitel übergehen.' : 'Chapter unlocked! You can proceed to the next chapter.',
    needMoreScore: language === 'ro' ? `Ai nevoie de ${PASSING_SCORE}/${shuffledQuestions.length} pentru a debloca următorul capitol.` : language === 'de' ? `Sie benötigen ${PASSING_SCORE}/${shuffledQuestions.length}, um das nächste Kapitel freizuschalten.` : `You need ${PASSING_SCORE}/${shuffledQuestions.length} to unlock the next chapter.`,
    tryAgain: language === 'ro' ? 'Încearcă Din Nou' : language === 'de' ? 'Erneut Versuchen' : 'Try Again',
    newQuestions: language === 'ro' ? 'Întrebări Noi' : language === 'de' ? 'Neue Fragen' : 'New Questions',
    questionPool: language === 'ro' 
      ? `Pool întrebări: ${translatedQuestions.length} întrebări • Se afișează ${shuffledQuestions.length} pe rundă`
      : language === 'de'
      ? `Fragenpool: ${translatedQuestions.length} Fragen • ${shuffledQuestions.length} pro Runde angezeigt`
      : `Question pool: ${translatedQuestions.length} questions • Showing ${shuffledQuestions.length} per round`,
    passingRequirement: language === 'ro' 
      ? `Scor minim pentru trecere: ${PASSING_SCORE}/${shuffledQuestions.length}`
      : language === 'de'
      ? `Mindestpunktzahl zum Bestehen: ${PASSING_SCORE}/${shuffledQuestions.length}`
      : `Minimum passing score: ${PASSING_SCORE}/${shuffledQuestions.length}`,
    bestScore: language === 'ro' ? 'Cel mai bun scor:' : language === 'de' ? 'Bisheriges Bestes:' : 'Best score:',
    question: language === 'ro' 
      ? `Întrebarea ${currentQuestion + 1} din ${shuffledQuestions.length}`
      : language === 'de'
      ? `Frage ${currentQuestion + 1} von ${shuffledQuestions.length}`
      : `Question ${currentQuestion + 1} of ${shuffledQuestions.length}`,
    nextQuestion: language === 'ro' ? 'Următoarea Întrebare' : language === 'de' ? 'Nächste Frage' : 'Next Question',
    seeResults: language === 'ro' ? 'Vezi Rezultatele' : language === 'de' ? 'Ergebnisse Anzeigen' : 'See Results',
    correct: language === 'ro' ? 'Corect!' : language === 'de' ? 'Richtig!' : 'Correct!',
    incorrect: language === 'ro' ? 'Incorect' : language === 'de' ? 'Falsch' : 'Incorrect',
    excellent: language === 'ro' ? "Excelent! Ai stăpânit acest capitol." : language === 'de' ? "Ausgezeichnet! Sie haben dieses Kapitel gemeistert." : "Excellent work! You've mastered this chapter.",
    good: language === 'ro' ? "Bine! Revizuiește întrebările greșite." : language === 'de' ? "Gut! Überprüfen Sie die verpassten Fragen." : "Good job! Review the missed questions.",
    keepStudying: language === 'ro' ? "Continuă să studiezi! Revizuiește capitolul și încearcă din nou." : language === 'de' ? "Weiterstudieren! Überprüfen Sie das Kapitel und versuchen Sie es erneut." : "Keep studying! Review the chapter and try again.",
    alreadyCompleted: language === 'ro' ? 'Capitol deja completat' : language === 'de' ? 'Kapitel bereits abgeschlossen' : 'Chapter already completed',
    loginToSave: language === 'ro' ? 'Autentifică-te pentru a salva progresul' : language === 'de' ? 'Melden Sie sich an, um den Fortschritt zu speichern' : 'Log in to save your progress',
    showWrongAnswers: language === 'ro' ? 'Vezi Răspunsurile Greșite' : language === 'de' ? 'Falsche Antworten Anzeigen' : 'Show Wrong Answers',
    hideWrongAnswers: language === 'ro' ? 'Ascunde Răspunsurile Greșite' : language === 'de' ? 'Falsche Antworten Ausblenden' : 'Hide Wrong Answers',
    wrongAnswersTitle: language === 'ro' ? 'Răspunsuri Greșite' : language === 'de' ? 'Falsche Antworten' : 'Wrong Answers',
    yourAnswer: language === 'ro' ? 'Răspunsul tău:' : language === 'de' ? 'Deine Antwort:' : 'Your answer:',
    correctAnswerLabel: language === 'ro' ? 'Răspuns corect:' : language === 'de' ? 'Richtige Antwort:' : 'Correct answer:',
    allCorrect: language === 'ro' ? 'Felicitări! Ai răspuns corect la toate întrebările!' : language === 'de' ? 'Herzlichen Glückwunsch! Du hast alle Fragen richtig beantwortet!' : 'Congratulations! You answered all questions correctly!',
    bookmark: language === 'ro' ? 'Salvează întrebarea' : language === 'de' ? 'Frage speichern' : 'Bookmark question',
    bookmarked: language === 'ro' ? 'Întrebare salvată' : language === 'de' ? 'Frage gespeichert' : 'Question bookmarked',
    difficultyLevel: language === 'ro' ? 'Nivel Dificultate' : language === 'de' ? 'Schwierigkeitsgrad' : 'Difficulty Level',
    resetCount: language === 'ro' ? 'Resetări' : language === 'de' ? 'Resets' : 'Resets'
  };

  if (quizCompleted) {
    return (
      <div className="mt-12 p-8 bg-card rounded-2xl border border-border shadow-card">
        <div className="text-center">
          <div className={cn(
            "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center",
            passed ? "bg-success/20" : "bg-destructive/20"
          )}>
            {passed ? (
              <Unlock className="w-10 h-10 text-success" />
            ) : (
              <Lock className="w-10 h-10 text-destructive" />
            )}
          </div>
          
          <h3 className="text-2xl font-bold font-serif mb-2">{labels.quizComplete}</h3>
          <p className="text-4xl font-bold text-primary mb-2">{finalScore}/{shuffledQuestions.length}</p>
          
          {/* Difficulty badge */}
          {difficulty > 1 && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge className={difficultyLabel[difficulty as keyof typeof difficultyLabel]?.color}>
                <Zap className="w-3 h-3 mr-1" />
                {difficultyLabel[difficulty as keyof typeof difficultyLabel]?.[language] || 'Hard'}
              </Badge>
              {resetCount > 0 && (
                <Badge variant="outline">
                  {labels.resetCount}: {resetCount}
                </Badge>
              )}
            </div>
          )}
          
          {/* Passed/Failed message */}
          <div className={cn(
            "p-4 rounded-lg mb-4",
            passed ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
          )}>
            {passed ? (
              <div className="flex items-center justify-center gap-2 text-success">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">{labels.chapterUnlocked}</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 text-destructive">
                <XCircle className="w-5 h-5" />
                <span className="font-medium">{labels.needMoreScore}</span>
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground mb-2">
            {passed ? labels.excellent : finalScore >= 7 ? labels.good : labels.keepStudying}
          </p>
          
          {/* Show login prompt for guests */}
          {!user && (
            <p className="text-sm text-warning mb-4 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              {labels.loginToSave}
            </p>
          )}
          
          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-3 mb-4 relative">
            <div 
              className={cn(
                "h-3 rounded-full transition-all duration-500",
                passed ? "bg-success" : "bg-destructive"
              )}
              style={{ width: `${percentage}%` }}
            />
            {/* Passing threshold marker */}
            <div 
              className="absolute top-0 h-3 w-0.5 bg-foreground/50"
              style={{ left: `${(PASSING_SCORE / shuffledQuestions.length) * 100}%` }}
            />
          </div>
          
          <div className="text-xs text-muted-foreground mb-2">
            {labels.passingRequirement}
          </div>

          <div className="text-xs text-muted-foreground mb-4">
            {labels.questionPool}
          </div>
          
          {/* Best score from DB */}
          {user && dbBestScore > 0 && (
            <div className="text-sm text-muted-foreground mb-4">
              {labels.bestScore} <span className="font-bold text-primary">{dbBestScore}/10</span>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button
              onClick={handleNewQuestions}
              disabled={isRecording}
              className="inline-flex items-center justify-center gap-2"
            >
              <Shuffle className="w-4 h-4" />
              {labels.newQuestions}
            </Button>
            <Button
              onClick={handleRestart}
              variant="secondary"
              disabled={isRecording}
              className="inline-flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              {labels.tryAgain}
            </Button>
          </div>
          
          {/* Wrong Answers Section */}
          {wrongAnswers.length > 0 ? (
            <div className="mt-6">
              <Button
                variant="outline"
                onClick={() => setShowWrongAnswers(!showWrongAnswers)}
                className="w-full mb-4 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                {showWrongAnswers ? labels.hideWrongAnswers : labels.showWrongAnswers}
                {showWrongAnswers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                <span className="ml-2 bg-destructive/20 text-destructive px-2 py-0.5 rounded-full text-xs font-medium">
                  {wrongAnswers.length}
                </span>
              </Button>
              
              {showWrongAnswers && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="font-semibold text-lg flex items-center gap-2 text-destructive">
                    <XCircle className="w-5 h-5" />
                    {labels.wrongAnswersTitle}
                  </h4>
                  {wrongAnswers.map((wa, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-destructive/5 border border-destructive/20 rounded-xl text-left"
                    >
                      <p className="font-medium mb-3 text-sm">
                        <span className="text-muted-foreground">#{wa.questionIndex}:</span> {wa.question}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-muted-foreground">{labels.yourAnswer}</span>
                            <span className="ml-1 text-destructive font-medium">{wa.userAnswer}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-muted-foreground">{labels.correctAnswerLabel}</span>
                            <span className="ml-1 text-success font-medium">{wa.correctAnswer}</span>
                          </div>
                        </div>
                        <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                          <p className="text-muted-foreground text-xs leading-relaxed">{wa.explanation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-xl text-center">
              <CheckCircle2 className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-success font-medium">{labels.allCorrect}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Simple check if answer is correct
  const isAnswerCorrect = () => {
    return selectedAnswers[0] === question.correctIndex;
  };

  return (
    <div className="mt-12 p-6 md:p-8 bg-card rounded-2xl border border-border shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold font-serif text-primary">{title}</h3>
          {/* Difficulty badge */}
          {difficulty > 1 && (
            <Badge className={cn("text-xs", difficultyLabel[difficulty as keyof typeof difficultyLabel]?.color)}>
              <Zap className="w-3 h-3 mr-1" />
              {difficultyLabel[difficulty as keyof typeof difficultyLabel]?.[language]}
            </Badge>
          )}
        </div>
        <span className="text-sm text-muted-foreground">{labels.question}</span>
      </div>

      {/* Passing requirement info */}
      <div className="mb-4 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2 flex items-center gap-2">
        <Trophy className="w-4 h-4 text-primary" />
        {labels.passingRequirement}
      </div>

      {/* Two-option question indicator (for higher difficulty) */}
      {question.difficultyModifier === 'two_options' && (
        <div className="mb-4 p-3 bg-warning/10 border border-warning/20 rounded-lg flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-warning" />
          <span className="text-sm font-medium text-warning">
            {language === 'ro' ? 'Întrebare cu 2 opțiuni - Gândește cu atenție!' 
              : language === 'de' ? '2-Optionen-Frage - Denke sorgfältig nach!' 
              : '2-option question - Think carefully!'}
          </span>
        </div>
      )}

      {/* Previous/Best score badge */}
      {(user && dbBestScore > 0) || previousProgress?.quizScore !== undefined ? (
        <div className="mb-4 text-sm text-muted-foreground flex items-center gap-2">
          <span>{labels.bestScore}</span>
          <span className={cn(
            "px-2 py-0.5 rounded-full text-xs font-medium",
            (user ? dbBestScore : previousProgress?.quizScore || 0) >= DEFAULT_PASSING_SCORE
              ? "bg-success/20 text-success"
              : "bg-warning/20 text-warning"
          )}>
            {user ? dbBestScore : previousProgress?.quizScore}/{user ? 10 : previousProgress?.quizTotal}
          </span>
          {isChapterCompleted && (
            <span className="text-xs text-success flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {labels.alreadyCompleted}
            </span>
          )}
        </div>
      ) : null}
      
      {/* Progress bar */}
      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / shuffledQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question with difficulty indicator */}
      <div className="flex items-start gap-2 mb-6">
        <p className="text-lg font-medium flex-1">{question.question}</p>
        <Badge 
          variant="outline" 
          className={cn(
            "text-xs flex-shrink-0",
            question.questionDifficultyLevel <= 2 ? "border-success/50 text-success" :
            question.questionDifficultyLevel <= 3 ? "border-warning/50 text-warning" :
            "border-destructive/50 text-destructive"
          )}
        >
          L{question.questionDifficultyLevel}
        </Badge>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswers.includes(index);
          const isCorrect = index === question.correctIndex;
          const showCorrectness = showResult;

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={answeredQuestions[currentQuestion]}
              className={cn(
                "w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3",
                !showCorrectness && "hover:bg-muted/50 hover:border-primary/50",
                !showCorrectness && isSelected && "border-primary bg-primary/5 ring-2 ring-primary/30",
                showCorrectness && isCorrect && "border-success bg-success/10",
                showCorrectness && isSelected && !isCorrect && "border-destructive bg-destructive/10",
                !showCorrectness && !isSelected && "border-border",
                answeredQuestions[currentQuestion] && !isSelected && !isCorrect && "opacity-50"
              )}
            >
              <span className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
                !showCorrectness && !isSelected && "bg-muted",
                !showCorrectness && isSelected && "bg-primary text-primary-foreground",
                showCorrectness && isCorrect && "bg-success text-success-foreground",
                showCorrectness && isSelected && !isCorrect && "bg-destructive text-destructive-foreground"
              )}>
                {showCorrectness && isCorrect ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : showCorrectness && isSelected && !isCorrect ? (
                  <XCircle className="w-5 h-5" />
                ) : (
                  String.fromCharCode(65 + index)
                )}
              </span>
              <span className="flex-1">{option}</span>
            </button>
          );
        })}
      </div>


      {/* Feedback */}
      {showResult && (
        <div className={cn(
          "p-4 rounded-xl mb-6 animate-fade-in",
          isAnswerCorrect()
            ? "bg-success/10 border border-success/20" 
            : "bg-destructive/10 border border-destructive/20"
        )}>
          <div className="flex items-start gap-3">
            {isAnswerCorrect() ? (
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className={cn(
                "font-medium mb-1",
                isAnswerCorrect() ? "text-success" : "text-destructive"
              )}>
                {isAnswerCorrect() ? labels.correct : labels.incorrect}
              </p>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
            {/* Bookmark button */}
            {user && chapterId && (
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-8 w-8 flex-shrink-0",
                  isBookmarked(chapterId, question.question) 
                    ? "text-primary hover:text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
                onClick={() => toggleBookmark(
                  chapterId,
                  question.question,
                  question.options,
                  question.correctIndex,
                  question.explanation
                )}
                title={isBookmarked(chapterId, question.question) ? labels.bookmarked : labels.bookmark}
              >
                {isBookmarked(chapterId, question.question) ? (
                  <BookmarkCheck className="w-5 h-5" />
                ) : (
                  <Bookmark className="w-5 h-5" />
                )}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Current score indicator */}
      {showResult && (
        <div className="mb-4 text-center text-sm text-muted-foreground">
          {language === 'ro' ? 'Scor curent:' : language === 'de' ? 'Aktueller Stand:' : 'Current score:'}{' '}
          <span className={cn(
            "font-bold",
            score >= PASSING_SCORE ? "text-success" : "text-primary"
          )}>
            {score}/{currentQuestion + 1}
          </span>
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <Button
          onClick={handleNext}
          className="w-full"
        >
          {currentQuestion < shuffledQuestions.length - 1 ? (
            <>
              {labels.nextQuestion}
              <ChevronRight className="w-4 h-4 ml-2" />
            </>
          ) : (
            <>
              {labels.seeResults}
              <Trophy className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
