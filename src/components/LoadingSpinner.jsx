function LoadingSpinner({ message = "Please wait while we prepare your content" }) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-40 py-8 px-4 bg-white dark:bg-gray-900">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-indigo-200 dark:border-indigo-900"></div>
          {/* Spinning element */}
          <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-transparent border-t-indigo-600 dark:border-t-indigo-400 animate-spin"></div>
        </div>
        <p className="mt-4 text-base md:text-lg font-medium text-gray-700 dark:text-gray-300">Loading...</p>
        <p className="mt-2 text-xs md:text-sm text-center text-gray-500 dark:text-gray-400 max-w-xs">
          {message}
        </p>
      </div>
    );
  }
  
  export default LoadingSpinner;