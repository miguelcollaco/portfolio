"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
	const [top, setTop] = useState(true);
	
	useEffect(() => {
		const scrollHandler = () => {
			window.scrollY > 25 ? setTop(false) : setTop(true)
		};
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, [top]);
	
	const handleScroll = (e: any) => {
		e.preventDefault();
		
		const href = e.currentTarget.href;
		const targetId = href.replace(/.*\#/, "");
		
		const element = document.getElementById(targetId);
		// @ts-ignore
		const elementRect = element.getBoundingClientRect();
		const absoluteElementTop = elementRect.top + window.pageYOffset;
		const middle = absoluteElementTop - 110;
		window.scrollTo({top: middle, behavior: "smooth"})
	}
	
	return (
		<nav className={`w-full py-3 px-6 z-20 flex flex-row items-center justify-between fixed uppercase backdrop-blur-2xl transition ease-in-out duration-500 ${!top && 'shadow-xl'} shadow-zinc-950 hidden md:flex`}>
			<Link href={"#home"} onClick={handleScroll}>
				&lt;/MC&gt;
			</Link>
			<div className="flex items-center justify-between h-full">
				{[
					['Home', '#home'],
					['About', '#about'],
					['Tech Stack', '#techstack'],
					['Contact', '#contact'],
				].map(([title, url]) => (
					// eslint-disable-next-line react/jsx-key
					<Link href={url} onClick={handleScroll} className="py-2 pl-6 relative after:bg-accent after:block after:m-auto after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ">{title}</Link>
				))}
			</div>
		</nav>
	)
}
