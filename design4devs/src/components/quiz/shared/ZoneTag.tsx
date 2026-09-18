/**
 * Zone Tag Component
 * 
 * Reusable tag/badge components for zones.
 */

import { Zone, ZoneContent, useZoneContext } from "../ZoneRenderer";

interface ZoneTagsProps {
  id: string;
  tags: string[];
  brokenStyles?: (index: number) => string;
  fixedStyles?: string;
}

/**
 * Zone-aware tags with broken/fixed states
 */
export function ZoneTags({ id, tags, brokenStyles, fixedStyles }: ZoneTagsProps) {
  const defaultBroken = (i: number) => 
    i % 2 === 0 
      ? "text-[10px] px-1 bg-blue-100 text-blue-600 rounded" 
      : "text-[10px] px-1 bg-green-500 text-white rounded-full py-0.5";
  
  const defaultFixed = "text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md";

  return (
    <Zone id={id} className="flex flex-wrap gap-1">
      <ZoneContent
        zoneId={id}
        broken={
          <>
            {tags.map((tag, j) => (
              <span key={j} className={brokenStyles?.(j) || defaultBroken(j)}>
                {tag}
              </span>
            ))}
          </>
        }
        fixed={
          <>
            {tags.map((tag, j) => (
              <span key={j} className={fixedStyles || defaultFixed}>
                {tag}
              </span>
            ))}
          </>
        }
      />
    </Zone>
  );
}

interface StatusBadgeProps {
  status: string;
  variant?: "success" | "warning" | "error" | "info" | "neutral";
}

const statusVariants = {
  success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  error: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  neutral: "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
};

/**
 * Status badge with semantic colors
 */
export function StatusBadge({ status, variant = "neutral" }: StatusBadgeProps) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusVariants[variant]}`}>
      {status}
    </span>
  );
}

interface PriorityBadgeProps {
  priority: "high" | "medium" | "low";
  showLabel?: boolean;
}

/**
 * Priority badge with consistent color coding
 */
export function PriorityBadge({ priority, showLabel = true }: PriorityBadgeProps) {
  const colors = {
    high: "bg-red-100 text-red-600 border-red-200",
    medium: "bg-amber-100 text-amber-600 border-amber-200",
    low: "bg-slate-100 text-slate-600 border-slate-200",
  };

  const labels = {
    high: "🔴 High",
    medium: "🟡 Medium",
    low: "⚪ Low",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${colors[priority]}`}>
      {showLabel ? labels[priority] : priority.charAt(0).toUpperCase()}
    </span>
  );
}
