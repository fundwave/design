/**
 * Kanban Board Template
 */

import {
  Plus, MoreHorizontal, Calendar, MessageSquare, Paperclip,
  Clock, Tag, User, CheckCircle2, AlertCircle
} from "lucide-react";
import { Zone, ZoneContent, useZoneContext } from "../../components/quiz/ZoneRenderer";

export function KanbanTemplate() {
  const { fixedZones } = useZoneContext();
  const totalZones = 8;

  const columns = [
    { id: "backlog", name: "Backlog", brokenName: "Items", cards: backlogCards },
    { id: "todo", name: "To Do", brokenName: "Next", cards: todoCards },
    { id: "progress", name: "In Progress", brokenName: "Doing", cards: progressCards },
    { id: "done", name: "Done", brokenName: "Finished", cards: doneCards },
  ];

  return (
    <div className={`min-h-[500px] sm:min-h-[600px] rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 ${
      fixedZones.size === totalZones ? "border-amethyst-400 shadow-amethyst-500/20" : "border-slate-200 dark:border-slate-700"
    }`}>
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amethyst-500 to-fuchsia-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-800 dark:text-white">Sprint Board</h1>
              <p className="text-xs text-slate-500">Sprint 24 • Feb 1-14</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-lg">Filter</button>
            <button className="px-3 py-1.5 text-sm bg-amethyst-500 text-white rounded-lg hover:bg-amethyst-600">+ Add Task</button>
          </div>
        </div>
      </header>

      {/* Board */}
      <div className="p-3 sm:p-4 overflow-x-auto">
        <div className="flex gap-3 sm:gap-4 min-w-max">
          {columns.map((column) => (
            <div key={column.id} className="w-64 sm:w-72 flex-shrink-0">
              {/* Column Header */}
              <Zone id="column-headers" className="mb-3">
                <ZoneContent
                  zoneId="column-headers"
                  broken={
                    <div className="flex items-center justify-between px-2">
                      <span className="text-sm text-slate-400">{column.brokenName}</span>
                      <MoreHorizontal className="w-4 h-4 text-slate-300" />
                    </div>
                  }
                  fixed={
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{column.name}</span>
                        <Zone id="column-count" as="span">
                          <ZoneContent
                            zoneId="column-count"
                            broken={<></>}
                            fixed={
                              <span className="text-xs px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                                {column.cards.length}
                              </span>
                            }
                          />
                        </Zone>
                      </div>
                      <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded">
                        <MoreHorizontal className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>
                  }
                />
              </Zone>

              {/* Cards */}
              <div className="space-y-2 sm:space-y-3 mb-3">
                {column.cards.map((card, i) => (
                  <TaskCard key={i} card={card} />
                ))}
              </div>

              {/* Add Button */}
              <Zone id="add-buttons">
                <ZoneContent
                  zoneId="add-buttons"
                  broken={
                    <div className="text-xs text-slate-400 px-2 py-1">+ add</div>
                  }
                  fixed={
                    <button className="w-full flex items-center justify-center gap-2 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-white dark:hover:bg-slate-800 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-700 transition-colors">
                      <Plus className="w-4 h-4" />
                      Add Task
                    </button>
                  }
                />
              </Zone>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CardData {
  title: string;
  priority: "high" | "medium" | "low";
  tags: string[];
  assignee: string;
  dueDate?: string;
  comments?: number;
  attachments?: number;
}

function TaskCard({ card }: { card: CardData }) {
  const { fixedZones } = useZoneContext();
  const priorityFixed = fixedZones.has("card-priority");
  const actionsFixed = fixedZones.has("card-actions");
  const metadataFixed = fixedZones.has("card-metadata");
  const avatarFixed = fixedZones.has("avatar-styles");
  const titleFixed = fixedZones.has("card-titles");

  const priorityColors = {
    high: priorityFixed ? "bg-red-100 text-red-600 border-red-200" : "bg-blue-100 text-blue-600",
    medium: priorityFixed ? "bg-yellow-100 text-yellow-600 border-yellow-200" : "bg-green-100 text-green-600",
    low: priorityFixed ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-red-100 text-red-600",
  };

  const priorityLabels = {
    high: priorityFixed ? "🔴 High" : "P1",
    medium: priorityFixed ? "🟡 Medium" : "Med",
    low: priorityFixed ? "⚪ Low" : "!!",
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 hover:shadow-md transition-all group">
      {/* Priority & Actions Row */}
      <div className="flex items-start justify-between mb-2">
        <Zone id="card-priority" as="span" className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[card.priority]}`}>
          {priorityLabels[card.priority]}
        </Zone>
        <Zone id="card-actions" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoneContent
            zoneId="card-actions"
            broken={
              <div className="flex gap-0">
                <button className="p-0.5 text-slate-300"><MoreHorizontal className="w-3 h-3" /></button>
              </div>
            }
            fixed={
              <div className="flex gap-1">
                <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded"><Tag className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded"><User className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded"><MoreHorizontal className="w-3.5 h-3.5" /></button>
              </div>
            }
          />
        </Zone>
      </div>

      {/* Title */}
      <Zone id="card-titles" className="mb-3">
        <ZoneContent
          zoneId="card-titles"
          broken={<p className="text-sm text-slate-500">{card.title}</p>}
          fixed={<h3 className="font-medium text-slate-800 dark:text-white">{card.title}</h3>}
        />
      </Zone>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {card.tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Metadata Row */}
      <Zone id="card-metadata">
        <ZoneContent
          zoneId="card-metadata"
          broken={
            <div className="text-xs text-slate-400">
              <span className="mr-3">{card.dueDate}</span>
              <span className="mr-3">{card.assignee}</span>
              {card.comments && <span className="mr-3">💬{card.comments}</span>}
              {card.attachments && <span>📎{card.attachments}</span>}
            </div>
          }
          fixed={
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                {card.dueDate && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {card.dueDate}
                  </span>
                )}
                {card.comments && (
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {card.comments}
                  </span>
                )}
                {card.attachments && (
                  <span className="flex items-center gap-1">
                    <Paperclip className="w-3.5 h-3.5" />
                    {card.attachments}
                  </span>
                )}
              </div>
              <Zone id="avatar-styles">
                <ZoneContent
                  zoneId="avatar-styles"
                  broken={
                    <span className="text-[10px] text-slate-400">{card.assignee.slice(0, 2)}</span>
                  }
                  fixed={
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amethyst-400 to-fuchsia-500 flex items-center justify-center text-white text-xs font-medium" title={card.assignee}>
                      {card.assignee.split(" ").map(n => n[0]).join("")}
                    </div>
                  }
                />
              </Zone>
            </div>
          }
        />
      </Zone>
    </div>
  );
}

const backlogCards: CardData[] = [
  { title: "Research competitor pricing", priority: "low", tags: ["Research"], assignee: "Alex Kim", dueDate: "Feb 20", comments: 3 },
  { title: "Design system audit", priority: "medium", tags: ["Design"], assignee: "Sam Lee", attachments: 2 },
];

const todoCards: CardData[] = [
  { title: "Implement user authentication", priority: "high", tags: ["Backend", "Security"], assignee: "Jordan Chen", dueDate: "Feb 8", comments: 5 },
  { title: "Create onboarding flow", priority: "medium", tags: ["UX", "Frontend"], assignee: "Riley Park", dueDate: "Feb 12" },
];

const progressCards: CardData[] = [
  { title: "Build dashboard components", priority: "high", tags: ["Frontend"], assignee: "Casey Liu", dueDate: "Feb 6", comments: 8, attachments: 3 },
  { title: "API documentation", priority: "low", tags: ["Docs"], assignee: "Morgan Wu", comments: 2 },
];

const doneCards: CardData[] = [
  { title: "Setup CI/CD pipeline", priority: "high", tags: ["DevOps"], assignee: "Taylor Kim", comments: 4 },
  { title: "Design landing page", priority: "medium", tags: ["Design"], assignee: "Quinn Park", attachments: 5 },
];
