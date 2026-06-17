"use client";

import Link from "next/link";
import {
  Code2,
  Globe,
  Mail,
  FileText,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Github, LinkedIn } from "@/components/icons";
import ThemeToggle from "./ThemeToggle";
import { motion, type Variants } from "framer-motion";

const links = [
  {
    icon: Globe,
    label: "Portfolio",
    description: "My personal website",
    href: "/",
  },
  {
    icon: Github,
    label: "GitHub",
    description: "View my GitHub profile",
    href: "https://github.com/miguelcollaco",
  },
  {
    icon: LinkedIn,
    label: "LinkedIn",
    description: "View my LinkedIn profile",
    href: "https://www.linkedin.com/in/miguelcollaco",
  },
  {
    icon: Mail,
    label: "Email",
    description: "Get in touch with me",
    href: "mailto:miguel.l.collaco@gmail.com",
  },
  {
    icon: FileText,
    label: "Curriculum Vitae",
    description: "View my CV",
    href: "/Miguel_Collaco_CV.pdf",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function Links() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 py-8">
      {/* Top bar */}
      <div className="w-full max-w-md flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-lg">MC</span>
        </Link>
        <ThemeToggle />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md flex flex-col items-center mt-14"
      >
        {/* Monogram */}
        <motion.div
          variants={item}
          className="flex size-16 items-center justify-center rounded-2xl border border-border bg-card text-xl font-bold tracking-tight"
        >
          MC
        </motion.div>

        <motion.h1 variants={item} className="mt-5 text-2xl font-bold">
          Miguel Collaço
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground"
        >
          <span>Software Engineer</span>
          <span className="text-border">•</span>
          <span>CSE Student</span>
          <span className="text-border">•</span>
          <span>Projects Director</span>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <MapPin className="w-4 h-4" />
          <span>Based in Portugal</span>
        </motion.div>

        {/* Link cards */}
        <div className="mt-9 w-full flex flex-col gap-2.5">
          {links.map((l) => (
            <motion.div key={l.label} variants={item}>
              <Link
                href={l.href}
                target={isExternal(l.href) ? "_blank" : undefined}
                rel={isExternal(l.href) ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-lg border bg-card/60 p-3 backdrop-blur-sm card-hover-scale"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <l.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold leading-tight">{l.label}</span>
                  <span className="text-xs text-muted-foreground">{l.description}</span>
                </div>
                <ArrowUpRight className="ml-auto w-4 h-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-auto pt-12 w-full max-w-md flex flex-col items-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Miguel Collaço. All rights reserved.</p>
      </footer>
    </main>
  );
}
