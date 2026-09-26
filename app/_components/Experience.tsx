import Reveal from "./Reveal";

type Role = {
  title: string;
  period: string;
  highlights?: string[];
  tags?: string[];
};

type Entry = {
  organization: string;
  roles: Role[];
};

const work: Entry[] = [
  {
    organization: "In-Nova",
    roles: [
      {
        title: "Chief Financial Officer",
        period: "Jun 2026 – Present",
        highlights: [
          "Own budgeting and financial planning for the company, setting forecasts and tracking performance against targets.",
          "Manage cash flow and treasury operations, ensuring liquidity and financial stability across ongoing initiatives.",
          "Serve as a member of the company's executive board, contributing to strategic decision-making."
        ],
      },
      {
        title: "Projects Department Director",
        period: "Jun 2025 – Jun 2026",
        highlights: [
          "Led a 30-person Projects Department, managing teams of developers and project managers.",
          "Oversaw portfolio planning, execution, and delivery across roughly 10 concurrent projects.",
          "Represented the Projects Department on the company board, contributing to company-wide strategy."
        ],
      },
      {
        title: "Developer & Project Manager",
        period: "Apr 2024 – Jun 2025",
        highlights: [
          "Led cross-functional teams of 4 developers and coordinated end-to-end technical project delivery.",
          "Planned and tracked scope, timelines, and deliverables using Agile / SCRUM, acting as the main point of contact between technical teams and stakeholders.",
          "Built responsive web and mobile applications with Next.js, React, and React Native, including API integrations."
        ],
        tags: ["Next.js", "React", "React Native", "Agile / Scrum"],
      },
    ],
  },
  {
    organization: "Sky",
    roles: [
      {
        title: "Technology Summer Intern",
        period: "Jul 2026 – Aug 2026",
        highlights: [
          "Built a Jenkins nightly job to monitor certificate expiry dates and automatically report status to Slack, reducing risk of unnoticed expirations.",
          "Designed and built a multi-agent AI chatbot system with specialized sub-agents, accessible via Slack bot or direct supervisor requests, that delivered daily device KPI reports to Slack.",
          "Engineered an automated investigation pipeline within the agent system that, given a PS4 crash, pulled crash data from Sony's crash portal and internal session logs, then used AI to analyze the data and generate a report with probable causes and fixes."
        ],
        tags: ["Jenkins", "Slack API", "LLM agents"],
      }
    ],
  },
  {
    organization: "Clearis S.A.",
    roles: [
      {
        title: "Fullstack Developer Intern",
        period: "Feb 2025 – Jul 2025",
        highlights: [
          "Built responsive Vue.js interfaces for a Procurement Platform used by GALP.",
          "Implemented back-end logic and optimized MongoDB aggregations and indexes for performance."
        ],
        tags: ["Vue.js", "MongoDB", "Node.js"],
      }
    ],
  },
];

const education: Entry[] = [
  {
    organization: "NOVA School of Science and Technology",
    roles: [
      {
        title: "MSc in Computer Science and Engineering",
        period: "Sep 2025 – Present",
        highlights: [
          "Major in Programming Languages and Software Systems.",
          "Minor in Systems and Software Security.",
        ],
      },
      {
        title: "BSc in Computer Science and Engineering",
        period: "Sep 2022 – Jun 2025",
      },
    ],
  },
];

function Timeline({ heading, items }: { heading: string; items: Entry[] }) {
  return (
    <div>
      <Reveal>
        <h3 className="mb-6 text-xl font-semibold">{heading}</h3>
      </Reveal>

      <div className="space-y-6">
        {items.map((entry) => {
          // Several roles at one organization are joined by a line, LinkedIn-style.
          const stacked = entry.roles.length > 1;

          return (
            <Reveal
              key={entry.organization}
              className="rounded-xl border bg-card p-6 md:p-8"
            >
              <h4 className="text-lg font-semibold">{entry.organization}</h4>

              <ol className="mt-5 space-y-6">
                {entry.roles.map((role) => (
                  <li
                    key={role.title}
                    className={
                      stacked
                        ? "relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary after:absolute after:left-[3.5px] after:top-5 after:-bottom-5 after:w-px after:bg-border last:after:hidden"
                        : undefined
                    }
                  >
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <p className="font-medium">{role.title}</p>
                      <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
                        {role.period}
                      </p>
                    </div>

                    {role.highlights && (
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted-foreground marker:text-primary/60">
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}

                    {role.tags && (
                      <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
                        {role.tags.map((tag) => (
                          <li key={tag} className="skill-badge px-2.5 py-1 text-xs">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12">
          <span className="section-label">BACKGROUND</span>
          <h2 className="section-title mt-4">Experience &amp; Education</h2>
        </Reveal>

        <div className="space-y-16">
          <Timeline heading="Work" items={work} />
          <Timeline heading="Education" items={education} />
        </div>
      </div>
    </section>
  );
}
