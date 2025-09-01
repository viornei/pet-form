'use client'

import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/booking/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
        if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
        const data = await res.json()
        if (typeof data.clientSecret !== 'string' || !data.clientSecret.startsWith('cs_')) {
          throw new Error('Bad clientSecret from API')
        }
        setClientSecret(data.clientSecret)
      } catch (e: any) {
        console.error(e)
        setError(e.message || 'Failed to init checkout')
      }
    })()
  }, [])

  if (error) return <p>Error: {error}</p>
  if (!clientSecret) return         <div className='flex flex-col text-3xl w-100%  items-center justify-center md:min-h-160 h-lvh'>
 <p>Loading checkout…</p></div>

  return (
  <div id="checkout"  className='py-6'>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
