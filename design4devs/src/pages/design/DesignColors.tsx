export default function DesignColors() {
  return (
    <div className="space-y-12">
      {/* Color System Structure */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Color System Structure</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Primary",
              emoji: "🎨",
              description: "Main brand color. Use for CTAs and key actions.",
              colors: ["#8b5cf6", "#7c3aed", "#6d28d9"]
            },
            {
              title: "Neutrals",
              emoji: "⚪",
              description: "Backgrounds, text, borders. The foundation.",
              colors: ["#f3f4f6", "#9ca3af", "#374151"]
            },
            {
              title: "Semantic",
              emoji: "💬",
              description: "Communicate status: success, error, warning.",
              colors: ["#10b981", "#ef4444", "#f59e0b"]
            }
          ].map((category) => (
            <div key={category.title} className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{category.emoji}</span>
                <h3 className="font-bold text-text-primary">{category.title}</h3>
              </div>
              <p className="text-sm mb-4 text-text-secondary">{category.description}</p>
              <div className="flex gap-2">
                {category.colors.map((color) => (
                  <div key={color} className="w-full h-12 rounded-lg border-2 border-border" title={color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Scales */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Building Color Scales</h2>
        <p className="mb-6 leading-relaxed text-text-secondary">Create 9-11 shades for each color. This gives you flexibility for hover states, borders, backgrounds, and text.</p>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <h3 className="font-bold mb-4 text-text-primary">Purple Scale Example</h3>
          <div className="space-y-2">
            {[
              { shade: "50", hex: "#faf5ff", usage: "Subtle backgrounds" },
              { shade: "100", hex: "#f3e8ff", usage: "Hover states" },
              { shade: "200", hex: "#e9d5ff", usage: "Disabled states" },
              { shade: "300", hex: "#d8b4fe", usage: "Subtle borders" },
              { shade: "400", hex: "#c084fc", usage: "Placeholder text" },
              { shade: "500", hex: "#a855f7", usage: "Default/Brand" },
              { shade: "600", hex: "#9333ea", usage: "Hover on primary" },
              { shade: "700", hex: "#7e22ce", usage: "Active state" },
              { shade: "800", hex: "#6b21a8", usage: "Text on light bg" },
              { shade: "900", hex: "#581c87", usage: "High contrast text" }
            ].map((color) => (
              <div key={color.shade} className="flex items-center gap-4">
                <div className="w-20 h-12 rounded-lg border-2 flex-shrink-0 border-border" style={{ backgroundColor: color.hex }} />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <code className="font-mono text-sm font-semibold text-amethyst-600">{color.shade}</code>
                    <code className="font-mono text-sm text-text-tertiary">{color.hex}</code>
                  </div>
                  <p className="text-sm mt-1 text-text-secondary">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Semantic Color Usage</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Success",
              emoji: "✅",
              color: "#10b981",
              bg: "bg-green-50",
              border: "border-green-200",
              text: "text-green-700",
              usage: "Confirmations, completed tasks, positive feedback"
            },
            {
              name: "Error",
              emoji: "❌",
              color: "#ef4444",
              bg: "bg-red-50",
              border: "border-red-200",
              text: "text-red-700",
              usage: "Errors, failed operations, critical warnings"
            },
            {
              name: "Warning",
              emoji: "⚠️",
              color: "#f59e0b",
              bg: "bg-amber-50",
              border: "border-amber-200",
              text: "text-amber-700",
              usage: "Cautions, pending actions, important notices"
            },
            {
              name: "Info",
              emoji: "ℹ️",
              color: "#3b82f6",
              bg: "bg-ocean-50",
              border: "border-ocean-200",
              text: "text-ocean-700",
              usage: "Tips, helpful information, neutral notifications"
            }
          ].map((semantic) => (
            <div key={semantic.name} className={`${semantic.bg} p-6 rounded-xl border-2 ${semantic.border}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{semantic.emoji}</span>
                <h3 className={`font-bold ${semantic.text}`}>{semantic.name}</h3>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg border-2 border-border" style={{ backgroundColor: semantic.color }} />
                <code className="text-sm font-mono text-text-secondary">{semantic.color}</code>
              </div>
              <p className={`text-sm ${semantic.text}`}>{semantic.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Color Accessibility</h2>
        <div className="p-8 rounded-xl border-2 bg-gradient-to-r from-amethyst-50 to-indigo-50 border-amethyst-200">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-3 text-text-primary">WCAG Contrast Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-bg-secondary">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📝</span>
                    <span className="font-semibold text-text-primary">Normal Text</span>
                  </div>
                  <p className="text-sm mb-2 text-text-secondary">
                    Minimum ratio: <strong>4.5:1</strong>
                  </p>
                  <p className="text-sm text-text-secondary">AA standard for body text</p>
                </div>
                <div className="p-4 rounded-lg bg-bg-secondary">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🔤</span>
                    <span className="font-semibold text-text-primary">Large Text</span>
                  </div>
                  <p className="text-sm mb-2 text-text-secondary">
                    Minimum ratio: <strong>3:1</strong>
                  </p>
                  <p className="text-sm text-text-secondary">18pt+ or 14pt+ bold</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-text-primary">💡 Testing Tips</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Use browser DevTools or tools like WebAIM Contrast Checker</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Never rely on color alone to convey information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Test your palette with color blindness simulators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action Items */}
      <section>
        <div className="p-8 rounded-xl border-2 bg-amethyst-50 border-amethyst-200">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">🎯 Your Action Items</h2>
          <ul className="space-y-3">
            {[
              "Choose a primary brand color",
              "Generate a 9-11 shade scale for your primary",
              "Create a neutral gray scale (50-900)",
              "Define semantic colors (success, error, warning, info)",
              "Test all color combinations for WCAG AA compliance",
              "Document dark mode color alternatives",
              "Create color usage guidelines for your team"
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
