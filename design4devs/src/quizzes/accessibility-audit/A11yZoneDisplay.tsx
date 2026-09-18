/**
 * Accessibility Zone Display Component
 */

import { ZoneDisplayProps } from "../../components/quiz/types";
import { AccessibilityZone } from "./data";

export function A11yZoneDisplay({ zone, isFixed }: ZoneDisplayProps<AccessibilityZone>) {
  const renderZone = () => {
    switch (zone.id) {
      case "low-contrast-text":
        return (
          <div className="p-4 bg-slate-800 rounded-lg">
            <p className={isFixed ? "text-white/90" : "text-slate-500"}>
              Our platform helps teams collaborate, ship faster, and deliver exceptional experiences.
            </p>
          </div>
        );

      case "missing-alt-text":
        return (
          <div className="p-4 bg-slate-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              {isFixed && (
                <span className="text-xs text-white/60">Alt: "Dashboard preview with analytics"</span>
              )}
            </div>
          </div>
        );

      case "missing-form-labels":
        return (
          <div className="p-4 bg-white rounded-lg border border-slate-200">
            {isFixed ? (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border border-slate-300 rounded"
                />
              </div>
            ) : (
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-slate-300 rounded"
              />
            )}
          </div>
        );

      case "keyboard-trap":
        return (
          <div className="p-4 bg-white rounded-lg border border-slate-200 text-center">
            <div className={`inline-block px-4 py-2 rounded ${isFixed ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
              {isFixed ? "✓ Escape key works, focus managed" : "⚠️ No way to close with keyboard"}
            </div>
          </div>
        );

      case "missing-skip-link":
        return (
          <div className="p-4 bg-slate-100 rounded-lg">
            {isFixed ? (
              <div className="px-3 py-1.5 bg-amethyst-600 text-white text-sm rounded inline-block">
                Skip to main content
              </div>
            ) : (
              <div className="text-slate-500 text-sm">
                No skip link - must tab through all nav items
              </div>
            )}
          </div>
        );

      case "auto-playing-video":
        return (
          <div className="p-4 bg-slate-800 rounded-lg flex items-center justify-center">
            {isFixed ? (
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center mx-auto">
                  <span className="text-slate-900">▶</span>
                </div>
                <span className="text-white/60 text-xs mt-2 block">Click to play</span>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mx-auto animate-pulse">
                  <span className="text-white text-xs">LIVE</span>
                </div>
                <span className="text-white/60 text-xs mt-2 block">Auto-playing...</span>
              </div>
            )}
          </div>
        );

      default:
        return <div className="p-4 text-text-secondary">Unknown zone: {zone.id}</div>;
    }
  };

  return (
    <div>
      {renderZone()}
      <div className="mt-2 flex items-center gap-2 text-xs text-text-secondary">
        <span className="px-2 py-0.5 bg-amethyst-100 text-amethyst-700 rounded">
          WCAG {zone.wcagCriterion}
        </span>
        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
          Level {zone.wcagLevel}
        </span>
      </div>
    </div>
  );
}
