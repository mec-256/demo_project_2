import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Play, Flame, PieChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { SimulationRequest } from "@shared/schema";
import DemandHeatmapChart from "./charts/demand-heatmap-chart";
import CategoryPerformanceChart from "./charts/category-performance-chart";

interface DemandTabProps {
  cityData: any;
  selectedCity: string;
}

export default function DemandTab({ cityData, selectedCity }: DemandTabProps) {
  const [populationFactor, setPopulationFactor] = useState(1);
  const [economicIndex, setEconomicIndex] = useState(1.2);
  const [competitionLevel, setCompetitionLevel] = useState(0.8);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const simulationMutation = useMutation({
    mutationFn: async (params: SimulationRequest) => {
      const response = await apiRequest("POST", "/api/simulate", params);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Simulation Complete",
        description: `Successfully analyzed ${data.city} with new parameters.`,
      });
      queryClient.invalidateQueries({ queryKey: ["/api/data", selectedCity] });
    },
    onError: () => {
      toast({
        title: "Simulation Failed",
        description: "Unable to run simulation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleRunSimulation = () => {
    if (!selectedCity) {
      toast({
        title: "No City Selected",
        description: "Please select a city first.",
        variant: "destructive",
      });
      return;
    }

    simulationMutation.mutate({
      city: selectedCity,
      populationFactor,
      economicIndex,
      competitionLevel,
    });
  };

  if (!cityData) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500">
          <Flame size={48} className="mx-auto mb-4" />
          <p className="text-lg">Select a city to analyze demand patterns</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Demand Simulation Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Population Factor: {populationFactor}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={populationFactor}
              onChange={(e) => setPopulationFactor(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.5x</span>
              <span>2x</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Economic Index: {economicIndex}
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={economicIndex}
              onChange={(e) => setEconomicIndex(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Competition Level: {competitionLevel}
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={competitionLevel}
              onChange={(e) => setCompetitionLevel(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleRunSimulation}
          disabled={simulationMutation.isPending}
          className="mt-4 bg-walmart-blue text-white px-6 py-2 rounded-lg hover:bg-walmart-blue-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <Play size={16} />
          <span>{simulationMutation.isPending ? "Running..." : "Run Simulation"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Demand Heatmap</h3>
          <DemandHeatmapChart cityData={cityData} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Category Performance</h3>
          <CategoryPerformanceChart cityData={cityData} />
        </div>
      </div>
    </div>
  );
}
