import { RequestInit } from 'next/dist/server/web/spec-extension/request'

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
    `${process.env.NEXT_PUBLIC_NEXT_URL}/api/products/details?` +
      new URLSearchParams({
        id: productId,
      }),
    {
      cache,
      next,
    },
  )

  const product = (await response.json()) as ShowProductItem

  console.log('PRODUCT', product)

  return product
}
