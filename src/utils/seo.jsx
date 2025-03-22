import { Helmet } from "react-helmet";

export const SEO = ({
    title,
    description,
    canonicalUrl,
    image = "https://via.placeholder.com/1200x630?text=Togra+Calligraphy+Frames", // Default OG image
    type = "website",
    pageUrl,
}) => {
    // Base URL (replace with your live domain)
    const baseUrl = "https://tograframes.in"; // .in TLD with Togra focus
    const fullUrl = pageUrl || `${baseUrl}${window.location.pathname}`;
    const fullTitle = `${title} | Togra Frames India`;

    // Mega Keyword List (Togra Frame as the star, India-focused)
    const keywords = [
        "togra frame India", "togra calligraphy frames", "togra frame online India", "togra frames shop",
        "custom togra frame India", "togra frame wedding", "togra frame gifts India", "togra frame decor",
        "togra calligraphy art", "togra frame Mumbai", "togra frame Delhi", "togra frame Bangalore",
        "togra frame Chennai", "togra frame Hyderabad", "togra frame price India", "togra frame near me",
        "best togra frame India", "togra frame store India", "togra frame designs", "togra frame handmade",
        "togra frame personalized", "togra frame quotes", "togra frame home decor", "togra frame artisan",
        "togra frame eco-friendly", "togra frame luxury", "togra frame bespoke", "togra frame online shop",
        "calligraphy frames India", "handcrafted calligraphy India", "custom calligraphy frames India",
        "calligraphy art online India", "wedding calligraphy frames", "Indian wedding frames togra",
        "quotes frames togra India", "motivational quotes togra frame", "home decor togra frames",
        "personalized togra gifts", "birthday gifts togra frame", "anniversary togra frames India",
        "family name togra art", "minimalist togra frames", "modern togra calligraphy India",
        "traditional togra calligraphy", "togra frame sustainable art", "togra frame shop near me",
        "togra calligraphy wall art", "togra frame prints India", "togra frame custom designs",
        "buy togra frames online India", "togra frame affordable India", "togra frame store online",
        "togra frame calligraphy artwork", "togra frame unique gifts", "togra frame wedding vows",
        "togra frame Diwali gifts", "togra frame Rakhi gifts", "togra frame Indian festivals",
        "calligraphy frames India", "handcrafted calligraphy India", "custom calligraphy frames online",
        "calligraphy art India", "personalized frames online India", "wedding calligraphy frames India",
        "Indian wedding frames", "wedding gifts India", "wedding decor frames", "quotes frames India",
        "motivational quotes art India", "inspirational frames online", "home decor frames India",
        "custom home decor India", "artisan frames India", "handmade frames online", "unique gifts India",
        "personalized gifts India", "birthday gifts frames", "anniversary frames India", "family name art India",
        "minimalist frames India", "modern calligraphy India", "traditional calligraphy India",
        "eco-friendly frames India", "sustainable art India", "calligraphy shop India", "online frame store India",
        "custom art shop India", "calligraphy designs India", "framed calligraphy prints India",
        "calligraphy wall art India", "luxury frames India", "bespoke frames India", "handwritten frames India",
        "calligraphy store India", "art frames online India", "decorative frames India", "calligraphy gifts India",
        "custom wedding vows frame India", "quote wall decor India", "handcrafted gift shop India",
        "calligraphy artwork India", "personalized wall art India", "frame art prints India",
        "calligraphy home accents India", "unique home decor India", "custom frame designs India",
        "calligraphy for sale India", "artisan gifts India", "calligraphy frames near me India",
        "best calligraphy frames India", "top calligraphy shop India", "calligraphy frames online India",
        "handmade calligraphy art India", "custom frame store India", "buy calligraphy frames online",
        "calligraphy frames Mumbai", "calligraphy frames Delhi", "calligraphy frames Bangalore",
        "calligraphy frames Chennai", "calligraphy frames Hyderabad", "Indian handmade frames",
        "calligraphy frames price India", "affordable calligraphy frames India", "calligraphy frames shop near me",
    ].join(", ");

    // Structured Data (JSON-LD) - Togra Frame Focus
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                name: "Togra Frames India",
                url: baseUrl,
                description: "Explore Togra Frames - Handcrafted calligraphy frames for weddings, gifts, and home decor in India.",
                potentialAction: {
                    "@type": "SearchAction",
                    target: `${baseUrl}/collections?search={search_term_string}`,
                    "query-input": "required name=search_term_string",
                },
            },
            {
                "@type": "Organization",
                name: "Togra Frames India",
                url: baseUrl,
                logo: `${baseUrl}/logo.png`,
                sameAs: [
                    "https://facebook.com/tograframesindia",
                    "https://instagram.com/tograframesindia",
                    "https://twitter.com/tograframesin",
                    "https://pinterest.com/tograframesindia",
                ],
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-98765-43210", // Example Indian number
                    contactType: "customer service",
                    email: "support@tograframes.in",
                    areaServed: "IN",
                },
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                    addressRegion: "Maharashtra", // Adjust to your location
                    postalCode: "400001", // Example Mumbai code
                    streetAddress: "123 Togra Art Lane, Mumbai",
                },
            },
            {
                "@type": "Product",
                name: fullTitle,
                url: fullUrl,
                image: image,
                description: description,
                brand: {
                    "@type": "Brand",
                    name: "Togra Frames India",
                },
                offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    price: "1499", // Example starting price in INR
                    availability: "https://schema.org/InStock",
                    url: fullUrl,
                },
            },
        ],
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="author" content="Togra Frames India Team" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charset="UTF-8" />
            <meta name="theme-color" content="#ffffff" />

            {/* India-Specific Geo Tags */}
            <meta name="geo.region" content="IN" />
            <meta name="geo.placename" content="India" />
            <meta name="geo.position" content="20.5937;78.9629" /> {/* Center of India */}
            <meta name="ICBM" content="20.5937, 78.9629" />
            <meta httpEquiv="content-language" content="en-in" />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            {!canonicalUrl && <link rel="canonical" href={fullUrl} />}

            {/* Open Graph (OG) */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${title} - Togra Frames India`} />
            <meta property="og:site_name" content="Togra Frames India" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:locale:alternate" content="hi_IN" />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={`${title} - Togra Frames India`} />
            <meta name="twitter:site" content="@TograFramesIN" />
            <meta name="twitter:creator" content="@TograFramesIN" />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

            {/* Favicons and Icons */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

            {/* Preconnect and DNS Prefetch */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://tograframes.in" />
            <link rel="dns-prefetch" href="https://tograframes.in" />

            {/* Additional SEO */}
            <meta name="rating" content="General" />
            <meta name="distribution" content="Global" />
            <meta name="revisit-after" content="7 days" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
        </Helmet>
    );
};