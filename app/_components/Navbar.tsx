"use client";

import { useEffect, useState } from "react";
import {
  Code2,
  Command as CommandIcon,
  Home,
  User,
  Briefcase,
  Sparkles,
  Mail,
  FileText,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Github, LinkedIn } from "@/components/icons";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Expertise", id: "expertise" },
  { label: "Contact", id: "contact" },
];

const navCommands = [
  { icon: Home, label: "Home", description: "Welcome to my website", id: "top" },
  { icon: User, label: "About", description: "Learn more about me", id: "about" },
  { icon: Briefcase, label: "Experience", description: "My professional experience", id: "experience" },
  { icon: Sparkles, label: "Expertise", description: "What I work with", id: "expertise" },
  { icon: Mail, label: "Contact", description: "Get in touch with me", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function scrollTo(id: string) {
    setOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView();
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -bottom-16 -z-10 backdrop-blur-2xl mask-[linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("top");
            }}
            className="flex items-center gap-2"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg">MC</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/40 px-2 py-1.5 backdrop-blur-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-lg hover:bg-accent/10 hover:text-foreground"
          >
            <CommandIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Menu"
        description="Search and navigate"
        className="sm:max-w-xl"
        showCloseButton={false}
      >
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            {navCommands.map((cmd) => (
              <CommandItem
                key={cmd.id}
                value={cmd.label}
                onSelect={() => scrollTo(cmd.id)}
                className="gap-3 py-3"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <cmd.icon className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{cmd.label}</span>
                  <span className="text-xs text-muted-foreground">{cmd.description}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Links">
            <CommandItem asChild value="View CV">
              <Link href="/Miguel_Collaco_CV.pdf" target="_blank" className="gap-3 py-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <FileText className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">View CV</span>
                  <span className="text-xs text-muted-foreground">Open my resume</span>
                </div>
              </Link>
            </CommandItem>
            <CommandItem asChild value="GitHub">
              <Link href="https://github.com/miguelcollaco" target="_blank" className="gap-3 py-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Github className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">GitHub</span>
                  <span className="text-xs text-muted-foreground">See my code</span>
                </div>
              </Link>
            </CommandItem>
            <CommandItem asChild value="LinkedIn">
              <Link href="https://www.linkedin.com/in/miguelcollaco" target="_blank" className="gap-3 py-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <LinkedIn className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">LinkedIn</span>
                  <span className="text-xs text-muted-foreground">Connect with me</span>
                </div>
              </Link>
            </CommandItem>
            <CommandItem asChild value="Email">
              <Link href="mailto:miguel.l.collaco@gmail.com" className="gap-3 py-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">Email</span>
                  <span className="text-xs text-muted-foreground">Send me a message</span>
                </div>
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>

        <div className="flex items-center justify-end gap-4 border-t border-border px-4 py-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <kbd className="flex size-5 items-center justify-center rounded border border-border bg-muted">
              <ArrowUp className="size-3" />
            </kbd>
            <kbd className="flex size-5 items-center justify-center rounded border border-border bg-muted">
              <ArrowDown className="size-3" />
            </kbd>
            navigate
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="flex size-5 items-center justify-center rounded border border-border bg-muted">
              <CornerDownLeft className="size-3" />
            </kbd>
            select
          </span>
          <span className="flex items-center gap-1.5">
            <kbd className="flex h-5 items-center justify-center rounded border border-border bg-muted px-1.5">
              esc
            </kbd>
            close
          </span>
        </div>
      </CommandDialog>
    </motion.nav>
  );
};
