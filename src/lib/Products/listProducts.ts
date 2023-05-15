import 'server-only'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { cache } from 'react'

export const listProducts = cache(async (): Promise<Stripe.Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  return data
})
