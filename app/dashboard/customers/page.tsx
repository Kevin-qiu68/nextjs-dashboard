import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import Table from '@/app/ui/customers/table';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';


  return (
    
    <Table query={query} />
  );
}