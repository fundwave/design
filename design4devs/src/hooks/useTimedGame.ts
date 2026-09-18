import { useCallback, useState } from "react";

import { GamePhase } from "../types/game";

// Re-export for convenience
export type { GamePhase };

interface UseTimedGameReturn {
  phase: GamePhase;
  badTime: number | null;
  goodTime: number | null;
  startBad: () => void;
  completeBad: () => void;
  startGood: () => void;
  completeGood: () => void;
  reset: () => void;
  formatTime: (ms: number) => string;
}

/**
 * A reusable hook for timed comparison games used across UX law demos.
 * Uses standardized phases: intro → bad → badDone → good → done
 *
 * @returns Game state and control functions
 *
 * @example
 * const game = useTimedGame();
 *
 * // In intro phase
 * <button onClick={game.startBad}>Start</button>
 *
 * // When user completes bad task
 * <button onClick={game.completeBad}>Found it!</button>
 *
 * // In badDone phase
 * <button onClick={game.startGood}>Try better version</button>
 *
 * // When user completes good task
 * <button onClick={game.completeGood}>Found it!</button>
 *
 * // In done phase
 * <ComparisonPhase badTime={game.badTime} goodTime={game.goodTime} onReset={game.reset} />
 */
export function useTimedGame(): UseTimedGameReturn {
  const [phase, setPhase] = useState<GamePhase>("intro");
  const [startTime, setStartTime] = useState<number>(0);
  const [badTime, setBadTime] = useState<number | null>(null);
  const [goodTime, setGoodTime] = useState<number | null>(null);

  const formatTime = useCallback((ms: number) => (ms / 1000).toFixed(2) + "s", []);

  const startBad = useCallback(() => {
    setPhase("bad");
    setStartTime(Date.now());
  }, []);

  const completeBad = useCallback(() => {
    setBadTime(Date.now() - startTime);
    setPhase("badDone");
  }, [startTime]);

  const startGood = useCallback(() => {
    setPhase("good");
    setStartTime(Date.now());
  }, []);

  const completeGood = useCallback(() => {
    setGoodTime(Date.now() - startTime);
    setPhase("done");
  }, [startTime]);

  const reset = useCallback(() => {
    setPhase("intro");
    setStartTime(0);
    setBadTime(null);
    setGoodTime(null);
  }, []);

  return {
    phase,
    badTime,
    goodTime,
    startBad,
    completeBad,
    startGood,
    completeGood,
    reset,
    formatTime
  };
}
