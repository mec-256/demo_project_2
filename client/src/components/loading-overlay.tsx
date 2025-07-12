interface LoadingOverlayProps {
  isVisible: boolean;
}

export default function LoadingOverlay({ isVisible }: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-elegant dark:shadow-elegant-dark border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 dark:border-gray-600"></div>
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-walmart-blue border-t-transparent absolute top-0 left-0"></div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Analyzing Market Data</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Processing city analytics and market insights...</p>
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-walmart-blue rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-walmart-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-walmart-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
