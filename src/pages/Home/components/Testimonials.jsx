import { useState } from "react";
import AnimateDiv from "../../../components/Animation";

function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    
    const testimonials = [
        {
            id: 1,
            quote: "The custom frame for my wedding vows was stunning—perfectly captured our special day!",
            author: "Sarah M.",
            location: "New York",
            rating: 5,
            image: "/api/placeholder/80/80"
        },
        {
            id: 2,
            quote: "Fast shipping and amazing quality. My quote frame is now the centerpiece of my living room.",
            author: "James T.",
            location: "Chicago",
            rating: 5,
            image: "/api/placeholder/80/80"
        },
        {
            id: 3,
            quote: "Exceptional craftsmanship! The attention to detail makes these frames worth every penny.",
            author: "Emily R.",
            location: "Los Angeles",
            rating: 5,
            image: "/api/placeholder/80/80"
        },
        {
            id: 4,
            quote: "Ordered a custom design for my parents' anniversary. They were moved to tears when they opened it.",
            author: "Michael K.",
            location: "Boston",
            rating: 5,
            image: "/api/placeholder/80/80"
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <svg 
                key={index}
                className={`w-4 h-4 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="relative overflow-hidden py-16 md:py-24 mb-16">
            <AnimateDiv type="bounce" className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                    What Our <span className="italic font-serif text-indigo-600"> Customer Say</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Don't just take our word for it—see what our happy customers have shared about their experiences.
                </p>
            </AnimateDiv>
            
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {testimonials.map((testimonial, index) => (
                    <AnimateDiv key={testimonial.id} type="parallax" delay={index * 100}>
                        {/* <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl">
                            <div className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-l-xl"></div>
                            <div className="flex items-center space-x-4 mb-4">
                                <img 
                                    src={testimonial.image} 
                                    alt={`${testimonial.author} profile`} 
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 italic">"{testimonial.quote}"</p>
                        </div> */}
                        <div 
                      key={index} 
                      className="relative rounded-xl bg-gradient-to-br from-white/80 to-indigo-50/40 p-6 mx-4 shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="absolute -left-3 -top-3 h-10 w-10 text-indigo-300 opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      <div className="ml-2">
                        <p className="font-serif text-base italic text-gray-700 md:text-lg">"{testimonial.quote}"</p>
                        <div className="mt-4 flex items-center">
                          <div className="h-10 w-10 overflow-hidden rounded-full bg-indigo-100">
                            <div className="h-full w-full bg-gradient-to-br from-indigo-200 to-indigo-300"></div>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-gray-900">{testimonial.author}</h4>
                            <p className="text-xs text-gray-500">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </AnimateDiv>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <AnimateDiv type="pop" delay={200}>
                    <a 
                        href="/reviews"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                    >
                        Read More Reviews
                    </a>
                </AnimateDiv>
            </div>
        </section>
    );
}

export default Testimonials;