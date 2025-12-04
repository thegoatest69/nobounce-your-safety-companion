import { motion } from "framer-motion";
import { AlertCircle, Smartphone, DollarSign } from "lucide-react";
import ParticleField from "./ParticleField";

const problems = [
  {
    icon: AlertCircle,
    title: "Delayed Emergency Awareness",
    description: "Emergency situations often go unnoticed until it's too late, leading to delayed responses and increased risks.",
    gradient: "from-accent-orange to-accent-pink",
  },
  {
    icon: Smartphone,
    title: "Mobile Dependency",
    description: "Many emergency devices rely on mobile phones, which may not always be accessible during emergencies.",
    gradient: "from-primary to-accent-cyan",
  },
  {
    icon: DollarSign,
    title: "Expensive Solutions",
    description: "Current emergency systems can be costly, making them inaccessible to a large portion of the population.",
    gradient: "from-accent-cyan to-primary",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <motion.div
        className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-accent-orange/10 blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <ParticleField count={20} />
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
            The Challenge
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            The <span className="text-gradient">Problem</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every day, <span className="text-accent-orange font-semibold">24,000 people die in India</span> due to late medical response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-full glass rounded-3xl p-8 overflow-hidden"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <problem.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                  {problem.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${problem.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
