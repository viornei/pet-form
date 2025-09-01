import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const session_id = searchParams.get('session_id')

  if (!session_id) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.retrieve(session_id)

  return NextResponse.json({
    status: session.status,
    customer_email: session.customer_details?.email,
  })
}
