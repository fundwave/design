import { Github, Twitter } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import { COMPONENT_GUIDES, ROUTES } from "../constants/routes";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.HOME;
  const isGuideLanding = COMPONENT_GUIDES.some((g) => g.path === location.pathname);
  const showFullFooter = isHomePage || isGuideLanding;

  if (!showFullFooter) {
    // Minimal footer for lesson pages (they have prev/next nav)
    return (
      <footer className="mt-auto py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs text-tertiary">
            © {new Date().getFullYear()} <span className="bg-gradient-to-r from-ocean-500 to-amethyst-500 bg-clip-text text-transparent font-medium">Design4Devs</span>
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-auto bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* About section */}
          <div className="max-w-sm">
            <p className="font-semibold text-primary mb-2">
              <span className="bg-gradient-to-r from-ocean-500 to-amethyst-500 bg-clip-text text-transparent">Design4Devs</span>
            </p>
            <p className="text-sm text-secondary leading-relaxed mb-4">
              Free interactive lessons to help developers understand UX laws and design system principles. Build better interfaces with confidence.
            </p>
            <p className="text-xs text-tertiary">© {new Date().getFullYear()} Design4Devs. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <ul className="space-y-4">
              {COMPONENT_GUIDES.map((guide) => (
                <li key={guide.path}>
                  <Link to={guide.path} className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
                    {React.createElement(guide.icon, { className: "w-4 h-4" })}
                    {guide.badgeText}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://github.com/design4devs/design4devs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/design4devs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
