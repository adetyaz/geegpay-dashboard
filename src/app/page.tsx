'use client'
import {
	MainNav,
	DashboardChart,
	Search,
	SideNav,
	UserNav,
	SummaryCard,
	Orders,
	Platform,
} from '@/components'

export default function Home() {
	return (
		<main className='flex items-start'>
			<div>
				<SideNav />
			</div>
			<div className='hidden flex-col md:flex w-full'>
				<div className='border-b'>
					<div className='flex h-16 items-center px-4'>
						<h2 className='text-xl dark:text-white font-bold tracking-tight'>
							Dashboard
						</h2>

						<div className='ml-auto flex items-center space-x-4'>
							<Search />
							<MainNav className='mx-6' />
							<UserNav />
						</div>
					</div>
				</div>
				<div className='flex-1 space-y-4 p-8 pt-6'>
					<div className='space-y-4'>
						<div className='md:flex gap-4'>
							<div className=' basis-2/3'>
								<DashboardChart />
							</div>

							<div className='grid gap-4 md:grid-cols-2'>
								<SummaryCard />
							</div>
						</div>
					</div>
					<div className='md:flex gap-4'>
						<div className='basis-2/3'>
							<Orders />
						</div>
						<div className='basis-1/3'>
							<Platform />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
