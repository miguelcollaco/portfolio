"use client";

import { LuMonitor, LuServer, LuDatabase, LuWrench, LuNotebookPen } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: FaCode,
    title: "Languages",
    skills: ["Java", "JavaScript", "Typescript", "Kotlin", "C", "Python", "SQL"],
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
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: LuWrench,
    title: "Tools & Workflow",
    skills: ["Git", "CI/CD", "Scrum", "Figma"],
  },
  {
    icon: LuNotebookPen,
    title: "Currently Learning",
    skills: ["Go", "Rust"],
  },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } };
const viewport = { once: true, margin: "-150px" };

export default function Expertise() {
  return (
    <section id="expertise" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          {...fadeUp}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">MY CAPABILITIES</span>
          <h2 className="section-title mt-4">Technical Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              {...fadeUp}
              viewport={viewport}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
