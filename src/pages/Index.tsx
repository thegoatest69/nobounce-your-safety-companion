import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhyNoBounce from "@/components/WhyNoBounce";
import HowItWorks from "@/components/HowItWorks";
import ProductShowcase from "@/components/ProductShowcase";
import Roadmap from "@/components/Roadmap";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const Index = () => {
  const [showFullSite, setShowFullSite] = useState(false);

  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      
      <div className="relative z-10">
        <Hero onDiscover={() => setShowFullSite(true)} />
        
        <AnimatePresence>
          {showFullSite && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Problem />
              <WhyNoBounce />
              <HowItWorks />
              <ProductShowcase />
              <Roadmap />
              <Waitlist />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
