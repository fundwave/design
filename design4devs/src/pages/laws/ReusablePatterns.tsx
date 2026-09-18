import { Check, Clock } from "lucide-react";
import { useState } from "react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function ReusablePatterns() {
  const game = useTimedGame();
  const [completedCount, setCompletedCount] = useState(0);
  const [completedItems, setCompletedItems] = useState<number[]>([]);

  const startInconsistent = () => {
    setCompletedCount(0);
    setCompletedItems([]);
    game.startBad();
  };

  const handleInconsistentComplete = (index: number) => {
    if (completedItems.includes(index)) return;
    const newCompleted = [...completedItems, index];
    setCompletedItems(newCompleted);
    const newCount = completedCount + 1;
    setCompletedCount(newCount);
    if (newCount >= 3) {
      game.completeBad();
    }
  };

  const startConsistent = () => {
    setCompletedCount(0);
    setCompletedItems([]);
    game.startGood();
  };

  const handleConsistentComplete = (index: number) => {
    if (completedItems.includes(index)) return;
    const newCompleted = [...completedItems, index];
    setCompletedItems(newCompleted);
    const newCount = completedCount + 1;
    setCompletedCount(newCount);
    if (newCount >= 3) {
      game.completeGood();
    }
  };

  const handleReset = () => {
    setCompletedCount(0);
    setCompletedItems([]);
    game.reset();
  };

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="🎯" title="Complete All Tasks" description="Click the action button on each card!" onStart={startInconsistent} />}

      {game.phase === "bad" && (
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">Complete all tasks</span>
            <span className="text-warning-text animate-pulse text-sm flex items-center gap-1">
              <Clock size={14} /> {completedCount}/3
            </span>
          </div>
          <div className="space-y-4">
            {/* Each card looks different */}
            <div className={`border rounded p-3 border-border transition ${completedItems.includes(0) ? "bg-success-bg border-success-border" : "bg-bg-tertiary"}`}>
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm mb-1">Morning jog</h4>
                {completedItems.includes(0) && <Check className="h-4 w-4 text-success-text" />}
              </div>
              <button onClick={() => handleInconsistentComplete(0)} disabled={completedItems.includes(0)} className="bg-ocean-500 text-white px-3 py-1 rounded text-xs mt-2 cursor-pointer disabled:opacity-50">
                Complete
              </button>
            </div>
            <div className={`rounded-lg p-3 transition ${completedItems.includes(1) ? "bg-success-bg border-2 border-success-border" : "bg-gradient-to-r from-amethyst-500 to-pink-500"}`}>
              <div className="flex items-center justify-between">
                <h4 className={`font-bold text-sm mb-1 ${completedItems.includes(1) ? "" : "text-white"}`}>Code review</h4>
                {completedItems.includes(1) && <Check className="h-4 w-4 text-success-text" />}
              </div>
              <button onClick={() => handleInconsistentComplete(1)} disabled={completedItems.includes(1)} className={`px-4 py-1 rounded-full text-xs mt-2 cursor-pointer disabled:opacity-50 ${completedItems.includes(1) ? "bg-ocean-500 text-white" : "text-amethyst-600 bg-bg-primary"}`}>
                Start
              </button>
            </div>
            <div className={`rounded-xl p-3 transition ${completedItems.includes(2) ? "bg-success-bg border-2 border-success-border" : "shadow-lg bg-gradient-to-br from-bg-secondary to-bg-tertiary"}`}>
              <div className="flex items-center justify-between">
                <h4 className="font-black text-sm mb-1">Buy groceries</h4>
                {completedItems.includes(2) && <Check className="h-4 w-4 text-success-text" />}
              </div>
              <button onClick={() => handleInconsistentComplete(2)} disabled={completedItems.includes(2)} className="text-ocean-600 underline text-xs cursor-pointer disabled:opacity-50">
                View list →
              </button>
            </div>
          </div>
        </div>
      )}

      {game.phase === "badDone" && (
        <ResultPhase
          time={game.badTime}
          message="Different patterns = relearning each time."
          buttonText="Try consistent patterns"
          onContinue={startConsistent}
          formatTime={game.formatTime}
        />
      )}

      {game.phase === "good" && (
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">Complete all tasks</span>
            <span className="text-success-text animate-pulse text-sm flex items-center gap-1">
              <Clock size={14} /> {completedCount}/3
            </span>
          </div>
          <div className="space-y-3">
            {/* All cards look the same */}
            {["Morning jog", "Code review", "Buy groceries"].map((task, i) => (
              <div key={i} className={`border-2 rounded-lg p-4 transition ${completedItems.includes(i) ? "bg-success-bg border-success-border" : "border-border hover:border-ocean-400 hover:shadow-md"}`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-sm">{task}</h4>
                  {completedItems.includes(i) && <Check className="h-4 w-4 text-success-text" />}
                </div>
                <button onClick={() => handleConsistentComplete(i)} disabled={completedItems.includes(i)} className="w-full bg-ocean-600 text-white px-3 py-2 rounded-lg text-xs hover:bg-ocean-700 transition cursor-pointer disabled:opacity-50">
                  Complete Task
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {game.phase === "done" && (
        <ComparisonPhase
          badTime={game.badTime}
          goodTime={game.goodTime}
          badLabel="Inconsistent"
          goodLabel="Consistent"
          message="Same pattern = learn once, use everywhere."
          onReset={handleReset}
          formatTime={game.formatTime}
        />
      )}
    </>
  );

  const badContent = (
    <div className="p-4 space-y-3">
      <div className="border rounded p-3 bg-bg-tertiary border-border">
        <h4 className="font-bold text-sm mb-1">Morning jog</h4>
        <button className="bg-ocean-500 text-white px-3 py-1 rounded text-xs mt-2">Complete</button>
      </div>
      <div className="bg-gradient-to-r from-amethyst-500 to-pink-500 rounded-lg p-3">
        <h4 className="font-bold text-sm mb-1 text-white">Code review</h4>
        <button className="text-amethyst-600 px-4 py-1 rounded-full text-xs mt-2 bg-bg-primary">Start</button>
      </div>
      <div className="shadow-lg rounded-xl p-3 bg-gradient-to-br from-bg-secondary to-bg-tertiary">
        <h4 className="font-black text-sm mb-1">Buy groceries</h4>
        <span className="text-ocean-600 underline text-xs">View list →</span>
      </div>
    </div>
  );

  const goodContent = (
    <div className="p-4 space-y-3">
      {["Morning jog", "Code review", "Buy groceries"].map((task, i) => (
        <div key={i} className="border-2 border-border rounded-lg p-4 hover:border-ocean-400 hover:shadow-md transition">
          <h4 className="font-bold text-sm mb-2">{task}</h4>
          <button className="w-full bg-ocean-600 text-white px-3 py-2 rounded-lg text-xs hover:bg-ocean-700 transition">Complete Task</button>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="Inconsistent patterns" badContent={badContent} goodTitle="Consistent patterns" goodContent={goodContent} />
    </>
  );
}
