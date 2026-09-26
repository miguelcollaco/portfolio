import { NAME, EMAIL, GITHUB, LINKEDIN, CV } from "@/lib/site";

const links = [
  { label: "GitHub", href: GITHUB, external: true },
  { label: "LinkedIn", href: LINKEDIN, external: true },
  { label: "Email", href: `mailto:${EMAIL}`, external: false },
  { label: "CV", href: CV, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
        <ul className="flex gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
