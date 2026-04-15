"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className={`absolute duration-500 transition-transform ${isDark ? "scale-100 rotate-0" : "scale-0 rotate-180"}`}>
        <Moon className="w-5 h-5" />
      </div>
      <div className={`absolute duration-500 transition-transform ${isDark ? "scale-0 rotate-180" : "scale-100 rotate-0"}`}>
        <Sun className="w-5 h-5" />
      </div>
    </Button>
  );
};
