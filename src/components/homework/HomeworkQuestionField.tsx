import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { autoPointsFor, formatPoints, parseHomeworkNumber } from "@/lib/homework/grading";
import { useHomeworkT } from "@/lib/homework/i18n";
import type { HomeworkAnswerKey, HomeworkQuestion } from "@/lib/homework/types";

interface Props {
  question: HomeworkQuestion;
  value: string;
  onChange?: (value: string) => void;
  readOnly: boolean;
  /** Only passed to learners when the trainer enabled "show solutions" and the homework is graded. */
  solution?: HomeworkAnswerKey | null;
}

export function describeAnswerKey(key: HomeworkAnswerKey, unit: string | null, t: (k: string, p?: Record<string, string | number>) => string): string {
  if (key.kind === "choice") return key.accepted.join(" / ");
  if (key.kind === "number") {
    const value = `${String(key.value).replace(".", ",")}${unit ? ` ${unit}` : ""}`;
    return key.tolerance > 0 ? t("orTolerance", { value, tol: String(key.tolerance).replace(".", ",") }) : value;
  }
  return key.rubric;
}

export function HomeworkQuestionField({ question, value, onChange, readOnly, solution }: Props) {
  const { t } = useHomeworkT();
  const id = `hw-${question.q_key}`;
  const numberInvalid = question.type === "number" && value.trim() !== "" && parseHomeworkNumber(value) === null;
  const earned = solution ? autoPointsFor(question, solution, value) : null;

  return (
    <div className="space-y-3 rounded-lg border border-border bg-card p-4">
      <div className="flex items-start justify-between gap-3">
        <Label htmlFor={id} className="text-sm font-medium leading-relaxed text-foreground">
          <span className="mr-2 font-mono text-xs text-muted-foreground">{question.q_key}</span>
          {question.prompt}
        </Label>
        <span className="shrink-0 rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          {t("pointsShort", { n: formatPoints(question.points) })}
        </span>
      </div>

      {question.type === "choice" && (
        <RadioGroup
          value={value}
          onValueChange={(v) => onChange?.(v)}
          disabled={readOnly}
          className="grid gap-2 sm:grid-cols-2"
          aria-label={question.prompt}
        >
          {question.options.map((option, i) => {
            const optionId = `${id}-${i}`;
            const selected = value === option;
            return (
              <Label
                key={option}
                htmlFor={optionId}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-normal transition-colors",
                  selected ? "border-primary bg-accent text-accent-foreground" : "hover:bg-muted",
                  readOnly && "cursor-default",
                )}
              >
                <RadioGroupItem id={optionId} value={option} />
                {option}
              </Label>
            );
          })}
        </RadioGroup>
      )}

      {question.type === "number" && (
        <div className="space-y-1">
          <div className="flex max-w-xs items-center gap-2">
            <Input
              id={id}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={value}
              readOnly={readOnly}
              onChange={(e) => onChange?.(e.target.value)}
              aria-invalid={numberInvalid}
              className={cn(numberInvalid && "border-destructive")}
            />
            {question.unit && <span className="text-sm text-muted-foreground">{question.unit}</span>}
          </div>
          {!readOnly && (
            <p className={cn("text-xs", numberInvalid ? "text-destructive" : "text-muted-foreground")}>
              {numberInvalid ? t("numberInvalid") : t("numberHint")}
            </p>
          )}
        </div>
      )}

      {question.type === "text" && (
        <Textarea
          id={id}
          value={value}
          readOnly={readOnly}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={readOnly ? undefined : t("textPlaceholder")}
          rows={6}
        />
      )}

      {readOnly && value.trim() === "" && <p className="text-xs italic text-muted-foreground">{t("noAnswer")}</p>}

      {solution && (
        <div className="rounded-md border border-border bg-muted/50 p-3 text-sm">
          {question.type !== "text" && earned !== null && (
            <p className={cn("mb-1 font-medium", earned > 0 ? "text-success" : "text-destructive")}>
              {earned > 0 ? `✓ ${t("correct")}` : `✗ ${t("wrong")}`}
            </p>
          )}
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">
              {question.type === "text" ? t("rubric") : t("correctAnswer")}:
            </span>{" "}
            {describeAnswerKey(solution, question.unit, t)}
          </p>
        </div>
      )}
    </div>
  );
}
