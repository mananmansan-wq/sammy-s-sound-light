import { motion } from "framer-motion";
import { Music, Sparkles } from "lucide-react";

const AboutSection = () => (
  <section id="nosotros" className="py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="text-neon-blue w-6 h-6" />
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-primary neon-text-pink">
            SOBRE NOSOTROS
          </h2>
          <Sparkles className="text-neon-blue w-6 h-6" />
        </div>
        <div className="w-24 h-1 gradient-party-bg mx-auto rounded-full mb-8" />
        <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
          En <span className="text-primary font-semibold">Sonido Sammy</span> nos especializamos en ofrecer el mejor servicio de sonido, iluminación y entretenimiento para todo tipo de eventos. Bodas, XV años, cumpleaños, fiestas corporativas, graduaciones y más. Con equipo profesional de última generación y la mejor actitud, hacemos que cada evento sea una experiencia inolvidable.
        </p>
        <div className="flex items-center justify-center gap-2 mt-6 text-neon-purple">
          <Music className="w-5 h-5" />
          <span className="font-medium">Tu fiesta, nuestra pasión</span>
          <Music className="w-5 h-5" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
