import { prisma } from '@/app/utils/db'
import { requiredUser } from '@/app/utils/hooks';
import CreateInvoice from '@/components/CreateInvoice'
import React from 'react'

async function getUserData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      firstName: true,
      lastName: true,
      address: true,
      email: true
    }
  })

  return data;
}

export default async function InvoiceCreationRoute() {
  const session = await requiredUser();
  const data = await getUserData(session.user?.id as string);

  return (
    <>
      <CreateInvoice
        firstname={data?.firstName as string}
        lastname={data?.lastName as string}
        email={data?.email as string}
        address={data?.address as string}
      />
    </>
  )
}

