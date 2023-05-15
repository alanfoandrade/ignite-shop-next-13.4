import { ProductCarousel } from './ProductCarousel'

import { listProducts } from '@/services/Products/listProducts'

export async function ProductList() {
  const products = await listProducts({
    cache: 'no-store',
    next: { revalidate: 60 },
  })

  return <ProductCarousel products={products} />
}
