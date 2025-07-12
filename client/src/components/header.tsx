import CitySelector from "./city-selector";
import ThemeToggle from "./theme-toggle";
import { Store, User } from "lucide-react";
import type { City } from "@shared/schema";

interface HeaderProps {
  cities: City[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export default function Header({ cities, selectedCity, onCityChange }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-elegant dark:shadow-elegant-dark border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-walmart rounded-xl flex items-center justify-center shadow-lg">
                <Store className="text-white" size={18} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Walmart Horizon</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="px-3 py-1 bg-gradient-to-r from-walmart-blue to-walmart-blue-dark rounded-full">
                <span className="text-xs font-medium text-white">Market Expansion Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <CitySelector 
              cities={cities}
              selectedCity={selectedCity}
              onCityChange={onCityChange}
            />
            <ThemeToggle />
            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full">
              <div className="w-8 h-8 bg-gradient-to-r from-walmart-blue to-walmart-blue-dark rounded-full flex items-center justify-center">
                <User className="text-white" size={16} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
