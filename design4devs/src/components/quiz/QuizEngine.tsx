/**
 * Generic Quiz Engine
 * 
 * A reusable quiz component that works with any QuizConfig.
 * Handles all quiz logic: state management, scoring, navigation.
 */

import { Check, RotateCcw, Wand2, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import { AnswerPicker } from "./AnswerPicker";
import {
  BaseZone,
  createInitialQuizState,
  QuizConfig,
  QuizState,
} from "./types";

interface QuizEngineProps<TZone extends BaseZone> {
  config: QuizConfig<TZone>;
}

export function QuizEngine<TZone extends BaseZone>({ config }: QuizEngineProps<TZone>) {
  const {
    zones,
    InteractiveComponent,
    IntroComponent,
    ZoneDisplayComponent,
    answerOptions,
    labels,
    themeColor,
  } = config;

  const [quiz, setQuiz] = useState<QuizState<TZone>>(createInitialQuizState<TZone>());
  const [recentlyFixed, setRecentlyFixed] = useState<TZone[]>([]);
  const [compareView, setCompareView] = useState<"before" | "after">("after");
  const answerPickerRef = useRef<HTMLDivElement>(null);

  // Scroll to answer picker on mobile when it appears
  useEffect(() => {
    if (quiz.pendingZone && answerPickerRef.current) {
      if (window.innerWidth < 1024) {
        answerPickerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [quiz.pendingZone]);

  const handleStart = useCallback(() => {
    setQuiz((prev) => ({ ...prev, started: true }));
  }, []);

  const handleZoneClick = useCallback(
    (id: string) => {
      if (quiz.fixedZones.has(id)) return;

      const zone = zones.find((z) => z.id === id);
      if (!zone) return;

      setQuiz((prev) => ({
        ...prev,
        pendingZone: zone,
        wrongGuess: false,
        wrongGuessAnswer: null,
      }));
    },
    [quiz.fixedZones, zones]
  );

  const handleAnswerGuess = useCallback(
    (guessedAnswer: string) => {
      if (!quiz.pendingZone) return;

      const isCorrect = guessedAnswer === quiz.pendingZone.correctAnswer;
      const zone = quiz.pendingZone;

      setRecentlyFixed((prev) => [zone, ...prev]);

      setQuiz((prev) => {
        const newFixed = new Set(prev.fixedZones);
        newFixed.add(zone.id);

        const showCelebration = newFixed.size === zones.length;

        return {
          ...prev,
          fixedZones: newFixed,
          highlightedZone: zone.id,
          showCelebration,
          pendingZone: isCorrect ? null : zone,
          wrongClicks: isCorrect ? prev.wrongClicks : prev.wrongClicks + 1,
          wrongGuess: !isCorrect,
          wrongGuessAnswer: isCorrect ? null : guessedAnswer,
        };
      });

      // Clear highlight after animation
      setTimeout(() => {
        setQuiz((prev) => ({ ...prev, highlightedZone: null }));
      }, 1500);
    },
    [quiz.pendingZone, zones.length]
  );

  const handleCloseModal = useCallback(() => {
    setQuiz((prev) => ({
      ...prev,
      pendingZone: null,
      wrongGuess: false,
      wrongGuessAnswer: null,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setQuiz({ ...createInitialQuizState<TZone>(), started: true });
    setRecentlyFixed([]);
  }, []);

  const fixedCount = quiz.fixedZones.size;
  const totalZones = zones.length;
  const progress = (fixedCount / totalZones) * 100;

  // Theme-based gradient classes
  const themeGradients: Record<string, string> = {
    ocean: "from-ocean-400 to-amethyst-600",
    amethyst: "from-amethyst-400 to-fuchsia-600",
    amber: "from-amber-400 to-orange-600",
    emerald: "from-emerald-400 to-teal-600",
    rose: "from-rose-400 to-pink-600",
    slate: "from-slate-400 to-gray-600",
  };

  // Start screen
  if (!quiz.started) {
    return <IntroComponent config={config} onStart={handleStart} />;
  }

  return (
    <div className="w-full bg-bg-primary min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-14 z-50 bg-bg-primary backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              {quiz.showCelebration ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl animate-bounce">🏆</span>
                  <div>
                    <span className="font-bold text-primary">{labels.celebrationTitle}</span>
                    <span className="text-secondary text-sm ml-2">
                      Score: {totalZones - quiz.wrongClicks}/{totalZones}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5 text-amber-500" />
                    <span className="font-semibold text-primary">{config.title}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-tertiary text-sm">
                    <Check className="w-3.5 h-3.5 text-ocean-500" />
                    <span className="font-bold text-primary">{fixedCount}</span>
                    <span className="text-secondary">/ {totalZones}</span>
                  </div>
                  {quiz.wrongClicks > 0 && (
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-sm text-red-500">
                      <Zap className="w-3.5 h-3.5" />
                      <span className="font-medium">-{quiz.wrongClicks}</span>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              {fixedCount > 0 && (
                <div className="btn-group">
                  <button
                    onClick={() => setCompareView("before")}
                    className={`btn btn-secondary btn-sm ${
                      compareView === "before" ? "bg-amber-500 text-white shadow-sm" : ""
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setCompareView("after")}
                    className={`btn btn-secondary btn-sm ${
                      compareView === "after" ? "bg-emerald-500 text-white shadow-sm" : ""
                    }`}
                  >
                    After
                  </button>
                </div>
              )}
              {quiz.showCelebration && (
                <Link to={ROUTES.HOME} className="btn btn-sm btn-primary">
                  <Check className="w-4 h-4" />
                  <span className="hidden sm:inline">Done</span>
                </Link>
              )}
              <button onClick={handleReset} className="btn btn-sm btn-secondary">
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>
          <div className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ease-out rounded-full bg-gradient-to-r ${themeGradients[themeColor]}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Instructions */}
        {fixedCount === 0 && !quiz.pendingZone && (
          <div className="mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl" />
            <div className="relative p-5 rounded-2xl border border-amber-200/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/25">
                  <span className="text-xl">{config.emoji}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1">{labels.missionTitle}</h3>
                  <p className="text-secondary leading-relaxed">{labels.missionDescription}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Content with Compare View */}
        {fixedCount > 0 ? (
          <div className="mb-6">
            <div
              className={`rounded-2xl overflow-hidden border-2 transition-colors ${
                compareView === "before" ? "border-amber-200" : "border-emerald-200"
              }`}
            >
              <InteractiveComponent
                fixedZones={compareView === "after" ? quiz.fixedZones : new Set()}
                onZoneClick={compareView === "after" ? handleZoneClick : () => {}}
                highlightedZone={compareView === "after" ? quiz.highlightedZone : null}
                pendingZone={compareView === "after" ? quiz.pendingZone?.id || null : null}
                zones={zones}
              />
            </div>
          </div>
        ) : (
          <InteractiveComponent
            fixedZones={quiz.fixedZones}
            onZoneClick={handleZoneClick}
            highlightedZone={quiz.highlightedZone}
            pendingZone={quiz.pendingZone?.id || null}
            zones={zones}
          />
        )}

        {/* Answer Picker Modal */}
        {quiz.pendingZone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal} />
            <div
              ref={answerPickerRef}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 fade-in duration-200"
            >
              <AnswerPicker
                zone={quiz.pendingZone}
                answerOptions={answerOptions}
                wrongGuess={quiz.wrongGuess}
                wrongGuessAnswer={quiz.wrongGuessAnswer}
                onAnswerGuess={handleAnswerGuess}
                onClose={handleCloseModal}
                labels={labels}
                ZoneDisplayComponent={ZoneDisplayComponent}
              />
            </div>
          </div>
        )}

        {/* Fixed Zones List */}
        {recentlyFixed.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-lg shadow-gray-500/25">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">{labels.progressTitle}</h3>
                <p className="text-xs text-secondary">
                  {recentlyFixed.length} of {totalZones} {labels.zoneNamePlural} fixed
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentlyFixed.map((zone, index) => (
                <div
                  key={zone.id}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 
                    border border-border-muted rounded-xl bg-bg-secondary p-4
                    ${
                      index === 0 && quiz.highlightedZone === zone.id
                        ? "animate-in slide-in-from-top duration-1000 ring-2 ring-ocean-400 ring-offset-2 "
                        : ""
                    }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{zone.emoji}</span>
                    <span className="font-bold text-primary">{zone.correctAnswer}</span>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">{zone.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
