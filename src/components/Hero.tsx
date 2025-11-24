import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroRing from "@/assets/hero-ring.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-safety/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
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
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary"
            >
              Safety-First For Elders • Indians • Women • Everyone
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              <span className="text-gradient">NoBounce</span>
              <br />
              Your Guardian
              <br />
              On Finger
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 max-w-xl"
            >
              The Autonomous Emergency Ring that ensures help is always within reach, even without a mobile phone. From notifying your trusted contacts to providing real-time location tracking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Join Waitlist</span>
                <motion.div
                  className="absolute inset-0 bg-primary-dark"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              An Idea by Students 🎓
            </motion.p>
          </motion.div>

          {/* Right content - Animated ring with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="relative"
            >
              <motion.img
                src={heroRing}
                alt="NoBounce Emergency Ring"
                className="w-full max-w-2xl animate-float"
                animate={{
                  rotateZ: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              
              {/* Floating badges */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: mousePosition.x * 0.5,
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -left-10 bg-card p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="text-2xl">🚨</div>
                <p className="text-xs font-semibold mt-1">Emergency</p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  x: mousePosition.x * 0.3,
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 -right-10 bg-card p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="text-2xl">📍</div>
                <p className="text-xs font-semibold mt-1">Live Location</p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: mousePosition.x * 0.4,
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -right-20 bg-card p-4 rounded-2xl shadow-xl border border-border"
              >
                <div className="text-2xl">🤖</div>
                <p className="text-xs font-semibold mt-1">AI Powered</p>
              </motion.div>
            </motion.div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-safety/20 blur-3xl opacity-50 animate-pulse-glow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
