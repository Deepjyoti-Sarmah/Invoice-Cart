import React from 'react'
import { requiredUser } from '../utils/hooks'
import { signOut } from '../utils/auth'
import DashboardBlocks from '@/components/DashboardBlocks'

export default async function Dashboard() {
  const session = await requiredUser()

  return (
    <>
      <DashboardBlocks />
    </>

  )
}

