import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://shivminerals.com';
const SITE_NAME = 'Shiv Mines and Minerals';
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-quarry.jpg`;

interface SEOHeadProps {
    title: string;
    description: string;
    canonical?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    schemaMarkup?: Record<string, unknown>[];
    noIndex?: boolean;
}

export default function SEOHead({
    title,
    description,
    canonical,
    keywords,
    ogImage = DEFAULT_IMAGE,
    ogType = 'website',
    schemaMarkup = [],
    noIndex = false,
}: SEOHeadProps) {
    const fullCanonical = canonical
        ? `${SITE_URL}${canonical}`
        : undefined;

    return (
        <Helmet>
            {/* Primary */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
            {fullCanonical && <link rel="canonical" href={fullCanonical} />}

            {/* Hreflang — English primary, Hindi alternate */}
            {fullCanonical && <link rel="alternate" hrefLang="en" href={fullCanonical} />}
            {fullCanonical && <link rel="alternate" hrefLang="hi" href={fullCanonical} />}
            {fullCanonical && <link rel="alternate" hrefLang="x-default" href={fullCanonical} />}

            {/* Geo targeting for Rajasthan, India */}
            <meta name="geo.region" content="IN-RJ" />
            <meta name="geo.placename" content="Karauli, Rajasthan" />

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:locale:alternate" content="hi_IN" />
            {fullCanonical && <meta property="og:url" content={fullCanonical} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Schema */}
            {schemaMarkup.map((schema, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}

