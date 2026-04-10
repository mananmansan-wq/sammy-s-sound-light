import { motion } from "framer-motion";
import { Facebook, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const SocialSection = () => (
  <section className="py-16 px-4 bg-muted/30">
    <div className="container mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-4xl tracking-wider text-primary neon-text-pink mb-2">
          SÍGUENOS
        </h2>
        <div className="w-24 h-1 gradient-party-bg mx-auto rounded-full mb-8" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://facebook.com/SonidoSammy" target="_blank" rel="noopener noreferrer">
            <Button variant="neon-outline" size="lg" className="gap-3 w-full sm:w-auto">
              <Facebook className="w-5 h-5" /> Facebook
            </Button>
          </a>
          <a href="https://youtube.com/@SonidoSammy" target="_blank" rel="noopener noreferrer">
            <Button variant="neon-outline" size="lg" className="gap-3 w-full sm:w-auto border-destructive text-destructive hover:bg-destructive/10">
              <Youtube className="w-5 h-5" /> YouTube
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SocialSection;
