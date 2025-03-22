import { useState } from "react";
import AnimateDiv from "../../../components/Animation";

function FAQs() {
    const [openItem, setOpenItem] = useState(null);

    const faqs = [
        {
            question: "How long does it take to complete a custom calligraphy piece?",
            answer: "Most custom calligraphy pieces are completed within 2-3 weeks. Complex works or large commissions may require 4-6 weeks. We'll provide you with a specific timeline during our initial consultation based on your project requirements and current workload."
        },
        {
            question: "Can I request a custom size?",
            answer: "Yes! We specialize in custom work. Please contact us via the custom order form with your specific requirements, and our calligraphers will work with you to create a piece that fits your exact specifications."
        },
        {
            question: "What materials do you use?",
            answer: "We use only premium materials including handmade cotton paper, archival-quality inks, sustainably-sourced hardwood frames, and museum-grade glass. All our materials are selected to preserve your calligraphy pieces for generations."
        },
        {
            question: "Do you offer calligraphy workshops?",
            answer: "Yes, we host both in-person and virtual calligraphy workshops for beginners and advanced practitioners. Check our Events page for upcoming sessions or contact us for private instruction options."
        },
        {
            question: "How do I care for my calligraphy piece?",
            answer: "To preserve your calligraphy, display it away from direct sunlight and areas of high humidity. Dust frames gently with a soft, dry cloth. For unframed pieces, handle with clean hands and store flat in acid-free environments."
        },
        {
            question: "What calligraphy styles do you specialize in?",
            answer: "Our studio specializes in a diverse range of calligraphy traditions including Arabic (Diwani, Thuluth, Naskh), Persian (Nastaliq), East Asian (Chinese, Japanese), and Western styles (Copperplate, Spencerian, Modern). Each calligrapher has their own area of expertise, allowing us to accommodate various stylistic preferences."
        },
        {
            question: "Can you incorporate calligraphy into non-paper materials?",
            answer: "Yes, we work with various surfaces beyond paper. We can create calligraphy for wood, fabric, ceramic, glass, and metal surfaces. Each material requires specific techniques and inks, which we've mastered over years of specialized practice."
        },
        {
            question: "Do you offer digital files of your calligraphy work?",
            answer: "Yes, we can provide high-resolution digital scans of completed calligraphy pieces. These are perfect for printing reproductions or for use in digital media. For commissioned works, digital files can be included for an additional fee."
        },
        {
            question: "How should I prepare text for a calligraphy commission?",
            answer: "Please provide the exact text you'd like rendered, including any specific spelling, punctuation, or diacritical marks. For languages other than English, we recommend providing both the original text and a transliteration. Our team can assist with proper formatting and layout suggestions during consultation."
        },
        {
            question: "Can I visit your studio to see works in progress?",
            answer: "We welcome studio visits by appointment. Seeing calligraphy being created offers valuable insight into the process and craft. Please contact us to arrange a visit, and we'll be happy to show you current works and discuss techniques."
        }
    ];

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 bg-parchment-light rounded-lg shadow-elegant">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center italic font-serif">Frequently Asked Questions</h2>
            <p className="text-center text-accent mb-12 italic">Everything you need to know about our calligraphy services</p>
            
            <div className="divide-y divide-accent/20">
                {faqs.map((faq, index) => (
                    <AnimateDiv key={index} type="parallax" delay={index * 100}>
                        <div className="py-5">
                            <button
                                onClick={() => toggleItem(index)}
                                className="flex justify-between items-center w-full text-left focus:outline-none group"
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                                    {faq.question}
                                </h3>
                                <span className={`ml-6 flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-primary group-hover:bg-accent group-hover:text-white transition-all duration-200 ${openItem === index ? 'rotate-180' : ''}`}>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div 
                                className={`mt-3 transition-all duration-300 overflow-hidden ${
                                    openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-600 leading-relaxed pl-0 sm:pl-6 pr-6 border-l-0 sm:border-l-2 border-accent/20">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </AnimateDiv>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <p className="text-accent mb-4">Still have questions?</p>
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent bg-transparent hover:bg-indigo-600 hover:text-white rounded-md transition-colors duration-200">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact Us
                </a>
            </div>
        </div>
    );
}

export default FAQs;