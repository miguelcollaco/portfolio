"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggle() {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="relative w-9 h-9 rounded-full hover:bg-accent/10 hover:text-foreground"
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
