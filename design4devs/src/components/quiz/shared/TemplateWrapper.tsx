/**
 * Template Wrapper
 * 
 * Common wrapper for quiz templates with consistent styling.
 */

import { ReactNode } from "react";
import { useZoneContext } from "../ZoneRenderer";

interface TemplateWrapperProps {
  children: ReactNode;
  totalZones: number;
  theme?: "ocean" | "amethyst" | "emerald" | "rose" | "slate" | "amber";
  className?: string;
}

const themeBorders: Record<string, string> = {
  ocean: "border-ocean-400 shadow-ocean-500/20",
  amethyst: "border-amethyst-400 shadow-amethyst-500/20",
  emerald: "border-emerald-400 shadow-emerald-500/20",
  rose: "border-rose-400 shadow-rose-500/20",
  slate: "border-slate-400 shadow-slate-500/20",
  amber: "border-amber-400 shadow-amber-500/20",
};

export function TemplateWrapper({ 
  children, 
  totalZones, 
  theme = "ocean",
  className = "" 
}: TemplateWrapperProps) {
  const { fixedZones } = useZoneContext();
  const isComplete = fixedZones.size === totalZones;

  return (
    <div
      className={`min-h-[500px] sm:min-h-[600px] rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 bg-white dark:bg-slate-900 ${
        isComplete ? themeBorders[theme] : "border-slate-200 dark:border-slate-700"
      } ${className}`}
    >
      {children}
    </div>
  );
}
