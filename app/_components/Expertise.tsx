import { LuMonitor, LuServer, LuDatabase, LuWrench, LuNotebookPen } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";

const skillCategories = [
  {
    icon: FaCode,
    title: "Languages",
    skills: ["Java", "JavaScript", "Typescript", "Python", "C", "SQL"],
  },
  {
    icon: LuMonitor,
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: LuServer,
    title: "Backend",
    skills: ["Spring Boot", "Express.js", "Docker"],
  },
  {
    icon: LuDatabase,
    title: "Data",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    icon: LuWrench,
    title: "Tools & Workflow",
    skills: ["Git", "CI/CD", "Scrum", "Figma"],
  },
  {
    icon: LuNotebookPen ,
    title: "Currently Learning",
    skills: ["Go"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="section-label">MY CAPABILITIES</span>
          <h2 className="section-title mt-4">Technical Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
