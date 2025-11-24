import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "The Problem", href: "#problem" },
    { name: "Why NoBounce", href: "#why" },
    { name: "Resources", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading font-bold text-gradient">NoBounce</h3>
            <p className="text-muted-foreground">
              Your safety companion for any situation. Always within reach.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>© 2025 NoBounce. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
