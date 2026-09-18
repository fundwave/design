import { ChevronRight, Clock, RotateCcw } from "lucide-react";
import { ReactNode } from "react";

import { GamePhase } from "../types/game";

// Re-export for convenience
export type { GamePhase };

/**
 * Intro phase - shows emoji, title, description, and start button
 */
interface IntroPhaseProps {
  emoji: string;
  title: string;
  description: string;
  onStart: () => void;
}

export function IntroPhase({ emoji, title, description, onStart }: IntroPhaseProps) {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ocean-500/10 mb-6">
        <span className="text-3xl">{emoji}</span>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-secondary mb-8 max-w-sm mx-auto">{description}</p>
      <button onClick={onStart} className="btn btn-primary btn-lg">
        Start <ChevronRight className="btn-icon" />
      </button>
    </div>
  );
}

/**
 * Task header shown during bad/good phases
 */
interface TaskHeaderProps {
  task: string;
  variant: "bad" | "good";
  extra?: ReactNode;
}

export function TaskHeader({ task, variant, extra }: TaskHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-5 pb-4 border-b border-border/50">
      <span className="font-semibold text-primary">{task}</span>
      <div className="flex items-center gap-3">
        {extra}
        <span className={`${variant === "bad" ? "bg-warning-bg text-warning-text" : "bg-success-bg text-success-text"} px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5`}>
          <Clock size={12} />
          <span className="animate-pulse">Recording</span>
        </span>
      </div>
    </div>
  );
}

/**
 * Result phase - shows time result and continue button (after bad phase)
 */
interface ResultPhaseProps {
  time: number | null;
  message: string;
  buttonText: string;
  onContinue: () => void;
  formatTime: (ms: number) => string;
  extra?: ReactNode;
}

export function ResultPhase({ time, message, buttonText, onContinue, formatTime, extra }: ResultPhaseProps) {
  return (
    <div className="text-center py-10">
      <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-warning-bg/50 mb-6">
        <p className="text-5xl font-bold text-warning-text mb-1">{time && formatTime(time)}</p>
        <p className="text-warning-text/70 text-sm font-medium">Your time</p>
      </div>
      <p className="text-secondary mb-8 max-w-sm mx-auto">{message}</p>
      {extra}
      <button onClick={onContinue} className="btn btn-primary btn-lg">
        {buttonText} <ChevronRight size={18} />
      </button>
    </div>
  );
}

/**
 * Comparison phase - shows before/after times and reset button (done phase)
 */
interface ComparisonPhaseProps {
  badTime: number | null;
  goodTime: number | null;
  badLabel: string;
  goodLabel: string;
  message: string;
  onReset: () => void;
  formatTime: (ms: number) => string;
  extra?: ReactNode;
}

export function ComparisonPhase({ badTime, goodTime, badLabel, goodLabel, message, onReset, formatTime, extra }: ComparisonPhaseProps) {
  return (
    <div className="text-center py-8">
      <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto">
        <div className="p-5 rounded-xl bg-error-bg/50 border border-error-border/30">
          <p className="text-3xl font-bold text-error-text mb-1">{badTime && formatTime(badTime)}</p>
          <p className="text-error-text/70 text-sm font-medium">{badLabel}</p>
        </div>
        <div className="p-5 rounded-xl bg-success-bg/50 border border-success-border/30">
          <p className="text-3xl font-bold text-success-text mb-1">{goodTime && formatTime(goodTime)}</p>
          <p className="text-success-text/70 text-sm font-medium">{goodLabel}</p>
        </div>
      </div>
      <p className="text-secondary mb-8 font-medium">{message}</p>
      {extra}
      <button onClick={onReset} className="btn btn-secondary">
        <RotateCcw size={16} /> Try Again
      </button>
    </div>
  );
}

/**
 * Game card wrapper for the interactive demo
 */
interface GameCardProps {
  children: ReactNode;
  maxWidth?: "sm" | "md";
}

export function GameCard({ children, maxWidth = "sm" }: GameCardProps) {
  return (
    <div className={`${maxWidth === "md" ? "max-w-md" : "max-w-sm"} mx-auto`}>
      <div className="bg-bg-secondary rounded-2xl p-6 border border-border/50 shadow-sm">{children}</div>
    </div>
  );
}
