'use client'
import { useKeenSlider } from 'keen-slider/react'

import { Product, ProductItem } from './Product'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '@/lib/stripe'

import productImg from '../../assets/camisetas/shirt-01.png'
import Stripe from 'stripe'

export async function ProductList() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  })

  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products: ProductItem[] = data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      imageUrl: product.images[0] || productImg.src,
      price: (price.unit_amount || 0) / 100,
      title: product.name,
    }
  })

  return (
    <ul ref={sliderRef} className="keen-slider flex overflow-hidden">
      {products.map((product, index) => (
        <li key={index}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  )
}
