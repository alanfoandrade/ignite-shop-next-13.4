import 'server-only'

import Stripe from 'stripe'
import { NextResponse } from 'next/server'

import { stripe } from '@/lib/stripe'

export async function GET(request: Request) {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount || 0) / 100),
      title: product.name,
    }
  })

  return NextResponse.json(products, { status: 200 })
}
