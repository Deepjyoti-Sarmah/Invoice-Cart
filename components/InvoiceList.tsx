import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import InvoiceActions from './InvoiceActions'

export default function InvoiceList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow >
          <TableCell>#1</TableCell>
          <TableCell>Deep test</TableCell>
          <TableCell>$55.00</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>20/02/2025</TableCell>
          <TableCell className="text-right">
            <InvoiceActions />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

