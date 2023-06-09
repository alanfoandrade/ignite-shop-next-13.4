import Image from 'next/image'
import Link from 'next/link'

import { ProductFooter } from './ProductFooter'

import productImg from '@/assets/shirt-01.png'

export type ProductItem = {
  id: string
  imageUrl?: string | null
  price: string
  title: string
}

interface ProductProps {
  product: ProductItem
}

export function Product({ product }: ProductProps) {
  return (
    <Link
      prefetch={false}
      href={`/product/${product.id}`}
      className="keen-slider__slide group relative flex h-[656px] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] from-0% to-[#7465d4] to-100% p-1"
    >
      <Image
        className="object-cover"
        src={product.imageUrl || productImg}
        alt=""
        width={520}
        height={480}
      />

      <ProductFooter product={product} />
    </Link>
  )
}
