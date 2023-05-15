import { ProductItem } from './Product'
import { ProductCarousel } from './ProductCarousel'
import Stripe from 'stripe'

import productImg from '../../assets/shirt-01.png'
import { listProducts } from '@/lib/Products/listProducts'

export const revalidate = 5

export const ProductList = async () => {
  const productsList = await listProducts()

  const products: ProductItem[] = productsList.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      imageUrl: product.images[0] || productImg.src,
      price: (price.unit_amount || 0) / 100,
      title: product.name,
    }
  })

  return <ProductCarousel products={products} />
}
