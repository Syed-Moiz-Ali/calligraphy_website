import { useState, useEffect } from "react";
import { submitContactForm } from "../api/contact.js";
import { trackPageView, trackEvent } from "../utils/analytics.js";
import { SEO } from "../utils/seo.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import AnimateDiv from "../components/Animation.jsx";

function CustomOrder() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        occasion: "",
        style: "",
        text: "",
        additionalDetails: "",
    });
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        trackPageView("/custom-order");
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.text.trim()) newErrors.text = "Text for the frame is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setStatus("Sending...");
        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: `Custom Order Request:
                    Occasion: ${formData.occasion || "N/A"}
                    Style: ${formData.style || "N/A"}
                    Text: ${formData.text}
                    Additional Details: ${formData.additionalDetails || "N/A"}`,
            };
            await submitContactForm(payload);
            setStatus("Request submitted successfully! We'll get back to you soon.");
            trackEvent("CustomOrder", "Submit", "Success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                occasion: "",
                style: "",
                text: "",
                additionalDetails: "",
            });
        } catch (err) {
            setStatus("Failed to submit request. Please try again later.");
            trackEvent("CustomOrder", "Submit", "Error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ErrorBoundary>
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <SEO
                    title="Custom Order - Calligraphy Frames"
                    description="Request a custom calligraphy frame tailored to your needs."
                />
                
                <div className="max-w-4xl mx-auto">
                    {/* Decorative header element */}
                    <AnimateDiv type="parallax" className="relative mb-12">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-4 bg-gradient-to-b from-white to-gray-50 text-primary italic font-serif">
                                Bespoke creations
                            </span>
                        </div>
                    </AnimateDiv>
                    
                    <AnimateDiv type="parallax" className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-center tracking-tight">
                        Custom <span className="italic font-serif">Order</span>
                    </AnimateDiv>
                    
                    <AnimateDiv type="parallax" className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
                        Let us create a unique calligraphy frame tailored precisely to your vision. 
                        Share your ideas below, and our artisans will bring them to life with meticulous craftsmanship.
                    </AnimateDiv>

                    {/* Main content with form and info panels */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Left side info panel */}
                            <AnimateDiv type="parallax" className="bg-primary text-white p-8 lg:p-12">
                                <h2 className="text-2xl font-semibold mb-6">Why Choose Custom?</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-medium mb-1">Personalized Design</h3>
                                            <p className="text-white/80 text-sm">Tailor every aspect to your preferences and style</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-medium mb-1">Artisan Craftsmanship</h3>
                                            <p className="text-white/80 text-sm">Handcrafted by our skilled calligraphy artists</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-4">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-medium mb-1">Timely Delivery</h3>
                                            <p className="text-white/80 text-sm">Typically ready within 2-3 weeks of approval</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-12 pt-8 border-t border-white/20">
                                    <span className="text-sm font-medium text-white/70">Questions?</span>
                                    <p className="text-white mt-1">Contact our design team at</p>
                                    <a href="mailto:design@calligraphyframes.com" className="text-white underline hover:text-white/80 transition-colors">
                                        design@calligraphyframes.com
                                    </a>
                                </div>
                            </AnimateDiv>
                            
                            {/* Right side form */}
                            <AnimateDiv type="bounce" className="col-span-2 p-8 lg:p-12">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tell Us Your Vision</h2>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all`}
                                                placeholder="John Smith"
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all`}
                                                placeholder="you@example.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                                            placeholder="(123) 456-7890"
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">Occasion</label>
                                            <select
                                                id="occasion"
                                                name="occasion"
                                                value={formData.occasion}
                                                onChange={handleChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white transition-all"
                                            >
                                                <option value="">Select Occasion</option>
                                                <option value="wedding">Wedding</option>
                                                <option value="birthday">Birthday</option>
                                                <option value="anniversary">Anniversary</option>
                                                <option value="baby">Baby Shower/Birth</option>
                                                <option value="graduation">Graduation</option>
                                                <option value="housewarming">Housewarming</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-1">Preferred Style</label>
                                            <select
                                                id="style"
                                                name="style"
                                                value={formData.style}
                                                onChange={handleChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white transition-all"
                                            >
                                                <option value="">Select Style</option>
                                                <option value="modern">Modern</option>
                                                <option value="traditional">Traditional</option>
                                                <option value="minimalist">Minimalist</option>
                                                <option value="ornate">Ornate/Decorative</option>
                                                <option value="rustic">Rustic</option>
                                                <option value="elegant">Elegant</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">Desired Text</label>
                                        <textarea
                                            id="text"
                                            name="text"
                                            value={formData.text}
                                            onChange={handleChange}
                                            className={`w-full p-3 border ${errors.text ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all`}
                                            rows="3"
                                            placeholder="Enter the quote, name, or message you'd like on your frame"
                                        />
                                        {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text}</p>}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                                        <textarea
                                            id="additionalDetails"
                                            name="additionalDetails"
                                            value={formData.additionalDetails}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                                            rows="4"
                                            placeholder="Share any additional preferences, color schemes, size requirements, or special requests"
                                        />
                                    </div>
                                    
                                    <AnimateDiv type="pop" className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Submitting...
                                                </span>
                                            ) : (
                                                "Submit Custom Order Request"
                                            )}
                                        </button>

                                        {status && (
                                            <div className={`mt-4 p-3 rounded-lg ${status.includes("Failed") ? "bg-red-50 text-red-800" : "bg-green-50 text-green-800"}`}>
                                                <p className="flex items-center">
                                                    {status.includes("Failed") ? (
                                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                    {status}
                                                </p>
                                            </div>
                                        )}
                                    </AnimateDiv>
                                </form>
                            </AnimateDiv>
                        </div>
                    </div>
                    
                    {/* Testimonial section */}
                    <AnimateDiv type="spin" delay={200} className="mt-16 text-center">
                        <blockquote className="italic text-lg text-gray-600 max-w-3xl mx-auto">
                            "The custom frame we ordered exceeded all expectations. The attention to detail and quality of craftsmanship was remarkable. It's now the centerpiece of our living room."
                            <footer className="mt-4 text-sm font-medium text-gray-500">— Sarah T., Happy Customer</footer>
                        </blockquote>
                    </AnimateDiv>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default CustomOrder;