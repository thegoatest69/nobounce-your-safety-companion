import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Waitlist = () => {
  return (
    <section id="waitlist" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-safety/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Join Waitlist</h2>
            <p className="text-xl text-muted-foreground">
              Request early access to curated insights and custom feeds.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 shadow-2xl border border-border"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-12 text-base border-2 focus:border-primary transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-base">Company</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Optional"
                  className="h-12 text-base border-2 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="usage" className="text-base">How will you use our news feed? *</Label>
                <Textarea
                  id="usage"
                  placeholder="Tell us about your use case..."
                  className="min-h-32 text-base border-2 focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-base">Your Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Sri Ganganagar, Rajasthan (From where it is being built)"
                  className="h-12 text-base border-2 focus:border-primary transition-colors"
                />
                <p className="text-sm text-muted-foreground">It will help us expand us</p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
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
