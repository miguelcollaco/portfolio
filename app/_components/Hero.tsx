"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoIosMail, IoIosMailOpen } from "react-icons/io";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="ml-3 md:ml-20 max-w-4xl">
        <div className="space-y-8">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">
              AVAILABLE FOR INTERNSHIPS
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building the <span className="gradient-text">future</span><br/>through
              robust logic
            </h1>
            <p className="text-lg text-muted-foreground">
              I'm a Computer Science & Engineering student based in Portugal
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="flex items-center gap-3">
            <a
              href="https://github.com/miguelcollaco"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="h-full w-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/miguelcollaco"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-full w-full" />
            </a>
            <a
              href="mailto:miguel.l.collaco@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-9 h-9 p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <IoIosMail className="h-full w-full group-hover:hidden" />
              <IoIosMailOpen className="h-full w-full hidden group-hover:block" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
