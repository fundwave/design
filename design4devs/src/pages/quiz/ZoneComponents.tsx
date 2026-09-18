import {
  Bell,
  ChevronRight,
  Clock,
  Download,
  Eye,
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
  Users
} from "lucide-react";

import { twMerge } from "tailwind-merge";

// Shared prop type for all zone components
interface ZoneComponentProps {
  isFixed: boolean;
  onClick?: () => void;
  className?: string;
}

// Header Buttons Zone
export function HeaderButtonsZone({ isFixed, onClick, className = "" }: ZoneComponentProps) {
  return (
    <div onClick={onClick} className={twMerge("flex items-center", className)}>
      {isFixed ? (
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="p-1.5 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs sm:text-sm text-white font-bold ml-1">
            JD
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-0.5 sm:gap-1 flex-wrap justify-end">
          <span className="p-1 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
          <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Inbox className="w-4 h-4" />
          </span>
          <span className="p-1 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
          <span className="p-1 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
          <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
          </span>
          <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Upload className="w-4 h-4" />
          </span>
          <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <RefreshCw className="w-4 h-4" />
          </span>
          <span className="p-1 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
          <span className="hidden sm:block p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <HelpCircle className="w-4 h-4" />
          </span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[10px] sm:text-sm text-white font-bold ml-1">
            JD
          </div>
        </div>
      )}
    </div>
  );
}

// Logo Position Zone
export function LogoPositionZone({ isFixed, onClick, className = "" }: ZoneComponentProps) {
  return (
    <div onClick={onClick} className={twMerge("flex items-center gap-1.5 sm:gap-2 flex-shrink-0", className)}>
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-md sm:rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-[10px] sm:text-sm">A</span>
      </div>
      <span className="text-white font-semibold text-xs sm:text-base">Acme</span>
    </div>
  );
}

// Navigation Order Zone
export function NavOrderZone({ isFixed, onClick, className = "" }: ZoneComponentProps) {
  // Accept className for highlighting the affected area (e.g., the highlighted nav item)
  return (
    <nav onClick={onClick} className={className}>
      {isFixed ? (
        <div className="space-y-6">
          <div>
            <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2 px-3">Overview</div>
            <div className="space-y-1">
              {/* Only highlight the Dashboard item if className is provided */}
              <span className={twMerge("flex items-center gap-3 px-3 py-2 rounded-lg bg-violet-50 text-violet-700 text-sm font-medium cursor-pointer", className)}>
                <Home className="w-4 h-4" /> Dashboard
              </span>
              <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
                <PieChart className="w-4 h-4" /> Analytics
              </span>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2 px-3">Management</div>
            <div className="space-y-1">
              <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
                <Users className="w-4 h-4" /> Team
              </span>
              <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
                <FileText className="w-4 h-4" /> Reports
              </span>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2 px-3">Settings</div>
            <div className="space-y-1">
              <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
                <Settings className="w-4 h-4" /> Preferences
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-1">
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
            <Settings className="w-4 h-4" /> Settings
          </span>
          {/* Only highlight the Dashboard item if className is provided */}
          <span className={twMerge("flex items-center gap-3 px-3 py-2 rounded-lg bg-violet-50 text-violet-700 text-sm font-medium cursor-pointer", className)}>
            <Home className="w-4 h-4" /> Dashboard
          </span>
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
            <Bell className="w-4 h-4" /> Notifications
          </span>
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
            <Users className="w-4 h-4" /> Team
          </span>
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
            <HelpCircle className="w-4 h-4" /> Help
          </span>
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
            <FileText className="w-4 h-4" /> Reports
          </span>
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
            <PieChart className="w-4 h-4" /> Analytics
          </span>
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-tertiary text-sm cursor-pointer">
            <Clock className="w-4 h-4" /> History
          </span>
        </div>
      )}
    </nav>
  );
}

// Stat Cards Zone
interface StatCardsZoneProps extends ZoneComponentProps {
  onColorClick?: () => void;
  colorFixed?: boolean;
  colorClassName?: string;
  hideContent?: boolean;
}

export function StatCardsZone({ isFixed, onClick, className = "", onColorClick, colorFixed = false, colorClassName = "", hideContent = false}: StatCardsZoneProps) {
  const fixedCardClass = "bg-bg-secondary rounded-xl p-3 sm:p-4 border border-border";
  const captionClass = "flex items-center gap-1 text-sm mt-1 font-semibold cursor-pointer";
  return (
    <div onClick={onClick} className={twMerge("grid grid-cols-2 sm:grid-cols-4 gap-2", className)}>
      <div className={fixedCardClass}>
        <div className="text-xs sm:text-sm text-text-secondary mb-1">{hideContent ? "-" : "Total Revenue"}</div>
        <div className="text-lg sm:text-2xl font-bold text-text-primary">{hideContent ? "-" : "$1,234,567"}</div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onColorClick?.();
          }}
          className={twMerge(captionClass, colorFixed ? "text-green-600" : "text-blue-600", colorClassName)}
        >
          <TrendingUp className="w-4 h-4" /> +12.5%
        </div>
      </div>
      {/* Card 2: Active Users (pink) */}
      <div className={isFixed ? fixedCardClass : "bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl p-3 sm:p-4 text-white"}>
        <div className={`text-xs sm:text-sm ${isFixed ? "text-text-secondary" : "text-white/70"} mb-1`}>{hideContent ? "-" : "Active Users"}</div>
        <div className="text-lg sm:text-2xl font-bold">{hideContent ? "-" : "8,432"}</div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onColorClick?.();
          }}
          className={twMerge(captionClass, colorFixed ? "text-green-600" : isFixed ? "text-pink-600" : "text-white", colorClassName)}
        >
          +5.2% this week
        </div>
      </div>
      <div className={isFixed ? fixedCardClass : "rounded-xl p-3 sm:p-4 border-l border-orange-500 bg-bg-secondary text-left"}>
        <div className="text-xs sm:text-sm text-text-secondary mb-1">{hideContent ? "-" : "Conversion"}</div>
        <div className={`font-bold text-text-primary ${isFixed ? "text-lg sm:text-2xl" : "text-base sm:text-lg"}`}>{hideContent ? "-" : "3.24%"}</div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onColorClick?.();
          }}
          className={twMerge(captionClass, colorFixed ? "text-red-600" : "text-orange-600", colorClassName)}
        >
          <TrendingDown className="w-3.5 h-3.5" /> 0.4% today
        </div>
      </div>
      <div className={isFixed ? fixedCardClass : "bg-green-50 rounded-xl p-3 sm:p-4 border border-green-200"}>
        <div className={`flex items-center gap-1 sm:gap-2 mb-1 ${isFixed ? "text-text-secondary" : "text-green-700"}`}>
          {!isFixed && <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />}
          <span className="text-xs sm:text-sm font-medium">{hideContent ? "-" : "Orders"}</span>
        </div>
        <div className={`text-lg sm:text-2xl font-bold ${isFixed ? "text-text-primary" : "text-green-900"}`}>{hideContent ? "-" : "156"}</div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onColorClick?.();
          }}
          className={twMerge(captionClass, colorFixed ? "text-green-600" : "text-red-600", colorClassName)}
        >
          +23 new
        </div>
      </div>
    </div>
  );
}

// Color Meanings Zone (standalone for popup)
export function ColorMeaningsZone({ isFixed, onClick, className = "" }: ZoneComponentProps) {
  return <StatCardsZone isFixed={true} onClick={onClick} className={className} colorFixed={isFixed} hideContent={true} />;
}

// Tiny Buttons Zone
interface TinyButtonsZoneProps extends ZoneComponentProps {
  onCrampedClick?: () => void;
}

export function TinyButtonsZone({ isFixed, onClick, className = "", onCrampedClick }: TinyButtonsZoneProps) {
  return (
    <div onClick={onClick} className={twMerge("bg-bg-secondary rounded-xl border border-border text-left", isFixed ? "p-3 sm:p-5" : "p-2 sm:p-3", className)}>
      {isFixed ? (
        <>
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-text-primary">Quick Actions</h3>
              <p className="text-xs sm:text-sm text-text-secondary">Manage orders</p>
            </div>
            <span className="text-xs sm:text-sm text-violet-600 hover:text-violet-700 font-medium">View All</span>
          </div>
          <div className="text-xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">12</div>
          <span className="block w-full py-2 sm:py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium transition-colors text-center">New Order</span>
        </>
      ) : (
        <>
          <h3 className="font-semibold text-sm sm:text-base text-text-primary mb-1">Quick Actions</h3>
          <p className="text-xs sm:text-sm text-text-secondary mb-2 sm:mb-3">Manage orders</p>
          <div
            onClick={(e) => {
              e.stopPropagation();
              onCrampedClick?.();
            }}
            className="flex flex-wrap gap-1 mb-2 cursor-pointer"
          >
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-violet-100 text-violet-700 rounded text-[10px] sm:text-xs">New</span>
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-100 text-green-700 rounded text-[10px] sm:text-xs">Edit</span>
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-700 rounded text-[10px] sm:text-xs">View</span>
          </div>
          <span className="px-2 py-0.5 bg-bg-tertiary text-text-secondary rounded text-[9px] sm:text-[10px]">Submit →</span>
        </>
      )}
    </div>
  );
}

// Cramped Spacing Zone
interface CrampedSpacingZoneProps extends ZoneComponentProps {
  colorFixed?: boolean;
  typographyFixed?: boolean;
}

export function CrampedSpacingZone({ isFixed, onClick, className = "", colorFixed = false, typographyFixed = false }: CrampedSpacingZoneProps) {
  const transactions = [
    { id: "#TXN-1234", name: "Alice Johnson", amount: "$299.00", status: "pending" },
    { id: "#TXN-1235", name: "Bob Smith", amount: "$1,450.00", status: "complete" },
    { id: "#TXN-1236", name: "Carol White", amount: "$89.99", status: "failed" }
  ];

  // Only highlight the status badge (span) if className is provided
  return (
    <div onClick={onClick} className={twMerge("bg-bg-secondary rounded-xl border border-border overflow-x-auto w-full text-left", isFixed ? "p-3 sm:p-5" : "p-2 sm:p-3", className)}>
      <div className="min-w-[400px]">
        <div className="flex justify-between items-center mb-4">
          {typographyFixed ? (
            <>
              <h3 className="font-semibold text-text-primary">Recent Transactions</h3>
              <span className="text-sm text-violet-600 hover:text-violet-700 font-medium flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </span>
            </>
          ) : (
            <>
              <span className="text-xs text-text-tertiary">Recent Transactions</span>
              <span className="text-base font-black text-text-primary">VIEW ALL →</span>
            </>
          )}
        </div>
        <table className={twMerge("w-full", isFixed ? "text-sm" : "text-xs")}>
          <thead>
            <tr className="text-left text-text-secondary border-b border-border">
              <th className={isFixed ? "pb-3" : "pb-1"}>Transaction</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            {transactions.map((row, i) => (
              <tr key={i} className="border-b border-border-muted">
                <td className={twMerge("font-medium", isFixed ? "py-3" : "py-1")}>{row.id}</td>
                <td>{row.name}</td>
                <td className="font-medium">{row.amount}</td>
                <td>
                  <span
                    className={twMerge(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      colorFixed
                        ? row.status === "complete"
                          ? "bg-green-100 text-green-700"
                          : row.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        : row.status === "complete"
                          ? "bg-red-100 text-red-700"
                          : row.status === "pending"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700",
                      className // highlight only the badge if provided
                    )}
                  >
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Typography Mess Zone
export function TypographyMessZone({ isFixed, onClick, className = "" }: ZoneComponentProps) {
  return (
    <div onClick={onClick} className={twMerge("bg-bg-secondary rounded-xl border border-border text-left", isFixed ? "p-3 sm:p-5" : "p-2 sm:p-3", className)}>
      {isFixed ? (
        <>
          <div className="mb-2 sm:mb-3">
            <h3 className="font-semibold text-sm sm:text-base text-text-primary">Account Balance</h3>
            <p className="text-xs sm:text-sm text-text-secondary">Total available funds</p>
          </div>
          <div className="text-xl sm:text-3xl font-bold text-text-primary mb-2">$45,230</div>
          <div className="text-xs sm:text-sm text-text-secondary">Last updated: 2 minutes ago</div>
        </>
      ) : (
        <>
          <div className="text-[10px] sm:text-xs text-text-tertiary uppercase tracking-wider font-bold mb-1 sm:mb-2">ACCOUNT BALANCE</div>
          <div className="text-base sm:text-lg font-black text-text-primary mb-1">$45,230</div>
          <div className="text-xs sm:text-sm text-text-secondary mb-2">Total available funds</div>
          <div className="text-[9px] sm:text-[10px] text-text-tertiary">Last updated: 2 minutes ago</div>
        </>
      )}
    </div>
  );
}

// Button Styles Zone
export function ButtonStylesZone({ isFixed, onClick, className = "" }: ZoneComponentProps) {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "rounded-xl border transition-all duration-500 text-left",
        isFixed ? "bg-bg-secondary border-border p-3 sm:p-5" : "bg-bg-secondary border-border p-2 sm:p-3",
        className
      )}
    >
      {isFixed ? (
        <>
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-text-primary">Analytics</h3>
              <p className="text-xs sm:text-sm text-text-secondary">Total Revenue</p>
            </div>
          </div>
          <div className="text-xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">$24,530</div>
          {/* Proper toggle button group */}
          <div className="inline-flex rounded-lg border border-border overflow-hidden">
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-600 text-white text-xs sm:text-sm font-medium transition-colors">Daily</button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-bg-secondary text-text-secondary hover:bg-bg-tertiary text-xs sm:text-sm font-medium transition-colors">
              Monthly
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-text-primary">Analytics</h3>
              <p className="text-xs sm:text-sm text-text-secondary">Total Revenue</p>
            </div>
          </div>
          <div className="text-xl sm:text-3xl font-bold text-text-primary mb-2 sm:mb-3">$24,530</div>
          {/* Inconsistent UI - checkbox instead of toggle */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-border accent-violet-600" readOnly />
              <span className="text-xs sm:text-sm text-text-secondary">Show Daily</span>
            </label>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-violet-600 bg-bg-secondary text-violet-600 hover:bg-violet-50 text-xs sm:text-sm font-medium transition-colors">
              Show Monthly
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// Misaligned Cards Zone (Symmetry and Alignment)
export function MisalignedCardsZone({ isFixed, onClick, className = "" }: ZoneComponentProps) {
  return (
    <div onClick={onClick} className={twMerge("w-full", className)}>
      {isFixed ? (
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
      ) : (
        <div className="flex gap-1.5 sm:gap-2 items-end">
          {/* Misaligned - different sizes, heights, and spacing */}
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
      )}
    </div>
  );
}

// Mobile Nav Zone
export function MobileNavZone({ isFixed, onClick, className = "" }: ZoneComponentProps) {
  return (
    <div onClick={onClick} className={twMerge("bg-bg-tertiary border-t border-border w-full", isFixed ? "p-2" : "p-1.5", className)}>
      {isFixed ? (
        <div className="flex items-center justify-around gap-1">
          <span className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg bg-violet-50 text-violet-700">
            <Home className="w-4 h-4" />
            <span className="text-[10px] font-medium">Home</span>
          </span>
          <span className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-text-secondary">
            <PieChart className="w-4 h-4" />
            <span className="text-[10px]">Analytics</span>
          </span>
          <span className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-text-secondary">
            <Users className="w-4 h-4" />
            <span className="text-[10px]">Team</span>
          </span>
          <span className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-text-secondary">
            <Settings className="w-4 h-4" />
            <span className="text-[10px]">Settings</span>
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-around gap-1">
          <span className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg bg-violet-50 text-violet-700">
            <Home className="w-4 h-4" />
            <span className="text-[10px] font-medium">Home</span>
          </span>
          <span className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-text-secondary">
            <Users className="w-4 h-4" />
            <span className="text-[10px]">Team</span>
          </span>
          <span className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-text-secondary">
            <Settings className="w-4 h-4" />
            <span className="text-[10px]">Settings</span>
          </span>
          <span className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-text-secondary">
            <FileText className="w-4 h-4" />
            <span className="text-[10px]">Reports</span>
          </span>
        </div>
      )}
    </div>
  );
}

// Zone renderer for use in LawPicker popup
interface ZoneDisplayProps {
  zoneId: string;
  isFixed: boolean;
}

export function ZoneDisplay({ zoneId, isFixed }: ZoneDisplayProps) {
  switch (zoneId) {
    case "header-buttons":
      return <HeaderButtonsZone isFixed={isFixed} className="bg-gradient-to-r from-slate-900 to-slate-800 p-2 rounded-md" />;
    case "logo-position":
      return (
        <div className="w-full flex items-center gap-2 p-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded-md justify-between">
          <HeaderButtonsZone isFixed={false} />
          <LogoPositionZone isFixed={isFixed} />
        </div>
      );
    case "nav-order":
      return <NavOrderZone isFixed={isFixed} />;
    case "stat-cards":
      return <StatCardsZone isFixed={isFixed} colorFixed={isFixed} />;
    case "color-meanings":
      return <ColorMeaningsZone isFixed={isFixed} />;
    case "tiny-buttons":
      return <TinyButtonsZone isFixed={isFixed} />;
    case "cramped-spacing":
      return <CrampedSpacingZone isFixed={isFixed} colorFixed={isFixed} typographyFixed={isFixed} />;
    case "typography-mess":
      return <TypographyMessZone isFixed={isFixed} />;
    case "button-styles":
      return <ButtonStylesZone isFixed={isFixed} />;
    case "misaligned-cards":
      return <MisalignedCardsZone isFixed={isFixed} />;
    default:
      return <div className="p-4 text-text-secondary">Unknown zone: {zoneId}</div>;
  }
}
