import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", evento: "", fecha: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.nombre}. Quiero cotizar para: ${form.evento}. Fecha: ${form.fecha}. ${form.mensaje}`;
    window.open(`https://wa.me/522491109991?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("¡Redirigiendo a WhatsApp!");
  };

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wider text-primary neon-text-pink mb-2">
            CONTACTO
          </h2>
          <div className="w-24 h-1 gradient-party-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-xl p-6">
              <h3 className="font-heading text-2xl tracking-wide text-foreground mb-4">Llámanos</h3>
              <a href="tel:2491109991" className="flex items-center gap-3 text-xl text-primary hover:neon-text-pink transition-all">
                <Phone className="w-6 h-6" />
                <span className="font-semibold">249 110 9991</span>
              </a>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="font-heading text-2xl tracking-wide text-foreground mb-4">WhatsApp</h3>
              <a href="https://wa.me/522491109991" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="gap-3 w-full">
                  <MessageCircle className="w-5 h-5" /> Enviar mensaje
                </Button>
              </a>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-heading text-2xl tracking-wide text-foreground mb-4">Ubicación</h3>
              <div className="w-full h-48 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                📍 Contáctanos para más detalles de ubicación
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6 flex flex-col gap-4">
              <h3 className="font-heading text-2xl tracking-wide text-foreground mb-2">Cotiza tu evento</h3>
              <Input
                placeholder="Tu nombre"
                required
                maxLength={100}
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="bg-muted/50 border-border/50 focus:border-primary"
              />
              <Input
                placeholder="Tipo de evento (Boda, XV años, etc.)"
                required
                maxLength={100}
                value={form.evento}
                onChange={(e) => setForm({ ...form, evento: e.target.value })}
                className="bg-muted/50 border-border/50 focus:border-primary"
              />
              <Input
                type="date"
                required
                value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                className="bg-muted/50 border-border/50 focus:border-primary"
              />
              <Textarea
                placeholder="Mensaje o detalles adicionales"
                maxLength={500}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="bg-muted/50 border-border/50 focus:border-primary min-h-[100px]"
              />
              <Button variant="neon" size="lg" type="submit" className="gap-2">
                <Send className="w-5 h-5" /> Enviar cotización
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
