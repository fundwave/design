/**
 * Quiz Page
 * 
 * Dynamic quiz loader that renders any quiz from the registry.
 * Supports both component-based and config-driven quizzes.
 */

import { useEffect, useState, ComponentType } from "react";
import { useParams, Navigate } from "react-router-dom";

import { QuizEngine } from "../components/quiz/QuizEngine";
import { ConfigQuizEngine } from "../components/quiz/ConfigQuizEngine";
import { QuizConfig, BaseZone } from "../components/quiz/types";
import { ConfigQuiz } from "../components/quiz/config-types";
import { QUIZ_REGISTRY, CONFIG_QUIZ_REGISTRY } from "../quizzes/registry";

type LoadedQuiz = 
  | { type: "component"; config: QuizConfig<BaseZone> }
  | { type: "config"; config: ConfigQuiz; Template: ComponentType };

export function QuizPage() {
  const { quizSlug } = useParams<{ quizSlug: string }>();
  const [quiz, setQuiz] = useState<LoadedQuiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadQuiz() {
      if (!quizSlug) {
        setError("No quiz specified");
        setLoading(false);
        return;
      }

      // First check config-driven registry
      const configEntry = CONFIG_QUIZ_REGISTRY.find(q => q.slug === quizSlug);
      if (configEntry) {
        try {
          const { config, Template } = await configEntry.loadQuiz();
          setQuiz({ type: "config", config, Template });
        } catch (err) {
          setError(`Failed to load quiz: ${err}`);
        } finally {
          setLoading(false);
        }
        return;
      }

      // Fall back to component-based registry
      const entry = QUIZ_REGISTRY.find(q => q.slug === quizSlug);
      if (!entry) {
        setError(`Quiz "${quizSlug}" not found`);
        setLoading(false);
        return;
      }

      try {
        const module = await entry.loadConfig();
        setQuiz({ type: "component", config: module.default });
      } catch (err) {
        setError(`Failed to load quiz: ${err}`);
      } finally {
        setLoading(false);
      }
    }

    loadQuiz();
  }, [quizSlug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-ocean-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-secondary">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (error || !quiz) {
    return <Navigate to="/quizzes" replace />;
  }

  if (quiz.type === "config") {
    return <ConfigQuizEngine config={quiz.config} Template={quiz.Template} />;
  }

  return <QuizEngine config={quiz.config} />;
}
