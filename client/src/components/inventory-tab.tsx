import { Package, Warehouse, Leaf, TrendingUp, Calendar } from "lucide-react";

interface InventoryTabProps {
  cityData: any;
  selectedCity: string;
}

export default function InventoryTab({ cityData, selectedCity }: InventoryTabProps) {
  if (!cityData) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500">
          <Package size={48} className="mx-auto mb-4" />
          <p className="text-lg">Select a city to view inventory planning</p>
        </div>
      </div>
    );
  }

  const { metrics } = cityData;

  const categories = [
    {
      name: "Groceries & Essentials",
      stock: metrics.groceriesStock,
      priority: "High Priority",
      priorityColor: "text-green-600",
    },
    {
      name: "Electronics",
      stock: metrics.electronicsStock,
      priority: "Medium Priority",
      priorityColor: "text-yellow-600",
    },
    {
      name: "Apparel",
      stock: metrics.apparelStock,
      priority: "Standard Priority",
      priorityColor: "text-blue-600",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Recommendations</h3>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{category.name}</h4>
                  <span className={`text-sm font-medium ${category.priorityColor}`}>
                    {category.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Recommended Stock</span>
                  <span className="font-medium">{category.stock.toLocaleString()} units</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Seasonal Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Calendar size={48} className="text-walmart-blue mx-auto mb-2" />
              <p className="text-sm text-gray-600">Seasonal inventory trends</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Supply Chain Optimization</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-walmart-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Warehouse size={24} className="text-walmart-blue" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Warehouse Efficiency</h4>
            <p className="text-sm text-gray-600">Optimize storage layout and picking routes</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Leaf size={24} className="text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Sustainability</h4>
            <p className="text-sm text-gray-600">Eco-friendly packaging and delivery options</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={24} className="text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Demand Forecasting</h4>
            <p className="text-sm text-gray-600">AI-powered inventory predictions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
