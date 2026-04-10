import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/522491109991"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Enviar mensaje por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
    style={{ boxShadow: "0 0 20px hsl(142 70% 45% / 0.5)" }}
  >
    <MessageCircle className="w-7 h-7 text-foreground" />
  </a>
);

export default WhatsAppFloat;
