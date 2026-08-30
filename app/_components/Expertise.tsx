import { Monitor, Server, Database, Wrench, NotebookPen, Code2 } from "lucide-react";
import Reveal from "./Reveal";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Java", "JavaScript", "Typescript", "Kotlin", "C", "Python", "SQL"],
  },
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "React Native", "Expo", "Vue.js"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Spring Boot", "Express.js"],
  },
  {
    icon: Database,
    title: "Data",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    skills: ["Git", "Docker", "Postman", "CI/CD", "Scrum", "Figma"],
  },
  {
    icon: NotebookPen,
    title: "Currently Learning",
    skills: ["Go", "Rust"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12">
          <span className="section-label">MY CAPABILITIES</span>
          <h2 className="section-title mt-4">Technical Expertise</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={i * 0.08}
              className="bg-card border rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
