interface FetchResponse extends Response {
  checkoutUrl: string
}

export interface CreateCheckoutItem {
  checkoutUrl: string
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

  const { checkoutUrl } = (await response.json()) as FetchResponse

  return { checkoutUrl }
}
