/**
 * Config Quiz Engine
 * 
 * Renders quizzes based on configuration, using the ZoneRenderer system.
 */

import { Check, RotateCcw, Wand2, Zap, ArrowRight, Sparkles, Trophy, Eye, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import { STORAGE_KEYS } from "../../constants/storage-keys";
import { CONFIG_QUIZ_REGISTRY } from "../../quizzes/registry";
import {
  ConfigQuiz,
  ConfigQuizState,
  ConfigZone,
  createInitialConfigQuizState,
} from "./config-types";
import { ConfigAnswerPicker } from "./ConfigAnswerPicker";
import { ZoneProvider } from "./ZoneRenderer";

// ============================================================================
// Config Quiz Engine
// ============================================================================

interface ConfigQuizEngineProps {
  config: ConfigQuiz;
  /** The base UI component to render */
  Template: React.ComponentType;
}

export function ConfigQuizEngine({ config, Template }: ConfigQuizEngineProps) {
  const { zones, answerOptions, labels, theme, intro } = config;
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<ConfigQuizState>(createInitialConfigQuizState());
  const [recentlyFixed, setRecentlyFixed] = useState<ConfigZone[]>([]);
  const [compareView, setCompareView] = useState<"before" | "after">("after");
  const [zoneScreenshot, setZoneScreenshot] = useState<string | null>(null);
  const [screenshotLoading, setScreenshotLoading] = useState(false);
  const answerPickerRef = useRef<HTMLDivElement>(null);

  // Calculate current quiz index and find next quiz
  const currentQuizIndex = CONFIG_QUIZ_REGISTRY.findIndex(q => q.id === config.id);
  const nextQuiz = currentQuizIndex >= 0 && currentQuizIndex < CONFIG_QUIZ_REGISTRY.length - 1
    ? CONFIG_QUIZ_REGISTRY[currentQuizIndex + 1]
    : null;

  // Scroll to answer picker on mobile
  useEffect(() => {
    if (quiz.pendingZone && answerPickerRef.current && window.innerWidth < 1024) {
      answerPickerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [quiz.pendingZone]);

  const handleStart = useCallback(() => {
    setQuiz((prev) => ({ ...prev, started: true }));
  }, []);

  const handleZoneClick = useCallback(
    (id: string, screenshot: string | null) => {
      if (quiz.fixedZones.has(id)) return;
      const zone = zones.find((z) => z.id === id);
      if (!zone) return;
      
      // Set the screenshot received from the Zone component
      setZoneScreenshot(screenshot);
      setScreenshotLoading(false);
      
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
        const isComplete = newFixed.size === zones.length;

        // Save score when quiz is completed
        if (isComplete) {
          const score = zones.length - (isCorrect ? prev.wrongClicks : prev.wrongClicks + 1);
          saveQuizScore(config.id, score, zones.length);
        }

        return {
          ...prev,
          fixedZones: newFixed,
          highlightedZone: zone.id,
          showCelebration: isComplete,
          pendingZone: isCorrect ? null : zone,
          wrongClicks: isCorrect ? prev.wrongClicks : prev.wrongClicks + 1,
          wrongGuess: !isCorrect,
          wrongGuessAnswer: isCorrect ? null : guessedAnswer,
        };
      });

      setTimeout(() => {
        setQuiz((prev) => ({ ...prev, highlightedZone: null }));
      }, 1500);
    },
    [quiz.pendingZone, zones.length, config.id]
  );

  const handleCloseModal = useCallback(() => {
    setQuiz((prev) => ({
      ...prev,
      pendingZone: null,
      wrongGuess: false,
      wrongGuessAnswer: null,
    }));
    setZoneScreenshot(null);
    setScreenshotLoading(false);
  }, []);

  const handleReset = useCallback(() => {
    setQuiz({ ...createInitialConfigQuizState(), started: true });
    setRecentlyFixed([]);
  }, []);

  const fixedCount = quiz.fixedZones.size;
  const totalZones = zones.length;
  const progress = (fixedCount / totalZones) * 100;

  const themeGradients: Record<string, string> = {
    ocean: "from-ocean-400 to-amethyst-600",
    amethyst: "from-amethyst-400 to-fuchsia-600",
    amber: "from-amber-400 to-orange-600",
    emerald: "from-emerald-400 to-teal-600",
    rose: "from-rose-400 to-pink-600",
    slate: "from-slate-400 to-gray-600",
  };

  // Auto-start quiz (no intro screen)
  useEffect(() => {
    if (!quiz.started) {
      setQuiz((prev) => ({ ...prev, started: true }));
    }
  }, [quiz.started]);

  // Determine which fixed zones to show based on compare view
  const displayFixedZones = compareView === "after" ? quiz.fixedZones : new Set<string>();

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
                    className={`btn btn-secondary btn-sm ${compareView === "before" ? "bg-amber-500 text-white shadow-sm" : ""}`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setCompareView("after")}
                    className={`btn btn-secondary btn-sm ${compareView === "after" ? "bg-emerald-500 text-white shadow-sm" : ""}`}
                  >
                    After
                  </button>
                </div>
              )}
              {quiz.showCelebration && (
                <>
                  {nextQuiz && (
                    <button
                      onClick={() => navigate(`/quiz/${nextQuiz.slug}`)}
                      className="btn btn-sm btn-primary"
                    >
                      Next Quiz
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                  <Link to="/quizzes" className="btn btn-sm btn-secondary">
                    <Check className="w-4 h-4" />
                    <span className="hidden sm:inline">All Quizzes</span>
                  </Link>
                </>
              )}
              <button onClick={handleReset} className="btn btn-sm btn-secondary">
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>
          <div className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ease-out rounded-full bg-gradient-to-r ${themeGradients[theme]}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Mission Instructions */}
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

        {/* Interactive Content with Zone Provider */}
        <div className={`mb-6 ${fixedCount > 0 ? `rounded-2xl overflow-hidden border-2 transition-colors ${compareView === "before" ? "border-amber-200" : "border-emerald-200"}` : ""}`}>
          <ZoneProvider
            zones={zones}
            fixedZones={displayFixedZones}
            highlightedZone={compareView === "after" ? quiz.highlightedZone : null}
            pendingZone={compareView === "after" ? quiz.pendingZone?.id || null : null}
            onZoneClick={compareView === "after" ? handleZoneClick : () => {}}
          >
            <Template />
          </ZoneProvider>
        </div>

        {/* Answer Picker Modal */}
        {quiz.pendingZone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal} />
            <div
              ref={answerPickerRef}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 fade-in duration-200"
            >
              <ConfigAnswerPicker
                zone={quiz.pendingZone}
                answerOptions={answerOptions}
                wrongGuess={quiz.wrongGuess}
                wrongGuessAnswer={quiz.wrongGuessAnswer}
                onAnswerGuess={handleAnswerGuess}
                onClose={handleCloseModal}
                labels={labels}
                zoneScreenshot={zoneScreenshot}
                screenshotLoading={screenshotLoading}
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
                    border border-border-muted bg-bg-secondary p-4
                    ${index === 0 && quiz.highlightedZone === zone.id ? "animate-in slide-in-from-top duration-1000 ring-2 ring-ocean-400 ring-offset-2" : ""}`}
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

// ============================================================================
// Config Quiz Intro (generated from config)
// ============================================================================

interface ConfigQuizIntroProps {
  config: ConfigQuiz;
  onStart: () => void;
}

function ConfigQuizIntro({ config, onStart }: ConfigQuizIntroProps) {
  const { intro, emoji, title, zones, theme } = config;

  const BadgeIcon = {
    trophy: Trophy,
    eye: Eye,
    sparkles: Sparkles,
    target: Wand2,
  }[intro.badgeIcon || "trophy"];

  const themeColors: Record<string, string> = {
    ocean: "text-ocean-500 bg-ocean-500/10 border-ocean-500/20",
    amethyst: "text-amethyst-500 bg-amethyst-500/10 border-amethyst-500/20",
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    rose: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    slate: "text-slate-500 bg-slate-500/10 border-slate-500/20",
  };

  return (
    <div className="w-full bg-bg-primary min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 pointer-events-none grid-pattern" />
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${themeColors[theme]}`}>
          <BadgeIcon className="w-4 h-4" />
          <span className="text-sm font-medium">{intro.badge}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-primary">
          {emoji} {title}
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed mb-4">
          {intro.subtitle.replace("{count}", String(zones.length))}
        </p>
        <p className="text-base text-secondary max-w-xl mx-auto leading-relaxed mb-10">
          {intro.description}
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {intro.features.map((feature, i) => (
            <div key={i} className="bg-bg-secondary/80 backdrop-blur rounded-2xl p-6 border border-border/50">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <div className="font-semibold text-primary mb-1">{feature.title}</div>
              <div className="text-sm text-secondary">{feature.description}</div>
            </div>
          ))}
        </div>

        <button onClick={onStart} className="group btn-gradient-ocean text-lg px-8 py-4">
          <Sparkles className="w-5 h-5" />
          {intro.buttonText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// Score Management Helpers
// ============================================================================

interface QuizScore {
  quizId: string;
  score: number;
  total: number;
  timestamp: number;
}

interface QuizScores {
  [quizId: string]: QuizScore;
}

function saveQuizScore(quizId: string, score: number, total: number) {
  try {
    const scores: QuizScores = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_SCORES) || '{}');
    scores[quizId] = {
      quizId,
      score,
      total,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEYS.QUIZ_SCORES, JSON.stringify(scores));
  } catch (error) {
    console.error('Failed to save quiz score:', error);
  }
}

export function getQuizScores(): QuizScores {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_SCORES) || '{}');
  } catch (error) {
    console.error('Failed to load quiz scores:', error);
    return {};
  }
}

export function getTotalScore(): { score: number; total: number } {
  const scores = getQuizScores();
  const allScores = Object.values(scores);
  return {
    score: allScores.reduce((sum, s) => sum + s.score, 0),
    total: allScores.reduce((sum, s) => sum + s.total, 0),
  };
}
