import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function DashboardBlocks() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total revenue</CardTitle>
          <DollarSign className='size-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <h2 className='text-2xl font-bold'>$567.00</h2>
          <p className='text-xs text-muted-foreground'>Based on total volume</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Total Invoices Issued
          </CardTitle>
          <Users className='size-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <h2 className='text-2xl font-bold'>22</h2>
          <p className='text-xs text-muted-foreground'>Total Invoices Issued!</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Paid Invoices
          </CardTitle>
          <CreditCard className='size-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <h2 className='text-2xl font-bold'>12</h2>
          <p className='text-xs text-muted-foreground'>
            Total Invoices which have been paid!
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Pending Invoices
          </CardTitle>
          <Activity className='size-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <h2 className='text-2xl font-bold'>11</h2>
          <p className='text-xs text-muted-foreground'>
            Invoices which are currently pending!
          </p>
        </CardContent>
      </Card>

    </div>
  )
}

