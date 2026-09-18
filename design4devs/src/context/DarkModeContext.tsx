import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { STORAGE_KEYS } from "../constants/storage-keys";

interface DarkModeContextType {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDark, setIsDark] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage after mount (SSR-safe)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
    if (saved !== null) {
      setIsDark(JSON.parse(saved));
    }
    setIsInitialized(true);
  }, []);

  // Sync to localStorage and update DOM
  useEffect(() => {
    if (!isInitialized) return;
    
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark, isInitialized]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

export function useDarkMode(): DarkModeContextType {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within DarkModeProvider");
  }
  return context;
}
