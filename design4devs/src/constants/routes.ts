import { BookOpen, LucideIcon, Palette, HatGlasses} from "lucide-react";

import { ThemeColor } from "../types";

export const ROUTES = {
  HOME: "/",
  UX_LAWS_GUIDE: "/ux-laws-guide",
  DESIGN_SYSTEM_GUIDE: "/design-system-guide",
  QUIZ_HUB: "/quizzes",
  QUIZ: "/quiz/:quizSlug",
  DS_TOKENS: "/design-system/tokens",
  DS_TYPOGRAPHY: "/design-system/typography",
  DS_COLORS: "/design-system/colors",
  DS_COMPONENTS: "/design-system/components",
  DS_STATES: "/design-system/states",
  DS_ICONS: "/design-system/icons",
  DS_CHECKLIST: "/design-system/checklist",
  HICKS_LAW: "/laws/hicks-law",
  LAW_OF_PROXIMITY: "/laws/law-of-proximity",
  FITTS_LAW: "/laws/fitts-law",
  JAKOBS_LAW: "/laws/jakobs-law",
  REUSABLE_PATTERNS: "/laws/reusable-patterns",
  PREDICTABLE_INTERACTIONS: "/laws/predictable-interactions",
  SYMMETRY_AND_ALIGNMENT: "/laws/symmetry-and-alignment",
  WHITESPACE: "/laws/whitespace",
  CONSISTENT_COLORS: "/laws/consistent-colors",
  TYPOGRAPHY_HIERARCHY: "/laws/typography-hierarchy"
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

export interface GuideItem {
  path: string;
  name: string;
  emoji: string;
  description: string;
  category?: string;
  categoryColor?: string;
}

export interface ComponentGuide {
  path: string;
  title: string;
  emoji: string;
  icon: LucideIcon;
  description: string;
  buttonText: string;
  themeColor: ThemeColor;
  badgeText: string;
  items: GuideItem[];
}

export const DESIGN_SYSTEM_STEPS: GuideItem[] = [
  {
    path: ROUTES.DS_TOKENS,
    name: "Design Tokens",
    emoji: "🎨",
    description: "Define your single source of truth"
  },
  {
    path: ROUTES.DS_TYPOGRAPHY,
    name: "Typography",
    emoji: "✍️",
    description: "Create a clear text hierarchy"
  },
  {
    path: ROUTES.DS_COLORS,
    name: "Colors",
    emoji: "🌈",
    description: "Build a purposeful color palette"
  },
  {
    path: ROUTES.DS_COMPONENTS,
    name: "Components",
    emoji: "🧩",
    description: "Design reusable building blocks"
  },
  {
    path: ROUTES.DS_STATES,
    name: "Interactive States",
    emoji: "🔄",
    description: "Define all interaction states"
  },
  {
    path: ROUTES.DS_ICONS,
    name: "Icons & Elements",
    emoji: "🎭",
    description: "Standardize visual elements"
  },
  {
    path: ROUTES.DS_CHECKLIST,
    name: "Final Checklist",
    emoji: "✅",
    description: "Review before deployment"
  }
];

export const LAWS: GuideItem[] = [
  {
    path: ROUTES.HICKS_LAW,
    name: "Hick's Law",
    emoji: "⏳",
    category: "Usability & Functionality",
    description: "Fewer choices lead to faster decisions"
  },
  {
    path: ROUTES.LAW_OF_PROXIMITY,
    name: "Law of Proximity",
    emoji: "🧲",
    category: "Usability & Functionality",
    description: "Related items should be grouped together"
  },
  {
    path: ROUTES.FITTS_LAW,
    name: "Fitts's Law",
    emoji: "🎯",
    category: "Usability & Functionality",
    description: "Larger targets are easier to click"
  },
  {
    path: ROUTES.JAKOBS_LAW,
    name: "Jakob's Law",
    emoji: "🌍",
    category: "Usability & Functionality",
    description: "Users prefer familiar patterns"
  },
  {
    path: ROUTES.REUSABLE_PATTERNS,
    name: "Reusable Patterns",
    emoji: "📦",
    category: "Consistency & Clarity",
    description: "Use consistent components across your product"
  },
  {
    path: ROUTES.PREDICTABLE_INTERACTIONS,
    name: "Predictable Interactions",
    emoji: "🔁",
    category: "Consistency & Clarity",
    description: "Actions should behave consistently"
  },
  {
    path: ROUTES.SYMMETRY_AND_ALIGNMENT,
    name: "Symmetry & Alignment",
    emoji: "📐",
    category: "Consistency & Clarity",
    description: "Visual balance creates harmony"
  },
  {
    path: ROUTES.WHITESPACE,
    name: "Whitespace",
    emoji: "⚪",
    category: "Consistency & Clarity",
    description: "Empty space improves readability"
  },
  {
    path: ROUTES.CONSISTENT_COLORS,
    name: "Consistent Colors",
    emoji: "🎨",
    category: "Consistency & Clarity",
    description: "Use colors purposefully and consistently"
  },
  {
    path: ROUTES.TYPOGRAPHY_HIERARCHY,
    name: "Typography Hierarchy",
    emoji: "🪜",
    category: "Consistency & Clarity",
    description: "Clear text hierarchy guides the eye"
  }
];

export const COMPONENT_GUIDES: ComponentGuide[] = [
  {
    path: ROUTES.UX_LAWS_GUIDE,
    title: "Study UX Laws",
    emoji: "⚖️",
    icon: BookOpen,
    description: "Learn 10 fundamental UX principles with interactive examples and real-world applications.",
    buttonText: "Start Learning",
    themeColor: "ocean",
    badgeText: "UX Laws",
    items: LAWS
  },
  // {
  //   path: ROUTES.DESIGN_SYSTEM_GUIDE,
  //   title: "Create your own Design System",
  //   emoji: "🎨",
  //   icon: Palette,
  //   description: "Follow these 7 steps to create a complete design system for your product.",
  //   buttonText: "Start Building",
  //   themeColor: "amethyst",
  //   badgeText: "Design System",
  //   items: DESIGN_SYSTEM_STEPS
  // },
  {
    path: ROUTES.QUIZ_HUB,
    title: "Design Quizzes",
    emoji: "🎮",
    icon: HatGlasses,
    description: "Test your knowledge with interactive challenges covering UX laws, accessibility, and more.",
    buttonText: "Take a Quiz",
    themeColor: "mountain",
    badgeText: "Quizzes",
    items: []
  }
];
