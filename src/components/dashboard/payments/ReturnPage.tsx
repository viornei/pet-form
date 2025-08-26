'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export function ReturnClient() {
  const sp = useSearchParams()
  const router = useRouter()
  const sessionId = sp.get('session_id')

  const [status, setStatus] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!sessionId) {
      setError('Missing or invalid session_id')
      return
    }

    ;(async () => {
      try {
        const res = await fetch(`/api/booking/status?session_id=${encodeURIComponent(sessionId)}`)
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
        const data = await res.json()

        setStatus(data.status)
        setEmail(data.customer_email ?? null)

        if (data.status === 'open') {
          router.replace('/checkout')
        }
      } catch (err: any) {
        console.error('Status fetch error:', err)
        setError(err.message)
      }
    })()
  }, [sessionId, router])

  if (error) return <p>Error: {error}</p>
  if (status === 'complete') {
    return (
      <section id="success">
        <div className='flex flex-col text-3xl w-100%  items-center justify-center md:min-h-160 h-lvh'>
       <span>Thanks for your booking! </span>
        <p>
          A confirmation email will be sent to {email || 'your address'}.
        </p>
        </div>
        <p></p>
      </section>
    )
  }

  return        <div className='flex flex-col text-3xl w-100%  items-center justify-center md:min-h-160 h-lvh'>
 <p>Checking payment status…</p></div>
}
