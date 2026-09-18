/**
 * Accessibility Audit Quiz Data
 */

import { AnswerOption, BaseZone } from "../../components/quiz/types";

export interface AccessibilityZone extends BaseZone {
  wcagLevel: "A" | "AA" | "AAA";
  wcagCriterion: string;
}

export const A11Y_ZONES: AccessibilityZone[] = [
  {
    id: "low-contrast-text",
    name: "Low Contrast Text",
    emoji: "👁️",
    correctAnswer: "Color Contrast",
    wcagLevel: "AA",
    wcagCriterion: "1.4.3",
    description: "Light gray text on white background fails the 4.5:1 contrast ratio requirement, making it hard to read for users with low vision.",
    previewHint: "Look at the light gray subtitle text"
  },
  {
    id: "missing-alt-text",
    name: "Image Without Alt Text",
    emoji: "🖼️",
    correctAnswer: "Text Alternatives",
    wcagLevel: "A",
    wcagCriterion: "1.1.1",
    description: "Images must have alternative text so screen reader users understand what the image conveys.",
    previewHint: "Check the hero image"
  },
  {
    id: "missing-form-labels",
    name: "Unlabeled Form Fields",
    emoji: "📝",
    correctAnswer: "Labels or Instructions",
    wcagLevel: "A",
    wcagCriterion: "3.3.2",
    description: "Form inputs need visible labels. Placeholder text alone is not accessible as it disappears when typing.",
    previewHint: "Look at the newsletter signup form"
  },
  {
    id: "keyboard-trap",
    name: "Keyboard Trap",
    emoji: "⌨️",
    correctAnswer: "Keyboard Accessible",
    wcagLevel: "A",
    wcagCriterion: "2.1.2",
    description: "Users must be able to navigate away from any component using only a keyboard. Modal dialogs need proper focus management.",
    previewHint: "Notice the modal popup behavior"
  },
  {
    id: "missing-skip-link",
    name: "No Skip Navigation",
    emoji: "⏭️",
    correctAnswer: "Bypass Blocks",
    wcagLevel: "A",
    wcagCriterion: "2.4.1",
    description: "Pages with repeated navigation need a way to skip directly to main content for keyboard and screen reader users.",
    previewHint: "Try tabbing through the page from the top"
  },
  {
    id: "auto-playing-video",
    name: "Auto-playing Media",
    emoji: "🎬",
    correctAnswer: "Audio Control",
    wcagLevel: "A",
    wcagCriterion: "1.4.2",
    description: "Auto-playing audio/video that lasts more than 3 seconds must have controls to pause or stop, or to control volume.",
    previewHint: "Notice the video that starts automatically"
  }
];

export const A11Y_ANSWER_OPTIONS: AnswerOption[] = [
  { 
    name: "Color Contrast", 
    description: "Text must have sufficient contrast against its background (4.5:1 for normal text)",
    category: "Perceivable"
  },
  { 
    name: "Text Alternatives", 
    description: "Non-text content needs text alternatives for assistive technologies",
    category: "Perceivable"
  },
  { 
    name: "Labels or Instructions", 
    description: "Form inputs need clear labels to identify what information is expected",
    category: "Understandable"
  },
  { 
    name: "Keyboard Accessible", 
    description: "All functionality must be available via keyboard without getting stuck",
    category: "Operable"
  },
  { 
    name: "Bypass Blocks", 
    description: "Provide ways to skip repeated content like navigation menus",
    category: "Operable"
  },
  { 
    name: "Audio Control", 
    description: "Auto-playing audio must have controls to pause, stop, or adjust volume",
    category: "Perceivable"
  }
];
