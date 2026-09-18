/**
 * UX Detective V2 - Config-Driven Quiz Configuration
 * 
 * This defines all zones, their correct answers (design laws),
 * and metadata for the quiz without any hardcoded components.
 */

import type { ConfigQuiz } from "../../components/quiz/config-types";

export const uxDetectiveConfig: ConfigQuiz = {
  id: "ux-detective-v2",
  title: "UX Detective",
  emoji: "🔍",
  description: "Spot the design flaws and match them with the UX laws they violate.",
  slug: "ux-detective-v2",
  theme: "ocean",
  baseTemplate: "custom",

  // Intro screen configuration
  intro: {
    badge: "Interactive Challenge",
    badgeIcon: "eye",
    title: "UX Detective",
    subtitle: "Find {count} design problems hiding in this dashboard",
    description: "Click on problematic areas, identify which UX law they violate, and watch the design transform before your eyes.",
    features: [
      {
        emoji: "🔍",
        title: "Spot Issues",
        description: "Click on design problems in the dashboard"
      },
      {
        emoji: "⚖️",
        title: "Identify Laws",
        description: "Match each issue with the UX law it violates"
      },
      {
        emoji: "✨",
        title: "Watch Transform",
        description: "See the design fix itself in real-time"
      }
    ],
    buttonText: "Start Investigation"
  },

  // UI labels
  labels: {
    zoneName: "violation",
    zoneNamePlural: "violations",
    answerName: "law",
    answerNamePlural: "laws",
    progressTitle: "Fixed Violations",
    missionTitle: "Your Mission",
    missionDescription: "Examine this dashboard and click on areas that violate UX design principles. Identify which law each violation breaks to fix the design.",
    celebrationTitle: "Case Closed!",
    celebrationSubtitle: "You've identified all UX violations",
    pickerTitle: "Which UX law is violated?",
    pickerSubtitle: "Select the design principle this area breaks"
  },

  // Available answers (design laws)
  answerOptions: [
    {
      name: "Hick's Law",
      emoji: "⏱️",
      description: "Too many choices increase decision time. Reduce options to help users decide faster.",
      category: "Decision Making"
    },
    {
      name: "Fitts's Law",
      emoji: "🎯",
      description: "Small or distant targets are harder to click. Make interactive elements appropriately sized.",
      category: "Interaction"
    },
    {
      name: "Law of Proximity",
      emoji: "📐",
      description: "Related items should be grouped together. Unrelated items should be separated.",
      category: "Gestalt"
    },
    {
      name: "Reusable Patterns",
      emoji: "🔄",
      description: "Similar elements should look and behave the same way throughout the interface.",
      category: "Patterns"
    },
    {
      name: "Consistent Colors",
      emoji: "🎨",
      description: "Colors carry meaning. Green = positive/success, Red = negative/error, Yellow = warning.",
      category: "Visual Design"
    },
    {
      name: "Typography Hierarchy",
      emoji: "👁️",
      description: "Use size, weight, and spacing to guide attention. Important content should stand out.",
      category: "Visual Design"
    },
    {
      name: "Symmetry and Alignment",
      emoji: "📏",
      description: "Elements should be visually aligned to create order and connection.",
      category: "Layout"
    },
    {
      name: "Jakob's Law",
      emoji: "🌐",
      description: "Users expect your site to work like others they know. Follow familiar conventions.",
      category: "Patterns"
    },
    {
      name: "Whitespace",
      emoji: "⬜",
      description: "Proper spacing improves readability and reduces cognitive load.",
      category: "Layout"
    }
  ],

  // Zones in the dashboard that have problems
  zones: [
    {
      id: "header-buttons",
      name: "Header Icons",
      emoji: "🔘",
      selector: "[data-zone='header-buttons']",
      previewHint: "Count the icons... is this helping users or overwhelming them?",
      correctAnswer: "Hick's Law",
      description: "Too many header icons create choice overload. Users face decision paralysis with 8+ options competing for attention.",
      transforms: []
    },
    {
      id: "header-layout",
      name: "Header Layout",
      emoji: "📍",
      selector: "[data-zone='header-layout']",
      previewHint: "Where do users expect to find the logo and navigation?",
      correctAnswer: "Jakob's Law",
      description: "The logo belongs on the left, not the right. Users expect conventional layouts based on their experience with other sites.",
      transforms: []
    },
    {
      id: "nav-order",
      name: "Navigation Menu",
      emoji: "📋",
      selector: "[data-zone='nav-order']",
      previewHint: "Are related menu items grouped logically together?",
      correctAnswer: "Law of Proximity",
      description: "Navigation items are randomly scattered. Related items should be grouped together under clear categories.",
      transforms: []
    },
    {
      id: "stat-cards",
      name: "Stats Row",
      emoji: "📊",
      selector: "[data-zone='stat-cards']",
      previewHint: "Do these cards look like they belong to the same family?",
      correctAnswer: "Reusable Patterns",
      description: "Each stat card uses different styling - gradients, borders, and backgrounds. Consistent styling helps users recognize patterns.",
      transforms: []
    },
    // Color meanings zones - each instance is separate so user fixes one at a time
    {
      id: "color-revenue",
      name: "Revenue Indicator",
      emoji: "🎨",
      selector: "[data-zone='color-revenue']",
      previewHint: "Is this color communicating the right message?",
      correctAnswer: "Consistent Colors",
      description: "Blue is used for a positive increase. Green should indicate positive changes, not blue.",
      transforms: [
        {
          type: "class",
          broken: "text-blue-600",
          fixed: "text-green-600"
        }
      ]
    },
    {
      id: "color-users",
      name: "Users Growth",
      emoji: "🎨",
      selector: "[data-zone='color-users']",
      previewHint: "Does this color match what it's communicating?",
      correctAnswer: "Consistent Colors",
      description: "Pink/white is used for positive user growth. Green should indicate positive metrics.",
      transforms: [
        {
          type: "class",
          broken: "text-pink-600",
          fixed: "text-green-600"
        }
      ]
    },
    {
      id: "color-conversion",
      name: "Conversion Drop",
      emoji: "🎨",
      selector: "[data-zone='color-conversion']",
      previewHint: "A decrease is shown here - what color should it be?",
      correctAnswer: "Consistent Colors",
      description: "Orange is used for a negative decrease. Red should indicate negative changes.",
      transforms: [
        {
          type: "class",
          broken: "text-orange-600",
          fixed: "text-red-600"
        }
      ]
    },
    {
      id: "color-orders",
      name: "Orders Increase",
      emoji: "🎨",
      selector: "[data-zone='color-orders']",
      previewHint: "New orders is positive - what color should indicate that?",
      correctAnswer: "Consistent Colors",
      description: "Red is used for positive order increases. Green should indicate positive metrics, red means negative.",
      transforms: [
        {
          type: "class",
          broken: "text-red-600",
          fixed: "text-green-600"
        }
      ]
    },
    {
      id: "color-status-complete",
      name: "Complete Status",
      emoji: "🎨",
      selector: "[data-zone='color-status-complete']",
      previewHint: "Complete means success - what color represents that?",
      correctAnswer: "Consistent Colors",
      description: "Red background is used for 'Complete' status. Green should indicate success/completion.",
      transforms: [
        {
          type: "class",
          broken: "bg-red-100 text-red-700",
          fixed: "bg-green-100 text-green-700"
        }
      ]
    },
    {
      id: "color-status-pending",
      name: "Pending Status",
      emoji: "🎨",
      selector: "[data-zone='color-status-pending']",
      previewHint: "Pending means waiting - what color represents that?",
      correctAnswer: "Consistent Colors",
      description: "Green is used for 'Pending' status. Yellow/amber should indicate waiting states.",
      transforms: [
        {
          type: "class",
          broken: "bg-green-100 text-green-700",
          fixed: "bg-yellow-100 text-yellow-700"
        }
      ]
    },
    {
      id: "color-status-failed",
      name: "Failed Status",
      emoji: "🎨",
      selector: "[data-zone='color-status-failed']",
      previewHint: "Failed means error - what color represents that?",
      correctAnswer: "Consistent Colors",
      description: "Blue is used for 'Failed' status. Red should indicate errors and failures.",
      transforms: [
        {
          type: "class",
          broken: "bg-blue-100 text-blue-700",
          fixed: "bg-red-100 text-red-700"
        }
      ]
    },
    {
      id: "tiny-buttons",
      name: "Quick Actions Card",
      emoji: "👆",
      selector: "[data-zone='tiny-buttons']",
      previewHint: "How easy is it to click these interactive elements?",
      correctAnswer: "Fitts's Law",
      description: "The buttons and tags are too small to tap easily, especially on mobile. Interactive elements need adequate size for reliable interaction.",
      transforms: []
    },
    {
      id: "button-styles",
      name: "Analytics Controls",
      emoji: "🎛️",
      selector: "[data-zone='button-styles']",
      previewHint: "Are similar controls styled consistently?",
      correctAnswer: "Reusable Patterns",
      description: "Mixing a checkbox with a pill button for the same function (selecting a time period) creates confusion. Similar controls should look the same.",
      transforms: []
    },
    {
      id: "typography-mess",
      name: "Balance Card",
      emoji: "✏️",
      selector: "[data-zone='typography-mess']",
      previewHint: "Is there a clear reading order and text hierarchy?",
      correctAnswer: "Typography Hierarchy",
      description: "Typography doesn't guide the eye - all caps label, inconsistent weights, no clear reading order. Proper hierarchy helps users scan content.",
      transforms: []
    },
    {
      id: "misaligned-cards",
      name: "Weekly Cards",
      emoji: "📐",
      selector: "[data-zone='misaligned-cards']",
      previewHint: "Do these elements align and flow together?",
      correctAnswer: "Symmetry and Alignment",
      description: "Cards have different sizes, padding, and border radius. Aligned, equally-sized elements create visual harmony and order.",
      transforms: []
    },
    {
      id: "cramped-spacing",
      name: "Main Content Area",
      emoji: "📦",
      selector: "[data-zone='cramped-spacing']",
      previewHint: "Does the spacing help or hurt readability?",
      correctAnswer: "Whitespace",
      description: "Everything is crammed together without breathing room. Proper whitespace improves readability and establishes visual relationships.",
      transforms: []
    }
  ]
};

export default uxDetectiveConfig;
