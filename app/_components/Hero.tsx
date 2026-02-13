"use client";

import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Button } from "./ui/Button";
import { fadeInUp, fadeInRight } from "./animations/AnimatedSection";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">AVAILABLE FOR INTERNSHIPS</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building the{" "}
                <span className="gradient-text">future</span> through robust logic.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                I'm a Computer Science & Engineering student based in Portugal, specialized in distributed systems and cloud architecture.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-6">
                View GitHub
                <LuArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-border hover:bg-secondary gap-2 px-6">
                Let's talk
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:justify-self-end w-full max-w-md"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
};
