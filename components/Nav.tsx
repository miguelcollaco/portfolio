"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
	const [top, setTop] = useState(true);
	
	useEffect(() => {
		const scrollHandler = () => {
			window.scrollY > 10 ? setTop(false) : setTop(true)
		};
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, [top]);
	
	const handleScroll = (e: any) => {
		e.preventDefault();
		
		const href = e.currentTarget.href;
		const targetId = href.replace(/.*\#/, "");
		
		const elem = document.getElementById(targetId);
		elem?.scrollIntoView({
			behavior: "smooth",
		});
	}
	
	return (
		<nav className={`w-full py-3 px-4 z-20 flex flex-row items-center justify-between fixed uppercase text-white backdrop-blur-2xl transition ease-in-out duration-300 ${!top && `shadow-xl shadow-zinc-900`}`}>
			<Link href={"#home"} onClick={handleScroll} className={""}>
				MC
			</Link>
			<div className="flex items-center justify-between space-x-3 h-full">
				{[
					['Home', '#home'],
					['About', '#about'],
					['Tech Stack', '#techstack'],
					['Contact', '#contact'],
				].map(([title, url]) => (
					// eslint-disable-next-line react/jsx-key
					<Link href={url} onClick={handleScroll} className="rounded-lg px-3 py-2 relative after:bg-white after:block after:m-auto after:h-[1.1px] after:w-0 hover:after:w-full after:transition-all after:duration-300 ">{title}</Link>
				))}
			</div>
		</nav>
	)
}
