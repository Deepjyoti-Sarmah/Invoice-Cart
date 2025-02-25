import React from 'react'
import { requiredUser } from '../utils/hooks'
import DashboardBlocks from '@/components/DashboardBlocks'

export default async function Dashboard() {
  const session = await requiredUser()

  return (
    <>
      <DashboardBlocks />
    </>

  )
}

