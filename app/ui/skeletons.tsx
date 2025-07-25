// Loading animation
export const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-overlay1/40 before:to-transparent rounded-xl';

export function CardSkeleton () {
	return (
		<div
			className={`${shimmer} relative overflow-hidden rounded-xl bg-surface1 p-2 shadow-sm`}>
			<div className="flex p-4">
				<div className="size-5 rounded-md bg-surface2" />
				<div className="ml-2 h-6 w-16 rounded-md bg-surface2 text-sm font-medium" />
			</div>
			<div className="flex items-center justify-center truncate rounded-xl bg-surface0 px-4 py-8">
				<div className="h-7 w-20 rounded-md bg-surface2" />
			</div>
		</div>
	);
}

export function CardsSkeleton () {
	return (
		<>
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
			<CardSkeleton />
		</>
	);
}

export function RevenueChartSkeleton () {
	return (
		<div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
			<div className="mb-4 h-8 w-36 rounded-md bg-surface1" />
			<div className="rounded-xl bg-surface1 p-4">
				<div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-surface0 p-4 sm:grid-cols-13 md:gap-4" />
				<div className="flex items-center pb-2 pt-6">
					<div className="size-5 rounded-full bg-surface2" />
					<div className="ml-2 h-4 w-20 rounded-md bg-surface2" />
				</div>
			</div>
		</div>
	);
}

export function InvoiceSkeleton () {
	return (
		<div className="flex flex-row items-center justify-between border-b border-overlay0 py-4">
			<div className="flex items-center">
				<div className="mr-2 size-8 rounded-full bg-surface2" />
				<div className="min-w-0">
					<div className="h-5 w-40 rounded-md bg-surface2" />
					<div className="mt-2 h-4 w-12 rounded-md bg-surface2" />
				</div>
			</div>
			<div className="mt-2 h-4 w-12 rounded-md bg-surface2" />
		</div>
	);
}

export function LatestInvoicesSkeleton () {
	return (
		<div
			className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}>
			<div className="mb-4 h-8 w-36 rounded-md bg-surface1" />
			<div className="flex grow flex-col justify-between rounded-xl bg-surface1 p-4">
				<div className="bg-surface0 px-6">
					<InvoiceSkeleton />
					<InvoiceSkeleton />
					<InvoiceSkeleton />
					<InvoiceSkeleton />
					<InvoiceSkeleton />
				</div>
				<div className="flex items-center pb-2 pt-6">
					<div className="size-5 rounded-full bg-surface2" />
					<div className="ml-2 h-4 w-20 rounded-md bg-surface2" />
				</div>
			</div>
		</div>
	);
}

export default function DashboardSkeleton () {
	return (
		<>
			<div
				className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-surface1`}/>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
			</div>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				<RevenueChartSkeleton />
				<LatestInvoicesSkeleton />
			</div>
		</>
	);
}

export function TableRowSkeleton () {
	return (
		<tr className="w-full border-b border-overlay0 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
			{/* Customer Name and Image */}
			<td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
				<div className="flex items-center gap-3">
					<div className="size-8 rounded-full bg-surface1"></div>
					<div className="h-6 w-24 rounded bg-surface1"></div>
				</div>
			</td>
			{/* Email */}
			<td className="whitespace-nowrap p-3">
				<div className="h-6 w-32 rounded bg-surface1"></div>
			</td>
			{/* Amount */}
			<td className="whitespace-nowrap p-3">
				<div className="h-6 w-16 rounded bg-surface1"></div>
			</td>
			{/* Date */}
			<td className="whitespace-nowrap p-3">
				<div className="h-6 w-16 rounded bg-surface1"></div>
			</td>
			{/* Status */}
			<td className="whitespace-nowrap p-3">
				<div className="h-6 w-16 rounded bg-surface1"></div>
			</td>
			{/* Actions */}
			<td className="whitespace-nowrap py-3 pl-6 pr-3">
				<div className="flex justify-end gap-3">
					<div className="size-[38px] rounded bg-surface1"></div>
					<div className="size-[38px] rounded bg-surface1"></div>
				</div>
			</td>
		</tr>
	);
}

export function InvoicesMobileSkeleton () {
	return (
		<div className="mb-2 w-full rounded-md bg-surface0 p-4">
			<div className="flex items-center justify-between border-b border-overlay0 pb-8">
				<div className="flex items-center">
					<div className="mr-2 size-8 rounded-full bg-surface1"></div>
					<div className="h-6 w-16 rounded bg-surface1"></div>
				</div>
				<div className="h-6 w-16 rounded bg-surface1"></div>
			</div>
			<div className="flex w-full items-center justify-between pt-4">
				<div>
					<div className="h-6 w-16 rounded bg-surface1"></div>
					<div className="mt-2 h-6 w-24 rounded bg-surface1"></div>
				</div>
				<div className="flex justify-end gap-2">
					<div className="size-10 rounded bg-surface1"></div>
					<div className="size-10 rounded bg-surface1"></div>
				</div>
			</div>
		</div>
	);
}

export function InvoicesTableSkeleton () {
	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-surface1 p-2 md:pt-0">
					<div className="md:hidden">
						<InvoicesMobileSkeleton />
						<InvoicesMobileSkeleton />
						<InvoicesMobileSkeleton />
						<InvoicesMobileSkeleton />
						<InvoicesMobileSkeleton />
						<InvoicesMobileSkeleton />
					</div>
					<table className="hidden min-w-full md:table">
						<thead className="rounded-lg text-left text-sm font-normal">
							<tr>
								<th scope="col"
									className="px-4 py-5 font-medium sm:pl-6">
                  Customer
								</th>
								<th scope="col"
									className="px-3 py-5 font-medium">
                  Email
								</th>
								<th scope="col"
									className="px-3 py-5 font-medium">
                  Amount
								</th>
								<th scope="col"
									className="px-3 py-5 font-medium">
                  Date
								</th>
								<th scope="col"
									className="px-3 py-5 font-medium">
                  Status
								</th>
								<th
									scope="col"
									className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
									<span className="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody className="bg-surface0">
							<TableRowSkeleton />
							<TableRowSkeleton />
							<TableRowSkeleton />
							<TableRowSkeleton />
							<TableRowSkeleton />
							<TableRowSkeleton />
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
