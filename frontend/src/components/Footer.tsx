import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Linkedin, href: "https://linkedin.com/company/shivminerals", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/ShivMinerals", label: "Twitter" },
        { icon: Facebook, href: "https://facebook.com/ShivMinerals", label: "Facebook" },
        { icon: Youtube, href: "https://youtube.com/@ShivMinerals", label: "YouTube" },
    ];

    return (
        <footer className="bg-foreground text-background" role="contentinfo" aria-label="Site footer">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="font-serif text-xl font-bold mb-4 block">
                            SHIV MINES <span className="text-accent">&</span> MINERALS
                        </Link>
                        <p className="text-background/50 max-w-sm mb-6 text-sm leading-relaxed">
                            Premium silica mine and industrial sand supplier for construction, glass, foundry,
                            and specialty applications. Trusted by industry leaders for over 25 years.
                        </p>
                        <div className="flex gap-2" aria-label="Social media links">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-200"
                                    aria-label={`Follow Shiv Mines and Minerals on ${social.label}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <social.icon className="w-4 h-4" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <nav aria-label="Company navigation">
                        <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/80">Company</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { href: "/about", label: "About Our Silica Mine" },
                                { href: "/products", label: "Silica Sand Products" },
                                { href: "/#operations", label: "Mining Operations" },
                                { href: "/contact", label: "Contact Us" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-background/50 hover:text-accent transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Product Links */}
                    <nav aria-label="Products navigation">
                        <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/80">Silica Products</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { href: "/products/construction-sand", label: "Construction Grade Silica" },
                                { href: "/products/industrial-sand", label: "Industrial Grade Silica" },
                                { href: "/products/foundry-sand", label: "Foundry Grade Silica" },
                                { href: "/products/glass-sand", label: "Glass Grade Silica" },
                                { href: "/contact", label: "Custom Silica Solutions" },
                            ].map((link) => (
                                <li key={link.href + link.label}>
                                    <Link to={link.href} className="text-background/50 hover:text-accent transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/80">Get in Touch</h4>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-background/70 font-medium mb-1">Silica Mining Services</p>
                                <p className="text-background/40">Premium silica extraction, processing, and global distribution.</p>
                            </div>
                            <div>
                                <p className="text-background/70 font-medium mb-1">Certifications</p>
                                <p className="text-background/40">Quality Tested • Lab Certified • Industry Standard • Export Ready</p>
                            </div>
                            <div>
                                <p className="text-background/70 font-medium mb-1">Contact</p>
                                <p className="text-background/40">
                                    <a href="tel:+919116758641" className="hover:text-accent transition-colors">+91 9116758641</a>
                                    <br />
                                    <a href="mailto:shivmineandminerals@gmail.com" className="hover:text-accent transition-colors break-all">shivmineandminerals@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-background/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-background/30 text-sm text-center md:text-left">
                            © {currentYear} Shiv Mines and Minerals. All rights reserved.
                        </p>
                        <nav className="flex gap-6 text-sm" aria-label="Legal links">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                                <a key={link} href="#" className="text-background/30 hover:text-background/60 transition-colors">
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Scroll to Top - only shows after scrolling */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-20 left-6 z-40 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-accent hover:text-white transition-all duration-200"
                    aria-label="Scroll back to top of page"
                >
                    <ArrowUp className="w-5 h-5" aria-hidden="true" />
                </button>
            )}
        </footer>
    );
};

export default Footer;
