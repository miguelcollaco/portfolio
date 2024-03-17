"use client";

import React from 'react';
import Typed from 'typed.js';

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
        <main className="flex flex-col items-center w-full">
            <div className="flex flex-col h-screen items-center justify-center">
                <div className="flex flex-col">
                    <h1 className="text-6xl font-bold leading-loose">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Hi, I'm Miguel
                    </h1>
                    <a className="text-2xl font-semibold accent-gray-500">
                        A <span ref={el}/>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col">
                <h1>Tech Stack</h1>
                <h2>Lorem ipsum</h2>
            </div>
        </main>
    );
}
