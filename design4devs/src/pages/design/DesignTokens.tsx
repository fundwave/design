export default function DesignTokens() {
  return (
    <div className="space-y-12">
      {/* What are Design Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">What are Design Tokens?</h2>
        <p className="mb-6 leading-relaxed text-text-secondary">
          Design tokens are named entities that store visual design attributes. They're the smallest atoms of your design system—values that define color, spacing, typography, and
          more.
        </p>
        <div className="p-6 rounded-xl border-2 bg-gradient-to-r from-amethyst-50 to-indigo-50 border-amethyst-200">
          <h3 className="font-bold mb-3 text-text-primary">💡 Key Benefit</h3>
          <p className="text-text-secondary">Change a token value once, update it everywhere. No more hunting through CSS files!</p>
        </div>
      </section>

      {/* Categories of Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Token Categories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Color Tokens",
              emoji: "🎨",
              examples: ["primary-500", "gray-100", "success-600"],
              description: "Brand colors, neutrals, semantic colors"
            },
            {
              title: "Spacing Tokens",
              emoji: "📏",
              examples: ["space-2", "space-4", "space-8"],
              description: "Consistent padding and margins"
            },
            {
              title: "Typography Tokens",
              emoji: "✍️",
              examples: ["font-heading", "text-lg", "weight-bold"],
              description: "Font families, sizes, weights"
            },
            {
              title: "Border Radius",
              emoji: "⭕",
              examples: ["rounded-sm", "rounded-md", "rounded-lg"],
              description: "Corner radius values"
            },
            {
              title: "Shadow Tokens",
              emoji: "🌑",
              examples: ["shadow-sm", "shadow-md", "shadow-lg"],
              description: "Elevation and depth"
            },
            {
              title: "Animation Tokens",
              emoji: "⚡",
              examples: ["duration-fast", "duration-normal", "ease-out"],
              description: "Timing and easing functions"
            }
          ].map((category) => (
            <div key={category.title} className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{category.emoji}</span>
                <h3 className="font-bold text-text-primary">{category.title}</h3>
              </div>
              <p className="text-sm mb-4 text-text-secondary">{category.description}</p>
              <div className="space-y-2">
                {category.examples.map((example) => (
                  <code key={example} className="block px-3 py-1 rounded text-sm bg-bg-tertiary text-amethyst-600">
                    {example}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Name Tokens */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Naming Convention</h2>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl text-green-600">✅</span>
                <span className="font-bold text-text-primary">Good Names</span>
              </div>
              <div className="pl-8 space-y-2">
                <code className="block px-4 py-2 rounded bg-green-50 text-green-700">color-ocean-500</code>
                <code className="block px-4 py-2 rounded bg-green-50 text-green-700">space-button-padding-x</code>
                <code className="block px-4 py-2 rounded bg-green-50 text-green-700">font-size-heading-lg</code>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl text-red-600">❌</span>
                <span className="font-bold text-text-primary">Avoid</span>
              </div>
              <div className="pl-8 space-y-2">
                <code className="block px-4 py-2 rounded bg-red-50 text-red-700">nice-ocean</code>
                <code className="block px-4 py-2 rounded bg-red-50 text-red-700">bigPadding</code>
                <code className="block px-4 py-2 rounded bg-red-50 text-red-700">header_text</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Example */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Implementation</h2>
        <div className="p-6 rounded-xl overflow-x-auto bg-bg-tertiary border border-border">
          <pre className="text-sm text-text-secondary">
            <code>{`// tokens.css
:root {
  /* Colors */
  --color-ocean-500: #8b5cf6;
  --color-ocean-600: #7c3aed;
  
  /* Spacing */
  --space-2: 8px;
  --space-4: 16px;
  --space-8: 32px;
  
  /* Typography */
  --font-heading: 'Inter', sans-serif;
  --text-lg: 18px;
  --weight-bold: 700;
}

/* Usage in components */
.button {
  background: var(--color-ocean-500);
  padding: var(--space-2) var(--space-4);
  font-family: var(--font-heading);
}`}</code>
          </pre>
        </div>
      </section>

      {/* Action Items */}
      <section>
        <div className="p-8 rounded-xl border-2 bg-amethyst-50 border-amethyst-200">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">🎯 Your Action Items</h2>
          <ul className="space-y-3">
            {[
              "Audit your current design for repeated values",
              "Create a tokens file (CSS variables, JSON, or design tool)",
              "Define naming conventions for your team",
              "Start with colors and spacing first",
              "Document each token's purpose",
              "Set up a review process for new tokens"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold bg-ocean-600">{index + 1}</span>
                <span className="pt-0.5 text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
