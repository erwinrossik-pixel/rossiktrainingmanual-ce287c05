import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
}

export function Quiz({ title, questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
    
    if (index === question.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
    setQuizCompleted(false);
  };

  const percentage = Math.round((score / questions.length) * 100);

  if (quizCompleted) {
    return (
      <div className="mt-12 p-8 bg-card rounded-2xl border border-border shadow-card">
        <div className="text-center">
          <div className={cn(
            "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center",
            percentage >= 80 ? "bg-success/20" : percentage >= 60 ? "bg-warning/20" : "bg-destructive/20"
          )}>
            <Trophy className={cn(
              "w-10 h-10",
              percentage >= 80 ? "text-success" : percentage >= 60 ? "text-warning" : "text-destructive"
            )} />
          </div>
          
          <h3 className="text-2xl font-bold font-serif mb-2">Quiz Complete!</h3>
          <p className="text-4xl font-bold text-primary mb-2">{score}/{questions.length}</p>
          <p className="text-muted-foreground mb-6">
            {percentage >= 80 ? "Excellent work! You've mastered this chapter." :
             percentage >= 60 ? "Good job! Review the missed questions." :
             "Keep studying! Review the chapter and try again."}
          </p>
          
          <div className="w-full bg-muted rounded-full h-3 mb-6">
            <div 
              className={cn(
                "h-3 rounded-full transition-all duration-500",
                percentage >= 80 ? "bg-success" : percentage >= 60 ? "bg-warning" : "bg-destructive"
              )}
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 p-6 md:p-8 bg-card rounded-2xl border border-border shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold font-serif text-primary">{title}</h3>
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <p className="text-lg font-medium mb-6">{question.question}</p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
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
                !showCorrectness && isSelected && "border-primary bg-primary/5",
                showCorrectness && isCorrect && "border-success bg-success/10",
                showCorrectness && isSelected && !isCorrect && "border-destructive bg-destructive/10",
                !showCorrectness && !isSelected && "border-border",
                answeredQuestions[currentQuestion] && !isSelected && !isCorrect && "opacity-50"
              )}
            >
              <span className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
                !showCorrectness && "bg-muted",
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
          selectedAnswer === question.correctIndex ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
        )}>
          <div className="flex items-start gap-3">
            {selectedAnswer === question.correctIndex ? (
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={cn(
                "font-medium mb-1",
                selectedAnswer === question.correctIndex ? "text-success" : "text-destructive"
              )}>
                {selectedAnswer === question.correctIndex ? "Correct!" : "Incorrect"}
              </p>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Next button */}
      {showResult && (
        <button
          onClick={handleNext}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          {currentQuestion < questions.length - 1 ? (
            <>
              Next Question
              <ChevronRight className="w-4 h-4" />
            </>
          ) : (
            <>
              See Results
              <Trophy className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
