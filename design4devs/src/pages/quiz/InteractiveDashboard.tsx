import { Search } from "lucide-react";

import { VIOLATION_ZONES } from "./quiz-types";
import {
  HeaderButtonsZone,
  LogoPositionZone,
  NavOrderZone,
  StatCardsZone,
  TinyButtonsZone,
  CrampedSpacingZone,
  TypographyMessZone,
  ButtonStylesZone,
  MobileNavZone,
  MisalignedCardsZone
} from "./ZoneComponents";

interface InteractiveDashboardProps {
  fixedZones: Set<string>;
  onZoneClick: (id: string) => void;
  highlightedZone: string | null;
  pendingZone: string | null;
}

export function InteractiveDashboard({ fixedZones, onZoneClick, highlightedZone, pendingZone }: InteractiveDashboardProps) {
  const isFixed = (id: string) => fixedZones.has(id);
  const isHighlighted = (id: string) => highlightedZone === id;
  const isPending = (id: string) => pendingZone === id;

  const zoneClass = (id: string, baseClass: string = "") => {
    const fixed = isFixed(id);
    return `${baseClass} cursor-pointer transition-all duration-500 rounded-lg ${
      isHighlighted(id) 
        ? "ring-2 ring-green-400 ring-offset-2 scale-[1.02]" 
        : isPending(id)
          ? "ring-2 ring-amber-500 ring-offset-2 bg-amber-100/30 scale-[1.01]"
          : fixed 
            ? "" 
            : "hover:ring-2 hover:ring-amber-400/50 hover:ring-offset-1"
    }`;
  };

  return (
    <div
      className={`min-h-[400px] sm:min-h-[600px] rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 bg-bg-secondary ${
        fixedZones.size === VIOLATION_ZONES.length ? "border-ocean-400 shadow-ocean-500/20" : "border-border"
      }`}
    >
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 px-3 sm:px-4 py-2 sm:py-3">
        <div className={`flex items-center gap-2 sm:gap-4 ${isFixed("logo-position") ? "flex-row" : "flex-row-reverse"}`}>
          {/* Logo */}
          <LogoPositionZone 
            isFixed={isFixed("logo-position")} 
            onClick={() => onZoneClick("logo-position")}
            className={zoneClass("logo-position")}
          />

          {/* Search in header when fixed */}
          {isFixed("search-location") && (
            <button 
              onClick={() => onZoneClick("search-location")} 
              className={zoneClass("search-location", "flex-1 max-w-md hidden sm:block")}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white/60 text-sm">
                <Search className="w-4 h-4" />
                <span>Search...</span>
              </div>
            </button>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Header actions */}
          <HeaderButtonsZone 
            isFixed={isFixed("header-buttons")} 
            onClick={() => onZoneClick("header-buttons")}
            className={zoneClass("header-buttons")}
          />
        </div>
      </header>

      <div className="flex flex-col sm:flex-row">
        {/* Sidebar - hidden on mobile */}
        <aside
          className={`hidden sm:block bg-bg-tertiary border-r border-border transition-all duration-500 ${
            isFixed("nav-order") ? "w-44 lg:w-52 p-3 lg:p-4" : "w-40 lg:w-48 p-2 lg:p-3"
          }`}
        >
          {/* Navigation */}
          <NavOrderZone 
            isFixed={isFixed("nav-order")} 
            onClick={() => onZoneClick("nav-order")}
            className={zoneClass("nav-order")}
          />
        </aside>

        {/* Main Content */}
        <main className={`flex-1 bg-bg-tertiary overflow-x-auto transition-all duration-500 ${isFixed("cramped-spacing") ? "p-3 sm:p-4 lg:p-6" : "p-2 sm:p-3"}`}>
          {/* Stats Row */}
          <StatCardsZone 
            isFixed={isFixed("stat-cards")} 
            onClick={() => onZoneClick("stat-cards")}
            onColorClick={() => onZoneClick("color-meanings")}
            colorFixed={isFixed("color-meanings")}
            className={zoneClass("stat-cards", isFixed("cramped-spacing") || isFixed("stat-cards") ? "mb-6" : "mb-3")}
            colorClassName={zoneClass("color-meanings")}
          />

          {/* Action Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 ${isFixed("cramped-spacing") ? "gap-3 sm:gap-4 mb-4 sm:mb-6" : "gap-2 mb-3"}`}>
            {/* Quick Actions Card */}
            <TinyButtonsZone 
              isFixed={isFixed("tiny-buttons")} 
              onClick={() => onZoneClick("tiny-buttons")}
              onCrampedClick={() => onZoneClick("cramped-spacing")}
              className={zoneClass("tiny-buttons")}
            />

            {/* Analytics Card */}
            <ButtonStylesZone 
              isFixed={isFixed("button-styles")} 
              onClick={() => onZoneClick("button-styles")}
              className={zoneClass("button-styles")}
            />

            {/* Payments Card */}
            <TypographyMessZone 
              isFixed={isFixed("typography-mess")} 
              onClick={() => onZoneClick("typography-mess")}
              className={zoneClass("typography-mess")}
            />
          </div>

          {/* Table */}
          <CrampedSpacingZone 
            isFixed={isFixed("cramped-spacing")} 
            onClick={() => onZoneClick("cramped-spacing")}
            colorFixed={isFixed("color-meanings")}
            typographyFixed={isFixed("typography-mess")}
            className={zoneClass("cramped-spacing", isFixed("cramped-spacing") ? "mb-4 sm:mb-6" : "mb-3")}
          />

          {/* Misaligned Cards */}
          <MisalignedCardsZone 
            isFixed={isFixed("misaligned-cards")} 
            onClick={() => onZoneClick("misaligned-cards")}
            className={zoneClass("misaligned-cards")}
          />
        </main>
      </div>

      {/* Mobile Bottom Bar */}
      <MobileNavZone 
        isFixed={isFixed("nav-order")} 
        onClick={() => onZoneClick("nav-order")}
        className={zoneClass("nav-order", "sm:hidden")}
      />
    </div>
  );
}
