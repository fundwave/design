/**
 * Zone Nav Component
 * 
 * Reusable navigation components for zones.
 */

import { LucideIcon } from "lucide-react";
import { Zone, ZoneContent } from "../ZoneRenderer";

interface NavItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

interface NavGroup {
  title?: string;
  items: NavItem[];
}

interface ZoneNavProps {
  id: string;
  brokenItems: NavItem[];
  fixedGroups: NavGroup[];
  className?: string;
}

/**
 * Zone-aware navigation with broken/fixed states
 */
export function ZoneNav({ id, brokenItems, fixedGroups, className = "" }: ZoneNavProps) {
  return (
    <Zone id={id} className={className}>
      <ZoneContent
        zoneId={id}
        broken={<ScatteredNavItems items={brokenItems} />}
        fixed={<OrganizedNavGroups groups={fixedGroups} />}
      />
    </Zone>
  );
}

function ScatteredNavItems({ items }: { items: NavItem[] }) {
  return (
    <div className="space-y-1">
      {items.map((item, i) => (
        <NavItemComponent key={i} item={item} />
      ))}
    </div>
  );
}

function OrganizedNavGroups({ groups }: { groups: NavGroup[] }) {
  return (
    <div className="space-y-6">
      {groups.map((group, i) => (
        <div key={i}>
          {group.title && (
            <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2 px-3">
              {group.title}
            </div>
          )}
          <div className="space-y-1">
            {group.items.map((item, j) => (
              <NavItemComponent key={j} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function NavItemComponent({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <a
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
        item.active
          ? "bg-violet-50 text-violet-700 font-medium dark:bg-violet-900/30 dark:text-violet-400"
          : "text-text-secondary hover:bg-bg-tertiary"
      }`}
    >
      <Icon className="w-4 h-4" />
      {item.label}
    </a>
  );
}

interface BreadcrumbItem {
  label: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  activeColor?: string;
}

/**
 * Breadcrumb navigation
 */
export function Breadcrumb({ 
  items, 
  separator = <span className="mx-1">/</span>,
  activeColor = "text-violet-600"
}: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-1 text-sm text-slate-500">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          {i > 0 && separator}
          <span className={item.active ? activeColor : "hover:text-slate-700 cursor-pointer"}>
            {item.label}
          </span>
        </span>
      ))}
    </div>
  );
}
