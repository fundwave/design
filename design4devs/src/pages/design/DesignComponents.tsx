import { useState } from "react";

export default function DesignComponents() {
  const [selectedVariant, setSelectedVariant] = useState<string>("primary");

  return (
    <div className="space-y-12">
      {/* Component Anatomy */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Component Anatomy</h2>
        <p className="mb-6 leading-relaxed text-text-secondary">Every component should have well-defined structure, variants, and behavior. Let's use a button as an example.</p>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <h3 className="font-bold mb-4 text-text-primary">Button Anatomy</h3>
          <div className="space-y-4">
            {[
              { part: "Container", desc: "Background, padding, border-radius" },
              { part: "Label", desc: "Text content, font, size, weight" },
              { part: "Icon (optional)", desc: "Leading or trailing icon" },
              {
                part: "States",
                desc: "Default, hover, active, disabled, focus"
              },
              {
                part: "Variants",
                desc: "Primary, secondary, ghost, destructive"
              }
            ].map((item) => (
              <div key={item.part} className="flex items-start gap-4 pb-3 border-b last:border-0 border-border">
                <code className="font-mono text-sm font-semibold w-40 flex-shrink-0 text-amethyst-600">{item.part}</code>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Button Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Button Variants</h2>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <div className="flex flex-wrap gap-3 mb-6">
            {["primary", "secondary", "ghost", "destructive"].map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all cursor-pointer ${
                  selectedVariant === variant ? "bg-amethyst-600 text-white" : "bg-bg-tertiary text-text-secondary hover:bg-bg-secondary"
                }`}
              >
                {variant}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {selectedVariant === "primary" && (
              <div>
                <div className="flex gap-4 mb-4">
                  <button className="bg-amethyst-600 hover:bg-amethyst-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg cursor-pointer">Add Task</button>
                  <button className="bg-amethyst-600 text-white px-6 py-3 rounded-lg font-medium opacity-50 cursor-not-allowed">Loading...</button>
                </div>
                <div className="p-4 rounded-lg bg-bg-tertiary">
                  <p className="text-sm mb-2 text-text-secondary">
                    <strong>When to use:</strong> Main CTAs, primary actions
                  </p>
                  <code className="text-xs block text-amethyst-600">bg-amethyst-600 hover:bg-amethyst-700 text-white</code>
                </div>
              </div>
            )}

            {selectedVariant === "secondary" && (
              <div>
                <div className="flex gap-4 mb-4">
                  <button className="border-2 px-6 py-3 rounded-lg font-medium transition-all bg-bg-secondary border-border text-text-secondary hover:bg-bg-tertiary cursor-pointer">Cancel</button>
                  <button className="border-2 px-6 py-3 rounded-lg font-medium opacity-50 cursor-not-allowed bg-bg-secondary border-border text-text-secondary">Disabled</button>
                </div>
                <div className="p-4 rounded-lg bg-bg-tertiary">
                  <p className="text-sm mb-2 text-text-secondary">
                    <strong>When to use:</strong> Secondary actions, cancel buttons
                  </p>
                  <code className="text-xs block text-amethyst-600">border-2 border-gray-300 hover:border-amethyst-500</code>
                </div>
              </div>
            )}

            {selectedVariant === "ghost" && (
              <div>
                <div className="flex gap-4 mb-4">
                  <button className="px-6 py-3 rounded-lg font-medium transition-all text-text-secondary hover:bg-bg-tertiary cursor-pointer">View More</button>
                  <button className="px-6 py-3 rounded-lg font-medium transition-all text-amethyst-600 hover:bg-amethyst-50 cursor-pointer">Edit Task</button>
                </div>
                <div className="p-4 rounded-lg bg-bg-tertiary">
                  <p className="text-sm mb-2 text-text-secondary">
                    <strong>When to use:</strong> Tertiary actions, less emphasis
                  </p>
                  <code className="text-xs block text-amethyst-600">hover:bg-gray-100 no border</code>
                </div>
              </div>
            )}

            {selectedVariant === "destructive" && (
              <div>
                <div className="flex gap-4 mb-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg cursor-pointer">Delete Task</button>
                  <button className="border-2 px-6 py-3 rounded-lg font-medium transition-all bg-bg-secondary border-error-border text-error-text hover:bg-error-bg cursor-pointer">Remove</button>
                </div>
                <div className="p-4 rounded-lg bg-bg-tertiary">
                  <p className="text-sm mb-2 text-text-secondary">
                    <strong>When to use:</strong> Destructive actions, deletions
                  </p>
                  <code className="text-xs block text-amethyst-600">bg-red-600 hover:bg-red-700</code>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Component Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Size Variants</h2>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-amethyst-600 hover:bg-amethyst-700 text-white px-3 py-1 rounded text-xs font-medium transition-all cursor-pointer">Small</button>
            <button className="bg-amethyst-600 hover:bg-amethyst-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer">Medium</button>
            <button className="bg-amethyst-600 hover:bg-amethyst-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-all cursor-pointer">Large</button>
            <button className="bg-amethyst-600 hover:bg-amethyst-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all cursor-pointer">Extra Large</button>
          </div>
          <div className="mt-6 p-4 rounded-lg bg-bg-tertiary">
            <p className="text-sm mb-2 text-text-secondary">Define 3-4 sizes. Keep padding proportional to font size.</p>
            <div className="space-y-1 text-xs">
              <code className="block text-amethyst-600">sm: px-3 py-1 text-xs</code>
              <code className="block text-amethyst-600">md: px-4 py-2 text-sm</code>
              <code className="block text-amethyst-600">lg: px-6 py-3 text-base</code>
              <code className="block text-amethyst-600">xl: px-8 py-4 text-lg</code>
            </div>
          </div>
        </div>
      </section>

      {/* Other Components */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Essential Components</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Input Fields",
              emoji: "📝",
              variants: ["Text", "Email", "Password", "Search", "Textarea"],
              states: ["Empty", "Filled", "Error", "Disabled", "Focus"]
            },
            {
              name: "Cards",
              emoji: "🃏",
              variants: ["Default", "Elevated", "Outlined", "Filled"],
              states: ["Static", "Hoverable", "Clickable", "Selected"]
            },
            {
              name: "Badges",
              emoji: "🏷️",
              variants: ["Default", "Success", "Warning", "Error", "Info"],
              states: ["Small", "Medium", "Large", "With dot"]
            },
            {
              name: "Modals",
              emoji: "📱",
              variants: ["Small", "Medium", "Large", "Fullscreen"],
              states: ["Open", "Closed", "Loading", "With backdrop"]
            }
          ].map((component) => (
            <div key={component.name} className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{component.emoji}</span>
                <h3 className="font-bold text-text-primary">{component.name}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wider mb-2 text-text-tertiary">Variants</p>
                  <div className="flex flex-wrap gap-2">
                    {component.variants.map((variant) => (
                      <span key={variant} className="px-2 py-1 rounded text-xs bg-amethyst-100 text-amethyst-600">
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-2 text-text-tertiary">States</p>
                  <div className="flex flex-wrap gap-2">
                    {component.states.map((state) => (
                      <span key={state} className="px-2 py-1 rounded text-xs bg-bg-tertiary text-text-secondary">
                        {state}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Composition */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Component Composition</h2>
        <div className="p-8 rounded-xl border-2 bg-gradient-to-r from-amethyst-50 to-indigo-50 border-amethyst-200">
          <p className="mb-6 leading-relaxed text-text-secondary">
            Build complex components from simpler ones. Example: A TaskCard can be composed from Badge, Button, and Typography.
          </p>
          <div className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold mb-1 text-text-primary">Review design mockups</h4>
                <p className="text-sm text-text-secondary">Due: Today</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-warning-bg text-warning-text">In Progress</span>
            </div>
            <p className="text-sm mb-4 text-text-secondary">Review the latest design mockups and provide feedback</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg text-sm font-medium transition-all text-amethyst-600 hover:bg-amethyst-50 cursor-pointer">Edit</button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium transition-all text-text-secondary hover:bg-bg-tertiary cursor-pointer">Complete</button>
            </div>
          </div>
          <p className="text-sm mt-4 text-center text-text-secondary">↑ TaskCard = Typography + Badge + Buttons</p>
        </div>
      </section>

      {/* Action Items */}
      <section>
        <div className="p-8 rounded-xl border-2 bg-amethyst-50 border-amethyst-200">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">🎯 Your Action Items</h2>
          <ul className="space-y-3">
            {[
              "List all components your product needs",
              "Define variants for each component (primary, secondary, etc.)",
              "Document all interactive states (hover, active, focus, disabled)",
              "Create size variants (small, medium, large)",
              "Build components from atomic parts (composition)",
              "Design with dark mode in mind from the start",
              "Create a component showcase/storybook"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold bg-amethyst-600">{index + 1}</span>
                <span className="pt-0.5 text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
