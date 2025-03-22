
import { useState, useEffect } from "react";
import AnimateDiv from "./Animation";

function FilterPanel({ filters, setFilters, onApply }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeFiltersCount, setActiveFiltersCount] = useState(0);
    
    // Calculate active filters for the indicator badge
    useEffect(() => {
        const count = Object.entries(filters).filter(([key, value]) => 
            value !== "" && value !== undefined && value !== null
        ).length;
        setActiveFiltersCount(count);
    }, [filters]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setFilters({ priceMin: "", priceMax: "", category: "", style: "", search: "" });
    };

    return (
        <div className="bg-white border border-gray-200/80 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 mb-8">
            {/* Header - Always visible */}
            <div 
                className="p-5 flex justify-between items-center cursor-pointer bg-gradient-to-r from-white to-gray-50 border-b border-gray-100 hover:from-gray-50 hover:to-white transition-all duration-300"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center">
                    <div className="relative">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                        </svg>
                        {activeFiltersCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                                {activeFiltersCount}
                            </span>
                        )}
                    </div>
                    <div className="ml-3">
                        <h3 className="text-lg font-semibold text-gray-800">Refine Your Selection</h3>
                        <p className="text-sm text-gray-500 hidden sm:block">Find the perfect frame for your space</p>
                    </div>
                </div>
                
                <div className="flex items-center">
                    <span className="text-sm text-indigo-600 font-medium mr-2 hidden sm:block">
                        {isExpanded ? "Hide Filters" : "Show Filters"}
                    </span>
                    <div className={`p-1.5 rounded-full bg-gray-100 transition-all duration-300 transform ${isExpanded ? 'bg-indigo-100' : ''}`}>
                        <svg 
                            className={`w-5 h-5 transition-transform duration-500 text-gray-700 ${isExpanded ? 'rotate-180 text-indigo-600' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            {/* Expandable Content */}
            <AnimateDiv 
                type="bounce" 
                className={`transition-all duration-500 ease-in-out ${
                    isExpanded 
                        ? 'max-h-[800px] opacity-100 py-6 px-5' 
                        : 'max-h-0 opacity-0 py-0 px-5 overflow-hidden'
                }`}
            >
                <div className="space-y-6">
                    {/* Search Field */}
                    <AnimateDiv type="parallax" className="relative">
                        <label className="block text-sm font-medium mb-2 text-gray-700">Search Products</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search collections, designs, or phrases..."
                                value={filters.search || ""}
                                onChange={handleChange}
                                className="block w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                            />
                            {filters.search && (
                                <button 
                                    onClick={() => setFilters(prev => ({...prev, search: ""}))}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </AnimateDiv>
                    
                    {/* Filter Grid */}
                    <div>
                        <AnimateDiv type="spin" className="flex items-center justify-between mb-4">
                            <h4 className="text-sm font-medium text-gray-700">Filter Options</h4>
                            <button
                                onClick={handleReset}
                                className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors duration-200"
                            >
                                <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                </svg>
                                Reset All
                            </button>
                        </AnimateDiv>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {/* Min Price */}
                            <AnimateDiv type="bounce" delay={100} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <label className="block text-sm font-medium mb-2 text-gray-700">Min Price</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <span className="text-gray-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        name="priceMin"
                                        placeholder="0"
                                        value={filters.priceMin || ""}
                                        onChange={handleChange}
                                        className="pl-8 w-full rounded-lg border-2 border-gray-200 py-2.5 text-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                            </AnimateDiv>
                            
                            {/* Max Price */}
                            <AnimateDiv type="bounce" delay={200} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <label className="block text-sm font-medium mb-2 text-gray-700">Max Price</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <span className="text-gray-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        name="priceMax"
                                        placeholder="5000"
                                        value={filters.priceMax || ""}
                                        onChange={handleChange}
                                        className="pl-8 w-full rounded-lg border-2 border-gray-200 py-2.5 text-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                            </AnimateDiv>
                            
                            {/* Category */}
                            <AnimateDiv type="bounce" delay={300} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <label className="block text-sm font-medium mb-2 text-gray-700">Category</label>
                                <div className="relative">
                                    <select
                                        name="category"
                                        value={filters.category || ""}
                                        onChange={handleChange}
                                        className="appearance-none w-full rounded-lg border-2 border-gray-200 py-2.5 pl-3 pr-10 text-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-900"
                                    >
                                        <option value="">All Categories</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="quotes">Quotes</option>
                                        <option value="custom">Custom</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="religious">Religious</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </AnimateDiv>
                            
                            {/* Style */}
                            <AnimateDiv type="bounce" delay={400} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <label className="block text-sm font-medium mb-2 text-gray-700">Style</label>
                                <div className="relative">
                                    <select
                                        name="style"
                                        value={filters.style || ""}
                                        onChange={handleChange}
                                        className="appearance-none w-full rounded-lg border-2 border-gray-200 py-2.5 pl-3 pr-10 text-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-900"
                                    >
                                        <option value="">All Styles</option>
                                        <option value="modern">Modern</option>
                                        <option value="traditional">Traditional</option>
                                        <option value="minimalist">Minimalist</option>
                                        <option value="ornate">Ornate</option>
                                        <option value="contemporary">Contemporary</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </AnimateDiv>
                        </div>
                    </div>
                    
                    {/* Active Filters */}
                    {activeFiltersCount > 0 && (
                        <AnimateDiv type="pop" className="pt-2 pb-2">
                            <div className="flex flex-wrap gap-2">
                                {filters.search && (
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        Search: {filters.search}
                                        <button 
                                            onClick={() => setFilters(prev => ({...prev, search: ""}))}
                                            className="ml-1.5 text-indigo-600 hover:text-indigo-800"
                                        >
                                            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                )}
                                {filters.priceMin && (
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        Min: ₹{filters.priceMin}
                                        <button 
                                            onClick={() => setFilters(prev => ({...prev, priceMin: ""}))}
                                            className="ml-1.5 text-indigo-600 hover:text-indigo-800"
                                        >
                                            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                )}
                                {filters.priceMax && (
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        Max: ₹{filters.priceMax}
                                        <button 
                                            onClick={() => setFilters(prev => ({...prev, priceMax: ""}))}
                                            className="ml-1.5 text-indigo-600 hover:text-indigo-800"
                                        >
                                            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                )}
                                {filters.category && (
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        Category: {filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}
                                        <button 
                                            onClick={() => setFilters(prev => ({...prev, category: ""}))}
                                            className="ml-1.5 text-indigo-600 hover:text-indigo-800"
                                        >
                                            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                )}
                                {filters.style && (
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        Style: {filters.style.charAt(0).toUpperCase() + filters.style.slice(1)}
                                        <button 
                                            onClick={() => setFilters(prev => ({...prev, style: ""}))}
                                            className="ml-1.5 text-indigo-600 hover:text-indigo-800"
                                        >
                                            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                )}
                            </div>
                        </AnimateDiv>
                    )}
                    
                    {/* Action Buttons */}
                    <AnimateDiv type="spin" delay={200} className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                        <button
                            onClick={onApply}
                            className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-300 group"
                        >
                            <span className="relative flex items-center w-full rounded-md bg-white px-8 py-3 transition-all duration-300 ease-in-out group-hover:bg-opacity-0 group-hover:bg-indigo-600">
                                <svg className="w-4 h-4 mr-2 text-indigo-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="text-indigo-600 group-hover:text-white transition-colors duration-300">Apply Filters</span>
                            </span>
                        </button>
                        
                        <button
                            onClick={handleReset}
                            className="bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600 font-medium py-3 px-8 rounded-lg text-sm transition-colors duration-200 flex items-center"
                        >
                            Reset All
                        </button>
                    </AnimateDiv>
                </div>
            </AnimateDiv>
        </div>
    );
}

export default FilterPanel;