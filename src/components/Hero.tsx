import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Shield } from "lucide-react";

const Hero = ({ onDiscover }: { onDiscover: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 1024 : false);
  const words = ["Elders", "Indians", "Women", "Everyone"];
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: x * 30, y: y * 30 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Immersive 3D Background Layers */}
      <div className="absolute inset-0">
        {/* Deep background - slowest parallax */}
        <motion.div 
          style={{ y: backgroundY, scale }}
          className="absolute inset-0"
        >
          {/* Large ambient glow */}
          <motion.div
            style={{ x: smoothMouseX, y: smoothMouseY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15)_0%,transparent_50%)]"
          />
          
          {/* Mountain-like shapes in background */}
          <motion.div 
            style={{ x: mousePosition.x * 0.1, y: mousePosition.y * 0.1 }}
            className="absolute bottom-0 left-0 right-0 h-[60vh]"
          >
            <div className="absolute bottom-0 left-[-10%] w-[60%] h-full bg-gradient-to-t from-muted/30 to-transparent rounded-t-[100%] blur-sm" />
            <div className="absolute bottom-0 right-[-5%] w-[50%] h-[80%] bg-gradient-to-t from-muted/20 to-transparent rounded-t-[100%] blur-sm" />
          </motion.div>
        </motion.div>

        {/* Mid layer - medium parallax */}
        <motion.div 
          style={{ y: foregroundY }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ x: mousePosition.x * 0.3, y: mousePosition.y * 0.3 }}
            className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-2xl"
          />
          <motion.div
            style={{ x: mousePosition.x * -0.2, y: mousePosition.y * -0.2 }}
            className="absolute bottom-[30%] right-[15%] w-[200px] h-[200px] rounded-full bg-gradient-radial from-safety/10 to-transparent blur-2xl"
          />
        </motion.div>

        {/* Foreground floating particles */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                left: `${5 + (i * 4.5) % 90}%`,
                top: `${10 + (i * 7) % 80}%`,
              }}
              animate={{
                y: [0, -30 - (i % 3) * 10, 0],
                x: [0, (i % 2 === 0 ? 10 : -10), 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 rounded-full bg-primary/60"
            />
          ))}
        </motion.div>

        {/* Horizontal scan lines for depth */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 3px)',
          }}
        />

        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_80%)]" />
      </div>

      {/* Main Content Layer */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="relative z-10 w-full"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Manifesto-style label */}
              <motion.div
                style={{ x: mousePosition.x * 0.05, y: mousePosition.y * 0.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isExpanded ? 0 : 1 }}
                className="mb-8"
              >
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono">
                  ////// Safety Revolution
                </span>
              </motion.div>

              {/* Word rotator badge */}
              <motion.div
                style={{ x: mousePosition.x * 0.08, y: mousePosition.y * 0.08 }}
                animate={{ opacity: isExpanded ? 0 : 1, y: isExpanded ? -20 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block mb-6 px-4 py-2 border border-primary/20 rounded-full text-xs md:text-sm font-medium text-primary/80 backdrop-blur-sm"
              >
                <span className="inline-flex items-center gap-2">
                  Protecting{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.4 }}
                      className="inline-block font-bold min-w-[80px] text-center text-foreground"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>

              {/* Tap instruction */}
              <motion.p
                style={{ x: mousePosition.x * 0.03, y: mousePosition.y * 0.03 }}
                animate={{ opacity: isExpanded ? 0 : 0.6 }}
                className="text-sm font-mono tracking-wider text-muted-foreground mb-8"
              >
                [ TAP TO DISCOVER ]
              </motion.p>
              
              {/* Main Interactive Orb */}
              <motion.div
                style={{
                  x: mousePosition.x * 0.15,
                  y: mousePosition.y * 0.15,
                  rotateX: mousePosition.y * -0.05,
                  rotateY: mousePosition.x * 0.05,
                }}
                animate={{ 
                  width: isExpanded ? (isMobile ? "90vw" : "600px") : (isMobile ? "220px" : "280px"),
                  height: isExpanded ? (isMobile ? "auto" : "380px") : (isMobile ? "220px" : "280px"),
                  borderRadius: isExpanded ? "32px" : "50%"
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => {
                  if (!isMobile) {
                    setIsExpanded(true);
                    setTimeout(() => onDiscover(), 1500);
                  }
                }}
                onClick={() => {
                  setIsExpanded(true);
                  setTimeout(() => onDiscover(), 1500);
                }}
                className="relative cursor-pointer flex items-center justify-center p-8 md:p-10 mx-auto group perspective-container"
              >
                {/* Outer glow ring */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-[-2px] rounded-[inherit] bg-gradient-to-br from-primary/30 via-transparent to-safety/30 blur-xl"
                />
                
                {/* Glass background */}
                <div className="absolute inset-0 rounded-[inherit] bg-background/40 backdrop-blur-xl border border-white/5" />
                
                {/* Inner ring highlight */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-[inherit] border border-primary/10"
                />
                
                {/* Collapsed state - Logo */}
                <motion.div
                  animate={{ scale: isExpanded ? 0 : 1, opacity: isExpanded ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute flex flex-col items-center justify-center gap-4"
                >
                  <motion.div 
                    animate={{ 
                      boxShadow: [
                        '0 0 30px hsl(var(--primary) / 0.3), inset 0 0 30px hsl(var(--primary) / 0.1)',
                        '0 0 60px hsl(var(--primary) / 0.5), inset 0 0 40px hsl(var(--primary) / 0.2)',
                        '0 0 30px hsl(var(--primary) / 0.3), inset 0 0 30px hsl(var(--primary) / 0.1)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary via-primary to-primary-glow flex items-center justify-center"
                  >
                    <Shield className="w-12 h-12 md:w-14 md:h-14 text-primary-foreground drop-shadow-lg" />
                  </motion.div>
                  <div className="space-y-1">
                    <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-gradient">
                      NOBOUNCE
                    </h1>
                    <p className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground font-mono">
                      // Your Guardian
                    </p>
                  </div>
                </motion.div>

                {/* Expanded state - Details */}
                <motion.div
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    visibility: isExpanded ? "visible" : "hidden",
                    scale: isExpanded ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5, delay: isExpanded ? 0.2 : 0 }}
                  className="relative w-full space-y-6"
                >
                  <div className="text-center space-y-4">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono block"
                    >
                      ////// Introducing
                    </motion.span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-gradient">
                      NOBOUNCE
                    </h1>
                    <p className="text-base md:text-xl text-foreground/90 font-medium">
                      Your Guardian On Finger
                    </p>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      The Autonomous Emergency Ring that ensures help is always within reach, even without a mobile phone.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {["AI-Powered", "24/7 Safety", "No Phone Needed"].map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="px-4 py-2 rounded-full text-xs font-mono tracking-wider border border-primary/20 bg-primary/5 text-primary"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.p
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center text-xs md:text-sm text-muted-foreground font-mono tracking-wider pt-4"
                  >
                    [ SCROLL TO EXPLORE ]
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom copyright-style text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 0 : 1 }}
        className="absolute bottom-8 left-8 text-left"
      >
        <p className="text-[10px] font-mono tracking-wider text-muted-foreground/50">
          // Copyright © 2024
        </p>
        <p className="text-[10px] font-mono tracking-wider text-muted-foreground/50">
          NoBounce, Inc.
        </p>
        <p className="text-[10px] font-mono tracking-wider text-muted-foreground/50">
          All Rights Reserved.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-primary/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
