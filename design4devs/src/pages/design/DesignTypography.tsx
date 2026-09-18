export default function DesignTypography() {
  return (
    <div className="space-y-12">
      {/* Type Scale */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Type Scale</h2>
        <p className="mb-6 leading-relaxed text-text-secondary">
          A type scale is a set of predefined font sizes that creates consistent hierarchy. Use a ratio (like 1.25 or 1.5) to generate harmonious sizes.
        </p>
        <div className="p-8 rounded-xl border-2 space-y-4 bg-bg-secondary border-border">
          {[
            { size: "48px", label: "Display", class: "text-5xl" },
            { size: "36px", label: "H1", class: "text-4xl" },
            { size: "30px", label: "H2", class: "text-3xl" },
            { size: "24px", label: "H3", class: "text-2xl" },
            { size: "20px", label: "H4", class: "text-xl" },
            { size: "16px", label: "Body", class: "text-base" },
            { size: "14px", label: "Small", class: "text-sm" },
            { size: "12px", label: "Caption", class: "text-xs" }
          ].map((item) => (
            <div key={item.label} className="flex items-baseline gap-6 pb-3 border-b last:border-0 border-border">
              <code className="font-mono text-sm w-20 text-amethyst-600">{item.size}</code>
              <span className="w-24 text-sm text-text-tertiary">{item.label}</span>
              <span className={`${item.class} font-bold text-text-primary`}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Font Weights</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { weight: "400", label: "Regular", class: "font-normal" },
            { weight: "500", label: "Medium", class: "font-medium" },
            { weight: "600", label: "Semibold", class: "font-semibold" },
            { weight: "700", label: "Bold", class: "font-bold" }
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-xl border-2 text-center bg-bg-secondary border-border">
              <p className={`${item.class} text-2xl text-text-primary mb-2`}>Aa</p>
              <p className="text-sm text-text-secondary">{item.label}</p>
              <code className="text-xs text-amethyst-600">{item.weight}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Line Height & Letter Spacing */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Line Height & Spacing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
            <h3 className="font-bold mb-4 text-text-primary">Line Height</h3>
            <div className="space-y-4">
              <div>
                <code className="text-sm mb-2 block text-amethyst-600">Tight (1.2)</code>
                <p className="leading-tight text-text-secondary">For headings and display text where space is premium and readability is still maintained with larger sizes.</p>
              </div>
              <div>
                <code className="text-sm mb-2 block text-amethyst-600">Normal (1.5)</code>
                <p className="leading-normal text-text-secondary">For body text and general content. This is the sweet spot for readability in most contexts.</p>
              </div>
              <div>
                <code className="text-sm mb-2 block text-amethyst-600">Relaxed (1.75)</code>
                <p className="leading-relaxed text-text-secondary">For long-form content where extra breathing room improves reading comfort over extended periods.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
            <h3 className="font-bold mb-4 text-text-primary">Letter Spacing</h3>
            <div className="space-y-4">
              <div>
                <code className="text-sm mb-2 block text-amethyst-600">Tighter (-0.05em)</code>
                <p className="tracking-tighter text-sm text-text-secondary">LARGE HEADINGS</p>
              </div>
              <div>
                <code className="text-sm mb-2 block text-amethyst-600">Normal (0)</code>
                <p className="tracking-normal text-text-secondary">Body text and most content</p>
              </div>
              <div>
                <code className="text-sm mb-2 block text-amethyst-600">Wide (0.05em)</code>
                <p className="tracking-wide text-xs uppercase text-text-secondary">Labels and small text</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Font Pairing */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Font Pairing</h2>
        <div className="space-y-6">
          {[
            {
              heading: "Inter",
              body: "Inter",
              type: "Single Family",
              description: "Use different weights for hierarchy. Simple and consistent."
            },
            {
              heading: "Playfair Display",
              body: "Source Sans Pro",
              type: "Serif + Sans",
              description: "Elegant contrast. Good for editorial or sophisticated brands."
            },
            {
              heading: "Montserrat",
              body: "Open Sans",
              type: "Sans + Sans",
              description: "Modern and clean. Works well for tech products."
            }
          ].map((pair) => (
            <div key={pair.type} className="p-6 rounded-xl border bg-bg-secondary border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary" style={{ fontFamily: pair.heading }}>
                    {pair.heading}
                  </h3>
                  <p className="mt-2 text-text-secondary" style={{ fontFamily: pair.body }}>
                    {pair.body}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amethyst-100 text-amethyst-600">{pair.type}</span>
              </div>
              <p className="text-sm text-text-secondary">{pair.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Action Items */}
      <section>
        <div className="p-8 rounded-xl border-2 bg-amethyst-50 border-amethyst-200">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">🎯 Your Action Items</h2>
          <ul className="space-y-3">
            {[
              "Choose 1-2 font families maximum",
              "Define 6-8 font sizes using a type scale",
              "Set up 3-4 font weights (regular, medium, semibold, bold)",
              "Define line heights for headings vs body text",
              "Test readability on different screen sizes",
              "Document when to use each size and weight"
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
