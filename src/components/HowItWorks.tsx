import { motion } from "framer-motion";
import { Database, Cpu, Zap } from "lucide-react";
import ParticleField from "./ParticleField";

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Multiple verified sensors collect data from user's body every few seconds",
    step: "01",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Raw data is processed into AI model trained specially to identify risk",
    step: "02",
  },
  {
    icon: Zap,
    title: "Action Taking",
    description: "Based on the output given by AI model, actions are taken appropriately",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[200px]"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <ParticleField count={15} />
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
            The Process
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A seamless and reliable emergency response system.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-[60%] h-[2px] -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative glass rounded-3xl p-8 text-center border border-primary/20 overflow-hidden"
                >
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-6xl font-heading font-bold text-primary/10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center shadow-lg glow-primary"
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Glow effect */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-primary/50"
                    >
                      →
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
