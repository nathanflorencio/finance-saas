'use client'

import { Chart, ChartLoading } from '@/components/chart'
import { SpendingPie, SpendingPieLoading } from '@/components/spending-pie'
import { useGetSummary } from '@/features/summary/api/use-get-summary'

export function DataCharts() {
	const { data, isLoading } = useGetSummary()

	if (isLoading) {
		return (
			<div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
				<div className="col-span-1 lg:col-span-3 xl:col-span4">
					<ChartLoading />
				</div>
				<div className="col-span-1 lg:col-span-3 xl:col-span-2">
					<SpendingPieLoading />
				</div>
			</div>
		)
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
			<div className="col-span-1 lg:col-span-3 xl:col-span4">
				<Chart data={data?.days} />
			</div>
			<div className="col-span-1 lg:col-span-3 xl:col-span-2">
				<SpendingPie data={data?.categories} />
			</div>
		</div>
	)
}
