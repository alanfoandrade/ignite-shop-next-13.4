import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import Stripe from 'stripe'

export interface ShowCheckoutItem {
  customerName: string
  product: {
    name: string
    imageUrl?: string
  }
}

interface ShowCheckoutSessionProps extends RequestInit {
  sessionId: string
}

export const showCheckoutSession = async ({
  sessionId,
  cache,
  next,
}: ShowCheckoutSessionProps): Promise<ShowCheckoutItem> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_URL}/api/checkout/sessions?session_id=${sessionId}`,
    { cache, next },
  )

  const session = (await response.json()) as Stripe.Checkout.Session

  const customerName = session.customer_details?.name as string
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    customerName,
    product: {
      name: product.name,
      imageUrl: product.images[0],
    },
  }
}
