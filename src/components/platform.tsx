import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

import { useState } from 'react'

const data = [
	{
		name: 'Book Bazaar',
		amount: ' $2,500,000',
		rate: '+15%',
		color: '#6160DC',
		percentage: 50,
	},
	{
		name: 'Artisan Aisle',
		amount: ' $1,800,000',
		rate: '+10%',
		color: '#54C5EB',
		percentage: 25,
	},
	{
		name: 'Toy Troop',
		amount: ' $1,200,000',
		rate: '+8%',
		color: '#54C5',
		percentage: 23,
	},
	{
		name: 'Xstore',
		amount: ' $2,200,000',
		rate: '+15%',
		color: '#880',
		percentage: 44,
	},
	{
		name: 'Book Bazaar',
		amount: ' $2,500,000',
		rate: '+15%',
		color: '#6160DC',
		percentage: 50,
	},
	{
		name: 'Artisan Aisle',
		amount: ' $1,800,000',
		rate: '+10%',
		color: '#54C5EB',
		percentage: 25,
	},
]

export function Platform() {
	const [showAll, setShowAll] = useState(false)
	return (
		<Card
			className={`h-[500px] w-full ${
				showAll ? 'overflow-y-scroll' : 'overflow-hidden'
			} `}
		>
			<CardHeader className='flex flex-row justify-between items-center'>
				<CardTitle className='text-2xl'>Last Orders</CardTitle>
				<div
					className='text-[#34CAA5] cursor-pointer'
					onClick={() => setShowAll(!showAll)}
				>
					{showAll === true ? 'Collapse' : 'See All'}
				</div>
			</CardHeader>
			<CardContent className='grid gap-y-8'>
				{data.map((platform) => (
					<div key={platform.name}>
						<h3 className='font-bold'>{platform.name}</h3>
						<div className='w-full h-3 my-2 bg-[#f5f5f5] rounded-full overflow-hidden'>
							<div
								className='h-full'
								style={{
									width: `${platform.percentage}% `,
									background: `${platform.color}`,
								}}
							></div>
						</div>
						<div className='text-sm flex justify-between items-center'>
							<p>{platform.amount}</p>
							<span>{platform.rate}</span>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
