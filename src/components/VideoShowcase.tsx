import { motion } from "framer-motion";

const VideoShowcase = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover"
            >
              <source src="/videos/nobounce-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
