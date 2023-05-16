import Stripe from 'stripe'

export interface CreateCheckoutItem {
  checkoutUrl: string | null
}

export const createCheckouts = async (
  priceId: string,
): Promise<CreateCheckoutItem> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_URL}/api/checkout`,
    {
      method: 'POST',
      body: JSON.stringify({ priceId }),
    },
  )

  const { url } = (await response.json()) as Stripe.Checkout.Session

  return { checkoutUrl: url }
}
