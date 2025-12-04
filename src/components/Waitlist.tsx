import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ParticleField from "./ParticleField";

const Waitlist = () => {
  return (
    <section id="waitlist" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-pink/10 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <ParticleField count={25} />
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Early Access
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Join <span className="text-gradient">Waitlist</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Request early access to curated insights and custom feeds.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8 md:p-10 border border-primary/20"
            style={{
              boxShadow: "0 0 60px hsl(var(--primary) / 0.15)",
            }}
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-12 bg-background/50 border-border focus:border-primary rounded-xl transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Optional"
                  className="h-12 bg-background/50 border-border focus:border-primary rounded-xl transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="usage" className="text-sm font-medium">How will you use NoBounce? *</Label>
                <Textarea
                  id="usage"
                  placeholder="Tell us about your use case..."
                  className="min-h-28 bg-background/50 border-border focus:border-primary rounded-xl transition-colors resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium">Your Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City, Country"
                  className="h-12 bg-background/50 border-border focus:border-primary rounded-xl transition-colors"
                />
                <p className="text-xs text-muted-foreground">Helps us plan our expansion</p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 rounded-xl"
                  style={{
                    boxShadow: "0 0 40px hsl(var(--primary) / 0.4)",
                  }}
                >
                  Join Waitlist
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
