"use client";

import { useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
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
      <div className={`absolute duration-500 transition-transform ${isDark ? "scale-100 rotate-0" : "scale-0 rotate-180"}`}>
        <LuMoon className="w-5 h-5" />
      </div>
      <div className={`absolute duration-500 transition-transform ${isDark ? "scale-0 rotate-180" : "scale-100 rotate-0"}`}>
        <LuSun className="w-5 h-5" />
      </div>
    </Button>
  );
};
