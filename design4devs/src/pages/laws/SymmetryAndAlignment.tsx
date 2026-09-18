import { Check, CheckSquare, Clock, Square } from "lucide-react";
import { useState } from "react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, GameCard, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function SymmetryAndAlignment() {
  const game = useTimedGame();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const startMisaligned = () => {
    setCheckedItems([]);
    game.startBad();
  };

  const handleMisalignedCheck = (index: number) => {
    if (checkedItems.includes(index)) return;
    const newChecked = [...checkedItems, index];
    setCheckedItems(newChecked);
    if (newChecked.length >= 4) {
      game.completeBad();
    }
  };

  const startAligned = () => {
    setCheckedItems([]);
    game.startGood();
  };

  const handleAlignedCheck = (index: number) => {
    if (checkedItems.includes(index)) return;
    const newChecked = [...checkedItems, index];
    setCheckedItems(newChecked);
    if (newChecked.length >= 4) {
      game.completeGood();
    }
  };

  const handleReset = () => {
    setCheckedItems([]);
    game.reset();
  };

  const settingsItems = [
    { title: "Dark mode", description: "Use dark theme" },
    { title: "Notifications", description: "Enable push alerts" },
    { title: "Auto-save", description: "Save changes automatically" },
    { title: "Email digest", description: "Weekly summary email" }
  ];

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="☑️" title="Enable All Settings" description="Find and enable all 4 settings!" onStart={startMisaligned} />}

      {game.phase === "bad" && (
        <GameCard>
          <TaskHeader
            task="Enable all settings"
            variant="bad"
            extra={
              <span className="text-warning-text animate-pulse text-sm flex items-center gap-1">
                <Clock size={14} /> {checkedItems.length}/4
              </span>
            }
          />
          <div className="bg-bg-primary rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="text-sm font-medium">{settingsItems[0].title}</div>
                <div className="text-xs text-text-tertiary">{settingsItems[0].description}</div>
              </div>
              <button onClick={() => handleMisalignedCheck(0)} className="cursor-pointer">
                {checkedItems.includes(0) ? <CheckSquare size={20} className="text-ocean-600" /> : <Square size={20} className="text-text-tertiary hover:text-ocean-600" />}
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => handleMisalignedCheck(1)} className="cursor-pointer">
                {checkedItems.includes(1) ? <CheckSquare size={20} className="text-ocean-600" /> : <Square size={20} className="text-text-tertiary hover:text-ocean-600" />}
              </button>
              <div>
                <div className="text-sm font-medium">{settingsItems[1].title}</div>
                <div className="text-xs text-text-tertiary">{settingsItems[1].description}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="text-center">
                <div className="text-sm font-medium">{settingsItems[2].title}</div>
                <div className="text-xs text-text-tertiary">{settingsItems[2].description}</div>
              </div>
              <button onClick={() => handleMisalignedCheck(2)} className="cursor-pointer">
                {checkedItems.includes(2) ? <CheckSquare size={20} className="text-ocean-600" /> : <Square size={20} className="text-text-tertiary hover:text-ocean-600" />}
              </button>
            </div>
            <div className="flex items-center gap-3 flex-row-reverse">
              <div className="flex-1 text-right">
                <div className="text-sm font-medium">{settingsItems[3].title}</div>
                <div className="text-xs text-text-tertiary">{settingsItems[3].description}</div>
              </div>
              <button onClick={() => handleMisalignedCheck(3)} className="cursor-pointer">
                {checkedItems.includes(3) ? <CheckSquare size={20} className="text-ocean-600" /> : <Square size={20} className="text-text-tertiary hover:text-ocean-600" />}
              </button>
            </div>
          </div>
        </GameCard>
      )}

      {game.phase === "badDone" && (
        <ResultPhase time={game.badTime} message="Misalignment breaks scanning patterns." buttonText="Try aligned layout" onContinue={startAligned} formatTime={game.formatTime} />
      )}

      {game.phase === "good" && (
        <GameCard>
          <TaskHeader
            task="Enable all settings"
            variant="good"
            extra={
              <span className="text-success-text animate-pulse text-sm flex items-center gap-1">
                <Clock size={14} /> {checkedItems.length}/4
              </span>
            }
          />
          <div className="bg-bg-primary rounded-lg overflow-hidden">
            {settingsItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleAlignedCheck(i)}
                className="w-full flex items-center gap-3 p-4 hover:bg-bg-tertiary transition text-left cursor-pointer border-b border-border last:border-b-0"
              >
                {checkedItems.includes(i) ? <CheckSquare size={20} className="text-ocean-600 flex-shrink-0" /> : <Square size={20} className="text-text-tertiary flex-shrink-0" />}
                <div className="flex-1">
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-text-tertiary">{item.description}</div>
                </div>
              </button>
            ))}
          </div>
        </GameCard>
      )}

      {game.phase === "done" && (
        <ComparisonPhase
          badTime={game.badTime}
          goodTime={game.goodTime}
          badLabel="Misaligned"
          goodLabel="Aligned"
          message="Alignment creates visual flow and larger click targets."
          onReset={handleReset}
          formatTime={game.formatTime}
        />
      )}
    </>
  );

  const badContent = (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="text-sm font-medium">Dark mode</div>
          <div className="text-xs text-text-tertiary">Use dark theme</div>
        </div>
        <Square size={18} className="text-text-tertiary" />
      </div>
      <div className="flex items-center gap-3">
        <Square size={18} className="text-text-tertiary" />
        <div>
          <div className="text-sm font-medium">Notifications</div>
          <div className="text-xs text-text-tertiary">Enable push alerts</div>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center">
        <div className="text-center">
          <div className="text-sm font-medium">Auto-save</div>
          <div className="text-xs text-text-tertiary">Save changes automatically</div>
        </div>
        <Square size={18} className="text-text-tertiary" />
      </div>
    </div>
  );

  const goodContent = (
    <div className="overflow-hidden rounded-lg border border-border">
      {settingsItems.slice(0, 3).map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-3 hover:bg-bg-tertiary transition border-b border-border last:border-b-0 cursor-pointer">
          <Square size={18} className="text-text-tertiary flex-shrink-0" />
          <div>
            <div className="text-sm font-medium">{item.title}</div>
            <div className="text-xs text-text-tertiary">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="Misaligned" badContent={badContent} goodTitle="Well aligned" goodContent={goodContent} />
    </>
  );
}
