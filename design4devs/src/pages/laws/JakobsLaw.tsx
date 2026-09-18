import { Check, Search } from "lucide-react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, GameCard, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function JakobsLaw() {
  const game = useTimedGame();

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="🔍" title="Find the Search" description="Find and click the search feature as fast as you can!" onStart={game.startBad} />}

      {game.phase === "bad" && (
        <GameCard>
          <TaskHeader task="Find the search" variant="bad" />
          <div className="space-y-3">
            <div className="text-center">
              <button
                onClick={game.completeBad}
                className="inline-flex items-center gap-2 border-2 border-purple-500 rounded-full px-4 py-2 text-purple-600 hover:bg-purple-50 transition cursor-pointer"
              >
                <span>✨</span>
                <span className="text-sm font-medium">Discover Items</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["🎨", "🎵", "📸", "🎮", "💫", "🌈"].map((emoji, i) => (
                <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center text-2xl">
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </GameCard>
      )}

      {game.phase === "badDone" && (
        <ResultPhase
          time={game.badTime}
          message="Unfamiliar patterns slow users down."
          buttonText="Try a familiar pattern"
          onContinue={game.startGood}
          formatTime={game.formatTime}
        />
      )}

      {game.phase === "good" && (
        <GameCard>
          <TaskHeader task="Find the search" variant="good" />
          <div className="space-y-3">
            <button
              onClick={game.completeGood}
              className="w-full flex items-center gap-2 border border-border rounded-lg px-4 py-2 hover:border-ocean-400 transition cursor-pointer"
            >
              <Search size={18} className="text-text-tertiary" />
              <span className="text-text-tertiary text-sm">Search items...</span>
            </button>
            <div className="grid grid-cols-3 gap-2">
              {["🎨", "🎵", "📸", "🎮", "💫", "🌈"].map((emoji, i) => (
                <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center text-2xl">
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </GameCard>
      )}

      {game.phase === "done" && (
        <ComparisonPhase
          badTime={game.badTime}
          goodTime={game.goodTime}
          badLabel="Unusual UI"
          goodLabel="Familiar UI"
          message="Familiar patterns = instant recognition."
          onReset={game.reset}
          formatTime={game.formatTime}
        />
      )}
    </>
  );

  const badContent = (
    <div className="space-y-3">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 border-2 border-purple-500 rounded-full px-4 py-2 text-purple-600">
          <span>✨</span>
          <span className="text-sm font-medium">Discover Items</span>
        </div>
      </div>
      <div className="flex gap-3 p-3 border border-border rounded-lg">
        <div className="w-10 h-10 bg-bg-tertiary rounded"></div>
        <div className="flex-1">
          <div className="h-3 bg-text-secondary rounded w-2/3 mb-2"></div>
          <div className="h-2 bg-text-tertiary rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex gap-3 p-3 border border-border rounded-lg">
        <div className="w-10 h-10 bg-bg-tertiary rounded"></div>
        <div className="flex-1">
          <div className="h-3 bg-text-secondary rounded w-1/2 mb-2"></div>
          <div className="h-2 bg-text-tertiary rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );

  const goodContent = (
    <div className="space-y-3">
      <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2">
        <Search size={16} className="text-text-tertiary" />
        <span className="text-text-tertiary text-sm">Search items...</span>
      </div>
      <div className="flex gap-3 p-3 border border-border rounded-lg">
        <div className="w-10 h-10 bg-bg-tertiary rounded"></div>
        <div className="flex-1">
          <div className="h-3 bg-text-secondary rounded w-2/3 mb-2"></div>
          <div className="h-2 bg-text-tertiary rounded w-1/2"></div>
        </div>
      </div>
      <div className="flex gap-3 p-3 border border-border rounded-lg">
        <div className="w-10 h-10 bg-bg-tertiary rounded"></div>
        <div className="flex-1">
          <div className="h-3 bg-text-secondary rounded w-1/2 mb-2"></div>
          <div className="h-2 bg-text-tertiary rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="Unfamiliar pattern" badContent={badContent} goodTitle="Familiar pattern" goodContent={goodContent} />
    </>
  );
}
