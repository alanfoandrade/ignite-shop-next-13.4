'use client'
import { useKeenSlider } from 'keen-slider/react'

import { Product, ProductItem } from './Product'

import 'keen-slider/keen-slider.min.css'

interface ProductCarouselProps {
  products: ProductItem[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
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
