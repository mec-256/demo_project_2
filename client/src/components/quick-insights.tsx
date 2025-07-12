import { CheckCircle, Star } from "lucide-react";

interface QuickInsightsProps {
  insights: {
    demographics: string;
    infrastructure: string;
    competition: string;
  };
  recommendations: Array<{
    type: string;
    priority: string;
    title: string;
    description: string;
  }>;
}

export default function QuickInsights({ insights, recommendations }: QuickInsightsProps) {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-elegant dark:shadow-elegant-dark border border-gray-200 dark:border-gray-700 p-6 hover-lift animate-fade-in">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-walmart rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Market Insights</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <div className="w-3 h-3 bg-gradient-success rounded-full mt-1 flex-shrink-0 shadow-sm"></div>
            <div>
              <p className="text-sm font-semibold text-green-900 dark:text-green-100">Strong Demographics</p>
              <p className="text-sm text-green-700 dark:text-green-200 mt-1">{insights.demographics}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <div className="w-3 h-3 bg-gradient-warning rounded-full mt-1 flex-shrink-0 shadow-sm"></div>
            <div>
              <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-100">Infrastructure Ready</p>
              <p className="text-sm text-yellow-700 dark:text-yellow-200 mt-1">{insights.infrastructure}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="w-3 h-3 bg-gradient-walmart rounded-full mt-1 flex-shrink-0 shadow-sm"></div>
            <div>
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Competition Analysis</p>
              <p className="text-sm text-blue-700 dark:text-blue-200 mt-1">{insights.competition}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-elegant dark:shadow-elegant-dark border border-gray-200 dark:border-gray-700 p-6 hover-lift animate-fade-in">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-walmart rounded-xl flex items-center justify-center">
            <Star className="text-white" size={20} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Strategic Recommendations</h3>
        </div>
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`border rounded-xl p-4 transition-all duration-200 hover:shadow-lg ${
                rec.type === "expansion"
                  ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                  : "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  rec.type === "expansion" ? "bg-green-100 dark:bg-green-800" : "bg-yellow-100 dark:bg-yellow-800"
                }`}>
                  {rec.type === "expansion" ? (
                    <CheckCircle className="text-green-600 dark:text-green-300" size={16} />
                  ) : (
                    <Star className="text-yellow-600 dark:text-yellow-300" size={16} />
                  )}
                </div>
                <span
                  className={`text-sm font-bold ${
                    rec.type === "expansion" ? "text-green-900 dark:text-green-100" : "text-yellow-900 dark:text-yellow-100"
                  }`}
                >
                  {rec.title}
                </span>
              </div>
              <p
                className={`text-sm ${
                  rec.type === "expansion" ? "text-green-700 dark:text-green-200" : "text-yellow-700 dark:text-yellow-200"
                }`}
              >
                {rec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
