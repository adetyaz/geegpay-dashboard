'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavProps {
	links: {
		icon: JSX.Element
		path: string
	}[]
}

export function Nav({ links }: NavProps) {
	const pathname = usePathname()

	return (
		<div className='flex flex-col gap-4 py-2 '>
			<nav className='flex flex-col gap-8 px-2 items-center'>
				{links.map((link, index) => (
					<Link key={index} href='#' className='relative'>
						{link.icon}

						{pathname === link.path ? (
							<span className='indicatior h-5 w-1 rounded-lg bg-black dark:bg-white absolute -right-4 top-0'></span>
						) : (
							''
						)}
					</Link>
				))}
			</nav>
		</div>
	)
}
