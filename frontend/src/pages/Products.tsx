import { Link } from 'react-router-dom';
import { motion, type Transition } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';

const smoothTransition: Transition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] };

const products = [
    {
        slug: 'construction-sand',
        name: 'Construction Sand',
        image: '/images/product-construction-sand.jpg',
        description: 'Premium construction grade silica sand for concrete, mortar, and asphalt applications.',
    },
    {
        slug: 'industrial-sand',
        name: 'Industrial Sand',
        image: '/images/product-industrial-sand.jpg',
        description: 'High-purity industrial silica sand for filtration, blasting, and chemical processing.',
    },
    {
        slug: 'foundry-sand',
        name: 'Foundry Sand',
        image: '/images/product-foundry-sand.jpg',
        description: 'Superior thermal resistance foundry silica sand for metal casting applications.',
    },
    {
        slug: 'glass-sand',
        name: 'Glass Sand',
        image: '/images/product-glass-sand.jpg',
        description: 'Ultra-low iron content glass grade silica with 99.5% SiO₂ purity.',
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shivminerals.com/" },
        { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://shivminerals.com/products" }
    ]
};

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Silica Sand Products from Shiv Mines and Minerals",
    "description": "Premium silica sand products mined in Rajasthan, India",
    "numberOfItems": 4,
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Construction Grade Silica Sand",
            "url": "https://shivminerals.com/products/construction-sand"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Industrial Grade Silica Sand",
            "url": "https://shivminerals.com/products/industrial-sand"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Foundry Grade Silica Sand",
            "url": "https://shivminerals.com/products/foundry-sand"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Glass Grade Silica Sand",
            "url": "https://shivminerals.com/products/glass-sand"
        }
    ]
};

export default function Products() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Silica Sand Products Rajasthan | Construction, Industrial, Glass & Foundry Sand"
                description="Buy premium silica sand from Rajasthan's top mine — Shiv Mines and Minerals. Construction, industrial (99%+ SiO₂), foundry, and glass grade (99.5% SiO₂) silica sand. Lab-tested, export-ready."
                canonical="/products"
                keywords="silica sand products, silica sand Rajasthan, construction sand Rajasthan, industrial sand India, glass sand supplier, foundry sand, silica sand buy, silica sand price, silica sand manufacturer Rajasthan"
                schemaMarkup={[breadcrumbSchema, itemListSchema]}
            />
            <Header />

            {/* Hero */}
            <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/images/hero-quarry.jpg" alt="Our Products" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
                >
                    Our Products
                </motion.h1>
            </section>

            {/* Products Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={smoothTransition}
                        className="mb-12"
                    >
                        <p className="label-sm mb-4">Silica Sand Products</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Premium Silica for Every Application
                        </h2>
                        <p className="text-slate-600 max-w-2xl">
                            Our silica mine produces a complete range of high-purity silica sand products, each engineered
                            to meet specific industry requirements.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ ...smoothTransition, delay: i * 0.1 }}
                            >
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="group block bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                                        <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
