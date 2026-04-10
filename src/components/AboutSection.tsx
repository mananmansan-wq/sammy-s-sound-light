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
          En <span className="text-primary font-semibold">corporativo sammy
          
      </span> somos líderes en producción audiovisual, nos especializamos en soluciones integrales para eventos masivos y corporativos. Contamos con tecnología de vanguardia en iluminación, audio profesional y pantallas de última generación, diseñadas para escenarios de alto impacto. Transformamos sus eventos empresariales, conciertos y convenciones en experiencias inolvidables con calidad de nivel superior.
        </p>
        <div className="flex items-center justify-center gap-2 mt-6 text-neon-purple">
          <Music className="w-5 h-5" />
          <span className="font-medium">Tu evento,nuestra pasion</span>
          <Music className="w-5 h-5" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
