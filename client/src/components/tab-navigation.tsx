import { BarChart3, LineChart, Truck, Package, TrendingUp, Building2, Download } from "lucide-react";

type TabType = "overview" | "demand" | "delivery" | "inventory" | "analytics" | "competition" | "export";

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: "overview", label: "Overview", icon: LineChart },
    { id: "demand", label: "Demand Analysis", icon: BarChart3 },
    { id: "delivery", label: "Delivery Zones", icon: Truck },
    { id: "inventory", label: "Inventory Planning", icon: Package },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "competition", label: "Competition", icon: Building2 },
    { id: "export", label: "Export", icon: Download },
  ] as const;

  return (
    <div className="mb-8">
      <nav className="flex flex-wrap gap-2 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-elegant dark:shadow-elegant-dark border border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as TabType)}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 hover-lift ${
                isActive
                  ? "bg-gradient-walmart text-white shadow-lg transform scale-105"
                  : "text-gray-600 dark:text-gray-300 hover:text-walmart-blue dark:hover:text-walmart-blue hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <Icon size={16} className="mr-2" />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
