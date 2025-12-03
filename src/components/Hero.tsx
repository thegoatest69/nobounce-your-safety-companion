import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0 perspective-container"
    >
      {/* Parallax Background Layers */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Deep layer orbs */}
        <motion.div
          style={{ 
            x: mousePosition.x * 0.5, 
            y: mousePosition.y * 0.5,
            scale: orbScale,
            opacity: orbOpacity
          }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          style={{ 
            x: mousePosition.x * -0.3, 
            y: mousePosition.y * -0.3 
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-radial from-safety/15 via-safety/5 to-transparent rounded-full blur-3xl"
        />

        {/* Mid layer floating elements */}
        <motion.div
          style={{ 
            x: mousePosition.x * 1.2, 
            y: mousePosition.y * 1.2 
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"
        />
        
        <motion.div
          style={{ 
            x: mousePosition.x * -0.8, 
            y: mousePosition.y * -0.8 
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-safety/0 via-safety/20 to-safety/0"
        />

        {/* Floating orbs with depth */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              x: mousePosition.x * (0.3 + i * 0.2),
              width: 4 + i * 2,
              height: 4 + i * 2,
              left: `${15 + i * 18}%`,
              top: `${20 + i * 12}%`,
              background: i % 2 === 0 
                ? 'hsl(var(--primary) / 0.5)' 
                : 'hsl(var(--safety) / 0.5)',
            }}
            animate={{
              y: [0, -20 - i * 5, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute rounded-full blur-sm"
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Safety badge with parallax */}
            <motion.div
              style={{ 
                x: mousePosition.x * 0.1, 
                y: mousePosition.y * 0.1 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isExpanded ? 0 : 1, 
                y: isExpanded ? -20 : 0 
              }}
              transition={{ delay: isExpanded ? 0 : 0.2, duration: 0.3 }}
              className="inline-block mb-4 px-3 md:px-4 py-1.5 md:py-2 glass rounded-full text-xs md:text-sm font-medium text-primary"
            >
              <span className="inline-flex items-center gap-1 md:gap-2">
                Safety-First For{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block font-bold min-w-[80px] text-center"
                  >
                    {words[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            {/* Main interactive orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 md:gap-6"
            >
              <motion.p
                style={{ 
                  x: mousePosition.x * 0.05, 
                  y: mousePosition.y * 0.05 
                }}
                animate={{ 
                  opacity: isExpanded ? 0 : 1,
                  y: isExpanded ? -20 : 0
                }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-lg font-medium text-foreground/70"
              >
                Tap to Learn More
              </motion.p>
              
              {/* 3D Depth Container for main orb */}
              <motion.div
                style={{
                  x: mousePosition.x * 0.15,
                  y: mousePosition.y * 0.15,
                  rotateX: mousePosition.y * -0.1,
                  rotateY: mousePosition.x * 0.1,
                }}
                animate={{ 
                  width: isExpanded ? (isMobile ? "90vw" : "600px") : (isMobile ? "200px" : "250px"),
                  height: isExpanded ? (isMobile ? "auto" : "350px") : (isMobile ? "200px" : "250px"),
                  borderRadius: isExpanded ? "24px" : "50%"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
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
                className="relative glass-strong cursor-pointer flex items-center justify-center p-6 md:p-8 group"
                whileHover={{ scale: isExpanded ? 1 : 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow ring */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-primary/20 to-safety/20 blur-xl -z-10"
                />
                
                {/* Inner border glow */}
                <div className="absolute inset-0 rounded-[inherit] border-2 border-primary/30 group-hover:border-primary/50 transition-colors" />
                
                {/* Collapsed state */}
                <motion.div
                  animate={{ scale: isExpanded ? 0 : 1, opacity: isExpanded ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <motion.div 
                      animate={{ 
                        boxShadow: [
                          '0 0 20px hsl(var(--primary) / 0.4)',
                          '0 0 40px hsl(var(--primary) / 0.6)',
                          '0 0 20px hsl(var(--primary) / 0.4)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center"
                    >
                      <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                    </motion.div>
                    <h1 className="text-2xl md:text-3xl font-heading font-bold text-gradient text-center">
                      NoBounce
                    </h1>
                  </div>
                </motion.div>

                {/* Expanded state */}
                <motion.div
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    visibility: isExpanded ? "visible" : "hidden",
                    scale: isExpanded ? 1 : 0.8
                  }}
                  transition={{ duration: 0.5, delay: isExpanded ? 0.2 : 0 }}
                  className="w-full space-y-4 md:space-y-6"
                >
                  <div className="text-center space-y-3">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-gradient">
                      NoBounce
                    </h1>
                    <p className="text-sm md:text-lg text-foreground/90 font-medium">Your Guardian On Finger</p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      The Autonomous Emergency Ring that ensures help is always within reach, even without a mobile phone.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {["AI-Powered", "24/7 Safety", "No Phone Needed"].map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                          i === 0 ? 'bg-primary/20 text-primary' :
                          i === 1 ? 'bg-safety/20 text-safety' :
                          'bg-primary/10 text-foreground/80'
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center text-sm md:text-base text-foreground/70 font-medium pt-2"
                  >
                    Scroll to Discover
                  </motion.p>
                </motion.div>

                {/* Decorative shield */}
                <motion.div
                  animate={{
                    scale: isExpanded ? 1 : 0,
                    rotate: isExpanded ? 15 : 315,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-4 right-4 md:bottom-6 md:right-6"
                >
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary/20" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
