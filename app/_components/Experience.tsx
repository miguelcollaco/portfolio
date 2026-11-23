import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { CV } from "@/lib/site";

type Row = {
  period: string;
  role: string;
  org: string;
  summary: string;
  kind?: "work" | "edu";
};

// Newest first, by start date. One line each; the CV has the detail.
const journey: Row[] = [
  {
    period: "Jul – Aug 2026",
    role: "Software Engineering Intern",
    org: "Sky",
    summary:
      "Built a multi-agent LLM bot in Slack that posts daily device KPIs, and automated PS4 crash investigation that used to mean digging through a slow crash portal and two other platforms by hand.",
  },
  {
    period: "Jun 2026 – now",
    role: "Chief Financial Officer",
    org: "In-Nova",
    summary:
      "Budgets, forecasts, cash flow and treasury on the executive board, plus moving our hosting to a self-managed Dokploy VPS.",
  },
  {
    period: "Sep 2025 – Jun 2027",
    role: "MSc Computer Science and Engineering",
    org: "NOVA FCT",
    summary: "Programming Languages and Software Systems, minor in Security. Thesis on TLA+ for REST APIs.",
    kind: "edu",
  },
  {
    period: "Jun 2025 – Jun 2026",
    role: "Projects Department Director",
    org: "In-Nova",
    summary: "Ran a 30-person department of developers and project managers across about 10 concurrent projects.",
  },
  {
    period: "Feb – Jul 2025",
    role: "Fullstack Developer Intern",
    org: "Clearis",
    summary: "Vue.js interfaces and faster MongoDB queries for a procurement platform used by GALP.",
  },
  {
    period: "Apr 2024 – Jun 2025",
    role: "Developer & Project Manager",
    org: "In-Nova",
    summary: "Built web and mobile apps with Next.js and React Native, leading teams of four.",
  },
  {
    period: "Sep 2022 – Jun 2025",
    role: "BSc Computer Science and Engineering",
    org: "NOVA FCT",
    summary: "Where it started.",
    kind: "edu",
  },
];

export default function Experience() {
  return (
    <section id="journey" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">04 // journey</span>
            <h2 className="section-title mt-4">Where I&apos;ve been</h2>
          </div>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            full details in my CV
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="relative border-l border-border">
            {journey.map((row) => (
              <li key={`${row.org}-${row.role}`} className="relative pb-9 pl-7 last:pb-0">
                <span
                  aria-hidden
                  className={
                    row.kind === "edu"
                      ? "absolute -left-[5px] top-1.5 size-[9px] rounded-full border-2 border-primary bg-background"
                      : "absolute -left-[5px] top-1.5 size-[9px] rounded-full bg-primary"
                  }
                />
                <div className="grid gap-1 md:grid-cols-[11rem_1fr] md:gap-6">
                  <p className="font-mono text-sm tabular-nums text-muted-foreground">{row.period}</p>
                  <div>
                    <p className="font-medium">
                      {row.role} <span className="text-muted-foreground">·</span>{" "}
                      <span className="text-primary">{row.org}</span>
                    </p>
                    <p className="mt-1 max-w-2xl leading-relaxed text-muted-foreground">
                      {row.summary}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
