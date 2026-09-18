/**
 * Accessibility Audit Intro Screen
 */

import { ArrowRight, Eye, Sparkles } from "lucide-react";

import { IntroComponentProps } from "../../components/quiz/types";

export function AccessibilityIntro({ config, onStart }: IntroComponentProps) {
  return (
    <div className="w-full bg-bg-primary min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 pointer-events-none grid-pattern" />
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amethyst-500/10 border border-amethyst-500/20 mb-8">
          <Eye className="w-4 h-4 text-amethyst-500" />
          <span className="text-sm font-medium text-amethyst-500">Accessibility Challenge</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-primary">
          {config.emoji} {config.title}
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed mb-4">
          This landing page <span className="text-primary font-medium">looks great</span>, but it has{" "}
          <span className="text-primary font-medium">{config.zones.length} accessibility barriers</span> that exclude users.
        </p>
        <p className="text-base text-secondary max-w-xl mx-auto leading-relaxed mb-10">
          Find issues that affect people with disabilities and learn which WCAG guidelines to follow.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-bg-secondary/80 backdrop-blur rounded-2xl p-6 border border-border/50">
            <div className="text-4xl mb-4">🔍</div>
            <div className="font-semibold text-primary mb-1">Find Barriers</div>
            <div className="text-sm text-secondary">Spot issues that exclude users</div>
          </div>
          <div className="bg-bg-secondary/80 backdrop-blur rounded-2xl p-6 border border-border/50">
            <div className="text-4xl mb-4">📋</div>
            <div className="font-semibold text-primary mb-1">Learn WCAG</div>
            <div className="text-sm text-secondary">Match issues to guidelines</div>
          </div>
          <div className="bg-bg-secondary/80 backdrop-blur rounded-2xl p-6 border border-border/50">
            <div className="text-4xl mb-4">✨</div>
            <div className="font-semibold text-primary mb-1">See the Fix</div>
            <div className="text-sm text-secondary">Watch barriers disappear</div>
          </div>
        </div>

        <button onClick={onStart} className="group btn-gradient-ocean text-lg px-8 py-4">
          <Sparkles className="w-5 h-5" />
          Start Accessibility Audit
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
