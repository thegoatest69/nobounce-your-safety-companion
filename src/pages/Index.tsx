import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhyNoBounce from "@/components/WhyNoBounce";
import HowItWorks from "@/components/HowItWorks";
import ProductShowcase from "@/components/ProductShowcase";
import Roadmap from "@/components/Roadmap";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <WhyNoBounce />
      <HowItWorks />
      <ProductShowcase />
      <Roadmap />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
