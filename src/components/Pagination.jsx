function Pagination({ total, page, limit, onPageChange }) {
    const totalPages = Math.ceil(total / limit);
    if (totalPages <= 1) return null;
    
    const getPageNumbers = () => {
        const pages = [];
        
        // Always show first page
        pages.push(1);
        
        // Calculate range around current page (current +/- 1)
        const rangeStart = Math.max(2, page - 1);
        const rangeEnd = Math.min(totalPages - 1, page + 1);
        
        // Add dots after first page if needed
        if (rangeStart > 2) {
            pages.push('...');
        }
        
        // Add pages in range
        for (let i = rangeStart; i <= rangeEnd; i++) {
            pages.push(i);
        }
        
        // Add dots before last page if needed
        if (rangeEnd < totalPages - 1) {
            pages.push('...');
        }
        
        // Always show last page if not the first
        if (totalPages > 1) {
            pages.push(totalPages);
        }
        
        return pages;
    };
    
    return (
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm mb-4 sm:mb-0 text-gray-600">
                Showing page {page} of {totalPages}
            </div>
            
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                    onClick={() => onPageChange(page - 1)}
                    disabled={page === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 transition-colors duration-200 text-sm font-medium"
                >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                {getPageNumbers().map((number, index) => (
                    number === '...' ? (
                        <span
                            key={`ellipsis-${index}`}
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium"
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={number}
                            onClick={() => onPageChange(number)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors duration-200 ${
                                page === number
                                ? "bg-indigo-100 border-indigo-500 text-indigo-600 z-10"
                                : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                            }`}
                        >
                            {number}
                        </button>
                    )
                ))}
                
                <button
                    onClick={() => onPageChange(page + 1)}
                    disabled={page === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 transition-colors duration-200 text-sm font-medium"
                >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </nav>
        </div>
    );
}

export default Pagination;