import { motion } from "framer-motion";
import { Shield, Clock, Brain, Zap } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Risk Management System",
    description: "Our multi-layered Risk Management System minimizes false alarms and ensures reliable emergency response. From power and connection risks to SOS failover, NoBounce is designed to never miss a life-saving alert.",
  },
  {
    icon: Clock,
    title: "24/7 Wearability",
    description: "Unlike bulky smartwatches, NoBounce is a discreet ring that feels like jewelry, making it comfortable to wear all day, even during sleep or showers.",
  },
  {
    icon: Brain,
    title: "AI-Powered Emergency Detection",
    description: "Our Hub runs smart AI models that analyze vitals and movements in real time, ensuring accurate detection of falls, abnormal vitals, and emergencies.",
  },
  {
    icon: Zap,
    title: "Autonomous Operation",
    description: "NoBounce is specially made for autonomous operation. In absence of mobile phone, it can notify your trusted contacts, provide real-time location tracking, and even alert emergency services on your behalf.",
  },
];

const WhyNoBounce = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="why" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-safety/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 px-4">
            Why <span className="text-gradient">NoBounce</span> will Stand Out
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            NoBounce solves many of the challenges faced by traditional emergency alert systems and smart wearables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Expanding card effect - desktop only */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ 
                  scale: hoveredCard === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="relative hidden md:block origin-center"
              >
                {/* Glowing circle background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? [1, 1.5] : 1,
                      borderRadius: hoveredCard === index ? "24px" : "50%",
                      opacity: hoveredCard === index ? 0.15 : 0.05,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-48 h-48 border-4 border-primary"
                    style={{
                      filter: "drop-shadow(0 0 20px hsl(var(--primary)))",
                    }}
                  />
                </div>

                <div className="relative bg-card rounded-3xl p-6 md:p-8 shadow-lg border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? 0 : 1,
                      opacity: hoveredCard === index ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 shadow-lg shadow-primary/30"
                  >
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>

                  <motion.div
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0,
                      x: hoveredCard === index ? 0 : -50,
                    }}
                    transition={{ duration: 0.5, delay: hoveredCard === index ? 0.3 : 0 }}
                    className="absolute top-6 right-6 pointer-events-none"
                  >
                    <feature.icon className="w-32 h-32 text-primary/20" />
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>

              {/* Mobile version - simple card */}
              <div className="block md:hidden relative bg-card rounded-3xl p-6 shadow-lg border border-border active:border-primary/50 active:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-3 active:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNoBounce;
