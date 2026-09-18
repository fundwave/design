/**
 * E-Commerce Website Quiz - Config
 */

import type { ConfigQuiz } from "../../components/quiz/config-types";

export const ecommerceConfig: ConfigQuiz = {
  id: "ecommerce",
  title: "Shop Fixer",
  emoji: "🛒",
  description: "Find conversion-killing UX issues in this online store.",
  slug: "ecommerce",
  theme: "emerald",
  baseTemplate: "custom",

  intro: {
    badge: "Conversion Challenge",
    badgeIcon: "trophy",
    title: "Shop Fixer",
    subtitle: "Find {count} issues hurting conversions in this store",
    description: "This e-commerce site has UX problems that drive customers away. Find and fix them to boost sales!",
    features: [
      { emoji: "🛍️", title: "Product Display", description: "Examine how products are presented" },
      { emoji: "💳", title: "Trust Signals", description: "Check for conversion elements" },
      { emoji: "✨", title: "Optimize", description: "Watch conversions improve" }
    ],
    buttonText: "Start Fixing"
  },

  labels: {
    zoneName: "issue",
    zoneNamePlural: "issues",
    answerName: "principle",
    answerNamePlural: "principles",
    progressTitle: "Issues Resolved",
    missionTitle: "Your Mission",
    missionDescription: "This online store is losing customers due to poor UX. Click on problem areas and identify which principle they violate.",
    celebrationTitle: "Store Optimized!",
    celebrationSubtitle: "Conversions are about to skyrocket",
    pickerTitle: "Which principle is violated?",
    pickerSubtitle: "Select the design principle this area breaks"
  },

  answerOptions: [
    { name: "Typography Hierarchy", emoji: "👁️", description: "Guide attention to what matters most - prices, CTAs, key info.", category: "Visual Design" },
    { name: "Consistent Colors", emoji: "🎨", description: "Use consistent color meanings to communicate trust and urgency.", category: "Visual Design" },
    { name: "Fitts's Law", emoji: "🎯", description: "Important buttons should be large and easy to click.", category: "Interaction" },
    { name: "Hick's Law", emoji: "⏱️", description: "Don't overwhelm users - simplify choices and information.", category: "UX" },
    { name: "Reusable Patterns", emoji: "🔄", description: "Similar elements should look and work the same way.", category: "Patterns" },
    { name: "Predictable Interactions", emoji: "💬", description: "Users need clear feedback about their actions and system state.", category: "UX" },
    { name: "Whitespace", emoji: "⬜", description: "Proper spacing helps important elements stand out.", category: "Layout" },
    { name: "Contrast", emoji: "🌓", description: "Important elements need strong visual contrast.", category: "Accessibility" }
  ],

  zones: [
    {
      id: "product-images",
      name: "Product Image",
      emoji: "🖼️",
      selector: "[data-zone='product-images']",
      previewHint: "Is the product image compelling and trustworthy?",
      correctAnswer: "Contrast",
      description: "Low-quality, washed-out product images lack visual impact. Strong, clear images with good contrast increase confidence.",
      transforms: []
    },
    {
      id: "price-display",
      name: "Price Display",
      emoji: "💰",
      selector: "[data-zone='price-display']",
      previewHint: "Does the price stand out and communicate value?",
      correctAnswer: "Typography Hierarchy",
      description: "The price is hard to find and doesn't show savings. Clear pricing with discounts highlighted drives conversions.",
      transforms: []
    },
    {
      id: "buy-button",
      name: "Buy Button",
      emoji: "🛒",
      selector: "[data-zone='buy-button']",
      previewHint: "Is the buy button easy to find and click?",
      correctAnswer: "Fitts's Law",
      description: "The buy button is too small and doesn't stand out. Primary CTAs need to be large, prominent, and clickable.",
      transforms: []
    },
    {
      id: "reviews-section",
      name: "Reviews",
      emoji: "⭐",
      selector: "[data-zone='reviews-section']",
      previewHint: "Do reviews help build confidence?",
      correctAnswer: "Whitespace",
      description: "Reviews are cramped and hard to read. Proper spacing helps users scan and trust customer feedback.",
      transforms: []
    },
    {
      id: "stock-status",
      name: "Stock Status",
      emoji: "📦",
      selector: "[data-zone='stock-status']",
      previewHint: "Is there urgency to purchase now?",
      correctAnswer: "Consistent Colors",
      description: "Stock status uses unclear or inconsistent colors. Red for low stock, green for in-stock creates clear communication.",
      transforms: []
    },
    {
      id: "product-options",
      name: "Product Options",
      emoji: "🎨",
      selector: "[data-zone='product-options']",
      previewHint: "Are the options easy to understand and select?",
      correctAnswer: "Hick's Law",
      description: "Too many options with unclear labels overwhelm users. Simplify choices and show clear previews.",
      transforms: []
    },
    {
      id: "trust-badges",
      name: "Trust Badges",
      emoji: "🛡️",
      selector: "[data-zone='trust-badges']",
      previewHint: "Are there trust signals to reassure buyers?",
      correctAnswer: "Reusable Patterns",
      description: "Security elements and badges use inconsistent styling. Familiar, consistent patterns help users recognize trust signals.",
      transforms: []
    },
    {
      id: "cart-feedback",
      name: "Add to Cart",
      emoji: "✓",
      selector: "[data-zone='cart-feedback']",
      previewHint: "What happens when you add to cart?",
      correctAnswer: "Predictable Interactions",
      description: "No feedback when adding to cart. Users need confirmation that their action was successful.",
      transforms: []
    }
  ]
};

export default ecommerceConfig;
