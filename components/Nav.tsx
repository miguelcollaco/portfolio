import Link from "next/link";

export default function Nav() {
	return (
		<nav className="w-full items-center justify-between font-normal flex h-8 mb-4">
			<Link href={"/"} className={"text-xl mt-1.5"}>
				Recipe Hub
			</Link>
			<div className="flex items-center justify-between space-x-3 h-full">
				<button className="bg-orange-600 h-full px-2 rounded-md">
					Post Recipe
				</button>
				<button className={"h-full"} title="Style">
				</button>
			</div>
		</nav>
	)
}
