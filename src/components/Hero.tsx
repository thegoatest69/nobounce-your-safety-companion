import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Heart, MapPin } from "lucide-react";

const Hero = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 md:mb-6"
            >
              <motion.div
                animate={{ width: isExpanded ? "100%" : "auto" }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => !isMobile && setIsExpanded(true)}
                onHoverEnd={() => !isMobile && setIsExpanded(false)}
                onClick={() => isMobile && setIsExpanded(!isExpanded)}
                className="relative inline-block cursor-pointer w-full md:w-auto"
              >
                <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-3 md:p-6 overflow-hidden border border-primary">
                  <motion.div
                    animate={{ scale: isExpanded ? 0 : 1, opacity: isExpanded ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold text-gradient">
                      NoBounce
                    </h1>
                  </motion.div>

                  <motion.div
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      visibility: isExpanded ? "visible" : "hidden",
                    }}
                    transition={{ duration: 0.5 }}
                    className="space-y-3"
                  >
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-heading font-bold text-gradient">
                      NoBounce
                    </h1>
                    <p className="text-xs md:text-base text-foreground/90">Your Guardian On Finger</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 md:px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">
                        AI-Powered
                      </span>
                      <span className="px-2 md:px-3 py-1 bg-safety/20 rounded-full text-xs font-medium text-safety">
                        24/7 Safety
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      scale: isExpanded ? 1 : 0,
                      rotate: isExpanded ? 15 : 315,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-3 right-3 md:bottom-6 md:right-6"
                  >
                    <Shield className="w-12 h-12 md:w-20 md:h-20 text-primary/40" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-xl md:text-3xl lg:text-4xl font-heading font-semibold mb-4 md:mb-6"
            >
              Your Guardian On Finger
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8"
            >
              The Autonomous Emergency Ring that ensures help is always within reach, even without a mobile phone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <a href="#waitlist" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50">
                  Join Waitlist
                </Button>
              </a>
              <a href="#problem" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-2 border-primary">
                  Learn More
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground"
            >
              An Idea by Students 🎓
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex relative items-center justify-center mt-8 lg:mt-0 px-4 md:px-0"
          >
            <motion.div
              animate={{
                x: isMobile ? 0 : mousePosition.x * 0.3,
                y: isMobile ? 0 : mousePosition.y * 0.3,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="relative w-full max-w-sm md:max-w-lg"
            >
              <motion.div
                animate={{
                  rotateZ: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mx-auto w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/20 to-safety/20 flex items-center justify-center backdrop-blur-sm border-4 border-primary/30"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-2xl shadow-primary/50">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: mousePosition.x * 0.5,
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-0 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border-2 border-safety/30"
              >
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-safety mb-1 md:mb-2" />
                <p className="text-xs md:text-sm font-semibold">Emergency</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Alert</p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  x: mousePosition.x * 0.3,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 right-0 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border-2 border-primary/30"
              >
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
                <p className="text-xs md:text-sm font-semibold">Live</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Location</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
