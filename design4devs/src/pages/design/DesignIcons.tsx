export default function DesignIcons() {
  return (
    <div className="space-y-12">
      {/* Icon Guidelines */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Icon System Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Consistent Style",
              emoji: "🎨",
              description: "Choose one style: outline, filled, or duotone. Stick with it.",
              example: "All icons should have the same stroke width (e.g., 2px)"
            },
            {
              title: "Size Standards",
              emoji: "📏",
              description: "Define 3-4 standard sizes for different contexts.",
              example: "sm: 16px, md: 24px, lg: 32px, xl: 48px"
            },
            {
              title: "Grid System",
              emoji: "⊞",
              description: "Design icons on a consistent grid (e.g., 24x24px).",
              example: "Use 2px padding inside the artboard for breathing room"
            },
            {
              title: "Color Usage",
              emoji: "🌈",
              description: "Icons inherit text color by default. Use currentColor.",
              example: "Allow icons to adapt to light/dark mode automatically"
            }
          ].map((guideline) => (
            <div key={guideline.title} className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{guideline.emoji}</span>
                <h3 className="font-bold text-text-primary">{guideline.title}</h3>
              </div>
              <p className="text-sm mb-3 text-text-secondary">{guideline.description}</p>
              <div className="p-3 rounded-lg bg-amethyst-50">
                <p className="text-xs text-amethyst-600">💡 {guideline.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Icon Sizes Demo */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Icon Sizes in Context</h2>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <div className="space-y-6">
            {[
              {
                size: "16px",
                label: "Small",
                usage: "Inline with text, badges, table cells",
                class: "w-4 h-4"
              },
              {
                size: "20px",
                label: "Medium",
                usage: "Buttons, form inputs, list items",
                class: "w-5 h-5"
              },
              {
                size: "24px",
                label: "Large",
                usage: "Navigation, toolbar icons",
                class: "w-6 h-6"
              },
              {
                size: "32px",
                label: "XL",
                usage: "Feature cards, empty states",
                class: "w-8 h-8"
              },
              {
                size: "48px",
                label: "XXL",
                usage: "Hero sections, illustrations",
                class: "w-12 h-12"
              }
            ].map((icon) => (
              <div key={icon.size} className="flex items-center gap-6 pb-4 border-b last:border-0 border-border">
                <svg className={`${icon.class} text-amethyst-600 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <code className="font-mono text-sm font-semibold text-amethyst-600">{icon.size}</code>
                    <span className="text-sm text-text-tertiary">({icon.label})</span>
                  </div>
                  <p className="text-sm text-text-secondary">{icon.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Icons */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Essential Icon Set</h2>
        <p className="mb-6 leading-relaxed text-text-secondary">Start with the most commonly needed icons. You can always add more as needed.</p>
        <div className="p-8 rounded-xl border-2 bg-bg-secondary border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: "M5 13l4 4L19 7", name: "Check" },
              { icon: "M6 18L18 6M6 6l12 12", name: "Close" },
              { icon: "M12 4v16m8-8H4", name: "Add" },
              { icon: "M19 9l-7 7-7-7", name: "Chevron" },
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                name: "Search"
              },
              { icon: "M4 6h16M4 12h16M4 18h16", name: "Menu" },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                name: "Clock"
              },
              {
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                name: "User"
              },
              {
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                name: "Settings"
              },
              {
                icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                name: "Bell"
              },
              {
                icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                name: "Chat"
              },
              {
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                name: "Home"
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                name: "File"
              },
              {
                icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
                name: "Folder"
              },
              {
                icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                name: "Image"
              },
              {
                icon: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
                name: "Info"
              },
              {
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                name: "Warning"
              },
              {
                icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                name: "Star"
              }
            ].map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-bg-tertiary transition-colors">
                <svg className="w-8 h-8 text-text-secondary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-xs text-center text-text-secondary">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Sources */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Icon Libraries</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Heroicons",
              url: "heroicons.com",
              style: "Outline & Solid",
              description: "Clean, modern icons. Great for React/Vue."
            },
            {
              name: "Lucide",
              url: "lucide.dev",
              style: "Outline",
              description: "Fork of Feather Icons. Lightweight and flexible."
            },
            {
              name: "Phosphor",
              url: "phosphoricons.com",
              style: "Multiple weights",
              description: "Versatile set with 6 weight variants."
            },
            {
              name: "Feather",
              url: "feathericons.com",
              style: "Outline",
              description: "Simple and beautiful. Highly consistent."
            },
            {
              name: "Material Icons",
              url: "fonts.google.com/icons",
              style: "Filled & Outlined",
              description: "Comprehensive. Based on Material Design."
            },
            {
              name: "Font Awesome",
              url: "fontawesome.com",
              style: "Solid, Regular, Light",
              description: "Massive library. Popular and well-supported."
            }
          ].map((library) => (
            <div key={library.name} className="p-6 rounded-xl border-2 transition-colors bg-bg-secondary border-border hover:border-ocean-500">
              <h3 className="font-bold mb-2 text-text-primary">{library.name}</h3>
              <code className="text-xs block mb-3 text-amethyst-600">{library.url}</code>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 rounded text-xs font-semibold bg-amethyst-100 text-amethyst-600">{library.style}</span>
              </div>
              <p className="text-sm text-text-secondary">{library.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Visual Elements */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-text-primary">Other Visual Elements</h2>
        <div className="space-y-6">
          {[
            {
              title: "Illustrations",
              emoji: "🎨",
              description: "Custom illustrations for empty states, onboarding, error pages. Keep style consistent with icons.",
              tips: ["Use same color palette", "Match line weights", "Maintain visual tone"]
            },
            {
              title: "Avatars",
              emoji: "👤",
              description: "User profile images with fallbacks. Define sizes and shape (circle vs rounded square).",
              tips: ["3-4 size variants", "Initials as fallback", "Default avatar image"]
            },
            {
              title: "Logos",
              emoji: "🏢",
              description: "Your brand logo in multiple formats. Include variants for different backgrounds.",
              tips: ["Full color", "Monochrome", "Light/dark versions", "Favicon"]
            },
            {
              title: "Imagery",
              emoji: "📸",
              description: "Photos and graphics. Define aspect ratios, loading states, and placeholder styles.",
              tips: ["Consistent aspect ratios", "Lazy loading", "Blur placeholder", "Alt text requirements"]
            }
          ].map((element) => (
            <div key={element.title} className="p-6 rounded-xl border-2 bg-bg-secondary border-border">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{element.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-bold mb-2 text-text-primary">{element.title}</h3>
                  <p className="text-sm mb-4 text-text-secondary">{element.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {element.tips.map((tip) => (
                      <span key={tip} className="px-3 py-1 rounded-full text-xs bg-amethyst-50 text-amethyst-600">
                        {tip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
              "Choose one icon library and stick with it",
              "Define 3-4 standard icon sizes (16px, 24px, 32px, 48px)",
              "Create a catalog of essential icons your product needs",
              "Ensure icons use currentColor for automatic theming",
              "Document when to use icons vs text labels",
              "Create illustration guidelines if using custom art",
              "Define avatar fallback behavior and sizes"
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
