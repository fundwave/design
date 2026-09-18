import { useCallback, useEffect, useState } from "react";

import { STORAGE_KEYS } from "../constants/storage-keys";

interface ChecklistItem {
  category: string;
  items: string[];
}

interface CheckedItems {
  [key: string]: boolean;
}

const checklistItems: ChecklistItem[] = [
  {
    category: "🎨 Design Tokens",
    items: [
      "All colors are from the token set (no hardcoded hex values)",
      "Spacing uses the defined scale (4, 8, 12, 16, 20, 24...)",
      "Typography sizes match the scale (h1, h2, body, small...)",
      "Border radius is consistent across components",
      "Shadows follow the elevation levels (1-3 max)",
      "Z-index values are from the defined scale"
    ]
  },
  {
    category: "✍️ Typography",
    items: [
      "Using one font family (two max)",
      "Text hierarchy is clear (headings → body → labels)",
      "Line-height appropriate for text size",
      "Letter-spacing consistent",
      "Font weights limited to 2-3 variants"
    ]
  },
  {
    category: "🎨 Colors",
    items: [
      "Primary color used for main actions",
      "Semantic colors consistent (success=green, error=red, warning=yellow)",
      "Text contrast meets WCAG AA standards (4.5:1)",
      "Background colors from token palette",
      "Hover/active states have defined colors"
    ]
  },
  {
    category: "🧩 Components",
    items: [
      "Using correct component variants (primary, secondary, tertiary)",
      "Sizes are consistent (sm, md, lg)",
      "All interactive states defined (hover, active, focus, disabled)",
      "Component spacing follows the scale",
      "Icons sized consistently within components"
    ]
  },
  {
    category: "📐 Layout & Spacing",
    items: [
      "Using rem/em instead of px where possible",
      "Container max-widths are consistent",
      "Grid/flex gaps use the spacing scale",
      "Padding and margins from the scale",
      "Vertical rhythm maintained throughout"
    ]
  },
  {
    category: "♿ Accessibility",
    items: [
      "All interactive elements keyboard accessible",
      "Focus states visible and styled",
      "ARIA labels where needed",
      "Color not the only indicator of state",
      "Touch targets at least 44x44px (mobile)"
    ]
  },
  {
    category: "📱 Responsiveness",
    items: ["Breakpoints defined and consistent", "Text scales appropriately", "Spacing adjusts for mobile", "Touch targets sized for fingers", "No horizontal scroll on mobile"]
  },
  {
    category: "🔄 Interactions",
    items: [
      "Loading states implemented",
      "Error states handled gracefully",
      "Success feedback provided",
      "Disabled states clearly indicated",
      "Animations follow easing curves from tokens"
    ]
  }
];

export default function DesignChecklist() {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});
  const [copied, setCopied] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DESIGN_CHECKLIST);
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch {
        // Invalid JSON, ignore
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage when checkedItems changes (after initialization)
  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem(STORAGE_KEYS.DESIGN_CHECKLIST, JSON.stringify(checkedItems));
  }, [checkedItems, isInitialized]);

  const toggleItem = useCallback((categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  const resetChecklist = useCallback(() => {
    setCheckedItems({});
    localStorage.removeItem(STORAGE_KEYS.DESIGN_CHECKLIST);
  }, []);

  const copyChecklist = () => {
    const text = checklistItems
      .map((section) => {
        return `${section.category}\n${section.items.map((item) => `☐ ${item}`).join("\n")}`;
      })
      .join("\n\n");

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyMarkdown = () => {
    const text = `# Design System Checklist\n\n${checklistItems
      .map((section) => {
        return `## ${section.category}\n${section.items.map((item) => `- [ ] ${item}`).join("\n")}`;
      })
      .join("\n\n")}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalItems = checklistItems.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / totalItems) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Design System Checklist</h2>
          <div className="flex gap-2">
            <button
              onClick={copyChecklist}
              className="px-4 py-2 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow flex items-center gap-2"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy Plain Text
                </>
              )}
            </button>
            <button onClick={copyMarkdown} className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 text-sm font-medium">
              Copy Markdown
            </button>
            {checkedCount > 0 && (
              <button
                onClick={resetChecklist}
                className="px-4 py-2 border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-all duration-200 text-sm font-medium"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              {checkedCount} of {totalItems} completed
            </span>
            <span className="font-semibold text-ocean-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Checklist Items */}
      <div className="space-y-8">
        {checklistItems.map((section, catIndex) => (
          <div key={catIndex} className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900 pb-2 border-b-2 border-gray-200">{section.category}</h3>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => {
                const key = `${catIndex}-${itemIndex}`;
                const isChecked = checkedItems[key];

                return (
                  <label
                    key={itemIndex}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      isChecked ? "bg-green-50 border-2 border-green-200" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked || false}
                      onChange={() => toggleItem(catIndex, itemIndex)}
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-ocean-600 focus:ring-ocean-500 focus:ring-2 cursor-pointer"
                    />
                    <span className={`text-gray-700 leading-relaxed flex-1 ${isChecked ? "line-through text-gray-500" : ""}`}>{item}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Tips */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-amethyst-50 rounded-lg p-4 border border-amethyst-200">
          <p className="text-amethyst-900 font-semibold mb-2">💡 Pro Tips:</p>
          <ul className="space-y-1 text-sm text-amethyst-800">
            <li>• Use this checklist during PR reviews</li>
            <li>• Copy to your project docs or GitHub issues</li>
            <li>• Customize it based on your team's needs</li>
            <li>• Run through it before every deploy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
