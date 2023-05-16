import { Suspense } from 'react'
import { ProductDetails } from '@/components/ProductDetails'

export const metadata = {
  title: 'Produto',
}

interface ProductProps {
  params: {
    id: string
  }
}

export default function Product({ params }: ProductProps) {
  return (
    <main className="h-screen w-full">
      <Suspense fallback={<p>Carregando produto...</p>}>
        {/** @ts-expect-error Async Server Component */}
        <ProductDetails productId={params.id} />
      </Suspense>
    </main>
  )
}
