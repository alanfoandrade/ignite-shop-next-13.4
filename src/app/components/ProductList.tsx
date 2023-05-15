'use client'

import { useKeenSlider } from 'keen-slider/react'

import Product, { ProductItem } from './Product'

import 'keen-slider/keen-slider.min.css'

interface ProductListProps {
  products: ProductItem[]
}

export default function ProductList({ products }: ProductListProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider flex overflow-hidden">
      {products.map((product, index) => (
        <ul key={index}>
          <li>
            <Product product={product} />
          </li>
        </ul>
      ))}
    </div>
  )
}
