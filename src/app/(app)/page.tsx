import camiseta01 from '../../assets/camisetas/shirt-01.png'
import camiseta02 from '../../assets/camisetas/shirt-02.png'
import camiseta03 from '../../assets/camisetas/shirt-03.png'
import camiseta04 from '../../assets/camisetas/shirt-04.png'
import ProductList from '../components/ProductList'

const products = [
  { imageUrl: camiseta01, title: 'Astronauta', price: '79,90' },
  { imageUrl: camiseta02, title: 'Astronauta Laranja', price: '79,90' },
  { imageUrl: camiseta03, title: 'Capacete', price: '79,90' },
  { imageUrl: camiseta04, title: 'Ignite', price: '79,90' },
]

export default function Home() {
  return (
    <main className="w-full">
      <div className="ml-auto flex max-w-[calc(100vw_-_((100vw_-_1180px)_/_2))]">
        <ProductList products={products} />
      </div>
    </main>
  )
}
