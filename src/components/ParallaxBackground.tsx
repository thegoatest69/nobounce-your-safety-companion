import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 0.3, 0.1]);

  const springConfig = { stiffness: 30, damping: 20 };
  const mouseXSpring = useSpring(0, springConfig);
  const mouseYSpring = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      mouseXSpring.set(x);
      mouseYSpring.set(y);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseXSpring, mouseYSpring]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />

      {/* Deep layer - Large ambient glows */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0"
      >
        <motion.div
          style={{ x: mouseXSpring, y: mouseYSpring }}
          className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vh] rounded-full bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-[100px]"
        />
        <motion.div
          style={{ x: mouseXSpring, y: mouseYSpring }}
          className="absolute bottom-[-20%] right-[-20%] w-[70vw] h-[70vh] rounded-full bg-gradient-radial from-safety/8 via-safety/3 to-transparent blur-[100px]"
        />
      </motion.div>

      {/* Mid layer - Geometric shapes */}
      <motion.div
        style={{ y: y2, rotate }}
        className="absolute inset-0"
      >
        {/* Large ring */}
        <motion.div
          style={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full border border-primary/5"
        />
        
        {/* Medium ring */}
        <motion.div
          style={{ x: mousePos.x * -0.15, y: mousePos.y * -0.15 }}
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full border border-safety/5"
        />

        {/* Diagonal lines */}
        <motion.div
          style={{ x: mousePos.x * 0.1 }}
          className="absolute top-[30%] left-[20%] w-px h-[200px] bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-45"
        />
        <motion.div
          style={{ x: mousePos.x * -0.1 }}
          className="absolute top-[50%] right-[25%] w-px h-[150px] bg-gradient-to-b from-transparent via-safety/15 to-transparent -rotate-45"
        />
      </motion.div>

      {/* Foreground - Floating particles */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -50 - (i % 5) * 20, 0],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + (i % 6) * 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            className="absolute rounded-full"
            style={{
              width: 2 + (i % 4) * 2,
              height: 2 + (i % 4) * 2,
              left: `${3 + (i * 3.2) % 94}%`,
              top: `${5 + (i * 5.7) % 90}%`,
              background: i % 3 === 0 
                ? 'hsl(var(--primary) / 0.4)' 
                : i % 3 === 1
                ? 'hsl(var(--safety) / 0.3)'
                : 'hsl(var(--foreground) / 0.2)',
            }}
          />
        ))}
      </motion.div>

      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.5)_50%,hsl(var(--background))_100%)]" />
    </div>
  );
};
