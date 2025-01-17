import { TableHeadSelect } from '@/app/(dashboard)/transactions/table-head-select'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

type Props = {
	headers: string[]
	body: string[][]
	selectedColumns: Record<string, string | null>
	onTableHeadSelectChange: (columnIndex: number, value: string | null) => void
}

export function ImportTable({
	headers,
	body,
	selectedColumns,
	onTableHeadSelectChange,
}: Props) {
	return (
		<div className="rounded-md border overflow-hidden">
			<Table>
				<TableHeader className="bg-muted">
					<TableRow>
						{headers.map((_item, index) => {
							return (
								<TableHead key={index}>
									<TableHeadSelect
										columnIndex={index}
										selectedColumns={selectedColumns}
										onChange={onTableHeadSelectChange}
									/>
								</TableHead>
							)
						})}
					</TableRow>
				</TableHeader>
				<TableBody>
					{body.map((row: string[], index) => {
						return (
							<TableRow key={index}>
								{row.map((cell, index) => {
									return <TableCell key={index}>{cell}</TableCell>
								})}
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</div>
	)
}
