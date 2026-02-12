import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    const phoneNumber = "919116758641";
    const message = encodeURIComponent("Hello, I'm interested in your silica products.");

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
        </a>
    );
};

export default WhatsAppButton;
