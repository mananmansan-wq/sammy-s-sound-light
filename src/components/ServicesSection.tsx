import { motion } from "framer-motion";
import { Speaker, Lightbulb, Disc3, Mic, Music2, Package } from "lucide-react";

const services = [
  { icon: Speaker, title: "Sonido Profesional", desc: "Equipos de alta fidelidad para cualquier tamaño de evento." },
  { icon: Lightbulb, title: "iluminacion y diseño luminico", desc: "Iluminación LED, láser, strobos y máquinas de humo." },
  { icon: Disc3, title: "DJ y Animación", desc: "DJ profesional con la mejor música y  en vivo." },
  { icon: Mic, title: "Micrófonos Inalámbricos", desc: "Micrófonos de calidad para discursos, karaoke y más." },
  { icon: Music2, title: "Música para Todo Evento", desc: "Bodas, XV años, cumpleaños, graduaciones y corporativos." },
  { icon: Package, title: "Renta de Equipo", desc: "Renta de bocinas, consolas, luces y más equipo profesional." },
];

const ServicesSection = () => (
  <section id="servicios" className="py-20 px-4 bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-primary neon-text-pink mb-2">
          SERVICIOS AUDIOVISUALES PROFESIONALES
        </h2>
        <div className="w-24 h-1 gradient-party-bg mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 hover:neon-border transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-lg gradient-party-bg flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all">
              <s.icon className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="font-heading text-xl tracking-wide text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
