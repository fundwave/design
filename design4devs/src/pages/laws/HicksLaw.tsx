import { Airplay, Check, Cloud, Hash, Inbox, Instagram, Link, Mail, MessageCircle, MessageSquare, Slack, Twitter, Users } from "lucide-react";

import { GameComparisonWrapper } from "../../components/GameComparisonWrapper";
import { ComparisonPhase, GameCard, IntroPhase, ResultPhase, TaskHeader } from "../../components/GamePhases";
import { useTimedGame } from "../../hooks/useTimedGame";

export default function HicksLaw() {
  const game = useTimedGame();

  const shareOptions = [
    { title: "Email", icon: Mail, color: "text-blue-600" },
    { title: "Slack", icon: Slack, color: "text-purple-500" },
    { title: "WhatsApp", icon: MessageCircle, color: "text-green-500" },
    { title: "Drive", icon: Cloud, color: "text-yellow-600" },
    { title: "Dropbox", icon: Inbox, color: "text-blue-400" },
    { title: "Link", icon: Link, color: "text-gray-500" },
    { title: "AirDrop", icon: Airplay, color: "text-cyan-500" },
    { title: "Message", icon: MessageSquare, color: "text-indigo-500" },
    { title: "Teams", icon: Users, color: "text-blue-800" },
    { title: "Discord", icon: Hash, color: "text-indigo-400" },
    { title: "Instagram", icon: Instagram, color: "text-pink-500" },
    { title: "Twitter", icon: Twitter, color: "text-sky-500" }
  ];

  const gameContent = (
    <>
      {game.phase === "intro" && <IntroPhase emoji="📤" title="Share a File via a link" description="How fast can you share the file link?" onStart={game.startBad} />}

      {game.phase === "bad" && (
        <GameCard>
          <TaskHeader task='Share "Report.pdf"' variant="bad" />
          <div className="grid grid-cols-2 gap-4">
            {shareOptions.map((option) => (
              <button key={option.title} onClick={game.completeBad} className="btn btn-secondary btn-sm">
                {option.icon && <option.icon className={`btn-icon ${option.color}`} />}
                {option.title}
              </button>
            ))}
          </div>
        </GameCard>
      )}

      {game.phase === "badDone" && (
        <ResultPhase
          time={game.badTime}
          message="12 options. Your brain had to scan them all."
          buttonText="Try a better way"
          onContinue={game.startGood}
          formatTime={game.formatTime}
        />
      )}

      {game.phase === "good" && (
        <GameCard>
          <TaskHeader task='Share "Report.pdf"' variant="good" />
          <div className="space-y-3">
            <button onClick={game.completeGood} className="btn btn-primary btn-lg w-full">
              <Link size={20} /> Copy Link
            </button>
            <button onClick={game.completeGood} className="btn btn-secondary w-full">
              More sharing options...
            </button>
          </div>
        </GameCard>
      )}

      {game.phase === "done" && (
        <ComparisonPhase
          badTime={game.badTime}
          goodTime={game.goodTime}
          badLabel="12 options"
          goodLabel="2 options"
          message="One obvious choice = instant decision."
          onReset={game.reset}
          formatTime={game.formatTime}
        />
      )}
    </>
  );

  const badContent = (
    <div className="grid grid-cols-3 gap-4">
      {shareOptions.slice(0, 9).map((option) => (
        <button key={option.title} className="btn btn-secondary btn-sm cursor-pointer">
          {option.icon && <option.icon className={`btn-icon ${option.color}`} />}
          {option.title}
        </button>
      ))}
    </div>
  );

  const goodContent = (
    <div className="space-y-3">
      <div className="bg-ocean-600 text-white py-3.5 rounded-lg font-medium text-center flex items-center justify-center gap-2">
        <Link size={18} /> Copy Link
      </div>
      <div className="py-3 rounded-lg border border-border text-center text-sm text-text-secondary">More options...</div>
    </div>
  );

  return (
    <>
      <GameComparisonWrapper gameContent={gameContent} badTitle="Too many choices" badContent={badContent} goodTitle="Clear primary action" goodContent={goodContent} />
    </>
  );
}
