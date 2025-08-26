'use client'

import ActionButton from '@/components/ui/ActionButton'
import { useState } from 'react'

type Booking = {
  id: string
  date: string
  status: 'pending' | 'paid' | 'canceled'
  amount: number
}

const mockData: Booking[] = [
  { id: '1', date: '2025-09-01', status: 'pending', amount: 2000 },
  { id: '2', date: '2025-09-10', status: 'paid', amount: 1500 },
  { id: '3', date: '2025-09-15', status: 'canceled', amount: 3000 },
  { id: '4', date: '2025-09-15', status: 'canceled', amount: 6000 },

  
]

 const TableBooking = () => {
  const [bookings, setBookings] = useState<Booking[]>(mockData)

  const handlePay = async (id: string) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ bookingId: id }),
    })
    const session = await res.json()
    window.location.href = session.url // redirect to Stripe Checkout
  }

  return (
    <div className="overflow-x-auto  rounded-2xl">
      <table  className="min-h-40 max-w-120 min-w-80 rounded-2xlborder-2 border-white bg-white p-4 shadow md:min-w-120">
        <thead>
          <tr className="bg-pink-100 text-left">
            <th className="p-3 border-b">Date</th>
            <th className="p-3 border-b">Status</th>
            <th className="p-3 border-b">Amount</th>
            <th className="p-3 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="hover:bg-gray-50">
              <td className="p-3  border-b-pink-100 border-b">{b.date}</td>
              <td className="p-3 border-b-pink-100 border-b">
                {b.status === 'pending' && (
                  <span className="text-yellow-500">Pending</span>
                )}
                {b.status === 'paid' && (
                  <span className="text-green-500">Paid</span>
                )}
                {b.status === 'canceled' && (
                  <span className="text-red-400">Canceled</span>
                )}
              </td>
              <td className="p-3 b border-b-pink-100 border-b">{(b.amount / 100).toFixed(2)} $</td>
              <td className="p-3 border-b-pink-100 border-b">
                {b.status === 'pending' ? (
                  <ActionButton
                    onClick={() => handlePay(b.id)}                  >
                    Pay
                  </ActionButton>
                ) : (
                  <span className="text-gray-200">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableBooking