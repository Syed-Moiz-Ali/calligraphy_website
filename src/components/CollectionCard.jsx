import { useState } from 'react';
import { Link } from 'react-router-dom';

function CollectionCard({ item }) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="group relative h-full overflow-hidden rounded-xl bg-white transition-all duration-500 ease-in-out hover:z-10 hover:translate-y-px hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Subtle border with animated gradient on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500  transition-opacity duration-500 group-hover:opacity-100 opacity-40"></div>
            <div className="absolute inset-[1px] rounded-[10px] bg-white"></div>
            
            {/* Content container */}
            <div className="relative flex h-full flex-col">
                {/* Bestseller Badge */}
                {item.rating >= 4.8 && (
                    <div className="absolute left-4 top-4 z-10">
                        <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 px-2.5 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-indigo-700/10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Bestseller
                        </span>
                    </div>
                )}

                {/* Image Container with enhanced hover effects */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        loading="lazy" 
                        className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110" 
                    />
                    
                    {/* Enhanced overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    
                    {/* Quick view button with improved styling */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <Link 
                            to={`/collections/item/${item.id}`}
                            className="inline-flex translate-y-4 items-center gap-2 rounded-lg bg-white/95 px-4 py-2.5 text-sm font-medium text-indigo-700 shadow-lg transition-all duration-500 hover:bg-white hover:text-indigo-800 group-hover:translate-y-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            Quick View
                        </Link>
                    </div>
                    
                    {/* New: Wishlish icon button */}
                    <button 
                        className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-600 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-indigo-600 group-hover:opacity-100"
                        aria-label="Add to wishlist"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Content with improved typography and spacing */}
                <Link to={`/collections/${item.id}`} className="flex flex-grow flex-col px-5 py-4">
                    <div className="mb-3 flex items-start justify-between">
                        <h3 className="font-medium text-gray-900 transition-colors duration-300 group-hover:text-indigo-700 sm:text-lg">
                            {item.title}
                        </h3>
                        <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-800">{item.rating}</span>
                            <span className="text-xs text-gray-500">({item.reviewCount})</span>
                        </div>
                    </div>
                    
                    <p className="mb-4 flex-grow text-sm text-gray-600">{item.description}</p>
                    
                    {/* New: Tags/Categories */}
                    {item.tags && (
                        <div className="mb-3 flex flex-wrap gap-1">
                            {item.tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    
                    <div className="mt-auto flex items-end justify-between">
                        <div className="flex flex-col">
                            {item.originalPrice && (
                                <span className="text-xs text-gray-500 line-through">{item.originalPrice}</span>
                            )}
                            <span className="text-lg font-bold text-gray-900">{item.price}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            {/* Add to cart button */}
                            <button 
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-700"
                                aria-label="Add to cart"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            </button>
                            
                            {/* View details link with improved styling */}
                            <Link 
                                to={`/collections/item/${item.id}`}
                                className="inline-flex items-center text-sm font-medium text-indigo-600 transition-all duration-300 hover:text-indigo-800"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Details
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </Link>
                
                {/* New: Stock indicator or shipping info */}
                {/* {item.stock && item.stock <= 5 ? (
                    <div className="absolute bottom-0 left-0 right-0 bg-amber-50 px-5 py-2 text-xs font-medium text-amber-700">
                        Only {item.stock} left in stock
                    </div>
                ) : (
                    <div className="absolute bottom-0 left-0 right-0 bg-green-50 px-5 py-2 text-xs font-medium text-green-700">
                        Free shipping on this item
                    </div>
                )} */}
            </div>
        </div>
    );
}

export default CollectionCard;