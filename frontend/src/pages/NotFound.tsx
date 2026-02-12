import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <SEOHead
                title="Page Not Found | Shiv Mines and Minerals"
                description="The page you're looking for doesn't exist. Explore our premium silica sand products or contact us for assistance."
                noIndex={true}
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-lg"
            >
                <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                    Let us help you find what you need.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 font-semibold hover:brightness-110 transition-all"
                    >
                        <Home className="w-4 h-4" />
                        Go Home
                    </Link>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 border-2 border-border px-6 py-3 font-semibold text-foreground hover:bg-secondary transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        View Products
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
