"use client";

import { motion } from "framer-motion";
import { LuGraduationCap, LuBriefcase  } from "react-icons/lu";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
} as const;

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
} as const;

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
} as const;

const experiences = [
  {
    type: "education",
    icon: LuGraduationCap,
    title: "BSc in Computer Science and Engineering",
    organization: "NOVA School of Science and Technology",
    period: "SEP 2021 - PRESENT",
    description: "Focusing on core computer science principles, software engineering methodologies, and systems design.",
    highlights: [
      "Top 5% of the class with merit scholarship",
      "Specialized coursework in Algorithms, Operating Systems, and Distributed Computing"
    ],
    tags: ["Algorithms", "Systems Architecture", "Database Design"]
  },
  {
    type: "work",
    icon: LuBriefcase,
    title: "Junior Software Developer Intern",
    organization: "Tech Innovations Hub",
    period: "JUL 2023 - SEP 2023",
    description: "Contributed to the development of microservices and automated CI/CD pipelines.",
    highlights: [
      "Developed backend services using Spring Boot and PostgreSQL",
      "Implemented Docker containers for streamlined local development",
      "Collaborated in an Agile team of 5 developers"
    ],
    tags: ["Java", "Docker", "Git"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">PROFESSIONAL JOURNEY</span>
          <h2 className="section-title mt-4">Experience & Education</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A curated timeline of my academic foundations and professional growth in Computer Science and Engineering.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="absolute left-1.25 top-0 bottom-0 w-0.5 bg-border"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          
          <motion.div
            className="space-y-8"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {experiences.map((exp) => (
              <motion.div key={exp.title} className="relative pl-10" variants={itemVariants}>
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                <div className="bg-card border border-border rounded-xl p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.organization}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <motion.div className="flex flex-wrap gap-2" variants={badgeContainerVariants}>
                    {exp.tags.map((tag) => (
                      <motion.span key={tag} className="skill-badge" variants={badgeVariants}>
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
