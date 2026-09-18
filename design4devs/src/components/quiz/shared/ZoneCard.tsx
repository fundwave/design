/**
 * Zone Card Component
 * 
 * Reusable card component for displaying content within zones.
 */

import { ReactNode } from "react";
import { Zone, ZoneContent } from "../ZoneRenderer";

interface ZoneCardProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Card wrapper for zone content
 */
export function ZoneCard({ id, children, className = "" }: ZoneCardProps) {
  return (
    <Zone id={id} className={`bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 ${className}`}>
      {children}
    </Zone>
  );
}

interface StatCardProps {
  id?: string;
  title: string;
  value: string | number;
  change?: {
    value: string;
    direction: "up" | "down";
    zoneId?: string;
  };
  broken?: {
    cardClass?: string;
    titleClass?: string;
    valueClass?: string;
  };
  fixed?: {
    cardClass?: string;
    titleClass?: string;
    valueClass?: string;
  };
}

/**
 * Stat card with optional zone wrapping
 */
export function StatCard({ 
  id,
  title, 
  value, 
  change,
  broken = {},
  fixed = {}
}: StatCardProps) {
  const defaultCardClass = "bg-bg-secondary rounded-xl p-3 sm:p-4 border border-border";
  
  const cardClass = broken.cardClass || defaultCardClass;
  const fixedCardClass = fixed.cardClass || defaultCardClass;
  
  const content = (isFixed: boolean) => (
    <div className={isFixed ? fixedCardClass : cardClass}>
      <div className={`text-xs sm:text-sm mb-1 ${isFixed ? fixed.titleClass || "text-text-secondary" : broken.titleClass || "text-text-secondary"}`}>
        {title}
      </div>
      <div className={`text-lg sm:text-2xl font-bold ${isFixed ? fixed.valueClass || "text-text-primary" : broken.valueClass || "text-text-primary"}`}>
        {value}
      </div>
      {change && change.zoneId && (
        <Zone id={change.zoneId} className="flex items-center gap-1 text-sm mt-1 font-semibold">
          {change.value}
        </Zone>
      )}
    </div>
  );

  if (id) {
    return (
      <Zone id={id}>
        <ZoneContent
          zoneId={id}
          broken={content(false)}
          fixed={content(true)}
        />
      </Zone>
    );
  }

  return content(true);
}
