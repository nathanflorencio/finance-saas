import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from 'recharts'

import { CustomTooltip } from '@/components/custom-tooltip'
import { format } from 'date-fns'

type Props = {
	data?: {
		date: string
		income: number
		expenses: number
	}[]
}

export function LineVariant({ data }: Props) {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<LineChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					axisLine={false}
					tickLine={false}
					dataKey="date"
					tickFormatter={(value) => format(value, 'dd MMM')}
					style={{ fontSize: '12px' }}
					tickMargin={16}
				/>
				<Tooltip content={<CustomTooltip />} />
				<Line
					dot={false}
					dataKey="income"
					stroke="#3D82F6"
					strokeWidth={2}
					className="drop-shadow-sm"
				/>
				<Line
					dot={false}
					dataKey="expenses"
					stroke="#F43F5E"
					strokeWidth={2}
					className="drop-shadow-sm"
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}
