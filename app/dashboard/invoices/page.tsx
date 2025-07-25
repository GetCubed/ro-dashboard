import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Invoices',
};

type SearchParamsPromise = Promise<{
  query?: string;
  page?: string;
}>;

type Props = {
  searchParams?: SearchParamsPromise;
};

export default async function Page ({ searchParams }: Props) {
	//simulate an error here to activate the error boundary
	// throw new Error('This is a simulated error for testing purposes.');

	const { query = '', page = '1' } = (await searchParams) || {};
	const currentPage = Number(page);
	const totalPages = await fetchInvoicesPages(query)

	return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between">
				<h1 className="text-2xl">Invoices</h1>
			</div>
			<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
				<Search placeholder="Search invoices..." />
				<CreateInvoice />
			</div>
			<Suspense key={query + currentPage}
				fallback={<InvoicesTableSkeleton />}>
				<Table query={query}
					currentPage={currentPage} />
			</Suspense>
			<div className="mt-5 flex w-full justify-center">
				<Pagination totalPages={totalPages} />
			</div>
		</div>
	);
}
