import Link from 'next/link'
import Image from 'next/image'

import productImg from '@/assets/shirt-01.png'
import { showCheckoutSession } from '@/services/Checkout/showCheckoutSession'

export const metadata = {
  title: 'Compra finalizada',
  robots: {
    index: false,
  },
}

interface SuccessProps {
  searchParams: {
    session_id: string
  }
}

export default async function Success(props: SuccessProps) {
  const sessionId = props.searchParams.session_id

  const { customerName, product } = await showCheckoutSession({
    sessionId,
  })

  return (
    <main className="h-screen w-full">
      <div className="mx-auto flex h-[656px] flex-col items-center justify-center">
        <h1 className="text-3xxl font-bold text-myGray-100">Compra efetuada</h1>

        <div className="mt-16 flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1ea483] from-0% to-[#7465d4] to-100% p-1">
          <Image
            className="object-cover"
            src={product.imageUrl || productImg}
            alt=""
            width={120}
            height={110}
          />
        </div>

        <p className="mt-8 max-w-[560px] text-center text-2xl leading-[1.4] text-myGray-300">
          Uhuul <strong className="font-bold">{customerName}</strong>, sua{' '}
          <strong className="font-bold">{product.name}</strong> já está a
          caminho da sua casa.
        </p>

        <Link
          href=""
          className="mt-20 text-xl font-bold text-myGreen-500 transition-colors duration-200 hover:text-myGreen-300"
        >
          Voltar ao catálogo
        </Link>
      </div>
    </main>
  )
}
