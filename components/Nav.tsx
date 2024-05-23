"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion"

export default function Nav() {
	const [top, setTop] = useState(true);
	
	useEffect(() => {
		let scrollHandler = () => setTop(window.scrollY < 25)
		window.addEventListener('scroll', () => setTop(window.scrollY < 25));
		return () => window.removeEventListener('scroll', scrollHandler);
	}, [top]);
	
	let { scrollYProgress } = useScroll();
	let scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});
	
	let handleScroll = (e: any) => {
		e.preventDefault();
		let href = e.currentTarget.href;
		let targetId = href.replace(/.*\#/, "");
		document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
	
	return (
		<>
			<nav
				className={`w-full py-3 px-6 z-20 flex flex-row items-center justify-between fixed uppercase backdrop-blur-2xl transition ease-in-out duration-500 ${!top && 'shadow-xl'} shadow-zinc-950 hidden md:flex`}>
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
						<Link key={url} href={url} onClick={handleScroll}
						      className="py-2 pl-6 relative after:bg-accent after:block after:m-auto after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ">{title}</Link>
					))}
				</div>
			</nav>
			<motion.div className="hidden md:block fixed bg-accent origin-[0] mt-[4rem] z-30 h-[1px] left-0 right-0" style={{scaleX}}/>
		</>
	)
}
