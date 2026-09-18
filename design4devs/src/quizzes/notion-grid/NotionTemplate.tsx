/**
 * Notion Grid Dashboard Template
 * Simplified for better maintainability
 */

import {
  Search, Plus, Settings, Star, Clock, FileText, Users, Calendar, 
  MoreHorizontal, Hash, Inbox, Trash2
} from "lucide-react";
import { Zone, ZoneContent, useZoneContext } from "../../components/quiz/ZoneRenderer";

const CARDS = [
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
      <Sidebar />
      <MainContent />
    </div>
  );
}

// ============================================================================
// Sidebar Components
// ============================================================================

function Sidebar() {
  return (
    <aside className="w-12 sm:w-56 bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col">
      <WorkspaceHeader />
      <SidebarNav />
      <SidebarPages />
    </aside>
  );
}

function WorkspaceHeader() {
  return (
    <div className="p-2 sm:p-3 border-b border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold">W</div>
        <span className="hidden sm:block text-sm font-medium text-slate-700 dark:text-slate-200 truncate">Workspace</span>
      </div>
    </div>
  );
}

function SidebarNav() {
  return (
    <Zone id="sidebar-icons" className="flex-1 py-2">
      <ZoneContent
        zoneId="sidebar-icons"
        broken={<NavBroken />}
        fixed={<NavFixed />}
      />
    </Zone>
  );
}

function NavBroken() {
  const items = [
    { icon: Search, label: "Search" },
    { icon: Clock, label: "Recent" },
    { icon: Star, label: "Favorites" },
    { icon: Inbox, label: "Inbox" },
    { icon: Settings, label: "Settings" },
    { icon: Trash2, label: "Trash" },
  ];
  
  return (
    <nav className="space-y-0.5 px-1">
      {items.map(({ icon: Icon, label }) => (
        <a key={label} className="flex items-center gap-1 px-1 py-0.5 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
          <Icon className="w-3 h-3" />
          <span className="hidden sm:block text-[10px]">{label}</span>
        </a>
      ))}
    </nav>
  );
}

function NavFixed() {
  const items = [
    { icon: Search, label: "Search" },
    { icon: Clock, label: "Recent" },
    { icon: Star, label: "Favorites" },
    { icon: Inbox, label: "Inbox" },
    { icon: Settings, label: "Settings", divider: true },
  ];
  
  return (
    <nav className="space-y-1 px-2">
      {items.map(({ icon: Icon, label, divider }) => (
        <div key={label}>
          {divider && <div className="my-3 border-t border-slate-200 dark:border-slate-600" />}
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
            <Icon className="w-4 h-4" />
            <span className="hidden sm:block text-sm">{label}</span>
          </a>
        </div>
      ))}
    </nav>
  );
}

function SidebarPages() {
  const pages = [
    { icon: FileText, label: "Projects", active: true },
    { icon: Users, label: "Team" },
    { icon: Calendar, label: "Calendar" },
  ];

  return (
    <div className="hidden sm:block border-t border-slate-200 dark:border-slate-700 p-3">
      <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Pages</div>
      <div className="space-y-1">
        {pages.map(({ icon: Icon, label, active }) => (
          <a 
            key={label}
            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm ${
              active 
                ? "text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700" 
                : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <Icon className="w-4 h-4" /> {label}
          </a>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Main Content Components
// ============================================================================

function MainContent() {
  return (
    <main className="flex-1 overflow-auto">
      <Header />
      <CardGridSection />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-100 dark:border-slate-800 px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between">
        <PageTitle />
        <ActionButtons />
      </div>
    </header>
  );
}

function PageTitle() {
  return (
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
  );
}

function ActionButtons() {
  return (
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
  );
}

function CardGridSection() {
  return (
    <Zone id="card-spacing" className="p-3 sm:p-6">
      <ZoneContent
        zoneId="card-spacing"
        broken={<CardGrid spacing="cramped" />}
        fixed={<CardGrid spacing="comfortable" />}
      />
    </Zone>
  );
}

// ============================================================================
// Card Grid Components
// ============================================================================

interface CardData {
  title: string;
  tags: string[];
  progress: number;
  members: number;
  tasks: number;
  due: string;
  priority: string;
}

function CardGrid({ spacing }: { spacing: "cramped" | "comfortable" }) {
  const { fixedZones } = useZoneContext();
  const tagFixed = fixedZones.has("tag-styles");
  const contrastFixed = fixedZones.has("text-contrast");
  const densityFixed = fixedZones.has("info-density");
  const gap = spacing === "cramped" ? "gap-1 sm:gap-2" : "gap-4 sm:gap-6";

  return (
    <Zone id="card-grid" className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${gap}`}>
      <ZoneContent
        zoneId="card-grid"
        broken={<BrokenCards tagFixed={tagFixed} contrastFixed={contrastFixed} />}
        fixed={<FixedCards tagFixed={tagFixed} contrastFixed={contrastFixed} densityFixed={densityFixed} />}
      />
    </Zone>
  );
}

function BrokenCards({ tagFixed, contrastFixed }: { tagFixed: boolean; contrastFixed: boolean }) {
  return (
    <>
      {CARD_DATA.map((card, i) => (
        <BrokenCard key={i} card={card} index={i} tagFixed={tagFixed} contrastFixed={contrastFixed} />
      ))}
    </>
  );
}

function BrokenCard({ card, index, tagFixed, contrastFixed }: { 
  card: CardData; 
  index: number; 
  tagFixed: boolean; 
  contrastFixed: boolean;
}) {
  // Inconsistent padding - the "broken" behavior
  const padding = index % 3 === 1 ? 'p-2' : index % 3 === 2 ? 'p-5' : 'p-3';

  return (
    <Zone id="info-density" className={`bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden ${padding}`}>
      <ZoneContent
        zoneId="info-density"
        broken={<CardContentBroken card={card} />}
        fixed={<CardContentMixed card={card} tagFixed={tagFixed} contrastFixed={contrastFixed} />}
      />
    </Zone>
  );
}

function CardContentBroken({ card }: { card: CardData }) {
  return (
    <div>
      <div className="flex items-start justify-between mb-2">
        <Zone id="text-contrast">
          <ZoneContent
            zoneId="text-contrast"
            broken={<h3 className="font-medium text-slate-400 text-sm">{card.title}</h3>}
            fixed={<h3 className="font-semibold text-slate-800 dark:text-white">{card.title}</h3>}
          />
        </Zone>
        <span className="text-[10px] text-slate-400">{card.priority}</span>
      </div>
      <TagList tags={card.tags} />
      <CardDetails card={card} />
      <ProgressBar progress={card.progress} small />
    </div>
  );
}

function CardContentMixed({ card, tagFixed, contrastFixed }: { 
  card: CardData; 
  tagFixed: boolean; 
  contrastFixed: boolean;
}) {
  return (
    <div>
      <CardHeader card={card} contrastFixed={contrastFixed} />
      <div className="flex flex-wrap gap-1.5 mb-4">
        <Tags tags={card.tags} fixed={tagFixed} />
      </div>
      <ProgressBar progress={card.progress} />
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>{card.progress}% complete</span>
        <span>{card.due}</span>
      </div>
    </div>
  );
}

function FixedCards({ tagFixed, contrastFixed, densityFixed }: { 
  tagFixed: boolean; 
  contrastFixed: boolean;
  densityFixed: boolean;
}) {
  return (
    <>
      {CARD_DATA.map((card, i) => (
        <FixedCard key={i} card={card} tagFixed={tagFixed} contrastFixed={contrastFixed} densityFixed={densityFixed} />
      ))}
    </>
  );
}

function FixedCard({ card, tagFixed, contrastFixed, densityFixed }: { 
  card: CardData; 
  tagFixed: boolean; 
  contrastFixed: boolean;
  densityFixed: boolean;
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow">
      <CardHeader card={card} contrastFixed={contrastFixed} />
      <div className="flex flex-wrap gap-1.5 mb-4">
        <Tags tags={card.tags} fixed={tagFixed} />
      </div>
      {densityFixed ? (
        <>
          <ProgressBar progress={card.progress} />
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>{card.progress}% complete</span>
            <span>{card.due}</span>
          </div>
        </>
      ) : (
        <>
          <CardDetails card={card} />
          <ProgressBar progress={card.progress} small />
        </>
      )}
    </div>
  );
}

// ============================================================================
// Shared Card Subcomponents
// ============================================================================

function CardHeader({ card, contrastFixed }: { card: CardData; contrastFixed: boolean }) {
  return (
    <div className="flex items-start justify-between mb-3">
      <h3 className={contrastFixed ? "font-semibold text-slate-800 dark:text-white" : "font-medium text-slate-400 text-sm"}>
        {card.title}
      </h3>
      <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <Zone id="tag-styles" className="flex flex-wrap gap-1 mb-2">
      <ZoneContent
        zoneId="tag-styles"
        broken={<Tags tags={tags} fixed={false} />}
        fixed={<Tags tags={tags} fixed={true} />}
      />
    </Zone>
  );
}

function Tags({ tags, fixed }: { tags: string[]; fixed: boolean }) {
  return (
    <>
      {tags.map((tag, j) => (
        <span 
          key={j} 
          className={fixed 
            ? "text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
            : `text-[10px] px-1 ${j % 2 === 0 ? 'bg-blue-100 text-blue-600 rounded' : 'bg-green-500 text-white rounded-full py-0.5'}`
          }
        >
          {tag}
        </span>
      ))}
    </>
  );
}

function CardDetails({ card }: { card: CardData }) {
  return (
    <div className="text-[10px] text-slate-400 space-y-0.5">
      <div>Progress: {card.progress}%</div>
      <div>Tasks: {card.tasks} • Members: {card.members}</div>
      <div>Due: {card.due}</div>
    </div>
  );
}

function ProgressBar({ progress, small = false }: { progress: number; small?: boolean }) {
  const height = small ? "h-1" : "h-2";
  const margin = small ? "mt-2" : "mb-3";
  const bg = small ? "bg-slate-100" : "bg-slate-100 dark:bg-slate-700";

  return (
    <div className={`${height} ${bg} rounded-full ${margin}`}>
      <div 
        className={`${height} bg-blue-500 rounded-full transition-all`} 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}
