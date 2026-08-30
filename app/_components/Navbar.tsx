"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
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
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Expertise", id: "expertise" },
  { label: "Contact", id: "contact" },
];

const linkCommands = [
  {
    icon: FileText,
    label: "View CV",
    description: "Open my resume",
    href: "/Miguel_Collaco_CV.pdf",
    newTab: true,
  },
  {
    icon: Github,
    label: "GitHub",
    description: "See my code",
    href: "https://github.com/miguelcollaco",
    newTab: true,
  },
  {
    icon: LinkedIn,
    label: "LinkedIn",
    description: "Connect with me",
    href: "https://www.linkedin.com/in/miguelcollaco",
    newTab: true,
  },
  {
    icon: Mail,
    label: "Email",
    description: "Send me a message",
    href: "mailto:miguel.l.collaco@gmail.com",
    newTab: false,
  },
];

const navCommands = [
  { icon: Home, label: "Home", description: "Welcome to my website", id: "top" },
  { icon: User, label: "About", description: "Learn more about me", id: "about" },
  { icon: Briefcase, label: "Experience", description: "My professional experience", id: "experience" },
  { icon: Sparkles, label: "Expertise", description: "What I work with", id: "expertise" },
  { icon: Mail, label: "Contact", description: "Get in touch with me", id: "contact" },
];

// The platform never changes, so this store never notifies; it exists purely to
// read a browser-only value without a setState-in-effect round trip.
const subscribeNoop = () => () => {};
const getIsMac = () => /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
const getIsMacServer = () => false;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const placedRef = useRef(false);
  const isMac = useSyncExternalStore(subscribeNoop, getIsMac, getIsMacServer);

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

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const intersecting = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.set(entry.target.id, entry.isIntersecting);
        }
        // First in document order wins, so scrolling up resolves cleanly.
        setActiveId(ids.find((id) => intersecting.get(id)) ?? "");
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Slide a single shared pill between nav items instead of toggling a
  // background on each one. Positions are written straight to the DOM so a
  // scroll-driven update never triggers a React re-render.
  useEffect(() => {
    const indicator = indicatorRef.current;
    const list = listRef.current;
    if (!indicator || !list) return;

    const place = (instant = false) => {
      const el = activeId ? itemRefs.current[activeId] : null;

      if (!el) {
        // Between sections (e.g. over the hero): fade out, but keep the last
        // position so it does not slide back across the whole bar.
        indicator.style.opacity = "0";
        return;
      }

      const listBox = list.getBoundingClientRect();
      const itemBox = el.getBoundingClientRect();
      const listStyle = getComputedStyle(list);

      // `left: 0` sits on the padding edge, while getBoundingClientRect is
      // measured from the border edge — subtract the border to line them up.
      const x = itemBox.left - listBox.left - (parseFloat(listStyle.borderLeftWidth) || 0);
      const y = itemBox.top - listBox.top - (parseFloat(listStyle.borderTopWidth) || 0);

      // The very first placement (and any resize) jumps rather than slides;
      // there is no previous position worth animating from.
      const jump = instant || !placedRef.current;
      if (jump) indicator.style.transition = "none";

      indicator.style.width = `${itemBox.width}px`;
      indicator.style.height = `${itemBox.height}px`;
      indicator.style.transform = `translate(${x}px, ${y}px)`;

      if (jump) {
        void indicator.offsetWidth; // flush layout before transitions resume
        indicator.style.transition = "";
      }

      placedRef.current = true;

      // Set after transitions are restored so the pill still fades in on the
      // first placement even though it moved there instantly.
      indicator.style.opacity = "1";
    };

    place();

    if (typeof ResizeObserver === "undefined") return;

    // Keeps the pill aligned when fonts finish loading or the bar reflows.
    let isInitialObservation = true;
    const observer = new ResizeObserver(() => {
      if (isInitialObservation) {
        isInitialObservation = false;
        return;
      }
      place(true);
    });

    observer.observe(list);
    return () => observer.disconnect();
  }, [activeId]);

  // cmdk activates an item by calling `onSelect` — on Enter it dispatches a
  // synthetic event and never clicks the anchor, so navigation has to happen
  // here. The anchor's own default is cancelled below to avoid doing it twice.
  const openLink = useCallback((href: string, newTab: boolean) => {
    setOpen(false);
    if (newTab) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  }, []);

  const scrollTo = useCallback((id: string) => {
    setOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView();
    }
  }, []);

  return (
    <nav className="reveal-load reveal-load-down fixed top-0 left-0 right-0 z-50">
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

          <div
            ref={listRef}
            className="relative hidden md:flex items-center gap-1 rounded-full border border-border bg-card/40 px-2 py-1.5 backdrop-blur-lg"
          >
            <span
              ref={indicatorRef}
              aria-hidden
              className="nav-indicator pointer-events-none absolute left-0 top-0 rounded-full bg-primary/15 ring-1 ring-primary/20 opacity-0"
            />

            {navItems.map((item) => (
              <button
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
                onClick={() => scrollTo(item.id)}
                aria-current={activeId === item.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm transition-colors hover:text-foreground",
                  activeId === item.id ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            onClick={() => setOpen(true)}
            aria-label={`Open command menu (${isMac ? "Command" : "Control"}+K)`}
            className="h-9 gap-2 rounded-lg px-2.5 hover:bg-accent/10 hover:text-foreground"
          >
            <CommandIcon className="w-5 h-5" />
            <kbd className="hidden md:inline rounded border border-border bg-muted px-1.5 py-0.5 font-sans text-[11px] leading-none text-muted-foreground">
              {isMac ? "\u2318" : "Ctrl "}K
            </kbd>
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
            {linkCommands.map((cmd) => (
              <CommandItem
                key={cmd.label}
                asChild
                value={cmd.label}
                onSelect={() => openLink(cmd.href, cmd.newTab)}
              >
                <Link
                  href={cmd.href}
                  target={cmd.newTab ? "_blank" : undefined}
                  rel={cmd.newTab ? "noopener noreferrer" : undefined}
                  // onSelect performs the navigation for both Enter and click.
                  onClick={(e) => e.preventDefault()}
                  className="gap-3 py-3"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <cmd.icon className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">{cmd.label}</span>
                    <span className="text-xs text-muted-foreground">{cmd.description}</span>
                  </div>
                </Link>
              </CommandItem>
            ))}
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
    </nav>
  );
};
