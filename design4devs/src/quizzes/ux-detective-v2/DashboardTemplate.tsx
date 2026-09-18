/**
 * UX Detective Quiz - Config-Driven Version
 * 
 * This is a simplified dashboard UI where zones are marked with data-zone attributes
 * and transforms are applied via the config system.
 */

import {
  Bell,
  ChevronRight,
  Download,
  FileText,
  HelpCircle,
  Home,
  Inbox,
  Mail,
  PieChart,
  RefreshCw,
  Settings,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Upload,
  Users,
  Clock
} from "lucide-react";

import { Zone, ZoneContent, useZoneContext } from "../../components/quiz/ZoneRenderer";

/**
 * Dashboard UI with Zone-marked elements
 * No hardcoded states - all transforms come from config
 */
export function DashboardTemplate() {
  const { fixedZones } = useZoneContext();
  const totalZones = 16; // 4 original + 4 stat color zones + 3 status color zones + 5 other zones

  return (
    <div
      className={`min-h-[400px] sm:min-h-[600px] rounded-2xl overflow-hidden shadow-xl border transition-all duration-500 bg-bg-secondary ${
        fixedZones.size === totalZones ? "border-ocean-400 shadow-ocean-500/20" : "border-border"
      }`}
    >
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 px-3 sm:px-4 py-2 sm:py-3">
        <Zone id="header-layout" className="flex items-center gap-2 sm:gap-4">
          <ZoneContent
            zoneId="header-layout"
            broken={
              <>
                <div className="flex-1" />
                <HeaderButtons />
                <Logo />
              </>
            }
            fixed={
              <>
                <Logo />
                <div className="flex-1" />
                <HeaderButtons />
              </>
            }
          />
        </Zone>
      </header>

      <div className="flex flex-col sm:flex-row">
        {/* Sidebar */}
        <aside className="hidden sm:block bg-bg-tertiary border-r border-border w-44 lg:w-52 p-3 lg:p-4">
          <Zone id="nav-order">
            <ZoneContent
              zoneId="nav-order"
              broken={<ScatteredNav />}
              fixed={<OrganizedNav />}
            />
          </Zone>
        </aside>

        {/* Main Content */}
        <Zone id="cramped-spacing" as="main" className="flex-1 bg-bg-tertiary overflow-x-auto transition-all duration-500">
          <ZoneContent
            zoneId="cramped-spacing"
            broken={<MainContent spacing="cramped" />}
            fixed={<MainContent spacing="comfortable" />}
          />
        </Zone>
      </div>

      {/* Mobile Nav */}
      <MobileNav />
    </div>
  );
}

// ============================================================================
// Sub-components (these react to zone state via ZoneContent)
// ============================================================================

function Logo() {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-md sm:rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-[10px] sm:text-sm">A</span>
      </div>
      <span className="text-white font-semibold text-xs sm:text-base">Acme</span>
    </div>
  );
}

function HeaderButtons() {
  return (
    <Zone id="header-buttons" className="flex items-center">
      <ZoneContent
        zoneId="header-buttons"
        broken={
          <div className="flex items-center gap-0.5 sm:gap-1 flex-wrap justify-end">
            <span className="p-1 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></span>
            <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><Inbox className="w-4 h-4" /></span>
            <span className="p-1 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></span>
            <span className="p-1 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></span>
            <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><Download className="w-4 h-4" /></span>
            <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><Upload className="w-4 h-4" /></span>
            <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><RefreshCw className="w-4 h-4" /></span>
            <span className="p-1 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></span>
            <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><HelpCircle className="w-4 h-4" /></span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[10px] sm:text-sm text-white font-bold ml-1">JD</div>
          </div>
        }
        fixed={
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="p-1.5 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><Bell className="w-4 h-4 sm:w-5 sm:h-5" /></span>
            <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"><Settings className="w-5 h-5" /></span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs sm:text-sm text-white font-bold ml-1">JD</div>
          </div>
        }
      />
    </Zone>
  );
}

function ScatteredNav() {
  return (
    <div className="space-y-1">
      <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><Settings className="w-4 h-4" /> Settings</span>
      <span className="flex items-center gap-3 px-3 py-2 rounded-lg bg-violet-50 text-violet-700 text-sm font-medium cursor-pointer"><Home className="w-4 h-4" /> Dashboard</span>
      <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><Bell className="w-4 h-4" /> Notifications</span>
      <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><Users className="w-4 h-4" /> Team</span>
      <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><HelpCircle className="w-4 h-4" /> Help</span>
      <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><FileText className="w-4 h-4" /> Reports</span>
      <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><PieChart className="w-4 h-4" /> Analytics</span>
      <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><Clock className="w-4 h-4" /> History</span>
    </div>
  );
}

function OrganizedNav() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2 px-3">Overview</div>
        <div className="space-y-1">
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg bg-violet-50 text-violet-700 text-sm font-medium cursor-pointer"><Home className="w-4 h-4" /> Dashboard</span>
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><PieChart className="w-4 h-4" /> Analytics</span>
        </div>
      </div>
      <div>
        <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2 px-3">Management</div>
        <div className="space-y-1">
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><Users className="w-4 h-4" /> Team</span>
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><FileText className="w-4 h-4" /> Reports</span>
        </div>
      </div>
      <div>
        <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2 px-3">Settings</div>
        <div className="space-y-1">
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer"><Settings className="w-4 h-4" /> Preferences</span>
        </div>
      </div>
    </div>
  );
}

function MainContent({ spacing }: { spacing: "cramped" | "comfortable" }) {
  const isCramped = spacing === "cramped";
  const padding = isCramped ? "p-2 sm:p-3" : "p-3 sm:p-4 lg:p-6";
  const gap = isCramped ? "gap-2 mb-3" : "gap-3 sm:gap-4 mb-4 sm:mb-6";

  return (
    <div className={padding}>
      {/* Stats Row */}
      <StatCards />

      {/* Action Cards */}
      <div className={`grid grid-cols-1 sm:grid-cols-3 ${gap}`}>
        <QuickActionsCard />
        <AnalyticsCard />
        <BalanceCard />
      </div>

      {/* Table */}
      <TransactionsTable />

      {/* Weekly Cards */}
      <WeeklyCards />
    </div>
  );
}

function StatCards() {
  const { fixedZones } = useZoneContext();
  const styleFixed = fixedZones.has("stat-cards");

  const fixedCardClass = "bg-bg-secondary rounded-xl p-3 sm:p-4 border border-border";

  return (
    <Zone id="stat-cards" className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      {/* Card 1 - Revenue */}
      <div className={fixedCardClass}>
        <div className="text-xs sm:text-sm text-text-secondary mb-1">Total Revenue</div>
        <div className="text-lg sm:text-2xl font-bold text-text-primary">$1,234,567</div>
        <Zone id="color-revenue" className="flex items-center gap-1 text-sm mt-1 font-semibold">
          <TrendingUp className="w-4 h-4" /> +12.5%
        </Zone>
      </div>

      {/* Card 2 - Users (inconsistent style when not fixed) */}
      <div className={styleFixed ? fixedCardClass : "bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl p-3 sm:p-4 text-white"}>
        <div className={`text-xs sm:text-sm ${styleFixed ? "text-text-secondary" : "text-white/70"} mb-1`}>Active Users</div>
        <div className="text-lg sm:text-2xl font-bold">8,432</div>
        <Zone id="color-users" className="flex items-center gap-1 text-sm mt-1 font-semibold">
          +5.2% this week
        </Zone>
      </div>

      {/* Card 3 - Conversion */}
      <div className={styleFixed ? fixedCardClass : "rounded-xl p-3 sm:p-4 border-l border-orange-500 bg-bg-secondary"}>
        <div className="text-xs sm:text-sm text-text-secondary mb-1">Conversion</div>
        <div className={`font-bold text-text-primary ${styleFixed ? "text-lg sm:text-2xl" : "text-base sm:text-lg"}`}>3.24%</div>
        <Zone id="color-conversion" className="flex items-center gap-1 text-sm mt-1 font-semibold">
          <TrendingDown className="w-3.5 h-3.5" /> -0.4% today
        </Zone>
      </div>

      {/* Card 4 - Orders */}
      <div className={styleFixed ? fixedCardClass : "bg-green-50 rounded-xl p-3 sm:p-4 border border-green-200"}>
        <div className={`flex items-center gap-1 sm:gap-2 mb-1 ${styleFixed ? "text-text-secondary" : "text-green-700"}`}>
          {!styleFixed && <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />}
          <span className="text-xs sm:text-sm font-medium">Orders</span>
        </div>
        <div className={`text-lg sm:text-2xl font-bold ${styleFixed ? "text-text-primary" : "text-green-900"}`}>156</div>
        <Zone id="color-orders" className="flex items-center gap-1 text-sm mt-1 font-semibold">
          +23 new
        </Zone>
      </div>
    </Zone>
  );
}

function QuickActionsCard() {
  return (
    <Zone id="tiny-buttons" className="bg-bg-secondary rounded-xl border border-border text-left">
      <ZoneContent
        zoneId="tiny-buttons"
        broken={
          <div className="p-2 sm:p-3">
            <h3 className="font-semibold text-sm sm:text-base text-text-primary mb-1">Quick Actions</h3>
            <p className="text-xs sm:text-sm text-text-secondary mb-2 sm:mb-3">Manage orders</p>
            <div className="flex flex-wrap gap-1 mb-2">
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-violet-100 text-violet-700 rounded text-[10px] sm:text-xs">New</span>
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-100 text-green-700 rounded text-[10px] sm:text-xs">Edit</span>
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-700 rounded text-[10px] sm:text-xs">View</span>
            </div>
            <span className="px-2 py-0.5 bg-bg-tertiary text-text-secondary rounded text-[9px] sm:text-[10px]">Submit →</span>
          </div>
        }
        fixed={
          <div className="p-3 sm:p-5">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-text-primary">Quick Actions</h3>
                <p className="text-xs sm:text-sm text-text-secondary">Manage orders</p>
              </div>
              <span className="text-xs sm:text-sm text-violet-600 hover:text-violet-700 font-medium">View All</span>
            </div>
            <div className="text-xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">12</div>
            <span className="block w-full py-2 sm:py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium text-center">New Order</span>
          </div>
        }
      />
    </Zone>
  );
}

function AnalyticsCard() {
  return (
    <Zone id="button-styles" className="bg-bg-secondary rounded-xl border border-border text-left">
      <ZoneContent
        zoneId="button-styles"
        broken={
          <div className="p-2 sm:p-3">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-text-primary">Analytics</h3>
                <p className="text-xs sm:text-sm text-text-secondary">Total Revenue</p>
              </div>
            </div>
            <div className="text-xl sm:text-3xl font-bold text-text-primary mb-2 sm:mb-3">$24,530</div>
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-border accent-violet-600" readOnly />
                <span className="text-xs sm:text-sm text-text-secondary">Show Daily</span>
              </label>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-violet-600 bg-bg-secondary text-violet-600 text-xs sm:text-sm font-medium">Show Monthly</button>
            </div>
          </div>
        }
        fixed={
          <div className="p-3 sm:p-5">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-text-primary">Analytics</h3>
                <p className="text-xs sm:text-sm text-text-secondary">Total Revenue</p>
              </div>
            </div>
            <div className="text-xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">$24,530</div>
            <div className="inline-flex rounded-lg border border-border overflow-hidden">
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-600 text-white text-xs sm:text-sm font-medium">Daily</button>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-bg-secondary text-text-secondary text-xs sm:text-sm font-medium">Monthly</button>
            </div>
          </div>
        }
      />
    </Zone>
  );
}

function BalanceCard() {
  return (
    <Zone id="typography-mess" className="bg-bg-secondary rounded-xl border border-border text-left">
      <ZoneContent
        zoneId="typography-mess"
        broken={
          <div className="p-2 sm:p-3">
            <div className="text-[10px] sm:text-xs text-text-tertiary uppercase tracking-wider font-bold mb-1 sm:mb-2">ACCOUNT BALANCE</div>
            <div className="text-base sm:text-lg font-black text-text-primary mb-1">$45,230</div>
            <div className="text-xs sm:text-sm text-text-secondary mb-2">Total available funds</div>
            <div className="text-[9px] sm:text-[10px] text-text-tertiary">Last updated: 2 minutes ago</div>
          </div>
        }
        fixed={
          <div className="p-3 sm:p-5">
            <div className="mb-2 sm:mb-3">
              <h3 className="font-semibold text-sm sm:text-base text-text-primary">Account Balance</h3>
              <p className="text-xs sm:text-sm text-text-secondary">Total available funds</p>
            </div>
            <div className="text-xl sm:text-3xl font-bold text-text-primary mb-2">$45,230</div>
            <div className="text-xs sm:text-sm text-text-secondary">Last updated: 2 minutes ago</div>
          </div>
        }
      />
    </Zone>
  );
}

function TransactionsTable() {
  const { fixedZones } = useZoneContext();
  const typographyFixed = fixedZones.has("typography-mess");
  const spacingFixed = fixedZones.has("cramped-spacing");

  // Each transaction status has its own zone ID for separate fixing
  const transactions = [
    { id: "#TXN-1234", name: "Alice Johnson", amount: "$299.00", status: "Pending", zoneId: "color-status-pending" },
    { id: "#TXN-1235", name: "Bob Smith", amount: "$1,450.00", status: "Complete", zoneId: "color-status-complete" },
    { id: "#TXN-1236", name: "Carol White", amount: "$89.99", status: "Failed", zoneId: "color-status-failed" }
  ];

  return (
    <div className={`bg-bg-secondary rounded-xl border border-border overflow-x-auto w-full text-left ${spacingFixed ? "p-3 sm:p-5 mb-4 sm:mb-6" : "p-2 sm:p-3 mb-3"}`}>
      <div className="min-w-[400px]">
        <div className="flex justify-between items-center mb-4">
          {typographyFixed ? (
            <>
              <h3 className="font-semibold text-text-primary">Recent Transactions</h3>
              <span className="text-sm text-violet-600 font-medium flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></span>
            </>
          ) : (
            <>
              <span className="text-xs text-text-tertiary">Recent Transactions</span>
              <span className="text-base font-black text-text-primary">VIEW ALL →</span>
            </>
          )}
        </div>
        <table className={`w-full ${spacingFixed ? "text-sm" : "text-xs"}`}>
          <thead>
            <tr className="text-left text-text-secondary border-b border-border">
              <th className={spacingFixed ? "pb-3" : "pb-1"}>Transaction</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            {transactions.map((row, i) => (
              <tr key={i} className="border-b border-border-muted">
                <td className={`font-medium ${spacingFixed ? "py-3" : "py-1"}`}>{row.id}</td>
                <td>{row.name}</td>
                <td className="font-medium">{row.amount}</td>
                <td>
                  <Zone 
                    id={row.zoneId} 
                    as="span" 
                    className="px-2 py-1 rounded-full text-xs font-medium inline-block"
                  >
                    {row.status}
                  </Zone>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WeeklyCards() {
  return (
    <Zone id="misaligned-cards" className="w-full">
      <ZoneContent
        zoneId="misaligned-cards"
        broken={
          <div className="flex gap-1.5 sm:gap-2 items-end">
            <div className="bg-bg-secondary rounded-lg p-1.5 sm:p-2 border border-border w-16 sm:w-20">
              <div className="text-[9px] sm:text-[10px] text-text-secondary">Week 1</div>
              <div className="text-xs sm:text-sm font-bold text-text-primary">$8.2K</div>
            </div>
            <div className="bg-bg-secondary rounded-xl p-2 sm:p-3 border border-border w-20 sm:w-24">
              <div className="text-[10px] sm:text-xs text-text-secondary mb-1">Week 2</div>
              <div className="text-sm sm:text-base font-bold text-text-primary">$9.1K</div>
            </div>
            <div className="bg-bg-secondary rounded p-1.5 border border-border w-14 sm:w-16 mt-1">
              <div className="text-[8px] sm:text-[9px] text-text-secondary">W3</div>
              <div className="text-[11px] sm:text-xs font-bold text-text-primary">$7.8K</div>
            </div>
            <div className="bg-bg-secondary rounded-lg p-2 sm:p-2.5 border border-border w-18 sm:w-22">
              <div className="text-[10px] sm:text-xs text-text-secondary">Week 4</div>
              <div className="text-base sm:text-lg font-bold text-text-primary">$12.3K</div>
            </div>
          </div>
        }
        fixed={
          <div className="flex gap-2 sm:gap-3">
            <div className="flex-1 bg-bg-secondary rounded-lg p-2 sm:p-3 border border-border">
              <div className="text-[10px] sm:text-xs text-text-secondary mb-0.5 sm:mb-1">Week 1</div>
              <div className="text-sm sm:text-base font-bold text-text-primary">$8.2K</div>
            </div>
            <div className="flex-1 bg-bg-secondary rounded-lg p-2 sm:p-3 border border-border">
              <div className="text-[10px] sm:text-xs text-text-secondary mb-0.5 sm:mb-1">Week 2</div>
              <div className="text-sm sm:text-base font-bold text-text-primary">$9.1K</div>
            </div>
            <div className="flex-1 bg-bg-secondary rounded-lg p-2 sm:p-3 border border-border">
              <div className="text-[10px] sm:text-xs text-text-secondary mb-0.5 sm:mb-1">Week 3</div>
              <div className="text-sm sm:text-base font-bold text-text-primary">$7.8K</div>
            </div>
            <div className="flex-1 bg-bg-secondary rounded-lg p-2 sm:p-3 border border-border">
              <div className="text-[10px] sm:text-xs text-text-secondary mb-0.5 sm:mb-1">Week 4</div>
              <div className="text-sm sm:text-base font-bold text-text-primary">$12.3K</div>
            </div>
          </div>
        }
      />
    </Zone>
  );
}

function MobileNav() {
  return (
    <Zone id="mobile-nav" className="sm:hidden bg-bg-tertiary border-t border-border w-full p-2">
      <ZoneContent
        zoneId="nav-order"
        broken={
          <div className="flex items-center justify-around gap-1">
            <span className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg bg-violet-50 text-violet-700">
              <Home className="w-4 h-4" /><span className="text-[10px] font-medium">Home</span>
            </span>
            <span className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-text-secondary">
              <Users className="w-4 h-4" /><span className="text-[10px]">Team</span>
            </span>
            <span className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-text-secondary">
              <Settings className="w-4 h-4" /><span className="text-[10px]">Settings</span>
            </span>
            <span className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-text-secondary">
              <FileText className="w-4 h-4" /><span className="text-[10px]">Reports</span>
            </span>
          </div>
        }
        fixed={
          <div className="flex items-center justify-around gap-1">
            <span className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg bg-violet-50 text-violet-700">
              <Home className="w-4 h-4" /><span className="text-[10px] font-medium">Home</span>
            </span>
            <span className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-text-secondary">
              <PieChart className="w-4 h-4" /><span className="text-[10px]">Analytics</span>
            </span>
            <span className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-text-secondary">
              <Users className="w-4 h-4" /><span className="text-[10px]">Team</span>
            </span>
            <span className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-text-secondary">
              <Settings className="w-4 h-4" /><span className="text-[10px]">Settings</span>
            </span>
          </div>
        }
      />
    </Zone>
  );
}
