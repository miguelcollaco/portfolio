"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function TechStack() {
	const filters: string[][] = [
		["", "All"],
		["lang", "Programming Languages"],
		["text", "IDEs / Text Editors"],
	]
	
	const [filter, setFilter] = useState("")
	
	const techStack: string[][] = [
		["javascript", "lang", "JavaScript"],
		["typescript", "lang", "TypeScript"],
		["java", "lang", "Java"],
		["python", "lang", "Python"],
		["c", "lang", "C"],
		["ocaml", "lang", "OCaml"],
		["lua", "lang", "Lua"],
		["html5", "", "HTML"],
		["css3", "", "CSS"],
		["arduino", "lang", "Arduino"],
		["mysql", "", "MySQL"],
		["dotnetcore", "", ".NET (Visual Basic)"],
		["tailwindcss", "", "TailwindCSS"],
		["framermotion", "", "Framer Motion"],
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
					{techStack.filter(([, category,]) => category.includes(filter)).map(([name, category, title]) => (
						<motion.li
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{duration: 0.35 }}
							whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							key={name}
							className="m-2 lg:m-3.5 w-1/6 min-w-[4.3rem] max-w-40 p-2 flex justify-center align-middle aspect-square rounded-lg bg-secondary/30 [box-shadow:_0_0_15px_rgba(36,156,254,0.6)] border-2 border-solid border-accent"
							data-category={category}
							title={title}>
							<Image
								className=""
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`}
								alt={name}
								width="113"
								height="113"
							/>
						</motion.li>
					))}
				</AnimatePresence>
			</ul>
		</div>
	)
}
