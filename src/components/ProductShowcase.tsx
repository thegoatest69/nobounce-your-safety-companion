import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParticleField from "./ParticleField";

const ProductShowcase = () => {
  return (
    <section id="product" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <motion.div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-accent-pink/15 blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <ParticleField count={20} />
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden glass border border-primary/30"
              style={{
                boxShadow: "0 0 80px hsl(var(--primary) / 0.2)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto aspect-video object-cover"
              >
                <source src="/videos/nobounce-demo.mp4" type="video/mp4" />
              </video>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent-cyan/20 to-accent-pink/20 rounded-3xl blur-2xl -z-10 opacity-50" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground"
            >
              Meet The Product
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              <span className="text-gradient">NoBounce</span>
            </h2>

            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground/90">
              Guardian on Finger
            </h3>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              NoBounce is not just a smart ring; it's your personal guardian, designed to keep you safe and connected. With its advanced AI-powered emergency detection and seamless integration, help is always within reach.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-white font-semibold px-8 py-6 rounded-2xl"
                style={{
                  boxShadow: "0 0 40px hsl(var(--primary) / 0.4)",
                }}
              >
                <span className="relative z-10">Get in Touch</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
