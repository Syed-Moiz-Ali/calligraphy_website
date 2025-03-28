import { Link } from "react-router-dom";
import AnimateDiv from "./Animation";
import { Fragment,useState } from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            // In a real app, you would handle the subscription API call here
        }
    };
    
    return (
        <footer className="bg-primary text-parchment-light relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <div className="absolute top-1 left-0 right-0 h-px bg-gold/20"></div>
            <div className="absolute -left-16 top-16 w-32 h-32 rounded-full bg-gold/5 blur-3xl"></div>
            <div className="absolute -right-16 bottom-16 w-40 h-40 rounded-full bg-gold/5 blur-3xl"></div>
            
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
                    {/* Logo and about section */}
                    <AnimateDiv type="parallax" className="md:col-span-2">
                        <div className="flex items-center mb-6">
                            <svg className="h-9 w-9 text-gold mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-2xl font-serif font-bold tracking-wide bg-gradient-to-r from-gold to-gold-light bg-clip-text ">Calligraphy Frames</span>
                        </div>
                        <p className="text-parchment-dark/80 mb-8 leading-relaxed max-w-md text-base">
                            Crafting exquisite calligraphy art pieces that beautifully preserve your most cherished words, moments, and sentiments in an elegant display of artistry.
                        </p>
                        <div className="flex space-x-5">
                            {/* Social Media Links with enhanced hover effects */}
                            {[
                                { name: "Instagram", url: "https://instagram.com", svg: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
                                { name: "Pinterest", url: "https://pinterest.com", svg: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" },
                                { name: "Twitter", url: "https://twitter.com", svg: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }
                            ].map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label={social.name} 
                                    className="text-parchment hover:text-gold transition-all duration-300 transform hover:scale-110 group"
                                >
                                    <div className="relative">
                                        <span className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        <svg className="h-6 w-6 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d={social.svg} clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </AnimateDiv>
                    
                    {/* Quick links */}
                    <AnimateDiv type="bounce" delay={150} className="space-y-1">
                        <h3 className="text-gold font-serif text-lg font-semibold mb-5 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-gold to-transparent"></span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Collections', path: '/collections' },
                                { name: 'About', path: '/about' },
                                { name: 'Custom Order', path: '/custom-order' },
                                { name: 'Blog', path: '/blog' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link 
                                        to={item.path}
                                        className="text-parchment-dark/80 hover:text-gold transition-all duration-300 inline-block py-1 group"
                                    >
                                        <span className="relative">
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </AnimateDiv>
                    
                    {/* Contact information */}
                    <AnimateDiv type="bounce" delay={300} className="space-y-1">
                        <h3 className="text-gold font-serif text-lg font-semibold mb-5 relative inline-block">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-gold to-transparent"></span>
                        </h3>
                        <ul className="space-y-4 text-parchment-dark/80">
                            {[
                                { 
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                                    content: <a href="mailto:info@calligraphyframes.com" className="hover:text-gold transition-colors duration-200 group">
                                        info@calligraphyframes.com
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gold"></span>
                                    </a>
                                },
                                { 
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                                    content: <span>+1 (555) 123-4567</span>
                                },
                                { 
                                    icon: <>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </>,
                                    content: <span className="leading-relaxed">123 Calligraphy Lane<br />Artisan District, CA 90210</span>
                                }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start group">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-light flex items-center justify-center mr-3 group-hover:bg-gold/20 transition-colors duration-300">
                                        <svg className="h-5 w-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <div className="pt-1">{item.content}</div>
                                </li>
                            ))}
                        </ul>
                    </AnimateDiv>
                </div>
                
                {/* Newsletter subscription */}
                <AnimateDiv type="pop" className="relative">
                    <div className="border-t border-b border-primary-light/20 py-10 my-10">
                        <div className="max-w-md mx-auto text-center">
                            <h3 className="text-gold font-serif text-xl font-semibold mb-3">Join Our Newsletter</h3>
                            <p className="text-parchment-dark/80 mb-6">Subscribe to receive updates on new collections, workshops, and special offers.</p>
                            
                            {subscribed ? (
                                <div className="bg-gold/10 rounded-lg p-4 border border-gold/20">
                                    <p className="text-gold font-medium">Thank you for subscribing!</p>
                                    <p className="text-parchment-dark/80 text-sm mt-1">You'll receive our next newsletter soon.</p>
                                </div>
                            ) : (
                                <form className="flex flex-col sm:flex-row" onSubmit={handleSubscribe}>
                                    <div className="relative flex-grow">
                                        <input 
                                            type="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email address" 
                                            className="w-full px-4 py-3 sm:rounded-l-md rounded-t-md sm:rounded-tr-none bg-primary-light text-parchment placeholder-parchment-dark/50 focus:outline-none focus:ring-2 focus:ring-gold/50 border-l border-t border-r sm:border-r-0 border-b-0 sm:border-b border-primary-light/30 transition-all duration-300"
                                            required
                                        />
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none opacity-0 focus-within:opacity-100">
                                            <span className="text-gold">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="bg-gold hover:bg-gold-dark text-primary font-medium px-6 py-3 sm:rounded-r-md rounded-b-md sm:rounded-bl-none border border-gold hover:border-gold-dark transition-all duration-300 transform hover:translate-y-0 active:translate-y-px shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-gold/5 blur-md"></div>
                    <div className="absolute -right-4 -bottom-4 w-8 h-8 rounded-full bg-gold/5 blur-md"></div>
                </AnimateDiv>
                
                {/* Copyright and policies */}
                <AnimateDiv type="spin" delay={200} className="text-center">
                    <p className="text-parchment-dark/70">© {currentYear} Calligraphy Frames. All rights reserved.</p>
                    <div className="mt-4 space-x-1 sm:space-x-4 flex flex-wrap justify-center">
                        {[
                            { name: "Privacy Policy", path: "/privacy-policy" },
                            { name: "Terms of Service", path: "/terms-of-service" },
                            { name: "Shipping Policy", path: "/shipping-policy" }
                        ].map((item, index) => (
                            <Fragment key={item.name}>
                                <Link 
                                    to={item.path} 
                                    className="text-sm text-parchment-dark/70 hover:text-gold transition-colors duration-200 py-1 px-2"
                                >
                                    {item.name}
                                </Link>
                                {index < 2 && <span className="text-primary-light/30 hidden sm:inline">•</span>}
                            </Fragment>
                        ))}
                    </div>
                </AnimateDiv>
            </div>
        </footer>
    );
}

export default Footer;