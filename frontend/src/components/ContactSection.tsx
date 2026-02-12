import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Clock, Globe } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        product: "",
        quantity: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success("Your silica inquiry has been submitted. Check your email for confirmation. Our mining experts will respond within 24 hours.");
                setFormData({ name: "", company: "", email: "", phone: "", product: "", quantity: "", message: "" });
            } else {
                toast.error(data.message || "Failed to submit inquiry. Please try again.");
            }
        } catch (error) {
            console.error('Contact form error:', error);
            toast.error("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const contactInfo = [
        {
            icon: MapPin,
            label: "Mining Site & Office",
            content: (
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">Silica Sand Mining Lease M.L.No. 34/2006, Khasra No. 143, Near Village - Raghuvanshi</span><br />
                    <span itemProp="addressLocality">Tehsil & District - Karauli</span>, <span itemProp="addressRegion">Rajasthan</span>
                </div>
            ),
        },
        {
            icon: Phone,
            label: "Phone",
            content: (
                <a href="tel:+919116758641" className="text-primary-foreground/70 hover:text-accent transition-colors" itemProp="telephone">
                    +91 9116758641
                </a>
            ),
        },
        {
            icon: Mail,
            label: "Email",
            content: (
                <a href="mailto:shivmineandminerals@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors" itemProp="email">
                    shivmineandminerals@gmail.com
                </a>
            ),
        },
        {
            icon: Clock,
            label: "Business Hours",
            content: <span>Monday – Saturday: 9:00 AM – 6:00 PM IST<br />Sunday: Closed</span>,
        },
        {
            icon: Globe,
            label: "Global Shipping",
            content: <span>Serving customers in 45+ countries<br />Bulk & containerized shipping available</span>,
        },
    ];

    return (
        <section className="section-padding bg-primary" id="contact" aria-labelledby="contact-heading">
            <div className="container-wide">
                <div className="grid lg:grid-cols-5 gap-16">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <p className="label-sm text-accent mb-4">Contact Our Silica Mine</p>
                        <h2 id="contact-heading" className="heading-section text-primary-foreground mb-6">
                            Get a Quote from Our Mining Experts
                        </h2>
                        <p className="text-primary-foreground/60 mb-10 leading-relaxed">
                            Whether you need a quote for bulk silica sand, technical specifications, or want to discuss
                            a custom solution, our experienced mining team is ready to help.
                        </p>

                        <div
                            className="space-y-6"
                            itemScope
                            itemType="https://schema.org/LocalBusiness"
                        >
                            <meta itemProp="name" content="Shiv Mines and Minerals" />
                            {contactInfo.map((info, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <info.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-primary-foreground font-semibold text-sm mb-1">{info.label}</p>
                                        <div className="text-primary-foreground/60 text-sm leading-relaxed">{info.content}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-primary-foreground/10">
                            <div className="flex flex-wrap items-center gap-3 text-sm text-primary-foreground/50">
                                <span className="flex items-center gap-1">
                                    <span className="text-accent">★★★★★</span> 4.9/5 Rating
                                </span>
                                <span className="text-primary-foreground/20">•</span>
                                <span>127+ Reviews</span>
                                <span className="text-primary-foreground/20">•</span>
                                <span>20+ Years</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-card p-6 sm:p-8 lg:p-10 shadow-2xl"
                            aria-label="Silica sand quote request form"
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-8">Request a Silica Sand Quote</h3>

                            <div className="grid md:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                                        Full Name <span className="text-accent">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="Your name"
                                        autoComplete="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="Company name"
                                        autoComplete="organization"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                                        Email Address <span className="text-accent">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="you@company.com"
                                        autoComplete="email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="+91 9876543210"
                                        autoComplete="tel"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label htmlFor="product" className="block text-sm font-semibold text-foreground mb-2">
                                        Silica Product Interest
                                    </label>
                                    <select
                                        id="product"
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        className="input-field"
                                        aria-label="Select silica sand product type"
                                    >
                                        <option value="">Select silica product</option>
                                        <option value="construction">Construction Grade Silica Sand</option>
                                        <option value="industrial">Industrial Grade Silica Sand</option>
                                        <option value="foundry">Foundry Grade Silica Sand</option>
                                        <option value="glass">Glass Grade Silica Sand</option>
                                        <option value="frac">Frac Sand (Oil & Gas)</option>
                                        <option value="custom">Custom Specification</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="quantity" className="block text-sm font-semibold text-foreground mb-2">
                                        Est. Quantity (tons/month)
                                    </label>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="e.g., 500"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                                    Project Details & Requirements
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="input-field resize-none"
                                    placeholder="Tell us about your silica sand requirements, specifications needed, delivery location, etc."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-accent w-full text-base py-4 disabled:opacity-70"
                                aria-label="Submit silica sand quote request"
                            >
                                {isSubmitting ? "Submitting..." : "Get Your Silica Quote"}
                                <ArrowRight className="w-5 h-5" aria-hidden="true" />
                            </button>

                            <p className="text-xs text-muted-foreground mt-4 text-center">
                                We typically respond within 24 hours. Your information is kept confidential.
                            </p>
                        </form>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4 }}
                    className="mt-20 pt-16 border-t border-primary-foreground/10"
                >
                    <h3 className="text-2xl font-bold text-primary-foreground mb-10">
                        Frequently Asked Questions
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                q: "What is the minimum order quantity for silica sand?",
                                a: "Our silica mine can accommodate orders from 20 tons (single truckload) to bulk shipments exceeding 10,000 tons. Contact us for volume pricing."
                            },
                            {
                                q: "Do you ship silica sand internationally?",
                                a: "Yes, we export silica sand to 45+ countries. We offer containerized shipping and can arrange FOB, CIF, or DDP terms."
                            },
                            {
                                q: "Can you provide custom silica specifications?",
                                a: "Absolutely. Our silica processing facilities can produce custom mesh sizes, purity levels, and chemical compositions to meet your specific needs."
                            },
                            {
                                q: "How do you ensure silica sand quality?",
                                a: "Every batch undergoes rigorous laboratory testing for SiO₂ purity, particle gradation, and chemical composition. Our quality control processes ensure consistent, reliable material for your applications."
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-primary-foreground/5 p-6 hover:bg-primary-foreground/10 transition-colors duration-200">
                                <h4 className="font-semibold text-primary-foreground mb-3">
                                    {faq.q}
                                </h4>
                                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
