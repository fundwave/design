/**
 * Config-Driven Quiz System Types
 * 
 * Define quizzes using configuration instead of custom components.
 * Zones are identified by selectors and transforms are applied dynamically.
 */

import { CSSProperties, ReactNode } from "react";

// ============================================================================
// Transform Types - How to change a zone from broken to fixed
// ============================================================================

/**
 * Apply different CSS classes for broken/fixed states
 */
export interface ClassTransform {
  type: "class";
  broken: string;
  fixed: string;
}

/**
 * Apply different inline styles for broken/fixed states
 */
export interface StyleTransform {
  type: "style";
  broken: CSSProperties;
  fixed: CSSProperties;
}

/**
 * Swap content entirely (HTML string or text)
 */
export interface ContentTransform {
  type: "content";
  broken: string;
  fixed: string;
}

/**
 * Change an HTML attribute
 */
export interface AttributeTransform {
  type: "attribute";
  attr: string;
  broken: string;
  fixed: string;
}

/**
 * Show/hide elements
 */
export interface VisibilityTransform {
  type: "visibility";
  broken: "visible" | "hidden";
  fixed: "visible" | "hidden";
}

/**
 * Replace children elements (for more complex structural changes)
 */
export interface ChildrenTransform {
  type: "children";
  broken: ReactNode;
  fixed: ReactNode;
}

/**
 * Union of all transform types
 */
export type ZoneTransform =
  | ClassTransform
  | StyleTransform
  | ContentTransform
  | AttributeTransform
  | VisibilityTransform
  | ChildrenTransform;

// ============================================================================
// Zone Configuration
// ============================================================================

/**
 * A configurable zone definition
 * 
 * Zones can use either of two patterns:
 * 1. Transform-based: Populate `transforms` array with class/style/children transforms
 *    that automatically apply when zone is fixed. Good for simple CSS changes.
 * 2. ZoneContent-based: Leave `transforms` empty and use <ZoneContent> component
 *    in templates with broken/fixed ReactNodes. Better for complex content swaps.
 */
export interface ConfigZone {
  /** Unique identifier */
  id: string;
  /** Display name for the zone */
  name: string;
  /** Emoji icon */
  emoji: string;
  /** CSS selector or data-zone attribute value to target */
  selector: string;
  /** The correct answer for this zone */
  correctAnswer: string;
  /** Explanation shown after answering */
  description: string;
  /** Hint shown in the picker */
  previewHint: string;
  /** 
   * Transforms to apply when zone is fixed.
   * Can be empty if using ZoneContent pattern in templates instead.
   */
  transforms: ZoneTransform[];
  /** Optional: clickable area bounds for canvas overlay (relative %) */
  bounds?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

// ============================================================================
// Quiz Configuration
// ============================================================================

/**
 * Answer option for config quizzes
 */
export interface ConfigAnswerOption {
  name: string;
  description: string;
  emoji?: string;
  category?: string;
}

/**
 * Theme configuration
 */
export type QuizTheme = "ocean" | "amethyst" | "amber" | "emerald" | "rose" | "slate";

/**
 * Labels for UI customization
 */
export interface ConfigQuizLabels {
  zoneName: string;
  zoneNamePlural: string;
  answerName: string;
  answerNamePlural: string;
  progressTitle: string;
  missionTitle: string;
  missionDescription: string;
  celebrationTitle: string;
  celebrationSubtitle: string;
  pickerTitle: string;
  pickerSubtitle: string;
}

/**
 * Intro screen configuration
 */
export interface IntroConfig {
  badge: string;
  badgeIcon?: "trophy" | "eye" | "sparkles" | "target";
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    emoji: string;
    title: string;
    description: string;
  }>;
  buttonText: string;
}

/**
 * Complete configuration for a config-driven quiz
 */
export interface ConfigQuiz {
  /** Unique identifier */
  id: string;
  /** Display title */
  title: string;
  /** Emoji icon */
  emoji: string;
  /** Short description */
  description: string;
  /** URL slug */
  slug: string;
  /** Theme color */
  theme: QuizTheme;
  /** Intro screen config */
  intro: IntroConfig;
  /** UI labels */
  labels: ConfigQuizLabels;
  /** All zones in the quiz */
  zones: ConfigZone[];
  /** All answer options */
  answerOptions: ConfigAnswerOption[];
  /** 
   * Base UI template - either:
   * - A React component that renders the UI with data-zone attributes
   * - An HTML string template
   */
  baseTemplate: "dashboard" | "landing-page" | "form" | "custom";
  /** Custom CSS to inject */
  customStyles?: string;
}

// ============================================================================
// Runtime State
// ============================================================================

export interface ConfigQuizState {
  started: boolean;
  fixedZones: Set<string>;
  highlightedZone: string | null;
  showCelebration: boolean;
  wrongClicks: number;
  pendingZone: ConfigZone | null;
  wrongGuess: boolean;
  wrongGuessAnswer: string | null;
}

export const createInitialConfigQuizState = (): ConfigQuizState => ({
  started: false,
  fixedZones: new Set(),
  highlightedZone: null,
  showCelebration: false,
  wrongClicks: 0,
  pendingZone: null,
  wrongGuess: false,
  wrongGuessAnswer: null,
});
