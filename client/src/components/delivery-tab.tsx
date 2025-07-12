import { Route, Plus, Download } from "lucide-react";

interface DeliveryTabProps {
  cityData: any;
  selectedCity: string;
}

export default function DeliveryTab({ cityData, selectedCity }: DeliveryTabProps) {
  if (!cityData) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500">
          <Route size={48} className="mx-auto mb-4" />
          <p className="text-lg">Select a city to analyze delivery zones</p>
        </div>
      </div>
    );
  }

  const { metrics } = cityData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Zone Analysis</h3>
          <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Route size={48} className="text-walmart-blue mx-auto mb-2" />
              <p className="text-sm text-gray-600">Delivery zone optimization map</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Zone Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Zones</span>
              <span className="text-sm font-medium text-gray-900">{metrics.deliveryZones}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Optimal Coverage</span>
              <span className="text-sm font-medium text-green-600">85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Avg. Delivery Time</span>
              <span className="text-sm font-medium text-gray-900">{metrics.avgDeliveryTime} min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Cost per Delivery</span>
              <span className="text-sm font-medium text-gray-900">₹{metrics.costPerDelivery}</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Options</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Add Hub Location</span>
                <Plus size={16} className="text-gray-500" />
              </div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Optimize Routes</span>
                <Route size={16} className="text-gray-500" />
              </div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Export Analysis</span>
                <Download size={16} className="text-gray-500" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
