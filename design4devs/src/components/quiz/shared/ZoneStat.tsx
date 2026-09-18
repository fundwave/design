/**
 * Zone Stat Component
 * 
 * Reusable stat/metric display components for zones.
 */

import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Zone, ZoneContent } from "../ZoneRenderer";

interface TrendIndicatorProps {
  value: string;
  direction: "up" | "down";
  zoneId?: string;
  brokenColor?: string;
  fixedColor?: string;
}

/**
 * Trend indicator with optional zone wrapping
 */
export function TrendIndicator({ 
  value, 
  direction, 
  zoneId,
  brokenColor,
  fixedColor = direction === "up" ? "text-emerald-600" : "text-red-600"
}: TrendIndicatorProps) {
  const Icon = direction === "up" ? TrendingUp : TrendingDown;
  
  const content = (color: string) => (
    <div className={`flex items-center gap-1 text-sm font-semibold ${color}`}>
      <Icon className="w-4 h-4" />
      {value}
    </div>
  );

  if (zoneId) {
    return (
      <Zone id={zoneId} className="flex items-center gap-1 text-sm font-semibold">
        <ZoneContent
          zoneId={zoneId}
          broken={content(brokenColor || "text-slate-500")}
          fixed={content(fixedColor)}
        />
      </Zone>
    );
  }

  return content(fixedColor);
}

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: {
    value: string;
    direction: "up" | "down";
  };
  subtitle?: string;
  className?: string;
}

/**
 * Metric card with title, value, and optional trend
 */
export function MetricCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  subtitle,
  className = "bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700"
}: MetricCardProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-500">{title}</span>
        {Icon && <Icon className="w-4 h-4 text-slate-400" />}
      </div>
      <div className="text-2xl font-bold text-slate-800 dark:text-white">{value}</div>
      {trend && (
        <TrendIndicator 
          value={trend.value} 
          direction={trend.direction} 
        />
      )}
      {subtitle && (
        <div className="text-xs text-slate-500 mt-1">{subtitle}</div>
      )}
    </div>
  );
}
