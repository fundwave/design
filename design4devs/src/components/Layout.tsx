import { Moon, Sun } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDarkMode } from "../context/DarkModeContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-bg-primary backdrop-blur border-border/50" : "bg-transparent border-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-14">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={isDark ? "/logo-dark.png" : "/logo-light.png"} alt="Design4Devs" className="h-7 w-auto" />
            <span className="font-semibold bg-gradient-to-r from-ocean-500 to-amethyst-500 bg-clip-text text-transparent">Design4Devs</span>
          </Link>

          <button onClick={toggleDarkMode} className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-bg-tertiary transition-colors cursor-pointer" aria-label="Toggle dark mode">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
