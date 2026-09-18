/**
 * Quiz Registry
 * 
 * Central registry for all available quizzes.
 * Quizzes are lazy-loaded for better performance.
 */

import { QuizRegistryEntry, ConfigQuizRegistryEntry } from "../components/quiz/types";

/**
 * All registered quizzes (component-based)
 */
export const QUIZ_REGISTRY: QuizRegistryEntry[] = [
  {
    id: "accessibility-audit",
    title: "Accessibility Audit",
    emoji: "♿",
    description: "Find accessibility issues and learn WCAG guidelines",
    slug: "accessibility-audit",
    themeColor: "amethyst",
    loadConfig: () => import("./accessibility-audit"),
  },
];

/**
 * Config-driven quizzes (new architecture)
 */
export const CONFIG_QUIZ_REGISTRY: ConfigQuizRegistryEntry[] = [
  {
    id: "ux-detective-v2",
    title: "UX Detective",
    emoji: "🔍",
    description: "Spot design flaws and match them with UX laws they violate",
    slug: "ux-detective-v2",
    themeColor: "ocean",
    loadQuiz: async () => {
      const { uxDetectiveConfig, DashboardTemplate } = await import("./ux-detective-v2");
      return {
        config: uxDetectiveConfig,
        Template: DashboardTemplate,
      };
    },
  },
  {
    id: "notion-grid",
    title: "Grid Detective",
    emoji: "📊",
    description: "Find UX problems in this Notion-style grid dashboard",
    slug: "notion-grid",
    themeColor: "slate",
    loadQuiz: async () => {
      const { notionGridConfig, NotionTemplate } = await import("./notion-grid");
      return {
        config: notionGridConfig,
        Template: NotionTemplate,
      };
    },
  },
  {
    id: "kanban-board",
    title: "Kanban Inspector",
    emoji: "📋",
    description: "Find UX problems in this Kanban-style project board",
    slug: "kanban-board",
    themeColor: "amethyst",
    loadQuiz: async () => {
      const { kanbanConfig, KanbanTemplate } = await import("./kanban-board");
      return {
        config: kanbanConfig,
        Template: KanbanTemplate,
      };
    },
  },
  {
    id: "ecommerce",
    title: "Shop Fixer",
    emoji: "🛒",
    description: "Find conversion-killing UX issues in this online store",
    slug: "ecommerce",
    themeColor: "emerald",
    loadQuiz: async () => {
      const { ecommerceConfig, EcommerceTemplate } = await import("./ecommerce");
      return {
        config: ecommerceConfig,
        Template: EcommerceTemplate,
      };
    },
  },
  {
    id: "blog",
    title: "Blog Beautifier",
    emoji: "📰",
    description: "Find readability issues in this blog website",
    slug: "blog",
    themeColor: "rose",
    loadQuiz: async () => {
      const { blogConfig, BlogTemplate } = await import("./blog");
      return {
        config: blogConfig,
        Template: BlogTemplate,
      };
    },
  },
];

/**
 * Combined registry of all quizzes
 */
export const ALL_QUIZZES = [
  ...CONFIG_QUIZ_REGISTRY, // Show config quizzes first
  ...QUIZ_REGISTRY.filter(q => q.id !== "ux-detective"), // Filter out legacy UX detective
];

/**
 * Get quiz entry by slug
 */
export function getQuizBySlug(slug: string): QuizRegistryEntry | undefined {
  return QUIZ_REGISTRY.find((q) => q.slug === slug);
}

/**
 * Get quiz entry by ID
 */
export function getQuizById(id: string): QuizRegistryEntry | undefined {
  return QUIZ_REGISTRY.find((q) => q.id === id);
}
