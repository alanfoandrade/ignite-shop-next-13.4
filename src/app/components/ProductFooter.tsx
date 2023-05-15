import { ProductItem } from './Product'

interface ProductFooterProps {
  product: ProductItem
}

export default function ProductFooter({ product }: ProductFooterProps) {
  return (
    <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
      <strong className="text-xl">{product.title}</strong>

      <span className="text-2xl font-bold text-myGreen-300 ">
        R$ {product.price}
      </span>
    </footer>
  )
}
