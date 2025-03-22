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
                        <span className="block text-primary">Perfect Frame?</span>
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Fast Delivery",
                                description: "Premium frames delivered to your doorstep within 3-5 business days."
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: "Quality Guarantee",
                                description: "All our frames are crafted using premium materials with a lifetime warranty."
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                ),
                                title: "Secure Payment",
                                description: "Multiple payment options with end-to-end encryption for your security."
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