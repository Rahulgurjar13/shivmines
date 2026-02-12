import { motion } from "framer-motion";
import { Award, Leaf, Zap } from "lucide-react";

const processingImage = "/images/processing-plant.jpg";
const sandImage = "/images/sand-texture.jpg";

const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const AboutSection = () => {
    return (
        <section className="section-padding bg-background" id="about" aria-labelledby="about-heading">
            <div className="container-wide">
                {/* Top Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4 }}
                        variants={fadeIn}
                    >
                        <p className="label-sm mb-4">About Our Silica Mine</p>
                        <h2 id="about-heading" className="heading-section mb-6">
                            Trusted Silica Mining Company Building Industry Foundations
                        </h2>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        variants={fadeIn}
                        className="lg:pt-8"
                    >
                        <p className="text-body-lg mb-6">
                            Since 2006, <strong className="text-foreground">Shiv Mines and Minerals</strong> has evolved from a regional silica mine
                            to one of the most trusted names in <strong className="text-foreground">industrial silica mining</strong>. Our
                            vertically integrated silica mining operations span extraction from our premium
                            <strong className="text-foreground"> silica quarry</strong>, advanced processing, and global distribution.
                        </p>
                        <p className="text-body mb-6">
                            We operate three state-of-the-art <strong className="text-foreground">silica sand processing facilities</strong> with
                            a daily production capacity of 1,000 tonnes. Our silica mine produces high-grade
                            silica ore that undergoes rigorous quality control—every batch is tested to meet
                            rigorous quality standards and industry-specific requirements.
                        </p>
                        <p className="text-body">
                            As a leading <strong className="text-foreground">silica mining company</strong>, we're committed to sustainable
                            mining practices, environmental stewardship, and delivering consistent quality to
                            customers across 45+ countries worldwide.
                        </p>
                    </motion.div>
                </div>

                {/* Image Grid */}
                <div className="grid md:grid-cols-5 gap-4">
                    <motion.figure
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4 }}
                        variants={fadeIn}
                        className="md:col-span-3 relative overflow-hidden group"
                    >
                        <img
                            src={processingImage}
                            alt="Shiv Mines and Minerals silica sand processing facility with advanced washing and sizing equipment"
                            className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                            width="800"
                            height="600"
                        />
                        <figcaption className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <p className="text-white font-semibold">Silica Processing Facility</p>
                            <p className="text-white/60 text-sm">Processing Capacity: 1,000 tonnes/day</p>
                        </figcaption>
                    </motion.figure>

                    <motion.figure
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        variants={fadeIn}
                        className="md:col-span-2 relative overflow-hidden group"
                    >
                        <img
                            src={sandImage}
                            alt="High-purity silica sand with 99.5% SiO2 content, laboratory tested"
                            className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                            width="600"
                            height="600"
                        />
                        <figcaption className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <p className="text-white font-semibold">99.5% SiO₂ Purity</p>
                            <p className="text-white/60 text-sm">Laboratory tested silica sand</p>
                        </figcaption>
                    </motion.figure>
                </div>

                {/* Certifications */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4 }}
                    variants={fadeIn}
                    className="mt-14 pt-14 border-t border-border"
                >
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <p className="text-sm text-muted-foreground font-medium">Certifications & Standards:</p>
                        <div className="flex flex-wrap items-center gap-2" role="list" aria-label="Industry certifications">
                            {["Quality Tested", "Lab Certified", "Industry Standard", "Export Ready"].map((cert) => (
                                <span
                                    key={cert}
                                    className="text-xs font-semibold px-3 py-1.5 border border-accent/30 bg-accent/5 text-accent"
                                    role="listitem"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4 }}
                    variants={fadeIn}
                    className="mt-14"
                >
                    <h3 className="heading-card text-foreground mb-8">Why Choose Our Silica Mine?</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Award,
                                title: "Premium Silica Deposits",
                                description: "Our silica mine sits atop one of the purest silica deposits, enabling us to produce high-grade silica sand with exceptional consistency."
                            },
                            {
                                icon: Zap,
                                title: "Advanced Processing",
                                description: "State-of-the-art silica processing technology ensures precise gradation, washing, and drying to meet exact customer specifications."
                            },
                            {
                                icon: Leaf,
                                title: "Sustainable Mining",
                                description: "Our silica mining operations follow strict environmental protocols with land reclamation and water recycling programs."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-secondary/50 p-6 border border-border hover:border-accent/30 transition-colors duration-300">
                                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center mb-4">
                                    <item.icon className="w-5 h-5 text-accent" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
