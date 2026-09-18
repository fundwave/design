import { Check } from "lucide-react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, GameCard, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function Whitespace() {
  const game = useTimedGame();

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="🎯" title="Find the Delete Button" description="Click the delete button to remove the item!" onStart={game.startBad} />}

      {game.phase === "bad" && (
        <GameCard maxWidth="md">
          <TaskHeader task="Find the delete button" variant="bad" />
          <div className="bg-bg-primary p-2 rounded text-xs">
            <div className="flex items-center gap-1 p-1 border-b border-border">
              <span className="font-bold">Product</span>
              <span className="ml-auto font-bold">Qty</span>
              <span className="font-bold ml-2">Price</span>
              <span className="font-bold ml-2">Actions</span>
            </div>
            <div className="flex items-center gap-1 p-1 border-b border-border">
              <span>Keyboard</span>
              <span className="ml-auto">1</span>
              <span className="ml-2">$89</span>
              <button className="ml-2 text-ocean-600 text-xs cursor-pointer">Edit</button>
              <button onClick={game.completeBad} className="text-red-600 text-xs cursor-pointer">
                Delete
              </button>
            </div>
            <div className="flex items-center gap-1 p-1 border-b border-border">
              <span>Mouse</span>
              <span className="ml-auto">2</span>
              <span className="ml-2">$45</span>
              <button className="ml-2 text-ocean-600 text-xs cursor-pointer">Edit</button>
              <button className="text-red-600 text-xs cursor-pointer">Delete</button>
            </div>
            <div className="flex items-center gap-1 p-1">
              <span>Monitor</span>
              <span className="ml-auto">1</span>
              <span className="ml-2">$299</span>
              <button className="ml-2 text-ocean-600 text-xs cursor-pointer">Edit</button>
              <button className="text-red-600 text-xs cursor-pointer">Delete</button>
            </div>
          </div>
        </GameCard>
      )}

      {game.phase === "badDone" && (
        <ResultPhase time={game.badTime} message="Cramped layouts make scanning hard." buttonText="Try spacious layout" onContinue={game.startGood} formatTime={game.formatTime} />
      )}

      {game.phase === "good" && (
        <GameCard maxWidth="md">
          <TaskHeader task="Find the delete button" variant="good" />
          <div className="bg-bg-primary rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-bg-tertiary text-sm font-semibold">
              <span>Product</span>
              <span className="text-center">Qty</span>
              <span className="text-right">Price</span>
              <span className="text-right">Actions</span>
            </div>
            <div className="divide-y divide-border">
              <div className="grid grid-cols-4 gap-4 p-4 items-center">
                <span className="font-medium">Keyboard</span>
                <span className="text-center">1</span>
                <span className="text-right">$89</span>
                <div className="flex gap-3 justify-end">
                  <button className="text-ocean-600 hover:underline text-sm cursor-pointer">Edit</button>
                  <button onClick={game.completeGood} className="text-red-600 hover:underline text-sm cursor-pointer">
                    Delete
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-4 items-center">
                <span className="font-medium">Mouse</span>
                <span className="text-center">2</span>
                <span className="text-right">$45</span>
                <div className="flex gap-3 justify-end">
                  <button className="text-ocean-600 hover:underline text-sm cursor-pointer">Edit</button>
                  <button className="text-red-600 hover:underline text-sm cursor-pointer">Delete</button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-4 items-center">
                <span className="font-medium">Monitor</span>
                <span className="text-center">1</span>
                <span className="text-right">$299</span>
                <div className="flex gap-3 justify-end">
                  <button className="text-ocean-600 hover:underline text-sm cursor-pointer">Edit</button>
                  <button className="text-red-600 hover:underline text-sm cursor-pointer">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </GameCard>
      )}

      {game.phase === "done" && (
        <ComparisonPhase
          badTime={game.badTime}
          goodTime={game.goodTime}
          badLabel="Cramped"
          goodLabel="Spacious"
          message="Whitespace makes content scannable."
          onReset={game.reset}
          formatTime={game.formatTime}
        />
      )}
    </>
  );

  const badContent = (
    <div className="p-2">
      <div className="bg-bg-tertiary p-1 rounded text-xs">
        <div className="flex items-center gap-1 p-1 border-b border-border font-bold">
          <span>Product</span>
          <span className="ml-auto">Qty</span>
          <span className="ml-1">Price</span>
          <span className="ml-1">Actions</span>
        </div>
        <div className="flex items-center gap-1 p-1 border-b border-border">
          <span>Keyboard</span>
          <span className="ml-auto">1</span>
          <span className="ml-1">$89</span>
          <span className="ml-1 text-ocean-600">Edit</span>
          <span className="text-red-600">Del</span>
        </div>
        <div className="flex items-center gap-1 p-1">
          <span>Mouse</span>
          <span className="ml-auto">2</span>
          <span className="ml-1">$45</span>
          <span className="ml-1 text-ocean-600">Edit</span>
          <span className="text-red-600">Del</span>
        </div>
      </div>
    </div>
  );

  const goodContent = (
    <div className="p-4">
      <div className="rounded-lg overflow-hidden border border-border">
        <div className="grid grid-cols-4 gap-2 p-3 bg-bg-tertiary text-xs font-semibold">
          <span>Product</span>
          <span className="text-center">Qty</span>
          <span className="text-right">Price</span>
          <span className="text-right">Actions</span>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3 text-xs border-t border-border">
          <span>Keyboard</span>
          <span className="text-center">1</span>
          <span className="text-right">$89</span>
          <div className="flex gap-2 justify-end">
            <span className="text-ocean-600">Edit</span>
            <span className="text-red-600">Delete</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3 text-xs border-t border-border">
          <span>Mouse</span>
          <span className="text-center">2</span>
          <span className="text-right">$45</span>
          <div className="flex gap-2 justify-end">
            <span className="text-ocean-600">Edit</span>
            <span className="text-red-600">Delete</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="Cramped" badContent={badContent} goodTitle="Spacious" goodContent={goodContent} />
    </>
  );
}
