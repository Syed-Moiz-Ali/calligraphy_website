import { useState } from 'react';
import { Link } from 'react-router-dom';

function CollectionCard({ item }) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Link to={"collections/689"} 
            className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Item Badge */}
            {item.rating >= 4.8 && (
                <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-600/90 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Bestseller
                    </span>
                </div>
            )}

            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy" 
                    className={`w-full h-full object-cover transform transition-transform duration-700 ease-in-out ${isHovered ? 'scale-105' : 'scale-100'}`} 
                />
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Quick view button */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <Link 
                        to={`/collections/item/${item.id}`}
                        className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-primary font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        Quick View
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                    </h3>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">{item.rating}</span>
                        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({item.reviewCount})</span>
                    </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{item.description}</p>
                
                <div className="mt-auto flex items-end justify-between">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{item.price}</span>
                    
                    <Link 
                        to={`/collections/item/${item.id}`}
                        className="text-primary dark:text-primary-light text-sm font-medium hover:text-primary-dark dark:hover:text-primary-light/90 transition-colors inline-flex items-center"
                    >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </Link>
    );
}

export default CollectionCard;