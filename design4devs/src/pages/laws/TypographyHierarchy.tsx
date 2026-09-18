import { Check } from "lucide-react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, GameCard, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function TypographyHierarchy() {
  const game = useTimedGame();

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="📰" title="Find the Price" description="Scan the product card to find the price!" onStart={game.startBad} />}

      {game.phase === "bad" && (
        <GameCard>
          <TaskHeader task="Find the price" variant="bad" />
          <div className="bg-bg-primary p-4 rounded-lg">
            <div className="text-sm text-text-primary mb-2">New Arrival</div>
            <div className="text-sm text-text-primary mb-2">Premium Wireless Headphones</div>
            <div className="text-sm text-text-primary mb-2">
              Experience crystal-clear audio with our latest noise-cancelling technology. Perfect for music lovers and professionals alike.
            </div>
            <div className="text-sm text-text-primary mb-2">Available in Black, White, Navy</div>
            <button onClick={game.completeBad} className="text-sm text-text-primary mb-2 text-left w-full cursor-pointer hover:text-ocean-600">
              $299.00
            </button>
            <div className="text-sm text-text-primary mb-2">Free shipping on orders over $50</div>
            <div className="text-sm text-text-primary">★★★★☆ 4.8 (2,847 reviews)</div>
          </div>
        </GameCard>
      )}

      {game.phase === "badDone" && (
        <ResultPhase
          time={game.badTime}
          message="Flat typography forces line-by-line reading."
          buttonText="Try with hierarchy"
          onContinue={game.startGood}
          formatTime={game.formatTime}
        />
      )}

      {game.phase === "good" && (
        <GameCard>
          <TaskHeader task="Find the price" variant="good" />
          <div className="bg-bg-primary p-4 rounded-lg">
            <p className="text-xs font-medium text-ocean-600 uppercase tracking-wide mb-1">New Arrival</p>
            <h2 className="text-xl font-bold mb-2">Premium Wireless Headphones</h2>
            <p className="text-sm text-text-secondary mb-3">Experience crystal-clear audio with our latest noise-cancelling technology.</p>
            <button onClick={game.completeGood} className="text-2xl font-bold text-text-primary mb-2 cursor-pointer hover:text-ocean-600">
              $299.00
            </button>
            <p className="text-xs text-text-tertiary mb-3">Free shipping • Black, White, Navy</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-amber-500">★★★★☆</span>
              <span className="text-text-tertiary">4.8 (2,847)</span>
            </div>
          </div>
        </GameCard>
      )}

      {game.phase === "done" && (
        <ComparisonPhase
          badTime={game.badTime}
          goodTime={game.goodTime}
          badLabel="Flat text"
          goodLabel="Clear hierarchy"
          message="Type hierarchy guides the eye to key info."
          onReset={game.reset}
          formatTime={game.formatTime}
        />
      )}
    </>
  );

  const badContent = (
    <div className="p-4 space-y-1">
      <p className="text-sm">New Arrival</p>
      <p className="text-sm">Premium Headphones</p>
      <p className="text-sm">Great sound quality</p>
      <p className="text-sm">$299.00</p>
      <p className="text-sm">Free shipping</p>
    </div>
  );

  const goodContent = (
    <div className="p-4">
      <p className="text-xs text-ocean-600 font-medium uppercase mb-1">New Arrival</p>
      <h3 className="text-lg font-bold mb-1">Premium Headphones</h3>
      <p className="text-sm text-text-secondary mb-2">Great sound quality</p>
      <p className="text-xl font-bold mb-1">$299.00</p>
      <p className="text-xs text-text-tertiary">Free shipping</p>
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="Flat typography" badContent={badContent} goodTitle="Clear hierarchy" goodContent={goodContent} />
    </>
  );
}
