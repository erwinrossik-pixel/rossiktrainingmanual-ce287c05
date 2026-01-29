import { useState, useEffect, useMemo, useRef } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, Shuffle, Lock, Unlock, AlertTriangle, ChevronDown, ChevronUp, BookOpen, Bookmark, BookmarkCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
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
}

interface EnhancedQuizQuestion extends QuizQuestion {
  isMultiCorrect: boolean;
  correctIndices: number[];
  originalOptions: string[];
  difficultyModifier: string | null;
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

const DEFAULT_PASSING_SCORE = 9;
const QUESTIONS_PER_ROUND = 10;

export function Quiz({ title, questions, chapterId, questionsPerRound = QUESTIONS_PER_ROUND }: QuizProps) {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { recordQuizAttempt, getBestScore, getChapterStatus, PASSING_SCORE: dbPassingScore } = useChapterProgress();
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
  const translatedQuestions = useMemo(() => {
    if (chapterId && quizTranslations[chapterId]) {
      return quizTranslations[chapterId].map((q: TranslatedQuizQuestion) => ({
        question: q.question[language] || q.question.en,
        options: q.options[language] || q.options.en,
        correctIndex: q.correctIndex,
        explanation: q.explanation[language] || q.explanation.en
      }));
    }
    return questions || [];
  }, [chapterId, language, questions]);
  
  // Use 10 questions per round (or less if not enough available)
  const actualQuestionsPerRound = Math.min(questionsPerRound, translatedQuestions.length);
  
  // Calculate dynamic passing score based on difficulty
  const PASSING_SCORE = getPassingScore(actualQuestionsPerRound, config);
  
  // Shuffle questions and apply difficulty
  const [shuffledQuestions, setShuffledQuestions] = useState<EnhancedQuizQuestion[]>([]);
  const [quizRound, setQuizRound] = useState(0);
  
  // Start a quiz session when questions are shuffled
  useEffect(() => {
    const baseShuffled = shuffleArray(translatedQuestions).slice(0, actualQuestionsPerRound);
    const enhanced = applyDifficulty(baseShuffled, config);
    setShuffledQuestions(enhanced);
    
    // Reset tracking for new round
    questionsAnsweredRef.current = [];
    
    // Start session tracking for logged-in users
    if (user && chapterId && baseShuffled.length > 0) {
      const questionTexts = baseShuffled.map(q => q.question);
      startQuizSession(chapterId, language, questionTexts).then(id => {
        sessionIdRef.current = id;
      });
    }
  }, [translatedQuestions, actualQuestionsPerRound, quizRound, user, chapterId, language, startQuizSession, config, applyDifficulty]);

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

  const handleAnswer = (index: number) => {
    if (!question || answeredQuestions[currentQuestion]) return;
    
    if (question.isMultiCorrect) {
      // Multi-select mode
      setSelectedAnswers(prev => {
        if (prev.includes(index)) {
          return prev.filter(i => i !== index);
        }
        // Max 2 selections for multi-correct
        if (prev.length >= 2) {
          return [...prev.slice(1), index];
        }
        return [...prev, index];
      });
    } else {
      // Single select mode - submit immediately
      setSelectedAnswers([index]);
      submitAnswer([index]);
    }
  };

  const submitAnswer = (answers: number[]) => {
    if (!question || answeredQuestions[currentQuestion]) return;
    
    setShowResult(true);
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    let isCorrect = false;
    
    if (question.isMultiCorrect) {
      // Check if selected answers match all correct indices
      const sortedSelected = [...answers].sort((a, b) => a - b);
      const sortedCorrect = [...question.correctIndices].sort((a, b) => a - b);
      isCorrect = sortedSelected.length === sortedCorrect.length &&
        sortedSelected.every((val, idx) => val === sortedCorrect[idx]);
    } else {
      isCorrect = answers[0] === question.correctIndex;
    }
    
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
      const userAnswerText = question.isMultiCorrect
        ? answers.map(i => question.options[i]).join(', ')
        : question.options[answers[0]];
      const correctAnswerText = question.isMultiCorrect
        ? question.correctIndices.map(i => question.options[i]).join(', ')
        : question.options[question.correctIndex];
      
      setWrongAnswers(prev => [...prev, {
        question: question.question,
        userAnswer: userAnswerText,
        correctAnswer: correctAnswerText,
        explanation: question.explanation,
        questionIndex: currentQuestion + 1
      }]);
    }
  };

  const handleSubmitMultiCorrect = () => {
    if (question?.isMultiCorrect && selectedAnswers.length > 0) {
      submitAnswer(selectedAnswers);
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
        <div className="text-amber-500 mb-4">
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
    1: { ro: 'Normal', de: 'Normal', en: 'Normal', color: 'bg-green-500/20 text-green-600' },
    2: { ro: 'Greu', de: 'Schwer', en: 'Hard', color: 'bg-yellow-500/20 text-yellow-600' },
    3: { ro: 'Foarte Greu', de: 'Sehr Schwer', en: 'Very Hard', color: 'bg-orange-500/20 text-orange-600' },
    4: { ro: 'Expert', de: 'Experte', en: 'Expert', color: 'bg-red-500/20 text-red-600' },
    5: { ro: 'Maxim', de: 'Maximum', en: 'Maximum', color: 'bg-purple-500/20 text-purple-600' }
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
    selectMultiple: language === 'ro' ? 'Selectează 2 răspunsuri corecte' : language === 'de' ? 'Wähle 2 richtige Antworten' : 'Select 2 correct answers',
    submitAnswers: language === 'ro' ? 'Trimite Răspunsurile' : language === 'de' ? 'Antworten Senden' : 'Submit Answers',
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

  // Check if current answer is correct for multi-correct
  const checkMultiCorrectAnswer = () => {
    if (!question?.isMultiCorrect) return false;
    const sortedSelected = [...selectedAnswers].sort((a, b) => a - b);
    const sortedCorrect = [...question.correctIndices].sort((a, b) => a - b);
    return sortedSelected.length === sortedCorrect.length &&
      sortedSelected.every((val, idx) => val === sortedCorrect[idx]);
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

      {/* Multi-correct indicator */}
      {question.isMultiCorrect && (
        <div className="mb-4 p-3 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{labels.selectMultiple}</span>
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

      {/* Question */}
      <p className="text-lg font-medium mb-6">{question.question}</p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswers.includes(index);
          const isCorrect = question.isMultiCorrect 
            ? question.correctIndices.includes(index)
            : index === question.correctIndex;
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
              {question.isMultiCorrect && isSelected && !showCorrectness && (
                <CheckCircle2 className="w-5 h-5 text-primary" />
              )}
            </button>
          );
        })}
      </div>

      {/* Submit button for multi-correct questions */}
      {question.isMultiCorrect && !showResult && selectedAnswers.length > 0 && (
        <Button
          onClick={handleSubmitMultiCorrect}
          className="w-full mb-4"
          disabled={selectedAnswers.length < 2}
        >
          {labels.submitAnswers} ({selectedAnswers.length}/2)
        </Button>
      )}

      {/* Feedback */}
      {showResult && (
        <div className={cn(
          "p-4 rounded-xl mb-6 animate-fade-in",
          (question.isMultiCorrect ? checkMultiCorrectAnswer() : selectedAnswers[0] === question.correctIndex)
            ? "bg-success/10 border border-success/20" 
            : "bg-destructive/10 border border-destructive/20"
        )}>
          <div className="flex items-start gap-3">
            {(question.isMultiCorrect ? checkMultiCorrectAnswer() : selectedAnswers[0] === question.correctIndex) ? (
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className={cn(
                "font-medium mb-1",
                (question.isMultiCorrect ? checkMultiCorrectAnswer() : selectedAnswers[0] === question.correctIndex)
                  ? "text-success" 
                  : "text-destructive"
              )}>
                {(question.isMultiCorrect ? checkMultiCorrectAnswer() : selectedAnswers[0] === question.correctIndex)
                  ? labels.correct 
                  : labels.incorrect}
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
