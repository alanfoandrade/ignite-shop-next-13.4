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
    <div>
      <h1>Product: {`{ "id": "${params.id}" }`}</h1>
    </div>
  )
}
