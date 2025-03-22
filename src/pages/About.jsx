import { SEO } from "../utils/seo.jsx";
import AnimateDiv from "../components/Animation.jsx"; // Assuming AnimateDiv is in a separate file

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <SEO title="About Us" description="Learn more about Calligraphy Frames and our passion for artistry." />
            
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Decorative header with subtle calligraphy motif */}
                <AnimateDiv type="parallax" className="relative mb-12">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-6 bg-gradient-to-b from-white to-gray-50 text-primary italic font-serif">
                            est. 2023
                        </span>
                    </div>
                </AnimateDiv>
                
                <AnimateDiv type="parallax" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-8 text-center tracking-tight">
                    About <span className="italic font-serif">Us</span>
                </AnimateDiv>
                
                {/* Premium introduction with subtle animation */}
                <AnimateDiv type="parallax" className="max-w-3xl mx-auto mb-16 text-center">
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 transform transition duration-500 hover:scale-102">
                        At Calligraphy Frames, we blend timeless artistry with modern craftsmanship to create unique pieces that
                        celebrate life's moments. Our journey began with a love for calligraphy and a vision to preserve it in
                        beautifully framed designs.
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-70"></div>
                </AnimateDiv>
                
                {/* Main content with refined layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left column with image */}
                    <AnimateDiv type="pop" className="rounded-2xl overflow-hidden shadow-xl transform transition duration-500 hover:shadow-2xl h-full">
                        <div className="bg-gray-200 h-full">
                            {/* Placeholder for actual image */}
                            <div className="flex items-center justify-center h-full py-24 px-8 bg-primary/5">
                                <svg className="w-24 h-24 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path d="M12 19l9-5-9-5-9 5 9 5z"></path>
                                </svg>
                            </div>
                        </div>
                    </AnimateDiv>
                    
                    {/* Right column with text content */}
                    <AnimateDiv type="parallax" className="space-y-8 flex flex-col justify-center">
                        <p className="text-gray-600 leading-relaxed">
                            Each frame is handcrafted with care, using high-quality materials to ensure durability and elegance.
                            Whether it's a wedding gift, a motivational quote, or a custom creation, we're dedicated to making every
                            piece a work of art.
                        </p>
                        
                        <blockquote className="pl-4 border-l-4 border-primary italic text-gray-700">
                            "Calligraphy is not just writing, but painting with words."
                        </blockquote>
                        
                        <p className="text-gray-600 leading-relaxed">
                            Our artisans bring years of expertise to each piece, combining traditional techniques with contemporary design sensibilities.
                            The result is a collection that honors the rich history of calligraphy while embracing modern aesthetics.
                        </p>
                    </AnimateDiv>
                </div>
                
                {/* Mission and team section with cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimateDiv 
                        type="bounce" 
                        delay={100} 
                        className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To inspire and connect people through the art of calligraphy, delivering exceptional quality and
                            personalized experiences. We believe in preserving tradition while embracing innovation, creating pieces that resonate with
                            the heart and captivate the eye.
                        </p>
                    </AnimateDiv>
                    
                    <AnimateDiv 
                        type="bounce" 
                        delay={200} 
                        className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-primary mb-4">Our Team</h2>
                        <p className="text-gray-600 leading-relaxed">
                            A passionate group of artists and designers committed to excellence, bringing creativity to every
                            frame we craft. Our diverse team combines traditional calligraphic expertise with contemporary design sensibilities,
                            ensuring each piece is both authentic and relevant.
                        </p>
                    </AnimateDiv>
                </div>
                
                {/* CTA section */}
                <AnimateDiv type="pop" delay={300} className="mt-16 text-center">
                    <button className="px-8 py-3 bg-primary text-white rounded-full font-medium transition-all duration-300 hover:bg-indigo-700 transform hover:scale-105 shadow-md hover:shadow-lg bg-indigo-600">
                        Connect With Us
                    </button>
                </AnimateDiv>
            </section>
            
            {/* Decorative footer divider */}
            <AnimateDiv type="spin" className="max-w-7xl mx-auto px-4 py-8">
                <div className="w-full border-t border-gray-200"></div>
            </AnimateDiv>
        </div>
    );
}

export default About;