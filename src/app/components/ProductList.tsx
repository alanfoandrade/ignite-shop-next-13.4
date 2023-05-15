import { ProductCarousel } from './ProductCarousel'

import { listProducts } from '@/lib/Products/listProducts'

export const ProductList = async () => {
  const products = await listProducts()

  return <ProductCarousel products={products} />
}
