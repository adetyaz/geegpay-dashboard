'use client'

import {
	Bar,
	BarChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Rectangle,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

const data = [
	{
		name: 'Jan',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Feb',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Mar',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Apr',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'May',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Jun',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Jul',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Aug',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Sep',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Oct',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Nov',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
	{
		name: 'Dec',
		total: Math.floor(Math.random() * 50000) + 1000,
	},
]

export function Overview() {
	return (
		<ResponsiveContainer width='100%' height={350}>
			<BarChart data={data}>
				<XAxis
					dataKey='name'
					stroke='#888888'
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					stroke='#888888'
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => `$${value}`}
				/>
				<CartesianGrid strokeDasharray='2' />
				{/* <XAxis dataKey='name' />
				<YAxis /> */}
				<Tooltip contentStyle={{ color: 'green', background: 'blue' }} />

				<Bar
					dataKey='total'
					fill='currentColor'
					radius={[2, 2, 0, 0]}
					className='fill-blue-600 w-7 rounded-s-full'
					activeBar={<Rectangle fill='fill-yellow-500' />}
				/>
			</BarChart>
		</ResponsiveContainer>
	)
}
