import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import Stripe from 'stripe'

export interface ShowProductItem {
  id: string
  description?: string | null
  defaultPriceId: string
  imageUrl?: string
  price: string
  title: string
}

interface ShowProductsProps extends RequestInit {
  productId: string
}

export const showProducts = async ({
  productId,
  cache,
  next,
}: ShowProductsProps): Promise<ShowProductItem> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_URL}/api/products/details?id=${productId}`,
    {
      cache,
      next,
    },
  )

  const stripeProduct = (await response.json()) as Stripe.Product

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

  return product
}
