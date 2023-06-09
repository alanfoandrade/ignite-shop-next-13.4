import { Suspense } from 'react'
import { ProductList } from '@/components/ProductList'

export const metadata = {
  title: 'Produtos',
}

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="ml-auto flex max-w-[calc(100vw_-_((100vw_-_1180px)_/_2))]">
        <Suspense fallback={<p>Carregando produtos...</p>}>
          {/** @ts-expect-error Async Server Component */}
          <ProductList />
        </Suspense>
      </div>
    </main>
  )
}
