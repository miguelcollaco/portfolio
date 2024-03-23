export default function Footer() {
	return (
		<footer className="w-full h-auto py-12 md:py-16 flex flex-col items-center text-center bg-secondary/30">
			<h3 className="uppercase text-xl md:text-3xl w-max after:bg-accent after:block after:h-0.5 after:w-full after:mt-1 after:mb-3 md:after:mb-5">Thank you for visiting my website!</h3>
			<p> Designed and coded by <a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/miguel-collaço/">
					Miguel Collaço
				</a>
			</p>
		</footer>
	)
}