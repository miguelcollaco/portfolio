"use client";

import { motion } from "framer-motion";
import { Code2, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/Button";

export default function Navbar() {
  const navItems = ["Hero", "Experience", "Expertise", "Contact"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="p-2 bg-primary/10 rounded-lg"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code2 className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="font-bold text-lg">MC</span>
          </motion.div>

          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ThemeToggle />
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              onClick={() => scrollToSection("contact")}
            >
              Download CV
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};