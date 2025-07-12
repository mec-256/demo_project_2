import { Building2, TrendingUp, Target, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CompetitiveAnalysisProps {
  cityData: any;
  selectedCity: string;
}

export default function CompetitiveAnalysis({ cityData, selectedCity }: CompetitiveAnalysisProps) {
  if (!cityData) return null;

  const competitorData = [
    { name: 'Walmart', marketShare: 35, customerSat: 4.2, priceIndex: 85 },
    { name: 'Amazon', marketShare: 28, customerSat: 4.0, priceIndex: 90 },
    { name: 'Flipkart', marketShare: 22, customerSat: 3.8, priceIndex: 88 },
    { name: 'BigBasket', marketShare: 10, customerSat: 3.9, priceIndex: 92 },
    { name: 'Others', marketShare: 5, customerSat: 3.5, priceIndex: 95 }
  ];

  const strengthsWeaknesses = [
    {
      category: "Pricing",
      walmart: { score: 85, status: "strong" },
      competition: { score: 78, status: "moderate" }
    },
    {
      category: "Product Range",
      walmart: { score: 92, status: "strong" },
      competition: { score: 88, status: "strong" }
    },
    {
      category: "Delivery Speed",
      walmart: { score: 75, status: "moderate" },
      competition: { score: 82, status: "strong" }
    },
    {
      category: "Customer Service",
      walmart: { score: 88, status: "strong" },
      competition: { score: 81, status: "strong" }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Market Share Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Market Share Analysis</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={competitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="marketShare" fill="#0066cc" name="Market Share %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Competitive Strengths & Weaknesses */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Competitive Analysis</h3>
        <div className="space-y-4">
          {strengthsWeaknesses.map((item) => (
            <div key={item.category} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">{item.category}</h4>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-walmart-blue rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Walmart: {item.walmart.score}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Competition: {item.competition.score}%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {item.walmart.score > item.competition.score ? (
                  <TrendingUp className="text-green-500" size={20} />
                ) : (
                  <Target className="text-yellow-500" size={20} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Strategic Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Building2 className="text-green-600" size={20} />
              <h4 className="font-medium text-green-800 dark:text-green-200">Market Opportunity</h4>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300">
              Strong position in pricing and product range. Focus on delivery speed improvement.
            </p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="text-blue-600" size={20} />
              <h4 className="font-medium text-blue-800 dark:text-blue-200">Customer Retention</h4>
            </div>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              High customer satisfaction scores indicate strong brand loyalty potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}