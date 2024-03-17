"use client";
export default function Footer() {
	function scrollToTop(): void {
		if (!(typeof window !== 'undefined')) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	
	return (
		<>
			<footer className="w-full items-center justify-around font-normal text-center flex h-8 mt-4">
				<span>Made with 💖 by <a href="https://www.linkedin.com/in/miguel-colla%C3%A7o" target="_blank">Miguel Collaço</a></span>
			</footer>
			<button className={`fixed bottom-0 right-0 bg-black rounded-s-full px-4 mr-6 mb-10 z-50 items-center text-xs flex gap-2`} onClick={scrollToTop} >
				BACK TO TOP
			</button>
		</>
	)
}