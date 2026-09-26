import Link from "next/link";
import Image from "next/image";
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
import { NAME, EMAIL, GITHUB, LINKEDIN, CV } from "@/lib/site";

import PHOTO from "@/public/photo.webp";

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
    href: GITHUB,
  },
  {
    icon: LinkedIn,
    label: "LinkedIn",
    description: "View my LinkedIn profile",
    href: LINKEDIN,
  },
  {
    icon: Mail,
    label: "Email",
    description: "Get in touch with me",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: FileText,
    label: "Curriculum Vitae",
    description: "View my CV",
    href: CV,
  },
];

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

      <div className="w-full max-w-md flex flex-col items-center mt-14">
        <Image
          src={PHOTO}
          alt=""
          width={80}
          height={80}
          loading="eager"
          className="reveal-load size-20 rounded-full border border-border bg-card object-cover object-top"
          style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
        />

        <h1
          className="reveal-load mt-5 text-2xl font-bold"
          style={{ "--reveal-delay": "0.17s" } as React.CSSProperties}
        >
          {NAME}
        </h1>

        <div
          className="reveal-load mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground"
          style={{ "--reveal-delay": "0.24s" } as React.CSSProperties}
        >
          <span>Software Engineer</span>
          <span aria-hidden className="text-border">•</span>
          <span>MSc CSE Student</span>
        </div>

        <div
          className="reveal-load mt-3 flex items-center gap-1.5 text-sm text-muted-foreground"
          style={{ "--reveal-delay": "0.31s" } as React.CSSProperties}
        >
          <MapPin className="w-4 h-4" />
          <span>Lisbon, Portugal</span>
        </div>

        {/* Link cards */}
        <div className="mt-9 w-full flex flex-col gap-2.5">
          {links.map((l, i) => (
            <div
              key={l.label}
              className="reveal-load"
              style={{ "--reveal-delay": `${0.38 + i * 0.07}s` } as React.CSSProperties}
            >
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
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-12 w-full max-w-md flex flex-col items-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
      </footer>
    </main>
  );
}
