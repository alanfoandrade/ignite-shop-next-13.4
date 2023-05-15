import 'server-only'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { cache } from 'react'

export type ListProductItem = {
  id: string
  imageUrl?: string
  price: string
  title: string
}

export const listProducts = cache(async (): Promise<ListProductItem[]> => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  return data.map((product) => {
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
})
