import { useState, useEffect } from "react";
import { useCollections } from "../contexts/CollectionsContext.jsx";
import { getCollections } from "../api/collections.js";
import { trackPageView } from "../utils/analytics.js";
import { applyFilters } from "../utils/filters.js";
import { applySort } from "../utils/sort.js";
import { SEO } from "../utils/seo.jsx";
import CollectionCard from "../components/CollectionCard.jsx";
import DetailModal from "../components/DetailModal.jsx";
import FilterPanel from "../components/FilterPanel.jsx";
import Pagination from "../components/Pagination.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import AnimateDiv from "../components/Animation.jsx";

function Collections() {
    const { collections, setCollections, total, setTotal, loading, setLoading, error, setError } = useCollections();
    const [activeType, setActiveType] = useState("popular");
    const [filters, setFilters] = useState({ priceMin: "", priceMax: "", category: "", style: "", search: "" });
    const [sort, setSort] = useState("title-asc");
    const [page, setPage] = useState(1);
    const [limit] = useState(12);
    const [selectedItemId, setSelectedItemId] = useState(null);

    useEffect(() => {
        trackPageView("/collections");
        fetchCollections();
    }, [activeType, page, sort]);

    const fetchCollections = async () => {
        setLoading(true);
        setError(null);
        try {
            const cleanFilters = applyFilters(filters);
            const sortOptions = applySort(sort);
            const data = await getCollections({ type: activeType, filters: cleanFilters, page, limit, sort: sortOptions });
            setCollections(data.items || []);
            setTotal(data.total || 0);
        } catch (err) {
            setError("Failed to load collections. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleApplyFilters = () => {
        setPage(1); // Reset to first page on filter apply
        fetchCollections();
    };

    return (
        <div>
            <div className="bg-gray-50 min-h-screen">
                <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <SEO title="Collections" description="Browse our calligraphy frame collections." />
                    
                    {/* Header */}
                    <AnimateDiv type="parallax" className="mb-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-8 tracking-tight">
                            Our <span className="italic font-serif text-indigo-600">Collections</span>
                        </h1>
                        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
                            Discover our curated selection of premium calligraphy frames, designed to enhance any space with elegance and style.
                        </p>
                    </AnimateDiv>
                    
                    {/* Collection Type Tabs */}
                    <AnimateDiv type="bounce" className="flex flex-wrap justify-center mb-10">
                        <div className="inline-flex p-1 rounded-xl bg-white shadow-sm mb-6">
                            <button
                                onClick={() => setActiveType("popular")}
                                className={`py-2.5 px-6 rounded-lg font-medium text-sm transition-all duration-200 ${
                                    activeType === "popular" 
                                    ? "bg-indigo-600 text-white shadow-md" 
                                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                }`}
                            >
                                Popular Collections
                            </button>
                            <button
                                onClick={() => setActiveType("new-arrival")}
                                className={`py-2.5 px-6 rounded-lg font-medium text-sm transition-all duration-200 ${
                                    activeType === "new-arrival" 
                                    ? "bg-indigo-600 text-white shadow-md" 
                                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                }`}
                            >
                                New Arrivals
                            </button>
                        </div>
                    </AnimateDiv>

                    <FilterPanel 
                        filters={filters} 
                        setFilters={setFilters} 
                        onApply={handleApplyFilters}
                    />

                    <AnimateDiv type="spin" className="flex justify-between items-center mb-6">
                        <p className="text-gray-600 text-sm">
                            {total > 0 ? `Showing ${Math.min((page - 1) * limit + 1, total)} - ${Math.min(page * limit, total)} of ${total} items` : 'No items found'}
                        </p>
                        <div className="flex items-center">
                            <span className="mr-2 text-sm text-gray-600">Sort by:</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer bg-white text-gray-900"
                            >
                                <option value="title-asc">Title (A-Z)</option>
                                <option value="title-desc">Title (Z-A)</option>
                                <option value="price-asc">Price (Low to High)</option>
                                <option value="price-desc">Price (High to Low)</option>
                            </select>
                        </div>
                    </AnimateDiv>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <LoadingSpinner />
                        </div>
                    ) : error ? (
                        <AnimateDiv type="pop" className="bg-red-50 border-l-4 border-red-500 p-4 my-8 rounded-md">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        </AnimateDiv>
                    ) : collections.length ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {collections.map((item, index) => (
                                <AnimateDiv
                                    key={item.id}
                                    type="bounce"
                                    delay={index * 100} // Staggered animation for each card
                                    className="group cursor-pointer rounded-xl overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-white hover:shadow-indigo-500/30 border border-gray-200"
                                >
                                    <div onClick={() => setSelectedItemId(item.id)}>
                                        <CollectionCard item={item} />
                                    </div>
                                </AnimateDiv>
                            ))}
                        </div>
                    ) : (
                        <AnimateDiv type="pop" className="text-center py-20 bg-white rounded-xl shadow-sm">
                            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                            <p className="text-xl font-medium text-gray-600">No collections available</p>
                            <p className="mt-2 text-gray-500">Try adjusting your filters or check back later</p>
                        </AnimateDiv>
                    )}

                    <AnimateDiv type="spin" delay={200}>
                        <Pagination 
                            total={total} 
                            page={page} 
                            limit={limit} 
                            onPageChange={setPage}
                        />
                    </AnimateDiv>
                    <DetailModal 
                        id={selectedItemId} 
                        isOpen={!!selectedItemId} 
                        onClose={() => setSelectedItemId(null)}
                    />
                </section>
            </div>
        </div>
    );
}

export default Collections;