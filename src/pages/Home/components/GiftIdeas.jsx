import { Link } from "react-router-dom";
import { useState } from "react";
import AnimateDiv from "../../../components/Animation";

function GiftIdeas() {
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const giftIdeas = [
        {
            id: "wedding",
            title: "For Weddings",
            description: "Elegant frames to celebrate the union of two souls.",
            linkText: "Shop Wedding",
            path: "/collections?category=wedding",
            icon: "💍",
            occasions: ["Anniversaries", "Engagement Parties", "Bridal Showers"]
        },
        {
            id: "birthday",
            title: "For Birthdays",
            description: "Make their special day memorable with personalized frames.",
            linkText: "Customize",
            path: "/custom-order?occasion=birthday",
            icon: "🎂",
            occasions: ["Milestone Birthdays", "Sweet 16", "Coming of Age"]
        },
        {
            id: "memorial",
            title: "For Remembrance",
            description: "Honor cherished memories with heartfelt tribute frames.",
            linkText: "Explore Memorial",
            path: "/collections?category=memorial",
            icon: "🕊️",
            occasions: ["In Memoriam", "Legacy Tributes", "Angel Dates"]
        },
        {
            id: "baby",
            title: "For New Arrivals",
            description: "Welcome little ones with charming keepsake frames.",
            linkText: "Shop Baby",
            path: "/collections?category=baby",
            icon: "👶",
            occasions: ["Baby Showers", "Christenings", "First Birthdays"]
        }
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateDiv type="bounce" className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block py-1 px-3 rounded-full text-xs font-medium uppercase tracking-wider text-primary bg-indigo-600/10 mb-3">Thoughtful Selections</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Perfect <span className="italic font-serif text-indigo-600"> Gift Ideas</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Discover meaningful presents for every special occasion, handcrafted with care.
                    </p>
                </AnimateDiv>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {giftIdeas.map((idea, index) => (
                        <div
                            key={idea.id}
                            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Decorative top gradient */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/70 to-primary"></div>
                            
                            <div className="p-6">
                                <AnimateDiv type="bounce" className="flex justify-between items-start mb-4">
                                    <span className="text-3xl">{idea.icon}</span>
                                    <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600/10 text-primary transition-all duration-300 ${hoveredCard === index ? 'bg-indigo-600 text-white' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </AnimateDiv>
                                <AnimateDiv type="bounce">

                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{idea.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{idea.description}</p>
                                </AnimateDiv>
                                
                                {/* Perfect for list */}
                                <AnimateDiv type="bounce" className="mb-6">
                                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">Perfect for:</p>
                                    <ul className="space-y-1">
                                        {idea.occasions.map((occasion, i) => (
                                            <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                                                <svg className="h-3 w-3 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {occasion}
                                            </li>
                                        ))}
                                    </ul>
                                </AnimateDiv>
                                
                                <AnimateDiv >

                                <Link 
                                    to={idea.path}
                                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium group-hover:underline transition-colors duration-200"
                                >
                                    <span>{idea.linkText}</span>
                                    <svg 
                                        className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                                </AnimateDiv>
                            </div>
                            
                            {/* Progress bar animation on hover */}
                            <div 
                                className="absolute bottom-0 left-0 h-1 bg-indigo-600 transition-all duration-700 ease-out"
                                style={{ 
                                    width: hoveredCard === index ? '100%' : '0%'
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
                
                {/* Gift finder CTA */}
                <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/20 dark:to-primary/30 rounded-xl p-8 md:p-10">
                    <div className="md:flex items-center justify-between">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Not sure what to choose?</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our gift finder helps you discover the perfect present based on occasion, recipient, and budget.
                            </p>
                        </div>
                        <Link 
                            to="/gift-finder" 
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-600-dark shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 whitespace-nowrap"
                        >
                            Try Our Gift Finder
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GiftIdeas;