import { useEffect } from "react";
import { trackPageView } from "../../utils/analytics.js";
import { SEO } from "../../utils/seo.jsx";
import HeroSection from "./components/HeroSection.jsx";
import PopularPicks from "./components/PopularPicks.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import OurProcess from "./components/OurProcess.jsx";
import CategoriesSpotlight from "./components/CategoriesSpotlight.jsx";
import Testimonials from "./components/Testimonials.jsx";
import BlogTeaser from "./components/BlogTeaser.jsx";
import FAQs from "./components/FAQs.jsx";
import SocialProof from "./components/SocialProof.jsx";
import CallToAction from "./components/CallToAction.jsx";
import TeamBios from "./components/TeamBios.jsx";
import GiftIdeas from "./components/GiftIdeas.jsx";
import PressMentions from "./components/PressMentions.jsx";
import NewsletterSignup from "./components/NewsletterSignup.jsx";

function Home() {
    useEffect(() => {
        trackPageView("/");
    }, []);

    return (
        <section className="py-8 px-4 max-w-7xl mx-auto">
            <SEO
                title="Calligraphy Frames - Handcrafted Art"
                description="Explore our handcrafted calligraphy frames, custom orders, and more."
            />
            <HeroSection />
            <PopularPicks />
            <NewArrivals />
            <WhyChooseUs />
            {/* <OurProcess /> */}
            <CategoriesSpotlight />
            <Testimonials />
            {/* <BlogTeaser /> */}
            <FAQs />
            {/* <SocialProof /> */}
            {/* <TeamBios /> */}
            <GiftIdeas />
            {/* <PressMentions /> */}
            <NewsletterSignup />
            <CallToAction />
        </section>
    );
}

export default Home;