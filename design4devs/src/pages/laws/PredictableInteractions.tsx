import { Check, Loader2 } from "lucide-react";
import { useState } from "react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, GameCard, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function PredictableInteractions() {
  const game = useTimedGame();
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const startNoFeedback = () => {
    setClickCount(0);
    game.startBad();
  };

  const handleNoFeedbackClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 1) {
      setTimeout(() => {
        game.completeBad();
      }, 3000);
    }
  };

  const startWithFeedback = () => {
    setClickCount(0);
    setIsLoading(false);
    setIsDisabled(false);
    setInputValue("john@email.com");
    game.startGood();
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setIsDisabled(value.length < 3);
  };

  const handleWithFeedbackClick = () => {
    setIsLoading(true);
    setClickCount(1);
    setTimeout(() => {
      game.completeGood();
    }, 1000);
  };

  const handleReset = () => {
    setClickCount(0);
    setIsLoading(false);
    setIsDisabled(true);
    setInputValue("");
    game.reset();
  };

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="🔘" title="Submit a Form" description="Click submit and see what happens!" onStart={startNoFeedback} />}

      {game.phase === "bad" && (
        <GameCard>
          <TaskHeader task="Submit the form" variant="bad" />
          <div className="bg-bg-primary rounded-lg p-4 space-y-4">
            <div>
              <span className="text-text-secondary text-sm">Email</span>
              <input type="email" value="john@email.com" readOnly className="mt-1 w-full p-3 bg-bg-tertiary rounded-lg text-sm" />
            </div>
            <button onClick={handleNoFeedbackClick} className="w-full py-3 rounded-lg bg-gray-400 text-white text-sm cursor-pointer">
              Submit
            </button>
          </div>
          {clickCount > 0 && <p className="text-xs text-warning-text mt-3 text-center">Clicked {clickCount} time(s)... is it working? 🤔</p>}
        </GameCard>
      )}

      {game.phase === "badDone" && (
        <div className="text-center py-6">
          <p className="text-5xl font-bold text-warning-text mb-2">{game.badTime && game.formatTime(game.badTime)}</p>
          <p className="text-text-secondary mb-2">You clicked {clickCount} time(s) - uncertainty!</p>
          <p className="text-text-tertiary text-sm mb-6">No feedback = "Did it work?"</p>
          <button onClick={startWithFeedback} className="btn btn-primary">
            Try with feedback
          </button>
        </div>
      )}

      {game.phase === "good" && (
        <GameCard>
          <TaskHeader task="Submit the form" variant="good" />
          <div className="bg-bg-primary rounded-lg p-4 space-y-4">
            <div>
              <label className="text-text-secondary text-sm font-medium">Email</label>
              <input
                type="email"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Type 3+ characters..."
                className="mt-1 w-full p-3 border border-border rounded-lg text-sm focus:border-ocean-400 focus:ring-1 focus:ring-ocean-400 outline-none transition"
              />
              {inputValue.length > 0 && inputValue.length < 3 && <p className="text-xs text-warning-text mt-1">Need {3 - inputValue.length} more character(s)</p>}
            </div>
            <button
              onClick={handleWithFeedbackClick}
              disabled={isDisabled || isLoading}
              className={`w-full py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition cursor-pointer
                ${
                  isDisabled
                    ? "bg-bg-tertiary text-text-tertiary cursor-not-allowed border-2 border-dashed border-border"
                    : isLoading
                      ? "bg-ocean-400 text-white cursor-wait"
                      : "bg-ocean-600 text-white hover:bg-ocean-700"
                }`}
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : isDisabled ? (
                "Submit (fill form first)"
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </GameCard>
      )}

      {game.phase === "done" && (
        <div className="text-center py-6">
          <div className="flex justify-center gap-8 mb-6">
            <div>
              <p className="text-3xl font-bold text-warning-text">{game.badTime && game.formatTime(game.badTime)}</p>
              <p className="text-text-secondary text-sm">No feedback</p>
              <p className="text-xs text-text-tertiary">{clickCount > 1 ? `${clickCount} clicks (confused)` : "1 click"}</p>
            </div>
            <div className="text-2xl text-text-secondary">→</div>
            <div>
              <p className="text-3xl font-bold text-success-text">{game.goodTime && game.formatTime(game.goodTime)}</p>
              <p className="text-text-secondary text-sm">With feedback</p>
              <p className="text-xs text-text-tertiary">Confident interaction</p>
            </div>
          </div>
          <p className="text-text-secondary mb-4">Clear states = confident users.</p>
          <button onClick={handleReset} className="btn btn-secondary btn-sm">
            Try again
          </button>
        </div>
      )}
    </>
  );

  const badContent = (
    <div className="p-4 space-y-4">
      <div>
        <span className="text-text-secondary text-sm">Email</span>
        <input type="email" value="john@email.com" readOnly className="mt-1 w-full p-3 bg-bg-tertiary rounded-lg text-sm" />
      </div>
      <button className="w-full py-3 rounded-lg bg-gray-400 text-white text-sm">Submit</button>
    </div>
  );

  const goodContent = (
    <div className="p-4 space-y-4">
      <div>
        <label className="text-text-secondary text-sm font-medium">Email</label>
        <input
          type="email"
          value="john@email.com"
          readOnly
          className="mt-1 w-full p-3 border border-border rounded-lg text-sm"
        />
      </div>
      <button className="w-full py-3 rounded-lg bg-ocean-600 text-white text-sm font-medium hover:bg-ocean-700 transition">
        Submit
      </button>
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="No feedback" badContent={badContent} goodTitle="Clear button states" goodContent={goodContent} />
    </>
  );
}
