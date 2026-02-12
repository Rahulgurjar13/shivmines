import { motion, type Transition } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';

const smoothTransition: Transition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] };

const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: smoothTransition
};

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

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shivminerals.com/" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://shivminerals.com/about" }
    ]
};

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="About Shiv Mines & Minerals | Silica Mining Company Rajasthan Since 2006"
                description="Learn about Shiv Mines and Minerals — Rajasthan's most trusted silica mining company since 2006. Vertically integrated operations in Karauli, 1,000 tonnes/day capacity, serving 45+ countries with premium silica sand."
                canonical="/about"
                keywords="about Shiv Minerals, silica mining company Rajasthan, silica mine Karauli, silica sand company India, mining operations Rajasthan, silica sand history, who we are Shiv Minerals"
                schemaMarkup={[breadcrumbSchema]}
            />
            <Header />

            {/* Hero */}
            <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/images/hero-quarry.jpg" alt="About Shiv Mines and Minerals" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.h1
                    {...fadeInUp}
                    className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
                >
                    About Us
                </motion.h1>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <motion.div {...fadeInLeft}>
                            <p className="label-sm mb-4">Our Story</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                20+ Years of Mining Excellence
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Since 2006, <strong className="text-slate-900">Shiv Mines and Minerals</strong> has been at the forefront
                                of India's silica mining industry. What began as a small quarry operation has grown into one of
                                the most trusted names in premium silica sand production.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Our vertically integrated operations span from extraction at our premium silica quarry to
                                advanced multi-stage processing and global distribution. With a daily production capacity
                                of 1,000 tonnes, we serve industries across 45+ countries.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We are committed to sustainable mining practices, environmental stewardship, and delivering
                                consistent quality that meets the most demanding industry specifications.
                            </p>
                        </motion.div>

                        <motion.div {...fadeInRight} className="lg:sticky lg:top-32">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src="/images/about-facility.jpg"
                                    alt="Shiv Mines and Minerals facility"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <motion.div {...fadeInLeft} className="mb-12">
                        <p className="label-sm mb-4">Why Choose Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            What Sets Us Apart
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Premium Quality",
                                description: "Our silica mine sits atop one of the purest deposits. Every batch is laboratory tested for SiO₂ purity, particle gradation, and chemical composition."
                            },
                            {
                                title: "Advanced Processing",
                                description: "State-of-the-art processing technology ensures precise gradation, washing, and drying. Three facilities with 1,000 tonnes/day capacity."
                            },
                            {
                                title: "Global Reach",
                                description: "Serving 45+ countries with flexible packaging and logistics. Bulk, super sacks, or bags — delivered worldwide with comprehensive shipping solutions."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ ...smoothTransition, delay: i * 0.1 }}
                                className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
                            Whether you need construction sand, industrial silica, or custom specifications, our mining
                            experts are ready to discuss your requirements.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                        >
                            Contact Us <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
