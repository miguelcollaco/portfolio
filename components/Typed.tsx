"use client"

import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Footer() {
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
	
	return (
		<>
			A <span ref={el}/>
		</>
	)
}