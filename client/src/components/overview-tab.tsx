import { TrendingUp, Truck, Package, PieChart, Expand, Plus, Minus } from "lucide-react";
import MetricCard from "./metric-card";
import MapView from "./map-view";
import QuickInsights from "./quick-insights";
import DemandForecastChart from "./charts/demand-forecast-chart";
import RevenueProjectionChart from "./charts/revenue-projection-chart";

interface OverviewTabProps {
  cityData: any;
  selectedCity: string;
}

export default function OverviewTab({ cityData, selectedCity }: OverviewTabProps) {
  if (!cityData) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500">
          <Package size={48} className="mx-auto mb-4" />
          <p className="text-lg">Select a city to view market analysis</p>
        </div>
      </div>
    );
  }

  const { city, metrics } = cityData;

  return (
    <div>
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Market Potential"
          value={`${city.marketPotential}M`}
          change="+12%"
          changeLabel="from last analysis"
          icon={TrendingUp}
          iconColor="bg-green-500"
          changeColor="text-green-600"
        />
        <MetricCard
          title="Delivery Coverage"
          value={`${city.deliveryCoverage}%`}
          change="+5%"
          changeLabel="optimal zones"
          icon={Truck}
          iconColor="bg-blue-500"
          changeColor="text-blue-600"
        />
        <MetricCard
          title="Inventory Score"
          value={city.inventoryScore.toString()}
          change="Excellent"
          changeLabel="optimization"
          icon={Package}
          iconColor="bg-walmart-yellow"
          changeColor="text-walmart-yellow-dark"
        />
        <MetricCard
          title="ROI Projection"
          value={`${city.roiProjection}%`}
          change="+8%"
          changeLabel="vs baseline"
          icon={PieChart}
          iconColor="bg-purple-500"
          changeColor="text-purple-600"
        />
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MapView selectedCity={selectedCity} />
        </div>
        <div className="space-y-6">
          <QuickInsights insights={cityData.insights} recommendations={cityData.recommendations} />
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Demand Forecast</h3>
          <DemandForecastChart cityData={cityData} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Projection</h3>
          <RevenueProjectionChart cityData={cityData} />
        </div>
      </div>
    </div>
  );
}
