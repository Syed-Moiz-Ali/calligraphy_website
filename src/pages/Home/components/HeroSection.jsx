import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import AnimateDiv from "../../../components/Animation";
import { motion, AnimatePresence } from "framer-motion";


function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  // Mount effect
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate highlights with smoother timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { 
      text: "Artisan Crafted", 
      icon: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
      description: "Hand-made by master calligraphers" 
    },
    { 
      text: "Unique Designs", 
      icon: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
      description: "One-of-a-kind artistic expressions" 
    },
    { 
      text: "Extensive Catalog", 
      icon: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2-1h8a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z",
      description: "Over 200+ style variations" 
    },
    { 
      text: "Premium Materials", 
      icon: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
      description: "Finest natural ink and paper" 
    }
  ];

  // Calligraphy styles data
  const calligraphyStyles = [
    { name: "Arabic", class: "font-arabic", description: "Classic flowing script" },
    { name: "Devanagari", class: "font-devanagari", description: "Elegant Sanskrit lettering" },
    { name: "Modern", class: "font-modern", description: "Contemporary interpretations" },
    { name: "Urdu", class: "font-urdu", description: "Poetic Nastaliq style" }
  ];

 

  return (
    <section 
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 via-white to-indigo-50/30 py-16 sm:py-20 lg:py-24"
    >
      {/* Premium background with layered elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1596662977545-a466113ee62c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" 
          }}
        ></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="arabic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M20,0 L40,0 L60,20 L60,40 L40,60 L20,60 L0,40 L0,20 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#arabic-pattern)" className="text-indigo-900"/>
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-white/70 to-white/80"></div>
      </div>
      
      {/* Decorative elements with enhanced design */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-rose-100/20 blur-2xl"></div>
      
      {/* Subtle animated accent */}
      <div className="absolute top-1/3 right-1/3 h-32 w-32 rounded-full bg-amber-100/30 blur-xl">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="h-full w-full rounded-full bg-amber-200/20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateDiv
          type="parallax" 
          className="relative overflow-hidden rounded-3xl backdrop-blur-sm shadow-2xl ring-1 ring-gray-100/60 bg-white/70"
        >
          <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              {/* Premium badge with enhanced animation */}
              <AnimateDiv type="fade" delay={100} className="mb-8">
                <span className="group inline-flex items-center rounded-full bg-gradient-to-r from-indigo-50 to-indigo-100 px-5 py-2 text-xs font-medium tracking-wide text-indigo-700 ring-1 ring-inset ring-indigo-700/20 transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-indigo-100/60">
                  <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-500 group-hover:animate-pulse"></span>
                  <span className="mr-1 text-indigo-500">•</span> Curated Calligraphy Collections <span className="ml-1 text-indigo-500">•</span>
                </span>
              </AnimateDiv>
              
              {/* Enhanced heading with improved typography */}
              <AnimateDiv type="fade" delay={200} className="mb-8">
                <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="relative block italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500">
                    Togra Frames
                    <svg className="absolute -bottom-1 left-0 h-3 w-full text-indigo-200" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 5C32.5 -1 62.5 -0.5 99.5 4.5C138.338 9.80363 174.141 8.33598 199 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="mt-1 block text-3xl font-medium sm:text-4xl md:mt-3">
                    <span className="text-gray-900">India</span>
                    <span className="text-indigo-400"> • </span>
                    <span className="text-gray-500 text-2xl sm:text-3xl">est. 1998</span>
                  </span>
                </h1>
              </AnimateDiv>
              
              {/* Description with enhanced readability */}
              <AnimateDiv type="fade" delay={400}>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl">
                  Discover exquisite calligraphy frames blending timeless Indian artistry with modern elegance, 
                  perfect for <span className="italic text-indigo-700">weddings</span>, <span className="italic text-indigo-700">gifts</span>, and <span className="italic text-indigo-700">home decor</span>.
                </p>
              </AnimateDiv>
              
              {/* CTA Buttons with enhanced interactivity */}
              <AnimateDiv type="fade" delay={600} className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
                <Link
                  to="/collections"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-10 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:shadow-indigo-200/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Collection
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100"></div>
                </Link>
                
                <Link
                  to="/custom-designs"
                  className="group w-full rounded-xl border-2 border-gray-300 bg-white/80 px-8 py-4 text-lg font-medium text-gray-700 shadow-md transition-all duration-300 ease-in-out hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    Custom Designs
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-all duration-300 group-hover:rotate-45" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.6 13.47A4.99 4.99 0 015 10a5 5 0 0110 0 4.99 4.99 0 01-1.4 3.47m-1.94 1.94A4.99 4.99 0 0110 15a5 5 0 010-10 5 5 0 013.54 8.53M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-2 0a8 8 0 10-16 0 8 8 0 0016 0zm-8 2a2 2 0 110-4 2 2 0 010 4z"/>
                    </svg>
                  </span>
                </Link>
              </AnimateDiv>
              
              {/* Rotating Highlights with enhanced visual presentation */}
              <AnimateDiv type="fade" delay={800} className="mt-16">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-500 ease-in-out ${
                        currentHighlight === index 
                          ? "bg-gradient-to-br from-indigo-50 to-indigo-100/60 ring-1 ring-indigo-200 shadow-md" 
                          : "bg-white/40 hover:bg-indigo-50/40"
                      }`}
                    >
                      <AnimatePresence>
                        {currentHighlight === index && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-indigo-100/30 opacity-80"
                          />
                        )}
                      </AnimatePresence>
                      
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
                          currentHighlight === index 
                            ? "bg-indigo-100 text-indigo-600" 
                            : "bg-gray-100 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-500"
                        }`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d={highlight.icon} clipRule={index === 0 ? "evenodd" : undefined} />
                          </svg>
                        </div>
                        
                        <h3 className={`mb-2 text-base font-semibold transition-all duration-300 sm:text-lg ${
                          currentHighlight === index ? "text-indigo-700" : "text-gray-700 group-hover:text-indigo-600"
                        }`}>
                          {highlight.text}
                        </h3>
                        
                        <p className={`text-sm transition-all duration-300 ${
                          currentHighlight === index ? "text-indigo-600" : "text-gray-500 group-hover:text-indigo-500"
                        }`}>
                          {highlight.description}
                        </p>
                        
                        {currentHighlight === index && (
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "40%" }}
                            exit={{ width: 0 }}
                            className="mt-4 h-1 rounded-full bg-indigo-300"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateDiv>

              {/* Calligraphy Style Preview with enhanced visuals */}
              <AnimateDiv type="fade" delay={1000} className="mt-16">
                <h3 className="mb-6 text-xl font-medium text-gray-900">Preview Our Styles</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-6">
                  {calligraphyStyles.map((style, index) => (
                    <div 
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/40"
                    >
                      <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-indigo-200"></div>
                      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-indigo-100 opacity-0 transition-all duration-500 group-hover:opacity-70"></div>
                      
                      <div className="relative flex h-full w-full flex-col items-center justify-center">
                        <span className={`mb-3 font-serif text-xl text-indigo-600 transition-all duration-300 group-hover:scale-110 ${style.class}`}>
                          {style.name}
                        </span>
                        <p className="text-xs text-gray-500 opacity-80 transition-all duration-300 group-hover:text-indigo-500">
                          {style.description}
                        </p>
                        <div className="mt-3 h-1 w-8 rounded-full bg-indigo-200 transition-all duration-500 group-hover:w-12 group-hover:bg-indigo-400"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateDiv>
              
             
              
              
              
            </div>
          </div>
        </AnimateDiv>
        
        {/* Enhanced scroll indicator with animation */}
        
      </div>
    </section>
  );
}

export default HeroSection;