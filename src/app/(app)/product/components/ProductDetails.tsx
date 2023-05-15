import { showProducts } from '@/services/Products/showProducts'
import { ProductImage } from './ProductImage'
import { ProductInfo } from './ProductInfo'

interface ProductDetailsProps {
  productId: string
}

export async function ProductDetails({ productId }: ProductDetailsProps) {
  const product = await showProducts({ productId, next: { revalidate: 60 } })

  return (
    <div className="mx-auto grid max-w-[1180px] grid-cols-2 items-stretch gap-16">
      <ProductImage imageUrl={product.imageUrl} />

      <ProductInfo product={product} />
    </div>
  )
}
