import { motion } from "framer-motion";
import { AlertCircle, Smartphone, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Delayed Emergency Awareness",
    description: "Emergency situations often go unnoticed until it's too late, leading to delayed responses and increased risks.",
    color: "safety",
  },
  {
    icon: Smartphone,
    title: "Mobile Dependency",
    description: "Many rings and emergency devices rely on mobile phones, which may not always be accessible or functional during emergencies.",
    color: "primary",
  },
  {
    icon: DollarSign,
    title: "Expensive Solutions",
    description: "Current emergency alert systems or smart wearables that have less dependence can be costly, making them inaccessible to a large portion of the population.",
    color: "safety",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 px-4">The Problem</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Every day, <span className="text-safety font-bold">24,000 people die in India</span> due to late medical response. Moreover,
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-border"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-${problem.color}/10 flex items-center justify-center mb-4 md:mb-6`}
              >
                <problem.icon className={`w-6 h-6 md:w-8 md:h-8 text-${problem.color}`} />
              </motion.div>

              <h3 className="text-lg md:text-2xl font-heading font-bold mb-3 md:mb-4">{problem.title}</h3>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
