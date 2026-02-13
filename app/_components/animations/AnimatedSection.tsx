import { motion, Variants, Easing } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: easeOut }
  }
};

export const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: easeOut }}
    variants={fadeInUp}
    className={className}
  >
    {children}
  </motion.div>
);

export const AnimatedStaggerContainer = ({ children, className = "" }: Omit<AnimatedSectionProps, 'delay'>) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={staggerContainer}
    className={className}
  >
    {children}
  </motion.div>
);

export const AnimatedStaggerItem = ({ children, className = "" }: Omit<AnimatedSectionProps, 'delay'>) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);
