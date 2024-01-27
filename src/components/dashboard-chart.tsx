import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Overview } from '.'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

export const DashboardChart = () => {
	return (
		<Card className='col-span-4'>
			<CardHeader className='flex flex-row justify-between items-center'>
				<CardTitle>Sales Trends</CardTitle>
				<div className='flex items-center gap4'>
					<span>Sort by:</span>
					<Select>
						<SelectTrigger className='w-[80px] rounded-full'>
							<SelectValue placeholder='Weekly' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='daily'>Daily</SelectItem>
							<SelectItem value='weekly'>Weekly</SelectItem>
							<SelectItem value='yearly'>Yearly</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</CardHeader>
			<CardContent className='pl-2'>
				<Overview />
			</CardContent>
		</Card>
	)
}
