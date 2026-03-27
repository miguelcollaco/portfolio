"use client";

import { LuGraduationCap, LuBriefcase } from "react-icons/lu";
import { motion } from "framer-motion";

type experienceType = {
    title: string;
    organization: string;
    period: string;
    description?: string;
    highlights?: string[];
    tags?: string[];
}[]

const workExperiences = [
  {
    title: "Junior Software Developer Intern",
    organization: "Tech Innovations Hub",
    period: "JUL 2023 - SEP 2023",
    description:
      "Contributed to the development of microservices and automated CI/CD pipelines.",
    highlights: [
      "Developed backend services using Spring Boot and PostgreSQL",
      "Implemented Docker containers for streamlined local development",
      "Collaborated in an Agile team of 5 developers",
    ],
    tags: ["Java", "Docker", "Git"],
  },
];

const educationExperiences = [
  {
    title: "MSc in Computer Science and Engineering",
    organization: "NOVA School of Science and Technology",
    period: "SEP 2025 - PRESENT",
    highlights: [
      "Major: Programming Languages and Software Systems",
      "Minor: Systems and Software Security",
    ],
  },
  {
    title: "BSc in Computer Science and Engineering",
    organization: "NOVA School of Science and Technology",
    period: "SEP 2022 - JUNE 2025",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};
const viewport = { once: true, margin: "-80px" };

function Timeline({ items }: { items: experienceType }) {
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

              {exp.description && (
                <p className="text-muted-foreground">{exp.description}</p>
              )}

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

              {exp.tags && (
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="skill-badge">
                      {tag}
                    </span>
                  ))}
                </div>
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
                <LuBriefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </motion.div>
            <Timeline items={workExperiences} />
          </div>

          <div>
            <motion.div
              {...fadeUp}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <LuGraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </motion.div>
            <Timeline items={educationExperiences} />
          </div>
        </div>
      </div>
    </section>
  );
}
