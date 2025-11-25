import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Heart, Activity } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section id="product" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Feature grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 md:p-6 rounded-xl md:rounded-2xl border border-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-shadow"
              >
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary mb-2 md:mb-3" />
                <h4 className="font-heading font-bold text-sm md:text-base mb-1">Protected</h4>
                <p className="text-xs text-muted-foreground">24/7 Safety</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-safety/10 to-safety/5 p-4 md:p-6 rounded-xl md:rounded-2xl border border-safety/20 hover:shadow-lg hover:shadow-safety/20 transition-shadow"
              >
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-safety mb-2 md:mb-3" />
                <h4 className="font-heading font-bold text-sm md:text-base mb-1">Instant</h4>
                <p className="text-xs text-muted-foreground">Fast Response</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-safety/10 to-safety/5 p-4 md:p-6 rounded-xl md:rounded-2xl border border-safety/20"
              >
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-safety mb-2 md:mb-3" />
                <h4 className="font-heading font-bold text-sm md:text-base mb-1">Reliable</h4>
                <p className="text-xs text-muted-foreground">Always On</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 md:p-6 rounded-xl md:rounded-2xl border border-primary/20"
              >
                <Activity className="w-10 h-10 md:w-12 md:h-12 text-primary mb-2 md:mb-3" />
                <h4 className="font-heading font-bold text-sm md:text-base mb-1">Smart</h4>
                <p className="text-xs text-muted-foreground">AI Detection</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-4xl md:text-6xl font-heading font-bold text-gradient">NoBounce</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold"
            >
              Meet NoBounce: Guardian on Finger
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed"
            >
              NoBounce is not just a smart ring; it's your personal guardian, designed to keep you safe and connected. With its advanced AI-powered emergency detection and seamless integration with your smartphone, NoBounce ensures that help is always within reach, no matter where you are.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
