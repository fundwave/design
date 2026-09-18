/**
 * Centralized storage keys to avoid magic strings
 */
export const STORAGE_KEYS = {
  DARK_MODE: "darkMode",
  DESIGN_CHECKLIST: "designChecklist",
  QUIZ_SCORES: "quizScores",
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];
