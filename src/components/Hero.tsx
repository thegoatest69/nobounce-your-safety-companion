import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Heart, MapPin } from "lucide-react";

const Hero = ({ onDiscover }: { onDiscover: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 1024 : false);
  const words = ["Elders", "Indians", "Women", "Everyone"];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5 py-12 md:py-0">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-48 h-48 md:w-96 md:h-96 bg-safety/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
            <div className="grid grid-cols-1 gap-6 md:gap-12 items-center justify-center">          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 rounded-full text-xs md:text-sm font-medium text-primary"
            >
              <span className="inline-flex items-center gap-1 md:gap-2">
                Safety-First For{" "}
                <motion.span
                  key={currentWord}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block font-bold min-w-fit"
                >
                  {words[currentWord]}
                </motion.span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 md:gap-6"
            >
              <motion.p
                animate={{ 
                  opacity: isExpanded ? 0 : 1,
                  y: isExpanded ? -20 : 0
                }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-lg font-medium text-foreground/70"
              >
                Tap to Learn More
              </motion.p>
              
              <motion.div
                animate={{ 
                  width: isExpanded ? (isMobile ? "90vw" : "600px") : (isMobile ? "200px" : "250px"),
                  height: isExpanded ? (isMobile ? "auto" : "350px") : (isMobile ? "200px" : "250px"),
                  borderRadius: isExpanded ? "24px" : "50%"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onHoverStart() => !isMobile && setIsExpanded(true)}
                onHoverEnd={() => !isMobile && setIsExpanded(false)}
                onClick={() => {
                  if (isMobile) {
                    setIsExpanded(true);
                    setTimeout(() => onDiscover(), 800);
                  }
                }}
                className="relative bg-gradient-to-br from-primary/20 to-safety/20 backdrop-blur-sm border-4 border-primary/30 cursor-pointer flex items-center justify-center shadow-2xl shadow-primary/50 p-6 md:p-8"
              >
                <motion.div
                  animate={{ scale: isExpanded ? 0 : 1, opacity: isExpanded ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                      <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-heading font-bold text-gradient text-center">
                      NoBounce
                    </h1>
                  </div>
                </motion.div>

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
                    <span className="px-3 py-1.5 bg-primary/20 rounded-full text-xs font-medium text-primary">
                      AI-Powered
                    </span>
                    <span className="px-3 py-1.5 bg-safety/20 rounded-full text-xs font-medium text-safety">
                      24/7 Safety
                    </span>
                    <span className="px-3 py-1.5 bg-primary/10 rounded-full text-xs font-medium">
                      No Phone Needed
                    </span>
                  </div>

                  <p className="text-center text-sm md:text-base text-foreground/70 font-medium pt-2">
                    Scroll to Discover
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    scale: isExpanded ? 1 : 0,
                    rotate: isExpanded ? 15 : 315,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-4 right-4 md:bottom-6 md:right-6"
                >
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary/40" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
