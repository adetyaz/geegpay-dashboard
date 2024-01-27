'use client'

import { Bar } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarController,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	BarController
)

export function Overview() {
	const data = {
		labels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sept',
			'Oct',
			'Nov',
			'Dec',
		],
		datasets: [
			{
				// label: "Data Series 1",
				backgroundColor: '#1F9AA282',
				borderColor: '#1F9AA242',
				borderWidth: 1,
				data: [
					234729, 263454, 190736, 57213, 242365, 205503, 417580, 185032, 144221,
					42866, 302427, 309374,
				],
			},
		],
	}

	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
		layout: {
			padding: {
				left: 2,
				right: 5,
				top: 10,
				bottom: 5,
			},
			margin: {
				left: 5,
				right: 5,
				top: 5,
				bottom: 5,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				border: { dash: [6, 6], display: true },
				grid: {
					display: true, // Display grid lines for the y-axis
				},
				ticks: {
					padding: 15,
				},
			},
			x: {
				beginAtZero: true,
				border: { display: true },
				grid: {
					display: false, // Display grid lines for the y-axis
				},
				ticks: {
					padding: 7,
				},
			},
		},
		elements: {
			bar: {
				borderRadius: 40,
				borderWidth: 0.7,
			},
		},
	}

	return <Bar data={data} options={options} />
}
