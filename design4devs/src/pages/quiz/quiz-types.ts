/**
 * Types and constants for the UX Detective Quiz
 */

// Problem statements for multi-select quiz
export interface ProblemStatement {
  id: string;
  text: string;
  emoji: string;
}

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  { id: "too-many-options", text: "Too many options overwhelming the user", emoji: "🎰" },
  { id: "unexpected-position", text: "Element is placed in an unexpected location", emoji: "📍" },
  { id: "poor-grouping", text: "Related items are scattered or separated", emoji: "🧩" },
  { id: "inconsistent-style", text: "Similar elements have different visual styles", emoji: "🎭" },
  { id: "wrong-colors", text: "Colors convey the wrong meaning (e.g., red for success)", emoji: "🎨" },
  { id: "hard-to-click", text: "Buttons or links are too small to click easily", emoji: "👆" },
  { id: "no-breathing-room", text: "Not enough space between elements", emoji: "📦" },
  { id: "confusing-hierarchy", text: "Text sizes don't reflect content importance", emoji: "📊" },
  { id: "unfamiliar-pattern", text: "Layout doesn't match common website conventions", emoji: "🤔" },
  { id: "poor-alignment", text: "Elements are not aligned or visually balanced", emoji: "📐" }
];

// Define all the clickable violation zones
export interface ViolationZone {
  id: string;
  name: string;
  emoji: string;
  law: string;
  description: string;
  correctProblems: string[]; // IDs of correct problem statements
  previewHint: string; // Visual hint about what to look for
}

export const VIOLATION_ZONES: ViolationZone[] = [
  {
    id: "header-buttons",
    name: "Too Many Header Choices",
    emoji: "⏳",
    law: "Hick's Law",
    description: "More header buttons = longer decisions. The toolbar had 8 actions when 2-3 would do.",
    correctProblems: ["too-many-options"],
    previewHint: "Look at the header bar with all the icon buttons"
  },
  {
    id: "logo-position",
    name: "Unexpected Logo Position",
    emoji: "🌍",
    law: "Jakob's Law",
    description: "Logos belong at the top-left. Users expect this from every other website they visit.",
    correctProblems: ["unexpected-position", "unfamiliar-pattern"],
    previewHint: "Notice where the logo 'Acme' is positioned"
  },
  {
    id: "nav-order",
    name: "Scattered Navigation",
    emoji: "🧩",
    law: "Law of Proximity",
    description: "Related items should be grouped together. Scattered navigation makes users hunt for what they need.",
    correctProblems: ["poor-grouping"],
    previewHint: "Check the sidebar navigation menu order"
  },
  {
    id: "stat-cards",
    name: "Inconsistent Card Styles",
    emoji: "🔁",
    law: "Reusable Patterns",
    description: "Four stats, four different designs. Similar content should use the same pattern.",
    correctProblems: ["inconsistent-style"],
    previewHint: "Compare the 4 stat cards at the top"
  },
  {
    id: "color-meanings",
    name: "Misleading Colors",
    emoji: "🎨",
    law: "Consistent Colors",
    description: "Red for growth, green for errors? Colors must match universal expectations.",
    correctProblems: ["wrong-colors"],
    previewHint: "Look at the trend colors and status badges"
  },
  {
    id: "tiny-buttons",
    name: "Hard-to-Click Buttons",
    emoji: "🎯",
    law: "Fitts's Law",
    description: "Tiny targets are hard to hit. Make buttons bigger and easier to click.",
    correctProblems: ["hard-to-click"],
    previewHint: "Look at the Quick Actions card's submit button"
  },
  {
    id: "cramped-spacing",
    name: "Cramped Interface",
    emoji: "⚪",
    law: "Whitespace",
    description: "Elements jammed together create chaos. Give content room to breathe.",
    correctProblems: ["no-breathing-room"],
    previewHint: "Notice how tightly packed the elements are"
  },
  {
    id: "typography-mess",
    name: "Confusing Text Hierarchy",
    emoji: "🪜",
    law: "Typography Hierarchy",
    description: "Bigger = more important. Small titles and large labels break this rule.",
    correctProblems: ["confusing-hierarchy"],
    previewHint: "Compare title and body text sizes in Payments card"
  },
  {
    id: "button-styles",
    name: "Unpredictable Controls",
    emoji: "🔄",
    law: "Predictable Interactions",
    description: "Checkboxes for exclusive choices? Users expect a toggle or radio buttons for this pattern.",
    correctProblems: ["inconsistent-style"],
    previewHint: "Look at how the period selection works in Analytics"
  },
  {
    id: "misaligned-cards",
    name: "Misaligned Dashboard",
    emoji: "📐",
    law: "Symmetry and Alignment",
    description: "Different sizes, spacing, and positions create visual chaos. Align to a grid.",
    correctProblems: ["poor-alignment", "inconsistent-style"],
    previewHint: "Notice how cards and elements don't line up properly"
  }
];

// All unique laws for the picker with descriptions
export const ALL_LAWS = [
  { name: "Hick's Law", description: "The time to decide increases with the number of choices" },
  { name: "Law of Proximity", description: "Objects near each other are perceived as related" },
  { name: "Fitts's Law", description: "Larger, closer targets are easier to click" },
  { name: "Jakob's Law", description: "Users expect your site to work like others they know" },
  { name: "Reusable Patterns", description: "Consistent components for similar data types" },
  { name: "Predictable Interactions", description: "Same actions should always look and behave the same" },
  { name: "Symmetry and Alignment", description: "Aligned, balanced layouts feel organized and trustworthy" },
  { name: "Whitespace", description: "Empty space helps users process information" },
  { name: "Consistent Colors", description: "Same colors should mean the same thing everywhere" },
  { name: "Typography Hierarchy", description: "Font size and weight show content importance" }
] as const;

// Quiz state types
export interface QuizState {
  started: boolean;
  fixedZones: Set<string>;
  highlightedZone: string | null;
  showCelebration: boolean;
  wrongClicks: number;
  pendingZone: ViolationZone | null;
  wrongGuess: boolean;
  wrongGuessLaw: string | null;
}

export const INITIAL_QUIZ_STATE: QuizState = {
  started: false,
  fixedZones: new Set(),
  highlightedZone: null,
  showCelebration: false,
  wrongClicks: 0,
  pendingZone: null,
  wrongGuess: false,
  wrongGuessLaw: null
};
