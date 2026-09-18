import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { ComponentGuide, GuideItem } from "../constants/routes";

import { ThemeColor } from "../types";

interface ComponentHomeProps {
  config: ComponentGuide;
}

interface ItemCardProps {
  item: GuideItem;
  index: number;
  themeColor: ThemeColor;
}

function ItemCard({ item, index, themeColor }: ItemCardProps) {
  const isOcean = themeColor === "ocean";

  return (
    <Link
      to={item.path}
      className={`group block p-5 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 bg-bg-primary ${
        isOcean ? "border-ocean-500/20 hover:border-ocean-500/40" : "border-amethyst-500/20 hover:border-amethyst-500/40"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
            isOcean ? "bg-ocean-500/10 text-ocean-500" : "bg-amethyst-500/10 text-amethyst-500"
          }`}
        >
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-primary group-hover:text-ocean-500 transition-colors">{item.name}</h3>
            <span className="text-lg">{item.emoji}</span>
          </div>
          <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
        </div>
      </div>
    </Link>
  );
}

interface ItemGridProps {
  items: GuideItem[];
  themeColor: ThemeColor;
}

function ItemGrid({ items, themeColor }: ItemGridProps) {
  const hasCategories = items.some((item) => item.category);

  if (hasCategories) {
    const itemsByCategory = items.reduce(
      (acc, item) => {
        const category = item.category || "Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      },
      {} as Record<string, GuideItem[]>
    );

    let globalIndex = 0;
    return (
      <div className="space-y-10">
        {Object.entries(itemsByCategory).map(([category, categoryItems]) => (
          <div key={category}>
            <h2 className="text-sm font-semibold text-tertiary uppercase tracking-wider mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categoryItems.map((item) => {
                const idx = globalIndex++;
                return <ItemCard key={item.path} item={item} index={idx} themeColor={themeColor} />;
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, index) => (
        <ItemCard key={item.path} item={item} index={index} themeColor={themeColor} />
      ))}
    </div>
  );
}

export default function ComponentHome({ config }: ComponentHomeProps) {
  const { title, emoji, description, buttonText, themeColor, items } = config;
  const isOcean = themeColor === "ocean";

  return (
    <div className="w-full bg-bg-primary">
      {/* Grid extends behind header */}

      {/* Hero section */}
      <div className="absolute inset-0 pointer-events-none grid-pattern" />

      <div className="relative hero-gradient py-20 px-4 hero-gradient">
        <div className="relative max-w-6xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              isOcean ? "bg-ocean-500/10 border border-ocean-500/20" : "bg-amethyst-500/10 border border-amethyst-500/20"
            }`}
          >
            <span className="text-xl">{emoji}</span>
            <span className={`text-sm font-medium ${isOcean ? "text-ocean-500" : "text-amethyst-500"}`}>{items.length} lessons</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">{title}</h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Lessons grid */}
      <div className="backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-12">
            <ItemGrid items={items} themeColor={themeColor} />
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to={items[0].path} className={`group text-lg ${isOcean ? "btn-gradient-ocean" : "btn-gradient-amethyst"}`}>
              {buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
