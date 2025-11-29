import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoIntro from "@/components/VideoIntro";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhyNoBounce from "@/components/WhyNoBounce";
import HowItWorks from "@/components/HowItWorks";
import ProductShowcase from "@/components/ProductShowcase";
import Roadmap from "@/components/Roadmap";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showFullSite, setShowFullSite] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {showIntro && (
          <VideoIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
      )}
    </div>
  );
};

export default Index;
