import { AlertCircle, Check, Clock } from "lucide-react";
import { useState } from "react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, GameCard, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function ConsistentColors() {
  const game = useTimedGame();
  const [errorCount, setErrorCount] = useState(0);
  const [foundCount, setFoundCount] = useState(0);
  const [selectedRandom, setSelectedRandom] = useState<number[]>([]);
  const [selectedConsistent, setSelectedConsistent] = useState<number[]>([]);

  // Random colors - user must read to find errors
  const randomItems = [
    { text: "server-auth.ts", status: "error", color: "bg-ocean-500" },
    { text: "styles.css", status: "ok", color: "bg-red-500" },
    { text: "api-routes.ts", status: "error", color: "bg-green-500" },
    { text: "utils.js", status: "ok", color: "bg-amethyst-500" }
  ];

  // Consistent colors - red = error, green = success
  const consistentItems = [
    { text: "server-auth.ts", status: "error", color: "bg-red-500" },
    { text: "styles.css", status: "ok", color: "bg-green-500" },
    { text: "api-routes.ts", status: "error", color: "bg-red-500" },
    { text: "utils.js", status: "ok", color: "bg-green-500" }
  ];

  const startRandom = () => {
    setFoundCount(0);
    setErrorCount(0);
    setSelectedRandom([]);
    game.startBad();
  };

  const handleRandomClick = (status: string, index: number) => {
    if (selectedRandom.includes(index)) return;
    setSelectedRandom([...selectedRandom, index]);
    
    if (status === "error") {
      const newCount = foundCount + 1;
      setFoundCount(newCount);
      if (newCount >= 2) {
        game.completeBad();
      }
    } else {
      setErrorCount((prev) => prev + 1);
    }
  };

  const startConsistent = () => {
    setFoundCount(0);
    setErrorCount(0);
    setSelectedConsistent([]);
    game.startGood();
  };

  const handleConsistentClick = (status: string, index: number) => {
    if (selectedConsistent.includes(index)) return;
    setSelectedConsistent([...selectedConsistent, index]);
    
    if (status === "error") {
      const newCount = foundCount + 1;
      setFoundCount(newCount);
      if (newCount >= 2) {
        game.completeGood();
      }
    } else {
      setErrorCount((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setFoundCount(0);
    setErrorCount(0);
    setSelectedRandom([]);
    setSelectedConsistent([]);
    game.reset();
  };

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="🔴" title="Find the Failing Files" description="Click the files with build errors!" onStart={startRandom} />}

      {game.phase === "bad" && (
        <GameCard>
          <TaskHeader
            task="Find failing files"
            variant="bad"
            extra={
              <span className="text-warning-text animate-pulse text-sm flex items-center gap-1">
                <Clock size={14} /> {foundCount}/2
              </span>
            }
          />
          <div className="bg-bg-primary rounded-lg p-3 font-mono text-sm">
            <div className="text-text-tertiary text-xs mb-2">Build Status</div>
            <div className="space-y-2">
              {randomItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleRandomClick(item.status, i)}
                  disabled={selectedRandom.includes(i)}
                  className={`w-full flex items-center gap-3 p-2 rounded transition text-left cursor-pointer disabled:opacity-50 ${
                    selectedRandom.includes(i) 
                      ? item.status === "error" 
                        ? "bg-success-bg border border-success-border" 
                        : "bg-error-bg border border-error-border"
                      : "hover:bg-bg-tertiary"
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm">{item.text}</span>
                  <span className="ml-auto text-xs text-text-tertiary">{item.status === "error" ? "failed" : "passed"}</span>
                  {selectedRandom.includes(i) && (
                    <Check className={`h-4 w-4 ${item.status === "error" ? "text-success-text" : "text-error-text"}`} />
                  )}
                </button>
              ))}
            </div>
          </div>
          {errorCount > 0 && (
            <p className="text-xs text-error-text mt-3 flex items-center gap-1 justify-center">
              <AlertCircle size={12} /> Clicked {errorCount} passing file(s)
            </p>
          )}
        </GameCard>
      )}

      {game.phase === "badDone" && (
        <ResultPhase
          time={game.badTime}
          message="You had to read each status label."
          buttonText="Try with color system"
          onContinue={startConsistent}
          formatTime={game.formatTime}
        />
      )}

      {game.phase === "good" && (
        <GameCard>
          <TaskHeader
            task="Find failing files"
            variant="good"
            extra={
              <span className="text-success-text animate-pulse text-sm flex items-center gap-1">
                <Clock size={14} /> {foundCount}/2
              </span>
            }
          />
          <div className="flex gap-4 text-xs mb-3 text-text-secondary">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500"></span> Error
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Passed
            </span>
          </div>
          <div className="bg-bg-primary rounded-lg p-3 font-mono text-sm">
            <div className="text-text-tertiary text-xs mb-2">Build Status</div>
            <div className="space-y-2">
              {consistentItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleConsistentClick(item.status, i)}
                  disabled={selectedConsistent.includes(i)}
                  className={`w-full flex items-center gap-3 p-2 rounded transition text-left cursor-pointer disabled:opacity-50 ${
                    selectedConsistent.includes(i) 
                      ? item.status === "error" 
                        ? "bg-success-bg border border-success-border" 
                        : "bg-error-bg border border-error-border"
                      : "hover:bg-bg-tertiary"
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm">{item.text}</span>
                  {selectedConsistent.includes(i) && (
                    <Check className={`ml-auto h-4 w-4 ${item.status === "error" ? "text-success-text" : "text-error-text"}`} />
                  )}
                </button>
              ))}
            </div>
          </div>
          {errorCount > 0 && (
            <p className="text-xs text-error-text mt-3 flex items-center gap-1 justify-center">
              <AlertCircle size={12} /> Clicked {errorCount} passing file(s)
            </p>
          )}
        </GameCard>
      )}

      {game.phase === "done" && (
        <ComparisonPhase
          badTime={game.badTime}
          goodTime={game.goodTime}
          badLabel="Random colors"
          goodLabel="Color system"
          message="Meaningful colors = instant recognition."
          onReset={handleReset}
          formatTime={game.formatTime}
        />
      )}
    </>
  );

  const badContent = (
    <div className="p-4">
      <div className="text-text-tertiary text-xs mb-2">Build Status</div>
      <div className="font-mono text-sm space-y-2">
        <div className="flex items-center gap-3 p-2 rounded bg-bg-tertiary">
          <div className="w-3 h-3 rounded-full bg-ocean-500"></div>
          <span>server-auth.ts</span>
          <span className="ml-auto text-xs text-text-tertiary">failed</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded bg-bg-tertiary">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span>styles.css</span>
          <span className="ml-auto text-xs text-text-tertiary">passed</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded bg-bg-tertiary">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>api-routes.ts</span>
          <span className="ml-auto text-xs text-text-tertiary">failed</span>
        </div>
      </div>
    </div>
  );

  const goodContent = (
    <div className="p-4">
      <div className="flex gap-4 text-xs mb-3 text-text-secondary">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500"></span> Error
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> Passed
        </span>
      </div>
      <div className="text-text-tertiary text-xs mb-2">Build Status</div>
      <div className="font-mono text-sm space-y-2">
        <div className="flex items-center gap-3 p-2 rounded bg-bg-tertiary">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span>server-auth.ts</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded bg-bg-tertiary">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>styles.css</span>
        </div>
        <div className="flex items-center gap-3 p-2 rounded bg-bg-tertiary">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span>api-routes.ts</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="Random colors" badContent={badContent} goodTitle="Meaningful colors" goodContent={goodContent} />
    </>
  );
}
