import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronDown } from "lucide-react";
import ParticleField from "./ParticleField";

const Hero = ({ onDiscover }: { onDiscover: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 1024 : false);

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

  const handleInteraction = () => {
    setIsExpanded(true);
    setTimeout(() => onDiscover(), 1500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/10" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-cyan/15 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-accent-pink/10 blur-[80px]"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <ParticleField count={40} />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center perspective-1000">
          
          {/* Main interactive orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Instruction text */}
            <motion.p
              animate={{ 
                opacity: isExpanded ? 0 : 1,
                y: isExpanded ? -30 : 0
              }}
              className="text-sm md:text-base text-muted-foreground mb-6 text-center tracking-widest uppercase"
            >
              {isMobile ? "Tap" : "Hover"} to discover
            </motion.p>

            {/* Interactive container */}
            <motion.div
              animate={{ 
                width: isExpanded ? (isMobile ? "90vw" : "700px") : (isMobile ? "220px" : "280px"),
                height: isExpanded ? (isMobile ? "auto" : "400px") : (isMobile ? "220px" : "280px"),
                borderRadius: isExpanded ? "32px" : "50%",
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => {
                if (!isMobile && !isExpanded) handleInteraction();
              }}
              onClick={() => {
                if (!isExpanded) handleInteraction();
              }}
              className="relative glass cursor-pointer overflow-hidden"
              style={{
                boxShadow: "0 0 80px hsl(var(--primary) / 0.3), inset 0 0 60px hsl(var(--primary) / 0.1)",
              }}
            >
              {/* Rotating border gradient */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-50%] bg-gradient-conic from-primary via-accent-cyan to-primary opacity-30"
                  style={{
                    background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent-cyan)), hsl(var(--accent-pink)), hsl(var(--primary)))",
                  }}
                />
              </div>
              
              {/* Inner content container */}
              <div className="absolute inset-[2px] rounded-full bg-card flex items-center justify-center"
                style={{ borderRadius: isExpanded ? "30px" : "50%" }}
              >
                {/* Collapsed state - Logo */}
                <motion.div
                  animate={{ 
                    scale: isExpanded ? 0 : 1, 
                    opacity: isExpanded ? 0 : 1 
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute flex flex-col items-center gap-4"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center glow-primary">
                      <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                    </div>
                  </motion.div>
                  <h1 className="text-2xl md:text-3xl font-heading font-bold text-gradient">
                    NoBounce
                  </h1>
                </motion.div>

                {/* Expanded state - Content */}
                <motion.div
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    scale: isExpanded ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.6, delay: isExpanded ? 0.3 : 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: isExpanded ? 0 : 20, opacity: isExpanded ? 1 : 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center space-y-4 md:space-y-6"
                  >
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient">
                      NoBounce
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/90 font-medium">
                      Your Guardian On Finger
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                      The autonomous emergency ring that ensures help is always within reach, even without a mobile phone.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 justify-center pt-4">
                      <span className="px-4 py-2 glass rounded-full text-xs font-medium text-primary border border-primary/30">
                        AI-Powered
                      </span>
                      <span className="px-4 py-2 glass rounded-full text-xs font-medium text-accent-cyan border border-accent-cyan/30">
                        24/7 Safety
                      </span>
                      <span className="px-4 py-2 glass rounded-full text-xs font-medium text-accent-pink border border-accent-pink/30">
                        No Phone Needed
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ 
                opacity: isExpanded ? 1 : 0,
                y: isExpanded ? 0 : 20
              }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
