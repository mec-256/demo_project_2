import { Map, Plus, Minus, Expand } from "lucide-react";

interface MapViewProps {
  selectedCity: string;
}

export default function MapView({ selectedCity }: MapViewProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-elegant dark:shadow-elegant-dark border border-gray-200 dark:border-gray-700 overflow-hidden hover-lift">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-walmart-blue to-walmart-blue-dark">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <Map size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Market Coverage Map</h3>
              <p className="text-sm text-blue-100">Interactive market analysis</p>
            </div>
          </div>
          <button className="text-sm text-white hover:text-walmart-yellow font-medium flex items-center space-x-2 px-3 py-2 bg-white bg-opacity-20 rounded-lg transition-all duration-200 hover:bg-opacity-30">
            <Expand size={16} />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>
      <div className="h-96 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-900 relative">
        {/* Enhanced map placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <div className="w-24 h-24 bg-gradient-walmart rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-soft">
              <Map size={48} className="text-white" />
            </div>
            <p className="text-xl font-bold text-gray-800 dark:text-white mb-2">Interactive Map View</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Advanced geospatial analytics ready</p>
            {selectedCity && (
              <div className="inline-block px-4 py-2 bg-walmart-blue text-white rounded-full text-sm font-medium shadow-lg">
                📍 Analyzing {selectedCity}
              </div>
            )}
          </div>
        </div>
        
        {/* Enhanced map controls */}
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-elegant dark:shadow-elegant-dark border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex flex-col">
            <button className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 transition-colors duration-200">
              <Plus size={18} className="text-gray-600 dark:text-gray-300" />
            </button>
            <button className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <Minus size={18} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        
        {/* Enhanced map legend */}
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-xl shadow-elegant dark:shadow-elegant-dark border border-gray-200 dark:border-gray-700 p-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Demand Zones</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-success rounded-full shadow-sm"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">High Demand</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-warning rounded-full shadow-sm"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Medium Demand</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full shadow-sm"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Low Demand</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
