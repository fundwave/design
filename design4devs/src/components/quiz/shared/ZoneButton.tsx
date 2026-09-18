/**
 * Zone Button Component
 * 
 * Reusable button components for zones with broken/fixed states.
 */

import { ReactNode } from "react";
import { Zone, ZoneContent } from "../ZoneRenderer";
import { LucideIcon } from "lucide-react";

interface ZoneButtonProps {
  id: string;
  broken: {
    children: ReactNode;
    className?: string;
  };
  fixed: {
    children: ReactNode;
    className?: string;
  };
  onClick?: () => void;
}

/**
 * Button with zone-aware broken/fixed states
 */
export function ZoneButton({ id, broken, fixed, onClick }: ZoneButtonProps) {
  return (
    <Zone id={id}>
      <ZoneContent
        zoneId={id}
        broken={
          <button onClick={onClick} className={broken.className}>
            {broken.children}
          </button>
        }
        fixed={
          <button onClick={onClick} className={fixed.className}>
            {fixed.children}
          </button>
        }
      />
    </Zone>
  );
}

interface IconButtonProps {
  icon: LucideIcon;
  label?: string;
  className?: string;
  iconSize?: string;
  onClick?: () => void;
}

/**
 * Simple icon button
 */
export function IconButton({ 
  icon: Icon, 
  label, 
  className = "p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg",
  iconSize = "w-4 h-4",
  onClick 
}: IconButtonProps) {
  return (
    <button onClick={onClick} className={className} title={label}>
      <Icon className={iconSize} />
    </button>
  );
}

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: LucideIcon;
}

/**
 * Primary action button
 */
export function PrimaryButton({ 
  children, 
  onClick, 
  className = "px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium",
  icon: Icon
}: PrimaryButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {Icon && <Icon className="w-4 h-4 mr-2 inline" />}
      {children}
    </button>
  );
}
