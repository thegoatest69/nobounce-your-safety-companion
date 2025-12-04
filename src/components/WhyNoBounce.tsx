import { motion } from "framer-motion";
import { Shield, Clock, Brain, Zap } from "lucide-react";
import ParticleField from "./ParticleField";

const features = [
  {
    icon: Shield,
    title: "Risk Management System",
    description: "Multi-layered system minimizes false alarms and ensures reliable emergency response.",
    color: "primary",
  },
  {
    icon: Clock,
    title: "24/7 Wearability",
    description: "Discreet ring that feels like jewelry, comfortable to wear all day, even during sleep.",
    color: "cyan",
  },
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description: "Smart AI models analyze vitals and movements in real time for accurate detection.",
    color: "pink",
  },
  {
    icon: Zap,
    title: "Autonomous Operation",
    description: "Works without a phone - notifies contacts, tracks location, and alerts emergency services.",
    color: "orange",
  },
];

const colorClasses = {
  primary: {
    bg: "from-primary to-primary-glow",
    glow: "bg-primary/20",
    border: "border-primary/30",
    text: "text-primary",
  },
  cyan: {
    bg: "from-accent-cyan to-primary",
    glow: "bg-accent-cyan/20",
    border: "border-accent-cyan/30",
    text: "text-accent-cyan",
  },
  pink: {
    bg: "from-accent-pink to-primary",
    glow: "bg-accent-pink/20",
    border: "border-accent-pink/30",
    text: "text-accent-pink",
  },
  orange: {
    bg: "from-accent-orange to-accent-pink",
    glow: "bg-accent-orange/20",
    border: "border-accent-orange/30",
    text: "text-accent-orange",
  },
};

const WhyNoBounce = () => {
  return (
    <section id="why" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <ParticleField count={25} />
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Why <span className="text-gradient">NoBounce</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Solving the challenges faced by traditional emergency alert systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-full glass rounded-3xl p-8 border ${colors.border} overflow-hidden`}
                >
                  {/* Glow effect */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${colors.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex items-start gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className={`text-xl md:text-2xl font-heading font-bold mb-3 group-hover:${colors.text} transition-colors`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyNoBounce;
