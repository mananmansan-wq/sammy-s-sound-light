import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="Sonido Sammy evento" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-background/70" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center px-4 max-w-3xl"
    >
      <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl tracking-wider neon-text-pink text-primary mb-4">
        CORPORATIVO SAMMY
      </h1>
      <p className="text-lg sm:text-xl text-foreground/80 mb-8 font-light">
        ¡La mejor música y ambiente para tu evento!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contacto">
          <Button variant="neon" size="lg" className="text-lg px-8">
            Cotiza ahora
          </Button>
        </a>
        <a href="#servicios">
          <Button variant="neon-outline" size="lg" className="text-lg px-8">
            Ver servicios
          </Button>
        </a>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
