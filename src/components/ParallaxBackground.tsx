import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep layer - slowest */}
      <motion.div
        style={{ y: y1, rotate: rotate1, scale }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-glow-pulse"
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-safety/5 to-transparent blur-3xl animate-glow-pulse"
        initial={{ opacity: 0.3 }}
      />

      {/* Mid layer */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/8 to-primary-glow/5 blur-2xl"
      />

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-4 h-4 rounded-full bg-primary/40 blur-sm"
      />
      
      <motion.div
        animate={{
          y: [15, -25, 15],
          x: [5, -15, 5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] right-[15%] w-6 h-6 rounded-full bg-safety/30 blur-sm"
      />
      
      <motion.div
        animate={{
          y: [-30, 10, -30],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[80%] left-[30%] w-3 h-3 rounded-full bg-primary-glow/50 blur-sm"
      />

      {/* Grid lines for depth */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
    </div>
  );
};
