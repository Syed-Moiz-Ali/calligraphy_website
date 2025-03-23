import { Link } from "react-router-dom";
import { useState } from "react";
import AnimateDiv from "../../../components/Animation";

function CategoriesSpotlight() {
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const categories = [
        {
            id: "wedding",
            title: "Wedding Frames",
            description: "Perfect for vows, dates, or names.",
            linkText: "Shop Wedding",
            path: "/collections?category=wedding",
            icon: "💍"
        },
        {
            id: "quotes",
            title: "Quotes & Sayings",
            description: "Inspirational words to uplift.",
            linkText: "Shop Quotes",
            path: "/collections?category=quotes",
            icon: "✨"
        },
        {
            id: "custom",
            title: "Custom Designs",
            description: "Your imagination, our craft.",
            linkText: "Start Custom",
            path: "/custom-order",
            icon: "🎨"
        }
    ];

    return (
        <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
            <AnimateDiv type="parallax">
                <div className="mb-16 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight ">
                    Explore by <span className="italic font-serif text-indigo-600">
                        Category
                        </span>
                       
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Discover our handcrafted collection of premium frames, each designed to perfectly complement your most cherished moments.
                    </p>
                </div>
            </AnimateDiv>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categories.map((category, index) => (
                    <AnimateDiv key={category.id} delay={index * 150} type="pop">
                        <div
                            className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70"></div>
                            <div className="p-8 md:p-10">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-4xl">{category.icon}</span>
                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center bg-indigo-600/10 text-primary transition-all duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">{category.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">{category.description}</p>

                                <Link 
                                    to={category.path} 
                                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-200 group"
                                >
                                    <span>{category.linkText}</span>
                                    <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </Link>
                            </div>

                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/70 to-primary transition-all duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                        </div>
                    </AnimateDiv>
                ))}
            </div>

            <AnimateDiv type="fade-up">
                <div className="mt-16 text-center">
                    <Link 
                        to="/collections" 
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-600-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                    >
                        View All Categories
                    </Link>
                </div>
            </AnimateDiv>
        </section>
    );
}

export default CategoriesSpotlight;
