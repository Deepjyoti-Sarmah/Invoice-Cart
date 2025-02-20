"use client"

import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Popover, PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from './ui/button'
import { CalendarIcon } from 'lucide-react'
import { PopoverContent } from './ui/popover'
import { Calendar } from './ui/calendar'
import { Textarea } from './ui/textarea'

export default function CreateInvoice() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <Card className='w-full max-w-4xl mx-auto'>
      <CardContent className='p-6'>
        <div className='flex flex-col gap-1 w-fit mb-6'>
          <div className='flex items-center gap-4'>
            <Badge variant="secondary">Draft</Badge>
            <Input placeholder='text 123' />
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-6 mb-6'>
          <div>
            <Label>Invoice No.</Label>
            <div className='flex'>
              <span className='px-3 border border-r-0 rounded-l-md bg-muted flex items-center'>#</span>
              <Input className="rounded-l-none" placeholder='5' />
            </div>
          </div>

          <div>
            <Label>Currency</Label>
            <Select defaultValue='USD'>
              <SelectTrigger>
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='USD'>
                  United States Dollar -- USD
                </SelectItem>
                <SelectItem value='EUR'>
                  Euro -- EUR
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-6 mb-6'>
          <div>
            <Label>From</Label>
            <div className='space-y-2'>
              <Input placeholder='Your Name' />
              <Input placeholder='Your Email' />
              <Input placeholder='Your Address' />
            </div>
          </div>

          <div>
            <Label>To</Label>
            <div className='space-y-2'>
              <Input placeholder='Client Name' />
              <Input placeholder='Client Email' />
              <Input placeholder='Client Address' />
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-6 mb-6'>
          <div>
            <div>
              <Label>Date</Label>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon />
                  {selectedDate ? (
                    new Intl.DateTimeFormat("en-IN", {
                      dateStyle: "long"
                    }).format(selectedDate)
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  mode='single'
                  selected={selectedDate}
                  onSelect={(date) => setSelectedDate(date || new Date())}
                  fromDate={new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label>Invoice Due</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select due date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='0'>Due on Reciept</SelectItem>
                <SelectItem value='15'>Net 15</SelectItem>
                <SelectItem value='30'>Net 30</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-12 gap-4 mb-2 font-medium">
            <p className="col-span-6">Description</p>
            <p className="col-span-2">Quantity</p>
            <p className="col-span-2">Rate</p>
            <p className="col-span-2">Amount</p>
          </div>


          <div className='grid grid-cols-12 gap-4 mb-6'>
            <div className='col-span-6'>
              <Textarea
                placeholder='Item name & description'
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='number'
                placeholder='0'
              />
            </div>
            <div className='col-span-2'>
              <Input
                type='number'
                placeholder='0'
              />
            </div>
            <div className='col-span-2'>
              <Input
                disabled
              />
            </div>
          </div>
        </div>



      </CardContent>
    </Card>
  )
}

