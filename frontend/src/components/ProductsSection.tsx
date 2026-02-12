import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const constructionSand = "/images/product-construction-sand.jpg";
const industrialSand = "/images/product-industrial-sand.jpg";
const foundrySand = "/images/product-foundry-sand.jpg";
const glassSand = "/images/product-glass-sand.jpg";

const products = [
    {
        id: "construction",
        slug: "construction-sand",
        image: constructionSand,
        name: "Construction Grade Silica Sand",
        specs: "SiO₂: 98.5% | Mesh: 20-40",
        description: "Premium construction grade silica sand engineered for concrete, mortar, and asphalt applications. Consistently graded to meet ASTM specifications.",
        altText: "Construction grade silica sand from Shiv Mines and Minerals mine for concrete and mortar applications",
        applications: ["Concrete production", "Mortar mixing", "Asphalt paving", "Landscaping"],
    },
    {
        id: "industrial",
        slug: "industrial-sand",
        image: industrialSand,
        name: "Industrial Grade Silica Sand",
        specs: "SiO₂: 99.2% | Mesh: 40-70",
        description: "High-purity industrial silica sand ideal for water filtration, chemical processing, and abrasive blasting. Consistent particle size for optimal performance.",
        altText: "Industrial grade high-purity silica sand from Shiv Mines and Minerals for filtration and chemical processing",
        applications: ["Water filtration", "Chemical processing", "Abrasive blasting", "Pool filters"],
    },
    {
        id: "foundry",
        slug: "foundry-sand",
        image: foundrySand,
        name: "Foundry Grade Silica Sand",
        specs: "SiO₂: 99.0% | AFS: 55-65",
        description: "Superior thermal resistance foundry silica sand for ferrous and non-ferrous metal casting with optimal AFS grain fineness for excellent mold permeability.",
        altText: "Foundry grade silica sand from Shiv Mines and Minerals with high thermal resistance for metal casting",
        applications: ["Metal casting", "Mold making", "Core production", "Investment casting"],
    },
    {
        id: "glass",
        slug: "glass-sand",
        image: glassSand,
        name: "Glass Grade Silica Sand",
        specs: "SiO₂: 99.5% | Fe₂O₃: <0.015%",
        description: "Ultra-low iron content glass grade silica with 99.5% SiO₂ purity, perfect for optical glass, clear containers, and specialty glass manufacturing.",
        altText: "Ultra-pure glass grade silica sand from Shiv Mines and Minerals with 99.5% SiO2 purity",
        applications: ["Container glass", "Flat glass", "Specialty glass", "Optical lenses"],
    },
];

const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const ProductsSection = () => {
    return (
        <section className="section-padding bg-secondary/50" id="products" aria-labelledby="products-heading">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4 }}
                        variants={fadeIn}
                    >
                        <p className="label-sm mb-4">Silica Sand Products</p>
                        <h2 id="products-heading" className="heading-section">
                            Premium Silica from Our Mine
                            <br className="hidden md:block" />
                            <span className="text-accent"> for Every Industrial Application</span>
                        </h2>
                        <p className="text-body-lg mt-4 max-w-2xl">
                            Our <strong className="text-foreground">silica mine</strong> produces a complete range of high-purity silica sand
                            products, each engineered to meet specific industry requirements.
                        </p>
                    </motion.div>
                    <a
                        href="#contact"
                        className="btn-accent whitespace-nowrap"
                        aria-label="Request technical specifications for silica sand products"
                    >
                        Request Specifications
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6" role="list" aria-label="Silica sand product catalog">
                    {products.map((product, index) => (
                        <motion.article
                            key={product.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            variants={fadeIn}
                            className="group bg-card overflow-hidden border border-border hover:border-accent/30 transition-colors duration-300 shadow-sm hover:shadow-md"
                            role="listitem"
                            itemScope
                            itemType="https://schema.org/Product"
                        >
                            <figure className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.altText}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    loading="lazy"
                                    width="600"
                                    height="375"
                                    itemProp="image"
                                />
                            </figure>

                            <div className="p-5 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
                                    <h3 className="text-lg font-bold text-foreground leading-snug" itemProp="name">{product.name}</h3>
                                    <span className="text-[11px] font-mono font-semibold text-accent bg-accent/10 px-2.5 py-1 whitespace-nowrap self-start">
                                        {product.specs}
                                    </span>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed mb-4" itemProp="description">{product.description}</p>

                                <div className="mb-5">
                                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Applications</p>
                                    <ul className="flex flex-wrap gap-1.5" aria-label={`${product.name} applications`}>
                                        {product.applications.map((app) => (
                                            <li
                                                key={app}
                                                className="text-[11px] bg-secondary text-muted-foreground px-2.5 py-1 font-medium"
                                            >
                                                {app}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-border">
                                    <Link
                                        to={`/products/${product.slug}`}
                                        className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
                                    >
                                        View Details
                                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </Link>
                                    <a
                                        href="#contact"
                                        className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label={`Request quote for ${product.name}`}
                                    >
                                        Request Quote
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Custom Specifications */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4 }}
                    variants={fadeIn}
                    className="mt-14 pt-10 border-t border-border"
                >
                    <h3 className="heading-card text-foreground mb-4">Custom Silica Sand Specifications</h3>
                    <p className="text-body max-w-3xl mb-6">
                        Beyond our standard silica sand products, our <strong className="text-foreground">silica mine</strong> can produce
                        custom specifications to meet your unique requirements — specific mesh sizes, purity levels, or specialized processing.
                    </p>
                    <a
                        href="#contact"
                        className="btn-primary"
                        aria-label="Contact us about custom silica sand specifications"
                    >
                        Discuss Custom Requirements
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
