/**
 * Accessibility Audit Quiz Configuration
 * 
 * A quiz where users find accessibility issues in a webpage
 * and identify which WCAG guidelines they violate.
 */

import { QuizConfig } from "../../components/quiz/types";

import { AccessibilityZone, A11Y_ZONES, A11Y_ANSWER_OPTIONS } from "./data";
import { AccessibilityIntro } from "./AccessibilityIntro";
import { AccessibilityPage } from "./AccessibilityPage";
import { A11yZoneDisplay } from "./A11yZoneDisplay";

const config: QuizConfig<AccessibilityZone> = {
  id: "accessibility-audit",
  title: "Accessibility Audit",
  emoji: "♿",
  description: "Find accessibility issues and learn WCAG guidelines",
  slug: "accessibility-audit",
  themeColor: "amethyst",
  
  zones: A11Y_ZONES,
  answerOptions: A11Y_ANSWER_OPTIONS,
  
  InteractiveComponent: AccessibilityPage,
  IntroComponent: AccessibilityIntro,
  ZoneDisplayComponent: A11yZoneDisplay,
  
  labels: {
    zoneName: "issue",
    zoneNamePlural: "issues",
    answerName: "guideline",
    answerNamePlural: "guidelines",
    progressTitle: "Guidelines Learned",
    missionTitle: "Your Accessibility Mission",
    missionDescription: 'This landing page has 6 accessibility barriers. Find elements that would exclude users and identify which WCAG guideline is violated.',
    celebrationTitle: "Accessibility Champion!",
    celebrationSubtitle: "All barriers removed",
    pickerTitle: "Identify the WCAG Guideline",
    pickerSubtitle: "Which accessibility principle is being violated?",
  },
};

export default config;
