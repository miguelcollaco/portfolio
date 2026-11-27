import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

// Update by hand. Keep entries short and in the present tense.
// `text` can be a list of lines, each shown on its own line. `href` links the key.
const now: { key: string; href?: string; text: string | string[] }[] = [
  {
    key: "thesis",
    text: "Watching how a REST API behaves, inferring the rules it seems to follow (likely invariants), and turning them into TLA+ specifications that can be model-checked.",
  },
  {
    key: "studying",
    text: [
      "Final year of the MSc in Computer Science and Engineering at NOVA School of Science and Technology.",
      "Major: Programming Languages and Software Systems.",
      "Minor: Systems and Software Security.",
    ],
  },
  {
    key: "in-nova",
    href: "https://innova.pt",
    text: "CFO of the student-run tech consultancy where I started as a developer. Besides budgets and cash flow, I moved our project hosting to a self-managed VPS running Dokploy, so members can deploy their work cheaply and on their own.",
  },
  {
    key: "learning",
    text: "CAD in Fusion 360, so I can design parts for my 3D printer instead of only downloading other people's.",
  },
];

export default function Now() {
  return (
    <section id="now" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12">
          <span className="section-label">03 // now</span>
          <h2 className="section-title mt-4">What I&apos;m up to</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-border rounded-2xl border bg-card">
            {now.map((item) => (
              <div
                key={item.key}
                className="grid gap-1.5 px-6 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6 md:px-8"
              >
                <dt className="spec-key pt-0.5">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 underline decoration-dotted underline-offset-4 transition-colors hover:text-primary"
                    >
                      {item.key}
                      <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    item.key
                  )}
                </dt>
                <dd className="leading-relaxed text-muted-foreground">
                  {Array.isArray(item.text)
                    ? item.text.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))
                    : item.text}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
