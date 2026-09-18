/**
 * Generic Answer Picker Component
 * 
 * Displays answer options for any quiz type.
 */

import { ComponentType } from "react";
import { Lightbulb, X } from "lucide-react";

import {
  AnswerOption,
  BaseZone,
  QuizLabels,
  ZoneDisplayProps,
} from "./types";

interface AnswerPickerProps<TZone extends BaseZone> {
  zone: TZone;
  answerOptions: AnswerOption[];
  wrongGuess: boolean;
  wrongGuessAnswer: string | null;
  onAnswerGuess: (answer: string) => void;
  onClose: () => void;
  labels: QuizLabels;
  ZoneDisplayComponent: ComponentType<ZoneDisplayProps<TZone>>;
}

export function AnswerPicker<TZone extends BaseZone>({
  zone,
  answerOptions,
  wrongGuess,
  wrongGuessAnswer,
  onAnswerGuess,
  onClose,
  labels,
  ZoneDisplayComponent,
}: AnswerPickerProps<TZone>) {
  return (
    <div className="bg-bg-secondary rounded-xl border border-border overflow-hidden shadow-lg">
      {/* Header with zone preview */}
      <div className="relative border-b border-border">
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-sm">
            <Lightbulb className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-primary">{labels.pickerTitle}</h3>
            <p className="text-xs text-secondary">{labels.pickerSubtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 text-text-secondary hover:text-text-primary cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full bg-bg-tertiary p-4">
          <ZoneDisplayComponent zone={zone} isFixed={false} />
        </div>
      </div>

      {/* Answer options */}
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {answerOptions.map((option) => {
            const isCorrectAnswer = option.name === zone.correctAnswer;
            const isWrongGuess = wrongGuessAnswer === option.name;

            return (
              <button
                key={option.name}
                onClick={() => !wrongGuess && onAnswerGuess(option.name)}
                disabled={wrongGuess}
                className={`group text-left p-3 rounded-xl border-2 transition-all ${
                  wrongGuess && isCorrectAnswer
                    ? "border-emerald-200"
                    : isWrongGuess
                      ? "border-amber-200"
                      : wrongGuess
                        ? "border-border opacity-50 cursor-not-allowed"
                        : "bg-bg-secondary border-border cursor-pointer hover:border-violet-500 hover:bg-violet-50 hover:shadow-md"
                }`}
              >
                <div
                  className={`font-semibold transition-colors ${
                    wrongGuess && isCorrectAnswer
                      ? "text-emerald-600"
                      : isWrongGuess
                        ? "text-amber-600"
                        : "text-text-primary group-hover:text-violet-700"
                  }`}
                >
                  {option.emoji && <span className="mr-2">{option.emoji}</span>}
                  {option.name}
                  {wrongGuess && isCorrectAnswer && " ✓"}
                  {isWrongGuess && " ✗"}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    wrongGuess && isCorrectAnswer
                      ? "text-emerald-600/90"
                      : isWrongGuess
                        ? "text-amber-600/90"
                        : "text-text-secondary"
                  }`}
                >
                  {option.description}
                </div>
              </button>
            );
          })}
        </div>

        {/* Wrong guess explanation */}
        {wrongGuess && (
          <div className="mt-4 p-4 rounded-xl border-2 border-border shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{zone.emoji}</span>
              <span className="font-bold text-lg">{zone.correctAnswer}</span>
            </div>
            <p className="text-sm leading-relaxed mb-3">{zone.description}</p>
            <button onClick={onClose} className="btn btn-primary">
              Got it, continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
