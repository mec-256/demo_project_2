import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeLabel: string;
  icon: LucideIcon;
  iconColor: string;
  changeColor: string;
}

export default function MetricCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  iconColor,
  changeColor,
}: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-elegant dark:shadow-elegant-dark p-6 border border-gray-200 dark:border-gray-700 hover-lift animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
        <div className={`w-14 h-14 ${iconColor} rounded-2xl flex items-center justify-center shadow-lg animate-pulse-soft`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
      <div className="flex items-center pt-2 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center space-x-1">
          <span className={`text-sm font-bold ${changeColor}`}>{change}</span>
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">{changeLabel}</span>
      </div>
    </div>
  );
}
