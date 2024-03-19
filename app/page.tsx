"use client";

import React from 'react';
import Typed from 'typed.js';

import JavascriptPlainIcon from "react-devicons/javascript/plain";
import TypescriptPlainIcon from "react-devicons/typescript/plain";
import JavaPlainIcon from "react-devicons/java/plain";
import CPlainIcon from "react-devicons/c/plain";
import PythonPlainIcon from "react-devicons/python/plain";
import Html5PlainWordmarkIcon from "react-devicons/html5/plain";
import Css3PlainWordmarkIcon from "react-devicons/css3/plain";
import TailwindcssPlainIcon from "react-devicons/tailwindcss/plain";
import MysqlPlainWordmarkIcon from "react-devicons/mysql/plain";
import ArduinoPlainIcon from "react-devicons/arduino/plain";
import DotNetPlainIcon from "react-devicons/dot-net/plain";
import NextjsOriginalIcon from "react-devicons/nextjs/original";
import PhotoshopPlainIcon from "react-devicons/photoshop/plain";
import VisualstudioPlainIcon from "react-devicons/visualstudio/plain";
import VscodePlainIcon from "react-devicons/vscode/plain";
import JetbrainsPlainIcon from "react-devicons/jetbrains/plain";
import Image from "next/image";

export default function Home() {
    const el = React.useRef(null);
    
    React.useEffect(() => {
        const typed: Typed = new Typed(el.current, {
            strings: ["computer science student", "tech enthusiast", "freelance developer"],
            loop: true,
            typeSpeed: 80,
            backSpeed: 40,
        });
        
        return(): void => typed.destroy();
    }, []);
    
    return (
	    <main className="flex flex-col items-center w-full px-[15vw]">
		    <div className="flex flex-col h-screen items-center justify-center" id="home">
			    <div className="flex flex-col">
				    <h1 className="text-6xl font-bold leading-relaxed z-10">
					    {/* eslint-disable-next-line react/no-unescaped-entities */}
					    Hi, I'm Miguel
				    </h1>
				    <a className="text-lg font-semibold z-10">
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
		    
		    <div className="flex flex-col w-full min-h-10m pt-32 h-screen" id="techstack">
			    <div>
				    <div>
					    <h1>Tech Stack</h1>
					    {/* eslint-disable-next-line react/no-unescaped-entities */}
					    <h2>Some of the programming languages, frameworks, tools and technologies I've used</h2>
				    </div>
				    <ul className="flex justify-center flex-wrap list-none">
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="JavaScript"><JavascriptPlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="TypeScript"><TypescriptPlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="Java"><JavaPlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="Python"><PythonPlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="C"><CPlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="TailwindCSS"><TailwindcssPlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="HTML"><Html5PlainWordmarkIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="CSS"><Css3PlainWordmarkIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="MySQL"><MysqlPlainWordmarkIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="Arduino"><ArduinoPlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title=".NET (Visual Basic)"><DotNetPlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="Next.js"><NextjsOriginalIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="JetBrains IDEs (IntelliJ IDEA, WebStorm, PyCharm)"><JetbrainsPlainIcon
						    color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="Visual Studio"><VisualstudioPlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="Visual Studio Code"><VscodePlainIcon color="lightblue" size="100%"/></li>
					    <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
					        title="Photoshop"><PhotoshopPlainIcon color="lightblue" size="100%"/></li>
				    </ul>
			    </div>
		    </div>
		    
		    <div className="col-span-3 w-full h-auto rounded-xl lg:p-4" id="contact">
			    <div className="p-4 ">
				    <form action="https://getform.io/f/517ff085-a2f9-4139-8e4b-8724267c68f1"
				          encType="multipart/form-data" method="POST">
					    <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
						    <div className="flex flex-col"><label className="uppercase text-sm py-2">Name</label><input
							    required className="border-2 rounded-lg p-2 flex border-gray-300" type="text"
							    name="name"/></div>
						    <div className="flex flex-col"><label className="uppercase text-sm py-2">Phone Number
							    (Optional)</label><input className="border-2 rounded-lg p-2 flex border-gray-300"
						                                 type="text" name="phone"/></div>
					    </div>
					    <div className="flex flex-col py-2"><label
						    className="uppercase text-sm py-2">Email</label><input required
					                                                               className="border-2 rounded-lg p-2 flex border-gray-300"
					                                                               type="email" name="email"/></div>
					    <div className="flex flex-col py-2"><label
						    className="uppercase text-sm py-2">Subject</label><input required
					                                                                 className="border-2 rounded-lg p-2 flex border-gray-300"
					                                                                 type="text" name="subject"/></div>
					    <div className="flex flex-col py-2"><label
						    className="uppercase py-2 text-sm">Message</label><textarea required
					                                                                    className="border-2 rounded-lg p-2 border-gray-300"
					                                                                    rows={8}
					                                                                    name="message"></textarea></div>
					    <input className="hidden" type="hidden" name="_gotcha"/>
					    <button type="submit"
					            className="w-full p-4 bg-gradient-to-r from-[#017ca6] to-[#004682] text-gray-100 mt-4 hover:scale-105 ease-in duration-300">Send
						    Message
					    </button>
				    </form>
			    </div>
		    </div>
	    </main>
    );
}
