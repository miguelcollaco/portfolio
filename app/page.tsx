"use client";

import React from 'react';
import Typed from 'typed.js';

import Image from "next/image";
import localFont from "next/dist/compiled/@next/font/dist/local";

export default function Home() {
    const el = React.useRef(null);
    
    React.useEffect(() => {
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
		for (const el of document.getElementById("buttons")?.children) {
			el.disabled = false
		}
		e.target.disabled = true;

		// @ts-ignore
		for (const el of document.getElementById("list")?.children)
			if (el.id.includes(e.target.id))
				el.className = el.className.replace(" hidden", "")
			else
				el.className += " hidden"
	}
    
    return (
	    <main className="flex flex-col items-center w-full px-3 md:px-[10vw] lg:px-[15vw]">
		    <div className="flex flex-col h-screen items-center justify-center" id="home">
			    <div className="flex flex-col">
				    <h1 className="text-6xl font-bold leading-relaxed z-10 [text-shadow:_0_0_15px_rgb(0_0_0_/_50%)]">
					    {/* eslint-disable-next-line react/no-unescaped-entities */}
					    Hi, I'm Miguel
				    </h1>
				    <a className="text-lg font-semibold z-10 [text-shadow:_0_0_15px_rgb(0_0_0_/_60%)]">
					    A <span ref={el}/>
				    </a>
				    <div className="absolute top-1/3 w-80 h-80 bg-red-600 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
				    <div className="absolute left-1/2 top-1/3 w-80 h-80 bg-amber-400 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
				    <div className="absolute right-1/2 top-1/3 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
			    </div>
		    </div>
		    
		    <div className="flex flex-col w-full min-h-10m pt-32 h-screen" id="about">
			    <div className="h-[85%] bg-gray-900 w-full rounded-2xl flex flex-row p-5 overflow-hidden">
				    <div className=" h-full w-3/5 flex flex-col justify-between p-10 pl-4">
					    <h1 className="text-4xl uppercase font-semibold">
						    About Me
					    </h1>
					    <p className="text-xl">
						    Passionate CSE student with a knack for problem-solving and a strong foundation in software
						    development. Experienced in tackling challenges with an analytical mindset. Eager to
						    contribute to innovative projects and continue learning in the dynamic tech landscape.
						    <br/><br/>
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
		    
		    <div className="flex flex-col w-full min-h-10m pt-32 h-auto" id="techstack">
			    <div>
				    <div>
					    <h1 className="uppercase">Tech Stack</h1>
					    {/* eslint-disable-next-line react/no-unescaped-entities */}
					    <h2>Some of the programming languages, frameworks, tools and technologies I've used</h2>
				    </div>
				    <div>
					    <div className="flex flex-row justify-center" id="buttons">
						    {[
							    ["", "All"],
							    ["lang", "Programming Languages"],
							    ["text", "IDEs / Text Editors"],
						    ].map(([id, name]) => (
							    // eslint-disable-next-line react/jsx-key
							    <button
								    onClick={filterSelection}
								    id={id}
								    className="bg-blue-600 py-2 px-3 rounded-lg mx-2">
								    {name}
								</button>
						    ))}
					    </div>
					    <ul className="flex justify-center flex-wrap list-none" id="list">
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
								    className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
								    id={id}
								    title={title}>
								    <i className={`devicon-${name}-plain text-[6.5em] text-accent`}></i>
							    </li>
						    ))}
					    </ul>
				    </div>
			    </div>
		    </div>
		    
		    <div className="flex flex-row justify-between w-full pt-32 min-h-screen" id="contact">
			    <div className="grid lg:grid-cols-5 gap-8">
				    <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl  p-4">
					    <div className="lg:p-4 h-full ">
						    <div>img</div>
						    <div className="mt-4">
							    <h2 className="py-2 ">Miguel Collaço</h2>
							    <p>Web Developer</p>
							    {/* eslint-disable-next-line react/no-unescaped-entities */}
							    <p className="py-4">I am available for freelance or full-time positions. Contact me and
								    let's talk.</p>
						    </div>
						    <div>
							    <p className="uppercase pt-8">Connect With Me</p>
							    <div className="flex items-center justify-between py-4">
								    <a target="_blank" rel="noreferrer"
								       href="https://www.linkedin.com/in/miguel-collaço/">
									    <div
										    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										    <i className="devicon-linkedin-plain"></i>
									    </div>
								    </a>
								    <a target="_blank" rel="noreferrer" href="https://github.com/miguelcollaco">
									    <div
										    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										    <i className="devicon-github-plain"></i>
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
				    </div>
				    <div className="col-span-3 w-full h-auto rounded-xl">
					    <div className="p-4">
						    <form action="https://getform.io/f/517ff085-a2f9-4139-8e4b-8724267c68f1" encType="multipart/form-data" method="POST">
							    <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
								    <div className="flex flex-col">
									    <label className="uppercase text-sm py-2">Name</label>
									    <input required className="border-2 rounded-lg p-2 flex border-gray-300" type="text" name="name"/>
								    </div>
								    <div className="flex flex-col">
									    <label className="uppercase text-sm py-2">Phone Number (Optional)</label>
									    <input className="border-2 rounded-lg p-2 flex border-gray-300" type="text" name="phone"/>
									</div>
							    </div>
							    <div className="flex flex-col py-2">
								    <label className="uppercase text-sm py-2">Email</label>
								    <input required className="border-2 rounded-lg p-2 flex border-gray-300" type="email" name="email"/>
							    </div>
							    <div className="flex flex-col py-2">
								    <label className="uppercase text-sm py-2">Subject</label>
								    <input required className="border-2 rounded-lg p-2 flex border-gray-300" type="text" name="subject"/>
								</div>
							    <div className="flex flex-col py-2">
								    <label className="uppercase text-sm py-2">Message</label>
								    <textarea required className="border-2 rounded-lg p-2 border-gray-300" rows={8} name="message"></textarea>
							    </div>
							    <input className="hidden" type="hidden" name="_gotcha"/>
							    <button type="submit" className="w-full p-4 bg-gradient-to-r from-[#017ca6] to-[#004682] text-gray-100 mt-4 hover:scale-105 ease-in duration-300">Send
								    Message
							    </button>
						    </form>
					    </div>
				    </div>
			    </div>
		    </div>
	    </main>
    );
}
