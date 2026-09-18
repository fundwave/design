/**
 * Kanban Board Quiz - Config
 */

import type { ConfigQuiz } from "../../components/quiz/config-types";

export const kanbanConfig: ConfigQuiz = {
  id: "kanban-board",
  title: "Kanban Inspector",
  emoji: "📋",
  description: "Find UX problems in this Kanban-style project board.",
  slug: "kanban-board",
  theme: "amethyst",
  baseTemplate: "custom",

  intro: {
    badge: "Workflow Challenge",
    badgeIcon: "eye",
    title: "Kanban Inspector",
    subtitle: "Find {count} design issues in this project board",
    description: "This Kanban board has usability issues that slow down teams. Spot the problems and fix the workflow!",
    features: [
      { emoji: "📋", title: "Card Design", description: "Examine task card layouts" },
      { emoji: "🔀", title: "Column Flow", description: "Check workflow organization" },
      { emoji: "✨", title: "Transform", description: "Watch the board improve" }
    ],
    buttonText: "Start Inspection"
  },

  labels: {
    zoneName: "problem",
    zoneNamePlural: "problems",
    answerName: "principle",
    answerNamePlural: "principles",
    progressTitle: "Problems Solved",
    missionTitle: "Your Mission",
    missionDescription: "This Kanban board has several UX issues. Click on problem areas and identify which design principle they violate.",
    celebrationTitle: "Board Optimized!",
    celebrationSubtitle: "The workflow is now smooth and efficient",
    pickerTitle: "Which principle is violated?",
    pickerSubtitle: "Select the design principle this area breaks"
  },

  answerOptions: [
    { name: "Typography Hierarchy", emoji: "👁️", description: "Important content should stand out through size, weight, and contrast.", category: "Visual Design" },
    { name: "Reusable Patterns", emoji: "🔄", description: "Similar elements should look and behave the same way.", category: "Patterns" },
    { name: "Law of Proximity", emoji: "📐", description: "Related items should be grouped together.", category: "Gestalt" },
    { name: "Consistent Colors", emoji: "🎨", description: "Colors carry meaning - use them to communicate status.", category: "Visual Design" },
    { name: "Predictable Interactions", emoji: "👆", description: "Elements should look like what they do - buttons look clickable.", category: "Interaction" },
    { name: "Fitts's Law", emoji: "🎯", description: "Interactive elements should be appropriately sized.", category: "Interaction" },
    { name: "Whitespace", emoji: "⬜", description: "Proper spacing improves readability and organization.", category: "Layout" },
    { name: "Symmetry and Alignment", emoji: "📏", description: "Elements should align to create visual order.", category: "Layout" }
  ],

  zones: [
    {
      id: "column-headers",
      name: "Column Headers",
      emoji: "📌",
      selector: "[data-zone='column-headers']",
      previewHint: "Do the column headers clearly indicate workflow stages?",
      correctAnswer: "Typography Hierarchy",
      description: "Column headers don't stand out clearly. They need stronger visual hierarchy to indicate workflow stages.",
      transforms: []
    },
    {
      id: "card-priority",
      name: "Priority Indicators",
      emoji: "🚨",
      selector: "[data-zone='card-priority']",
      previewHint: "Can you quickly identify high-priority tasks?",
      correctAnswer: "Consistent Colors",
      description: "Priority colors are inconsistent and confusing. Red should mean urgent, not random decoration.",
      transforms: []
    },
    {
      id: "card-actions",
      name: "Card Actions",
      emoji: "⚡",
      selector: "[data-zone='card-actions']",
      previewHint: "Are action buttons easy to find and click?",
      correctAnswer: "Fitts's Law",
      description: "Action buttons are too small and hard to target. Users struggle to click tiny icons.",
      transforms: []
    },
    {
      id: "card-metadata",
      name: "Card Metadata",
      emoji: "📊",
      selector: "[data-zone='card-metadata']",
      previewHint: "Is the task information organized logically?",
      correctAnswer: "Law of Proximity",
      description: "Card metadata is scattered randomly. Related info (dates, assignees, tags) should be grouped.",
      transforms: []
    },
    {
      id: "add-buttons",
      name: "Add Task Buttons",
      emoji: "➕",
      selector: "[data-zone='add-buttons']",
      previewHint: "Do these buttons look interactive?",
      correctAnswer: "Predictable Interactions",
      description: "Add buttons don't look clickable. They need visual cues to indicate interactivity.",
      transforms: []
    },
    {
      id: "column-count",
      name: "Task Counts",
      emoji: "🔢",
      selector: "[data-zone='column-count']",
      previewHint: "Is there visual feedback about column capacity?",
      correctAnswer: "Whitespace",
      description: "Columns are cramped with no breathing room. Better spacing helps users see workload distribution.",
      transforms: []
    },
    {
      id: "avatar-styles",
      name: "Assignee Avatars",
      emoji: "👤",
      selector: "[data-zone='avatar-styles']",
      previewHint: "Are assignee indicators styled consistently?",
      correctAnswer: "Reusable Patterns",
      description: "Avatars use different sizes, shapes, and positions. Consistent styling aids scanning.",
      transforms: []
    },
    {
      id: "card-titles",
      name: "Task Titles",
      emoji: "📝",
      selector: "[data-zone='card-titles']",
      previewHint: "Do task titles stand out as the main content?",
      correctAnswer: "Typography Hierarchy",
      description: "Task titles don't stand out enough from other card content. They should be the most prominent element.",
      transforms: []
    }
  ]
};

export default kanbanConfig;
