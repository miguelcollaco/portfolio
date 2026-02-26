"use client";

import { LuGraduationCap, LuBriefcase  } from "react-icons/lu";

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
        <div className="mb-12">
          <span className="section-label">PROFESSIONAL JOURNEY</span>
          <h2 className="section-title mt-4">Experience & Education</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A curated timeline of my academic foundations and professional growth in Computer Science and Engineering.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1.25 top-0 bottom-0 w-0.5 bg-border"/>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title} className="relative pl-10">
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

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
