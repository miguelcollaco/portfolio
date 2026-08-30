"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  /** Seconds to stagger this element behind its siblings. */
  delay?: number;
  direction?: Direction;
  className?: string;
};

/**
 * Reveals its children once they scroll into view.
 *
 * Children are rendered by the parent, so a Server Component can wrap static
 * markup in this without becoming a Client Component itself. The visible state
 * is written straight to the DOM rather than held in React state — nothing
 * else depends on it, so there is no reason to re-render.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.setAttribute("data-visible", "true");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        show();
        observer.disconnect();
      },
      { rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
      className={cn("reveal", direction !== "up" && `reveal-${direction}`, className)}
    >
      {children}
    </div>
  );
}
