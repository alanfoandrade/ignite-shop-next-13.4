import Image from 'next/image'
import { ProductFooter } from './ProductFooter'

export type ProductItem = {
  id: string
  imageUrl: string
  price: number
  title: string
}

interface ProductProps {
  product: ProductItem
}

export function Product({ product }: ProductProps) {
  return (
    <a
      href=""
      className="keen-slider__slide group relative flex h-[656px] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] from-0% to-[#7465d4] to-100% p-1"
    >
      <Image
        className="object-cover"
        src={product.imageUrl}
        alt=""
        width={520}
        height={480}
      />

      <ProductFooter product={product} />
    </a>
  )
}
