"use client";

import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

type Role = {
  title: string;
  period: string;
  description?: string;
  highlights?: string[];
  tags?: string[];
};

type WorkEntry = {
  organization: string;
  roles: Role[];
};

type EducationEntry = {
  title: string;
  organization: string;
  period: string;
  highlights?: string[];
};

const workExperiences: WorkEntry[] = [
  {
    organization: "In-Nova",
    roles: [
      {
        title: "Projects Department Director",
        period: "June 2025 – Present",
        highlights: [
          "Lead the Projects Department, managing teams of developers and project managers.",
          "Oversee project portfolio planning, execution, and delivery across multiple initiatives.",
          "Serve as a member of the company's board, contributing to strategic decision-making."
        ],
      },
      {
        title: "Project Manager",
        period: "Feb 2025 – June 2025",
        highlights: [
          "Led cross-functional teams of developers and coordinated end-to-end technical project delivery.",
          "Planned and tracked project scope, timelines, and deliverables using Agile / SCRUM methodologies.",
          "Acted as the main point of contact between technical teams and stakeholders."
        ],
      },
      {
        title: "Frontend Developer",
        period: "Apr 2024 – June 2025",
        highlights: [
          "Developed web and mobile applications using Next.js, React, and React Native.",
          "Implemented API integrations and built responsive, user-focused interfaces across platforms."
        ],
      },
    ],
  },
  {
    organization: "Clearis S.A.",
    roles: [
      {
        title: "Fullstack Developer Intern",
        period: "Feb 2025 – July 2025",
        highlights: [
          "Built responsive Vue.js interfaces for a Procurement Platform used by GALP.",
          "Implemented back-end logic and optimized MongoDB aggregations and indexes for performance"
        ],
      }
    ],
  },  
];

const educationExperiences: EducationEntry[] = [
  {
    title: "MSc in Computer Science and Engineering",
    organization: "NOVA School of Science and Technology",
    period: "Sep 2025 – Present",
    highlights: [
      "Major: Programming Languages and Software Systems",
      "Minor: Systems and Software Security",
    ],
  },
  {
    title: "BSc in Computer Science and Engineering",
    organization: "NOVA School of Science and Technology",
    period: "Sep 2022 – June 2025",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};
const viewport = { once: true, margin: "-80px" };

function WorkTimeline({ items }: { items: WorkEntry[] }) {
  return (
    <section className="relative">
      <div className="absolute left-1.25 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8">
        {items.map((entry, i) => (
          <motion.div
            key={entry.organization}
            {...fadeUp}
            viewport={viewport}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-8 w-3 aspect-square rounded-full bg-primary border-4 border-background" />

            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <p className={`text-primary font-semibold ${entry.roles.length > 1 ? 'mb-2.5' : ''}`}>
                {entry.organization}
              </p>

              {entry.roles.map((role, j) => (
                <div key={role.title} className="space-y-4">
                  {j > 0 && <hr className="border-border mt-5" />}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <h3 className="font-semibold text-lg">{role.title}</h3>
                    <span className="text-xs text-muted-foreground font-medium shrink-0">
                      {role.period}
                    </span>
                  </div>

                  {role.description && (
                    <p className="text-muted-foreground">{role.description}</p>
                  )}

                  {role.highlights && (
                    <ul className="space-y-2">
                      {role.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {role.tags && (
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span key={tag} className="skill-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function EducationTimeline({ items }: { items: EducationEntry[] }) {
  return (
    <section className="relative">
      <div className="absolute left-1.25 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8">
        {items.map((exp, i) => (
          <motion.div
            key={exp.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-8 w-3 aspect-square rounded-full bg-primary border-4 border-background" />

            <div className="bg-card border border-border rounded-xl p-6 card-hover space-y-5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-primary text-sm">{exp.organization}</p>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {exp.period}
                </span>
              </div>

              {exp.highlights && (
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          {...fadeUp}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">PROFESSIONAL JOURNEY</span>
          <h2 className="section-title mt-4">Experience & Education</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A curated timeline of my academic foundations and professional
            growth in Computer Science and Engineering.
          </p>
        </motion.div>

        <div className="space-y-16">
          <div>
            <motion.div
              {...fadeUp}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </motion.div>
            <WorkTimeline items={workExperiences} />
          </div>

          <div>
            <motion.div
              {...fadeUp}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </motion.div>
            <EducationTimeline items={educationExperiences} />
          </div>
        </div>
      </div>
    </section>
  );
}
