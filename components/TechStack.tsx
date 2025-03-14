"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function TechStack() {
	const [filter, setFilter] = useState("")
	
	const filters: string[][] = [
		["", "All"],
		["lang", "Programming Languages"],
		["text", "IDEs / Text Editors"],
	]
	
	const techStack: string[][] = [
		["javascript", "lang", "JavaScript"],
		["typescript", "lang", "TypeScript"],
		["java", "lang", "Java"],
		["kotlin", "lang", "Kotlin"],
		["python", "lang", "Python"],
		["c", "lang", "C"],
		["ocaml", "lang", "OCaml"],
		["lua", "lang", "Lua"],
		["html5", "", "HTML"],
		["css3", "", "CSS"],
		["arduino", "lang", "Arduino"],
		["mysql", "", "MySQL"],
		["sqlite", "", "SQLite"],
		["dotnetcore", "", ".NET (Visual Basic)"],
		["tailwindcss", "", "TailwindCSS"],
		["framermotion", "", "Framer Motion"],
		["react", "", "React"],
		["nextjs", "", "Next.js"],
		["prisma", "", "Prisma"],
		["github", "", "GitHub"],
		["git", "", "Git"],
		["jetbrains", "text", "JetBrains (IntelliJ IDEA, WebStorm, PyCharm)"],
		["visualstudio", "text", "Visual Studio"],
		["vscode", "text", "Visual Studio Code"],
	]
	
	return (
		<div>
			<div className="mb-6">
				<h3 className="w-max uppercase after:bg-accent after:block after:h-0.5 after:w-full after:mb-2">
					Tech Stack
				</h3>
				<h5 className="text-[0.9rem] md:text-xl font-normal">
					Some of the programming languages, frameworks, tools and technologies I&apos;ve used
				</h5>
			</div>
			<div className="flex flex-row justify-center mb-1" id="buttons">
				{filters.map(([category, label]) => (
					<button
						key={category}
						onClick={() => setFilter(category)}
						id={category}
						disabled={filter == category}
						className="py-2 px-3 text-sm md:text-base rounded-lg bg-gradient-to-r from-[#017ca6] to-[#004682] mx-2 disabled:scale-110 transition [text-shadow:_0_0_15px_rgb(0_0_0_/_60%)] disabled:shadow-md disabled:shadow-[rgba(255,255,255,0.1)] shadow-inner shadow-[rgba(0,0,0,0.5)]"
					>
						{label}
					</button>
				))}
			</div>
			<ul className="pt-2 flex flex-auto grow justify-center flex-wrap align-middle">
				<AnimatePresence>
					{techStack
					.filter(([, category,]) => category.includes(filter))
					.map(([name, category, title]) => (
						<motion.li
							layout
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							transition={{duration: 0.35}}
							whileHover={{scale: 1.05, transition: {duration: 0.2}}}
							key={name}
							className="m-2 w-[5.5rem] sm:w-24 lg:m-3 lg:w-28 2xl:w-32 p-2 flex justify-center align-middle aspect-square rounded-lg bg-secondary/30 [box-shadow:_0_0_15px_rgba(36,156,254,0.6)] border-2 border-solid border-accent"
							data-title={title}>
							<Image
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`}
								alt={name}
								width={0}
								height={0}
								className="w-auto"
							/>
						</motion.li>
					))}
				</AnimatePresence>
			</ul>
		</div>
	)
}