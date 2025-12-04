import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import ParticleField from "./ParticleField";

const phases = [
  {
    phase: "Phase 1",
    title: "Research & Planning",
    status: "Completed",
    description: "Research, planning, and initial development of core features.",
    completed: true,
  },
  {
    phase: "Phase 2",
    title: "Prototype/MVP",
    status: "Nov 2025",
    description: "Presenting the prototype/MVP and gathering feedback.",
    completed: false,
  },
  {
    phase: "Phase 3",
    title: "Product Launch",
    status: "2026",
    description: "Launching the real product with full features.",
    completed: false,
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    status: "2026+",
    description: "Expanding features, user base, and market reach.",
    completed: false,
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/10 blur-[150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
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
            Our Journey
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Where we've been and where we're headed.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-primary via-accent-cyan to-primary/30" />
          </div>

          <div className="space-y-8 md:space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8`}
              >
                {/* Content card */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className={`glass rounded-3xl p-6 md:p-8 border ${
                      phase.completed ? "border-primary/50" : "border-border"
                    }`}
                    style={{
                      boxShadow: phase.completed ? "0 0 40px hsl(var(--primary) / 0.2)" : "none",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-semibold text-primary tracking-wider">{phase.phase}</span>
                        <h3 className="text-xl md:text-2xl font-heading font-bold mt-1">{phase.title}</h3>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                          phase.completed
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground">{phase.description}</p>
                  </motion.div>
                </div>

                {/* Center icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full glass-strong border border-primary/30 items-center justify-center z-10">
                  {phase.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
