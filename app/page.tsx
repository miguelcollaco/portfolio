import Typed from "@/components/Typed"
import TechStack from "@/components/TechStack"
import Image from "next/image";

export default function Home() {
	return (
		<main
			className="flex flex-col items-center w-full notFirstChild:px-4 notFirstChild:sm:px-[6vw] notFirstChild:md:px-[10vw] notFirstChild:lg:px-[12vw] notFirstChild:xl:px-[14vw] notFirstChild:pt-40 notFirstChild:mb-56">
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
					className="flex flex-col justify-center align-middle md:flex-row bg-secondary/30 rounded-2xl p-5 [box-shadow:_0_0_27px_rgba(36,156,254,0.6)] border-2 border-solid border-accent">
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
							Currently studying @ <abbr title="NOVA School of Science and Technology" className="no-underline italic">NOVA SST</abbr>
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
				<div className="mb-6">
					<div className="w-max">
						<h3 className="uppercase after:bg-accent after:block after:h-0.5 after:w-full after:mb-2">
							Tech Stack
						</h3>
					</div>
					<h5 className="text-[0.9rem] md:text-xl font-normal">
						Some of the programming languages, frameworks, tools and technologies I&apos;ve used
					</h5>
				</div>
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
							<div className="flex items-center justify-around pt-10 pb-4">
								<a
									title="LinkedIn"
									target="_blank"
									rel="noreferrer"
									href="https://www.linkedin.com/in/miguel-collaço/"
									className="rounded-full shadow-lg shadow-accent p-3.5 cursor-pointer hover:scale-110 ease-in duration-300"
								>
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
										alt="linkedin"
										width="40"
										height="40"
									/>
								</a>
								<a
									title="GitHub"
									target="_blank"
									rel="noreferrer"
									href="https://github.com/miguelcollaco"
									className="rounded-full shadow-lg shadow-accent p-3.5 cursor-pointer hover:scale-110 ease-in duration-300"
								>
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
										alt="github"
										width="40"
										height="40"
										style={{filter: "invert(1)"}}
									/>
								</a>
								<a
									title="Email"
									target="_blank"
									rel="noreferrer"
									href="mailto:miguel.l.collaco@gmail.com"
									className="rounded-full shadow-lg shadow-accent p-3.5 cursor-pointer hover:scale-110 ease-in duration-300"
								>
									<svg
										stroke="currentColor"
										strokeWidth="1px"
										viewBox="0 0 1024 1024"
										height="40"
										width="40"
										fill="white"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
									</svg>
								</a>
								<a
									title="CV"
									target="_blank"
									rel="noreferrer"
									href="/files/CV_Miguel_Collaco.pdf"
									className="rounded-full shadow-lg shadow-accent p-3.5 cursor-pointer hover:scale-110 ease-in duration-300"
								>
									<Image
										src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zIDI0aDE5di0yM2gtMXYyMmgtMTh2MXptMTctMjRoLTE4djIyaDE4di0yMnptLTEgMWgtMTZ2MjBoMTZ2LTIwem0tMiAxNmgtMTJ2MWgxMnYtMXptMC0zaC0xMnYxaDEydi0xem0wLTNoLTEydjFoMTJ2LTF6bS03LjM0OC0zLjg2M2wuOTQ4LjNjLS4xNDUuNTI5LS4zODcuOTIyLS43MjUgMS4xNzgtLjMzOC4yNTctLjc2Ny4zODUtMS4yODcuMzg1LS42NDMgMC0xLjE3MS0uMjItMS41ODUtLjY1OS0uNDE0LS40MzktLjYyMS0xLjA0LS42MjEtMS44MDIgMC0uODA2LjIwOC0xLjQzMi42MjQtMS44NzguNDE2LS40NDYuOTYzLS42NjkgMS42NDItLjY2OS41OTIgMCAxLjA3My4xNzUgMS40NDMuNTI1LjIyMS4yMDcuMzg2LjUwNS40OTYuODkybC0uOTY4LjIzMWMtLjA1Ny0uMjUxLS4xNzctLjQ0OS0uMzU4LS41OTQtLjE4Mi0uMTQ2LS40MDMtLjIxOC0uNjYzLS4yMTgtLjM1OSAwLS42NS4xMjktLjg3NC4zODYtLjIyMy4yNTgtLjMzNS42NzUtLjMzNSAxLjI1MiAwIC42MTMuMTEgMS4wNDkuMzMxIDEuMzA4LjIyLjI2LjUwNi4zOS44NTguMzkuMjYgMCAuNDg0LS4wODIuNjcxLS4yNDguMTg3LS4xNjUuMzIyLS40MjUuNDAzLS43Nzl6bTMuMDIzIDEuNzhsLTEuNzMxLTQuODQyaDEuMDZsMS4yMjYgMy41ODQgMS4xODYtMy41ODRoMS4wMzdsLTEuNzM0IDQuODQyaC0xLjA0NHoiLz48L3N2Zz4="
										alt="github"
										width="40"
										height="40"
										style={{filter: "invert(1)"}}
									/>
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
									className="border-2 rounded-lg p-2 flex border-accent bg-text ease-in duration-200 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-none"
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
									className="border-2 rounded-lg p-2 flex border-accent bg-text ease-in duration-200 text-black invalid:not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-none"
									type="tel"
									name="phone"
									pattern="^\\+?\\d{1,3}[ -]?(\\(?\\d{1,4}\\)?[ -]?)?\\d{1,4}[ -]?\\d{1,4}[ -]?\\d{1,9}$"
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
								className="border-2 rounded-lg p-2 flex border-accent bg-text ease-in duration-200 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-none"
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
								className="border-2 rounded-lg p-2 flex border-accent bg-text ease-in duration-200 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-none"
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
								className="border-2 rounded-lg p-2 border-accent bg-text ease-in duration-200 text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:[box-shadow:_0_0_27px_rgba(36,156,254,0.6)] focus:outline-none"
								name="message"
								rows={8}
								minLength={10}/>
						</div>
						<div className="flex justify-center align-middle py-2">
							<button
								type="submit"
								className="w-2/3 p-4 rounded-xl bg-gradient-to-r from-[#017ca6] to-[#004682] mt-4 hover:scale-105 ease-in duration-300 cursor-pointer opacity-100 group-invalid:pointer-events-none group-invalid:opacity-30">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
