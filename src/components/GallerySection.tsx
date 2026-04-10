import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Escenario con sonido profesional" },
  { src: g2, alt: "Consola DJ con luces" },
  { src: g3, alt: "Boda con iluminación" },
  { src: g4, alt: "Evento al aire libre" },
  { src: g5, alt: "Micrófono profesional" },
  { src: g6, alt: "Fiesta de XV años" },
];

const GallerySection = () => (
  <section id="galeria" className="py-20 px-4">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-primary neon-text-pink mb-2">
          GALERÍA
        </h2>
        <div className="w-24 h-1 gradient-party-bg mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-xl neon-border group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={640}
              height={640}
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
