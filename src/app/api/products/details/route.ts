import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const productId = searchParams.get('id')

  if (!productId) {
    return NextResponse.json({ error: 'Product not found.' }, { status: 400 })
  }

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  return NextResponse.json(product, { status: 200 })
}
