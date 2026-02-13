"use client";

import { useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { motion } from "framer-motion";
import { Button } from "@/app/_components/ui/Button";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  function toggle() {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="relative w-9 h-9 rounded-lg"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <LuMoon className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          rotate: !isDark ? 0 : -180,
          scale: !isDark ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <LuSun className="w-5 h-5" />
      </motion.div>
    </Button>
  );
};
