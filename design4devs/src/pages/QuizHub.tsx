/**
 * Quiz Hub Page
 * 
 * Lists all available quizzes for the user to choose from.
 */

import { ArrowRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

import { ALL_QUIZZES, CONFIG_QUIZ_REGISTRY, QUIZ_REGISTRY } from "../quizzes/registry";
import { getTotalScore } from "../components/quiz/ConfigQuizEngine";

export function QuizHub() {
  const { score, total } = getTotalScore();
  const themeColors: Record<string, string> = {
    ocean: "from-ocean-500 to-cyan-500",
    amethyst: "from-amethyst-500 to-fuchsia-500",
    amber: "from-amber-500 to-orange-500",
    emerald: "from-emerald-500 to-teal-500",
    rose: "from-rose-500 to-pink-500",
    slate: "from-slate-500 to-gray-500",
  };

  const themeBorders: Record<string, string> = {
    ocean: "hover:border-ocean-400",
    amethyst: "hover:border-amethyst-400",
    amber: "hover:border-amber-400",
    emerald: "hover:border-emerald-400",
    rose: "hover:border-rose-400",
    slate: "hover:border-slate-400",
  };

  // Combine all quizzes for display
  const allQuizzes = [
    ...CONFIG_QUIZ_REGISTRY,
    ...QUIZ_REGISTRY.filter(q => q.id !== "ux-detective"), // Filter legacy UX detective
  ];

  return (
    <div className="w-full bg-bg-primary min-h-[calc(100vh-3.5rem)]">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 pointer-events-none grid-pattern" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-500">Interactive Challenges</span>
            {total > 0 && (
              <>
                <span className="text-amber-300">•</span>
                <span className="text-sm font-bold text-amber-600">{score}/{total}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            Design Quizzes
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Test your design knowledge with interactive challenges. Spot issues, 
            identify principles, and watch designs transform.
          </p>
        </div>

        {/* Quiz Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {allQuizzes.map((quiz) => (
            <Link
              key={quiz.id}
              to={`/quiz/${quiz.slug}`}
              className={`group relative bg-bg-secondary rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${themeBorders[quiz.themeColor]}`}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${themeColors[quiz.themeColor]}`} />
              
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${themeColors[quiz.themeColor]} flex items-center justify-center text-2xl shadow-lg`}>
                  {quiz.emoji}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary mb-1 group-hover:text-ocean-600 transition-colors">
                    {quiz.title}
                  </h2>
                  <p className="text-sm text-secondary mb-4">
                    {quiz.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-ocean-600 group-hover:text-ocean-700">
                    Start Quiz
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <p className="text-secondary text-sm">
            More quizzes coming soon! Check back for Color Theory, Component Design, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
