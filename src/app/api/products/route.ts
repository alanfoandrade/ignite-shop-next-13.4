import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function GET(request: Request) {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  return NextResponse.json(data, { status: 200 })
}
