import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, type Transition } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';

const smoothTransition: Transition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] };

const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: smoothTransition
};

const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: smoothTransition
};

const productData: Record<string, { name: string; description: string; image: string; seoTitle: string; seoDescription: string; applications: { title: string; description: string }[]; features: { title: string; description: string }[] }> = {
    'construction-sand': {
        name: 'Construction Sand',
        seoTitle: 'Construction Grade Silica Sand | Premium Quality | Shiv Minerals',
        seoDescription: 'Premium construction grade silica sand from Shiv Mines and Minerals. Washed, clean, and consistently graded for concrete, mortar, plastering, and asphalt. ASTM specification compliant.',
        description: 'Shiv Mines and Minerals proudly provides Construction Sand, the finest silica sand that is well known for its unparalleled quality, strength, and durability. The construction sand is mined carefully from selected locations and then washed on site to rid itself of impurities so that it is utterly free from clay and other adulterants. This, in turn, is very important to get results in construction jobs wherein stability and longevity are so imperative. With its even granular size and dense structure, the sand is ideal for all types of construction purposes-from bricklaying and plastering to the manufacture of concrete.',
        image: '/images/construction-sand.png',
        applications: [
            { title: 'Masonry Works', description: 'Solid base for bricklaying and stonework, with excellent bonding properties for mortar.' },
            { title: 'Plastering Work', description: 'Finer, washed texture helps gain finer, even quality in wall and ceiling plastering.' },
            { title: 'Concrete Work', description: 'Key constituent in concrete mixes to attain required strength and durability.' },
        ],
        features: [
            { title: 'Washed and Clean', description: 'Free from clay and other impurities, ensuring perfect workability.' },
            { title: 'Strength and Durability', description: 'Gives strength and durability to masonry, plaster, and concrete works.' },
            { title: 'Consistent Grading', description: 'Uniform particle size distribution ensures reliable performance.' },
        ],
    },
    'industrial-sand': {
        name: 'Industrial Sand',
        seoTitle: 'Industrial Grade Silica Sand | 99%+ Purity | Shiv Minerals',
        seoDescription: 'High-purity industrial silica sand with 99%+ SiO₂ content. Ideal for water filtration, abrasive blasting, and chemical processing. Precisely graded by Shiv Mines and Minerals.',
        description: 'Shiv Mines and Minerals offers premium Industrial Sand, specially processed for demanding industrial applications requiring high purity and precise specifications. Our industrial-grade silica sand undergoes rigorous quality control to ensure 99%+ silica content with minimal impurities. The sand is carefully graded to meet the exacting standards of water treatment, abrasive blasting, and chemical manufacturing industries.',
        image: '/images/product-industrial-sand.jpg',
        applications: [
            { title: 'Water Filtration', description: 'Ideal for water treatment plants and filtration systems.' },
            { title: 'Abrasive Blasting', description: 'Perfect for sandblasting operations requiring consistent particle size.' },
            { title: 'Chemical Processing', description: 'High-purity silica suitable for chemical manufacturing processes.' },
        ],
        features: [
            { title: 'High Purity', description: '99%+ silica content with minimal iron oxide and other impurities.' },
            { title: 'Precise Grading', description: 'Carefully controlled particle size distribution.' },
            { title: 'Thermal Stability', description: 'Excellent heat resistance for high-temperature applications.' },
        ],
    },
    'foundry-sand': {
        name: 'Foundry Sand',
        seoTitle: 'Foundry Grade Silica Sand | Metal Casting Sand | Shiv Minerals',
        seoDescription: 'Superior foundry grade silica sand for iron, steel, and aluminum casting. Optimal AFS grain fineness, high refractoriness (1700°C+), and excellent permeability. From Shiv Mines and Minerals.',
        description: 'Shiv Mines and Minerals supplies superior Foundry Sand engineered specifically for metal casting applications. Our foundry-grade silica sand features optimal grain shape, high refractoriness, and excellent permeability - essential properties for producing quality castings. The sand is processed to achieve consistent AFS grain fineness numbers and low acid demand values.',
        image: '/images/foundry-sand.png',
        applications: [
            { title: 'Iron & Steel Casting', description: 'High refractoriness withstands molten metal temperatures.' },
            { title: 'Aluminum Casting', description: 'Excellent surface finish for non-ferrous metal casting.' },
            { title: 'Core Making', description: 'Optimal permeability for creating complex internal cavities.' },
        ],
        features: [
            { title: 'High Refractoriness', description: 'Withstands temperatures above 1700°C without degradation.' },
            { title: 'Optimal Grain Shape', description: 'Sub-angular to rounded grains provide excellent flowability.' },
            { title: 'Excellent Permeability', description: 'Allows gases to escape during casting.' },
        ],
    },
    'glass-sand': {
        name: 'Glass Sand',
        seoTitle: 'Glass Grade Silica Sand | Ultra-Pure 99.5% SiO₂ | Shiv Minerals',
        seoDescription: 'Ultra-pure glass grade silica sand with 99.5%+ SiO₂ and Fe₂O₃ below 0.02%. Perfect for container glass, flat glass, and optical lenses. Supplied by Shiv Mines and Minerals.',
        description: 'Shiv Mines and Minerals produces ultra-pure Glass Sand meeting the stringent specifications required by glass manufacturers. Our glass-grade silica features exceptionally low iron content (below 0.02% Fe2O3) ensuring crystal-clear glass production. The sand undergoes specialized processing including washing, magnetic separation, and precise sizing.',
        image: '/images/product-glass-sand.jpg',
        applications: [
            { title: 'Container Glass', description: 'Premium quality for manufacturing bottles and jars.' },
            { title: 'Flat Glass', description: 'Ultra-pure silica for windows, mirrors, and architectural glass.' },
            { title: 'Specialty Glass', description: 'High-purity sand for optical glass and solar panels.' },
        ],
        features: [
            { title: 'Ultra-Low Iron', description: 'Fe2O3 content below 0.02% for crystal-clear glass.' },
            { title: 'High Silica Purity', description: '99.5%+ SiO2 content meeting international standards.' },
            { title: 'Controlled Particle Size', description: 'Precise sizing for optimal melting and homogeneity.' },
        ],
    },
};

export default function ProductDetail() {
    const { slug } = useParams<{ slug: string }>();

    if (!slug || !productData[slug]) {
        return <Navigate to="/products" replace />;
    }

    const product = productData[slug];

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `https://shivminerals.com${product.image}`,
        "brand": {
            "@type": "Brand",
            "name": "Shiv Mines and Minerals"
        },
        "manufacturer": {
            "@type": "Organization",
            "name": "Shiv Mines and Minerals",
            "url": "https://shivminerals.com"
        },
        "category": "Silica Sand"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shivminerals.com/" },
            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://shivminerals.com/products" },
            { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://shivminerals.com/products/${slug}` }
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={product.seoTitle}
                description={product.seoDescription}
                canonical={`/products/${slug}`}
                ogImage={`https://shivminerals.com${product.image}`}
                keywords={`${product.name}, ${product.name} Rajasthan, ${product.name} supplier India, silica sand, buy ${product.name}, ${product.name} price, Shiv Minerals`}
                schemaMarkup={[productSchema, breadcrumbSchema]}
            />
            <Header />

            <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/images/hero-quarry.jpg" alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
                >
                    {product.name}
                </motion.h1>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <motion.div {...fadeInLeft} className="lg:sticky lg:top-32">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <img src={product.image} alt={product.name} className="w-full h-auto object-cover" loading="lazy" />
                            </div>
                        </motion.div>

                        <motion.div {...fadeInRight}>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{product.name}</h2>
                            <p className="text-slate-600 leading-relaxed mb-10">{product.description}</p>

                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Applications</h3>
                                <ul className="space-y-4">
                                    {product.applications.map((app, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0" />
                                            <div><span className="font-semibold text-slate-900">{app.title}:</span> <span className="text-slate-600">{app.description}</span></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Salient Features</h3>
                                <ul className="space-y-4">
                                    {product.features.map((f, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0" />
                                            <div><span className="font-semibold text-slate-900">{f.title}:</span> <span className="text-slate-600">{f.description}</span></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/contact" className="inline-flex items-center gap-2 bg-copper hover:bg-copper/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                                Request a Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">Explore Other Products</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(productData).filter(([key]) => key !== slug).map(([key, prod]) => (
                            <Link key={key} to={`/products/${key}`} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                                <div className="h-48 overflow-hidden">
                                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-slate-900 group-hover:text-copper transition-colors">{prod.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
