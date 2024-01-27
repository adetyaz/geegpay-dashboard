import { Area, AreaChart } from 'recharts'
import { downWardData, upwardData } from '@/lib/chartData'

interface SummaryChartProps {
	trend: string
}

export const SummaryChart = ({ trend }: SummaryChartProps) => {
	return (
		<AreaChart
			width={80}
			height={50}
			data={trend === 'upward' ? upwardData : downWardData}
		>
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
