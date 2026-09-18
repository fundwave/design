import { Check, Clock } from "lucide-react";
import { useState } from "react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, GameCard, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function LawOfProximity() {
  const game = useTimedGame();
  const [foundCount, setFoundCount] = useState(0);
  const [selectedScattered, setSelectedScattered] = useState<number[]>([]);
  const [selectedGrouped, setSelectedGrouped] = useState<number[]>([]);

  const startScattered = () => {
    setFoundCount(0);
    setSelectedScattered([]);
    game.startBad();
  };

  const handleScatteredFind = (isHome: boolean, index: number) => {
    if (selectedScattered.includes(index)) return;

    setSelectedScattered([...selectedScattered, index]);

    if (isHome) {
      const newCount = foundCount + 1;
      setFoundCount(newCount);
      if (newCount >= 3) {
        game.completeBad();
      }
    }
  };

  const startGrouped = () => {
    setFoundCount(0);
    setSelectedGrouped([]);
    game.startGood();
  };

  const handleGroupedFind = (isHome: boolean, index: number) => {
    if (selectedGrouped.includes(index)) return;

    setSelectedGrouped([...selectedGrouped, index]);

    if (isHome) {
      const newCount = foundCount + 1;
      setFoundCount(newCount);
      if (newCount >= 3) {
        game.completeGood();
      }
    }
  };

  const handleReset = () => {
    setFoundCount(0);
    setSelectedScattered([]);
    setSelectedGrouped([]);
    game.reset();
  };

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="🏠" title="Find the Home Tasks" description="Click all the home-related tasks!" onStart={startScattered} />}

      {game.phase === "bad" && (
        <GameCard>
          <TaskHeader task="Find home tasks" variant="bad" extra={<span className="text-warning-text animate-pulse text-sm flex items-center gap-1">{foundCount}/3</span>} />
          <div className="space-y-2">
            <button
              onClick={() => handleScatteredFind(false, 0)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                selectedScattered.includes(0) ? "bg-error-bg border-error-border" : "border-border hover:bg-bg-tertiary"
              }`}
            >
              <span className="text-xl">💼</span>
              <span className="text-sm">Reply to emails</span>
              {selectedScattered.includes(0) && <Check className="ml-auto h-4 w-4 text-error-text" />}
            </button>
            <button
              onClick={() => handleScatteredFind(true, 1)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                selectedScattered.includes(1) ? "bg-success-bg border-success-border" : "border-border hover:bg-bg-tertiary"
              }`}
            >
              <span className="text-xl">🏠</span>
              <span className="text-sm">Buy groceries</span>
              {selectedScattered.includes(1) && <Check className="ml-auto h-4 w-4 text-success-text" />}
            </button>
            <button
              onClick={() => handleScatteredFind(false, 2)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                selectedScattered.includes(2) ? "bg-error-bg border-error-border" : "border-border hover:bg-bg-tertiary"
              }`}
            >
              <span className="text-xl">🎯</span>
              <span className="text-sm">Morning meditation</span>
              {selectedScattered.includes(2) && <Check className="ml-auto h-4 w-4 text-error-text" />}
            </button>
            <button
              onClick={() => handleScatteredFind(false, 3)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                selectedScattered.includes(3) ? "bg-error-bg border-error-border" : "border-border hover:bg-bg-tertiary"
              }`}
            >
              <span className="text-xl">💼</span>
              <span className="text-sm">Team meeting</span>
              {selectedScattered.includes(3) && <Check className="ml-auto h-4 w-4 text-error-text" />}
            </button>
            <button
              onClick={() => handleScatteredFind(true, 4)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                selectedScattered.includes(4) ? "bg-success-bg border-success-border" : "border-border hover:bg-bg-tertiary"
              }`}
            >
              <span className="text-xl">🏠</span>
              <span className="text-sm">Do laundry</span>
              {selectedScattered.includes(4) && <Check className="ml-auto h-4 w-4 text-success-text" />}
            </button>
            <button
              onClick={() => handleScatteredFind(false, 5)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                selectedScattered.includes(5) ? "bg-error-bg border-error-border" : "border-border hover:bg-bg-tertiary"
              }`}
            >
              <span className="text-xl">💼</span>
              <span className="text-sm">Review PR</span>
              {selectedScattered.includes(5) && <Check className="ml-auto h-4 w-4 text-error-text" />}
            </button>
            <button
              onClick={() => handleScatteredFind(true, 6)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                selectedScattered.includes(6) ? "bg-success-bg border-success-border" : "border-border hover:bg-bg-tertiary"
              }`}
            >
              <span className="text-xl">🏠</span>
              <span className="text-sm">Pay bills</span>
              {selectedScattered.includes(6) && <Check className="ml-auto h-4 w-4 text-success-text" />}
            </button>
          </div>
        </GameCard>
      )}

      {game.phase === "badDone" && (
        <ResultPhase time={game.badTime} message="Scanning mixed items takes effort." buttonText="Try grouped layout" onContinue={startGrouped} formatTime={game.formatTime} />
      )}

      {game.phase === "good" && (
        <GameCard>
          <TaskHeader task="Find home tasks" variant="good" extra={<span className="text-success-text animate-pulse text-sm flex items-center gap-1">{foundCount}/3</span>} />
          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium text-text-tertiary mb-2 uppercase tracking-wide">🏠 Home</p>
              <div className="space-y-2">
                <button
                  onClick={() => handleGroupedFind(true, 0)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                    selectedGrouped.includes(0) ? "bg-success-bg border-success-border" : "border-border hover:bg-bg-tertiary"
                  }`}
                >
                  <span className="text-sm">Buy groceries</span>
                  {selectedGrouped.includes(0) && <Check className="ml-auto h-4 w-4 text-success-text" />}
                </button>
                <button
                  onClick={() => handleGroupedFind(true, 1)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                    selectedGrouped.includes(1) ? "bg-success-bg border-success-border" : "border-border hover:bg-bg-tertiary"
                  }`}
                >
                  <span className="text-sm">Do laundry</span>
                  {selectedGrouped.includes(1) && <Check className="ml-auto h-4 w-4 text-success-text" />}
                </button>
                <button
                  onClick={() => handleGroupedFind(true, 2)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                    selectedGrouped.includes(2) ? "bg-success-bg border-success-border" : "border-border hover:bg-bg-tertiary"
                  }`}
                >
                  <span className="text-sm">Pay bills</span>
                  {selectedGrouped.includes(2) && <Check className="ml-auto h-4 w-4 text-success-text" />}
                </button>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-text-tertiary mb-2 uppercase tracking-wide">💼 Work</p>
              <div className="space-y-2">
                <button
                  onClick={() => handleGroupedFind(false, 3)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                    selectedGrouped.includes(3) ? "bg-error-bg border-error-border" : "border-border hover:bg-bg-tertiary"
                  }`}
                >
                  <span className="text-sm">Reply to emails</span>
                  {selectedGrouped.includes(3) && <Check className="ml-auto h-4 w-4 text-error-text" />}
                </button>
                <button
                  onClick={() => handleGroupedFind(false, 4)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                    selectedGrouped.includes(4) ? "bg-error-bg border-error-border" : "border-border hover:bg-bg-tertiary"
                  }`}
                >
                  <span className="text-sm">Team meeting</span>
                  {selectedGrouped.includes(4) && <Check className="ml-auto h-4 w-4 text-error-text" />}
                </button>
                <button
                  onClick={() => handleGroupedFind(false, 5)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${
                    selectedGrouped.includes(5) ? "bg-error-bg border-error-border" : "border-border hover:bg-bg-tertiary"
                  }`}
                >
                  <span className="text-sm">Review PR</span>
                  {selectedGrouped.includes(5) && <Check className="ml-auto h-4 w-4 text-error-text" />}
                </button>
              </div>
            </div>
          </div>
        </GameCard>
      )}

      {game.phase === "done" && (
        <ComparisonPhase
          badTime={game.badTime}
          goodTime={game.goodTime}
          badLabel="Mixed list"
          goodLabel="Grouped list"
          message="Grouping makes scanning instant."
          onReset={handleReset}
          formatTime={game.formatTime}
        />
      )}
    </>
  );

  const badContent = (
    <div className="space-y-2">
      {[
        { icon: "💼", text: "Reply to emails" },
        { icon: "🏠", text: "Buy groceries" },
        { icon: "💼", text: "Team meeting" },
        { icon: "🏠", text: "Do laundry" },
        { icon: "💼", text: "Review PR" },
        { icon: "🏠", text: "Pay bills" }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-2 border border-border rounded">
          <span>{item.icon}</span>
          <span className="text-sm">{item.text}</span>
        </div>
      ))}
    </div>
  );

  const goodContent = (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-medium text-text-tertiary mb-2">🏠 Home</p>
        <div className="space-y-1">
          <div className="p-2 border border-ocean-200 bg-ocean-50 rounded text-sm">Buy groceries</div>
          <div className="p-2 border border-ocean-200 bg-ocean-50 rounded text-sm">Do laundry</div>
          <div className="p-2 border border-ocean-200 bg-ocean-50 rounded text-sm">Pay bills</div>
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-text-tertiary mb-2">💼 Work</p>
        <div className="space-y-1">
          <div className="p-2 border border-border rounded text-sm">Reply to emails</div>
          <div className="p-2 border border-border rounded text-sm">Team meeting</div>
          <div className="p-2 border border-border rounded text-sm">Review PR</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="No grouping" badContent={badContent} goodTitle="Clear grouping" goodContent={goodContent} />
    </>
  );
}
