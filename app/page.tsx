"use client";

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

import Image from "next/image";
import Script from "next/script";

export default function Home() {
    const el = useRef(null);
    
    useEffect(() => {
        const typed: Typed = new Typed(el.current, {
            strings: ["CSE student", "tech enthusiast", "freelance developer"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 40,
        });
		
        return(): void => typed.destroy();
    }, []);
	
	function filterSelection(e: any): void {
		// @ts-ignore
		for (const el of document.getElementById("buttons")?.children)
			el.removeAttribute("disabled")
		e.target.disabled = true;
		
		e.target.id = e.target.id.replace("all", "")
		// @ts-ignore
		for (const el of document.getElementById("list")?.children)
			if (el.id.includes(e.target.id))
				el.className = el.className.replace(" hidden", "")
			else if (!el.className.includes("hidden"))
				el.className += " hidden"
	}
	
	return (
		<main className="flex flex-col items-center w-full child:px-4 child:sm:px-[6vw] child:md:px-[10vw] child:lg:px-[14vw] child:mb-52">
			<div id="loading"
			     className='fixed inset-0 flex space-x-2 justify-center items-center bg-background h-screen w-screen z-30 overflow-hidden duration-[450ms]'>
				<span className='sr-only'>Loading...</span>
				<div
					className='size-7 bg-secondary opacity-75 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
				<div
					className='size-7 bg-secondary opacity-75 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
				<div className='size-7 bg-secondary opacity-75 rounded-full animate-bounce'></div>
			</div>
			
			<div className="flex flex-col items-center justify-center h-screen w-full relative overflow-x-hidden" id="home">
				<div className="flex flex-col">
					<h1 className="text-[2.9rem] md:text-6xl font-bold leading-relaxed z-10 [text-shadow:_0_0_15px_rgb(0_0_0_/_50%)]">
						Hi, I&apos;m Miguel
					</h1>
					<h6 className="font-semibold z-10 mt-2 [text-shadow:_0_0_15px_rgb(0_0_0_/_70%)]">
						A <span ref={el}/>
					</h6>
					<div
						className="absolute top-1/3 w-80 h-80 bg-red-600 rounded-full filter blur-3xl opacity-50 animate-blob overflow-x-hidden"></div>
					<div
						className="absolute left-1/2 top-1/3 w-80 h-80 bg-amber-400 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000 overflow-x-hidden"></div>
					<div
						className="absolute right-1/2 top-1/3 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000 overflow-x-hidden"></div>
				</div>
			</div>
			
			<div className="flex w-full min-h-[80vh]" id="about">
				<div
					className="flex flex-col justify-center align-middle md:flex-row bg-secondary/30 rounded-2xl p-5 [box-shadow:_0_0_27px_rgba(36,156,254,0.6)] border-2 border-solid border-accent">
					<div className="h-full p-10 md:w-[65%] lg:w-[65%] flex flex-col justify-between mb-6 md:m-0">
						<h1 className="w-max uppercase font-semibold after:bg-accent after:block after:h-1 after:w-full after:mb-6 md:after:m-0">
							About Me
						</h1>
						<p>
							Passionate CSE student with a knack for problem-solving and a strong foundation in software
							development. Experienced in tackling challenges with an analytical mindset. Eager to
							contribute to innovative projects and continue learning in the dynamic tech landscape.
						</p>
						<p>
							Currently studying @ NOVA SST
						</p>
					</div>
					<div className="h-full rounded-2xl flex flex-row align-middle items-center">
						<Image
							src="/photo.png"
							alt="photo"
							sizes="100vw"
							width={500}
							height={300}
							className="rounded-2xl border-accent border-2 shadow-lg shadow-accent/25 mx-auto"
						/>
					</div>
				</div>
			</div>
			
			<div className="flex flex-col w-full h-auto" id="techstack">
				<div className="mb-6">
					<div className="w-max">
						<h3 className="uppercase after:bg-accent after:block after:h-0.5 after:w-full after:mb-2">
							Tech Stack
						</h3>
					</div>
					<h5 className="text-[0.9rem] md:text-xl font-normal">
						Some of the programming languages, frameworks, tools and technologies I&apos;ve used
					</h5>
				</div>
				<div>
					<div className="flex flex-row justify-center mb-1" id="buttons">
						{[
							["all", "All"],
							["lang", "Programming Languages"],
							["text", "IDEs / Text Editors"],
						].map(([id, name]) => (
							<button
								key={id}
								onClick={filterSelection}
								id={id}
								className="py-2 px-3 text-sm md:text-base rounded-lg bg-gradient-to-r from-[#017ca6] to-[#004682] mx-2 disabled:scale-110 transition [text-shadow:_0_0_15px_rgb(0_0_0_/_60%)] disabled:shadow-md disabled:shadow-[rgba(255,255,255,0.1)] shadow-inner shadow-[rgba(0,0,0,0.5)]">
								{name}
							</button>
						))}
					</div>
					<ul className="pt-2 flex flex-auto grow justify-center flex-wrap align-middle"
					    id="list">
						{[
							["javascript", "lang", "JavaScript"],
							["typescript", "lang", "TypeScript"],
							["java", "lang", "Java"],
							["python", "lang", "Python"],
							["c", "lang", "C"],
							["lua", "lang", "Lua"],
							["html5", "", "HTML"],
							["css3", "", "CSS"],
							["arduino", "lang", "Arduino"],
							["mysql", "", "MySQL"],
							["dotnetcore", "", ".NET (Visual Basic)"],
							["tailwindcss", "", "TailwindCSS"],
							["nextjs", "", "Next.js"],
							["prisma", "", "Prisma"],
							["github", "", "GitHub"],
							["git", "", "Git"],
							["jetbrains", "text", "JetBrains (IntelliJ IDEA, WebStorm, PyCharm)"],
							["visualstudio", "text", "Visual Studio"],
							["vscode", "text", "Visual Studio Code"],
						].map(([name, id, title]) => (
							<li
								key={name}
								className="m-3 w-20 md:w-36 p-2 flex justify-center align-middle aspect-square rounded-lg bg-secondary/30 [box-shadow:_0_0_15px_rgba(36,156,254,0.6)] border-2 border-solid border-accent hover:scale-105 duration-300"
								id={id}
								title={title}>
								<Image
									className=""
									src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`}
									// @ts-ignore
									onError={e => e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-plain.svg`}
									alt={name}
									width="113"
									height="113"
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
			
			<div className="flex flex-col justify-between w-full min-h-screen" id="contact">
				<div className="grid lg:grid-cols-5 gap-8">
					<div className="col-span-3 lg:col-span-2 w-full">
						<div
							className="p-6 sticky top-28 bg-secondary/30 rounded-xl [box-shadow:_0_0_27px_rgba(36,156,254,0.6)] border-2 border-solid border-accent">
							<div className="w-max">
								<h1 className="uppercase after:bg-accent after:block after:h-0.5 after:w-full after:mb-2">Contact</h1>
							</div>
							<div className="mt-4">
								<h4 className="pt-2 font-normal">Miguel Collaço</h4>
								<p className="pt-4">I am available to freelance. </p>
								<p>Don&apos;t hesitate to contact me!</p>
							</div>
							<div className="flex items-center justify-around pt-10 pb-4">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.linkedin.com/in/miguel-collaço/"
									className="rounded-full shadow-lg shadow-accent p-3.5 cursor-pointer hover:scale-110 ease-in duration-300">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
										alt="linkedin"
										width="40"
										height="40"
									/>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://github.com/miguelcollaco"
									className="rounded-full shadow-lg shadow-accent p-3.5 cursor-pointer hover:scale-110 ease-in duration-300">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
										alt="github"
										width="40"
										height="40"
									/>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="mailto:miguel.l.collaco@gmail.com"
									className="rounded-full shadow-lg shadow-accent p-3.5 cursor-pointer hover:scale-110 ease-in duration-300">
									<svg
										stroke="currentColor"
										strokeWidth="1px"
										viewBox="0 0 1024 1024"
										height="40"
										width="40"
										fill="white"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<form
						className="group col-span-3 w-full h-auto rounded-xl bg-secondary/30 flex flex-col justify-center align-middle p-8 [box-shadow:_0_0_27px_rgba(36,156,254,0.6)] border-2 border-solid border-accent"
						action="https://getform.io/f/lbjkepxa" encType="multipart/form-data" method="POST">
						<div className="grid md:grid-cols-2 gap-6 w-full">
							<div className="flex flex-col">
								<label htmlFor="name"
								       className="uppercase text-sm py-2 after:content-['*'] after:text-red-600 after:font-bold after:ml-0.5">Name</label>
								<input
									id="name"
									required
									className="border-2 rounded-lg p-2 flex border-gray-300 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
									type="text"
									name="name"
									pattern="([a-zA-Z0-9_\s]+)"/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="phone" className="uppercase text-sm py-2">Phone Number</label>
								<input
									id="phone"
									className="border-2 rounded-lg p-2 flex border-gray-300 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
									type="text"
									name="phone"
									pattern="^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$"/>
							</div>
						</div>
						<div className="flex flex-col py-2">
							<label htmlFor="email"
							       className="uppercase text-sm py-2 after:content-['*'] after:text-red-600 after:font-bold after:ml-0.5">Email</label>
							<input
								id="email"
								required
								className="border-2 rounded-lg p-2 flex border-gray-300 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
								type="email"
								name="email"
								pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"/>
						</div>
						<div className="flex flex-col py-2">
							<label htmlFor="subject"
							       className="uppercase text-sm py-2 after:content-['*'] after:text-red-600 after:font-bold after:ml-0.5">Subject</label>
							<input
								id="subject"
								required
								className="border-2 rounded-lg p-2 flex border-gray-300 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
								type="text"
								name="subject"/>
						</div>
						<div className="flex flex-col py-2">
							<label htmlFor="message"
							       className="uppercase text-sm py-2 after:content-['*'] after:text-red-600 after:font-bold after:ml-0.5">Message</label>
							<textarea
								id="message"
								required
								className="border-2 rounded-lg p-2 border-gray-300 text-black"
								name="message"
								rows={8}
								minLength={10}/>
						</div>
						<div className="flex justify-center align-middle py-2">
							<button type="submit"
							        className="w-5/6 p-4 rounded-xl bg-gradient-to-r from-[#017ca6] to-[#004682] mt-4 hover:scale-105 ease-in duration-300 cursor-pointer opacity-100 group-invalid:pointer-events-none group-invalid:opacity-30">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
			
			<Script
				id=""
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `(function(){document.getElementById("all").click();document.getElementById("loading").setAttribute("style","height:0")})();`,
				}}
			/>
		</main>
	);
}
