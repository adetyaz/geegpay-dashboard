import { Area, AreaChart } from 'recharts'

interface SummaryChartProps {
	tag: string
	trend: string
}

const data = [
	{
		name: 'Page A',
		uv: 4000,

		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,

		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,

		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,

		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,

		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,

		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,

		amt: 2100,
	},
	{
		name: 'Page H',
		uv: 2390,

		amt: 2500,
	},
	{
		name: 'Page I',
		uv: 3490,

		amt: 2100,
	},
	{
		name: 'Page J',
		uv: 2390,

		amt: 2500,
	},
	{
		name: 'Page K',
		uv: 3490,

		amt: 2100,
	},
	{
		name: 'Page L',
		uv: 2390,

		amt: 500,
	},
	{
		name: 'Page M',
		uv: 390,

		amt: 600,
	},
	{
		name: 'Page N',
		uv: 590,

		amt: 500,
	},
	{
		name: 'Page 0',
		uv: 490,
		amt: 200,
	},
	{
		name: 'Page P',
		uv: 390,
		amt: 200,
	},
	{
		name: 'Page Q',
		uv: 490,
		amt: 100,
	},
	{
		name: 'Page R',
		uv: 290,
		amt: 2500,
	},
	{
		name: 'Page S',
		uv: 190,
		amt: 300,
	},
]

export const SummaryChart = ({ tag, trend }: SummaryChartProps) => {
	return (
		<AreaChart width={80} height={50} data={data}>
			<defs>
				<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
					<stop
						offset='5%'
						stroke={
							trend === 'upward'
								? '#34CAA5'
								: trend === 'downward'
								? '#ED544E'
								: ''
						}
						stopOpacity={0.8}
					/>
					<stop
						offset='95%'
						stroke={
							trend === 'upward'
								? '#34CAA5'
								: trend === 'downward'
								? '#ED544E'
								: ''
						}
						stopOpacity={0}
					/>
				</linearGradient>
			</defs>

			<Area
				type='monotone'
				dataKey='uv'
				stroke={
					trend === 'upward' ? '#34CAA5' : trend === 'downward' ? '#ED544E' : ''
				}
				fillOpacity={1}
				fill={
					trend === 'upward'
						? '#34CAA542'
						: trend === 'downward'
						? '#ED544E42'
						: ''
				}
			/>
		</AreaChart>
	)
}
