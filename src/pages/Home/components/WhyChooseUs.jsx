import AnimateDiv from "../../../components/Animation";

function WhyChooseUs() {
    const features = [
        {
            id: 1,
            title: "Artisan Craftsmanship",
            description: "Every frame is handcrafted with precision and passion by skilled artisans, ensuring unique quality in each piece.",
            icon: "🖌️"
        },
        {
            id: 2,
            title: "Personalized Options",
            description: "Customize your frame with unique text, calligraphy styles, and design elements to create a truly personal keepsake.",
            icon: "🎨"
        },
        {
            id: 3,
            title: "Eco-Friendly Materials",
            description: "We use sustainable, ethically-sourced materials for our frames, ensuring lasting beauty with minimal environmental impact.",
            icon: "🌱"
        }
    ];

    return (
        <section id="why-choose-section" className="relative py-20 mb-20 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <AnimateDiv type="parallax">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-primary/80 uppercase bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full mb-3">
                            Our Commitment
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                            Why Choose <span className="italic font-serif text-indigo-600">Togra Frames ?</span>
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                            We combine traditional Indian calligraphy artistry with modern design sensibilities to create pieces that truly stand out.
                        </p>
                    </div>
                </AnimateDiv>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <AnimateDiv key={feature.id} delay={index * 150} type="pop">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600/10 text-primary mb-6 text-3xl">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                                </div>
                            </div>
                        </AnimateDiv>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
