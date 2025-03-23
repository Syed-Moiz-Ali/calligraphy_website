import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimateDiv from "./Animation";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu and scroll to top
    const closeMenuAndScrollToTop = () => {
        setIsMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling for a better user experience
        });
    };

    return (
        <header 
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled 
                    ? "bg-parchment/95 backdrop-blur-sm shadow-elegant py-2" 
                    : "bg-parchment py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="relative flex justify-between items-center">
                    {/* Logo */}
                    <AnimateDiv type="parallax" className="flex items-center">
                        <NavLink 
                            to="/" 
                            className="flex items-center space-x-2 text-primary transition-colors hover:text-accent"
                            onClick={closeMenuAndScrollToTop} // Updated to scroll to top
                        >
                            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="flex flex-col">
                                <span className="text-xl font-serif font-bold tracking-wide">Calligraphy Frames</span>
                                <span className="text-xs tracking-widest text-accent font-light hidden sm:block">FINE ART & CUSTOM DESIGNS</span>
                            </div>
                        </NavLink>
                    </AnimateDiv>

                    {/* Desktop Navigation */}
                    <AnimateDiv type="bounce" className="hidden md:flex space-x-6 lg:space-x-8">
                        <ul className="flex space-x-6 lg:space-x-8">
                            {['Home', 'Collections', 'About', 'Custom Order', 'Contact'].map((item) => (
                                <li key={item} className="relative">
                                    <NavLink 
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className={({ isActive }) => `
                                            relative block text-sm uppercase tracking-wider font-medium py-2 px-1
                                            transition-all duration-300 overflow-hidden
                                            ${isActive 
                                                ? 'text-accent' 
                                                : 'text-primary hover:text-accent'
                                            }
                                        `}
                                        onClick={closeMenuAndScrollToTop} // Updated to scroll to top
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <span className="relative z-10">{item}</span>
                                                <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-accent transition-transform duration-300 ease-out ${
                                                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                                }`}></span>
                                                <span className={`absolute left-0 right-0 bottom-1.5 h-0.5 bg-accent/40 transition-transform duration-500 ease-out ${
                                                    isActive ? 'scale-x-75' : 'scale-x-0 group-hover:scale-x-75'
                                                }`}></span>
                                                <span className={`absolute inset-0 bg-accent/5 rounded transition-opacity duration-300 ${
                                                    isActive ? 'opacity-100' : 'opacity-0'
                                                }`}></span>
                                                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-accent rounded-r transition-opacity duration-300 ${
                                                    isActive ? 'opacity-100' : 'opacity-0'
                                                }`}></span>
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </AnimateDiv>

                    {/* Shopping cart icon and Mobile menu button */}
                    <AnimateDiv type="pop" className="flex items-center">
                        {/* Uncomment if you want to use the cart icon */}
                        {/* <button className="p-2 text-primary hover:text-accent transition-colors relative">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
                        </button> */}

                        <button 
                            className="ml-2 md:hidden p-2 rounded-md text-primary hover:text-accent transition-colors"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </AnimateDiv>
                </nav>
            </div>

            {/* Mobile menu */}
            <AnimateDiv 
                type="spin" 
                className={`md:hidden absolute top-full left-0 right-0 bg-parchment-light shadow-elegant transform transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="px-4 py-2 space-y-1 border-t border-accent/10 bg-white">
                    {['Home', 'Collections', 'About', 'Custom Order', 'Contact'].map((item) => (
                        <NavLink 
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className={({ isActive }) => `
                                relative block py-3 px-4 text-sm font-medium
                                transition-all duration-200
                                ${isActive 
                                    ? 'text-accent border-b-2 border-indigo-600 rounded pl-5' 
                                    : 'text-primary hover:text-accent border-l-2 border-transparent hover:border-accent/50 hover:pl-5'
                                }
                            `}
                            onClick={closeMenuAndScrollToTop} // Updated to scroll to top
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>
            </AnimateDiv>
        </header>
    );
}

export default Header;