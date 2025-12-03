import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const ParallaxLayer = ({ 
  children, 
  speed = 0.5, 
  className = "",
  direction = "up"
}: ParallaxLayerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    const distance = 100 * speed;
    switch (direction) {
      case "up": return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      case "down": return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
      case "left": return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      case "right": return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
    }
  };

  const transform = getTransform();
  const isHorizontal = direction === "left" || direction === "right";

  return (
    <motion.div
      ref={ref}
      style={isHorizontal ? { x: transform } : { y: transform }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export const FloatingElement = ({
  children,
  className = "",
  delay = 0,
  duration = 6,
  distance = 20
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
        rotateZ: [-2, 2, -2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface DepthLayerProps {
  children: ReactNode;
  depth: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export const DepthLayer = ({ children, depth, className = "" }: DepthLayerProps) => {
  const scales = { 1: 1, 2: 0.95, 3: 0.9, 4: 0.85, 5: 0.8 };
  const blurs = { 1: 0, 2: 0, 3: 1, 4: 2, 5: 3 };
  const opacities = { 1: 1, 2: 0.9, 3: 0.7, 4: 0.5, 5: 0.3 };

  return (
    <motion.div
      initial={{ scale: scales[depth], opacity: opacities[depth] }}
      style={{
        filter: `blur(${blurs[depth]}px)`,
        transform: `scale(${scales[depth]}) translateZ(${-depth * 50}px)`,
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};
