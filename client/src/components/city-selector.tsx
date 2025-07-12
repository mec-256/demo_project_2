import { ChevronDown } from "lucide-react";
import type { City } from "@shared/schema";

interface CitySelectorProps {
  cities: City[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export default function CitySelector({ cities, selectedCity, onCityChange }: CitySelectorProps) {
  return (
    <div className="relative">
      <select
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-walmart-blue focus:border-walmart-blue text-sm font-medium text-gray-900 dark:text-white shadow-lg transition-all duration-200 hover:shadow-xl"
      >
        <option value="">🏙️ Select City</option>
        {cities.map((city) => (
          <option key={city.id} value={city.code}>
            📍 {city.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
        <ChevronDown className="text-gray-400 dark:text-gray-300" size={14} />
      </div>
    </div>
  );
}
