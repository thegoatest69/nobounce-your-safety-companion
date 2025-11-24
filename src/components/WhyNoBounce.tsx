import { motion } from "framer-motion";
import { Shield, Clock, Brain, Zap } from "lucide-react";

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
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-safety/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Why <span className="text-gradient">NoBounce</span> will Stand Out
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NoBounce solves many of the challenges faced by traditional emergency alert systems and smart wearables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-safety/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card rounded-3xl p-8 shadow-lg border border-border hover:border-primary/50 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 shadow-lg shadow-primary/30"
                >
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNoBounce;
