/**
 * Blog Website Quiz - Config
 */

import type { ConfigQuiz } from "../../components/quiz/config-types";

export const blogConfig: ConfigQuiz = {
  id: "blog",
  title: "Blog Beautifier",
  emoji: "📰",
  description: "Find readability issues in this blog website.",
  slug: "blog",
  theme: "rose",
  baseTemplate: "custom",

  intro: {
    badge: "Content Challenge",
    badgeIcon: "sparkles",
    title: "Blog Beautifier",
    subtitle: "Find {count} readability issues in this blog",
    description: "This blog has design problems that hurt reader engagement. Can you spot them all?",
    features: [
      { emoji: "📖", title: "Typography", description: "Check text readability and flow" },
      { emoji: "🎨", title: "Layout", description: "Examine content structure" },
      { emoji: "✨", title: "Transform", description: "Watch the blog shine" }
    ],
    buttonText: "Start Reading"
  },

  labels: {
    zoneName: "issue",
    zoneNamePlural: "issues",
    answerName: "principle",
    answerNamePlural: "principles",
    progressTitle: "Issues Fixed",
    missionTitle: "Your Mission",
    missionDescription: "This blog has several readability and design issues. Click on problem areas and identify which principle they violate.",
    celebrationTitle: "Blog Beautified!",
    celebrationSubtitle: "Readers will love this experience",
    pickerTitle: "Which principle is violated?",
    pickerSubtitle: "Select the design principle this area breaks"
  },

  answerOptions: [
    { name: "Typography Hierarchy", emoji: "📝", description: "Use font size, weight, and style to establish clear reading order.", category: "Typography" },
    { name: "Whitespace", emoji: "⬜", description: "Proper spacing improves readability and reduces cognitive load.", category: "Layout" },
    { name: "Contrast", emoji: "🎨", description: "Text needs sufficient contrast against background for readability.", category: "Accessibility" },
    { name: "Reusable Patterns", emoji: "🔄", description: "Similar elements should be styled consistently.", category: "Patterns" },
    { name: "Law of Proximity", emoji: "📐", description: "Related content should be grouped together.", category: "Gestalt" },
    { name: "Symmetry and Alignment", emoji: "📏", description: "Content should align to create visual order.", category: "Layout" }
  ],

  zones: [
    {
      id: "article-title",
      name: "Article Title",
      emoji: "📌",
      selector: "[data-zone='article-title']",
      previewHint: "Does the title grab attention and establish hierarchy?",
      correctAnswer: "Typography Hierarchy",
      description: "The title doesn't stand out enough from body text. Headlines should be significantly larger and bolder to establish hierarchy.",
      transforms: []
    },
    {
      id: "body-text",
      name: "Body Text",
      emoji: "📖",
      selector: "[data-zone='body-text']",
      previewHint: "Are the text lines comfortable to read?",
      correctAnswer: "Whitespace",
      description: "Lines are too long and cramped. More spacing and better alignment improve readability.",
      transforms: []
    },
    {
      id: "paragraph-spacing",
      name: "Paragraphs",
      emoji: "📑",
      selector: "[data-zone='paragraph-spacing']",
      previewHint: "Is there enough breathing room between sections?",
      correctAnswer: "Whitespace",
      description: "Paragraphs are cramped together. More whitespace between sections improves readability and reduces fatigue.",
      transforms: []
    },
    {
      id: "text-contrast",
      name: "Text Color",
      emoji: "🎨",
      selector: "[data-zone='text-contrast']",
      previewHint: "Is the text easy to read against the background?",
      correctAnswer: "Contrast",
      description: "Light gray text fails accessibility standards. Body text needs higher contrast for comfortable reading.",
      transforms: []
    },
    {
      id: "subheadings",
      name: "Subheadings",
      emoji: "📋",
      selector: "[data-zone='subheadings']",
      previewHint: "Can readers quickly scan the article structure?",
      correctAnswer: "Typography Hierarchy",
      description: "No subheadings to break up content. Clear hierarchy helps readers navigate the article.",
      transforms: []
    },
    {
      id: "meta-info",
      name: "Article Meta",
      emoji: "📅",
      selector: "[data-zone='meta-info']",
      previewHint: "Is the author and date info styled appropriately?",
      correctAnswer: "Typography Hierarchy",
      description: "Meta information competes with the title. It should be clearly secondary in the visual hierarchy.",
      transforms: []
    },
    {
      id: "sidebar-content",
      name: "Sidebar",
      emoji: "📌",
      selector: "[data-zone='sidebar-content']",
      previewHint: "Does sidebar content relate to the article?",
      correctAnswer: "Law of Proximity",
      description: "Sidebar content is unrelated and distracting. Related content should be grouped near relevant sections.",
      transforms: []
    },
    {
      id: "link-styles",
      name: "Links",
      emoji: "🔗",
      selector: "[data-zone='link-styles']",
      previewHint: "Are links consistently styled and recognizable?",
      correctAnswer: "Reusable Patterns",
      description: "Links use different colors and styles. Consistent link styling helps users recognize interactive elements.",
      transforms: []
    }
  ]
};

export default blogConfig;
