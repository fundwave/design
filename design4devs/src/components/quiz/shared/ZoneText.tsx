/**
 * Zone Text Component
 * 
 * Reusable text/typography components for zones.
 */

import { Zone, ZoneContent } from "../ZoneRenderer";
import { ReactNode } from "react";

interface ZoneTitleProps {
  id: string;
  children: ReactNode;
  brokenClassName?: string;
  fixedClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}

/**
 * Zone-aware title with broken/fixed states
 */
export function ZoneTitle({ 
  id, 
  children, 
  brokenClassName = "text-sm text-slate-500",
  fixedClassName = "text-xl font-bold text-slate-800 dark:text-white",
  as: Tag = "h1"
}: ZoneTitleProps) {
  return (
    <Zone id={id}>
      <ZoneContent
        zoneId={id}
        broken={<Tag className={brokenClassName}>{children}</Tag>}
        fixed={<Tag className={fixedClassName}>{children}</Tag>}
      />
    </Zone>
  );
}

interface ZoneParagraphProps {
  id: string;
  children: ReactNode;
  brokenClassName?: string;
  fixedClassName?: string;
}

/**
 * Zone-aware paragraph with broken/fixed states
 */
export function ZoneParagraph({ 
  id, 
  children,
  brokenClassName = "text-sm text-slate-400 leading-relaxed",
  fixedClassName = "text-slate-700 dark:text-slate-300 leading-relaxed"
}: ZoneParagraphProps) {
  return (
    <Zone id={id}>
      <ZoneContent
        zoneId={id}
        broken={<p className={brokenClassName}>{children}</p>}
        fixed={<p className={fixedClassName}>{children}</p>}
      />
    </Zone>
  );
}

interface TextBlockProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Text block with optional title
 */
export function TextBlock({ title, children, className = "" }: TextBlockProps) {
  return (
    <div className={className}>
      {title && (
        <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{title}</h3>
      )}
      <div className="text-slate-600 dark:text-slate-400">{children}</div>
    </div>
  );
}

interface LabelValueProps {
  label: string;
  value: ReactNode;
  labelClassName?: string;
  valueClassName?: string;
}

/**
 * Label-value pair
 */
export function LabelValue({ 
  label, 
  value,
  labelClassName = "text-xs text-slate-500",
  valueClassName = "font-medium text-slate-800 dark:text-white"
}: LabelValueProps) {
  return (
    <div>
      <div className={labelClassName}>{label}</div>
      <div className={valueClassName}>{value}</div>
    </div>
  );
}
