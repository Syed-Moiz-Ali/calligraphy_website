import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCollectionDetail } from "../api/collections.js";
import { SEO } from "../utils/seo.jsx";

function CollectionDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    const dummyCalligraphyData = {
        id: "1",
        title: "Ethereal Harmony",
        artist: "Mei Lin",
        price: 450,
        originalPrice: 520,
        stock: 3,
        description: "This exquisite piece showcases the harmony between traditional brush techniques and modern compositional elements. 'Ethereal Harmony' features elegant strokes that dance across the handmade mulberry paper, creating a sense of movement and tranquility. The artwork integrates a poetic verse from the Tang Dynasty that speaks of nature's enduring beauty.",
        style: "Contemporary Asian",
        script: "Cursive Script (草書)",
        materials: "Sumi ink on handmade mulberry paper",
        dimensions: "24\" × 36\" (60.96cm × 91.44cm)",
        created: "2024",
        framed: true,
        images: [
          "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        artistImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        artistBio: "Mei Lin is a renowned calligrapher whose work bridges Eastern and Western artistic traditions. With over 15 years of dedicated practice, her pieces have been exhibited in galleries across Asia, Europe, and North America. Mei specializes in both traditional Chinese calligraphy and contemporary interpretations that push the boundaries of the ancient art form.",
        relatedPieces: [
          {
            id: "2",
            title: "Serene Whisper",
            price: 380,
            thumbnailUrl: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          },
          {
            id: "3",
            title: "Flowing Rhythm",
            price: 420,
            thumbnailUrl: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          },
          {
            id: "4",
            title: "Mountain Spirit",
            price: 550,
            thumbnailUrl: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          },
          {
            id: "5",
            title: "Autumn Essence",
            price: 390,
            thumbnailUrl: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          }
        ]
      };
    useEffect(() => {
        setLoading(true);
        setImageLoaded(false);
        setDetail(dummyCalligraphyData)
        setLoading(false);
        // getCollectionDetail(id)
        //     .then((data) => setDetail(data))
        //     .finally(() => setLoading(false));
    }, [id]);

    return (
        <main className="min-h-screen bg-stone-50 ">
            {loading ? (
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-stone-600 font-medium">Loading artwork...</p>
                </div>
            ) : detail ? (
                <>
                    <SEO title={`${detail.title} | Calligraphy Art`} description={detail.description} />
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 ">
                        {/* Breadcrumb Navigation */}
                        <nav className="flex mb-6 text-sm font-medium italic font-serif">
                            <a href="/" className="text-stone-500 hover:text-stone-800">Home</a>
                            <span className="mx-2 text-stone-400">/</span>
                            <a href="/collections" className="text-stone-500 hover:text-stone-800">Collections</a>
                            <span className="mx-2 text-stone-400">/</span>
                            <span className=" text-indigo-600">{detail.title}</span>
                        </nav>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Image Gallery Section */}
                            <div className="space-y-4">
                                <div className="bg-white rounded-lg shadow-sm overflow-hidden aspect-w-4 aspect-h-3">
                                    <img 
                                        src={detail.images ? detail.images[activeImage] : detail.images[0]} 
                                        alt={detail.title} 
                                        className={`w-full h-max object-contain transition-opacity duration-500 'opacity-100' `}
                                        onLoad={() => setImageLoaded(true)}
                                    />
                                </div>
                                
                                {/* Thumbnail Gallery */}
                                {detail.images && detail.images.length > 1 && (
                                    <div className="flex space-x-2 overflow-x-auto pb-2">
                                        {detail.images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setImageLoaded(false);
                                                    setActiveImage(idx);
                                                }}
                                                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                                                    activeImage === idx ? 'border-primary' : 'border-transparent hover:border-stone-300'
                                                }`}
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`${detail.title} - View ${idx + 1}`} 
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            {/* Artwork Details Section */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">{detail.title}</h1>
                                    <p className="mt-2 text-lg text-stone-500">
                                        By {detail.artist || "Unknown Artist"}
                                    </p>
                                </div>
                                
                                {/* Price Section */}
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="flex items-baseline">
                                        <span className="text-3xl font-bold text-stone-900">₹{detail.price || "Price on request"}</span>
                                        {detail.originalPrice && (
                                            <span className="ml-3 text-lg text-stone-500 line-through">₹{detail.originalPrice}</span>
                                        )}
                                    </div>
                                    
                                    {detail.stock && (
                                        <p className={`mt-2 text-sm ${detail.stock > 10 ? 'text-green-600' : detail.stock > 0 ? 'text-amber-600' : 'text-red-600'}`}>
                                            {detail.stock > 10 ? 'In Stock' : detail.stock > 0 ? `Only ${detail.stock} left` : 'Sold Out'}
                                        </p>
                                    )}
                                    
                                    <div className="mt-6 space-y-3">
                                        <button className="w-full bg-primary text-white py-3 px-4 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                            Add to Cart
                                        </button>
                                        <button className="w-full bg-white text-primary border border-primary py-3 px-4 rounded-md font-medium hover:bg-primary/5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                            Save to Favorites
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Artwork Description */}
                                <div>
                                    <h2 className="text-xl font-semibold text-stone-900 mb-2">About this Piece</h2>
                                    <div className="prose prose-stone max-w-none">
                                        <p className="text-stone-700 leading-relaxed">{detail.description}</p>
                                    </div>
                                </div>
                                
                                {/* Calligraphy Details */}
                                <div className="border-t border-stone-200 pt-6">
                                    <h2 className="text-xl font-semibold text-stone-900 mb-4">Specifications</h2>
                                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                        {detail.style && (
                                            <div className="border-b border-stone-100 pb-2">
                                                <dt className="text-sm font-medium text-stone-500">Style</dt>
                                                <dd className="mt-1 text-stone-900">{detail.style}</dd>
                                            </div>
                                        )}
                                        {detail.script && (
                                            <div className="border-b border-stone-100 pb-2">
                                                <dt className="text-sm font-medium text-stone-500">Script</dt>
                                                <dd className="mt-1 text-stone-900">{detail.script}</dd>
                                            </div>
                                        )}
                                        {detail.materials && (
                                            <div className="border-b border-stone-100 pb-2">
                                                <dt className="text-sm font-medium text-stone-500">Materials</dt>
                                                <dd className="mt-1 text-stone-900">{detail.materials}</dd>
                                            </div>
                                        )}
                                        {detail.dimensions && (
                                            <div className="border-b border-stone-100 pb-2">
                                                <dt className="text-sm font-medium text-stone-500">Dimensions</dt>
                                                <dd className="mt-1 text-stone-900">{detail.dimensions}</dd>
                                            </div>
                                        )}
                                        {detail.created && (
                                            <div className="border-b border-stone-100 pb-2">
                                                <dt className="text-sm font-medium text-stone-500">Created</dt>
                                                <dd className="mt-1 text-stone-900">{detail.created}</dd>
                                            </div>
                                        )}
                                        {detail.framed !== undefined && (
                                            <div className="border-b border-stone-100 pb-2">
                                                <dt className="text-sm font-medium text-stone-500">Framing</dt>
                                                <dd className="mt-1 text-stone-900">{detail.framed ? 'Framed' : 'Unframed'}</dd>
                                            </div>
                                        )}
                                    </dl>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                       
                        {/* Related Artworks */}
                        {detail.relatedPieces && detail.relatedPieces.length > 0 && (
                            <div className="mt-12 pt-6 border-t border-stone-200">
                                <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-6">You May Also Like</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {detail.relatedPieces.map((piece, index) => (
                                        <a 
                                            key={index}
                                            href={`/collection/${piece.id}`}
                                            className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                        >
                                            <div className="aspect-w-1 aspect-h-1 bg-stone-100">
                                                <img 
                                                    src={piece.thumbnailUrl} 
                                                    alt={piece.title} 
                                                    className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-medium text-stone-900 truncate group-hover:text-primary transition-colors duration-300">{piece.title}</h3>
                                                {piece.price && (
                                                    <p className="mt-1 font-semibold text-stone-800">₹{piece.price}</p>
                                                )}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
                        <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <h2 className="text-xl font-bold text-center text-stone-800 mb-2">Artwork Not Found</h2>
                        <p className="text-stone-600 text-center mb-4">We couldn't find the requested calligraphy piece. It may have been moved or removed.</p>
                        <div className="flex justify-center">
                            <a 
                                href="/collections" 
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
                            >
                                Browse Collections
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default CollectionDetail;