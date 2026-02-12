import { motion } from "framer-motion";
import { Pickaxe, FlaskConical, Truck, Shield } from "lucide-react";

const steps = [
    {
        icon: Pickaxe,
        title: "Silica Extraction",
        description: "Precision mining from our verified silica deposits using environmentally responsible open-pit mining methods with minimal environmental impact.",
    },
    {
        icon: FlaskConical,
        title: "Processing & Refining",
        description: "Multi-stage silica sand processing including washing, drying, and precision sizing in our advanced processing facilities.",
    },
    {
        icon: Shield,
        title: "Quality Assurance",
        description: "Every batch undergoes rigorous laboratory testing for SiO₂ purity, particle gradation, and chemical composition.",
    },
    {
        icon: Truck,
        title: "Global Delivery",
        description: "Flexible packaging and comprehensive logistics with worldwide shipping. Bulk, super sacks, or bags — delivered to your facility.",
    },
];

const capabilities = [
    { value: "1,000", label: "Tonnes produced daily", unit: "tons/day" },
    { value: "99.5%", label: "Maximum SiO₂ content achievable", unit: "purity" },
    { value: "4–200", label: "Full mesh range of particle sizes", unit: "mesh" },
];

const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const OperationsSection = () => {
    return (
        <section className="section-padding bg-background" id="operations" aria-labelledby="operations-heading">
            <div className="container-wide">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4 }}
                    variants={fadeIn}
                    className="max-w-2xl mb-14"
                >
                    <p className="label-sm mb-4">Silica Mining Operations</p>
                    <h2 id="operations-heading" className="heading-section mb-6">
                        From Silica Mine to Delivery
                    </h2>
                    <p className="text-body-lg">
                        Our integrated <strong className="text-foreground">silica mining</strong> supply chain ensures consistent quality and
                        reliable delivery at every step — from extraction at our quarry to final delivery.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Silica mining process steps">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            variants={fadeIn}
                            className="relative group"
                            role="listitem"
                        >
                            <div className="text-5xl font-bold text-accent/20 font-mono mb-3 leading-none">
                                0{index + 1}
                            </div>

                            <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors duration-300" aria-hidden="true">
                                <step.icon className="w-6 h-6 text-accent" />
                            </div>

                            <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Capabilities Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4 }}
                    variants={fadeIn}
                    className="mt-16 pt-14 border-t border-border"
                >
                    <h3 className="heading-card text-foreground mb-8">Mining Capabilities & Capacity</h3>
                    <div className="grid md:grid-cols-3 gap-6" role="list" aria-label="Silica mining capabilities">
                        {capabilities.map((cap, i) => (
                            <div
                                key={i}
                                className="bg-secondary/50 p-6 border border-border"
                                role="listitem"
                            >
                                <p className="text-3xl font-bold text-accent mb-1">{cap.value}</p>
                                <p className="text-sm text-muted-foreground">{cap.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Sustainable Mining */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4 }}
                    variants={fadeIn}
                    className="mt-14 bg-primary p-8 lg:p-10"
                >
                    <h3 className="text-xl font-bold text-primary-foreground mb-6">Sustainable Silica Mining Practices</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold text-primary-foreground mb-3">Environmental Commitment</h4>
                            <p className="text-primary-foreground/70 text-sm mb-4">
                                Our silica mine operations follow strict environmental management practices, demonstrating our
                                commitment to environmental management with comprehensive land reclamation programs.
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Water recycling reducing freshwater usage by 80%",
                                    "Dust suppression technology throughout quarry",
                                    "Progressive land reclamation during active mining"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                                        <span className="text-accent mt-0.5 font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary-foreground mb-3">Safety Excellence</h4>
                            <p className="text-primary-foreground/70 text-sm mb-4">
                                Safety is paramount in all our silica mining operations. Our strict safety protocols
                                reflect dedication to protecting our workforce and communities.
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Industry-leading safety record in silica mining",
                                    "Comprehensive silica dust control measures",
                                    "Regular third-party safety audits"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                                        <span className="text-accent mt-0.5 font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OperationsSection;
