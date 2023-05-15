import { RequestInit } from 'next/dist/server/web/spec-extension/request'

export interface ListProductItem {
  id: string
  imageUrl?: string
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

  const products = (await response.json()) as ListProductItem[]

  return products
}
