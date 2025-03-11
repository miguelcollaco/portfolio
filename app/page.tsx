import Typed from "@/components/Typed"
import TechStack from "@/components/TechStack"
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	return (
		<main
			className="flex flex-col items-center w-full notFirstChild:px-4 sm:notFirstChild:px-[6vw] md:notFirstChild:px-[10vw] lg:notFirstChild:px-[12vw] xl:notFirstChild:px-[14vw] notFirstChild:pt-40 notFirstChild:mb-56">
			<div className="flex flex-col items-center justify-center h-screen w-full relative overflow-x-hidden pt-0"
			     id="home">
				<div className="flex flex-col">
					<h1 className="text-[2.9rem] md:text-6xl font-bold leading-relaxed z-10 [text-shadow:_0_0_15px_rgb(0_0_0_/_50%)]">
						Hi, I&apos;m Miguel
					</h1>
					<h6 className="font-semibold z-10 mt-2 [text-shadow:_0_0_15px_rgb(0_0_0_/_70%)]">
						<Typed/>
					</h6>
					<div
						className="absolute top-1/3 w-80 h-80 bg-red-600 rounded-full filter blur-3xl opacity-50 animate-blob overflow-x-hidden"></div>
					<div
						className="absolute left-1/2 top-1/3 w-80 h-80 bg-amber-400 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000 overflow-x-hidden"></div>
					<div
						className="absolute right-1/2 top-1/3 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000 overflow-x-hidden"></div>
				</div>
			</div>
			
			<div className="flex w-full" id="about">
				<div
					className="flex flex-col justify-between align-middle md:flex-row bg-secondary/30 rounded-2xl p-5 [box-shadow:_0_0_27px_rgba(36,156,254,0.6)] border-2 border-solid border-accent">
					<div className="h-full p-10 md:w-[65%] lg:w-[65%] flex flex-col justify-between mb-6 md:m-0">
						<h1 className="w-max uppercase font-semibold after:bg-accent after:block after:h-1 after:w-full after:mb-6 md:after:m-0">
							About Me
						</h1>
						<p>
							Passionate CSE student with a knack for problem-solving and a strong foundation in software
							development. Experienced in tackling challenges with an analytical mindset. Eager to
							contribute to innovative projects and continue learning in the dynamic tech landscape.
						</p>
						<p>
							Currently studying @ NOVA School of Science and Technology
						</p>
					</div>
					<div className="h-full rounded-2xl flex flex-row align-middle items-center">
						<Image
							src="/images/portrait.JPG"
							alt="photo"
							sizes="100vh"
							width={400}
							height={300}
							className="rounded-2xl border-accent border-2 shadow-lg shadow-accent/25 mx-auto"
						/>
					</div>
				</div>
			</div>
			
			<div className="flex flex-col w-full h-auto" id="techstack">
				<TechStack/>
			</div>
			
			<div className="flex flex-col justify-between w-full" id="contact">
				<div className="grid lg:grid-cols-5 gap-8">
					<div className="col-span-3 lg:col-span-2 w-full">
						<div
							className="p-6 sticky top-28 bg-secondary/30 rounded-xl [box-shadow:_0_0_27px_rgba(36,156,254,0.6)] border-2 border-solid border-accent">
							<div className="w-max">
								<h1 className="uppercase after:bg-accent after:block after:h-0.5 after:w-full after:mb-2">Contact</h1>
							</div>
							<div className="mt-4">
								<h4 className="pt-2 font-normal">Miguel Collaço</h4>
								<p className="pt-4">I am available to freelance. </p>
								<p>Don&apos;t hesitate to contact me!</p>
							</div>
							<div className="flex text-xl mt-10 justify-evenly gap-4 z-10 *:rounded-lg *:bg-background *:*:aspect-square *:p-3 *:grid *:place-items-center *:[box-shadow:0_0_20px_rgba(36,156,254,0.3)] *:border-2 *:border-solid *:border-accent">
								<a
									data-title="LinkedIn"
									target="_blank"
									rel="noreferrer"
									href="https://www.linkedin.com/in/miguel-collaço/"
									className="cursor-pointer hover:scale-110 ease-in duration-200"
								>
									<FontAwesomeIcon icon={faLinkedinIn} size="xl" />
								</a>
								<a
									data-title="GitHub"
									target="_blank"
									rel="noreferrer"
									href="https://github.com/miguelcollaco"
									className="cursor-pointer hover:scale-110 ease-in duration-200"
								>
									<FontAwesomeIcon icon={faGithub} size="xl" />
								</a>
								<a
									data-title="Email"
									target="_blank"
									rel="noreferrer"
									href="mailto:miguel.l.collaco@gmail.com"
									className="cursor-pointer hover:scale-110 ease-in duration-200"
								>
									<FontAwesomeIcon icon={faEnvelope} size="xl" />
								</a>
								<a
									data-title="CV"
									target="_blank"
									rel="noreferrer"
									href="/files/CV_Miguel_Collaco.pdf"
									className="cursor-pointer hover:scale-110 ease-in duration-200"
								>
									<FontAwesomeIcon icon={faFileLines} size="xl" />
								</a>
							</div>
						</div>
					</div>
					<form
						className="group col-span-3 w-full h-auto rounded-xl bg-secondary/30 flex flex-col justify-center align-middle p-8 [box-shadow:_0_0_27px_rgba(36,156,254,0.6)] border-2 border-solid border-accent"
						action="https://getform.io/f/lbjkepxa" encType="multipart/form-data" method="POST">
						<div className="grid md:grid-cols-2 gap-6 w-full">
							<div className="flex flex-col">
								<label
									htmlFor="name"
									className="uppercase text-sm py-2 after:content-['*'] after:text-red-600 after:font-bold after:ml-0.5 after:relative after:-top-0.5">
									Name
								</label>
								<input
									id="name"
									required
									placeholder=""
									className="border-2 rounded-lg p-2 flex border-accent bg-text ease-in duration-200 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-hidden"
									type="text"
									name="name"
									pattern="^(?![\x20\x27\x2D]|.*?[\p{Lu}]{2}|.*?[\x20]{2}|.*?[\x27]{2}|.*?[\x2D]{2}|.*?(\x20\x2D|\x2D\x20)|.*?(\x27\x2D|\x2D\x27)|.*?(\x27[\w]+\x27(\x20|$)))[\p{L}\x20\x27\x2D]+$(?<![\x20\x2D])"
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="phone"
									className="uppercase text-sm py-2">
									Phone Number
								</label>
								<input
									id="phone"
									placeholder=""
									className="border-2 rounded-lg p-2 flex border-accent bg-text ease-in duration-200 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-hidden"
									type="tel"
									name="phone"
									pattern="(^[+]\d{1,3}\s?)?(\d{5,9})"
								/>
							</div>
						</div>
						<div className="flex flex-col py-2">
							<label
								htmlFor="email"
								className="uppercase text-sm py-2 after:content-['*'] after:text-red-600 after:font-bold after:relative after:-top-0.5">
								Email
							</label>
							<input
								id="email"
								required
								placeholder=""
								className="border-2 rounded-lg p-2 flex border-accent bg-text ease-in duration-200 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-hidden"
								type="email"
								name="email"
								pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$"
							/>
						</div>
						<div className="flex flex-col py-2">
							<label
								htmlFor="subject"
								className="uppercase text-sm py-2 after:content-['*'] after:text-red-600 after:font-bold after:ml-0.5 after:relative after:-top-0.5">
								Subject
							</label>
							<input
								id="subject"
								required
								placeholder=""
								className="border-2 rounded-lg p-2 flex border-accent bg-text ease-in duration-200 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-hidden"
								type="text"
								name="subject"
								minLength={10}
								maxLength={50}
							/>
						</div>
						<div className="flex flex-col py-2">
							<label
								htmlFor="message"
								className="uppercase text-sm py-2 after:content-['*'] after:text-red-600 after:font-bold after:ml-0.5 after:relative after:-top-0.5">
								Message
							</label>
							<textarea
								id="message"
								required
								placeholder=""
								className="border-2 rounded-lg p-2 border-accent bg-text ease-in duration-200 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-hidden"
								name="message"
								rows={8}
								minLength={10}/>
						</div>
						<div className="flex justify-center align-middle py-2">
							<button
								type="submit"
								className="w-2/3 p-4 rounded-xl bg-linear-to-r from-[#017ca6] to-[#004682] mt-4 hover:scale-105 ease-in duration-300 cursor-pointer opacity-100 group-invalid:pointer-events-none group-invalid:opacity-30">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
