import { motion } from "framer-motion";
import { Database, Cpu, Zap } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Multiple verified sensors collect data from user's body every few seconds",
    step: "01",
  },
  {
    icon: Cpu,
    title: "AI-Processing",
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
    <section id="how-it-works" className="py-12 md:py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 px-4">How It All Works Together</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Let's dive into how NoBounce's core components work together to provide a seamless and reliable emergency response system
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-safety to-primary transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-safety to-safety-glow rounded-full flex items-center justify-center text-safety-foreground font-bold shadow-lg text-sm md:text-base">
                    {step.step}
                  </div>

                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-safety/20 flex items-center justify-center mb-4 md:mb-6 mx-auto"
                  >
                    <step.icon className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                  </motion.div>

                  <h3 className="text-lg md:text-2xl font-heading font-bold mb-3 md:mb-4 text-center">{step.title}</h3>
                  <p className="text-xs md:text-base text-muted-foreground text-center leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
