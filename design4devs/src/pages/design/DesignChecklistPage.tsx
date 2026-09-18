import DesignChecklist from "../../components/DesignChecklist";

export default function DesignChecklistPage() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <section>
        <div className="p-8 rounded-xl border-2 bg-gradient-to-r from-amethyst-50 to-indigo-50 border-amethyst-200">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">You're Almost There! 🎉</h2>
          <p className="leading-relaxed mb-4 text-text-secondary">
            You've built the foundation of your design system. Now it's time to review everything before going live. This checklist covers all the essentials we've discussed in
            previous steps.
          </p>
          <p className="leading-relaxed text-text-secondary">Check off items as you complete them, and copy the checklist to share with your team.</p>
        </div>
      </section>

      {/* The Checklist Component */}
      <section>
        <DesignChecklist />
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">What Happens Next?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              emoji: "📚",
              title: "Documentation",
              description: "Create comprehensive documentation for your team. Include examples, code snippets, and usage guidelines.",
              action: "Set up a documentation site (Storybook, Docusaurus, or similar)"
            },
            {
              emoji: "🧪",
              title: "Testing",
              description: "Test your design system across different browsers, devices, and accessibility tools.",
              action: "Run automated tests, manual QA, and accessibility audits"
            },
            {
              emoji: "🚀",
              title: "Adoption",
              description: "Roll out your design system gradually. Start with one project, gather feedback, iterate.",
              action: "Create a pilot program with a small team"
            },
            {
              emoji: "🔄",
              title: "Maintenance",
              description: "Design systems evolve. Set up a governance process for proposing and reviewing changes.",
              action: "Schedule quarterly reviews and updates"
            }
          ].map((step) => (
            <div key={step.title} className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{step.emoji}</span>
                <h3 className="font-bold text-text-primary">{step.title}</h3>
              </div>
              <p className="text-sm mb-4 text-text-secondary">{step.description}</p>
              <div className="p-3 rounded-lg bg-amethyst-50">
                <p className="text-xs text-amethyst-600">
                  <strong>Action:</strong> {step.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Helpful Resources</h2>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <div className="space-y-6">
            {[
              {
                category: "Design Tokens",
                resources: [
                  {
                    name: "Style Dictionary",
                    url: "amzn.github.io/style-dictionary"
                  },
                  {
                    name: "Design Tokens W3C Spec",
                    url: "design-tokens.github.io"
                  }
                ]
              },
              {
                category: "Documentation",
                resources: [
                  { name: "Storybook", url: "storybook.js.org" },
                  { name: "Docusaurus", url: "docusaurus.io" }
                ]
              },
              {
                category: "Accessibility",
                resources: [
                  { name: "WCAG Guidelines", url: "w3.org/WAI/WCAG21" },
                  {
                    name: "WebAIM Contrast Checker",
                    url: "webaim.org/resources/contrastchecker"
                  }
                ]
              },
              {
                category: "Inspiration",
                resources: [
                  { name: "Material Design", url: "material.io" },
                  { name: "Atlassian Design System", url: "atlassian.design" },
                  { name: "Polaris (Shopify)", url: "polaris.shopify.com" }
                ]
              }
            ].map((section) => (
              <div key={section.category}>
                <h3 className="font-bold mb-3 text-text-primary">{section.category}</h3>
                <div className="space-y-2">
                  {section.resources.map((resource) => (
                    <div key={resource.name} className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0 text-amethyst-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="text-text-secondary">{resource.name}</span>
                      <code className="text-xs text-text-tertiary">{resource.url}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section>
        <div className="p-8 rounded-xl text-white text-center bg-gradient-to-r from-amethyst-600 to-amethyst-700">
          <h2 className="text-3xl font-bold mb-4">Congratulations! 🎊</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto leading-relaxed text-amethyst-100">
            You've learned the fundamentals of building a design system. Remember: a design system is never "done"—it evolves with your product and team.
          </p>
          <p className="text-amethyst-100">Start small, iterate often, and keep your users at the center of every decision.</p>
        </div>
      </section>
    </div>
  );
}
