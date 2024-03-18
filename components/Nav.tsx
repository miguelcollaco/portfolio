import Link from "next/link";

export default function Nav() {
	return (
		<nav className="w-full h-8 items-center justify-between font-normal flex fixed">
			<Link href={"/"} className={"text-xl mt-1.5"}>
				MC
			</Link>
			<div className="flex items-center justify-between space-x-3 h-full">
				{[
					['Home', '/'],
					['About', '/'],
					['Tech Stack', '/'],
					['Contact', '/'],
				].map(([title, url]) => (
					// eslint-disable-next-line react/jsx-key
					<a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
				))}
			</div>
		</nav>
	)
}
