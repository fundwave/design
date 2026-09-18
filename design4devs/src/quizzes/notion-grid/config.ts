/**
 * Notion Grid Dashboard Quiz - Config
 */

import type { ConfigQuiz } from "../../components/quiz/config-types";

export const notionGridConfig: ConfigQuiz = {
  id: "notion-grid",
  title: "Grid Detective",
  emoji: "📊",
  description: "Find UX problems in this Notion-style grid dashboard.",
  slug: "notion-grid",
  theme: "slate",
  baseTemplate: "custom",

  intro: {
    badge: "Grid Layout Challenge",
    badgeIcon: "eye",
    title: "Grid Detective",
    subtitle: "Find {count} design issues in this Notion-style workspace",
    description: "This grid dashboard has several UX problems hiding in plain sight. Can you spot them all?",
    features: [
      { emoji: "🔲", title: "Grid Layouts", description: "Examine card arrangements and spacing" },
      { emoji: "🎯", title: "Visual Clarity", description: "Check hierarchy and readability" },
      { emoji: "✨", title: "Watch Fix", description: "See the grid transform beautifully" }
    ],
    buttonText: "Start Detection"
  },

  labels: {
    zoneName: "issue",
    zoneNamePlural: "issues",
    answerName: "principle",
    answerNamePlural: "principles",
    progressTitle: "Issues Fixed",
    missionTitle: "Your Mission",
    missionDescription: "Examine this Notion-style dashboard and click on areas with UX problems. Identify which design principle is being violated.",
    celebrationTitle: "Grid Perfected!",
    celebrationSubtitle: "All layout issues have been resolved",
    pickerTitle: "Which principle is violated?",
    pickerSubtitle: "Select the design principle this area breaks"
  },

  answerOptions: [
    { name: "Typography Hierarchy", emoji: "👁️", description: "Use font size, weight, and style to establish clear reading order.", category: "Visual Design" },
    { name: "Reusable Patterns", emoji: "🔄", description: "Similar elements should look and behave the same way.", category: "Patterns" },
    { name: "Law of Proximity", emoji: "📐", description: "Related items should be grouped together.", category: "Gestalt" },
    { name: "Symmetry and Alignment", emoji: "📏", description: "Elements should line up to create visual order.", category: "Layout" },
    { name: "Whitespace", emoji: "⬜", description: "Proper spacing improves readability and focus.", category: "Layout" },
    { name: "Contrast", emoji: "🎨", description: "Text and elements need sufficient contrast to be readable.", category: "Accessibility" },
    { name: "Fitts's Law", emoji: "🎯", description: "Interactive elements should be appropriately sized.", category: "Interaction" },
    { name: "Hick's Law", emoji: "⏱️", description: "Too many choices increase decision time.", category: "Decision Making" }
  ],

  zones: [
    {
      id: "sidebar-icons",
      name: "Sidebar Icons",
      emoji: "📱",
      selector: "[data-zone='sidebar-icons']",
      previewHint: "Are these icons easy to identify and click?",
      correctAnswer: "Fitts's Law",
      description: "Sidebar icons are too small and cramped. Users struggle to click precise targets, especially on touch devices.",
      transforms: []
    },
    {
      id: "page-title",
      name: "Page Title",
      emoji: "📝",
      selector: "[data-zone='page-title']",
      previewHint: "Does the title stand out as the main heading?",
      correctAnswer: "Typography Hierarchy",
      description: "The page title doesn't stand out enough. It should be the most prominent element to orient users.",
      transforms: []
    },
    {
      id: "card-grid",
      name: "Card Grid",
      emoji: "🔲",
      selector: "[data-zone='card-grid']",
      previewHint: "Do these cards align properly in the grid?",
      correctAnswer: "Symmetry and Alignment",
      description: "Cards have inconsistent heights and don't align to a proper grid. This creates visual chaos.",
      transforms: []
    },
    {
      id: "card-spacing",
      name: "Card Spacing",
      emoji: "📦",
      selector: "[data-zone='card-spacing']",
      previewHint: "Is there enough breathing room between cards?",
      correctAnswer: "Whitespace",
      description: "Cards are crammed together with minimal spacing. Whitespace helps users parse content.",
      transforms: []
    },
    {
      id: "tag-styles",
      name: "Tags",
      emoji: "🏷️",
      selector: "[data-zone='tag-styles']",
      previewHint: "Do these tags follow a consistent style?",
      correctAnswer: "Reusable Patterns",
      description: "Tags use different shapes, sizes, and color patterns. Consistent styling aids recognition.",
      transforms: []
    },
    {
      id: "text-contrast",
      name: "Card Text",
      emoji: "📖",
      selector: "[data-zone='text-contrast']",
      previewHint: "Is the text easy to read?",
      correctAnswer: "Contrast",
      description: "Light gray text on white backgrounds fails accessibility standards. Text needs sufficient contrast.",
      transforms: []
    },
    {
      id: "action-buttons",
      name: "Action Buttons",
      emoji: "🔘",
      selector: "[data-zone='action-buttons']",
      previewHint: "Are related actions grouped logically?",
      correctAnswer: "Law of Proximity",
      description: "Action buttons are scattered. Related actions should be grouped together.",
      transforms: []
    },
    {
      id: "info-density",
      name: "Information Density",
      emoji: "📊",
      selector: "[data-zone='info-density']",
      previewHint: "Is there too much information competing for attention?",
      correctAnswer: "Hick's Law",
      description: "Cards show too many details at once. Reducing options helps users process information faster.",
      transforms: []
    }
  ]
};

export default notionGridConfig;
