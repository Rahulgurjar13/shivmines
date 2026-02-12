import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { MapPin, Phone, Mail, Clock, Globe, ArrowRight, Building2, Shield, Award } from "lucide-react";
import { toast } from "sonner";

const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const contactSchemas = [
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://shivminerals.com/#localbusiness",
        "name": "Shiv Mines and Minerals",
        "telephone": "+91-9116758641",
        "email": "shivmineandminerals@gmail.com",
        "url": "https://shivminerals.com/contact",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mining Lease M.L.No. 34/2006, Near Village - Raghuvanshi",
            "addressLocality": "Karauli",
            "addressRegion": "Rajasthan",
            "postalCode": "322241",
            "addressCountry": "IN"
        },
        "openingHours": "Mo-Sa 09:00-18:00"
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What types of silica sand does Shiv Minerals supply?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shiv Mines and Minerals supplies four grades of silica sand: Construction Sand for concrete and masonry, Industrial Sand (99%+ SiO₂) for filtration and blasting, Foundry Sand for metal casting, and Glass Sand (99.5%+ SiO₂) for glass manufacturing."
                }
            },
            {
                "@type": "Question",
                "name": "What is the minimum order quantity?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer flexible order quantities starting from 10 tonnes for domestic orders and 100 tonnes for export orders. Contact us for custom requirements and bulk pricing."
                }
            },
            {
                "@type": "Question",
                "name": "Do you export silica sand internationally?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Shiv Mines and Minerals exports premium silica sand to 45+ countries worldwide. We handle all export documentation, quality certification, and logistics for seamless international delivery."
                }
            },
            {
                "@type": "Question",
                "name": "What quality standards does your silica sand meet?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our silica sand undergoes rigorous lab testing for SiO₂ purity, iron oxide content, moisture levels, and grain size distribution. Each batch comes with a detailed quality analysis report to ensure it meets your specific application requirements."
                }
            }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shivminerals.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://shivminerals.com/contact" }
        ]
    }
];

export default function Contact() {
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success("Your inquiry has been submitted. Our team will respond within 24 hours.");
                setFormData({ name: "", company: "", email: "", phone: "", product: "", quantity: "", message: "" });
            } else {
                toast.error(data.message || "Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error('Contact form error:', error);
            toast.error("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Contact Shiv Mines & Minerals Rajasthan | Get a Silica Sand Quote"
                description="Request a quote for premium silica sand from Rajasthan's leading mine — Shiv Mines and Minerals, Karauli. Construction, industrial, foundry, and glass grade sand. Domestic and international supply. Call +91-9116758641."
                canonical="/contact"
                keywords="contact Shiv Minerals, silica sand quote, silica sand price Rajasthan, buy silica sand India, silica mine contact Karauli, silica sand enquiry, bulk silica sand order"
                schemaMarkup={contactSchemas}
            />
            <Header />

            {/* Hero */}
            <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/images/hero-quarry.jpg" alt="Contact Us" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
                >
                    Contact Us
                </motion.h1>
            </section>

            {/* Contact Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Left Column - Info */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            variants={fadeIn}
                            className="lg:col-span-2"
                        >
                            <p className="label-sm mb-4">Get in Touch</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Reach Our Mining Experts
                            </h2>
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Whether you need a quote, technical specifications, or want to discuss a custom solution,
                                our experienced team is ready to help.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: MapPin,
                                        label: "Mining Site & Office",
                                        content: "Silica Sand Mining Lease M.L.No. 34/2006, Khasra No. 143, Near Village - Raghuvanshi, Tehsil & District - Karauli, Rajasthan"
                                    },
                                    { icon: Phone, label: "Phone", content: "+91 9116758641", href: "tel:+919116758641" },
                                    { icon: Mail, label: "Email", content: "shivmineandminerals@gmail.com", href: "mailto:shivmineandminerals@gmail.com" },
                                    { icon: Clock, label: "Business Hours", content: "Monday – Saturday: 9:00 AM – 6:00 PM IST" },
                                    { icon: Globe, label: "Global Shipping", content: "Serving customers in 45+ countries" },
                                ].map((info, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <info.icon className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 text-sm mb-1">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-slate-600 text-sm hover:text-accent transition-colors">{info.content}</a>
                                            ) : (
                                                <p className="text-slate-600 text-sm">{info.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust badges */}
                            <div className="mt-10 pt-8 border-t border-stone-200">
                                <div className="flex flex-wrap gap-4">
                                    {[
                                        { icon: Building2, label: "20+ Years Experience" },
                                        { icon: Shield, label: "Quality Certified" },
                                        { icon: Award, label: "127+ Reviews" },
                                    ].map((badge, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                            <badge.icon className="w-4 h-4 text-accent" />
                                            {badge.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            variants={fadeIn}
                            className="lg:col-span-3"
                        >
                            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 lg:p-10 shadow-xl rounded-lg border border-stone-200">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Request a Quote</h3>

                                <div className="grid md:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-900 mb-2">
                                            Full Name <span className="text-accent">*</span>
                                        </label>
                                        <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-900 mb-2">Company Name</label>
                                        <input type="text" id="contact-company" name="company" value={formData.company} onChange={handleChange} className="input-field" placeholder="Company name" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-900 mb-2">
                                            Email Address <span className="text-accent">*</span>
                                        </label>
                                        <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="you@company.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                                        <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="+91 9876543210" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label htmlFor="contact-product" className="block text-sm font-semibold text-slate-900 mb-2">Product Interest</label>
                                        <select id="contact-product" name="product" value={formData.product} onChange={handleChange} className="input-field">
                                            <option value="">Select product</option>
                                            <option value="construction">Construction Grade Silica</option>
                                            <option value="industrial">Industrial Grade Silica</option>
                                            <option value="foundry">Foundry Grade Silica</option>
                                            <option value="glass">Glass Grade Silica</option>
                                            <option value="custom">Custom Specification</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="contact-quantity" className="block text-sm font-semibold text-slate-900 mb-2">Est. Quantity (tons/month)</label>
                                        <input type="text" id="contact-quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="input-field" placeholder="e.g., 500" />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-900 mb-2">Project Details</label>
                                    <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={4} className="input-field resize-none" placeholder="Tell us about your silica sand requirements..." />
                                </div>

                                <button type="submit" disabled={isSubmitting} className="btn-accent w-full text-base py-4 disabled:opacity-70">
                                    {isSubmitting ? "Submitting..." : "Get Your Quote"}
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="h-[400px] w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.0!2d76.85!3d26.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDMwJzAwLjAiTiA3NsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shiv Mines and Minerals Location"
                />
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
