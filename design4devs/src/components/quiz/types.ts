/**
 * Generic Quiz System Types
 * 
 * This module defines the core types for a reusable quiz system that can support
 * multiple quiz types (UX Detective, Design Principles, Accessibility, etc.)
 */

import { ComponentType, ReactNode } from "react";

// ============================================================================
// Core Quiz Configuration
// ============================================================================

/**
 * Base configuration for any quiz
 */
export interface QuizConfig<TZone extends BaseZone = BaseZone> {
  /** Unique identifier for the quiz */
  id: string;
  /** Display title */
  title: string;
  /** Emoji icon for the quiz */
  emoji: string;
  /** Short description */
  description: string;
  /** URL slug for routing */
  slug: string;
  /** Theme color for styling */
  themeColor: QuizThemeColor;
  /** All violation/target zones in the quiz */
  zones: TZone[];
  /** All possible answer options */
  answerOptions: AnswerOption[];
  /** Component that renders the interactive content */
  InteractiveComponent: ComponentType<InteractiveComponentProps<TZone>>;
  /** Component for the intro/start screen */
  IntroComponent: ComponentType<IntroComponentProps>;
  /** Component to display a zone in the answer picker */
  ZoneDisplayComponent: ComponentType<ZoneDisplayProps<TZone>>;
  /** Custom labels and text */
  labels: QuizLabels;
  /** Optional: Problem statements for multi-select mode */
  problemStatements?: ProblemStatement[];
}

/**
 * Theme colors available for quizzes
 */
export type QuizThemeColor = 
  | "ocean" 
  | "amethyst" 
  | "amber" 
  | "emerald" 
  | "rose" 
  | "slate";

/**
 * Customizable labels for quiz UI
 */
export interface QuizLabels {
  /** What to call the clickable areas (e.g., "violations", "issues", "problems") */
  zoneName: string;
  zoneNamePlural: string;
  /** What to call the answers (e.g., "law", "principle", "rule") */
  answerName: string;
  answerNamePlural: string;
  /** Progress section title */
  progressTitle: string;
  /** Mission/instruction text */
  missionTitle: string;
  missionDescription: string;
  /** Celebration messages */
  celebrationTitle: string;
  celebrationSubtitle: string;
  /** Picker modal */
  pickerTitle: string;
  pickerSubtitle: string;
}

// ============================================================================
// Zone Types (What the user clicks on)
// ============================================================================

/**
 * Base zone that all quiz zones must extend
 */
export interface BaseZone {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Emoji icon */
  emoji: string;
  /** The correct answer for this zone */
  correctAnswer: string;
  /** Explanation shown after answering */
  description: string;
  /** Hint shown in the picker */
  previewHint: string;
}

/**
 * Extended zone for UX-type quizzes with law associations
 */
export interface UXZone extends BaseZone {
  /** The UX law this violates */
  law: string;
  /** Related problem statements (for multi-select mode) */
  correctProblems?: string[];
}

// ============================================================================
// Answer Types
// ============================================================================

/**
 * An answer option in the picker
 */
export interface AnswerOption {
  /** Unique name/identifier */
  name: string;
  /** Short description of this answer */
  description: string;
  /** Optional emoji */
  emoji?: string;
  /** Optional category for grouping */
  category?: string;
}

/**
 * Problem statement for multi-select quiz modes
 */
export interface ProblemStatement {
  id: string;
  text: string;
  emoji: string;
}

// ============================================================================
// Component Props
// ============================================================================

/**
 * Props for the main interactive component (e.g., the dashboard)
 */
export interface InteractiveComponentProps<TZone extends BaseZone = BaseZone> {
  /** IDs of zones that have been fixed/completed */
  fixedZones: Set<string>;
  /** Callback when a zone is clicked */
  onZoneClick: (id: string) => void;
  /** ID of the currently highlighted zone (after correct answer) */
  highlightedZone: string | null;
  /** ID of the currently pending zone (waiting for answer) */
  pendingZone: string | null;
  /** All zones in the quiz (for reference) */
  zones: TZone[];
}

/**
 * Props for the intro/start screen component
 */
export interface IntroComponentProps {
  /** Quiz configuration for displaying info */
  config: QuizConfig;
  /** Callback to start the quiz */
  onStart: () => void;
}

/**
 * Props for displaying a zone in the answer picker
 */
export interface ZoneDisplayProps<TZone extends BaseZone = BaseZone> {
  /** The zone to display */
  zone: TZone;
  /** Whether this zone is in its "fixed" state */
  isFixed: boolean;
}

// ============================================================================
// Quiz State
// ============================================================================

/**
 * Runtime state for an active quiz
 */
export interface QuizState<TZone extends BaseZone = BaseZone> {
  /** Whether the quiz has started */
  started: boolean;
  /** IDs of completed zones */
  fixedZones: Set<string>;
  /** Currently highlighted zone (after correct answer) */
  highlightedZone: string | null;
  /** Show celebration screen */
  showCelebration: boolean;
  /** Number of wrong guesses (for scoring) */
  wrongClicks: number;
  /** Zone waiting for an answer */
  pendingZone: TZone | null;
  /** Whether the last guess was wrong */
  wrongGuess: boolean;
  /** The wrong answer that was guessed */
  wrongGuessAnswer: string | null;
}

/**
 * Create initial state for a quiz
 */
export function createInitialQuizState<TZone extends BaseZone>(): QuizState<TZone> {
  return {
    started: false,
    fixedZones: new Set(),
    highlightedZone: null,
    showCelebration: false,
    wrongClicks: 0,
    pendingZone: null,
    wrongGuess: false,
    wrongGuessAnswer: null,
  };
}

// ============================================================================
// Registry Types
// ============================================================================

/**
 * Quiz registry entry for lazy loading (component-based)
 */
export interface QuizRegistryEntry {
  id: string;
  title: string;
  emoji: string;
  description: string;
  slug: string;
  themeColor: QuizThemeColor;
  /** Lazy loader for the full config */
  loadConfig: () => Promise<{ default: QuizConfig }>;
}

/**
 * Config-driven quiz registry entry
 */
export interface ConfigQuizRegistryEntry {
  id: string;
  title: string;
  emoji: string;
  description: string;
  slug: string;
  themeColor: QuizThemeColor;
  /** Lazy loader that returns config + template component */
  loadQuiz: () => Promise<{
    config: import("./config-types").ConfigQuiz;
    Template: React.ComponentType;
  }>;
}

