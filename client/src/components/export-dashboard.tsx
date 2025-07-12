import { Download, FileText, Image, Database } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ExportDashboardProps {
  cityData: any;
  selectedCity: string;
}

export default function ExportDashboard({ cityData, selectedCity }: ExportDashboardProps) {
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: "Export Started",
      description: `Generating ${format} report for ${selectedCity}...`,
    });
    
    // Simulate export process
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `Your ${format} report has been downloaded.`,
      });
    }, 2000);
  };

  if (!cityData) return null;

  const exportOptions = [
    {
      type: "PDF Report",
      description: "Comprehensive market analysis report",
      icon: FileText,
      format: "PDF",
      color: "bg-red-500"
    },
    {
      type: "Excel Data",
      description: "Raw data and calculations",
      icon: Database,
      format: "Excel",
      color: "bg-green-500"
    },
    {
      type: "Charts & Visualizations",
      description: "All charts as high-res images",
      icon: Image,
      format: "Images",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Export Analysis</h3>
      <div className="space-y-3">
        {exportOptions.map((option) => (
          <button
            key={option.type}
            onClick={() => handleExport(option.format)}
            className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${option.color} rounded-lg flex items-center justify-center`}>
                <option.icon size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-900 dark:text-white">{option.type}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
              </div>
            </div>
            <Download size={20} className="text-gray-400" />
          </button>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-walmart-blue bg-opacity-10 rounded-lg">
        <h4 className="font-medium text-walmart-blue mb-2">Quick Export Summary</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-400">City:</span>
            <span className="ml-2 font-medium text-gray-900 dark:text-white capitalize">{selectedCity}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">ROI:</span>
            <span className="ml-2 font-medium text-gray-900 dark:text-white">{cityData.city.roiProjection}%</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Market Score:</span>
            <span className="ml-2 font-medium text-gray-900 dark:text-white">{cityData.city.inventoryScore}/100</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Coverage:</span>
            <span className="ml-2 font-medium text-gray-900 dark:text-white">{cityData.city.deliveryCoverage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}