import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const YOUR_DOMAIN = process.env.APP_URL || 'http://localhost:3000'

export async function POST(req: NextRequest) {

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    customer_email: 'customer@example.com',
    submit_type: 'donate',
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    line_items: [
      {
        price: 'price_1RygprRrsAeEv1qnAAJL5jvd',
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  })

  return NextResponse.json({ clientSecret: session.client_secret })
}
