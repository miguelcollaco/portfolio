"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};
const viewport = { once: true, margin: "-80px" };

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          {...fadeUp}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">WHO I AM</span>
          <h2 className="section-title mt-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeUp}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Miguel Collaço, a Computer Science & Engineering student at NOVA School of Science and Technology in Portugal. I'm currently pursuing my MSc, with a major in Programming Languages and Software Systems and a minor in Systems and Software Security.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm passionate about building reliable, scalable software — from distributed systems and cloud architecture to backend services and developer tooling. I enjoy turning complex problems into clean, robust solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Outside of coding, I'm always looking for new challenges — whether that's exploring new technologies, contributing to open source, or collaborating with teams that push the boundaries of what's possible.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full w-full order-1 lg:order-2 lg:justify-self-end max-w-sm mx-auto relative"
          >
            <Image
              src="/photo.webp"
              alt="Miguel Collaço"
              fill
              priority
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
