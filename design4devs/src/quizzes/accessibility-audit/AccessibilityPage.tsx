/**
 * Accessibility Page Component
 * 
 * An interactive landing page with accessibility issues to find.
 */

import { Mail, Menu, Play, X } from "lucide-react";
import { useState } from "react";

import { InteractiveComponentProps } from "../../components/quiz/types";
import { AccessibilityZone, A11Y_ZONES } from "./data";

export function AccessibilityPage({
  fixedZones,
  onZoneClick,
  highlightedZone,
  pendingZone,
}: InteractiveComponentProps<AccessibilityZone>) {
  const [showModal, setShowModal] = useState(false);
  
  const isFixed = (id: string) => fixedZones.has(id);
  const isHighlighted = (id: string) => highlightedZone === id;
  const isPending = (id: string) => pendingZone === id;

  const zoneClass = (id: string, baseClass: string = "") => {
    return `${baseClass} cursor-pointer transition-all duration-500 rounded-lg ${
      isHighlighted(id)
        ? "ring-2 ring-green-400 ring-offset-2 scale-[1.02]"
        : isPending(id)
          ? "ring-2 ring-amethyst-500 ring-offset-2 bg-amethyst-100/30 scale-[1.01]"
          : isFixed(id)
            ? ""
            : "hover:ring-2 hover:ring-amethyst-400/50 hover:ring-offset-1"
    }`;
  };

  return (
    <div
      className={`min-h-[500px] sm:min-h-[600px] rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 bg-white ${
        fixedZones.size === A11Y_ZONES.length ? "border-amethyst-400 shadow-amethyst-500/20" : "border-border"
      }`}
    >
      {/* Skip Link - appears when fixed */}
      <div
        onClick={() => onZoneClick("missing-skip-link")}
        className={zoneClass("missing-skip-link", "block")}
      >
        {isFixed("missing-skip-link") ? (
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amethyst-600 focus:text-white focus:rounded-lg"
          >
            Skip to main content
          </a>
        ) : (
          <div className="h-0 overflow-hidden" aria-hidden="true">
            {/* No skip link - accessibility issue */}
          </div>
        )}
      </div>

      {/* Header */}
      <header className="bg-slate-900 text-white px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="font-bold text-xl">TechCorp</div>
          <nav className="hidden md:flex items-center gap-6">
            <span className="text-white/80 hover:text-white cursor-pointer">Products</span>
            <span className="text-white/80 hover:text-white cursor-pointer">Solutions</span>
            <span className="text-white/80 hover:text-white cursor-pointer">Pricing</span>
            <span className="text-white/80 hover:text-white cursor-pointer">About</span>
          </nav>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Build Better Products Faster
            </h1>
            {/* Low contrast text - violation */}
            <p
              onClick={() => onZoneClick("low-contrast-text")}
              className={zoneClass(
                "low-contrast-text",
                isFixed("low-contrast-text")
                  ? "text-white/90 text-lg mb-6"
                  : "text-slate-500 text-lg mb-6" // Poor contrast!
              )}
            >
              Our platform helps teams collaborate, ship faster, and deliver exceptional user experiences.
            </p>
            <button className="bg-amethyst-600 hover:bg-amethyst-700 text-white px-6 py-3 rounded-lg font-medium">
              Get Started Free
            </button>
          </div>
          
          {/* Image without alt text - violation */}
          <div
            onClick={() => onZoneClick("missing-alt-text")}
            className={zoneClass("missing-alt-text")}
          >
            <div className="bg-slate-700/50 rounded-xl p-4 aspect-video flex items-center justify-center">
              {isFixed("missing-alt-text") ? (
                <div className="text-center">
                  <div className="text-6xl mb-2">📊</div>
                  <span className="text-sm text-white/60">Dashboard preview with analytics charts</span>
                </div>
              ) : (
                <div className="text-6xl">📊</div>
                // No alt text provided!
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Auto-playing video section */}
      <section className="px-4 sm:px-6 py-8 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">See It In Action</h2>
          <div
            onClick={() => onZoneClick("auto-playing-video")}
            className={zoneClass("auto-playing-video", "max-w-2xl mx-auto")}
          >
            <div className="bg-slate-800 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amethyst-600/20 to-blue-600/20" />
              {isFixed("auto-playing-video") ? (
                <div className="relative z-10 text-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-slate-900 ml-1" />
                  </button>
                  <p className="text-white/80 mt-3 text-sm">Click to play video</p>
                </div>
              ) : (
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">LIVE</span>
                  </div>
                  <p className="text-white/60 mt-3 text-sm">Auto-playing with sound...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Form */}
      <section id="main-content" className="px-4 sm:px-6 py-8 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Stay Updated</h2>
          <p className="text-slate-600 mb-6">Get the latest news and updates delivered to your inbox.</p>
          
          {/* Form without labels - violation */}
          <div
            onClick={() => onZoneClick("missing-form-labels")}
            className={zoneClass("missing-form-labels")}
          >
            <div className="flex gap-2">
              {isFixed("missing-form-labels") ? (
                <div className="flex-1">
                  <label htmlFor="email" className="block text-left text-sm font-medium text-slate-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amethyst-500 focus:border-amethyst-500"
                  />
                </div>
              ) : (
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg"
                  // No label! Just placeholder
                />
              )}
              <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal trigger for keyboard trap demo */}
      <section className="px-4 sm:px-6 py-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex justify-center">
          <button
            onClick={() => {
              setShowModal(true);
              if (!isFixed("keyboard-trap")) {
                onZoneClick("keyboard-trap");
              }
            }}
            className={zoneClass("keyboard-trap", "px-6 py-3 bg-amethyst-600 text-white rounded-lg font-medium hover:bg-amethyst-700")}
          >
            Open Demo Modal
          </button>
        </div>
      </section>

      {/* Modal - keyboard trap demo */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => isFixed("keyboard-trap") && setShowModal(false)} />
          <div 
            className="relative bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <h3 id="modal-title" className="text-xl font-bold text-slate-900 mb-2">
              {isFixed("keyboard-trap") ? "Accessible Modal ✓" : "Keyboard Trap Demo"}
            </h3>
            <p className="text-slate-600 mb-4">
              {isFixed("keyboard-trap")
                ? "This modal can be closed with Escape key and focus is properly managed."
                : "In the broken version, keyboard users cannot close this modal or escape it!"}
            </p>
            {isFixed("keyboard-trap") ? (
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-slate-900 text-white py-2 rounded-lg font-medium hover:bg-slate-800"
                autoFocus
              >
                Close Modal (or press Escape)
              </button>
            ) : (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                ⚠️ No close button or Escape key handler - users are trapped!
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-2 w-full bg-red-600 text-white py-2 rounded-lg text-xs"
                >
                  (Click here to escape for demo purposes)
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
