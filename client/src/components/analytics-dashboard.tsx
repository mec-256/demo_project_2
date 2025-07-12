import { useState, useEffect } from "react";
import { TrendingUp, Users, DollarSign, Target, Clock, AlertCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface AnalyticsDashboardProps {
  cityData: any;
  selectedCity: string;
}

export default function AnalyticsDashboard({ cityData, selectedCity }: AnalyticsDashboardProps) {
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    activeUsers: 1247,
    salesToday: 45689,
    conversionRate: 3.2,
    avgOrderValue: 1200
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10 - 5),
        salesToday: prev.salesToday + Math.floor(Math.random() * 1000),
        conversionRate: Number((prev.conversionRate + (Math.random() - 0.5) * 0.1).toFixed(1)),
        avgOrderValue: prev.avgOrderValue + Math.floor(Math.random() * 100 - 50)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!cityData) return null;

  const kpiCards = [
    {
      title: "Active Users",
      value: realTimeMetrics.activeUsers.toLocaleString(),
      change: "+12%",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Sales Today",
      value: `₹${realTimeMetrics.salesToday.toLocaleString()}`,
      change: "+8%",
      icon: DollarSign,
      color: "bg-green-500"
    },
    {
      title: "Conversion Rate",
      value: `${realTimeMetrics.conversionRate}%`,
      change: "+0.3%",
      icon: Target,
      color: "bg-walmart-yellow"
    },
    {
      title: "Avg Order Value",
      value: `₹${realTimeMetrics.avgOrderValue}`,
      change: "+15%",
      icon: TrendingUp,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Real-time KPIs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Real-time Analytics</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Live</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiCards.map((kpi) => (
            <div key={kpi.title} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 ${kpi.color} rounded-lg flex items-center justify-center`}>
                  <kpi.icon size={16} className="text-white" />
                </div>
                <span className="text-sm text-green-600 font-medium">{kpi.change}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{kpi.title}</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{kpi.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Market Alerts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Market Alerts</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <AlertCircle size={20} className="text-yellow-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">High Demand Alert</p>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">Electronics category showing 40% increase in demand</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <Clock size={20} className="text-green-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-green-800 dark:text-green-200">Delivery Optimization</p>
              <p className="text-sm text-green-700 dark:text-green-300">New delivery route reduced average time by 15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}