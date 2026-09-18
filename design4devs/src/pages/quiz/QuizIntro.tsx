import { ArrowRight, Sparkles, Trophy } from "lucide-react";

interface QuizIntroProps {
  onStart: () => void;
}

export function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="w-full bg-bg-primary min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 pointer-events-none grid-pattern" />
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span className="text-sm font-medium text-amber-500">Final Challenge</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-primary">🕵️ UX Detective</h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed mb-4">
          This dashboard <span className="text-primary font-medium">looks professional</span>, but it violates{" "}
          <span className="text-primary font-medium">10 UX laws</span> you've learned.
        </p>
        <p className="text-base text-secondary max-w-xl mx-auto leading-relaxed mb-10">
          Click on problematic areas, then identify which law was broken. Wrong guesses cost you points!
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-bg-secondary/80 backdrop-blur rounded-2xl p-6 border border-border/50">
            <div className="text-4xl mb-4">🔍</div>
            <div className="font-semibold text-primary mb-1">Spot Issues</div>
            <div className="text-sm text-secondary">Find UX problems hiding in plain sight</div>
          </div>
          <div className="bg-bg-secondary/80 backdrop-blur rounded-2xl p-6 border border-border/50">
            <div className="text-4xl mb-4">🎯</div>
            <div className="font-semibold text-primary mb-1">Name the Law</div>
            <div className="text-sm text-secondary">Pick which UX law was violated</div>
          </div>
          <div className="bg-bg-secondary/80 backdrop-blur rounded-2xl p-6 border border-border/50">
            <div className="text-4xl mb-4">✨</div>
            <div className="font-semibold text-primary mb-1">Watch it Fix</div>
            <div className="text-sm text-secondary">See the design transform instantly</div>
          </div>
        </div>

        <button onClick={onStart} className="group btn-gradient-ocean text-lg px-8 py-4">
          <Sparkles className="w-5 h-5" />
          Start Detective Mode
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
