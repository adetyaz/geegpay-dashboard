import {
	OrderIcon,
	RefundIcon,
	SummaryChart,
	SalesIcon,
	IncomeIcon,
	UpwardIcon,
	DownwardIcon,
} from '.'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

const data = [
	{
		icon: <OrderIcon />,
		title: 'Total Order',
		amount: '350',
		percentage: '23,5%',
		tag: 'order',
		trend: 'upward',
	},

	{
		icon: <RefundIcon />,
		title: 'Total Refund',
		amount: '270',
		percentage: '23,5%',
		tag: 'refund',
		trend: 'downward',
	},
	{
		icon: <SalesIcon />,
		title: 'Average Sales',
		amount: '1567',
		percentage: '23,5%',
		tag: 'sales',
		trend: 'downward',
	},
	{
		icon: <IncomeIcon />,
		title: 'Total Income',
		amount: '$134,500',
		percentage: '23,5%',
		tag: 'income',
		trend: 'upward',
	},
]

export const SummaryCard = () => {
	return (
		<>
			{data.map((summary: any) => (
				<Card className='w-[12rem] h-fit' key={summary.title}>
					<CardHeader key={summary.title} className='p-2'>
						<div className='text-sm w-full font-medium flex flex-row items-center justify-between '>
							{summary.icon}
							<SummaryChart trend={summary.trend} />
						</div>
						<CardTitle className='text-sm text-[#898989]'>
							{summary.title}
						</CardTitle>
					</CardHeader>
					<CardContent className='p-2'>
						<div className='text-2xl text-[#3A3F51] font-bold'>
							{summary.amount}
						</div>
						<div className='flex gap-2 items-center'>
							{summary.trend === 'upward' ? (
								<p className='flex gap-2 items-center text-xs rounded-full p-1  text-[#34CAA5] bg-[#34CAA542]'>
									<UpwardIcon />
									{summary.percentage}
								</p>
							) : (
								<p className='flex gap-2 items-center text-xs rounded-full p-1  text-[#ED544E] bg-[#ed544e42]'>
									<DownwardIcon />
									{summary.percentage}
								</p>
							)}

							<p className='text-xs text-muted-foreground'>
								vs. previous month
							</p>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	)
}
