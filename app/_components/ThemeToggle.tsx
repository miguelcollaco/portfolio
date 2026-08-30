"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * The `dark` class on <html> is applied before first paint by the bootstrap
 * script in the root layout, and the icons are driven by the `dark:` variant
 * off that same class. Keeping no React state here means no hydration
 * mismatch and no flash of the wrong icon.
 */
export default function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage unavailable (private mode); the toggle still works for this visit.
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="relative w-9 h-9 rounded-full hover:bg-accent/10 hover:text-foreground"
    >
      <div className="absolute duration-500 transition-transform scale-0 rotate-180 dark:scale-100 dark:rotate-0">
        <Moon className="w-5 h-5" />
      </div>
      <div className="absolute duration-500 transition-transform scale-100 rotate-0 dark:scale-0 dark:rotate-180">
        <Sun className="w-5 h-5" />
      </div>
    </Button>
  );
}
