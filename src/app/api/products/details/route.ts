import 'server-only'

import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const productId = searchParams.get('id')

  if (!productId) {
    return NextResponse.json({ error: 'Product not found.' }, { status: 400 })
  }

  const stripeProduct = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = stripeProduct.default_price as Stripe.Price

  const product = {
    id: stripeProduct.id,
    description: stripeProduct.description,
    imageUrl: stripeProduct.images[0],
    defaultPriceId: price.id,
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format((price.unit_amount || 0) / 100),
    title: stripeProduct.name,
  }

  console.log()

  return NextResponse.json(product, { status: 200 })
}
