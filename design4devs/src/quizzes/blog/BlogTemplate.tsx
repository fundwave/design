/**
 * Blog Website Template
 */

import {
  Calendar, Clock, User, Heart, MessageCircle, Share2, Bookmark,
  ChevronRight, ArrowRight, Twitter, Facebook, Linkedin
} from "lucide-react";
import { Zone, ZoneContent, useZoneContext } from "../../components/quiz/ZoneRenderer";

export function BlogTemplate() {
  const { fixedZones } = useZoneContext();
  const totalZones = 8;

  return (
    <div className={`min-h-[600px] rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 bg-white dark:bg-slate-900 ${
      fixedZones.size === totalZones ? "border-rose-400 shadow-rose-500/20" : "border-slate-200 dark:border-slate-700"
    }`}>
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white font-bold">B</div>
            <span className="font-bold text-slate-800 dark:text-white">BlogSpace</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a className="hover:text-slate-900 dark:hover:text-white">Home</a>
            <a className="hover:text-slate-900 dark:hover:text-white">Articles</a>
            <a className="hover:text-slate-900 dark:hover:text-white">Categories</a>
            <a className="hover:text-slate-900 dark:hover:text-white">About</a>
          </nav>
          <button className="px-4 py-1.5 bg-rose-500 text-white text-sm rounded-lg hover:bg-rose-600">Subscribe</button>
        </div>
      </header>

      {/* Content */}
      <div className="flex">
        {/* Main Article */}
        <main className="flex-1 p-4 sm:p-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-sm text-slate-500 mb-6">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Technology</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-rose-600">Design Systems</span>
          </div>

          {/* Article Header */}
          <article>
            <Zone id="meta-info" className="mb-4">
              <ZoneContent
                zoneId="meta-info"
                broken={
                  <div className="text-lg font-bold text-slate-800 dark:text-white">
                    Sarah Chen • February 5, 2024 • 8 min read
                  </div>
                }
                fixed={
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-medium">SC</div>
                      <div>
                        <div className="font-medium text-slate-700 dark:text-slate-300">Sarah Chen</div>
                        <div className="text-xs">Senior Designer</div>
                      </div>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 5, 2024</span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
                  </div>
                }
              />
            </Zone>

            <Zone id="article-title" className="mb-6">
              <ZoneContent
                zoneId="article-title"
                broken={
                  <h1 className="text-xl text-slate-700 dark:text-slate-300">Building Scalable Design Systems: A Complete Guide for Teams</h1>
                }
                fixed={
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                    Building Scalable Design Systems: A Complete Guide for Teams
                  </h1>
                }
              />
            </Zone>

            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 dark:from-slate-800 dark:to-slate-700 rounded-xl mb-8 flex items-center justify-center">
              <span className="text-rose-300 dark:text-slate-600 font-medium">Featured Image</span>
            </div>

            {/* Article Body */}
            <Zone id="body-text">
              <ZoneContent
                zoneId="body-text"
                broken={
                  <div className="max-w-none">
                    <Zone id="paragraph-spacing">
                      <ZoneContent
                        zoneId="paragraph-spacing"
                        broken={
                          <Zone id="text-contrast">
                            <ZoneContent
                              zoneId="text-contrast"
                              broken={
                                <div className="text-slate-400 text-sm leading-relaxed space-y-2">
                                  <p>Design systems have become essential for modern product teams. They provide a single source of truth for design decisions, enable consistent user experiences, and dramatically speed up the design and development process. In this comprehensive guide, we'll explore how to build a design system that scales with your organization and stands the test of time.</p>
                                  <Zone id="subheadings">
                                    <ZoneContent
                                      zoneId="subheadings"
                                      broken={
                                        <>
                                          <p>The foundation of any good design system starts with understanding your product's needs. Before diving into components and tokens, take time to audit your existing designs. Look for patterns, inconsistencies, and opportunities for standardization. This audit will inform the structure of your system.</p>
                                          <p>Components are the building blocks of your design system. Start with atomic elements like buttons, inputs, and typography, then build up to more complex organisms like cards, modals, and navigation patterns. Each component should be well-documented with clear usage guidelines, accessibility requirements, and code examples. Consider edge cases and how components behave in different contexts.</p>
                                          <p>Tokens are the design decisions that make up your visual language. Colors, spacing, typography scales, and shadows should all be tokenized for consistency. This creates a shared vocabulary between designers and developers. When you need to make global changes, updating a token propagates changes throughout your entire product.</p>
                                          <p>Documentation is often overlooked but crucial for adoption. Your design system needs clear, searchable documentation that explains not just what each component does, but when and why to use it. Include do's and don'ts, real-world examples, and accessibility considerations.</p>
                                        </>
                                      }
                                      fixed={
                                        <>
                                          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mt-6 mb-3">Getting Started</h2>
                                          <p>The foundation of any good design system starts with understanding your product's needs. Before diving into components and tokens, take time to audit your existing designs. Look for patterns, inconsistencies, and opportunities for standardization.</p>
                                          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mt-6 mb-3">Building Components</h2>
                                          <p>Components are the building blocks of your design system. Start with atomic elements like buttons, inputs, and typography, then build up to more complex organisms like cards, modals, and navigation patterns.</p>
                                          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mt-6 mb-3">Design Tokens</h2>
                                          <p>Tokens are the design decisions that make up your visual language. Colors, spacing, typography scales, and shadows should all be tokenized for consistency across platforms.</p>
                                          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mt-6 mb-3">Documentation</h2>
                                          <p>Documentation is often overlooked but crucial for adoption. Your design system needs clear, searchable documentation that explains not just what each component does, but when and why to use it.</p>
                                        </>
                                      }
                                    />
                                  </Zone>
                                </div>
                              }
                              fixed={
                                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                                  <p>Design systems have become essential for modern product teams. They provide a single source of truth for design decisions, enable consistent user experiences, and dramatically speed up the design and development process. In this comprehensive guide, we'll explore how to build a design system that scales with your organization and stands the test of time.</p>
                                  <Zone id="subheadings">
                                    <ZoneContent
                                      zoneId="subheadings"
                                      broken={
                                        <>
                                          <p>The foundation of any good design system starts with understanding your product's needs. Before diving into components and tokens, take time to audit your existing designs. Look for patterns, inconsistencies, and opportunities for standardization. This audit will inform the structure of your system.</p>
                                          <p>Components are the building blocks of your design system. Start with atomic elements like buttons, inputs, and typography, then build up to more complex organisms like cards, modals, and navigation patterns. Each component should be well-documented with clear usage guidelines, accessibility requirements, and code examples. Consider edge cases and how components behave in different contexts.</p>
                                          <p>Tokens are the design decisions that make up your visual language. Colors, spacing, typography scales, and shadows should all be tokenized for consistency. This creates a shared vocabulary between designers and developers. When you need to make global changes, updating a token propagates changes throughout your entire product.</p>
                                          <p>Documentation is often overlooked but crucial for adoption. Your design system needs clear, searchable documentation that explains not just what each component does, but when and why to use it. Include do's and don'ts, real-world examples, and accessibility considerations.</p>
                                        </>
                                      }
                                      fixed={
                                        <>
                                          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-4">Getting Started</h2>
                                          <p>The foundation of any good design system starts with understanding your product's needs. Before diving into components and tokens, take time to audit your existing designs. Look for patterns, inconsistencies, and opportunities for standardization.</p>
                                          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-4">Building Components</h2>
                                          <p>Components are the building blocks of your design system. Start with atomic elements like buttons, inputs, and typography, then build up to more complex organisms like cards, modals, and navigation patterns.</p>
                                          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-4">Design Tokens</h2>
                                          <p>Tokens are the design decisions that make up your visual language. Colors, spacing, typography scales, and shadows should all be tokenized for consistency across platforms.</p>
                                          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-4">Documentation</h2>
                                          <p>Documentation is often overlooked but crucial for adoption. Your design system needs clear, searchable documentation that explains not just what each component does, but when and why to use it.</p>
                                        </>
                                      }
                                    />
                                  </Zone>
                                </div>
                              }
                            />
                          </Zone>
                        }
                        fixed={
                          <Zone id="text-contrast">
                            <ZoneContent
                              zoneId="text-contrast"
                              broken={
                                <div className="text-slate-400 text-sm leading-relaxed space-y-6">
                                  <p>Design systems have become essential for modern product teams. They provide a single source of truth for design decisions, enable consistent user experiences, and dramatically speed up the design and development process.</p>
                                  <p>The foundation of any good design system starts with understanding your product's needs. Before diving into components and tokens, take time to audit your existing designs.</p>
                                  <p>Components are the building blocks of your design system. Start with atomic elements like buttons, inputs, and typography, then build up to more complex patterns.</p>
                                </div>
                              }
                              fixed={
                                <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
                                  <p>Design systems have become essential for modern product teams. They provide a single source of truth for design decisions, enable consistent user experiences, and dramatically speed up the design and development process.</p>
                                  <Zone id="subheadings">
                                    <ZoneContent
                                      zoneId="subheadings"
                                      broken={
                                        <>
                                          <p>The foundation of any good design system starts with understanding your product's needs. Before diving into components and tokens, take time to audit your existing designs.</p>
                                          <p>Components are the building blocks of your design system. Start with atomic elements like buttons, inputs, and typography, then build up to more complex patterns.</p>
                                        </>
                                      }
                                      fixed={
                                        <>
                                          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-4">Getting Started</h2>
                                          <p>The foundation of any good design system starts with understanding your product's needs. Before diving into components and tokens, take time to audit your existing designs.</p>
                                          <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-8 mb-4">Building Components</h2>
                                          <p>Components are the building blocks of your design system. Start with atomic elements like buttons, inputs, and typography, then build up to more complex patterns.</p>
                                        </>
                                      }
                                    />
                                  </Zone>
                                </div>
                              }
                            />
                          </Zone>
                        }
                      />
                    </Zone>

                    {/* Links */}
                    <Zone id="link-styles" className="mt-6">
                      <ZoneContent
                        zoneId="link-styles"
                        broken={
                          <p className="text-sm text-slate-500">
                            Learn more about <a className="text-blue-600 underline">component design</a>, read about <a className="text-rose-500 font-bold">token systems</a>, or check out our <a className="text-green-600 italic">documentation guide</a>.
                          </p>
                        }
                        fixed={
                          <p className="text-slate-600 dark:text-slate-400">
                            Learn more about <a className="text-rose-600 hover:text-rose-700 underline underline-offset-2">component design</a>, read about <a className="text-rose-600 hover:text-rose-700 underline underline-offset-2">token systems</a>, or check out our <a className="text-rose-600 hover:text-rose-700 underline underline-offset-2">documentation guide</a>.
                          </p>
                        }
                      />
                    </Zone>
                  </div>
                }
                fixed={
                  <div className="max-w-2xl">
                    <Zone id="paragraph-spacing">
                      <ZoneContent
                        zoneId="paragraph-spacing"
                        broken={
                          <Zone id="text-contrast">
                            <ZoneContent
                              zoneId="text-contrast"
                              broken={
                                <div className="text-slate-400 leading-relaxed space-y-2">
                                  <p>Design systems have become essential for modern product teams. They provide a single source of truth for design decisions.</p>
                                </div>
                              }
                              fixed={
                                <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-2">
                                  <p>Design systems have become essential for modern product teams. They provide a single source of truth for design decisions, enable consistent user experiences, and dramatically speed up the design and development process.</p>
                                </div>
                              }
                            />
                          </Zone>
                        }
                        fixed={
                          <Zone id="text-contrast">
                            <ZoneContent
                              zoneId="text-contrast"
                              broken={
                                <div className="text-slate-400 leading-relaxed space-y-6">
                                  <p>Design systems have become essential for modern product teams. They provide a single source of truth for design decisions, enable consistent user experiences, and dramatically speed up the design and development process.</p>
                                </div>
                              }
                              fixed={
                                <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
                                  <p>Design systems have become essential for modern product teams. They provide a single source of truth for design decisions, enable consistent user experiences, and dramatically speed up the design and development process.</p>
                                  <Zone id="subheadings">
                                    <ZoneContent
                                      zoneId="subheadings"
                                      broken={
                                        <>
                                          <p>The foundation of any good design system starts with understanding your product's needs. Before diving into components and tokens, take time to audit your existing designs.</p>
                                          <p>Components are the building blocks of your design system. Start with atomic elements like buttons, inputs, and typography, then build up to more complex patterns.</p>
                                        </>
                                      }
                                      fixed={
                                        <>
                                          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Getting Started</h2>
                                          <p>The foundation of any good design system starts with understanding your product's needs. Before diving into components and tokens, take time to audit your existing designs.</p>
                                          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Building Components</h2>
                                          <p>Components are the building blocks of your design system. Start with atomic elements like buttons, inputs, and typography, then build up to more complex patterns.</p>
                                        </>
                                      }
                                    />
                                  </Zone>
                                </div>
                              }
                            />
                          </Zone>
                        }
                      />
                    </Zone>

                    {/* Links */}
                    <Zone id="link-styles" className="mt-8">
                      <ZoneContent
                        zoneId="link-styles"
                        broken={
                          <p className="text-slate-500">
                            Learn more about <a className="text-blue-600 underline">component design</a>, read about <a className="text-rose-500 font-bold">token systems</a>, or check out our <a className="text-green-600 italic">documentation guide</a>.
                          </p>
                        }
                        fixed={
                          <p className="text-lg text-slate-600 dark:text-slate-400">
                            Learn more about <a className="text-rose-600 hover:text-rose-700 underline underline-offset-2">component design</a>, read about <a className="text-rose-600 hover:text-rose-700 underline underline-offset-2">token systems</a>, or check out our <a className="text-rose-600 hover:text-rose-700 underline underline-offset-2">documentation guide</a>.
                          </p>
                        }
                      />
                    </Zone>
                  </div>
                }
              />
            </Zone>

            {/* Article Footer */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-slate-500 hover:text-rose-500">
                    <Heart className="w-5 h-5" /> 234
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-rose-500">
                    <MessageCircle className="w-5 h-5" /> 18
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-500 hover:text-slate-700"><Bookmark className="w-5 h-5" /></button>
                  <button className="p-2 text-slate-500 hover:text-slate-700"><Share2 className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          </article>
        </main>

        {/* Sidebar */}
        <Zone id="sidebar-content" className="hidden lg:block w-72 border-l border-slate-200 dark:border-slate-700 p-6">
          <ZoneContent
            zoneId="sidebar-content"
            broken={
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-3">Weather</h3>
                  <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <div className="text-3xl mb-2">🌤️</div>
                    <div className="text-2xl font-bold">72°F</div>
                    <div className="text-sm text-slate-500">Partly Cloudy</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-3">Stock Prices</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>AAPL</span><span className="text-green-500">+2.3%</span></div>
                    <div className="flex justify-between"><span>GOOGL</span><span className="text-red-500">-1.1%</span></div>
                    <div className="flex justify-between"><span>MSFT</span><span className="text-green-500">+0.8%</span></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-3">Horoscope</h3>
                  <p className="text-sm text-slate-500">♈ Aries: Today is a great day for new beginnings...</p>
                </div>
              </div>
            }
            fixed={
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-3">About the Author</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-medium">SC</div>
                    <div>
                      <div className="font-medium text-slate-700 dark:text-slate-300">Sarah Chen</div>
                      <div className="text-sm text-slate-500">Senior Designer at Figma</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Sarah writes about design systems, product design, and building scalable UX processes.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-3">Related Articles</h3>
                  <div className="space-y-3">
                    <a className="block group">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-rose-500">The Future of Design Tokens</div>
                      <div className="text-sm text-slate-500">5 min read</div>
                    </a>
                    <a className="block group">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-rose-500">Accessibility in Design Systems</div>
                      <div className="text-sm text-slate-500">7 min read</div>
                    </a>
                    <a className="block group">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-rose-500">Component Libraries vs Design Systems</div>
                      <div className="text-sm text-slate-500">4 min read</div>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm">Design Systems</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm">UX</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm">Components</span>
                  </div>
                </div>
              </div>
            }
          />
        </Zone>
      </div>
    </div>
  );
}
