import { Link } from "react-router-dom";
import AnimateDiv from "../../../components/Animation.jsx";
import { useState, useEffect } from "react";

function HeroSection() {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Decorative background elements */}
            {/* <div className="absolute -top-24 -right-24 w-64 h-64 bg-black-600/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-auto-600/10 rounded-full blur-xl"></div> */}
            {/* <img src="https://png.pngtree.com/background/20250110/original/pngtree-arabic-calligraphy-wallpaper-on-a-white-wall-with-a-black-interlocking-picture-image_15512887.jpg" alt="" srcset="" className="absolute" /> */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-20 rounded-xl"
                style={{
                    backgroundImage: "url('https://png.pngtree.com/background/20250110/original/pngtree-arabic-calligraphy-wallpaper-on-a-white-wall-with-a-black-interlocking-picture-image_15512887.jpg')" 
                }}
            ></div>
            
            <AnimateDiv 
                type="parallax" 
                className="relative z-10 px-6 py-20 md:py-28 lg:py-32  dark:from-gray-900 dark:to-gray-950 rounded-xl  mx-4 sm:mx-8 md:mx-12 lg:mx-auto max-w-7xl mb-12 "
            >
                <div className="max-w-4xl mx-auto">
                    <AnimateDiv type="fade" delay={100} className="mb-6">
                        <span className="inline-block px-4 py-1 text-xs font-medium tracking-wider text-primary dark:text-primary-light uppercase bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full mb-4 transform transition-transform duration-300 hover:scale-105 ">
                            Premium Handcrafted Designs
                        </span>
                    </AnimateDiv>
                    
                    <AnimateDiv type="fade" delay={200} className="mb-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight italic font-serif">
                            <span className="text-primary dark:text-primary-light text-indigo-600">Togra Frames</span> India
                        </h1>
                    </AnimateDiv>
                    
                    <AnimateDiv type="fade" delay={400}>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                            Exquisite handcrafted calligraphy frames for weddings, gifts, and home decor, 
                            designed with timeless Indian artistry and contemporary elegance.
                        </p>
                    </AnimateDiv>
                    
                    <AnimateDiv type="fade" delay={600} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/collections"
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-indigo-600  text-primary  font-medium py-3 px-8 rounded-lg border border-gray-200  transition-all duration-300 ease-in-out hover:text-white  focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        >
                            <span>Explore Collection</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        
                        <Link
                            to="/custom-designs"
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-gray-800 text-primary dark:text-primary-light font-medium py-3 px-8 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
                        >
                            <span>Custom Designs</span>
                        </Link>
                    </AnimateDiv>
                    
                    <AnimateDiv type="fade" delay={800} className="mt-12">
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Handcrafted</span>
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" />
                                </svg>
                                <span className="text-sm">Premium Quality</span>
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.038A2.968 2.968 0 0115 12.506V16a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0013 7h-2v-1a1 1 0 00-1-1H8v2H3V5a1 1 0 011-1h3a1 1 0 010 2H4v3h4V4z" />
                                </svg>
                                <span className="text-sm">Free Shipping</span>
                            </div>
                        </div>
                    </AnimateDiv>
                </div>
            </AnimateDiv>
        </div>
    );
}

export default HeroSection;