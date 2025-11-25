import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

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
    title: "Prototype/MVP Presentation",
    status: "Nov 2025",
    description: "Presenting the prototype/MVP and gathering feedback.",
    completed: false,
  },
  {
    phase: "Phase 3",
    title: "Real Product Launch",
    status: "2026",
    description: "Launching the real product with full features and capabilities.",
    completed: false,
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    status: "2026 and Beyond",
    description: "Expanding features, user base, and market reach.",
    completed: false,
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-12 md:py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 px-4">Our Roadmap</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Here's what we've accomplished and where we're headed on our mission to deliver NoBounce
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-safety to-primary transform -translate-x-1/2" />

          <div className="space-y-6 md:space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-4 md:gap-8`}
              >
                {/* Content card */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4, rotate: index % 2 === 0 ? -1 : 1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-card rounded-lg md:rounded-2xl p-4 md:p-6 shadow-lg border-2 ${
                      phase.completed ? "border-primary" : "border-border"
                    } hover:border-primary/50 hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <div>
                        <h3 className="text-xs md:text-sm font-semibold text-primary mb-1">{phase.phase}</h3>
                        <h4 className="text-base md:text-xl font-heading font-bold">{phase.title}</h4>
                      </div>
                      <span
                        className={`text-[10px] md:text-xs font-semibold px-2 md:px-3 py-1 rounded-full ${
                          phase.completed
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">{phase.description}</p>
                  </motion.div>
                </div>

                {/* Center icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border-4 border-background items-center justify-center shadow-lg">
                  {phase.completed ? (
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  ) : (
                    <Circle className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
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
