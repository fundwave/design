/**
 * Config Answer Picker
 * 
 * Answer selection modal for config-driven quizzes.
 * Shows a screenshot of the actual zone element and lets users pick an answer.
 */

import { Lightbulb, X, Loader2 } from "lucide-react";

import { ConfigAnswerOption, ConfigQuizLabels, ConfigZone } from "./config-types";

interface ConfigAnswerPickerProps {
  zone: ConfigZone;
  answerOptions: ConfigAnswerOption[];
  wrongGuess: boolean;
  wrongGuessAnswer: string | null;
  onAnswerGuess: (answer: string) => void;
  onClose: () => void;
  labels: ConfigQuizLabels;
  /** Screenshot of the zone element captured via html2canvas */
  zoneScreenshot?: string | null;
  /** Whether the screenshot is still loading */
  screenshotLoading?: boolean;
}

export function ConfigAnswerPicker({
  zone,
  answerOptions,
  wrongGuess,
  wrongGuessAnswer,
  onAnswerGuess,
  onClose,
  labels,
  zoneScreenshot,
  screenshotLoading,
}: ConfigAnswerPickerProps) {
  return (
    <div className="bg-bg-secondary rounded-xl border border-border overflow-hidden shadow-lg">
      {/* Header with close button */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-sm">
            <Lightbulb className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-primary">{labels.pickerTitle}</h3>
            <p className="text-xs text-secondary">{labels.pickerSubtitle}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 text-text-secondary hover:text-text-primary cursor-pointer">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Screenshot Preview - auto-sizing container */}
      <div className="bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-4 overflow-auto">
        {screenshotLoading ? (
          <div className="flex items-center gap-2 text-text-secondary py-8">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm">Capturing element...</span>
          </div>
        ) : zoneScreenshot ? (
          <div className="max-h-[40vh] overflow-auto rounded-lg shadow-md">
            <img 
              src={zoneScreenshot} 
              alt="Element preview"
              className="max-w-full h-auto object-contain"
              style={{ maxHeight: '40vh' }}
            />
          </div>
        ) : (
          <div className="text-6xl py-8">{zone.emoji}</div>
        )}
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
                    ? "border-emerald-200 bg-emerald-50"
                    : isWrongGuess
                      ? "border-amber-200 bg-amber-50"
                      : wrongGuess
                        ? "border-border opacity-50 cursor-not-allowed"
                        : "bg-bg-secondary border-border cursor-pointer hover:border-violet-500 hover:bg-violet-50 hover:shadow-md"
                }`}
              >
                <div
                  className={`font-semibold transition-colors flex items-center gap-2 ${
                    wrongGuess && isCorrectAnswer
                      ? "text-emerald-600"
                      : isWrongGuess
                        ? "text-amber-600"
                        : "text-text-primary group-hover:text-violet-700"
                  }`}
                >
                  {option.emoji && <span>{option.emoji}</span>}
                  <span>{option.name}</span>
                  {wrongGuess && isCorrectAnswer && <span>✓</span>}
                  {isWrongGuess && <span>✗</span>}
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
                {option.category && (
                  <div className="mt-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-bg-tertiary text-text-tertiary">
                      {option.category}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Wrong guess explanation */}
        {wrongGuess && (
          <div className="mt-4 p-4 rounded-xl border-2 border-border shadow-md bg-bg-secondary">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{zone.emoji}</span>
              <span className="font-bold text-lg text-primary">{zone.correctAnswer}</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed mb-3">{zone.description}</p>
            <button onClick={onClose} className="btn btn-primary">
              Got it, continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
