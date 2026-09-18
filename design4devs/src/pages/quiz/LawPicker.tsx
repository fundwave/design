import { Check, Lightbulb, X } from "lucide-react";

import { ZoneDisplay } from "./ZoneComponents";
import { ALL_LAWS, ViolationZone } from "./quiz-types";

interface LawPickerProps {
  pendingZone: ViolationZone;
  wrongGuess: boolean;
  wrongGuessLaw: string | null;
  onLawGuess: (law: string) => void;
  onClose: () => void;
}

export function LawPicker({ pendingZone, wrongGuess, wrongGuessLaw, onLawGuess, onClose }: LawPickerProps) {
  return (
    <div className="bg-bg-secondary rounded-xl border border-border overflow-hidden shadow-lg">
      {/* Full-width element display at top */}
      <div className="relative border-b border-border">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-sm">
            <Lightbulb className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-primary">Identify the UX Law</h3>
            <p className="text-xs text-secondary">Which design principle is being violated?</p>
          </div>
          <button onClick={onClose} className="p-2 text-text-secondary hover:text-text-primary cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full bg-bg-tertiary p-4">
          <ZoneDisplay zoneId={pendingZone.id} isFixed={false} />
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {ALL_LAWS.map((law) => {
            const isCorrectAnswer = law.name === pendingZone.law;
            const isWrongGuess = wrongGuessLaw === law.name;

            return (
              <button
                key={law.name}
                onClick={() => !wrongGuess && onLawGuess(law.name)}
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
                    wrongGuess && isCorrectAnswer ? "text-emerald-600" : isWrongGuess ? "text-amber-600" : "text-text-primary group-hover:text-violet-700"
                  }`}
                >
                  {law.name}
                  {wrongGuess && isCorrectAnswer && " ✓"}
                  {isWrongGuess && " ✗"}
                </div>
                <div className={`text-xs mt-1 ${wrongGuess && isCorrectAnswer ? "text-emerald-600/90" : isWrongGuess ? "text-amber-600/90" : "text-text-secondary"}`}>
                  {law.description}
                </div>
              </button>
            );
          })}
        </div>
        {wrongGuess && (
          <div className="mt-4 p-4 rounded-xl border-2 border-border shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{pendingZone.emoji}</span>
              <span className="font-bold text-lg">{pendingZone.law}</span>
            </div>
            <p className="text-sm leading-relaxed mb-3">{pendingZone.description}</p>

            <button onClick={onClose} className="btn btn-primary">
              Got it, continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
