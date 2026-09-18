import { ArrowRight, Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

import { COMPONENT_GUIDES, ROUTES } from "../constants/routes";

// Move constant arrays outside component to prevent recreation on each render
const FEATURES = [
  {
    icon: "🎮",
    title: "Interactive Games",
    description: "Experience design principles through timed challenges"
  },
  {
    icon: "⚡",
    title: "Instant Feedback",
    description: "See the difference good design makes in real-time"
  },
  {
    icon: "📸",
    title: "Shareable Results",
    description: "Copy comparison screenshots to share with your team"
  }
] as const;

export default function Home() {
  return (
    <div className="w-full bg-bg-primary">
      {/* Grid extends behind header */}
      <div className="absolute inset-0 pointer-events-none grid-pattern" />

      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 sm:px-6 py-16 hero-gradient">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-500/10 border border-ocean-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-ocean-500" />
            <span className="text-sm font-medium text-ocean-500">For developers • Free lessons</span>
          </div>

          {/* Main heading */}
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="text-primary">Stop guessing.</span>
            <br />
            <span className="bg-gradient-to-r from-ocean-500 to-amethyst-500 bg-clip-text text-transparent">Start designing.</span>
          </h1>

          <p className="text-l md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Understand the UX laws and principles behind great interfaces.
            <br />
            Speak design fluently.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={COMPONENT_GUIDES[0].path} className="group btn-gradient-ocean text-lg">
              Start with {COMPONENT_GUIDES[0].badgeText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Learn by doing, not reading</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl bg-bg-secondary/50 border border-border/50">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 border-t border-border/50 bg-gradient-to-b from-amber-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-500">Final Challenge</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            🕵️ Ready to Test Your Skills?
          </h2>
          <p className="text-secondary mb-8 max-w-xl mx-auto">
            After completing all guides, put your knowledge to the test! 
            Find all the UX violations hidden in a "real" dashboard.
          </p>
          <Link to={ROUTES.DESIGN_QUIZ} className="group inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
            Take the UX Detective Quiz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
