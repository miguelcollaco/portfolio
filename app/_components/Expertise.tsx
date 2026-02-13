import { motion } from "framer-motion";
import { LuMonitor, LuServer, LuDatabase, LuWrench, LuNotebookPen } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
} as const;

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.08,
    },
  },
} as const;

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
} as const;

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
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">MY CAPABILITIES</span>
          <h2 className="section-title mt-4">Technical Expertise</h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 "
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-card border rounded-xl p-6 card-hover"
              variants={cardVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={badgeContainerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    variants={badgeVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
