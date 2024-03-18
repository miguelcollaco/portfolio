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

export default function Home() {
    const el = React.useRef(null);
    
    React.useEffect(() => {
        const typed: Typed = new Typed(el.current, {
            strings: ["computer science student", "tech enthusiast"],
            loop: true,
            typeSpeed: 80,
            backSpeed: 40,
        });
        
        return(): void => typed.destroy();
    }, []);
    
    return (
        <main className="flex flex-col items-center w-full px-48">
            <div className="flex flex-col h-screen items-center justify-center">
                <div className="flex flex-col">
                    <h1 className="text-6xl font-bold leading-relaxed">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Hi, I'm Miguel
                    </h1>
                    <a className="text-lg font-semibold accent-gray-500">
                        A <span ref={el}/>
                    </a>
                </div>
            </div>
	        
	        <div className="flex flex-col w-full min-h-10 h-screen">
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
				            title="JetBrains IDEs (IntelliJ IDEA, WebStorm, PyCharm)"><JetbrainsPlainIcon color="lightblue" size="100%"/></li>
				        <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
				            title="Visual Studio"><VisualstudioPlainIcon color="lightblue" size="100%"/></li>
				        <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
				            title="Visual Studio Code"><VscodePlainIcon color="lightblue" size="100%"/></li>
				        <li className="flex justify-center align-middle w-32 h-32 p-3 m-3 rounded-lg bg-gray-900 hover:scale-110 duration-300"
				            title="Photoshop"><PhotoshopPlainIcon color="lightblue" size="100%"/></li>
			        </ul>
		        </div>
	        </div>
        </main>
    );
}
