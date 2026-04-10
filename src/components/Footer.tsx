import { Phone, Facebook, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-muted/20 py-10 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-heading text-2xl tracking-wider text-primary neon-text-pink">SONIDO SAMMY</span>
          <p className="text-muted-foreground text-sm mt-1">© 2026 Sonido Sammy - Todos los derechos reservados</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:2491109991" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> 249 110 9991
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://facebook.com/SonidoSammy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-neon-blue hover:neon-border transition-all">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://youtube.com/@SonidoSammy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-destructive hover:neon-border transition-all">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
