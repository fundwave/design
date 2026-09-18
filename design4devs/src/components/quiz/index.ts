/**
 * Quiz Component Exports
 */

// Original component-based quiz system
export { QuizEngine } from "./QuizEngine";
export { AnswerPicker } from "./AnswerPicker";
export * from "./types";

// Config-driven quiz system
export { ConfigQuizEngine } from "./ConfigQuizEngine";
export { ConfigAnswerPicker } from "./ConfigAnswerPicker";
export { ZoneProvider, Zone, ZoneContent, ZoneOverlay, useZoneContext, useAutoZoneDetector } from "./ZoneRenderer";
export * from "./config-types";

// Shared reusable components for templates
export * from "./shared";
