import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/hero-quarry.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center" aria-label="Hero section - Silica Mine">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Aerial view of Shiv Mines and Minerals silica mine and quarry operations showing extraction of high-purity silica sand"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-6"
                    >
                        Premium Silica Mining Solutions Since 2006
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 sm:mb-8 leading-[1.1]"
                    >
                        Leading Silica Mine &
                        <br />
                        <span className="text-accent">Premium Sand Supplier</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-xl"
                    >
                        With a daily production capacity of <strong className="text-white">1,000 tonnes</strong>, our silica mine supplies
                        high-purity sand to the world's leading glass, foundry, and construction industries.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 bg-accent px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-200"
                            aria-label="Request a quote for silica sand products"
                        >
                            Request a Quote
                            <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </a>
                        <a
                            href="#products"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
                            aria-label="View our silica sand products"
                        >
                            View Silica Products
                            <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
