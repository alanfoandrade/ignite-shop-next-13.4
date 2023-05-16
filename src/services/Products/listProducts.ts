import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import Stripe from 'stripe'

export interface ListProductItem {
  id: string
  imageUrl?: string | null
  price: string
  title: string
}

export const listProducts = async ({
  cache,
  next,
}: RequestInit): Promise<ListProductItem[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_URL}/api/products`,
    {
      cache,
      next,
    },
  )

  const stripeProducts = (await response.json()) as Stripe.Product[]

  const products = stripeProducts.map((stripeProduct) => {
    const price = stripeProduct.default_price as Stripe.Price

    return {
      id: stripeProduct.id,
      imageUrl: stripeProduct.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount || 0) / 100),
      title: stripeProduct.name,
    }
  })

  return products
}
