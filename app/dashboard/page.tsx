import React from 'react'
import { requiredUser } from '../utils/hooks'
import DashboardBlocks from '@/components/DashboardBlocks'
import InvoiceGraph from '@/components/InvoiceGraph'
import RecentInvoices from '@/components/RecentInvoices'
import { prisma } from '../utils/db'
import EmptyState from '@/components/EmptyState'

async function getData(userId: string) {
  const data = await prisma.invoice.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true
    }
  })

  return data;
}

export default async function Dashboard() {
  const session = await requiredUser()
  const data = await getData(session.user?.id as string)

  return (
    <>
      {data.length < 1 ? (
        <EmptyState
          title='No invoice found'
          description='Create an invoice to see the right here,'
          buttontext='Create Invoice'
          href='/dashboard/invoices/create'
        />
      ) : (
        <>
          <DashboardBlocks />
          <div className='grid gap-4 lg:grid-cols-3 md:gap-8'>
            <InvoiceGraph />
            <RecentInvoices />
          </div>
        </>
      )}
    </>
  )
}

