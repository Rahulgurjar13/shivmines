import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const heroSlides = [
    {
        src: "/images/1.png",
        alt: "Aerial view of Shiv Mines and Minerals silica mine and quarry operations",
    },
    {
        src: "/images/2.png",
        alt: "Silica sand processing plant and machinery",
    },
    {
        src: "/images/3.png",
        alt: "Massive silica sand stockpiles at the mining site",
    },
];

const SLIDE_INTERVAL = 6000;

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);

    const goToSlide = useCallback(
        (index: number) => {
            setDirection(index > currentSlide ? 1 : -1);
            setCurrentSlide(index);
        },
        [currentSlide]
    );

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentSlide(
            (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
        );
    }, []);

    // Auto-rotate slides
    useEffect(() => {
        const timer = setInterval(nextSlide, SLIDE_INTERVAL);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? "-100%" : "100%",
            opacity: 0,
        }),
    };

    return (
        <section
            className="relative min-h-screen flex items-center"
            aria-label="Hero section - Silica Mine"
        >
            {/* Background Carousel */}
            <div className="absolute inset-0 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.img
                        key={currentSlide}
                        src={heroSlides[currentSlide].src}
                        alt={heroSlides[currentSlide].alt}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                            opacity: { duration: 0.6 },
                        }}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                </AnimatePresence>

                {/* Dark overlays for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-[1]" />
            </div>

            {/* Arrow Controls — side arrows only on sm+ screens */}
            <button
                onClick={prevSlide}
                className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-white/80 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300 group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>
            <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-white/80 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300 group"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            {/* Bottom Controls: mobile arrows + dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {/* Prev arrow — mobile only */}
                <button
                    onClick={prevSlide}
                    className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-white/80 hover:bg-white/20 transition-all duration-300"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Dot Indicators */}
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative h-2 rounded-full transition-all duration-500 ${index === currentSlide
                                ? "w-8 bg-accent"
                                : "w-2 bg-white/40 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index === currentSlide && (
                            <motion.div
                                className="absolute inset-0 bg-accent/60 rounded-full origin-left"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: SLIDE_INTERVAL / 1000,
                                    ease: "linear",
                                }}
                                key={`progress-${currentSlide}`}
                            />
                        )}
                    </button>
                ))}

                {/* Next arrow — mobile only */}
                <button
                    onClick={nextSlide}
                    className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/15 text-white/80 hover:bg-white/20 transition-all duration-300"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
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
                        With a daily production capacity of{" "}
                        <strong className="text-white">1,000 tonnes</strong>, our
                        silica mine supplies high-purity sand to the world's leading
                        glass, foundry, and construction industries.
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
                            <ArrowRight
                                className="w-5 h-5"
                                aria-hidden="true"
                            />
                        </a>
                        <a
                            href="#products"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
                            aria-label="View our silica sand products"
                        >
                            View Silica Products
                            <ArrowRight
                                className="w-5 h-5"
                                aria-hidden="true"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
