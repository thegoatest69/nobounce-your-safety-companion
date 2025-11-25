import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Heart, MapPin } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const words = ["Elders", "Indians", "Women", "Everyone"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 md:top-20 left-10 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-safety/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left px-4 md:px-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 rounded-full text-xs md:text-sm font-medium text-primary overflow-hidden"
            >
              <span className="inline-flex items-center gap-2">
                Safety-First For{" "}
                <motion.span
                  key={currentWord}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block font-bold min-w-[80px] md:min-w-[100px] text-center"
                >
                  {words[currentWord]}
                </motion.span>
              </span>
            </motion.div>

            {/* Expandable NoBounce Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 md:mb-6"
            >
              <motion.div
                animate={{
                  width: isExpanded ? "100%" : "auto",
                }}
                transition={{ duration: 0.5, delay: isExpanded ? 0 : 0.2 }}
                onHoverStart={() => setIsExpanded(true)}
                onHoverEnd={() => setIsExpanded(false)}
                onClick={() => setIsExpanded(!isExpanded)}
                className="relative inline-block cursor-pointer max-w-full"
              >
                {/* Glowing circle background */}
                <motion.div
                  animate={{
                    scale: isExpanded ? [1, 1.5] : 1,
                    borderRadius: isExpanded ? "24px" : "50%",
                    width: isExpanded ? "100%" : "200px",
                    height: isExpanded ? "auto" : "200px",
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 border-4 border-primary/30"
                  style={{
                    filter: "drop-shadow(0 0 20px hsl(var(--primary)))",
                  }}
                />

                <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-4 md:p-6 overflow-hidden">
                  {/* Logo/Brand - scales down when expanded */}
                  <motion.div
                    animate={{
                      scale: isExpanded ? 0 : 1,
                      opacity: isExpanded ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, delay: isExpanded ? 0 : 0.3 }}
                    className="text-center"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-gradient whitespace-nowrap">
                      NoBounce
                    </h1>
                  </motion.div>

                  {/* Expanded content */}
                  <motion.div
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      visibility: isExpanded ? "visible" : "hidden",
                      x: isExpanded ? 0 : -50,
                    }}
                    transition={{ duration: 0.5, delay: isExpanded ? 0.4 : 0 }}
                    className="space-y-3"
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-gradient">
                      NoBounce
                    </h1>
                    <p className="text-sm md:text-base text-foreground/90">
                      Your Guardian On Finger
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">
                        AI-Powered
                      </span>
                      <span className="px-3 py-1 bg-safety/20 rounded-full text-xs font-medium text-safety">
                        24/7 Safety
                      </span>
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">
                        Autonomous
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Emergency detection ring that works without a phone. Tap to explore →
                    </p>
                  </motion.div>

                  {/* Ring icon that appears on expand */}
                  <motion.div
                    animate={{
                      scale: isExpanded ? 1 : 0,
                      rotate: isExpanded ? 15 : 315,
                      x: isExpanded ? 0 : -50,
                      y: isExpanded ? 0 : -50,
                    }}
                    transition={{ duration: 0.5, delay: isExpanded ? 0.5 : 0 }}
                    className="absolute bottom-4 right-4 md:bottom-6 md:right-6"
                  >
                    <Shield className="w-16 h-16 md:w-20 md:h-20 text-primary/40" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-4 md:mb-6 leading-tight"
            >
              Your Guardian On Finger
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              The Autonomous Emergency Ring that ensures help is always within reach, even without a mobile phone. From notifying your trusted contacts to providing real-time location tracking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <a href="#waitlist" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Join Waitlist</span>
                  <motion.div
                    className="absolute inset-0 bg-primary-dark"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </a>

              <a href="#problem" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto group border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
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

          {/* Right content - Feature cards with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0 px-4 md:px-0"
          >
            <motion.div
              animate={{
                x: mousePosition.x * 0.3,
                y: mousePosition.y * 0.3,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="relative w-full max-w-sm md:max-w-lg"
            >
              {/* Central ring icon */}
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
              
              {/* Floating feature badges */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: mousePosition.x * 0.5,
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-0 md:left-0 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border-2 border-safety/30"
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
                className="absolute bottom-0 right-0 md:right-0 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border-2 border-primary/30"
              >
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
                <p className="text-xs md:text-sm font-semibold">Live</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Location</p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: mousePosition.x * 0.4,
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/3 -right-2 md:-right-4 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border-2 border-primary/30"
              >
                <div className="text-2xl md:text-3xl mb-1">🤖</div>
                <p className="text-xs md:text-sm font-semibold">AI</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Powered</p>
              </motion.div>
            </motion.div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-safety/10 blur-3xl opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
