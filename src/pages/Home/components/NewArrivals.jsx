import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import CollectionCard from "../../../components/CollectionCard";

const dummyPopularItems = [
    { 
        id: 1, 
        title: "Wedding Vows Frame", 
        imageUrl: "https://placehold.co/600x400", 
        description: "A timeless frame for your special day.",
        price: "₹4,999",
        rating: 4.9,
        reviewCount: 124
    },
    { 
        id: 2, 
        title: "Motivational Quote", 
        imageUrl: "https://placehold.co/600x400", 
        description: "Inspire daily with elegant calligraphy.",
        price: "₹3,499",
        rating: 4.7,
        reviewCount: 86
    },
    { 
        id: 3, 
        title: "Family Name Art", 
        imageUrl: "https://placehold.co/600x400", 
        description: "Personalized family keepsake.",
        price: "₹5,299",
        rating: 4.8,
        reviewCount: 97
    },
];


function NewArrivals() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <section className={`py-16 px-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div className="mb-6 md:mb-0">
                        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-primary/80  uppercase bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full mb-3">
                            Featured Collection
                        </span>
                        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 italic font-serifs">
                            Our Popular Picks
                        </h2> */}
                        <h2 className=" text-3xl md:text-4xl   font-bold text-primary mb-8 tracking-tight ">
                            Our <span className="italic font-serif text-indigo-600">New Arrivals</span>
                        </h2>
                        <p className="mt-3 text-gray-600  max-w-2xl">
                            Discover our most beloved designs, handcrafted with precision and artistry.
                        </p>
                    </div>

                    <Link
                        to="/collections?type=popular"
                        className="group inline-flex items-center text-primary  font-medium hover:text-primary-dark  transition-colors"
                    >
                        See All New Arrivals
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {dummyPopularItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <CollectionCard item={item} />
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Link
                        to="/collections"
                        className="group inline-flex items-center justify-center bg-white  text-primary  font-medium py-3 px-8 rounded-lg border border-gray-200  transition-all duration-300 ease-in-out hover:bg-gray-50  hover:shadow-md"
                    >
                        <span>Explore Full Collection</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2 transform transition-transform group-hover:rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NewArrivals;