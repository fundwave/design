import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate } from "react-router-dom";

import { ComponentGuide } from "../constants/routes";

import { ThemeColor } from "../types";

const THEME_STYLES = {
  amethyst: {
    gradient: "bg-gradient-to-r from-amethyst-500 to-amethyst-600",
    text: "text-amethyst-500",
    hoverText: "hover:text-amethyst-500"
  },
  ocean: {
    gradient: "bg-gradient-to-r from-ocean-500 to-ocean-600",
    text: "text-ocean-500",
    hoverText: "hover:text-ocean-500"
  },
  mountain: {
    gradient: "bg-gradient-to-r from-mountain-500 to-mountain-600",
    text: "text-mountain-500",
    hoverText: "hover:text-mountain-500"
  }
} as const;

interface NavLink {
  path: string;
  name: string;
  theme: ThemeColor;
  label: string;
}

interface ContentWrapperProps {
  currentPath: string;
  children: ReactNode;
  contentList: ComponentGuide["items"];
  currentGuide: ComponentGuide;
  nextGuide?: ComponentGuide;
}

interface MarkdownState {
  content: string;
  isLoading: boolean;
}

function useMarkdownContent(currentPath: string): MarkdownState {
  const [state, setState] = useState<MarkdownState>({ content: "", isLoading: true });

  useEffect(() => {
    setState({ content: "", isLoading: true });

    const mdFiles = import.meta.glob("../pages/content/*.md", { query: "?raw", import: "default" });
    const file = currentPath.split("/").filter(Boolean).pop();
    const relPath = `../pages/content/${file}.md`;

    if (mdFiles[relPath]) {
      mdFiles[relPath]()
        .then((content) => setState({ content: content as string, isLoading: false }))
        .catch(() => setState({ content: "", isLoading: false }));
    } else {
      setState({ content: "", isLoading: false });
    }
  }, [currentPath]);

  return state;
}

function MarkdownSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-bg-tertiary rounded w-3/4" />
      <div className="h-4 bg-bg-tertiary rounded w-full" />
      <div className="h-4 bg-bg-tertiary rounded w-5/6" />
      <div className="h-4 bg-bg-tertiary rounded w-2/3" />
    </div>
  );
}

function PrevButton({ link }: { link: NavLink }) {
  return (
    <Link to={link.path} className="group flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-bg-secondary transition-all duration-200">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-bg-tertiary group-hover:bg-bg-secondary transition-colors">
        <ChevronLeft className="text-secondary w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium text-tertiary mb-0.5">{link.label}</div>
        <div className="font-semibold truncate text-primary">{link.name}</div>
      </div>
    </Link>
  );
}

function NextButton({ link }: { link: NavLink }) {
  const styles = THEME_STYLES[link.theme];

  return (
    <Link
      to={link.path}
      className={`group flex items-center gap-3 p-4 text-white rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${styles.gradient}`}
    >
      <div className="flex-1 min-w-0 text-right">
        <div className="text-xs font-medium text-white/70 mb-0.5">{link.label}</div>
        <div className="font-semibold truncate">{link.name}</div>
      </div>
      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-white/20">
        <ChevronRight className="text-white w-4 h-4" />
      </div>
    </Link>
  );
}

export default function ContentWrapper({ currentPath, children, contentList, currentGuide, nextGuide }: ContentWrapperProps) {
  const contentData = contentList.find((item) => item.path === currentPath);
  const contentMd = useMarkdownContent(currentPath);
  const navigate = useNavigate();

  if (!contentData) {
    return <div>Content not found</div>;
  }

  const currentIndex = contentList.findIndex((item) => item.path === currentPath);
  const prevItem = currentIndex > 0 ? contentList[currentIndex - 1] : null;
  const nextItem = currentIndex < contentList.length - 1 ? contentList[currentIndex + 1] : null;

  const prevLink: NavLink = prevItem
    ? { path: prevItem.path, name: prevItem.name, theme: currentGuide.themeColor, label: "Previous" }
    : { path: currentGuide.path, name: currentGuide.title, theme: currentGuide.themeColor, label: "Back to Guide" };

  const nextLink: NavLink | null = nextItem
    ? { path: nextItem.path, name: nextItem.name, theme: currentGuide.themeColor, label: "Next" }
    : nextGuide
      ? { path: nextGuide.path, name: nextGuide.title, theme: nextGuide.themeColor, label: "Next Guide" }
      : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{contentData.emoji}</span>
          <span
            className={`text-xs font-medium text-tertiary uppercase tracking-wider cursor-pointer ${THEME_STYLES[currentGuide.themeColor].hoverText}`}
            onClick={() => navigate(currentGuide.path)}
          >
            Lesson {currentIndex + 1} of {contentList.length}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">{contentData.name}</h1>
        <p className="text-lg text-secondary leading-relaxed">{contentData.description}</p>
      </header>

      {/* Interactive demo */}
      {children}

      {/* Principle explanation */}
      <article className="mt-8 p-6 rounded-xl bg-bg-secondary border border-border-muted">
        <h2 className="text-lg font-semibold mb-4 text-primary">The Principle</h2>
        <div className="prose max-w-none">
          {contentMd.isLoading ? (
            <MarkdownSkeleton />
          ) : contentMd.content ? (
            <ReactMarkdown>{contentMd.content}</ReactMarkdown>
          ) : (
            <p className="text-secondary italic">No additional content available.</p>
          )}
        </div>
      </article>

      {/* Navigation */}
      <nav className="mt-10 pt-8 border-t border-border-muted grid md:grid-cols-2 gap-4">
        <PrevButton link={prevLink} />
        {nextLink ? <NextButton link={nextLink} /> : <div />}
      </nav>
    </div>
  );
}
