/**
 * Notion Grid Dashboard Template - SIMPLIFIED VERSION
 */

import {
  Search, Plus, Settings, Star, Clock, FileText, Users, Calendar, 
  MoreHorizontal, Hash, Inbox, Trash2
} from "lucide-react";
import { Zone, ZoneContent, useZoneContext } from "../../components/quiz/ZoneRenderer";

const cards = [
  { title: "Website Redesign", tags: ["Design", "Q1"], progress: 75, members: 4, tasks: 12, due: "Feb 15", priority: "High" },
  { title: "Mobile App", tags: ["Development"], progress: 40, members: 6, tasks: 24, due: "Mar 1", priority: "Medium" },
  { title: "Brand Guidelines", tags: ["Design", "Branding"], progress: 90, members: 2, tasks: 8, due: "Feb 10", priority: "Low" },
  { title: "API Integration", tags: ["Backend"], progress: 20, members: 3, tasks: 16, due: "Mar 15", priority: "High" },
  { title: "User Research", tags: ["Research", "UX"], progress: 60, members: 2, tasks: 6, due: "Feb 20", priority: "Medium" },
  { title: "Documentation", tags: ["Docs"], progress: 30, members: 1, tasks: 10, due: "Ongoing", priority: "Low" },
];

export function NotionTemplate() {
  const { fixedZones } = useZoneContext();
  const isComplete = fixedZones.size === 8;

  return (
    <div className={`min-h-[500px] sm:min-h-[650px] rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 bg-white dark:bg-slate-900 flex ${
      isComplete ? "border-slate-400 shadow-slate-500/20" : "border-slate-200 dark:border-slate-700"
    }`}>
      {/* ===== SIDEBAR ===== */}
      <aside className="w-12 sm:w-56 bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col">
        {/* Workspace */}
        <div className="p-2 sm:p-3 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold">W</div>
            <span className="hidden sm:block text-sm font-medium text-slate-700 dark:text-slate-200 truncate">Workspace</span>
          </div>
        </div>

        {/* Zone 1: Sidebar Nav Icons */}
        <Zone id="sidebar-icons" className="flex-1 py-2">
          <ZoneContent
            zoneId="sidebar-icons"
            broken={
              <nav className="space-y-0.5 px-1">
                <a className="flex items-center gap-1 px-1 py-0.5 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Search className="w-3 h-3" /><span className="hidden sm:block text-[10px]">Search</span>
                </a>
                <a className="flex items-center gap-1 px-1 py-0.5 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Clock className="w-3 h-3" /><span className="hidden sm:block text-[10px]">Recent</span>
                </a>
                <a className="flex items-center gap-1 px-1 py-0.5 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Star className="w-3 h-3" /><span className="hidden sm:block text-[10px]">Favorites</span>
                </a>
                <a className="flex items-center gap-1 px-1 py-0.5 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Inbox className="w-3 h-3" /><span className="hidden sm:block text-[10px]">Inbox</span>
                </a>
                <a className="flex items-center gap-1 px-1 py-0.5 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Settings className="w-3 h-3" /><span className="hidden sm:block text-[10px]">Settings</span>
                </a>
                <a className="flex items-center gap-1 px-1 py-0.5 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Trash2 className="w-3 h-3" /><span className="hidden sm:block text-[10px]">Trash</span>
                </a>
              </nav>
            }
            fixed={
              <nav className="space-y-1 px-2">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Search className="w-4 h-4" /><span className="hidden sm:block text-sm">Search</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Clock className="w-4 h-4" /><span className="hidden sm:block text-sm">Recent</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Star className="w-4 h-4" /><span className="hidden sm:block text-sm">Favorites</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Inbox className="w-4 h-4" /><span className="hidden sm:block text-sm">Inbox</span>
                </a>
                <div className="my-3 border-t border-slate-200 dark:border-slate-600" />
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <Settings className="w-4 h-4" /><span className="hidden sm:block text-sm">Settings</span>
                </a>
              </nav>
            }
          />
        </Zone>

        {/* Pages */}
        <div className="hidden sm:block border-t border-slate-200 dark:border-slate-700 p-3">
          <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Pages</div>
          <div className="space-y-1">
            <a className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700">
              <FileText className="w-4 h-4" /> Projects
            </a>
            <a className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
              <Users className="w-4 h-4" /> Team
            </a>
            <a className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
              <Calendar className="w-4 h-4" /> Calendar
            </a>
          </div>
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-100 dark:border-slate-800 px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Zone 2: Page Title */}
            <Zone id="page-title">
              <ZoneContent
                zoneId="page-title"
                broken={
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-500">Projects</span>
                  </div>
                }
                fixed={
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-slate-800 dark:text-white">Projects</h1>
                  </div>
                }
              />
            </Zone>

            {/* Zone 3: Action Buttons */}
            <Zone id="action-buttons">
              <ZoneContent
                zoneId="action-buttons"
                broken={
                  <div className="flex items-center">
                    <button className="p-1 text-slate-400"><Star className="w-4 h-4" /></button>
                    <button className="ml-6 px-2 py-1 text-xs bg-blue-500 text-white rounded">New</button>
                    <button className="p-1 text-slate-400 ml-1"><MoreHorizontal className="w-4 h-4" /></button>
                  </div>
                }
                fixed={
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"><Star className="w-4 h-4" /></button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"><MoreHorizontal className="w-4 h-4" /></button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium">
                      <Plus className="w-4 h-4" /> New Project
                    </button>
                  </div>
                }
              />
            </Zone>
          </div>
        </header>

        {/* Zone 4: Card Spacing (wrapper for the grid) */}
        <Zone id="card-spacing" className="p-3 sm:p-6">
          <ZoneContent
            zoneId="card-spacing"
            broken={
              // Zone 5: Card Grid Layout
              <Zone id="card-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
                <ZoneContent
                  zoneId="card-grid"
                  broken={
                    <>
                      {cards.map((card, i) => (
                        // Zone 6: Info Density (per card)
                        <Zone 
                          key={i} 
                          id="info-density" 
                          className={`bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden ${
                            i % 3 === 1 ? 'p-2' : i % 3 === 2 ? 'p-5' : 'p-3'
                          }`}
                        >
                          <ZoneContent
                            zoneId="info-density"
                            broken={
                              <div>
                                <div className="flex items-start justify-between mb-2">
                                  {/* Zone 7: Text Contrast */}
                                  <Zone id="text-contrast">
                                    <ZoneContent
                                      zoneId="text-contrast"
                                      broken={<h3 className="font-medium text-slate-400 text-sm">{card.title}</h3>}
                                      fixed={<h3 className="font-semibold text-slate-800 dark:text-white">{card.title}</h3>}
                                    />
                                  </Zone>
                                  <span className="text-[10px] text-slate-400">{card.priority}</span>
                                </div>
                                {/* Zone 8: Tag Styles */}
                                <Zone id="tag-styles" className="flex flex-wrap gap-1 mb-2">
                                  <ZoneContent
                                    zoneId="tag-styles"
                                    broken={
                                      <>
                                        {card.tags.map((tag, j) => (
                                          <span 
                                            key={j} 
                                            className={`text-[10px] px-1 ${j % 2 === 0 ? 'bg-blue-100 text-blue-600 rounded' : 'bg-green-500 text-white rounded-full py-0.5'}`}
                                          >
                                            {tag}
                                          </span>
                                        ))}
                                      </>
                                    }
                                    fixed={
                                      <>
                                        {card.tags.map((tag, j) => (
                                          <span key={j} className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">
                                            {tag}
                                          </span>
                                        ))}
                                      </>
                                    }
                                  />
                                </Zone>
                                <div className="text-[10px] text-slate-400 space-y-0.5">
                                  <div>Progress: {card.progress}%</div>
                                  <div>Tasks: {card.tasks} • Members: {card.members}</div>
                                  <div>Due: {card.due}</div>
                                </div>
                                <div className="h-1 bg-slate-100 rounded-full mt-2">
                                  <div className="h-1 bg-blue-500 rounded-full transition-all" style={{ width: `${card.progress}%` }} />
                                </div>
                              </div>
                            }
                            fixed={
                              <div>
                                <div className="flex items-start justify-between mb-3">
                                  <h3 className={fixedZones.has("text-contrast") ? "font-semibold text-slate-800 dark:text-white" : "font-medium text-slate-400 text-sm"}>
                                    {card.title}
                                  </h3>
                                  <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </button>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                  {card.tags.map((tag, j) => (
                                    <span 
                                      key={j} 
                                      className={fixedZones.has("tag-styles")
                                        ? "text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
                                        : `text-[10px] px-1 ${j % 2 === 0 ? 'bg-blue-100 text-blue-600 rounded' : 'bg-green-500 text-white rounded-full py-0.5'}`
                                      }
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full mb-3">
                                  <div className="h-2 bg-blue-500 rounded-full transition-all" style={{ width: `${card.progress}%` }} />
                                </div>
                                <div className="flex items-center justify-between text-sm text-slate-500">
                                  <span>{card.progress}% complete</span>
                                  <span>{card.due}</span>
                                </div>
                              </div>
                            }
                          />
                        </Zone>
                      ))}
                    </>
                  }
                  fixed={
                    <>
                      {cards.map((card, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className={fixedZones.has("text-contrast") ? "font-semibold text-slate-800 dark:text-white" : "font-medium text-slate-400 text-sm"}>
                              {card.title}
                            </h3>
                            <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {card.tags.map((tag, j) => (
                              <span 
                                key={j} 
                                className={fixedZones.has("tag-styles")
                                  ? "text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
                                  : `text-[10px] px-1 ${j % 2 === 0 ? 'bg-blue-100 text-blue-600 rounded' : 'bg-green-500 text-white rounded-full py-0.5'}`
                                }
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {fixedZones.has("info-density") ? (
                            <>
                              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full mb-3">
                                <div className="h-2 bg-blue-500 rounded-full transition-all" style={{ width: `${card.progress}%` }} />
                              </div>
                              <div className="flex items-center justify-between text-sm text-slate-500">
                                <span>{card.progress}% complete</span>
                                <span>{card.due}</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="text-[10px] text-slate-400 space-y-0.5">
                                <div>Progress: {card.progress}%</div>
                                <div>Tasks: {card.tasks} • Members: {card.members}</div>
                                <div>Due: {card.due}</div>
                              </div>
                              <div className="h-1 bg-slate-100 rounded-full mt-2">
                                <div className="h-1 bg-blue-500 rounded-full transition-all" style={{ width: `${card.progress}%` }} />
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </>
                  }
                />
              </Zone>
            }
            fixed={
              <Zone id="card-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <ZoneContent
                  zoneId="card-grid"
                  broken={
                    <>
                      {cards.map((card, i) => (
                        <div key={i} className={`bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden ${
                          i % 3 === 1 ? 'p-2' : i % 3 === 2 ? 'p-5' : 'p-3'
                        }`}>
                          <div>
                            <div className="flex items-start justify-between mb-2">
                              <h3 className={fixedZones.has("text-contrast") ? "font-semibold text-slate-800 dark:text-white" : "font-medium text-slate-400 text-sm"}>
                                {card.title}
                              </h3>
                              <span className="text-[10px] text-slate-400">{card.priority}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {card.tags.map((tag, j) => (
                                <span 
                                  key={j} 
                                  className={fixedZones.has("tag-styles")
                                    ? "text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
                                    : `text-[10px] px-1 ${j % 2 === 0 ? 'bg-blue-100 text-blue-600 rounded' : 'bg-green-500 text-white rounded-full py-0.5'}`
                                  }
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            {fixedZones.has("info-density") ? (
                              <>
                                <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full mb-3">
                                  <div className="h-2 bg-blue-500 rounded-full transition-all" style={{ width: `${card.progress}%` }} />
                                </div>
                                <div className="flex items-center justify-between text-sm text-slate-500">
                                  <span>{card.progress}% complete</span>
                                  <span>{card.due}</span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-[10px] text-slate-400 space-y-0.5">
                                  <div>Progress: {card.progress}%</div>
                                  <div>Tasks: {card.tasks} • Members: {card.members}</div>
                                  <div>Due: {card.due}</div>
                                </div>
                                <div className="h-1 bg-slate-100 rounded-full mt-2">
                                  <div className="h-1 bg-blue-500 rounded-full transition-all" style={{ width: `${card.progress}%` }} />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </>
                  }
                  fixed={
                    <>
                      {cards.map((card, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-slate-800 dark:text-white">{card.title}</h3>
                            <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {card.tags.map((tag, j) => (
                              <span key={j} className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full mb-3">
                            <div className="h-2 bg-blue-500 rounded-full transition-all" style={{ width: `${card.progress}%` }} />
                          </div>
                          <div className="flex items-center justify-between text-sm text-slate-500">
                            <span>{card.progress}% complete</span>
                            <span>{card.due}</span>
                          </div>
                        </div>
                      ))}
                    </>
                  }
                />
              </Zone>
            }
          />
        </Zone>
      </main>
    </div>
  );
}
