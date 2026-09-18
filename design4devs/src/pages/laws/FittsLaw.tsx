import { Check, Clock, MousePointer2 } from "lucide-react";
import { useState } from "react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, GameCard, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function FittsLaw() {
  const game = useTimedGame();
  const [smallClicks, setSmallClicks] = useState<number[]>([]);
  const [largeClicks, setLargeClicks] = useState<number[]>([]);
  const [clickStartTime, setClickStartTime] = useState<number>(0);
  const [currentTarget, setCurrentTarget] = useState({ x: 50, y: 50 });
  const [targetSize, setTargetSize] = useState(40);

  const avgTime = (times: number[]) => (times.length ? times.reduce((a, b) => a + b, 0) / times.length : 0);

  const generateRandomPosition = () => {
    return {
      x: 15 + Math.random() * 70, // 15-85% to keep buttons in view
      y: 15 + Math.random() * 70
    };
  };

  const startSmall = () => {
    setSmallClicks([]);
    setTargetSize(40);
    setCurrentTarget(generateRandomPosition());
    setClickStartTime(Date.now());
    game.startBad();
  };

  const handleSmallClick = () => {
    const time = Date.now() - clickStartTime;
    const newClicks = [...smallClicks, time];
    setSmallClicks(newClicks);
    setCurrentTarget(generateRandomPosition());
    setClickStartTime(Date.now());
    if (newClicks.length >= 5) {
      game.completeBad();
    }
  };

  const startLarge = () => {
    setLargeClicks([]);
    setTargetSize(120);
    setCurrentTarget({ x: 50, y: 50 });
    setClickStartTime(Date.now());
    game.startGood();
  };

  const handleLargeClick = () => {
    const time = Date.now() - clickStartTime;
    const newClicks = [...largeClicks, time];
    setLargeClicks(newClicks);
    setCurrentTarget({ x: 50, y: 50 });
    setClickStartTime(Date.now());
    if (newClicks.length >= 5) {
      game.completeGood();
    }
  };

  const handleReset = () => {
    game.reset();
    setSmallClicks([]);
    setLargeClicks([]);
  };

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="🎯" title="Click the Target" description="Click the moving target 5 times as fast as you can!" onStart={startSmall} />}

      {game.phase === "bad" && (
        <GameCard maxWidth="md">
          <TaskHeader task="Click the target" variant="bad" extra={<span className="text-text-tertiary text-sm">{smallClicks.length}/5</span>} />
          <div className="relative h-80 bg-bg-tertiary rounded-lg overflow-hidden">
            <button
              onClick={handleSmallClick}
              style={{
                position: "absolute",
                top: `${currentTarget.y}%`,
                left: `${currentTarget.x}%`,
                transform: "translate(-50%, -50%)",
                width: `${targetSize}px`,
                height: `${targetSize}px`
              }}
              className="bg-ocean-600 text-white rounded-full hover:bg-ocean-700 transition cursor-pointer flex items-center justify-center font-bold text-lg shadow-lg"
            >
              {smallClicks.length + 1}
            </button>
          </div>
        </GameCard>
      )}

      {game.phase === "badDone" && (
        <ResultPhase
          time={avgTime(smallClicks)}
          message="Small, moving targets are hard to hit."
          buttonText="Try larger target"
          onContinue={startLarge}
          formatTime={game.formatTime}
        />
      )}

      {game.phase === "good" && (
        <GameCard maxWidth="md">
          <TaskHeader task="Click the target" variant="good" extra={<span className="text-text-tertiary text-sm">{largeClicks.length}/5</span>} />
          <div className="relative h-80 bg-bg-tertiary rounded-lg flex items-center justify-center">
            <button
              onClick={handleLargeClick}
              style={{
                width: `${targetSize}px`,
                height: `${targetSize}px`
              }}
              className="bg-ocean-600 text-white rounded-full hover:bg-ocean-700 transition cursor-pointer flex items-center justify-center font-bold text-2xl shadow-lg"
            >
              {largeClicks.length + 1}
            </button>
          </div>
        </GameCard>
      )}

      {game.phase === "done" && (
        <ComparisonPhase
          badTime={avgTime(smallClicks)}
          goodTime={avgTime(largeClicks)}
          badLabel="Small moving target"
          goodLabel="Large target"
          message="Bigger targets = faster clicks. Distance matters!"
          onReset={handleReset}
          formatTime={game.formatTime}
        />
      )}
    </>
  );

  const badContent = (
    <div className="relative h-64 bg-bg-tertiary rounded-lg overflow-hidden">
      <div className="absolute w-10 h-10 bg-ocean-600 text-white rounded-full flex items-center justify-center text-xs font-bold" style={{ top: "30%", left: "60%", transform: "translate(-50%, -50%)" }}>
        1
      </div>
      <div className="absolute w-10 h-10 bg-ocean-600 text-white rounded-full flex items-center justify-center text-xs font-bold" style={{ top: "70%", left: "25%", transform: "translate(-50%, -50%)" }}>
        2
      </div>
      <div className="absolute w-10 h-10 bg-ocean-600 text-white rounded-full flex items-center justify-center text-xs font-bold" style={{ top: "50%", left: "85%", transform: "translate(-50%, -50%)" }}>
        3
      </div>
    </div>
  );

  const goodContent = (
    <div className="relative h-64 bg-bg-tertiary rounded-lg flex items-center justify-center">
      <div className="w-28 h-28 bg-ocean-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
        1
      </div>
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="Small, moving targets" badContent={badContent} goodTitle="Large, easy targets" goodContent={goodContent} />
    </>
  );
}
