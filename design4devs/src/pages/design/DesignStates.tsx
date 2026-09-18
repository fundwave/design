import { useState } from "react";

export default function DesignStates() {
  const [buttonState, setButtonState] = useState<string>("default");
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="space-y-12">
      {/* Why States Matter */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Why States Matter</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              emoji: "👁️",
              title: "Affordance",
              desc: "Show what elements are interactive"
            },
            {
              emoji: "💬",
              title: "Feedback",
              desc: "Communicate system response to user actions"
            },
            {
              emoji: "🎯",
              title: "Accessibility",
              desc: "Help users with disabilities navigate your interface"
            }
          ].map((reason) => (
            <div key={reason.title} className="p-6 rounded-xl border-2 text-center bg-bg-secondary border-border">
              <span className="text-4xl mb-3 block">{reason.emoji}</span>
              <h3 className="font-bold mb-2 text-text-primary">{reason.title}</h3>
              <p className="text-sm text-text-secondary">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Button States Interactive Demo */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Button States (Interactive Demo)</h2>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <div className="flex flex-wrap gap-3 mb-6">
            {["default", "hover", "active", "focus", "disabled", "loading"].map((state) => (
              <button
                key={state}
                onClick={() => setButtonState(state)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all cursor-pointer ${
                  buttonState === state ? "bg-amethyst-600 text-white" : "bg-bg-tertiary text-text-secondary hover:bg-bg-secondary"
                }`}
              >
                {state}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-xl flex justify-center bg-bg-tertiary">
            {buttonState === "default" && <button className="bg-amethyst-600 text-white px-8 py-4 rounded-lg text-lg font-medium cursor-pointer">Create Task</button>}
            {buttonState === "hover" && (
              <button className="bg-amethyst-700 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg transform scale-105 transition-all cursor-pointer">Create Task</button>
            )}
            {buttonState === "active" && (
              <button className="bg-amethyst-800 text-white px-8 py-4 rounded-lg text-lg font-medium transform scale-95 transition-all cursor-pointer">Create Task</button>
            )}
            {buttonState === "focus" && (
              <button className="bg-amethyst-600 text-white px-8 py-4 rounded-lg text-lg font-medium ring-4 ring-amethyst-300 ring-offset-2 cursor-pointer">Create Task</button>
            )}
            {buttonState === "disabled" && (
              <button className="px-8 py-4 rounded-lg text-lg font-medium cursor-not-allowed opacity-50 bg-bg-tertiary text-text-tertiary">Create Task</button>
            )}
            {buttonState === "loading" && (
              <button className="bg-amethyst-600 text-white px-8 py-4 rounded-lg text-lg font-medium cursor-wait flex items-center gap-3">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Creating...
              </button>
            )}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-amethyst-50">
            <p className="text-sm mb-2 text-text-secondary">
              <strong>Current State:</strong> {buttonState}
            </p>
            <div className="text-xs space-y-1 text-text-secondary">
              {buttonState === "default" && <p>Base appearance. User knows it's clickable.</p>}
              {buttonState === "hover" && <p>Slightly darker, shows interactivity. Consider subtle scale or shadow.</p>}
              {buttonState === "active" && <p>Pressed state. Darker and slightly scaled down.</p>}
              {buttonState === "focus" && <p>Keyboard focus indicator. Essential for accessibility (WCAG requirement).</p>}
              {buttonState === "disabled" && <p>Muted colors, shows unavailability. Use cursor: not-allowed.</p>}
              {buttonState === "loading" && <p>Spinner icon, prevents double submission. Disable interaction.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Input States */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Input Field States</h2>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <div className="space-y-6">
            {/* Empty */}
            <div>
              <label className="block text-sm font-medium mb-2 text-text-secondary">Empty State</label>
              <input type="text" placeholder="Enter task name..." className="w-full px-4 py-3 border-2 rounded-lg border-border bg-bg-secondary text-text-primary" />
              <p className="text-xs mt-2 text-text-tertiary">Border: gray-300, Placeholder visible</p>
            </div>

            {/* Filled */}
            <div>
              <label className="block text-sm font-medium mb-2 text-text-secondary">Filled State</label>
              <input
                type="text"
                value="Review morning standup notes"
                onChange={() => {}}
                className="w-full px-4 py-3 border-2 rounded-lg border-border bg-bg-secondary text-text-primary"
              />
              <p className="text-xs mt-2 text-text-tertiary">Text appears, placeholder hidden</p>
            </div>

            {/* Focus */}
            <div>
              <label className="block text-sm font-medium mb-2 text-text-secondary">Focus State</label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full px-4 py-3 border-2 border-amethyst-500 rounded-lg ring-4 ring-amethyst-200 outline-none bg-bg-secondary text-text-primary"
                placeholder="Click to see focus state..."
              />
              <p className="text-xs mt-2 text-text-tertiary">Border: purple-500, Ring for emphasis</p>
            </div>

            {/* Error */}
            <div>
              <label className="block text-sm font-medium mb-2 text-text-secondary">Error State</label>
              <input
                type="text"
                value=""
                onChange={() => {}}
                className="w-full px-4 py-3 border-2 rounded-lg border-error-border bg-error-bg text-text-primary"
                placeholder="Task name is required"
              />
              <p className="text-xs mt-2 flex items-center gap-1 text-error-text">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                This field is required
              </p>
            </div>

            {/* Disabled */}
            <div>
              <label className="block text-sm font-medium mb-2 text-text-tertiary">Disabled State</label>
              <input
                type="text"
                value="Completed task"
                disabled
                className="w-full px-4 py-3 border-2 rounded-lg cursor-not-allowed border-border bg-bg-tertiary text-text-tertiary"
              />
              <p className="text-xs mt-2 text-text-tertiary">Muted colors, cursor: not-allowed</p>
            </div>
          </div>
        </div>
      </section>

      {/* State Checklist */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Complete State Checklist</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              component: "Buttons",
              states: ["Default", "Hover", "Active/Pressed", "Focus (keyboard)", "Disabled", "Loading"]
            },
            {
              component: "Links",
              states: ["Default", "Hover", "Visited", "Focus (keyboard)", "Active"]
            },
            {
              component: "Inputs",
              states: ["Empty", "Filled", "Focus", "Error", "Success", "Disabled"]
            },
            {
              component: "Cards",
              states: ["Default", "Hover", "Selected", "Disabled", "Loading"]
            },
            {
              component: "Checkboxes",
              states: ["Unchecked", "Checked", "Indeterminate", "Disabled", "Focus"]
            },
            {
              component: "Dropdowns",
              states: ["Closed", "Open", "Focus", "Selected item", "Disabled", "Loading"]
            }
          ].map((item) => (
            <div key={item.component} className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
              <h3 className="font-bold mb-4 text-text-primary">{item.component}</h3>
              <ul className="space-y-2">
                {item.states.map((state) => (
                  <li key={state} className="flex items-center gap-2 text-sm text-text-secondary">
                    <svg className="w-4 h-4 flex-shrink-0 text-success-text" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {state}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Animation Guidelines */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">State Transition Animations</h2>
        <div className="p-8 rounded-xl border-2 bg-gradient-to-r from-amethyst-50 to-indigo-50 border-amethyst-200">
          <p className="mb-6 text-text-secondary">Smooth transitions between states improve perceived performance and delight users.</p>
          <div className="space-y-4">
            {[
              {
                duration: "100ms",
                use: "Micro-interactions (button press, checkbox toggle)"
              },
              { duration: "200ms", use: "Hover effects, color changes" },
              { duration: "300ms", use: "Modal open/close, dropdown expand" },
              {
                duration: "500ms",
                use: "Page transitions, complex animations"
              }
            ].map((timing) => (
              <div key={timing.duration} className="flex items-start gap-4 p-4 rounded-lg bg-bg-secondary">
                <code className="font-mono font-semibold text-sm w-20 flex-shrink-0 text-amethyst-600">{timing.duration}</code>
                <p className="text-sm text-text-secondary">{timing.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Items */}
      <section>
        <div className="p-8 rounded-xl border-2 bg-amethyst-50 border-amethyst-200">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">🎯 Your Action Items</h2>
          <ul className="space-y-3">
            {[
              "Document states for every interactive component",
              "Define focus states for keyboard navigation (WCAG requirement)",
              "Create loading states to show system is processing",
              "Design error states with helpful messages",
              "Set consistent transition durations (100ms, 200ms, 300ms)",
              "Test all states on both light and dark mode",
              "Use animation tokens from your design system"
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
