"use client";

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

import Image from "next/image";
import Script from "next/script";

export default function Home() {
    const el = useRef(null);
    
    useEffect(() => {
        const typed: Typed = new Typed(el.current, {
            strings: ["computer science and engineering student", "tech enthusiast", "freelance developer"],
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
		<main className="flex flex-col items-center w-full px-3 md:px-[10vw] lg:px-[15vw]">
			<div id="loading" className='fixed inset-0 flex space-x-2 justify-center items-center bg-main-bg h-screen w-screen z-30 overflow-hidden duration-[450ms]'>
				<span className='sr-only'>Loading...</span>
				<div className='size-7 bg-main-accent opacity-75 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
				<div className='size-7 bg-main-accent opacity-75 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
				<div className='size-7 bg-main-accent opacity-75 rounded-full animate-bounce'></div>
			</div>
			
			<div className="flex flex-col items-center justify-center h-screen" id="home">
				<div className="flex flex-col">
					<h1 className="text-5xl md:text-6xl font-bold leading-relaxed z-10 [text-shadow:_0_0_15px_rgb(0_0_0_/_50%)]">
						Hi, I&apos;m Miguel
					</h1>
					<a className="text-sm md:text-lg font-semibold z-10 [text-shadow:_0_0_15px_rgb(0_0_0_/_60%)]">
						A <span ref={el}/>
					</a>
					<div
						className="absolute top-1/3 w-80 h-80 bg-red-600 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
					<div
						className="absolute left-1/2 top-1/3 w-80 h-80 bg-amber-400 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
					<div
						className="absolute right-1/2 top-1/3 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
				</div>
			</div>
			
			<div className="flex flex-col w-full min-h-10m h-screen md:pt-32" id="about">
				<div
					className="h-[85%] bg-lighter-bg w-full rounded-2xl bg-opacity-70 flex flex-row p-5 overflow-hidden">
					<div className=" h-full w-3/5 flex flex-col justify-between p-10 pl-4">
						<h1 className="w-max text-4xl uppercase font-semibold after:bg-main-accent after:block after:h-0.5 after:w-full after:my-2">
							About Me
						</h1>
						<p className="text-xl">
							Passionate CSE student with a knack for problem-solving and a strong foundation in software
							development. Experienced in tackling challenges with an analytical mindset. Eager to
							contribute to innovative projects and continue learning in the dynamic tech landscape.
						</p>
						<p>
							Currently studying @ NOVA SST
						</p>
					</div>
					<div
						className=" h-full w-2/5 rounded-2xl p-4 overflow-hidden relative shadow-[rgba(0,0,0,0.4)] shadow-xl">
						<Image
							src="/thispersondoesnotexist.jpeg"
							alt="photo"
							fill
							objectFit="cover"
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
			
			<div className="flex flex-col w-full min-h-10 md:pt-32 h-auto" id="techstack">
				<div>
					<div className="mb-6">
						<div className="w-max">
							<h1 className="uppercase after:bg-main-accent after:block after:h-0.5 after:w-full after:mb-2">Tech
								Stack</h1>
						</div>
						<h2>Some of the programming languages, frameworks, tools and technologies I&apos;ve used</h2>
					</div>
					<div>
						<div className="flex flex-row justify-center mb-1" id="buttons">
							{[
								["all", "All"],
								["lang", "Programming Languages"],
								["text", "IDEs / Text Editors"],
							].map(([id, name]) => (
								// eslint-disable-next-line react/jsx-key
								<button
									onClick={filterSelection}
									id={id}
									className="py-2 px-3 rounded-lg bg-gradient-to-r from-[#017ca6] to-[#004682] mx-2 disabled:scale-110 transition [text-shadow:_0_0_15px_rgb(0_0_0_/_60%)] disabled:shadow-md disabled:shadow-[rgba(255,255,255,0.1)] shadow-inner shadow-[rgba(0,0,0,0.5)]">
									{name}
								</button>
							))}
						</div>
						<ul className="pt-2 grid align-middle grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 my-0 mx-auto"
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
								// eslint-disable-next-line react/jsx-key
								<li
									className="flex justify-center align-middle aspect-square rounded-lg bg-lighter-bg bg-opacity-70 hover:scale-110 duration-300"
									id={id}
									title={title}>
									<Image
										className="fill-amber-50"
										src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-plain.svg`}
										// @ts-ignore
										onError={e => e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`}
										alt={name}
										width="100"
										height="100"
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			
			<div className="flex flex-col justify-between w-full md:pt-32 min-h-screen" id="contact">
				<div className="grid lg:grid-cols-5 gap-8">
					<div className="col-span-3 lg:col-span-2 w-full">
						<div className="p-6 sticky top-36 bg-lighter-bg bg-opacity-70 rounded-xl">
							<div className="w-max">
								<h1 className="uppercase after:bg-main-accent after:block after:h-0.5 after:w-full after:mb-2">Contact</h1>
							</div>
							<div className="mt-4">
								<h2 className="py-2 ">Miguel Collaço</h2>
								<p className="py-4">I am available to freelance. Contact me!</p>
							</div>
							<div className="flex items-center justify-between py-4">
								<a target="_blank" rel="noreferrer"
								   href="https://www.linkedin.com/in/miguel-collaço/">
									<div
										className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<i className="devicon-linkedin-plain"/>
									</div>
								</a>
								<a target="_blank" rel="noreferrer" href="https://github.com/miguelcollaco">
									<div
										className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<i className="devicon-github-plain"/>
									</div>
								</a>
								<a href="mailto:miguel.l.collaco@gmail.com" target="_blank" rel="noreferrer">
									<div
										className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<svg stroke="currentColor" fill="currentColor" strokeWidth="0"
										     viewBox="0 0 1024 1024" height="1em" width="1em"
										     xmlns="http://www.w3.org/2000/svg">
											<path
												d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
										</svg>
									</div>
								</a>
							</div>
						</div>
					</div>
					<form
						className="group col-span-3 w-full h-auto rounded-xl bg-lighter-bg bg-opacity-70 flex flex-col justify-center align-middle p-6"
						action="https://getform.io/f/" encType="multipart/form-data" method="POST">
						<div className="grid md:grid-cols-2 gap-4 w-full">
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
			
			<div className="w-full pt-32 mb-60">
				<h1>th</h1>
				<p>teste</p>
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
