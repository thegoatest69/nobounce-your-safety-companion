import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "The Problem", href: "#problem" },
    { name: "Why NoBounce", href: "#why" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Product", href: "#product" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Join Waitlist", href: "#waitlist" },
  ];

  return (
    <footer className="bg-card border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-gradient">NoBounce</h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-md">
              Your safety companion for any situation. Always within reach. Autonomous emergency ring that ensures help is always available, even without a mobile phone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading font-bold mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 md:gap-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border text-center text-xs md:text-sm text-muted-foreground"
        >
          <p>© 2025 NoBounce. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
