"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import PHOTO from "@/public/photo.webp";

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
            className="order-2 lg:order-1"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Computer Science and Engineering student based in Portugal with a strong interest in technology and how it shapes the way we live and connect. From a young age, I've always been drawn to tech, and over time I developed a particular interest in cybersecurity, distributed systems, and web development.
              <br/><br/>
              I enjoy learning how systems work behind the scenes, building reliable applications, and exploring ways to make technology more secure and efficient.
              <br/><br/>
              Outside of tech, I enjoy movies, music, gaming, and going to the gym.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-5/6 w-full order-1 lg:order-2 lg:justify-self-end max-w-sm mx-auto relative"
          >
            <Image
              src={PHOTO}
              alt="Miguel Collaço"
              priority
              className="h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
