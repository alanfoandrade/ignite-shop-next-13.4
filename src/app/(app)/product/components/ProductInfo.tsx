'use client'

import Button from '@/app/components/Button'
import { createCheckouts } from '@/services/Checkout/createCheckout'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type DetailedProduct = {
  id: string
  title: string
  price: string
  description?: string | null
  defaultPriceId: string
}

interface ProductInfoProps {
  product: DetailedProduct
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { push } = useRouter()

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const { checkoutUrl } = await createCheckouts(product.defaultPriceId)

      if (checkoutUrl) {
        push(checkoutUrl)
      }
    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')

      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-3xxl font-bold text-myGray-300">{product.title}</h1>

      <span className="mt-4 block text-3xxl text-myGreen-300">
        {product.price}
      </span>

      <p className="mt-10 text-lg leading-[1.6] text-myGray-300">
        {product.description}
      </p>

      <Button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
        Comprar agora
      </Button>
    </div>
  )
}
