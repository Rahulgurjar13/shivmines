import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const productLinks = [
    { name: "Construction Grade Silica", href: "/products/construction-sand" },
    { name: "Industrial Grade Silica", href: "/products/industrial-sand" },
    { name: "Foundry Grade Silica", href: "/products/foundry-sand" },
    { name: "Glass Grade Silica", href: "/products/glass-sand" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const pathname = location.pathname;
    const scrollTimeoutRef = useRef<number | null>(null);

    // Check if we're on the homepage
    const isHomePage = pathname === "/";

    // Throttled scroll handler for better performance
    const handleScroll = useCallback(() => {
        if (scrollTimeoutRef.current !== null) return;

        scrollTimeoutRef.current = requestAnimationFrame(() => {
            setIsScrolled(window.scrollY > 20);
            scrollTimeoutRef.current = null;
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current !== null) {
                cancelAnimationFrame(scrollTimeoutRef.current);
            }
        };
    }, [handleScroll]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProductsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { name: "HOME", href: "/", ariaLabel: "Go to home page" },
        { name: "ABOUT US", href: "/about", ariaLabel: "Learn about Shiv Mines and Minerals" },
        { name: "PRODUCTS", href: "/products", ariaLabel: "View our silica sand products", hasDropdown: true },
        { name: "CONTACT US", href: "/contact", ariaLabel: "Contact our silica mine team" },
    ];

    // Determine text color based on scroll and page
    const textColorClass = isScrolled || !isHomePage
        ? "text-foreground"
        : "text-white";

    const linkColorClass = isScrolled || !isHomePage
        ? "text-muted-foreground hover:text-foreground"
        : "text-white/90 hover:text-white";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
                ? "bg-background/95 backdrop-blur-sm border-b border-border py-3"
                : "bg-transparent py-4"
                }`}
            role="banner"
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3"
                    aria-label="Shiv Mines and Minerals - Home - Premium Silica Mine"
                >
                    {/* Logo Icon */}
                    {/* Logo Text - Visible on all screens */}
                    <div>
                        <span className={`font-serif text-xl font-bold tracking-tight ${textColorClass}`}>
                            SHIV MINES <span className="text-accent">&</span> MINERALS
                        </span>
                        <p className={`text-xs ${isScrolled || !isHomePage ? "text-muted-foreground" : "text-white/70"}`}>
                            PURE MINERALS
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        link.hasDropdown ? (
                            <div
                                key={link.name}
                                className="relative"
                                ref={dropdownRef}
                                onMouseEnter={() => setIsProductsOpen(true)}
                                onMouseLeave={() => setIsProductsOpen(false)}
                            >
                                <button
                                    className={`flex items-center gap-1 text-sm font-semibold transition-colors ${linkColorClass}`}
                                    aria-label={link.ariaLabel}
                                    aria-expanded={isProductsOpen}
                                    aria-haspopup="true"
                                >
                                    {link.name}
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown Menu */}
                                {isProductsOpen && (
                                    <div className="absolute top-full left-0 pt-2 z-50">
                                        <div
                                            className="w-72 bg-white shadow-xl border border-gray-100 py-2"
                                            role="menu"
                                        >
                                            {productLinks.map((product) => (
                                                <Link
                                                    key={product.name}
                                                    to={product.href}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors font-medium"
                                                    role="menuitem"
                                                    onClick={() => setIsProductsOpen(false)}
                                                >
                                                    {product.name}
                                                </Link>
                                            ))}
                                            <div className="border-t border-gray-100 mt-2 pt-2">
                                                <Link
                                                    to="/products"
                                                    className="block px-4 py-3 text-sm text-accent hover:bg-gray-50 transition-colors font-semibold"
                                                    onClick={() => setIsProductsOpen(false)}
                                                >
                                                    View All Products →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-semibold transition-colors ${linkColorClass}`}
                                aria-label={link.ariaLabel}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </nav>

                {/* Phone CTA */}
                <a
                    href="tel:+919116758641"
                    className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-md border-2 transition-all font-semibold ${isScrolled || !isHomePage
                        ? "border-primary text-primary hover:bg-primary hover:text-white"
                        : "border-white text-white hover:bg-white hover:text-primary"
                        }`}
                    aria-label="Call us at 9116758641"
                >
                    <Phone className="w-4 h-4" />
                    <span>9116758641</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`lg:hidden p-2 ${textColorClass}`}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div id="mobile-menu" className="lg:hidden bg-background border-t border-border" role="dialog" aria-label="Mobile navigation menu">
                    <nav className="container mx-auto px-4 py-6 space-y-1" aria-label="Mobile navigation">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-foreground font-semibold border-b border-border"
                        >
                            HOME
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-foreground font-semibold border-b border-border"
                        >
                            ABOUT US
                        </Link>

                        {/* Mobile Products Dropdown */}
                        <div className="border-b border-border">
                            <button
                                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                className="flex items-center justify-between w-full py-3 text-foreground font-semibold"
                            >
                                PRODUCTS
                                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? "rotate-180" : ""}`} />
                            </button>
                            {isMobileProductsOpen && (
                                <div className="pb-3 pl-4 space-y-2">
                                    {productLinks.map((product) => (
                                        <Link
                                            key={product.name}
                                            to={product.href}
                                            onClick={() => { setIsOpen(false); setIsMobileProductsOpen(false); }}
                                            className="block py-2 text-muted-foreground hover:text-accent transition-colors"
                                        >
                                            {product.name}
                                        </Link>
                                    ))}
                                    <Link
                                        to="/products"
                                        onClick={() => { setIsOpen(false); setIsMobileProductsOpen(false); }}
                                        className="block py-2 text-accent font-medium"
                                    >
                                        View All Products →
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-foreground font-semibold border-b border-border"
                        >
                            CONTACT US
                        </Link>

                        <a
                            href="tel:+919116758641"
                            className="flex items-center justify-center gap-2 bg-accent text-white py-3 px-6 rounded-lg mt-4 font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            <Phone className="w-4 h-4" />
                            Call: 9116758641
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
