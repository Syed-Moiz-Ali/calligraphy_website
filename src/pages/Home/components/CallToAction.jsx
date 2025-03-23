import { Link } from "react-router-dom";
import { useState } from "react";
import AnimateDiv from "../../../components/Animation";

// CallToAction Component
function CallToAction() {
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);

    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-indigo-600"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-600"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                <AnimateDiv type="parallax" className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-4">
                        <span className="block">Ready to Find Your</span>
                        <div className="h-2 w-full"></div>
                        <span className="block italic font-serif text-indigo-600">Perfect Frame?</span>
                    </h2>
                    
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 sm:mb-12">
                        Browse our curated collections or collaborate with our designers to create something truly unique and personal.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/collections"
                            className={`
                                group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 
                                overflow-hidden font-semibold bg-indigo-600 text-white rounded-lg
                                shadow-md transition-all duration-300 ease-out
                                hover:bg-indigo-600-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                                ${hoverLeft ? 'scale-105' : 'scale-100'}
                            `}
                            onMouseEnter={() => setHoverLeft(true)}
                            onMouseLeave={() => setHoverLeft(false)}
                        >
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                </svg>
                                <span>Shop Collections</span>
                            </span>
                            <span className="absolute right-0 -mt-12 h-32 w-8 bg-white opacity-10 transform rotate-12 transition-all duration-1000 ease-out group-hover:translate-x-12"></span>
                        </Link>
                        
                        <Link
                            to="/custom-order"
                            className={`
                                group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5
                                overflow-hidden font-semibold border-2 border-primary text-primary rounded-lg
                                bg-transparent hover:bg-indigo-600 hover:text-white
                                shadow-md transition-all duration-300 ease-out
                                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                                dark:text-primary-light dark:border-primary-light dark:hover:bg-indigo-600-light dark:hover:text-gray-900
                                ${hoverRight ? 'scale-105' : 'scale-100'}
                            `}
                            onMouseEnter={() => setHoverRight(true)}
                            onMouseLeave={() => setHoverRight(false)}
                        >
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                </svg>
                                <span>Custom Order</span>
                            </span>
                            <span className="absolute right-0 -mt-12 h-32 w-8 bg-indigo-600 opacity-10 transform rotate-12 transition-all duration-1000 ease-out group-hover:translate-x-12"></span>
                        </Link>
                    </div>
                </AnimateDiv>
                
                {/* Additional information */}
                <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
                                    </svg>
                                ),
                                title: "Extensive Catalog",
                                description: "Explore hundreds of calligraphy styles and frame designs in our curated collections."
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v3a2 2 0 11-4 0V4zm-6 6a2 2 0 114 0v3a2 2 0 11-4 0v-3zm12 0a2 2 0 114 0v3a2 2 0 11-4 0v-3zm-6 6a2 2 0 114 0v3a2 2 0 11-4 0v-3z" />
                                    </svg>
                                ),
                                title: "Artisan Craftsmanship",
                                description: "Each piece showcases the mastery of our skilled calligraphy artists."
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                ),
                                title: "Unique Collections",
                                description: "Discover exclusive designs that blend tradition with modern artistry."
                            }
                        ].map((item, index) => (
                            <AnimateDiv
                                key={index}
                                type="bounce"
                                delay={index * 150}
                                className="group"
                            >
                                <div className="flex justify-center mb-4">
                                    <span className="p-3 rounded-full bg-indigo-600-light/10 dark:bg-indigo-600-light/20 text-primary dark:text-primary-light group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </span>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </AnimateDiv>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;