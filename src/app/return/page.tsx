import { ReturnClient } from '@/components/dashboard/payments/ReturnPage'
import { Suspense } from 'react'

export default function ReturnPage() {
  return (
    <Suspense fallback={<p>Checking payment status…</p>}>
      <ReturnClient />
    </Suspense>
  )
}
