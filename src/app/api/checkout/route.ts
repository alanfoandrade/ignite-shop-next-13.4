import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { priceId } = await request.json()

  if (!priceId) {
    return NextResponse.json({ error: 'Price not found.' }, { status: 400 })
  }

  const successUrl = `${process.env.NEXT_PUBLIC_NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`

  const cancelUrl = `${process.env.NEXT_PUBLIC_NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return NextResponse.json(checkoutSession, { status: 201 })
}
