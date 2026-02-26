"use client";

import { LuCodeXml , LuArrowRight  } from "react-icons/lu";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  const navItems = ["Hero", "Experience", "Expertise", "Contact"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <LuCodeXml className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg">MC</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors relative"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link 
              className="bg-primary flex items-center py-2 px-3 rounded-lg text-primary-foreground hover:bg-primary/90 gap-2"
              href="/Miguel_Collaco_CV.pdf"
              target="_blank"
            >
              Download CV
              <LuArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};