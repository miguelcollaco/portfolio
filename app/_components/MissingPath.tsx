"use client";

import { usePathname } from "next/navigation";

/** Echoes the requested path as a shell error on the 404 page. */
export default function MissingPath() {
  const path = usePathname() ?? "/";

  return (
    <div className="w-full max-w-lg overflow-x-auto rounded-xl border bg-card px-5 py-4 text-left font-mono text-sm">
      <p>
        <span className="text-muted-foreground">~ $</span>{" "}
        <span className="text-primary">cd</span> <span className="break-all">{path}</span>
      </p>
      <p className="mt-1 text-destructive">
        cd: no such file or directory: <span className="break-all">{path}</span>
      </p>
      <p aria-hidden className="mt-1 text-muted-foreground">
        ~ $
      </p>
    </div>
  );
}
