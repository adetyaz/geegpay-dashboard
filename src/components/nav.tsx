'use client'

import Link from 'next/link'

interface NavProps {
	links: {
		icon: JSX.Element
	}[]
}

export function Nav({ links }: NavProps) {
	return (
		<div className='flex flex-col gap-4 py-2 '>
			<nav className='flex flex-col gap-1 px-2 items-center'>
				{links.map((link, index) => (
					<Link key={index} href='#'>
						{link.icon}
					</Link>
				))}
			</nav>
		</div>
	)
}
