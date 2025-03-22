import { useState, useEffect } from "react";
import { SEO } from "../utils/seo.jsx";

function Blog() {
    // Since we don't have an API, let's use dummy data
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Categories for filtering
    const categories = ["All", "Tips", "Inspiration", "Tutorials", "News"];

    useEffect(() => {
        // Simulate API call with dummy data
        const dummyPosts = [
            {
                id: 1,
                title: "The Art of Modern Calligraphy",
                excerpt: "Discover the beauty and techniques behind modern calligraphy styles that are trending this season.",
                category: "Tutorials",
                author: "Emma Davis",
                date: "March 15, 2025",
                readTime: "5 min read",
                imageUrl: "/api/placeholder/800/500",
                featured: true
            },
            {
                id: 2,
                title: "Framing Techniques for Calligraphy Art",
                excerpt: "Learn how professional framers enhance calligraphy with the perfect frame selection and mounting techniques.",
                category: "Tips",
                author: "Michael Chen",
                date: "March 10, 2025",
                readTime: "4 min read",
                imageUrl: "/api/placeholder/800/500"
            },
            {
                id: 3,
                title: "Top Calligraphy Tools for Beginners",
                excerpt: "Starting your calligraphy journey? Here's our curated list of essential tools that won't break the bank.",
                category: "Tips",
                author: "Sarah Johnson",
                date: "March 5, 2025",
                readTime: "6 min read",
                imageUrl: "/api/placeholder/800/500"
            },
            {
                id: 4,
                title: "Showcasing Our Spring Collection",
                excerpt: "Explore our latest collection of handcrafted frames designed specifically for springtime calligraphy themes.",
                category: "News",
                author: "David Miller",
                date: "February 28, 2025",
                readTime: "3 min read",
                imageUrl: "/api/placeholder/800/500"
            },
            {
                id: 5,
                title: "Finding Inspiration in Nature",
                excerpt: "How natural elements can inspire your calligraphy compositions and create harmony in your artistic expressions.",
                category: "Inspiration",
                author: "Olivia Wilson",
                date: "February 20, 2025",
                readTime: "7 min read",
                imageUrl: "/api/placeholder/800/500",
                featured: true
            },
        ];

        // Simulate network delay
        setTimeout(() => {
            setPosts(dummyPosts);
            setLoading(false);
        }, 800);
    }, []);

    // Filter posts based on selected category
    const filteredPosts = selectedCategory === "All" 
        ? posts 
        : posts.filter(post => post.category === selectedCategory);

    // Separate featured posts
    const featuredPosts = posts.filter(post => post.featured);
    
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <SEO title="Blog | Calligraphy Frames" description="Inspiration, tutorials, and updates from Calligraphy Frames." />
            
            {/* Hero Section */}
            <section className="relative bg-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-center">
                        <span className="block">Our Blog</span>
                    </h1>
                    <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto text-center">
                        Discover inspiration, techniques, and insights to elevate your calligraphy journey
                    </p>
                </div>
            </section>

            {/* Featured Posts Section - Only show if we have featured posts */}
            {featuredPosts.length > 0 && !loading && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredPosts.map((post) => (
                            <div key={post.id} className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                                <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                                    <img 
                                        src={post.imageUrl} 
                                        alt={post.title} 
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute top-0 left-0 m-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white">
                                            Featured
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-sm font-medium text-indigo-600 mb-1 block">{post.category}</span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-200">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
                                                {post.author.charAt(0)}
                                            </div>
                                            <span className="ml-2 text-sm text-gray-600">{post.author}</span>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {post.readTime}
                                        </div>
                                    </div>
                                </div>
                                <button className="absolute inset-0 w-full h-full focus:outline-none">
                                    <span className="sr-only">View {post.title}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Main Content Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Category Filter */}
                <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">All Articles</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedCategory === category
                                        ? "bg-indigo-600 text-white"
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin mb-4"></div>
                        <p className="text-gray-600">Loading articles...</p>
                    </div>
                ) : filteredPosts.length > 0 ? (
                    /* Post Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <div 
                                key={post.id} 
                                className="group bg-white rounded-xl overflow-hidden shadow transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex flex-col h-full"
                            >
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={post.imageUrl} 
                                        alt={post.title} 
                                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-0 right-0 m-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white bg-opacity-90 text-indigo-700">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-200">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm flex-grow">{post.excerpt}</p>
                                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <div className="text-sm text-gray-500">
                                            {post.date}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {post.readTime}
                                        </div>
                                    </div>
                                </div>
                                <button className="absolute inset-0 w-full h-full focus:outline-none">
                                    <span className="sr-only">View {post.title}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                        <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">No articles found</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            We couldn't find any articles in the {selectedCategory} category.
                        </p>
                        <div className="mt-6">
                            <button
                                onClick={() => setSelectedCategory("All")}
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                View all posts
                            </button>
                        </div>
                    </div>
                )}
            </section>
            
            {/* Newsletter Section */}
            <section className="bg-indigo-50 py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest calligraphy techniques, inspiration, and exclusive offers.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-lg flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                        <button 
                            type="submit"
                            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Blog;